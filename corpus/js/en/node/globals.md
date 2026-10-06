---
id: "js-en-function-node-globals"
language: "js"
lang: "en"
category: "function"
name: "node:globals"
title: "Global objects"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/globals.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Global objects

<h1>Global objects</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>These objects are available in all modules.</p>
<p>The following variables may appear to be global but are not. They exist only in
the scope of <a href="modules.md">CommonJS modules</a>:</p>
<ul>
<li><a href="modules.md#__dirname"><code>__dirname</code></a></li>
<li><a href="modules.md#__filename"><code>__filename</code></a></li>
<li><a href="modules.md#exports"><code>exports</code></a></li>
<li><a href="modules.md#module"><code>module</code></a></li>
<li><a href="modules.md#requireid"><code>require()</code></a></li>
</ul>
<p>The objects listed here are specific to Node.js. There are <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">built-in objects</a>
that are part of the JavaScript language itself, which are also globally
accessible.</p>
<h2><code>__dirname</code></h2>
<p>This variable may appear to be global but is not. See <a href="modules.md#__dirname"><code>__dirname</code></a>.</p>
<h2><code>__filename</code></h2>
<p>This variable may appear to be global but is not. See <a href="modules.md#__filename"><code>__filename</code></a>.</p>
<h2>Class: <code>AbortController</code></h2>
<p>A utility class used to signal cancelation in selected <code>Promise</code>-based APIs.
The API is based on the Web API {AbortController}.</p>
<pre><code class="language-js">const ac = new AbortController();

ac.signal.addEventListener('abort', () =&gt; console.log('Aborted!'),
                           { once: true });

ac.abort();

console.log(ac.signal.aborted);  // Prints true
</code></pre>
<h3><code>abortController.abort([reason])</code></h3>
<ul>
<li><code>reason</code> {any} An optional reason, retrievable on the <code>AbortSignal</code>'s
<code>reason</code> property.</li>
</ul>
<p>Triggers the abort signal, causing the <code>abortController.signal</code> to emit
the <code>'abort'</code> event.</p>
<h3><code>abortController.signal</code></h3>
<ul>
<li>Type: {AbortSignal}</li>
</ul>
<h2>Class: <code>AbortSignal</code></h2>
<ul>
<li>Extends: {EventTarget}</li>
</ul>
<p>The <code>AbortSignal</code> is used to notify observers when the
<code>abortController.abort()</code> method is called.</p>
<h3>Static method: <code>AbortSignal.abort([reason])</code></h3>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: {AbortSignal}</li>
</ul>
<p>Returns a new already aborted <code>AbortSignal</code>.</p>
<h3>Static method: <code>AbortSignal.timeout(delay)</code></h3>
<ul>
<li><code>delay</code> {number} The number of milliseconds to wait before triggering
the AbortSignal.</li>
</ul>
<p>Returns a new <code>AbortSignal</code> which will be aborted in <code>delay</code> milliseconds.</p>
<h3>Static method: <code>AbortSignal.any(signals)</code></h3>
<ul>
<li><code>signals</code> {Iterable} An iterable of {AbortSignal}s from which to compose a new
{AbortSignal}.</li>
</ul>
<p>Returns a new <code>AbortSignal</code> which will be aborted if any of the provided
signals are aborted. Its <a href="#abortsignalreason"><code>abortSignal.reason</code></a> will be set to whichever
one of the <code>signals</code> caused it to be aborted.</p>
<h3>Event: <code>'abort'</code></h3>
<p>The <code>'abort'</code> event is emitted when the <code>abortController.abort()</code> method
is called. The callback is invoked with a single object argument with a
single <code>type</code> property set to <code>'abort'</code>:</p>
<pre><code class="language-js">const ac = new AbortController();

// Use either the onabort property...
ac.signal.onabort = () =&gt; console.log('aborted!');

// Or the EventTarget API...
ac.signal.addEventListener('abort', (event) =&gt; {
  console.log(event.type);  // Prints 'abort'
}, { once: true });

ac.abort();
</code></pre>
<p>The <code>AbortController</code> with which the <code>AbortSignal</code> is associated will only
ever trigger the <code>'abort'</code> event once. We recommended that code check
that the <code>abortSignal.aborted</code> attribute is <code>false</code> before adding an <code>'abort'</code>
event listener.</p>
<p>Any event listeners attached to the <code>AbortSignal</code> should use the
<code>{ once: true }</code> option (or, if using the <code>EventEmitter</code> APIs to attach a
listener, use the <code>once()</code> method) to ensure that the event listener is
removed as soon as the <code>'abort'</code> event is handled. Failure to do so may
result in memory leaks.</p>
<h3><code>abortSignal.aborted</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>True after the <code>AbortController</code> has been aborted.</p>
<h3><code>abortSignal.onabort</code></h3>
<ul>
<li>Type: {Function}</li>
</ul>
<p>An optional callback function that may be set by user code to be notified
when the <code>abortController.abort()</code> function has been called.</p>
<h3><code>abortSignal.reason</code></h3>
<ul>
<li>Type: {any}</li>
</ul>
<p>An optional reason specified when the <code>AbortSignal</code> was triggered.</p>
<pre><code class="language-js">const ac = new AbortController();
ac.abort(new Error('boom!'));
console.log(ac.signal.reason);  // Error: boom!
</code></pre>
<h3><code>abortSignal.throwIfAborted()</code></h3>
<p>If <code>abortSignal.aborted</code> is <code>true</code>, throws <code>abortSignal.reason</code>.</p>
<h2><code>atob(data)</code></h2>
<blockquote>
<p>Stability: 3 - Legacy. Use <code>Buffer.from(data, 'base64')</code> instead.</p>
</blockquote>
<p>Global alias for <a href="buffer.md#bufferatobdata"><code>buffer.atob()</code></a>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/buffer-atob-btoa">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/buffer-atob-btoa
</code></pre>
<h2>Class: <code>Blob</code></h2>
<p>See {Blob}.</p>
<h2>Class: <code>BroadcastChannel</code></h2>
<p>See {BroadcastChannel}.</p>
<h2><code>btoa(data)</code></h2>
<blockquote>
<p>Stability: 3 - Legacy. Use <code>buf.toString('base64')</code> instead.</p>
</blockquote>
<p>Global alias for <a href="buffer.md#bufferbtoadata"><code>buffer.btoa()</code></a>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/buffer-atob-btoa">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/buffer-atob-btoa
</code></pre>
<h2>Class: <code>Buffer</code></h2>
<ul>
<li>Type: {Function}</li>
</ul>
<p>Used to handle binary data. See the <a href="buffer.md">buffer section</a>.</p>
<h2>Class: <code>ByteLengthQueuingStrategy</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-bytelengthqueuingstrategy"><code>ByteLengthQueuingStrategy</code></a>.</p>
<h2><code>clearImmediate(immediateObject)</code></h2>
<p><a href="timers.md#clearimmediateimmediate"><code>clearImmediate</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2><code>clearInterval(intervalObject)</code></h2>
<p><a href="timers.md#clearintervaltimeout"><code>clearInterval</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2><code>clearTimeout(timeoutObject)</code></h2>
<p><a href="timers.md#cleartimeouttimeout"><code>clearTimeout</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2>Class: <code>CloseEvent</code></h2>
<p>A browser-compatible implementation of {CloseEvent}.</p>
<h2>Class: <code>CompressionStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-compressionstream"><code>CompressionStream</code></a>.</p>
<h2><code>console</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Used to print to stdout and stderr. See the <a href="console.md"><code>console</code></a> section.</p>
<h2>Class: <code>CountQueuingStrategy</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-countqueuingstrategy"><code>CountQueuingStrategy</code></a>.</p>
<h2>Class: <code>Crypto</code></h2>
<p>A browser-compatible implementation of {Crypto}. This global is available
only if the Node.js binary was compiled with including support for the
<code>node:crypto</code> module.</p>
<h2><code>crypto</code></h2>
<p>A browser-compatible implementation of the <a href="webcrypto.md">Web Crypto API</a>.</p>
<h2>Class: <code>CryptoKey</code></h2>
<p>A browser-compatible implementation of {CryptoKey}. This global is available
only if the Node.js binary was compiled with including support for the
<code>node:crypto</code> module.</p>
<h2>Class: <code>CustomEvent</code></h2>
<p>A browser-compatible implementation of {CustomEvent}.</p>
<h2>Class: <code>DecompressionStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-decompressionstream"><code>DecompressionStream</code></a>.</p>
<h2>Class: <code>DOMException</code></h2>
<p>The WHATWG {DOMException} class.</p>
<h2><code>ErrorEvent</code></h2>
<p>A browser-compatible implementation of {ErrorEvent}.</p>
<h2>Class: <code>Event</code></h2>
<p>A browser-compatible implementation of the <code>Event</code> class. See
<a href="events.md#eventtarget-and-event-api"><code>EventTarget</code> and <code>Event</code> API</a> for more details.</p>
<h2>Class: <code>EventSource</code></h2>
<blockquote>
<p>Stability: 1 - Experimental. Enable this API with the <a href="cli.md#--experimental-eventsource"><code>--experimental-eventsource</code></a>
CLI flag.</p>
</blockquote>
<p>A browser-compatible implementation of {EventSource}.</p>
<h2>Class: <code>EventTarget</code></h2>
<p>A browser-compatible implementation of the <code>EventTarget</code> class. See
<a href="events.md#eventtarget-and-event-api"><code>EventTarget</code> and <code>Event</code> API</a> for more details.</p>
<h2><code>exports</code></h2>
<p>This variable may appear to be global but is not. See <a href="modules.md#exports"><code>exports</code></a>.</p>
<h2><code>fetch</code></h2>
<p>A browser-compatible implementation of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch"><code>fetch()</code></a> function.</p>
<pre><code class="language-mjs">const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
</code></pre>
<p>The implementation is based upon <a href="https://undici.nodejs.org">undici</a>, an HTTP/1.1 client
written from scratch for Node.js. You can figure out which version of <code>undici</code> is bundled
in your Node.js process reading the <code>process.versions.undici</code> property.</p>
<h3>Custom dispatcher</h3>
<p>You can use a custom dispatcher to dispatch requests passing it in fetch's options object.
The dispatcher must be compatible with <code>undici</code>'s
<a href="https://undici.nodejs.org/api/Dispatcher"><code>Dispatcher</code> class</a>.</p>
<pre><code class="language-js">fetch(url, { dispatcher: new MyAgent() });
</code></pre>
<p>It is possible to change the global dispatcher in Node.js by installing <code>undici</code> and using
the <code>setGlobalDispatcher()</code> method. Calling this method will affect both <code>undici</code> and
Node.js.</p>
<pre><code class="language-mjs">import { setGlobalDispatcher } from 'undici';
setGlobalDispatcher(new MyAgent());
</code></pre>
<h3>Related classes</h3>
<p>The following globals are available to use with <code>fetch</code>:</p>
<ul>
<li><a href="#class-formdata"><code>FormData</code></a></li>
<li><a href="#class-headers"><code>Headers</code></a></li>
<li><a href="#class-request"><code>Request</code></a></li>
<li><a href="#class-response"><code>Response</code></a></li>
</ul>
<h2>Class: <code>File</code></h2>
<p>See {File}.</p>
<h2>Class: <code>FormData</code></h2>
<p>A browser-compatible implementation of {FormData}.</p>
<h2><code>global</code></h2>
<blockquote>
<p>Stability: 3 - Legacy. Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis"><code>globalThis</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {Object} The global namespace object.</li>
</ul>
<p>In browsers, the top-level scope has traditionally been the global scope. This
means that <code>var something</code> will define a new global variable, except within
ECMAScript modules. In Node.js, this is different. The top-level scope is not
the global scope; <code>var something</code> inside a Node.js module will be local to that
module, regardless of whether it is a <a href="modules.md">CommonJS module</a> or an
<a href="esm.md">ECMAScript module</a>.</p>
<h2>Class: <code>Headers</code></h2>
<p>A browser-compatible implementation of {Headers}.</p>
<h2><code>localStorage</code></h2>
<blockquote>
<p>Stability: 1.2 - Release candidate. Disable this API with <a href="cli.md#--no-experimental-webstorage"><code>--no-experimental-webstorage</code></a>.</p>
</blockquote>
<p>A browser-compatible implementation of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"><code>localStorage</code></a>. Data is stored
unencrypted in the file specified by the <a href="cli.md#--localstorage-filefile"><code>--localstorage-file</code></a> CLI flag.
The maximum amount of data that can be stored is 10 MB.
Any modification of this data outside of the Web Storage API is not supported.
<code>localStorage</code> data is not stored per user or per request when used in the context
of a server, it is shared across all users and requests.</p>
<h2>Class: <code>MessageChannel</code></h2>
<p>The <code>MessageChannel</code> class. See <a href="worker_threads.md#class-messagechannel"><code>MessageChannel</code></a> for more details.</p>
<h2>Class: <code>MessageEvent</code></h2>
<p>A browser-compatible implementation of {MessageEvent}.</p>
<h2>Class: <code>MessagePort</code></h2>
<p>The <code>MessagePort</code> class. See <a href="worker_threads.md#class-messageport"><code>MessagePort</code></a> for more details.</p>
<h2><code>module</code></h2>
<p>This variable may appear to be global but is not. See <a href="modules.md#module"><code>module</code></a>.</p>
<h2>Class: <code>Navigator</code></h2>
<blockquote>
<p>Stability: 1.1 - Active development. Disable this API with the
<a href="cli.md#--no-experimental-global-navigator"><code>--no-experimental-global-navigator</code></a> CLI flag.</p>
</blockquote>
<p>A partial implementation of the <a href="https://html.spec.whatwg.org/multipage/system-state.html#the-navigator-object">Navigator API</a>.</p>
<h2><code>navigator</code></h2>
<blockquote>
<p>Stability: 1.1 - Active development. Disable this API with the
<a href="cli.md#--no-experimental-global-navigator"><code>--no-experimental-global-navigator</code></a> CLI flag.</p>
</blockquote>
<p>A partial implementation of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator"><code>window.navigator</code></a>.</p>
<h3><code>navigator.hardwareConcurrency</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The <code>navigator.hardwareConcurrency</code> read-only property returns the number of
logical processors available to the current Node.js instance.</p>
<pre><code class="language-js">console.log(`This process is running on ${navigator.hardwareConcurrency} logical processors`);
</code></pre>
<h3><code>navigator.language</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>navigator.language</code> read-only property returns a string representing the
preferred language of the Node.js instance. The language will be determined by
the ICU library used by Node.js at runtime based on the
default language of the operating system.</p>
<p>The value is representing the language version as defined in <a href="https://www.rfc-editor.org/rfc/rfc5646.txt">RFC 5646</a>.</p>
<p>The fallback value on builds without ICU is <code>'en-US'</code>.</p>
<pre><code class="language-js">console.log(`The preferred language of the Node.js instance has the tag '${navigator.language}'`);
</code></pre>
<h3><code>navigator.languages</code></h3>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The <code>navigator.languages</code> read-only property returns an array of strings
representing the preferred languages of the Node.js instance.
By default <code>navigator.languages</code> contains only the value of
<code>navigator.language</code>, which will be determined by the ICU library used by
Node.js at runtime based on the default language of the operating system.</p>
<p>The fallback value on builds without ICU is <code>['en-US']</code>.</p>
<pre><code class="language-js">console.log(`The preferred languages are '${navigator.languages}'`);
</code></pre>
<h3><code>navigator.locks</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The <code>navigator.locks</code> read-only property returns a <a href="worker_threads.md#class-lockmanager"><code>LockManager</code></a> instance that
can be used to coordinate access to resources that may be shared across multiple
threads within the same process. This global implementation matches the semantics
of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/LockManager">browser <code>LockManager</code></a> API.</p>
<pre><code class="language-mjs">// Request an exclusive lock
await navigator.locks.request('my_resource', async (lock) =&gt; {
  // The lock has been acquired.
  console.log(`Lock acquired: ${lock.name}`);
  // Lock is automatically released when the function returns
});

// Request a shared lock
await navigator.locks.request('shared_resource', { mode: 'shared' }, async (lock) =&gt; {
  // Multiple shared locks can be held simultaneously
  console.log(`Shared lock acquired: ${lock.name}`);
});
</code></pre>
<pre><code class="language-cjs">// Request an exclusive lock
navigator.locks.request('my_resource', async (lock) =&gt; {
  // The lock has been acquired.
  console.log(`Lock acquired: ${lock.name}`);
  // Lock is automatically released when the function returns
}).then(() =&gt; {
  console.log('Lock released');
});

// Request a shared lock
navigator.locks.request('shared_resource', { mode: 'shared' }, async (lock) =&gt; {
  // Multiple shared locks can be held simultaneously
  console.log(`Shared lock acquired: ${lock.name}`);
}).then(() =&gt; {
  console.log('Shared lock released');
});
</code></pre>
<p>See <a href="worker_threads.md#worker_threadslocks"><code>worker_threads.locks</code></a> for detailed API documentation.</p>
<h3><code>navigator.platform</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>navigator.platform</code> read-only property returns a string identifying the
platform on which the Node.js instance is running.</p>
<pre><code class="language-js">console.log(`This process is running on ${navigator.platform}`);
</code></pre>
<h3><code>navigator.userAgent</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>navigator.userAgent</code> read-only property returns user agent
consisting of the runtime name and major version number.</p>
<pre><code class="language-js">console.log(`The user-agent is ${navigator.userAgent}`); // Prints &quot;Node.js/21&quot;
</code></pre>
<h2><code>performance</code></h2>
<p>The <a href="perf_hooks.md#perf_hooksperformance"><code>perf_hooks.performance</code></a> object.</p>
<h2>Class: <code>PerformanceEntry</code></h2>
<p>The <code>PerformanceEntry</code> class. See <a href="perf_hooks.md#class-performanceentry"><code>PerformanceEntry</code></a> for more details.</p>
<h2>Class: <code>PerformanceMark</code></h2>
<p>The <code>PerformanceMark</code> class. See <a href="perf_hooks.md#class-performancemark"><code>PerformanceMark</code></a> for more details.</p>
<h2>Class: <code>PerformanceMeasure</code></h2>
<p>The <code>PerformanceMeasure</code> class. See <a href="perf_hooks.md#class-performancemeasure"><code>PerformanceMeasure</code></a> for more details.</p>
<h2>Class: <code>PerformanceObserver</code></h2>
<p>The <code>PerformanceObserver</code> class. See <a href="perf_hooks.md#class-performanceobserver"><code>PerformanceObserver</code></a> for more details.</p>
<h2>Class: <code>PerformanceObserverEntryList</code></h2>
<p>The <code>PerformanceObserverEntryList</code> class. See
<a href="perf_hooks.md#class-performanceobserverentrylist"><code>PerformanceObserverEntryList</code></a> for more details.</p>
<h2>Class: <code>PerformanceResourceTiming</code></h2>
<p>The <code>PerformanceResourceTiming</code> class. See <a href="perf_hooks.md#class-performanceresourcetiming"><code>PerformanceResourceTiming</code></a> for
more details.</p>
<h2><code>process</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The process object. See the <a href="process.md#process"><code>process</code> object</a> section.</p>
<h2><code>queueMicrotask(callback)</code></h2>
<ul>
<li><code>callback</code> {Function} Function to be queued.</li>
</ul>
<p>The <code>queueMicrotask()</code> method queues a microtask to invoke <code>callback</code>. If
<code>callback</code> throws an exception, the <a href="process.md#process"><code>process</code> object</a> <code>'uncaughtException'</code>
event will be emitted.</p>
<p>The microtask queue is managed by V8 and may be used in a similar manner to
the <a href="process.md#processnexttickcallback-args"><code>process.nextTick()</code></a> queue, which is managed by Node.js. The
<code>process.nextTick()</code> queue is always processed before the microtask queue
within each turn of the Node.js event loop.</p>
<pre><code class="language-js">// Here, `queueMicrotask()` is used to ensure the 'load' event is always
// emitted asynchronously, and therefore consistently. Using
// `process.nextTick()` here would result in the 'load' event always emitting
// before any other promise jobs.

DataHandler.prototype.load = async function load(key) {
  const hit = this._cache.get(key);
  if (hit !== undefined) {
    queueMicrotask(() =&gt; {
      this.emit('load', hit);
    });
    return;
  }

  const data = await fetchData(key);
  this._cache.set(key, data);
  this.emit('load', data);
};
</code></pre>
<h2>Class: <code>QuotaExceededError</code></h2>
<p>The WHATWG {QuotaExceededError} class. Extends {DOMException}.</p>
<h2>Class: <code>ReadableByteStreamController</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablebytestreamcontroller"><code>ReadableByteStreamController</code></a>.</p>
<h2>Class: <code>ReadableStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablestream"><code>ReadableStream</code></a>.</p>
<h2>Class: <code>ReadableStreamBYOBReader</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablestreambyobreader"><code>ReadableStreamBYOBReader</code></a>.</p>
<h2>Class: <code>ReadableStreamBYOBRequest</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablestreambyobrequest"><code>ReadableStreamBYOBRequest</code></a>.</p>
<h2>Class: <code>ReadableStreamDefaultController</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablestreamdefaultcontroller"><code>ReadableStreamDefaultController</code></a>.</p>
<h2>Class: <code>ReadableStreamDefaultReader</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-readablestreamdefaultreader"><code>ReadableStreamDefaultReader</code></a>.</p>
<h2>Class: <code>Request</code></h2>
<p>A browser-compatible implementation of {Request}.</p>
<h2><code>require()</code></h2>
<p>This variable may appear to be global but is not. See <a href="modules.md#requireid"><code>require()</code></a>.</p>
<h2>Class: <code>Response</code></h2>
<p>A browser-compatible implementation of {Response}.</p>
<h2><code>sessionStorage</code></h2>
<blockquote>
<p>Stability: 1.2 - Release candidate. Disable this API with <a href="cli.md#--no-experimental-webstorage"><code>--no-experimental-webstorage</code></a>.</p>
</blockquote>
<p>A browser-compatible implementation of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"><code>sessionStorage</code></a>. Data is stored in
memory, with a storage quota of 10 MB. <code>sessionStorage</code> data persists only within
the currently running process, and is not shared between workers.</p>
<h2><code>setImmediate(callback[, ...args])</code></h2>
<p><a href="timers.md#setimmediatecallback-args"><code>setImmediate</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2><code>setInterval(callback, delay[, ...args])</code></h2>
<p><a href="timers.md#setintervalcallback-delay-args"><code>setInterval</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2><code>setTimeout(callback, delay[, ...args])</code></h2>
<p><a href="timers.md#settimeoutcallback-delay-args"><code>setTimeout</code></a> is described in the <a href="timers.md">timers</a> section.</p>
<h2>Class: <code>Storage</code></h2>
<blockquote>
<p>Stability: 1.2 - Release candidate. Disable this API with <a href="cli.md#--no-experimental-webstorage"><code>--no-experimental-webstorage</code></a>.</p>
</blockquote>
<p>A browser-compatible implementation of {Storage}.</p>
<h2><code>structuredClone(value[, options])</code></h2>
<p>The WHATWG <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone"><code>structuredClone</code></a> method.</p>
<h2>Class: <code>SubtleCrypto</code></h2>
<p>A browser-compatible implementation of {SubtleCrypto}. This global is available
only if the Node.js binary was compiled with including support for the
<code>node:crypto</code> module.</p>
<h2>Class: <code>TextDecoder</code></h2>
<p>The WHATWG <code>TextDecoder</code> class. See the <a href="util.md#class-utiltextdecoder"><code>TextDecoder</code></a> section.</p>
<h2>Class: <code>TextDecoderStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-textdecoderstream"><code>TextDecoderStream</code></a>.</p>
<h2>Class: <code>TextEncoder</code></h2>
<p>The WHATWG <code>TextEncoder</code> class. See the <a href="util.md#class-utiltextencoder"><code>TextEncoder</code></a> section.</p>
<h2>Class: <code>TextEncoderStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-textencoderstream"><code>TextEncoderStream</code></a>.</p>
<h2>Class: <code>TransformStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-transformstream"><code>TransformStream</code></a>.</p>
<h2>Class: <code>TransformStreamDefaultController</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-transformstreamdefaultcontroller"><code>TransformStreamDefaultController</code></a>.</p>
<h2>Class: <code>URL</code></h2>
<p>The WHATWG <code>URL</code> class. See the <a href="url.md#class-url"><code>URL</code></a> section.</p>
<h2>Class: <code>URLPattern</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The WHATWG <code>URLPattern</code> class. See the <a href="url.md#class-urlpattern"><code>URLPattern</code></a> section.</p>
<h2>Class: <code>URLSearchParams</code></h2>
<p>The WHATWG <code>URLSearchParams</code> class. See the <a href="url.md#class-urlsearchparams"><code>URLSearchParams</code></a> section.</p>
<h2>Class: <code>WebAssembly</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The object that acts as the namespace for all W3C
<a href="https://webassembly.org">WebAssembly</a> related functionality. See the
<a href="https://developer.mozilla.org/en-US/docs/WebAssembly">Mozilla Developer Network</a> for usage and compatibility.</p>
<h2>Class: <code>WebSocket</code></h2>
<p>A browser-compatible implementation of {WebSocket}.</p>
<h2>Class: <code>Worker</code></h2>
<blockquote>
<p>Stability: 1 - Experimental. Enable this API with the
<a href="cli.md#--experimental-web-worker"><code>--experimental-web-worker</code></a> CLI flag.</p>
</blockquote>
<p>A mostly browser-compatible implementation of Web Workers of the <a href="https://html.spec.whatwg.org/multipage/workers.html">HTML Standard</a>,
implemented on top of <a href="worker_threads.md"><code>node:worker_threads</code></a>. Threads created with it
are given the {DedicatedWorkerGlobalScope} API (<code>self</code>,
<code>name</code>, <code>location</code>, <code>navigator</code>, <code>postMessage()</code>, <code>close()</code>, and
<code>importScripts()</code>), in addition to the usual Node.js globals, such as <code>process</code>.</p>
<pre><code class="language-js">// worker.js
addEventListener('message', (event) =&gt; {
  postMessage(`${event.data} from ${name}!`);
});
</code></pre>
<pre><code class="language-js">// main.js
const worker = new Worker('./worker.js', { name: 'greeter' });

worker.addEventListener('message', (event) =&gt; {
  console.log(event.data); // Prints: Hello from greeter!
  worker.terminate();
});

worker.postMessage('Hello');
</code></pre>
<p>Because their lifetime and sharing model depend on origins and
browsing contexts, Node.js does not currently implement <code>SharedWorker</code>.</p>
<h3>Loading worker scripts</h3>
<p>Worker scripts are read synchronously from the local file system or from
memory rather than fetched over the network, which changes which URLs are
accepted and how failures are reported:</p>
<ul>
<li><code>new Worker()</code> and <code>importScripts()</code> accept only <code>file:</code>, <code>data:</code>, and
<code>blob:</code> URLs. Any other scheme makes <code>new Worker()</code> throw a
<code>NotSupportedError</code> and <code>importScripts()</code> throw a <code>NetworkError</code>.</li>
<li>A script that cannot be read makes <code>importScripts()</code> throw a <code>NetworkError</code>;
for <code>new Worker()</code> it fires an <code>error</code> event at the <code>Worker</code> object.</li>
<li>Redirects, the <code>nosniff</code> check, and HTTP MIME type validation do not apply.
MIME types are validated only for <code>data:</code> and <code>blob:</code> URLs. The
<code>credentials</code> option is validated for API compatibility but has no effect,
since no network request is made.</li>
<li>On the main thread, relative script URLs are resolved against the current
working directory, because there is no document base URL. Within a worker
they are resolved against the worker's own URL (as is done in the spec).</li>
<li>For <code>blob:</code> URLs, the script must be held in memory, so blobs backed by a file,
such as those returned by <a href="fs.md#fsopenasblobpath-options"><code>fs.openAsBlob()</code></a>, cannot be used.</li>
</ul>
<p><a href="typescript.md#type-stripping">Type stripping</a> only applies to module workers loaded from
<code>file:</code> URLs. The <code>type</code> option, not the file extension, decides how an entry is
run, so a <code>.cts</code> entry is still evaluated as an ES module.</p>
<h3>Differences from the HTML Standard</h3>
<p>Besides script loading, mentioned above:</p>
<ul>
<li>Node.js has no origin model, so same-origin and cross-origin distinctions do
not exist and <code>location.origin</code> is <code>'null'</code> for every supported scheme.</li>
<li><code>close()</code> terminates the worker immediately instead of following the
specification's &quot;closing flag&quot; algorithm, so code remaining in the current
task after <code>close()</code> is not executed.</li>
<li>The worker global is the normal Node.js global object with
<code>DedicatedWorkerGlobalScope</code> inserted into its prototype chain, rather than
a fresh global created from the interface. Node.js globals such as
<code>process</code>, <code>Buffer</code>, and <code>require()</code> remain available to worker scripts.</li>
<li><code>ErrorEvent</code>s dispatched at <code>Worker</code> instances include <code>message</code> and
<code>error</code>, but <code>filename</code>, <code>lineno</code>, and <code>colno</code> are always <code>''</code>, <code>0</code>, and
<code>0</code>. An uncaught exception terminates the worker thread, and an unhandled
<code>error</code> event is not propagated further: it neither reaches the parent's
global scope nor affects the exit code of the process.</li>
<li>The following {WorkerGlobalScope} events are never dispatched, although
their handler properties exist: <code>languagechange</code>, <code>online</code>, and <code>offline</code>,
since these concepts do not exist in Node.js; <code>rejectionhandled</code> and
<code>unhandledrejection</code>, since Node.js exposes the equivalent does not
implement the <code>PromiseRejectionEvent</code> interface or the per-rejection
<code>preventDefault()</code> behavior required by the HTML Standard.</li>
<li>Module workers loaded from <code>file:</code> URLs support <a href="typescript.md#type-stripping">type stripping</a>.</li>
</ul>
<h3>Web Workers and <code>node:worker_threads</code></h3>
<p>Every Web Worker is backed by a <a href="worker_threads.md"><code>node:worker_threads</code></a> {Worker}, so the
two APIs share their threading, structured clone, and transfer semantics.
Inside a worker, [<code>worker_threads.parentPort</code>][] is the port behind
<code>self.postMessage()</code> and the worker's <code>message</code> events, <code>isMainThread</code> is
<code>false</code>, and <code>workerData</code> is <code>undefined</code>.</p>
<p>Web Workers, like <code>node:worker_threads</code> workers, keep the event loop alive by
default. In Node.js, Web Workers implement the <a href="process.md#processrefmayberefable">Refable protocol</a>, and can be
ref'd and unref'd using <code>process.ref(worker)</code> and <code>process.unref(worker)</code>.</p>
<p>As a rule of thumb, use <a href="worker_threads.md"><code>node:worker_threads</code></a> directly when a program
needs <code>workerData</code>, a custom <code>env</code> or <code>execArgv</code>, resource limits, stdio
redirection, the <code>'online'</code> and <code>'exit'</code> events, or <code>worker.threadId</code>;
<code>Worker</code> accepts only the <code>name</code>, <code>type</code>, and <code>credentials</code> options and,
per the specification, its <code>terminate()</code> returns <code>undefined</code>, rather than
a promise. Threads started through <a href="worker_threads.md"><code>node:worker_threads</code></a> are ordinary
Node.js threads and do not get the worker global scope APIs.</p>
<h2>Class: <code>WritableStream</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-writablestream"><code>WritableStream</code></a>.</p>
<h2>Class: <code>WritableStreamDefaultController</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-writablestreamdefaultcontroller"><code>WritableStreamDefaultController</code></a>.</p>
<h2>Class: <code>WritableStreamDefaultWriter</code></h2>
<p>A browser-compatible implementation of <a href="webstreams.md#class-writablestreamdefaultwriter"><code>WritableStreamDefaultWriter</code></a>.</p>
