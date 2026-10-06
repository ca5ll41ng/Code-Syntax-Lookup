---
id: "js-en-function-node-process"
language: "js"
lang: "en"
category: "function"
name: "node:process"
title: "Process"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/process.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Process

<h1>Process</h1>
<p>The <code>process</code> object provides information about, and control over, the current
Node.js process.</p>
<pre><code class="language-mjs">import process from 'node:process';
</code></pre>
<pre><code class="language-cjs">const process = require('node:process');
</code></pre>
<h2>Process events</h2>
<p>The <code>process</code> object is an instance of <a href="events.md#class-eventemitter"><code>EventEmitter</code></a>.</p>
<h3>Event: <code>'beforeExit'</code></h3>
<p>The <code>'beforeExit'</code> event is emitted when Node.js empties its event loop and has
no additional work to schedule. Normally, the Node.js process will exit when
there is no work scheduled, but a listener registered on the <code>'beforeExit'</code>
event can make asynchronous calls, and thereby cause the Node.js process to
continue.</p>
<p>The listener callback function is invoked with the value of
<a href="#processexitcode_1"><code>process.exitCode</code></a> passed as the only argument.</p>
<p>The <code>'beforeExit'</code> event is <em>not</em> emitted for conditions causing explicit
termination, such as calling <a href="#processexitcode"><code>process.exit()</code></a> or uncaught exceptions.</p>
<p>The <code>'beforeExit'</code> should <em>not</em> be used as an alternative to the <code>'exit'</code> event
unless the intention is to schedule additional work.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('beforeExit', (code) =&gt; {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) =&gt; {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');

// Prints:
// This message is displayed first.
// Process beforeExit event with code: 0
// Process exit event with code: 0
</code></pre>
<pre><code class="language-cjs">process.on('beforeExit', (code) =&gt; {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) =&gt; {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');

// Prints:
// This message is displayed first.
// Process beforeExit event with code: 0
// Process exit event with code: 0
</code></pre>
<h3>Event: <code>'disconnect'</code></h3>
<p>If the Node.js process is spawned with an IPC channel (see the <a href="child_process.md">Child Process</a>
and <a href="cluster.md">Cluster</a> documentation), the <code>'disconnect'</code> event will be emitted when
the IPC channel is closed.</p>
<h3>Event: <code>'exit'</code></h3>
<ul>
<li><code>code</code> {integer}</li>
</ul>
<p>The <code>'exit'</code> event is emitted when the Node.js process is about to exit as a
result of either:</p>
<ul>
<li>The <code>process.exit()</code> method being called explicitly;</li>
<li>The Node.js event loop no longer having any additional work to perform.</li>
</ul>
<p>There is no way to prevent the exiting of the event loop at this point, and once
all <code>'exit'</code> listeners have finished running the Node.js process will terminate.</p>
<p>The listener callback function is invoked with the exit code specified either
by the <a href="#processexitcode_1"><code>process.exitCode</code></a> property, or the <code>exitCode</code> argument passed to the
<a href="#processexitcode"><code>process.exit()</code></a> method.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('exit', (code) =&gt; {
  console.log(`About to exit with code: ${code}`);
});
</code></pre>
<pre><code class="language-cjs">process.on('exit', (code) =&gt; {
  console.log(`About to exit with code: ${code}`);
});
</code></pre>
<p>Listener functions <strong>must</strong> only perform <strong>synchronous</strong> operations. The Node.js
process will exit immediately after calling the <code>'exit'</code> event listeners
causing any additional work still queued in the event loop to be abandoned.
In the following example, for instance, the timeout will never occur:</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('exit', (code) =&gt; {
  setTimeout(() =&gt; {
    console.log('This will not run');
  }, 0);
});
</code></pre>
<pre><code class="language-cjs">process.on('exit', (code) =&gt; {
  setTimeout(() =&gt; {
    console.log('This will not run');
  }, 0);
});
</code></pre>
<h3>Event: <code>'message'</code></h3>
<ul>
<li><code>message</code> {Object|boolean|number|string|null} a parsed JSON object
or a serializable primitive value.</li>
<li><code>sendHandle</code> {net.Server|net.Socket} a <a href="net.md#class-netserver"><code>net.Server</code></a> or <a href="net.md#class-netsocket"><code>net.Socket</code></a>
object, or undefined.</li>
</ul>
<p>If the Node.js process is spawned with an IPC channel (see the <a href="child_process.md">Child Process</a>
and <a href="cluster.md">Cluster</a> documentation), the <code>'message'</code> event is emitted whenever a
message sent by a parent process using <a href="child_process.md#subprocesssendmessage-sendhandle-options-callback"><code>childprocess.send()</code></a> is received by
the child process.</p>
<p>The message goes through serialization and parsing. The resulting message might
not be the same as what is originally sent.</p>
<p>If the <code>serialization</code> option was set to <code>advanced</code> used when spawning the
process, the <code>message</code> argument can contain data that JSON is not able
to represent.
See <a href="child_process.md#advanced-serialization">Advanced serialization for <code>child_process</code></a> for more details.</p>
<h3>Event: <code>'rejectionHandled'</code></h3>
<ul>
<li><code>promise</code> {Promise} The late handled promise.</li>
</ul>
<p>The <code>'rejectionHandled'</code> event is emitted whenever a <code>Promise</code> has been rejected
and an error handler was attached to it (using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"><code>promise.catch()</code></a>, for
example) later than one turn of the Node.js event loop.</p>
<p>The <code>Promise</code> object would have previously been emitted in an
<code>'unhandledRejection'</code> event, but during the course of processing gained a
rejection handler.</p>
<p>There is no notion of a top level for a <code>Promise</code> chain at which rejections can
always be handled. Being inherently asynchronous in nature, a <code>Promise</code>
rejection can be handled at a future point in time, possibly much later than
the event loop turn it takes for the <code>'unhandledRejection'</code> event to be emitted.</p>
<p>Another way of stating this is that, unlike in synchronous code where there is
an ever-growing list of unhandled exceptions, with Promises there can be a
growing-and-shrinking list of unhandled rejections.</p>
<p>In synchronous code, the <code>'uncaughtException'</code> event is emitted when the list of
unhandled exceptions grows.</p>
<p>In asynchronous code, the <code>'unhandledRejection'</code> event is emitted when the list
of unhandled rejections grows, and the <code>'rejectionHandled'</code> event is emitted
when the list of unhandled rejections shrinks.</p>
<pre><code class="language-mjs">import process from 'node:process';

const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) =&gt; {
  unhandledRejections.set(promise, reason);
});
process.on('rejectionHandled', (promise) =&gt; {
  unhandledRejections.delete(promise);
});
</code></pre>
<pre><code class="language-cjs">const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) =&gt; {
  unhandledRejections.set(promise, reason);
});
process.on('rejectionHandled', (promise) =&gt; {
  unhandledRejections.delete(promise);
});
</code></pre>
<p>In this example, the <code>unhandledRejections</code> <code>Map</code> will grow and shrink over time,
reflecting rejections that start unhandled and then become handled. It is
possible to record such errors in an error log, either periodically (which is
likely best for long-running application) or upon process exit (which is likely
most convenient for scripts).</p>
<h3>Event: <code>'workerMessage'</code></h3>
<ul>
<li><code>value</code> {any} A value transmitted using <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a>.</li>
<li><code>source</code> {number} The transmitting worker thread ID or <code>0</code> for the main thread.</li>
</ul>
<p>The <code>'workerMessage'</code> event is emitted for any incoming message send by the other
party by using <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a>.</p>
<h3>Event: <code>'uncaughtException'</code></h3>
<ul>
<li><code>err</code> {Error} The uncaught exception.</li>
<li><code>origin</code> {string} Indicates if the exception originates from an unhandled
rejection or from a synchronous error. Can either be <code>'uncaughtException'</code> or
<code>'unhandledRejection'</code>. The latter is used when an exception happens in a
<code>Promise</code> based async context (or if a <code>Promise</code> is rejected) and
<a href="cli.md#--unhandled-rejectionsmode"><code>--unhandled-rejections</code></a> flag set to <code>strict</code> or <code>throw</code> (which is the
default) and the rejection is not handled, or when a rejection happens during
the command line entry point's ES module static loading phase.</li>
</ul>
<p>The <code>'uncaughtException'</code> event is emitted when an uncaught JavaScript
exception bubbles all the way back to the event loop. By default, Node.js
handles such exceptions by printing the stack trace to <code>stderr</code> and exiting
with code 1, overriding any previously set <a href="#processexitcode_1"><code>process.exitCode</code></a>.
Adding a handler for the <code>'uncaughtException'</code> event overrides this default
behavior. Alternatively, change the <a href="#processexitcode_1"><code>process.exitCode</code></a> in the
<code>'uncaughtException'</code> handler which will result in the process exiting with the
provided exit code. Otherwise, in the presence of such handler the process will
exit with 0.</p>
<pre><code class="language-mjs">import process from 'node:process';
import fs from 'node:fs';

process.on('uncaughtException', (err, origin) =&gt; {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}\n`,
  );
});

setTimeout(() =&gt; {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');
</code></pre>
<pre><code class="language-cjs">const fs = require('node:fs');

process.on('uncaughtException', (err, origin) =&gt; {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}\n`,
  );
});

setTimeout(() =&gt; {
  console.log('This will still run.');
}, 500);

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');
</code></pre>
<p>It is possible to monitor <code>'uncaughtException'</code> events without overriding the
default behavior to exit the process by installing a
<code>'uncaughtExceptionMonitor'</code> listener.</p>
<h4>Warning: Using <code>'uncaughtException'</code> correctly</h4>
<p><code>'uncaughtException'</code> is a crude mechanism for exception handling
intended to be used only as a last resort. The event <em>should not</em> be used as
an equivalent to <code>On Error Resume Next</code>. Unhandled exceptions inherently mean
that an application is in an undefined state. Attempting to resume application
code without properly recovering from the exception can cause additional
unforeseen and unpredictable issues.</p>
<p>Exceptions thrown from within the event handler will not be caught. Instead the
process will exit with a non-zero exit code and the stack trace will be printed.
This is to avoid infinite recursion.</p>
<p>Attempting to resume normally after an uncaught exception can be similar to
pulling out the power cord when upgrading a computer. Nine out of ten
times, nothing happens. But the tenth time, the system becomes corrupted.</p>
<p>The correct use of <code>'uncaughtException'</code> is to perform synchronous cleanup
of allocated resources (e.g. file descriptors, handles, etc) before shutting
down the process. <strong>It is not safe to resume normal operation after
<code>'uncaughtException'</code>.</strong></p>
<p>To restart a crashed application in a more reliable way, whether
<code>'uncaughtException'</code> is emitted or not, an external monitor should be employed
in a separate process to detect application failures and recover or restart as
needed.</p>
<h3>Event: <code>'uncaughtExceptionMonitor'</code></h3>
<ul>
<li><code>err</code> {Error} The uncaught exception.</li>
<li><code>origin</code> {string} Indicates if the exception originates from an unhandled
rejection or from synchronous errors. Can either be <code>'uncaughtException'</code> or
<code>'unhandledRejection'</code>. The latter is used when an exception happens in a
<code>Promise</code> based async context (or if a <code>Promise</code> is rejected) and
<a href="cli.md#--unhandled-rejectionsmode"><code>--unhandled-rejections</code></a> flag set to <code>strict</code> or <code>throw</code> (which is the
default) and the rejection is not handled, or when a rejection happens during
the command line entry point's ES module static loading phase.</li>
</ul>
<p>The <code>'uncaughtExceptionMonitor'</code> event is emitted before an
<code>'uncaughtException'</code> event is emitted or a hook installed via
<a href="#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a> is called.</p>
<p>Installing an <code>'uncaughtExceptionMonitor'</code> listener does not change the behavior
once an <code>'uncaughtException'</code> event is emitted. The process will
still crash if no <code>'uncaughtException'</code> listener is installed.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('uncaughtExceptionMonitor', (err, origin) =&gt; {
  MyMonitoringTool.logSync(err, origin);
});

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
// Still crashes Node.js
</code></pre>
<pre><code class="language-cjs">process.on('uncaughtExceptionMonitor', (err, origin) =&gt; {
  MyMonitoringTool.logSync(err, origin);
});

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
// Still crashes Node.js
</code></pre>
<h3>Event: <code>'unhandledRejection'</code></h3>
<ul>
<li><code>reason</code> {Error|any} The object with which the promise was rejected
(typically an <a href="errors.md#class-error"><code>Error</code></a> object).</li>
<li><code>promise</code> {Promise} The rejected promise.</li>
</ul>
<p>The <code>'unhandledRejection'</code> event is emitted whenever a <code>Promise</code> is rejected and
no error handler is attached to the promise within a turn of the event loop.
When programming with Promises, exceptions are encapsulated as &quot;rejected
promises&quot;. Rejections can be caught and handled using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"><code>promise.catch()</code></a> and
are propagated through a <code>Promise</code> chain. The <code>'unhandledRejection'</code> event is
useful for detecting and keeping track of promises that were rejected whose
rejections have not yet been handled.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('unhandledRejection', (reason, promise) =&gt; {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

somePromise.then((res) =&gt; {
  return reportToUser(JSON.pasre(res)); // Note the typo (`pasre`)
}); // No `.catch()` or `.then()`
</code></pre>
<pre><code class="language-cjs">process.on('unhandledRejection', (reason, promise) =&gt; {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

somePromise.then((res) =&gt; {
  return reportToUser(JSON.pasre(res)); // Note the typo (`pasre`)
}); // No `.catch()` or `.then()`
</code></pre>
<p>The following will also trigger the <code>'unhandledRejection'</code> event to be
emitted:</p>
<pre><code class="language-mjs">import process from 'node:process';

function SomeResource() {
  // Initially set the loaded status to a rejected promise
  this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
}

const resource = new SomeResource();
// no .catch or .then on resource.loaded for at least a turn
</code></pre>
<pre><code class="language-cjs">function SomeResource() {
  // Initially set the loaded status to a rejected promise
  this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
}

const resource = new SomeResource();
// no .catch or .then on resource.loaded for at least a turn
</code></pre>
<p>In this example case, it is possible to track the rejection as a developer error
as would typically be the case for other <code>'unhandledRejection'</code> events. To
address such failures, a non-operational
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"><code>.catch(() =&gt; { })</code></a> handler may be attached to
<code>resource.loaded</code>, which would prevent the <code>'unhandledRejection'</code> event from
being emitted.</p>
<p>If an <code>'unhandledRejection'</code> event is emitted but not handled it will
be raised as an uncaught exception. This alongside other behaviors of
<code>'unhandledRejection'</code> events can changed via the <a href="cli.md#--unhandled-rejectionsmode"><code>--unhandled-rejections</code></a> flag.</p>
<h3>Event: <code>'warning'</code></h3>
<ul>
<li><code>warning</code> {Error} Key properties of the warning are:
<ul>
<li><code>name</code> {string} The name of the warning. <strong>Default:</strong> <code>'Warning'</code>.</li>
<li><code>message</code> {string} A system-provided description of the warning.</li>
<li><code>stack</code> {string} A stack trace to the location in the code where the warning
was issued.</li>
</ul>
</li>
</ul>
<p>The <code>'warning'</code> event is emitted whenever Node.js emits a process warning.</p>
<p>A process warning is similar to an error in that it describes exceptional
conditions that are being brought to the user's attention. However, warnings
are not part of the normal Node.js and JavaScript error handling flow.
Node.js can emit warnings whenever it detects bad coding practices that could
lead to sub-optimal application performance, bugs, or security vulnerabilities.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('warning', (warning) =&gt; {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});
</code></pre>
<pre><code class="language-cjs">process.on('warning', (warning) =&gt; {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});
</code></pre>
<p>By default, Node.js will print process warnings to <code>stderr</code>. The <code>--no-warnings</code>
command-line option can be used to suppress the default console output but the
<code>'warning'</code> event will still be emitted by the <code>process</code> object. Currently, it
is not possible to suppress specific warning types other than deprecation
warnings. To suppress deprecation warnings, check out the <a href="cli.md#--no-deprecation"><code>--no-deprecation</code></a>
flag.</p>
<p>The following example illustrates the warning that is printed to <code>stderr</code> when
too many listeners have been added to an event:</p>
<pre><code class="language-console">$ node
&gt; events.defaultMaxListeners = 1;
&gt; process.on('foo', () =&gt; {});
&gt; process.on('foo', () =&gt; {});
&gt; (node:38638) MaxListenersExceededWarning: Possible EventEmitter memory leak
detected. 2 foo listeners added. Use emitter.setMaxListeners() to increase limit
</code></pre>
<p>In contrast, the following example turns off the default warning output and
adds a custom handler to the <code>'warning'</code> event:</p>
<pre><code class="language-console">$ node --no-warnings
&gt; const p = process.on('warning', (warning) =&gt; console.warn('Do not do that!'));
&gt; events.defaultMaxListeners = 1;
&gt; process.on('foo', () =&gt; {});
&gt; process.on('foo', () =&gt; {});
&gt; Do not do that!
</code></pre>
<p>The <code>--trace-warnings</code> command-line option can be used to have the default
console output for warnings include the full stack trace of the warning.</p>
<p>Launching Node.js using the <code>--throw-deprecation</code> command-line flag will
cause custom deprecation warnings to be thrown as exceptions.</p>
<p>Using the <code>--trace-deprecation</code> command-line flag will cause the custom
deprecation to be printed to <code>stderr</code> along with the stack trace.</p>
<p>Using the <code>--no-deprecation</code> command-line flag will suppress all reporting
of the custom deprecation.</p>
<p>The <code>*-deprecation</code> command-line flags only affect warnings that use the name
<code>'DeprecationWarning'</code>.</p>
<h4>Emitting custom warnings</h4>
<p>See the <a href="#processemitwarningwarning-type-code-ctor"><code>process.emitWarning()</code></a> method for issuing
custom or application-specific warnings.</p>
<h4>Node.js warning names</h4>
<p>There are no strict guidelines for warning types (as identified by the <code>name</code>
property) emitted by Node.js. New types of warnings can be added at any time.
A few of the warning types that are most common include:</p>
<ul>
<li><code>'DeprecationWarning'</code> - Indicates use of a deprecated Node.js API or feature.
Such warnings must include a <code>'code'</code> property identifying the
<a href="deprecations.md">deprecation code</a>.</li>
<li><code>'ExperimentalWarning'</code> - Indicates use of an experimental Node.js API or
feature. Such features must be used with caution as they may change at any
time and are not subject to the same strict semantic-versioning and long-term
support policies as supported features.</li>
<li><code>'MaxListenersExceededWarning'</code> - Indicates that too many listeners for a
given event have been registered on either an <code>EventEmitter</code> or <code>EventTarget</code>.
This is often an indication of a memory leak.</li>
<li><code>'TimeoutOverflowWarning'</code> - Indicates that a numeric value that cannot fit
within a 32-bit signed integer has been provided to either the <code>setTimeout()</code>
or <code>setInterval()</code> functions.</li>
<li><code>'TimeoutNegativeWarning'</code> - Indicates that a negative number has provided to
either the <code>setTimeout()</code> or <code>setInterval()</code> functions.</li>
<li><code>'TimeoutNaNWarning'</code> - Indicates that a value which is not a number has
provided to either the <code>setTimeout()</code> or <code>setInterval()</code> functions.</li>
<li><code>'UnsupportedWarning'</code> - Indicates use of an unsupported option or feature
that will be ignored rather than treated as an error. One example is use of
the HTTP response status message when using the HTTP/2 compatibility API.</li>
</ul>
<h3>Event: <code>'worker'</code></h3>
<ul>
<li><code>worker</code> {Worker} The {Worker} that was created.</li>
</ul>
<p>The <code>'worker'</code> event is emitted after a new {Worker} thread has been created.</p>
<h3>Signal events</h3>
<p>Signal events will be emitted when the Node.js process receives a signal. Please
refer to signal(7) for a listing of standard POSIX signal names such as
<code>'SIGINT'</code>, <code>'SIGHUP'</code>, etc.</p>
<p>Signals are not available on <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<p>The signal handler will receive the signal's name (<code>'SIGINT'</code>,
<code>'SIGTERM'</code>, etc.) as the first argument.</p>
<p>The name of each event will be the uppercase common name for the signal (e.g.
<code>'SIGINT'</code> for <code>SIGINT</code> signals).</p>
<pre><code class="language-mjs">import process from 'node:process';

// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () =&gt; {
  console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
</code></pre>
<pre><code class="language-cjs">// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () =&gt; {
  console.log('Received SIGINT. Press Control-D to exit.');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
process.on('SIGTERM', handle);
</code></pre>
<ul>
<li><code>'SIGUSR1'</code> is reserved by Node.js to start the <a href="debugger.md">debugger</a>. It's possible to
install a listener but doing so might interfere with the debugger.</li>
<li><code>'SIGTERM'</code> and <code>'SIGINT'</code> have default handlers on non-Windows platforms that
reset the terminal mode before exiting with code <code>128 + signal number</code>. If one
of these signals has a listener installed, its default behavior will be
removed. Signal events are emitted asynchronously, so Node.js may exit before
the listener is called if the event loop is otherwise empty.</li>
<li><code>'SIGPIPE'</code> is ignored by default. It can have a listener installed.</li>
<li><code>'SIGHUP'</code> is generated on Windows when the console window is closed, and on
other platforms under various similar conditions. See signal(7). It can have a
listener installed, however Node.js will be unconditionally terminated by
Windows about 10 seconds later. On non-Windows platforms, the default
behavior of <code>SIGHUP</code> is to terminate Node.js, but once a listener has been
installed its default behavior will be removed.</li>
<li><code>'SIGTERM'</code> is not supported on Windows, it can be listened on.</li>
<li><code>'SIGINT'</code> from the terminal is supported on all platforms, and can usually be
generated with &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; (though this may be configurable).
It is not generated when <a href="tty.md#readstreamsetrawmodemode">terminal raw mode</a> is enabled
and &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; is used.</li>
<li><code>'SIGBREAK'</code> is delivered on Windows when &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Break&lt;/kbd&gt; is
pressed. On non-Windows platforms, it can be listened on, but there is no way
to send or generate it.</li>
<li><code>'SIGWINCH'</code> is delivered when the console has been resized. On Windows, this
will only happen on write to the console when the cursor is being moved, or
when a readable tty is used in raw mode.</li>
<li><code>'SIGKILL'</code> cannot have a listener installed, it will unconditionally
terminate Node.js on all platforms.</li>
<li><code>'SIGSTOP'</code> cannot have a listener installed.</li>
<li><code>'SIGBUS'</code>, <code>'SIGFPE'</code>, <code>'SIGSEGV'</code>, and <code>'SIGILL'</code>, when not raised
artificially using kill(2), inherently leave the process in a state from
which it is not safe to call JS listeners. Doing so might cause the process
to stop responding.</li>
<li><code>0</code> can be sent to test for the existence of a process, it has no effect if
the process exists, but will throw an error if the process does not exist.</li>
</ul>
<p>Windows does not support signals so has no equivalent to termination by signal,
but Node.js offers some emulation with <a href="#processkillpid-signal"><code>process.kill()</code></a>, and
<a href="child_process.md#subprocesskillsignal"><code>subprocess.kill()</code></a>:</p>
<ul>
<li>Sending <code>SIGINT</code>, <code>SIGTERM</code>, and <code>SIGKILL</code> will cause the unconditional
termination of the target process, and afterwards, subprocess will report that
the process was terminated by signal.</li>
<li>Sending signal <code>0</code> can be used as a platform independent way to test for the
existence of a process.</li>
</ul>
<h2><code>process.abort()</code></h2>
<p>The <code>process.abort()</code> method causes the Node.js process to exit immediately and
generate a core file.</p>
<p>This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.addUncaughtExceptionCaptureCallback(fn)</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>fn</code> {Function}</li>
</ul>
<p>The <code>process.addUncaughtExceptionCaptureCallback()</code> function adds a callback
that will be invoked when an uncaught exception occurs, receiving the exception
value as its first argument.</p>
<p>Unlike <a href="#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a>, this function allows
multiple callbacks to be registered and does not conflict with the
<a href="domain.md"><code>domain</code></a> module. Callbacks are called in reverse order of registration
(most recent first). If a callback returns <code>true</code>, subsequent callbacks
and the default uncaught exception handling are skipped.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.addUncaughtExceptionCaptureCallback((err) =&gt; {
  console.error('Caught exception:', err.message);
  return true; // Indicates exception was handled
});
</code></pre>
<pre><code class="language-cjs">process.addUncaughtExceptionCaptureCallback((err) =&gt; {
  console.error('Caught exception:', err.message);
  return true; // Indicates exception was handled
});
</code></pre>
<h2><code>process.allowedNodeEnvironmentFlags</code></h2>
<ul>
<li>Type: {Set}</li>
</ul>
<p>The <code>process.allowedNodeEnvironmentFlags</code> property is a special,
read-only <code>Set</code> of flags allowable within the <a href="cli.md#node_optionsoptions"><code>NODE_OPTIONS</code></a>
environment variable.</p>
<p><code>process.allowedNodeEnvironmentFlags</code> extends <code>Set</code>, but overrides
<code>Set.prototype.has</code> to recognize several different possible flag
representations. <code>process.allowedNodeEnvironmentFlags.has()</code> will
return <code>true</code> in the following cases:</p>
<ul>
<li>Flags may omit leading single (<code>-</code>) or double (<code>--</code>) dashes; e.g.,
<code>inspect-brk</code> for <code>--inspect-brk</code>, or <code>r</code> for <code>-r</code>.</li>
<li>Flags passed through to V8 (as listed in <code>--v8-options</code>) may replace
one or more <em>non-leading</em> dashes for an underscore, or vice-versa;
e.g., <code>--perf_basic_prof</code>, <code>--perf-basic-prof</code>, <code>--perf_basic-prof</code>,
etc.</li>
<li>Flags may contain one or more equals (<code>=</code>) characters; all
characters after and including the first equals will be ignored;
e.g., <code>--stack-trace-limit=100</code>.</li>
<li>Flags <em>must</em> be allowable within <a href="cli.md#node_optionsoptions"><code>NODE_OPTIONS</code></a>.</li>
</ul>
<p>When iterating over <code>process.allowedNodeEnvironmentFlags</code>, flags will
appear only <em>once</em>; each will begin with one or more dashes. Flags
passed through to V8 will contain underscores instead of non-leading
dashes:</p>
<pre><code class="language-mjs">import { allowedNodeEnvironmentFlags } from 'node:process';

allowedNodeEnvironmentFlags.forEach((flag) =&gt; {
  // -r
  // --inspect-brk
  // --abort_on_uncaught_exception
  // ...
});
</code></pre>
<pre><code class="language-cjs">const { allowedNodeEnvironmentFlags } = require('node:process');

allowedNodeEnvironmentFlags.forEach((flag) =&gt; {
  // -r
  // --inspect-brk
  // --abort_on_uncaught_exception
  // ...
});
</code></pre>
<p>The methods <code>add()</code>, <code>clear()</code>, and <code>delete()</code> of
<code>process.allowedNodeEnvironmentFlags</code> do nothing, and will fail
silently.</p>
<p>If Node.js was compiled <em>without</em> <a href="cli.md#node_optionsoptions"><code>NODE_OPTIONS</code></a> support (shown in
<a href="#processconfig"><code>process.config</code></a>), <code>process.allowedNodeEnvironmentFlags</code> will
contain what <em>would have</em> been allowable.</p>
<h2><code>process.arch</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The operating system CPU architecture for which the Node.js binary was compiled.
Possible values are: <code>'arm'</code>, <code>'arm64'</code>, <code>'ia32'</code>, <code>'loong64'</code>, <code>'mips'</code>,
<code>'mipsel'</code>, <code>'ppc64'</code>, <code>'riscv64'</code>, <code>'s390'</code>, <code>'s390x'</code>, and <code>'x64'</code>.</p>
<pre><code class="language-mjs">import { arch } from 'node:process';

console.log(`This processor architecture is ${arch}`);
</code></pre>
<pre><code class="language-cjs">const { arch } = require('node:process');

console.log(`This processor architecture is ${arch}`);
</code></pre>
<h2><code>process.argv</code></h2>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The <code>process.argv</code> property returns an array containing the command-line
arguments passed when the Node.js process was launched. The first element will
be <a href="#processexecpath"><code>process.execPath</code></a>. See <code>process.argv0</code> if access to the original value
of <code>argv[0]</code> is needed. If a <a href="https://nodejs.org/api/cli.html#program-entry-point">program entry point</a> was provided, the second element
will be the absolute path to it. The remaining elements are additional command-line
arguments.</p>
<p>For example, assuming the following script for <code>process-args.js</code>:</p>
<pre><code class="language-mjs">import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) =&gt; {
  console.log(`${index}: ${val}`);
});
</code></pre>
<pre><code class="language-cjs">const { argv } = require('node:process');

// print process.argv
argv.forEach((val, index) =&gt; {
  console.log(`${index}: ${val}`);
});
</code></pre>
<p>Launching the Node.js process as:</p>
<pre><code class="language-bash">node process-args.js one two=three four
</code></pre>
<p>Would generate the output:</p>
<pre><code class="language-text">0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
</code></pre>
<h2><code>process.argv0</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>process.argv0</code> property stores a read-only copy of the original value of
<code>argv[0]</code> passed when Node.js starts.</p>
<pre><code class="language-console">$ bash -c 'exec -a customArgv0 ./node'
&gt; process.argv[0]
'/Volumes/code/external/node/out/Release/node'
&gt; process.argv0
'customArgv0'
</code></pre>
<h2><code>process.availableMemory()</code></h2>
<ul>
<li>Returns: {number}</li>
</ul>
<p>Gets the amount of free memory that is still available to the process
(in bytes).</p>
<p>See <a href="https://docs.libuv.org/en/v1.x/misc.html#c.uv_get_available_memory"><code>uv_get_available_memory</code></a> for more
information.</p>
<h2><code>process.channel</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>If the Node.js process was spawned with an IPC channel (see the
<a href="child_process.md">Child Process</a> documentation), the <code>process.channel</code>
property is a reference to the IPC channel. If no IPC channel exists, this
property is <code>undefined</code>.</p>
<h3><code>process.channel.ref()</code></h3>
<p>This method makes the IPC channel keep the event loop of the process
running if <code>.unref()</code> has been called before.</p>
<p>Typically, this is managed through the number of <code>'disconnect'</code> and <code>'message'</code>
listeners on the <code>process</code> object. However, this method can be used to
explicitly request a specific behavior.</p>
<h3><code>process.channel.unref()</code></h3>
<p>This method makes the IPC channel not keep the event loop of the process
running, and lets it finish even while the channel is open.</p>
<p>Typically, this is managed through the number of <code>'disconnect'</code> and <code>'message'</code>
listeners on the <code>process</code> object. However, this method can be used to
explicitly request a specific behavior.</p>
<h2><code>process.chdir(directory)</code></h2>
<ul>
<li><code>directory</code> {string}</li>
</ul>
<p>The <code>process.chdir()</code> method changes the current working directory of the
Node.js process or throws an exception if doing so fails (for instance, if
the specified <code>directory</code> does not exist).</p>
<pre><code class="language-mjs">import { chdir, cwd } from 'node:process';

console.log(`Starting directory: ${cwd()}`);
try {
  chdir('/tmp');
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}
</code></pre>
<pre><code class="language-cjs">const { chdir, cwd } = require('node:process');

console.log(`Starting directory: ${cwd()}`);
try {
  chdir('/tmp');
  console.log(`New directory: ${cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}
</code></pre>
<p>This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.config</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The <code>process.config</code> property returns a frozen <code>Object</code> containing the
JavaScript representation of the configure options used to compile the current
Node.js executable. This is the same as the <code>config.gypi</code> file that was produced
when running the <code>./configure</code> script.</p>
<p>An example of the possible output looks like:</p>
<pre><code class="language-json">{
  &quot;target_defaults&quot;:
   { &quot;cflags&quot;: [],
     &quot;default_configuration&quot;: &quot;Release&quot;,
     &quot;defines&quot;: [],
     &quot;include_dirs&quot;: [],
     &quot;libraries&quot;: [] },
  &quot;variables&quot;:
   {
     &quot;host_arch&quot;: &quot;x64&quot;,
     &quot;napi_build_version&quot;: 5,
     &quot;node_install_npm&quot;: &quot;true&quot;,
     &quot;node_prefix&quot;: &quot;&quot;,
     &quot;node_shared_cares&quot;: &quot;false&quot;,
     &quot;node_shared_http_parser&quot;: &quot;false&quot;,
     &quot;node_shared_libuv&quot;: &quot;false&quot;,
     &quot;node_shared_zlib&quot;: &quot;false&quot;,
     &quot;node_use_openssl&quot;: &quot;true&quot;,
     &quot;node_shared_openssl&quot;: &quot;false&quot;,
     &quot;target_arch&quot;: &quot;x64&quot;,
     &quot;v8_use_snapshot&quot;: 1
   }
}
</code></pre>
<h2><code>process.connected</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>If the Node.js process is spawned with an IPC channel (see the <a href="child_process.md">Child Process</a>
and <a href="cluster.md">Cluster</a> documentation), the <code>process.connected</code> property will return
<code>true</code> so long as the IPC channel is connected and will return <code>false</code> after
<code>process.disconnect()</code> is called.</p>
<p>Once <code>process.connected</code> is <code>false</code>, it is no longer possible to send messages
over the IPC channel using <code>process.send()</code>.</p>
<h2><code>process.constrainedMemory()</code></h2>
<ul>
<li>Returns: {number}</li>
</ul>
<p>Gets the amount of memory available to the process (in bytes) based on
limits imposed by the OS. If there is no such constraint, or the constraint
is unknown, <code>0</code> is returned.</p>
<p>See <a href="https://docs.libuv.org/en/v1.x/misc.html#c.uv_get_constrained_memory"><code>uv_get_constrained_memory</code></a> for more
information.</p>
<h2><code>process.cpuUsage([previousValue])</code></h2>
<ul>
<li><code>previousValue</code> {Object} A previous return value from calling
<code>process.cpuUsage()</code></li>
<li>Returns: {Object}
<ul>
<li><code>user</code> {integer}</li>
<li><code>system</code> {integer}</li>
</ul>
</li>
</ul>
<p>The <code>process.cpuUsage()</code> method returns the user and system CPU time usage of
the current process, in an object with properties <code>user</code> and <code>system</code>, whose
values are microsecond values (millionth of a second). These values measure time
spent in user and system code respectively, and may end up being greater than
actual elapsed time if multiple CPU cores are performing work for this process.</p>
<p>The result of a previous call to <code>process.cpuUsage()</code> can be passed as the
argument to the function, to get a diff reading.</p>
<pre><code class="language-mjs">import { cpuUsage } from 'node:process';

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now &lt; 500);

console.log(cpuUsage(startUsage));
// { user: 514883, system: 11226 }
</code></pre>
<pre><code class="language-cjs">const { cpuUsage } = require('node:process');

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now &lt; 500);

console.log(cpuUsage(startUsage));
// { user: 514883, system: 11226 }
</code></pre>
<h2><code>process.cwd()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>The <code>process.cwd()</code> method returns the current working directory of the Node.js
process.</p>
<pre><code class="language-mjs">import { cwd } from 'node:process';

console.log(`Current directory: ${cwd()}`);
</code></pre>
<pre><code class="language-cjs">const { cwd } = require('node:process');

console.log(`Current directory: ${cwd()}`);
</code></pre>
<h2><code>process.debugPort</code></h2>
<ul>
<li>Type: {number}</li>
</ul>
<p>The port used by the Node.js debugger when enabled.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.debugPort = 5858;
</code></pre>
<pre><code class="language-cjs">process.debugPort = 5858;
</code></pre>
<h2><code>process.disconnect()</code></h2>
<p>If the Node.js process is spawned with an IPC channel (see the <a href="child_process.md">Child Process</a>
and <a href="cluster.md">Cluster</a> documentation), the <code>process.disconnect()</code> method will close the
IPC channel to the parent process, allowing the child process to exit gracefully
once there are no other connections keeping it alive.</p>
<p>The effect of calling <code>process.disconnect()</code> is the same as calling
<a href="child_process.md#subprocessdisconnect"><code>ChildProcess.disconnect()</code></a> from the parent process.</p>
<p>If the Node.js process was not spawned with an IPC channel,
<code>process.disconnect()</code> will be <code>undefined</code>.</p>
<h2><code>process.dlopen(module, filename[, flags])</code></h2>
<ul>
<li><code>module</code> {Object}</li>
<li><code>filename</code> {string}</li>
<li><code>flags</code> {os.constants.dlopen} <strong>Default:</strong> <code>os.constants.dlopen.RTLD_LAZY</code></li>
</ul>
<p>The <code>process.dlopen()</code> method allows dynamically loading shared objects. It is
primarily used by <code>require()</code> to load C++ Addons, and should not be used
directly, except in special cases. In other words, <a href="globals.md#require"><code>require()</code></a> should be
preferred over <code>process.dlopen()</code> unless there are specific reasons such as
custom dlopen flags or loading from ES modules.</p>
<p>The <code>flags</code> argument is an integer that allows to specify dlopen
behavior. See the <a href="os.md#dlopen-constants"><code>os.constants.dlopen</code></a> documentation for details.</p>
<p>An important requirement when calling <code>process.dlopen()</code> is that the <code>module</code>
instance must be passed. Functions exported by the C++ Addon are then
accessible via <code>module.exports</code>.</p>
<p>The example below shows how to load a C++ Addon, named <code>local.node</code>,
that exports a <code>foo</code> function. All the symbols are loaded before
the call returns, by passing the <code>RTLD_NOW</code> constant. In this example
the constant is assumed to be available.</p>
<pre><code class="language-mjs">import { dlopen } from 'node:process';
import { constants } from 'node:os';
import { fileURLToPath } from 'node:url';

const module = { exports: {} };
dlopen(module, fileURLToPath(new URL('local.node', import.meta.url)),
       constants.dlopen.RTLD_NOW);
module.exports.foo();
</code></pre>
<pre><code class="language-cjs">const { dlopen } = require('node:process');
const { constants } = require('node:os');
const { join } = require('node:path');

const module = { exports: {} };
dlopen(module, join(__dirname, 'local.node'), constants.dlopen.RTLD_NOW);
module.exports.foo();
</code></pre>
<h2><code>process.emitWarning(warning[, options])</code></h2>
<ul>
<li><code>warning</code> {string|Error} The warning to emit.</li>
<li><code>options</code> {Object}
<ul>
<li><code>type</code> {string} When <code>warning</code> is a <code>String</code>, <code>type</code> is the name to use
for the <em>type</em> of warning being emitted. <strong>Default:</strong> <code>'Warning'</code>.</li>
<li><code>code</code> {string} A unique identifier for the warning instance being emitted.</li>
<li><code>ctor</code> {Function} When <code>warning</code> is a <code>String</code>, <code>ctor</code> is an optional
function used to limit the generated stack trace. <strong>Default:</strong>
<code>process.emitWarning</code>.</li>
<li><code>detail</code> {string} Additional text to include with the error.</li>
</ul>
</li>
</ul>
<p>The <code>process.emitWarning()</code> method can be used to emit custom or application
specific process warnings. These can be listened for by adding a handler to the
<a href="#event-warning"><code>'warning'</code></a> event.</p>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

// Emit a warning with a code and additional detail.
emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
});
// Emits:
// (node:56338) [MY_WARNING] Warning: Something happened!
// This is some additional information
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

// Emit a warning with a code and additional detail.
emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
});
// Emits:
// (node:56338) [MY_WARNING] Warning: Something happened!
// This is some additional information
</code></pre>
<p>In this example, an <code>Error</code> object is generated internally by
<code>process.emitWarning()</code> and passed through to the
<a href="#event-warning"><code>'warning'</code></a> handler.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('warning', (warning) =&gt; {
  console.warn(warning.name);    // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  console.warn(warning.code);    // 'MY_WARNING'
  console.warn(warning.stack);   // Stack trace
  console.warn(warning.detail);  // 'This is some additional information'
});
</code></pre>
<pre><code class="language-cjs">process.on('warning', (warning) =&gt; {
  console.warn(warning.name);    // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  console.warn(warning.code);    // 'MY_WARNING'
  console.warn(warning.stack);   // Stack trace
  console.warn(warning.detail);  // 'This is some additional information'
});
</code></pre>
<p>If <code>warning</code> is passed as an <code>Error</code> object, the <code>options</code> argument is ignored.</p>
<h2><code>process.emitWarning(warning[, type[, code]][, ctor])</code></h2>
<ul>
<li><code>warning</code> {string|Error} The warning to emit.</li>
<li><code>type</code> {string} When <code>warning</code> is a <code>String</code>, <code>type</code> is the name to use
for the <em>type</em> of warning being emitted. <strong>Default:</strong> <code>'Warning'</code>.</li>
<li><code>code</code> {string} A unique identifier for the warning instance being emitted.</li>
<li><code>ctor</code> {Function} When <code>warning</code> is a <code>String</code>, <code>ctor</code> is an optional
function used to limit the generated stack trace. <strong>Default:</strong>
<code>process.emitWarning</code>.</li>
</ul>
<p>The <code>process.emitWarning()</code> method can be used to emit custom or application
specific process warnings. These can be listened for by adding a handler to the
<a href="#event-warning"><code>'warning'</code></a> event.</p>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

// Emit a warning using a string.
emitWarning('Something happened!');
// Emits: (node: 56338) Warning: Something happened!
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

// Emit a warning using a string.
emitWarning('Something happened!');
// Emits: (node: 56338) Warning: Something happened!
</code></pre>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

// Emit a warning using a string and a type.
emitWarning('Something Happened!', 'CustomWarning');
// Emits: (node:56338) CustomWarning: Something Happened!
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

// Emit a warning using a string and a type.
emitWarning('Something Happened!', 'CustomWarning');
// Emits: (node:56338) CustomWarning: Something Happened!
</code></pre>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

emitWarning('Something happened!', 'CustomWarning', 'WARN001');
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

process.emitWarning('Something happened!', 'CustomWarning', 'WARN001');
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
</code></pre>
<p>In each of the previous examples, an <code>Error</code> object is generated internally by
<code>process.emitWarning()</code> and passed through to the <a href="#event-warning"><code>'warning'</code></a>
handler.</p>
<pre><code class="language-mjs">import process from 'node:process';

process.on('warning', (warning) =&gt; {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.code);
  console.warn(warning.stack);
});
</code></pre>
<pre><code class="language-cjs">process.on('warning', (warning) =&gt; {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.code);
  console.warn(warning.stack);
});
</code></pre>
<p>If <code>warning</code> is passed as an <code>Error</code> object, it will be passed through to the
<code>'warning'</code> event handler unmodified (and the optional <code>type</code>,
<code>code</code> and <code>ctor</code> arguments will be ignored):</p>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

// Emit a warning using an Error object.
const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
myWarning.name = 'CustomWarning';
myWarning.code = 'WARN001';

emitWarning(myWarning);
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

// Emit a warning using an Error object.
const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
myWarning.name = 'CustomWarning';
myWarning.code = 'WARN001';

emitWarning(myWarning);
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!
</code></pre>
<p>A <code>TypeError</code> is thrown if <code>warning</code> is anything other than a string or <code>Error</code>
object.</p>
<p>While process warnings use <code>Error</code> objects, the process warning
mechanism is <strong>not</strong> a replacement for normal error handling mechanisms.</p>
<p>The following additional handling is implemented if the warning <code>type</code> is
<code>'DeprecationWarning'</code>:</p>
<ul>
<li>If the <code>--throw-deprecation</code> command-line flag is used, the deprecation
warning is thrown as an exception rather than being emitted as an event.</li>
<li>If the <code>--no-deprecation</code> command-line flag is used, the deprecation
warning is suppressed.</li>
<li>If the <code>--trace-deprecation</code> command-line flag is used, the deprecation
warning is printed to <code>stderr</code> along with the full stack trace.</li>
</ul>
<h3>Avoiding duplicate warnings</h3>
<p>As a best practice, warnings should be emitted only once per process. To do
so, place the <code>emitWarning()</code> behind a boolean.</p>
<pre><code class="language-mjs">import { emitWarning } from 'node:process';

function emitMyWarning() {
  if (!emitMyWarning.warned) {
    emitMyWarning.warned = true;
    emitWarning('Only warn once!');
  }
}
emitMyWarning();
// Emits: (node: 56339) Warning: Only warn once!
emitMyWarning();
// Emits nothing
</code></pre>
<pre><code class="language-cjs">const { emitWarning } = require('node:process');

function emitMyWarning() {
  if (!emitMyWarning.warned) {
    emitMyWarning.warned = true;
    emitWarning('Only warn once!');
  }
}
emitMyWarning();
// Emits: (node: 56339) Warning: Only warn once!
emitMyWarning();
// Emits nothing
</code></pre>
<h2><code>process.env</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The <code>process.env</code> property returns an object containing the user environment.
See environ(7).</p>
<p>An example of this object looks like:</p>
<pre><code class="language-json">{
  &quot;TERM&quot;: &quot;xterm-256color&quot;,
  &quot;SHELL&quot;: &quot;/usr/local/bin/bash&quot;,
  &quot;USER&quot;: &quot;maciej&quot;,
  &quot;PATH&quot;: &quot;~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin&quot;,
  &quot;PWD&quot;: &quot;/Users/maciej&quot;,
  &quot;EDITOR&quot;: &quot;vim&quot;,
  &quot;SHLVL&quot;: &quot;1&quot;,
  &quot;HOME&quot;: &quot;/Users/maciej&quot;,
  &quot;LOGNAME&quot;: &quot;maciej&quot;,
  &quot;_&quot;: &quot;/usr/local/bin/node&quot;
}
</code></pre>
<p>It is possible to modify this object, but such modifications will not be
reflected outside the Node.js process, or (unless explicitly requested)
to other <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.
In other words, the following example would not work:</p>
<pre><code class="language-bash">node -e 'process.env.foo = &quot;bar&quot;' &amp;&amp; echo $foo
</code></pre>
<p>While the following will:</p>
<pre><code class="language-mjs">import { env } from 'node:process';

env.foo = 'bar';
console.log(env.foo);
</code></pre>
<pre><code class="language-cjs">const { env } = require('node:process');

env.foo = 'bar';
console.log(env.foo);
</code></pre>
<p>Assigning a property on <code>process.env</code> will implicitly convert the value
to a string. <strong>This behavior is deprecated.</strong> Future versions of Node.js may
throw an error when the value is not a string, number, or boolean.</p>
<pre><code class="language-mjs">import { env } from 'node:process';

env.test = null;
console.log(env.test);
// =&gt; 'null'
env.test = undefined;
console.log(env.test);
// =&gt; 'undefined'
</code></pre>
<pre><code class="language-cjs">const { env } = require('node:process');

env.test = null;
console.log(env.test);
// =&gt; 'null'
env.test = undefined;
console.log(env.test);
// =&gt; 'undefined'
</code></pre>
<p>Use <code>delete</code> to delete a property from <code>process.env</code>.</p>
<pre><code class="language-mjs">import { env } from 'node:process';

env.TEST = 1;
delete env.TEST;
console.log(env.TEST);
// =&gt; undefined
</code></pre>
<pre><code class="language-cjs">const { env } = require('node:process');

env.TEST = 1;
delete env.TEST;
console.log(env.TEST);
// =&gt; undefined
</code></pre>
<p>On Windows operating systems, environment variables are case-insensitive.</p>
<pre><code class="language-mjs">import { env } from 'node:process';

env.TEST = 1;
console.log(env.test);
// =&gt; 1
</code></pre>
<pre><code class="language-cjs">const { env } = require('node:process');

env.TEST = 1;
console.log(env.test);
// =&gt; 1
</code></pre>
<p>Unless explicitly specified when creating a <a href="worker_threads.md#class-worker"><code>Worker</code></a> instance,
each <a href="worker_threads.md#class-worker"><code>Worker</code></a> thread has its own copy of <code>process.env</code>, based on its
parent thread's <code>process.env</code>, or whatever was specified as the <code>env</code> option
to the <a href="worker_threads.md#class-worker"><code>Worker</code></a> constructor. Changes to <code>process.env</code> will not be visible
across <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads, and only the main thread can make changes that
are visible to the operating system or to native add-ons. On Windows, a copy of
<code>process.env</code> on a <a href="worker_threads.md#class-worker"><code>Worker</code></a> instance operates in a case-sensitive manner
unlike the main thread.</p>
<h2><code>process.execArgv</code></h2>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The <code>process.execArgv</code> property returns the set of Node.js-specific command-line
options passed when the Node.js process was launched. These options do not
appear in the array returned by the <a href="#processargv"><code>process.argv</code></a> property, and do not
include the Node.js executable, the name of the script, or any options following
the script name. These options are useful in order to spawn child processes with
the same execution environment as the parent.</p>
<pre><code class="language-bash">node --icu-data-dir=./foo --require ./bar.js script.js --version
</code></pre>
<p>Results in <code>process.execArgv</code>:</p>
<pre><code class="language-json">[&quot;--icu-data-dir=./foo&quot;, &quot;--require&quot;, &quot;./bar.js&quot;]
</code></pre>
<p>And <code>process.argv</code>:</p>
<pre><code class="language-json">[&quot;/usr/local/bin/node&quot;, &quot;script.js&quot;, &quot;--version&quot;]
</code></pre>
<p>Refer to <a href="worker_threads.md#new-workerfilename-options"><code>Worker</code> constructor</a> for the detailed behavior of worker
threads with this property.</p>
<h2><code>process.execPath</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>process.execPath</code> property returns the absolute pathname of the executable
that started the Node.js process. Symbolic links, if any, are resolved.</p>
<pre><code class="language-json">&quot;/usr/local/bin/node&quot;
</code></pre>
<h2><code>process.execve(file[, args[, env]])</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>file</code> {string} The name or path of the executable file to run.</li>
<li><code>args</code> {string[]} List of string arguments. No argument can contain a null-byte (<code>\u0000</code>).</li>
<li><code>env</code> {Object} Environment key-value pairs.
No key or value can contain a null-byte (<code>\u0000</code>).
<strong>Default:</strong> <code>process.env</code>.</li>
</ul>
<p>Replaces the current process with a new process.</p>
<p>This is achieved by using the <code>execve</code> POSIX function and therefore no memory or other
resources from the current process are preserved, except for the standard input,
standard output and standard error file descriptor.</p>
<p>On success, all other resources are discarded by the system when the
processes are swapped, without triggering any exit or close events, without
running any JavaScript cleanup handler (for example <code>process.on('exit')</code>),
and without invoking native <code>AtExit</code> callbacks registered through the
embedder API. Callers that need to run cleanup logic should do so before
calling <code>process.execve()</code>.</p>
<p>This function does not return on success. If the underlying <code>execve(2)</code>
system call fails, an <code>Error</code> is thrown whose <code>code</code> property is set to the
corresponding <code>errno</code> string (for example, <code>'ENOENT'</code> when <code>file</code> does not
exist), with <code>syscall</code> set to <code>'execve'</code> and <code>path</code> set to <code>file</code>. When
<code>execve(2)</code> fails the current process continues to run with its state
unchanged, so a caller may handle the error and take another action.</p>
<p>This function is not available on Windows or IBM i.</p>
<h2><code>process.exit([code])</code></h2>
<ul>
<li><code>code</code> {integer|string|null|undefined} The exit code. For string type, only
integer strings (e.g.,'1') are allowed. <strong>Default:</strong> <code>0</code>.</li>
</ul>
<p>The <code>process.exit()</code> method instructs Node.js to terminate the process
synchronously with an exit status of <code>code</code>. If <code>code</code> is omitted, exit uses
either the 'success' code <code>0</code> or the value of <code>process.exitCode</code> if it has been
set. Node.js will not terminate until all the <a href="#event-exit"><code>'exit'</code></a> event listeners are
called.</p>
<p>To exit with a 'failure' code:</p>
<pre><code class="language-mjs">import { exit } from 'node:process';

exit(1);
</code></pre>
<pre><code class="language-cjs">const { exit } = require('node:process');

exit(1);
</code></pre>
<p>The shell that executed Node.js should see the exit code as <code>1</code>.</p>
<p>Calling <code>process.exit()</code> will force the process to exit as quickly as possible
even if there are still asynchronous operations pending that have not yet
completed fully, including I/O operations to <code>process.stdout</code> and
<code>process.stderr</code>.</p>
<p>In most situations, it is not actually necessary to call <code>process.exit()</code>
explicitly. The Node.js process will exit on its own <em>if there is no additional
work pending</em> in the event loop. The <code>process.exitCode</code> property can be set to
tell the process which exit code to use when the process exits gracefully.</p>
<p>For instance, the following example illustrates a <em>misuse</em> of the
<code>process.exit()</code> method that could lead to data printed to stdout being
truncated and lost:</p>
<pre><code class="language-mjs">import { exit } from 'node:process';

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
</code></pre>
<pre><code class="language-cjs">const { exit } = require('node:process');

// This is an example of what *not* to do:
if (someConditionNotMet()) {
  printUsageToStdout();
  exit(1);
}
</code></pre>
<p>The reason this is problematic is because writes to <code>process.stdout</code> in Node.js
are sometimes <em>asynchronous</em> and may occur over multiple ticks of the Node.js
event loop. Calling <code>process.exit()</code>, however, forces the process to exit
<em>before</em> those additional writes to <code>stdout</code> can be performed.</p>
<p>Rather than calling <code>process.exit()</code> directly, the code <em>should</em> set the
<code>process.exitCode</code> and allow the process to exit naturally by avoiding
scheduling any additional work for the event loop:</p>
<pre><code class="language-mjs">import process from 'node:process';

// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout();
  process.exitCode = 1;
}
</code></pre>
<pre><code class="language-cjs">// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout();
  process.exitCode = 1;
}
</code></pre>
<p>If it is necessary to terminate the Node.js process due to an error condition,
throwing an <em>uncaught</em> error and allowing the process to terminate accordingly
is safer than calling <code>process.exit()</code>.</p>
<p>In <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads, this function stops the current thread rather
than the current process.</p>
<h2><code>process.exitCode</code></h2>
<ul>
<li>Type: {integer|string|null|undefined} The exit code. For string type, only
integer strings (e.g.,'1') are allowed. <strong>Default:</strong> <code>undefined</code>.</li>
</ul>
<p>A number which will be the process exit code, when the process either
exits gracefully, or is exited via <a href="#processexitcode"><code>process.exit()</code></a> without specifying
a code.</p>
<p>The value of <code>process.exitCode</code> can be updated by either assigning a value to
<code>process.exitCode</code> or by passing an argument to <a href="#processexitcode"><code>process.exit()</code></a>:</p>
<pre><code class="language-console">$ node -e 'process.exitCode = 9'; echo $?
9
$ node -e 'process.exit(42)'; echo $?
42
$ node -e 'process.exitCode = 9; process.exit(42)'; echo $?
42
</code></pre>
<p>The value can also be set implicitly by Node.js when unrecoverable errors occur (e.g.
such as the encountering of an unsettled top-level await). However explicit
manipulations of the exit code always take precedence over implicit ones:</p>
<pre><code class="language-console">$ node --input-type=module -e 'await new Promise(() =&gt; {})'; echo $?
13
$ node --input-type=module -e 'process.exitCode = 9; await new Promise(() =&gt; {})'; echo $?
9
</code></pre>
<h2><code>process.features.cached_builtins</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build is caching builtin modules.</p>
<h2><code>process.features.debug</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build is a debug build.</p>
<h2><code>process.features.inspector</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes the inspector.</p>
<h2><code>process.features.ipv6</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. This property is always true, and any checks based on it are
redundant.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for IPv6.</p>
<p>Since all Node.js builds have IPv6 support, this value is always <code>true</code>.</p>
<h2><code>process.features.require_module</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build supports
<a href="modules.md#loading-ecmascript-modules-using-require">loading ECMAScript modules using <code>require()</code></a>.</p>
<h2><code>process.features.tls</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for TLS.</p>
<h2><code>process.features.tls_alpn</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. Use <code>process.features.tls</code> instead.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for ALPN in TLS.</p>
<p>In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional ALPN support.
This value is therefore identical to that of <code>process.features.tls</code>.</p>
<h2><code>process.features.tls_ocsp</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. Use <code>process.features.tls</code> instead.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for OCSP in TLS.</p>
<p>In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional OCSP support.
This value is therefore identical to that of <code>process.features.tls</code>.</p>
<h2><code>process.features.tls_sni</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. Use <code>process.features.tls</code> instead.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for SNI in TLS.</p>
<p>In Node.js 11.0.0 and later versions, the OpenSSL dependencies feature unconditional SNI support.
This value is therefore identical to that of <code>process.features.tls</code>.</p>
<h2><code>process.features.typescript</code></h2>
<blockquote>
<p>Stability: 1.2 - Release candidate</p>
</blockquote>
<ul>
<li>Type: {boolean|string}</li>
</ul>
<p>A value that is <code>&quot;strip&quot;</code> by default, and <code>false</code> if
Node.js is run with <code>--no-strip-types</code>.</p>
<h2><code>process.features.uv</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. This property is always true, and any checks based on it are
redundant.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>A boolean value that is <code>true</code> if the current Node.js build includes support for libuv.</p>
<p>Since it's not possible to build Node.js without libuv, this value is always <code>true</code>.</p>
<h2><code>process.finalization.register(ref, callback)</code></h2>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<ul>
<li><code>ref</code> {Object | Function} The reference to the resource that is being tracked.</li>
<li><code>callback</code> {Function} The callback function to be called when the resource
is finalized.
<ul>
<li><code>ref</code> {Object | Function} The reference to the resource that is being tracked.</li>
<li><code>event</code> {string} The event that triggered the finalization. Defaults to 'exit'.</li>
</ul>
</li>
</ul>
<p>This function registers a callback to be called when the process emits the <code>exit</code>
event if the <code>ref</code> object was not garbage collected. If the object <code>ref</code> was garbage collected
before the <code>exit</code> event is emitted, the callback will be removed from the finalization registry,
and it will not be called on process exit.</p>
<p>Inside the callback you can release the resources allocated by the <code>ref</code> object.
Be aware that all limitations applied to the <code>beforeExit</code> event are also applied to the <code>callback</code> function,
this means that there is a possibility that the callback will not be called under special circumstances.</p>
<p>The idea of ​​this function is to help you free up resources when the starts process exiting,
but also let the object be garbage collected if it is no longer being used.</p>
<p>Eg: you can register an object that contains a buffer, you want to make sure that buffer is released
when the process exit, but if the object is garbage collected before the process exit, we no longer
need to release the buffer, so in this case we just remove the callback from the finalization registry.</p>
<pre><code class="language-cjs">const { finalization } = require('node:process');

// Please make sure that the function passed to finalization.register()
// does not create a closure around unnecessary objects.
function onFinalize(obj, event) {
  // You can do whatever you want with the object
  obj.dispose();
}

function setup() {
  // This object can be safely garbage collected,
  // and the resulting shutdown function will not be called.
  // There are no leaks.
  const myDisposableObject = {
    dispose() {
      // Free your resources synchronously
    },
  };

  finalization.register(myDisposableObject, onFinalize);
}

setup();
</code></pre>
<pre><code class="language-mjs">import { finalization } from 'node:process';

// Please make sure that the function passed to finalization.register()
// does not create a closure around unnecessary objects.
function onFinalize(obj, event) {
  // You can do whatever you want with the object
  obj.dispose();
}

function setup() {
  // This object can be safely garbage collected,
  // and the resulting shutdown function will not be called.
  // There are no leaks.
  const myDisposableObject = {
    dispose() {
      // Free your resources synchronously
    },
  };

  finalization.register(myDisposableObject, onFinalize);
}

setup();
</code></pre>
<p>The code above relies on the following assumptions:</p>
<ul>
<li>arrow functions are avoided</li>
<li>regular functions are recommended to be within the global context (root)</li>
</ul>
<p>Regular functions <em>could</em> reference the context where the <code>obj</code> lives, making the <code>obj</code> not garbage collectible.</p>
<p>Arrow functions will hold the previous context. Consider, for example:</p>
<pre><code class="language-js">class Test {
  constructor() {
    finalization.register(this, (ref) =&gt; ref.dispose());

    // Even something like this is highly discouraged
    // finalization.register(this, () =&gt; this.dispose());
  }
  dispose() {}
}
</code></pre>
<p>It is very unlikely (not impossible) that this object will be garbage collected,
but if it is not, <code>dispose</code> will be called when <code>process.exit</code> is called.</p>
<p>Be careful and avoid relying on this feature for the disposal of critical resources,
as it is not guaranteed that the callback will be called under all circumstances.</p>
<h2><code>process.finalization.registerBeforeExit(ref, callback)</code></h2>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<ul>
<li><code>ref</code> {Object | Function} The reference
to the resource that is being tracked.</li>
<li><code>callback</code> {Function} The callback function to be called when the resource
is finalized.
<ul>
<li><code>ref</code> {Object | Function} The reference to the resource that is being tracked.</li>
<li><code>event</code> {string} The event that triggered the finalization. Defaults to 'beforeExit'.</li>
</ul>
</li>
</ul>
<p>This function behaves exactly like the <code>register</code>, except that the callback will be called
when the process emits the <code>beforeExit</code> event if <code>ref</code> object was not garbage collected.</p>
<p>Be aware that all limitations applied to the <code>beforeExit</code> event are also applied to the <code>callback</code> function,
this means that there is a possibility that the callback will not be called under special circumstances.</p>
<h2><code>process.finalization.unregister(ref)</code></h2>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<ul>
<li><code>ref</code> {Object | Function} The reference
to the resource that was registered previously.</li>
</ul>
<p>This function remove the register of the object from the finalization
registry, so the callback will not be called anymore.</p>
<pre><code class="language-cjs">const { finalization } = require('node:process');

// Please make sure that the function passed to finalization.register()
// does not create a closure around unnecessary objects.
function onFinalize(obj, event) {
  // You can do whatever you want with the object
  obj.dispose();
}

function setup() {
  // This object can be safely garbage collected,
  // and the resulting shutdown function will not be called.
  // There are no leaks.
  const myDisposableObject = {
    dispose() {
      // Free your resources synchronously
    },
  };

  finalization.register(myDisposableObject, onFinalize);

  // Do something

  myDisposableObject.dispose();
  finalization.unregister(myDisposableObject);
}

setup();
</code></pre>
<pre><code class="language-mjs">import { finalization } from 'node:process';

// Please make sure that the function passed to finalization.register()
// does not create a closure around unnecessary objects.
function onFinalize(obj, event) {
  // You can do whatever you want with the object
  obj.dispose();
}

function setup() {
  // This object can be safely garbage collected,
  // and the resulting shutdown function will not be called.
  // There are no leaks.
  const myDisposableObject = {
    dispose() {
      // Free your resources synchronously
    },
  };

  // Please make sure that the function passed to finalization.register()
  // does not create a closure around unnecessary objects.
  function onFinalize(obj, event) {
    // You can do whatever you want with the object
    obj.dispose();
  }

  finalization.register(myDisposableObject, onFinalize);

  // Do something

  myDisposableObject.dispose();
  finalization.unregister(myDisposableObject);
}

setup();
</code></pre>
<h2><code>process.getActiveResourcesInfo()</code></h2>
<ul>
<li>Returns: {string[]}</li>
</ul>
<p>The <code>process.getActiveResourcesInfo()</code> method returns an array of strings
containing the types of the active resources that are currently keeping the
event loop alive.</p>
<pre><code class="language-mjs">import { getActiveResourcesInfo } from 'node:process';
import { setTimeout } from 'node:timers';

console.log('Before:', getActiveResourcesInfo());
setTimeout(() =&gt; {}, 1000);
console.log('After:', getActiveResourcesInfo());
// Prints:
//   Before: [ 'CloseReq', 'TTYWrap', 'TTYWrap', 'TTYWrap' ]
//   After: [ 'CloseReq', 'TTYWrap', 'TTYWrap', 'TTYWrap', 'Timeout' ]
</code></pre>
<pre><code class="language-cjs">const { getActiveResourcesInfo } = require('node:process');
const { setTimeout } = require('node:timers');

console.log('Before:', getActiveResourcesInfo());
setTimeout(() =&gt; {}, 1000);
console.log('After:', getActiveResourcesInfo());
// Prints:
//   Before: [ 'TTYWrap', 'TTYWrap', 'TTYWrap' ]
//   After: [ 'TTYWrap', 'TTYWrap', 'TTYWrap', 'Timeout' ]
</code></pre>
<h2><code>process.getBuiltinModule(id)</code></h2>
<ul>
<li><code>id</code> {string} ID of the built-in module being requested.</li>
<li>Returns: {Object|undefined}</li>
</ul>
<p><code>process.getBuiltinModule(id)</code> provides a way to load built-in modules
in a globally available function. ES Modules that need to support
other environments can use it to conditionally load a Node.js built-in
when it is run in Node.js, without having to deal with the resolution
error that can be thrown by <code>import</code> in a non-Node.js environment or
having to use dynamic <code>import()</code> which either turns the module into
an asynchronous module, or turns a synchronous API into an asynchronous one.</p>
<pre><code class="language-mjs">if (globalThis.process?.getBuiltinModule) {
  // Run in Node.js, use the Node.js fs module.
  const fs = globalThis.process.getBuiltinModule('fs');
  // If `require()` is needed to load user-modules, use createRequire()
  const module = globalThis.process.getBuiltinModule('module');
  const require = module.createRequire(import.meta.url);
  const foo = require('foo');
}
</code></pre>
<p>If <code>id</code> specifies a built-in module available in the current Node.js process,
<code>process.getBuiltinModule(id)</code> method returns the corresponding built-in
module. If <code>id</code> does not correspond to any built-in module, <code>undefined</code>
is returned.</p>
<p><code>process.getBuiltinModule(id)</code> accepts built-in module IDs that are recognized
by <a href="module.md#moduleisbuiltinmodulename"><code>module.isBuiltin(id)</code></a>. Some built-in modules must be loaded with the
<code>node:</code> prefix, see <a href="modules.md#built-in-modules-with-mandatory-node-prefix">built-in modules with mandatory <code>node:</code> prefix</a>.
The references returned by <code>process.getBuiltinModule(id)</code> always point to
the built-in module corresponding to <code>id</code> even if users modify
<a href="modules.md#requirecache"><code>require.cache</code></a> so that <code>require(id)</code> returns something else.</p>
<h2><code>process.getegid()</code></h2>
<p>The <code>process.getegid()</code> method returns the numerical effective group identity
of the Node.js process. (See getegid(2).)</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`);
}
</code></pre>
<pre><code class="language-cjs">if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`);
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).</p>
<h2><code>process.geteuid()</code></h2>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>The <code>process.geteuid()</code> method returns the numerical effective user identity of
the process. (See geteuid(2).)</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}
</code></pre>
<pre><code class="language-cjs">if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).</p>
<h2><code>process.getgid()</code></h2>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>The <code>process.getgid()</code> method returns the numerical group identity of the
process. (See getgid(2).)</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}
</code></pre>
<pre><code class="language-cjs">if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).</p>
<h2><code>process.getgroups()</code></h2>
<ul>
<li>Returns: {integer[]}</li>
</ul>
<p>The <code>process.getgroups()</code> method returns an array with the supplementary group
IDs. POSIX leaves it unspecified if the effective group ID is included but
Node.js ensures it always is.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getgroups) {
  console.log(process.getgroups()); // [ 16, 21, 297 ]
}
</code></pre>
<pre><code class="language-cjs">if (process.getgroups) {
  console.log(process.getgroups()); // [ 16, 21, 297 ]
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).</p>
<h2><code>process.getuid()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>The <code>process.getuid()</code> method returns the numeric user identity of the process.
(See getuid(2).)</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getuid) {
  console.log(`Current uid: ${process.getuid()}`);
}
</code></pre>
<pre><code class="language-cjs">if (process.getuid) {
  console.log(`Current uid: ${process.getuid()}`);
}
</code></pre>
<p>This function not available on Windows.</p>
<h2><code>process.hasUncaughtExceptionCaptureCallback()</code></h2>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>Indicates whether a callback has been set using
<a href="#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a>.</p>
<h2><code>process.hrtime([time])</code></h2>
<blockquote>
<p>Stability: 3 - Legacy. Use <a href="#processhrtimebigint"><code>process.hrtime.bigint()</code></a> instead.</p>
</blockquote>
<ul>
<li><code>time</code> {integer[]} The result of a previous call to <code>process.hrtime()</code></li>
<li>Returns: {integer[]}</li>
</ul>
<p>This is the legacy version of <a href="#processhrtimebigint"><code>process.hrtime.bigint()</code></a>
before <code>bigint</code> was introduced in JavaScript.</p>
<p>The <code>process.hrtime()</code> method returns the current high-resolution real time
in a <code>[seconds, nanoseconds]</code> tuple <code>Array</code>, where <code>nanoseconds</code> is the
remaining part of the real time that can't be represented in second precision.</p>
<p><code>time</code> is an optional parameter that must be the result of a previous
<code>process.hrtime()</code> call to diff with the current time. If the parameter
passed in is not a tuple <code>Array</code>, a <code>TypeError</code> will be thrown. Passing in a
user-defined array instead of the result of a previous call to
<code>process.hrtime()</code> will lead to undefined behavior.</p>
<p>These times are relative to an arbitrary time in the
past, and not related to the time of day and therefore not subject to clock
drift. The primary use is for measuring performance between intervals:</p>
<pre><code class="language-mjs">import { hrtime } from 'node:process';

const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() =&gt; {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
</code></pre>
<pre><code class="language-cjs">const { hrtime } = require('node:process');

const NS_PER_SEC = 1e9;
const time = hrtime();
// [ 1800216, 25 ]

setTimeout(() =&gt; {
  const diff = hrtime(time);
  // [ 1, 552 ]

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
  // Benchmark took 1000000552 nanoseconds
}, 1000);
</code></pre>
<h2><code>process.hrtime.bigint()</code></h2>
<ul>
<li>Returns: {bigint}</li>
</ul>
<p>The <code>bigint</code> version of the <a href="#processhrtimetime"><code>process.hrtime()</code></a> method returning the
current high-resolution real time in nanoseconds as a <code>bigint</code>.</p>
<p>Unlike <a href="#processhrtimetime"><code>process.hrtime()</code></a>, it does not support an additional <code>time</code>
argument since the difference can just be computed directly
by subtraction of the two <code>bigint</code>s.</p>
<pre><code class="language-mjs">import { hrtime } from 'node:process';

const start = hrtime.bigint();
// 191051479007711n

setTimeout(() =&gt; {
  const end = hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);
</code></pre>
<pre><code class="language-cjs">const { hrtime } = require('node:process');

const start = hrtime.bigint();
// 191051479007711n

setTimeout(() =&gt; {
  const end = hrtime.bigint();
  // 191052633396993n

  console.log(`Benchmark took ${end - start} nanoseconds`);
  // Benchmark took 1154389282 nanoseconds
}, 1000);
</code></pre>
<h2><code>process.initgroups(user, extraGroup)</code></h2>
<ul>
<li><code>user</code> {string|number} The user name or numeric identifier.</li>
<li><code>extraGroup</code> {string|number} A group name or numeric identifier.</li>
</ul>
<p>The <code>process.initgroups()</code> method reads the <code>/etc/group</code> file and initializes
the group access list, using all groups of which the user is a member. This is
a privileged operation that requires that the Node.js process either have <code>root</code>
access or the <code>CAP_SETGID</code> capability.</p>
<p>Use care when dropping privileges:</p>
<pre><code class="language-mjs">import { getgroups, initgroups, setgid } from 'node:process';

console.log(getgroups());         // [ 0 ]
initgroups('nodeuser', 1000);     // switch user
console.log(getgroups());         // [ 27, 30, 46, 1000, 0 ]
setgid(1000);                     // drop root gid
console.log(getgroups());         // [ 27, 30, 46, 1000 ]
</code></pre>
<pre><code class="language-cjs">const { getgroups, initgroups, setgid } = require('node:process');

console.log(getgroups());         // [ 0 ]
initgroups('nodeuser', 1000);     // switch user
console.log(getgroups());         // [ 27, 30, 46, 1000, 0 ]
setgid(1000);                     // drop root gid
console.log(getgroups());         // [ 27, 30, 46, 1000 ]
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.kill(pid[, signal])</code></h2>
<ul>
<li><code>pid</code> {number} A process ID</li>
<li><code>signal</code> {string|number} The signal to send, either as a string or number.
<strong>Default:</strong> <code>'SIGTERM'</code>.</li>
</ul>
<p>The <code>process.kill()</code> method sends the <code>signal</code> to the process identified by
<code>pid</code>.</p>
<p>Signal names are strings such as <code>'SIGINT'</code> or <code>'SIGHUP'</code>. See <a href="#signal-events">Signal Events</a>
and kill(2) for more information.</p>
<p>This method will throw an error if the target <code>pid</code> does not exist. As a special
case, a signal of <code>0</code> can be used to test for the existence of a process.
Windows platforms will throw an error if the <code>pid</code> is used to kill a process
group.</p>
<p>Even though the name of this function is <code>process.kill()</code>, it is really just a
signal sender, like the <code>kill</code> system call. The signal sent may do something
other than kill the target process.</p>
<pre><code class="language-mjs">import process, { kill } from 'node:process';

process.on('SIGHUP', () =&gt; {
  console.log('Got SIGHUP signal.');
});

setTimeout(() =&gt; {
  console.log('Exiting.');
  process.exit(0);
}, 100);

kill(process.pid, 'SIGHUP');
</code></pre>
<pre><code class="language-cjs">process.on('SIGHUP', () =&gt; {
  console.log('Got SIGHUP signal.');
});

setTimeout(() =&gt; {
  console.log('Exiting.');
  process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');
</code></pre>
<p>When <code>SIGUSR1</code> is received by a Node.js process, Node.js will start the
debugger. See <a href="#signal-events">Signal Events</a>.</p>
<h2><code>process.loadEnvFile(path)</code></h2>
<ul>
<li><code>path</code> {string | URL | Buffer | undefined}. <strong>Default:</strong> <code>'./.env'</code></li>
</ul>
<p>Loads the <code>.env</code> file into <code>process.env</code>. Usage of <code>NODE_OPTIONS</code>
in the <code>.env</code> file will not have any effect on Node.js.</p>
<pre><code class="language-cjs">const { loadEnvFile } = require('node:process');
loadEnvFile();
</code></pre>
<pre><code class="language-mjs">import { loadEnvFile } from 'node:process';
loadEnvFile();
</code></pre>
<h2><code>process.mainModule</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="modules.md#accessing-the-main-module"><code>require.main</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The <code>process.mainModule</code> property provides an alternative way of retrieving
<a href="modules.md#accessing-the-main-module"><code>require.main</code></a>. The difference is that if the main module changes at
runtime, <a href="modules.md#accessing-the-main-module"><code>require.main</code></a> may still refer to the original main module in
modules that were required before the change occurred. Generally, it's
safe to assume that the two refer to the same module.</p>
<p>As with <a href="modules.md#accessing-the-main-module"><code>require.main</code></a>, <code>process.mainModule</code> will be <code>undefined</code> if there
is no entry script.</p>
<h2><code>process.memoryUsage()</code></h2>
<ul>
<li>Returns: {Object}
<ul>
<li><code>rss</code> {integer}</li>
<li><code>heapTotal</code> {integer}</li>
<li><code>heapUsed</code> {integer}</li>
<li><code>external</code> {integer}</li>
<li><code>arrayBuffers</code> {integer}</li>
</ul>
</li>
</ul>
<p>Returns an object describing the memory usage of the Node.js process measured in
bytes.</p>
<pre><code class="language-mjs">import { memoryUsage } from 'node:process';

console.log(memoryUsage());
// Prints:
// {
//  rss: 4935680,
//  heapTotal: 1826816,
//  heapUsed: 650472,
//  external: 49879,
//  arrayBuffers: 9386
// }
</code></pre>
<pre><code class="language-cjs">const { memoryUsage } = require('node:process');

console.log(memoryUsage());
// Prints:
// {
//  rss: 4935680,
//  heapTotal: 1826816,
//  heapUsed: 650472,
//  external: 49879,
//  arrayBuffers: 9386
// }
</code></pre>
<ul>
<li><code>heapTotal</code> and <code>heapUsed</code> refer to V8's memory usage.</li>
<li><code>external</code> refers to the memory usage of C++ objects bound to JavaScript
objects managed by V8.</li>
<li><code>rss</code>, Resident Set Size, is the amount of space occupied in the main
memory device (that is a subset of the total allocated memory) for the
process, including all C++ and JavaScript objects and code.</li>
<li><code>arrayBuffers</code> refers to memory allocated for <code>ArrayBuffer</code>s and
<code>SharedArrayBuffer</code>s, including all Node.js <a href="buffer.md"><code>Buffer</code></a>s.
This is also included in the <code>external</code> value. When Node.js is used as an
embedded library, this value may be <code>0</code> because allocations for <code>ArrayBuffer</code>s
may not be tracked in that case.</li>
</ul>
<p>When using <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads, <code>rss</code> will be a value that is valid for the
entire process, while the other fields will only refer to the current thread.</p>
<p>The <code>process.memoryUsage()</code> method iterates over each page to gather
information about memory usage which might be slow depending on the
program memory allocations.</p>
<h3>A note on process memoryUsage</h3>
<p>On Linux or other systems where glibc is commonly used, an application may have sustained
<code>rss</code> growth despite stable <code>heapTotal</code> due to fragmentation caused by the glibc <code>malloc</code>
implementation. See <a href="https://github.com/nodejs/node/issues/21973">nodejs/node#21973</a> on how to switch to an alternative <code>malloc</code>
implementation to address the performance issue.</p>
<h2><code>process.memoryUsage.rss()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>The <code>process.memoryUsage.rss()</code> method returns an integer representing the
Resident Set Size (RSS) in bytes.</p>
<p>The Resident Set Size, is the amount of space occupied in the main
memory device (that is a subset of the total allocated memory) for the
process, including all C++ and JavaScript objects and code.</p>
<p>This is the same value as the <code>rss</code> property provided by <code>process.memoryUsage()</code>
but <code>process.memoryUsage.rss()</code> is faster.</p>
<pre><code class="language-mjs">import { memoryUsage } from 'node:process';

console.log(memoryUsage.rss());
// 35655680
</code></pre>
<pre><code class="language-cjs">const { memoryUsage } = require('node:process');

console.log(memoryUsage.rss());
// 35655680
</code></pre>
<h2><code>process.nextTick(callback[, ...args])</code></h2>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="globals.md#queuemicrotaskcallback"><code>queueMicrotask()</code></a> instead.</p>
</blockquote>
<ul>
<li><code>callback</code> {Function}</li>
<li><code>...args</code> {any} Additional arguments to pass when invoking the <code>callback</code></li>
</ul>
<p><code>process.nextTick()</code> adds <code>callback</code> to the &quot;next tick queue&quot;. This queue is
fully drained after the current operation on the JavaScript stack runs to
completion and before the event loop is allowed to continue. It's possible to
create an infinite loop if one were to recursively call <code>process.nextTick()</code>.
See the <a href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#understanding-processnexttick">Event Loop</a> guide for more background.</p>
<pre><code class="language-mjs">import { nextTick } from 'node:process';

console.log('start');
nextTick(() =&gt; {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback
</code></pre>
<pre><code class="language-cjs">const { nextTick } = require('node:process');

console.log('start');
nextTick(() =&gt; {
  console.log('nextTick callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// nextTick callback
</code></pre>
<p>This is important when developing APIs in order to give users the opportunity
to assign event handlers <em>after</em> an object has been constructed but before any
I/O has occurred:</p>
<pre><code class="language-mjs">import { nextTick } from 'node:process';

function MyThing(options) {
  this.setupOptions(options);

  nextTick(() =&gt; {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();

// thing.startDoingStuff() gets called now, not before.
</code></pre>
<pre><code class="language-cjs">const { nextTick } = require('node:process');

function MyThing(options) {
  this.setupOptions(options);

  nextTick(() =&gt; {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();

// thing.startDoingStuff() gets called now, not before.
</code></pre>
<p>It is very important for APIs to be either 100% synchronous or 100%
asynchronous. Consider this example:</p>
<pre><code class="language-js">// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!
function maybeSync(arg, cb) {
  if (arg) {
    cb();
    return;
  }

  fs.stat('file', cb);
}
</code></pre>
<p>This API is hazardous because in the following case:</p>
<pre><code class="language-js">const maybeTrue = Math.random() &gt; 0.5;

maybeSync(maybeTrue, () =&gt; {
  foo();
});

bar();
</code></pre>
<p>It is not clear whether <code>foo()</code> or <code>bar()</code> will be called first.</p>
<p>The following approach is much better:</p>
<pre><code class="language-mjs">import { nextTick } from 'node:process';

function definitelyAsync(arg, cb) {
  if (arg) {
    nextTick(cb);
    return;
  }

  fs.stat('file', cb);
}
</code></pre>
<pre><code class="language-cjs">const { nextTick } = require('node:process');

function definitelyAsync(arg, cb) {
  if (arg) {
    nextTick(cb);
    return;
  }

  fs.stat('file', cb);
}
</code></pre>
<h3>When to use <code>queueMicrotask()</code> vs. <code>process.nextTick()</code></h3>
<p>The <a href="globals.md#queuemicrotaskcallback"><code>queueMicrotask()</code></a> API is an alternative to <code>process.nextTick()</code> that instead of using the
&quot;next tick queue&quot; defers execution of a function using the same microtask queue used to execute the
then, catch, and finally handlers of resolved promises.</p>
<p>Within Node.js, every time the &quot;next tick queue&quot; is drained, the microtask queue
is drained immediately after.</p>
<p>So in CJS modules <code>process.nextTick()</code> callbacks are always run before <code>queueMicrotask()</code> ones.
However since ESM modules are processed already as part of the microtask queue, there
<code>queueMicrotask()</code> callbacks are always executed before <code>process.nextTick()</code> ones since Node.js
is already in the process of draining the microtask queue.</p>
<pre><code class="language-mjs">import { nextTick } from 'node:process';

Promise.resolve().then(() =&gt; console.log('resolve'));
queueMicrotask(() =&gt; console.log('microtask'));
nextTick(() =&gt; console.log('nextTick'));
// Output:
// resolve
// microtask
// nextTick
</code></pre>
<pre><code class="language-cjs">const { nextTick } = require('node:process');

Promise.resolve().then(() =&gt; console.log('resolve'));
queueMicrotask(() =&gt; console.log('microtask'));
nextTick(() =&gt; console.log('nextTick'));
// Output:
// nextTick
// resolve
// microtask
</code></pre>
<p>For <em>most</em> userland use cases, the <code>queueMicrotask()</code> API provides a portable
and reliable mechanism for deferring execution that works across multiple
JavaScript platform environments and should be favored over <code>process.nextTick()</code>.
In simple scenarios, <code>queueMicrotask()</code> can be a drop-in replacement for
<code>process.nextTick()</code>.</p>
<pre><code class="language-js">console.log('start');
queueMicrotask(() =&gt; {
  console.log('microtask callback');
});
console.log('scheduled');
// Output:
// start
// scheduled
// microtask callback
</code></pre>
<p>One note-worthy difference between the two APIs is that <code>process.nextTick()</code>
allows specifying additional values that will be passed as arguments to the
deferred function when it is called. Achieving the same result with
<code>queueMicrotask()</code> requires using either a closure or a bound function:</p>
<pre><code class="language-js">function deferred(a, b) {
  console.log('microtask', a + b);
}

console.log('start');
queueMicrotask(deferred.bind(undefined, 1, 2));
console.log('scheduled');
// Output:
// start
// scheduled
// microtask 3
</code></pre>
<p>There are minor differences in the way errors raised from within the next tick
queue and microtask queue are handled. Errors thrown within a queued microtask
callback should be handled within the queued callback when possible. If they are
not, the <code>process.on('uncaughtException')</code> event handler can be used to capture
and handle the errors.</p>
<p>When in doubt, unless the specific capabilities of <code>process.nextTick()</code> are
needed, use <code>queueMicrotask()</code>.</p>
<h2><code>process.noDeprecation</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>process.noDeprecation</code> property indicates whether the <code>--no-deprecation</code>
flag is set on the current Node.js process. See the documentation for
the <a href="#event-warning"><code>'warning'</code> event</a> and the
<a href="#processemitwarningwarning-type-code-ctor"><code>emitWarning()</code> method</a> for more information about this
flag's behavior.</p>
<h2><code>process.permission</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>This API is available through the <a href="cli.md#--permission"><code>--permission</code></a> or
<a href="cli.md#--permission-audit"><code>--permission-audit</code></a> flags.</p>
<p><code>process.permission</code> is an object whose methods are used to manage permissions
for the current process. Additional documentation is available in the
<a href="permissions.md#permission-model">Permission Model</a>.</p>
<h3><code>process.permission.has(scope[, reference])</code></h3>
<ul>
<li><code>scope</code> {string}</li>
<li><code>reference</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Verifies that the process is able to access the given scope and reference.
If no reference is provided, a global scope is assumed, for instance,
<code>process.permission.has('fs.read')</code> will check if the process has ALL
file system read permissions.</p>
<p>In audit mode (<a href="cli.md#--permission-audit"><code>--permission-audit</code></a>), this method still returns the actual
permission status, but denied operations will not throw <code>ERR_ACCESS_DENIED</code>.</p>
<p>The reference has a meaning based on the provided scope. For example,
the reference when the scope is File System means files and folders.</p>
<p>The available scopes are:</p>
<ul>
<li><code>fs</code> - All File System</li>
<li><code>fs.read</code> - File System read operations</li>
<li><code>fs.write</code> - File System write operations</li>
<li><code>child</code> - Child process spawning operations</li>
<li><code>env</code> - Environment variables</li>
<li><code>openssl.store</code> - Loading keys through OpenSSL STORE loaders</li>
<li><code>worker</code> - Worker thread spawning operation</li>
<li><code>ffi</code> - Foreign function interface operations</li>
</ul>
<pre><code class="language-js">// Check if the process has permission to read the README file
process.permission.has('fs.read', './README.md');
// Check if the process has read permission operations
process.permission.has('fs.read');
</code></pre>
<h3><code>process.permission.drop(scope[, reference])</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<ul>
<li><code>scope</code> {string}</li>
<li><code>reference</code> {string}</li>
</ul>
<p>Drops the specified permission from the current process. This operation is
<strong>irreversible</strong> — once a permission is dropped, it cannot be restored through
any Node.js API.</p>
<p>In audit mode (<a href="cli.md#--permission-audit"><code>--permission-audit</code></a>), dropping a permission takes effect,
but since denied operations do not throw, the impact is limited to changing the
return value of <code>permission.has()</code>.</p>
<p>If no reference is provided, the entire scope is dropped. For example,
<code>process.permission.drop('fs.read')</code> will revoke ALL file system read
permissions.</p>
<p>When a reference is provided, only the permission for that specific resource
is dropped. For example, <code>process.permission.drop('fs.read', '/etc/myapp')</code>
will revoke read access to that directory while keeping other read
permissions intact.</p>
<p><strong>Important:</strong> You can only drop the exact resource that was explicitly
granted. The reference passed to <code>drop()</code> must match the original grant:</p>
<ul>
<li>If a permission was granted using a wildcard (<code>*</code>), such as
<code>--allow-fs-read=*</code>, individual paths cannot be dropped - only the entire
scope can be dropped (by calling <code>drop()</code> without a reference).</li>
<li>If a directory was granted (e.g. <code>--allow-fs-read=/my/folder</code>), you cannot
drop access to individual files inside it. You must drop the same directory
that was granted. Any remaining grants continue to apply.</li>
</ul>
<p>The available scopes are the same as <a href="#processpermissionhasscope-reference"><code>process.permission.has()</code></a>:</p>
<ul>
<li><code>fs</code> - All File System (drops both read and write)</li>
<li><code>fs.read</code> - File System read operations</li>
<li><code>fs.write</code> - File System write operations</li>
<li><code>child</code> - Child process spawning operations</li>
<li><code>env</code> - Environment variables. Dropping a variable removes it from the
environment</li>
<li><code>openssl.store</code> - Loading keys through OpenSSL STORE loaders</li>
<li><code>worker</code> - Worker thread spawning operation</li>
<li><code>net</code> - Network operations</li>
<li><code>inspector</code> - Inspector operations</li>
<li><code>wasi</code> - WASI operations</li>
<li><code>addon</code> - Native addon operations</li>
</ul>
<pre><code class="language-js">const fs = require('node:fs');

// Read configuration during startup
const config = fs.readFileSync('/etc/myapp/config.json', 'utf8');

// Drop read access to the config directory after initialization
process.permission.drop('fs.read', '/etc/myapp');

// This will now throw ERR_ACCESS_DENIED
fs.readFileSync('/etc/myapp/config.json');
</code></pre>
<h2><code>process.pid</code></h2>
<ul>
<li>Type: {integer}</li>
</ul>
<p>The <code>process.pid</code> property returns the PID of the process.</p>
<pre><code class="language-mjs">import { pid } from 'node:process';

console.log(`This process is pid ${pid}`);
</code></pre>
<pre><code class="language-cjs">const { pid } = require('node:process');

console.log(`This process is pid ${pid}`);
</code></pre>
<h2><code>process.platform</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>process.platform</code> property returns a string identifying the operating
system platform for which the Node.js binary was compiled.</p>
<p>Currently possible values are:</p>
<ul>
<li><code>'aix'</code></li>
<li><code>'darwin'</code></li>
<li><code>'freebsd'</code></li>
<li><code>'linux'</code></li>
<li><code>'openbsd'</code></li>
<li><code>'sunos'</code></li>
<li><code>'win32'</code></li>
</ul>
<pre><code class="language-mjs">import { platform } from 'node:process';

console.log(`This platform is ${platform}`);
</code></pre>
<pre><code class="language-cjs">const { platform } = require('node:process');

console.log(`This platform is ${platform}`);
</code></pre>
<p>The value <code>'android'</code> may also be returned if Node.js is built on the
Android operating system. However, Android support in Node.js
<a href="https://github.com/nodejs/node/blob/HEAD/BUILDING.md#android">is experimental</a>.</p>
<h2><code>process.ppid</code></h2>
<ul>
<li>Type: {integer}</li>
</ul>
<p>The <code>process.ppid</code> property returns the PID of the parent of the
current process.</p>
<pre><code class="language-mjs">import { ppid } from 'node:process';

console.log(`The parent process is pid ${ppid}`);
</code></pre>
<pre><code class="language-cjs">const { ppid } = require('node:process');

console.log(`The parent process is pid ${ppid}`);
</code></pre>
<h2><code>process.ref(maybeRefable)</code></h2>
<ul>
<li><code>maybeRefable</code> {any} An object that may be &quot;refable&quot;.</li>
</ul>
<p>An object is &quot;refable&quot; if it implements the Node.js &quot;Refable protocol&quot;.
Specifically, this means that the object implements the <code>Symbol.for('nodejs.ref')</code>
and <code>Symbol.for('nodejs.unref')</code> methods. &quot;Ref'd&quot; objects will keep the Node.js
event loop alive, while &quot;unref'd&quot; objects will not. Historically, this was
implemented by using <code>ref()</code> and <code>unref()</code> methods directly on the objects.
This pattern, however, is being deprecated in favor of the &quot;Refable protocol&quot;
in order to better support Web Platform API types whose APIs cannot be modified
to add <code>ref()</code> and <code>unref()</code> methods but still need to support that behavior.</p>
<h2><code>process.release</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The <code>process.release</code> property returns an <code>Object</code> containing metadata related
to the current release, including URLs for the source tarball and headers-only
tarball.</p>
<p><code>process.release</code> contains the following properties:</p>
<ul>
<li><code>name</code> {string} A value that will always be <code>'node'</code>.</li>
<li><code>sourceUrl</code> {string} an absolute URL pointing to a <em><code>.tar.gz</code></em> file containing
the source code of the current release.</li>
<li><code>headersUrl</code>{string} an absolute URL pointing to a <em><code>.tar.gz</code></em> file containing
only the source header files for the current release. This file is
significantly smaller than the full source file and can be used for compiling
Node.js native add-ons.</li>
<li><code>libUrl</code> {string|undefined} an absolute URL pointing to a <em><code>node.lib</code></em> file
matching the architecture and version of the current release. This file is
used for compiling Node.js native add-ons. <em>This property is only present on
Windows builds of Node.js and will be missing on all other platforms.</em></li>
<li><code>lts</code> {string|undefined} a string label identifying the <a href="https://github.com/nodejs/Release">LTS</a> label for this
release. This property only exists for LTS releases and is <code>undefined</code> for all
other release types, including <em>Current</em> releases. Valid values include the
LTS Release code names (including those that are no longer supported).
<ul>
<li><code>'Fermium'</code> for the 14.x LTS line beginning with 14.15.0.</li>
<li><code>'Gallium'</code> for the 16.x LTS line beginning with 16.13.0.</li>
<li><code>'Hydrogen'</code> for the 18.x LTS line beginning with 18.12.0.
For other LTS Release code names, see <a href="https://github.com/nodejs/node/blob/HEAD/doc/changelogs/CHANGELOG_ARCHIVE.md">Node.js Changelog Archive</a></li>
</ul>
</li>
</ul>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;node&quot;,
  &quot;lts&quot;: &quot;Hydrogen&quot;,
  &quot;sourceUrl&quot;: &quot;https://nodejs.org/download/release/v18.12.0/node-v18.12.0.tar.gz&quot;,
  &quot;headersUrl&quot;: &quot;https://nodejs.org/download/release/v18.12.0/node-v18.12.0-headers.tar.gz&quot;,
  &quot;libUrl&quot;: &quot;https://nodejs.org/download/release/v18.12.0/win-x64/node.lib&quot;
}
</code></pre>
<p>In custom builds from non-release versions of the source tree, only the
<code>name</code> property may be present. The additional properties should not be
relied upon to exist.</p>
<h2><code>process.report</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p><code>process.report</code> is an object whose methods are used to generate diagnostic
reports for the current process. Additional documentation is available in the
<a href="report.md">report documentation</a>.</p>
<h3><code>process.report.compact</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Write reports in a compact format, single-line JSON, more easily consumable
by log processing systems than the default multi-line format designed for
human consumption.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Reports are compact? ${report.compact}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Reports are compact? ${report.compact}`);
</code></pre>
<h3><code>process.report.directory</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Directory where the report is written. The default value is the empty string,
indicating that reports are written to the current working directory of the
Node.js process.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report directory is ${report.directory}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report directory is ${report.directory}`);
</code></pre>
<h3><code>process.report.filename</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Filename where the report is written. If set to the empty string, the output
filename will be comprised of a timestamp, PID, and sequence number. The default
value is the empty string.</p>
<p>If the value of <code>process.report.filename</code> is set to <code>'stdout'</code> or <code>'stderr'</code>,
the report is written to the stdout or stderr of the process respectively.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report filename is ${report.filename}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report filename is ${report.filename}`);
</code></pre>
<h3><code>process.report.getReport([err])</code></h3>
<ul>
<li><code>err</code> {Error} A custom error used for reporting the JavaScript stack.</li>
<li>Returns: {Object}</li>
</ul>
<p>Returns a JavaScript Object representation of a diagnostic report for the
running process. The report's JavaScript stack trace is taken from <code>err</code>, if
present.</p>
<pre><code class="language-mjs">import { report } from 'node:process';
import util from 'node:util';

const data = report.getReport();
console.log(data.header.nodejsVersion);

// Similar to process.report.writeReport()
import fs from 'node:fs';
fs.writeFileSync('my-report.log', util.inspect(data), 'utf8');
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');
const util = require('node:util');

const data = report.getReport();
console.log(data.header.nodejsVersion);

// Similar to process.report.writeReport()
const fs = require('node:fs');
fs.writeFileSync('my-report.log', util.inspect(data), 'utf8');
</code></pre>
<p>Additional documentation is available in the <a href="report.md">report documentation</a>.</p>
<h3><code>process.report.reportOnFatalError</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>If <code>true</code>, a diagnostic report is generated on fatal errors, such as out of
memory errors or failed C++ assertions.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report on fatal error: ${report.reportOnFatalError}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report on fatal error: ${report.reportOnFatalError}`);
</code></pre>
<h3><code>process.report.reportOnSignal</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>If <code>true</code>, a diagnostic report is generated when the process receives the
signal specified by <code>process.report.signal</code>.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report on signal: ${report.reportOnSignal}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report on signal: ${report.reportOnSignal}`);
</code></pre>
<h3><code>process.report.reportOnUncaughtException</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>If <code>true</code>, a diagnostic report is generated on uncaught exception.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report on exception: ${report.reportOnUncaughtException}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report on exception: ${report.reportOnUncaughtException}`);
</code></pre>
<h3><code>process.report.excludeEnv</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>If <code>true</code>, a diagnostic report is generated without the environment variables.</p>
<h3><code>process.report.signal</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The signal used to trigger the creation of a diagnostic report. Defaults to
<code>'SIGUSR2'</code>.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

console.log(`Report signal: ${report.signal}`);
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

console.log(`Report signal: ${report.signal}`);
</code></pre>
<h3><code>process.report.writeReport([filename][, err])</code></h3>
<ul>
<li>
<p><code>filename</code> {string} Name of the file where the report is written. This
should be a relative path, that will be appended to the directory specified in
<code>process.report.directory</code>, or the current working directory of the Node.js
process, if unspecified.</p>
</li>
<li>
<p><code>err</code> {Error} A custom error used for reporting the JavaScript stack.</p>
</li>
<li>
<p>Returns: {string} Returns the filename of the generated report.</p>
</li>
</ul>
<p>Writes a diagnostic report to a file. If <code>filename</code> is not provided, the default
filename includes the date, time, PID, and a sequence number. The report's
JavaScript stack trace is taken from <code>err</code>, if present.</p>
<p>If the value of <code>filename</code> is set to <code>'stdout'</code> or <code>'stderr'</code>, the report is
written to the stdout or stderr of the process respectively.</p>
<pre><code class="language-mjs">import { report } from 'node:process';

report.writeReport();
</code></pre>
<pre><code class="language-cjs">const { report } = require('node:process');

report.writeReport();
</code></pre>
<p>Additional documentation is available in the <a href="report.md">report documentation</a>.</p>
<h2><code>process.resourceUsage()</code></h2>
<ul>
<li>Returns: {Object} the resource usage for the current process. All of these
values come from the <code>uv_getrusage</code> call which returns
a <a href="https://docs.libuv.org/en/v1.x/misc.html#c.uv_rusage_t"><code>uv_rusage_t</code> struct</a>.
<ul>
<li><code>userCPUTime</code> {integer} maps to <code>ru_utime</code> computed in microseconds.
It is the same value as <a href="#processcpuusagepreviousvalue"><code>process.cpuUsage().user</code></a>.</li>
<li><code>systemCPUTime</code> {integer} maps to <code>ru_stime</code> computed in microseconds.
It is the same value as <a href="#processcpuusagepreviousvalue"><code>process.cpuUsage().system</code></a>.</li>
<li><code>maxRSS</code> {integer} maps to <code>ru_maxrss</code> which is the maximum resident set
size used in kibibytes (1024 bytes).</li>
<li><code>sharedMemorySize</code> {integer} maps to <code>ru_ixrss</code> but is not supported by
any platform.</li>
<li><code>unsharedDataSize</code> {integer} maps to <code>ru_idrss</code> but is not supported by
any platform.</li>
<li><code>unsharedStackSize</code> {integer} maps to <code>ru_isrss</code> but is not supported by
any platform.</li>
<li><code>minorPageFault</code> {integer} maps to <code>ru_minflt</code> which is the number of
minor page faults for the process, see
<a href="https://en.wikipedia.org/wiki/Page_fault#Minor">this article for more details</a>.</li>
<li><code>majorPageFault</code> {integer} maps to <code>ru_majflt</code> which is the number of
major page faults for the process, see
<a href="https://en.wikipedia.org/wiki/Page_fault#Major">this article for more details</a>. This field is not
supported on Windows.</li>
<li><code>swappedOut</code> {integer} maps to <code>ru_nswap</code> but is not supported by any
platform.</li>
<li><code>fsRead</code> {integer} maps to <code>ru_inblock</code> which is the number of times the
file system had to perform input.</li>
<li><code>fsWrite</code> {integer} maps to <code>ru_oublock</code> which is the number of times the
file system had to perform output.</li>
<li><code>ipcSent</code> {integer} maps to <code>ru_msgsnd</code> but is not supported by any
platform.</li>
<li><code>ipcReceived</code> {integer} maps to <code>ru_msgrcv</code> but is not supported by any
platform.</li>
<li><code>signalsCount</code> {integer} maps to <code>ru_nsignals</code> but is not supported by any
platform.</li>
<li><code>voluntaryContextSwitches</code> {integer} maps to <code>ru_nvcsw</code> which is the
number of times a CPU context switch resulted due to a process voluntarily
giving up the processor before its time slice was completed (usually to
await availability of a resource). This field is not supported on Windows.</li>
<li><code>involuntaryContextSwitches</code> {integer} maps to <code>ru_nivcsw</code> which is the
number of times a CPU context switch resulted due to a higher priority
process becoming runnable or because the current process exceeded its
time slice. This field is not supported on Windows.</li>
</ul>
</li>
</ul>
<pre><code class="language-mjs">import { resourceUsage } from 'node:process';

console.log(resourceUsage());
/*
  Will output:
  {
    userCPUTime: 82872,
    systemCPUTime: 4143,
    maxRSS: 33164,
    sharedMemorySize: 0,
    unsharedDataSize: 0,
    unsharedStackSize: 0,
    minorPageFault: 2469,
    majorPageFault: 0,
    swappedOut: 0,
    fsRead: 0,
    fsWrite: 8,
    ipcSent: 0,
    ipcReceived: 0,
    signalsCount: 0,
    voluntaryContextSwitches: 79,
    involuntaryContextSwitches: 1
  }
*/
</code></pre>
<pre><code class="language-cjs">const { resourceUsage } = require('node:process');

console.log(resourceUsage());
/*
  Will output:
  {
    userCPUTime: 82872,
    systemCPUTime: 4143,
    maxRSS: 33164,
    sharedMemorySize: 0,
    unsharedDataSize: 0,
    unsharedStackSize: 0,
    minorPageFault: 2469,
    majorPageFault: 0,
    swappedOut: 0,
    fsRead: 0,
    fsWrite: 8,
    ipcSent: 0,
    ipcReceived: 0,
    signalsCount: 0,
    voluntaryContextSwitches: 79,
    involuntaryContextSwitches: 1
  }
*/
</code></pre>
<h2><code>process.send(message[, sendHandle[, options]][, callback])</code></h2>
<ul>
<li><code>message</code> {Object}</li>
<li><code>sendHandle</code> {net.Server|net.Socket}</li>
<li><code>options</code> {Object} used to parameterize the sending of certain types of
handles.<code>options</code> supports the following properties:
<ul>
<li><code>keepOpen</code> {boolean} A value that can be used when passing instances of
<code>net.Socket</code>. When <code>true</code>, the socket is kept open in the sending process.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>If Node.js is spawned with an IPC channel, the <code>process.send()</code> method can be
used to send messages to the parent process. Messages will be received as a
<a href="child_process.md#event-message"><code>'message'</code></a> event on the parent's <a href="child_process.md#class-childprocess"><code>ChildProcess</code></a> object.</p>
<p>If Node.js was not spawned with an IPC channel, <code>process.send</code> will be
<code>undefined</code>.</p>
<p>The message goes through serialization and parsing. The resulting message might
not be the same as what is originally sent.</p>
<h2><code>process.setegid(id)</code></h2>
<ul>
<li><code>id</code> {string|number} A group name or ID</li>
</ul>
<p>The <code>process.setegid()</code> method sets the effective group identity of the process.
(See setegid(2).) The <code>id</code> can be passed as either a numeric ID or a group
name string. If a group name is specified, this method blocks while resolving
the associated a numeric ID.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getegid &amp;&amp; process.setegid) {
  console.log(`Current gid: ${process.getegid()}`);
  try {
    process.setegid(501);
    console.log(`New gid: ${process.getegid()}`);
  } catch (err) {
    console.error(`Failed to set gid: ${err}`);
  }
}
</code></pre>
<pre><code class="language-cjs">if (process.getegid &amp;&amp; process.setegid) {
  console.log(`Current gid: ${process.getegid()}`);
  try {
    process.setegid(501);
    console.log(`New gid: ${process.getegid()}`);
  } catch (err) {
    console.error(`Failed to set gid: ${err}`);
  }
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.seteuid(id)</code></h2>
<ul>
<li><code>id</code> {string|number} A user name or ID</li>
</ul>
<p>The <code>process.seteuid()</code> method sets the effective user identity of the process.
(See seteuid(2).) The <code>id</code> can be passed as either a numeric ID or a username
string. If a username is specified, the method blocks while resolving the
associated numeric ID.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.geteuid &amp;&amp; process.seteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
  try {
    process.seteuid(501);
    console.log(`New uid: ${process.geteuid()}`);
  } catch (err) {
    console.error(`Failed to set uid: ${err}`);
  }
}
</code></pre>
<pre><code class="language-cjs">if (process.geteuid &amp;&amp; process.seteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
  try {
    process.seteuid(501);
    console.log(`New uid: ${process.geteuid()}`);
  } catch (err) {
    console.error(`Failed to set uid: ${err}`);
  }
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.setgid(id)</code></h2>
<ul>
<li><code>id</code> {string|number} The group name or ID</li>
</ul>
<p>The <code>process.setgid()</code> method sets the group identity of the process. (See
setgid(2).) The <code>id</code> can be passed as either a numeric ID or a group name
string. If a group name is specified, this method blocks while resolving the
associated numeric ID.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getgid &amp;&amp; process.setgid) {
  console.log(`Current gid: ${process.getgid()}`);
  try {
    process.setgid(501);
    console.log(`New gid: ${process.getgid()}`);
  } catch (err) {
    console.error(`Failed to set gid: ${err}`);
  }
}
</code></pre>
<pre><code class="language-cjs">if (process.getgid &amp;&amp; process.setgid) {
  console.log(`Current gid: ${process.getgid()}`);
  try {
    process.setgid(501);
    console.log(`New gid: ${process.getgid()}`);
  } catch (err) {
    console.error(`Failed to set gid: ${err}`);
  }
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.setgroups(groups)</code></h2>
<ul>
<li><code>groups</code> {integer[]}</li>
</ul>
<p>The <code>process.setgroups()</code> method sets the supplementary group IDs for the
Node.js process. This is a privileged operation that requires the Node.js
process to have <code>root</code> or the <code>CAP_SETGID</code> capability.</p>
<p>The <code>groups</code> array can contain numeric group IDs, group names, or both.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getgroups &amp;&amp; process.setgroups) {
  try {
    process.setgroups([501]);
    console.log(process.getgroups()); // new groups
  } catch (err) {
    console.error(`Failed to set groups: ${err}`);
  }
}
</code></pre>
<pre><code class="language-cjs">if (process.getgroups &amp;&amp; process.setgroups) {
  try {
    process.setgroups([501]);
    console.log(process.getgroups()); // new groups
  } catch (err) {
    console.error(`Failed to set groups: ${err}`);
  }
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.setuid(id)</code></h2>
<ul>
<li><code>id</code> {integer | string}</li>
</ul>
<p>The <code>process.setuid(id)</code> method sets the user identity of the process. (See
setuid(2).) The <code>id</code> can be passed as either a numeric ID or a username string.
If a username is specified, the method blocks while resolving the associated
numeric ID.</p>
<pre><code class="language-mjs">import process from 'node:process';

if (process.getuid &amp;&amp; process.setuid) {
  console.log(`Current uid: ${process.getuid()}`);
  try {
    process.setuid(501);
    console.log(`New uid: ${process.getuid()}`);
  } catch (err) {
    console.error(`Failed to set uid: ${err}`);
  }
}
</code></pre>
<pre><code class="language-cjs">if (process.getuid &amp;&amp; process.setuid) {
  console.log(`Current uid: ${process.getuid()}`);
  try {
    process.setuid(501);
    console.log(`New uid: ${process.getuid()}`);
  } catch (err) {
    console.error(`Failed to set uid: ${err}`);
  }
}
</code></pre>
<p>This function is only available on POSIX platforms (i.e. not Windows or
Android).
This feature is not available in <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads.</p>
<h2><code>process.setSourceMapsEnabled(val)</code></h2>
<blockquote>
<p>Stability: 1 - Experimental: Use <a href="module.md#modulesetsourcemapssupportenabled-options"><code>module.setSourceMapsSupport()</code></a> instead.</p>
</blockquote>
<ul>
<li><code>val</code> {boolean}</li>
</ul>
<p>This function enables or disables the <a href="https://tc39.es/ecma426/">Source Map</a> support for
stack traces.</p>
<p>It provides same features as launching Node.js process with commandline options
<code>--enable-source-maps</code>.</p>
<p>Only source maps in JavaScript files that are loaded after source maps has been
enabled will be parsed and loaded.</p>
<p>This implies calling <code>module.setSourceMapsSupport()</code> with an option
<code>{ nodeModules: true, generatedCode: true }</code>.</p>
<h2><code>process.setUncaughtExceptionCaptureCallback(fn)</code></h2>
<ul>
<li><code>fn</code> {Function|null}</li>
</ul>
<p>The <code>process.setUncaughtExceptionCaptureCallback()</code> function sets a function
that will be invoked when an uncaught exception occurs, which will receive the
exception value itself as its first argument.</p>
<p>If such a function is set, the <a href="#event-uncaughtexception"><code>'uncaughtException'</code></a> event will
not be emitted. If <code>--abort-on-uncaught-exception</code> was passed from the
command line or set through <a href="v8.md#v8setflagsfromstringflags"><code>v8.setFlagsFromString()</code></a>, the process will
not abort. Actions configured to take place on exceptions such as report
generations will be affected too</p>
<p>To unset the capture function,
<code>process.setUncaughtExceptionCaptureCallback(null)</code> may be used. Calling this
method with a non-<code>null</code> argument while another capture function is set will
throw an error.</p>
<p>To register multiple callbacks that can coexist, use
<a href="#processadduncaughtexceptioncapturecallbackfn"><code>process.addUncaughtExceptionCaptureCallback()</code></a> instead.</p>
<h2><code>process.sourceMapsEnabled</code></h2>
<blockquote>
<p>Stability: 1 - Experimental: Use <a href="module.md#modulegetsourcemapssupport"><code>module.getSourceMapsSupport()</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>process.sourceMapsEnabled</code> property returns whether the
<a href="https://tc39.es/ecma426/">Source Map</a> support for stack traces is enabled.</p>
<h2><code>process.stderr</code></h2>
<ul>
<li>Type: {Stream}</li>
</ul>
<p>The <code>process.stderr</code> property returns a stream connected to
<code>stderr</code> (fd <code>2</code>). It is a <a href="net.md#class-netsocket"><code>net.Socket</code></a> (which is a <a href="stream.md#duplex-and-transform-streams">Duplex</a>
stream) unless fd <code>2</code> refers to a file, in which case it is
a <a href="stream.md#writable-streams">Writable</a> stream.</p>
<p><code>process.stderr</code> differs from other Node.js streams in important ways. See
<a href="#a-note-on-process-io">note on process I/O</a> for more information.</p>
<h3><code>process.stderr.fd</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>This property refers to the value of underlying file descriptor of
<code>process.stderr</code>. The value is fixed at <code>2</code>. In <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads,
this field does not exist.</p>
<h2><code>process.stdin</code></h2>
<ul>
<li>Type: {Stream}</li>
</ul>
<p>The <code>process.stdin</code> property returns a stream connected to
<code>stdin</code> (fd <code>0</code>). It is a <a href="net.md#class-netsocket"><code>net.Socket</code></a> (which is a <a href="stream.md#duplex-and-transform-streams">Duplex</a>
stream) unless fd <code>0</code> refers to a file, in which case it is
a <a href="stream.md#readable-streams">Readable</a> stream.</p>
<p>For details of how to read from <code>stdin</code> see <a href="stream.md#readablereadsize"><code>readable.read()</code></a>.</p>
<p>As a <a href="stream.md#duplex-and-transform-streams">Duplex</a> stream, <code>process.stdin</code> can also be used in &quot;old&quot; mode that
is compatible with scripts written for Node.js prior to v0.10.
For more information see <a href="stream.md#compatibility-with-older-nodejs-versions">Stream compatibility</a>.</p>
<p>In &quot;old&quot; streams mode the <code>stdin</code> stream is paused by default, so one
must call <code>process.stdin.resume()</code> to read from it. Note also that calling
<code>process.stdin.resume()</code> itself would switch stream to &quot;old&quot; mode.</p>
<h3><code>process.stdin.fd</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>This property refers to the value of underlying file descriptor of
<code>process.stdin</code>. The value is fixed at <code>0</code>. In <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads,
this field does not exist.</p>
<h2><code>process.stdout</code></h2>
<ul>
<li>Type: {Stream}</li>
</ul>
<p>The <code>process.stdout</code> property returns a stream connected to
<code>stdout</code> (fd <code>1</code>). It is a <a href="net.md#class-netsocket"><code>net.Socket</code></a> (which is a <a href="stream.md#duplex-and-transform-streams">Duplex</a>
stream) unless fd <code>1</code> refers to a file, in which case it is
a <a href="stream.md#writable-streams">Writable</a> stream.</p>
<p>For example, to copy <code>process.stdin</code> to <code>process.stdout</code>:</p>
<pre><code class="language-mjs">import { stdin, stdout } from 'node:process';

stdin.pipe(stdout);
</code></pre>
<pre><code class="language-cjs">const { stdin, stdout } = require('node:process');

stdin.pipe(stdout);
</code></pre>
<p><code>process.stdout</code> differs from other Node.js streams in important ways. See
<a href="#a-note-on-process-io">note on process I/O</a> for more information.</p>
<h3><code>process.stdout.fd</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>This property refers to the value of underlying file descriptor of
<code>process.stdout</code>. The value is fixed at <code>1</code>. In <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads,
this field does not exist.</p>
<h3>A note on process I/O</h3>
<p><code>process.stdout</code> and <code>process.stderr</code> differ from other Node.js streams in
important ways:</p>
<ol>
<li>They are used internally by <a href="console.md#consolelogdata-args"><code>console.log()</code></a> and <a href="console.md#consoleerrordata-args"><code>console.error()</code></a>,
respectively.</li>
<li>Writes may be synchronous depending on what the stream is connected to
and whether the system is Windows or POSIX:
<ul>
<li>Files: <em>synchronous</em> on Windows and POSIX</li>
<li>TTYs (Terminals): <em>asynchronous</em> on Windows, <em>synchronous</em> on POSIX</li>
<li>Pipes (and sockets): <em>synchronous</em> on Windows, <em>asynchronous</em> on POSIX</li>
</ul>
</li>
</ol>
<p>These behaviors are partly for historical reasons, as changing them would
create backward incompatibility, but they are also expected by some users.</p>
<p>Synchronous writes avoid problems such as output written with <code>console.log()</code> or
<code>console.error()</code> being unexpectedly interleaved, or not written at all if
<code>process.exit()</code> is called before an asynchronous write completes. See
<a href="#processexitcode"><code>process.exit()</code></a> for more information.</p>
<p><em><strong>Warning</strong></em>: Synchronous writes block the event loop until the write has
completed. This can be near instantaneous in the case of output to a file, but
under high system load, pipes that are not being read at the receiving end, or
with slow terminals or file systems, it's possible for the event loop to be
blocked often enough and long enough to have severe negative performance
impacts. This may not be a problem when writing to an interactive terminal
session, but consider this particularly careful when doing production logging to
the process output streams.</p>
<p>To check if a stream is connected to a <a href="tty.md#tty">TTY</a> context, check the <code>isTTY</code>
property.</p>
<p>For instance:</p>
<pre><code class="language-console">$ node -p &quot;Boolean(process.stdin.isTTY)&quot;
true
$ echo &quot;foo&quot; | node -p &quot;Boolean(process.stdin.isTTY)&quot;
false
$ node -p &quot;Boolean(process.stdout.isTTY)&quot;
true
$ node -p &quot;Boolean(process.stdout.isTTY)&quot; | cat
false
</code></pre>
<p>See the <a href="tty.md#tty">TTY</a> documentation for more information.</p>
<h2><code>process.throwDeprecation</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The initial value of <code>process.throwDeprecation</code> indicates whether the
<code>--throw-deprecation</code> flag is set on the current Node.js process.
<code>process.throwDeprecation</code> is mutable, so whether or not deprecation
warnings result in errors may be altered at runtime. See the
documentation for the <a href="#event-warning"><code>'warning'</code> event</a> and the
<a href="#processemitwarningwarning-type-code-ctor"><code>emitWarning()</code> method</a> for more information.</p>
<pre><code class="language-console">$ node --throw-deprecation -p &quot;process.throwDeprecation&quot;
true
$ node -p &quot;process.throwDeprecation&quot;
undefined
$ node
&gt; process.emitWarning('test', 'DeprecationWarning');
undefined
&gt; (node:26598) DeprecationWarning: test
&gt; process.throwDeprecation = true;
true
&gt; process.emitWarning('test', 'DeprecationWarning');
Thrown:
[DeprecationWarning: test] { name: 'DeprecationWarning' }
</code></pre>
<h2><code>process.threadCpuUsage([previousValue])</code></h2>
<ul>
<li><code>previousValue</code> {Object} A previous return value from calling
<code>process.threadCpuUsage()</code></li>
<li>Returns: {Object}
<ul>
<li><code>user</code> {integer}</li>
<li><code>system</code> {integer}</li>
</ul>
</li>
</ul>
<p>The <code>process.threadCpuUsage()</code> method returns the user and system CPU time usage of
the current worker thread, in an object with properties <code>user</code> and <code>system</code>, whose
values are microsecond values (millionth of a second).</p>
<p>The result of a previous call to <code>process.threadCpuUsage()</code> can be passed as the
argument to the function, to get a diff reading.</p>
<h2><code>process.title</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>process.title</code> property returns the current process title (i.e. returns
the current value of <code>ps</code>). Assigning a new value to <code>process.title</code> modifies
the current value of <code>ps</code>.</p>
<p>When a new value is assigned, different platforms will impose different maximum
length restrictions on the title. Usually such restrictions are quite limited.
For instance, on Linux and macOS, <code>process.title</code> is limited to the size of the
binary name plus the length of the command-line arguments because setting the
<code>process.title</code> overwrites the <code>argv</code> memory of the process. Node.js 0.8
allowed for longer process title strings by also overwriting the <code>environ</code>
memory but that was potentially insecure and confusing in some (rather obscure)
cases.</p>
<p>Assigning a value to <code>process.title</code> might not result in an accurate label
within process manager applications such as macOS Activity Monitor or Windows
Services Manager.</p>
<h2><code>process.traceDeprecation</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>process.traceDeprecation</code> property indicates whether the
<code>--trace-deprecation</code> flag is set on the current Node.js process. See the
documentation for the <a href="#event-warning"><code>'warning'</code> event</a> and the
<a href="#processemitwarningwarning-type-code-ctor"><code>emitWarning()</code> method</a> for more information about this
flag's behavior.</p>
<h2><code>process.traceProcessWarnings</code></h2>
<ul>
<li>{boolean}</li>
</ul>
<p>The <code>process.traceProcessWarnings</code> property indicates whether the <code>--trace-warnings</code> flag
is set on the current Node.js process. This property allows programmatic control over the
tracing of warnings, enabling or disabling stack traces for warnings at runtime.</p>
<pre><code class="language-js">// Enable trace warnings
process.traceProcessWarnings = true;

// Emit a warning with a stack trace
process.emitWarning('Warning with stack trace');

// Disable trace warnings
process.traceProcessWarnings = false;
</code></pre>
<h2><code>process.umask()</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. Calling <code>process.umask()</code> with no argument causes
the process-wide umask to be written twice. This introduces a race condition
between threads, and is a potential security vulnerability. There is no safe,
cross-platform alternative API.</p>
</blockquote>
<p><code>process.umask()</code> returns the Node.js process's file mode creation mask. Child
processes inherit the mask from the parent process.</p>
<h2><code>process.umask(mask)</code></h2>
<ul>
<li><code>mask</code> {string|integer}</li>
</ul>
<p><code>process.umask(mask)</code> sets the Node.js process's file mode creation mask. Child
processes inherit the mask from the parent process. Returns the previous mask.</p>
<pre><code class="language-mjs">import { umask } from 'node:process';

const newmask = 0o022;
const oldmask = umask(newmask);
console.log(
  `Changed umask from ${oldmask.toString(8)} to ${newmask.toString(8)}`,
);
</code></pre>
<pre><code class="language-cjs">const { umask } = require('node:process');

const newmask = 0o022;
const oldmask = umask(newmask);
console.log(
  `Changed umask from ${oldmask.toString(8)} to ${newmask.toString(8)}`,
);
</code></pre>
<p>In <a href="worker_threads.md#class-worker"><code>Worker</code></a> threads, <code>process.umask(mask)</code> will throw an exception.</p>
<h2><code>process.unref(maybeRefable)</code></h2>
<ul>
<li><code>maybeRefable</code> {any} An object that may be &quot;unref'd&quot;.</li>
</ul>
<p>An object is &quot;unrefable&quot; if it implements the Node.js &quot;Refable protocol&quot;.
Specifically, this means that the object implements the <code>Symbol.for('nodejs.ref')</code>
and <code>Symbol.for('nodejs.unref')</code> methods. &quot;Ref'd&quot; objects will keep the Node.js
event loop alive, while &quot;unref'd&quot; objects will not. Historically, this was
implemented by using <code>ref()</code> and <code>unref()</code> methods directly on the objects.
This pattern, however, is being deprecated in favor of the &quot;Refable protocol&quot;
in order to better support Web Platform API types whose APIs cannot be modified
to add <code>ref()</code> and <code>unref()</code> methods but still need to support that behavior.</p>
<h2><code>process.uptime()</code></h2>
<ul>
<li>Returns: {number}</li>
</ul>
<p>The <code>process.uptime()</code> method returns the number of seconds the current Node.js
process has been running.</p>
<p>The return value includes fractions of a second. Use <code>Math.floor()</code> to get whole
seconds.</p>
<h2><code>process.version</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>process.version</code> property contains the Node.js version string.</p>
<pre><code class="language-mjs">import { version } from 'node:process';

console.log(`Version: ${version}`);
// Version: v14.8.0
</code></pre>
<pre><code class="language-cjs">const { version } = require('node:process');

console.log(`Version: ${version}`);
// Version: v14.8.0
</code></pre>
<p>To get the version string without the prepended <em>v</em>, use
<code>process.versions.node</code>.</p>
<h2><code>process.versions</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The <code>process.versions</code> property returns an object listing the version strings of
Node.js and its dependencies. <code>process.versions.modules</code> indicates the current
ABI version, which is increased whenever a C++ API changes. Node.js will refuse
to load modules that were compiled against a different module ABI version.</p>
<pre><code class="language-mjs">import { versions } from 'node:process';

console.log(versions);
</code></pre>
<pre><code class="language-cjs">const { versions } = require('node:process');

console.log(versions);
</code></pre>
<p>Will generate an object similar to:</p>
<pre><code class="language-console">{ node: '26.0.0-pre',
  acorn: '8.15.0',
  ada: '3.4.1',
  amaro: '1.1.5',
  ares: '1.34.6',
  brotli: '1.2.0',
  merve: '1.0.0',
  cldr: '48.0',
  icu: '78.2',
  llhttp: '9.3.0',
  modules: '144',
  napi: '10',
  nbytes: '0.1.1',
  ncrypto: '0.0.1',
  nghttp2: '1.68.0',
  nghttp3: '',
  ngtcp2: '',
  openssl: '3.5.4',
  simdjson: '4.2.4',
  simdutf: '7.3.3',
  sqlite: '3.51.2',
  tz: '2025c',
  undici: '7.18.2',
  unicode: '17.0',
  uv: '1.51.0',
  uvwasi: '0.0.23',
  v8: '14.3.127.18-node.10',
  zlib: '1.3.1-e00f703',
  zstd: '1.5.7' }
</code></pre>
<h2>Exit codes</h2>
<p>Node.js will normally exit with a <code>0</code> status code when no more async
operations are pending. The following status codes are used in other
cases:</p>
<ul>
<li><code>1</code> <strong>Uncaught Fatal Exception</strong>: There was an uncaught exception,
and it was not handled by a domain or an <a href="#event-uncaughtexception"><code>'uncaughtException'</code></a> event
handler.</li>
<li><code>2</code>: Unused (reserved by Bash for builtin misuse)</li>
<li><code>3</code> <strong>Internal JavaScript Parse Error</strong>: The JavaScript source code
internal in the Node.js bootstrapping process caused a parse error. This
is extremely rare, and generally can only happen during development
of Node.js itself.</li>
<li><code>4</code> <strong>Internal JavaScript Evaluation Failure</strong>: The JavaScript
source code internal in the Node.js bootstrapping process failed to
return a function value when evaluated. This is extremely rare, and
generally can only happen during development of Node.js itself.</li>
<li><code>5</code> <strong>Fatal Error</strong>: There was a fatal unrecoverable error in V8.
Typically a message will be printed to stderr with the prefix <code>FATAL ERROR</code>.</li>
<li><code>6</code> <strong>Non-function Internal Exception Handler</strong>: There was an
uncaught exception, but the internal fatal exception handler
function was somehow set to a non-function, and could not be called.</li>
<li><code>7</code> <strong>Internal Exception Handler Run-Time Failure</strong>: There was an
uncaught exception, and the internal fatal exception handler
function itself threw an error while attempting to handle it. This
can happen, for example, if an <a href="#event-uncaughtexception"><code>'uncaughtException'</code></a> or
<code>domain.on('error')</code> handler throws an error.</li>
<li><code>8</code>: Unused. In previous versions of Node.js, exit code 8 sometimes
indicated an uncaught exception.</li>
<li><code>9</code> <strong>Invalid Argument</strong>: Either an unknown option was specified,
or an option requiring a value was provided without a value.</li>
<li><code>10</code> <strong>Internal JavaScript Run-Time Failure</strong>: The JavaScript
source code internal in the Node.js bootstrapping process threw an error
when the bootstrapping function was called. This is extremely rare,
and generally can only happen during development of Node.js itself.</li>
<li><code>12</code> <strong>Invalid Debug Argument</strong>: The <code>--inspect</code> and/or <code>--inspect-brk</code>
options were set, but the port number chosen was invalid or unavailable.</li>
<li><code>13</code> <strong>Unsettled Top-Level Await</strong>: <code>await</code> was used outside of a function
in the top-level code, but the passed <code>Promise</code> never settled.</li>
<li><code>14</code> <strong>Snapshot Failure</strong>: Node.js was started to build a V8 startup
snapshot and it failed because certain requirements of the state of
the application were not met.</li>
<li><code>124</code> <strong>Process Timeout</strong>: The process was still running when the duration
set with <a href="cli.md#--process-timeoutduration"><code>--process-timeout</code></a> elapsed.</li>
<li><code>&gt;128</code> <strong>Signal Exits</strong>: If Node.js receives a fatal signal such as
<code>SIGKILL</code> or <code>SIGHUP</code>, then its exit code will be <code>128</code> plus the
value of the signal code. This is a standard POSIX practice, since
exit codes are defined to be 7-bit integers, and signal exits set
the high-order bit, and then contain the value of the signal code.
For example, signal <code>SIGABRT</code> has value <code>6</code>, so the expected exit
code will be <code>128</code> + <code>6</code>, or <code>134</code>.</li>
</ul>
