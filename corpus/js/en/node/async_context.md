---
id: "js-en-function-node-async_context"
language: "js"
lang: "en"
category: "function"
name: "node:async_context"
title: "Asynchronous context tracking"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/async_context.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Asynchronous context tracking

<h1>Asynchronous context tracking</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<h2>Introduction</h2>
<p>These classes are used to associate state and propagate it throughout
callbacks and promise chains.
They allow storing data throughout the lifetime of a web request
or any other asynchronous duration. It is similar to thread-local storage
in other languages.</p>
<p>The <code>AsyncLocalStorage</code> and <code>AsyncResource</code> classes are part of the
<code>node:async_hooks</code> module:</p>
<pre><code class="language-mjs">import { AsyncLocalStorage, AsyncResource } from 'node:async_hooks';
</code></pre>
<pre><code class="language-cjs">const { AsyncLocalStorage, AsyncResource } = require('node:async_hooks');
</code></pre>
<h2>Class: <code>AsyncLocalStorage</code></h2>
<p>This class creates stores that stay coherent through asynchronous operations.</p>
<p>While you can create your own implementation on top of the <code>node:async_hooks</code>
module, <code>AsyncLocalStorage</code> should be preferred as it is a performant and memory
safe implementation that involves significant optimizations that are non-obvious
to implement.</p>
<p>The following example uses <code>AsyncLocalStorage</code> to build a simple logger
that assigns IDs to incoming HTTP requests and includes them in messages
logged within each request.</p>
<pre><code class="language-mjs">import http from 'node:http';
import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) =&gt; {
  asyncLocalStorage.run(idSeq++, () =&gt; {
    logWithId('start');
    // Imagine any chain of async operations here
    setImmediate(() =&gt; {
      logWithId('finish');
      res.end();
    });
  });
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
// Prints:
//   0: start
//   0: finish
//   1: start
//   1: finish
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
  const id = asyncLocalStorage.getStore();
  console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) =&gt; {
  asyncLocalStorage.run(idSeq++, () =&gt; {
    logWithId('start');
    // Imagine any chain of async operations here
    setImmediate(() =&gt; {
      logWithId('finish');
      res.end();
    });
  });
}).listen(8080);

http.get('http://localhost:8080');
http.get('http://localhost:8080');
// Prints:
//   0: start
//   0: finish
//   1: start
//   1: finish
</code></pre>
<p>Each instance of <code>AsyncLocalStorage</code> maintains an independent storage context.
Multiple instances can safely exist simultaneously without risk of interfering
with each other's data.</p>
<h3><code>new AsyncLocalStorage([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>defaultValue</code> {any} The default value to be used when no store is provided.</li>
<li><code>name</code> {string} A name for the <code>AsyncLocalStorage</code> value.</li>
</ul>
</li>
</ul>
<p>Creates a new instance of <code>AsyncLocalStorage</code>. Store is only provided within a
<code>run()</code> call or after an <code>enterWith()</code> call.</p>
<h3>Static method: <code>AsyncLocalStorage.bind(fn)</code></h3>
<ul>
<li><code>fn</code> {Function} The function to bind to the current execution context.</li>
<li>Returns: {Function} A new function that calls <code>fn</code> within the captured
execution context.</li>
</ul>
<p>Binds the given function to the current execution context.</p>
<h3>Static method: <code>AsyncLocalStorage.snapshot()</code></h3>
<ul>
<li>Returns: {Function} A new function with the signature
<code>(fn: (...args) : R, ...args) : R</code>.</li>
</ul>
<p>Captures the current execution context and returns a function that accepts a
function as an argument. Whenever the returned function is called, it
calls the function passed to it within the captured context.</p>
<pre><code class="language-js">const asyncLocalStorage = new AsyncLocalStorage();
const runInAsyncScope = asyncLocalStorage.run(123, () =&gt; AsyncLocalStorage.snapshot());
const result = asyncLocalStorage.run(321, () =&gt; runInAsyncScope(() =&gt; asyncLocalStorage.getStore()));
console.log(result);  // returns 123
</code></pre>
<p>AsyncLocalStorage.snapshot() can replace the use of AsyncResource for simple
async context tracking purposes, for example:</p>
<pre><code class="language-js">class Foo {
  #runInAsyncScope = AsyncLocalStorage.snapshot();

  get() { return this.#runInAsyncScope(() =&gt; asyncLocalStorage.getStore()); }
}

const foo = asyncLocalStorage.run(123, () =&gt; new Foo());
console.log(asyncLocalStorage.run(321, () =&gt; foo.get())); // returns 123
</code></pre>
<h3><code>asyncLocalStorage.disable()</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Disables the instance of <code>AsyncLocalStorage</code>. All subsequent calls
to <code>asyncLocalStorage.getStore()</code> will return <code>undefined</code> until
<code>asyncLocalStorage.run()</code> or <code>asyncLocalStorage.enterWith()</code> is called again.</p>
<p>When calling <code>asyncLocalStorage.disable()</code>, all current contexts linked to the
instance will be exited.</p>
<p>Calling <code>asyncLocalStorage.disable()</code> is required before the
<code>asyncLocalStorage</code> can be garbage collected. This does not apply to stores
provided by the <code>asyncLocalStorage</code>, as those objects are garbage collected
along with the corresponding async resources.</p>
<p>Use this method when the <code>asyncLocalStorage</code> is not in use anymore
in the current process.</p>
<h3><code>asyncLocalStorage.getStore()</code></h3>
<ul>
<li>Returns: {any}</li>
</ul>
<p>Returns the current store.
If called outside of an asynchronous context initialized by
calling <code>asyncLocalStorage.run()</code> or <code>asyncLocalStorage.enterWith()</code>, it
returns <code>undefined</code>.</p>
<h3><code>asyncLocalStorage.enterWith(store)</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>store</code> {any}</li>
</ul>
<p>Transitions into the context for the remainder of the current
synchronous execution and then persists the store through any following
asynchronous calls.</p>
<p>Example:</p>
<pre><code class="language-js">const store = { id: 1 };
// Replaces previous store with the given store object
asyncLocalStorage.enterWith(store);
asyncLocalStorage.getStore(); // Returns the store object
someAsyncOperation(() =&gt; {
  asyncLocalStorage.getStore(); // Returns the same object
});
</code></pre>
<p>This transition will continue for the <em>entire</em> synchronous execution.
This means that if, for example, the context is entered within an event
handler subsequent event handlers will also run within that context unless
specifically bound to another context with an <code>AsyncResource</code>. That is why
<code>run()</code> should be preferred over <code>enterWith()</code> unless there are strong reasons
to use the latter method.</p>
<pre><code class="language-js">const store = { id: 1 };

emitter.on('my-event', () =&gt; {
  asyncLocalStorage.enterWith(store);
});
emitter.on('my-event', () =&gt; {
  asyncLocalStorage.getStore(); // Returns the same object
});

asyncLocalStorage.getStore(); // Returns undefined
emitter.emit('my-event');
asyncLocalStorage.getStore(); // Returns the same object
</code></pre>
<h3><code>asyncLocalStorage.name</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The name of the <code>AsyncLocalStorage</code> instance if provided.</p>
<h3><code>asyncLocalStorage.run(store, callback[, ...args])</code></h3>
<ul>
<li><code>store</code> {any}</li>
<li><code>callback</code> {Function}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>Runs a function synchronously within a context and returns its
return value. The store is not accessible outside of the callback function.
The store is accessible to any asynchronous operations created within the
callback.</p>
<p>The optional <code>args</code> are passed to the callback function.</p>
<p>If the callback function throws an error, the error is thrown by <code>run()</code> too.
The stacktrace is not impacted by this call and the context is exited.</p>
<p>Example:</p>
<pre><code class="language-js">const store = { id: 2 };
try {
  asyncLocalStorage.run(store, () =&gt; {
    asyncLocalStorage.getStore(); // Returns the store object
    setTimeout(() =&gt; {
      asyncLocalStorage.getStore(); // Returns the store object
    }, 200);
    throw new Error();
  });
} catch (e) {
  asyncLocalStorage.getStore(); // Returns undefined
  // The error will be caught here
}
</code></pre>
<h3><code>asyncLocalStorage.exit(callback[, ...args])</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>callback</code> {Function}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>Runs a function synchronously outside of a context and returns its
return value. The store is not accessible within the callback function or
the asynchronous operations created within the callback. Any <code>getStore()</code>
call done within the callback function will always return <code>undefined</code>.</p>
<p>The optional <code>args</code> are passed to the callback function.</p>
<p>If the callback function throws an error, the error is thrown by <code>exit()</code> too.
The stacktrace is not impacted by this call and the context is re-entered.</p>
<p>Example:</p>
<pre><code class="language-js">// Within a call to run
try {
  asyncLocalStorage.getStore(); // Returns the store object or value
  asyncLocalStorage.exit(() =&gt; {
    asyncLocalStorage.getStore(); // Returns undefined
    throw new Error();
  });
} catch (e) {
  asyncLocalStorage.getStore(); // Returns the same object or value
  // The error will be caught here
}
</code></pre>
<h3><code>asyncLocalStorage.withScope(store)</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>store</code> {any}</li>
<li>Returns: {RunScope}</li>
</ul>
<p>Creates a disposable scope that enters the given store and automatically
restores the previous store value when the scope is disposed. This method is
designed to work with JavaScript's explicit resource management (<code>using</code> syntax).</p>
<p>Example:</p>
<pre><code class="language-mjs">import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

{
  using _ = asyncLocalStorage.withScope('my-store');
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
}

console.log(asyncLocalStorage.getStore()); // Prints: undefined
</code></pre>
<pre><code class="language-cjs">const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

{
  using _ = asyncLocalStorage.withScope('my-store');
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
}

console.log(asyncLocalStorage.getStore()); // Prints: undefined
</code></pre>
<p>The <code>withScope()</code> method is particularly useful for managing context in
synchronous code where you want to ensure the previous store value is restored
when exiting a block, even if an error is thrown.</p>
<pre><code class="language-mjs">import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

try {
  using _ = asyncLocalStorage.withScope('my-store');
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
  throw new Error('test');
} catch (e) {
  // Store is automatically restored even after error
  console.log(asyncLocalStorage.getStore()); // Prints: undefined
}
</code></pre>
<pre><code class="language-cjs">const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

try {
  using _ = asyncLocalStorage.withScope('my-store');
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
  throw new Error('test');
} catch (e) {
  // Store is automatically restored even after error
  console.log(asyncLocalStorage.getStore()); // Prints: undefined
}
</code></pre>
<p><strong>Important:</strong> When using <code>withScope()</code> in async functions before the first
<code>await</code>, be aware that the scope change will affect the caller's context. The
synchronous portion of an async function (before the first <code>await</code>) runs
immediately when called, and when it reaches the first <code>await</code>, it returns the
promise to the caller. At that point, the scope change becomes visible in the
caller's context and will persist in subsequent synchronous code until something
else changes the scope value. For async operations, prefer using <code>run()</code> which
properly isolates context across async boundaries.</p>
<pre><code class="language-mjs">import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();

async function example() {
  using _ = asyncLocalStorage.withScope('my-store');
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
  await someAsyncOperation(); // Function pauses here and returns promise
  console.log(asyncLocalStorage.getStore()); // Prints: my-store
}

// Calling without await
example(); // Synchronous portion runs, then pauses at first await
// After the promise is returned, the scope 'my-store' is now active in caller!
console.log(asyncLocalStorage.getStore()); // Prints: my-store (unexpected!)
</code></pre>
<h3>Usage with <code>async/await</code></h3>
<p>If, within an async function, only one <code>await</code> call is to run within a context,
the following pattern should be used:</p>
<pre><code class="language-js">async function fn() {
  await asyncLocalStorage.run(new Map(), () =&gt; {
    asyncLocalStorage.getStore().set('key', value);
    return foo(); // The return value of foo will be awaited
  });
}
</code></pre>
<p>In this example, the store is only available in the callback function and the
functions called by <code>foo</code>. Outside of <code>run</code>, calling <code>getStore</code> will return
<code>undefined</code>.</p>
<h3>Troubleshooting: Context loss</h3>
<p>In most cases, <code>AsyncLocalStorage</code> works without issues. In rare situations, the
current store is lost in one of the asynchronous operations.</p>
<p>If your code is callback-based, it is enough to promisify it with
<a href="util.md#utilpromisifyoriginal"><code>util.promisify()</code></a> so it starts working with native promises.</p>
<p>If you need to use a callback-based API or your code assumes
a custom thenable implementation, use the <a href="#class-asyncresource"><code>AsyncResource</code></a> class
to associate the asynchronous operation with the correct execution context.
Find the function call responsible for the context loss by logging the content
of <code>asyncLocalStorage.getStore()</code> after the calls you suspect are responsible
for the loss. When the code logs <code>undefined</code>, the last callback called is
probably responsible for the context loss.</p>
<h2>Class: <code>RunScope</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A disposable scope returned by <a href="#asynclocalstoragewithscopestore"><code>asyncLocalStorage.withScope()</code></a> that
automatically restores the previous store value when disposed. This class
implements the <a href="https://github.com/tc39/proposal-explicit-resource-management">Explicit Resource Management</a> protocol and is designed to work
with JavaScript's <code>using</code> syntax.</p>
<p>The scope automatically restores the previous store value when the <code>using</code> block
exits, whether through normal completion or by throwing an error.</p>
<h3><code>scope.dispose()</code></h3>
<p>Explicitly ends the scope and restores the previous store value. This method
is idempotent: calling it multiple times has the same effect as calling it once.</p>
<p>The <code>[Symbol.dispose]()</code> method defers to <code>dispose()</code>.</p>
<p>If <code>withScope()</code> is called without the <code>using</code> keyword, <code>dispose()</code> must be
called manually to restore the previous store value. Forgetting to call
<code>dispose()</code> will cause the store value to persist for the remainder of the
current execution context:</p>
<pre><code class="language-mjs">import { AsyncLocalStorage } from 'node:async_hooks';

const storage = new AsyncLocalStorage();

// Without using, the scope must be disposed manually
const scope = storage.withScope('my-store');
// storage.getStore() === 'my-store' here

scope.dispose(); // Restore previous value
// storage.getStore() === undefined here
</code></pre>
<pre><code class="language-cjs">const { AsyncLocalStorage } = require('node:async_hooks');

const storage = new AsyncLocalStorage();

// Without using, the scope must be disposed manually
const scope = storage.withScope('my-store');
// storage.getStore() === 'my-store' here

scope.dispose(); // Restore previous value
// storage.getStore() === undefined here
</code></pre>
<h2>Class: <code>AsyncResource</code></h2>
<p>The class <code>AsyncResource</code> is designed to be extended by the embedder's async
resources. Using this, users can easily trigger the lifetime events of their
own resources.</p>
<p>The <code>init</code> hook will trigger when an <code>AsyncResource</code> is instantiated.</p>
<p>The following is an overview of the <code>AsyncResource</code> API.</p>
<pre><code class="language-mjs">import { AsyncResource, executionAsyncId } from 'node:async_hooks';

// AsyncResource() is meant to be extended. Instantiating a
// new AsyncResource() also triggers init. If triggerAsyncId is omitted then
// async_hook.executionAsyncId() is used.
const asyncResource = new AsyncResource(
  type, { triggerAsyncId: executionAsyncId(), requireManualDestroy: false },
);

// Run a function in the execution context of the resource. This will
// * establish the context of the resource
// * trigger the AsyncHooks before callbacks
// * call the provided function `fn` with the supplied arguments
// * trigger the AsyncHooks after callbacks
// * restore the original execution context
asyncResource.runInAsyncScope(fn, thisArg, ...args);

// Call AsyncHooks destroy callbacks.
asyncResource.emitDestroy();

// Return the unique ID assigned to the AsyncResource instance.
asyncResource.asyncId();

// Return the trigger ID for the AsyncResource instance.
asyncResource.triggerAsyncId();
</code></pre>
<pre><code class="language-cjs">const { AsyncResource, executionAsyncId } = require('node:async_hooks');

// AsyncResource() is meant to be extended. Instantiating a
// new AsyncResource() also triggers init. If triggerAsyncId is omitted then
// async_hook.executionAsyncId() is used.
const asyncResource = new AsyncResource(
  type, { triggerAsyncId: executionAsyncId(), requireManualDestroy: false },
);

// Run a function in the execution context of the resource. This will
// * establish the context of the resource
// * trigger the AsyncHooks before callbacks
// * call the provided function `fn` with the supplied arguments
// * trigger the AsyncHooks after callbacks
// * restore the original execution context
asyncResource.runInAsyncScope(fn, thisArg, ...args);

// Call AsyncHooks destroy callbacks.
asyncResource.emitDestroy();

// Return the unique ID assigned to the AsyncResource instance.
asyncResource.asyncId();

// Return the trigger ID for the AsyncResource instance.
asyncResource.triggerAsyncId();
</code></pre>
<h3><code>new AsyncResource(type[, options])</code></h3>
<ul>
<li><code>type</code> {string} The type of async event.</li>
<li><code>options</code> {Object}
<ul>
<li><code>triggerAsyncId</code> {number} The ID of the execution context that created this
async event. <strong>Default:</strong> <code>executionAsyncId()</code>.</li>
<li><code>requireManualDestroy</code> {boolean} If set to <code>true</code>, disables <code>emitDestroy</code>
when the object is garbage collected. This usually does not need to be set
(even if <code>emitDestroy</code> is called manually), unless the resource's <code>asyncId</code>
is retrieved and the sensitive API's <code>emitDestroy</code> is called with it.
When set to <code>false</code>, the <code>emitDestroy</code> call on garbage collection
will only take place if there is at least one active <code>destroy</code> hook.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Example usage:</p>
<pre><code class="language-js">class DBQuery extends AsyncResource {
  constructor(db) {
    super('DBQuery');
    this.db = db;
  }

  getInfo(query, callback) {
    this.db.get(query, (err, data) =&gt; {
      this.runInAsyncScope(callback, null, err, data);
    });
  }

  close() {
    this.db = null;
    this.emitDestroy();
  }
}
</code></pre>
<h3>Static method: <code>AsyncResource.bind(fn[, type[, thisArg]])</code></h3>
<ul>
<li><code>fn</code> {Function} The function to bind to the current execution context.</li>
<li><code>type</code> {string} An optional name to associate with the underlying
<code>AsyncResource</code>.</li>
<li><code>thisArg</code> {any}</li>
</ul>
<p>Binds the given function to the current execution context.</p>
<h3><code>asyncResource.bind(fn[, thisArg])</code></h3>
<ul>
<li><code>fn</code> {Function} The function to bind to the current <code>AsyncResource</code>.</li>
<li><code>thisArg</code> {any}</li>
</ul>
<p>Binds the given function to execute to this <code>AsyncResource</code>'s scope.</p>
<h3><code>asyncResource.runInAsyncScope(fn[, thisArg, ...args])</code></h3>
<ul>
<li><code>fn</code> {Function} The function to call in the execution context of this async
resource.</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call.</li>
<li><code>...args</code> {any} Optional arguments to pass to the function.</li>
</ul>
<p>Call the provided function with the provided arguments in the execution context
of the async resource. This will establish the context, trigger the AsyncHooks
before callbacks, call the function, trigger the AsyncHooks after callbacks, and
then restore the original execution context.</p>
<h3><code>asyncResource.emitDestroy()</code></h3>
<ul>
<li>Returns: {AsyncResource} A reference to <code>asyncResource</code>.</li>
</ul>
<p>Call all <code>destroy</code> hooks. This should only ever be called once. An error will
be thrown if it is called more than once. This <strong>must</strong> be manually called. If
the resource is left to be collected by the GC then the <code>destroy</code> hooks will
never be called.</p>
<h3><code>asyncResource.asyncId()</code></h3>
<ul>
<li>Returns: {number} The unique <code>asyncId</code> assigned to the resource.</li>
</ul>
<h3><code>asyncResource.triggerAsyncId()</code></h3>
<ul>
<li>Returns: {number} The same <code>triggerAsyncId</code> that is passed to the
<code>AsyncResource</code> constructor.</li>
</ul>
<p>&lt;a id=&quot;async-resource-worker-pool&quot;&gt;&lt;/a&gt;</p>
<h3>Using <code>AsyncResource</code> for a <code>Worker</code> thread pool</h3>
<p>The following example shows how to use the <code>AsyncResource</code> class to properly
provide async tracking for a <a href="worker_threads.md#class-worker"><code>Worker</code></a> pool. Other resource pools, such as
database connection pools, can follow a similar model.</p>
<p>Assuming that the task is adding two numbers, using a file named
<code>task_processor.js</code> with the following content:</p>
<pre><code class="language-mjs">import { parentPort } from 'node:worker_threads';
parentPort.on('message', (task) =&gt; {
  parentPort.postMessage(task.a + task.b);
});
</code></pre>
<pre><code class="language-cjs">const { parentPort } = require('node:worker_threads');
parentPort.on('message', (task) =&gt; {
  parentPort.postMessage(task.a + task.b);
});
</code></pre>
<p>a Worker pool around it could use the following structure:</p>
<pre><code class="language-mjs">import { AsyncResource } from 'node:async_hooks';
import { EventEmitter } from 'node:events';
import { Worker } from 'node:worker_threads';

const kTaskInfo = Symbol('kTaskInfo');
const kWorkerFreedEvent = Symbol('kWorkerFreedEvent');

class WorkerPoolTaskInfo extends AsyncResource {
  constructor(callback) {
    super('WorkerPoolTaskInfo');
    this.callback = callback;
  }

  done(err, result) {
    this.runInAsyncScope(this.callback, null, err, result);
    this.emitDestroy();  // `TaskInfo`s are used only once.
  }
}

export default class WorkerPool extends EventEmitter {
  constructor(numThreads) {
    super();
    this.numThreads = numThreads;
    this.workers = [];
    this.freeWorkers = [];
    this.tasks = [];

    for (let i = 0; i &lt; numThreads; i++)
      this.addNewWorker();

    // Any time the kWorkerFreedEvent is emitted, dispatch
    // the next task pending in the queue, if any.
    this.on(kWorkerFreedEvent, () =&gt; {
      if (this.tasks.length &gt; 0) {
        const { task, callback } = this.tasks.shift();
        this.runTask(task, callback);
      }
    });
  }

  addNewWorker() {
    const worker = new Worker(new URL('task_processor.js', import.meta.url));
    worker.on('message', (result) =&gt; {
      // In case of success: Call the callback that was passed to `runTask`,
      // remove the `TaskInfo` associated with the Worker, and mark it as free
      // again.
      worker[kTaskInfo].done(null, result);
      worker[kTaskInfo] = null;
      this.freeWorkers.push(worker);
      this.emit(kWorkerFreedEvent);
    });
    worker.on('error', (err) =&gt; {
      // In case of an uncaught exception: Call the callback that was passed to
      // `runTask` with the error.
      if (worker[kTaskInfo])
        worker[kTaskInfo].done(err, null);
      else
        this.emit('error', err);
      // Remove the worker from the list and start a new Worker to replace the
      // current one.
      this.workers.splice(this.workers.indexOf(worker), 1);
      this.addNewWorker();
    });
    this.workers.push(worker);
    this.freeWorkers.push(worker);
    this.emit(kWorkerFreedEvent);
  }

  runTask(task, callback) {
    if (this.freeWorkers.length === 0) {
      // No free threads, wait until a worker thread becomes free.
      this.tasks.push({ task, callback });
      return;
    }

    const worker = this.freeWorkers.pop();
    worker[kTaskInfo] = new WorkerPoolTaskInfo(callback);
    worker.postMessage(task);
  }

  close() {
    for (const worker of this.workers) worker.terminate();
  }
}
</code></pre>
<pre><code class="language-cjs">const { AsyncResource } = require('node:async_hooks');
const { EventEmitter } = require('node:events');
const path = require('node:path');
const { Worker } = require('node:worker_threads');

const kTaskInfo = Symbol('kTaskInfo');
const kWorkerFreedEvent = Symbol('kWorkerFreedEvent');

class WorkerPoolTaskInfo extends AsyncResource {
  constructor(callback) {
    super('WorkerPoolTaskInfo');
    this.callback = callback;
  }

  done(err, result) {
    this.runInAsyncScope(this.callback, null, err, result);
    this.emitDestroy();  // `TaskInfo`s are used only once.
  }
}

class WorkerPool extends EventEmitter {
  constructor(numThreads) {
    super();
    this.numThreads = numThreads;
    this.workers = [];
    this.freeWorkers = [];
    this.tasks = [];

    for (let i = 0; i &lt; numThreads; i++)
      this.addNewWorker();

    // Any time the kWorkerFreedEvent is emitted, dispatch
    // the next task pending in the queue, if any.
    this.on(kWorkerFreedEvent, () =&gt; {
      if (this.tasks.length &gt; 0) {
        const { task, callback } = this.tasks.shift();
        this.runTask(task, callback);
      }
    });
  }

  addNewWorker() {
    const worker = new Worker(path.resolve(__dirname, 'task_processor.js'));
    worker.on('message', (result) =&gt; {
      // In case of success: Call the callback that was passed to `runTask`,
      // remove the `TaskInfo` associated with the Worker, and mark it as free
      // again.
      worker[kTaskInfo].done(null, result);
      worker[kTaskInfo] = null;
      this.freeWorkers.push(worker);
      this.emit(kWorkerFreedEvent);
    });
    worker.on('error', (err) =&gt; {
      // In case of an uncaught exception: Call the callback that was passed to
      // `runTask` with the error.
      if (worker[kTaskInfo])
        worker[kTaskInfo].done(err, null);
      else
        this.emit('error', err);
      // Remove the worker from the list and start a new Worker to replace the
      // current one.
      this.workers.splice(this.workers.indexOf(worker), 1);
      this.addNewWorker();
    });
    this.workers.push(worker);
    this.freeWorkers.push(worker);
    this.emit(kWorkerFreedEvent);
  }

  runTask(task, callback) {
    if (this.freeWorkers.length === 0) {
      // No free threads, wait until a worker thread becomes free.
      this.tasks.push({ task, callback });
      return;
    }

    const worker = this.freeWorkers.pop();
    worker[kTaskInfo] = new WorkerPoolTaskInfo(callback);
    worker.postMessage(task);
  }

  close() {
    for (const worker of this.workers) worker.terminate();
  }
}

module.exports = WorkerPool;
</code></pre>
<p>Without the explicit tracking added by the <code>WorkerPoolTaskInfo</code> objects,
it would appear that the callbacks are associated with the individual <code>Worker</code>
objects. However, the creation of the <code>Worker</code>s is not associated with the
creation of the tasks and does not provide information about when tasks
were scheduled.</p>
<p>This pool could be used as follows:</p>
<pre><code class="language-mjs">import WorkerPool from './worker_pool.js';
import os from 'node:os';

const pool = new WorkerPool(os.availableParallelism());

let finished = 0;
for (let i = 0; i &lt; 10; i++) {
  pool.runTask({ a: 42, b: 100 }, (err, result) =&gt; {
    console.log(i, err, result);
    if (++finished === 10)
      pool.close();
  });
}
</code></pre>
<pre><code class="language-cjs">const WorkerPool = require('./worker_pool.js');
const os = require('node:os');

const pool = new WorkerPool(os.availableParallelism());

let finished = 0;
for (let i = 0; i &lt; 10; i++) {
  pool.runTask({ a: 42, b: 100 }, (err, result) =&gt; {
    console.log(i, err, result);
    if (++finished === 10)
      pool.close();
  });
}
</code></pre>
<h3>Integrating <code>AsyncResource</code> with <code>EventEmitter</code></h3>
<p>Event listeners triggered by an <a href="events.md#class-eventemitter"><code>EventEmitter</code></a> may be run in a different
execution context than the one that was active when <code>eventEmitter.on()</code> was
called.</p>
<p>The following example shows how to use the <code>AsyncResource</code> class to properly
associate an event listener with the correct execution context. The same
approach can be applied to a <a href="stream.md#stream"><code>Stream</code></a> or a similar event-driven class.</p>
<pre><code class="language-mjs">import { createServer } from 'node:http';
import { AsyncResource, executionAsyncId } from 'node:async_hooks';

const server = createServer((req, res) =&gt; {
  req.on('close', AsyncResource.bind(() =&gt; {
    // Execution context is bound to the current outer scope.
  }));
  req.on('close', () =&gt; {
    // Execution context is bound to the scope that caused 'close' to emit.
  });
  res.end();
}).listen(3000);
</code></pre>
<pre><code class="language-cjs">const { createServer } = require('node:http');
const { AsyncResource, executionAsyncId } = require('node:async_hooks');

const server = createServer((req, res) =&gt; {
  req.on('close', AsyncResource.bind(() =&gt; {
    // Execution context is bound to the current outer scope.
  }));
  req.on('close', () =&gt; {
    // Execution context is bound to the scope that caused 'close' to emit.
  });
  res.end();
}).listen(3000);
</code></pre>
