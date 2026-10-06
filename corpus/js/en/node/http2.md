---
id: "js-en-function-node-http2"
language: "js"
lang: "en"
category: "function"
name: "node:http2"
title: "HTTP/2"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/http2.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# HTTP/2

<h1>HTTP/2</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:http2</code> module provides an implementation of the <a href="https://tools.ietf.org/html/rfc7540">HTTP/2</a> protocol.
It can be accessed using:</p>
<pre><code class="language-js">const http2 = require('node:http2');
</code></pre>
<h2>Determining if crypto support is unavailable</h2>
<p>It is possible for Node.js to be built without including support for the
<code>node:crypto</code> module. In such cases, attempting to <code>import</code> from <code>node:http2</code> or
calling <code>require('node:http2')</code> will result in an error being thrown.</p>
<p>When using CommonJS, the error thrown can be caught using try/catch:</p>
<pre><code class="language-cjs">let http2;
try {
  http2 = require('node:http2');
} catch (err) {
  console.error('http2 support is disabled!');
}
</code></pre>
<p>When using the lexical ESM <code>import</code> keyword, the error can only be
caught if a handler for <code>process.on('uncaughtException')</code> is registered
<em>before</em> any attempt to load the module is made (using, for instance,
a preload module).</p>
<p>When using ESM, if there is a chance that the code may be run on a build
of Node.js where crypto support is not enabled, consider using the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"><code>import()</code></a> function instead of the lexical <code>import</code> keyword:</p>
<pre><code class="language-mjs">let http2;
try {
  http2 = await import('node:http2');
} catch (err) {
  console.error('http2 support is disabled!');
}
</code></pre>
<h2>Core API</h2>
<p>The Core API provides a low-level interface designed specifically around
support for HTTP/2 protocol features. It is specifically <em>not</em> designed for
compatibility with the existing <a href="http.md">HTTP/1</a> module API. However,
the <a href="#compatibility-api">Compatibility API</a> is.</p>
<p>The <code>http2</code> Core API is much more symmetric between client and server than the
<code>http</code> API. For instance, most events, like <code>'error'</code>, <code>'connect'</code> and
<code>'stream'</code>, can be emitted either by client-side code or server-side code.</p>
<h3>Server-side example</h3>
<p>The following illustrates a simple HTTP/2 server using the Core API.
Since there are no browsers known that support
<a href="https://http2.github.io/faq/#does-http2-require-encryption">unencrypted HTTP/2</a>, the use of
<a href="#http2createsecureserveroptions-onrequesthandler"><code>http2.createSecureServer()</code></a> is necessary when communicating
with browser clients.</p>
<pre><code class="language-mjs">import { createSecureServer } from 'node:http2';
import { readFileSync } from 'node:fs';

const server = createSecureServer({
  key: readFileSync('localhost-privkey.pem'),
  cert: readFileSync('localhost-cert.pem'),
});

server.on('error', (err) =&gt; console.error(err));

server.on('stream', (stream, headers) =&gt; {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8443);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const fs = require('node:fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem'),
});
server.on('error', (err) =&gt; console.error(err));

server.on('stream', (stream, headers) =&gt; {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8443);
</code></pre>
<p>To generate the certificate and key for this example, run:</p>
<pre><code class="language-bash">openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
</code></pre>
<h3>Client-side example</h3>
<p>The following illustrates an HTTP/2 client:</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
import { readFileSync } from 'node:fs';

const client = connect('https://localhost:8443', {
  ca: readFileSync('localhost-cert.pem'),
});
client.on('error', (err) =&gt; console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) =&gt; {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) =&gt; { data += chunk; });
req.on('end', () =&gt; {
  console.log(`\n${data}`);
  client.close();
});
req.end();
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const fs = require('node:fs');

const client = http2.connect('https://localhost:8443', {
  ca: fs.readFileSync('localhost-cert.pem'),
});
client.on('error', (err) =&gt; console.error(err));

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) =&gt; {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) =&gt; { data += chunk; });
req.on('end', () =&gt; {
  console.log(`\n${data}`);
  client.close();
});
req.end();
</code></pre>
<h3>Class: <code>Http2Session</code></h3>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>Instances of the <code>http2.Http2Session</code> class represent an active communications
session between an HTTP/2 client and server. Instances of this class are <em>not</em>
intended to be constructed directly by user code.</p>
<p>Each <code>Http2Session</code> instance will exhibit slightly different behaviors
depending on whether it is operating as a server or a client. The
<code>http2session.type</code> property can be used to determine the mode in which an
<code>Http2Session</code> is operating. On the server side, user code should rarely
have occasion to work with the <code>Http2Session</code> object directly, with most
actions typically taken through interactions with either the <code>Http2Server</code> or
<code>Http2Stream</code> objects.</p>
<p>User code will not create <code>Http2Session</code> instances directly. Server-side
<code>Http2Session</code> instances are created by the <code>Http2Server</code> instance when a
new HTTP/2 connection is received. Client-side <code>Http2Session</code> instances are
created using the <code>http2.connect()</code> method.</p>
<h4><code>Http2Session</code> and sockets</h4>
<p>Every <code>Http2Session</code> instance is associated with exactly one <a href="net.md#class-netsocket"><code>net.Socket</code></a> or
<a href="tls.md#class-tlstlssocket"><code>tls.TLSSocket</code></a> when it is created. When either the <code>Socket</code> or the
<code>Http2Session</code> are destroyed, both will be destroyed.</p>
<p>Because of the specific serialization and processing requirements imposed
by the HTTP/2 protocol, it is not recommended for user code to read data from
or write data to a <code>Socket</code> instance bound to a <code>Http2Session</code>. Doing so can
put the HTTP/2 session into an indeterminate state causing the session and
the socket to become unusable.</p>
<p>Once a <code>Socket</code> has been bound to an <code>Http2Session</code>, user code should rely
solely on the API of the <code>Http2Session</code>.</p>
<h4>Event: <code>'close'</code></h4>
<p>The <code>'close'</code> event is emitted once the <code>Http2Session</code> has been destroyed. Its
listener does not expect any arguments.</p>
<h4>Event: <code>'connect'</code></h4>
<ul>
<li><code>session</code> {Http2Session}</li>
<li><code>socket</code> {net.Socket}</li>
</ul>
<p>The <code>'connect'</code> event is emitted once the <code>Http2Session</code> has been successfully
connected to the remote peer and communication may begin.</p>
<p>User code will typically not listen for this event directly.</p>
<h4>Event: <code>'error'</code></h4>
<ul>
<li><code>error</code> {Error}</li>
</ul>
<p>The <code>'error'</code> event is emitted when an error occurs during the processing of
an <code>Http2Session</code>.</p>
<h4>Event: <code>'frameError'</code></h4>
<ul>
<li><code>type</code> {integer} The frame type.</li>
<li><code>code</code> {integer} The error code.</li>
<li><code>id</code> {integer} The stream id (or <code>0</code> if the frame isn't associated with a
stream).</li>
</ul>
<p>The <code>'frameError'</code> event is emitted when an error occurs while attempting to
send a frame on the session. If the frame that could not be sent is associated
with a specific <code>Http2Stream</code>, an attempt to emit a <code>'frameError'</code> event on the
<code>Http2Stream</code> is made.</p>
<p>If the <code>'frameError'</code> event is associated with a stream, the stream will be
closed and destroyed immediately following the <code>'frameError'</code> event. If the
event is not associated with a stream, the <code>Http2Session</code> will be shut down
immediately following the <code>'frameError'</code> event.</p>
<h4>Event: <code>'goaway'</code></h4>
<ul>
<li><code>errorCode</code> {number} The HTTP/2 error code specified in the <code>GOAWAY</code> frame.</li>
<li><code>lastStreamID</code> {number} The ID of the last stream the remote peer successfully
processed (or <code>0</code> if no ID is specified).</li>
<li><code>opaqueData</code> {Buffer} If additional opaque data was included in the <code>GOAWAY</code>
frame, a <code>Buffer</code> instance will be passed containing that data.</li>
</ul>
<p>The <code>'goaway'</code> event is emitted when a <code>GOAWAY</code> frame is received.</p>
<p>The <code>Http2Session</code> instance will be shut down automatically when the <code>'goaway'</code>
event is emitted.</p>
<h4>Event: <code>'localSettings'</code></h4>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object} A copy of the <code>SETTINGS</code> frame received.</li>
</ul>
<p>The <code>'localSettings'</code> event is emitted when an acknowledgment <code>SETTINGS</code> frame
has been received.</p>
<p>When using <code>http2session.settings()</code> to submit new settings, the modified
settings do not take effect until the <code>'localSettings'</code> event is emitted.</p>
<pre><code class="language-js">session.settings({ enablePush: false });

session.on('localSettings', (settings) =&gt; {
  /* Use the new settings */
});
</code></pre>
<h4>Event: <code>'ping'</code></h4>
<ul>
<li><code>payload</code> {Buffer} The <code>PING</code> frame 8-byte payload</li>
</ul>
<p>The <code>'ping'</code> event is emitted whenever a <code>PING</code> frame is received from the
connected peer.</p>
<h4>Event: <code>'remoteSettings'</code></h4>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object} A copy of the <code>SETTINGS</code> frame received.</li>
</ul>
<p>The <code>'remoteSettings'</code> event is emitted when a new <code>SETTINGS</code> frame is received
from the connected peer.</p>
<pre><code class="language-js">session.on('remoteSettings', (settings) =&gt; {
  /* Use the new settings */
});
</code></pre>
<h4>Event: <code>'stream'</code></h4>
<ul>
<li><code>stream</code> {Http2Stream} A reference to the stream</li>
<li><code>headers</code> {HTTP/2 Headers Object} An object describing the headers</li>
<li><code>flags</code> {number} The associated numeric flags</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers} An array containing the raw headers</li>
</ul>
<p>The <code>'stream'</code> event is emitted when a new <code>Http2Stream</code> is created.</p>
<pre><code class="language-js">session.on('stream', (stream, headers, flags) =&gt; {
  const method = headers[':method'];
  const path = headers[':path'];
  // ...
  stream.respond({
    ':status': 200,
    'content-type': 'text/plain; charset=utf-8',
  });
  stream.write('hello ');
  stream.end('world');
});
</code></pre>
<p>On the server side, user code will typically not listen for this event directly,
and would instead register a handler for the <code>'stream'</code> event emitted by the
<code>net.Server</code> or <code>tls.Server</code> instances returned by <code>http2.createServer()</code> and
<code>http2.createSecureServer()</code>, respectively, as in the example below:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';

// Create an unencrypted HTTP/2 server
const server = createServer();

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.on('error', (error) =&gt; console.error(error));
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

// Create an unencrypted HTTP/2 server
const server = http2.createServer();

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.on('error', (error) =&gt; console.error(error));
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8000);
</code></pre>
<p>Even though HTTP/2 streams and network sockets are not in a 1:1 correspondence,
a network error will destroy each individual stream and must be handled on the
stream level, as shown above.</p>
<h4>Event: <code>'timeout'</code></h4>
<p>After the <code>http2session.setTimeout()</code> method is used to set the timeout period
for this <code>Http2Session</code>, the <code>'timeout'</code> event is emitted if there is no
activity on the <code>Http2Session</code> after the configured number of milliseconds.
Its listener does not expect any arguments.</p>
<pre><code class="language-js">session.setTimeout(2000);
session.on('timeout', () =&gt; { /* .. */ });
</code></pre>
<h4><code>http2session.alpnProtocol</code></h4>
<ul>
<li>Type: {string|undefined}</li>
</ul>
<p>Value will be <code>undefined</code> if the <code>Http2Session</code> is not yet connected to a
socket, <code>h2c</code> if the <code>Http2Session</code> is not connected to a <code>TLSSocket</code>, or
will return the value of the connected <code>TLSSocket</code>'s own <code>alpnProtocol</code>
property.</p>
<h4><code>http2session.close([callback])</code></h4>
<ul>
<li><code>callback</code> {Function}</li>
</ul>
<p>Gracefully closes the <code>Http2Session</code>, allowing any existing streams to
complete on their own and preventing new <code>Http2Stream</code> instances from being
created. Once closed, <code>http2session.destroy()</code> <em>might</em> be called if there
are no open <code>Http2Stream</code> instances.</p>
<p>If specified, the <code>callback</code> function is registered as a handler for the
<code>'close'</code> event.</p>
<h4><code>http2session.closed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Will be <code>true</code> if this <code>Http2Session</code> instance has been closed, otherwise
<code>false</code>.</p>
<h4><code>http2session.connecting</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Will be <code>true</code> if this <code>Http2Session</code> instance is still connecting, will be set
to <code>false</code> before emitting <code>connect</code> event and/or calling the <code>http2.connect</code>
callback.</p>
<h4><code>http2session.destroy([error][, code])</code></h4>
<ul>
<li><code>error</code> {Error} An <code>Error</code> object if the <code>Http2Session</code> is being destroyed
due to an error.</li>
<li><code>code</code> {number} The HTTP/2 error code to send in the final <code>GOAWAY</code> frame.
If unspecified, and <code>error</code> is not undefined, the default is <code>INTERNAL_ERROR</code>,
otherwise defaults to <code>NO_ERROR</code>.</li>
</ul>
<p>Immediately terminates the <code>Http2Session</code> and the associated <code>net.Socket</code> or
<code>tls.TLSSocket</code>.</p>
<p>Once destroyed, the <code>Http2Session</code> will emit the <code>'close'</code> event. If <code>error</code>
is not undefined, an <code>'error'</code> event will be emitted immediately before the
<code>'close'</code> event.</p>
<p>If there are any remaining open <code>Http2Streams</code> associated with the
<code>Http2Session</code>, those will also be destroyed.</p>
<h4><code>http2session.destroyed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Will be <code>true</code> if this <code>Http2Session</code> instance has been destroyed and must no
longer be used, otherwise <code>false</code>.</p>
<h4><code>http2session.encrypted</code></h4>
<ul>
<li>Type: {boolean|undefined}</li>
</ul>
<p>Value is <code>undefined</code> if the <code>Http2Session</code> session socket has not yet been
connected, <code>true</code> if the <code>Http2Session</code> is connected with a <code>TLSSocket</code>,
and <code>false</code> if the <code>Http2Session</code> is connected to any other kind of socket
or stream.</p>
<h4><code>http2session.goaway([code[, lastStreamID[, opaqueData]]])</code></h4>
<ul>
<li><code>code</code> {number} An HTTP/2 error code</li>
<li><code>lastStreamID</code> {number} The numeric ID of the last processed <code>Http2Stream</code></li>
<li><code>opaqueData</code> {Buffer|TypedArray|DataView} A <code>TypedArray</code> or <code>DataView</code>
instance containing additional data to be carried within the <code>GOAWAY</code> frame.</li>
</ul>
<p>Transmits a <code>GOAWAY</code> frame to the connected peer <em>without</em> shutting down the
<code>Http2Session</code>.</p>
<h4><code>http2session.localSettings</code></h4>
<ul>
<li>Type: {HTTP/2 Settings Object}</li>
</ul>
<p>A prototype-less object describing the current local settings of this
<code>Http2Session</code>. The local settings are local to <em>this</em> <code>Http2Session</code> instance.</p>
<h4><code>http2session.originSet</code></h4>
<ul>
<li>Type: {string[]|undefined}</li>
</ul>
<p>If the <code>Http2Session</code> is connected to a <code>TLSSocket</code>, the <code>originSet</code> property
will return an <code>Array</code> of origins for which the <code>Http2Session</code> may be
considered authoritative.</p>
<p>The <code>originSet</code> property is only available when using a secure TLS connection.</p>
<h4><code>http2session.pendingSettingsAck</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Indicates whether the <code>Http2Session</code> is currently waiting for acknowledgment of
a sent <code>SETTINGS</code> frame. Will be <code>true</code> after calling the
<code>http2session.settings()</code> method. Will be <code>false</code> once all sent <code>SETTINGS</code>
frames have been acknowledged.</p>
<h4><code>http2session.ping([payload, ]callback)</code></h4>
<ul>
<li><code>payload</code> {Buffer|TypedArray|DataView} Optional ping payload.</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Sends a <code>PING</code> frame to the connected HTTP/2 peer. A <code>callback</code> function must
be provided. The method will return <code>true</code> if the <code>PING</code> was sent, <code>false</code>
otherwise.</p>
<p>The maximum number of outstanding (unacknowledged) pings is determined by the
<code>maxOutstandingPings</code> configuration option. The default maximum is 10.</p>
<p>If provided, the <code>payload</code> must be a <code>Buffer</code>, <code>TypedArray</code>, or <code>DataView</code>
containing 8 bytes of data that will be transmitted with the <code>PING</code> and
returned with the ping acknowledgment.</p>
<p>The callback will be invoked with three arguments: an error argument that will
be <code>null</code> if the <code>PING</code> was successfully acknowledged, a <code>duration</code> argument
that reports the number of milliseconds elapsed since the ping was sent and the
acknowledgment was received, and a <code>Buffer</code> containing the 8-byte <code>PING</code>
payload.</p>
<pre><code class="language-js">session.ping(Buffer.from('abcdefgh'), (err, duration, payload) =&gt; {
  if (!err) {
    console.log(`Ping acknowledged in ${duration} milliseconds`);
    console.log(`With payload '${payload.toString()}'`);
  }
});
</code></pre>
<p>If the <code>payload</code> argument is not specified, the default payload will be the
64-bit timestamp (little endian) marking the start of the <code>PING</code> duration.</p>
<h4><code>http2session.ref()</code></h4>
<p>Calls <a href="net.md#socketref"><code>ref()</code></a> on this <code>Http2Session</code>
instance's underlying <a href="net.md#class-netsocket"><code>net.Socket</code></a>.</p>
<h4><code>http2session.remoteSettings</code></h4>
<ul>
<li>Type: {HTTP/2 Settings Object}</li>
</ul>
<p>A prototype-less object describing the current remote settings of this
<code>Http2Session</code>. The remote settings are set by the <em>connected</em> HTTP/2 peer.</p>
<h4><code>http2session.setLocalWindowSize(windowSize)</code></h4>
<ul>
<li><code>windowSize</code> {number}</li>
</ul>
<p>Sets the local endpoint's connection-level window size.
The <code>windowSize</code> is the total window size to set, not
the delta.</p>
<p>Increases take effect immediately, but decreases only apply as the window
already advertised to the peer is consumed, since a window that has been
advertised cannot be retracted. To use a window smaller than the default from
the start of the connection, set the <code>connectionWindowSize</code> option when
creating the server or client session instead.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';

const server = createServer();
const expectedWindowSize = 2 ** 20;
server.on('session', (session) =&gt; {

  // Set local window size to be 2 ** 20
  session.setLocalWindowSize(expectedWindowSize);
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

const server = http2.createServer();
const expectedWindowSize = 2 ** 20;
server.on('session', (session) =&gt; {

  // Set local window size to be 2 ** 20
  session.setLocalWindowSize(expectedWindowSize);
});
</code></pre>
<p>For http2 clients the proper event is either <code>'connect'</code> or <code>'remoteSettings'</code>.</p>
<h4><code>http2session.setTimeout(msecs, callback)</code></h4>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
</ul>
<p>Used to set a callback function that is called when there is no activity on
the <code>Http2Session</code> after <code>msecs</code> milliseconds. The given <code>callback</code> is
registered as a listener on the <code>'timeout'</code> event.</p>
<h4><code>http2session.socket</code></h4>
<ul>
<li>Type: {net.Socket|tls.TLSSocket}</li>
</ul>
<p>Returns a <code>Proxy</code> object that acts as a <code>net.Socket</code> (or <code>tls.TLSSocket</code>) but
limits available methods to ones safe to use with HTTP/2.</p>
<p><code>emit</code>, <code>end</code>, <code>pause</code>, <code>read</code>, <code>resume</code>, and <code>write</code> will throw
an error with code <code>ERR_HTTP2_NO_SOCKET_MANIPULATION</code>. See
<a href="#http2session-and-sockets"><code>Http2Session</code> and Sockets</a> for more information.</p>
<p><code>destroy</code>, <code>setTimeout</code>, <code>ref</code>, and <code>unref</code> methods will be called on this
<code>Http2Session</code>.</p>
<p>All other interactions will be routed directly to the socket.</p>
<h4><code>http2session.state</code></h4>
<p>Provides miscellaneous information about the current state of the
<code>Http2Session</code>.</p>
<ul>
<li>Type: {Object}
<ul>
<li><code>effectiveLocalWindowSize</code> {number} The current local (receive)
flow control window size for the <code>Http2Session</code>.</li>
<li><code>effectiveRecvDataLength</code> {number} The current number of bytes
that have been received since the last flow control <code>WINDOW_UPDATE</code>.</li>
<li><code>nextStreamID</code> {number} The numeric identifier to be used the
next time a new <code>Http2Stream</code> is created by this <code>Http2Session</code>.</li>
<li><code>localWindowSize</code> {number} The number of bytes that the remote peer can
send without receiving a <code>WINDOW_UPDATE</code>.</li>
<li><code>lastProcStreamID</code> {number} The numeric id of the <code>Http2Stream</code>
for which a <code>HEADERS</code> or <code>DATA</code> frame was most recently received.</li>
<li><code>remoteWindowSize</code> {number} The number of bytes that this <code>Http2Session</code>
may send without receiving a <code>WINDOW_UPDATE</code>.</li>
<li><code>outboundQueueSize</code> {number} The number of frames currently within the
outbound queue for this <code>Http2Session</code>.</li>
<li><code>deflateDynamicTableSize</code> {number} The current size in bytes of the
outbound header compression state table.</li>
<li><code>inflateDynamicTableSize</code> {number} The current size in bytes of the
inbound header compression state table.</li>
</ul>
</li>
</ul>
<p>An object describing the current status of this <code>Http2Session</code>.</p>
<h4><code>http2session.settings([settings][, callback])</code></h4>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object}</li>
<li><code>callback</code> {Function} Callback that is called once the session is connected or
right away if the session is already connected.
<ul>
<li><code>err</code> {Error|null}</li>
<li><code>settings</code> {HTTP/2 Settings Object} The updated <code>settings</code> object.</li>
<li><code>duration</code> {integer}</li>
</ul>
</li>
</ul>
<p>Updates the current local settings for this <code>Http2Session</code> and sends a new
<code>SETTINGS</code> frame to the connected HTTP/2 peer.</p>
<p>Once called, the <code>http2session.pendingSettingsAck</code> property will be <code>true</code>
while the session is waiting for the remote peer to acknowledge the new
settings.</p>
<p>The new settings will not become effective until the <code>SETTINGS</code> acknowledgment
is received and the <code>'localSettings'</code> event is emitted. It is possible to send
multiple <code>SETTINGS</code> frames while acknowledgment is still pending.</p>
<h4><code>http2session.type</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The <code>http2session.type</code> will be equal to
<code>http2.constants.NGHTTP2_SESSION_SERVER</code> if this <code>Http2Session</code> instance is a
server, and <code>http2.constants.NGHTTP2_SESSION_CLIENT</code> if the instance is a
client.</p>
<h4><code>http2session.unref()</code></h4>
<p>Calls <a href="net.md#socketunref"><code>unref()</code></a> on this <code>Http2Session</code>
instance's underlying <a href="net.md#class-netsocket"><code>net.Socket</code></a>.</p>
<h3>Class: <code>ServerHttp2Session</code></h3>
<ul>
<li>Extends: {Http2Session}</li>
</ul>
<h4><code>serverhttp2session.altsvc(alt, originOrStream)</code></h4>
<ul>
<li><code>alt</code> {string} A description of the alternative service configuration as
defined by <a href="https://tools.ietf.org/html/rfc7838">RFC 7838</a>.</li>
<li><code>originOrStream</code> {number|string|URL|Object} Either a URL string specifying
the origin (or an <code>Object</code> with an <code>origin</code> property) or the numeric
identifier of an active <code>Http2Stream</code> as given by the <code>http2stream.id</code>
property.</li>
</ul>
<p>Submits an <code>ALTSVC</code> frame (as defined by <a href="https://tools.ietf.org/html/rfc7838">RFC 7838</a>) to the connected client.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';

const server = createServer();
server.on('session', (session) =&gt; {
  // Set altsvc for origin https://example.org:80
  session.altsvc('h2=&quot;:8000&quot;', 'https://example.org:80');
});

server.on('stream', (stream) =&gt; {
  // Set altsvc for a specific stream
  stream.session.altsvc('h2=&quot;:8000&quot;', stream.id);
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

const server = http2.createServer();
server.on('session', (session) =&gt; {
  // Set altsvc for origin https://example.org:80
  session.altsvc('h2=&quot;:8000&quot;', 'https://example.org:80');
});

server.on('stream', (stream) =&gt; {
  // Set altsvc for a specific stream
  stream.session.altsvc('h2=&quot;:8000&quot;', stream.id);
});
</code></pre>
<p>Sending an <code>ALTSVC</code> frame with a specific stream ID indicates that the alternate
service is associated with the origin of the given <code>Http2Stream</code>.</p>
<p>The <code>alt</code> and origin string <em>must</em> contain only ASCII bytes and are
strictly interpreted as a sequence of ASCII bytes. The special value <code>'clear'</code>
may be passed to clear any previously set alternative service for a given
domain.</p>
<p>When a string is passed for the <code>originOrStream</code> argument, it will be parsed as
a URL and the origin will be derived. For instance, the origin for the
HTTP URL <code>'https://example.org/foo/bar'</code> is the ASCII string
<code>'https://example.org'</code>. An error will be thrown if either the given string
cannot be parsed as a URL or if a valid origin cannot be derived.</p>
<p>A <code>URL</code> object, or any object with an <code>origin</code> property, may be passed as
<code>originOrStream</code>, in which case the value of the <code>origin</code> property will be
used. The value of the <code>origin</code> property <em>must</em> be a properly serialized
ASCII origin.</p>
<h4>Specifying alternative services</h4>
<p>The format of the <code>alt</code> parameter is strictly defined by <a href="https://tools.ietf.org/html/rfc7838">RFC 7838</a> as an
ASCII string containing a comma-delimited list of &quot;alternative&quot; protocols
associated with a specific host and port.</p>
<p>For example, the value <code>'h2=&quot;example.org:81&quot;'</code> indicates that the HTTP/2
protocol is available on the host <code>'example.org'</code> on TCP/IP port 81. The
host and port <em>must</em> be contained within the quote (<code>&quot;</code>) characters.</p>
<p>Multiple alternatives may be specified, for instance: <code>'h2=&quot;example.org:81&quot;, h2=&quot;:82&quot;'</code>.</p>
<p>The protocol identifier (<code>'h2'</code> in the examples) may be any valid
<a href="https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids">ALPN Protocol ID</a>.</p>
<p>The syntax of these values is not validated by the Node.js implementation and
are passed through as provided by the user or received from the peer.</p>
<h4><code>serverhttp2session.origin(...origins)</code></h4>
<ul>
<li><code>origins</code> { string | URL | Object } One or more URL Strings passed as
separate arguments.</li>
</ul>
<p>Submits an <code>ORIGIN</code> frame (as defined by <a href="https://tools.ietf.org/html/rfc8336">RFC 8336</a>) to the connected client
to advertise the set of origins for which the server is capable of providing
authoritative responses.</p>
<pre><code class="language-mjs">import { createSecureServer } from 'node:http2';
const options = getSecureOptionsSomehow();
const server = createSecureServer(options);
server.on('stream', (stream) =&gt; {
  stream.respond();
  stream.end('ok');
});
server.on('session', (session) =&gt; {
  session.origin('https://example.com', 'https://example.org');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const options = getSecureOptionsSomehow();
const server = http2.createSecureServer(options);
server.on('stream', (stream) =&gt; {
  stream.respond();
  stream.end('ok');
});
server.on('session', (session) =&gt; {
  session.origin('https://example.com', 'https://example.org');
});
</code></pre>
<p>When a string is passed as an <code>origin</code>, it will be parsed as a URL and the
origin will be derived. For instance, the origin for the HTTP URL
<code>'https://example.org/foo/bar'</code> is the ASCII string
<code>'https://example.org'</code>. An error will be thrown if either the given string
cannot be parsed as a URL or if a valid origin cannot be derived.</p>
<p>A <code>URL</code> object, or any object with an <code>origin</code> property, may be passed as
an <code>origin</code>, in which case the value of the <code>origin</code> property will be
used. The value of the <code>origin</code> property <em>must</em> be a properly serialized
ASCII origin.</p>
<p>Alternatively, the <code>origins</code> option may be used when creating a new HTTP/2
server using the <code>http2.createSecureServer()</code> method:</p>
<pre><code class="language-mjs">import { createSecureServer } from 'node:http2';
const options = getSecureOptionsSomehow();
options.origins = ['https://example.com', 'https://example.org'];
const server = createSecureServer(options);
server.on('stream', (stream) =&gt; {
  stream.respond();
  stream.end('ok');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const options = getSecureOptionsSomehow();
options.origins = ['https://example.com', 'https://example.org'];
const server = http2.createSecureServer(options);
server.on('stream', (stream) =&gt; {
  stream.respond();
  stream.end('ok');
});
</code></pre>
<h3>Class: <code>ClientHttp2Session</code></h3>
<ul>
<li>Extends: {Http2Session}</li>
</ul>
<h4>Event: <code>'altsvc'</code></h4>
<ul>
<li><code>alt</code> {string}</li>
<li><code>origin</code> {string}</li>
<li><code>streamId</code> {number}</li>
</ul>
<p>The <code>'altsvc'</code> event is emitted whenever an <code>ALTSVC</code> frame is received by
the client. The event is emitted with the <code>ALTSVC</code> value, origin, and stream
ID. If no <code>origin</code> is provided in the <code>ALTSVC</code> frame, <code>origin</code> will
be an empty string.</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
const client = connect('https://example.org');

client.on('altsvc', (alt, origin, streamId) =&gt; {
  console.log(alt);
  console.log(origin);
  console.log(streamId);
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('https://example.org');

client.on('altsvc', (alt, origin, streamId) =&gt; {
  console.log(alt);
  console.log(origin);
  console.log(streamId);
});
</code></pre>
<h4>Event: <code>'origin'</code></h4>
<ul>
<li><code>origins</code> {string[]}</li>
</ul>
<p>The <code>'origin'</code> event is emitted whenever an <code>ORIGIN</code> frame is received by
the client. The event is emitted with an array of <code>origin</code> strings. The
<code>http2session.originSet</code> will be updated to include the received
origins.</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
const client = connect('https://example.org');

client.on('origin', (origins) =&gt; {
  for (let n = 0; n &lt; origins.length; n++)
    console.log(origins[n]);
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('https://example.org');

client.on('origin', (origins) =&gt; {
  for (let n = 0; n &lt; origins.length; n++)
    console.log(origins[n]);
});
</code></pre>
<p>The <code>'origin'</code> event is only emitted when using a secure TLS connection.</p>
<h4><code>clienthttp2session.request(headers[, options])</code></h4>
<ul>
<li>
<p><code>headers</code> {HTTP/2 Headers Object|HTTP/2 Raw Headers}</p>
</li>
<li>
<p><code>options</code> {Object}</p>
<ul>
<li><code>endStream</code> {boolean} <code>true</code> if the <code>Http2Stream</code> <em>writable</em> side should
be closed initially, such as when sending a <code>GET</code> request that should not
expect a payload body.</li>
<li><code>exclusive</code> {boolean} When <code>true</code> and <code>parent</code> identifies a parent Stream,
the created stream is made the sole direct dependency of the parent, with
all other existing dependents made a dependent of the newly created stream.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>parent</code> {number} Specifies the numeric identifier of a stream the newly
created stream is dependent on.</li>
<li><code>waitForTrailers</code> {boolean} When <code>true</code>, the <code>Http2Stream</code> will emit the
<code>'wantTrailers'</code> event after the final <code>DATA</code> frame has been sent.</li>
<li><code>signal</code> {AbortSignal} An AbortSignal that may be used to abort an ongoing
request.</li>
</ul>
</li>
<li>
<p>Returns: {ClientHttp2Stream}</p>
</li>
</ul>
<p>For HTTP/2 Client <code>Http2Session</code> instances only, the <code>http2session.request()</code>
creates and returns an <code>Http2Stream</code> instance that can be used to send an
HTTP/2 request to the connected server.</p>
<p>When a <code>ClientHttp2Session</code> is first created, the socket may not yet be
connected. If <code>clienthttp2session.request()</code> is called during this time, the
actual request will be deferred until the socket is ready to go.</p>
<p>If the session becomes unavailable before the request can be created, the
returned stream will emit <code>ERR_HTTP2_GOAWAY_SESSION</code> or
<code>ERR_HTTP2_INVALID_SESSION</code> asynchronously.</p>
<p>This method is only available if <code>http2session.type</code> is equal to
<code>http2.constants.NGHTTP2_SESSION_CLIENT</code>.</p>
<pre><code class="language-mjs">import { connect, constants } from 'node:http2';
const clientSession = connect('https://localhost:1234');
const {
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
} = constants;

const req = clientSession.request({ [HTTP2_HEADER_PATH]: '/' });
req.on('response', (headers) =&gt; {
  console.log(headers[HTTP2_HEADER_STATUS]);
  req.on('data', (chunk) =&gt; { /* .. */ });
  req.on('end', () =&gt; { /* .. */ });
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const clientSession = http2.connect('https://localhost:1234');
const {
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
} = http2.constants;

const req = clientSession.request({ [HTTP2_HEADER_PATH]: '/' });
req.on('response', (headers) =&gt; {
  console.log(headers[HTTP2_HEADER_STATUS]);
  req.on('data', (chunk) =&gt; { /* .. */ });
  req.on('end', () =&gt; { /* .. */ });
});
</code></pre>
<p>When the <code>options.waitForTrailers</code> option is set, the <code>'wantTrailers'</code> event
is emitted immediately after queuing the last chunk of payload data to be sent.
The <code>http2stream.sendTrailers()</code> method can then be called to send trailing
headers to the peer.</p>
<p>When <code>options.waitForTrailers</code> is set, the <code>Http2Stream</code> will not automatically
close when the final <code>DATA</code> frame is transmitted. User code must call either
<code>http2stream.sendTrailers()</code> or <code>http2stream.close()</code> to close the
<code>Http2Stream</code>.</p>
<p>When <code>options.signal</code> is set with an <code>AbortSignal</code> and then <code>abort</code> on the
corresponding <code>AbortController</code> is called, the request will emit an <code>'error'</code>
event with an <code>AbortError</code> error.</p>
<p>The <code>:method</code> and <code>:path</code> pseudo-headers are not specified within <code>headers</code>,
they respectively default to:</p>
<ul>
<li><code>:method</code> = <code>'GET'</code></li>
<li><code>:path</code> = <code>/</code></li>
</ul>
<h3>Class: <code>Http2Stream</code></h3>
<ul>
<li>Extends: {stream.Duplex}</li>
</ul>
<p>Each instance of the <code>Http2Stream</code> class represents a bidirectional HTTP/2
communications stream over an <code>Http2Session</code> instance. Any single <code>Http2Session</code>
may have up to 2&lt;sup&gt;31&lt;/sup&gt;-1 <code>Http2Stream</code> instances over its lifetime.</p>
<p>User code will not construct <code>Http2Stream</code> instances directly. Rather, these
are created, managed, and provided to user code through the <code>Http2Session</code>
instance. On the server, <code>Http2Stream</code> instances are created either in response
to an incoming HTTP request (and handed off to user code via the <code>'stream'</code>
event), or in response to a call to the <code>http2stream.pushStream()</code> method.
On the client, <code>Http2Stream</code> instances are created and returned when either the
<code>http2session.request()</code> method is called, or in response to an incoming
<code>'push'</code> event.</p>
<p>The <code>Http2Stream</code> class is a base for the <a href="#class-serverhttp2stream"><code>ServerHttp2Stream</code></a> and
<a href="#class-clienthttp2stream"><code>ClientHttp2Stream</code></a> classes, each of which is used specifically by either
the Server or Client side, respectively.</p>
<p>All <code>Http2Stream</code> instances are <a href="stream.md#class-streamduplex"><code>Duplex</code></a> streams. The <code>Writable</code> side of the
<code>Duplex</code> is used to send data to the connected peer, while the <code>Readable</code> side
is used to receive data sent by the connected peer.</p>
<p>The default text character encoding for an <code>Http2Stream</code> is UTF-8. When using an
<code>Http2Stream</code> to send text, use the <code>'content-type'</code> header to set the character
encoding.</p>
<pre><code class="language-js">stream.respond({
  'content-type': 'text/html; charset=utf-8',
  ':status': 200,
});
</code></pre>
<h4><code>Http2Stream</code> Lifecycle</h4>
<h5>Creation</h5>
<p>On the server side, instances of <a href="#class-serverhttp2stream"><code>ServerHttp2Stream</code></a> are created either
when:</p>
<ul>
<li>A new HTTP/2 <code>HEADERS</code> frame with a previously unused stream ID is received;</li>
<li>The <code>http2stream.pushStream()</code> method is called.</li>
</ul>
<p>On the client side, instances of <a href="#class-clienthttp2stream"><code>ClientHttp2Stream</code></a> are created when the
<code>http2session.request()</code> method is called.</p>
<p>On the client, the <code>Http2Stream</code> instance returned by <code>http2session.request()</code>
may not be immediately ready for use if the parent <code>Http2Session</code> has not yet
been fully established. In such cases, operations called on the <code>Http2Stream</code>
will be buffered until the <code>'ready'</code> event is emitted. User code should rarely,
if ever, need to handle the <code>'ready'</code> event directly. The ready status of an
<code>Http2Stream</code> can be determined by checking the value of <code>http2stream.id</code>. If
the value is <code>undefined</code>, the stream is not yet ready for use.</p>
<h5>Destruction</h5>
<p>All <a href="#class-http2stream"><code>Http2Stream</code></a> instances are destroyed when one of the following
happens:</p>
<ul>
<li>Both sides send <code>END_STREAM</code> (a clean exchange).</li>
<li>The peer sends an <code>RST_STREAM</code> frame.</li>
<li><code>http2stream.close()</code>, <code>http2stream.destroy()</code>, or <code>http2session.destroy()</code>
is called locally.</li>
</ul>
<p>For clean exchanges and clean cancels, the destroy is deferred until any
pending <code>'end'</code> and <code>'finish'</code> events have fired. When destroyed, an
attempt is made to send an <code>RST_STREAM</code> frame to the connected peer if
one hasn't already been sent.</p>
<p><code>'close'</code> is always emitted on destroy. <code>'end'</code> and <code>'finish'</code> fire if
their respective halves completed before destroy. <code>'error'</code> fires when
the destroy carries an error — either via <code>http2stream.destroy(err)</code>,
or when the peer reset the stream before sending <code>END_STREAM</code>.</p>
<p>After the <code>Http2Stream</code> has been destroyed, the <code>http2stream.destroyed</code>
property will be <code>true</code> and the <code>http2stream.rstCode</code> property will specify the
<code>RST_STREAM</code> error code. The <code>Http2Stream</code> instance is no longer usable once
destroyed.</p>
<h4>Event: <code>'aborted'</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated. Use <code>'close'</code> and <code>'error'</code> plus
<code>stream.destroyed</code>.</p>
</blockquote>
<p>Emitted when an <code>Http2Stream</code> is closed before the writable side has
been ended (via <code>.end()</code> or auto-ended via <code>respond({ endStream: true })</code>).
Listeners receive no arguments.</p>
<h4>Event: <code>'close'</code></h4>
<p>The <code>'close'</code> event is emitted when the <code>Http2Stream</code> is destroyed. Once
this event is emitted, the <code>Http2Stream</code> instance is no longer usable.</p>
<p>The HTTP/2 error code used when closing the stream can be retrieved using
the <code>http2stream.rstCode</code> property.</p>
<h4>Event: <code>'error'</code></h4>
<ul>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when an error occurs processing the <code>Http2Stream</code>. This includes
peer-initiated resets that arrive before the readable side has been
fully delivered: a clean reset code (<code>NGHTTP2_NO_ERROR</code> or
<code>NGHTTP2_CANCEL</code>) surfaces as <a href="errors.md#err_http2_stream_aborted"><code>ERR_HTTP2_STREAM_ABORTED</code></a>, any other
code as <a href="errors.md#err_http2_stream_error"><code>ERR_HTTP2_STREAM_ERROR</code></a>.</p>
<h4>Event: <code>'frameError'</code></h4>
<ul>
<li><code>type</code> {integer} The frame type.</li>
<li><code>code</code> {integer} The error code.</li>
<li><code>id</code> {integer} The stream id (or <code>0</code> if the frame isn't associated with a
stream).</li>
</ul>
<p>The <code>'frameError'</code> event is emitted when an error occurs while attempting to
send a frame. When invoked, the handler function will receive an integer
argument identifying the frame type, and an integer argument identifying the
error code. The <code>Http2Stream</code> instance will be destroyed immediately after the
<code>'frameError'</code> event is emitted.</p>
<h4>Event: <code>'ready'</code></h4>
<p>The <code>'ready'</code> event is emitted when the <code>Http2Stream</code> has been opened, has
been assigned an <code>id</code>, and can be used. The listener does not expect any
arguments.</p>
<h4>Event: <code>'timeout'</code></h4>
<p>The <code>'timeout'</code> event is emitted after no activity is received for this
<code>Http2Stream</code> within the number of milliseconds set using
<code>http2stream.setTimeout()</code>.
Its listener does not expect any arguments.</p>
<h4>Event: <code>'trailers'</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object} An object describing the headers</li>
<li><code>flags</code> {number} The associated numeric flags</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers}</li>
</ul>
<p>The <code>'trailers'</code> event is emitted when a block of headers associated with
trailing header fields is received. The listener callback is passed the <a href="#headers-object">HTTP/2 Headers Object</a>, flags associated
with the headers, and the headers in raw format (see <a href="#raw-headers">HTTP/2 Raw Headers</a>).</p>
<p>This event might not be emitted if <code>http2stream.end()</code> is called
before trailers are received and the incoming data is not being read or
listened for.</p>
<pre><code class="language-js">stream.on('trailers', (headers, flags) =&gt; {
  console.log(headers);
});
</code></pre>
<h4>Event: <code>'wantTrailers'</code></h4>
<p>The <code>'wantTrailers'</code> event is emitted when the <code>Http2Stream</code> has queued the
final <code>DATA</code> frame to be sent on a frame and the <code>Http2Stream</code> is ready to send
trailing headers. When initiating a request or response, the <code>waitForTrailers</code>
option must be set for this event to be emitted.</p>
<h4><code>http2stream.aborted</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p><code>true</code> if the <code>Http2Stream</code> was closed while the writable side was
still open. When set, the <code>'aborted'</code> event was emitted.</p>
<h4><code>http2stream.bufferSize</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>This property shows the number of characters currently buffered to be written.
See <a href="net.md#socketbuffersize"><code>net.Socket.bufferSize</code></a> for details.</p>
<h4><code>http2stream.close(code[, callback])</code></h4>
<ul>
<li><code>code</code> {number} Unsigned 32-bit integer identifying the error code.
<strong>Default:</strong> <code>http2.constants.NGHTTP2_NO_ERROR</code> (<code>0x00</code>).</li>
<li><code>callback</code> {Function} An optional function registered to listen for the
<code>'close'</code> event.</li>
</ul>
<p>Closes the <code>Http2Stream</code> instance by sending an <code>RST_STREAM</code> frame to the
connected HTTP/2 peer.</p>
<h4><code>http2stream.closed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Set to <code>true</code> if the <code>Http2Stream</code> instance has been closed.</p>
<h4><code>http2stream.destroyed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Set to <code>true</code> if the <code>Http2Stream</code> instance has been destroyed and is no longer
usable.</p>
<h4><code>http2stream.endAfterHeaders</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Set to <code>true</code> if the <code>END_STREAM</code> flag was set in the request or response
HEADERS frame received, indicating that no additional data should be received
and the readable side of the <code>Http2Stream</code> will be closed.</p>
<h4><code>http2stream.id</code></h4>
<ul>
<li>Type: {number|undefined}</li>
</ul>
<p>The numeric stream identifier of this <code>Http2Stream</code> instance. Set to <code>undefined</code>
if the stream identifier has not yet been assigned.</p>
<h4><code>http2stream.pending</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Set to <code>true</code> if the <code>Http2Stream</code> instance has not yet been assigned a
numeric stream identifier.</p>
<h4><code>http2stream.priority(options)</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated: support for priority signaling has been deprecated
in the <a href="https://datatracker.ietf.org/doc/html/rfc9113#section-5.3.1">RFC 9113</a> and is no longer supported in Node.js.</p>
</blockquote>
<p>Empty method, only there to maintain some backward compatibility.</p>
<h4><code>http2stream.rstCode</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Set to the <code>RST_STREAM</code> <a href="#error-codes-for-rst_stream-and-goaway">error code</a> reported when the <code>Http2Stream</code> is
destroyed after either receiving an <code>RST_STREAM</code> frame from the connected peer,
calling <code>http2stream.close()</code>, or <code>http2stream.destroy()</code>. Will be
<code>undefined</code> if the <code>Http2Stream</code> has not been closed.</p>
<h4><code>http2stream.sentHeaders</code></h4>
<ul>
<li>Type: {HTTP/2 Headers Object}</li>
</ul>
<p>An object containing the outbound headers sent for this <code>Http2Stream</code>.</p>
<h4><code>http2stream.sentInfoHeaders</code></h4>
<ul>
<li>Type: {HTTP/2 Headers Object[]}</li>
</ul>
<p>An array of objects containing the outbound informational (additional) headers
sent for this <code>Http2Stream</code>.</p>
<h4><code>http2stream.sentTrailers</code></h4>
<ul>
<li>Type: {HTTP/2 Headers Object}</li>
</ul>
<p>An object containing the outbound trailers sent for this <code>HttpStream</code>.</p>
<h4><code>http2stream.session</code></h4>
<ul>
<li>Type: {Http2Session}</li>
</ul>
<p>A reference to the <code>Http2Session</code> instance that owns this <code>Http2Stream</code>. The
value will be <code>undefined</code> after the <code>Http2Stream</code> instance is destroyed.</p>
<h4><code>http2stream.setTimeout(msecs, callback)</code></h4>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
</ul>
<pre><code class="language-mjs">import { connect, constants } from 'node:http2';
const client = connect('http://example.org:8000');
const { NGHTTP2_CANCEL } = constants;
const req = client.request({ ':path': '/' });

// Cancel the stream if there's no activity after 5 seconds
req.setTimeout(5000, () =&gt; req.close(NGHTTP2_CANCEL));
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('http://example.org:8000');
const { NGHTTP2_CANCEL } = http2.constants;
const req = client.request({ ':path': '/' });

// Cancel the stream if there's no activity after 5 seconds
req.setTimeout(5000, () =&gt; req.close(NGHTTP2_CANCEL));
</code></pre>
<h4><code>http2stream.state</code></h4>
<p>Provides miscellaneous information about the current state of the
<code>Http2Stream</code>.</p>
<ul>
<li>Type: {Object}
<ul>
<li><code>localWindowSize</code> {number} The number of bytes the connected peer may send
for this <code>Http2Stream</code> without receiving a <code>WINDOW_UPDATE</code>.</li>
<li><code>state</code> {number} A flag indicating the low-level current state of the
<code>Http2Stream</code> as determined by <code>nghttp2</code>.</li>
<li><code>localClose</code> {number} <code>1</code> if this <code>Http2Stream</code> has been closed locally.</li>
<li><code>remoteClose</code> {number} <code>1</code> if this <code>Http2Stream</code> has been closed
remotely.</li>
<li><code>sumDependencyWeight</code> {number} Legacy property, always set to <code>0</code>.</li>
<li><code>weight</code> {number} Legacy property, always set to <code>16</code>.</li>
</ul>
</li>
</ul>
<p>A current state of this <code>Http2Stream</code>.</p>
<h4><code>http2stream.sendTrailers(headers)</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Sends a trailing <code>HEADERS</code> frame to the connected HTTP/2 peer. This method
will cause the <code>Http2Stream</code> to be immediately closed and must only be
called after the <code>'wantTrailers'</code> event has been emitted. When sending a
request or sending a response, the <code>options.waitForTrailers</code> option must be set
in order to keep the <code>Http2Stream</code> open after the final <code>DATA</code> frame so that
trailers can be sent.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  stream.respond(undefined, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ xyz: 'abc' });
  });
  stream.end('Hello World');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  stream.respond(undefined, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ xyz: 'abc' });
  });
  stream.end('Hello World');
});
</code></pre>
<p>The HTTP/1 specification forbids trailers from containing HTTP/2 pseudo-header
fields (e.g. <code>':method'</code>, <code>':path'</code>, etc).</p>
<h3>Class: <code>ClientHttp2Stream</code></h3>
<ul>
<li>Extends {Http2Stream}</li>
</ul>
<p>The <code>ClientHttp2Stream</code> class is an extension of <code>Http2Stream</code> that is
used exclusively on HTTP/2 Clients. <code>Http2Stream</code> instances on the client
provide events such as <code>'response'</code> and <code>'push'</code> that are only relevant on
the client.</p>
<h4>Event: <code>'continue'</code></h4>
<p>Emitted when the server sends a <code>100 Continue</code> status, usually because
the request contained <code>Expect: 100-continue</code>. This is an instruction that
the client should send the request body.</p>
<h4>Event: <code>'headers'</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>flags</code> {number}</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers}</li>
</ul>
<p>The <code>'headers'</code> event is emitted when an additional block of headers is received
for a stream, such as when a block of <code>1xx</code> informational headers is received.
The listener callback is passed the <a href="#headers-object">HTTP/2 Headers Object</a>, flags associated
with the headers, and the headers in raw format (see <a href="#raw-headers">HTTP/2 Raw Headers</a>).</p>
<pre><code class="language-js">stream.on('headers', (headers, flags) =&gt; {
  console.log(headers);
});
</code></pre>
<h4>Event: <code>'push'</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>flags</code> {number}</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers}</li>
</ul>
<p>The <code>'push'</code> event is emitted when response headers for a Server Push stream
are received. The listener callback is passed the <a href="#headers-object">HTTP/2 Headers Object</a>, flags associated
with the headers, and the headers in raw format (see <a href="#raw-headers">HTTP/2 Raw Headers</a>).</p>
<pre><code class="language-js">stream.on('push', (headers, flags) =&gt; {
  console.log(headers);
});
</code></pre>
<h4>Event: <code>'response'</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>flags</code> {number}</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers}</li>
</ul>
<p>The <code>'response'</code> event is emitted when a response <code>HEADERS</code> frame has been
received for this stream from the connected HTTP/2 server. The listener is
invoked with three arguments: an <code>Object</code> containing the received
<a href="#headers-object">HTTP/2 Headers Object</a>, flags associated with the headers, and the headers
in raw format (see <a href="#raw-headers">HTTP/2 Raw Headers</a>).</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
const client = connect('https://localhost');
const req = client.request({ ':path': '/' });
req.on('response', (headers, flags) =&gt; {
  console.log(headers[':status']);
});
</code></pre>
<p>If no <code>'response'</code> listener is attached at the moment the response
arrives, the response body will be entirely discarded (the stream is
silently resumed). However, if a <code>'response'</code> listener is added, the
data from the response object <strong>must</strong> be consumed — either by calling
<code>response.read()</code> whenever there is a <code>'readable'</code> event, by adding a
<code>'data'</code> handler, or by calling the <code>.resume()</code> method. Until the data
is consumed, the <code>'end'</code> event will not fire. Also, until the data is
read, it will consume memory that can eventually lead to a &quot;process
out of memory&quot; error.</p>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('https://localhost');
const req = client.request({ ':path': '/' });
req.on('response', (headers, flags) =&gt; {
  console.log(headers[':status']);
});
</code></pre>
<h3>Class: <code>ServerHttp2Stream</code></h3>
<ul>
<li>Extends: {Http2Stream}</li>
</ul>
<p>The <code>ServerHttp2Stream</code> class is an extension of <a href="#class-http2stream"><code>Http2Stream</code></a> that is
used exclusively on HTTP/2 Servers. <code>Http2Stream</code> instances on the server
provide additional methods such as <code>http2stream.pushStream()</code> and
<code>http2stream.respond()</code> that are only relevant on the server.</p>
<h4><code>http2stream.additionalHeaders(headers)</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Sends an additional informational <code>HEADERS</code> frame to the connected HTTP/2 peer.</p>
<h4><code>http2stream.headersSent</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>True if headers were sent, false otherwise (read-only).</p>
<h4><code>http2stream.pushAllowed</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Read-only property mapped to the <code>SETTINGS_ENABLE_PUSH</code> flag of the remote
client's most recent <code>SETTINGS</code> frame. Will be <code>true</code> if the remote peer
accepts push streams, <code>false</code> otherwise. Settings are the same for every
<code>Http2Stream</code> in the same <code>Http2Session</code>.</p>
<h4><code>http2stream.pushStream(headers[, options], callback)</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>options</code> {Object}
<ul>
<li><code>exclusive</code> {boolean} When <code>true</code> and <code>parent</code> identifies a parent Stream,
the created stream is made the sole direct dependency of the parent, with
all other existing dependents made a dependent of the newly created stream.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>parent</code> {number} Specifies the numeric identifier of a stream the newly
created stream is dependent on.</li>
</ul>
</li>
<li><code>callback</code> {Function} Callback that is called once the push stream has been
initiated.
<ul>
<li><code>err</code> {Error}</li>
<li><code>pushStream</code> {ServerHttp2Stream} The returned <code>pushStream</code> object.</li>
<li><code>headers</code> {HTTP/2 Headers Object} Headers object the <code>pushStream</code> was
initiated with.</li>
</ul>
</li>
</ul>
<p>Initiates a push stream. The callback is invoked with the new <code>Http2Stream</code>
instance created for the push stream passed as the second argument, or an
<code>Error</code> passed as the first argument.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 });
  stream.pushStream({ ':path': '/' }, (err, pushStream, headers) =&gt; {
    if (err) throw err;
    pushStream.respond({ ':status': 200 });
    pushStream.end('some pushed data');
  });
  stream.end('some data');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 });
  stream.pushStream({ ':path': '/' }, (err, pushStream, headers) =&gt; {
    if (err) throw err;
    pushStream.respond({ ':status': 200 });
    pushStream.end('some pushed data');
  });
  stream.end('some data');
});
</code></pre>
<p>Setting the weight of a push stream is not allowed in the <code>HEADERS</code> frame. Pass
a <code>weight</code> value to <code>http2stream.priority</code> with the <code>silent</code> option set to
<code>true</code> to enable server-side bandwidth balancing between concurrent streams.</p>
<p>Calling <code>http2stream.pushStream()</code> from within a pushed stream is not permitted
and will throw an error.</p>
<h4><code>http2stream.respond([headers[, options]])</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object|HTTP/2 Raw Headers}</li>
<li><code>options</code> {Object}
<ul>
<li><code>endStream</code> {boolean} Set to <code>true</code> to indicate that the response will not
include payload data.</li>
<li><code>waitForTrailers</code> {boolean} When <code>true</code>, the <code>Http2Stream</code> will emit the
<code>'wantTrailers'</code> event after the final <code>DATA</code> frame has been sent.</li>
</ul>
</li>
</ul>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 });
  stream.end('some data');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 });
  stream.end('some data');
});
</code></pre>
<p>Initiates a response. When the <code>options.waitForTrailers</code> option is set, the
<code>'wantTrailers'</code> event will be emitted immediately after queuing the last chunk
of payload data to be sent. The <code>http2stream.sendTrailers()</code> method can then be
used to send trailing header fields to the peer.</p>
<p>When <code>options.waitForTrailers</code> is set, the <code>Http2Stream</code> will not automatically
close when the final <code>DATA</code> frame is transmitted. User code must call either
<code>http2stream.sendTrailers()</code> or <code>http2stream.close()</code> to close the
<code>Http2Stream</code>.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 }, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });
  stream.end('some data');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  stream.respond({ ':status': 200 }, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });
  stream.end('some data');
});
</code></pre>
<h4><code>http2stream.respondWithFD(fd[, headers[, options]])</code></h4>
<ul>
<li><code>fd</code> {number|FileHandle} A readable file descriptor.</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>options</code> {Object}
<ul>
<li><code>statCheck</code> {Function}</li>
<li><code>waitForTrailers</code> {boolean} When <code>true</code>, the <code>Http2Stream</code> will emit the
<code>'wantTrailers'</code> event after the final <code>DATA</code> frame has been sent.</li>
<li><code>offset</code> {number} The offset position at which to begin reading.</li>
<li><code>length</code> {number} The amount of data from the fd to send.</li>
</ul>
</li>
</ul>
<p>Initiates a response whose data is read from the given file descriptor. No
validation is performed on the given file descriptor. If an error occurs while
attempting to read data using the file descriptor, the <code>Http2Stream</code> will be
closed using an <code>RST_STREAM</code> frame using the standard <code>INTERNAL_ERROR</code> code.</p>
<p>When used, the <code>Http2Stream</code> object's <code>Duplex</code> interface will be closed
automatically.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
import { openSync, fstatSync, closeSync } from 'node:fs';

const server = createServer();
server.on('stream', (stream) =&gt; {
  const fd = openSync('/some/file', 'r');

  const stat = fstatSync(fd);
  const headers = {
    'content-length': stat.size,
    'last-modified': stat.mtime.toUTCString(),
    'content-type': 'text/plain; charset=utf-8',
  };
  stream.respondWithFD(fd, headers);
  stream.on('close', () =&gt; closeSync(fd));
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const fs = require('node:fs');

const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  const fd = fs.openSync('/some/file', 'r');

  const stat = fs.fstatSync(fd);
  const headers = {
    'content-length': stat.size,
    'last-modified': stat.mtime.toUTCString(),
    'content-type': 'text/plain; charset=utf-8',
  };
  stream.respondWithFD(fd, headers);
  stream.on('close', () =&gt; fs.closeSync(fd));
});
</code></pre>
<p>The optional <code>options.statCheck</code> function may be specified to give user code
an opportunity to set additional content headers based on the <code>fs.Stat</code> details
of the given fd. If the <code>statCheck</code> function is provided, the
<code>http2stream.respondWithFD()</code> method will perform an <code>fs.fstat()</code> call to
collect details on the provided file descriptor.</p>
<p>The <code>offset</code> and <code>length</code> options may be used to limit the response to a
specific range subset. This can be used, for instance, to support HTTP Range
requests.</p>
<p>The file descriptor or <code>FileHandle</code> is not closed when the stream is closed,
so it will need to be closed manually once it is no longer needed.
Using the same file descriptor concurrently for multiple streams
is not supported and may result in data loss. Re-using a file descriptor
after a stream has finished is supported.</p>
<p>When the <code>options.waitForTrailers</code> option is set, the <code>'wantTrailers'</code> event
will be emitted immediately after queuing the last chunk of payload data to be
sent. The <code>http2stream.sendTrailers()</code> method can then be used to send trailing
header fields to the peer.</p>
<p>When <code>options.waitForTrailers</code> is set, the <code>Http2Stream</code> will not automatically
close when the final <code>DATA</code> frame is transmitted. User code <em>must</em> call either
<code>http2stream.sendTrailers()</code> or <code>http2stream.close()</code> to close the
<code>Http2Stream</code>.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
import { openSync, fstatSync, closeSync } from 'node:fs';

const server = createServer();
server.on('stream', (stream) =&gt; {
  const fd = openSync('/some/file', 'r');

  const stat = fstatSync(fd);
  const headers = {
    'content-length': stat.size,
    'last-modified': stat.mtime.toUTCString(),
    'content-type': 'text/plain; charset=utf-8',
  };
  stream.respondWithFD(fd, headers, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });

  stream.on('close', () =&gt; closeSync(fd));
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const fs = require('node:fs');

const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  const fd = fs.openSync('/some/file', 'r');

  const stat = fs.fstatSync(fd);
  const headers = {
    'content-length': stat.size,
    'last-modified': stat.mtime.toUTCString(),
    'content-type': 'text/plain; charset=utf-8',
  };
  stream.respondWithFD(fd, headers, { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });

  stream.on('close', () =&gt; fs.closeSync(fd));
});
</code></pre>
<h4><code>http2stream.respondWithFile(path[, headers[, options]])</code></h4>
<ul>
<li><code>path</code> {string|Buffer|URL}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>options</code> {Object}
<ul>
<li><code>statCheck</code> {Function}</li>
<li><code>onError</code> {Function} Callback function invoked in the case of an
error before send.</li>
<li><code>waitForTrailers</code> {boolean} When <code>true</code>, the <code>Http2Stream</code> will emit the
<code>'wantTrailers'</code> event after the final <code>DATA</code> frame has been sent.</li>
<li><code>offset</code> {number} The offset position at which to begin reading.</li>
<li><code>length</code> {number} The amount of data from the fd to send.</li>
</ul>
</li>
</ul>
<p>Sends a regular file as the response. The <code>path</code> must specify a regular file
or an <code>'error'</code> event will be emitted on the <code>Http2Stream</code> object.</p>
<p>When used, the <code>Http2Stream</code> object's <code>Duplex</code> interface will be closed
automatically.</p>
<p>The optional <code>options.statCheck</code> function may be specified to give user code
an opportunity to set additional content headers based on the <code>fs.Stat</code> details
of the given file:</p>
<p>If an error occurs while attempting to read the file data, the <code>Http2Stream</code>
will be closed using an <code>RST_STREAM</code> frame using the standard <code>INTERNAL_ERROR</code>
code. If the <code>onError</code> callback is defined, then it will be called. Otherwise
the stream will be destroyed.</p>
<p>Example using a file path:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  function statCheck(stat, headers) {
    headers['last-modified'] = stat.mtime.toUTCString();
  }

  function onError(err) {
    // stream.respond() can throw if the stream has been destroyed by
    // the other side.
    try {
      if (err.code === 'ENOENT') {
        stream.respond({ ':status': 404 });
      } else {
        stream.respond({ ':status': 500 });
      }
    } catch (err) {
      // Perform actual error handling.
      console.error(err);
    }
    stream.end();
  }

  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { statCheck, onError });
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  function statCheck(stat, headers) {
    headers['last-modified'] = stat.mtime.toUTCString();
  }

  function onError(err) {
    // stream.respond() can throw if the stream has been destroyed by
    // the other side.
    try {
      if (err.code === 'ENOENT') {
        stream.respond({ ':status': 404 });
      } else {
        stream.respond({ ':status': 500 });
      }
    } catch (err) {
      // Perform actual error handling.
      console.error(err);
    }
    stream.end();
  }

  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { statCheck, onError });
});
</code></pre>
<p>The <code>options.statCheck</code> function may also be used to cancel the send operation
by returning <code>false</code>. For instance, a conditional request may check the stat
results to determine if the file has been modified to return an appropriate
<code>304</code> response:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  function statCheck(stat, headers) {
    // Check the stat here...
    stream.respond({ ':status': 304 });
    return false; // Cancel the send operation
  }
  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { statCheck });
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  function statCheck(stat, headers) {
    // Check the stat here...
    stream.respond({ ':status': 304 });
    return false; // Cancel the send operation
  }
  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { statCheck });
});
</code></pre>
<p>The <code>content-length</code> header field will be automatically set.</p>
<p>The <code>offset</code> and <code>length</code> options may be used to limit the response to a
specific range subset. This can be used, for instance, to support HTTP Range
requests.</p>
<p>The <code>options.onError</code> function may also be used to handle all the errors
that could happen before the delivery of the file is initiated. The
default behavior is to destroy the stream.</p>
<p>When the <code>options.waitForTrailers</code> option is set, the <code>'wantTrailers'</code> event
will be emitted immediately after queuing the last chunk of payload data to be
sent. The <code>http2stream.sendTrailers()</code> method can then be used to send trailing
header fields to the peer.</p>
<p>When <code>options.waitForTrailers</code> is set, the <code>Http2Stream</code> will not automatically
close when the final <code>DATA</code> frame is transmitted. User code must call either
<code>http2stream.sendTrailers()</code> or <code>http2stream.close()</code> to close the
<code>Http2Stream</code>.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream) =&gt; {
  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream) =&gt; {
  stream.respondWithFile('/some/file',
                         { 'content-type': 'text/plain; charset=utf-8' },
                         { waitForTrailers: true });
  stream.on('wantTrailers', () =&gt; {
    stream.sendTrailers({ ABC: 'some value to send' });
  });
});
</code></pre>
<h3>Class: <code>Http2Server</code></h3>
<ul>
<li>Extends: {net.Server}</li>
</ul>
<p>Instances of <code>Http2Server</code> are created using the <code>http2.createServer()</code>
function. The <code>Http2Server</code> class is not exported directly by the
<code>node:http2</code> module.</p>
<h4>Event: <code>'checkContinue'</code></h4>
<ul>
<li><code>request</code> {http2.Http2ServerRequest}</li>
<li><code>response</code> {http2.Http2ServerResponse}</li>
</ul>
<p>If a <a href="#event-request"><code>'request'</code></a> listener is registered or <a href="#http2createserveroptions-onrequesthandler"><code>http2.createServer()</code></a> is
supplied a callback function, the <code>'checkContinue'</code> event is emitted each time
a request with an HTTP <code>Expect: 100-continue</code> is received. If this event is
not listened for, the server will automatically respond with a status
<code>100 Continue</code> as appropriate.</p>
<p>Handling this event involves calling <a href="#responsewritecontinue"><code>response.writeContinue()</code></a> if the
client should continue to send the request body, or generating an appropriate
HTTP response (e.g. 400 Bad Request) if the client should not continue to send
the request body.</p>
<p>When this event is emitted and handled, the <a href="#event-request"><code>'request'</code></a> event will
not be emitted.</p>
<h4>Event: <code>'connection'</code></h4>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>This event is emitted when a new TCP stream is established. <code>socket</code> is
typically an object of type <a href="net.md#class-netsocket"><code>net.Socket</code></a>. Usually users will not want to
access this event.</p>
<p>This event can also be explicitly emitted by users to inject connections
into the HTTP server. In that case, any <a href="stream.md#class-streamduplex"><code>Duplex</code></a> stream can be passed.</p>
<h4>Event: <code>'request'</code></h4>
<ul>
<li><code>request</code> {http2.Http2ServerRequest}</li>
<li><code>response</code> {http2.Http2ServerResponse}</li>
</ul>
<p>Emitted each time there is a request. There may be multiple requests
per session. See the <a href="#compatibility-api">Compatibility API</a>.</p>
<h4>Event: <code>'session'</code></h4>
<ul>
<li><code>session</code> {ServerHttp2Session}</li>
</ul>
<p>The <code>'session'</code> event is emitted when a new <code>Http2Session</code> is created by the
<code>Http2Server</code>.</p>
<h4>Event: <code>'sessionError'</code></h4>
<ul>
<li><code>error</code> {Error}</li>
<li><code>session</code> {ServerHttp2Session}</li>
</ul>
<p>The <code>'sessionError'</code> event is emitted when an <code>'error'</code> event is emitted by
an <code>Http2Session</code> object associated with the <code>Http2Server</code>.</p>
<h4>Event: <code>'stream'</code></h4>
<ul>
<li><code>stream</code> {Http2Stream} A reference to the stream</li>
<li><code>headers</code> {HTTP/2 Headers Object} An object describing the headers</li>
<li><code>flags</code> {number} The associated numeric flags</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers} An array containing the raw headers</li>
</ul>
<p>The <code>'stream'</code> event is emitted when a <code>'stream'</code> event has been emitted by
an <code>Http2Session</code> associated with the server.</p>
<p>See also <a href="#event-stream"><code>Http2Session</code>'s <code>'stream'</code> event</a>.</p>
<pre><code class="language-mjs">import { createServer, constants } from 'node:http2';
const {
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
  HTTP2_HEADER_CONTENT_TYPE,
} = constants;

const server = createServer();
server.on('stream', (stream, headers, flags) =&gt; {
  const method = headers[HTTP2_HEADER_METHOD];
  const path = headers[HTTP2_HEADER_PATH];
  // ...
  stream.respond({
    [HTTP2_HEADER_STATUS]: 200,
    [HTTP2_HEADER_CONTENT_TYPE]: 'text/plain; charset=utf-8',
  });
  stream.write('hello ');
  stream.end('world');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const {
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
  HTTP2_HEADER_CONTENT_TYPE,
} = http2.constants;

const server = http2.createServer();
server.on('stream', (stream, headers, flags) =&gt; {
  const method = headers[HTTP2_HEADER_METHOD];
  const path = headers[HTTP2_HEADER_PATH];
  // ...
  stream.respond({
    [HTTP2_HEADER_STATUS]: 200,
    [HTTP2_HEADER_CONTENT_TYPE]: 'text/plain; charset=utf-8',
  });
  stream.write('hello ');
  stream.end('world');
});
</code></pre>
<h4>Event: <code>'timeout'</code></h4>
<p>The <code>'timeout'</code> event is emitted when there is no activity on the Server for
a given number of milliseconds set using <code>http2server.setTimeout()</code>.
<strong>Default:</strong> 0 (no timeout)</p>
<h4><code>server.close([callback])</code></h4>
<ul>
<li><code>callback</code> {Function}</li>
</ul>
<p>Stops the server from establishing new sessions and streams.</p>
<p>If <code>callback</code> is provided, it is not invoked until all active sessions have been
closed, although the server has already stopped allowing new sessions. See
<a href="net.md#serverclosecallback"><code>net.Server.close()</code></a> for more details.</p>
<h4><code>server[Symbol.asyncDispose]()</code></h4>
<p>Calls <a href="#serverclosecallback"><code>server.close()</code></a> and returns a promise that fulfills when the
server has closed.</p>
<h4><code>server.setTimeout([msecs][, callback])</code></h4>
<ul>
<li><code>msecs</code> {number} <strong>Default:</strong> 0 (no timeout)</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {Http2Server}</li>
</ul>
<p>Used to set the timeout value for http2 server requests,
and sets a callback function that is called when there is no activity
on the <code>Http2Server</code> after <code>msecs</code> milliseconds.</p>
<p>The given callback is registered as a listener on the <code>'timeout'</code> event.</p>
<p>In case if <code>callback</code> is not a function, a new <code>ERR_INVALID_ARG_TYPE</code>
error will be thrown.</p>
<h4><code>server.timeout</code></h4>
<ul>
<li>Type: {number} Timeout in milliseconds. <strong>Default:</strong> 0 (no timeout)</li>
</ul>
<p>The number of milliseconds of inactivity before a socket is presumed
to have timed out.</p>
<p>A value of <code>0</code> will disable the timeout behavior on incoming connections.</p>
<p>The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.</p>
<h4><code>server.updateSettings([settings])</code></h4>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object}</li>
</ul>
<p>Used to update the server with the provided settings.</p>
<p>Throws <code>ERR_HTTP2_INVALID_SETTING_VALUE</code> for invalid <code>settings</code> values.</p>
<p>Throws <code>ERR_INVALID_ARG_TYPE</code> for invalid <code>settings</code> argument.</p>
<h3>Class: <code>Http2SecureServer</code></h3>
<ul>
<li>Extends: {tls.Server}</li>
</ul>
<p>Instances of <code>Http2SecureServer</code> are created using the
<code>http2.createSecureServer()</code> function. The <code>Http2SecureServer</code> class is not
exported directly by the <code>node:http2</code> module.</p>
<h4>Event: <code>'checkContinue'</code></h4>
<ul>
<li><code>request</code> {http2.Http2ServerRequest}</li>
<li><code>response</code> {http2.Http2ServerResponse}</li>
</ul>
<p>If a <a href="#event-request"><code>'request'</code></a> listener is registered or <a href="#http2createsecureserveroptions-onrequesthandler"><code>http2.createSecureServer()</code></a>
is supplied a callback function, the <code>'checkContinue'</code> event is emitted each
time a request with an HTTP <code>Expect: 100-continue</code> is received. If this event
is not listened for, the server will automatically respond with a status
<code>100 Continue</code> as appropriate.</p>
<p>Handling this event involves calling <a href="#responsewritecontinue"><code>response.writeContinue()</code></a> if the
client should continue to send the request body, or generating an appropriate
HTTP response (e.g. 400 Bad Request) if the client should not continue to send
the request body.</p>
<p>When this event is emitted and handled, the <a href="#event-request"><code>'request'</code></a> event will
not be emitted.</p>
<h4>Event: <code>'connection'</code></h4>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>This event is emitted when a new TCP stream is established, before the TLS
handshake begins. <code>socket</code> is typically an object of type <a href="net.md#class-netsocket"><code>net.Socket</code></a>.
Usually users will not want to access this event.</p>
<p>This event can also be explicitly emitted by users to inject connections
into the HTTP server. In that case, any <a href="stream.md#class-streamduplex"><code>Duplex</code></a> stream can be passed.</p>
<h4>Event: <code>'request'</code></h4>
<ul>
<li><code>request</code> {http2.Http2ServerRequest}</li>
<li><code>response</code> {http2.Http2ServerResponse}</li>
</ul>
<p>Emitted each time there is a request. There may be multiple requests
per session. See the <a href="#compatibility-api">Compatibility API</a>.</p>
<h4>Event: <code>'session'</code></h4>
<ul>
<li><code>session</code> {ServerHttp2Session}</li>
</ul>
<p>The <code>'session'</code> event is emitted when a new <code>Http2Session</code> is created by the
<code>Http2SecureServer</code>.</p>
<h4>Event: <code>'sessionError'</code></h4>
<ul>
<li><code>error</code> {Error}</li>
<li><code>session</code> {ServerHttp2Session}</li>
</ul>
<p>The <code>'sessionError'</code> event is emitted when an <code>'error'</code> event is emitted by
an <code>Http2Session</code> object associated with the <code>Http2SecureServer</code>.</p>
<h4>Event: <code>'stream'</code></h4>
<ul>
<li><code>stream</code> {Http2Stream} A reference to the stream</li>
<li><code>headers</code> {HTTP/2 Headers Object} An object describing the headers</li>
<li><code>flags</code> {number} The associated numeric flags</li>
<li><code>rawHeaders</code> {HTTP/2 Raw Headers} An array containing the raw headers</li>
</ul>
<p>The <code>'stream'</code> event is emitted when a <code>'stream'</code> event has been emitted by
an <code>Http2Session</code> associated with the server.</p>
<p>See also <a href="#event-stream"><code>Http2Session</code>'s <code>'stream'</code> event</a>.</p>
<pre><code class="language-mjs">import { createSecureServer, constants } from 'node:http2';
const {
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
  HTTP2_HEADER_CONTENT_TYPE,
} = constants;

const options = getOptionsSomehow();

const server = createSecureServer(options);
server.on('stream', (stream, headers, flags) =&gt; {
  const method = headers[HTTP2_HEADER_METHOD];
  const path = headers[HTTP2_HEADER_PATH];
  // ...
  stream.respond({
    [HTTP2_HEADER_STATUS]: 200,
    [HTTP2_HEADER_CONTENT_TYPE]: 'text/plain; charset=utf-8',
  });
  stream.write('hello ');
  stream.end('world');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const {
  HTTP2_HEADER_METHOD,
  HTTP2_HEADER_PATH,
  HTTP2_HEADER_STATUS,
  HTTP2_HEADER_CONTENT_TYPE,
} = http2.constants;

const options = getOptionsSomehow();

const server = http2.createSecureServer(options);
server.on('stream', (stream, headers, flags) =&gt; {
  const method = headers[HTTP2_HEADER_METHOD];
  const path = headers[HTTP2_HEADER_PATH];
  // ...
  stream.respond({
    [HTTP2_HEADER_STATUS]: 200,
    [HTTP2_HEADER_CONTENT_TYPE]: 'text/plain; charset=utf-8',
  });
  stream.write('hello ');
  stream.end('world');
});
</code></pre>
<h4>Event: <code>'timeout'</code></h4>
<p>The <code>'timeout'</code> event is emitted when there is no activity on the Server for
a given number of milliseconds set using <code>http2secureServer.setTimeout()</code>.
<strong>Default:</strong> 0 (no timeout)</p>
<h4>Event: <code>'unknownProtocol'</code></h4>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
</ul>
<p>The <code>'unknownProtocol'</code> event is emitted when a connecting client fails to
negotiate an allowed protocol (i.e. HTTP/2 or HTTP/1.1). The event handler
receives the socket for handling. If no listener is registered for this event,
the connection is terminated. A timeout may be specified using the
<code>'unknownProtocolTimeout'</code> option passed to <a href="#http2createsecureserveroptions-onrequesthandler"><code>http2.createSecureServer()</code></a>.</p>
<p>In earlier versions of Node.js, this event would be emitted if <code>allowHTTP1</code> is
<code>false</code> and, during the TLS handshake, the client either does not send an ALPN
extension or sends an ALPN extension that does not include HTTP/2 (<code>h2</code>). Newer
versions of Node.js only emit this event if <code>allowHTTP1</code> is <code>false</code> and the
client does not send an ALPN extension. If the client sends an ALPN extension
that does not include HTTP/2 (or HTTP/1.1 if <code>allowHTTP1</code> is <code>true</code>), the TLS
handshake will fail and no secure connection will be established.</p>
<p>See the <a href="#compatibility-api">Compatibility API</a>.</p>
<h4><code>server.close([callback])</code></h4>
<ul>
<li><code>callback</code> {Function}</li>
</ul>
<p>Stops the server from establishing new sessions and streams.</p>
<p>If <code>callback</code> is provided, it is not invoked until all active sessions have been
closed, although the server has already stopped allowing new sessions. See
<a href="tls.md#serverclosecallback"><code>tls.Server.close()</code></a> for more details.</p>
<h4><code>server.setTimeout([msecs][, callback])</code></h4>
<ul>
<li><code>msecs</code> {number} <strong>Default:</strong> <code>120000</code> (2 minutes)</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {Http2SecureServer}</li>
</ul>
<p>Used to set the timeout value for http2 secure server requests,
and sets a callback function that is called when there is no activity
on the <code>Http2SecureServer</code> after <code>msecs</code> milliseconds.</p>
<p>The given callback is registered as a listener on the <code>'timeout'</code> event.</p>
<p>In case if <code>callback</code> is not a function, a new <code>ERR_INVALID_ARG_TYPE</code>
error will be thrown.</p>
<h4><code>server.timeout</code></h4>
<ul>
<li>Type: {number} Timeout in milliseconds. <strong>Default:</strong> 0 (no timeout)</li>
</ul>
<p>The number of milliseconds of inactivity before a socket is presumed
to have timed out.</p>
<p>A value of <code>0</code> will disable the timeout behavior on incoming connections.</p>
<p>The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.</p>
<h4><code>server.updateSettings([settings])</code></h4>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object}</li>
</ul>
<p>Used to update the server with the provided settings.</p>
<p>Throws <code>ERR_HTTP2_INVALID_SETTING_VALUE</code> for invalid <code>settings</code> values.</p>
<p>Throws <code>ERR_INVALID_ARG_TYPE</code> for invalid <code>settings</code> argument.</p>
<h3><code>http2.createServer([options][, onRequestHandler])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>maxDeflateDynamicTableSize</code> {number} Sets the maximum dynamic table size
for deflating header fields. <strong>Default:</strong> <code>4Kib</code>.</li>
<li><code>maxSettings</code> {number} Sets the maximum number of settings entries per
<code>SETTINGS</code> frame. The minimum value allowed is <code>1</code>. <strong>Default:</strong> <code>32</code>.</li>
<li><code>maxSessionMemory</code>{number} Sets the maximum memory that the <code>Http2Session</code>
is permitted to use. The value is expressed in terms of number of megabytes,
e.g. <code>1</code> equal 1 megabyte. The minimum value allowed is <code>1</code>.
This is a credit based limit, existing <code>Http2Stream</code>s may cause this
limit to be exceeded, but new <code>Http2Stream</code> instances will be rejected
while this limit is exceeded. The current number of <code>Http2Stream</code> sessions,
the current memory use of the header compression tables, header blocks
retained by open streams, current data queued to be sent, and
unacknowledged <code>PING</code> and <code>SETTINGS</code> frames are all counted towards the
current limit. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxHeaderListPairs</code> {number} Sets the maximum number of header entries.
This is similar to <a href="http.md#servermaxheaderscount"><code>server.maxHeadersCount</code></a> or
<a href="http.md#requestmaxheaderscount"><code>request.maxHeadersCount</code></a> in the <code>node:http</code> module. The minimum value
is <code>4</code>. <strong>Default:</strong> <code>128</code>.</li>
<li><code>maxOutstandingPings</code> {number} Sets the maximum number of outstanding,
unacknowledged pings. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxSendHeaderBlockLength</code> {number} Sets the maximum allowed size for a
serialized, compressed block of headers. Attempts to send headers that
exceed this limit will result in a <code>'frameError'</code> event being emitted
and the stream being closed and destroyed.
While this sets the maximum allowed size to the entire block of headers,
<code>nghttp2</code> (the internal http2 library) has a limit of <code>65536</code>
for each decompressed key/value pair.</li>
<li><code>paddingStrategy</code> {number} The strategy used for determining the amount of
padding to use for <code>HEADERS</code> and <code>DATA</code> frames. <strong>Default:</strong>
<code>http2.constants.PADDING_STRATEGY_NONE</code>. Value may be one of:
<ul>
<li><code>http2.constants.PADDING_STRATEGY_NONE</code>: No padding is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_MAX</code>: The maximum amount of padding,
determined by the internal implementation, is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_ALIGNED</code>: Attempts to apply enough
padding to ensure that the total frame length, including the 9-byte
header, is a multiple of 8. For each frame, there is a maximum allowed
number of padding bytes that is determined by current flow control state
and settings. If this maximum is less than the calculated amount needed to
ensure alignment, the maximum is used and the total frame length is not
necessarily aligned at 8 bytes.</li>
</ul>
</li>
<li><code>peerMaxConcurrentStreams</code> {number} Sets the maximum number of concurrent
streams for the remote peer as if a <code>SETTINGS</code> frame had been received. Will
be overridden if the remote peer sets its own value for
<code>maxConcurrentStreams</code>. <strong>Default:</strong> <code>100</code>.</li>
<li><code>maxSessionInvalidFrames</code> {integer} Sets the maximum number of invalid
frames that will be tolerated before the session is closed.
<strong>Default:</strong> <code>1000</code>.</li>
<li><code>maxSessionRejectedStreams</code> {integer} Sets the maximum number of rejected
upon creation streams that will be tolerated before the session is closed.
Each rejection is associated with an <code>NGHTTP2_ENHANCE_YOUR_CALM</code>
error that should tell the peer to not open any more streams, continuing
to open streams is therefore regarded as a sign of a misbehaving peer.
<strong>Default:</strong> <code>100</code>.</li>
<li><code>connectionWindowSize</code> {number} Sets the initial flow control window for
each session, in bytes. This is the total amount of data the remote peer
may send across all streams before it has to wait for a <code>WINDOW_UPDATE</code>.
The equivalent per-stream limit is <code>settings.initialWindowSize</code>. The
minimum allowed value is <code>1</code> and the maximum is 2&lt;sup&gt;31&lt;/sup&gt;-1. Values
below 65535 will not take effect until the initial protocol-default
window of 65535 has been used.</li>
<li><code>settings</code> {HTTP/2 Settings Object} The initial settings to send to the
remote peer upon connection.</li>
<li><code>streamResetBurst</code> {number} and <code>streamResetRate</code> {number} Sets the rate
limit for the incoming stream reset (RST_STREAM frame). Both settings must
be set to have any effect, and default to 1000 and 33 respectively.</li>
<li><code>remoteCustomSettings</code> {Array} The array of integer values determines the
settings types, which are included in the <code>CustomSettings</code>-property of
the received remoteSettings. Please see the <code>CustomSettings</code>-property of
the <code>Http2Settings</code> object for more information,
on the allowed setting types.</li>
<li><code>Http1IncomingMessage</code> {http.IncomingMessage} Specifies the
<code>IncomingMessage</code> class to used for HTTP/1 fallback. Useful for extending
the original <code>http.IncomingMessage</code>. <strong>Default:</strong> <code>http.IncomingMessage</code>.
<strong>Deprecated.</strong> Use <code>http1Options.IncomingMessage</code> instead. See
<a href="deprecations.md#dep0202-http1incomingmessage-and-http1serverresponse-options-of-http2-servers">DEP0202</a>.</li>
<li><code>Http1ServerResponse</code> {http.ServerResponse} Specifies the <code>ServerResponse</code>
class to used for HTTP/1 fallback. Useful for extending the original
<code>http.ServerResponse</code>. <strong>Default:</strong> <code>http.ServerResponse</code>.
<strong>Deprecated.</strong> Use <code>http1Options.ServerResponse</code> instead. See
<a href="deprecations.md#dep0202-http1incomingmessage-and-http1serverresponse-options-of-http2-servers">DEP0202</a>.</li>
<li><code>http1Options</code> {Object} An options object for configuring the HTTP/1
fallback when <code>allowHTTP1</code> is <code>true</code>. These options are passed to the
underlying HTTP/1 server. See <a href="http.md#httpcreateserveroptions-requestlistener"><code>http.createServer()</code></a> for available
options. Among others, the following are supported:
<ul>
<li><code>IncomingMessage</code> {http.IncomingMessage} Specifies the
<code>IncomingMessage</code> class to use for HTTP/1 fallback.
<strong>Default:</strong> <code>http.IncomingMessage</code>.</li>
<li><code>ServerResponse</code> {http.ServerResponse} Specifies the <code>ServerResponse</code>
class to use for HTTP/1 fallback.
<strong>Default:</strong> <code>http.ServerResponse</code>.</li>
<li><code>keepAliveTimeout</code> {number} The number of milliseconds of inactivity
a server needs to wait for additional incoming data, after it has
finished writing the last response, before a socket will be destroyed.
<strong>Default:</strong> <code>5000</code>.</li>
</ul>
</li>
<li><code>Http2ServerRequest</code> {http2.Http2ServerRequest} Specifies the
<code>Http2ServerRequest</code> class to use.
Useful for extending the original <code>Http2ServerRequest</code>.
<strong>Default:</strong> <code>Http2ServerRequest</code>.</li>
<li><code>Http2ServerResponse</code> {http2.Http2ServerResponse} Specifies the
<code>Http2ServerResponse</code> class to use.
Useful for extending the original <code>Http2ServerResponse</code>.
<strong>Default:</strong> <code>Http2ServerResponse</code>.</li>
<li><code>unknownProtocolTimeout</code> {number} Specifies a timeout in milliseconds that
a server should wait when an <a href="#event-unknownprotocol"><code>'unknownProtocol'</code></a> is emitted. If the
socket has not been destroyed by that time the server will destroy it.
<strong>Default:</strong> <code>10000</code>.</li>
<li><code>strictFieldWhitespaceValidation</code> {boolean} If <code>true</code>, it turns on strict leading
and trailing whitespace validation for HTTP/2 header field names and values
as per <a href="https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1">RFC-9113</a>.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>strictSingleValueFields</code> {boolean} If <code>true</code>, strict validation is used
for headers and trailers defined as having only a single value, such that
an error is thrown if multiple values are provided.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>...options</code> {Object} Any <a href="net.md#netcreateserveroptions-connectionlistener"><code>net.createServer()</code></a> option can be provided.</li>
</ul>
</li>
<li><code>onRequestHandler</code> {Function} See <a href="#compatibility-api">Compatibility API</a></li>
<li>Returns: {Http2Server}</li>
</ul>
<p>Returns a <code>net.Server</code> instance that creates and manages <code>Http2Session</code>
instances.</p>
<p>Since there are no browsers known that support
<a href="https://http2.github.io/faq/#does-http2-require-encryption">unencrypted HTTP/2</a>, the use of
<a href="#http2createsecureserveroptions-onrequesthandler"><code>http2.createSecureServer()</code></a> is necessary when communicating
with browser clients.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';

// Create an unencrypted HTTP/2 server.
// Since there are no browsers known that support
// unencrypted HTTP/2, the use of `createSecureServer()`
// is necessary when communicating with browser clients.
const server = createServer();

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

// Create an unencrypted HTTP/2 server.
// Since there are no browsers known that support
// unencrypted HTTP/2, the use of `http2.createSecureServer()`
// is necessary when communicating with browser clients.
const server = http2.createServer();

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8000);
</code></pre>
<h3><code>http2.createSecureServer(options[, onRequestHandler])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>allowHTTP1</code> {boolean} Incoming client connections that do not support
HTTP/2 will be downgraded to HTTP/1.x when set to <code>true</code>.
See the <a href="#event-unknownprotocol"><code>'unknownProtocol'</code></a> event. See <a href="#alpn-negotiation">ALPN negotiation</a>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>maxDeflateDynamicTableSize</code> {number} Sets the maximum dynamic table size
for deflating header fields. <strong>Default:</strong> <code>4Kib</code>.</li>
<li><code>maxSettings</code> {number} Sets the maximum number of settings entries per
<code>SETTINGS</code> frame. The minimum value allowed is <code>1</code>. <strong>Default:</strong> <code>32</code>.</li>
<li><code>maxSessionMemory</code>{number} Sets the maximum memory that the <code>Http2Session</code>
is permitted to use. The value is expressed in terms of number of megabytes,
e.g. <code>1</code> equal 1 megabyte. The minimum value allowed is <code>1</code>. This is a
credit based limit, existing <code>Http2Stream</code>s may cause this
limit to be exceeded, but new <code>Http2Stream</code> instances will be rejected
while this limit is exceeded. The current number of <code>Http2Stream</code> sessions,
the current memory use of the header compression tables, header blocks
retained by open streams, current data queued to be sent, and
unacknowledged <code>PING</code> and <code>SETTINGS</code> frames are all counted towards the
current limit. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxHeaderListPairs</code> {number} Sets the maximum number of header entries.
This is similar to <a href="http.md#servermaxheaderscount"><code>server.maxHeadersCount</code></a> or
<a href="http.md#requestmaxheaderscount"><code>request.maxHeadersCount</code></a> in the <code>node:http</code> module. The minimum value
is <code>4</code>. <strong>Default:</strong> <code>128</code>.</li>
<li><code>maxOutstandingPings</code> {number} Sets the maximum number of outstanding,
unacknowledged pings. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxSendHeaderBlockLength</code> {number} Sets the maximum allowed size for a
serialized, compressed block of headers. Attempts to send headers that
exceed this limit will result in a <code>'frameError'</code> event being emitted
and the stream being closed and destroyed.</li>
<li><code>paddingStrategy</code> {number} Strategy used for determining the amount of
padding to use for <code>HEADERS</code> and <code>DATA</code> frames. <strong>Default:</strong>
<code>http2.constants.PADDING_STRATEGY_NONE</code>. Value may be one of:
<ul>
<li><code>http2.constants.PADDING_STRATEGY_NONE</code>: No padding is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_MAX</code>: The maximum amount of padding,
determined by the internal implementation, is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_ALIGNED</code>: Attempts to apply enough
padding to ensure that the total frame length, including the
9-byte header, is a multiple of 8. For each frame, there is a maximum
allowed number of padding bytes that is determined by current flow control
state and settings. If this maximum is less than the calculated amount
needed to ensure alignment, the maximum is used and the total frame length
is not necessarily aligned at 8 bytes.</li>
</ul>
</li>
<li><code>peerMaxConcurrentStreams</code> {number} Sets the maximum number of concurrent
streams for the remote peer as if a <code>SETTINGS</code> frame had been received. Will
be overridden if the remote peer sets its own value for
<code>maxConcurrentStreams</code>. <strong>Default:</strong> <code>100</code>.</li>
<li><code>maxSessionInvalidFrames</code> {integer} Sets the maximum number of invalid
frames that will be tolerated before the session is closed.
<strong>Default:</strong> <code>1000</code>.</li>
<li><code>maxSessionRejectedStreams</code> {integer} Sets the maximum number of rejected
upon creation streams that will be tolerated before the session is closed.
Each rejection is associated with an <code>NGHTTP2_ENHANCE_YOUR_CALM</code>
error that should tell the peer to not open any more streams, continuing
to open streams is therefore regarded as a sign of a misbehaving peer.
<strong>Default:</strong> <code>100</code>.</li>
<li><code>connectionWindowSize</code> {number} Sets the initial flow control window for
each session, in bytes. This is the total amount of data the remote peer
may send across all streams before it has to wait for a <code>WINDOW_UPDATE</code>.
The equivalent per-stream limit is <code>settings.initialWindowSize</code>. The
minimum allowed value is <code>1</code> and the maximum is 2&lt;sup&gt;31&lt;/sup&gt;-1. Values
below 65535 will not take effect until the initial protocol-default
window of 65535 has been used.
<strong>Default:</strong> <code>33554432</code>.</li>
<li><code>settings</code> {HTTP/2 Settings Object} The initial settings to send to the
remote peer upon connection.</li>
<li><code>streamResetBurst</code> {number} and <code>streamResetRate</code> {number} Sets the rate
limit for the incoming stream reset (RST_STREAM frame). Both settings must
be set to have any effect, and default to 1000 and 33 respectively.</li>
<li><code>remoteCustomSettings</code> {Array} The array of integer values determines the
settings types, which are included in the <code>customSettings</code>-property of the
received remoteSettings. Please see the <code>customSettings</code>-property of the
<code>Http2Settings</code> object for more information, on the allowed setting types.</li>
<li><code>...options</code> {Object} Any <a href="tls.md#tlscreateserveroptions-secureconnectionlistener"><code>tls.createServer()</code></a> options can be provided.
For servers, the identity options (<code>pfx</code> or <code>key</code>/<code>cert</code>) are usually required.</li>
<li><code>origins</code> {string[]} An array of origin strings to send within an <code>ORIGIN</code>
frame immediately following creation of a new server <code>Http2Session</code>.</li>
<li><code>unknownProtocolTimeout</code> {number} Specifies a timeout in milliseconds that
a server should wait when an <a href="#event-unknownprotocol"><code>'unknownProtocol'</code></a> event is emitted. If
the socket has not been destroyed by that time the server will destroy it.
<strong>Default:</strong> <code>10000</code>.</li>
<li><code>strictFieldWhitespaceValidation</code> {boolean} If <code>true</code>, it turns on strict leading
and trailing whitespace validation for HTTP/2 header field names and values
as per <a href="https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1">RFC-9113</a>.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>strictSingleValueFields</code> {boolean} If <code>true</code>, strict validation is used
for headers and trailers defined as having only a single value, such that
an error is thrown if multiple values are provided.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>http1Options</code> {Object} An options object for configuring the HTTP/1
fallback when <code>allowHTTP1</code> is <code>true</code>. These options are passed to the
underlying HTTP/1 server. See <a href="http.md#httpcreateserveroptions-requestlistener"><code>http.createServer()</code></a> for available
options. Among others, the following are supported:
<ul>
<li><code>IncomingMessage</code> {http.IncomingMessage} Specifies the
<code>IncomingMessage</code> class to use for HTTP/1 fallback.
<strong>Default:</strong> <code>http.IncomingMessage</code>.</li>
<li><code>ServerResponse</code> {http.ServerResponse} Specifies the <code>ServerResponse</code>
class to use for HTTP/1 fallback.
<strong>Default:</strong> <code>http.ServerResponse</code>.</li>
<li><code>keepAliveTimeout</code> {number} The number of milliseconds of inactivity
a server needs to wait for additional incoming data, after it has
finished writing the last response, before a socket will be destroyed.
<strong>Default:</strong> <code>5000</code>.</li>
</ul>
</li>
</ul>
</li>
<li><code>onRequestHandler</code> {Function} See <a href="#compatibility-api">Compatibility API</a></li>
<li>Returns: {Http2SecureServer}</li>
</ul>
<p>Returns a <code>tls.Server</code> instance that creates and manages <code>Http2Session</code>
instances.</p>
<pre><code class="language-mjs">import { createSecureServer } from 'node:http2';
import { readFileSync } from 'node:fs';

const options = {
  key: readFileSync('server-key.pem'),
  cert: readFileSync('server-cert.pem'),
};

// Create a secure HTTP/2 server
const server = createSecureServer(options);

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8443);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
};

// Create a secure HTTP/2 server
const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) =&gt; {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('&lt;h1&gt;Hello World&lt;/h1&gt;');
});

server.listen(8443);
</code></pre>
<h3><code>http2.connect(authority[, options][, listener])</code></h3>
<ul>
<li><code>authority</code> {string|URL} The remote HTTP/2 server to connect to. This must
be in the form of a minimal, valid URL with the <code>http://</code> or <code>https://</code>
prefix, host name, and IP port (if a non-default port is used). Userinfo
(user ID and password), path, querystring, and fragment details in the
URL will be ignored.</li>
<li><code>options</code> {Object}
<ul>
<li><code>maxDeflateDynamicTableSize</code> {number} Sets the maximum dynamic table size
for deflating header fields. <strong>Default:</strong> <code>4Kib</code>.</li>
<li><code>maxSettings</code> {number} Sets the maximum number of settings entries per
<code>SETTINGS</code> frame. The minimum value allowed is <code>1</code>. <strong>Default:</strong> <code>32</code>.</li>
<li><code>maxSessionMemory</code>{number} Sets the maximum memory that the <code>Http2Session</code>
is permitted to use. The value is expressed in terms of number of megabytes,
e.g. <code>1</code> equal 1 megabyte. The minimum value allowed is <code>1</code>.
This is a credit based limit, existing <code>Http2Stream</code>s may cause this
limit to be exceeded, but new <code>Http2Stream</code> instances will be rejected
while this limit is exceeded. The current number of <code>Http2Stream</code> sessions,
the current memory use of the header compression tables, header blocks
retained by open streams, current data queued to be sent, and
unacknowledged <code>PING</code> and <code>SETTINGS</code> frames are all counted towards the
current limit. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxHeaderListPairs</code> {number} Sets the maximum number of header entries.
This is similar to <a href="http.md#servermaxheaderscount"><code>server.maxHeadersCount</code></a> or
<a href="http.md#requestmaxheaderscount"><code>request.maxHeadersCount</code></a> in the <code>node:http</code> module. The minimum value
is <code>1</code>. <strong>Default:</strong> <code>128</code>.</li>
<li><code>maxOriginSetSize</code> {number} Sets the maximum number of uniq origin the sever
can send via ORIGIN frames. <strong>Default:</strong> <code>128</code>.</li>
<li><code>maxOutstandingPings</code> {number} Sets the maximum number of outstanding,
unacknowledged pings. <strong>Default:</strong> <code>10</code>.</li>
<li><code>maxReservedRemoteStreams</code> {number} Sets the maximum number of reserved push
streams the client will accept at any given time. Once the current number of
currently reserved push streams exceeds reaches this limit, new push streams
sent by the server will be automatically rejected. The minimum allowed value
is 0. The maximum allowed value is 2&lt;sup&gt;32&lt;/sup&gt;-1. A negative value sets
this option to the maximum allowed value. <strong>Default:</strong> <code>200</code>.</li>
<li><code>maxSendHeaderBlockLength</code> {number} Sets the maximum allowed size for a
serialized, compressed block of headers. Attempts to send headers that
exceed this limit will result in a <code>'frameError'</code> event being emitted
and the stream being closed and destroyed.</li>
<li><code>paddingStrategy</code> {number} Strategy used for determining the amount of
padding to use for <code>HEADERS</code> and <code>DATA</code> frames. <strong>Default:</strong>
<code>http2.constants.PADDING_STRATEGY_NONE</code>. Value may be one of:
<ul>
<li><code>http2.constants.PADDING_STRATEGY_NONE</code>: No padding is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_MAX</code>: The maximum amount of padding,
determined by the internal implementation, is applied.</li>
<li><code>http2.constants.PADDING_STRATEGY_ALIGNED</code>: Attempts to apply enough
padding to ensure that the total frame length, including the
9-byte header, is a multiple of 8. For each frame, there is a maximum
allowed number of padding bytes that is determined by current flow control
state and settings. If this maximum is less than the calculated amount
needed to ensure alignment, the maximum is used and the total frame length
is not necessarily aligned at 8 bytes.</li>
</ul>
</li>
<li><code>peerMaxConcurrentStreams</code> {number} Sets the maximum number of concurrent
streams for the remote peer as if a <code>SETTINGS</code> frame had been received. Will
be overridden if the remote peer sets its own value for
<code>maxConcurrentStreams</code>. <strong>Default:</strong> <code>100</code>.</li>
<li><code>protocol</code> {string} The protocol to connect with, if not set in the
<code>authority</code>. Value may be either <code>'http:'</code> or <code>'https:'</code>. <strong>Default:</strong>
<code>'https:'</code></li>
<li><code>connectionWindowSize</code> {number} Sets the initial flow control window for
this session, in bytes. This is the total amount of data the remote peer
may send across all streams before it has to wait for a <code>WINDOW_UPDATE</code>.
The equivalent per-stream limit is <code>settings.initialWindowSize</code>. The
minimum allowed value is <code>1</code> and the maximum is 2&lt;sup&gt;31&lt;/sup&gt;-1. Values
below 65535 will not take effect until the initial protocol-default
window of 65535 has been used.
<strong>Default:</strong> <code>33554432</code>.</li>
<li><code>settings</code> {HTTP/2 Settings Object} The initial settings to send to the
remote peer upon connection.</li>
<li><code>remoteCustomSettings</code> {Array} The array of integer values determines the
settings types, which are included in the <code>CustomSettings</code>-property of the
received remoteSettings. Please see the <code>CustomSettings</code>-property of the
<code>Http2Settings</code> object for more information, on the allowed setting types.</li>
<li><code>createConnection</code> {Function} An optional callback that receives the <code>URL</code>
instance passed to <code>connect</code> and the <code>options</code> object, and returns any
<a href="stream.md#class-streamduplex"><code>Duplex</code></a> stream that is to be used as the connection for this session.</li>
<li><code>...options</code> {Object} Any <a href="net.md#netconnect"><code>net.connect()</code></a> or <a href="tls.md#tlsconnectoptions-callback"><code>tls.connect()</code></a> options
can be provided.</li>
<li><code>unknownProtocolTimeout</code> {number} Specifies a timeout in milliseconds that
a server should wait when an <a href="#event-unknownprotocol"><code>'unknownProtocol'</code></a> event is emitted. If
the socket has not been destroyed by that time the server will destroy it.
<strong>Default:</strong> <code>10000</code>.</li>
<li><code>strictFieldWhitespaceValidation</code> {boolean} If <code>true</code>, it turns on strict leading
and trailing whitespace validation for HTTP/2 header field names and values
as per <a href="https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1">RFC-9113</a>.
<strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li><code>listener</code> {Function} Will be registered as a one-time listener of the
<a href="#event-connect"><code>'connect'</code></a> event.</li>
<li>Returns: {ClientHttp2Session}</li>
</ul>
<p>Returns a <code>ClientHttp2Session</code> instance.</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
const client = connect('https://localhost:1234');

/* Use the client */

client.close();
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('https://localhost:1234');

/* Use the client */

client.close();
</code></pre>
<h3><code>http2.constants</code></h3>
<h4>Header name constants</h4>
<p>The <code>HTTP2_HEADER_*</code> constants provide names for HTTP/2 pseudo-headers and
known HTTP header names. Using these string constants is optional. For example,
<code>http2.constants.HTTP2_HEADER_CONTENT_TYPE</code> is equal to <code>'content-type'</code>.
For APIs that accept regular header names,
<code>http2.constants.HTTP2_HEADER_CONTENT_TYPE</code>, <code>'content-type'</code>, and
<code>'Content-Type'</code> have the same effect; Node.js serializes the name in
lower-case.</p>
<p>Regular header constants can be used with the compatibility API wherever the
corresponding literal header name is accepted. In compatibility API request
handlers, prefer <code>request.method</code>, <code>request.authority</code>, <code>request.scheme</code>, and
<code>request.url</code> for the corresponding pseudo-headers. Other incoming
pseudo-headers remain available through <code>request.headers</code>. Set response status
through <code>response.statusCode</code> or the <code>statusCode</code> argument to
<code>response.writeHead()</code>. Passing <code>HTTP2_HEADER_STATUS</code> (<code>':status'</code>) to
<code>response.setHeader()</code> or in <code>response.writeHead()</code>'s headers object throws
<code>ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED</code>. <code>HTTP2_HEADER_PROTOCOL</code> is a request
pseudo-header and cannot be sent in a response.</p>
<p>Incoming header object keys are lower-case, so use a constant or a lower-case
literal when accessing them as object properties. Using a constant does not
change header validation, and the availability of a constant does not imply
that the header is valid in every HTTP/2 context. See <a href="#headers-object">HTTP/2 Headers Object</a>
and <a href="#invalid-character-handling-in-header-names-and-values">Invalid character handling in header names and values</a> for details about
header casing and validation.</p>
<h5>Pseudo-header constants</h5>
<p><code>HTTP2_HEADER_METHOD</code>, <code>HTTP2_HEADER_AUTHORITY</code>, <code>HTTP2_HEADER_SCHEME</code>, and
<code>HTTP2_HEADER_PATH</code> identify request pseudo-headers. <code>HTTP2_HEADER_STATUS</code>
identifies the response pseudo-header. <code>HTTP2_HEADER_PROTOCOL</code> identifies the
extended <code>CONNECT</code> request pseudo-header. Pseudo-headers are not permitted in
trailers.</p>
<table>
<thead>
<tr>
<th>Constant</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>http2.constants.HTTP2_HEADER_STATUS</code></td>
<td><code>':status'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_METHOD</code></td>
<td><code>':method'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_AUTHORITY</code></td>
<td><code>':authority'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_SCHEME</code></td>
<td><code>':scheme'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PATH</code></td>
<td><code>':path'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PROTOCOL</code></td>
<td><code>':protocol'</code></td>
</tr>
</tbody>
</table>
<h5>Regular header constants</h5>
<p>The <code>HTTP2_HEADER_CONNECTION</code>, <code>HTTP2_HEADER_UPGRADE</code>,
<code>HTTP2_HEADER_HTTP2_SETTINGS</code>, <code>HTTP2_HEADER_KEEP_ALIVE</code>,
<code>HTTP2_HEADER_PROXY_CONNECTION</code>, and <code>HTTP2_HEADER_TRANSFER_ENCODING</code>
constants identify connection-specific headers that HTTP/2 does not permit.
<code>HTTP2_HEADER_TE</code> is permitted only when its value is <code>'trailers'</code>.</p>
<table>
<thead>
<tr>
<th>Constant</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCEPT_ENCODING</code></td>
<td><code>'accept-encoding'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCEPT_LANGUAGE</code></td>
<td><code>'accept-language'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCEPT_RANGES</code></td>
<td><code>'accept-ranges'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCEPT</code></td>
<td><code>'accept'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS</code></td>
<td><code>'access-control-allow-credentials'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS</code></td>
<td><code>'access-control-allow-headers'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS</code></td>
<td><code>'access-control-allow-methods'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN</code></td>
<td><code>'access-control-allow-origin'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS</code></td>
<td><code>'access-control-expose-headers'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS</code></td>
<td><code>'access-control-request-headers'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD</code></td>
<td><code>'access-control-request-method'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_AGE</code></td>
<td><code>'age'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_AUTHORIZATION</code></td>
<td><code>'authorization'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CACHE_CONTROL</code></td>
<td><code>'cache-control'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONNECTION</code></td>
<td><code>'connection'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_DISPOSITION</code></td>
<td><code>'content-disposition'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_ENCODING</code></td>
<td><code>'content-encoding'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_LENGTH</code></td>
<td><code>'content-length'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_TYPE</code></td>
<td><code>'content-type'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_COOKIE</code></td>
<td><code>'cookie'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_DATE</code></td>
<td><code>'date'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ETAG</code></td>
<td><code>'etag'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_FORWARDED</code></td>
<td><code>'forwarded'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_HOST</code></td>
<td><code>'host'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_IF_MODIFIED_SINCE</code></td>
<td><code>'if-modified-since'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_IF_NONE_MATCH</code></td>
<td><code>'if-none-match'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_IF_RANGE</code></td>
<td><code>'if-range'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_LAST_MODIFIED</code></td>
<td><code>'last-modified'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_LINK</code></td>
<td><code>'link'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_LOCATION</code></td>
<td><code>'location'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_RANGE</code></td>
<td><code>'range'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_REFERER</code></td>
<td><code>'referer'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_SERVER</code></td>
<td><code>'server'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_SET_COOKIE</code></td>
<td><code>'set-cookie'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_STRICT_TRANSPORT_SECURITY</code></td>
<td><code>'strict-transport-security'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_TRANSFER_ENCODING</code></td>
<td><code>'transfer-encoding'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_TE</code></td>
<td><code>'te'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_UPGRADE_INSECURE_REQUESTS</code></td>
<td><code>'upgrade-insecure-requests'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_UPGRADE</code></td>
<td><code>'upgrade'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_USER_AGENT</code></td>
<td><code>'user-agent'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_VARY</code></td>
<td><code>'vary'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_X_CONTENT_TYPE_OPTIONS</code></td>
<td><code>'x-content-type-options'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_X_FRAME_OPTIONS</code></td>
<td><code>'x-frame-options'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_KEEP_ALIVE</code></td>
<td><code>'keep-alive'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PROXY_CONNECTION</code></td>
<td><code>'proxy-connection'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_X_XSS_PROTECTION</code></td>
<td><code>'x-xss-protection'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ALT_SVC</code></td>
<td><code>'alt-svc'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_SECURITY_POLICY</code></td>
<td><code>'content-security-policy'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_EARLY_DATA</code></td>
<td><code>'early-data'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_EXPECT_CT</code></td>
<td><code>'expect-ct'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ORIGIN</code></td>
<td><code>'origin'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PURPOSE</code></td>
<td><code>'purpose'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_TIMING_ALLOW_ORIGIN</code></td>
<td><code>'timing-allow-origin'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_X_FORWARDED_FOR</code></td>
<td><code>'x-forwarded-for'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PRIORITY</code></td>
<td><code>'priority'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCEPT_CHARSET</code></td>
<td><code>'accept-charset'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ACCESS_CONTROL_MAX_AGE</code></td>
<td><code>'access-control-max-age'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_ALLOW</code></td>
<td><code>'allow'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_LANGUAGE</code></td>
<td><code>'content-language'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_LOCATION</code></td>
<td><code>'content-location'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_MD5</code></td>
<td><code>'content-md5'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_CONTENT_RANGE</code></td>
<td><code>'content-range'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_DNT</code></td>
<td><code>'dnt'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_EXPECT</code></td>
<td><code>'expect'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_EXPIRES</code></td>
<td><code>'expires'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_FROM</code></td>
<td><code>'from'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_IF_MATCH</code></td>
<td><code>'if-match'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_IF_UNMODIFIED_SINCE</code></td>
<td><code>'if-unmodified-since'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_MAX_FORWARDS</code></td>
<td><code>'max-forwards'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PREFER</code></td>
<td><code>'prefer'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PROXY_AUTHENTICATE</code></td>
<td><code>'proxy-authenticate'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_PROXY_AUTHORIZATION</code></td>
<td><code>'proxy-authorization'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_REFRESH</code></td>
<td><code>'refresh'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_RETRY_AFTER</code></td>
<td><code>'retry-after'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_TRAILER</code></td>
<td><code>'trailer'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_TK</code></td>
<td><code>'tk'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_VIA</code></td>
<td><code>'via'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_WARNING</code></td>
<td><code>'warning'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_WWW_AUTHENTICATE</code></td>
<td><code>'www-authenticate'</code></td>
</tr>
<tr>
<td><code>http2.constants.HTTP2_HEADER_HTTP2_SETTINGS</code></td>
<td><code>'http2-settings'</code></td>
</tr>
</tbody>
</table>
<h4>Error codes for <code>RST_STREAM</code> and <code>GOAWAY</code></h4>
<table>
<thead>
<tr>
<th>Value</th>
<th>Name</th>
<th>Constant</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>0x00</code></td>
<td>No Error</td>
<td><code>http2.constants.NGHTTP2_NO_ERROR</code></td>
</tr>
<tr>
<td><code>0x01</code></td>
<td>Protocol Error</td>
<td><code>http2.constants.NGHTTP2_PROTOCOL_ERROR</code></td>
</tr>
<tr>
<td><code>0x02</code></td>
<td>Internal Error</td>
<td><code>http2.constants.NGHTTP2_INTERNAL_ERROR</code></td>
</tr>
<tr>
<td><code>0x03</code></td>
<td>Flow Control Error</td>
<td><code>http2.constants.NGHTTP2_FLOW_CONTROL_ERROR</code></td>
</tr>
<tr>
<td><code>0x04</code></td>
<td>Settings Timeout</td>
<td><code>http2.constants.NGHTTP2_SETTINGS_TIMEOUT</code></td>
</tr>
<tr>
<td><code>0x05</code></td>
<td>Stream Closed</td>
<td><code>http2.constants.NGHTTP2_STREAM_CLOSED</code></td>
</tr>
<tr>
<td><code>0x06</code></td>
<td>Frame Size Error</td>
<td><code>http2.constants.NGHTTP2_FRAME_SIZE_ERROR</code></td>
</tr>
<tr>
<td><code>0x07</code></td>
<td>Refused Stream</td>
<td><code>http2.constants.NGHTTP2_REFUSED_STREAM</code></td>
</tr>
<tr>
<td><code>0x08</code></td>
<td>Cancel</td>
<td><code>http2.constants.NGHTTP2_CANCEL</code></td>
</tr>
<tr>
<td><code>0x09</code></td>
<td>Compression Error</td>
<td><code>http2.constants.NGHTTP2_COMPRESSION_ERROR</code></td>
</tr>
<tr>
<td><code>0x0a</code></td>
<td>Connect Error</td>
<td><code>http2.constants.NGHTTP2_CONNECT_ERROR</code></td>
</tr>
<tr>
<td><code>0x0b</code></td>
<td>Enhance Your Calm</td>
<td><code>http2.constants.NGHTTP2_ENHANCE_YOUR_CALM</code></td>
</tr>
<tr>
<td><code>0x0c</code></td>
<td>Inadequate Security</td>
<td><code>http2.constants.NGHTTP2_INADEQUATE_SECURITY</code></td>
</tr>
<tr>
<td><code>0x0d</code></td>
<td>HTTP/1.1 Required</td>
<td><code>http2.constants.NGHTTP2_HTTP_1_1_REQUIRED</code></td>
</tr>
</tbody>
</table>
<p>The <code>'timeout'</code> event is emitted when there is no activity on the Server for
a given number of milliseconds set using <code>http2server.setTimeout()</code>.</p>
<h3><code>http2.getDefaultSettings()</code></h3>
<ul>
<li>Returns: {HTTP/2 Settings Object}</li>
</ul>
<p>Returns an object containing the default settings for an <code>Http2Session</code>
instance. This method returns a new object instance every time it is called
so instances returned may be safely modified for use.</p>
<h3><code>http2.getPackedSettings([settings])</code></h3>
<ul>
<li><code>settings</code> {HTTP/2 Settings Object}</li>
<li>Returns: {Buffer}</li>
</ul>
<p>Returns a <code>Buffer</code> instance containing serialized representation of the given
HTTP/2 settings as specified in the <a href="https://tools.ietf.org/html/rfc7540">HTTP/2</a> specification. This is intended
for use with the <code>HTTP2-Settings</code> header field.</p>
<pre><code class="language-mjs">import { getPackedSettings } from 'node:http2';

const packed = getPackedSettings({ enablePush: false });

console.log(packed.toString('base64'));
// Prints: AAIAAAAA
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

const packed = http2.getPackedSettings({ enablePush: false });

console.log(packed.toString('base64'));
// Prints: AAIAAAAA
</code></pre>
<h3><code>http2.getUnpackedSettings(buf)</code></h3>
<ul>
<li><code>buf</code> {Buffer|TypedArray} The packed settings.</li>
<li>Returns: {HTTP/2 Settings Object}</li>
</ul>
<p>Returns a <a href="#settings-object">HTTP/2 Settings Object</a> containing the deserialized settings from
the given <code>Buffer</code> as generated by <code>http2.getPackedSettings()</code>.</p>
<h3><code>http2.performServerHandshake(socket[, options])</code></h3>
<ul>
<li><code>socket</code> {stream.Duplex}</li>
<li><code>options</code> {Object} Any <a href="#http2createserveroptions-onrequesthandler"><code>http2.createServer()</code></a> option can be provided.</li>
<li>Returns: {ServerHttp2Session}</li>
</ul>
<p>Create an HTTP/2 server session from an existing socket.</p>
<h3><code>http2.sensitiveHeaders</code></h3>
<ul>
<li>Type: {symbol}</li>
</ul>
<p>This symbol can be set as a property on the HTTP/2 headers object with an array
value in order to provide a list of headers considered sensitive.
See <a href="#sensitive-headers">Sensitive headers</a> for more details.</p>
<h3>Headers object</h3>
<p>Headers are represented as own-properties on JavaScript objects. The property
keys will be serialized to lower-case. Property values should be strings (if
they are not they will be coerced to strings) or an <code>Array</code> of strings (in order
to send more than one value per header field).</p>
<pre><code class="language-js">const headers = {
  ':status': '200',
  'content-type': 'text-plain',
  'ABC': ['has', 'more', 'than', 'one', 'value'],
};

stream.respond(headers);
</code></pre>
<p>Header objects passed to callback functions will have a <code>null</code> prototype. This
means that normal JavaScript object methods such as
<code>Object.prototype.toString()</code> and <code>Object.prototype.hasOwnProperty()</code> will
not work.</p>
<p>For incoming headers:</p>
<ul>
<li>The <code>:status</code> header is converted to <code>number</code>.</li>
<li>Duplicates of <code>:status</code>, <code>:method</code>, <code>:authority</code>, <code>:scheme</code>, <code>:path</code>,
<code>:protocol</code>, <code>age</code>, <code>authorization</code>, <code>access-control-allow-credentials</code>,
<code>access-control-max-age</code>, <code>access-control-request-method</code>, <code>content-encoding</code>,
<code>content-language</code>, <code>content-length</code>, <code>content-location</code>, <code>content-md5</code>,
<code>content-range</code>, <code>content-type</code>, <code>date</code>, <code>dnt</code>, <code>etag</code>, <code>expires</code>, <code>from</code>,
<code>host</code>, <code>if-match</code>, <code>if-modified-since</code>, <code>if-none-match</code>, <code>if-range</code>,
<code>if-unmodified-since</code>, <code>last-modified</code>, <code>location</code>, <code>max-forwards</code>,
<code>proxy-authorization</code>, <code>range</code>, <code>referer</code>,<code>retry-after</code>, <code>tk</code>,
<code>upgrade-insecure-requests</code>, <code>user-agent</code> or <code>x-content-type-options</code> are
discarded.</li>
<li><code>set-cookie</code> is always an array. Duplicates are added to the array.</li>
<li>For duplicate <code>cookie</code> headers, the values are joined together with '; '.</li>
<li>For all other headers, the values are joined together with ', '.</li>
</ul>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer();
server.on('stream', (stream, headers) =&gt; {
  console.log(headers[':path']);
  console.log(headers.ABC);
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer();
server.on('stream', (stream, headers) =&gt; {
  console.log(headers[':path']);
  console.log(headers.ABC);
});
</code></pre>
<h4>Raw headers</h4>
<p>In some APIs, in addition to object format, headers can also be passed or
accessed as a raw flat array, preserving details of ordering and
duplicate keys to match the raw transmission format.</p>
<p>In this format the keys and values are in the same list. It is <em>not</em> a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values. Duplicate headers are
not merged and so each key-value pair will appear separately.</p>
<p>This can be useful for cases such as proxies, where existing headers
should be exactly forwarded as received, or as a performance
optimization when the headers are already available in raw format.</p>
<pre><code class="language-js">const rawHeaders = [
  ':status',
  '404',
  'content-type',
  'text/plain',
];

stream.respond(rawHeaders);
</code></pre>
<h4>Sensitive headers</h4>
<p>HTTP2 headers can be marked as sensitive, which means that the HTTP/2
header compression algorithm will never index them. This can make sense for
header values with low entropy and that may be considered valuable to an
attacker, for example <code>Cookie</code> or <code>Authorization</code>. To achieve this, add
the header name to the <code>[http2.sensitiveHeaders]</code> property as an array:</p>
<pre><code class="language-js">const headers = {
  ':status': '200',
  'content-type': 'text-plain',
  'cookie': 'some-cookie',
  'other-sensitive-header': 'very secret data',
  [http2.sensitiveHeaders]: ['cookie', 'other-sensitive-header'],
};

stream.respond(headers);
</code></pre>
<p>For some headers, such as <code>Authorization</code> and short <code>Cookie</code> headers,
this flag is set automatically.</p>
<p>This property is also set for received headers. It will contain the names of
all headers marked as sensitive, including ones marked that way automatically.</p>
<p>For raw headers, this should still be set as a property on the array, like
<code>rawHeadersArray[http2.sensitiveHeaders] = ['cookie']</code>, not as a separate key
and value pair within the array itself.</p>
<h3>Settings object</h3>
<p>The <code>http2.getDefaultSettings()</code>, <code>http2.getPackedSettings()</code>,
<code>http2.createServer()</code>, <code>http2.createSecureServer()</code>,
<code>http2session.settings()</code>, <code>http2session.localSettings</code>, and
<code>http2session.remoteSettings</code> APIs either return or receive as input an
object that defines configuration settings for an <code>Http2Session</code> object.
These objects are ordinary JavaScript objects containing the following
properties.</p>
<ul>
<li><code>headerTableSize</code> {number} Specifies the maximum number of bytes used for
header compression. The minimum allowed value is 0. The maximum allowed value
is 2&lt;sup&gt;32&lt;/sup&gt;-1. <strong>Default:</strong> <code>4096</code>.</li>
<li><code>enablePush</code> {boolean} Specifies <code>true</code> if HTTP/2 Push Streams are to be
permitted on the <code>Http2Session</code> instances. <strong>Default:</strong> <code>true</code>.</li>
<li><code>initialWindowSize</code> {number} Specifies the <em>sender's</em> initial window size in
bytes for stream-level flow control. The minimum allowed value is 0. The
maximum allowed value is 2&lt;sup&gt;32&lt;/sup&gt;-1. <strong>Default:</strong> <code>4194304</code>.
This is a per-stream limit; the window for the connection as a whole is
configured separately with the <code>connectionWindowSize</code> option of
<a href="#http2createserveroptions-onrequesthandler"><code>http2.createServer()</code></a> or <a href="#http2connectauthority-options-listener"><code>http2.connect()</code></a>.</li>
<li><code>maxFrameSize</code> {number} Specifies the size in bytes of the largest frame
payload. The minimum allowed value is 16,384. The maximum allowed value is
2&lt;sup&gt;24&lt;/sup&gt;-1. <strong>Default:</strong> <code>16384</code>.</li>
<li><code>maxConcurrentStreams</code> {number} Specifies the maximum number of concurrent
streams permitted on an <code>Http2Session</code>. There is no default value which
implies, at least theoretically, 2&lt;sup&gt;32&lt;/sup&gt;-1 streams may be open
concurrently at any given time in an <code>Http2Session</code>. The minimum value
is 0. The maximum allowed value is 2&lt;sup&gt;32&lt;/sup&gt;-1. <strong>Default:</strong>
<code>4294967295</code>.</li>
<li><code>maxHeaderListSize</code> {number} Specifies the maximum size (uncompressed octets)
of header list that will be accepted. The minimum allowed value is 0. The
maximum allowed value is 2&lt;sup&gt;32&lt;/sup&gt;-1. <strong>Default:</strong> <code>65535</code>.</li>
<li><code>maxHeaderSize</code> {number} Alias for <code>maxHeaderListSize</code>.</li>
<li><code>enableConnectProtocol</code>{boolean} Specifies <code>true</code> if the &quot;Extended Connect
Protocol&quot; defined by <a href="https://tools.ietf.org/html/rfc8441">RFC 8441</a> is to be enabled. This setting is only
meaningful if sent by the server. Once the <code>enableConnectProtocol</code> setting
has been enabled for a given <code>Http2Session</code>, it cannot be disabled.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>customSettings</code> {Object} Specifies additional settings, yet not implemented
in node and the underlying libraries. The key of the object defines the
numeric value of the settings type (as defined in the &quot;HTTP/2 SETTINGS&quot;
registry established by [RFC 7540]) and the values the actual numeric value
of the settings.
The settings type has to be an integer in the range from 1 to 2^16-1.
It should not be a settings type already handled by node, i.e. currently
it should be greater than 6, although it is not an error.
The values need to be unsigned integers in the range from 0 to 2^32-1.
Currently, a maximum of up 10 custom settings is supported.
It is only supported for sending SETTINGS, or for receiving settings values
specified in the <code>remoteCustomSettings</code> options of the server or client
object. Do not mix the <code>customSettings</code>-mechanism for a settings id with
interfaces for the natively handled settings, in case a setting becomes
natively supported in a future node version.</li>
</ul>
<p>All additional properties on the settings object are ignored.</p>
<h3>Error handling</h3>
<p>There are several types of error conditions that may arise when using the
<code>node:http2</code> module:</p>
<p>Validation errors occur when an incorrect argument, option, or setting value is
passed in. These will always be reported by a synchronous <code>throw</code>.</p>
<p>State errors occur when an action is attempted at an incorrect time (for
instance, attempting to send data on a stream after it has closed). These will
be reported using either a synchronous <code>throw</code> or via an <code>'error'</code> event on
the <code>Http2Stream</code>, <code>Http2Session</code> or HTTP/2 Server objects, depending on where
and when the error occurs.</p>
<p>Internal errors occur when an HTTP/2 session fails unexpectedly. These will be
reported via an <code>'error'</code> event on the <code>Http2Session</code> or HTTP/2 Server objects.</p>
<p>Protocol errors occur when various HTTP/2 protocol constraints are violated.
These will be reported using either a synchronous <code>throw</code> or via an <code>'error'</code>
event on the <code>Http2Stream</code>, <code>Http2Session</code> or HTTP/2 Server objects, depending
on where and when the error occurs.</p>
<h3>Invalid character handling in header names and values</h3>
<p>The HTTP/2 implementation applies stricter handling of invalid characters in
HTTP header names and values than the HTTP/1 implementation.</p>
<p>Header field names are <em>case-insensitive</em> and are transmitted over the wire
strictly as lower-case strings. The API provided by Node.js allows header
names to be set as mixed-case strings (e.g. <code>Content-Type</code>) but will convert
those to lower-case (e.g. <code>content-type</code>) upon transmission.</p>
<p>Header field-names <em>must only</em> contain one or more of the following ASCII
characters: <code>a</code>-<code>z</code>, <code>A</code>-<code>Z</code>, <code>0</code>-<code>9</code>, <code>!</code>, <code>#</code>, <code>$</code>, <code>%</code>, <code>&amp;</code>, <code>'</code>, <code>*</code>, <code>+</code>,
<code>-</code>, <code>.</code>, <code>^</code>, <code>_</code>, <code>`</code> (backtick), <code>|</code>, and <code>~</code>.</p>
<p>Using invalid characters within an HTTP header field name will cause the
stream to be closed with a protocol error being reported.</p>
<p>Header field values are handled with more leniency but <em>should</em> not contain
new-line or carriage return characters and <em>should</em> be limited to US-ASCII
characters, per the requirements of the HTTP specification.</p>
<h3>Push streams on the client</h3>
<p>To receive pushed streams on the client, set a listener for the <code>'stream'</code>
event on the <code>ClientHttp2Session</code>:</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';

const client = connect('http://localhost');

client.on('stream', (pushedStream, requestHeaders) =&gt; {
  pushedStream.on('push', (responseHeaders) =&gt; {
    // Process response headers
  });
  pushedStream.on('data', (chunk) =&gt; { /* handle pushed data */ });
});

const req = client.request({ ':path': '/' });
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

const client = http2.connect('http://localhost');

client.on('stream', (pushedStream, requestHeaders) =&gt; {
  pushedStream.on('push', (responseHeaders) =&gt; {
    // Process response headers
  });
  pushedStream.on('data', (chunk) =&gt; { /* handle pushed data */ });
});

const req = client.request({ ':path': '/' });
</code></pre>
<h3>Supporting the <code>CONNECT</code> method</h3>
<p>The <code>CONNECT</code> method is used to allow an HTTP/2 server to be used as a proxy
for TCP/IP connections.</p>
<p>A simple TCP Server:</p>
<pre><code class="language-mjs">import { createServer } from 'node:net';

const server = createServer((socket) =&gt; {
  let name = '';
  socket.setEncoding('utf8');
  socket.on('data', (chunk) =&gt; name += chunk);
  socket.on('end', () =&gt; socket.end(`hello ${name}`));
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const net = require('node:net');

const server = net.createServer((socket) =&gt; {
  let name = '';
  socket.setEncoding('utf8');
  socket.on('data', (chunk) =&gt; name += chunk);
  socket.on('end', () =&gt; socket.end(`hello ${name}`));
});

server.listen(8000);
</code></pre>
<p>An HTTP/2 CONNECT proxy:</p>
<pre><code class="language-mjs">import { createServer, constants } from 'node:http2';
const { NGHTTP2_REFUSED_STREAM, NGHTTP2_CONNECT_ERROR } = constants;
import { connect } from 'node:net';

const proxy = createServer();
proxy.on('stream', (stream, headers) =&gt; {
  if (headers[':method'] !== 'CONNECT') {
    // Only accept CONNECT requests
    stream.close(NGHTTP2_REFUSED_STREAM);
    return;
  }
  const auth = new URL(`tcp://${headers[':authority']}`);
  // It's a very good idea to verify that hostname and port are
  // things this proxy should be connecting to.
  const socket = connect(auth.port, auth.hostname, () =&gt; {
    stream.respond();
    socket.pipe(stream);
    stream.pipe(socket);
  });
  socket.on('error', (error) =&gt; {
    stream.close(NGHTTP2_CONNECT_ERROR);
  });
});

proxy.listen(8001);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const { NGHTTP2_REFUSED_STREAM } = http2.constants;
const net = require('node:net');

const proxy = http2.createServer();
proxy.on('stream', (stream, headers) =&gt; {
  if (headers[':method'] !== 'CONNECT') {
    // Only accept CONNECT requests
    stream.close(NGHTTP2_REFUSED_STREAM);
    return;
  }
  const auth = new URL(`tcp://${headers[':authority']}`);
  // It's a very good idea to verify that hostname and port are
  // things this proxy should be connecting to.
  const socket = net.connect(auth.port, auth.hostname, () =&gt; {
    stream.respond();
    socket.pipe(stream);
    stream.pipe(socket);
  });
  socket.on('error', (error) =&gt; {
    stream.close(http2.constants.NGHTTP2_CONNECT_ERROR);
  });
});

proxy.listen(8001);
</code></pre>
<p>An HTTP/2 CONNECT client:</p>
<pre><code class="language-mjs">import { connect, constants } from 'node:http2';

const client = connect('http://localhost:8001');

// Must not specify the ':path' and ':scheme' headers
// for CONNECT requests or an error will be thrown.
const req = client.request({
  ':method': 'CONNECT',
  ':authority': 'localhost:8000',
});

req.on('response', (headers) =&gt; {
  console.log(headers[constants.HTTP2_HEADER_STATUS]);
});
let data = '';
req.setEncoding('utf8');
req.on('data', (chunk) =&gt; data += chunk);
req.on('end', () =&gt; {
  console.log(`The server says: ${data}`);
  client.close();
});
req.end('Jane');
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');

const client = http2.connect('http://localhost:8001');

// Must not specify the ':path' and ':scheme' headers
// for CONNECT requests or an error will be thrown.
const req = client.request({
  ':method': 'CONNECT',
  ':authority': 'localhost:8000',
});

req.on('response', (headers) =&gt; {
  console.log(headers[http2.constants.HTTP2_HEADER_STATUS]);
});
let data = '';
req.setEncoding('utf8');
req.on('data', (chunk) =&gt; data += chunk);
req.on('end', () =&gt; {
  console.log(`The server says: ${data}`);
  client.close();
});
req.end('Jane');
</code></pre>
<h3>The extended <code>CONNECT</code> protocol</h3>
<p><a href="https://tools.ietf.org/html/rfc8441">RFC 8441</a> defines an &quot;Extended CONNECT Protocol&quot; extension to HTTP/2 that
may be used to bootstrap the use of an <code>Http2Stream</code> using the <code>CONNECT</code>
method as a tunnel for other communication protocols (such as WebSockets).</p>
<p>The use of the Extended CONNECT Protocol is enabled by HTTP/2 servers by using
the <code>enableConnectProtocol</code> setting:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const settings = { enableConnectProtocol: true };
const server = createServer({ settings });
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const settings = { enableConnectProtocol: true };
const server = http2.createServer({ settings });
</code></pre>
<p>Once the client receives the <code>SETTINGS</code> frame from the server indicating that
the extended CONNECT may be used, it may send <code>CONNECT</code> requests that use the
<code>':protocol'</code> HTTP/2 pseudo-header:</p>
<pre><code class="language-mjs">import { connect } from 'node:http2';
const client = connect('http://localhost:8080');
client.on('remoteSettings', (settings) =&gt; {
  if (settings.enableConnectProtocol) {
    const req = client.request({ ':method': 'CONNECT', ':protocol': 'foo' });
    // ...
  }
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const client = http2.connect('http://localhost:8080');
client.on('remoteSettings', (settings) =&gt; {
  if (settings.enableConnectProtocol) {
    const req = client.request({ ':method': 'CONNECT', ':protocol': 'foo' });
    // ...
  }
});
</code></pre>
<h2>Compatibility API</h2>
<p>The Compatibility API has the goal of providing a similar developer experience
of HTTP/1 when using HTTP/2, making it possible to develop applications
that support both <a href="http.md">HTTP/1</a> and HTTP/2. This API targets only the
<strong>public API</strong> of the <a href="http.md">HTTP/1</a>. However many modules use internal
methods or state, and those <em>are not supported</em> as it is a completely
different implementation.</p>
<p>The following example creates an HTTP/2 server using the compatibility
API:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer((req, res) =&gt; {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Foo': 'bar',
  });
  res.end('ok');
});
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer((req, res) =&gt; {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Foo': 'bar',
  });
  res.end('ok');
});
</code></pre>
<p>In order to create a mixed <a href="https.md">HTTPS</a> and HTTP/2 server, refer to the
<a href="#alpn-negotiation">ALPN negotiation</a> section.
Upgrading from non-tls HTTP/1 servers is not supported.</p>
<p>The HTTP/2 compatibility API is composed of <a href="#class-http2http2serverrequest"><code>Http2ServerRequest</code></a> and
<a href="#class-http2http2serverresponse"><code>Http2ServerResponse</code></a>. They aim at API compatibility with HTTP/1, but
they do not hide the differences between the protocols. As an example,
the status message for HTTP codes is ignored.</p>
<h3>ALPN negotiation</h3>
<p>ALPN negotiation allows supporting both <a href="https.md">HTTPS</a> and HTTP/2 over
the same socket. The <code>req</code> and <code>res</code> objects can be either HTTP/1 or
HTTP/2, and an application <strong>must</strong> restrict itself to the public API of
<a href="http.md">HTTP/1</a>, and detect if it is possible to use the more advanced
features of HTTP/2.</p>
<p>The following example creates a server that supports both protocols:</p>
<pre><code class="language-mjs">import { createSecureServer } from 'node:http2';
import { readFileSync } from 'node:fs';

const cert = readFileSync('./cert.pem');
const key = readFileSync('./key.pem');

const server = createSecureServer(
  { cert, key, allowHTTP1: true },
  onRequest,
).listen(8000);

function onRequest(req, res) {
  // Detects if it is an HTTPS request or HTTP/2
  const { socket: { alpnProtocol } } = req.httpVersion === '2.0' ?
    req.stream.session : req;
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    alpnProtocol,
    httpVersion: req.httpVersion,
  }));
}
</code></pre>
<pre><code class="language-cjs">const { createSecureServer } = require('node:http2');
const { readFileSync } = require('node:fs');

const cert = readFileSync('./cert.pem');
const key = readFileSync('./key.pem');

const server = createSecureServer(
  { cert, key, allowHTTP1: true },
  onRequest,
).listen(4443);

function onRequest(req, res) {
  // Detects if it is an HTTPS request or HTTP/2
  const { socket: { alpnProtocol } } = req.httpVersion === '2.0' ?
    req.stream.session : req;
  res.writeHead(200, { 'content-type': 'application/json' });
  res.end(JSON.stringify({
    alpnProtocol,
    httpVersion: req.httpVersion,
  }));
}
</code></pre>
<p>The <code>'request'</code> event works identically on both <a href="https.md">HTTPS</a> and
HTTP/2.</p>
<h3>Class: <code>http2.Http2ServerRequest</code></h3>
<ul>
<li>Extends: {stream.Readable}</li>
</ul>
<p>A <code>Http2ServerRequest</code> object is created by <a href="#class-http2server"><code>http2.Server</code></a> or
<a href="#class-http2secureserver"><code>http2.SecureServer</code></a> and passed as the first argument to the
<a href="#event-request"><code>'request'</code></a> event. It may be used to access a request status, headers, and
data.</p>
<h4>Event: <code>'aborted'</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>The <code>'aborted'</code> event is emitted whenever a <code>Http2ServerRequest</code> instance
is closed while the underlying writable side is still open.</p>
<h4>Event: <code>'close'</code></h4>
<p>Indicates that the underlying <a href="#class-http2stream"><code>Http2Stream</code></a> was closed.
Just like <code>'end'</code>, this event occurs only once per response.</p>
<h4><code>request.aborted</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>The <code>request.aborted</code> property will be <code>true</code> if the request has
been aborted.</p>
<h4><code>request.authority</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>The request authority pseudo header field. Because HTTP/2 allows requests
to set either <code>:authority</code> or <code>host</code>, this value is derived from
<code>req.headers[':authority']</code> if present. Otherwise, it is derived from
<code>req.headers['host']</code>.</p>
<h4><code>request.complete</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>request.complete</code> property will be <code>true</code> if the request has
been completed, aborted, or destroyed.</p>
<h4><code>request.connection</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#requestsocket"><code>request.socket</code></a>.</p>
</blockquote>
<ul>
<li>Type: {net.Socket|tls.TLSSocket}</li>
</ul>
<p>See <a href="#requestsocket"><code>request.socket</code></a>.</p>
<h4><code>request.destroy([error])</code></h4>
<ul>
<li><code>error</code> {Error}</li>
</ul>
<p>Calls <code>destroy()</code> on the <a href="#class-http2stream"><code>Http2Stream</code></a> that received
the <a href="#class-http2http2serverrequest"><code>Http2ServerRequest</code></a>. If <code>error</code> is provided, an <code>'error'</code> event
is emitted and <code>error</code> is passed as an argument to any listeners on the event.</p>
<p>It does nothing if the stream was already destroyed.</p>
<h4><code>request.headers</code></h4>
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
<p>See <a href="#headers-object">HTTP/2 Headers Object</a>.</p>
<p>In HTTP/2, the request path, host name, protocol, and method are represented as
special headers prefixed with the <code>:</code> character (e.g. <code>':path'</code>). These special
headers will be included in the <code>request.headers</code> object. Care must be taken not
to inadvertently modify these special headers or errors may occur. For instance,
removing all headers from the request will cause errors to occur:</p>
<pre><code class="language-js">removeAllHeaders(request.headers);
assert(request.url);   // Fails because the :path header has been removed
</code></pre>
<h4><code>request.httpVersion</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server. Returns
<code>'2.0'</code>.</p>
<p>Also <code>message.httpVersionMajor</code> is the first integer and
<code>message.httpVersionMinor</code> is the second.</p>
<h4><code>request.method</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>The request method as a string. Read-only. Examples: <code>'GET'</code>, <code>'DELETE'</code>.</p>
<h4><code>request.rawHeaders</code></h4>
<ul>
<li>Type: {HTTP/2 Raw Headers}</li>
</ul>
<p>The raw request/response headers list exactly as they were received.</p>
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
<h4><code>request.rawTrailers</code></h4>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The raw request/response trailer keys and values exactly as they were
received. Only populated at the <code>'end'</code> event.</p>
<h4><code>request.scheme</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>The request scheme pseudo header field indicating the scheme
portion of the target URL.</p>
<h4><code>request.setTimeout(msecs, callback)</code></h4>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http2.Http2ServerRequest}</li>
</ul>
<p>Sets the <a href="#class-http2stream"><code>Http2Stream</code></a>'s timeout value to <code>msecs</code>. If a callback is
provided, then it is added as a listener on the <code>'timeout'</code> event on
the response object.</p>
<p>If no <code>'timeout'</code> listener is added to the request, the response, or
the server, then <a href="#class-http2stream"><code>Http2Stream</code></a>s are destroyed when they time out. If a
handler is assigned to the request, the response, or the server's <code>'timeout'</code>
events, timed out sockets must be handled explicitly.</p>
<h4><code>request.socket</code></h4>
<ul>
<li>Type: {net.Socket|tls.TLSSocket}</li>
</ul>
<p>Returns a <code>Proxy</code> object that acts as a <code>net.Socket</code> (or <code>tls.TLSSocket</code>) but
applies getters, setters, and methods based on HTTP/2 logic.</p>
<p><code>destroyed</code>, <code>readable</code>, and <code>writable</code> properties will be retrieved from and
set on <code>request.stream</code>.</p>
<p><code>destroy</code>, <code>emit</code>, <code>end</code>, <code>on</code> and <code>once</code> methods will be called on
<code>request.stream</code>.</p>
<p><code>setTimeout</code> method will be called on <code>request.stream.session</code>.</p>
<p><code>pause</code>, <code>read</code>, <code>resume</code>, and <code>write</code> will throw an error with code
<code>ERR_HTTP2_NO_SOCKET_MANIPULATION</code>. See <a href="#http2session-and-sockets"><code>Http2Session</code> and Sockets</a> for
more information.</p>
<p>All other interactions will be routed directly to the socket. With TLS support,
use <a href="tls.md#tlssocketgetpeercertificatedetailed"><code>request.socket.getPeerCertificate()</code></a> to obtain the client's
authentication details.</p>
<h4><code>request.stream</code></h4>
<ul>
<li>Type: {Http2Stream}</li>
</ul>
<p>The <a href="#class-http2stream"><code>Http2Stream</code></a> object backing the request.</p>
<h4><code>request.trailers</code></h4>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The request/response trailers object. Only populated at the <code>'end'</code> event.</p>
<p>The object has a null prototype and should not be accessed using the <code>in</code>
operator.</p>
<h4><code>request.url</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Request URL string. This contains only the URL that is present in the actual
HTTP request. If the request is:</p>
<pre><code class="language-http">GET /status?name=ryan HTTP/1.1
Accept: text/plain
</code></pre>
<p>Then <code>request.url</code> will be:</p>
<pre><code class="language-json">&quot;/status?name=ryan&quot;
</code></pre>
<p>To parse the url into its parts, <code>new URL()</code> can be used:</p>
<pre><code class="language-console">$ node
&gt; new URL('/status?name=ryan', 'http://example.com')
URL {
  href: 'http://example.com/status?name=ryan',
  origin: 'http://example.com',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'example.com',
  hostname: 'example.com',
  port: '',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' =&gt; 'ryan' },
  hash: ''
}
</code></pre>
<h3>Class: <code>http2.Http2ServerResponse</code></h3>
<ul>
<li>Extends: {Stream}</li>
</ul>
<p>This object is created internally by an HTTP server, not by the user. It is
passed as the second parameter to the <a href="#event-request"><code>'request'</code></a> event.</p>
<h4>Event: <code>'close'</code></h4>
<p>Indicates that the underlying <a href="#class-http2stream"><code>Http2Stream</code></a> was terminated before
<a href="#responseenddata-encoding-callback"><code>response.end()</code></a> was called or able to flush.</p>
<h4>Event: <code>'finish'</code></h4>
<p>Emitted when the response has been sent. More specifically, this event is
emitted when the last segment of the response headers and body have been
handed off to the HTTP/2 multiplexing for transmission over the network. It
does not imply that the client has received anything yet.</p>
<p>After this event, no more events will be emitted on the response object.</p>
<h4><code>response.addTrailers(headers)</code></h4>
<ul>
<li><code>headers</code> {Object}</li>
</ul>
<p>This method adds HTTP trailing headers (a header but at the end of the
message) to the response.</p>
<p>Trailers must be added before calling <a href="#responseenddata-encoding-callback"><code>response.end()</code></a>; trailers added
afterwards are silently dropped.</p>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<h4><code>response.appendHeader(name, value)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string|string[]}</li>
</ul>
<p>Append a single header value to the header object.</p>
<p>If the value is an array, this is equivalent to calling this method multiple
times.</p>
<p>If there were no previous values for the header, this is equivalent to calling
<a href="#responsesetheadername-value"><code>response.setHeader()</code></a>.</p>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<pre><code class="language-js">// Returns headers including &quot;set-cookie: a&quot; and &quot;set-cookie: b&quot;
const server = http2.createServer((req, res) =&gt; {
  res.setHeader('set-cookie', 'a');
  res.appendHeader('set-cookie', 'b');
  res.writeHead(200);
  res.end('ok');
});
</code></pre>
<h4><code>response.connection</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#responsesocket"><code>response.socket</code></a>.</p>
</blockquote>
<ul>
<li>Type: {net.Socket|tls.TLSSocket}</li>
</ul>
<p>See <a href="#responsesocket"><code>response.socket</code></a>.</p>
<h4><code>response.createPushResponse(headers, callback)</code></h4>
<ul>
<li><code>headers</code> {HTTP/2 Headers Object} An object describing the headers</li>
<li><code>callback</code> {Function} Called once <code>http2stream.pushStream()</code> is finished,
or either when the attempt to create the pushed <code>Http2Stream</code> has failed or
has been rejected, or the state of <code>Http2ServerRequest</code> is closed prior to
calling the <code>http2stream.pushStream()</code> method
<ul>
<li><code>err</code> {Error}</li>
<li><code>res</code> {http2.Http2ServerResponse} The newly-created <code>Http2ServerResponse</code>
object</li>
</ul>
</li>
</ul>
<p>Call <a href="#http2streampushstreamheaders-options-callback"><code>http2stream.pushStream()</code></a> with the given headers, and wrap the
given <a href="#class-http2stream"><code>Http2Stream</code></a> on a newly created <code>Http2ServerResponse</code> as the callback
parameter if successful. When <code>Http2ServerRequest</code> is closed, the callback is
called with an error <code>ERR_HTTP2_INVALID_STREAM</code>.</p>
<h4><code>response.end([data[, encoding]][, callback])</code></h4>
<ul>
<li><code>data</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {this}</li>
</ul>
<p>This method signals to the server that all of the response headers and body
have been sent; that server should consider this message complete.
The method, <code>response.end()</code>, MUST be called on each response.</p>
<p>If <code>data</code> is specified, it is equivalent to calling
<a href="http.md#responsewritechunk-encoding-callback"><code>response.write(data, encoding)</code></a> followed by <code>response.end(callback)</code>.</p>
<p>If <code>callback</code> is specified, it will be called when the response stream
is finished.</p>
<h4><code>response.finished</code></h4>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="#responsewritableended"><code>response.writableEnded</code></a>.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Boolean value that indicates whether the response has completed. Starts
as <code>false</code>. After <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> executes, the value will be <code>true</code>.</p>
<h4><code>response.getHeader(name)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {string}</li>
</ul>
<p>Reads out a header that has already been queued but not sent to the client.
The name is case-insensitive.</p>
<pre><code class="language-js">const contentType = response.getHeader('content-type');
</code></pre>
<h4><code>response.getHeaderNames()</code></h4>
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
<h4><code>response.getHeaders()</code></h4>
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
<h4><code>response.hasHeader(name)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the header identified by <code>name</code> is currently set in the
outgoing headers. The header name matching is case-insensitive.</p>
<pre><code class="language-js">const hasContentType = response.hasHeader('content-type');
</code></pre>
<h4><code>response.headersSent</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>True if headers were sent, false otherwise (read-only).</p>
<h4><code>response.removeHeader(name)</code></h4>
<ul>
<li><code>name</code> {string}</li>
</ul>
<p>Removes a header that has been queued for implicit sending.</p>
<pre><code class="language-js">response.removeHeader('Content-Encoding');
</code></pre>
<h4><code>response.req</code></h4>
<ul>
<li>Type: {http2.Http2ServerRequest}</li>
</ul>
<p>A reference to the original HTTP2 <code>request</code> object.</p>
<h4><code>response.sendDate</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>When true, the Date header will be automatically generated and sent in
the response if it is not already present in the headers. Defaults to true.</p>
<p>This should only be disabled for testing; HTTP requires the Date header
in responses.</p>
<h4><code>response.setHeader(name, value)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string|string[]}</li>
</ul>
<p>Sets a single header value for implicit headers. If this header already exists
in the to-be-sent headers, its value will be replaced. Use an array of strings
here to send multiple headers with the same name.</p>
<pre><code class="language-js">response.setHeader('Content-Type', 'text/html; charset=utf-8');
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
const server = http2.createServer((req, res) =&gt; {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('ok');
});
</code></pre>
<h4><code>response.setTimeout(msecs[, callback])</code></h4>
<ul>
<li><code>msecs</code> {number}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {http2.Http2ServerResponse}</li>
</ul>
<p>Sets the <a href="#class-http2stream"><code>Http2Stream</code></a>'s timeout value to <code>msecs</code>. If a callback is
provided, then it is added as a listener on the <code>'timeout'</code> event on
the response object.</p>
<p>If no <code>'timeout'</code> listener is added to the request, the response, or
the server, then <a href="#class-http2stream"><code>Http2Stream</code></a>s are destroyed when they time out. If a
handler is assigned to the request, the response, or the server's <code>'timeout'</code>
events, timed out sockets must be handled explicitly.</p>
<h4><code>response.socket</code></h4>
<ul>
<li>Type: {net.Socket|tls.TLSSocket}</li>
</ul>
<p>Returns a <code>Proxy</code> object that acts as a <code>net.Socket</code> (or <code>tls.TLSSocket</code>) but
applies getters, setters, and methods based on HTTP/2 logic.</p>
<p><code>destroyed</code>, <code>readable</code>, and <code>writable</code> properties will be retrieved from and
set on <code>response.stream</code>.</p>
<p><code>destroy</code>, <code>emit</code>, <code>end</code>, <code>on</code> and <code>once</code> methods will be called on
<code>response.stream</code>.</p>
<p><code>setTimeout</code> method will be called on <code>response.stream.session</code>.</p>
<p><code>pause</code>, <code>read</code>, <code>resume</code>, and <code>write</code> will throw an error with code
<code>ERR_HTTP2_NO_SOCKET_MANIPULATION</code>. See <a href="#http2session-and-sockets"><code>Http2Session</code> and Sockets</a> for
more information.</p>
<p>All other interactions will be routed directly to the socket.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http2';
const server = createServer((req, res) =&gt; {
  const ip = req.socket.remoteAddress;
  const port = req.socket.remotePort;
  res.end(`Your IP address is ${ip} and your source port is ${port}.`);
}).listen(3000);
</code></pre>
<pre><code class="language-cjs">const http2 = require('node:http2');
const server = http2.createServer((req, res) =&gt; {
  const ip = req.socket.remoteAddress;
  const port = req.socket.remotePort;
  res.end(`Your IP address is ${ip} and your source port is ${port}.`);
}).listen(3000);
</code></pre>
<h4><code>response.statusCode</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>When using implicit headers (not calling <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.</p>
<pre><code class="language-js">response.statusCode = 404;
</code></pre>
<p>After response header was sent to the client, this property indicates the
status code which was sent out.</p>
<h4><code>response.statusMessage</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Status message is not supported by HTTP/2 (RFC 7540 8.1.2.4). It returns
an empty string.</p>
<h4><code>response.stream</code></h4>
<ul>
<li>Type: {Http2Stream}</li>
</ul>
<p>The <a href="#class-http2stream"><code>Http2Stream</code></a> object backing the response.</p>
<h4><code>response.writableEnded</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> after <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> has been called. This property
does not indicate whether the data has been flushed, for this use
<a href="stream.md#writablewritablefinished"><code>writable.writableFinished</code></a> instead.</p>
<h4><code>response.write(chunk[, encoding][, callback])</code></h4>
<ul>
<li><code>chunk</code> {string|Buffer|Uint8Array}</li>
<li><code>encoding</code> {string}</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>If this method is called and <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> has not been called,
it will switch to implicit header mode and flush the implicit headers.</p>
<p>This sends a chunk of the response body. This method may
be called multiple times to provide successive parts of the body.</p>
<p>In the <code>node:http</code> module, the response body is omitted when the
request is a HEAD request. Similarly, the <code>204</code> and <code>304</code> responses
<em>must not</em> include a message body.</p>
<p><code>chunk</code> can be a string or a buffer. If <code>chunk</code> is a string,
the second parameter specifies how to encode it into a byte stream.
By default the <code>encoding</code> is <code>'utf8'</code>. <code>callback</code> will be called when this chunk
of data is flushed.</p>
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
<h4><code>response.writeContinue()</code></h4>
<p>Sends a status <code>100 Continue</code> to the client, indicating that the request body
should be sent. See the <a href="#event-checkcontinue"><code>'checkContinue'</code></a> event on <code>Http2Server</code> and
<code>Http2SecureServer</code>.</p>
<h4><code>response.writeEarlyHints(hints)</code></h4>
<ul>
<li><code>hints</code> {Object}</li>
</ul>
<p>Sends a status <code>103 Early Hints</code> to the client with a Link header,
indicating that the user agent can preload/preconnect the linked resources.
The <code>hints</code> is an object containing the values of headers to be sent with
early hints message.</p>
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
});
</code></pre>
<h4><code>response.writeInformation(statusCode[, headers])</code></h4>
<ul>
<li><code>statusCode</code> {number} An HTTP 1xx informational status code, between <code>100</code>
and <code>199</code> inclusive, excluding <code>101</code> (Switching Protocols) which is not
allowed in HTTP/2.</li>
<li><code>headers</code> {Object} An optional object of headers to send with the
informational response.</li>
</ul>
<p>Sends an arbitrary HTTP 1xx informational response, equivalent in HTTP/2 to a
<code>HEADERS</code> frame whose <code>:status</code> pseudo-header is a 1xx code. May be called
multiple times before the final response. After the final response headers
have been sent, this method is a no-op and returns <code>false</code>.</p>
<p>This is the generic equivalent of <a href="#responsewritecontinue"><code>response.writeContinue()</code></a> and
<a href="#responsewriteearlyhintshints"><code>response.writeEarlyHints()</code></a>.</p>
<pre><code class="language-js">response.writeInformation(110, { 'X-Progress': '50%' });
</code></pre>
<h4><code>response.writeHead(statusCode[, statusMessage][, headers])</code></h4>
<ul>
<li><code>statusCode</code> {number}</li>
<li><code>statusMessage</code> {string}</li>
<li><code>headers</code> {HTTP/2 Headers Object|HTTP/2 Raw Headers}</li>
<li>Returns: {http2.Http2ServerResponse}</li>
</ul>
<p>Sends a response header to the request. The status code is a 3-digit HTTP
status code, like <code>404</code>. The last argument, <code>headers</code>, are the response headers.</p>
<p>Returns a reference to the <code>Http2ServerResponse</code>, so that calls can be chained.</p>
<p>For compatibility with <a href="http.md">HTTP/1</a>, a human-readable <code>statusMessage</code> may be
passed as the second argument. However, because the <code>statusMessage</code> has no
meaning within HTTP/2, the argument will have no effect and a process warning
will be emitted.</p>
<pre><code class="language-js">const body = 'hello world';
response.writeHead(200, {
  'Content-Length': Buffer.byteLength(body),
  'Content-Type': 'text/plain; charset=utf-8',
});
</code></pre>
<p><code>Content-Length</code> is given in bytes not characters. The
<code>Buffer.byteLength()</code> API may be used to determine the number of bytes in a
given encoding. On outbound messages, Node.js does not check if Content-Length
and the length of the body being transmitted are equal or not. However, when
receiving messages, Node.js will automatically reject messages when the
<code>Content-Length</code> does not match the actual payload size.</p>
<p>This method may be called at most one time on a message before
<a href="#responseenddata-encoding-callback"><code>response.end()</code></a> is called.</p>
<p>If <a href="#responsewritechunk-encoding-callback"><code>response.write()</code></a> or <a href="#responseenddata-encoding-callback"><code>response.end()</code></a> are called before calling
this, the implicit/mutable headers will be calculated and call this function.</p>
<p>When headers have been set with <a href="#responsesetheadername-value"><code>response.setHeader()</code></a>, they will be merged
with any headers passed to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a>, with the headers passed
to <a href="#responsewriteheadstatuscode-statusmessage-headers"><code>response.writeHead()</code></a> given precedence.</p>
<pre><code class="language-js">// Returns content-type = text/plain
const server = http2.createServer((req, res) =&gt; {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('ok');
});
</code></pre>
<p>Attempting to set a header field name or value that contains invalid characters
will result in a <a href="errors.md#class-typeerror"><code>TypeError</code></a> being thrown.</p>
<h2>Collecting HTTP/2 performance metrics</h2>
<p>The <a href="perf_hooks.md">Performance Observer</a> API can be used to collect basic performance
metrics for each <code>Http2Session</code> and <code>Http2Stream</code> instance.</p>
<pre><code class="language-mjs">import { PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((items) =&gt; {
  const entry = items.getEntries()[0];
  console.log(entry.entryType);  // prints 'http2'
  if (entry.name === 'Http2Session') {
    // Entry contains statistics about the Http2Session
  } else if (entry.name === 'Http2Stream') {
    // Entry contains statistics about the Http2Stream
  }
});
obs.observe({ entryTypes: ['http2'] });
</code></pre>
<pre><code class="language-cjs">const { PerformanceObserver } = require('node:perf_hooks');

const obs = new PerformanceObserver((items) =&gt; {
  const entry = items.getEntries()[0];
  console.log(entry.entryType);  // prints 'http2'
  if (entry.name === 'Http2Session') {
    // Entry contains statistics about the Http2Session
  } else if (entry.name === 'Http2Stream') {
    // Entry contains statistics about the Http2Stream
  }
});
obs.observe({ entryTypes: ['http2'] });
</code></pre>
<p>The <code>entryType</code> property of the <code>PerformanceEntry</code> will be equal to <code>'http2'</code>.</p>
<p>The <code>name</code> property of the <code>PerformanceEntry</code> will be equal to either
<code>'Http2Stream'</code> or <code>'Http2Session'</code>.</p>
<p>If <code>name</code> is equal to <code>Http2Stream</code>, the <code>PerformanceEntry</code> will contain the
following additional properties:</p>
<ul>
<li><code>bytesRead</code> {number} The number of <code>DATA</code> frame bytes received for this
<code>Http2Stream</code>.</li>
<li><code>bytesWritten</code> {number} The number of <code>DATA</code> frame bytes sent for this
<code>Http2Stream</code>.</li>
<li><code>id</code> {number} The identifier of the associated <code>Http2Stream</code></li>
<li><code>timeToFirstByte</code> {number} The number of milliseconds elapsed between the
<code>PerformanceEntry</code> <code>startTime</code> and the reception of the first <code>DATA</code> frame.</li>
<li><code>timeToFirstByteSent</code> {number} The number of milliseconds elapsed between
the <code>PerformanceEntry</code> <code>startTime</code> and sending of the first <code>DATA</code> frame.</li>
<li><code>timeToFirstHeader</code> {number} The number of milliseconds elapsed between the
<code>PerformanceEntry</code> <code>startTime</code> and the reception of the first header.</li>
</ul>
<p>If <code>name</code> is equal to <code>Http2Session</code>, the <code>PerformanceEntry</code> will contain the
following additional properties:</p>
<ul>
<li><code>bytesRead</code> {number} The number of bytes received for this <code>Http2Session</code>.</li>
<li><code>bytesWritten</code> {number} The number of bytes sent for this <code>Http2Session</code>.</li>
<li><code>framesReceived</code> {number} The number of HTTP/2 frames received by the
<code>Http2Session</code>.</li>
<li><code>framesSent</code> {number} The number of HTTP/2 frames sent by the <code>Http2Session</code>.</li>
<li><code>maxConcurrentStreams</code> {number} The maximum number of streams concurrently
open during the lifetime of the <code>Http2Session</code>.</li>
<li><code>pingRTT</code> {number} The number of milliseconds elapsed since the transmission
of a <code>PING</code> frame and the reception of its acknowledgment. Only present if
a <code>PING</code> frame has been sent on the <code>Http2Session</code>.</li>
<li><code>streamAverageDuration</code> {number} The average duration (in milliseconds) for
all <code>Http2Stream</code> instances.</li>
<li><code>streamCount</code> {number} The number of <code>Http2Stream</code> instances processed by
the <code>Http2Session</code>.</li>
<li><code>type</code> {string} Either <code>'server'</code> or <code>'client'</code> to identify the type of
<code>Http2Session</code>.</li>
</ul>
<h2>Note on <code>:authority</code> and <code>host</code></h2>
<p>HTTP/2 requires requests to have either the <code>:authority</code> pseudo-header
or the <code>host</code> header. Prefer <code>:authority</code> when constructing an HTTP/2
request directly, and <code>host</code> when converting from HTTP/1 (in proxies,
for instance).</p>
<p>The compatibility API falls back to <code>host</code> if <code>:authority</code> is not
present. See <a href="#requestauthority"><code>request.authority</code></a> for more information. However,
if you don't use the compatibility API (or use <code>req.headers</code> directly),
you need to implement any fall-back behavior yourself.</p>
