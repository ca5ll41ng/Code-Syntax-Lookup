---
id: "js-en-function-node-async_hooks"
language: "js"
lang: "en"
category: "function"
name: "node:async_hooks"
title: "Async hooks"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/async_hooks.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Async hooks

<h1>Async hooks</h1>
<blockquote>
<p>Stability: 1 - Experimental. Please migrate away from this API, if you can.
We do not recommend using the <a href="#async_hookscreatehookoptions"><code>createHook</code></a>, <a href="#class-asynchook"><code>AsyncHook</code></a>, and
<a href="#async_hooksexecutionasyncresource"><code>executionAsyncResource</code></a> APIs as they have usability issues, safety risks,
and performance implications. Async context tracking use cases are better
served by the stable <a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a> API. If you have a use case for
<code>createHook</code>, <code>AsyncHook</code>, or <code>executionAsyncResource</code> beyond the context
tracking need solved by <a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a> or diagnostics data currently
provided by <a href="diagnostics_channel.md">Diagnostics Channel</a>, please open an issue at
<a href="https://github.com/nodejs/node/issues">https://github.com/nodejs/node/issues</a> describing your use case so we can
create a more purpose-focused API.</p>
</blockquote>
<p>We strongly discourage the use of the <code>async_hooks</code> API.
Other APIs that can cover most of its use cases include:</p>
<ul>
<li><a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a> tracks async context</li>
<li><a href="process.md#processgetactiveresourcesinfo"><code>process.getActiveResourcesInfo()</code></a> tracks active resources</li>
</ul>
<p>The <code>node:async_hooks</code> module provides an API to track asynchronous resources.
It can be accessed using:</p>
<pre><code class="language-mjs">import async_hooks from 'node:async_hooks';
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');
</code></pre>
<h2>Terminology</h2>
<p>An asynchronous resource represents an object with an associated callback.
This callback may be called multiple times, such as the <code>'connection'</code>
event in <code>net.createServer()</code>, or just a single time like in <code>fs.open()</code>.
A resource can also be closed before the callback is called. <code>AsyncHook</code> does
not explicitly distinguish between these different cases but will represent them
as the abstract concept that is a resource.</p>
<p>If <a href="worker_threads.md#class-worker"><code>Worker</code></a>s are used, each thread has an independent <code>async_hooks</code>
interface, and each thread will use a new set of async IDs.</p>
<h2>Overview</h2>
<p>Following is a simple overview of the public API.</p>
<pre><code class="language-mjs">import async_hooks from 'node:async_hooks';

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook =
    async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//

// init() is called during object construction. The resource may not have
// completed construction when this callback runs. Therefore, all fields of the
// resource referenced by &quot;asyncId&quot; may not have been populated.
function init(asyncId, type, triggerAsyncId, resource) { }

// before() is called just before the resource's callback is called. It can be
// called 0-N times for handles (such as TCPWrap), and will be called exactly 1
// time for requests (such as FSReqCallback).
function before(asyncId) { }

// after() is called just after the resource's callback has finished.
function after(asyncId) { }

// destroy() is called when the resource is destroyed.
function destroy(asyncId) { }

// promiseResolve() is called only for promise resources, when the
// resolve() function passed to the Promise constructor is invoked
// (either directly or through other means of resolving a promise).
function promiseResolve(asyncId) { }
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');

// Return the ID of the current execution context.
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook =
    async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Disable listening for new asynchronous events.
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//

// init() is called during object construction. The resource may not have
// completed construction when this callback runs. Therefore, all fields of the
// resource referenced by &quot;asyncId&quot; may not have been populated.
function init(asyncId, type, triggerAsyncId, resource) { }

// before() is called just before the resource's callback is called. It can be
// called 0-N times for handles (such as TCPWrap), and will be called exactly 1
// time for requests (such as FSReqCallback).
function before(asyncId) { }

// after() is called just after the resource's callback has finished.
function after(asyncId) { }

// destroy() is called when the resource is destroyed.
function destroy(asyncId) { }

// promiseResolve() is called only for promise resources, when the
// resolve() function passed to the Promise constructor is invoked
// (either directly or through other means of resolving a promise).
function promiseResolve(asyncId) { }
</code></pre>
<h2><code>async_hooks.createHook(options)</code></h2>
<ul>
<li><code>options</code> {Object} The <a href="#hook-callbacks">Hook Callbacks</a> to register
<ul>
<li><code>init</code> {Function} The <a href="#initasyncid-type-triggerasyncid-resource"><code>init</code> callback</a>.</li>
<li><code>before</code> {Function} The <a href="#beforeasyncid"><code>before</code> callback</a>.</li>
<li><code>after</code> {Function} The <a href="#afterasyncid"><code>after</code> callback</a>.</li>
<li><code>destroy</code> {Function} The <a href="#destroyasyncid"><code>destroy</code> callback</a>.</li>
<li><code>promiseResolve</code> {Function} The <a href="#promiseresolveasyncid"><code>promiseResolve</code> callback</a>.</li>
<li><code>trackPromises</code> {boolean} Whether the hook should track <code>Promise</code>s. Cannot be <code>false</code> if
<code>promiseResolve</code> is set. <strong>Default</strong>: <code>true</code>.</li>
</ul>
</li>
<li>Returns: {AsyncHook} Instance used for disabling and enabling hooks</li>
</ul>
<p>Registers functions to be called for different lifetime events of each async
operation.</p>
<p>The callbacks <code>init()</code>/<code>before()</code>/<code>after()</code>/<code>destroy()</code> are called for the
respective asynchronous event during a resource's lifetime.</p>
<p>All callbacks are optional. For example, if only resource cleanup needs to
be tracked, then only the <code>destroy</code> callback needs to be passed. The
specifics of all functions that can be passed to <code>callbacks</code> is in the
<a href="#hook-callbacks">Hook Callbacks</a> section.</p>
<pre><code class="language-mjs">import { createHook } from 'node:async_hooks';

const asyncHook = createHook({
  init(asyncId, type, triggerAsyncId, resource) { },
  destroy(asyncId) { },
});
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');

const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) { },
  destroy(asyncId) { },
});
</code></pre>
<p>The callbacks will be inherited via the prototype chain:</p>
<pre><code class="language-js">class MyAsyncCallbacks {
  init(asyncId, type, triggerAsyncId, resource) { }
  destroy(asyncId) {}
}

class MyAddedCallbacks extends MyAsyncCallbacks {
  before(asyncId) { }
  after(asyncId) { }
}

const asyncHook = async_hooks.createHook(new MyAddedCallbacks());
</code></pre>
<p>Because promises are asynchronous resources whose lifecycle is tracked
via the async hooks mechanism, the <code>init()</code>, <code>before()</code>, <code>after()</code>, and
<code>destroy()</code> callbacks <em>must not</em> be async functions that return promises.</p>
<h3>Error handling</h3>
<p>If any <code>AsyncHook</code> callbacks throw, the application will print the stack trace
and exit. The exit path does follow that of an uncaught exception, but
all <code>'uncaughtException'</code> listeners are removed, thus forcing the process to
exit. The <code>'exit'</code> callbacks will still be called unless the application is run
with <code>--abort-on-uncaught-exception</code>, in which case a stack trace will be
printed and the application exits, leaving a core file.</p>
<p>The reason for this error handling behavior is that these callbacks are running
at potentially volatile points in an object's lifetime, for example during
class construction and destruction. Because of this, it is deemed necessary to
bring down the process quickly in order to prevent an unintentional abort in the
future. This is subject to change in the future if a comprehensive analysis is
performed to ensure an exception can follow the normal control flow without
unintentional side effects.</p>
<h3>Printing in <code>AsyncHook</code> callbacks</h3>
<p>Because printing to the console is an asynchronous operation, <code>console.log()</code>
will cause <code>AsyncHook</code> callbacks to be called. Using <code>console.log()</code> or
similar asynchronous operations inside an <code>AsyncHook</code> callback function will
cause an infinite recursion. An easy solution to this when debugging is to use a
synchronous logging operation such as <code>fs.writeFileSync(file, msg, flag)</code>.
This will print to the file and will not invoke <code>AsyncHook</code> recursively because
it is synchronous.</p>
<pre><code class="language-mjs">import { writeFileSync } from 'node:fs';
import { format } from 'node:util';

function debug(...args) {
  // Use a function like this one when debugging inside an AsyncHook callback
  writeFileSync('log.out', `${format(...args)}\n`, { flag: 'a' });
}
</code></pre>
<pre><code class="language-cjs">const fs = require('node:fs');
const util = require('node:util');

function debug(...args) {
  // Use a function like this one when debugging inside an AsyncHook callback
  fs.writeFileSync('log.out', `${util.format(...args)}\n`, { flag: 'a' });
}
</code></pre>
<p>If an asynchronous operation is needed for logging, it is possible to keep
track of what caused the asynchronous operation using the information
provided by <code>AsyncHook</code> itself. The logging should then be skipped when
it was the logging itself that caused the <code>AsyncHook</code> callback to be called. By
doing this, the otherwise infinite recursion is broken.</p>
<h2>Class: <code>AsyncHook</code></h2>
<p>The class <code>AsyncHook</code> exposes an interface for tracking lifetime events
of asynchronous operations.</p>
<h3><code>asyncHook.enable()</code></h3>
<ul>
<li>Returns: {AsyncHook} A reference to <code>asyncHook</code>.</li>
</ul>
<p>Enable the callbacks for a given <code>AsyncHook</code> instance. If no callbacks are
provided, enabling is a no-op.</p>
<p>The <code>AsyncHook</code> instance is disabled by default. If the <code>AsyncHook</code> instance
should be enabled immediately after creation, the following pattern can be used.</p>
<pre><code class="language-mjs">import { createHook } from 'node:async_hooks';

const hook = createHook(callbacks).enable();
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');

const hook = async_hooks.createHook(callbacks).enable();
</code></pre>
<h3><code>asyncHook.disable()</code></h3>
<ul>
<li>Returns: {AsyncHook} A reference to <code>asyncHook</code>.</li>
</ul>
<p>Disable the callbacks for a given <code>AsyncHook</code> instance from the global pool of
<code>AsyncHook</code> callbacks to be executed. Once a hook has been disabled it will not
be called again until enabled.</p>
<p>For API consistency <code>disable()</code> also returns the <code>AsyncHook</code> instance.</p>
<h3>Hook callbacks</h3>
<p>Key events in the lifetime of asynchronous events have been categorized into
four areas: instantiation, before/after the callback is called, and when the
instance is destroyed.</p>
<h4><code>init(asyncId, type, triggerAsyncId, resource)</code></h4>
<ul>
<li><code>asyncId</code> {number} A unique ID for the async resource.</li>
<li><code>type</code> {string} The type of the async resource.</li>
<li><code>triggerAsyncId</code> {number} The unique ID of the async resource in whose
execution context this async resource was created.</li>
<li><code>resource</code> {Object} Reference to the resource representing the async
operation, needs to be released during <em>destroy</em>.</li>
</ul>
<p>Called when a class is constructed that has the <em>possibility</em> to emit an
asynchronous event. This <em>does not</em> mean the instance must call
<code>before</code>/<code>after</code> before <code>destroy</code> is called, only that the possibility
exists.</p>
<p>This behavior can be observed by doing something like opening a resource then
closing it before the resource can be used. The following snippet demonstrates
this.</p>
<pre><code class="language-mjs">import { createServer } from 'node:net';

createServer().listen(function() { this.close(); });
// OR
clearTimeout(setTimeout(() =&gt; {}, 10));
</code></pre>
<pre><code class="language-cjs">require('node:net').createServer().listen(function() { this.close(); });
// OR
clearTimeout(setTimeout(() =&gt; {}, 10));
</code></pre>
<p>Every new resource is assigned an ID that is unique within the scope of the
current Node.js instance.</p>
<h5><code>type</code></h5>
<p>The <code>type</code> is a string identifying the type of resource that caused
<code>init</code> to be called. Generally, it will correspond to the name of the
resource's constructor.</p>
<p>The <code>type</code> of resources created by Node.js itself can change in any Node.js
release. Valid values include <code>TLSWRAP</code>,
<code>TCPWRAP</code>, <code>TCPSERVERWRAP</code>, <code>GETADDRINFOREQWRAP</code>, <code>FSREQCALLBACK</code>,
<code>Microtask</code>, and <code>Timeout</code>. Inspect the source code of the Node.js version used
to get the full list.</p>
<p>Furthermore users of <a href="async_context.md#class-asyncresource"><code>AsyncResource</code></a> create async resources independent
of Node.js itself.</p>
<p>There is also the <code>PROMISE</code> resource type, which is used to track <code>Promise</code>
instances and asynchronous work scheduled by them. The <code>Promise</code>s are only
tracked when <code>trackPromises</code> option is set to <code>true</code>.</p>
<p>Users are able to define their own <code>type</code> when using the public embedder API.</p>
<p>It is possible to have type name collisions. Embedders are encouraged to use
unique prefixes, such as the npm package name, to prevent collisions when
listening to the hooks.</p>
<h5><code>triggerAsyncId</code></h5>
<p><code>triggerAsyncId</code> is the <code>asyncId</code> of the resource that caused (or &quot;triggered&quot;)
the new resource to initialize and that caused <code>init</code> to call. This is different
from <code>async_hooks.executionAsyncId()</code> that only shows <em>when</em> a resource was
created, while <code>triggerAsyncId</code> shows <em>why</em> a resource was created.</p>
<p>The following is a simple demonstration of <code>triggerAsyncId</code>:</p>
<pre><code class="language-mjs">import { createHook, executionAsyncId } from 'node:async_hooks';
import { stdout } from 'node:process';
import net from 'node:net';
import fs from 'node:fs';

createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = executionAsyncId();
    fs.writeSync(
      stdout.fd,
      `${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
}).enable();

net.createServer((conn) =&gt; {}).listen(8080);
</code></pre>
<pre><code class="language-cjs">const { createHook, executionAsyncId } = require('node:async_hooks');
const { stdout } = require('node:process');
const net = require('node:net');
const fs = require('node:fs');

createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = executionAsyncId();
    fs.writeSync(
      stdout.fd,
      `${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
}).enable();

net.createServer((conn) =&gt; {}).listen(8080);
</code></pre>
<p>Output when hitting the server with <code>nc localhost 8080</code>:</p>
<pre><code class="language-console">TCPSERVERWRAP(5): trigger: 1 execution: 1
TCPWRAP(7): trigger: 5 execution: 0
</code></pre>
<p>The <code>TCPSERVERWRAP</code> is the server which receives the connections.</p>
<p>The <code>TCPWRAP</code> is the new connection from the client. When a new
connection is made, the <code>TCPWrap</code> instance is immediately constructed. This
happens outside of any JavaScript stack. (An <code>executionAsyncId()</code> of <code>0</code> means
that it is being executed from C++ with no JavaScript stack above it.) With only
that information, it would be impossible to link resources together in
terms of what caused them to be created, so <code>triggerAsyncId</code> is given the task
of propagating what resource is responsible for the new resource's existence.</p>
<h5><code>resource</code></h5>
<p><code>resource</code> is an object that represents the actual async resource that has
been initialized. The API to access the object may be specified by the
creator of the resource. Resources created by Node.js itself are internal
and may change at any time. Therefore no API is specified for these.</p>
<p>In some cases the resource object is reused for performance reasons, it is
thus not safe to use it as a key in a <code>WeakMap</code> or add properties to it.</p>
<h5>Asynchronous context example</h5>
<p>The context tracking use case is covered by the stable API <a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a>.
This example only illustrates async hooks operation but <a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a>
fits better to this use case.</p>
<p>The following is an example with additional information about the calls to
<code>init</code> between the <code>before</code> and <code>after</code> calls, specifically what the
callback to <code>listen()</code> will look like. The output formatting is slightly more
elaborate to make calling context easier to see.</p>
<pre><code class="language-mjs">import async_hooks from 'node:async_hooks';
import fs from 'node:fs';
import net from 'node:net';
import { stdout } from 'node:process';
const { fd } = stdout;

let indent = 0;
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = async_hooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    fs.writeSync(
      fd,
      `${indentStr}${type}(${asyncId}):` +
      ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
  before(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}before:  ${asyncId}\n`);
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}after:  ${asyncId}\n`);
  },
  destroy(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}destroy:  ${asyncId}\n`);
  },
}).enable();

net.createServer(() =&gt; {}).listen(8080, () =&gt; {
  // Let's wait 10ms before logging the server started.
  setTimeout(() =&gt; {
    console.log('&gt;&gt;&gt;', async_hooks.executionAsyncId());
  }, 10);
});
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');
const fs = require('node:fs');
const net = require('node:net');
const { fd } = process.stdout;

let indent = 0;
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = async_hooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    fs.writeSync(
      fd,
      `${indentStr}${type}(${asyncId}):` +
      ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
  before(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}before:  ${asyncId}\n`);
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}after:  ${asyncId}\n`);
  },
  destroy(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeSync(fd, `${indentStr}destroy:  ${asyncId}\n`);
  },
}).enable();

net.createServer(() =&gt; {}).listen(8080, () =&gt; {
  // Let's wait 10ms before logging the server started.
  setTimeout(() =&gt; {
    console.log('&gt;&gt;&gt;', async_hooks.executionAsyncId());
  }, 10);
});
</code></pre>
<p>Output from only starting the server:</p>
<pre><code class="language-console">TCPSERVERWRAP(5): trigger: 1 execution: 1
TickObject(6): trigger: 5 execution: 1
before:  6
  Timeout(7): trigger: 6 execution: 6
after:   6
destroy: 6
before:  7
&gt;&gt;&gt; 7
  TickObject(8): trigger: 7 execution: 7
after:   7
before:  8
after:   8
</code></pre>
<p>As illustrated in the example, <code>executionAsyncId()</code> and <code>execution</code> each specify
the value of the current execution context; which is delineated by calls to
<code>before</code> and <code>after</code>.</p>
<p>Only using <code>execution</code> to graph resource allocation results in the following:</p>
<pre><code class="language-console">  root(1)
     ^
     |
TickObject(6)
     ^
     |
 Timeout(7)
</code></pre>
<p>The <code>TCPSERVERWRAP</code> is not part of this graph, even though it was the reason for
<code>console.log()</code> being called. This is because binding to a port without a host
name is a <em>synchronous</em> operation, but to maintain a completely asynchronous
API the user's callback is placed in a <code>process.nextTick()</code>. Which is why
<code>TickObject</code> is present in the output and is a 'parent' for <code>.listen()</code>
callback.</p>
<p>The graph only shows <em>when</em> a resource was created, not <em>why</em>, so to track
the <em>why</em> use <code>triggerAsyncId</code>. Which can be represented with the following
graph:</p>
<pre><code class="language-console"> bootstrap(1)
     |
     ˅
TCPSERVERWRAP(5)
     |
     ˅
 TickObject(6)
     |
     ˅
  Timeout(7)
</code></pre>
<h4><code>before(asyncId)</code></h4>
<ul>
<li><code>asyncId</code> {number}</li>
</ul>
<p>When an asynchronous operation is initiated (such as a TCP server receiving a
new connection) or completes (such as writing data to disk) a callback is
called to notify the user. The <code>before</code> callback is called just before said
callback is executed. <code>asyncId</code> is the unique identifier assigned to the
resource about to execute the callback.</p>
<p>The <code>before</code> callback will be called 0 to N times. The <code>before</code> callback
will typically be called 0 times if the asynchronous operation was cancelled
or, for example, if no connections are received by a TCP server. Persistent
asynchronous resources like a TCP server will typically call the <code>before</code>
callback multiple times, while other operations like <code>fs.open()</code> will call
it only once.</p>
<h4><code>after(asyncId)</code></h4>
<ul>
<li><code>asyncId</code> {number}</li>
</ul>
<p>Called immediately after the callback specified in <code>before</code> is completed.</p>
<p>If an uncaught exception occurs during execution of the callback, then <code>after</code>
will run <em>after</em> the <code>'uncaughtException'</code> event is emitted or a <code>domain</code>'s
handler runs.</p>
<h4><code>destroy(asyncId)</code></h4>
<ul>
<li><code>asyncId</code> {number}</li>
</ul>
<p>Called after the resource corresponding to <code>asyncId</code> is destroyed. It is also
called asynchronously from the embedder API <code>emitDestroy()</code>.</p>
<p>Some resources depend on garbage collection for cleanup, so if a reference is
made to the <code>resource</code> object passed to <code>init</code> it is possible that <code>destroy</code>
will never be called, causing a memory leak in the application. If the resource
does not depend on garbage collection, then this will not be an issue.</p>
<p>Using the destroy hook results in additional overhead because it enables
tracking of <code>Promise</code> instances via the garbage collector.</p>
<h4><code>promiseResolve(asyncId)</code></h4>
<ul>
<li><code>asyncId</code> {number}</li>
</ul>
<p>Called when the <code>resolve</code> function passed to the <code>Promise</code> constructor is
invoked (either directly or through other means of resolving a promise).</p>
<p><code>resolve()</code> does not do any observable synchronous work.</p>
<p>The <code>Promise</code> is not necessarily fulfilled or rejected at this point if the
<code>Promise</code> was resolved by assuming the state of another <code>Promise</code>.</p>
<pre><code class="language-js">new Promise((resolve) =&gt; resolve(true)).then((a) =&gt; {});
</code></pre>
<p>calls the following callbacks:</p>
<pre><code class="language-text">init for PROMISE with id 5, trigger id: 1
  promise resolve 5      # corresponds to resolve(true)
init for PROMISE with id 6, trigger id: 5  # the Promise returned by then()
  before 6               # the then() callback is entered
  promise resolve 6      # the then() callback resolves the promise by returning
  after 6
</code></pre>
<h3><code>async_hooks.executionAsyncResource()</code></h3>
<ul>
<li>Returns: {Object} The resource representing the current execution.
Useful to store data within the resource.</li>
</ul>
<p>Resource objects returned by <code>executionAsyncResource()</code> are most often internal
Node.js handle objects with undocumented APIs. Using any functions or properties
on the object is likely to crash your application and should be avoided.</p>
<p>Using <code>executionAsyncResource()</code> in the top-level execution context will
return an empty object as there is no handle or request object to use,
but having an object representing the top-level can be helpful.</p>
<pre><code class="language-mjs">import { open } from 'node:fs';
import { executionAsyncId, executionAsyncResource } from 'node:async_hooks';

console.log(executionAsyncId(), executionAsyncResource());  // 1 {}
open(new URL(import.meta.url), 'r', (err, fd) =&gt; {
  console.log(executionAsyncId(), executionAsyncResource());  // 7 FSReqWrap
});
</code></pre>
<pre><code class="language-cjs">const { open } = require('node:fs');
const { executionAsyncId, executionAsyncResource } = require('node:async_hooks');

console.log(executionAsyncId(), executionAsyncResource());  // 1 {}
open(__filename, 'r', (err, fd) =&gt; {
  console.log(executionAsyncId(), executionAsyncResource());  // 7 FSReqWrap
});
</code></pre>
<p>This can be used to implement continuation local storage without the
use of a tracking <code>Map</code> to store the metadata:</p>
<pre><code class="language-mjs">import { createServer } from 'node:http';
import {
  executionAsyncId,
  executionAsyncResource,
  createHook,
} from 'node:async_hooks';
const sym = Symbol('state'); // Private symbol to avoid pollution

createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    const cr = executionAsyncResource();
    if (cr) {
      resource[sym] = cr[sym];
    }
  },
}).enable();

const server = createServer((req, res) =&gt; {
  executionAsyncResource()[sym] = { state: req.url };
  setTimeout(function() {
    res.end(JSON.stringify(executionAsyncResource()[sym]));
  }, 100);
}).listen(3000);
</code></pre>
<pre><code class="language-cjs">const { createServer } = require('node:http');
const {
  executionAsyncId,
  executionAsyncResource,
  createHook,
} = require('node:async_hooks');
const sym = Symbol('state'); // Private symbol to avoid pollution

createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    const cr = executionAsyncResource();
    if (cr) {
      resource[sym] = cr[sym];
    }
  },
}).enable();

const server = createServer((req, res) =&gt; {
  executionAsyncResource()[sym] = { state: req.url };
  setTimeout(function() {
    res.end(JSON.stringify(executionAsyncResource()[sym]));
  }, 100);
}).listen(3000);
</code></pre>
<h3><code>async_hooks.executionAsyncId()</code></h3>
<ul>
<li>Returns: {number} The <code>asyncId</code> of the current execution context. Useful to
track when something calls.</li>
</ul>
<pre><code class="language-mjs">import { executionAsyncId } from 'node:async_hooks';
import fs from 'node:fs';

console.log(executionAsyncId());  // 1 - bootstrap
const path = '.';
fs.open(path, 'r', (err, fd) =&gt; {
  console.log(executionAsyncId());  // 6 - open()
});
</code></pre>
<pre><code class="language-cjs">const async_hooks = require('node:async_hooks');
const fs = require('node:fs');

console.log(async_hooks.executionAsyncId());  // 1 - bootstrap
const path = '.';
fs.open(path, 'r', (err, fd) =&gt; {
  console.log(async_hooks.executionAsyncId());  // 6 - open()
});
</code></pre>
<p>The ID returned from <code>executionAsyncId()</code> is related to execution timing, not
causality (which is covered by <code>triggerAsyncId()</code>):</p>
<pre><code class="language-js">const server = net.createServer((conn) =&gt; {
  // Returns the ID of the server, not of the new connection, because the
  // callback runs in the execution scope of the server's MakeCallback().
  async_hooks.executionAsyncId();

}).listen(port, () =&gt; {
  // Returns the ID of a TickObject (process.nextTick()) because all
  // callbacks passed to .listen() are wrapped in a nextTick().
  async_hooks.executionAsyncId();
});
</code></pre>
<p>Promise contexts may not get precise <code>executionAsyncIds</code> by default.
See the section on <a href="#promise-execution-tracking">promise execution tracking</a>.</p>
<h3><code>async_hooks.triggerAsyncId()</code></h3>
<ul>
<li>Returns: {number} The ID of the resource responsible for calling the callback
that is currently being executed.</li>
</ul>
<pre><code class="language-js">const server = net.createServer((conn) =&gt; {
  // Returns the triggerAsyncId of the server, not of the new connection,
  // because the callback runs in the execution scope of the server's
  // MakeCallback().
  async_hooks.triggerAsyncId();

}).listen(port, () =&gt; {
  // Even though all callbacks passed to .listen() are wrapped in a nextTick()
  // the callback itself exists because the call to the server's .listen()
  // was made. So the return value would be the ID of the server.
  async_hooks.triggerAsyncId();
});
</code></pre>
<p>Promise contexts may not get valid <code>triggerAsyncId</code>s by default. See
the section on <a href="#promise-execution-tracking">promise execution tracking</a>.</p>
<h3><code>async_hooks.asyncWrapProviders</code></h3>
<ul>
<li>Returns: A map of provider types to the corresponding numeric id.
This map contains all the event types that might be emitted by the <code>async_hooks.init()</code> event.</li>
</ul>
<p>This feature suppresses the deprecated usage of <code>process.binding('async_wrap').Providers</code>.
See: <a href="deprecations.md#dep0111-processbinding">DEP0111</a></p>
<h2>Promise execution tracking</h2>
<p>By default, promise executions are not assigned <code>asyncId</code>s due to the relatively
expensive nature of the <a href="https://docs.google.com/document/d/1rda3yKGHimKIhg5YeoAmCOtyURgsbTH_qaYR79FELlk/edit">promise introspection API</a> provided by
V8. This means that programs using promises or <code>async</code>/<code>await</code> will not get
correct execution and trigger ids for promise callback contexts by default.</p>
<pre><code class="language-mjs">import { executionAsyncId, triggerAsyncId } from 'node:async_hooks';

Promise.resolve(1729).then(() =&gt; {
  console.log(`eid ${executionAsyncId()} tid ${triggerAsyncId()}`);
});
// produces:
// eid 1 tid 0
</code></pre>
<pre><code class="language-cjs">const { executionAsyncId, triggerAsyncId } = require('node:async_hooks');

Promise.resolve(1729).then(() =&gt; {
  console.log(`eid ${executionAsyncId()} tid ${triggerAsyncId()}`);
});
// produces:
// eid 1 tid 0
</code></pre>
<p>Observe that the <code>then()</code> callback claims to have executed in the context of the
outer scope even though there was an asynchronous hop involved. Also,
the <code>triggerAsyncId</code> value is <code>0</code>, which means that we are missing context about
the resource that caused (triggered) the <code>then()</code> callback to be executed.</p>
<p>Installing async hooks via <code>async_hooks.createHook</code> enables promise execution
tracking:</p>
<pre><code class="language-mjs">import { createHook, executionAsyncId, triggerAsyncId } from 'node:async_hooks';
createHook({ init() {} }).enable(); // forces PromiseHooks to be enabled.
Promise.resolve(1729).then(() =&gt; {
  console.log(`eid ${executionAsyncId()} tid ${triggerAsyncId()}`);
});
// produces:
// eid 7 tid 6
</code></pre>
<pre><code class="language-cjs">const { createHook, executionAsyncId, triggerAsyncId } = require('node:async_hooks');

createHook({ init() {} }).enable(); // forces PromiseHooks to be enabled.
Promise.resolve(1729).then(() =&gt; {
  console.log(`eid ${executionAsyncId()} tid ${triggerAsyncId()}`);
});
// produces:
// eid 7 tid 6
</code></pre>
<p>In this example, adding any actual hook function enabled the tracking of
promises. There are two promises in the example above; the promise created by
<code>Promise.resolve()</code> and the promise returned by the call to <code>then()</code>. In the
example above, the first promise got the <code>asyncId</code> <code>6</code> and the latter got
<code>asyncId</code> <code>7</code>. During the execution of the <code>then()</code> callback, we are executing
in the context of promise with <code>asyncId</code> <code>7</code>. This promise was triggered by
async resource <code>6</code>.</p>
<p>Another subtlety with promises is that <code>before</code> and <code>after</code> callbacks are run
only on chained promises. That means promises not created by <code>then()</code>/<code>catch()</code>
will not have the <code>before</code> and <code>after</code> callbacks fired on them. For more details
see the details of the V8 <a href="https://docs.google.com/document/d/1rda3yKGHimKIhg5YeoAmCOtyURgsbTH_qaYR79FELlk/edit">PromiseHooks</a> API.</p>
<h3>Disabling promise execution tracking</h3>
<p>Tracking promise execution can cause a significant performance overhead.
To opt out of promise tracking, set <code>trackPromises</code> to <code>false</code>:</p>
<pre><code class="language-cjs">const { createHook } = require('node:async_hooks');
const { writeSync } = require('node:fs');
createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    // This init hook does not get called when trackPromises is set to false.
    writeSync(1, `init hook triggered for ${type}\n`);
  },
  trackPromises: false,  // Do not track promises.
}).enable();
Promise.resolve(1729);
</code></pre>
<pre><code class="language-mjs">import { createHook } from 'node:async_hooks';
import { writeSync } from 'node:fs';

createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    // This init hook does not get called when trackPromises is set to false.
    writeSync(1, `init hook triggered for ${type}\n`);
  },
  trackPromises: false,  // Do not track promises.
}).enable();
Promise.resolve(1729);
</code></pre>
<h2>JavaScript embedder API</h2>
<p>Library developers that handle their own asynchronous resources performing tasks
like I/O, connection pooling, or managing callback queues may use the
<code>AsyncResource</code> JavaScript API so that all the appropriate callbacks are called.</p>
<h3>Class: <code>AsyncResource</code></h3>
<p>The documentation for this class has moved <a href="async_context.md#class-asyncresource"><code>AsyncResource</code></a>.</p>
<h2>Class: <code>AsyncLocalStorage</code></h2>
<p>The documentation for this class has moved <a href="async_context.md#class-asynclocalstorage"><code>AsyncLocalStorage</code></a>.</p>
