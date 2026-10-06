---
id: "js-en-function-node-worker_threads"
language: "js"
lang: "en"
category: "function"
name: "node:worker_threads"
title: "Worker threads"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/worker_threads.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Worker threads

<h1>Worker threads</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:worker_threads</code> module enables the use of threads that execute
JavaScript in parallel. To access it:</p>
<pre><code class="language-mjs">import worker_threads from 'node:worker_threads';
</code></pre>
<pre><code class="language-cjs">const worker_threads = require('node:worker_threads');
</code></pre>
<p>Workers (threads) are useful for performing CPU-intensive JavaScript operations.
They do not help much with I/O-intensive work. The Node.js built-in
asynchronous I/O operations are more efficient than Workers can be.</p>
<p>Unlike <code>child_process</code> or <code>cluster</code>, <code>worker_threads</code> can share memory. They do
so by transferring <code>ArrayBuffer</code> instances or sharing <code>SharedArrayBuffer</code>
instances.</p>
<pre><code class="language-mjs">import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from 'node:worker_threads';

if (!isMainThread) {
  const { parse } = await import('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}

export default function parseJSAsync(script) {
  return new Promise((resolve, reject) =&gt; {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: script,
    });
    worker.on('message', resolve);
    worker.once('error', reject);
    worker.once('exit', (code) =&gt; {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};
</code></pre>
<pre><code class="language-cjs">const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('node:worker_threads');

if (isMainThread) {
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) =&gt; {
      const worker = new Worker(__filename, {
        workerData: script,
      });
      worker.on('message', resolve);
      worker.once('error', reject);
      worker.once('exit', (code) =&gt; {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { parse } = require('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}
</code></pre>
<p>The above example spawns a Worker thread for each <code>parseJSAsync()</code> call. In
practice, use a pool of Workers for these kinds of tasks. Otherwise, the
overhead of creating Workers would likely exceed their benefit.</p>
<p>When implementing a worker pool, use the <a href="async_hooks.md#class-asyncresource"><code>AsyncResource</code></a> API to inform
diagnostic tools (e.g. to provide asynchronous stack traces) about the
correlation between tasks and their outcomes. See
<a href="async_context.md#using-asyncresource-for-a-worker-thread-pool">&quot;Using <code>AsyncResource</code> for a <code>Worker</code> thread pool&quot;</a>
in the <code>async_hooks</code> documentation for an example implementation.</p>
<p>Worker threads inherit non-process-specific options by default. Refer to
<a href="#new-workerfilename-options"><code>Worker constructor options</code></a> to know how to customize worker thread options,
specifically <code>argv</code> and <code>execArgv</code> options.</p>
<h2><code>worker_threads.getEnvironmentData(key)</code></h2>
<ul>
<li><code>key</code> {any} Any arbitrary, cloneable JavaScript value that can be used as a
{Map} key.</li>
<li>Returns: {any}</li>
</ul>
<p>Within a worker thread, <code>worker.getEnvironmentData()</code> returns a clone
of data passed to the spawning thread's <code>worker.setEnvironmentData()</code>.
Every new <code>Worker</code> receives its own copy of the environment data
automatically.</p>
<pre><code class="language-mjs">import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} from 'node:worker_threads';

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(new URL(import.meta.url));
} else {
  console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
}
</code></pre>
<pre><code class="language-cjs">const {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} = require('node:worker_threads');

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(__filename);
} else {
  console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
}
</code></pre>
<h2><code>worker_threads.isInternalThread</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if this code is running inside of an internal <a href="#class-worker"><code>Worker</code></a> thread (e.g the loader thread).</p>
<pre><code class="language-bash">node --experimental-loader ./loader.js main.js
</code></pre>
<pre><code class="language-mjs">// loader.js
import { isInternalThread } from 'node:worker_threads';
console.log(isInternalThread);  // true
</code></pre>
<pre><code class="language-cjs">// loader.js
const { isInternalThread } = require('node:worker_threads');
console.log(isInternalThread);  // true
</code></pre>
<pre><code class="language-mjs">// main.js
import { isInternalThread } from 'node:worker_threads';
console.log(isInternalThread);  // false
</code></pre>
<pre><code class="language-cjs">// main.js
const { isInternalThread } = require('node:worker_threads');
console.log(isInternalThread);  // false
</code></pre>
<h2><code>worker_threads.isMainThread</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Is <code>true</code> if this code is not running inside of a <a href="#class-worker"><code>Worker</code></a> thread.</p>
<pre><code class="language-mjs">import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(new URL(import.meta.url));
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}
</code></pre>
<pre><code class="language-cjs">const { Worker, isMainThread } = require('node:worker_threads');

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(__filename);
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}
</code></pre>
<h2><code>worker_threads.markAsUntransferable(object)</code></h2>
<ul>
<li><code>object</code> {any} Any arbitrary JavaScript value.</li>
</ul>
<p>Mark an object as not transferable. If <code>object</code> occurs in the transfer list of
a <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> call, an error is thrown. This is a no-op if
<code>object</code> is a primitive value.</p>
<p>In particular, this makes sense for objects that can be cloned, rather than
transferred, and which are used by other objects on the sending side.
For example, Node.js marks the <code>ArrayBuffer</code>s it uses for its
<a href="buffer.md#static-method-bufferallocunsafesize-alignment"><code>Buffer</code> pool</a> with this.
<code>ArrayBuffer.prototype.transfer()</code> is disallowed on such array buffer
instances.</p>
<p>This operation cannot be undone.</p>
<pre><code class="language-mjs">import { MessageChannel, markAsUntransferable } from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

markAsUntransferable(pooledBuffer);

const { port1 } = new MessageChannel();
try {
  // This will throw an error, because pooledBuffer is not transferable.
  port1.postMessage(typedArray1, [ typedArray1.buffer ]);
} catch (error) {
  // error.name === 'DataCloneError'
}

// The following line prints the contents of typedArray1 -- it still owns
// its memory and has not been transferred. Without
// `markAsUntransferable()`, this would print an empty Uint8Array and the
// postMessage call would have succeeded.
// typedArray2 is intact as well.
console.log(typedArray1);
console.log(typedArray2);
</code></pre>
<pre><code class="language-cjs">const { MessageChannel, markAsUntransferable } = require('node:worker_threads');

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

markAsUntransferable(pooledBuffer);

const { port1 } = new MessageChannel();
try {
  // This will throw an error, because pooledBuffer is not transferable.
  port1.postMessage(typedArray1, [ typedArray1.buffer ]);
} catch (error) {
  // error.name === 'DataCloneError'
}

// The following line prints the contents of typedArray1 -- it still owns
// its memory and has not been transferred. Without
// `markAsUntransferable()`, this would print an empty Uint8Array and the
// postMessage call would have succeeded.
// typedArray2 is intact as well.
console.log(typedArray1);
console.log(typedArray2);
</code></pre>
<p>There is no equivalent to this API in browsers.</p>
<h2><code>worker_threads.isMarkedAsUntransferable(object)</code></h2>
<ul>
<li><code>object</code> {any} Any JavaScript value.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Check if an object is marked as not transferable with
<a href="#worker_threadsmarkasuntransferableobject"><code>markAsUntransferable()</code></a>.</p>
<pre><code class="language-mjs">import { markAsUntransferable, isMarkedAsUntransferable } from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
markAsUntransferable(pooledBuffer);

isMarkedAsUntransferable(pooledBuffer);  // Returns true.
</code></pre>
<pre><code class="language-cjs">const { markAsUntransferable, isMarkedAsUntransferable } = require('node:worker_threads');

const pooledBuffer = new ArrayBuffer(8);
markAsUntransferable(pooledBuffer);

isMarkedAsUntransferable(pooledBuffer);  // Returns true.
</code></pre>
<p>There is no equivalent to this API in browsers.</p>
<h2><code>worker_threads.markAsUncloneable(object)</code></h2>
<ul>
<li><code>object</code> {any} Any arbitrary JavaScript value.</li>
</ul>
<p>Mark an object as not cloneable. If <code>object</code> is used as <a href="#event-message"><code>message</code></a> in
a <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> call, an error is thrown. This is a no-op if <code>object</code> is a
primitive value.</p>
<p>This has no effect on <code>ArrayBuffer</code>, or any <code>Buffer</code> like objects.</p>
<p>This operation cannot be undone.</p>
<pre><code class="language-mjs">import { markAsUncloneable } from 'node:worker_threads';

const anyObject = { foo: 'bar' };
markAsUncloneable(anyObject);
const { port1 } = new MessageChannel();
try {
  // This will throw an error, because anyObject is not cloneable.
  port1.postMessage(anyObject);
} catch (error) {
  // error.name === 'DataCloneError'
}
</code></pre>
<pre><code class="language-cjs">const { markAsUncloneable } = require('node:worker_threads');

const anyObject = { foo: 'bar' };
markAsUncloneable(anyObject);
const { port1 } = new MessageChannel();
try {
  // This will throw an error, because anyObject is not cloneable.
  port1.postMessage(anyObject);
} catch (error) {
  // error.name === 'DataCloneError'
}
</code></pre>
<p>There is no equivalent to this API in browsers.</p>
<h2><code>worker_threads.moveMessagePortToContext(port, contextifiedSandbox)</code></h2>
<ul>
<li>
<p><code>port</code> {MessagePort} The message port to transfer.</p>
</li>
<li>
<p><code>contextifiedSandbox</code> {Object} A <a href="vm.md#what-does-it-mean-to-contextify-an-object">contextified</a> object as returned by the
<code>vm.createContext()</code> method.</p>
</li>
<li>
<p>Returns: {MessagePort}</p>
</li>
</ul>
<p>Transfer a <code>MessagePort</code> to a different <a href="vm.md"><code>vm</code></a> Context. The original <code>port</code>
object is rendered unusable, and the returned <code>MessagePort</code> instance
takes its place.</p>
<p>The returned <code>MessagePort</code> is an object in the target context and
inherits from its global <code>Object</code> class. Objects passed to the
<a href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/message_event"><code>port.onmessage()</code></a> listener are also created in the target context
and inherit from its global <code>Object</code> class.</p>
<p>However, the created <code>MessagePort</code> no longer inherits from
{EventTarget}, and only <a href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/message_event"><code>port.onmessage()</code></a> can be used to receive
events using it.</p>
<h2><code>worker_threads.parentPort</code></h2>
<ul>
<li>Type: {null|MessagePort}</li>
</ul>
<p>If this thread is a <a href="#class-worker"><code>Worker</code></a>, this is a <a href="#class-messageport"><code>MessagePort</code></a>
allowing communication with the parent thread. Messages sent using
<code>parentPort.postMessage()</code> are available in the parent thread
using <code>worker.on('message')</code>, and messages sent from the parent thread
using <code>worker.postMessage()</code> are available in this thread using
<code>parentPort.on('message')</code>.</p>
<pre><code class="language-mjs">import { Worker, isMainThread, parentPort } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  worker.once('message', (message) =&gt; {
    console.log(message);  // Prints 'Hello, world!'.
  });
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) =&gt; {
    parentPort.postMessage(message);
  });
}
</code></pre>
<pre><code class="language-cjs">const { Worker, isMainThread, parentPort } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) =&gt; {
    console.log(message);  // Prints 'Hello, world!'.
  });
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) =&gt; {
    parentPort.postMessage(message);
  });
}
</code></pre>
<h2><code>worker_threads.postMessageToThread(threadId, value[, transferList][, timeout])</code></h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>threadId</code> {number} The target thread ID. If the thread ID is invalid, a
<a href="errors.md#err_worker_messaging_failed"><code>ERR_WORKER_MESSAGING_FAILED</code></a> error will be thrown. If the target thread ID is the current thread ID,
a <a href="errors.md#err_worker_messaging_same_thread"><code>ERR_WORKER_MESSAGING_SAME_THREAD</code></a> error will be thrown.</li>
<li><code>value</code> {any} The value to send.</li>
<li><code>transferList</code> {Object[]} If one or more <code>MessagePort</code>-like objects are passed in <code>value</code>,
a <code>transferList</code> is required for those items or <a href="errors.md#err_missing_message_port_in_transfer_list"><code>ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST</code></a> is thrown.
See <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> for more information.</li>
<li><code>timeout</code> {number} Time to wait for the message to be delivered in milliseconds.
By default it's <code>undefined</code>, which means wait forever. If the operation times out,
a <a href="errors.md#err_worker_messaging_timeout"><code>ERR_WORKER_MESSAGING_TIMEOUT</code></a> error is thrown.</li>
<li>Returns: {Promise} A promise which is fulfilled if the message was successfully processed by destination thread.</li>
</ul>
<p>Sends a value to another worker, identified by its thread ID.</p>
<p>If the target thread has no listener for the <code>workerMessage</code> event, then the operation will throw
a <a href="errors.md#err_worker_messaging_failed"><code>ERR_WORKER_MESSAGING_FAILED</code></a> error.</p>
<p>If the target thread threw an error while processing the <code>workerMessage</code> event, then the operation will throw
a <a href="errors.md#err_worker_messaging_errored"><code>ERR_WORKER_MESSAGING_ERRORED</code></a> error.</p>
<p>This method should be used when the target thread is not the direct
parent or child of the current thread.
If the two threads are parent-children, use the <a href="#workerpostmessagevalue-transferlist"><code>require('node:worker_threads').parentPort.postMessage()</code></a>
and the <a href="#workerpostmessagevalue-transferlist"><code>worker.postMessage()</code></a> to let the threads communicate.</p>
<p>The example below shows the use of <code>postMessageToThread</code>: it creates 10 nested threads,
the last one will try to communicate with the main thread.</p>
<pre><code class="language-mjs">import process from 'node:process';
import {
  postMessageToThread,
  threadId,
  workerData,
  Worker,
} from 'node:worker_threads';

const channel = new BroadcastChannel('sync');
const level = workerData?.level ?? 0;

if (level &lt; 10) {
  const worker = new Worker(new URL(import.meta.url), {
    workerData: { level: level + 1 },
  });
}

if (level === 0) {
  process.on('workerMessage', (value, source) =&gt; {
    console.log(`${source} -&gt; ${threadId}:`, value);
    postMessageToThread(source, { message: 'pong' });
  });
} else if (level === 10) {
  process.on('workerMessage', (value, source) =&gt; {
    console.log(`${source} -&gt; ${threadId}:`, value);
    channel.postMessage('done');
    channel.close();
  });

  await postMessageToThread(0, { message: 'ping' });
}

channel.onmessage = channel.close;
</code></pre>
<pre><code class="language-cjs">const {
  postMessageToThread,
  threadId,
  workerData,
  Worker,
} = require('node:worker_threads');

const channel = new BroadcastChannel('sync');
const level = workerData?.level ?? 0;

if (level &lt; 10) {
  const worker = new Worker(__filename, {
    workerData: { level: level + 1 },
  });
}

if (level === 0) {
  process.on('workerMessage', (value, source) =&gt; {
    console.log(`${source} -&gt; ${threadId}:`, value);
    postMessageToThread(source, { message: 'pong' });
  });
} else if (level === 10) {
  process.on('workerMessage', (value, source) =&gt; {
    console.log(`${source} -&gt; ${threadId}:`, value);
    channel.postMessage('done');
    channel.close();
  });

  postMessageToThread(0, { message: 'ping' });
}

channel.onmessage = channel.close;
</code></pre>
<h2><code>worker_threads.receiveMessageOnPort(port)</code></h2>
<ul>
<li>
<p><code>port</code> {MessagePort|BroadcastChannel}</p>
</li>
<li>
<p>Returns: {Object|undefined}</p>
</li>
</ul>
<p>Receive a single message from a given <code>MessagePort</code>. If no message is available,
<code>undefined</code> is returned, otherwise an object with a single <code>message</code> property
that contains the message payload, corresponding to the oldest message in the
<code>MessagePort</code>'s queue.</p>
<pre><code class="language-mjs">import { MessageChannel, receiveMessageOnPort } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'world' });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'world' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefined
</code></pre>
<pre><code class="language-cjs">const { MessageChannel, receiveMessageOnPort } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'world' });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'world' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefined
</code></pre>
<p>When this function is used, no <code>'message'</code> event is emitted and the
<code>onmessage</code> listener is not invoked.</p>
<h2><code>worker_threads.resourceLimits</code></h2>
<ul>
<li>Type: {Object}
<ul>
<li><code>maxYoungGenerationSizeMb</code> {number}</li>
<li><code>maxOldGenerationSizeMb</code> {number}</li>
<li><code>codeRangeSizeMb</code> {number}</li>
<li><code>stackSizeMb</code> {number}</li>
</ul>
</li>
</ul>
<p>Provides the set of JS engine resource constraints inside this Worker thread.
If the <code>resourceLimits</code> option was passed to the <a href="#class-worker"><code>Worker</code></a> constructor,
this matches its values.</p>
<p>If this is used in the main thread, its value is an empty object.</p>
<h2><code>worker_threads.SHARE_ENV</code></h2>
<ul>
<li>Type: {symbol}</li>
</ul>
<p>A special value that can be passed as the <code>env</code> option of the <a href="#class-worker"><code>Worker</code></a>
constructor, to indicate that the current thread and the Worker thread should
share read and write access to the same set of environment variables.</p>
<pre><code class="language-mjs">import process from 'node:process';
import { Worker, SHARE_ENV } from 'node:worker_threads';
new Worker('process.env.SET_IN_WORKER = &quot;foo&quot;', { eval: true, env: SHARE_ENV })
  .once('exit', () =&gt; {
    console.log(process.env.SET_IN_WORKER);  // Prints 'foo'.
  });
</code></pre>
<pre><code class="language-cjs">const { Worker, SHARE_ENV } = require('node:worker_threads');
new Worker('process.env.SET_IN_WORKER = &quot;foo&quot;', { eval: true, env: SHARE_ENV })
  .once('exit', () =&gt; {
    console.log(process.env.SET_IN_WORKER);  // Prints 'foo'.
  });
</code></pre>
<h2><code>worker_threads.setEnvironmentData(key[, value])</code></h2>
<ul>
<li><code>key</code> {any} Any arbitrary, cloneable JavaScript value that can be used as a
{Map} key.</li>
<li><code>value</code> {any} Any arbitrary, cloneable JavaScript value that will be cloned
and passed automatically to all new <code>Worker</code> instances. If <code>value</code> is passed
as <code>undefined</code>, any previously set value for the <code>key</code> will be deleted.</li>
</ul>
<p>The <code>worker.setEnvironmentData()</code> API sets the content of
<code>worker.getEnvironmentData()</code> in the current thread and all new <code>Worker</code>
instances spawned from the current context.</p>
<h2><code>worker_threads.threadId</code></h2>
<ul>
<li>Type: {integer}</li>
</ul>
<p>An integer identifier for the current thread. On the corresponding worker object
(if there is any), it is available as <a href="#workerthreadid"><code>worker.threadId</code></a>.
This value is unique for each <a href="#class-worker"><code>Worker</code></a> instance inside a single process.</p>
<h2><code>worker_threads.threadName</code></h2>
<ul>
<li>{string|null}</li>
</ul>
<p>A string identifier for the current thread or null if the thread is not running.
On the corresponding worker object (if there is any), it is available as <a href="#workerthreadname"><code>worker.threadName</code></a>.</p>
<h2><code>worker_threads.workerData</code></h2>
<p>An arbitrary JavaScript value that contains a clone of the data passed
to this thread's <code>Worker</code> constructor.</p>
<p>The data is cloned as if using <a href="#portpostmessagevalue-transferlist"><code>postMessage()</code></a>,
according to the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>.</p>
<pre><code class="language-mjs">import { Worker, isMainThread, workerData } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url), { workerData: 'Hello, world!' });
} else {
  console.log(workerData);  // Prints 'Hello, world!'.
}
</code></pre>
<pre><code class="language-cjs">const { Worker, isMainThread, workerData } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello, world!' });
} else {
  console.log(workerData);  // Prints 'Hello, world!'.
}
</code></pre>
<h2><code>worker_threads.locks</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li>{LockManager}</li>
</ul>
<p>An instance of a <a href="#class-lockmanager"><code>LockManager</code></a> that can be used to coordinate
access to resources that may be shared across multiple threads within the same
process. The API mirrors the semantics of the
<a href="https://developer.mozilla.org/en-US/docs/Web/API/LockManager">browser <code>LockManager</code></a></p>
<h3>Class: <code>Lock</code></h3>
<p>The <code>Lock</code> interface provides information about a lock that has been granted via
<a href="#locksrequestname-options-callback"><code>locks.request()</code></a></p>
<h4><code>lock.name</code></h4>
<ul>
<li>{string}</li>
</ul>
<p>The name of the lock.</p>
<h4><code>lock.mode</code></h4>
<ul>
<li>{string}</li>
</ul>
<p>The mode of the lock. Either <code>shared</code> or <code>exclusive</code>.</p>
<h3>Class: <code>LockManager</code></h3>
<p>The <code>LockManager</code> interface provides methods for requesting and introspecting
locks. To obtain a <code>LockManager</code> instance use</p>
<pre><code class="language-mjs">import { locks } from 'node:worker_threads';
</code></pre>
<pre><code class="language-cjs">const { locks } = require('node:worker_threads');
</code></pre>
<p>This implementation matches the <a href="https://developer.mozilla.org/en-US/docs/Web/API/LockManager">browser <code>LockManager</code></a> API.</p>
<h4><code>locks.request(name[, options], callback)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>options</code> {Object}
<ul>
<li><code>mode</code> {string} Either <code>'exclusive'</code> or <code>'shared'</code>. <strong>Default:</strong> <code>'exclusive'</code>.</li>
<li><code>ifAvailable</code> {boolean} If <code>true</code>, the request will only be granted if the
lock is not already held. If it cannot be granted, <code>callback</code> will be
invoked with <code>null</code> instead of a <code>Lock</code> instance. <strong>Default:</strong> <code>false</code>.</li>
<li><code>steal</code> {boolean} If <code>true</code>, any existing locks with the same name are
released and the request is granted immediately, pre-empting any queued
requests. <strong>Default:</strong> <code>false</code>.</li>
<li><code>signal</code> {AbortSignal} that can be used to abort a
pending (but not yet granted) lock request.</li>
</ul>
</li>
<li><code>callback</code> {Function} Invoked once the lock is granted (or immediately with
<code>null</code> if <code>ifAvailable</code> is <code>true</code> and the lock is unavailable). The lock is
released automatically when the function returns, or—if the function returns
a promise—when that promise settles.</li>
<li>Returns: {Promise} Resolves once the lock has been released.</li>
</ul>
<pre><code class="language-mjs">import { locks } from 'node:worker_threads';

await locks.request('my_resource', async (lock) =&gt; {
  // The lock has been acquired.
});
// The lock has been released here.
</code></pre>
<pre><code class="language-cjs">const { locks } = require('node:worker_threads');

locks.request('my_resource', async (lock) =&gt; {
  // The lock has been acquired.
}).then(() =&gt; {
  // The lock has been released here.
});
</code></pre>
<h4><code>locks.query()</code></h4>
<ul>
<li>Returns: {Promise}</li>
</ul>
<p>Resolves with a <code>LockManagerSnapshot</code> describing the currently held and pending
locks for the current process.</p>
<pre><code class="language-mjs">import { locks } from 'node:worker_threads';

const snapshot = await locks.query();
for (const lock of snapshot.held) {
  console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
}
for (const pending of snapshot.pending) {
  console.log(`pending lock: name ${pending.name}, mode ${pending.mode}`);
}
</code></pre>
<pre><code class="language-cjs">const { locks } = require('node:worker_threads');

locks.query().then((snapshot) =&gt; {
  for (const lock of snapshot.held) {
    console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
  }
  for (const pending of snapshot.pending) {
    console.log(`pending lock: name ${pending.name}, mode ${pending.mode}`);
  }
});
</code></pre>
<h2>Class: <code>BroadcastChannel extends EventTarget</code></h2>
<p>Instances of <code>BroadcastChannel</code> allow asynchronous one-to-many communication
with all other <code>BroadcastChannel</code> instances bound to the same channel name.</p>
<pre><code class="language-mjs">import {
  isMainThread,
  BroadcastChannel,
  Worker,
} from 'node:worker_threads';

const bc = new BroadcastChannel('hello');

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) =&gt; {
    console.log(event.data);
    if (++c === 10) bc.close();
  };
  for (let n = 0; n &lt; 10; n++)
    new Worker(new URL(import.meta.url));
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}
</code></pre>
<pre><code class="language-cjs">const {
  isMainThread,
  BroadcastChannel,
  Worker,
} = require('node:worker_threads');

const bc = new BroadcastChannel('hello');

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) =&gt; {
    console.log(event.data);
    if (++c === 10) bc.close();
  };
  for (let n = 0; n &lt; 10; n++)
    new Worker(__filename);
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}
</code></pre>
<h3><code>new BroadcastChannel(name)</code></h3>
<ul>
<li><code>name</code> {any} The name of the channel to connect to. Any JavaScript value
that can be converted to a string using <code>`${name}`</code> is permitted.</li>
</ul>
<h3><code>broadcastChannel.close()</code></h3>
<p>Closes the <code>BroadcastChannel</code> connection.</p>
<h3><code>broadcastChannel.onmessage</code></h3>
<ul>
<li>Type: {Function} Invoked with a single <code>MessageEvent</code> argument
when a message is received.</li>
</ul>
<h3><code>broadcastChannel.onmessageerror</code></h3>
<ul>
<li>Type: {Function} Invoked with a received message cannot be
deserialized.</li>
</ul>
<h3><code>broadcastChannel.postMessage(message)</code></h3>
<ul>
<li><code>message</code> {any} Any cloneable JavaScript value.</li>
</ul>
<h3><code>broadcastChannel.ref()</code></h3>
<p>Opposite of <code>unref()</code>. Calling <code>ref()</code> on a previously <code>unref()</code>ed
BroadcastChannel does <em>not</em> let the program exit if it's the only active handle
left (the default behavior). If the port is <code>ref()</code>ed, calling <code>ref()</code> again
has no effect.</p>
<h3><code>broadcastChannel.unref()</code></h3>
<p>Calling <code>unref()</code> on a BroadcastChannel allows the thread to exit if this
is the only active handle in the event system. If the BroadcastChannel is
already <code>unref()</code>ed calling <code>unref()</code> again has no effect.</p>
<h2>Class: <code>MessageChannel</code></h2>
<p>Instances of the <code>worker.MessageChannel</code> class represent an asynchronous,
two-way communications channel.
The <code>MessageChannel</code> has no methods of its own. <code>new MessageChannel()</code>
yields an object with <code>port1</code> and <code>port2</code> properties, which refer to linked
<a href="#class-messageport"><code>MessagePort</code></a> instances.</p>
<pre><code class="language-mjs">import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) =&gt; console.log('received', message));
port2.postMessage({ foo: 'bar' });
// Prints: received { foo: 'bar' } from the `port1.on('message')` listener
</code></pre>
<pre><code class="language-cjs">const { MessageChannel } = require('node:worker_threads');

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) =&gt; console.log('received', message));
port2.postMessage({ foo: 'bar' });
// Prints: received { foo: 'bar' } from the `port1.on('message')` listener
</code></pre>
<h2>Class: <code>MessagePort</code></h2>
<ul>
<li>Extends: {EventTarget}</li>
</ul>
<p>Instances of the <code>worker.MessagePort</code> class represent one end of an
asynchronous, two-way communications channel. It can be used to transfer
structured data, memory regions and other <code>MessagePort</code>s between different
<a href="#class-worker"><code>Worker</code></a>s.</p>
<p>This implementation matches <a href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort">browser <code>MessagePort</code></a>s.</p>
<h3>Event: <code>'close'</code></h3>
<p>The <code>'close'</code> event is emitted once either side of the channel has been
disconnected.</p>
<pre><code class="language-mjs">import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

// Prints:
//   foobar
//   closed!
port2.on('message', (message) =&gt; console.log(message));
port2.once('close', () =&gt; console.log('closed!'));

port1.postMessage('foobar');
port1.close();
</code></pre>
<pre><code class="language-cjs">const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

// Prints:
//   foobar
//   closed!
port2.on('message', (message) =&gt; console.log(message));
port2.once('close', () =&gt; console.log('closed!'));

port1.postMessage('foobar');
port1.close();
</code></pre>
<h3>Event: <code>'message'</code></h3>
<ul>
<li><code>value</code> {any} The transmitted value</li>
</ul>
<p>The <code>'message'</code> event is emitted for any incoming message, containing the cloned
input of <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a>.</p>
<p>Listeners on this event receive a clone of the <code>value</code> parameter as passed
to <code>postMessage()</code> and no further arguments.</p>
<h3>Event: <code>'messageerror'</code></h3>
<ul>
<li><code>error</code> {Error} An Error object</li>
</ul>
<p>The <code>'messageerror'</code> event is emitted when deserializing a message failed.</p>
<p>Currently, this event is emitted when there is an error occurring while
instantiating the posted JS object on the receiving end. Such situations
are rare, but can happen, for instance, when certain Node.js API objects
are received in a <code>vm.Context</code> (where Node.js APIs are currently
unavailable).</p>
<h3><code>port.close()</code></h3>
<p>Disables further sending of messages on either side of the connection.
This method can be called when no further communication will happen over this
<code>MessagePort</code>.</p>
<p>The <a href="#event-close"><code>'close'</code> event</a> is emitted on both <code>MessagePort</code> instances that
are part of the channel.</p>
<h3><code>port.postMessage(value[, transferList])</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li><code>transferList</code> {Object[]}</li>
</ul>
<p>Sends a JavaScript value to the receiving side of this channel.
<code>value</code> is transferred in a way which is compatible with
the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>.</p>
<p>In particular, the significant differences to <code>JSON</code> are:</p>
<ul>
<li><code>value</code> may contain circular references.</li>
<li><code>value</code> may contain instances of builtin JS types such as <code>RegExp</code>s,
<code>BigInt</code>s, <code>Map</code>s, <code>Set</code>s, etc.</li>
<li><code>value</code> may contain typed arrays, both using <code>ArrayBuffer</code>s
and <code>SharedArrayBuffer</code>s.</li>
<li><code>value</code> may contain <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module"><code>WebAssembly.Module</code></a> instances.</li>
<li><code>value</code> may not contain native (C++-backed) objects other than:
<ul>
<li>{CryptoKey}s,</li>
<li>{FileHandle}s,</li>
<li>{Histogram}s,</li>
<li>{KeyObject}s,</li>
<li>{MessagePort}s,</li>
<li>{net.BlockList}s,</li>
<li>{net.Server}s (TCP only, when listed in <code>transferList</code>),</li>
<li>{net.Socket}s (TCP only, when listed in <code>transferList</code>),</li>
<li>{net.SocketAddress}es,</li>
<li>{X509Certificate}s.</li>
</ul>
</li>
</ul>
<pre><code class="language-mjs">import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) =&gt; console.log(message));

const circularData = {};
circularData.foo = circularData;
// Prints: { foo: [Circular] }
port2.postMessage(circularData);
</code></pre>
<pre><code class="language-cjs">const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) =&gt; console.log(message));

const circularData = {};
circularData.foo = circularData;
// Prints: { foo: [Circular] }
port2.postMessage(circularData);
</code></pre>
<p><code>transferList</code> may be a list of {ArrayBuffer}, <a href="#class-messageport"><code>MessagePort</code></a>,
<a href="fs.md#class-filehandle"><code>FileHandle</code></a>, {net.Server}, {net.Socket}, and {net.BoundSocket} objects.
After transferring, they are not usable on the sending side of the channel
anymore (even if they are not contained in <code>value</code>).</p>
<p>Transferring a {net.Server} moves its listening socket — together with any
pending connections in the accept queue — to the receiving thread's event loop.
Transferring a {net.Socket} moves a single connection; the socket must be a
freshly accepted or created TCP connection that has not yet started reading and
has no buffered data, otherwise <code>postMessage()</code> throws
<code>ERR_WORKER_HANDLE_NOT_TRANSFERABLE</code>. This makes it possible to accept
connections on one thread and distribute them across a pool of worker threads.
Transferring a {net.BoundSocket} moves an un-adopted pre-bound socket, so a
port can be reserved synchronously on one thread and adopted on another.
Only TCP handles are supported.</p>
<p>If <code>value</code> contains {SharedArrayBuffer} instances, those are accessible
from either thread. They cannot be listed in <code>transferList</code>.</p>
<p><code>value</code> may still contain <code>ArrayBuffer</code> instances that are not in
<code>transferList</code>; in that case, the underlying memory is copied rather than moved.</p>
<pre><code class="language-mjs">import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) =&gt; console.log(message));

const uint8Array = new Uint8Array([ 1, 2, 3, 4 ]);
// This posts a copy of `uint8Array`:
port2.postMessage(uint8Array);
// This does not copy data, but renders `uint8Array` unusable:
port2.postMessage(uint8Array, [ uint8Array.buffer ]);

// The memory for the `sharedUint8Array` is accessible from both the
// original and the copy received by `.on('message')`:
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
port2.postMessage(sharedUint8Array);

// This transfers a freshly created message port to the receiver.
// This can be used, for example, to create communication channels between
// multiple `Worker` threads that are children of the same parent thread.
const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [ otherChannel.port1 ]);
</code></pre>
<pre><code class="language-cjs">const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) =&gt; console.log(message));

const uint8Array = new Uint8Array([ 1, 2, 3, 4 ]);
// This posts a copy of `uint8Array`:
port2.postMessage(uint8Array);
// This does not copy data, but renders `uint8Array` unusable:
port2.postMessage(uint8Array, [ uint8Array.buffer ]);

// The memory for the `sharedUint8Array` is accessible from both the
// original and the copy received by `.on('message')`:
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
port2.postMessage(sharedUint8Array);

// This transfers a freshly created message port to the receiver.
// This can be used, for example, to create communication channels between
// multiple `Worker` threads that are children of the same parent thread.
const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [ otherChannel.port1 ]);
</code></pre>
<p>The message object is cloned immediately, and can be modified after
posting without having side effects.</p>
<p>For more information on the serialization and deserialization mechanisms
behind this API, see the <a href="v8.md#serialization-api">serialization API of the <code>node:v8</code> module</a>.</p>
<h4>Considerations when transferring TypedArrays and Buffers</h4>
<p>All {TypedArray|Buffer} instances are views over an underlying
{ArrayBuffer}. That is, it is the <code>ArrayBuffer</code> that actually stores
the raw data while the <code>TypedArray</code> and <code>Buffer</code> objects provide a
way of viewing and manipulating the data. It is possible and common
for multiple views to be created over the same <code>ArrayBuffer</code> instance.
Great care must be taken when using a transfer list to transfer an
<code>ArrayBuffer</code> as doing so causes all <code>TypedArray</code> and <code>Buffer</code>
instances that share that same <code>ArrayBuffer</code> to become unusable.</p>
<pre><code class="language-js">const ab = new ArrayBuffer(10);

const u1 = new Uint8Array(ab);
const u2 = new Uint16Array(ab);

console.log(u2.length);  // prints 5

port.postMessage(u1, [u1.buffer]);

console.log(u2.length);  // prints 0
</code></pre>
<p>For <code>Buffer</code> instances, specifically, whether the underlying
<code>ArrayBuffer</code> can be transferred or cloned depends entirely on how
instances were created, which often cannot be reliably determined.</p>
<p>An <code>ArrayBuffer</code> can be marked with <a href="#worker_threadsmarkasuntransferableobject"><code>markAsUntransferable()</code></a> to indicate
that it should always be cloned and never transferred.</p>
<p>Depending on how a <code>Buffer</code> instance was created, it may or may
not own its underlying <code>ArrayBuffer</code>. An <code>ArrayBuffer</code> must not
be transferred unless it is known that the <code>Buffer</code> instance
owns it. In particular, for <code>Buffer</code>s created from the internal
<code>Buffer</code> pool (using, for instance <code>Buffer.from()</code> or <code>Buffer.allocUnsafe()</code>),
transferring them is not possible and they are always cloned,
which sends a copy of the entire <code>Buffer</code> pool.
This behavior may come with unintended higher memory
usage and possible security concerns.</p>
<p>See <a href="buffer.md#static-method-bufferallocunsafesize-alignment"><code>Buffer.allocUnsafe()</code></a> for more details on <code>Buffer</code> pooling.</p>
<p>The <code>ArrayBuffer</code>s for <code>Buffer</code> instances created using
<code>Buffer.alloc()</code> or <code>Buffer.allocUnsafeSlow()</code> can always be
transferred but doing so renders all other existing views of
those <code>ArrayBuffer</code>s unusable.</p>
<h4>Considerations when cloning objects with prototypes, classes, and accessors</h4>
<p>Because object cloning uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>,
non-enumerable properties, property accessors, and object prototypes are
not preserved. In particular, {Buffer} objects will be read as
plain {Uint8Array}s on the receiving side, and instances of JavaScript
classes will be cloned as plain JavaScript objects.</p>
<pre><code class="language-js">const b = Symbol('b');

class Foo {
  #a = 1;
  constructor() {
    this[b] = 2;
    this.c = 3;
  }

  get d() { return this.#a + 3; }
}

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) =&gt; console.log(data);

port2.postMessage(new Foo());

// Prints: { c: 3 }
</code></pre>
<p>Some built-in objects cannot be cloned at all. For example, posting a
<code>URL</code> object throws a <code>DataCloneError</code>:</p>
<pre><code class="language-js">const { port1, port2 } = new MessageChannel();

port2.postMessage(new URL('https://example.org'));
// Throws DataCloneError: Cannot clone object of unsupported type.
</code></pre>
<h3><code>port.hasRef()</code></h3>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>If true, the <code>MessagePort</code> object will keep the Node.js event loop active.</p>
<h3><code>port.ref()</code></h3>
<p>Opposite of <code>unref()</code>. Calling <code>ref()</code> on a previously <code>unref()</code>ed port does
<em>not</em> let the program exit if it's the only active handle left (the default
behavior). If the port is <code>ref()</code>ed, calling <code>ref()</code> again has no effect.</p>
<p>If listeners are attached or removed using <code>.on('message')</code>, the port
is <code>ref()</code>ed and <code>unref()</code>ed automatically depending on whether
listeners for the event exist.</p>
<h3><code>port.start()</code></h3>
<p>Starts receiving messages on this <code>MessagePort</code>. When using this port
as an event emitter, this is called automatically once <code>'message'</code>
listeners are attached.</p>
<p>This method exists for parity with the Web <code>MessagePort</code> API. In Node.js,
it is only useful for ignoring messages when no event listener is present.
Node.js also diverges in its handling of <code>.onmessage</code>. Setting it
automatically calls <code>.start()</code>, but unsetting it lets messages queue up
until a new handler is set or the port is discarded.</p>
<h3><code>port.unref()</code></h3>
<p>Calling <code>unref()</code> on a port allows the thread to exit if this is the only
active handle in the event system. If the port is already <code>unref()</code>ed calling
<code>unref()</code> again has no effect.</p>
<p>If listeners are attached or removed using <code>.on('message')</code>, the port is
<code>ref()</code>ed and <code>unref()</code>ed automatically depending on whether
listeners for the event exist.</p>
<h2>Class: <code>Worker</code></h2>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>The <code>Worker</code> class represents an independent JavaScript execution thread.
Most Node.js APIs are available inside of it.</p>
<p>Notable differences inside a Worker environment are:</p>
<ul>
<li>The <a href="process.md#processstdin"><code>process.stdin</code></a>, <a href="process.md#processstdout"><code>process.stdout</code></a>, and <a href="process.md#processstderr"><code>process.stderr</code></a>
streams may be redirected by the parent thread.</li>
<li>The <a href="#worker_threadsismainthread"><code>require('node:worker_threads').isMainThread</code></a> property is set to <code>false</code>.</li>
<li>The <a href="#worker_threadsparentport"><code>require('node:worker_threads').parentPort</code></a> message port is available.</li>
<li><a href="process.md#processexitcode"><code>process.exit()</code></a> does not stop the whole program, just the single thread,
and <a href="process.md#processabort"><code>process.abort()</code></a> is not available.</li>
<li><a href="process.md#processchdirdirectory"><code>process.chdir()</code></a> and <code>process</code> methods that set group or user ids
are not available.</li>
<li><a href="process.md#processenv"><code>process.env</code></a> is a copy of the parent thread's environment variables,
unless otherwise specified. Changes to one copy are not visible in other
threads, and are not visible to native add-ons (unless
<a href="#worker_threadsshare_env"><code>worker.SHARE_ENV</code></a> is passed as the <code>env</code> option to the
<a href="#class-worker"><code>Worker</code></a> constructor). On Windows, unlike the main thread, a copy of the
environment variables operates in a case-sensitive manner.</li>
<li><a href="process.md#processtitle"><code>process.title</code></a> cannot be modified.</li>
<li>Signals are not delivered through <a href="process.md#signal-events"><code>process.on('...')</code></a>.</li>
<li>Execution may stop at any point as a result of <a href="#workerterminate"><code>worker.terminate()</code></a>
being invoked.</li>
<li>IPC channels from parent processes are not accessible.</li>
<li>The <a href="tracing.md"><code>trace_events</code></a> module is not supported.</li>
<li>Native add-ons can only be loaded from multiple threads if they fulfill
<a href="addons.md#worker-support">certain conditions</a>.</li>
</ul>
<p>Creating <code>Worker</code> instances inside of other <code>Worker</code>s is possible.</p>
<p>Like <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API">Web Workers</a> and the <a href="cluster.md"><code>node:cluster</code> module</a>, two-way communication
can be achieved through inter-thread message passing. Internally, a <code>Worker</code> has
a built-in pair of <a href="#class-messageport"><code>MessagePort</code></a>s that are already associated with each
other when the <code>Worker</code> is created. While the <code>MessagePort</code> object on the parent
side is not directly exposed, its functionalities are exposed through
<a href="#workerpostmessagevalue-transferlist"><code>worker.postMessage()</code></a> and the <a href="#event-message_1"><code>worker.on('message')</code></a> event
on the <code>Worker</code> object for the parent thread.</p>
<p>To create custom messaging channels (which is encouraged over using the default
global channel because it facilitates separation of concerns), users can create
a <code>MessageChannel</code> object on either thread and pass one of the
<code>MessagePort</code>s on that <code>MessageChannel</code> to the other thread through a
pre-existing channel, such as the global one.</p>
<p>See <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> for more information on how messages are passed,
and what kind of JavaScript values can be successfully transported through
the thread barrier.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort,
} from 'node:worker_threads';
if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) =&gt; {
    console.log('received:', value);
  });
} else {
  parentPort.once('message', (value) =&gt; {
    assert(value.hereIsYourPort instanceof MessagePort);
    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort,
} = require('node:worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename);
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) =&gt; {
    console.log('received:', value);
  });
} else {
  parentPort.once('message', (value) =&gt; {
    assert(value.hereIsYourPort instanceof MessagePort);
    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}
</code></pre>
<h3><code>new Worker(filename[, options])</code></h3>
<ul>
<li><code>filename</code> {string|URL} The path to the Worker's main script or module. Must
be either an absolute path or a relative path (i.e. relative to the
current working directory) starting with <code>./</code> or <code>../</code>, or a WHATWG <code>URL</code>
object using <code>file:</code> or <code>data:</code> protocol.
When using a <a href="https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Schemes/data"><code>data:</code> URL</a>, the data is interpreted based on MIME type using
the <a href="esm.md#data-imports">ECMAScript module loader</a>.
If <code>options.eval</code> is <code>true</code>, this is a string containing JavaScript code
rather than a path.</li>
<li><code>options</code> {Object}
<ul>
<li><code>argv</code> {any[]} List of arguments which would be stringified and appended to
<code>process.argv</code> in the worker. This is mostly similar to the <code>workerData</code>
but the values are available on the global <code>process.argv</code> as if they
were passed as CLI options to the script.</li>
<li><code>env</code> {Object} If set, specifies the initial value of <code>process.env</code> inside
the Worker thread. As a special value, <a href="#worker_threadsshare_env"><code>worker.SHARE_ENV</code></a> may be used
to specify that the parent thread and the child thread should share their
environment variables; in that case, changes to one thread's <code>process.env</code>
object affect the other thread as well. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>eval</code> {boolean} If <code>true</code> and the first argument is a <code>string</code>, interpret
the first argument to the constructor as a script that is executed once the
worker is online.</li>
<li><code>execArgv</code> {string[]} List of node CLI options passed to the worker.
V8 options (such as <code>--max-old-space-size</code>) and options that affect the
process (such as <code>--title</code>) are not supported. If set, this is provided
as <a href="process.md#processexecargv"><code>process.execArgv</code></a> inside the worker. By default, options are
inherited from the parent thread.
Passing an explicit <code>execArgv</code> (including an empty array) replaces that
inheritance: the worker receives only the listed flags. Under the
<a href="permissions.md#permission-model">Permission Model</a>, that means an explicit
<code>execArgv</code> can drop the parent's <code>--permission</code> / <code>--allow-*</code> grants.
Omit <code>execArgv</code> to keep the parent's CLI flags. This is intended. See
<a href="permissions.md#limitations-and-known-issues">Permission Model limitations</a>.</li>
<li><code>stdin</code> {boolean} If this is set to <code>true</code>, then <code>worker.stdin</code>
provides a writable stream whose contents appear as <code>process.stdin</code>
inside the Worker. By default, no data is provided.</li>
<li><code>stdout</code> {boolean} If this is set to <code>true</code>, then <code>worker.stdout</code> is
not automatically piped through to <code>process.stdout</code> in the parent.</li>
<li><code>stderr</code> {boolean} If this is set to <code>true</code>, then <code>worker.stderr</code> is
not automatically piped through to <code>process.stderr</code> in the parent.</li>
<li><code>workerData</code> {any} Any JavaScript value that is cloned and made
available as <a href="#worker_threadsworkerdata"><code>require('node:worker_threads').workerData</code></a>. The cloning
occurs as described in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>, and an error
is thrown if the object cannot be cloned (e.g. because it contains
<code>function</code>s).</li>
<li><code>trackUnmanagedFds</code> {boolean} If this is set to <code>true</code>, then the Worker
tracks raw file descriptors managed through <a href="fs.md#fsopenpath-flags-mode-callback"><code>fs.open()</code></a> and
<a href="fs.md#fsclosefd-callback"><code>fs.close()</code></a>, and closes them when the Worker exits, similar to other
resources like network sockets or file descriptors managed through
the <a href="fs.md#class-filehandle"><code>FileHandle</code></a> API. This option is automatically inherited by all
nested <code>Worker</code>s. <strong>Default:</strong> <code>true</code>.</li>
<li><code>transferList</code> {Object[]} If one or more <code>MessagePort</code>-like objects
are passed in <code>workerData</code>, a <code>transferList</code> is required for those
items or <a href="errors.md#err_missing_message_port_in_transfer_list"><code>ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST</code></a> is thrown.
See <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> for more information.</li>
<li><code>resourceLimits</code> {Object} An optional set of resource limits for the new JS
engine instance. Reaching these limits leads to termination of the <code>Worker</code>
instance. These limits only affect the JS engine, and no external data,
including no <code>ArrayBuffer</code>s. Even if these limits are set, the process may
still abort if it encounters a global out-of-memory situation.
<ul>
<li><code>maxOldGenerationSizeMb</code> {number} The maximum size of the main heap in
MB. If the command-line argument <a href="cli.md#--max-old-space-sizesize-in-mib"><code>--max-old-space-size</code></a> is set, it
overrides this setting.</li>
<li><code>maxYoungGenerationSizeMb</code> {number} The maximum size of a heap space for
recently created objects. If the command-line argument
<a href="cli.md#--max-semi-space-sizesize-in-mib"><code>--max-semi-space-size</code></a> is set, it overrides this setting.</li>
<li><code>codeRangeSizeMb</code> {number} The size of a pre-allocated memory range
used for generated code.</li>
<li><code>stackSizeMb</code> {number} The default maximum stack size for the thread.
Small values may lead to unusable Worker instances. <strong>Default:</strong> <code>4</code>.</li>
</ul>
</li>
<li><code>name</code> {string} An optional <code>name</code> to be replaced in the thread name
and to the worker title for debugging/identification purposes,
making the final title as <code>[worker ${id}] ${name}</code>.
This parameter has a maximum allowed size, depending on the operating
system. If the provided name exceeds the limit, it will be truncated
<ul>
<li>Maximum sizes:
<ul>
<li>Windows: 32,767 characters</li>
<li>macOS: 64 characters</li>
<li>Linux: 16 characters</li>
<li>NetBSD: limited to <code>PTHREAD_MAX_NAMELEN_NP</code></li>
<li>FreeBSD and OpenBSD: limited to <code>MAXCOMLEN</code>
<strong>Default:</strong> <code>'WorkerThread'</code>.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>Event: <code>'error'</code></h3>
<ul>
<li><code>err</code> {any}</li>
</ul>
<p>The <code>'error'</code> event is emitted if the worker thread throws an uncaught
exception. In that case, the worker is terminated.</p>
<h3>Event: <code>'exit'</code></h3>
<ul>
<li><code>exitCode</code> {integer}</li>
</ul>
<p>The <code>'exit'</code> event is emitted once the worker has stopped. If the worker
exited by calling <a href="process.md#processexitcode"><code>process.exit()</code></a>, the <code>exitCode</code> parameter is the
passed exit code. If the worker was terminated, the <code>exitCode</code> parameter is
<code>1</code>.</p>
<p>This is the final event emitted by any <code>Worker</code> instance.</p>
<h3>Event: <code>'message'</code></h3>
<ul>
<li><code>value</code> {any} The transmitted value</li>
</ul>
<p>The <code>'message'</code> event is emitted when the worker thread has invoked
<a href="#workerpostmessagevalue-transferlist"><code>require('node:worker_threads').parentPort.postMessage()</code></a>.
See the <a href="#event-message"><code>port.on('message')</code></a> event for more details.</p>
<p>All messages sent from the worker thread are emitted before the
<a href="#event-exit"><code>'exit'</code> event</a> is emitted on the <code>Worker</code> object.</p>
<h3>Event: <code>'messageerror'</code></h3>
<ul>
<li><code>error</code> {Error} An Error object</li>
</ul>
<p>The <code>'messageerror'</code> event is emitted when deserializing a message failed.</p>
<h3>Event: <code>'online'</code></h3>
<p>The <code>'online'</code> event is emitted when the worker thread has started executing
JavaScript code.</p>
<h3><code>worker.cpuUsage([prev])</code></h3>
<ul>
<li>Returns: {Promise}</li>
</ul>
<p>This method returns a <code>Promise</code> that will resolve to an object identical to <a href="process.md#processthreadcpuusagepreviousvalue"><code>process.threadCpuUsage()</code></a>,
or reject with an <a href="errors.md#err_worker_not_running"><code>ERR_WORKER_NOT_RUNNING</code></a> error if the worker is no longer running.
This methods allows the statistics to be observed from outside the actual thread.</p>
<h3><code>worker.getHeapSnapshot([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>exposeInternals</code> {boolean} If true, expose internals in the heap snapshot.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>exposeNumericValues</code> {boolean} If true, expose numeric values in
artificial fields. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Promise} A promise for a Readable Stream containing
a V8 heap snapshot</li>
</ul>
<p>Returns a readable stream for a V8 snapshot of the current state of the Worker.
See <a href="v8.md#v8getheapsnapshotoptions"><code>v8.getHeapSnapshot()</code></a> for more details.</p>
<p>If the Worker thread is no longer running, which may occur before the
<a href="#event-exit"><code>'exit'</code> event</a> is emitted, the returned <code>Promise</code> is rejected
immediately with an <a href="errors.md#err_worker_not_running"><code>ERR_WORKER_NOT_RUNNING</code></a> error.</p>
<h3><code>worker.getHeapStatistics()</code></h3>
<ul>
<li>Returns: {Promise}</li>
</ul>
<p>This method returns a <code>Promise</code> that will resolve to an object identical to <a href="v8.md#v8getheapstatistics"><code>v8.getHeapStatistics()</code></a>,
or reject with an <a href="errors.md#err_worker_not_running"><code>ERR_WORKER_NOT_RUNNING</code></a> error if the worker is no longer running.
This methods allows the statistics to be observed from outside the actual thread.</p>
<h3><code>worker.performance</code></h3>
<p>An object that can be used to query performance information from a worker
instance.</p>
<h4><code>performance.eventLoopUtilization([utilization1[, utilization2]])</code></h4>
<ul>
<li><code>utilization1</code> {Object} The result of a previous call to
<code>eventLoopUtilization()</code>.</li>
<li><code>utilization2</code> {Object} The result of a previous call to
<code>eventLoopUtilization()</code> prior to <code>utilization1</code>.</li>
<li>Returns: {Object}
<ul>
<li><code>idle</code> {number}</li>
<li><code>active</code> {number}</li>
<li><code>utilization</code> {number}</li>
</ul>
</li>
</ul>
<p>The same call as <a href="perf_hooks.md#perf_hookseventlooputilizationutilization1-utilization2"><code>perf_hooks</code> <code>eventLoopUtilization()</code></a>, except the values
of the worker instance are returned.</p>
<p>One difference is that, unlike the main thread, bootstrapping within a worker
is done within the event loop. So the event loop utilization is
immediately available once the worker's script begins execution.</p>
<p>An <code>idle</code> time that does not increase does not indicate that the worker is
stuck in bootstrap. The following example shows how the worker's entire
lifetime never accumulates any <code>idle</code> time, but is still able to process
messages.</p>
<pre><code class="language-mjs">import { Worker, isMainThread, parentPort } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  setInterval(() =&gt; {
    worker.postMessage('hi');
    console.log(worker.performance.eventLoopUtilization());
  }, 100).unref();
} else {
  parentPort.on('message', () =&gt; console.log('msg')).unref();
  (function r(n) {
    if (--n &lt; 0) return;
    const t = Date.now();
    while (Date.now() - t &lt; 300);
    setImmediate(r, n);
  })(10);
}
</code></pre>
<pre><code class="language-cjs">const { Worker, isMainThread, parentPort } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  setInterval(() =&gt; {
    worker.postMessage('hi');
    console.log(worker.performance.eventLoopUtilization());
  }, 100).unref();
} else {
  parentPort.on('message', () =&gt; console.log('msg')).unref();
  (function r(n) {
    if (--n &lt; 0) return;
    const t = Date.now();
    while (Date.now() - t &lt; 300);
    setImmediate(r, n);
  })(10);
}
</code></pre>
<p>The event loop utilization of a worker is available only after the <a href="#event-online"><code>'online'</code>
event</a> emitted, and if called before this, or after the <a href="#event-exit"><code>'exit'</code>
event</a>, then all properties have the value of <code>0</code>.</p>
<h3><code>worker.postMessage(value[, transferList])</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li><code>transferList</code> {Object[]}</li>
</ul>
<p>Send a message to the worker that is received via
<a href="#event-message"><code>require('node:worker_threads').parentPort.on('message')</code></a>.
See <a href="#portpostmessagevalue-transferlist"><code>port.postMessage()</code></a> for more details.</p>
<h3><code>worker.ref()</code></h3>
<p>Opposite of <code>unref()</code>, calling <code>ref()</code> on a previously <code>unref()</code>ed worker does
<em>not</em> let the program exit if it's the only active handle left (the default
behavior). If the worker is <code>ref()</code>ed, calling <code>ref()</code> again has
no effect.</p>
<h3><code>worker.resourceLimits</code></h3>
<ul>
<li>Type: {Object}
<ul>
<li><code>maxYoungGenerationSizeMb</code> {number}</li>
<li><code>maxOldGenerationSizeMb</code> {number}</li>
<li><code>codeRangeSizeMb</code> {number}</li>
<li><code>stackSizeMb</code> {number}</li>
</ul>
</li>
</ul>
<p>Provides the set of JS engine resource constraints for this Worker thread.
If the <code>resourceLimits</code> option was passed to the <a href="#class-worker"><code>Worker</code></a> constructor,
this matches its values.</p>
<p>If the worker has stopped, the return value is an empty object.</p>
<h3><code>worker.startCpuProfile([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>sampleInterval</code> {number} Requested sampling interval in milliseconds. <strong>Default:</strong> <code>0</code>.</li>
<li><code>maxBufferSize</code> {integer} Maximum number of samples to retain.
<strong>Default:</strong> <code>4294967295</code>.</li>
</ul>
</li>
<li>Returns: {Promise}</li>
</ul>
<p>Starting a CPU profile then return a Promise that fulfills with an error
or an <code>CPUProfileHandle</code> object. This API supports <code>await using</code> syntax.</p>
<pre><code class="language-cjs">const { Worker } = require('node:worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

worker.on('online', async () =&gt; {
  const handle = await worker.startCpuProfile({ sampleInterval: 1 });
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
});
</code></pre>
<p><code>await using</code> example.</p>
<pre><code class="language-cjs">const { Worker } = require('node:worker_threads');

const w = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

w.on('online', async () =&gt; {
  // Stop profile automatically when return and profile will be discarded
  await using handle = await w.startCpuProfile();
});
</code></pre>
<h3><code>worker.startHeapProfile([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>sampleInterval</code> {number} The average sampling interval in bytes.
<strong>Default:</strong> <code>524288</code> (512 KiB).</li>
<li><code>stackDepth</code> {integer} The maximum stack depth for samples.
<strong>Default:</strong> <code>16</code>.</li>
<li><code>forceGC</code> {boolean} Force garbage collection before taking the profile.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>includeObjectsCollectedByMajorGC</code> {boolean} Include objects collected
by major GC. <strong>Default:</strong> <code>false</code>.</li>
<li><code>includeObjectsCollectedByMinorGC</code> {boolean} Include objects collected
by minor GC. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Promise}</li>
</ul>
<p>Starting a Heap profile then return a Promise that fulfills with an error
or an <code>HeapProfileHandle</code> object. This API supports <code>await using</code> syntax.</p>
<pre><code class="language-cjs">const { Worker } = require('node:worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

worker.on('online', async () =&gt; {
  const handle = await worker.startHeapProfile();
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
});
</code></pre>
<pre><code class="language-mjs">import { Worker } from 'node:worker_threads';

const worker = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

worker.on('online', async () =&gt; {
  const handle = await worker.startHeapProfile();
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
});
</code></pre>
<p><code>await using</code> example.</p>
<pre><code class="language-cjs">const { Worker } = require('node:worker_threads');

const w = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

w.on('online', async () =&gt; {
  // Stop profile automatically when return and profile will be discarded
  await using handle = await w.startHeapProfile();
});
</code></pre>
<pre><code class="language-mjs">import { Worker } from 'node:worker_threads';

const w = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () =&gt; {});
  `, { eval: true });

w.on('online', async () =&gt; {
  // Stop profile automatically when return and profile will be discarded
  await using handle = await w.startHeapProfile();
});
</code></pre>
<h3><code>worker.stderr</code></h3>
<ul>
<li>Type: {stream.Readable}</li>
</ul>
<p>This is a readable stream which contains data written to <a href="process.md#processstderr"><code>process.stderr</code></a>
inside the worker thread. If <code>stderr: true</code> was not passed to the
<a href="#class-worker"><code>Worker</code></a> constructor, then data is piped to the parent thread's
<a href="process.md#processstderr"><code>process.stderr</code></a> stream.</p>
<h3><code>worker.stdin</code></h3>
<ul>
<li>Type: {null|stream.Writable}</li>
</ul>
<p>If <code>stdin: true</code> was passed to the <a href="#class-worker"><code>Worker</code></a> constructor, this is a
writable stream. The data written to this stream will be made available in
the worker thread as <a href="process.md#processstdin"><code>process.stdin</code></a>.</p>
<h3><code>worker.stdout</code></h3>
<ul>
<li>Type: {stream.Readable}</li>
</ul>
<p>This is a readable stream which contains data written to <a href="process.md#processstdout"><code>process.stdout</code></a>
inside the worker thread. If <code>stdout: true</code> was not passed to the
<a href="#class-worker"><code>Worker</code></a> constructor, then data is piped to the parent thread's
<a href="process.md#processstdout"><code>process.stdout</code></a> stream.</p>
<h3><code>worker.terminate()</code></h3>
<ul>
<li>Returns: {Promise}</li>
</ul>
<p>Stop all JavaScript execution in the worker thread as soon as possible.
Returns a Promise for the exit code that is fulfilled when the
<a href="#event-exit"><code>'exit'</code> event</a> is emitted.</p>
<h3><code>worker.threadId</code></h3>
<ul>
<li>Type: {integer}</li>
</ul>
<p>An integer identifier for the referenced thread. Inside the worker thread,
it is available as <a href="#worker_threadsthreadid"><code>require('node:worker_threads').threadId</code></a>.
This value is unique for each <code>Worker</code> instance inside a single process.</p>
<h3><code>worker.threadName</code></h3>
<ul>
<li>{string|null}</li>
</ul>
<p>A string identifier for the referenced thread or null if the thread is not running.
Inside the worker thread, it is available as <a href="#worker_threadsthreadname"><code>require('node:worker_threads').threadName</code></a>.</p>
<h3><code>worker.unref()</code></h3>
<p>Calling <code>unref()</code> on a worker allows the thread to exit if this is the only
active handle in the event system. If the worker is already <code>unref()</code>ed calling
<code>unref()</code> again has no effect.</p>
<h3><code>worker[Symbol.asyncDispose]()</code></h3>
<p>Calls <a href="#workerterminate"><code>worker.terminate()</code></a> when the dispose scope is exited.</p>
<pre><code class="language-js">async function example() {
  await using worker = new Worker('for (;;) {}', { eval: true });
  // Worker is automatically terminate when the scope is exited.
}
</code></pre>
<h2>Notes</h2>
<h3>Synchronous blocking of stdio</h3>
<p><code>Worker</code>s utilize message passing via {MessagePort} to implement interactions
with <code>stdio</code>. This means that <code>stdio</code> output originating from a <code>Worker</code> can
get blocked by synchronous code on the receiving end that is blocking the
Node.js event loop.</p>
<pre><code class="language-mjs">import {
  Worker,
  isMainThread,
} from 'node:worker_threads';

if (isMainThread) {
  new Worker(new URL(import.meta.url));
  for (let n = 0; n &lt; 1e10; n++) {
    // Looping to simulate work.
  }
} else {
  // This output will be blocked by the for loop in the main thread.
  console.log('foo');
}
</code></pre>
<pre><code class="language-cjs">const {
  Worker,
  isMainThread,
} = require('node:worker_threads');

if (isMainThread) {
  new Worker(__filename);
  for (let n = 0; n &lt; 1e10; n++) {
    // Looping to simulate work.
  }
} else {
  // This output will be blocked by the for loop in the main thread.
  console.log('foo');
}
</code></pre>
<h3>Launching worker threads from preload scripts</h3>
<p>Take care when launching worker threads from preload scripts (scripts loaded
and run using the <code>-r</code> command line flag). Unless the <code>execArgv</code> option is
explicitly set, new Worker threads automatically inherit the command line flags
from the running process and will preload the same preload scripts as the main
thread. If the preload script unconditionally launches a worker thread, every
thread spawned will spawn another until the application crashes.</p>
