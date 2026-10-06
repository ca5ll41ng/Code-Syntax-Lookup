---
id: "js-en-function-node-dgram"
language: "js"
lang: "en"
category: "function"
name: "node:dgram"
title: "UDP/datagram sockets"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/dgram.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# UDP/datagram sockets

<h1>UDP/datagram sockets</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:dgram</code> module provides an implementation of UDP datagram sockets.</p>
<pre><code class="language-mjs">import dgram from 'node:dgram';

const server = dgram.createSocket('udp4');

server.on('error', (err) =&gt; {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) =&gt; {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () =&gt; {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// Prints: server listening 0.0.0.0:41234
</code></pre>
<pre><code class="language-cjs">const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) =&gt; {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) =&gt; {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () =&gt; {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// Prints: server listening 0.0.0.0:41234
</code></pre>
<h2>Class: <code>dgram.Socket</code></h2>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>Encapsulates the datagram functionality.</p>
<p>New instances of <code>dgram.Socket</code> are created using <a href="#dgramcreatesocketoptions-callback"><code>dgram.createSocket()</code></a>.
The <code>new</code> keyword is not to be used to create <code>dgram.Socket</code> instances.</p>
<h3>Event: <code>'close'</code></h3>
<p>The <code>'close'</code> event is emitted after a socket is closed with <a href="#socketclosecallback"><code>close()</code></a>.
Once triggered, no new <code>'message'</code> events will be emitted on this socket.</p>
<h3>Event: <code>'connect'</code></h3>
<p>The <code>'connect'</code> event is emitted after a socket is associated to a remote
address as a result of a successful <a href="#socketconnectport-address-callback"><code>connect()</code></a> call.</p>
<h3>Event: <code>'error'</code></h3>
<ul>
<li><code>exception</code> {Error}</li>
</ul>
<p>The <code>'error'</code> event is emitted whenever any error occurs. The event handler
function is passed a single <code>Error</code> object.</p>
<h3>Event: <code>'listening'</code></h3>
<p>The <code>'listening'</code> event is emitted once the <code>dgram.Socket</code> is addressable and
can receive data. This happens either explicitly with <code>socket.bind()</code> or
implicitly the first time data is sent using <code>socket.send()</code>.
Until the <code>dgram.Socket</code> is listening, the underlying system resources do not
exist and calls such as <code>socket.address()</code> and <code>socket.setTTL()</code> will fail.</p>
<h3>Event: <code>'message'</code></h3>
<p>The <code>'message'</code> event is emitted when a new datagram is available on a socket.
The event handler function is passed two arguments: <code>msg</code> and <code>rinfo</code>.</p>
<ul>
<li><code>msg</code> {Buffer} The message.</li>
<li><code>rinfo</code> {Object} Remote address information.
<ul>
<li><code>address</code> {string} The sender address.</li>
<li><code>family</code> {string} The address family (<code>'IPv4'</code> or <code>'IPv6'</code>).</li>
<li><code>port</code> {number} The sender port.</li>
<li><code>size</code> {number} The message size.</li>
</ul>
</li>
</ul>
<p>If the source address of the incoming packet is an IPv6 link-local
address, the interface name is added to the <code>address</code>. For
example, a packet received on the <code>en0</code> interface might have the
address field set to <code>'fe80::2618:1234:ab11:3b9c%en0'</code>, where <code>'%en0'</code>
is the interface name as a zone ID suffix.</p>
<h3><code>socket.addMembership(multicastAddress[, multicastInterface])</code></h3>
<ul>
<li><code>multicastAddress</code> {string}</li>
<li><code>multicastInterface</code> {string}</li>
</ul>
<p>Tells the kernel to join a multicast group at the given <code>multicastAddress</code> and
<code>multicastInterface</code> using the <code>IP_ADD_MEMBERSHIP</code> socket option. If the
<code>multicastInterface</code> argument is not specified, the operating system will choose
one interface and will add membership to it. To add membership to every
available interface, call <code>addMembership</code> multiple times, once per interface.</p>
<p>When called on an unbound socket, this method will implicitly bind to a random
port, listening on all interfaces.</p>
<p>When sharing a UDP socket across multiple <code>cluster</code> workers, the
<code>socket.addMembership()</code> function must be called only once or an
<code>EADDRINUSE</code> error will occur:</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';
import dgram from 'node:dgram';

if (cluster.isPrimary) {
  cluster.fork(); // Works ok.
  cluster.fork(); // Fails with EADDRINUSE.
} else {
  const s = dgram.createSocket('udp4');
  s.bind(1234, () =&gt; {
    s.addMembership('224.0.0.114');
  });
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');
const dgram = require('node:dgram');

if (cluster.isPrimary) {
  cluster.fork(); // Works ok.
  cluster.fork(); // Fails with EADDRINUSE.
} else {
  const s = dgram.createSocket('udp4');
  s.bind(1234, () =&gt; {
    s.addMembership('224.0.0.114');
  });
}
</code></pre>
<h3><code>socket.addSourceSpecificMembership(sourceAddress, groupAddress[, multicastInterface])</code></h3>
<ul>
<li><code>sourceAddress</code> {string}</li>
<li><code>groupAddress</code> {string}</li>
<li><code>multicastInterface</code> {string}</li>
</ul>
<p>Tells the kernel to join a source-specific multicast channel at the given
<code>sourceAddress</code> and <code>groupAddress</code>, using the <code>multicastInterface</code> with the
<code>IP_ADD_SOURCE_MEMBERSHIP</code> socket option. If the <code>multicastInterface</code> argument
is not specified, the operating system will choose one interface and will add
membership to it. To add membership to every available interface, call
<code>socket.addSourceSpecificMembership()</code> multiple times, once per interface.</p>
<p>When called on an unbound socket, this method will implicitly bind to a random
port, listening on all interfaces.</p>
<h3><code>socket.address()</code></h3>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns an object containing the address information for a socket.
For UDP sockets, this object will contain <code>address</code>, <code>family</code>, and <code>port</code>
properties.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h3><code>socket.bind([port][, address][, callback])</code></h3>
<ul>
<li><code>port</code> {integer}</li>
<li><code>address</code> {string}</li>
<li><code>callback</code> {Function} with no parameters. Called when binding is complete.</li>
</ul>
<p>For UDP sockets, causes the <code>dgram.Socket</code> to listen for datagram
messages on a named <code>port</code> and optional <code>address</code>. If <code>port</code> is not
specified or is <code>0</code>, the operating system will attempt to bind to a
random port. If <code>address</code> is not specified, the operating system will
attempt to listen on all addresses. Once binding is complete, a
<code>'listening'</code> event is emitted and the optional <code>callback</code> function is
called.</p>
<p>Specifying both a <code>'listening'</code> event listener and passing a
<code>callback</code> to the <code>socket.bind()</code> method is not harmful but not very
useful.</p>
<p>A bound datagram socket keeps the Node.js process running to receive
datagram messages.</p>
<p>If binding fails, an <code>'error'</code> event is generated. In rare cases (e.g.,
attempting to bind with a closed socket), an <a href="errors.md#class-error"><code>Error</code></a> may be thrown.</p>
<p>Example of a UDP server listening on port 41234:</p>
<pre><code class="language-mjs">import dgram from 'node:dgram';

const server = dgram.createSocket('udp4');

server.on('error', (err) =&gt; {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) =&gt; {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () =&gt; {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// Prints: server listening 0.0.0.0:41234
</code></pre>
<pre><code class="language-cjs">const dgram = require('node:dgram');
const server = dgram.createSocket('udp4');

server.on('error', (err) =&gt; {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) =&gt; {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () =&gt; {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// Prints: server listening 0.0.0.0:41234
</code></pre>
<h3><code>socket.bind(options[, callback])</code></h3>
<ul>
<li><code>options</code> {Object} Required. Supports the following properties:
<ul>
<li><code>port</code> {integer}</li>
<li><code>address</code> {string}</li>
<li><code>exclusive</code> {boolean}</li>
<li><code>fd</code> {integer}</li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
</ul>
<p>For UDP sockets, causes the <code>dgram.Socket</code> to listen for datagram
messages on a named <code>port</code> and optional <code>address</code> that are passed as
properties of an <code>options</code> object passed as the first argument. If
<code>port</code> is not specified or is <code>0</code>, the operating system will attempt
to bind to a random port. If <code>address</code> is not specified, the operating
system will attempt to listen on all addresses. Once binding is
complete, a <code>'listening'</code> event is emitted and the optional <code>callback</code>
function is called.</p>
<p>The <code>options</code> object may contain a <code>fd</code> property. When a <code>fd</code> greater
than <code>0</code> is set, it will wrap around an existing socket with the given
file descriptor. In this case, the properties of <code>port</code> and <code>address</code>
will be ignored.</p>
<p>Specifying both a <code>'listening'</code> event listener and passing a
<code>callback</code> to the <code>socket.bind()</code> method is not harmful but not very
useful.</p>
<p>The <code>options</code> object may contain an additional <code>exclusive</code> property that is
used when using <code>dgram.Socket</code> objects with the <a href="cluster.md"><code>cluster</code></a> module. When
<code>exclusive</code> is set to <code>false</code> (the default), cluster workers will use the same
underlying socket handle allowing connection handling duties to be shared.
When <code>exclusive</code> is <code>true</code>, however, the handle is not shared and attempted
port sharing results in an error. Creating a <code>dgram.Socket</code> with the <code>reusePort</code>
option set to <code>true</code> causes <code>exclusive</code> to always be <code>true</code> when <code>socket.bind()</code>
is called.</p>
<p>A bound datagram socket keeps the Node.js process running to receive
datagram messages.</p>
<p>If binding fails, an <code>'error'</code> event is generated. In rare cases (e.g.,
attempting to bind with a closed socket), an <a href="errors.md#class-error"><code>Error</code></a> may be thrown.</p>
<p>An example socket listening on an exclusive port is shown below.</p>
<pre><code class="language-js">socket.bind({
  address: 'localhost',
  port: 8000,
  exclusive: true,
});
</code></pre>
<h3><code>socket.bindSync([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>port</code> {integer} If omitted or <code>0</code>, the operating system will assign an
arbitrary unused port. <strong>Default:</strong> <code>0</code>.</li>
<li><code>address</code> {string} A numeric IP address to bind to. Unlike
<a href="#socketbindport-address-callback"><code>socket.bind()</code></a>, no DNS resolution is performed, so a host name is not
accepted. If omitted, the operating system binds to all addresses
(<code>'0.0.0.0'</code> for <code>udp4</code> sockets, <code>'::'</code> for <code>udp6</code>).</li>
</ul>
</li>
<li>Returns: {Object} The bound address as returned by <a href="#socketaddress"><code>socket.address()</code></a>.</li>
</ul>
<p>The synchronous counterpart of <a href="#socketbindport-address-callback"><code>socket.bind()</code></a>. <code>bind(2)</code> is a local,
non-blocking system call, so the bind is performed inline and the resolved
address is returned immediately, including the operating-system-assigned
ephemeral port when <code>port</code> is <code>0</code>:</p>
<pre><code class="language-js">const dgram = require('node:dgram');

const socket = dgram.createSocket('udp4');
const address = socket.bindSync({ address: '0.0.0.0', port: 0 });
console.log(address); // e.g. { address: '0.0.0.0', family: 'IPv4', port: 53124 }
</code></pre>
<p>A bind failure such as <code>EADDRINUSE</code> is thrown synchronously rather than emitted
as an <code>'error'</code> event. After <code>bindSync()</code> returns, <a href="#socketaddress"><code>socket.address()</code></a> is
valid synchronously and the <code>'listening'</code> event is emitted on the next tick.</p>
<p><code>address</code> must be a numeric IP literal; <code>bindSync()</code> never performs DNS
resolution (asynchronous name resolution being the only genuinely blocking part
of binding). Incoming datagrams continue to be delivered asynchronously via the
<a href="#event-message"><code>'message'</code></a> event. <code>bindSync()</code> always binds the socket's own handle and
does not participate in <a href="cluster.md"><code>cluster</code></a> handle sharing.</p>
<h3><code>socket.close([callback])</code></h3>
<ul>
<li><code>callback</code> {Function} Called when the socket has been closed.</li>
</ul>
<p>Close the underlying socket and stop listening for data on it. If a callback is
provided, it is added as a listener for the <a href="#event-close"><code>'close'</code></a> event.</p>
<h3><code>socket[Symbol.asyncDispose]()</code></h3>
<p>Calls <a href="#socketclosecallback"><code>socket.close()</code></a> and returns a promise that fulfills when the
socket has closed.</p>
<h3><code>socket.connect(port[, address][, callback])</code></h3>
<ul>
<li><code>port</code> {integer}</li>
<li><code>address</code> {string}</li>
<li><code>callback</code> {Function} Called when the connection is completed or on error.</li>
</ul>
<p>Associates the <code>dgram.Socket</code> to a remote address and port. Every
message sent by this handle is automatically sent to that destination. Also,
the socket will only receive messages from that remote peer.
Trying to call <code>connect()</code> on an already connected socket will result
in an <a href="errors.md#err_socket_dgram_is_connected"><code>ERR_SOCKET_DGRAM_IS_CONNECTED</code></a> exception. If <code>address</code> is not
provided, <code>'127.0.0.1'</code> (for <code>udp4</code> sockets) or <code>'::1'</code> (for <code>udp6</code> sockets)
will be used by default. Once the connection is complete, a <code>'connect'</code> event
is emitted and the optional <code>callback</code> function is called. In case of failure,
the <code>callback</code> is called or, failing this, an <code>'error'</code> event is emitted.</p>
<h3><code>socket.connectSync(port[, address])</code></h3>
<ul>
<li><code>port</code> {integer}</li>
<li><code>address</code> {string} A numeric IP address to connect to. Unlike
<a href="#socketconnectport-address-callback"><code>socket.connect()</code></a>, no DNS resolution is performed, so a host name is not
accepted. If omitted, <code>'127.0.0.1'</code> (for <code>udp4</code> sockets) or <code>'::1'</code> (for
<code>udp6</code> sockets) is used.</li>
</ul>
<p>The synchronous counterpart of <a href="#socketconnectport-address-callback"><code>socket.connect()</code></a>. For a UDP socket
<code>connect(2)</code> only records the default peer address and is a local, non-blocking
system call, so the association is performed inline. Any error raised by the
call itself (for example <code>EAFNOSUPPORT</code> for a mismatched address family) is
thrown synchronously rather than reported via the <code>'error'</code> event. Because
<code>connect(2)</code> does not probe reachability, errors such as <code>ECONNREFUSED</code> are
still surfaced asynchronously on a later send or receive, exactly as for
<a href="#socketconnectport-address-callback"><code>socket.connect()</code></a>:</p>
<pre><code class="language-js">const dgram = require('node:dgram');

const socket = dgram.createSocket('udp4');
socket.connectSync(41234, '127.0.0.1');
console.log(socket.remoteAddress()); // { address: '127.0.0.1', family: 'IPv4', port: 41234 }
</code></pre>
<p>If the socket is still unbound it is bound synchronously first. After
<code>connectSync()</code> returns, <a href="#socketremoteaddress"><code>socket.remoteAddress()</code></a> is valid synchronously
and the <code>'connect'</code> event is emitted on the next tick. Trying to call
<code>connectSync()</code> on an already connected socket throws an
<a href="errors.md#err_socket_dgram_is_connected"><code>ERR_SOCKET_DGRAM_IS_CONNECTED</code></a> exception, and calling it while an
asynchronous <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> is still in progress throws an
<a href="errors.md#err_socket_already_bound"><code>ERR_SOCKET_ALREADY_BOUND</code></a> exception.</p>
<p><code>address</code> must be a numeric IP literal; <code>connectSync()</code> never performs DNS
resolution (asynchronous name resolution being the only genuinely blocking part
of connecting).</p>
<h3><code>socket.disconnect()</code></h3>
<p>A synchronous function that disassociates a connected <code>dgram.Socket</code> from
its remote address. Trying to call <code>disconnect()</code> on an unbound or already
disconnected socket will result in an <a href="errors.md#err_socket_dgram_not_connected"><code>ERR_SOCKET_DGRAM_NOT_CONNECTED</code></a>
exception.</p>
<h3><code>socket.dropMembership(multicastAddress[, multicastInterface])</code></h3>
<ul>
<li><code>multicastAddress</code> {string}</li>
<li><code>multicastInterface</code> {string}</li>
</ul>
<p>Instructs the kernel to leave a multicast group at <code>multicastAddress</code> using the
<code>IP_DROP_MEMBERSHIP</code> socket option. This method is automatically called by the
kernel when the socket is closed or the process terminates, so most apps will
never have reason to call this.</p>
<p>If <code>multicastInterface</code> is not specified, the operating system will attempt to
drop membership on all valid interfaces.</p>
<h3><code>socket.dropSourceSpecificMembership(sourceAddress, groupAddress[, multicastInterface])</code></h3>
<ul>
<li><code>sourceAddress</code> {string}</li>
<li><code>groupAddress</code> {string}</li>
<li><code>multicastInterface</code> {string}</li>
</ul>
<p>Instructs the kernel to leave a source-specific multicast channel at the given
<code>sourceAddress</code> and <code>groupAddress</code> using the <code>IP_DROP_SOURCE_MEMBERSHIP</code>
socket option. This method is automatically called by the kernel when the
socket is closed or the process terminates, so most apps will never have
reason to call this.</p>
<p>If <code>multicastInterface</code> is not specified, the operating system will attempt to
drop membership on all valid interfaces.</p>
<h3><code>socket.getRecvBufferSize()</code></h3>
<ul>
<li>Returns: {number} the <code>SO_RCVBUF</code> socket receive buffer size in bytes.</li>
</ul>
<p>This method throws <a href="errors.md#err_socket_buffer_size"><code>ERR_SOCKET_BUFFER_SIZE</code></a> if called on an unbound socket.</p>
<h3><code>socket.getSendBufferSize()</code></h3>
<ul>
<li>Returns: {number} the <code>SO_SNDBUF</code> socket send buffer size in bytes.</li>
</ul>
<p>This method throws <a href="errors.md#err_socket_buffer_size"><code>ERR_SOCKET_BUFFER_SIZE</code></a> if called on an unbound socket.</p>
<h3><code>socket.getSendQueueSize()</code></h3>
<ul>
<li>Returns: {number} Number of bytes queued for sending.</li>
</ul>
<h3><code>socket.getSendQueueCount()</code></h3>
<ul>
<li>Returns: {number} Number of send requests currently in the queue awaiting
to be processed.</li>
</ul>
<h3><code>socket.ref()</code></h3>
<ul>
<li>Returns: {dgram.Socket}</li>
</ul>
<p>By default, binding a socket will cause it to block the Node.js process from
exiting as long as the socket is open. The <code>socket.unref()</code> method can be used
to exclude the socket from the reference counting that keeps the Node.js
process active. The <code>socket.ref()</code> method adds the socket back to the reference
counting and restores the default behavior.</p>
<p>Calling <code>socket.ref()</code> multiple times will have no additional effect.</p>
<p>The <code>socket.ref()</code> method returns a reference to the socket so calls can be
chained.</p>
<h3><code>socket.remoteAddress()</code></h3>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns an object containing the <code>address</code>, <code>family</code>, and <code>port</code> of the remote
endpoint. This method throws an <a href="errors.md#err_socket_dgram_not_connected"><code>ERR_SOCKET_DGRAM_NOT_CONNECTED</code></a> exception
if the socket is not connected.</p>
<h3><code>socket.send(msg[, offset, length][, port][, address][, callback])</code></h3>
<ul>
<li><code>msg</code> {Buffer|TypedArray|DataView|string|Array} Message to be sent.</li>
<li><code>offset</code> {integer} Offset in the buffer where the message starts.</li>
<li><code>length</code> {integer} Number of bytes in the message.</li>
<li><code>port</code> {integer} Destination port.</li>
<li><code>address</code> {string} Destination host name or IP address.</li>
<li><code>callback</code> {Function} Called when the message has been sent.</li>
</ul>
<p>Broadcasts a datagram on the socket.
For connectionless sockets, the destination <code>port</code> and <code>address</code> must be
specified. Connected sockets, on the other hand, will use their associated
remote endpoint, so the <code>port</code> and <code>address</code> arguments must not be set.</p>
<p>The <code>msg</code> argument contains the message to be sent.
Depending on its type, different behavior can apply. If <code>msg</code> is a <code>Buffer</code>,
any <code>TypedArray</code> or a <code>DataView</code>,
the <code>offset</code> and <code>length</code> specify the offset within the <code>Buffer</code> where the
message begins and the number of bytes in the message, respectively.
If <code>msg</code> is a <code>String</code>, then it is automatically converted to a <code>Buffer</code>
with <code>'utf8'</code> encoding. With messages that
contain multi-byte characters, <code>offset</code> and <code>length</code> will be calculated with
respect to <a href="buffer.md#static-method-bufferbytelengthstring-encoding">byte length</a> and not the character position.
If <code>msg</code> is an array, <code>offset</code> and <code>length</code> must not be specified.</p>
<p>The <code>address</code> argument is a string. If the value of <code>address</code> is a host name,
DNS will be used to resolve the address of the host. If <code>address</code> is not
provided or otherwise nullish, <code>'127.0.0.1'</code> (for <code>udp4</code> sockets) or <code>'::1'</code>
(for <code>udp6</code> sockets) will be used by default.</p>
<p>If the socket has not been previously bound with a call to <code>bind</code>, the socket
is assigned a random port number and is bound to the &quot;all interfaces&quot; address
(<code>'0.0.0.0'</code> for <code>udp4</code> sockets, <code>'::0'</code> for <code>udp6</code> sockets.)</p>
<p>An optional <code>callback</code> function may be specified to as a way of reporting
DNS errors or for determining when it is safe to reuse the <code>buf</code> object.
DNS lookups delay the time to send for at least one tick of the
Node.js event loop.</p>
<p>The only way to know for sure that the datagram has been sent is by using a
<code>callback</code>. If an error occurs and a <code>callback</code> is given, the error will be
passed as the first argument to the <code>callback</code>. If a <code>callback</code> is not given,
the error is emitted as an <code>'error'</code> event on the <code>socket</code> object.</p>
<p>Offset and length are optional but both <em>must</em> be set if either are used.
They are supported only when the first argument is a <code>Buffer</code>, a <code>TypedArray</code>,
or a <code>DataView</code>.</p>
<p>This method throws <a href="errors.md#err_socket_bad_port"><code>ERR_SOCKET_BAD_PORT</code></a> if called on an unbound socket.</p>
<p>Example of sending a UDP packet to a port on <code>localhost</code>;</p>
<pre><code class="language-mjs">import dgram from 'node:dgram';
import { Buffer } from 'node:buffer';

const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) =&gt; {
  client.close();
});
</code></pre>
<pre><code class="language-cjs">const dgram = require('node:dgram');
const { Buffer } = require('node:buffer');

const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.send(message, 41234, 'localhost', (err) =&gt; {
  client.close();
});
</code></pre>
<p>Example of sending a UDP packet composed of multiple buffers to a port on
<code>127.0.0.1</code>;</p>
<pre><code class="language-mjs">import dgram from 'node:dgram';
import { Buffer } from 'node:buffer';

const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
const client = dgram.createSocket('udp4');
client.send([buf1, buf2], 41234, (err) =&gt; {
  client.close();
});
</code></pre>
<pre><code class="language-cjs">const dgram = require('node:dgram');
const { Buffer } = require('node:buffer');

const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
const client = dgram.createSocket('udp4');
client.send([buf1, buf2], 41234, (err) =&gt; {
  client.close();
});
</code></pre>
<p>Sending multiple buffers might be faster or slower, depending on the
application and operating system. Run benchmarks to
determine the optimal strategy on a case-by-case basis. Generally speaking,
however, sending multiple buffers is faster.</p>
<p>Example of sending a UDP packet using a socket connected to a port on
<code>localhost</code>:</p>
<pre><code class="language-mjs">import dgram from 'node:dgram';
import { Buffer } from 'node:buffer';

const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.connect(41234, 'localhost', (err) =&gt; {
  client.send(message, (err) =&gt; {
    client.close();
  });
});
</code></pre>
<pre><code class="language-cjs">const dgram = require('node:dgram');
const { Buffer } = require('node:buffer');

const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.connect(41234, 'localhost', (err) =&gt; {
  client.send(message, (err) =&gt; {
    client.close();
  });
});
</code></pre>
<h4>Note about UDP datagram size</h4>
<p>The maximum size of an IPv4/v6 datagram depends on the <code>MTU</code>
(Maximum Transmission Unit) and on the <code>Payload Length</code> field size.</p>
<ul>
<li>
<p>The <code>Payload Length</code> field is 16 bits wide, which means that a normal
payload cannot exceed 64K octets including the internet header and data
(65,507 bytes = 65,535 − 8 bytes UDP header − 20 bytes IP header);
this is generally true for loopback interfaces, but such long datagram
messages are impractical for most hosts and networks.</p>
</li>
<li>
<p>The <code>MTU</code> is the largest size a given link layer technology can support for
datagram messages. For any link, IPv4 mandates a minimum <code>MTU</code> of 68
octets, while the recommended <code>MTU</code> for IPv4 is 576 (typically recommended
as the <code>MTU</code> for dial-up type applications), whether they arrive whole or in
fragments.</p>
<p>For IPv6, the minimum <code>MTU</code> is 1280 octets. However, the mandatory minimum
fragment reassembly buffer size is 1500 octets. The value of 68 octets is
very small, since most current link layer technologies, like Ethernet, have a
minimum <code>MTU</code> of 1500.</p>
</li>
</ul>
<p>It is impossible to know in advance the MTU of each link through which
a packet might travel. Sending a datagram greater than the receiver <code>MTU</code> will
not work because the packet will get silently dropped without informing the
source that the data did not reach its intended recipient.</p>
<h3><code>socket.setBroadcast(flag)</code></h3>
<ul>
<li><code>flag</code> {boolean}</li>
</ul>
<p>Sets or clears the <code>SO_BROADCAST</code> socket option. When set to <code>true</code>, UDP
packets may be sent to a local interface's broadcast address.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h3><code>socket.setMulticastInterface(multicastInterface)</code></h3>
<ul>
<li><code>multicastInterface</code> {string}</li>
</ul>
<p><em>All references to scope in this section are referring to
<a href="https://en.wikipedia.org/wiki/IPv6_address#Scoped_literal_IPv6_addresses">IPv6 Zone Indexes</a>, which are defined by <a href="https://tools.ietf.org/html/rfc4007">RFC 4007</a>. In string form, an IP
with a scope index is written as <code>'IP%scope'</code> where scope is an interface name
or interface number.</em></p>
<p>Sets the default outgoing multicast interface of the socket to a chosen
interface or back to system interface selection. The <code>multicastInterface</code> must
be a valid string representation of an IP from the socket's family.</p>
<p>For IPv4 sockets, this should be the IP configured for the desired physical
interface. All packets sent to multicast on the socket will be sent on the
interface determined by the most recent successful use of this call.</p>
<p>For IPv6 sockets, <code>multicastInterface</code> should include a scope to indicate the
interface as in the examples that follow. In IPv6, individual <code>send</code> calls can
also use explicit scope in addresses, so only packets sent to a multicast
address without specifying an explicit scope are affected by the most recent
successful use of this call.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h4>Example: IPv6 outgoing multicast interface</h4>
<p>On most systems, where scope format uses the interface name:</p>
<pre><code class="language-js">const socket = dgram.createSocket('udp6');

socket.bind(1234, () =&gt; {
  socket.setMulticastInterface('::%eth1');
});
</code></pre>
<p>On Windows, where scope format uses an interface number:</p>
<pre><code class="language-js">const socket = dgram.createSocket('udp6');

socket.bind(1234, () =&gt; {
  socket.setMulticastInterface('::%2');
});
</code></pre>
<h4>Example: IPv4 outgoing multicast interface</h4>
<p>All systems use an IP of the host on the desired physical interface:</p>
<pre><code class="language-js">const socket = dgram.createSocket('udp4');

socket.bind(1234, () =&gt; {
  socket.setMulticastInterface('10.0.0.2');
});
</code></pre>
<h4>Call results</h4>
<p>A call on a socket that is not ready to send or no longer open may throw a <em>Not
running</em> <a href="errors.md#class-error"><code>Error</code></a>.</p>
<p>If <code>multicastInterface</code> cannot be parsed into an IP then an <em>EINVAL</em>
<a href="errors.md#class-systemerror"><code>System Error</code></a> is thrown.</p>
<p>On IPv4, if <code>multicastInterface</code> is a valid address but does not match any
interface, or if the address does not match the family then
a <a href="errors.md#class-systemerror"><code>System Error</code></a> such as <code>EADDRNOTAVAIL</code> or <code>EPROTONOSUP</code> is thrown.</p>
<p>On IPv6, most errors with specifying or omitting scope will result in the socket
continuing to use (or returning to) the system's default interface selection.</p>
<p>A socket's address family's ANY address (IPv4 <code>'0.0.0.0'</code> or IPv6 <code>'::'</code>) can be
used to return control of the sockets default outgoing interface to the system
for future multicast packets.</p>
<h3><code>socket.setMulticastLoopback(flag)</code></h3>
<ul>
<li><code>flag</code> {boolean}</li>
</ul>
<p>Sets or clears the <code>IP_MULTICAST_LOOP</code> socket option. When set to <code>true</code>,
multicast packets will also be received on the local interface.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h3><code>socket.setMulticastTTL(ttl)</code></h3>
<ul>
<li><code>ttl</code> {integer}</li>
</ul>
<p>Sets the <code>IP_MULTICAST_TTL</code> socket option. While TTL generally stands for
&quot;Time to Live&quot;, in this context it specifies the number of IP hops that a
packet is allowed to travel through, specifically for multicast traffic. Each
router or gateway that forwards a packet decrements the TTL. If the TTL is
decremented to 0 by a router, it will not be forwarded.</p>
<p>The <code>ttl</code> argument may be between 0 and 255. The default on most systems is <code>1</code>.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h3><code>socket.setRecvBufferSize(size)</code></h3>
<ul>
<li><code>size</code> {integer}</li>
</ul>
<p>Sets the <code>SO_RCVBUF</code> socket option. Sets the maximum socket receive buffer
in bytes.</p>
<p>This method throws <a href="errors.md#err_socket_buffer_size"><code>ERR_SOCKET_BUFFER_SIZE</code></a> if called on an unbound socket.</p>
<h3><code>socket.setSendBufferSize(size)</code></h3>
<ul>
<li><code>size</code> {integer}</li>
</ul>
<p>Sets the <code>SO_SNDBUF</code> socket option. Sets the maximum socket send buffer
in bytes.</p>
<p>This method throws <a href="errors.md#err_socket_buffer_size"><code>ERR_SOCKET_BUFFER_SIZE</code></a> if called on an unbound socket.</p>
<h3><code>socket.setTTL(ttl)</code></h3>
<ul>
<li><code>ttl</code> {integer}</li>
</ul>
<p>Sets the <code>IP_TTL</code> socket option. While TTL generally stands for &quot;Time to Live&quot;,
in this context it specifies the number of IP hops that a packet is allowed to
travel through. Each router or gateway that forwards a packet decrements the
TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.
Changing TTL values is typically done for network probes or when multicasting.</p>
<p>The <code>ttl</code> argument may be between 1 and 255. The default on most systems
is 64.</p>
<p>This method throws <code>EBADF</code> if called on an unbound socket.</p>
<h3><code>socket.unref()</code></h3>
<ul>
<li>Returns: {dgram.Socket}</li>
</ul>
<p>By default, binding a socket will cause it to block the Node.js process from
exiting as long as the socket is open. The <code>socket.unref()</code> method can be used
to exclude the socket from the reference counting that keeps the Node.js
process active, allowing the process to exit even if the socket is still
listening.</p>
<p>Calling <code>socket.unref()</code> multiple times will have no additional effect.</p>
<p>The <code>socket.unref()</code> method returns a reference to the socket so calls can be
chained.</p>
<h2><code>node:dgram</code> module functions</h2>
<h3><code>dgram.createSocket(options[, callback])</code></h3>
<ul>
<li><code>options</code> {Object} Available options are:
<ul>
<li><code>type</code> {string} The family of socket. Must be either <code>'udp4'</code> or <code>'udp6'</code>.
Required.</li>
<li><code>reuseAddr</code> {boolean} When <code>true</code> <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> will reuse the
address, even if another process has already bound a socket on it, but
only one socket can receive the data.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>reusePort</code> {boolean} When <code>true</code> <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> will reuse the
port, even if another process has already bound a socket on it. Incoming
datagrams are distributed to listening sockets. The option is available
only on some platforms, such as Linux 3.9+, DragonFlyBSD 3.6+, FreeBSD 12.0+,
Solaris 11.4, and AIX 7.2.5+. On unsupported platforms, this option raises
an error when the socket is bound.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>ipv6Only</code> {boolean} Setting <code>ipv6Only</code> to <code>true</code> will
disable dual-stack support, i.e., binding to address <code>::</code> won't make
<code>0.0.0.0</code> be bound. <strong>Default:</strong> <code>false</code>.</li>
<li><code>recvBufferSize</code> {number} Sets the <code>SO_RCVBUF</code> socket value.</li>
<li><code>sendBufferSize</code> {number} Sets the <code>SO_SNDBUF</code> socket value.</li>
<li><code>lookup</code> {Function} Custom lookup function. <strong>Default:</strong> <a href="dns.md#dnslookuphostname-options-callback"><code>dns.lookup()</code></a>.
A literal IP address of the socket's family resolves to itself; the lookup
function is not called for it.</li>
<li><code>signal</code> {AbortSignal} An AbortSignal that may be used to close a socket.</li>
<li><code>receiveBlockList</code> {net.BlockList} <code>receiveBlockList</code> can be used for discarding
inbound datagram to specific IP addresses, IP ranges, or IP subnets. This does not
work if the server is behind a reverse proxy, NAT, etc. because the address
checked against the blocklist is the address of the proxy, or the one
specified by the NAT.</li>
<li><code>sendBlockList</code> {net.BlockList} <code>sendBlockList</code> can be used for disabling outbound
access to specific IP addresses, IP ranges, or IP subnets.</li>
</ul>
</li>
<li><code>callback</code> {Function} Attached as a listener for <code>'message'</code> events. Optional.</li>
<li>Returns: {dgram.Socket}</li>
</ul>
<p>Creates a <code>dgram.Socket</code> object. Once the socket is created, calling
<a href="#socketbindport-address-callback"><code>socket.bind()</code></a> will instruct the socket to begin listening for datagram
messages. When <code>address</code> and <code>port</code> are not passed to <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> the
method will bind the socket to the &quot;all interfaces&quot; address on a random port
(it does the right thing for both <code>udp4</code> and <code>udp6</code> sockets). The bound address
and port can be retrieved using <a href="#socketaddress"><code>socket.address().address</code></a> and
<a href="#socketaddress"><code>socket.address().port</code></a>.</p>
<p>If the <code>signal</code> option is enabled, calling <code>.abort()</code> on the corresponding
<code>AbortController</code> is similar to calling <code>.close()</code> on the socket:</p>
<pre><code class="language-js">const controller = new AbortController();
const { signal } = controller;
const server = dgram.createSocket({ type: 'udp4', signal });
server.on('message', (msg, rinfo) =&gt; {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
// Later, when you want to close the server.
controller.abort();
</code></pre>
<h3><code>dgram.createSocket(type[, callback])</code></h3>
<ul>
<li><code>type</code> {string} Either <code>'udp4'</code> or <code>'udp6'</code>.</li>
<li><code>callback</code> {Function} Attached as a listener to <code>'message'</code> events.</li>
<li>Returns: {dgram.Socket}</li>
</ul>
<p>Creates a <code>dgram.Socket</code> object of the specified <code>type</code>.</p>
<p>Once the socket is created, calling <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> will instruct the
socket to begin listening for datagram messages. When <code>address</code> and <code>port</code> are
not passed to <a href="#socketbindport-address-callback"><code>socket.bind()</code></a> the method will bind the socket to the &quot;all
interfaces&quot; address on a random port (it does the right thing for both <code>udp4</code>
and <code>udp6</code> sockets). The bound address and port can be retrieved using
<a href="#socketaddress"><code>socket.address().address</code></a> and <a href="#socketaddress"><code>socket.address().port</code></a>.</p>
