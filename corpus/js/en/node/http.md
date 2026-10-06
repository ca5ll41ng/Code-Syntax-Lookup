---
id: "js-en-function-node-http"
language: "js"
lang: "en"
category: "function"
name: "node:http"
title: "HTTP"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/http.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-918"],"note":"请求 URL 含用户输入时为 SSRF sink"}]
---

# HTTP

<h1>HTTP</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>This module, containing both a client and server, can be imported via
<code>require('node:http')</code> (CommonJS) or <code>import * as http from 'node:http'</code> (ES module).</p>
<p>The HTTP interfaces in Node.js are designed to support many features
of the protocol which have been traditionally difficult to use.
In particular, large, possibly chunk-encoded, messages. The interface is
careful to never buffer entire requests or responses, so the
user is able to stream data.</p>
<p>HTTP message headers are represented by an object like this:</p>
<pre><code class="language-json">{ &quot;content-length&quot;: &quot;123&quot;,
  &quot;content-type&quot;: &quot;text/plain&quot;,
  &quot;connection&quot;: &quot;keep-alive&quot;,
  &quot;host&quot;: &quot;example.com&quot;,
  &quot;accept&quot;: &quot;*/*&quot; }
</code></pre>
<p>Keys are lowercased. Values are not modified.</p>
<p>In order to support the full spectrum of possible HTTP applications, the Node.js
HTTP API is very low-level. It deals with stream handling and message
parsing only. It parses a message into headers and body but it does not
parse the actual headers or the body.</p>
<p>See <a href="#messageheaders"><code>message.headers</code></a> for details on how duplicate headers are handled.</p>
<p>The raw headers as they were received are retained in the <code>rawHeaders</code>
property, which is an array of <code>[key, value, key2, value2, ...]</code>. For
example, the previous message header object might have a <code>rawHeaders</code>
list like the following:</p>
<pre><code class="language-json">[ &quot;ConTent-Length&quot;, &quot;123456&quot;,
  &quot;content-LENGTH&quot;, &quot;123&quot;,
  &quot;content-type&quot;, &quot;text/plain&quot;,
  &quot;CONNECTION&quot;, &quot;keep-alive&quot;,
  &quot;Host&quot;, &quot;example.com&quot;,
  &quot;accepT&quot;, &quot;*/*&quot; ]
</code></pre>
<h2>Class: <code>http.Agent</code></h2>
<p>An <code>Agent</code> is responsible for managing connection persistence
and reuse for HTTP clients. It maintains a queue of pending requests
for a given host and port, reusing a single socket connection for each
until the queue is empty, at which time the socket is either destroyed
or put into a pool where it is kept to be used again for requests to the
same host and port. Whether it is destroyed or pooled depends on the
<code>keepAlive</code> <a href="#new-agentoptions">option</a>.</p>
<p>Pooled connections have TCP Keep-Alive enabled for them, but servers may
still close idle connections, in which case they will be removed from the
pool and a new connection will be made when a new HTTP request is made for
that host and port. Servers may also refuse to allow multiple requests
over the same connection, in which case the connection will have to be
remade for every request and cannot be pooled. The <code>Agent</code> will still make
the requests to that server, but each one will occur over a new connection.</p>
<h3>Response ordering with connection reuse</h3>
<p>On a reused HTTP/1.1 keep-alive connection, responses are associated with
requests by their order on that connection. HTTP/1.1 keep-alive does not provide
per-request response attribution beyond that ordering. Applications that require
per-request connection isolation can use a separate <code>Agent</code>, disable keep-alive,
or pass <code>agent: false</code>.</p>
<p>When a connection is closed by the client or the server, it is removed
from the pool. Any unused sockets in the pool will be unrefed so as not
to keep the Node.js process running when there are no outstanding requests.
(see <a href="net.md#socketunref"><code>socket.unref()</code></a>).</p>
<p>It is good practice, to <a href="#agentdestroy"><code>destroy()</code></a> an <code>Agent</code> instance when it is no
longer in use, because unused sockets consume OS resources.</p>
<p>Sockets are removed from an agent when the socket emits either
a <code>'close'</code> event or an <code>'agentRemove'</code> event. When intending to keep one
HTTP request open for a long time without keeping it in the agent, something
like the following may be done:</p>
<pre><code class="language-js">http.get(options, (res) =&gt; {
  // Do stuff
}).on('socket', (socket) =&gt; {
  socket.emit('agentRemove');
});
</code></pre>
<p>An agent may also be used for an individual request. By providing
<code>{agent: false}</code> as an option to the <code>http.get()</code> or <code>http.request()</code>
functions, a one-time use <code>Agent</code> with default options will be used
for the client connection.</p>
<p><code>agent:false</code>:</p>
<pre><code class="language-js">http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false,  // Create a new agent just for this one request
}, (res) =&gt; {
  // Do stuff with response
});
</code></pre>
<p>Use <code>agent: false</code> to avoid connection reuse for a request.</p>
<h3><code>new Agent([options])</code></h3>
<ul>
<li><code>options</code> {Object} Set of configurable options to set on the agent.
Can have the following fields:
<ul>
<li><code>keepAlive</code> {boolean} Keep sockets around even when there are no
outstanding requests, so they can be used for future requests without
having to reestablish a TCP connection. Not to be confused with the
<code>keep-alive</code> value of the <code>Connection</code> header. The <code>Connection: keep-alive</code>
header is always sent when using an agent except when the <code>Connection</code>
header is explicitly specified or when the <code>keepAlive</code> and <code>maxSockets</code>
options are respectively set to <code>false</code> and <code>Infinity</code>, in which case
<code>Connection: close</code> will be used. <strong>Default:</strong> <code>false</code>.</li>
<li><code>keepAliveMsecs</code> {number} When using the <code>keepAlive</code> option, specifies
the <a href="net.md#socketsetkeepaliveenable-initialdelay-interval-count">initial delay</a>
for TCP Keep-Alive packets. Ignored when the
<code>keepAlive</code> option is <code>false</code> or <code>undefined</code>. <strong>Default:</strong> <code>1000</code>.</li>
<li><code>agentKeepAliveTimeoutBuffer</code> {number} Milliseconds to subtract from
the server-provided <code>keep-alive: timeout=...</code> hint when determining socket
expiration time. This buffer helps ensure the agent closes the socket
slightly before the server does, reducing the chance of sending a request
on a socket that’s about to be closed by the server.
<strong>Default:</strong> <code>1000</code>.</li>
<li><code>maxSockets</code> {number} Maximum number of sockets to allow per host.
If the same host opens multiple concurrent connections, each request
will use new socket until the <code>maxSockets</code> value is reached.
If the host attempts to open more connections than <code>maxSockets</code>,
the additional requests will enter into a pending request queue, and
will enter active connection state when an existing connection terminates.
This makes sure there are at most <code>maxSockets</code> active connections at
any point in time, from a given host.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>maxTotalSockets</code> {number} Maximum number of sockets allowed for
all hosts in total. Each request will use a new socket
until the maximum is reached.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>maxFreeSockets</code> {number} Maximum number of sockets per host to leave open
in a free state. Only relevant if <code>keepAlive</code> is set to <code>true</code>.
<strong>Default:</strong> <code>256</code>.</li>
<li><code>scheduling</code> {string} Scheduling strategy to apply when picking
the next free socket to use. It can be <code>'fifo'</code> or <code>'lifo'</code>.
The main difference between the two scheduling strategies is that <code>'lifo'</code>
selects the most recently used socket, while <code>'fifo'</code> selects
the least recently used socket.
In case of a low rate of request per second, the <code>'lifo'</code> scheduling
will lower the risk of picking a socket that might have been closed
by the server due to inactivity.
In case of a high rate of request per second,
the <code>'fifo'</code> scheduling will maximize the number of open sockets,
while the <code>'lifo'</code> scheduling will keep it as low as possible.
<strong>Default:</strong> <code>'lifo'</code>.</li>
<li><code>timeout</code> {number} Socket timeout in milliseconds.
This will set the timeout when the socket is created.</li>
<li><code>proxyEnv</code> {Object|undefined} Environment variables for proxy configuration.
See <a href="#built-in-proxy-support">Built-in Proxy Support</a> for details. <strong>Default:</strong> <code>undefined</code>
<ul>
<li><code>HTTP_PROXY</code> {string|undefined} URL for the proxy server that HTTP requests should use.
If undefined, no proxy is used for HTTP requests.</li>
<li><code>HTTPS_PROXY</code> {string|undefined} URL for the proxy server that HTTPS requests should use.
If undefined, no proxy is used for HTTPS requests.</li>
<li><code>NO_PROXY</code> {string|undefined} Patterns specifying the endpoints
that should not be routed through a proxy.</li>
<li><code>http_proxy</code> {string|undefined} Same as <code>HTTP_PROXY</code>. If both are set, <code>http_proxy</code> takes precedence.</li>
<li><code>https_proxy</code> {string|undefined} Same as <code>HTTPS_PROXY</code>. If both are set, <code>https_proxy</code> takes precedence.</li>
<li><code>no_proxy</code> {string|undefined} Same as <code>NO_PROXY</code>. If both are set, <code>no_proxy</code> takes precedence.</li>
</ul>
</li>
<li><code>defaultPort</code> {number} Default port to use when the port is not specified
in requests. <strong>Default:</strong> <code>80</code>.</li>
<li><code>protocol</code> {string} The protocol to use for the agent. <strong>Default:</strong> <code>'http:'</code>.</li>
</ul>
</li>
</ul>
<p><code>options</code> in <a href="net.md#socketconnectoptions-connectlistener"><code>socket.connect()</code></a> are also supported.</p>
<p>To configure any of them, a custom <a href="#class-httpagent"><code>http.Agent</code></a> instance must be created.</p>
<pre><code class="language-mjs">import { Agent, request } from 'node:http';
const keepAliveAgent = new Agent({ keepAlive: true });
options.agent = keepAliveAgent;
request(options, onResponseCallback);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const keepAliveAgent = new http.Agent({ keepAlive: true });
options.agent = keepAliveAgent;
http.request(options, onResponseCallback);
</code></pre>
<h3><code>agent.createConnection(options[, callback])</code></h3>
<ul>
<li><code>options</code> {Object} Options containing connection details. Check
<a href="net.md#netcreateconnectionoptions-connectlistener"><code>net.createConnection()</code></a> for the format of the options. For custom agents,
this object is passed to the custom <code>createConnection</code> function.</li>
<li><code>callback</code> {Function} (Optional, primarily for custom agents) A function to be
called by a custom <code>createConnection</code> implementation when the socket is
created, especially for asynchronous operations.
<ul>
<li><code>err</code> {Error | null} An error object if socket creation failed.</li>
<li><code>socket</code> {stream.Duplex} The created socket.</li>
</ul>
</li>
<li>Returns: {stream.Duplex} The created socket. This is returned by the default
implementation or by a custom synchronous <code>createConnection</code> implementation.
If a custom <code>createConnection</code> uses the <code>callback</code> for asynchronous
operation, this return value might not be the primary way to obtain the socket.</li>
</ul>
<p>Produces a socket/stream to be used for HTTP requests.</p>
<p>By default, this function behaves identically to <a href="net.md#netcreateconnectionoptions-connectlistener"><code>net.createConnection()</code></a>,
synchronously returning the created socket. The optional <code>callback</code> parameter in the
signature is <strong>not</strong> used by this default implementation.</p>
<p>However, custom agents may override this method to provide greater flexibility,
for example, to create sockets asynchronously. When overriding <code>createConnection</code>:</p>
<ol>
<li><strong>Synchronous socket creation</strong>: The overriding method can return the
socket/stream directly.</li>
<li><strong>Asynchronous socket creation</strong>: The overriding method can accept the <code>callback</code>
and pass the created socket/stream to it (e.g., <code>callback(null, newSocket)</code>).
If an error occurs during socket creation, it should be passed as the first
argument to the <code>callback</code> (e.g., <code>callback(err)</code>).</li>
</ol>
<p>The agent will call the provided <code>createConnection</code> function with <code>options</code> and
this internal <code>callback</code>. The <code>callback</code> provided by the agent has a signature
of <code>(err, stream)</code>.</p>
<h3><code>agent.keepSocketAlive(socket)</code></h3>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>Called when <code>socket</code> is detached from a request and could be persisted by the
<code>Agent</code>. Default behavior is to:</p>
<pre><code class="language-js">socket.setKeepAlive(true, this.keepAliveMsecs);
socket.unref();
return true;
</code></pre>
<p>This method can be overridden by a particular <code>Agent</code> subclass. If this
method returns a falsy value, the socket will be destroyed instead of persisting
it for use with the next request.</p>
<p>The <code>socket</code> argument can be an instance of {net.Socket}, a subclass of
{stream.Duplex}.</p>
<h3><code>agent.reuseSocket(socket, request)</code></h3>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
<li><code>request</code> {http.ClientRequest}</li>
</ul>
<p>Called when <code>socket</code> is attached to <code>request</code> after being persisted because of
the keep-alive options. Default behavior is to:</p>
<pre><code class="language-js">socket.ref();
</code></pre>
<p>This method can be overridden by a particular <code>Agent</code> subclass.</p>
<p>The <code>socket</code> argument can be an instance of {net.Socket}, a subclass of
{stream.Duplex}.</p>
<h3><code>agent.destroy()</code></h3>
<p>Destroy any sockets that are currently in use by the agent.</p>
<p>It is usually not necessary to do this. However, if using an
agent with <code>keepAlive</code> enabled, then it is best to explicitly shut down
the agent when it is no longer needed. Otherwise,
sockets might stay open for quite a long time before the server
terminates them.</p>
<h3><code>agent.freeSockets</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object which contains arrays of sockets currently awaiting use by
the agent when <code>keepAlive</code> is enabled. Do not modify.</p>
<p>Sockets in the <code>freeSockets</code> list will be automatically destroyed and
removed from the array on <code>'timeout'</code>.</p>
<h3><code>agent.getName([options])</code></h3>
<ul>
<li><code>options</code> {Object} A set of options providing information for name generation
<ul>
<li><code>host</code> {string} A domain name or IP address of the server to issue the
request to</li>
<li><code>port</code> {number} Port of remote server</li>
<li><code>localAddress</code> {string} Local interface to bind for network connections
when issuing the request</li>
<li><code>family</code> {integer} Must be 4 or 6 if this doesn't equal <code>undefined</code>.</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Get a unique name for a set of request options, to determine whether a
connection can be reused. For an HTTP agent, this returns
<code>host:port:localAddress</code> or <code>host:port:localAddress:family</code>. For an HTTPS agent,
the name includes the CA, cert, ciphers, and other HTTPS/TLS-specific options
that determine socket reusability.</p>
<h3><code>agent.maxFreeSockets</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>By default set to 256. For agents with <code>keepAlive</code> enabled, this
sets the maximum number of sockets that will be left open in the free
state.</p>
<h3><code>agent.maxSockets</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>By default set to <code>Infinity</code>. Determines how many concurrent sockets the agent
can have open per origin. Origin is the returned value of <a href="#agentgetnameoptions"><code>agent.getName()</code></a>.</p>
<h3><code>agent.maxTotalSockets</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>By default set to <code>Infinity</code>. Determines how many concurrent sockets the agent
can have open. Unlike <code>maxSockets</code>, this parameter applies across all origins.</p>
<h3><code>agent.requests</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object which contains queues of requests that have not yet been assigned to
sockets. Do not modify.</p>
<h3><code>agent.sockets</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object which contains arrays of sockets currently in use by the
agent. Do not modify.</p>
<h2>Class: <code>http.ClientRequest</code></h2>
<ul>
<li>Extends: {http.OutgoingMessage}</li>
</ul>
<p>This object is created internally and returned from <a href="#httprequestoptions-callback"><code>http.request()</code></a>. It
represents an <em>in-progress</em> request whose header has already been queued. The
header is still mutable using the <a href="#requestsetheadername-value"><code>setHeader(name, value)</code></a>,
<a href="#requestgetheadername"><code>getHeader(name)</code></a>, <a href="#requestremoveheadername"><code>removeHeader(name)</code></a> API. The actual header will
be sent along with the first data chunk or when calling <a href="#requestenddata-encoding-callback"><code>request.end()</code></a>.</p>
<p>To get the response, add a listener for <a href="#event-response"><code>'response'</code></a> to the request object.
<a href="#event-response"><code>'response'</code></a> will be emitted from the request object when the response
headers have been received. The <a href="#event-response"><code>'response'</code></a> event is executed with one
argument which is an instance of <a href="#class-httpincomingmessage"><code>http.IncomingMessage</code></a>.</p>
<p>During the <a href="#event-response"><code>'response'</code></a> event, one can add listeners to the
response object; particularly to listen for the <code>'data'</code> event.</p>
<p>If no <a href="#event-response"><code>'response'</code></a> handler is added, then the response will be
entirely discarded. However, if a <a href="#event-response"><code>'response'</code></a> event handler is added,
then the data from the response object <strong>must</strong> be consumed, either by
calling <code>response.read()</code> whenever there is a <code>'readable'</code> event, or
by adding a <code>'data'</code> handler, or by calling the <code>.resume()</code> method.
Until the data is consumed, the <code>'end'</code> event will not fire. Also, until
the data is read it will consume memory that can eventually lead to a
'process out of memory' error.</p>
<p>For backward compatibility, <code>res</code> will only emit <code>'error'</code> if there is an
<code>'error'</code> listener registered.</p>
<p>Set <code>Content-Length</code> header to limit the response body size.
If <a href="#responsestrictcontentlength"><code>response.strictContentLength</code></a> is set to <code>true</code>, mismatching the
<code>Content-Length</code> header value will result in an <code>Error</code> being thrown,
identified by <code>code:</code> <a href="errors.md#err_http_content_length_mismatch"><code>'ERR_HTTP_CONTENT_LENGTH_MISMATCH'</code></a>.</p>
<p><code>Content-Length</code> value should be in bytes, not characters. Use
<a href="buffer.md#static-method-bufferbytelengthstring-encoding"><code>Buffer.byteLength()</code></a> to determine the length of the body in bytes.</p>
<h3>Event: <code>'abort'</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Listen for the <code>'close'</code> event instead.</p>
</blockquote>
<p>Emitted when the request has been aborted by the client. This event is only
emitted on the first call to <code>abort()</code>.</p>
<h3>Event: <code>'close'</code></h3>
<p>Indicates that the request is completed, or its underlying connection was
terminated prematurely (before the response completion).</p>
<h3>Event: <code>'connect'</code></h3>
<ul>
<li><code>response</code> {http.IncomingMessage}</li>
<li><code>socket</code> {stream.Duplex}</li>
<li><code>head</code> {Buffer}</li>
</ul>
<p>Emitted each time a server responds to a request with a <code>CONNECT</code> method. If
this event is not being listened for, clients receiving a <code>CONNECT</code> method will
have their connections closed.</p>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<p>A client and server pair demonstrating how to listen for the <code>'connect'</code> event:</p>
<pre><code class="language-mjs">import { createServer, request } from 'node:http';
import { connect } from 'node:net';
import { URL } from 'node:url';

// Create an HTTP tunneling proxy
const proxy = createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, clientSocket, head) =&gt; {
  // Connect to an origin server
  const { port, hostname } = new URL(`http://${req.url}`);
  const serverSocket = connect(port || 80, hostname, () =&gt; {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});

// Now that proxy is running
proxy.listen(1337, '127.0.0.1', () =&gt; {

  // Make a request to a tunneling proxy
  const options = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80',
  };

  const req = request(options);
  req.end();

  req.on('connect', (res, socket, head) =&gt; {
    console.log('got connected!');

    // Make a request over an HTTP tunnel
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) =&gt; {
      console.log(chunk.toString());
    });
    socket.on('end', () =&gt; {
      proxy.close();
    });
  });
});
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const net = require('node:net');
const { URL } = require('node:url');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
proxy.on('connect', (req, clientSocket, head) =&gt; {
  // Connect to an origin server
  const { port, hostname } = new URL(`http://${req.url}`);
  const serverSocket = net.connect(port || 80, hostname, () =&gt; {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node.js-Proxy\r\n' +
                    '\r\n');
    serverSocket.write(head);
    serverSocket.pipe(clientSocket);
    clientSocket.pipe(serverSocket);
  });
});

// Now that proxy is running
proxy.listen(1337, '127.0.0.1', () =&gt; {

  // Make a request to a tunneling proxy
  const options = {
    port: 1337,
    host: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80',
  };

  const req = http.request(options);
  req.end();

  req.on('connect', (res, socket, head) =&gt; {
    console.log('got connected!');

    // Make a request over an HTTP tunnel
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', (chunk) =&gt; {
      console.log(chunk.toString());
    });
    socket.on('end', () =&gt; {
      proxy.close();
    });
  });
});
</code></pre>
<h3>Event: <code>'continue'</code></h3>
<p>Emitted when the server sends a '100 Continue' HTTP response, usually because
the request contained 'Expect: 100-continue'. This is an instruction that
the client should send the request body.</p>
<h3>Event: <code>'finish'</code></h3>
<p>Emitted when the request has been sent. More specifically, this event is emitted
when the last segment of the request headers and body have been handed off to
the operating system for transmission over the network. It does not imply that
the server has received anything yet.</p>
<h3>Event: <code>'information'</code></h3>
<ul>
<li><code>info</code> {Object}
<ul>
<li><code>httpVersion</code> {string}</li>
<li><code>httpVersionMajor</code> {integer}</li>
<li><code>httpVersionMinor</code> {integer}</li>
<li><code>statusCode</code> {integer}</li>
<li><code>statusMessage</code> {string}</li>
<li><code>headers</code> {Object}</li>
<li><code>rawHeaders</code> {string[]}</li>
</ul>
</li>
</ul>
<p>Emitted when the server sends a 1xx intermediate response (excluding 101
Upgrade). The listeners of this event will receive an object containing the
HTTP version, status code, status message, key-value headers object,
and array with the raw header names followed by their respective values.</p>
<pre><code class="language-mjs">import { request } from 'node:http';

const options = {
  host: '127.0.0.1',
  port: 8080,
  path: '/length_request',
};

// Make a request
const req = request(options);
req.end();

req.on('information', (info) =&gt; {
  console.log(`Got information prior to main response: ${info.statusCode}`);
});
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

const options = {
  host: '127.0.0.1',
  port: 8080,
  path: '/length_request',
};

// Make a request
const req = http.request(options);
req.end();

req.on('information', (info) =&gt; {
  console.log(`Got information prior to main response: ${info.statusCode}`);
});
</code></pre>
<p>101 Upgrade statuses do not fire this event due to their break from the
traditional HTTP request/response chain, such as web sockets, in-place TLS
upgrades, or HTTP 2.0. To be notified of 101 Upgrade notices, listen for the
<a href="#event-upgrade"><code>'upgrade'</code></a> event instead.</p>
<h3>Event: <code>'response'</code></h3>
<ul>
<li><code>response</code> {http.IncomingMessage}</li>
</ul>
<p>Emitted when a response is received to this request. This event is emitted only
once.</p>
<h3>Event: <code>'socket'</code></h3>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<h3>Event: <code>'timeout'</code></h3>
<p>Emitted when the underlying socket times out from inactivity. This only notifies
that the socket has been idle. The request must be destroyed manually.</p>
<p>See also: <a href="#requestsettimeouttimeout-callback"><code>request.setTimeout()</code></a>.</p>
<h3>Event: <code>'upgrade'</code></h3>
<ul>
<li><code>response</code> {http.IncomingMessage}</li>
<li><code>stream</code> {stream.Duplex}</li>
<li><code>head</code> {Buffer}</li>
</ul>
<p>Emitted each time a server responds to a request with an upgrade. If this
event is not being listened for and the response status code is 101 Switching
Protocols, clients receiving an upgrade header will have their connections
closed.</p>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<p>A client server pair demonstrating how to listen for the <code>'upgrade'</code> event.</p>
<pre><code class="language-mjs">import http from 'node:http';
import process from 'node:process';

// Create an HTTP server
const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
server.on('upgrade', (req, stream, head) =&gt; {
  stream.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  stream.pipe(stream); // echo back
});

// Now that server is running
server.listen(1337, '127.0.0.1', () =&gt; {

  // make a request
  const options = {
    port: 1337,
    host: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket',
    },
  };

  const req = http.request(options);
  req.end();

  req.on('upgrade', (res, stream, upgradeHead) =&gt; {
    console.log('got upgraded!');
    stream.end();
    process.exit(0);
  });
});
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

// Create an HTTP server
const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});
server.on('upgrade', (req, stream, head) =&gt; {
  stream.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');

  stream.pipe(stream); // echo back
});

// Now that server is running
server.listen(1337, '127.0.0.1', () =&gt; {

  // make a request
  const options = {
    port: 1337,
    host: '127.0.0.1',
    headers: {
      'Connection': 'Upgrade',
      'Upgrade': 'websocket',
    },
  };

  const req = http.request(options);
  req.end();

  req.on('upgrade', (res, stream, upgradeHead) =&gt; {
    console.log('got upgraded!');
    stream.end();
    process.exit(0);
  });
});
</code></pre>
<h3><code>request.abort()</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="#requestdestroyerror"><code>request.destroy()</code></a> instead.</p>
</blockquote>
<p>Marks the request as aborting. Calling this will cause remaining data
in the response to be dropped and the socket to be destroyed.</p>
<h3><code>request.aborted</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Check <a href="#requestdestroyed"><code>request.destroyed</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>request.aborted</code> property will be <code>true</code> if the request has
been aborted.</p>
<h3><code>request.connection</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#requestsocket"><code>request.socket</code></a>.</p>
</blockquote>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>See <a href="#requestsocket"><code>request.socket</code></a>.</p>
<h3><code>request.cork()</code></h3>
<p>See <a href="stream.md#writablecork"><code>writable.cork()</code></a>.</p>
<h3><code>request.end([data[, encoding]][, callback])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {this}</li>
</ul>
<p>Finishes sending the request. If any parts of the body are
unsent, it will flush them to the stream. If the request is
chunked, this will send the terminating <code>'0\r\n\r\n'</code>.</p>
<p>If <code>data</code> is specified, it is equivalent to calling
<a href="#requestwritechunk-encoding-callback"><code>request.write(data, encoding)</code></a> followed by <code>request.end(callback)</code>.</p>
<p>If <code>callback</code> is specified, it will be called when the request stream
is finished.</p>
<h3><code>request.destroy([error])</code></h3>
<ul>
<li><code>error</code> {Error} Optional, an error to emit with <code>'error'</code> event.</li>
<li>Returns: {this}</li>
</ul>
<p>Destroy the request. Optionally emit an <code>'error'</code> event,
and emit a <code>'close'</code> event. Calling this will cause remaining data
in the response to be dropped, and the socket to be destroyed if used,
or returned to the corresponding Agent pool otherwise if possible.</p>
<p>See <a href="stream.md#writabledestroyerror"><code>writable.destroy()</code></a> for further details.</p>
<h4><code>request.destroyed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> after <a href="#requestdestroyerror"><code>request.destroy()</code></a> has been called.</p>
<p>See <a href="stream.md#writabledestroyed"><code>writable.destroyed</code></a> for further details.</p>
<h3><code>request.finished</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#requestwritableended"><code>request.writableEnded</code></a>.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>request.finished</code> property will be <code>true</code> if <a href="#requestenddata-encoding-callback"><code>request.end()</code></a>
has been called. <code>request.end()</code> will automatically be called if the
request was initiated via <a href="#httpgetoptions-callback"><code>http.get()</code></a>.</p>
<h3><code>request.flushHeaders()</code></h3>
<p>Flushes the request headers.</p>
<p>For efficiency reasons, Node.js normally buffers the request headers until
<code>request.end()</code> is called or the first chunk of request data is written. It
then tries to pack the request headers and data into a single TCP packet.</p>
<p>That's usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. <code>request.flushHeaders()</code> bypasses
the optimization and kickstarts the request.</p>
<h3><code>request.getHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {any}</li>
</ul>
<p>Reads out a header on the request. The name is case-insensitive.
The type of the return value depends on the arguments provided to
<a href="#requestsetheadername-value"><code>request.setHeader()</code></a>.</p>
<pre><code class="language-js">request.setHeader('content-type', 'text/html');
request.setHeader('Content-Length', Buffer.byteLength(body));
request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
const contentType = request.getHeader('Content-Type');
// 'contentType' is 'text/html'
const contentLength = request.getHeader('Content-Length');
// 'contentLength' is of type number
const cookie = request.getHeader('Cookie');
// 'cookie' is of type string[]
</code></pre>
<h3><code>request.getHeaderNames()</code></h3>
<ul>
<li>Returns: {string[]}</li>
</ul>
<p>Returns an array containing the unique names of the current outgoing headers.
All header names are lowercase.</p>
<pre><code class="language-js">request.setHeader('Foo', 'bar');
request.setHeader('Cookie', ['foo=bar', 'bar=baz']);

const headerNames = request.getHeaderNames();
// headerNames === ['foo', 'cookie']
</code></pre>
<h3><code>request.getHeaders()</code></h3>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns a shallow copy of the current outgoing headers. Since a shallow copy
is used, array values may be mutated without additional calls to various
header-related http module methods. The keys of the returned object are the
header names and the values are the respective header values. All header names
are lowercase.</p>
<p>The object returned by the <code>request.getHeaders()</code> method <em>does not</em>
prototypically inherit from the JavaScript <code>Object</code>. This means that typical
<code>Object</code> methods such as <code>obj.toString()</code>, <code>obj.hasOwnProperty()</code>, and others
are not defined and <em>will not work</em>.</p>
<pre><code class="language-js">request.setHeader('Foo', 'bar');
request.setHeader('Cookie', ['foo=bar', 'bar=baz']);

const headers = request.getHeaders();
// headers === { foo: 'bar', 'cookie': ['foo=bar', 'bar=baz'] }
</code></pre>
<h3><code>request.getRawHeaderNames()</code></h3>
<ul>
<li>Returns: {string[]}</li>
</ul>
<p>Returns an array containing the unique names of the current outgoing raw
headers. Header names are returned with their exact casing being set.</p>
<pre><code class="language-js">request.setHeader('Foo', 'bar');
request.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headerNames = request.getRawHeaderNames();
// headerNames === ['Foo', 'Set-Cookie']
</code></pre>
<h3><code>request.hasHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the header identified by <code>name</code> is currently set in the
outgoing headers. The header name matching is case-insensitive.</p>
<pre><code class="language-js">const hasContentType = request.hasHeader('content-type');
</code></pre>
<h3><code>request.maxHeadersCount</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>1000</code></li>
</ul>
<p>Limits the maximum response headers count. Responses exceeding this limit are
rejected with an <a href="errors.md#hpe_header_overflow"><code>HPE_HEADER_OVERFLOW</code></a> error. If set to <code>0</code>, no limit will
be applied.</p>
<h3><code>request.path</code></h3>
<ul>
<li>Type: {string} The request path.</li>
</ul>
<h3><code>request.method</code></h3>
<ul>
<li>Type: {string} The request method.</li>
</ul>
<h3><code>request.host</code></h3>
<ul>
<li>Type: {string} The request host.</li>
</ul>
<h3><code>request.protocol</code></h3>
<ul>
<li>Type: {string} The request protocol.</li>
</ul>
<h3><code>request.removeHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
</ul>
<p>Removes a header that's already defined into headers object.</p>
<pre><code class="language-js">request.removeHeader('Content-Type');
</code></pre>
<h3><code>request.reusedSocket</code></h3>
<ul>
<li>Type: {boolean} Whether the request is sent through a reused socket.</li>
</ul>
<p>When sending request through a keep-alive enabled agent, the underlying socket
might be reused. But if server closes connection at unfortunate time, client
may run into a 'ECONNRESET' error.</p>
<pre><code class="language-mjs">import http from 'node:http';
const agent = new http.Agent({ keepAlive: true });

// Server has a 5 seconds keep-alive timeout by default
http
  .createServer((req, res) =&gt; {
    res.write('hello\n');
    res.end();
  })
  .listen(3000);

setInterval(() =&gt; {
  // Adapting a keep-alive agent
  http.get('http://localhost:3000', { agent }, (res) =&gt; {
    res.on('data', (data) =&gt; {
      // Do nothing
    });
  });
}, 5000); // Sending request on 5s interval so it's easy to hit idle timeout
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const agent = new http.Agent({ keepAlive: true });

// Server has a 5 seconds keep-alive timeout by default
http
  .createServer((req, res) =&gt; {
    res.write('hello\n');
    res.end();
  })
  .listen(3000);

setInterval(() =&gt; {
  // Adapting a keep-alive agent
  http.get('http://localhost:3000', { agent }, (res) =&gt; {
    res.on('data', (data) =&gt; {
      // Do nothing
    });
  });
}, 5000); // Sending request on 5s interval so it's easy to hit idle timeout
</code></pre>
<p>By marking a request whether it reused socket or not, we can do
automatic error retry base on it.</p>
<pre><code class="language-mjs">import http from 'node:http';
const agent = new http.Agent({ keepAlive: true });

function retriableRequest() {
  const req = http
    .get('http://localhost:3000', { agent }, (res) =&gt; {
      // ...
    })
    .on('error', (err) =&gt; {
      // Check if retry is needed
      if (req.reusedSocket &amp;&amp; err.code === 'ECONNRESET') {
        retriableRequest();
      }
    });
}

retriableRequest();
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const agent = new http.Agent({ keepAlive: true });

function retriableRequest() {
  const req = http
    .get('http://localhost:3000', { agent }, (res) =&gt; {
      // ...
    })
    .on('error', (err) =&gt; {
      // Check if retry is needed
      if (req.reusedSocket &amp;&amp; err.code === 'ECONNRESET') {
        retriableRequest();
      }
    });
}

retriableRequest();
</code></pre>
<h3><code>request.setHeader(name, value)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {any}</li>
</ul>
<p>Sets a single header value for headers object. If this header already exists in
the to-be-sent headers, its value will be replaced. Use an array of strings
here to send multiple headers with the same name. Non-string values will be
stored without modification. Therefore, <a href="#requestgetheadername"><code>request.getHeader()</code></a> may return
non-string values. However, the non-string values will be converted to strings
for network transmission.</p>
<pre><code class="language-js">request.setHeader('Content-Type', 'application/json');
</code></pre>
<p>or</p>
<pre><code class="language-js">request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
</code></pre>
<p>When the value is a string an exception will be thrown if it contains
characters outside the <code>latin1</code> encoding.</p>
<p>If you need to pass UTF-8 characters in the value please encode the value
using the <a href="https://www.rfc-editor.org/rfc/rfc8187.txt">RFC 8187</a> standard.</p>
<pre><code class="language-js">const filename = 'Rock 🎵.txt';
request.setHeader('Content-Disposition', `attachment; filename*=utf-8''${encodeURIComponent(filename)}`);
</code></pre>
<h3><code>request.setNoDelay([noDelay])</code></h3>
<ul>
<li><code>noDelay</code> {boolean}</li>
</ul>
<p>Once a socket is assigned to this request and is connected
<a href="net.md#socketsetnodelaynodelay"><code>socket.setNoDelay()</code></a> will be called.</p>
<h3><code>request.setSocketKeepAlive([enable][, initialDelay])</code></h3>
<ul>
<li><code>enable</code> {boolean}</li>
<li><code>initialDelay</code> {number}</li>
</ul>
<p>Once a socket is assigned to this request and is connected
<a href="net.md#socketsetkeepalive"><code>socket.setKeepAlive()</code></a> will be called.</p>
<h3><code>request.setTimeout(timeout[, callback])</code></h3>
<ul>
<li><code>timeout</code> {number} Milliseconds before a request times out.</li>
<li><code>callback</code> {Function} Optional function to be called when a timeout occurs.
Same as binding to the <code>'timeout'</code> event.</li>
<li>Returns: {http.ClientRequest}</li>
</ul>
<p>Once a socket is assigned to this request and is connected
<a href="net.md#socketsettimeouttimeout-callback"><code>socket.setTimeout()</code></a> will be called.</p>
<h3><code>request.socket</code></h3>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>Reference to the underlying socket. Usually users will not want to access
this property. In particular, the socket will not emit <code>'readable'</code> events
because of how the protocol parser attaches to the socket.</p>
<pre><code class="language-mjs">import http from 'node:http';
const options = {
  host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) =&gt; {
  const ip = req.socket.localAddress;
  const port = req.socket.localPort;
  console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // Consume response object
});
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const options = {
  host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) =&gt; {
  const ip = req.socket.localAddress;
  const port = req.socket.localPort;
  console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // Consume response object
});
</code></pre>
<p>This property is guaranteed to be an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specified a socket
type other than {net.Socket}.</p>
<h3><code>request.uncork()</code></h3>
<p>See <a href="stream.md#writableuncork"><code>writable.uncork()</code></a>.</p>
<h3><code>request.writableEnded</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> after <a href="#requestenddata-encoding-callback"><code>request.end()</code></a> has been called. This property
does not indicate whether the data has been flushed, for this use
<a href="#requestwritablefinished"><code>request.writableFinished</code></a> instead.</p>
<h3><code>request.writableFinished</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if all data has been flushed to the underlying system, immediately
before the <a href="#event-finish"><code>'finish'</code></a> event is emitted.</p>
<h3><code>request.write(chunk[, encoding][, callback])</code></h3>
<ul>
<li><code>chunk</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Sends a chunk of the body. This method can be called multiple times. If no
<code>Content-Length</code> is set, data will automatically be encoded in HTTP Chunked
transfer encoding, so that server knows when the data ends. The
<code>Transfer-Encoding: chunked</code> header is added. Calling <a href="#requestenddata-encoding-callback"><code>request.end()</code></a>
is necessary to finish sending the request.</p>
<p>The <code>encoding</code> argument is optional and only applies when <code>chunk</code> is a string.
Defaults to <code>'utf8'</code>.</p>
<p>The <code>callback</code> argument is optional and will be called when this chunk of data
is flushed, but only if the chunk is non-empty.</p>
<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel
buffer. Returns <code>false</code> if all or part of the data was queued in user memory.
<code>'drain'</code> will be emitted when the buffer is free again.</p>
<p>When <code>write</code> function is called with empty string or buffer, it does
nothing and waits for more input.</p>
<h2>Class: <code>http.Server</code></h2>
<ul>
<li>Extends: {net.Server}</li>
</ul>
<h3>Event: <code>'checkContinue'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
</ul>
<p>Emitted each time a request with an HTTP <code>Expect: 100-continue</code> is received.
If this event is not listened for, the server will automatically respond
with a <code>100 Continue</code> as appropriate.</p>
<p>Handling this event involves calling <a href="#responsewritecontinue"><code>response.writeContinue()</code></a> if the
client should continue to send the request body, or generating an appropriate
HTTP response (e.g. 400 Bad Request) if the client should not continue to send
the request body.</p>
<p>When this event is emitted and handled, the <a href="#event-request"><code>'request'</code></a> event will
not be emitted.</p>
<h3>Event: <code>'checkExpectation'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
</ul>
<p>Emitted each time a request with an HTTP <code>Expect</code> header is received, where the
value is not <code>100-continue</code>. If this event is not listened for, the server will
automatically respond with a <code>417 Expectation Failed</code> as appropriate.</p>
<p>When this event is emitted and handled, the <a href="#event-request"><code>'request'</code></a> event will
not be emitted.</p>
<h3>Event: <code>'clientError'</code></h3>
<ul>
<li><code>exception</code> {Error}</li>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>If a client connection emits an <code>'error'</code> event, it will be forwarded here.
Listener of this event is responsible for closing/destroying the underlying
socket. For example, one may wish to more gracefully close the socket with a
custom HTTP response instead of abruptly severing the connection. The socket
<strong>must be closed or destroyed</strong> before the listener ends.</p>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<p>Default behavior is to try close the socket with an HTTP '400 Bad Request',
or an HTTP '431 Request Header Fields Too Large' in the case of an
<a href="errors.md#hpe_header_overflow"><code>HPE_HEADER_OVERFLOW</code></a> error. If the socket is not writable or headers
of the current attached <a href="#class-httpserverresponse"><code>http.ServerResponse</code></a> has been sent, it is
immediately destroyed.</p>
<p><code>socket</code> is the <a href="net.md#class-netsocket"><code>net.Socket</code></a> object that the error originated from.</p>
<pre><code class="language-mjs">import http from 'node:http';

const server = http.createServer((req, res) =&gt; {
  res.end();
});
server.on('clientError', (err, socket) =&gt; {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

const server = http.createServer((req, res) =&gt; {
  res.end();
});
server.on('clientError', (err, socket) =&gt; {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
</code></pre>
<p>When the <code>'clientError'</code> event occurs, there is no <code>request</code> or <code>response</code>
object, so any HTTP response sent, including response headers and payload,
<em>must</em> be written directly to the <code>socket</code> object. Care must be taken to
ensure the response is a properly formatted HTTP response message.</p>
<p><code>err</code> is an instance of <code>Error</code> with two extra columns:</p>
<ul>
<li><code>bytesParsed</code>: the bytes count of request packet that Node.js may have parsed
correctly;</li>
<li><code>rawPacket</code>: the raw packet of current request.</li>
</ul>
<p>In some cases, the client has already received the response and/or the socket
has already been destroyed, like in case of <code>ECONNRESET</code> errors. Before
trying to send data to the socket, it is better to check that it is still
writable.</p>
<pre><code class="language-js">server.on('clientError', (err, socket) =&gt; {
  if (err.code === 'ECONNRESET' || !socket.writable) {
    return;
  }

  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
</code></pre>
<h3>Event: <code>'close'</code></h3>
<p>Emitted when the server closes.</p>
<h3>Event: <code>'connect'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage} Arguments for the HTTP request, as it is in
the <a href="#event-request"><code>'request'</code></a> event</li>
<li><code>socket</code> {stream.Duplex} Network socket between the server and client</li>
<li><code>head</code> {Buffer} The first packet of the tunneling stream (may be empty)</li>
</ul>
<p>Emitted each time a client requests an HTTP <code>CONNECT</code> method. If this event is
not listened for, then clients requesting a <code>CONNECT</code> method will have their
connections closed.</p>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<p>After this event is emitted, the request's socket will not have a <code>'data'</code>
event listener, meaning it will need to be bound in order to handle data
sent to the server on that socket.</p>
<h3>Event: <code>'connection'</code></h3>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>This event is emitted when a new TCP stream is established. <code>socket</code> is
typically an object of type <a href="net.md#class-netsocket"><code>net.Socket</code></a>. Usually users will not want to
access this event. In particular, the socket will not emit <code>'readable'</code> events
because of how the protocol parser attaches to the socket. The <code>socket</code> can
also be accessed at <code>request.socket</code>.</p>
<p>This event can also be explicitly emitted by users to inject connections
into the HTTP server. In that case, any <a href="stream.md#class-streamduplex"><code>Duplex</code></a> stream can be passed.</p>
<p>If <code>socket.setTimeout()</code> is called here, the timeout will be replaced with
<code>server.keepAliveTimeout</code> when the socket has served a request (if
<code>server.keepAliveTimeout</code> is non-zero).</p>
<p>This event is guaranteed to be passed an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specifies a socket
type other than {net.Socket}.</p>
<h3>Event: <code>'dropRequest'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage} Arguments for the HTTP request, as it is in
the <a href="#event-request"><code>'request'</code></a> event</li>
<li><code>socket</code> {stream.Duplex} Network socket between the server and client</li>
</ul>
<p>When the number of requests on a socket reaches the threshold of
<code>server.maxRequestsPerSocket</code>, the server will drop new requests
and emit <code>'dropRequest'</code> event instead, then send <code>503</code> to client.</p>
<h3>Event: <code>'request'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
</ul>
<p>Emitted each time there is a request. There may be multiple requests
per connection (in the case of HTTP Keep-Alive connections).</p>
<h3>Event: <code>'upgrade'</code></h3>
<ul>
<li><code>request</code> {http.IncomingMessage} Arguments for the HTTP request, as it is in
the <a href="#event-request"><code>'request'</code></a> event</li>
<li><code>stream</code> {stream.Duplex} The upgraded stream between the server and client</li>
<li><code>head</code> {Buffer} The first packet of the upgraded stream (may be empty)</li>
</ul>
<p>Emitted each time a client's HTTP upgrade request is accepted. By default
all HTTP upgrade requests are ignored (i.e. only regular <code>'request'</code> events
are emitted, sticking with the normal HTTP request/response flow) unless you
listen to this event, in which case they are all accepted (i.e. the <code>'upgrade'</code>
event is emitted instead, and future communication must handled directly
through the raw stream). You can control this more precisely by using the
server <code>shouldUpgradeCallback</code> option.</p>
<p>Listening to this event is optional and clients cannot insist on a protocol
change.</p>
<p>If an upgrade is accepted by <code>shouldUpgradeCallback</code> but no event handler
is registered then the socket will be destroyed, resulting in an immediate
connection closure for the client.</p>
<p>In the uncommon case that the incoming request has a body, this body will be
parsed as normal, separate to the upgrade stream, and the raw stream data will
only begin after it has completed. To ensure that reading from the stream isn't
blocked by waiting for the request body to be read, any reads on the stream
will start the request body flowing automatically. If you want to read the
request body, ensure that you do so (i.e. you attach <code>'data'</code> listeners)
before starting to read from the upgraded stream.</p>
<p>The stream argument will typically be the {net.Socket} instance used by the
request, but in some cases (such as with a request body) it may be a duplex
stream. If required, you can access the raw connection underlying the request
via <a href="#requestsocket"><code>request.socket</code></a>, which is guaranteed to be an instance of {net.Socket}
unless the user specified another socket type.</p>
<h3><code>server.close([callback])</code></h3>
<ul>
<li><code>callback</code> {Function}</li>
</ul>
<p>Stops the server from accepting new connections and closes all connections
connected to this server which are not sending a request or waiting for
a response.
See <a href="net.md#serverclosecallback"><code>net.Server.close()</code></a>.</p>
<pre><code class="language-js">const http = require('node:http');

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
// Close the server after 10 seconds
setTimeout(() =&gt; {
  server.close(() =&gt; {
    console.log('server on port 8000 closed successfully');
  });
}, 10000);
</code></pre>
<h3><code>server.closeAllConnections()</code></h3>
<p>Closes all established HTTP(S) connections connected to this server, including
active connections connected to this server which are sending a request or
waiting for a response. This does <em>not</em> destroy sockets upgraded to a different
protocol, such as WebSocket or HTTP/2.</p>
<blockquote>
<p>This is a forceful way of closing all connections and should be used with
caution. Whenever using this in conjunction with <code>server.close</code>, calling this
<em>after</em> <code>server.close</code> is recommended as to avoid race conditions where new
connections are created between a call to this and a call to <code>server.close</code>.</p>
</blockquote>
<pre><code class="language-js">const http = require('node:http');

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
// Close the server after 10 seconds
setTimeout(() =&gt; {
  server.close(() =&gt; {
    console.log('server on port 8000 closed successfully');
  });
  // Closes all connections, ensuring the server closes successfully
  server.closeAllConnections();
}, 10000);
</code></pre>
<h3><code>server.closeIdleConnections()</code></h3>
<p>Closes all connections connected to this server which are not sending a request
or waiting for a response.</p>
<blockquote>
<p>Starting with Node.js 19.0.0, there's no need for calling this method in
conjunction with <code>server.close</code> to reap <code>keep-alive</code> connections. Using it
won't cause any harm though, and it can be useful to ensure backwards
compatibility for libraries and applications that need to support versions
older than 19.0.0. Whenever using this in conjunction with <code>server.close</code>,
calling this <em>after</em> <code>server.close</code> is recommended as to avoid race
conditions where new connections are created between a call to this and a
call to <code>server.close</code>.</p>
</blockquote>
<pre><code class="language-js">const http = require('node:http');

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
// Close the server after 10 seconds
setTimeout(() =&gt; {
  server.close(() =&gt; {
    console.log('server on port 8000 closed successfully');
  });
  // Closes idle connections, such as keep-alive connections. Server will close
  // once remaining active connections are terminated
  server.closeIdleConnections();
}, 10000);
</code></pre>
<h3><code>server.headersTimeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> The minimum between <a href="#serverrequesttimeout"><code>server.requestTimeout</code></a> or <code>60000</code>.</li>
</ul>
<p>Limit the amount of time the parser will wait to receive the complete HTTP
headers.</p>
<p>If the timeout expires, the server responds with status 408 without
forwarding the request to the request listener and then closes the connection.</p>
<p>It must be set to a non-zero value (e.g. 120 seconds) to protect against
potential Denial-of-Service attacks in case the server is deployed without a
reverse proxy in front.</p>
<h3><code>server.listen()</code></h3>
<p>Starts the HTTP server listening for connections.
This method is identical to <a href="net.md#serverlisten"><code>server.listen()</code></a> from <a href="net.md#class-netserver"><code>net.Server</code></a>.</p>
<h3><code>server.listening</code></h3>
<ul>
<li>Type: {boolean} Indicates whether or not the server is listening for connections.</li>
</ul>
<h3><code>server.maxHeadersCount</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>1000</code></li>
</ul>
<p>Limits maximum incoming headers count. If set to 0, no limit will be applied.</p>
<h3><code>server.requestTimeout</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>300000</code></li>
</ul>
<p>Sets the timeout value in milliseconds for receiving the entire request from
the client.</p>
<p>If the timeout expires, the server responds with status 408 without
forwarding the request to the request listener and then closes the connection.</p>
<p>It must be set to a non-zero value (e.g. 120 seconds) to protect against
potential Denial-of-Service attacks in case the server is deployed without a
reverse proxy in front.</p>
<h3><code>server.setTimeout([msecs][, callback])</code></h3>
<ul>
<li><code>msecs</code> {number} <strong>Default:</strong> 0 (no timeout)</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.Server}</li>
</ul>
<p>Sets the timeout value for sockets, and emits a <code>'timeout'</code> event on
the Server object, passing the socket as an argument, if a timeout
occurs.</p>
<p>If there is a <code>'timeout'</code> event listener on the Server object, then it
will be called with the timed-out socket as an argument.</p>
<p>By default, the Server does not timeout sockets. However, if a callback
is assigned to the Server's <code>'timeout'</code> event, timeouts must be handled
explicitly.</p>
<h3><code>server.maxRequestsPerSocket</code></h3>
<ul>
<li>Type: {number} Requests per socket. <strong>Default:</strong> 0 (no limit)</li>
</ul>
<p>The maximum number of requests socket can handle
before closing keep alive connection.</p>
<p>A value of <code>0</code> will disable the limit.</p>
<p>When the limit is reached it will set the <code>Connection</code> header value to <code>close</code>,
but will not actually close the connection, subsequent requests sent
after the limit is reached will get <code>503 Service Unavailable</code> as a response.</p>
<h3><code>server.timeout</code></h3>
<ul>
<li>Type: {number} Timeout in milliseconds. <strong>Default:</strong> 0 (no timeout)</li>
</ul>
<p>The number of milliseconds of inactivity before a socket is presumed
to have timed out.</p>
<p>A value of <code>0</code> will disable the timeout behavior on incoming connections.</p>
<p>The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.</p>
<h3><code>server.keepAliveTimeout</code></h3>
<ul>
<li>Type: {number} Timeout in milliseconds. <strong>Default:</strong> <code>65000</code> (65 seconds).</li>
</ul>
<p>The number of milliseconds of inactivity a server needs to wait for additional
incoming data, after it has finished writing the last response, before a socket
will be destroyed.</p>
<p>This timeout value is combined with the
<a href="#serverkeepalivetimeoutbuffer"><code>server.keepAliveTimeoutBuffer</code></a> option to determine the actual socket
timeout, calculated as:
socketTimeout = keepAliveTimeout + keepAliveTimeoutBuffer
If the server receives new data before the keep-alive timeout has fired, it
will reset the regular inactivity timeout, i.e., <a href="#servertimeout"><code>server.timeout</code></a>.</p>
<p>A value of <code>0</code> will disable the keep-alive timeout behavior on incoming
connections.
A value of <code>0</code> makes the HTTP server behave similarly to Node.js versions prior
to 8.0.0, which did not have a keep-alive timeout.</p>
<p>The socket timeout logic is set up on connection, so changing this value only
affects new connections to the server, not any existing connections.</p>
<h3><code>server.keepAliveTimeoutBuffer</code></h3>
<ul>
<li>Type: {number} Timeout in milliseconds. <strong>Default:</strong> <code>1000</code> (1 second).</li>
</ul>
<p>An additional buffer time added to the
<a href="#serverkeepalivetimeout"><code>server.keepAliveTimeout</code></a> to extend the internal socket timeout.</p>
<p>This buffer helps reduce connection reset (<code>ECONNRESET</code>) errors by increasing
the socket timeout slightly beyond the advertised keep-alive timeout.</p>
<p>This option applies only to new incoming connections.</p>
<h3><code>server[Symbol.asyncDispose]()</code></h3>
<p>Calls <a href="#serverclosecallback"><code>server.close()</code></a> and returns a promise that fulfills when the
server has closed.</p>
<h2>Class: <code>http.ServerResponse</code></h2>
<ul>
<li>Extends: {http.OutgoingMessage}</li>
</ul>
<p>This object is created internally by an HTTP server, not by the user. It is
passed as the second parameter to the <a href="#event-request"><code>'request'</code></a> event.</p>
<h3>Event: <code>'close'</code></h3>
<p>Indicates that the response is completed, or its underlying connection was
terminated prematurely (before the response completion).</p>
<h3>Event: <code>'finish'</code></h3>
<p>Emitted when the response has been sent. More specifically, this event is
emitted when the last segment of the response headers and body have been
handed off to the operating system for transmission over the network. It
does not imply that the client has received anything yet.</p>
<h3><code>response.addTrailers(headers)</code></h3>
<ul>
<li><code>headers</code> {Object}</li>
</ul>
<p>This method adds HTTP trailing headers (a header but at the end of the
message) to the response.</p>
<p>Trailers will <strong>only</strong> be emitted if chunked encoding is used for the
response; if it is not (e.g. if the request was HTTP/1.0), they will
be silently discarded.</p>
<p>HTTP requires the <code>Trailer</code> header to be sent in order to
emit trailers, with a list of the header fields in its value. E.g.,</p>
<pre><code class="language-js">response.writeHead(200, { 'Content-Type': 'text/plain',
                          'Trailer': 'Content-MD5' });
response.write(fileData);
response.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
response.end();
</code></pre>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<h3><code>response.connection</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#responsesocket"><code>response.socket</code></a>.</p>
</blockquote>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>See <a href="#responsesocket"><code>response.socket</code></a>.</p>
<h3><code>response.cork()</code></h3>
<p>See <a href="stream.md#writablecork"><code>writable.cork()</code></a>.</p>
<h3><code>response.end([data[, encoding]][, callback])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {this}</li>
</ul>
<p>This method signals to the server that all of the response headers and body
have been sent; that server should consider this message complete.
The method, <code>response.end()</code>, MUST be called on each response.</p>
<p>If <code>data</code> is specified, it is similar in effect to calling
<a href="#responsewritechunk-encoding-callback"><code>response.write(data, encoding)</code></a> followed by <code>response.end(callback)</code>.</p>
<p>If <code>callback</code> is specified, it will be called when the response stream
is finished.</p>
<h3><code>response.finished</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#responsewritableended"><code>response.writableEnded</code></a>.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>response.finished</code> property will be <code>true</code> if <a href="#responseenddata-encoding-callback"><code>response.end()</code></a>
has been called.</p>
<h3><code>response.flushHeaders()</code></h3>
<p>Flushes the response headers. See also: <a href="#requestflushheaders"><code>request.flushHeaders()</code></a>.</p>
<h3><code>response.getHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {number | string | string[] | undefined}</li>
</ul>
<p>Reads out a header that's already been queued but not sent to the client.
The name is case-insensitive. The type of the return value depends
on the arguments provided to <a href="#responsesetheadername-value"><code>response.setHeader()</code></a>.</p>
<pre><code class="language-js">response.setHeader('Content-Type', 'text/html');
response.setHeader('Content-Length', Buffer.byteLength(body));
response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
const contentType = response.getHeader('content-type');
// contentType is 'text/html'
const contentLength = response.getHeader('Content-Length');
// contentLength is of type number
const setCookie = response.getHeader('set-cookie');
// setCookie is of type string[]
</code></pre>
<h3><code>response.getHeaderNames()</code></h3>
<ul>
<li>Returns: {string[]}</li>
</ul>
<p>Returns an array containing the unique names of the current outgoing headers.
All header names are lowercase.</p>
<pre><code class="language-js">response.setHeader('Foo', 'bar');
response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headerNames = response.getHeaderNames();
// headerNames === ['foo', 'set-cookie']
</code></pre>
<h3><code>response.getHeaders()</code></h3>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns a shallow copy of the current outgoing headers. Since a shallow copy
is used, array values may be mutated without additional calls to various
header-related http module methods. The keys of the returned object are the
header names and the values are the respective header values. All header names
are lowercase.</p>
<p>The object returned by the <code>response.getHeaders()</code> method <em>does not</em>
prototypically inherit from the JavaScript <code>Object</code>. This means that typical
<code>Object</code> methods such as <code>obj.toString()</code>, <code>obj.hasOwnProperty()</code>, and others
are not defined and <em>will not work</em>.</p>
<pre><code class="language-js">response.setHeader('Foo', 'bar');
response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = response.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
</code></pre>
<h3><code>response.hasHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the header identified by <code>name</code> is currently set in the
outgoing headers. The header name matching is case-insensitive.</p>
<pre><code class="language-js">const hasContentType = response.hasHeader('content-type');
</code></pre>
<h3><code>response.headersSent</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Boolean (read-only). True if headers were sent, false otherwise.</p>
<h3><code>response.removeHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
</ul>
<p>Removes a header that's queued for implicit sending.</p>
<pre><code class="language-js">response.removeHeader('Content-Encoding');
</code></pre>
<h3><code>response.req</code></h3>
<ul>
<li>Type: {http.IncomingMessage}</li>
</ul>
<p>A reference to the original HTTP <code>request</code> object.</p>
<h3><code>response.sendDate</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>When true, the Date header will be automatically generated and sent in
the response if it is not already present in the headers. Defaults to true.</p>
<p>This should only be disabled for testing; the Date header is required in
most HTTP responses (see <a href="https://www.rfc-editor.org/rfc/rfc9110#section-6.6.1">RFC 9110 Section 6.6.1</a> for details).</p>
<h3><code>response.setHeader(name, value)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {number | string | string[]}</li>
<li>Returns: {http.ServerResponse}</li>
</ul>
<p>Returns the response object.</p>
<p>Sets a single header value for implicit headers. If this header already exists
in the to-be-sent headers, its value will be replaced. Use an array of strings
here to send multiple headers with the same name. Non-string values will be
stored without modification. Therefore, <a href="#responsegetheadername"><code>response.getHeader()</code></a> may return
non-string values. However, the non-string values will be converted to strings
for network transmission. The same response object is returned to the caller,
to enable call chaining.</p>
<pre><code class="language-js">response.setHeader('Content-Type', 'text/html');
</code></pre>
<p>or</p>
<pre><code class="language-js">response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
</code></pre>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<p>When headers have been set with <a href="#responsesetheadername-value"><code>response.setHeader()</code></a>, they will be merged
with any headers passed to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>, with the headers passed
to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> given precedence.</p>
<pre><code class="language-js">// Returns content-type = text/plain
const server = http.createServer((req, res) =&gt; {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
</code></pre>
<p>If <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> method is called and this method has not been
called, it will directly write the supplied header values onto the network
channel without caching internally, and the <a href="#responsegetheadername"><code>response.getHeader()</code></a> on the
header will not yield the expected result. If progressive population of headers
is desired with potential future retrieval and modification, use
<a href="#responsesetheadername-value"><code>response.setHeader()</code></a> instead of <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>.</p>
<h3><code>response.setTimeout(msecs[, callback])</code></h3>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.ServerResponse}</li>
</ul>
<p>Sets the Socket's timeout value to <code>msecs</code>. If a callback is
provided, then it is added as a listener on the <code>'timeout'</code> event on
the response object.</p>
<p>If no <code>'timeout'</code> listener is added to the request, the response, or
the server, then sockets are destroyed when they time out. If a handler is
assigned to the request, the response, or the server's <code>'timeout'</code> events,
timed out sockets must be handled explicitly.</p>
<h3><code>response.socket</code></h3>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>Reference to the underlying socket. Usually users will not want to access
this property. In particular, the socket will not emit <code>'readable'</code> events
because of how the protocol parser attaches to the socket. After
<code>response.end()</code>, the property is nulled.</p>
<pre><code class="language-mjs">import http from 'node:http';
const server = http.createServer((req, res) =&gt; {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.end(`Your IP address is ${ip} and your source port is ${port}.`);
}).listen(3000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const server = http.createServer((req, res) =&gt; {
  const ip = res.socket.remoteAddress;
  const port = res.socket.remotePort;
  res.end(`Your IP address is ${ip} and your source port is ${port}.`);
}).listen(3000);
</code></pre>
<p>This property is guaranteed to be an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specified a socket
type other than {net.Socket}.</p>
<h3><code>response.statusCode</code></h3>
<ul>
<li>Type: {number} <strong>Default:</strong> <code>200</code></li>
</ul>
<p>When using implicit headers (not calling <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.</p>
<pre><code class="language-js">response.statusCode = 404;
</code></pre>
<p>After response header was sent to the client, this property indicates the
status code which was sent out.</p>
<h3><code>response.statusMessage</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>When using implicit headers (not calling <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> explicitly),
this property controls the status message that will be sent to the client when
the headers get flushed. If this is left as <code>undefined</code> then the standard
message for the status code will be used.</p>
<pre><code class="language-js">response.statusMessage = 'Not found';
</code></pre>
<p>After response header was sent to the client, this property indicates the
status message which was sent out.</p>
<h3><code>response.strictContentLength</code></h3>
<ul>
<li>Type: {boolean} <strong>Default:</strong> <code>false</code></li>
</ul>
<p>If set to <code>true</code>, Node.js will check whether the <code>Content-Length</code>
header value and the size of the body, in bytes, are equal.
Mismatching the <code>Content-Length</code> header value will result
in an <code>Error</code> being thrown, identified by <code>code:</code> <a href="errors.md#err_http_content_length_mismatch"><code>'ERR_HTTP_CONTENT_LENGTH_MISMATCH'</code></a>.</p>
<h3><code>response.uncork()</code></h3>
<p>See <a href="stream.md#writableuncork"><code>writable.uncork()</code></a>.</p>
<h3><code>response.writableEnded</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> after <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> has been called. This property
does not indicate whether the data has been flushed, for this use
<a href="#responsewritablefinished"><code>response.writableFinished</code></a> instead.</p>
<h3><code>response.writableFinished</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if all data has been flushed to the underlying system, immediately
before the <a href="#event-finish"><code>'finish'</code></a> event is emitted.</p>
<h3><code>response.write(chunk[, encoding][, callback])</code></h3>
<ul>
<li><code>chunk</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string} <strong>Default:</strong> <code>'utf8'</code></li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>If this method is called and <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> has not been called,
it will switch to implicit header mode and flush the implicit headers.</p>
<p>This sends a chunk of the response body. This method may
be called multiple times to provide successive parts of the body.</p>
<p>If <code>rejectNonStandardBodyWrites</code> is set to true in <code>createServer</code>
then writing to the body is not allowed when the request method or response
status do not support content. If an attempt is made to write to the body for a
HEAD request or as part of a <code>204</code> or <code>304</code>response, a synchronous <code>Error</code>
with the code <code>ERR_HTTP_BODY_NOT_ALLOWED</code> is thrown.</p>
<p><code>chunk</code> can be a string or a buffer. If <code>chunk</code> is a string,
the second parameter specifies how to encode it into a byte stream.
<code>callback</code> will be called when this chunk of data is flushed.</p>
<p>This is the raw HTTP body and has nothing to do with higher-level multi-part
body encodings that may be used.</p>
<p>The first time <a href="#responsewritechunk-encoding-callback"><code>response.write()</code></a> is called, it will send the buffered
header information and the first chunk of the body to the client. The second
time <a href="#responsewritechunk-encoding-callback"><code>response.write()</code></a> is called, Node.js assumes data will be streamed,
and sends the new data separately. That is, the response is buffered up to the
first chunk of the body.</p>
<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel
buffer. Returns <code>false</code> if all or part of the data was queued in user memory.
<code>'drain'</code> will be emitted when the buffer is free again.</p>
<h3><code>response.writeContinue()</code></h3>
<p>Sends an HTTP/1.1 100 Continue message to the client, indicating that
the request body should be sent. See the <a href="#event-checkcontinue"><code>'checkContinue'</code></a> event on
<code>Server</code>.</p>
<h3><code>response.writeEarlyHints(hints[, callback])</code></h3>
<ul>
<li><code>hints</code> {Object}</li>
<li><code>callback</code> {Function}</li>
</ul>
<p>Sends an HTTP/1.1 103 Early Hints message to the client with a Link header,
indicating that the user agent can preload/preconnect the linked resources.
The <code>hints</code> is an object containing the values of headers to be sent with
early hints message. The optional <code>callback</code> argument will be called when
the response message has been written.</p>
<p><strong>Example</strong></p>
<pre><code class="language-js">const earlyHintsLink = '&lt;/styles.css&gt;; rel=preload; as=style';
response.writeEarlyHints({
  'link': earlyHintsLink,
});

const earlyHintsLinks = [
  '&lt;/styles.css&gt;; rel=preload; as=style',
  '&lt;/scripts.js&gt;; rel=preload; as=script',
];
response.writeEarlyHints({
  'link': earlyHintsLinks,
  'x-trace-id': 'id for diagnostics',
});

const earlyHintsCallback = () =&gt; console.log('early hints message sent');
response.writeEarlyHints({
  'link': earlyHintsLinks,
}, earlyHintsCallback);
</code></pre>
<h3><code>response.writeHead(statusCode[, statusMessage][, headers])</code></h3>
<ul>
<li><code>statusCode</code> {number}</li>
<li><code>statusMessage</code> {string}</li>
<li><code>headers</code> {Object|Array}</li>
<li>Returns: {http.ServerResponse}</li>
</ul>
<p>Sends a response header to the request. The status code is a 3-digit HTTP
status code, like <code>404</code>. The last argument, <code>headers</code>, are the response headers.
Optionally one can give a human-readable <code>statusMessage</code> as the second
argument.</p>
<p><code>headers</code> may be an <code>Array</code> where the keys and values are in the same list.
It is <em>not</em> a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as <code>request.rawHeaders</code>.</p>
<p>Returns a reference to the <code>ServerResponse</code>, so that calls can be chained.</p>
<pre><code class="language-js">const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain',
  })
  .end(body);
</code></pre>
<p>This method must only be called once on a message and it must
be called before <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> is called.</p>
<p>If <a href="#responsewritechunk-encoding-callback"><code>response.write()</code></a> or <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> are called before calling
this, the implicit/mutable headers will be calculated and call this function.</p>
<p>When headers have been set with <a href="#responsesetheadername-value"><code>response.setHeader()</code></a>, they will be merged
with any headers passed to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>, with the headers passed
to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> given precedence.</p>
<p>If this method is called and <a href="#responsesetheadername-value"><code>response.setHeader()</code></a> has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the <a href="#responsegetheadername"><code>response.getHeader()</code></a> on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use
<a href="#responsesetheadername-value"><code>response.setHeader()</code></a> instead.</p>
<pre><code class="language-js">// Returns content-type = text/plain
const server = http.createServer((req, res) =&gt; {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
</code></pre>
<p><code>Content-Length</code> is read in bytes, not characters. Use
<a href="buffer.md#static-method-bufferbytelengthstring-encoding"><code>Buffer.byteLength()</code></a> to determine the length of the body in bytes. Node.js
will check whether <code>Content-Length</code> and the length of the body which has
been transmitted are equal or not.</p>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<h3><code>response.writeInformation(statusCode[, headers][, callback])</code></h3>
<ul>
<li><code>statusCode</code> {number} An HTTP 1xx informational status code, between <code>100</code>
and <code>199</code> inclusive, excluding <code>101</code> (Switching Protocols) which is only
available through the <a href="#event-upgrade"><code>'upgrade'</code></a> event.</li>
<li><code>headers</code> {Object|Array} An optional set of headers to send with the
informational response. Accepts the same shapes as
<a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>.</li>
<li><code>callback</code> {Function} Optional, called once the message has been written
to the socket.</li>
</ul>
<p>Sends an arbitrary HTTP/1.1 1xx informational response to the client. This
is a generic equivalent of <a href="#responsewritecontinue"><code>response.writeContinue()</code></a>,
<a href="#responsewriteprocessing"><code>response.writeProcessing()</code></a> and <a href="#responsewriteearlyhintshints-callback"><code>response.writeEarlyHints()</code></a>, and
can be called multiple times before the final response. After the final
response headers have been sent (via <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> or an
implicit header), calling this method throws <code>ERR_HTTP_HEADERS_SENT</code>.</p>
<p>Clients receive these responses via the <a href="#event-information"><code>'information'</code></a>
event on <code>http.ClientRequest</code>.</p>
<pre><code class="language-js">response.writeInformation(110, { 'X-Progress': '50%' });
</code></pre>
<h3><code>response.writeProcessing()</code></h3>
<p>Sends an HTTP/1.1 102 Processing message to the client, indicating that
the request body should be sent.</p>
<h2>Class: <code>http.IncomingMessage</code></h2>
<ul>
<li>Extends: {stream.Readable}</li>
</ul>
<p>An <code>IncomingMessage</code> object is created by <a href="#class-httpserver"><code>http.Server</code></a> or
<a href="#class-httpclientrequest"><code>http.ClientRequest</code></a> and passed as the first argument to the <a href="#event-request"><code>'request'</code></a>
and <a href="#event-response"><code>'response'</code></a> event respectively. It may be used to access response
status, headers, and data.</p>
<p>Different from its <code>socket</code> value which is a subclass of {stream.Duplex}, the
<code>IncomingMessage</code> itself extends {stream.Readable} and is created separately to
parse and emit the incoming HTTP headers and payload, as the underlying socket
may be reused multiple times in case of keep-alive.</p>
<h3>Event: <code>'aborted'</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Listen for <code>'close'</code> event instead.</p>
</blockquote>
<p>Emitted when the request has been aborted.</p>
<h3>Event: <code>'close'</code></h3>
<p>Emitted when the request has been completed.</p>
<h3><code>message.aborted</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Check <code>message.destroyed</code> from {stream.Readable}.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>message.aborted</code> property will be <code>true</code> if the request has
been aborted.</p>
<h3><code>message.complete</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>message.complete</code> property will be <code>true</code> if a complete HTTP message has
been received and successfully parsed.</p>
<p>This property is particularly useful as a means of determining if a client or
server fully transmitted a message before a connection was terminated:</p>
<pre><code class="language-js">const req = http.request({
  host: '127.0.0.1',
  port: 8080,
  method: 'POST',
}, (res) =&gt; {
  res.resume();
  res.on('end', () =&gt; {
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  });
});
</code></pre>
<h3><code>message.connection</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#messagesocket"><code>message.socket</code></a>.</p>
</blockquote>
<p>Alias for <a href="#messagesocket"><code>message.socket</code></a>.</p>
<h3><code>message.destroy([error])</code></h3>
<ul>
<li><code>error</code> {Error}</li>
<li>Returns: {this}</li>
</ul>
<p>Calls <code>destroy()</code> on the socket that received the <code>IncomingMessage</code>. If <code>error</code>
is provided, an <code>'error'</code> event is emitted on the socket and <code>error</code> is passed
as an argument to any listeners on the event.</p>
<h3><code>message.headers</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The request/response headers object.</p>
<p>Key-value pairs of header names and values. Header names are lower-cased.</p>
<p>The object has a null prototype and should not be accessed using the <code>in</code>
operator.</p>
<pre><code class="language-js">// Prints something like:
//
// { 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*/*' }
console.log(request.headers);
</code></pre>
<p>Duplicates in raw headers are handled in the following ways, depending on the
header name:</p>
<ul>
<li>Duplicates of <code>age</code>, <code>authorization</code>, <code>content-length</code>, <code>content-type</code>,
<code>etag</code>, <code>expires</code>, <code>from</code>, <code>host</code>, <code>if-modified-since</code>, <code>if-unmodified-since</code>,
<code>last-modified</code>, <code>location</code>, <code>max-forwards</code>, <code>proxy-authorization</code>, <code>referer</code>,
<code>retry-after</code>, <code>server</code>, or <code>user-agent</code> are discarded.
To allow duplicate values of the headers listed above to be joined,
use the option <code>joinDuplicateHeaders</code> in <a href="#httprequestoptions-callback"><code>http.request()</code></a>
and <a href="#httpcreateserveroptions-requestlistener"><code>http.createServer()</code></a>. See RFC 9110 Section 5.3 for more
information.</li>
<li><code>set-cookie</code> is always an array. Duplicates are added to the array.</li>
<li>For duplicate <code>cookie</code> headers, the values are joined together with <code>; </code>.</li>
<li>For all other headers, the values are joined together with <code>, </code>.</li>
</ul>
<h3><code>message.headersDistinct</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Similar to <a href="#messageheaders"><code>message.headers</code></a>, but there is no join logic and the values are
always arrays of strings, even for headers received just once.</p>
<p>The object has a null prototype and should not be accessed using the <code>in</code>
operator.</p>
<pre><code class="language-js">// Prints something like:
//
// { 'user-agent': ['curl/7.22.0'],
//   host: ['127.0.0.1:8000'],
//   accept: ['*/*'] }
console.log(request.headersDistinct);
</code></pre>
<h3><code>message.httpVersion</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either <code>'1.1'</code> or <code>'1.0'</code>.</p>
<p>Also <code>message.httpVersionMajor</code> is the first integer and
<code>message.httpVersionMinor</code> is the second.</p>
<h3><code>message.method</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p><strong>Only valid for request obtained from <a href="#class-httpserver"><code>http.Server</code></a>.</strong></p>
<p>The request method as a string. Read only. Examples: <code>'GET'</code>, <code>'DELETE'</code>.</p>
<h3><code>message.rawHeaders</code></h3>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The raw request/response headers list exactly as they were received.</p>
<p>The keys and values are in the same list. It is <em>not</em> a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values.</p>
<p>Header names are not lowercased, and duplicates are not merged.</p>
<pre><code class="language-js">// Prints something like:
//
// [ 'user-agent',
//   'this is invalid because there can be only one',
//   'User-Agent',
//   'curl/7.22.0',
//   'Host',
//   '127.0.0.1:8000',
//   'ACCEPT',
//   '*/*' ]
console.log(request.rawHeaders);
</code></pre>
<h3><code>message.rawTrailers</code></h3>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The raw request/response trailer keys and values exactly as they were
received. Only populated at the <code>'end'</code> event.</p>
<h3><code>message.setTimeout(msecs[, callback])</code></h3>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.IncomingMessage}</li>
</ul>
<p>Calls <code>message.socket.setTimeout(msecs, callback)</code>.</p>
<h3><code>message.signal</code></h3>
<ul>
<li>Type: {AbortSignal}</li>
</ul>
<p>An {AbortSignal} that is aborted when the message is destroyed before
completion or when its underlying socket closes before request handling or
response reading completes.
The signal is created lazily on first access — no {AbortController} is allocated
for requests that never use this property.</p>
<p>This is useful for cancelling downstream asynchronous work such as database
queries or <code>fetch</code> calls when a client disconnects mid-request.</p>
<pre><code class="language-mjs">import http from 'node:http';

http.createServer(async (req, res) =&gt; {
  try {
    const data = await fetch('https://example.com/api', { signal: req.signal });
    res.end(JSON.stringify(await data.json()));
  } catch (err) {
    if (err.name === 'AbortError') return;
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}).listen(3000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

http.createServer(async (req, res) =&gt; {
  try {
    const data = await fetch('https://example.com/api', { signal: req.signal });
    res.end(JSON.stringify(await data.json()));
  } catch (err) {
    if (err.name === 'AbortError') return;
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}).listen(3000);
</code></pre>
<h3><code>message.socket</code></h3>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>The <a href="net.md#class-netsocket"><code>net.Socket</code></a> object associated with the connection.</p>
<p>With HTTPS support, use <a href="tls.md#tlssocketgetpeercertificatedetailed"><code>request.socket.getPeerCertificate()</code></a> to obtain the
client's authentication details.</p>
<p>This property is guaranteed to be an instance of the {net.Socket} class,
a subclass of {stream.Duplex}, unless the user specified a socket
type other than {net.Socket} or internally nulled.</p>
<h3><code>message.statusCode</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p><strong>Only valid for response obtained from <a href="#class-httpclientrequest"><code>http.ClientRequest</code></a>.</strong></p>
<p>The 3-digit HTTP response status code. E.G. <code>404</code>.</p>
<h3><code>message.statusMessage</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p><strong>Only valid for response obtained from <a href="#class-httpclientrequest"><code>http.ClientRequest</code></a>.</strong></p>
<p>The HTTP response status message (reason phrase). E.G. <code>OK</code> or <code>Internal Server Error</code>.</p>
<h3><code>message.trailers</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The request/response trailers object. Only populated at the <code>'end'</code> event.</p>
<p>The object has a null prototype and should not be accessed using the <code>in</code>
operator.</p>
<h3><code>message.trailersDistinct</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Similar to <a href="#messagetrailers"><code>message.trailers</code></a>, but there is no join logic and the values are
always arrays of strings, even for headers received just once.
Only populated at the <code>'end'</code> event.</p>
<p>The object has a null prototype and should not be accessed using the <code>in</code>
operator.</p>
<h3><code>message.url</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p><strong>Only valid for request obtained from <a href="#class-httpserver"><code>http.Server</code></a>.</strong></p>
<p>Request URL string. This contains only the URL that is present in the actual
HTTP request. Take the following request:</p>
<pre><code class="language-http">GET /status?name=ryan HTTP/1.1
Accept: text/plain
</code></pre>
<p>To parse the URL into its parts:</p>
<pre><code class="language-js">new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`);
</code></pre>
<p>When <code>request.url</code> is <code>'/status?name=ryan'</code> and <code>process.env.HOST</code> is undefined:</p>
<pre><code class="language-console">$ node
&gt; new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`);
URL {
  href: 'http://localhost/status?name=ryan',
  origin: 'http://localhost',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' =&gt; 'ryan' },
  hash: ''
}
</code></pre>
<p>Ensure that you set <code>process.env.HOST</code> to the server's host name, or consider
replacing this part entirely. If using <code>req.headers.host</code>, ensure proper
validation is used, as clients may specify a custom <code>Host</code> header.</p>
<h2>Class: <code>http.OutgoingMessage</code></h2>
<ul>
<li>Extends: {Stream}</li>
</ul>
<p>This class serves as the parent class of <a href="#class-httpclientrequest"><code>http.ClientRequest</code></a>
and <a href="#class-httpserverresponse"><code>http.ServerResponse</code></a>. It is an abstract outgoing message from
the perspective of the participants of an HTTP transaction.</p>
<h3>Event: <code>'drain'</code></h3>
<p>Emitted when the buffer of the message is free again.</p>
<h3>Event: <code>'finish'</code></h3>
<p>Emitted when the transmission is finished successfully.</p>
<h3>Event: <code>'prefinish'</code></h3>
<p>Emitted after <code>outgoingMessage.end()</code> is called.
When the event is emitted, all data has been processed but not necessarily
completely flushed.</p>
<h3><code>outgoingMessage.addTrailers(headers)</code></h3>
<ul>
<li><code>headers</code> {Object}</li>
</ul>
<p>Adds HTTP trailers (headers but at the end of the message) to the message.</p>
<p>Trailers will <strong>only</strong> be emitted if the message is chunked encoded. If not,
the trailers will be silently discarded.</p>
<p>HTTP requires the <code>Trailer</code> header to be sent to emit trailers,
with a list of header field names in its value, e.g.</p>
<pre><code class="language-js">message.writeHead(200, { 'Content-Type': 'text/plain',
                         'Trailer': 'Content-MD5' });
message.write(fileData);
message.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
message.end();
</code></pre>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <code>TypeError</code> being thrown.</p>
<h3><code>outgoingMessage.appendHeader(name, value)</code></h3>
<ul>
<li><code>name</code> {string} Header name</li>
<li><code>value</code> {string|string[]} Header value</li>
<li>Returns: {this}</li>
</ul>
<p>Append a single header value to the header object.</p>
<p>If the value is an array, this is equivalent to calling this method multiple
times.</p>
<p>If there were no previous values for the header, this is equivalent to calling
<a href="#outgoingmessagesetheadername-value"><code>outgoingMessage.setHeader(name, value)</code></a>.</p>
<p>Depending of the value of <code>options.uniqueHeaders</code> when the client request or the
server were created, this will end up in the header being sent multiple times or
a single time with values joined using <code>; </code>.</p>
<h3><code>outgoingMessage.connection</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="#outgoingmessagesocket"><code>outgoingMessage.socket</code></a> instead.</p>
</blockquote>
<p>Alias of <a href="#outgoingmessagesocket"><code>outgoingMessage.socket</code></a>.</p>
<h3><code>outgoingMessage.cork()</code></h3>
<p>See <a href="stream.md#writablecork"><code>writable.cork()</code></a>.</p>
<h3><code>outgoingMessage.destroy([error])</code></h3>
<ul>
<li><code>error</code> {Error} Optional, an error to emit with <code>error</code> event</li>
<li>Returns: {this}</li>
</ul>
<p>Destroys the message. Once a socket is associated with the message
and is connected, that socket will be destroyed as well.</p>
<h3><code>outgoingMessage.end(chunk[, encoding][, callback])</code></h3>
<ul>
<li><code>chunk</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string} Optional, <strong>Default</strong>: <code>utf8</code></li>
<li><code>callback</code> {Function} Optional</li>
<li>Returns: {this}</li>
</ul>
<p>Finishes the outgoing message. If any parts of the body are unsent, it will
flush them to the underlying system. If the message is chunked, it will
send the terminating chunk <code>0\r\n\r\n</code>, and send the trailers (if any).</p>
<p>If <code>chunk</code> is specified, it is equivalent to calling
<code>outgoingMessage.write(chunk, encoding)</code>, followed by
<code>outgoingMessage.end(callback)</code>.</p>
<p>If <code>callback</code> is provided, it will be called when the message is finished
(equivalent to a listener of the <code>'finish'</code> event).</p>
<h3><code>outgoingMessage.flushHeaders()</code></h3>
<p>Flushes the message headers.</p>
<p>For efficiency reason, Node.js normally buffers the message headers
until <code>outgoingMessage.end()</code> is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.</p>
<p>It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. <code>outgoingMessage.flushHeaders()</code>
bypasses the optimization and kickstarts the message.</p>
<h3><code>outgoingMessage.getHeader(name)</code></h3>
<ul>
<li><code>name</code> {string} Name of header</li>
<li>Returns: {number | string | string[] | undefined}</li>
</ul>
<p>Gets the value of the HTTP header with the given name. If that header is not
set, the returned value will be <code>undefined</code>.</p>
<h3><code>outgoingMessage.getHeaderNames()</code></h3>
<ul>
<li>Returns: {string[]}</li>
</ul>
<p>Returns an array containing the unique names of the current outgoing headers.
All names are lowercase.</p>
<h3><code>outgoingMessage.getHeaders()</code></h3>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns a shallow copy of the current outgoing headers. Since a shallow
copy is used, array values may be mutated without additional calls to
various header-related HTTP module methods. The keys of the returned
object are the header names and the values are the respective header
values. All header names are lowercase.</p>
<p>The object returned by the <code>outgoingMessage.getHeaders()</code> method does
not prototypically inherit from the JavaScript <code>Object</code>. This means that
typical <code>Object</code> methods such as <code>obj.toString()</code>, <code>obj.hasOwnProperty()</code>,
and others are not defined and will not work.</p>
<pre><code class="language-js">outgoingMessage.setHeader('Foo', 'bar');
outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = outgoingMessage.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
</code></pre>
<h3><code>outgoingMessage.hasHeader(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the header identified by <code>name</code> is currently set in the
outgoing headers. The header name is case-insensitive.</p>
<pre><code class="language-js">const hasContentType = outgoingMessage.hasHeader('content-type');
</code></pre>
<h3><code>outgoingMessage.headersSent</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Read-only. <code>true</code> if the headers were sent, otherwise <code>false</code>.</p>
<h3><code>outgoingMessage.pipe()</code></h3>
<p>Overrides the <code>stream.pipe()</code> method inherited from the legacy <code>Stream</code> class
which is the parent class of <code>http.OutgoingMessage</code>.</p>
<p>Calling this method will throw an <code>Error</code> because <code>outgoingMessage</code> is a
write-only stream.</p>
<h3><code>outgoingMessage.removeHeader(name)</code></h3>
<ul>
<li><code>name</code> {string} Header name</li>
</ul>
<p>Removes a header that is queued for implicit sending.</p>
<pre><code class="language-js">outgoingMessage.removeHeader('Content-Encoding');
</code></pre>
<h3><code>outgoingMessage.setHeader(name, value)</code></h3>
<ul>
<li><code>name</code> {string} Header name</li>
<li><code>value</code> {number | string | string[]} Header value</li>
<li>Returns: {this}</li>
</ul>
<p>Sets a single header value. If the header already exists in the to-be-sent
headers, its value will be replaced. Use an array of strings to send multiple
headers with the same name.</p>
<h3><code>outgoingMessage.setHeaders(headers)</code></h3>
<ul>
<li><code>headers</code> {Headers|Map}</li>
<li>Returns: {this}</li>
</ul>
<p>Sets multiple header values for implicit headers.
<code>headers</code> must be an instance of <a href="globals.md#class-headers"><code>Headers</code></a> or <code>Map</code>,
if a header already exists in the to-be-sent headers,
its value will be replaced.</p>
<pre><code class="language-js">const headers = new Headers({ foo: 'bar' });
outgoingMessage.setHeaders(headers);
</code></pre>
<p>or</p>
<pre><code class="language-js">const headers = new Map([['foo', 'bar']]);
outgoingMessage.setHeaders(headers);
</code></pre>
<p>When headers have been set with <a href="#outgoingmessagesetheadersheaders"><code>outgoingMessage.setHeaders()</code></a>,
they will be merged with any headers passed to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>,
with the headers passed to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> given precedence.</p>
<pre><code class="language-js">// Returns content-type = text/plain
const server = http.createServer((req, res) =&gt; {
  const headers = new Headers({ 'Content-Type': 'text/html' });
  res.setHeaders(headers);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
</code></pre>
<h3><code>outgoingMessage.setTimeout(msecs[, callback])</code></h3>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function} Optional function to be called when a timeout
occurs. Same as binding to the <code>timeout</code> event.</li>
<li>Returns: {this}</li>
</ul>
<p>Once a socket is associated with the message and is connected,
<a href="net.md#socketsettimeouttimeout-callback"><code>socket.setTimeout()</code></a> will be called with <code>msecs</code> as the first parameter.</p>
<h3><code>outgoingMessage.socket</code></h3>
<ul>
<li>Type: {stream.Duplex}</li>
</ul>
<p>Reference to the underlying socket. Usually, users will not want to access
this property.</p>
<p>After calling <code>outgoingMessage.end()</code>, this property will be nulled.</p>
<h3><code>outgoingMessage.uncork()</code></h3>
<p>See <a href="stream.md#writableuncork"><code>writable.uncork()</code></a></p>
<h3><code>outgoingMessage.writableCorked</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The number of times <code>outgoingMessage.cork()</code> has been called.</p>
<h3><code>outgoingMessage.writableEnded</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if <code>outgoingMessage.end()</code> has been called. This property does
not indicate whether the data has been flushed. For that purpose, use
<code>message.writableFinished</code> instead.</p>
<h3><code>outgoingMessage.writableFinished</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if all data has been flushed to the underlying system.</p>
<h3><code>outgoingMessage.writableHighWaterMark</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The <code>highWaterMark</code> of the underlying socket if assigned. Otherwise, the default
buffer level when <a href="stream.md#writablewritechunk-encoding-callback"><code>writable.write()</code></a> starts returning false (<code>16384</code>).</p>
<h3><code>outgoingMessage.writableLength</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The number of buffered bytes.</p>
<h3><code>outgoingMessage.writableObjectMode</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Always <code>false</code>.</p>
<h3><code>outgoingMessage.write(chunk[, encoding][, callback])</code></h3>
<ul>
<li><code>chunk</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string} <strong>Default</strong>: <code>utf8</code></li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Sends a chunk of the body. This method can be called multiple times.</p>
<p>The <code>encoding</code> argument is only relevant when <code>chunk</code> is a string. Defaults to
<code>'utf8'</code>.</p>
<p>The <code>callback</code> argument is optional and will be called when this chunk of data
is flushed.</p>
<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel
buffer. Returns <code>false</code> if all or part of the data was queued in the user
memory. The <code>'drain'</code> event will be emitted when the buffer is free again.</p>
<h2><code>http.METHODS</code></h2>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>A list of the HTTP methods that are supported by the parser.</p>
<h2><code>http.STATUS_CODES</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>A collection of all the standard HTTP response status codes, and the
short description of each. For example, <code>http.STATUS_CODES[404] === 'Not Found'</code>.</p>
<h2><code>http.createServer([options][, requestListener])</code></h2>
<ul>
<li>
<p><code>options</code> {Object}</p>
<ul>
<li><code>connectionsCheckingInterval</code>: Sets the interval value in milliseconds to
check for request and headers timeout in incomplete requests.
<strong>Default:</strong> <code>30000</code>.</li>
<li><code>headersTimeout</code>: Sets the timeout value in milliseconds for receiving
the complete HTTP headers from the client.
See <a href="#serverheaderstimeout"><code>server.headersTimeout</code></a> for more information.
<strong>Default:</strong> <code>60000</code>.</li>
<li><code>highWaterMark</code> {number} Optionally overrides all <code>socket</code>s'
<code>readableHighWaterMark</code> and <code>writableHighWaterMark</code>. This affects
<code>highWaterMark</code> property of both <code>IncomingMessage</code> and <code>ServerResponse</code>.
<strong>Default:</strong> See <a href="stream.md#streamgetdefaulthighwatermarkobjectmode"><code>stream.getDefaultHighWaterMark()</code></a>.</li>
<li><code>httpValidation</code> {string} Controls HTTP header value validation strictness
for incoming requests. Accepted values are:
<ul>
<li><code>'strict'</code>: Strictest validation; rejects any non-ASCII or control
characters in header values.</li>
<li><code>'relaxed'</code>: Allows a limited set of non-ASCII characters in header
values, aligning with the
<a href="https://fetch.spec.whatwg.org/">Fetch specification</a>.</li>
<li><code>'insecure'</code>: Disables all header value validation (equivalent to
<code>insecureHTTPParser: true</code>).
Cannot be used together with <code>insecureHTTPParser</code>. <strong>Default:</strong> <code>'strict'</code>.</li>
</ul>
</li>
<li><code>insecureHTTPParser</code> {boolean} If set to <code>true</code>, it will use an HTTP parser
with leniency flags enabled. Using the insecure parser should be avoided.
See <a href="cli.md#--insecure-http-parser"><code>--insecure-http-parser</code></a> for more information.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>IncomingMessage</code> {http.IncomingMessage} Specifies the <code>IncomingMessage</code>
class to be used. Useful for extending the original <code>IncomingMessage</code>.
<strong>Default:</strong> <code>IncomingMessage</code>.</li>
<li><code>joinDuplicateHeaders</code> {boolean} If set to <code>true</code>, this option allows
joining the field line values of multiple headers in a request with
a comma (<code>, </code>) instead of discarding the duplicates.
For more information, refer to <a href="#messageheaders"><code>message.headers</code></a>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>keepAlive</code> {boolean} If set to <code>true</code>, it enables keep-alive functionality
on the socket immediately after a new incoming connection is received,
similarly on what is done in <a href="net.md#socketsetkeepalive"><code>socket.setKeepAlive()</code></a>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>keepAliveInitialDelay</code> {number} If set to a positive number, it sets the
initial delay before the first keepalive probe is sent on an idle socket.
<strong>Default:</strong> <code>0</code>.</li>
<li><code>keepAliveTimeout</code>: The number of milliseconds of inactivity a server
needs to wait for additional incoming data, after it has finished writing
the last response, before a socket will be destroyed.
See <a href="#serverkeepalivetimeout"><code>server.keepAliveTimeout</code></a> for more information.
<strong>Default:</strong> <code>65000</code>.</li>
<li><code>maxHeaderSize</code> {number} Optionally overrides the value of
<a href="cli.md#--max-http-header-sizesize"><code>--max-http-header-size</code></a> for requests received by this server, i.e.
the maximum length of request headers in bytes.
<strong>Default:</strong> 16384 (16 KiB).</li>
<li><code>noDelay</code> {boolean} If set to <code>true</code>, it disables the use of Nagle's
algorithm immediately after a new incoming connection is received.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>requestTimeout</code>: Sets the timeout value in milliseconds for receiving
the entire request from the client.
See <a href="#serverrequesttimeout"><code>server.requestTimeout</code></a> for more information.
<strong>Default:</strong> <code>300000</code>.</li>
<li><code>requireHostHeader</code> {boolean} If set to <code>true</code>, it forces the server to
respond with a 400 (Bad Request) status code to any HTTP/1.1
request message that lacks a Host header
(as mandated by the specification).
<strong>Default:</strong> <code>true</code>.</li>
<li><code>ServerResponse</code> {http.ServerResponse} Specifies the <code>ServerResponse</code> class
to be used. Useful for extending the original <code>ServerResponse</code>. <strong>Default:</strong>
<code>ServerResponse</code>.</li>
<li><code>shouldUpgradeCallback(request)</code> {Function} A callback which receives an
incoming request and returns a boolean, to control which upgrade attempts
should be accepted. Accepted upgrades will fire an <code>'upgrade'</code> event (or
their sockets will be destroyed, if no listener is registered) while
rejected upgrades will fire a <code>'request'</code> event like any non-upgrade
request. This options defaults to
<code>() =&gt; server.listenerCount('upgrade') &gt; 0</code>.</li>
<li><code>uniqueHeaders</code> {Array} A list of response headers that should be sent only
once. If the header's value is an array, the items will be joined
using <code>; </code>.</li>
<li><code>rejectNonStandardBodyWrites</code> {boolean} If set to <code>true</code>, an error is thrown
when writing to an HTTP response which does not have a body.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>optimizeEmptyRequests</code> {boolean} If set to <code>true</code>, requests without <code>Content-Length</code>
or <code>Transfer-Encoding</code> headers (indicating no body) will be initialized with an
already-ended body stream, so they will never emit any stream events
(like <code>'data'</code> or <code>'end'</code>). You can use <code>req.readableEnded</code> to detect this case.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>
<p><code>requestListener</code> {Function}</p>
</li>
<li>
<p>Returns: {http.Server}</p>
</li>
</ul>
<p>Returns a new instance of <a href="#class-httpserver"><code>http.Server</code></a>.</p>
<p>The <code>requestListener</code> is a function which is automatically
added to the <a href="#event-request"><code>'request'</code></a> event.</p>
<pre><code class="language-mjs">import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
</code></pre>
<pre><code class="language-mjs">import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
</code></pre>
<h2><code>http.get(options[, callback])</code></h2>
<h2><code>http.get(url[, options][, callback])</code></h2>
<ul>
<li><code>url</code> {string | URL}</li>
<li><code>options</code> {Object} Accepts the same <code>options</code> as
<a href="#httprequestoptions-callback"><code>http.request()</code></a>, with the method set to GET by default.</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.ClientRequest}</li>
</ul>
<p>Since most requests are GET requests without bodies, Node.js provides this
convenience method. The only difference between this method and
<a href="#httprequestoptions-callback"><code>http.request()</code></a> is that it sets the method to GET by default and calls <code>req.end()</code>
automatically. The callback must take care to consume the response
data for reasons stated in <a href="#class-httpclientrequest"><code>http.ClientRequest</code></a> section.</p>
<p>The <code>callback</code> is invoked with a single argument that is an instance of
<a href="#class-httpincomingmessage"><code>http.IncomingMessage</code></a>.</p>
<p>JSON fetching example:</p>
<pre><code class="language-js">http.get('http://localhost:8000/', (res) =&gt; {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) =&gt; { rawData += chunk; });
  res.on('end', () =&gt; {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) =&gt; {
  console.error(`Got error: ${e.message}`);
});

// Create a local server to receive data from
const server = http.createServer((req, res) =&gt; {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
</code></pre>
<h2><code>http.globalAgent</code></h2>
<ul>
<li>Type: {http.Agent}</li>
</ul>
<p>Global instance of <code>Agent</code> which is used as the default for all HTTP client
requests. Diverges from a default <code>Agent</code> configuration by having <code>keepAlive</code>
enabled and a <code>timeout</code> of 5 seconds.</p>
<h2><code>http.maxHeaderSize</code></h2>
<ul>
<li>Type: {number}</li>
</ul>
<p>Read-only property specifying the maximum allowed size of HTTP headers in bytes.
Defaults to 16 KiB. Configurable using the <a href="cli.md#--max-http-header-sizesize"><code>--max-http-header-size</code></a> CLI
option.</p>
<p>This can be overridden for servers and client requests by passing the
<code>maxHeaderSize</code> option.</p>
<h2><code>http.request(options[, callback])</code></h2>
<h2><code>http.request(url[, options][, callback])</code></h2>
<ul>
<li><code>url</code> {string | URL}</li>
<li><code>options</code> {Object}
<ul>
<li><code>agent</code> {http.Agent | boolean} Controls <a href="#class-httpagent"><code>Agent</code></a> behavior. Possible
values:
<ul>
<li><code>undefined</code> (default): use <a href="#httpglobalagent"><code>http.globalAgent</code></a> for this host and port.</li>
<li><code>Agent</code> object: explicitly use the passed in <code>Agent</code>.</li>
<li><code>false</code>: causes a new <code>Agent</code> with default values to be used.</li>
</ul>
</li>
<li><code>auth</code> {string} Basic authentication (<code>'user:password'</code>) to compute an
Authorization header.</li>
<li><code>createConnection</code> {Function} A function that produces a socket/stream to
use for the request when the <code>agent</code> option is not used. This can be used to
avoid creating a custom <code>Agent</code> class just to override the default
<code>createConnection</code> function. See <a href="#agentcreateconnectionoptions-callback"><code>agent.createConnection()</code></a> for more
details. Any <a href="stream.md#class-streamduplex"><code>Duplex</code></a> stream is a valid return value.</li>
<li><code>defaultPort</code> {number} Default port for the protocol. <strong>Default:</strong>
<code>agent.defaultPort</code> if an <code>Agent</code> is used, else <code>undefined</code>.</li>
<li><code>family</code> {number} IP address family to use when resolving <code>host</code> or
<code>hostname</code>. Valid values are <code>4</code> or <code>6</code>. When unspecified, both IP v4 and
v6 will be used.</li>
<li><code>headers</code> {Object|Array} An object or an array of strings containing request
headers. The array is in the same format as <a href="#messagerawheaders"><code>message.rawHeaders</code></a>.</li>
<li><code>hints</code> {number} Optional <a href="dns.md#supported-getaddrinfo-flags"><code>dns.lookup()</code> hints</a>.</li>
<li><code>host</code> {string} A domain name or IP address of the server to issue the
request to. <strong>Default:</strong> <code>'localhost'</code>.</li>
<li><code>hostname</code> {string} Alias for <code>host</code>. To support <a href="url.md#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a>,
<code>hostname</code> will be used if both <code>host</code> and <code>hostname</code> are specified.</li>
<li><code>httpValidation</code> {string} Controls HTTP header value validation strictness
for outgoing requests. Accepted values are:
<ul>
<li><code>'strict'</code>: Strictest validation; rejects any non-ASCII or control
characters in header values.</li>
<li><code>'relaxed'</code>: Allows a limited set of non-ASCII characters in header
values, aligning with the
<a href="https://fetch.spec.whatwg.org/">Fetch specification</a>.</li>
<li><code>'insecure'</code>: Disables all header value validation (equivalent to
<code>insecureHTTPParser: true</code>).
Cannot be used together with <code>insecureHTTPParser</code>. <strong>Default:</strong> <code>'strict'</code>.</li>
</ul>
</li>
<li><code>insecureHTTPParser</code> {boolean} If set to <code>true</code>, it will use an HTTP parser
with leniency flags enabled. Using the insecure parser should be avoided.
See <a href="cli.md#--insecure-http-parser"><code>--insecure-http-parser</code></a> for more information.
<strong>Default:</strong> <code>false</code></li>
<li><code>joinDuplicateHeaders</code> {boolean} It joins the field line values of
multiple headers in a request with <code>, </code> instead of discarding
the duplicates. See <a href="#messageheaders"><code>message.headers</code></a> for more information.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>localAddress</code> {string} Local interface to bind for network connections.</li>
<li><code>localPort</code> {number} Local port to connect from.</li>
<li><code>lookup</code> {Function} Custom lookup function. <strong>Default:</strong> <a href="dns.md#dnslookuphostname-options-callback"><code>dns.lookup()</code></a>.</li>
<li><code>maxHeaderSize</code> {number} Optionally overrides the value of
<a href="cli.md#--max-http-header-sizesize"><code>--max-http-header-size</code></a> (the maximum length of response headers in
bytes) for responses received from the server.
<strong>Default:</strong> 16384 (16 KiB).</li>
<li><code>method</code> {string} A string specifying the HTTP request method. <strong>Default:</strong>
<code>'GET'</code>.</li>
<li><code>path</code> {string} Request path. Should include query string if any.
E.G. <code>'/index.html?page=12'</code>. An exception is thrown when the request path
contains illegal characters. Currently, only spaces are rejected but that
may change in the future. <strong>Default:</strong> <code>'/'</code>.
The content in <code>path</code> is sent as the <a href="https://datatracker.ietf.org/doc/html/rfc9112#section-3.2">request target</a> in the HTTP 1.1 message.
When <code>path</code> is an absolute URL, this means the request target in the message in <a href="https://datatracker.ietf.org/doc/html/rfc9112#section-3.2.2">absolute form</a>.
If the receiving server is a proxy, the server typically forwards the request to the
destination specified in the request target, and ignores the <code>Host</code> header.
The user needs to make sure that <code>path</code>, <code>host</code> and the Host headers conform to the
requirement of the <a href="https://datatracker.ietf.org/doc/html/rfc9112#section-3.2">request target</a> in the HTTP specification.
When the receiving server is known to be a proxy because the request is routed through
<a href="#built-in-proxy-support">Built-in Proxy Support</a>, <code>http.request</code> will additionally perform a best-effort
check to see that the <code>host</code> option or <code>Host</code> in <code>headers</code> agrees with the authority
in <code>path</code> during the initial construction of the request. It gives up rewriting the
request target for proxying and throws an error if they don't match at request
construction time, though there won't be checks for later header mutations done by the user.</li>
<li><code>port</code> {number} Port of remote server. <strong>Default:</strong> <code>defaultPort</code> if set,
else <code>80</code>.</li>
<li><code>protocol</code> {string} Protocol to use. <strong>Default:</strong> <code>'http:'</code>.</li>
<li><code>setDefaultHeaders</code> {boolean}: Specifies whether or not to automatically add
default headers such as <code>Connection</code>, <code>Content-Length</code>, <code>Transfer-Encoding</code>,
and <code>Host</code>. If set to <code>false</code> then all necessary headers must be added
manually. Defaults to <code>true</code>.</li>
<li><code>setHost</code> {boolean}: Specifies whether or not to automatically add the
<code>Host</code> header. If provided, this overrides <code>setDefaultHeaders</code>. Defaults to
<code>true</code>.</li>
<li><code>signal</code> {AbortSignal}: An AbortSignal that may be used to abort an ongoing
request.</li>
<li><code>socketPath</code> {string} Unix domain socket. Cannot be used if one of <code>host</code>
or <code>port</code> is specified, as those specify a TCP Socket.</li>
<li><code>timeout</code> {number}: A number specifying the socket timeout in milliseconds.
This will set the timeout before the socket is connected.</li>
<li><code>uniqueHeaders</code> {Array} A list of request headers that should be sent
only once. If the header's value is an array, the items will be joined
using <code>; </code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http.ClientRequest}</li>
</ul>
<p><code>options</code> in <a href="net.md#socketconnectoptions-connectlistener"><code>socket.connect()</code></a> are also supported.</p>
<p>Node.js maintains several connections per server to make HTTP requests.
This function allows one to transparently issue requests.</p>
<p><code>url</code> can be a string or a <a href="url.md#the-whatwg-url-api"><code>URL</code></a> object. If <code>url</code> is a
string, it is automatically parsed with <a href="url.md#new-urlinput-base"><code>new URL()</code></a>. If it is a <a href="url.md#the-whatwg-url-api"><code>URL</code></a>
object, it will be automatically converted to an ordinary <code>options</code> object.</p>
<p>If both <code>url</code> and <code>options</code> are specified, the objects are merged, with the
<code>options</code> properties taking precedence.</p>
<p>The optional <code>callback</code> parameter will be added as a one-time listener for
the <a href="#event-response"><code>'response'</code></a> event.</p>
<p><code>http.request()</code> returns an instance of the <a href="#class-httpclientrequest"><code>http.ClientRequest</code></a>
class. The <code>ClientRequest</code> instance is a writable stream. If one needs to
upload a file with a POST request, then write to the <code>ClientRequest</code> object.</p>
<pre><code class="language-mjs">import http from 'node:http';
import { Buffer } from 'node:buffer';

const postData = JSON.stringify({
  'msg': 'Hello World!',
});

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) =&gt; {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) =&gt; {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () =&gt; {
    console.log('No more data in response.');
  });
});

req.on('error', (e) =&gt; {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');

const postData = JSON.stringify({
  'msg': 'Hello World!',
});

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

const req = http.request(options, (res) =&gt; {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) =&gt; {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () =&gt; {
    console.log('No more data in response.');
  });
});

req.on('error', (e) =&gt; {
  console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
</code></pre>
<p>In the example <code>req.end()</code> was called. With <code>http.request()</code> one
must always call <code>req.end()</code> to signify the end of the request -
even if there is no data being written to the request body.</p>
<p>If any error is encountered during the request (be that with DNS resolution,
TCP level errors, or actual HTTP parse errors) an <code>'error'</code> event is emitted
on the returned request object. As with all <code>'error'</code> events, if no listeners
are registered the error will be thrown.</p>
<p>There are a few special headers that should be noted.</p>
<ul>
<li>
<p>Sending a 'Connection: keep-alive' will notify Node.js that the connection to
the server should be persisted until the next request.</p>
</li>
<li>
<p>Sending a 'Content-Length' header will disable the default chunked encoding.</p>
</li>
<li>
<p>Sending an 'Expect' header will immediately send the request headers.
Usually, when sending 'Expect: 100-continue', both a timeout and a listener
for the <code>'continue'</code> event should be set. See RFC 2616 Section 8.2.3 for more
information.</p>
</li>
<li>
<p>Sending an Authorization header will override using the <code>auth</code> option
to compute basic authentication.</p>
</li>
</ul>
<p>Example using a <a href="url.md#the-whatwg-url-api"><code>URL</code></a> as <code>options</code>:</p>
<pre><code class="language-js">const options = new URL('http://abc:xyz@example.com');

const req = http.request(options, (res) =&gt; {
  // ...
});
</code></pre>
<p>In a successful request, the following events will be emitted in the following
order:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'response'</code>
<ul>
<li><code>'data'</code> any number of times, on the <code>res</code> object
(<code>'data'</code> will not be emitted at all if the response body is empty, for
instance, in most redirects)</li>
<li><code>'end'</code> on the <code>res</code> object</li>
</ul>
</li>
<li><code>'close'</code></li>
</ul>
<p>In the case of a connection error, the following events will be emitted:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'error'</code></li>
<li><code>'close'</code></li>
</ul>
<p>In the case of a premature connection close before the response is received,
the following events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'error'</code> with an error with message <code>'Error: socket hang up'</code> and code
<code>'ECONNRESET'</code></li>
<li><code>'close'</code></li>
</ul>
<p>In the case of a premature connection close after the response is received,
the following events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'response'</code>
<ul>
<li><code>'data'</code> any number of times, on the <code>res</code> object</li>
</ul>
</li>
<li>(connection closed here)</li>
<li><code>'aborted'</code> on the <code>res</code> object</li>
<li><code>'close'</code></li>
<li><code>'error'</code> on the <code>res</code> object with an error with message
<code>'Error: aborted'</code> and code <code>'ECONNRESET'</code></li>
<li><code>'close'</code> on the <code>res</code> object</li>
</ul>
<p>If a socket error (such as a TLS error) causes the premature close, that error
is emitted on the request before the close. The error emitted on the incomplete
response retains the message <code>'aborted'</code> and code <code>'ECONNRESET'</code>, with the original
socket error available as its <code>cause</code>. This also applies when the original socket
error has code <code>'ECONNRESET'</code>. If no underlying error is available, the response
error has no <code>cause</code> property.</p>
<p>If <code>req.destroy()</code> is called before a socket is assigned, the following
events will be emitted in the following order:</p>
<ul>
<li>(<code>req.destroy()</code> called here)</li>
<li><code>'error'</code> with an error with message <code>'Error: socket hang up'</code> and code
<code>'ECONNRESET'</code>, or the error with which <code>req.destroy()</code> was called</li>
<li><code>'close'</code></li>
</ul>
<p>If <code>req.destroy()</code> is called before the connection succeeds, the following
events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li>(<code>req.destroy()</code> called here)</li>
<li><code>'error'</code> with an error with message <code>'Error: socket hang up'</code> and code
<code>'ECONNRESET'</code>, or the error with which <code>req.destroy()</code> was called</li>
<li><code>'close'</code></li>
</ul>
<p>If <code>req.destroy()</code> is called after the response is received, the following
events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'response'</code>
<ul>
<li><code>'data'</code> any number of times, on the <code>res</code> object</li>
</ul>
</li>
<li>(<code>req.destroy()</code> called here)</li>
<li><code>'aborted'</code> on the <code>res</code> object</li>
<li><code>'close'</code></li>
<li><code>'error'</code> on the <code>res</code> object with an error with message <code>'Error: aborted'</code>
and code <code>'ECONNRESET'</code>. If an error was passed to <code>req.destroy()</code>, it is
available as the response error's <code>cause</code>.</li>
<li><code>'close'</code> on the <code>res</code> object</li>
</ul>
<p>If <code>req.abort()</code> is called before a socket is assigned, the following
events will be emitted in the following order:</p>
<ul>
<li>(<code>req.abort()</code> called here)</li>
<li><code>'abort'</code></li>
<li><code>'close'</code></li>
</ul>
<p>If <code>req.abort()</code> is called before the connection succeeds, the following
events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li>(<code>req.abort()</code> called here)</li>
<li><code>'abort'</code></li>
<li><code>'error'</code> with an error with message <code>'Error: socket hang up'</code> and code
<code>'ECONNRESET'</code></li>
<li><code>'close'</code></li>
</ul>
<p>If <code>req.abort()</code> is called after the response is received, the following
events will be emitted in the following order:</p>
<ul>
<li><code>'socket'</code></li>
<li><code>'response'</code>
<ul>
<li><code>'data'</code> any number of times, on the <code>res</code> object</li>
</ul>
</li>
<li>(<code>req.abort()</code> called here)</li>
<li><code>'abort'</code></li>
<li><code>'aborted'</code> on the <code>res</code> object</li>
<li><code>'error'</code> on the <code>res</code> object with an error with message
<code>'Error: aborted'</code> and code <code>'ECONNRESET'</code>.</li>
<li><code>'close'</code></li>
<li><code>'close'</code> on the <code>res</code> object</li>
</ul>
<p>Setting the <code>timeout</code> option or using the <code>setTimeout()</code> function will
not abort the request or do anything besides add a <code>'timeout'</code> event.</p>
<p>Passing an <code>AbortSignal</code> and then calling <code>abort()</code> on the corresponding
<code>AbortController</code> will behave the same way as calling <code>.destroy()</code> on the
request. Specifically, the <code>'error'</code> event will be emitted with an error with
the message <code>'AbortError: The operation was aborted'</code>, the code <code>'ABORT_ERR'</code>
and the <code>cause</code>, if one was provided.</p>
<h2><code>http.isValidHeaderName(name)</code></h2>
<ul>
<li><code>name</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if <code>name</code> is a valid HTTP header name (a non-empty string that
is an HTTP <a href="https://datatracker.ietf.org/doc/html/rfc9110#section-5.6.2">token</a>), and <code>false</code> otherwise. This is the same check that
<a href="#httpvalidateheadernamename-label"><code>http.validateHeaderName()</code></a> performs, but the result is returned instead of
an error being thrown, so it is suitable for use in hot paths where invalid
input is expected.</p>
<p>HTTP methods are also tokens, so this function can validate them as well.</p>
<pre><code class="language-mjs">import { isValidHeaderName } from 'node:http';

console.log(isValidHeaderName('content-type')); // true
console.log(isValidHeaderName('X-Request-Id')); // true
console.log(isValidHeaderName('')); // false
console.log(isValidHeaderName('bad header')); // false
console.log(isValidHeaderName(42)); // false
</code></pre>
<pre><code class="language-cjs">const { isValidHeaderName } = require('node:http');

console.log(isValidHeaderName('content-type')); // true
console.log(isValidHeaderName('X-Request-Id')); // true
console.log(isValidHeaderName('')); // false
console.log(isValidHeaderName('bad header')); // false
console.log(isValidHeaderName(42)); // false
</code></pre>
<h2><code>http.isValidHeaderValue(value[, options])</code></h2>
<ul>
<li><code>value</code> {any}</li>
<li><code>options</code> {Object}
<ul>
<li><code>httpValidation</code> {string} Validation strictness, one of <code>'strict'</code> or
<code>'relaxed'</code>. These have the same meaning as the <code>httpValidation</code> option of
<a href="#httpcreateserveroptions-requestlistener"><code>http.createServer()</code></a> and <a href="#httprequestoptions-callback"><code>http.request()</code></a>. <strong>Default:</strong> <code>'strict'</code>.</li>
</ul>
</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if <code>value</code> is a valid HTTP header value, and <code>false</code> otherwise.
With the default options this is the same check that
<a href="#httpvalidateheadervaluename-value"><code>http.validateHeaderValue()</code></a> performs, but the result is returned instead
of an error being thrown.</p>
<p><code>undefined</code> and symbols are never valid header values. Other non-string
values are converted to strings before being checked, as they are when passed
to <a href="#outgoingmessagesetheadername-value"><code>outgoingMessage.setHeader(name, value)</code></a>.</p>
<p>Passing an invalid <code>options</code> argument throws.</p>
<pre><code class="language-mjs">import { isValidHeaderValue } from 'node:http';

console.log(isValidHeaderValue('text/html')); // true
console.log(isValidHeaderValue(123)); // true
console.log(isValidHeaderValue(undefined)); // false
console.log(isValidHeaderValue('a\r\nb')); // false
console.log(isValidHeaderValue('a\x01b')); // false
console.log(isValidHeaderValue('a\x01b', { httpValidation: 'relaxed' })); // true
</code></pre>
<pre><code class="language-cjs">const { isValidHeaderValue } = require('node:http');

console.log(isValidHeaderValue('text/html')); // true
console.log(isValidHeaderValue(123)); // true
console.log(isValidHeaderValue(undefined)); // false
console.log(isValidHeaderValue('a\r\nb')); // false
console.log(isValidHeaderValue('a\x01b')); // false
console.log(isValidHeaderValue('a\x01b', { httpValidation: 'relaxed' })); // true
</code></pre>
<h2><code>http.validateHeaderName(name[, label])</code></h2>
<ul>
<li><code>name</code> {string}</li>
<li><code>label</code> {string} Label for error message. <strong>Default:</strong> <code>'Header name'</code>.</li>
</ul>
<p>Performs the low-level validations on the provided <code>name</code> that are done when
<code>res.setHeader(name, value)</code> is called.</p>
<p>Passing illegal value as <code>name</code> will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown,
identified by <code>code: 'ERR_INVALID_HTTP_TOKEN'</code>.</p>
<p>It is not necessary to use this method before passing headers to an HTTP request
or response. The HTTP module will automatically validate such headers.</p>
<p>Example:</p>
<pre><code class="language-mjs">import { validateHeaderName } from 'node:http';

try {
  validateHeaderName('');
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code); // --&gt; 'ERR_INVALID_HTTP_TOKEN'
  console.error(err.message); // --&gt; 'Header name must be a valid HTTP token [&quot;&quot;]'
}
</code></pre>
<pre><code class="language-cjs">const { validateHeaderName } = require('node:http');

try {
  validateHeaderName('');
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code); // --&gt; 'ERR_INVALID_HTTP_TOKEN'
  console.error(err.message); // --&gt; 'Header name must be a valid HTTP token [&quot;&quot;]'
}
</code></pre>
<h2><code>http.validateHeaderValue(name, value)</code></h2>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {any}</li>
</ul>
<p>Performs the low-level validations on the provided <code>value</code> that are done when
<code>res.setHeader(name, value)</code> is called.</p>
<p>Passing illegal value as <code>value</code> will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<ul>
<li>Undefined value error is identified by <code>code: 'ERR_HTTP_INVALID_HEADER_VALUE'</code>.</li>
<li>Invalid value character error is identified by <code>code: 'ERR_INVALID_CHAR'</code>.</li>
</ul>
<p>It is not necessary to use this method before passing headers to an HTTP request
or response. The HTTP module will automatically validate such headers.</p>
<p>Examples:</p>
<pre><code class="language-mjs">import { validateHeaderValue } from 'node:http';

try {
  validateHeaderValue('x-my-header', undefined);
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code === 'ERR_HTTP_INVALID_HEADER_VALUE'); // --&gt; true
  console.error(err.message); // --&gt; 'Invalid value &quot;undefined&quot; for header &quot;x-my-header&quot;'
}

try {
  validateHeaderValue('x-my-header', 'oʊmɪɡə');
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code === 'ERR_INVALID_CHAR'); // --&gt; true
  console.error(err.message); // --&gt; 'Invalid character in header content [&quot;x-my-header&quot;]'
}
</code></pre>
<pre><code class="language-cjs">const { validateHeaderValue } = require('node:http');

try {
  validateHeaderValue('x-my-header', undefined);
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code === 'ERR_HTTP_INVALID_HEADER_VALUE'); // --&gt; true
  console.error(err.message); // --&gt; 'Invalid value &quot;undefined&quot; for header &quot;x-my-header&quot;'
}

try {
  validateHeaderValue('x-my-header', 'oʊmɪɡə');
} catch (err) {
  console.error(err instanceof TypeError); // --&gt; true
  console.error(err.code === 'ERR_INVALID_CHAR'); // --&gt; true
  console.error(err.message); // --&gt; 'Invalid character in header content [&quot;x-my-header&quot;]'
}
</code></pre>
<h2><code>http.setMaxIdleHTTPParsers(max)</code></h2>
<ul>
<li><code>max</code> {number} <strong>Default:</strong> <code>1000</code>.</li>
</ul>
<p>Set the maximum number of idle HTTP parsers.</p>
<h2><code>http.setGlobalProxyFromEnv([proxyEnv])</code></h2>
<ul>
<li><code>proxyEnv</code> {Object} An object containing proxy configuration. This accepts the
same options as the <code>proxyEnv</code> option accepted by <a href="#class-httpagent"><code>Agent</code></a>. <strong>Default:</strong>
<code>process.env</code>.</li>
<li>Returns: {Function} A function that restores the original agent and dispatcher
settings to the state before this <code>http.setGlobalProxyFromEnv()</code> is invoked.</li>
</ul>
<p>Dynamically resets the global configurations to enable built-in proxy support for
<code>fetch()</code> and <code>http.request()</code>/<code>https.request()</code> at runtime, as an alternative
to using the <code>--use-env-proxy</code> flag or <code>NODE_USE_ENV_PROXY</code> environment variable.
It can also be used to override settings configured from the environment variables.</p>
<p>As this function resets the global configurations, any previously configured
<code>http.globalAgent</code>, <code>https.globalAgent</code> or undici global dispatcher would be
overridden after this function is invoked. It's recommended to invoke it before any
requests are made and avoid invoking it in the middle of any requests.</p>
<p>See <a href="#built-in-proxy-support">Built-in Proxy Support</a> for details on proxy URL formats and <code>NO_PROXY</code>
syntax.</p>
<h2>Class: <code>WebSocket</code></h2>
<p>A browser-compatible implementation of {WebSocket}.</p>
<h2>Built-in Proxy Support</h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When Node.js creates the global agent, if the <code>NODE_USE_ENV_PROXY</code> environment variable is
set to <code>1</code> or <code>--use-env-proxy</code> is enabled, the global agent will be constructed
with <code>proxyEnv: process.env</code>, enabling proxy support based on the environment variables.</p>
<p>To enable proxy support dynamically and globally, use <a href="#httpsetglobalproxyfromenvproxyenv"><code>http.setGlobalProxyFromEnv()</code></a>.</p>
<p>Custom agents can also be created with proxy support by passing a
<code>proxyEnv</code> option when constructing the agent. The value can be <code>process.env</code>
if they just want to inherit the configuration from the environment variables,
or an object with specific setting overriding the environment.</p>
<p>The following properties of the <code>proxyEnv</code> are checked to configure proxy
support.</p>
<ul>
<li><code>HTTP_PROXY</code> or <code>http_proxy</code>: Proxy server URL for HTTP requests. If both are set,
<code>http_proxy</code> takes precedence.</li>
<li><code>HTTPS_PROXY</code> or <code>https_proxy</code>: Proxy server URL for HTTPS requests. If both are set,
<code>https_proxy</code> takes precedence.</li>
<li><code>NO_PROXY</code> or <code>no_proxy</code>: Comma-separated list of hosts to bypass the proxy. If both are set,
<code>no_proxy</code> takes precedence.</li>
</ul>
<p>If the request is made to a Unix domain socket, the proxy settings will be ignored.</p>
<h3>Proxy security considerations</h3>
<p>Built-in proxy support routes outbound requests through an HTTP(S) proxy, often
because a firewall requires one to access external networks. It is not an
anonymity or traffic-hiding feature and does not attempt to hide traffic from
the proxy, the local network, network operators, or authorities that govern the
deployment.</p>
<p>Configure only proxies that are trusted and authorized for the deployment. A
proxy can observe connection metadata; for plain HTTP requests, or when TLS is
terminated or intercepted by the proxy, it can also observe request and response
contents. Node.js does not support treating an untrusted proxy as a privacy
boundary. Deployment operators are responsible for controlling proxy
configuration and for meeting deployment-specific network policy and legal
requirements.</p>
<h3>Proxy URL Format</h3>
<p>Proxy URLs can use either HTTP or HTTPS protocols:</p>
<ul>
<li>HTTP proxy: <code>http://proxy.example.com:8080</code></li>
<li>HTTPS proxy: <code>https://proxy.example.com:8080</code></li>
<li>Proxy with authentication: <code>http://username:password@proxy.example.com:8080</code></li>
</ul>
<h3><code>NO_PROXY</code> Format</h3>
<p>The <code>NO_PROXY</code> environment variable supports several formats:</p>
<ul>
<li><code>*</code> - Bypass proxy for all hosts</li>
<li><code>example.com</code> - Exact host name match</li>
<li><code>.example.com</code> - Domain suffix match (matches <code>sub.example.com</code>)</li>
<li><code>*.example.com</code> - Wildcard domain match</li>
<li><code>192.168.1.100</code> - Exact IP address match</li>
<li><code>192.168.1.1-192.168.1.100</code> - IP address range</li>
<li><code>example.com:8080</code> - Hostname with specific port</li>
</ul>
<p>Multiple entries should be separated by commas.</p>
<h3>Example</h3>
<p>To start a Node.js process with proxy support enabled for all requests sent
through the default global agent, either use the <code>NODE_USE_ENV_PROXY</code> environment
variable:</p>
<pre><code class="language-console">NODE_USE_ENV_PROXY=1 HTTP_PROXY=http://proxy.example.com:8080 NO_PROXY=localhost,127.0.0.1 node client.js
</code></pre>
<p>Or the <code>--use-env-proxy</code> flag.</p>
<pre><code class="language-console">HTTP_PROXY=http://proxy.example.com:8080 NO_PROXY=localhost,127.0.0.1 node --use-env-proxy client.js
</code></pre>
<p>To enable proxy support dynamically and globally with <code>process.env</code> (the default option of <code>http.setGlobalProxyFromEnv()</code>):</p>
<pre><code class="language-cjs">const http = require('node:http');

// Reads proxy-related environment variables from process.env
const restore = http.setGlobalProxyFromEnv();

// Subsequent requests will use the configured proxies from environment variables
http.get('http://www.example.com', (res) =&gt; {
  // This request will be proxied if HTTP_PROXY or http_proxy is set
});

fetch('https://www.example.com', (res) =&gt; {
  // This request will be proxied if HTTPS_PROXY or https_proxy is set
});

// To restore the original global agent and dispatcher settings, call the returned function.
// restore();
</code></pre>
<pre><code class="language-mjs">import http from 'node:http';

// Reads proxy-related environment variables from process.env
http.setGlobalProxyFromEnv();

// Subsequent requests will use the configured proxies from environment variables
http.get('http://www.example.com', (res) =&gt; {
  // This request will be proxied if HTTP_PROXY or http_proxy is set
});

fetch('https://www.example.com', (res) =&gt; {
  // This request will be proxied if HTTPS_PROXY or https_proxy is set
});

// To restore the original global agent and dispatcher settings, call the returned function.
// restore();
</code></pre>
<p>To enable proxy support dynamically and globally with custom settings:</p>
<pre><code class="language-cjs">const http = require('node:http');

const restore = http.setGlobalProxyFromEnv({
  http_proxy: 'http://proxy.example.com:8080',
  https_proxy: 'https://proxy.example.com:8443',
  no_proxy: 'localhost,127.0.0.1,.internal.example.com',
});

// Subsequent requests will use the configured proxies
http.get('http://www.example.com', (res) =&gt; {
  // This request will be proxied through proxy.example.com:8080
});

fetch('https://www.example.com', (res) =&gt; {
  // This request will be proxied through proxy.example.com:8443
});
</code></pre>
<pre><code class="language-mjs">import http from 'node:http';

http.setGlobalProxyFromEnv({
  http_proxy: 'http://proxy.example.com:8080',
  https_proxy: 'https://proxy.example.com:8443',
  no_proxy: 'localhost,127.0.0.1,.internal.example.com',
});

// Subsequent requests will use the configured proxies
http.get('http://www.example.com', (res) =&gt; {
  // This request will be proxied through proxy.example.com:8080
});

fetch('https://www.example.com', (res) =&gt; {
  // This request will be proxied through proxy.example.com:8443
});
</code></pre>
<p>To create a custom agent with built-in proxy support:</p>
<pre><code class="language-cjs">const http = require('node:http');

// Creating a custom agent with custom proxy support.
const agent = new http.Agent({ proxyEnv: { HTTP_PROXY: 'http://proxy.example.com:8080' } });

http.request({
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  agent,
}, (res) =&gt; {
  // This request will be proxied through proxy.example.com:8080 using the HTTP protocol.
  console.log(`STATUS: ${res.statusCode}`);
});
</code></pre>
<p>Alternatively, the following also works:</p>
<pre><code class="language-cjs">const http = require('node:http');
// Use lower-cased option name.
const agent1 = new http.Agent({ proxyEnv: { http_proxy: 'http://proxy.example.com:8080' } });
// Use values inherited from the environment variables, if the process is started with
// HTTP_PROXY=http://proxy.example.com:8080 this will use the proxy server specified
// in process.env.HTTP_PROXY.
const agent2 = new http.Agent({ proxyEnv: process.env });
</code></pre>
