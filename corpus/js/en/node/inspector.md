---
id: "js-en-function-node-inspector"
language: "js"
lang: "en"
category: "function"
name: "node:inspector"
title: "Inspector"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/inspector.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-94"],"note":"调试端口暴露等同于 RCE"}]
---

# Inspector

<h1>Inspector</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:inspector</code> module provides an API for interacting with the V8
inspector.</p>
<p>It can be accessed using:</p>
<pre><code class="language-mjs">import * as inspector from 'node:inspector/promises';
</code></pre>
<pre><code class="language-cjs">const inspector = require('node:inspector/promises');
</code></pre>
<p>or</p>
<pre><code class="language-mjs">import * as inspector from 'node:inspector';
</code></pre>
<pre><code class="language-cjs">const inspector = require('node:inspector');
</code></pre>
<h2>Promises API</h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h3>Class: <code>inspector.Session</code></h3>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>The <code>inspector.Session</code> is used for dispatching messages to the V8 inspector
back-end and receiving message responses and notifications.</p>
<h4><code>new inspector.Session()</code></h4>
<p>Create a new instance of the <code>inspector.Session</code> class. The inspector session
needs to be connected through <a href="#sessionconnect"><code>session.connect()</code></a> before the messages
can be dispatched to the inspector backend.</p>
<p>When using <code>Session</code>, the object outputted by the console API will not be
released, unless we performed manually <code>Runtime.DiscardConsoleEntries</code>
command.</p>
<h4>Event: <code>'inspectorNotification'</code></h4>
<ul>
<li>Type: {Object} The notification message object</li>
</ul>
<p>Emitted when any notification from the V8 Inspector is received.</p>
<pre><code class="language-js">session.on('inspectorNotification', (message) =&gt; console.log(message.method));
// Debugger.paused
// Debugger.resumed
</code></pre>
<blockquote>
<p><strong>Caveat</strong> Breakpoints with same-thread session is not recommended, see
<a href="#support-of-breakpoints">support of breakpoints</a>.</p>
</blockquote>
<p>It is also possible to subscribe only to notifications with specific method:</p>
<h4>Event: <code>&lt;inspector-protocol-method&gt;</code></h4>
<ul>
<li>Type: {Object} The notification message object</li>
</ul>
<p>Emitted when an inspector notification is received that has its method field set
to the <code>&lt;inspector-protocol-method&gt;</code> value.</p>
<p>The following snippet installs a listener on the <a href="https://chromedevtools.github.io/devtools-protocol/v8/Debugger#event-paused"><code>'Debugger.paused'</code></a>
event, and prints the reason for program suspension whenever program
execution is suspended (through breakpoints, for example):</p>
<pre><code class="language-js">session.on('Debugger.paused', ({ params }) =&gt; {
  console.log(params.hitBreakpoints);
});
// [ '/the/file/that/has/the/breakpoint.js:11:0' ]
</code></pre>
<blockquote>
<p><strong>Caveat</strong> Breakpoints with same-thread session is not recommended, see
<a href="#support-of-breakpoints">support of breakpoints</a>.</p>
</blockquote>
<h4><code>session.connect()</code></h4>
<p>Connects a session to the inspector back-end.</p>
<h4><code>session.connectToMainThread()</code></h4>
<p>Connects a session to the main thread inspector back-end. An exception will
be thrown if this API was not called on a Worker thread, or if
<a href="cli.md#--process-timeoutduration"><code>--process-timeout</code></a> is used, as the session could pause the main thread.</p>
<h4><code>session.disconnect()</code></h4>
<p>Immediately close the session. All pending message callbacks will be called
with an error. <a href="#sessionconnect"><code>session.connect()</code></a> will need to be called to be able to send
messages again. Reconnected session will lose all inspector state, such as
enabled agents or configured breakpoints.</p>
<h4><code>session.post(method[, params])</code></h4>
<ul>
<li><code>method</code> {string}</li>
<li><code>params</code> {Object}</li>
<li>Returns: {Promise}</li>
</ul>
<p>Posts a message to the inspector back-end.</p>
<pre><code class="language-mjs">import { Session } from 'node:inspector/promises';
try {
  const session = new Session();
  session.connect();
  const result = await session.post('Runtime.evaluate', { expression: '2 + 2' });
  console.log(result);
} catch (error) {
  console.error(error);
}
// Output: { result: { type: 'number', value: 4, description: '4' } }
</code></pre>
<p>The latest version of the V8 inspector protocol is published on the
<a href="https://chromedevtools.github.io/devtools-protocol/v8/">Chrome DevTools Protocol Viewer</a>.</p>
<p>Node.js inspector supports all the Chrome DevTools Protocol domains declared
by V8. Chrome DevTools Protocol domain provides an interface for interacting
with one of the runtime agents used to inspect the application state and listen
to the run-time events.</p>
<h4>Example usage</h4>
<p>Apart from the debugger, various V8 Profilers are available through the DevTools
protocol.</p>
<h5>CPU profiler</h5>
<p>Here's an example showing how to use the <a href="https://chromedevtools.github.io/devtools-protocol/v8/Profiler">CPU Profiler</a>:</p>
<pre><code class="language-mjs">import { Session } from 'node:inspector/promises';
import fs from 'node:fs';
const session = new Session();
session.connect();

await session.post('Profiler.enable');
await session.post('Profiler.start');
// Invoke business logic under measurement here...

// some time later...
const { profile } = await session.post('Profiler.stop');

// Write profile to disk, upload, etc.
fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
</code></pre>
<h5>Heap profiler</h5>
<p>Here's an example showing how to use the <a href="https://chromedevtools.github.io/devtools-protocol/v8/HeapProfiler">Heap Profiler</a>:</p>
<pre><code class="language-mjs">import { Session } from 'node:inspector/promises';
import fs from 'node:fs';
const session = new Session();

const fd = fs.openSync('profile.heapsnapshot', 'w');

session.connect();

session.on('HeapProfiler.addHeapSnapshotChunk', (m) =&gt; {
  fs.writeSync(fd, m.params.chunk);
});

const result = await session.post('HeapProfiler.takeHeapSnapshot', null);
console.log('HeapProfiler.takeHeapSnapshot done:', result);
session.disconnect();
fs.closeSync(fd);
</code></pre>
<h2>Callback API</h2>
<h3>Class: <code>inspector.Session</code></h3>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>The <code>inspector.Session</code> is used for dispatching messages to the V8 inspector
back-end and receiving message responses and notifications.</p>
<h4><code>new inspector.Session()</code></h4>
<p>Create a new instance of the <code>inspector.Session</code> class. The inspector session
needs to be connected through <a href="#sessionconnect"><code>session.connect()</code></a> before the messages
can be dispatched to the inspector backend.</p>
<p>When using <code>Session</code>, the object outputted by the console API will not be
released, unless we performed manually <code>Runtime.DiscardConsoleEntries</code>
command.</p>
<h4>Event: <code>'inspectorNotification'</code></h4>
<ul>
<li>Type: {Object} The notification message object</li>
</ul>
<p>Emitted when any notification from the V8 Inspector is received.</p>
<pre><code class="language-js">session.on('inspectorNotification', (message) =&gt; console.log(message.method));
// Debugger.paused
// Debugger.resumed
</code></pre>
<blockquote>
<p><strong>Caveat</strong> Breakpoints with same-thread session is not recommended, see
<a href="#support-of-breakpoints">support of breakpoints</a>.</p>
</blockquote>
<p>It is also possible to subscribe only to notifications with specific method:</p>
<h4>Event: <code>&lt;inspector-protocol-method&gt;</code>;</h4>
<ul>
<li>Type: {Object} The notification message object</li>
</ul>
<p>Emitted when an inspector notification is received that has its method field set
to the <code>&lt;inspector-protocol-method&gt;</code> value.</p>
<p>The following snippet installs a listener on the <a href="https://chromedevtools.github.io/devtools-protocol/v8/Debugger#event-paused"><code>'Debugger.paused'</code></a>
event, and prints the reason for program suspension whenever program
execution is suspended (through breakpoints, for example):</p>
<pre><code class="language-js">session.on('Debugger.paused', ({ params }) =&gt; {
  console.log(params.hitBreakpoints);
});
// [ '/the/file/that/has/the/breakpoint.js:11:0' ]
</code></pre>
<blockquote>
<p><strong>Caveat</strong> Breakpoints with same-thread session is not recommended, see
<a href="#support-of-breakpoints">support of breakpoints</a>.</p>
</blockquote>
<h4><code>session.connect()</code></h4>
<p>Connects a session to the inspector back-end.</p>
<h4><code>session.connectToMainThread()</code></h4>
<p>Connects a session to the main thread inspector back-end. An exception will
be thrown if this API was not called on a Worker thread, or if
<a href="cli.md#--process-timeoutduration"><code>--process-timeout</code></a> is used, as the session could pause the main thread.</p>
<h4><code>session.disconnect()</code></h4>
<p>Immediately close the session. All pending message callbacks will be called
with an error. <a href="#sessionconnect"><code>session.connect()</code></a> will need to be called to be able to send
messages again. Reconnected session will lose all inspector state, such as
enabled agents or configured breakpoints.</p>
<h4><code>session.post(method[, params][, callback])</code></h4>
<ul>
<li><code>method</code> {string}</li>
<li><code>params</code> {Object}</li>
<li><code>callback</code> {Function}</li>
</ul>
<p>Posts a message to the inspector back-end. <code>callback</code> will be notified when
a response is received. <code>callback</code> is a function that accepts two optional
arguments: error and message-specific result.</p>
<pre><code class="language-js">session.post('Runtime.evaluate', { expression: '2 + 2' },
             (error, { result }) =&gt; console.log(result));
// Output: { type: 'number', value: 4, description: '4' }
</code></pre>
<p>The latest version of the V8 inspector protocol is published on the
<a href="https://chromedevtools.github.io/devtools-protocol/v8/">Chrome DevTools Protocol Viewer</a>.</p>
<p>Node.js inspector supports all the Chrome DevTools Protocol domains declared
by V8. Chrome DevTools Protocol domain provides an interface for interacting
with one of the runtime agents used to inspect the application state and listen
to the run-time events.</p>
<p>You can not set <code>reportProgress</code> to <code>true</code> when sending a
<code>HeapProfiler.takeHeapSnapshot</code> or <code>HeapProfiler.stopTrackingHeapObjects</code>
command to V8.</p>
<h4>Example usage</h4>
<p>Apart from the debugger, various V8 Profilers are available through the DevTools
protocol.</p>
<h5>CPU profiler</h5>
<p>Here's an example showing how to use the <a href="https://chromedevtools.github.io/devtools-protocol/v8/Profiler">CPU Profiler</a>:</p>
<pre><code class="language-js">const inspector = require('node:inspector');
const fs = require('node:fs');
const session = new inspector.Session();
session.connect();

session.post('Profiler.enable', () =&gt; {
  session.post('Profiler.start', () =&gt; {
    // Invoke business logic under measurement here...

    // some time later...
    session.post('Profiler.stop', (err, { profile }) =&gt; {
      // Write profile to disk, upload, etc.
      if (!err) {
        fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
      }
    });
  });
});
</code></pre>
<h5>Heap profiler</h5>
<p>Here's an example showing how to use the <a href="https://chromedevtools.github.io/devtools-protocol/v8/HeapProfiler">Heap Profiler</a>:</p>
<pre><code class="language-js">const inspector = require('node:inspector');
const fs = require('node:fs');
const session = new inspector.Session();

const fd = fs.openSync('profile.heapsnapshot', 'w');

session.connect();

session.on('HeapProfiler.addHeapSnapshotChunk', (m) =&gt; {
  fs.writeSync(fd, m.params.chunk);
});

session.post('HeapProfiler.takeHeapSnapshot', null, (err, r) =&gt; {
  console.log('HeapProfiler.takeHeapSnapshot done:', err, r);
  session.disconnect();
  fs.closeSync(fd);
});
</code></pre>
<h2>Common Objects</h2>
<h3><code>inspector.close()</code></h3>
<p>Deactivates the inspector. If there are active connections, they are forcibly
terminated. Blocks until the inspector server has fully stopped.</p>
<h3><code>inspector.console</code></h3>
<ul>
<li>Type: {Object} An object to send messages to the remote inspector console.</li>
</ul>
<pre><code class="language-js">require('node:inspector').console.log('a message');
</code></pre>
<p>The inspector console does not have API parity with Node.js
console.</p>
<h3><code>inspector.open([port[, host[, wait]]])</code></h3>
<ul>
<li><code>port</code> {number} Port to listen on for inspector connections. Optional.
<strong>Default:</strong> what was specified on the CLI.</li>
<li><code>host</code> {string} Host to listen on for inspector connections. Optional.
<strong>Default:</strong> what was specified on the CLI.</li>
<li><code>wait</code> {boolean} Block until a client has connected. Optional.
<strong>Default:</strong> <code>false</code>.</li>
<li>Returns: {Disposable} A Disposable that calls <a href="#inspectorclose"><code>inspector.close()</code></a>.</li>
</ul>
<p>Activate inspector on host and port. Equivalent to
<code>node --inspect=[[host:]port]</code>, but can be done programmatically after node has
started.</p>
<p>If wait is <code>true</code>, will block until a client has connected to the inspect port
and flow control has been passed to the debugger client.</p>
<p>See the <a href="cli.md#warning-binding-inspector-to-a-public-ipport-combination-is-insecure">security warning</a> regarding the <code>host</code>
parameter usage.</p>
<p>Throws an <a href="errors.md#err_inspector_not_available"><code>ERR_INSPECTOR_NOT_AVAILABLE</code></a> error if <a href="cli.md#--process-timeoutduration"><code>--process-timeout</code></a> is
used.</p>
<h3><code>inspector.url()</code></h3>
<ul>
<li>Returns: {string|undefined}</li>
</ul>
<p>Return the URL of the active inspector, or <code>undefined</code> if there is none.</p>
<pre><code class="language-console">$ node --inspect -p 'inspector.url()'
Debugger listening on ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34
For help, see: https://nodejs.org/learn/getting-started/debugging
ws://127.0.0.1:9229/166e272e-7a30-4d09-97ce-f1c012b43c34

$ node --inspect=localhost:3000 -p 'inspector.url()'
Debugger listening on ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a
For help, see: https://nodejs.org/learn/getting-started/debugging
ws://localhost:3000/51cf8d0e-3c36-4c59-8efd-54519839e56a

$ node -p 'inspector.url()'
undefined
</code></pre>
<h3><code>inspector.waitForDebugger()</code></h3>
<p>Blocks until a client (existing or connected later) has sent
<code>Runtime.runIfWaitingForDebugger</code> command.</p>
<p>An exception will be thrown if there is no active inspector.</p>
<h2>Integration with DevTools</h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>The <code>node:inspector</code> module provides an API for integrating with devtools that support Chrome DevTools Protocol.
DevTools frontends connected to a running Node.js instance can capture protocol events emitted from the instance
and display them accordingly to facilitate debugging.
The following methods broadcast a protocol event to all connected frontends.
The <code>params</code> passed to the methods can be optional, depending on the protocol.</p>
<pre><code class="language-js">// The `Network.requestWillBeSent` event will be fired.
inspector.Network.requestWillBeSent({
  requestId: 'request-id-1',
  timestamp: Date.now() / 1000,
  wallTime: Date.now(),
  request: {
    url: 'https://nodejs.org/en',
    method: 'GET',
  },
});
</code></pre>
<h3><code>inspector.Network.dataReceived([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.dataReceived</code> event to connected frontends, or buffers the data if
<code>Network.streamResourceContent</code> command was not invoked for the given request yet.</p>
<p>Also enables <code>Network.getResponseBody</code> command to retrieve the response data.</p>
<h3><code>inspector.Network.dataSent([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Enables <code>Network.getRequestPostData</code> command to retrieve the request data.</p>
<h3><code>inspector.Network.requestWillBeSent([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.requestWillBeSent</code> event to connected frontends. This event indicates that
the application is about to send an HTTP request.</p>
<h3><code>inspector.Network.responseReceived([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.responseReceived</code> event to connected frontends. This event indicates that
HTTP response is available.</p>
<h3><code>inspector.Network.loadingFinished([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.loadingFinished</code> event to connected frontends. This event indicates that
HTTP request has finished loading.</p>
<h3><code>inspector.Network.loadingFailed([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.loadingFailed</code> event to connected frontends. This event indicates that
HTTP request has failed to load.</p>
<h3><code>inspector.Network.webSocketCreated([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.webSocketCreated</code> event to connected frontends. This event indicates that
a WebSocket connection has been initiated.</p>
<h3><code>inspector.Network.webSocketHandshakeResponseReceived([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.webSocketHandshakeResponseReceived</code> event to connected frontends.
This event indicates that the WebSocket handshake response has been received.</p>
<h3><code>inspector.Network.webSocketClosed([params])</code></h3>
<ul>
<li><code>params</code> {Object}</li>
</ul>
<p>This feature is only available with the <code>--experimental-network-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>Network.webSocketClosed</code> event to connected frontends.
This event indicates that a WebSocket connection has been closed.</p>
<h3><code>inspector.NetworkResources.put</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>This feature is only available with the <code>--experimental-inspector-network-resource</code> flag enabled.</p>
<p>The inspector.NetworkResources.put method is used to provide a response for a loadNetworkResource
request issued via the Chrome DevTools Protocol (CDP).
This is typically triggered when a source map is specified by URL, and a DevTools frontend—such as
Chrome—requests the resource to retrieve the source map.</p>
<p>This method allows developers to predefine the resource content to be served in response to such CDP requests.</p>
<pre><code class="language-js">const inspector = require('node:inspector');
// By preemptively calling put to register the resource, a source map can be resolved when
// a loadNetworkResource request is made from the frontend.
async function setNetworkResources() {
  const mapUrl = 'http://localhost:3000/dist/app.js.map';
  const tsUrl = 'http://localhost:3000/src/app.ts';
  const distAppJsMap = await fetch(mapUrl).then((res) =&gt; res.text());
  const srcAppTs = await fetch(tsUrl).then((res) =&gt; res.text());
  inspector.NetworkResources.put(mapUrl, distAppJsMap);
  inspector.NetworkResources.put(tsUrl, srcAppTs);
};
setNetworkResources().then(() =&gt; {
  require('./dist/app');
});
</code></pre>
<p>For more details, see the official CDP documentation: <a href="https://chromedevtools.github.io/devtools-protocol/tot/Network/#method-loadNetworkResource">Network.loadNetworkResource</a></p>
<h3><code>inspector.DOMStorage.domStorageItemAdded</code></h3>
<ul>
<li><code>params</code> {Object}
<ul>
<li><code>storageId</code> {Object}
<ul>
<li><code>securityOrigin</code> {string}</li>
<li><code>storageKey</code> {string}</li>
<li><code>isLocalStorage</code> {boolean}</li>
</ul>
</li>
<li><code>key</code> {string}</li>
<li><code>newValue</code> {string}</li>
</ul>
</li>
</ul>
<p>This feature is only available with the
<code>--experimental-storage-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>DOMStorage.domStorageItemAdded</code> event to connected frontends.
This event indicates that a new item has been added to the storage.</p>
<h3><code>inspector.DOMStorage.domStorageItemRemoved</code></h3>
<ul>
<li><code>params</code> {Object}
<ul>
<li><code>storageId</code> {Object}
<ul>
<li><code>securityOrigin</code> {string}</li>
<li><code>storageKey</code> {string}</li>
<li><code>isLocalStorage</code> {boolean}</li>
</ul>
</li>
<li><code>key</code> {string}</li>
</ul>
</li>
</ul>
<p>This feature is only available with the
<code>--experimental-storage-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>DOMStorage.domStorageItemRemoved</code> event to connected frontends.
This event indicates that an item has been removed from the storage.</p>
<h3><code>inspector.DOMStorage.domStorageItemUpdated</code></h3>
<ul>
<li><code>params</code> {Object}
<ul>
<li><code>storageId</code> {Object}
<ul>
<li><code>securityOrigin</code> {string}</li>
<li><code>storageKey</code> {string}</li>
<li><code>isLocalStorage</code> {boolean}</li>
</ul>
</li>
<li><code>key</code> {string}</li>
<li><code>oldValue</code> {string}</li>
<li><code>newValue</code> {string}</li>
</ul>
</li>
</ul>
<p>This feature is only available with the
<code>--experimental-storage-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>DOMStorage.domStorageItemUpdated</code> event to connected frontends.
This event indicates that a storage item has been updated.</p>
<h3><code>inspector.DOMStorage.domStorageItemsCleared</code></h3>
<ul>
<li><code>params</code> {Object}
<ul>
<li><code>storageId</code> {Object}
<ul>
<li><code>securityOrigin</code> {string}</li>
<li><code>storageKey</code> {string}</li>
<li><code>isLocalStorage</code> {boolean}</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>This feature is only available with the
<code>--experimental-storage-inspection</code> flag enabled.</p>
<p>Broadcasts the <code>DOMStorage.domStorageItemsCleared</code> event to connected
frontends. This event indicates that all items have been cleared from the
storage.</p>
<h3><code>inspector.DOMStorage.registerStorage</code></h3>
<ul>
<li><code>params</code> {Object}
<ul>
<li><code>isLocalStorage</code> {boolean}</li>
<li><code>storageMap</code> {Object}</li>
</ul>
</li>
</ul>
<p>This feature is only available with the
<code>--experimental-storage-inspection</code> flag enabled.</p>
<h2>Support of breakpoints</h2>
<p>The Chrome DevTools Protocol <a href="https://chromedevtools.github.io/devtools-protocol/v8/Debugger"><code>Debugger</code> domain</a> allows an
<code>inspector.Session</code> to attach to a program and set breakpoints to step through
the codes.</p>
<p>However, setting breakpoints with a same-thread <code>inspector.Session</code>, which is
connected by <a href="#sessionconnect"><code>session.connect()</code></a>, should be avoided as the program being
attached and paused is exactly the debugger itself. Instead, try connect to the
main thread by <a href="#sessionconnecttomainthread"><code>session.connectToMainThread()</code></a> and set breakpoints in a
worker thread, or connect with a <a href="debugger.md">Debugger</a> program over WebSocket
connection.</p>
