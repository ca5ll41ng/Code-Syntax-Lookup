---
id: "js-en-function-node-util"
language: "js"
lang: "en"
category: "function"
name: "node:util"
title: "Util"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/util.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Util

<h1>Util</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:util</code> module supports the needs of Node.js internal APIs. Many of the
utilities are useful for application and module developers as well. To access
it:</p>
<pre><code class="language-mjs">import util from 'node:util';
</code></pre>
<pre><code class="language-cjs">const util = require('node:util');
</code></pre>
<h2><code>util.callbackify(original)</code></h2>
<ul>
<li><code>original</code> {Function} An <code>async</code> function</li>
<li>Returns: {Function} a callback style function</li>
</ul>
<p>Takes an <code>async</code> function (or a function that returns a <code>Promise</code>) and returns a
function following the error-first callback style, i.e. taking
an <code>(err, value) =&gt; ...</code> callback as the last argument. In the callback, the
first argument will be the rejection reason (or <code>null</code> if the <code>Promise</code>
resolved), and the second argument will be the resolved value.</p>
<pre><code class="language-mjs">import { callbackify } from 'node:util';

async function fn() {
  return 'hello world';
}
const callbackFunction = callbackify(fn);

callbackFunction((err, ret) =&gt; {
  if (err) throw err;
  console.log(ret);
});
</code></pre>
<pre><code class="language-cjs">const { callbackify } = require('node:util');

async function fn() {
  return 'hello world';
}
const callbackFunction = callbackify(fn);

callbackFunction((err, ret) =&gt; {
  if (err) throw err;
  console.log(ret);
});
</code></pre>
<p>Will print:</p>
<pre><code class="language-text">hello world
</code></pre>
<p>The callback is executed asynchronously, and will have a limited stack trace.
If the callback throws, the process will emit an <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a>
event, and if not handled will exit.</p>
<p>Since <code>null</code> has a special meaning as the first argument to a callback, if a
wrapped function rejects a <code>Promise</code> with a falsy value as a reason, the value
is wrapped in an <code>Error</code> with the original value stored in a field named
<code>reason</code>.</p>
<pre><code class="language-mjs">import util from 'node:util';

function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) =&gt; {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  err &amp;&amp; Object.hasOwn(err, 'reason') &amp;&amp; err.reason === null;  // true
});
</code></pre>
<pre><code class="language-cjs">const util = require('node:util');

function fn() {
  return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) =&gt; {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  err &amp;&amp; Object.hasOwn(err, 'reason') &amp;&amp; err.reason === null;  // true
});
</code></pre>
<h2><code>util.convertProcessSignalToExitCode(signal)</code></h2>
<ul>
<li><code>signal</code> {string} A signal name (e.g. <code>'SIGTERM'</code>)</li>
<li>Returns: {number} The exit code corresponding to <code>signal</code></li>
</ul>
<p>The <code>util.convertProcessSignalToExitCode()</code> method converts a signal name to its
corresponding POSIX exit code. Following the POSIX standard, the exit code
for a process terminated by a signal is calculated as <code>128 + signal number</code>.</p>
<p>If <code>signal</code> is not a valid signal name, then an error will be thrown. See
<a href="https://man7.org/linux/man-pages/man7/signal.7.html"><code>signal(7)</code></a> for a list of valid signals.</p>
<pre><code class="language-mjs">import { convertProcessSignalToExitCode } from 'node:util';

console.log(convertProcessSignalToExitCode('SIGTERM')); // 143 (128 + 15)
console.log(convertProcessSignalToExitCode('SIGKILL')); // 137 (128 + 9)
</code></pre>
<pre><code class="language-cjs">const { convertProcessSignalToExitCode } = require('node:util');

console.log(convertProcessSignalToExitCode('SIGTERM')); // 143 (128 + 15)
console.log(convertProcessSignalToExitCode('SIGKILL')); // 137 (128 + 9)
</code></pre>
<p>This is particularly useful when working with processes to determine
the exit code based on the signal that terminated the process.</p>
<h2><code>util.debuglog(section[, callback])</code></h2>
<ul>
<li><code>section</code> {string} A string identifying the portion of the application for
which the <code>debuglog</code> function is being created.</li>
<li><code>callback</code> {Function} A callback invoked the first time the logging function
is called with a function argument that is a more optimized logging function.</li>
<li>Returns: {Function} The logging function</li>
</ul>
<p>The <code>util.debuglog()</code> method is used to create a function that conditionally
writes debug messages to <code>stderr</code> based on the existence of the <code>NODE_DEBUG</code>
environment variable. If the <code>section</code> name appears within the value of that
environment variable, then the returned function operates similar to
<a href="console.md#consoleerrordata-args"><code>console.error()</code></a>. If not, then the returned function is a no-op.</p>
<pre><code class="language-mjs">import { debuglog } from 'node:util';
const log = debuglog('foo');

log('hello from foo [%d]', 123);
</code></pre>
<pre><code class="language-cjs">const { debuglog } = require('node:util');
const log = debuglog('foo');

log('hello from foo [%d]', 123);
</code></pre>
<p>If this program is run with <code>NODE_DEBUG=foo</code> in the environment, then
it will output something like:</p>
<pre><code class="language-console">FOO 3245: hello from foo [123]
</code></pre>
<p>where <code>3245</code> is the process id. If it is not run with that
environment variable set, then it will not print anything.</p>
<p>The <code>section</code> supports wildcard also:</p>
<pre><code class="language-mjs">import { debuglog } from 'node:util';
const log = debuglog('foo-bar');

log('hi there, it\'s foo-bar [%d]', 2333);
</code></pre>
<pre><code class="language-cjs">const { debuglog } = require('node:util');
const log = debuglog('foo-bar');

log('hi there, it\'s foo-bar [%d]', 2333);
</code></pre>
<p>if it is run with <code>NODE_DEBUG=foo*</code> in the environment, then it will output
something like:</p>
<pre><code class="language-console">FOO-BAR 3257: hi there, it's foo-bar [2333]
</code></pre>
<p>Multiple comma-separated <code>section</code> names may be specified in the <code>NODE_DEBUG</code>
environment variable: <code>NODE_DEBUG=fs,net,tls</code>.</p>
<p>The optional <code>callback</code> argument can be used to replace the logging function
with a different function that doesn't have any initialization or
unnecessary wrapping.</p>
<pre><code class="language-mjs">import { debuglog } from 'node:util';
let log = debuglog('internals', (debug) =&gt; {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  log = debug;
});
</code></pre>
<pre><code class="language-cjs">const { debuglog } = require('node:util');
let log = debuglog('internals', (debug) =&gt; {
  // Replace with a logging function that optimizes out
  // testing if the section is enabled
  log = debug;
});
</code></pre>
<h3><code>debuglog().enabled</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>util.debuglog().enabled</code> getter is used to create a test that can be used
in conditionals based on the existence of the <code>NODE_DEBUG</code> environment variable.
If the <code>section</code> name appears within the value of that environment variable,
then the returned value will be <code>true</code>. If not, then the returned value will be
<code>false</code>.</p>
<pre><code class="language-mjs">import { debuglog } from 'node:util';
const enabled = debuglog('foo').enabled;
if (enabled) {
  console.log('hello from foo [%d]', 123);
}
</code></pre>
<pre><code class="language-cjs">const { debuglog } = require('node:util');
const enabled = debuglog('foo').enabled;
if (enabled) {
  console.log('hello from foo [%d]', 123);
}
</code></pre>
<p>If this program is run with <code>NODE_DEBUG=foo</code> in the environment, then it will
output something like:</p>
<pre><code class="language-console">hello from foo [123]
</code></pre>
<h2><code>util.debug(section)</code></h2>
<p>Alias for <code>util.debuglog</code>. Usage allows for readability of that doesn't imply
logging when only using <code>util.debuglog().enabled</code>.</p>
<h2><code>util.deprecate(fn, msg[, code[, options]])</code></h2>
<ul>
<li><code>fn</code> {Function} The function that is being deprecated.</li>
<li><code>msg</code> {string} A warning message to display when the deprecated function is
invoked.</li>
<li><code>code</code> {string} A deprecation code. See the <a href="deprecations.md#list-of-deprecated-apis">list of deprecated APIs</a> for a
list of codes.</li>
<li><code>options</code> {Object}
<ul>
<li><code>modifyPrototype</code> {boolean} When false do not change the prototype of object
while emitting the deprecation warning.
<strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li>Returns: {Function} The deprecated function wrapped to emit a warning.</li>
</ul>
<p>The <code>util.deprecate()</code> method wraps <code>fn</code> (which may be a function or class) in
such a way that it is marked as deprecated.</p>
<pre><code class="language-mjs">import { deprecate } from 'node:util';

export const obsoleteFunction = deprecate(() =&gt; {
  // Do something here.
}, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
</code></pre>
<pre><code class="language-cjs">const { deprecate } = require('node:util');

exports.obsoleteFunction = deprecate(() =&gt; {
  // Do something here.
}, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
</code></pre>
<p>When called, <code>util.deprecate()</code> will return a function that will emit a
<code>DeprecationWarning</code> using the <a href="process.md#event-warning"><code>'warning'</code></a> event. The warning will
be emitted and printed to <code>stderr</code> the first time the returned function is
called. After the warning is emitted, the wrapped function is called without
emitting a warning.</p>
<p>If the same optional <code>code</code> is supplied in multiple calls to <code>util.deprecate()</code>,
the warning will be emitted only once for that <code>code</code>.</p>
<pre><code class="language-mjs">import { deprecate } from 'node:util';

const fn1 = deprecate(
  () =&gt; 'a value',
  'deprecation message',
  'DEP0001',
);
const fn2 = deprecate(
  () =&gt; 'a  different value',
  'other dep message',
  'DEP0001',
);
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code
</code></pre>
<pre><code class="language-cjs">const { deprecate } = require('node:util');

const fn1 = deprecate(
  function() {
    return 'a value';
  },
  'deprecation message',
  'DEP0001',
);
const fn2 = deprecate(
  function() {
    return 'a  different value';
  },
  'other dep message',
  'DEP0001',
);
fn1(); // Emits a deprecation warning with code DEP0001
fn2(); // Does not emit a deprecation warning because it has the same code
</code></pre>
<p>If either the <code>--no-deprecation</code> or <code>--no-warnings</code> command-line flags are
used, or if the <code>process.noDeprecation</code> property is set to <code>true</code> <em>prior</em> to
the first deprecation warning, the <code>util.deprecate()</code> method does nothing.</p>
<p>If the <code>--trace-deprecation</code> or <code>--trace-warnings</code> command-line flags are set,
or the <code>process.traceDeprecation</code> property is set to <code>true</code>, a warning and a
stack trace are printed to <code>stderr</code> the first time the deprecated function is
called.</p>
<p>If the <code>--throw-deprecation</code> command-line flag is set, or the
<code>process.throwDeprecation</code> property is set to <code>true</code>, then an exception will be
thrown when the deprecated function is called.</p>
<p>The <code>--throw-deprecation</code> command-line flag and <code>process.throwDeprecation</code>
property take precedence over <code>--trace-deprecation</code> and
<code>process.traceDeprecation</code>.</p>
<h2><code>util.debounce(fn, wait[, options])</code></h2>
<ul>
<li><code>fn</code> {Function} The function to debounce.</li>
<li><code>wait</code> {integer} The number of milliseconds to delay <code>fn</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>leading</code> {boolean} When <code>true</code>, invokes <code>fn</code> immediately when a new
debounce window begins. <strong>Default:</strong> <code>false</code>.</li>
<li><code>rejectOnCancel</code> {boolean} When <code>true</code>, a call superseded by a later call
rejects with an <code>AbortError</code>. <strong>Default:</strong> <code>false</code>.</li>
<li><code>signal</code> {AbortSignal} An <code>AbortSignal</code> that cancels pending calls and
prevents future calls when aborted.</li>
</ul>
</li>
<li>Returns: {Function} The debounced function.</li>
</ul>
<p>Creates a function that delays calling <code>fn</code> until <code>wait</code> milliseconds have
elapsed since the most recent invocation. The debounced function returns a
{Promise} for the value returned by <code>fn</code>. If <code>fn</code> throws or returns a rejected
promise, the returned promise is rejected with the same reason.</p>
<p>When the debounced function is called more than once before the delay expires,
<code>fn</code> receives the arguments from the most recent call. By default, the promises
from all calls resolve or reject with the result of that invocation. If
<code>options.rejectOnCancel</code> is <code>true</code>, the promises from superseded calls reject
with an <code>AbortError</code> instead.</p>
<p>When <code>options.leading</code> is <code>true</code>, the first call in a debounce window invokes
<code>fn</code> immediately. Calls made during that window are delayed until <code>wait</code>
milliseconds have elapsed since the most recent call. A trailing invocation
only occurs if the debounced function was called again during the window.
The window begins before <code>fn</code> is invoked, so recursive calls and calls made
while an asynchronous <code>fn</code> is pending are part of the same window if they occur
before the delay expires. This also applies to calls made after a synchronous
<code>fn</code> returns but before the delay expires.</p>
<p>If <code>options.signal</code> is aborted, pending and future calls reject with an
<code>AbortError</code>, with the signal's reason set as the error's <code>cause</code>, and <code>fn</code> is
not invoked by those calls. If the signal is already aborted, <code>debounce()</code>
throws an <code>AbortError</code>.</p>
<p>The returned function has the following properties:</p>
<ul>
<li><code>cancel([reason])</code> cancels the current debounce window. Its pending promises
reject with an <code>AbortError</code>. If provided, <code>reason</code> is set as the error's
<code>cause</code>.</li>
<li><code>flush()</code> cancels the delay and invokes <code>fn</code> immediately. It has no effect if
no invocation is pending.</li>
<li><code>pending</code> {Promise|null} is the promise returned by the most recent call in
the current debounce window, or <code>null</code> if no invocation is pending.</li>
<li><code>pendingCount</code> {integer} is the number of calls awaiting the invocation in
the current debounce window.</li>
<li><code>ref()</code> makes the pending and future timeout keep the Node.js event loop
active. Returns the debounced function.</li>
<li><code>unref()</code> allows the event loop to exit while a timeout is pending. This also
applies to future timeouts. Returns the debounced function.</li>
</ul>
<p>When invoked, <code>fn</code> has the debounced function as its <code>this</code> value. After a
trailing invocation, a new debounce window can begin even if a promise returned
by <code>fn</code> is still pending. The debounced function preserves the <code>name</code> and
<code>length</code> of <code>fn</code>.</p>
<pre><code class="language-mjs">import { setTimeout as wait } from 'node:timers/promises';
import { debounce } from 'node:util';

const fn = debounce(async (value) =&gt; {
  await wait(100);
  return value;
}, 50);

const first = fn(1);
const second = fn(2);

console.log(await first);  // 2
console.log(await second); // 2
</code></pre>
<p>A debounced function can be used to trigger an action after a period of
inactivity. Each call resets the timeout:</p>
<pre><code class="language-cjs">const { debounce } = require('node:util');

const onInactivity = debounce(() =&gt; {
  console.log('No activity for 5 seconds');
}, 5_000).unref();

process.stdin.on('data', (data) =&gt; {
  console.log(`Received ${data.length} bytes`);
  onInactivity();
});

// Start the initial inactivity timeout.
onInactivity();
</code></pre>
<h2><code>util.throttle(fn, limit, interval[, options])</code></h2>
<ul>
<li><code>fn</code> {Function} The function to throttle.</li>
<li><code>limit</code> {integer} The maximum number of times to invoke <code>fn</code> during an
interval. Must be greater than <code>0</code>.</li>
<li><code>interval</code> {integer} The length of each interval in milliseconds.</li>
<li><code>options</code> {Object}
<ul>
<li><code>concurrency</code> {number} The maximum number of invocations of <code>fn</code> whose
return values may be unsettled at once. Must be a positive integer or
<code>Infinity</code>. <strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>maxPending</code> {number} The maximum number of calls that may be queued when
<code>overflow</code> is <code>'queue'</code>. Must be a non-negative integer or <code>Infinity</code>.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>overflow</code> {string} Determines how calls exceeding the limit are handled.
<strong>Default:</strong> <code>'queue'</code>.
<ul>
<li><code>'queue'</code>: Queue calls in the order received.</li>
<li><code>'drop'</code>: Reject calls immediately without queueing them.</li>
</ul>
</li>
<li><code>signal</code> {AbortSignal} An <code>AbortSignal</code> that cancels pending calls and
prevents future calls when aborted.</li>
<li><code>strict</code> {boolean} When <code>true</code>, ensures that <code>limit</code> is not exceeded during
any rolling interval. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Function} The throttled function.</li>
</ul>
<p>Creates a function that limits how often <code>fn</code> is invoked. By default, calls that
exceed the limit are queued in the order received rather than discarded. The
throttled function returns a {Promise} for the value returned by <code>fn</code>. If <code>fn</code>
throws or returns a rejected promise, the returned promise is rejected with the
same reason.</p>
<p>An invocation starts only when both rate and concurrency capacity are
available. Rate capacity is consumed when <code>fn</code> starts, not when a call enters
the queue. Concurrency capacity is released when the value returned by <code>fn</code>
settles. Non-promise values settle during the next microtask.</p>
<p>When <code>options.overflow</code> is <code>'drop'</code>, calls made without available rate or
concurrency capacity are rejected immediately. When <code>options.overflow</code> is
<code>'queue'</code> and <code>options.maxPending</code> calls are already queued, additional calls
are also rejected immediately. <code>maxPending</code> has no effect when <code>overflow</code> is
<code>'drop'</code>.</p>
<p>In both cases, rejected calls return a promise rejected with an
<code>ERR_THROTTLED</code> error. The rejected promise is marked as handled, so ignoring it
does not emit an <code>'unhandledRejection'</code> event. Awaiting or explicitly handling
the promise still observes the rejection. Rejected calls do not consume rate
or concurrency capacity, enter the queue, or schedule a timeout.</p>
<p>By default, the interval begins when the first call in a new window invokes
<code>fn</code>. Up to <code>limit</code> calls can invoke <code>fn</code> during that window. Queued calls are
processed in groups of up to <code>limit</code> as each subsequent window begins. This
windowed behavior can result in calls occurring close together at a window
boundary.</p>
<p>When <code>options.strict</code> is <code>true</code>, invocation times are tracked individually.
This ensures that no more than <code>limit</code> calls begin during any rolling interval,
at the cost of additional bookkeeping.</p>
<p>If <code>options.signal</code> is aborted, pending and future calls reject with an
<code>AbortError</code>, with the signal's reason set as the error's <code>cause</code>, and <code>fn</code> is
not invoked by those calls. If the signal is already aborted, <code>throttle()</code>
throws an <code>AbortError</code>.</p>
<p>The returned function has the following properties:</p>
<ul>
<li><code>cancel([reason])</code> cancels all queued calls and resets the current throttle
window. The queued promises reject with an <code>AbortError</code>. If provided,
<code>reason</code> is set as the error's <code>cause</code>. Does not cancel invocations that have
already started.</li>
<li><code>hasImmediateCapacity()</code> returns <code>true</code> if a call made at that moment could
invoke <code>fn</code> without being queued or rejected. The check does not reserve
capacity, and the throttled function always checks again when called. It
returns <code>false</code> while calls are queued to preserve their order. Callers can
avoid creating a timeout by only calling the throttled function when this
method returns <code>true</code>.</li>
<li><code>pending</code> {Promise|null} is the promise returned by the most recently queued
call, or <code>null</code> if no invocation is queued.</li>
<li><code>pendingCount</code> {integer} is the number of calls awaiting invocation.</li>
<li><code>activeCount</code> {integer} is the number of invocations whose return values have
not settled.</li>
<li><code>ref()</code> makes the pending and future timeout keep the Node.js event loop
active. Returns the throttled function.</li>
<li><code>unref()</code> allows the event loop to exit while a timeout is pending. This also
applies to future timeouts. Returns the throttled function.</li>
</ul>
<p>Calls that have already invoked <code>fn</code> are not affected by <code>cancel()</code> or by an
aborted signal. When invoked, <code>fn</code> has the throttled function as its <code>this</code>
value. The throttled function preserves the <code>name</code> and <code>length</code> of <code>fn</code>.</p>
<pre><code class="language-mjs">import { throttle } from 'node:util';

const request = throttle(async (id) =&gt; {
  const response = await fetch(`https://example.com/items/${id}`);
  return response.json();
}, 2, 1_000);

// At most two requests begin during each one-second interval. All other calls
// remain queued and retain their original arguments.
const results = await Promise.all([
  request(1),
  request(2),
  request(3),
  request(4),
]);
</code></pre>
<h2><code>util.diff(actual, expected)</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li>
<p><code>actual</code> {Array|string} The first value to compare</p>
</li>
<li>
<p><code>expected</code> {Array|string} The second value to compare</p>
</li>
<li>
<p>Returns: {Array} An array of difference entries. Each entry is an array with two elements:</p>
<ul>
<li><code>0</code> {number} Operation code: <code>-1</code> for delete, <code>0</code> for no-op/unchanged, <code>1</code> for insert</li>
<li><code>1</code> {string} The value associated with the operation</li>
</ul>
</li>
<li>
<p>Algorithm complexity: O(N*D), where:</p>
</li>
<li>
<p>N is the total length of the two sequences combined (N = actual.length + expected.length)</p>
</li>
<li>
<p>D is the edit distance (the minimum number of operations required to transform one sequence into the other).</p>
</li>
</ul>
<p><a href="#utildiffactual-expected"><code>util.diff()</code></a> compares two string or array values and returns an array of difference entries.
It uses the Myers diff algorithm to compute minimal differences, which is the same algorithm
used internally by assertion error messages.</p>
<p>If the values are equal, an empty array is returned.</p>
<pre><code class="language-js">const { diff } = require('node:util');

// Comparing strings
const actualString = '12345678';
const expectedString = '12!!5!7!';
console.log(diff(actualString, expectedString));
// [
//   [0, '1'],
//   [0, '2'],
//   [1, '3'],
//   [1, '4'],
//   [-1, '!'],
//   [-1, '!'],
//   [0, '5'],
//   [1, '6'],
//   [-1, '!'],
//   [0, '7'],
//   [1, '8'],
//   [-1, '!'],
// ]
// Comparing arrays
const actualArray = ['1', '2', '3'];
const expectedArray = ['1', '3', '4'];
console.log(diff(actualArray, expectedArray));
// [
//   [0, '1'],
//   [1, '2'],
//   [0, '3'],
//   [-1, '4'],
// ]
// Equal values return empty array
console.log(diff('same', 'same'));
// []
</code></pre>
<h2><code>util.format(format[, ...args])</code></h2>
<ul>
<li><code>format</code> {string} A <code>printf</code>-like format string.</li>
</ul>
<p>The <code>util.format()</code> method returns a formatted string using the first argument
as a <code>printf</code>-like format string which can contain zero or more format
specifiers. Each specifier is replaced with the converted value from the
corresponding argument. Supported specifiers are:</p>
<ul>
<li><code>%s</code>: <code>String</code> will be used to convert all values except <code>BigInt</code>, <code>Object</code>
and <code>-0</code>. <code>BigInt</code> values will be represented with an <code>n</code> and Objects that
have neither a user defined <code>toString</code> function nor <code>Symbol.toPrimitive</code> function are inspected using <code>util.inspect()</code>
with options <code>{ depth: 0, colors: false, compact: 3 }</code>.</li>
<li><code>%d</code>: <code>Number</code> will be used to convert all values except <code>BigInt</code> and
<code>Symbol</code>.</li>
<li><code>%i</code>: <code>parseInt(value, 10)</code> is used for all values except <code>BigInt</code> and
<code>Symbol</code>.</li>
<li><code>%f</code>: <code>parseFloat(value)</code> is used for all values except <code>Symbol</code>.</li>
<li><code>%j</code>: JSON. Replaced with the string <code>'[Circular]'</code> if the argument contains
circular references.</li>
<li><code>%o</code>: <code>Object</code>. A string representation of an object with generic JavaScript
object formatting. Similar to <code>util.inspect()</code> with options
<code>{ showHidden: true, showProxy: true }</code>. This will show the full object
including non-enumerable properties and proxies.</li>
<li><code>%O</code>: <code>Object</code>. A string representation of an object with generic JavaScript
object formatting. Similar to <code>util.inspect()</code> without options. This will show
the full object not including non-enumerable properties and proxies.</li>
<li><code>%c</code>: <code>CSS</code>. This specifier is ignored and will skip any CSS passed in.</li>
<li><code>%%</code>: single percent sign (<code>'%'</code>). This does not consume an argument.</li>
<li>Returns: {string} The formatted string</li>
</ul>
<p>If a specifier does not have a corresponding argument, it is not replaced:</p>
<pre><code class="language-js">util.format('%s:%s', 'foo');
// Returns: 'foo:%s'
</code></pre>
<p>Values that are not part of the format string are formatted using
<code>util.inspect()</code> if their type is not <code>string</code>.</p>
<p>If there are more arguments passed to the <code>util.format()</code> method than the
number of specifiers, the extra arguments are concatenated to the returned
string, separated by spaces:</p>
<pre><code class="language-js">util.format('%s:%s', 'foo', 'bar', 'baz');
// Returns: 'foo:bar baz'
</code></pre>
<p>If the first argument does not contain a valid format specifier, <code>util.format()</code>
returns a string that is the concatenation of all arguments separated by spaces:</p>
<pre><code class="language-js">util.format(1, 2, 3);
// Returns: '1 2 3'
</code></pre>
<p>If only one argument is passed to <code>util.format()</code>, it is returned as it is
without any formatting:</p>
<pre><code class="language-js">util.format('%% %s');
// Returns: '%% %s'
</code></pre>
<p><code>util.format()</code> is a synchronous method that is intended as a debugging tool.
Some input values can have a significant performance overhead that can block the
event loop. Use this function with care and never in a hot code path.</p>
<h2><code>util.formatWithOptions(inspectOptions, format[, ...args])</code></h2>
<ul>
<li><code>inspectOptions</code> {Object}</li>
<li><code>format</code> {string}</li>
</ul>
<p>This function is identical to <a href="#utilformatformat-args"><code>util.format()</code></a>, except in that it takes
an <code>inspectOptions</code> argument which specifies options that are passed along to
<a href="#utilinspectobject-options"><code>util.inspect()</code></a>.</p>
<pre><code class="language-js">util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
// Returns 'See object { foo: 42 }', where `42` is colored as a number
// when printed to a terminal.
</code></pre>
<h2><code>util.getCallSites([frameCount][, options])</code></h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>frameCount</code> {integer} Optional number of frames to capture as call site objects.
<strong>Default:</strong> <code>10</code>. Allowable range is between 1 and 200.</li>
<li><code>options</code> {Object} Optional
<ul>
<li><code>sourceMap</code> {boolean} Reconstruct the original location in the stacktrace from the source-map.
Enabled by default with the flag <code>--enable-source-maps</code>.</li>
</ul>
</li>
<li>Returns: {Object[]} An array of call site objects
<ul>
<li><code>functionName</code> {string} Returns the name of the function associated with this call site.</li>
<li><code>scriptName</code> {string} Returns the name of the resource that contains the script for the
function for this call site.</li>
<li><code>scriptId</code> {string} Returns the unique id of the script, as in Chrome DevTools protocol <a href="https://chromedevtools.github.io/devtools-protocol/1-3/Runtime/#type-ScriptId"><code>Runtime.ScriptId</code></a>.</li>
<li><code>lineNumber</code> {number} Returns the JavaScript script line number (1-based).</li>
<li><code>columnNumber</code> {number} Returns the JavaScript script column number (1-based).</li>
</ul>
</li>
</ul>
<p>Returns an array of call site objects containing the stack of
the caller function.</p>
<p>Unlike accessing an <code>error.stack</code>, the result returned from this API is not
interfered with <code>Error.prepareStackTrace</code>.</p>
<pre><code class="language-mjs">import { getCallSites } from 'node:util';

function exampleFunction() {
  const callSites = getCallSites();

  console.log('Call Sites:');
  callSites.forEach((callSite, index) =&gt; {
    console.log(`CallSite ${index + 1}:`);
    console.log(`Function Name: ${callSite.functionName}`);
    console.log(`Script Name: ${callSite.scriptName}`);
    console.log(`Line Number: ${callSite.lineNumber}`);
    console.log(`Column Number: ${callSite.columnNumber}`);
  });
  // CallSite 1:
  // Function Name: exampleFunction
  // Script Name: /home/example.js
  // Line Number: 5
  // Column Number: 26

  // CallSite 2:
  // Function Name: anotherFunction
  // Script Name: /home/example.js
  // Line Number: 22
  // Column Number: 3

  // ...
}

// A function to simulate another stack layer
function anotherFunction() {
  exampleFunction();
}

anotherFunction();
</code></pre>
<pre><code class="language-cjs">const { getCallSites } = require('node:util');

function exampleFunction() {
  const callSites = getCallSites();

  console.log('Call Sites:');
  callSites.forEach((callSite, index) =&gt; {
    console.log(`CallSite ${index + 1}:`);
    console.log(`Function Name: ${callSite.functionName}`);
    console.log(`Script Name: ${callSite.scriptName}`);
    console.log(`Line Number: ${callSite.lineNumber}`);
    console.log(`Column Number: ${callSite.columnNumber}`);
  });
  // CallSite 1:
  // Function Name: exampleFunction
  // Script Name: /home/example.js
  // Line Number: 5
  // Column Number: 26

  // CallSite 2:
  // Function Name: anotherFunction
  // Script Name: /home/example.js
  // Line Number: 22
  // Column Number: 3

  // ...
}

// A function to simulate another stack layer
function anotherFunction() {
  exampleFunction();
}

anotherFunction();
</code></pre>
<p>It is possible to reconstruct the original locations by setting the option <code>sourceMap</code> to <code>true</code>.
If the source map is not available, the original location will be the same as the current location.
When the <code>--enable-source-maps</code> flag is enabled,<code>sourceMap</code> will be true by default.</p>
<pre><code class="language-ts">import { getCallSites } from 'node:util';

interface Foo {
  foo: string;
}

const callSites = getCallSites({ sourceMap: true });

// With sourceMap:
// Function Name: ''
// Script Name: example.js
// Line Number: 7
// Column Number: 26

// Without sourceMap:
// Function Name: ''
// Script Name: example.js
// Line Number: 2
// Column Number: 26
</code></pre>
<pre><code class="language-cjs">const { getCallSites } = require('node:util');

const callSites = getCallSites({ sourceMap: true });

// With sourceMap:
// Function Name: ''
// Script Name: example.js
// Line Number: 7
// Column Number: 26

// Without sourceMap:
// Function Name: ''
// Script Name: example.js
// Line Number: 2
// Column Number: 26
</code></pre>
<h2><code>util.getSystemErrorName(err)</code></h2>
<ul>
<li><code>err</code> {number}</li>
<li>Returns: {string}</li>
</ul>
<p>Returns the string name for a numeric error code that comes from a Node.js API.
The mapping between error codes and error names is platform-dependent.
See <a href="errors.md#common-system-errors">Common System Errors</a> for the names of common errors.</p>
<pre><code class="language-js">fs.access('file/that/does/not/exist', (err) =&gt; {
  const name = util.getSystemErrorName(err.errno);
  console.error(name);  // ENOENT
});
</code></pre>
<h2><code>util.getSystemErrorMap()</code></h2>
<ul>
<li>Returns: {Map}</li>
</ul>
<p>Returns a Map of all system error codes available from the Node.js API.
The mapping between error codes and error names is platform-dependent.
See <a href="errors.md#common-system-errors">Common System Errors</a> for the names of common errors.</p>
<pre><code class="language-js">fs.access('file/that/does/not/exist', (err) =&gt; {
  const errorMap = util.getSystemErrorMap();
  const name = errorMap.get(err.errno);
  console.error(name);  // ENOENT
});
</code></pre>
<h2><code>util.getSystemErrorMessage(err)</code></h2>
<ul>
<li><code>err</code> {number}</li>
<li>Returns: {string}</li>
</ul>
<p>Returns the string message for a numeric error code that comes from a Node.js
API.
The mapping between error codes and string messages is platform-dependent.</p>
<pre><code class="language-js">fs.access('file/that/does/not/exist', (err) =&gt; {
  const message = util.getSystemErrorMessage(err.errno);
  console.error(message);  // No such file or directory
});
</code></pre>
<h2><code>util.setTraceSigInt(enable)</code></h2>
<ul>
<li><code>enable</code> {boolean}</li>
</ul>
<p>Enable or disable printing a stack trace on <code>SIGINT</code>. The API is only available on the main thread.</p>
<h2><code>util.inherits(constructor, superConstructor)</code></h2>
<blockquote>
<p>Stability: 3 - Legacy: Use ES2015 class syntax and <code>extends</code> keyword instead.</p>
</blockquote>
<ul>
<li><code>constructor</code> {Function}</li>
<li><code>superConstructor</code> {Function}</li>
</ul>
<p>Usage of <code>util.inherits()</code> is discouraged. Please use the ES6 <code>class</code> and
<code>extends</code> keywords to get language level inheritance support. Also note
that the two styles are <a href="https://github.com/nodejs/node/issues/4179">semantically incompatible</a>.</p>
<p>Inherit the prototype methods from one <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">constructor</a> into another. The
prototype of <code>constructor</code> will be set to a new object created from
<code>superConstructor</code>.</p>
<p>This mainly adds some input validation on top of
<code>Object.setPrototypeOf(constructor.prototype, superConstructor.prototype)</code>.
As an additional convenience, <code>superConstructor</code> will be accessible
through the <code>constructor.super_</code> property.</p>
<pre><code class="language-js">const util = require('node:util');
const EventEmitter = require('node:events');

function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) =&gt; {
  console.log(`Received data: &quot;${data}&quot;`);
});
stream.write('It works!'); // Received data: &quot;It works!&quot;
</code></pre>
<p>ES6 example using <code>class</code> and <code>extends</code>:</p>
<pre><code class="language-mjs">import EventEmitter from 'node:events';

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) =&gt; {
  console.log(`Received data: &quot;${data}&quot;`);
});
stream.write('With ES6');
</code></pre>
<pre><code class="language-cjs">const EventEmitter = require('node:events');

class MyStream extends EventEmitter {
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) =&gt; {
  console.log(`Received data: &quot;${data}&quot;`);
});
stream.write('With ES6');
</code></pre>
<h2><code>util.inspect(object[, options])</code></h2>
<h2><code>util.inspect(object[, showHidden[, depth[, colors]]])</code></h2>
<ul>
<li><code>object</code> {any} Any JavaScript primitive or <code>Object</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>showHidden</code> {boolean} If <code>true</code>, <code>object</code>'s non-enumerable symbols and
properties are included in the formatted result. {WeakMap} and
{WeakSet} entries are also included as well as user defined prototype
properties (excluding method properties). <strong>Default:</strong> <code>false</code>.</li>
<li><code>depth</code> {number} Specifies the number of times to recurse while formatting
<code>object</code>. This is useful for inspecting large objects. To recurse up to
the maximum call stack size pass <code>Infinity</code> or <code>null</code>.
<strong>Default:</strong> <code>2</code>.</li>
<li><code>colors</code> {boolean} If <code>true</code>, the output is styled with ANSI color
codes. Colors are customizable. See <a href="#customizing-utilinspect-colors">Customizing <code>util.inspect</code> colors</a>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>customInspect</code> {boolean} If <code>false</code>,
<code>[util.inspect.custom](depth, opts, inspect)</code> functions are not invoked.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>showProxy</code> {boolean} If <code>true</code>, <code>Proxy</code> inspection includes
the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#terminology"><code>target</code> and <code>handler</code></a> objects. <strong>Default:</strong> <code>false</code>.</li>
<li><code>maxArrayLength</code> {integer} Specifies the maximum number of <code>Array</code>,
{TypedArray}, {Map}, {WeakMap}, and {WeakSet} elements to include when formatting.
Set to <code>null</code> or <code>Infinity</code> to show all elements. Set to <code>0</code> or
negative to show no elements. <strong>Default:</strong> <code>100</code>.</li>
<li><code>maxStringLength</code> {integer} Specifies the maximum number of characters to
include when formatting. Set to <code>null</code> or <code>Infinity</code> to show all elements.
Set to <code>0</code> or negative to show no characters. <strong>Default:</strong> <code>10000</code>.</li>
<li><code>breakLength</code> {integer} The length at which input values are split across
multiple lines. Set to <code>Infinity</code> to format the input as a single line
(in combination with <code>compact</code> set to <code>true</code> or any number &gt;= <code>1</code>).
<strong>Default:</strong> <code>80</code>.</li>
<li><code>compact</code> {boolean|integer} Setting this to <code>false</code> causes each object key
to be displayed on a new line. It will break on new lines in text that is
longer than <code>breakLength</code>. If set to a number, the most <code>n</code> inner elements
are united on a single line as long as all properties fit into
<code>breakLength</code>. Short array elements are also grouped together. For more
information, see the example below. <strong>Default:</strong> <code>3</code>.</li>
<li><code>sorted</code> {boolean|Function} If set to <code>true</code> or a function, all properties
of an object, and <code>Set</code> and <code>Map</code> entries are sorted in the resulting
string. If set to <code>true</code> the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">default sort</a> is used. If set to a function,
it is used as a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#parameters">compare function</a>.</li>
<li><code>getters</code> {boolean|string} If set to <code>true</code>, getters are inspected. If set
to <code>'get'</code>, only getters without a corresponding setter are inspected. If
set to <code>'set'</code>, only getters with a corresponding setter are inspected.
This might cause side effects depending on the getter function.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>numericSeparator</code> {boolean} If set to <code>true</code>, an underscore is used to
separate every three digits in all bigints and numbers.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string} The representation of <code>object</code>.</li>
</ul>
<p>The <code>util.inspect()</code> method returns a string representation of <code>object</code> that is
intended for debugging. The output of <code>util.inspect</code> may change at any time
and should not be depended upon programmatically. Additional <code>options</code> may be
passed that alter the result.
<code>util.inspect()</code> will use the constructor's name and/or <code>Symbol.toStringTag</code>
property to make an identifiable tag for an inspected value.</p>
<pre><code class="language-js">class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

util.inspect(new Foo()); // 'Foo [bar] {}'
util.inspect(new Bar()); // 'Bar {}'
util.inspect(baz);       // '[foo] {}'
</code></pre>
<p>Circular references point to their anchor by using a reference index:</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));
// &lt;ref *1&gt; {
//   a: [ [Circular *1] ],
//   b: &lt;ref *2&gt; { inner: [Circular *2], obj: [Circular *1] }
// }
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(inspect(obj));
// &lt;ref *1&gt; {
//   a: [ [Circular *1] ],
//   b: &lt;ref *2&gt; { inner: [Circular *2], obj: [Circular *1] }
// }
</code></pre>
<p>The following example inspects all properties of the <code>util</code> object:</p>
<pre><code class="language-mjs">import util from 'node:util';

console.log(util.inspect(util, { showHidden: true, depth: null }));
</code></pre>
<pre><code class="language-cjs">const util = require('node:util');

console.log(util.inspect(util, { showHidden: true, depth: null }));
</code></pre>
<p>The following example highlights the effect of the <code>compact</code> option:</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

const o = {
  a: [1, 2, [[
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
      'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
    'test',
    'foo']], 4],
  b: new Map([['za', 1], ['zb', 'test']]),
};
console.log(inspect(o, { compact: true, depth: 5, breakLength: 80 }));

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map(2) { 'za' =&gt; 1, 'zb' =&gt; 'test' } }

// Setting `compact` to false or an integer creates more reader friendly output.
console.log(inspect(o, { compact: false, depth: 5, breakLength: 80 }));

// {
//   a: [
//     1,
//     2,
//     [
//       [
//         'Lorem ipsum dolor sit amet,\n' +
//           'consectetur adipiscing elit, sed do eiusmod \n' +
//           'tempor incididunt ut labore et dolore magna aliqua.',
//         'test',
//         'foo'
//       ]
//     ],
//     4
//   ],
//   b: Map(2) {
//     'za' =&gt; 1,
//     'zb' =&gt; 'test'
//   }
// }

// Setting `breakLength` to e.g. 150 will print the &quot;Lorem ipsum&quot; text in a
// single line.
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

const o = {
  a: [1, 2, [[
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
      'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
    'test',
    'foo']], 4],
  b: new Map([['za', 1], ['zb', 'test']]),
};
console.log(inspect(o, { compact: true, depth: 5, breakLength: 80 }));

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map(2) { 'za' =&gt; 1, 'zb' =&gt; 'test' } }

// Setting `compact` to false or an integer creates more reader friendly output.
console.log(inspect(o, { compact: false, depth: 5, breakLength: 80 }));

// {
//   a: [
//     1,
//     2,
//     [
//       [
//         'Lorem ipsum dolor sit amet,\n' +
//           'consectetur adipiscing elit, sed do eiusmod \n' +
//           'tempor incididunt ut labore et dolore magna aliqua.',
//         'test',
//         'foo'
//       ]
//     ],
//     4
//   ],
//   b: Map(2) {
//     'za' =&gt; 1,
//     'zb' =&gt; 'test'
//   }
// }

// Setting `breakLength` to e.g. 150 will print the &quot;Lorem ipsum&quot; text in a
// single line.
</code></pre>
<p>The <code>showHidden</code> option allows {WeakMap} and {WeakSet} entries to be
inspected. If there are more entries than <code>maxArrayLength</code>, there is no
guarantee which entries are displayed. That means retrieving the same
{WeakSet} entries twice may result in different output. Furthermore, entries
with no remaining strong references may be garbage collected at any time.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

const obj = { a: 1 };
const obj2 = { b: 2 };
const weakSet = new WeakSet([obj, obj2]);

console.log(inspect(weakSet, { showHidden: true }));
// WeakSet { { a: 1 }, { b: 2 } }
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

const obj = { a: 1 };
const obj2 = { b: 2 };
const weakSet = new WeakSet([obj, obj2]);

console.log(inspect(weakSet, { showHidden: true }));
// WeakSet { { a: 1 }, { b: 2 } }
</code></pre>
<p>The <code>sorted</code> option ensures that an object's property insertion order does not
impact the result of <code>util.inspect()</code>.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';
import assert from 'node:assert';

const o1 = {
  b: [2, 3, 1],
  a: '`a` comes before `b`',
  c: new Set([2, 3, 1]),
};
console.log(inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
console.log(inspect(o1, { sorted: (a, b) =&gt; b.localeCompare(a) }));
// { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
  c: new Set([2, 1, 3]),
  a: '`a` comes before `b`',
  b: [2, 3, 1],
};
assert.strict.equal(
  inspect(o1, { sorted: true }),
  inspect(o2, { sorted: true }),
);
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');
const assert = require('node:assert');

const o1 = {
  b: [2, 3, 1],
  a: '`a` comes before `b`',
  c: new Set([2, 3, 1]),
};
console.log(inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
console.log(inspect(o1, { sorted: (a, b) =&gt; b.localeCompare(a) }));
// { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
  c: new Set([2, 1, 3]),
  a: '`a` comes before `b`',
  b: [2, 3, 1],
};
assert.strict.equal(
  inspect(o1, { sorted: true }),
  inspect(o2, { sorted: true }),
);
</code></pre>
<p>The <code>numericSeparator</code> option adds an underscore every three digits to all
numbers.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

const thousand = 1000;
const million = 1000000;
const bigNumber = 123456789n;
const bigDecimal = 1234.12345;

console.log(inspect(thousand, { numericSeparator: true }));
// 1_000
console.log(inspect(million, { numericSeparator: true }));
// 1_000_000
console.log(inspect(bigNumber, { numericSeparator: true }));
// 123_456_789n
console.log(inspect(bigDecimal, { numericSeparator: true }));
// 1_234.123_45
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

const thousand = 1000;
const million = 1000000;
const bigNumber = 123456789n;
const bigDecimal = 1234.12345;

console.log(inspect(thousand, { numericSeparator: true }));
// 1_000
console.log(inspect(million, { numericSeparator: true }));
// 1_000_000
console.log(inspect(bigNumber, { numericSeparator: true }));
// 123_456_789n
console.log(inspect(bigDecimal, { numericSeparator: true }));
// 1_234.123_45
</code></pre>
<p><code>util.inspect()</code> is a synchronous method intended for debugging. Its maximum
output length is approximately 128 MiB. Inputs that result in longer output will
be truncated.</p>
<h3>Customizing <code>util.inspect</code> colors</h3>
<p>Color output (if enabled) of <code>util.inspect</code> is customizable globally
via the <code>util.inspect.styles</code> and <code>util.inspect.colors</code> properties.</p>
<p><code>util.inspect.styles</code> is a map associating a style name to a color from
<code>util.inspect.colors</code>.</p>
<p>The default styles and associated colors are:</p>
<ul>
<li><code>bigint</code>: <code>yellow</code></li>
<li><code>boolean</code>: <code>yellow</code></li>
<li><code>date</code>: <code>magenta</code></li>
<li><code>module</code>: <code>underline</code></li>
<li><code>name</code>: (no styling)</li>
<li><code>null</code>: <code>bold</code></li>
<li><code>number</code>: <code>yellow</code></li>
<li><code>regexp</code>: A method that colors character classes, groups, assertions, and
other parts for improved readability. To customize the coloring, change the
<code>colors</code> property. It is set to
<code>['red', 'green', 'yellow', 'cyan', 'magenta']</code> by default and may be
adjusted as needed. The array is repetitively iterated through depending on
the &quot;depth&quot;.</li>
<li><code>special</code>: <code>cyan</code> (e.g., <code>Proxies</code>)</li>
<li><code>string</code>: <code>green</code></li>
<li><code>symbol</code>: <code>green</code></li>
<li><code>undefined</code>: <code>grey</code></li>
</ul>
<p>Color styling uses ANSI control codes that may not be supported on all
terminals. To verify color support use <a href="tty.md#writestreamhascolorscount-env"><code>tty.hasColors()</code></a>.</p>
<p>Predefined control codes are listed below (grouped as &quot;Modifiers&quot;, &quot;Foreground
colors&quot;, and &quot;Background colors&quot;).</p>
<h4>Complex custom coloring</h4>
<p>It is possible to define a method as style. It receives the stringified value
of the input. It is invoked in case coloring is active and the type is
inspected.</p>
<p>Example: <code>util.inspect.styles.regexp(value)</code></p>
<ul>
<li><code>value</code> {string} The string representation of the input type.</li>
<li>Returns: {string} The adjusted representation of <code>object</code>.</li>
</ul>
<h4>Modifiers</h4>
<p>Modifier support varies throughout different terminals. They will mostly be
ignored, if not supported.</p>
<ul>
<li><code>reset</code> - Resets all (color) modifiers to their defaults</li>
<li><strong>bold</strong> - Make text bold</li>
<li><em>italic</em> - Make text italic</li>
<li>&lt;span style=&quot;border-bottom: 1px solid;&quot;&gt;underline&lt;/span&gt; - Make text underlined</li>
<li><s>strikethrough</s> - Puts a horizontal line through the center of the text
(Alias: <code>strikeThrough</code>, <code>crossedout</code>, <code>crossedOut</code>)</li>
<li><code>hidden</code> - Prints the text, but makes it invisible (Alias: conceal)</li>
<li>&lt;span style=&quot;opacity: 0.5;&quot;&gt;dim&lt;/span&gt; - Decreased color intensity (Alias:
<code>faint</code>)</li>
<li>&lt;span style=&quot;border-top: 1px solid;&quot;&gt;overlined&lt;/span&gt; - Make text overlined</li>
<li>blink - Hides and shows the text in an interval</li>
<li>&lt;span style=&quot;filter: invert(100%);&quot;&gt;inverse&lt;/span&gt; - Swap foreground and
background colors (Alias: <code>swapcolors</code>, <code>swapColors</code>)</li>
<li>&lt;span style=&quot;border-bottom: 1px double;&quot;&gt;doubleunderline&lt;/span&gt; - Make text
double underlined (Alias: <code>doubleUnderline</code>)</li>
<li>&lt;span style=&quot;border: 1px solid;&quot;&gt;framed&lt;/span&gt; - Draw a frame around the text</li>
</ul>
<h4>Foreground colors</h4>
<ul>
<li><code>black</code></li>
<li><code>red</code></li>
<li><code>green</code></li>
<li><code>yellow</code></li>
<li><code>blue</code></li>
<li><code>magenta</code></li>
<li><code>cyan</code></li>
<li><code>white</code></li>
<li><code>gray</code> (alias: <code>grey</code>, <code>blackBright</code>)</li>
<li><code>redBright</code></li>
<li><code>greenBright</code></li>
<li><code>yellowBright</code></li>
<li><code>blueBright</code></li>
<li><code>magentaBright</code></li>
<li><code>cyanBright</code></li>
<li><code>whiteBright</code></li>
</ul>
<h4>Background colors</h4>
<ul>
<li><code>bgBlack</code></li>
<li><code>bgRed</code></li>
<li><code>bgGreen</code></li>
<li><code>bgYellow</code></li>
<li><code>bgBlue</code></li>
<li><code>bgMagenta</code></li>
<li><code>bgCyan</code></li>
<li><code>bgWhite</code></li>
<li><code>bgGray</code> (alias: <code>bgGrey</code>, <code>bgBlackBright</code>)</li>
<li><code>bgRedBright</code></li>
<li><code>bgGreenBright</code></li>
<li><code>bgYellowBright</code></li>
<li><code>bgBlueBright</code></li>
<li><code>bgMagentaBright</code></li>
<li><code>bgCyanBright</code></li>
<li><code>bgWhiteBright</code></li>
</ul>
<h3>Custom inspection functions on objects</h3>
<p>Objects may also define their own
<a href="#utilinspectcustom"><code>[util.inspect.custom](depth, opts, inspect)</code></a> function,
which <code>util.inspect()</code> will invoke and use the result of when inspecting
the object.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

class Box {
  constructor(value) {
    this.value = value;
  }

  [inspect.custom](depth, options, inspect) {
    if (depth &lt; 0) {
      return options.stylize('[Box]', 'special');
    }

    const newOptions = Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1,
    });

    // Five space padding because that's the size of &quot;Box&lt; &quot;.
    const padding = ' '.repeat(5);
    const inner = inspect(this.value, newOptions)
                  .replace(/\n/g, `\n${padding}`);
    return `${options.stylize('Box', 'special')}&lt; ${inner} &gt;`;
  }
}

const box = new Box(true);

console.log(inspect(box));
// &quot;Box&lt; true &gt;&quot;
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

class Box {
  constructor(value) {
    this.value = value;
  }

  [inspect.custom](depth, options, inspect) {
    if (depth &lt; 0) {
      return options.stylize('[Box]', 'special');
    }

    const newOptions = Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1,
    });

    // Five space padding because that's the size of &quot;Box&lt; &quot;.
    const padding = ' '.repeat(5);
    const inner = inspect(this.value, newOptions)
                  .replace(/\n/g, `\n${padding}`);
    return `${options.stylize('Box', 'special')}&lt; ${inner} &gt;`;
  }
}

const box = new Box(true);

console.log(inspect(box));
// &quot;Box&lt; true &gt;&quot;
</code></pre>
<p>Custom <code>[util.inspect.custom](depth, opts, inspect)</code> functions typically return
a string but may return a value of any type that will be formatted accordingly
by <code>util.inspect()</code>.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';

const obj = { foo: 'this will not show up in the inspect() output' };
obj[inspect.custom] = (depth) =&gt; {
  return { bar: 'baz' };
};

console.log(inspect(obj));
// &quot;{ bar: 'baz' }&quot;
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');

const obj = { foo: 'this will not show up in the inspect() output' };
obj[inspect.custom] = (depth) =&gt; {
  return { bar: 'baz' };
};

console.log(inspect(obj));
// &quot;{ bar: 'baz' }&quot;
</code></pre>
<h3><code>util.inspect.custom</code></h3>
<ul>
<li>Type: {symbol} that can be used to declare custom inspect functions.</li>
</ul>
<p>In addition to being accessible through <code>util.inspect.custom</code>, this
symbol is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for">registered globally</a> and can be
accessed in any environment as <code>Symbol.for('nodejs.util.inspect.custom')</code>.</p>
<p>Using this allows code to be written in a portable fashion, so that the custom
inspect function is used in a Node.js environment and ignored in the browser.
The <code>util.inspect()</code> function itself is passed as third argument to the custom
inspect function to allow further portability.</p>
<pre><code class="language-js">const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');

class Password {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return 'xxxxxxxx';
  }

  [customInspectSymbol](depth, inspectOptions, inspect) {
    return `Password &lt;${this.toString()}&gt;`;
  }
}

const password = new Password('r0sebud');
console.log(password);
// Prints Password &lt;xxxxxxxx&gt;
</code></pre>
<p>See <a href="#custom-inspection-functions-on-objects">Custom inspection functions on Objects</a> for more details.</p>
<h3><code>util.inspect.defaultOptions</code></h3>
<p>The <code>defaultOptions</code> value allows customization of the default options used by
<code>util.inspect</code>. This is useful for functions like <code>console.log</code> or
<code>util.format</code> which implicitly call into <code>util.inspect</code>. It shall be set to an
object containing one or more valid <a href="#utilinspectobject-options"><code>util.inspect()</code></a> options. Setting
option properties directly is also supported.</p>
<pre><code class="language-mjs">import { inspect } from 'node:util';
const arr = Array(156).fill(0);

console.log(arr); // Logs the truncated array
inspect.defaultOptions.maxArrayLength = null;
console.log(arr); // logs the full array
</code></pre>
<pre><code class="language-cjs">const { inspect } = require('node:util');
const arr = Array(156).fill(0);

console.log(arr); // Logs the truncated array
inspect.defaultOptions.maxArrayLength = null;
console.log(arr); // logs the full array
</code></pre>
<h2><code>util.isDeepStrictEqual(val1, val2[, options])</code></h2>
<ul>
<li><code>val1</code> {any}</li>
<li><code>val2</code> {any}</li>
<li><code>skipPrototype</code> {boolean} If <code>true</code>, prototype and constructor
comparison is skipped during deep strict equality check. <strong>Default:</strong> <code>false</code>.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if there is deep strict equality between <code>val1</code> and <code>val2</code>.
Otherwise, returns <code>false</code>.</p>
<p>By default, deep strict equality includes comparison of object prototypes and
constructors. When <code>skipPrototype</code> is <code>true</code>, objects with
different prototypes or constructors can still be considered equal if their
enumerable properties are deeply strictly equal.</p>
<pre><code class="language-js">const util = require('node:util');

class Foo {
  constructor(a) {
    this.a = a;
  }
}

class Bar {
  constructor(a) {
    this.a = a;
  }
}

const foo = new Foo(1);
const bar = new Bar(1);

// Different constructors, same properties
console.log(util.isDeepStrictEqual(foo, bar));
// false

console.log(util.isDeepStrictEqual(foo, bar, true));
// true
</code></pre>
<p>See <a href="assert.md#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a> for more information about deep strict
equality.</p>
<h2><code>util.isPartialDeepStrictEqual(val1, val2)</code></h2>
<ul>
<li><code>val1</code> {any}</li>
<li><code>val2</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if there is partial deep strict equality between <code>val1</code> and
<code>val2</code>. Otherwise, returns <code>false</code>.</p>
<p>&quot;Partial&quot; equality means that only properties that exist on <code>val2</code> are going
to be compared.</p>
<p>See <a href="assert.md#assertpartialdeepstrictequalactual-expected-message"><code>assert.partialDeepStrictEqual()</code></a> for more information about partial
deep strict equality.</p>
<h2><code>util.markPromiseAsHandled(promise)</code></h2>
<ul>
<li><code>promise</code> {Promise} The promise to mark as handled</li>
</ul>
<p>Marks a promise as handled so that unhandled rejections are ignored and are not
reported to the <code>'unhandledrejection'</code> event.</p>
<h2>Class: <code>util.MIMEType</code></h2>
<p>An implementation of <a href="https://bmeck.github.io/node-proposal-mime-api/">the MIMEType class</a>.</p>
<p>In accordance with browser conventions, all properties of <code>MIMEType</code> objects
are implemented as getters and setters on the class prototype, rather than as
data properties on the object itself.</p>
<p>A MIME string is a structured string containing multiple meaningful
components. When parsed, a <code>MIMEType</code> object is returned containing
properties for each of these components.</p>
<h3><code>new MIMEType(input)</code></h3>
<ul>
<li><code>input</code> {string} The input MIME to parse</li>
</ul>
<p>Creates a new <code>MIMEType</code> object by parsing the <code>input</code>.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const myMIME = new MIMEType('text/plain');
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/plain');
</code></pre>
<p>A <code>TypeError</code> will be thrown if the <code>input</code> is not a valid MIME. Note
that an effort will be made to coerce the given values into strings. For
instance:</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';
const myMIME = new MIMEType({ toString: () =&gt; 'text/plain' });
console.log(String(myMIME));
// Prints: text/plain
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');
const myMIME = new MIMEType({ toString: () =&gt; 'text/plain' });
console.log(String(myMIME));
// Prints: text/plain
</code></pre>
<h3><code>mime.type</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the type portion of the MIME.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const myMIME = new MIMEType('text/javascript');
console.log(myMIME.type);
// Prints: text
myMIME.type = 'application';
console.log(myMIME.type);
// Prints: application
console.log(String(myMIME));
// Prints: application/javascript
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/javascript');
console.log(myMIME.type);
// Prints: text
myMIME.type = 'application';
console.log(myMIME.type);
// Prints: application
console.log(String(myMIME));
// Prints: application/javascript
</code></pre>
<h3><code>mime.subtype</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the subtype portion of the MIME.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const myMIME = new MIMEType('text/ecmascript');
console.log(myMIME.subtype);
// Prints: ecmascript
myMIME.subtype = 'javascript';
console.log(myMIME.subtype);
// Prints: javascript
console.log(String(myMIME));
// Prints: text/javascript
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/ecmascript');
console.log(myMIME.subtype);
// Prints: ecmascript
myMIME.subtype = 'javascript';
console.log(myMIME.subtype);
// Prints: javascript
console.log(String(myMIME));
// Prints: text/javascript
</code></pre>
<h3><code>mime.essence</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets the essence of the MIME. This property is read only.
Use <code>mime.type</code> or <code>mime.subtype</code> to alter the MIME.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const myMIME = new MIMEType('text/javascript;key=value');
console.log(myMIME.essence);
// Prints: text/javascript
myMIME.type = 'application';
console.log(myMIME.essence);
// Prints: application/javascript
console.log(String(myMIME));
// Prints: application/javascript;key=value
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const myMIME = new MIMEType('text/javascript;key=value');
console.log(myMIME.essence);
// Prints: text/javascript
myMIME.type = 'application';
console.log(myMIME.essence);
// Prints: application/javascript
console.log(String(myMIME));
// Prints: application/javascript;key=value
</code></pre>
<h3><code>mime.params</code></h3>
<ul>
<li>Type: {MIMEParams}</li>
</ul>
<p>Gets the <a href="#class-utilmimeparams"><code>MIMEParams</code></a> object representing the
parameters of the MIME. This property is read-only. See
<a href="#class-utilmimeparams"><code>MIMEParams</code></a> documentation for details.</p>
<h3><code>mime.toString()</code></h3>
<ul>
<li>Returns: {string}</li>
</ul>
<p>The <code>toString()</code> method on the <code>MIMEType</code> object returns the serialized MIME.</p>
<p>Because of the need for standard compliance, this method does not allow users
to customize the serialization process of the MIME.</p>
<h3><code>mime.toJSON()</code></h3>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Alias for <a href="#mimetostring"><code>mime.toString()</code></a>.</p>
<p>This method is automatically called when an <code>MIMEType</code> object is serialized
with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a>.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const myMIMES = [
  new MIMEType('image/png'),
  new MIMEType('image/gif'),
];
console.log(JSON.stringify(myMIMES));
// Prints: [&quot;image/png&quot;, &quot;image/gif&quot;]
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const myMIMES = [
  new MIMEType('image/png'),
  new MIMEType('image/gif'),
];
console.log(JSON.stringify(myMIMES));
// Prints: [&quot;image/png&quot;, &quot;image/gif&quot;]
</code></pre>
<h3><code>MIMEType.parse(string)</code></h3>
<ul>
<li><code>string</code> {string} The input MIME to parse</li>
<li>Returns: {MIMEType|null}</li>
</ul>
<p>Attempts to parse the given <code>string</code> as a MIMEType. If the string cannot be
parsed, <code>null</code> is returned.</p>
<h2>Class: <code>util.MIMEParams</code></h2>
<p>The <code>MIMEParams</code> API provides read and write access to the parameters of a
<code>MIMEType</code>.</p>
<h3><code>new MIMEParams()</code></h3>
<p>Creates a new <code>MIMEParams</code> object by with empty parameters</p>
<pre><code class="language-mjs">import { MIMEParams } from 'node:util';

const myParams = new MIMEParams();
</code></pre>
<pre><code class="language-cjs">const { MIMEParams } = require('node:util');

const myParams = new MIMEParams();
</code></pre>
<h3><code>mimeParams.delete(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
</ul>
<p>Remove all name-value pairs whose name is <code>name</code>.</p>
<h3><code>mimeParams.entries()</code></h3>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an iterator over each of the name-value pairs in the parameters.
Each item of the iterator is a JavaScript <code>Array</code>. The first item of the array
is the <code>name</code>, the second item of the array is the <code>value</code>.</p>
<h3><code>mimeParams.get(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {string | null} A string or <code>null</code> if there is no name-value pair
with the given <code>name</code>.</li>
</ul>
<p>Returns the value of the first name-value pair whose name is <code>name</code>. If there
are no such pairs, <code>null</code> is returned.</p>
<h3><code>mimeParams.has(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if there is at least one name-value pair whose name is <code>name</code>.</p>
<h3><code>mimeParams.keys()</code></h3>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an iterator over the names of each name-value pair.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const { params } = new MIMEType('text/plain;foo=0;bar=1');
for (const name of params.keys()) {
  console.log(name);
}
// Prints:
//   foo
//   bar
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');
for (const name of params.keys()) {
  console.log(name);
}
// Prints:
//   foo
//   bar
</code></pre>
<h3><code>mimeParams.set(name, value)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string}</li>
</ul>
<p>Sets the value in the <code>MIMEParams</code> object associated with <code>name</code> to
<code>value</code>. If there are any pre-existing name-value pairs whose names are <code>name</code>,
set the first such pair's value to <code>value</code>.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const { params } = new MIMEType('text/plain;foo=0;bar=1');
params.set('foo', 'def');
params.set('baz', 'xyz');
console.log(params.toString());
// Prints: foo=def;bar=1;baz=xyz
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=0;bar=1');
params.set('foo', 'def');
params.set('baz', 'xyz');
console.log(params.toString());
// Prints: foo=def;bar=1;baz=xyz
</code></pre>
<h3><code>mimeParams.values()</code></h3>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an iterator over the values of each name-value pair.</p>
<h3><code>mimeParams[Symbol.iterator]()</code></h3>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Alias for <a href="#mimeparamsentries"><code>mimeParams.entries()</code></a>.</p>
<pre><code class="language-mjs">import { MIMEType } from 'node:util';

const { params } = new MIMEType('text/plain;foo=bar;xyz=baz');
for (const [name, value] of params) {
  console.log(name, value);
}
// Prints:
//   foo bar
//   xyz baz
</code></pre>
<pre><code class="language-cjs">const { MIMEType } = require('node:util');

const { params } = new MIMEType('text/plain;foo=bar;xyz=baz');
for (const [name, value] of params) {
  console.log(name, value);
}
// Prints:
//   foo bar
//   xyz baz
</code></pre>
<h2><code>util.parseArgs([config])</code></h2>
<ul>
<li>
<p><code>config</code> {Object} Used to provide arguments for parsing and to configure
the parser. <code>config</code> supports the following properties:</p>
<ul>
<li><code>args</code> {string[]} array of argument strings. <strong>Default:</strong> <code>process.argv</code>
with <code>execPath</code> and <code>filename</code> removed.</li>
<li><code>options</code> {Object} Used to describe arguments known to the parser.
Keys of <code>options</code> are the long names of options and values are an
{Object} accepting the following properties:
<ul>
<li><code>type</code> {string} Type of argument, which must be either <code>boolean</code> or <code>string</code>.</li>
<li><code>multiple</code> {boolean} Whether this option can be provided multiple
times. If <code>true</code>, all values will be collected in an array. If
<code>false</code>, values for the option are last-wins. <strong>Default:</strong> <code>false</code>.</li>
<li><code>short</code> {string} A single character alias for the option.</li>
<li><code>default</code> {string | boolean | string[] | boolean[]} The value to assign to
the option if it does not appear in the arguments to be parsed. The value
must match the type specified by the <code>type</code> property. If <code>multiple</code> is
<code>true</code>, it must be an array. No default value is applied when the option
does appear in the arguments to be parsed, even if the provided value
is falsy.</li>
</ul>
</li>
<li><code>strict</code> {boolean} Should an error be thrown when unknown arguments
are encountered, or when arguments are passed that do not match the
<code>type</code> configured in <code>options</code>.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>allowPositionals</code> {boolean} Whether this command accepts positional
arguments.
<strong>Default:</strong> <code>false</code> if <code>strict</code> is <code>true</code>, otherwise <code>true</code>.</li>
<li><code>allowNegative</code> {boolean} If <code>true</code>, allows explicitly setting boolean
options to <code>false</code> by prefixing the option name with <code>--no-</code>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>tokens</code> {boolean} Return the parsed tokens. This is useful for extending
the built-in behavior, from adding additional checks through to reprocessing
the tokens in different ways.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>
<p>Returns: {Object} The parsed command line arguments:</p>
<ul>
<li><code>values</code> {Object} A mapping of parsed option names with their {string}
or {boolean} values.</li>
<li><code>positionals</code> {string[]} Positional arguments.</li>
<li><code>tokens</code> {Object[] | undefined} See <a href="#parseargs-tokens">parseArgs tokens</a>
section. Only returned if <code>config</code> includes <code>tokens: true</code>.</li>
</ul>
</li>
</ul>
<p>Provides a higher level API for command-line argument parsing than interacting
with <code>process.argv</code> directly. Takes a specification for the expected arguments
and returns a structured object with the parsed options and positionals.</p>
<pre><code class="language-mjs">import { parseArgs } from 'node:util';
const args = ['-f', '--bar', 'b'];
const options = {
  foo: {
    type: 'boolean',
    short: 'f',
  },
  bar: {
    type: 'string',
  },
};
const {
  values,
  positionals,
} = parseArgs({ args, options });
console.log(values, positionals);
// Prints: [Object: null prototype] { foo: true, bar: 'b' } []
</code></pre>
<pre><code class="language-cjs">const { parseArgs } = require('node:util');
const args = ['-f', '--bar', 'b'];
const options = {
  foo: {
    type: 'boolean',
    short: 'f',
  },
  bar: {
    type: 'string',
  },
};
const {
  values,
  positionals,
} = parseArgs({ args, options });
console.log(values, positionals);
// Prints: [Object: null prototype] { foo: true, bar: 'b' } []
</code></pre>
<h3><code>parseArgs</code> <code>tokens</code></h3>
<p>Detailed parse information is available for adding custom behaviors by
specifying <code>tokens: true</code> in the configuration.
The returned tokens have properties describing:</p>
<ul>
<li>all tokens
<ul>
<li><code>kind</code> {string} One of 'option', 'positional', or 'option-terminator'.</li>
<li><code>index</code> {number} Index of element in <code>args</code> containing token. So the
source argument for a token is <code>args[token.index]</code>.</li>
</ul>
</li>
<li>option tokens
<ul>
<li><code>name</code> {string} Long name of option.</li>
<li><code>rawName</code> {string} How option used in args, like <code>-f</code> of <code>--foo</code>.</li>
<li><code>value</code> {string | undefined} Option value specified in args.
Undefined for boolean options.</li>
<li><code>inlineValue</code> {boolean | undefined} Whether option value specified inline,
like <code>--foo=bar</code>.</li>
</ul>
</li>
<li>positional tokens
<ul>
<li><code>value</code> {string} The value of the positional argument in args (i.e. <code>args[index]</code>).</li>
</ul>
</li>
<li>option-terminator token</li>
</ul>
<p>The returned tokens are in the order encountered in the input args. Options
that appear more than once in args produce a token for each use. Short option
groups like <code>-xy</code> expand to a token for each option. So <code>-xxx</code> produces
three tokens.</p>
<p>For example, to add support for a negated option like <code>--no-color</code> (which
<code>allowNegative</code> supports when the option is of <code>boolean</code> type), the returned
tokens can be reprocessed to change the value stored for the negated option.</p>
<pre><code class="language-mjs">import { parseArgs } from 'node:util';

const options = {
  'color': { type: 'boolean' },
  'no-color': { type: 'boolean' },
  'logfile': { type: 'string' },
  'no-logfile': { type: 'boolean' },
};
const { values, tokens } = parseArgs({ options, tokens: true });

// Reprocess the option tokens and overwrite the returned values.
tokens
  .filter((token) =&gt; token.kind === 'option')
  .forEach((token) =&gt; {
    if (token.name.startsWith('no-')) {
      // Store foo:false for --no-foo
      const positiveName = token.name.slice(3);
      values[positiveName] = false;
      delete values[token.name];
    } else {
      // Resave value so last one wins if both --foo and --no-foo.
      values[token.name] = token.value ?? true;
    }
  });

const color = values.color;
const logfile = values.logfile ?? 'default.log';

console.log({ logfile, color });
</code></pre>
<pre><code class="language-cjs">const { parseArgs } = require('node:util');

const options = {
  'color': { type: 'boolean' },
  'no-color': { type: 'boolean' },
  'logfile': { type: 'string' },
  'no-logfile': { type: 'boolean' },
};
const { values, tokens } = parseArgs({ options, tokens: true });

// Reprocess the option tokens and overwrite the returned values.
tokens
  .filter((token) =&gt; token.kind === 'option')
  .forEach((token) =&gt; {
    if (token.name.startsWith('no-')) {
      // Store foo:false for --no-foo
      const positiveName = token.name.slice(3);
      values[positiveName] = false;
      delete values[token.name];
    } else {
      // Resave value so last one wins if both --foo and --no-foo.
      values[token.name] = token.value ?? true;
    }
  });

const color = values.color;
const logfile = values.logfile ?? 'default.log';

console.log({ logfile, color });
</code></pre>
<p>Example usage showing negated options, and when an option is used
multiple ways then last one wins.</p>
<pre><code class="language-console">$ node negate.js
{ logfile: 'default.log', color: undefined }
$ node negate.js --no-logfile --no-color
{ logfile: false, color: false }
$ node negate.js --logfile=test.log --color
{ logfile: 'test.log', color: true }
$ node negate.js --no-logfile --logfile=test.log --color --no-color
{ logfile: 'test.log', color: false }
</code></pre>
<h2><code>util.parseEnv(content)</code></h2>
<ul>
<li><code>content</code> {string}</li>
</ul>
<p>The raw contents of a <code>.env</code> file.</p>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Given an example <code>.env</code> file:</p>
<pre><code class="language-cjs">const { parseEnv } = require('node:util');

parseEnv('HELLO=world\nHELLO=oh my\n');
// Returns: { HELLO: 'oh my' }
</code></pre>
<pre><code class="language-mjs">import { parseEnv } from 'node:util';

parseEnv('HELLO=world\nHELLO=oh my\n');
// Returns: { HELLO: 'oh my' }
</code></pre>
<h2><code>util.promisify(original)</code></h2>
<ul>
<li><code>original</code> {Function}</li>
<li>Returns: {Function}</li>
</ul>
<p>Takes a function following the common error-first callback style, i.e. taking
an <code>(err, value) =&gt; ...</code> callback as the last argument, and returns a version
that returns promises.</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
import { stat } from 'node:fs';

const promisifiedStat = promisify(stat);
promisifiedStat('.').then((stats) =&gt; {
  // Do something with `stats`
}).catch((error) =&gt; {
  // Handle the error.
});
</code></pre>
<pre><code class="language-cjs">const { promisify } = require('node:util');
const { stat } = require('node:fs');

const promisifiedStat = promisify(stat);
promisifiedStat('.').then((stats) =&gt; {
  // Do something with `stats`
}).catch((error) =&gt; {
  // Handle the error.
});
</code></pre>
<p>Or, equivalently using <code>async function</code>s:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
import { stat } from 'node:fs';

const promisifiedStat = promisify(stat);

async function callStat() {
  const stats = await promisifiedStat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

callStat();
</code></pre>
<pre><code class="language-cjs">const { promisify } = require('node:util');
const { stat } = require('node:fs');

const promisifiedStat = promisify(stat);

async function callStat() {
  const stats = await promisifiedStat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

callStat();
</code></pre>
<p>If there is an <code>original[util.promisify.custom]</code> property present, <code>promisify</code>
will return its value, see <a href="#custom-promisified-functions">Custom promisified functions</a>.</p>
<p><code>promisify()</code> assumes that <code>original</code> is a function taking a callback as its
final argument in all cases. If <code>original</code> is not a function, <code>promisify()</code>
will throw an error. If <code>original</code> is a function but its last argument is not
an error-first callback, it will still be passed an error-first
callback as its last argument.</p>
<p>Using <code>promisify()</code> on class methods or other methods that use <code>this</code> may not
work as expected unless handled specially:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = promisify(foo.bar);
// TypeError: Cannot read properties of undefined (reading 'a')
// naiveBar().then(a =&gt; console.log(a));

naiveBar.call(foo).then((a) =&gt; console.log(a)); // '42'

const bindBar = naiveBar.bind(foo);
bindBar().then((a) =&gt; console.log(a)); // '42'
</code></pre>
<pre><code class="language-cjs">const { promisify } = require('node:util');

class Foo {
  constructor() {
    this.a = 42;
  }

  bar(callback) {
    callback(null, this.a);
  }
}

const foo = new Foo();

const naiveBar = promisify(foo.bar);
// TypeError: Cannot read properties of undefined (reading 'a')
// naiveBar().then(a =&gt; console.log(a));

naiveBar.call(foo).then((a) =&gt; console.log(a)); // '42'

const bindBar = naiveBar.bind(foo);
bindBar().then((a) =&gt; console.log(a)); // '42'
</code></pre>
<h3>Custom promisified functions</h3>
<p>Using the <code>util.promisify.custom</code> symbol one can override the return value of
<a href="#utilpromisifyoriginal"><code>util.promisify()</code></a>:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';

function doSomething(foo, callback) {
  // ...
}

doSomething[promisify.custom] = (foo) =&gt; {
  return getPromiseSomehow();
};

const promisified = promisify(doSomething);
console.log(promisified === doSomething[promisify.custom]);
// prints 'true'
</code></pre>
<pre><code class="language-cjs">const { promisify } = require('node:util');

function doSomething(foo, callback) {
  // ...
}

doSomething[promisify.custom] = (foo) =&gt; {
  return getPromiseSomehow();
};

const promisified = promisify(doSomething);
console.log(promisified === doSomething[promisify.custom]);
// prints 'true'
</code></pre>
<p>This can be useful for cases where the original function does not follow the
standard format of taking an error-first callback as the last argument.</p>
<p>For example, with a function that takes in
<code>(foo, onSuccessCallback, onErrorCallback)</code>:</p>
<pre><code class="language-js">doSomething[util.promisify.custom] = (foo) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    doSomething(foo, resolve, reject);
  });
};
</code></pre>
<p>If <code>promisify.custom</code> is defined but is not a function, <code>promisify()</code> will
throw an error.</p>
<h3><code>util.promisify.custom</code></h3>
<ul>
<li>Type: {symbol} that can be used to declare custom promisified variants of functions,
see <a href="#custom-promisified-functions">Custom promisified functions</a>.</li>
</ul>
<p>In addition to being accessible through <code>util.promisify.custom</code>, this
symbol is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for">registered globally</a> and can be
accessed in any environment as <code>Symbol.for('nodejs.util.promisify.custom')</code>.</p>
<p>For example, with a function that takes in
<code>(foo, onSuccessCallback, onErrorCallback)</code>:</p>
<pre><code class="language-js">const kCustomPromisifiedSymbol = Symbol.for('nodejs.util.promisify.custom');

doSomething[kCustomPromisifiedSymbol] = (foo) =&gt; {
  return new Promise((resolve, reject) =&gt; {
    doSomething(foo, resolve, reject);
  });
};
</code></pre>
<h2><code>util.stripVTControlCharacters(str)</code></h2>
<ul>
<li><code>str</code> {string}</li>
<li>Returns: {string}</li>
</ul>
<p>Returns <code>str</code> with any ANSI escape codes removed.</p>
<pre><code class="language-js">console.log(util.stripVTControlCharacters('\u001B[4mvalue\u001B[0m'));
// Prints &quot;value&quot;
</code></pre>
<h2><code>util.styleText(format, text[, options])</code></h2>
<ul>
<li><code>format</code> {string | Array} A text format or an Array
of text formats defined in <code>util.inspect.colors</code>, or a hex color in <code>#RGB</code>
or <code>#RRGGBB</code> form.</li>
<li><code>text</code> {string} The text to be formatted.</li>
<li><code>options</code> {Object}
<ul>
<li><code>validateStream</code> {boolean} When true, <code>stream</code> is checked to see if it can handle colors. <strong>Default:</strong> <code>true</code>.</li>
<li><code>stream</code> {Stream} A stream that will be validated if it can be colored. <strong>Default:</strong> <code>process.stdout</code>.</li>
</ul>
</li>
</ul>
<p>This function returns a formatted text considering the <code>format</code> passed
for printing in a terminal. It is aware of the terminal's capabilities
and acts according to the configuration set via <code>NO_COLOR</code>,
<code>NODE_DISABLE_COLORS</code> and <code>FORCE_COLOR</code> environment variables.</p>
<pre><code class="language-mjs">import { styleText } from 'node:util';
import { stderr } from 'node:process';

const successMessage = styleText('green', 'Success!');
console.log(successMessage);

const errorMessage = styleText(
  'red',
  'Error! Error!',
  // Validate if process.stderr has TTY
  { stream: stderr },
);
console.error(errorMessage);
</code></pre>
<pre><code class="language-cjs">const { styleText } = require('node:util');
const { stderr } = require('node:process');

const successMessage = styleText('green', 'Success!');
console.log(successMessage);

const errorMessage = styleText(
  'red',
  'Error! Error!',
  // Validate if process.stderr has TTY
  { stream: stderr },
);
console.error(errorMessage);
</code></pre>
<p><code>util.inspect.colors</code> also provides text formats such as <code>italic</code>, and
<code>underline</code> and you can combine both:</p>
<pre><code class="language-cjs">console.log(
  util.styleText(['underline', 'italic'], 'My italic underlined message'),
);
</code></pre>
<p>When passing an array of formats, the order of the format applied
is left to right so the following style might overwrite the previous one.</p>
<pre><code class="language-cjs">console.log(
  util.styleText(['red', 'green'], 'text'), // green
);
</code></pre>
<p>The special format value <code>none</code> applies no additional styling to the text.</p>
<p>In addition to predefined color names, <code>util.styleText()</code> supports hex color
strings using ANSI TrueColor (24-bit) escape sequences. Hex colors can be
specified in either 3-digit (<code>#RGB</code>) or 6-digit (<code>#RRGGBB</code>) format:</p>
<pre><code class="language-mjs">import { styleText } from 'node:util';

// 6-digit hex color
console.log(styleText('#ff5733', 'Orange text'));

// 3-digit hex color (shorthand)
console.log(styleText('#f00', 'Red text'));
</code></pre>
<pre><code class="language-cjs">const { styleText } = require('node:util');

// 6-digit hex color
console.log(styleText('#ff5733', 'Orange text'));

// 3-digit hex color (shorthand)
console.log(styleText('#f00', 'Red text'));
</code></pre>
<p>The full list of formats can be found in <a href="#modifiers">modifiers</a>.</p>
<h2>Class: <code>util.TextDecoder</code></h2>
<p>An implementation of the <a href="https://encoding.spec.whatwg.org/">WHATWG Encoding Standard</a> <code>TextDecoder</code> API.</p>
<pre><code class="language-js">const decoder = new TextDecoder();
const u8arr = new Uint8Array([72, 101, 108, 108, 111]);
console.log(decoder.decode(u8arr)); // Hello
</code></pre>
<h3>WHATWG supported encodings</h3>
<p>Per the <a href="https://encoding.spec.whatwg.org/">WHATWG Encoding Standard</a>, the encodings supported by the
<code>TextDecoder</code> API are outlined in the tables below. For each encoding,
one or more aliases may be used.</p>
<p>Different Node.js build configurations support different sets of encodings.
(see <a href="intl.md">Internationalization</a>)</p>
<h4>Encodings supported by default (with full ICU data)</h4>
<table>
<thead>
<tr>
<th>Encoding</th>
<th>Aliases</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'ibm866'</code></td>
<td><code>'866'</code>, <code>'cp866'</code>, <code>'csibm866'</code></td>
</tr>
<tr>
<td><code>'iso-8859-2'</code></td>
<td><code>'csisolatin2'</code>, <code>'iso-ir-101'</code>, <code>'iso8859-2'</code>, <code>'iso88592'</code>, <code>'iso_8859-2'</code>, <code>'iso_8859-2:1987'</code>, <code>'l2'</code>, <code>'latin2'</code></td>
</tr>
<tr>
<td><code>'iso-8859-3'</code></td>
<td><code>'csisolatin3'</code>, <code>'iso-ir-109'</code>, <code>'iso8859-3'</code>, <code>'iso88593'</code>, <code>'iso_8859-3'</code>, <code>'iso_8859-3:1988'</code>, <code>'l3'</code>, <code>'latin3'</code></td>
</tr>
<tr>
<td><code>'iso-8859-4'</code></td>
<td><code>'csisolatin4'</code>, <code>'iso-ir-110'</code>, <code>'iso8859-4'</code>, <code>'iso88594'</code>, <code>'iso_8859-4'</code>, <code>'iso_8859-4:1988'</code>, <code>'l4'</code>, <code>'latin4'</code></td>
</tr>
<tr>
<td><code>'iso-8859-5'</code></td>
<td><code>'csisolatincyrillic'</code>, <code>'cyrillic'</code>, <code>'iso-ir-144'</code>, <code>'iso8859-5'</code>, <code>'iso88595'</code>, <code>'iso_8859-5'</code>, <code>'iso_8859-5:1988'</code></td>
</tr>
<tr>
<td><code>'iso-8859-6'</code></td>
<td><code>'arabic'</code>, <code>'asmo-708'</code>, <code>'csiso88596e'</code>, <code>'csiso88596i'</code>, <code>'csisolatinarabic'</code>, <code>'ecma-114'</code>, <code>'iso-8859-6-e'</code>, <code>'iso-8859-6-i'</code>, <code>'iso-ir-127'</code>, <code>'iso8859-6'</code>, <code>'iso88596'</code>, <code>'iso_8859-6'</code>, <code>'iso_8859-6:1987'</code></td>
</tr>
<tr>
<td><code>'iso-8859-7'</code></td>
<td><code>'csisolatingreek'</code>, <code>'ecma-118'</code>, <code>'elot_928'</code>, <code>'greek'</code>, <code>'greek8'</code>, <code>'iso-ir-126'</code>, <code>'iso8859-7'</code>, <code>'iso88597'</code>, <code>'iso_8859-7'</code>, <code>'iso_8859-7:1987'</code>, <code>'sun_eu_greek'</code></td>
</tr>
<tr>
<td><code>'iso-8859-8'</code></td>
<td><code>'csiso88598e'</code>, <code>'csisolatinhebrew'</code>, <code>'hebrew'</code>, <code>'iso-8859-8-e'</code>, <code>'iso-ir-138'</code>, <code>'iso8859-8'</code>, <code>'iso88598'</code>, <code>'iso_8859-8'</code>, <code>'iso_8859-8:1988'</code>, <code>'visual'</code></td>
</tr>
<tr>
<td><code>'iso-8859-8-i'</code></td>
<td><code>'csiso88598i'</code>, <code>'logical'</code></td>
</tr>
<tr>
<td><code>'iso-8859-10'</code></td>
<td><code>'csisolatin6'</code>, <code>'iso-ir-157'</code>, <code>'iso8859-10'</code>, <code>'iso885910'</code>, <code>'l6'</code>, <code>'latin6'</code></td>
</tr>
<tr>
<td><code>'iso-8859-13'</code></td>
<td><code>'iso8859-13'</code>, <code>'iso885913'</code></td>
</tr>
<tr>
<td><code>'iso-8859-14'</code></td>
<td><code>'iso8859-14'</code>, <code>'iso885914'</code></td>
</tr>
<tr>
<td><code>'iso-8859-15'</code></td>
<td><code>'csisolatin9'</code>, <code>'iso8859-15'</code>, <code>'iso885915'</code>, <code>'iso_8859-15'</code>, <code>'l9'</code></td>
</tr>
<tr>
<td><code>'koi8-r'</code></td>
<td><code>'cskoi8r'</code>, <code>'koi'</code>, <code>'koi8'</code>, <code>'koi8_r'</code></td>
</tr>
<tr>
<td><code>'koi8-u'</code></td>
<td><code>'koi8-ru'</code></td>
</tr>
<tr>
<td><code>'macintosh'</code></td>
<td><code>'csmacintosh'</code>, <code>'mac'</code>, <code>'x-mac-roman'</code></td>
</tr>
<tr>
<td><code>'windows-874'</code></td>
<td><code>'dos-874'</code>, <code>'iso-8859-11'</code>, <code>'iso8859-11'</code>, <code>'iso885911'</code>, <code>'tis-620'</code></td>
</tr>
<tr>
<td><code>'windows-1250'</code></td>
<td><code>'cp1250'</code>, <code>'x-cp1250'</code></td>
</tr>
<tr>
<td><code>'windows-1251'</code></td>
<td><code>'cp1251'</code>, <code>'x-cp1251'</code></td>
</tr>
<tr>
<td><code>'windows-1252'</code></td>
<td><code>'ansi_x3.4-1968'</code>, <code>'ascii'</code>, <code>'cp1252'</code>, <code>'cp819'</code>, <code>'csisolatin1'</code>, <code>'ibm819'</code>, <code>'iso-8859-1'</code>, <code>'iso-ir-100'</code>, <code>'iso8859-1'</code>, <code>'iso88591'</code>, <code>'iso_8859-1'</code>, <code>'iso_8859-1:1987'</code>, <code>'l1'</code>, <code>'latin1'</code>, <code>'us-ascii'</code>, <code>'x-cp1252'</code></td>
</tr>
<tr>
<td><code>'windows-1253'</code></td>
<td><code>'cp1253'</code>, <code>'x-cp1253'</code></td>
</tr>
<tr>
<td><code>'windows-1254'</code></td>
<td><code>'cp1254'</code>, <code>'csisolatin5'</code>, <code>'iso-8859-9'</code>, <code>'iso-ir-148'</code>, <code>'iso8859-9'</code>, <code>'iso88599'</code>, <code>'iso_8859-9'</code>, <code>'iso_8859-9:1989'</code>, <code>'l5'</code>, <code>'latin5'</code>, <code>'x-cp1254'</code></td>
</tr>
<tr>
<td><code>'windows-1255'</code></td>
<td><code>'cp1255'</code>, <code>'x-cp1255'</code></td>
</tr>
<tr>
<td><code>'windows-1256'</code></td>
<td><code>'cp1256'</code>, <code>'x-cp1256'</code></td>
</tr>
<tr>
<td><code>'windows-1257'</code></td>
<td><code>'cp1257'</code>, <code>'x-cp1257'</code></td>
</tr>
<tr>
<td><code>'windows-1258'</code></td>
<td><code>'cp1258'</code>, <code>'x-cp1258'</code></td>
</tr>
<tr>
<td><code>'x-mac-cyrillic'</code></td>
<td><code>'x-mac-ukrainian'</code></td>
</tr>
<tr>
<td><code>'gbk'</code></td>
<td><code>'chinese'</code>, <code>'csgb2312'</code>, <code>'csiso58gb231280'</code>, <code>'gb2312'</code>, <code>'gb_2312'</code>, <code>'gb_2312-80'</code>, <code>'iso-ir-58'</code>, <code>'x-gbk'</code></td>
</tr>
<tr>
<td><code>'gb18030'</code></td>
<td></td>
</tr>
<tr>
<td><code>'big5'</code></td>
<td><code>'big5-hkscs'</code>, <code>'cn-big5'</code>, <code>'csbig5'</code>, <code>'x-x-big5'</code></td>
</tr>
<tr>
<td><code>'euc-jp'</code></td>
<td><code>'cseucpkdfmtjapanese'</code>, <code>'x-euc-jp'</code></td>
</tr>
<tr>
<td><code>'iso-2022-jp'</code></td>
<td><code>'csiso2022jp'</code></td>
</tr>
<tr>
<td><code>'shift_jis'</code></td>
<td><code>'csshiftjis'</code>, <code>'ms932'</code>, <code>'ms_kanji'</code>, <code>'shift-jis'</code>, <code>'sjis'</code>, <code>'windows-31j'</code>, <code>'x-sjis'</code></td>
</tr>
<tr>
<td><code>'euc-kr'</code></td>
<td><code>'cseuckr'</code>, <code>'csksc56011987'</code>, <code>'iso-ir-149'</code>, <code>'korean'</code>, <code>'ks_c_5601-1987'</code>, <code>'ks_c_5601-1989'</code>, <code>'ksc5601'</code>, <code>'ksc_5601'</code>, <code>'windows-949'</code></td>
</tr>
</tbody>
</table>
<h4>Encodings supported when Node.js is built with the <code>small-icu</code> option</h4>
<table>
<thead>
<tr>
<th>Encoding</th>
<th>Aliases</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'utf-8'</code></td>
<td><code>'unicode-1-1-utf-8'</code>, <code>'utf8'</code></td>
</tr>
<tr>
<td><code>'utf-16le'</code></td>
<td><code>'utf-16'</code></td>
</tr>
<tr>
<td><code>'utf-16be'</code></td>
<td></td>
</tr>
</tbody>
</table>
<h4>Encodings supported when ICU is disabled</h4>
<table>
<thead>
<tr>
<th>Encoding</th>
<th>Aliases</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'utf-8'</code></td>
<td><code>'unicode-1-1-utf-8'</code>, <code>'utf8'</code></td>
</tr>
<tr>
<td><code>'utf-16le'</code></td>
<td><code>'utf-16'</code></td>
</tr>
</tbody>
</table>
<p>The <code>'iso-8859-16'</code> encoding listed in the <a href="https://encoding.spec.whatwg.org/">WHATWG Encoding Standard</a>
is not supported.</p>
<h3><code>new TextDecoder([encoding[, options]])</code></h3>
<ul>
<li><code>encoding</code> {string} Identifies the <code>encoding</code> that this <code>TextDecoder</code> instance
supports. <strong>Default:</strong> <code>'utf-8'</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>fatal</code> {boolean} <code>true</code> if decoding failures are fatal.
This option is not supported when ICU is disabled
(see <a href="intl.md">Internationalization</a>). <strong>Default:</strong> <code>false</code>.</li>
<li><code>ignoreBOM</code> {boolean} When <code>true</code>, the <code>TextDecoder</code> will include the byte
order mark in the decoded result. When <code>false</code>, the byte order mark will
be removed from the output. This option is only used when <code>encoding</code> is
<code>'utf-8'</code>, <code>'utf-16be'</code>, or <code>'utf-16le'</code>. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>TextDecoder</code> instance. The <code>encoding</code> may specify one of the
supported encodings or an alias.</p>
<p>The <code>TextDecoder</code> class is also available on the global object.</p>
<h3><code>textDecoder.decode([input[, options]])</code></h3>
<ul>
<li><code>input</code> {ArrayBuffer|DataView|TypedArray} An <code>ArrayBuffer</code>, <code>DataView</code>, or
<code>TypedArray</code> instance containing the encoded data.</li>
<li><code>options</code> {Object}
<ul>
<li><code>stream</code> {boolean} <code>true</code> if additional chunks of data are expected.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Decodes the <code>input</code> and returns a string. If <code>options.stream</code> is <code>true</code>, any
incomplete byte sequences occurring at the end of the <code>input</code> are buffered
internally and emitted after the next call to <code>textDecoder.decode()</code>.</p>
<p>If <code>textDecoder.fatal</code> is <code>true</code>, decoding errors that occur will result in a
<code>TypeError</code> being thrown.</p>
<h3><code>textDecoder.encoding</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The encoding supported by the <code>TextDecoder</code> instance.</p>
<h3><code>textDecoder.fatal</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The value will be <code>true</code> if decoding errors result in a <code>TypeError</code> being
thrown.</p>
<h3><code>textDecoder.ignoreBOM</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The value will be <code>true</code> if the decoding result will include the byte order
mark.</p>
<h2>Class: <code>util.TextEncoder</code></h2>
<p>An implementation of the <a href="https://encoding.spec.whatwg.org/">WHATWG Encoding Standard</a> <code>TextEncoder</code> API. All
instances of <code>TextEncoder</code> only support UTF-8 encoding.</p>
<pre><code class="language-js">const encoder = new TextEncoder();
const uint8array = encoder.encode('this is some data');
</code></pre>
<p>The <code>TextEncoder</code> class is also available on the global object.</p>
<h3><code>textEncoder.encode([input])</code></h3>
<ul>
<li><code>input</code> {string} The text to encode. <strong>Default:</strong> an empty string.</li>
<li>Returns: {Uint8Array}</li>
</ul>
<p>UTF-8 encodes the <code>input</code> string and returns a <code>Uint8Array</code> containing the
encoded bytes.</p>
<h3><code>textEncoder.encodeInto(src, dest)</code></h3>
<ul>
<li><code>src</code> {string} The text to encode.</li>
<li><code>dest</code> {Uint8Array} The array to hold the encode result.</li>
<li>Returns: {Object}
<ul>
<li><code>read</code> {number} The read Unicode code units of src.</li>
<li><code>written</code> {number} The written UTF-8 bytes of dest.</li>
</ul>
</li>
</ul>
<p>UTF-8 encodes the <code>src</code> string to the <code>dest</code> Uint8Array and returns an object
containing the read Unicode code units and written UTF-8 bytes.</p>
<pre><code class="language-js">const encoder = new TextEncoder();
const src = 'this is some data';
const dest = new Uint8Array(10);
const { read, written } = encoder.encodeInto(src, dest);
</code></pre>
<h3><code>textEncoder.encoding</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The encoding supported by the <code>TextEncoder</code> instance. Always set to <code>'utf-8'</code>.</p>
<h2><code>util.toUSVString(string)</code></h2>
<ul>
<li><code>string</code> {string}</li>
</ul>
<p>Returns the <code>string</code> after replacing any surrogate code points
(or equivalently, any unpaired surrogate code units) with the
Unicode &quot;replacement character&quot; U+FFFD.</p>
<h2><code>util.transferableAbortController()</code></h2>
<p>Creates and returns an {AbortController} instance whose {AbortSignal} is marked
as transferable and can be used with <code>structuredClone()</code> or <code>postMessage()</code>.</p>
<h2><code>util.transferableAbortSignal(signal)</code></h2>
<ul>
<li><code>signal</code> {AbortSignal}</li>
<li>Returns: {AbortSignal}</li>
</ul>
<p>Marks the given {AbortSignal} as transferable so that it can be used with
<code>structuredClone()</code> and <code>postMessage()</code>.</p>
<pre><code class="language-js">const signal = transferableAbortSignal(AbortSignal.timeout(100));
const channel = new MessageChannel();
channel.port2.postMessage(signal, [signal]);
</code></pre>
<h2><code>util.aborted(signal, resource)</code></h2>
<ul>
<li><code>signal</code> {AbortSignal}</li>
<li><code>resource</code> {Object} Any non-null object tied to the abortable operation and held weakly.
If <code>resource</code> is garbage collected before the <code>signal</code> aborts, the promise remains pending,
allowing Node.js to stop tracking it.
This helps prevent memory leaks in long-running or non-cancelable operations.</li>
<li>Returns: {Promise}</li>
</ul>
<p>Listens to abort event on the provided <code>signal</code> and returns a promise that resolves when the <code>signal</code> is aborted.
If <code>resource</code> is provided, it weakly references the operation's associated object,
so if <code>resource</code> is garbage collected before the <code>signal</code> aborts,
then returned promise shall remain pending.
This prevents memory leaks in long-running or non-cancelable operations.</p>
<pre><code class="language-cjs">const { aborted } = require('node:util');

// Obtain an object with an abortable signal, like a custom resource or operation.
const dependent = obtainSomethingAbortable();

// Pass `dependent` as the resource, indicating the promise should only resolve
// if `dependent` is still in memory when the signal is aborted.
aborted(dependent.signal, dependent).then(() =&gt; {

  // This code runs when `dependent` is aborted.
  console.log('Dependent resource was aborted.');
});

// Simulate an event that triggers the abort.
dependent.on('event', () =&gt; {
  dependent.abort(); // This will cause the `aborted` promise to resolve.
});
</code></pre>
<pre><code class="language-mjs">import { aborted } from 'node:util';

// Obtain an object with an abortable signal, like a custom resource or operation.
const dependent = obtainSomethingAbortable();

// Pass `dependent` as the resource, indicating the promise should only resolve
// if `dependent` is still in memory when the signal is aborted.
aborted(dependent.signal, dependent).then(() =&gt; {

  // This code runs when `dependent` is aborted.
  console.log('Dependent resource was aborted.');
});

// Simulate an event that triggers the abort.
dependent.on('event', () =&gt; {
  dependent.abort(); // This will cause the `aborted` promise to resolve.
});
</code></pre>
<h2><code>util.types</code></h2>
<p><code>util.types</code> provides type checks for different kinds of built-in objects.
Unlike <code>instanceof</code> or <code>Object.prototype.toString.call(value)</code>, these checks do
not inspect properties of the object that are accessible from JavaScript (like
their prototype), and usually have the overhead of calling into C++.</p>
<p>The result generally does not make any guarantees about what kinds of
properties or behavior a value exposes in JavaScript. They are primarily
useful for addon developers who prefer to do type checking in JavaScript.</p>
<p>The API is accessible via <code>require('node:util').types</code> or <code>require('node:util/types')</code>.</p>
<h3><code>util.types.isAnyArrayBuffer(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {ArrayBuffer} or
{SharedArrayBuffer} instance.</p>
<p>See also <a href="#utiltypesisarraybuffervalue"><code>util.types.isArrayBuffer()</code></a> and
<a href="#utiltypesissharedarraybuffervalue"><code>util.types.isSharedArrayBuffer()</code></a>.</p>
<pre><code class="language-js">util.types.isAnyArrayBuffer(new ArrayBuffer());  // Returns true
util.types.isAnyArrayBuffer(new SharedArrayBuffer());  // Returns true
</code></pre>
<h3><code>util.types.isArrayBufferView(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an instance of one of the {ArrayBuffer}
views, such as typed array objects or {DataView}. Equivalent to
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"><code>ArrayBuffer.isView()</code></a>.</p>
<pre><code class="language-js">util.types.isArrayBufferView(new Int8Array());  // true
util.types.isArrayBufferView(Buffer.from('hello world')); // true
util.types.isArrayBufferView(new DataView(new ArrayBuffer(16)));  // true
util.types.isArrayBufferView(new ArrayBuffer());  // false
</code></pre>
<h3><code>util.types.isArgumentsObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an <code>arguments</code> object.</p>
<pre><code class="language-js">function foo() {
  util.types.isArgumentsObject(arguments);  // Returns true
}
</code></pre>
<h3><code>util.types.isArrayBuffer(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {ArrayBuffer} instance.
This does <em>not</em> include {SharedArrayBuffer} instances. Usually, it is
desirable to test for both; See <a href="#utiltypesisanyarraybuffervalue"><code>util.types.isAnyArrayBuffer()</code></a> for that.</p>
<pre><code class="language-js">util.types.isArrayBuffer(new ArrayBuffer());  // Returns true
util.types.isArrayBuffer(new SharedArrayBuffer());  // Returns false
</code></pre>
<h3><code>util.types.isAsyncFunction(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">async function</a>.
This only reports back what the JavaScript engine is seeing;
in particular, the return value may not match the original source code if
a transpilation tool was used.</p>
<pre><code class="language-js">util.types.isAsyncFunction(function foo() {});  // Returns false
util.types.isAsyncFunction(async function foo() {});  // Returns true
</code></pre>
<h3><code>util.types.isBigInt64Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a <code>BigInt64Array</code> instance.</p>
<pre><code class="language-js">util.types.isBigInt64Array(new BigInt64Array());   // Returns true
util.types.isBigInt64Array(new BigUint64Array());  // Returns false
</code></pre>
<h3><code>util.types.isBigIntObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a BigInt object, e.g. created
by <code>Object(BigInt(123))</code>.</p>
<pre><code class="language-js">util.types.isBigIntObject(Object(BigInt(123)));   // Returns true
util.types.isBigIntObject(BigInt(123));   // Returns false
util.types.isBigIntObject(123);  // Returns false
</code></pre>
<h3><code>util.types.isBigUint64Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a <code>BigUint64Array</code> instance.</p>
<pre><code class="language-js">util.types.isBigUint64Array(new BigInt64Array());   // Returns false
util.types.isBigUint64Array(new BigUint64Array());  // Returns true
</code></pre>
<h3><code>util.types.isBooleanObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a boolean object, e.g. created
by <code>new Boolean()</code>.</p>
<pre><code class="language-js">util.types.isBooleanObject(false);  // Returns false
util.types.isBooleanObject(true);   // Returns false
util.types.isBooleanObject(new Boolean(false)); // Returns true
util.types.isBooleanObject(new Boolean(true));  // Returns true
util.types.isBooleanObject(Boolean(false)); // Returns false
util.types.isBooleanObject(Boolean(true));  // Returns false
</code></pre>
<h3><code>util.types.isBoxedPrimitive(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is any boxed primitive object, e.g. created
by <code>new Boolean()</code>, <code>new String()</code> or <code>Object(Symbol())</code>.</p>
<p>For example:</p>
<pre><code class="language-js">util.types.isBoxedPrimitive(false); // Returns false
util.types.isBoxedPrimitive(new Boolean(false)); // Returns true
util.types.isBoxedPrimitive(Symbol('foo')); // Returns false
util.types.isBoxedPrimitive(Object(Symbol('foo'))); // Returns true
util.types.isBoxedPrimitive(Object(BigInt(5))); // Returns true
</code></pre>
<h3><code>util.types.isCryptoKey(value)</code></h3>
<ul>
<li><code>value</code> {Object}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if <code>value</code> is a {CryptoKey}, <code>false</code> otherwise.</p>
<h3><code>util.types.isDataView(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {DataView} instance.</p>
<pre><code class="language-js">const ab = new ArrayBuffer(20);
util.types.isDataView(new DataView(ab));  // Returns true
util.types.isDataView(new Float64Array());  // Returns false
</code></pre>
<p>See also <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"><code>ArrayBuffer.isView()</code></a>.</p>
<h3><code>util.types.isDate(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Date} instance.</p>
<pre><code class="language-js">util.types.isDate(new Date());  // Returns true
</code></pre>
<h3><code>util.types.isExternal(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a native <code>External</code> value.</p>
<p>A native <code>External</code> value is a special type of object that contains a
raw C++ pointer (<code>void*</code>) for access from native code, and has no other
properties. Such objects are created either by Node.js internals or native
addons. In JavaScript, they are <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">frozen</a> objects with a
<code>null</code> prototype.</p>
<pre><code class="language-c">#include &lt;js_native_api.h&gt;
#include &lt;stdlib.h&gt;
napi_value result;
static napi_value MyNapi(napi_env env, napi_callback_info info) {
  int* raw = (int*) malloc(1024);
  napi_status status = napi_create_external(env, (void*) raw, NULL, NULL, &amp;result);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, &quot;napi_create_external failed&quot;);
    return NULL;
  }
  return result;
}
...
DECLARE_NAPI_PROPERTY(&quot;myNapi&quot;, MyNapi)
...
</code></pre>
<pre><code class="language-mjs">import native from 'napi_addon.node';
import { types } from 'node:util';

const data = native.myNapi();
types.isExternal(data); // returns true
types.isExternal(0); // returns false
types.isExternal(new String('foo')); // returns false
</code></pre>
<pre><code class="language-cjs">const native = require('napi_addon.node');
const { types } = require('node:util');

const data = native.myNapi();
types.isExternal(data); // returns true
types.isExternal(0); // returns false
types.isExternal(new String('foo')); // returns false
</code></pre>
<p>For further information on <code>napi_create_external</code>, refer to
<a href="n-api.md#napi_create_external"><code>napi_create_external()</code></a>.</p>
<h3><code>util.types.isFloat16Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Float16Array} instance.</p>
<pre><code class="language-js">util.types.isFloat16Array(new ArrayBuffer());  // Returns false
util.types.isFloat16Array(new Float16Array());  // Returns true
util.types.isFloat16Array(new Float32Array());  // Returns false
</code></pre>
<h3><code>util.types.isFloat32Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Float32Array} instance.</p>
<pre><code class="language-js">util.types.isFloat32Array(new ArrayBuffer());  // Returns false
util.types.isFloat32Array(new Float32Array());  // Returns true
util.types.isFloat32Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isFloat64Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Float64Array} instance.</p>
<pre><code class="language-js">util.types.isFloat64Array(new ArrayBuffer());  // Returns false
util.types.isFloat64Array(new Uint8Array());  // Returns false
util.types.isFloat64Array(new Float64Array());  // Returns true
</code></pre>
<h3><code>util.types.isGeneratorFunction(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a generator function.
This only reports back what the JavaScript engine is seeing;
in particular, the return value may not match the original source code if
a transpilation tool was used.</p>
<pre><code class="language-js">util.types.isGeneratorFunction(function foo() {});  // Returns false
util.types.isGeneratorFunction(function* foo() {});  // Returns true
</code></pre>
<h3><code>util.types.isGeneratorObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a generator object as returned from a
built-in generator function.
This only reports back what the JavaScript engine is seeing;
in particular, the return value may not match the original source code if
a transpilation tool was used.</p>
<pre><code class="language-js">function* foo() {}
const generator = foo();
util.types.isGeneratorObject(generator);  // Returns true
</code></pre>
<h3><code>util.types.isInt8Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Int8Array} instance.</p>
<pre><code class="language-js">util.types.isInt8Array(new ArrayBuffer());  // Returns false
util.types.isInt8Array(new Int8Array());  // Returns true
util.types.isInt8Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isInt16Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Int16Array} instance.</p>
<pre><code class="language-js">util.types.isInt16Array(new ArrayBuffer());  // Returns false
util.types.isInt16Array(new Int16Array());  // Returns true
util.types.isInt16Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isInt32Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Int32Array} instance.</p>
<pre><code class="language-js">util.types.isInt32Array(new ArrayBuffer());  // Returns false
util.types.isInt32Array(new Int32Array());  // Returns true
util.types.isInt32Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isKeyObject(value)</code></h3>
<ul>
<li><code>value</code> {Object}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if <code>value</code> is a {KeyObject}, <code>false</code> otherwise.</p>
<h3><code>util.types.isMap(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Map} instance.</p>
<pre><code class="language-js">util.types.isMap(new Map());  // Returns true
</code></pre>
<h3><code>util.types.isMapIterator(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an iterator returned for a built-in
{Map} instance.</p>
<pre><code class="language-js">const map = new Map();
util.types.isMapIterator(map.keys());  // Returns true
util.types.isMapIterator(map.values());  // Returns true
util.types.isMapIterator(map.entries());  // Returns true
util.types.isMapIterator(map[Symbol.iterator]());  // Returns true
</code></pre>
<h3><code>util.types.isModuleNamespaceObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an instance of a <a href="https://tc39.github.io/ecma262/#sec-module-namespace-exotic-objects">Module Namespace Object</a>.</p>
<pre><code class="language-mjs">import * as ns from './a.js';

util.types.isModuleNamespaceObject(ns);  // Returns true
</code></pre>
<h3><code>util.types.isNativeError(value)</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError"><code>Error.isError</code></a> instead.</p>
</blockquote>
<p><strong>Note:</strong> As of Node.js 24, <code>Error.isError()</code> is currently slower than <code>util.types.isNativeError()</code>.
If performance is critical, consider benchmarking both in your environment.</p>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value was returned by the constructor of a
<a href="https://tc39.es/ecma262/#sec-error-objects">built-in <code>Error</code> type</a>.</p>
<pre><code class="language-js">console.log(util.types.isNativeError(new Error()));  // true
console.log(util.types.isNativeError(new TypeError()));  // true
console.log(util.types.isNativeError(new RangeError()));  // true
</code></pre>
<p>Subclasses of the native error types are also native errors:</p>
<pre><code class="language-js">class MyError extends Error {}
console.log(util.types.isNativeError(new MyError()));  // true
</code></pre>
<p>A value being <code>instanceof</code> a native error class is not equivalent to <code>isNativeError()</code>
returning <code>true</code> for that value. <code>isNativeError()</code> returns <code>true</code> for errors
which come from a different <a href="https://tc39.es/ecma262/#realm">realm</a> while <code>instanceof Error</code> returns <code>false</code>
for these errors:</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';
import { types } from 'node:util';

const context = createContext({});
const myError = runInContext('new Error()', context);
console.log(types.isNativeError(myError)); // true
console.log(myError instanceof Error); // false
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');
const { types } = require('node:util');

const context = createContext({});
const myError = runInContext('new Error()', context);
console.log(types.isNativeError(myError)); // true
console.log(myError instanceof Error); // false
</code></pre>
<p>Conversely, <code>isNativeError()</code> returns <code>false</code> for all objects which were not
returned by the constructor of a native error. That includes values
which are <code>instanceof</code> native errors:</p>
<pre><code class="language-js">const myError = { __proto__: Error.prototype };
console.log(util.types.isNativeError(myError)); // false
console.log(myError instanceof Error); // true
</code></pre>
<h3><code>util.types.isNumberObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a number object, e.g. created
by <code>new Number()</code>.</p>
<pre><code class="language-js">util.types.isNumberObject(0);  // Returns false
util.types.isNumberObject(new Number(0));   // Returns true
</code></pre>
<h3><code>util.types.isPromise(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Promise}.</p>
<pre><code class="language-js">util.types.isPromise(Promise.resolve(42));  // Returns true
</code></pre>
<h3><code>util.types.isProxy(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a {Proxy} instance.</p>
<pre><code class="language-js">const target = {};
const proxy = new Proxy(target, {});
util.types.isProxy(target);  // Returns false
util.types.isProxy(proxy);  // Returns true
</code></pre>
<h3><code>util.types.isRegExp(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a regular expression object.</p>
<pre><code class="language-js">util.types.isRegExp(/abc/);  // Returns true
util.types.isRegExp(new RegExp('abc'));  // Returns true
</code></pre>
<h3><code>util.types.isSet(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Set} instance.</p>
<pre><code class="language-js">util.types.isSet(new Set());  // Returns true
</code></pre>
<h3><code>util.types.isSetIterator(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is an iterator returned for a built-in
{Set} instance.</p>
<pre><code class="language-js">const set = new Set();
util.types.isSetIterator(set.keys());  // Returns true
util.types.isSetIterator(set.values());  // Returns true
util.types.isSetIterator(set.entries());  // Returns true
util.types.isSetIterator(set[Symbol.iterator]());  // Returns true
</code></pre>
<h3><code>util.types.isSharedArrayBuffer(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {SharedArrayBuffer} instance.
This does <em>not</em> include {ArrayBuffer} instances. Usually, it is
desirable to test for both; See <a href="#utiltypesisanyarraybuffervalue"><code>util.types.isAnyArrayBuffer()</code></a> for that.</p>
<pre><code class="language-js">util.types.isSharedArrayBuffer(new ArrayBuffer());  // Returns false
util.types.isSharedArrayBuffer(new SharedArrayBuffer());  // Returns true
</code></pre>
<h3><code>util.types.isStringObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a string object, e.g. created
by <code>new String()</code>.</p>
<pre><code class="language-js">util.types.isStringObject('foo');  // Returns false
util.types.isStringObject(new String('foo'));   // Returns true
</code></pre>
<h3><code>util.types.isSymbolObject(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a symbol object, created
by calling <code>Object()</code> on a <code>Symbol</code> primitive.</p>
<pre><code class="language-js">const symbol = Symbol('foo');
util.types.isSymbolObject(symbol);  // Returns false
util.types.isSymbolObject(Object(symbol));   // Returns true
</code></pre>
<h3><code>util.types.isTypedArray(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {TypedArray} instance.</p>
<pre><code class="language-js">util.types.isTypedArray(new ArrayBuffer());  // Returns false
util.types.isTypedArray(new Uint8Array());  // Returns true
util.types.isTypedArray(new Float64Array());  // Returns true
</code></pre>
<p>See also <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"><code>ArrayBuffer.isView()</code></a>.</p>
<h3><code>util.types.isUint8Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Uint8Array} instance.</p>
<pre><code class="language-js">util.types.isUint8Array(new ArrayBuffer());  // Returns false
util.types.isUint8Array(new Uint8Array());  // Returns true
util.types.isUint8Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isUint8ClampedArray(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Uint8ClampedArray} instance.</p>
<pre><code class="language-js">util.types.isUint8ClampedArray(new ArrayBuffer());  // Returns false
util.types.isUint8ClampedArray(new Uint8ClampedArray());  // Returns true
util.types.isUint8ClampedArray(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isUint16Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Uint16Array} instance.</p>
<pre><code class="language-js">util.types.isUint16Array(new ArrayBuffer());  // Returns false
util.types.isUint16Array(new Uint16Array());  // Returns true
util.types.isUint16Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isUint32Array(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {Uint32Array} instance.</p>
<pre><code class="language-js">util.types.isUint32Array(new ArrayBuffer());  // Returns false
util.types.isUint32Array(new Uint32Array());  // Returns true
util.types.isUint32Array(new Float64Array());  // Returns false
</code></pre>
<h3><code>util.types.isWeakMap(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {WeakMap} instance.</p>
<pre><code class="language-js">util.types.isWeakMap(new WeakMap());  // Returns true
</code></pre>
<h3><code>util.types.isWeakSet(value)</code></h3>
<ul>
<li><code>value</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the value is a built-in {WeakSet} instance.</p>
<pre><code class="language-js">util.types.isWeakSet(new WeakSet());  // Returns true
</code></pre>
<h2>Deprecated APIs</h2>
<p>The following APIs are deprecated and should no longer be used. Existing
applications and modules should be updated to find alternative approaches.</p>
<h3><code>util._extend(target, source)</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"><code>Object.assign()</code></a> instead.</p>
</blockquote>
<ul>
<li><code>target</code> {Object}</li>
<li><code>source</code> {Object}</li>
</ul>
<p>The <code>util._extend()</code> method was never intended to be used outside of internal
Node.js modules. The community found and used it anyway.</p>
<p>It is deprecated and should not be used in new code. JavaScript comes with very
similar built-in functionality through <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"><code>Object.assign()</code></a>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-extend-to-object-assign">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-extend-to-object-assign
</code></pre>
<h3><code>util.isArray(object)</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"><code>Array.isArray()</code></a> instead.</p>
</blockquote>
<ul>
<li><code>object</code> {any}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Alias for <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"><code>Array.isArray()</code></a>.</p>
<p>Returns <code>true</code> if the given <code>object</code> is an <code>Array</code>. Otherwise, returns <code>false</code>.</p>
<pre><code class="language-js">const util = require('node:util');

util.isArray([]);
// Returns: true
util.isArray(new Array());
// Returns: true
util.isArray({});
// Returns: false
</code></pre>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
