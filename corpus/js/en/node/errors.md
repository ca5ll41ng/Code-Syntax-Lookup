---
id: "js-en-function-node-errors"
language: "js"
lang: "en"
category: "function"
name: "node:errors"
title: "Errors"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/errors.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Errors

<h1>Errors</h1>
<p>Applications running in Node.js will generally experience the following
categories of errors:</p>
<ul>
<li>Standard JavaScript errors such as {EvalError}, {SyntaxError}, {RangeError},
{ReferenceError}, {TypeError}, and {URIError}.</li>
<li>Standard <code>DOMException</code>s.</li>
<li>System errors triggered by underlying operating system constraints such
as attempting to open a file that does not exist or attempting to send data
over a closed socket.</li>
<li><code>AssertionError</code>s are a special class of error that can be triggered when
Node.js detects an exceptional logic violation that should never occur. These
are raised typically by the <code>node:assert</code> module.</li>
<li>User-specified errors triggered by application code.</li>
</ul>
<p>All JavaScript and system errors raised by Node.js inherit from, or are
instances of, the standard JavaScript {Error} class and are guaranteed
to provide <em>at least</em> the properties available on that class.</p>
<p>The <a href="#errormessage"><code>error.message</code></a> property of errors raised by Node.js may be changed in
any versions. Use <a href="#errorcode"><code>error.code</code></a> to identify an error instead. For a
<code>DOMException</code>, use <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name"><code>domException.name</code></a> to identify its type.</p>
<h2>Error propagation and interception</h2>
<p>Node.js supports several mechanisms for propagating and handling errors that
occur while an application is running. How these errors are reported and
handled depends entirely on the type of <code>Error</code> and the style of the API that is
called.</p>
<p>All JavaScript errors are handled as exceptions that <em>immediately</em> generate
and throw an error using the standard JavaScript <code>throw</code> mechanism. These
are handled using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"><code>try…catch</code> construct</a> provided by the
JavaScript language.</p>
<pre><code class="language-js">// Throws with a ReferenceError because z is not defined.
try {
  const m = 1;
  const n = m + z;
} catch (err) {
  // Handle the error here.
}
</code></pre>
<p>Any use of the JavaScript <code>throw</code> mechanism will raise an exception that
<em>must</em> be handled or the Node.js process will exit immediately.</p>
<p>With few exceptions, <em>Synchronous</em> APIs (any blocking method that does not
return a {Promise} nor accept a <code>callback</code> function, such as
<a href="fs.md#fsreadfilesyncpath-options"><code>fs.readFileSync</code></a>), will use <code>throw</code> to report errors.</p>
<p>Errors that occur within <em>Asynchronous APIs</em> may be reported in multiple ways:</p>
<ul>
<li>
<p>Some asynchronous methods returns a {Promise}, you should always take into
account that it might be rejected. See <a href="cli.md#--unhandled-rejectionsmode"><code>--unhandled-rejections</code></a> flag for
how the process will react to an unhandled promise rejection.</p>
<pre><code class="language-js">const fs = require('node:fs/promises');

(async () =&gt; {
  let data;
  try {
    data = await fs.readFile('a file that does not exist');
  } catch (err) {
    console.error('There was an error reading the file!', err);
    return;
  }
  // Otherwise handle the data
})();
</code></pre>
</li>
<li>
<p>Most asynchronous methods that accept a <code>callback</code> function will accept an
<code>Error</code> object passed as the first argument to that function. If that first
argument is not <code>null</code> and is an instance of <code>Error</code>, then an error occurred
that should be handled.</p>
<pre><code class="language-js">const fs = require('node:fs');
fs.readFile('a file that does not exist', (err, data) =&gt; {
  if (err) {
    console.error('There was an error reading the file!', err);
    return;
  }
  // Otherwise handle the data
});
</code></pre>
</li>
<li>
<p>When an asynchronous method is called on an object that is an
<a href="events.md#class-eventemitter"><code>EventEmitter</code></a>, errors can be routed to that object's <code>'error'</code> event.</p>
<pre><code class="language-js">const net = require('node:net');
const connection = net.connect('localhost');

// Adding an 'error' event handler to a stream:
connection.on('error', (err) =&gt; {
  // If the connection is reset by the server, or if it can't
  // connect at all, or on any sort of error encountered by
  // the connection, the error will be sent here.
  console.error(err);
});

connection.pipe(process.stdout);
</code></pre>
</li>
<li>
<p>A handful of typically asynchronous methods in the Node.js API may still
use the <code>throw</code> mechanism to raise exceptions that must be handled using
<code>try…catch</code>. There is no comprehensive list of such methods; please
refer to the documentation of each method to determine the appropriate
error handling mechanism required.</p>
</li>
</ul>
<p>The use of the <code>'error'</code> event mechanism is most common for <a href="stream.md">stream-based</a>
and <a href="events.md#class-eventemitter">event emitter-based</a> APIs, which themselves represent a series of
asynchronous operations over time (as opposed to a single operation that may
pass or fail).</p>
<p>For <em>all</em> <a href="events.md#class-eventemitter"><code>EventEmitter</code></a> objects, if an <code>'error'</code> event handler is not
provided, the error will be thrown, causing the Node.js process to report an
uncaught exception and crash unless either: a handler has been registered for
the <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a> event, or the deprecated <a href="domain.md"><code>node:domain</code></a>
module is used.</p>
<pre><code class="language-js">const EventEmitter = require('node:events');
const ee = new EventEmitter();

setImmediate(() =&gt; {
  // This will crash the process because no 'error' event
  // handler has been added.
  ee.emit('error', new Error('This will crash'));
});
</code></pre>
<p>Errors generated in this way <em>cannot</em> be intercepted using <code>try…catch</code> as
they are thrown <em>after</em> the calling code has already exited.</p>
<p>Developers must refer to the documentation for each method to determine
exactly how errors raised by those methods are propagated.</p>
<h2>Class: <code>Error</code></h2>
<p>A generic JavaScript {Error} object that does not denote any specific
circumstance of why the error occurred. <code>Error</code> objects capture a &quot;stack trace&quot;
detailing the point in the code at which the <code>Error</code> was instantiated, and may
provide a text description of the error.</p>
<p>All errors generated by Node.js, including all system and JavaScript errors,
will either be instances of, or inherit from, the <code>Error</code> class.</p>
<h3><code>new Error(message[, options])</code></h3>
<ul>
<li><code>message</code> {string}</li>
<li><code>options</code> {Object}
<ul>
<li><code>cause</code> {any} The error that caused the newly created error.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>Error</code> object and sets the <code>error.message</code> property to the
provided text message. If an object is passed as <code>message</code>, the text message
is generated by calling <code>String(message)</code>. If the <code>cause</code> option is provided,
it is assigned to the <code>error.cause</code> property. The <code>error.stack</code> property will
represent the point in the code at which <code>new Error()</code> was called. Stack traces
are dependent on <a href="https://v8.dev/docs/stack-trace-api">V8's stack trace API</a>. Stack traces extend only to either
(a) the beginning of <em>synchronous code execution</em>, or (b) the number of frames
given by the property <code>Error.stackTraceLimit</code>, whichever is smaller.</p>
<h3><code>Error.captureStackTrace(targetObject[, constructorOpt])</code></h3>
<ul>
<li><code>targetObject</code> {Object}</li>
<li><code>constructorOpt</code> {Function}</li>
</ul>
<p>Creates a <code>.stack</code> property on <code>targetObject</code>, which when accessed returns
a string representing the location in the code at which
<code>Error.captureStackTrace()</code> was called.</p>
<pre><code class="language-js">const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
</code></pre>
<p>The first line of the trace will be prefixed with
<code>${myObject.name}: ${myObject.message}</code>.</p>
<p>The optional <code>constructorOpt</code> argument accepts a function. If given, all frames
above <code>constructorOpt</code>, including <code>constructorOpt</code>, will be omitted from the
generated stack trace.</p>
<p>The <code>constructorOpt</code> argument is useful for hiding implementation
details of error generation from the user. For instance:</p>
<pre><code class="language-js">function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
</code></pre>
<h3><code>Error.stackTraceLimit</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The <code>Error.stackTraceLimit</code> property specifies the number of stack frames
collected by a stack trace (whether generated by <code>new Error().stack</code> or
<code>Error.captureStackTrace(obj)</code>).</p>
<p>The default value is <code>10</code> but may be set to any valid JavaScript number. Changes
will affect any stack trace captured <em>after</em> the value has been changed.</p>
<p>If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.</p>
<h3><code>error.cause</code></h3>
<ul>
<li>Type: {any}</li>
</ul>
<p>If present, the <code>error.cause</code> property is the underlying cause of the <code>Error</code>.
It is used when catching an error and throwing a new one with a different
message or code in order to still have access to the original error.</p>
<p>The <code>error.cause</code> property is typically set by calling
<code>new Error(message, { cause })</code>. It is not set by the constructor if the
<code>cause</code> option is not provided.</p>
<p>This property allows errors to be chained. When serializing <code>Error</code> objects,
<a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> recursively serializes <code>error.cause</code> if it is set.</p>
<pre><code class="language-js">const cause = new Error('The remote HTTP server responded with a 500 status');
const symptom = new Error('The message failed to send', { cause });

console.log(symptom);
// Prints:
//   Error: The message failed to send
//       at REPL2:1:17
//       at Script.runInThisContext (node:vm:130:12)
//       ... 7 lines matching cause stack trace ...
//       at [_line] [as _line] (node:internal/readline/interface:886:18) {
//     [cause]: Error: The remote HTTP server responded with a 500 status
//         at REPL1:1:15
//         at Script.runInThisContext (node:vm:130:12)
//         at REPLServer.defaultEval (node:repl:574:29)
//         at bound (node:domain:426:15)
//         at REPLServer.runBound [as eval] (node:domain:437:12)
//         at REPLServer.onLine (node:repl:902:10)
//         at REPLServer.emit (node:events:549:35)
//         at REPLServer.emit (node:domain:482:12)
//         at [_onLine] [as _onLine] (node:internal/readline/interface:425:12)
//         at [_line] [as _line] (node:internal/readline/interface:886:18)
</code></pre>
<h3><code>error.code</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>error.code</code> property is a string label that identifies the kind of error.
<code>error.code</code> is the most stable way to identify an error. It will only change
between major versions of Node.js. In contrast, <code>error.message</code> strings may
change between any versions of Node.js. See <a href="#nodejs-error-codes">Node.js error codes</a> for details
about specific codes.</p>
<h3><code>error.message</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>error.message</code> property is the string description of the error as set by
calling <code>new Error(message)</code>. The <code>message</code> passed to the constructor will also
appear in the first line of the stack trace of the <code>Error</code>, however changing
this property after the <code>Error</code> object is created <em>may not</em> change the first
line of the stack trace (for example, when <code>error.stack</code> is read before this
property is changed).</p>
<pre><code class="language-js">const err = new Error('The message');
console.error(err.message);
// Prints: The message
</code></pre>
<h3><code>error.stack</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>error.stack</code> property is a string describing the point in the code at which
the <code>Error</code> was instantiated.</p>
<pre><code class="language-console">Error: Things keep happening!
   at /home/gbusey/file.js:525:2
   at Frobnicator.refrobulate (/home/gbusey/business-logic.js:424:21)
   at Actor.&lt;anonymous&gt; (/home/gbusey/actors.js:400:8)
   at increaseSynergy (/home/gbusey/actors.js:701:6)
</code></pre>
<p>The first line is formatted as <code>&lt;error class name&gt;: &lt;error message&gt;</code>, and
is followed by a series of stack frames (each line beginning with &quot;at &quot;).
Each frame describes a call site within the code that lead to the error being
generated. V8 attempts to display a name for each function (by variable name,
function name, or object method name), but occasionally it will not be able to
find a suitable name. If V8 cannot determine a name for the function, only
location information will be displayed for that frame. Otherwise, the
determined function name will be displayed with location information appended
in parentheses.</p>
<p>Frames are only generated for JavaScript functions. If, for example, execution
synchronously passes through a C++ addon function called <code>cheetahify</code> which
itself calls a JavaScript function, the frame representing the <code>cheetahify</code> call
will not be present in the stack traces:</p>
<pre><code class="language-js">const cheetahify = require('./native-binding.node');

function makeFaster() {
  // `cheetahify()` *synchronously* calls speedy.
  cheetahify(function speedy() {
    throw new Error('oh no!');
  });
}

makeFaster();
// will throw:
//   /home/gbusey/file.js:6
//       throw new Error('oh no!');
//           ^
//   Error: oh no!
//       at speedy (/home/gbusey/file.js:6:11)
//       at makeFaster (/home/gbusey/file.js:5:3)
//       at Object.&lt;anonymous&gt; (/home/gbusey/file.js:10:1)
//       at Module._compile (module.js:456:26)
//       at Object.Module._extensions..js (module.js:474:10)
//       at Module.load (module.js:356:32)
//       at Function.Module._load (module.js:312:12)
//       at Function.Module.runMain (module.js:497:10)
//       at startup (node.js:119:16)
//       at node.js:906:3
</code></pre>
<p>The location information will be one of:</p>
<ul>
<li><code>native</code>, if the frame represents a call internal to V8 (as in <code>[].forEach</code>).</li>
<li><code>plain-filename.js:line:column</code>, if the frame represents a call internal
to Node.js.</li>
<li><code>/absolute/path/to/file.js:line:column</code>, if the frame represents a call in
a user program (using CommonJS module system), or its dependencies.</li>
<li><code>&lt;transport-protocol&gt;:///url/to/module/file.mjs:line:column</code>, if the frame
represents a call in a user program (using ES module system), or
its dependencies.</li>
</ul>
<p>The number of frames captured by the stack trace is bounded by the smaller of
<code>Error.stackTraceLimit</code> or the number of available frames on the current event
loop tick.</p>
<p><code>error.stack</code> is a getter/setter for a hidden internal property which is only
present on builtin <code>Error</code> objects (those for which <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError"><code>Error.isError</code></a> returns
true). If <code>error</code> is not a builtin error object, then the <code>error.stack</code> getter
will always return <code>undefined</code>, and the setter will do nothing. This can occur
if the accessor is manually invoked with a <code>this</code> value that is not a builtin
error object, such as a {Proxy}.</p>
<h2>Class: <code>AssertionError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Indicates the failure of an assertion. For details, see
<a href="assert.md#class-assertassertionerror"><code>Class: assert.AssertionError</code></a>.</p>
<h2>Class: <code>DOMException</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>The Web IDL {DOMException} class. These errors are thrown by web-platform APIs
in Node.js such as <a href="globals.md#fetch"><code>fetch()</code></a>, {AbortController}, {AbortSignal}, and Web
Streams. For details, see also <a href="globals.md#class-domexception"><code>Class: DOMException</code></a> on the Globals page.</p>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMException/name"><code>domException.name</code></a> property identifies the type of the exception (for
example, <code>'AbortError'</code>). Unlike most errors in Node.js, the
<a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMException/code"><code>domException.code</code></a> property is a number that corresponds to a
<a href="https://webidl.spec.whatwg.org/#dfn-error-names-table">legacy error code name</a> (for example, <code>20</code> for
<code>ABORT_ERR</code>).</p>
<p>Node.js-specific APIs that support {AbortSignal} (such as
<a href="events.md#eventsonceemitter-name-options"><code>events.once()</code></a>) throw a Node.js <code>AbortError</code> (a native {errors.Error} with
<code>name</code> of <code>'AbortError'</code> and <code>code</code> of <a href="#abort_err"><code>'ABORT_ERR'</code></a>) rather than a
{DOMException}. To identify abort errors in either case, checking
<code>err?.name === 'AbortError'</code> is sufficient.</p>
<p>See also <a href="#abort_err"><code>ABORT_ERR</code></a>.</p>
<h2>Class: <code>RangeError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Indicates that a provided argument was not within the set or range of
acceptable values for a function; whether that is a numeric range, or
outside the set of options for a given function parameter.</p>
<pre><code class="language-js">require('node:net').connect(-1);
// Throws &quot;RangeError: &quot;port&quot; option should be &gt;= 0 and &lt; 65536: -1&quot;
</code></pre>
<p>Node.js will generate and throw <code>RangeError</code> instances <em>immediately</em> as a form
of argument validation.</p>
<h2>Class: <code>ReferenceError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Indicates that an attempt is being made to access a variable that is not
defined. Such errors commonly indicate typos in code, or an otherwise broken
program.</p>
<p>While client code may generate and propagate these errors, in practice, only V8
will do so.</p>
<pre><code class="language-js">doesNotExist;
// Throws ReferenceError, doesNotExist is not a variable in this program.
</code></pre>
<p>Unless an application is dynamically generating and running code,
<code>ReferenceError</code> instances indicate a bug in the code or its dependencies.</p>
<h2>Class: <code>SyntaxError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Indicates that a program is not valid JavaScript. These errors may only be
generated and propagated as a result of code evaluation. Code evaluation may
happen as a result of <code>eval</code>, <code>Function</code>, <code>require</code>, or <a href="vm.md">vm</a>. These errors
are almost always indicative of a broken program.</p>
<pre><code class="language-js">try {
  require('node:vm').runInThisContext('binary ! isNotOk');
} catch (err) {
  // 'err' will be a SyntaxError.
}
</code></pre>
<p><code>SyntaxError</code> instances are unrecoverable in the context that created them –
they may only be caught by other contexts.</p>
<h2>Class: <code>SystemError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Node.js generates system errors when exceptions occur within its runtime
environment. These usually occur when an application violates an operating
system constraint. For example, a system error will occur if an application
attempts to read a file that does not exist.</p>
<ul>
<li><code>address</code> {string} If present, the address to which a network connection
failed</li>
<li><code>code</code> {string} The string error code</li>
<li><code>dest</code> {string} If present, the file path destination when reporting a file
system error</li>
<li><code>errno</code> {number} The system-provided error number</li>
<li><code>info</code> {Object} If present, extra details about the error condition</li>
<li><code>message</code> {string} A system-provided human-readable description of the error</li>
<li><code>path</code> {string} If present, the file path when reporting a file system error</li>
<li><code>port</code> {number} If present, the network connection port that is not available</li>
<li><code>syscall</code> {string} The name of the system call that triggered the error</li>
</ul>
<h3><code>error.address</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>If present, <code>error.address</code> is a string describing the address to which a
network connection failed.</p>
<h3><code>error.code</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>error.code</code> property is a string representing the error code.</p>
<h3><code>error.dest</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>If present, <code>error.dest</code> is the file path destination when reporting a file
system error.</p>
<h3><code>error.errno</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The <code>error.errno</code> property is a negative number which corresponds
to the error code defined in <a href="https://docs.libuv.org/en/v1.x/errors.html"><code>libuv Error handling</code></a>.</p>
<p>On Windows the error number provided by the system will be normalized by libuv.</p>
<p>To get the string representation of the error code, use
<a href="util.md#utilgetsystemerrornameerr"><code>util.getSystemErrorName(error.errno)</code></a>.</p>
<h3><code>error.info</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>If present, <code>error.info</code> is an object with details about the error condition.</p>
<h3><code>error.message</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p><code>error.message</code> is a system-provided human-readable description of the error.</p>
<h3><code>error.path</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>If present, <code>error.path</code> is a string containing a relevant invalid pathname.</p>
<h3><code>error.port</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>If present, <code>error.port</code> is the network connection port that is not available.</p>
<h3><code>error.syscall</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>error.syscall</code> property is a string describing the <a href="https://man7.org/linux/man-pages/man2/syscalls.2.html">syscall</a> that failed.</p>
<h3>Common system errors</h3>
<p>This is a list of system errors commonly-encountered when writing a Node.js
program. For a comprehensive list, see the <a href="https://man7.org/linux/man-pages/man3/errno.3.html"><code>errno</code>(3) man page</a>.</p>
<ul>
<li>
<p><code>EACCES</code> (Permission denied): An attempt was made to access a file in a way
forbidden by its file access permissions.</p>
</li>
<li>
<p><code>EADDRINUSE</code> (Address already in use): An attempt to bind a server
(<a href="net.md"><code>net</code></a>, <a href="http.md"><code>http</code></a>, or <a href="https.md"><code>https</code></a>) to a local address failed due to
another server on the local system already occupying that address.</p>
</li>
<li>
<p><code>ECONNREFUSED</code> (Connection refused): No connection could be made because the
target machine actively refused it. This usually results from trying to
connect to a service that is inactive on the foreign host.</p>
</li>
<li>
<p><code>ECONNRESET</code> (Connection reset by peer): A connection was forcibly closed by
a peer. This normally results from a loss of the connection on the remote
socket due to a timeout or reboot. Commonly encountered via the <a href="http.md"><code>http</code></a>
and <a href="net.md"><code>net</code></a> modules.</p>
</li>
<li>
<p><code>EEXIST</code> (File exists): An existing file was the target of an operation that
required that the target not exist.</p>
</li>
<li>
<p><code>EISDIR</code> (Is a directory): An operation expected a file, but the given
pathname was a directory.</p>
</li>
<li>
<p><code>EMFILE</code> (Too many open files in system): Maximum number of
<a href="https://en.wikipedia.org/wiki/File_descriptor">file descriptors</a> allowable on the system has been reached, and
requests for another descriptor cannot be fulfilled until at least one
has been closed. This is encountered when opening many files at once in
parallel, especially on systems (in particular, macOS) where there is a low
file descriptor limit for processes. To remedy a low limit, run
<code>ulimit -n 2048</code> in the same shell that will run the Node.js process.</p>
</li>
<li>
<p><code>ENOENT</code> (No such file or directory): Commonly raised by <a href="fs.md"><code>fs</code></a> operations
to indicate that a component of the specified pathname does not exist. No
entity (file or directory) could be found by the given path.</p>
</li>
<li>
<p><code>ENOTDIR</code> (Not a directory): A component of the given pathname existed, but
was not a directory as expected. Commonly raised by <a href="fs.md#fsreaddirpath-options-callback"><code>fs.readdir</code></a>.</p>
</li>
<li>
<p><code>ENOTEMPTY</code> (Directory not empty): A directory with entries was the target
of an operation that requires an empty directory, usually <a href="fs.md#fsunlinkpath-callback"><code>fs.unlink</code></a>.</p>
</li>
<li>
<p><code>ENOTFOUND</code> (DNS lookup failed): Indicates a DNS failure of either
<code>EAI_NODATA</code> or <code>EAI_NONAME</code>. This is not a standard POSIX error.</p>
</li>
<li>
<p><code>EPERM</code> (Operation not permitted): An attempt was made to perform an
operation that requires elevated privileges.</p>
</li>
<li>
<p><code>EPIPE</code> (Broken pipe): A write on a pipe, socket, or FIFO for which there is
no process to read the data. Commonly encountered at the <a href="net.md"><code>net</code></a> and
<a href="http.md"><code>http</code></a> layers, indicative that the remote side of the stream being
written to has been closed.</p>
</li>
<li>
<p><code>ETIMEDOUT</code> (Operation timed out): A connect or send request failed because
the connected party did not properly respond after a period of time. Usually
encountered by <a href="http.md"><code>http</code></a> or <a href="net.md"><code>net</code></a>. Often a sign that a <code>socket.end()</code>
was not properly called.</p>
</li>
</ul>
<h2>Class: <code>TypeError</code></h2>
<ul>
<li>Extends {errors.Error}</li>
</ul>
<p>Indicates that a provided argument is not an allowable type. For example,
passing a function to a parameter which expects a string would be a <code>TypeError</code>.</p>
<pre><code class="language-js">require('node:url').parse(() =&gt; { });
// Throws TypeError, since it expected a string.
</code></pre>
<p>Node.js will generate and throw <code>TypeError</code> instances <em>immediately</em> as a form
of argument validation.</p>
<h2>Exceptions vs. errors</h2>
<p>A JavaScript exception is a value that is thrown as a result of an invalid
operation or as the target of a <code>throw</code> statement. While it is not required
that these values are instances of <code>Error</code> or classes which inherit from
<code>Error</code>, all exceptions thrown by Node.js or the JavaScript runtime <em>will</em> be
instances of <code>Error</code>.</p>
<p>Some exceptions are <em>unrecoverable</em> at the JavaScript layer. Such exceptions
will <em>always</em> cause the Node.js process to crash. Examples include <code>assert()</code>
checks or <code>abort()</code> calls in the C++ layer.</p>
<h2>OpenSSL errors</h2>
<p>Errors originating in <code>crypto</code> or <code>tls</code> are of class <code>Error</code>, and in addition to
the standard <code>.code</code> and <code>.message</code> properties, may have some additional
OpenSSL-specific properties.</p>
<h3><code>error.opensslErrorStack</code></h3>
<p>An array of errors that can give context to where in the OpenSSL library an
error originates from.</p>
<h3><code>error.function</code></h3>
<p>The OpenSSL function the error originates in.</p>
<h3><code>error.library</code></h3>
<p>The OpenSSL library the error originates in.</p>
<h3><code>error.reason</code></h3>
<p>A human-readable string describing the reason for the error.</p>
<p>&lt;a id=&quot;nodejs-error-codes&quot;&gt;&lt;/a&gt;</p>
<h2>Node.js error codes</h2>
<p>&lt;a id=&quot;ABORT_ERR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ABORT_ERR</code></h3>
<p>Used when an operation has been aborted (typically using an <code>AbortController</code>).</p>
<p>APIs <em>not</em> using <code>AbortSignal</code>s typically do not raise an error with this code.</p>
<p>This code does not use the regular <code>ERR_*</code> convention Node.js errors use in
order to be compatible with the web platform's <code>AbortError</code>.</p>
<p>&lt;a id=&quot;ERR_ACCESS_DENIED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ACCESS_DENIED</code></h3>
<p>A special type of error that is triggered whenever Node.js tries to get access
to a resource restricted by the <a href="permissions.md#permission-model">Permission Model</a>.</p>
<p>&lt;a id=&quot;ERR_AMBIGUOUS_ARGUMENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_AMBIGUOUS_ARGUMENT</code></h3>
<p>A function argument is being used in a way that suggests that the function
signature may be misunderstood. This is thrown by the <code>node:assert</code> module when
the <code>message</code> parameter in <code>assert.throws(block, message)</code> matches the error
message thrown by <code>block</code> because that usage suggests that the user believes
<code>message</code> is the expected message rather than the message the <code>AssertionError</code>
will display if <code>block</code> does not throw.</p>
<p>&lt;a id=&quot;ERR_ARG_NOT_ITERABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ARG_NOT_ITERABLE</code></h3>
<p>An iterable argument (i.e. a value that works with <code>for...of</code> loops) was
required, but not provided to a Node.js API.</p>
<p>&lt;a id=&quot;ERR_ASSERTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ASSERTION</code></h3>
<p>A special type of error that can be triggered whenever Node.js detects an
exceptional logic violation that should never occur. These are raised typically
by the <code>node:assert</code> module.</p>
<p>&lt;a id=&quot;ERR_ASYNC_CALLBACK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ASYNC_CALLBACK</code></h3>
<p>An attempt was made to register something that is not a function as an
<code>AsyncHooks</code> callback.</p>
<p>&lt;a id=&quot;ERR_ASYNC_LOADER_REQUEST_NEVER_SETTLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ASYNC_LOADER_REQUEST_NEVER_SETTLED</code></h3>
<p>An operation related to module loading is customized by an asynchronous loader
hook that never settled the promise before the loader thread exits.</p>
<p>&lt;a id=&quot;ERR_ASYNC_RESOURCE_DOMAIN_REMOVED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ASYNC_RESOURCE_DOMAIN_REMOVED</code></h3>
<p>The <code>domain</code> property on <code>AsyncResource</code> has been removed. The domain module
now uses <code>AsyncLocalStorage</code> for context propagation instead of <code>async_hooks</code>.
Use <code>AsyncLocalStorage</code> instead for context propagation.</p>
<p>&lt;a id=&quot;ERR_ASYNC_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ASYNC_TYPE</code></h3>
<p>The type of an asynchronous resource was invalid. Users are also able
to define their own types if using the public embedder API.</p>
<p>&lt;a id=&quot;ERR_BROTLI_COMPRESSION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_BROTLI_COMPRESSION_FAILED</code></h3>
<p>Data passed to a Brotli stream was not successfully compressed.</p>
<p>&lt;a id=&quot;ERR_BROTLI_INVALID_PARAM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_BROTLI_INVALID_PARAM</code></h3>
<p>An invalid parameter key was passed during construction of a Brotli stream.</p>
<p>&lt;a id=&quot;ERR_BUFFER_CONTEXT_NOT_AVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_BUFFER_CONTEXT_NOT_AVAILABLE</code></h3>
<p>An attempt was made to create a Node.js <code>Buffer</code> instance from addon or embedder
code, while in a JS engine Context that is not associated with a Node.js
instance. The data passed to the <code>Buffer</code> method will have been released
by the time the method returns.</p>
<p>When encountering this error, a possible alternative to creating a <code>Buffer</code>
instance is to create a normal <code>Uint8Array</code>, which only differs in the
prototype of the resulting object. <code>Uint8Array</code>s are generally accepted in all
Node.js core APIs where <code>Buffer</code>s are; they are available in all Contexts.</p>
<p>&lt;a id=&quot;ERR_BUFFER_OUT_OF_BOUNDS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_BUFFER_OUT_OF_BOUNDS</code></h3>
<p>An operation outside the bounds of a <code>Buffer</code> was attempted.</p>
<p>&lt;a id=&quot;ERR_BUFFER_TOO_LARGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_BUFFER_TOO_LARGE</code></h3>
<p>An attempt has been made to create a <code>Buffer</code> larger than the maximum allowed
size.</p>
<p>&lt;a id=&quot;ERR_CHILD_CLOSED_BEFORE_REPLY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CHILD_CLOSED_BEFORE_REPLY</code></h3>
<p>A child process was closed before the parent received a reply.</p>
<p>&lt;a id=&quot;ERR_CHILD_PROCESS_IPC_REQUIRED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CHILD_PROCESS_IPC_REQUIRED</code></h3>
<p>Used when a child process is being forked without specifying an IPC channel.</p>
<p>&lt;a id=&quot;ERR_CHILD_PROCESS_STDIO_MAXBUFFER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CHILD_PROCESS_STDIO_MAXBUFFER</code></h3>
<p>Used when the main process is trying to read data from the child process's
STDERR/STDOUT, and the data's length is longer than the <code>maxBuffer</code> option.</p>
<p>&lt;a id=&quot;ERR_CLOSED_MESSAGE_PORT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CLOSED_MESSAGE_PORT</code></h3>
<p>There was an attempt to use a <code>MessagePort</code> instance in a closed
state, usually after <code>.close()</code> has been called.</p>
<p>&lt;a id=&quot;ERR_CONSOLE_WRITABLE_STREAM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CONSOLE_WRITABLE_STREAM</code></h3>
<p><code>Console</code> was instantiated without <code>stdout</code> stream, or <code>Console</code> has a
non-writable <code>stdout</code> or <code>stderr</code> stream.</p>
<p>&lt;a id=&quot;ERR_CONSTRUCT_CALL_INVALID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CONSTRUCT_CALL_INVALID</code></h3>
<p>A class constructor was called that is not callable.</p>
<p>&lt;a id=&quot;ERR_CONSTRUCT_CALL_REQUIRED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CONSTRUCT_CALL_REQUIRED</code></h3>
<p>A constructor for a class was called without <code>new</code>.</p>
<p>&lt;a id=&quot;ERR_CONTEXT_NOT_INITIALIZED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CONTEXT_NOT_INITIALIZED</code></h3>
<p>The vm context passed into the API is not yet initialized. This could happen
when an error occurs (and is caught) during the creation of the
context, for example, when the allocation fails or the maximum call stack
size is reached when the context is created.</p>
<p>&lt;a id=&quot;ERR_CPU_PROFILE_ALREADY_STARTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CPU_PROFILE_ALREADY_STARTED</code></h3>
<p>The CPU profile with the given name is already started.</p>
<p>&lt;a id=&quot;ERR_CPU_PROFILE_NOT_STARTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CPU_PROFILE_NOT_STARTED</code></h3>
<p>The CPU profile with the given name is not started.</p>
<p>&lt;a id=&quot;ERR_CPU_PROFILE_TOO_MANY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CPU_PROFILE_TOO_MANY</code></h3>
<p>There are too many CPU profiles being collected.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_ARGON2_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_ARGON2_NOT_SUPPORTED</code></h3>
<p>Argon2 is not supported by the current version of OpenSSL being used.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_CUSTOM_ENGINE_NOT_SUPPORTED</code></h3>
<p>An OpenSSL engine was requested (for example, through the <code>clientCertEngine</code> or
<code>privateKeyEngine</code> TLS options) that is not supported by the version of OpenSSL
being used, likely due to the compile-time flag <code>OPENSSL_NO_ENGINE</code>.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_ECDH_INVALID_FORMAT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_ECDH_INVALID_FORMAT</code></h3>
<p>An invalid value for the <code>format</code> argument was passed to the <code>crypto.ECDH()</code>
class <code>getPublicKey()</code> method.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY</code></h3>
<p>An invalid value for the <code>key</code> argument has been passed to the
<code>crypto.ECDH()</code> class <code>computeSecret()</code> method. It means that the public
key lies outside of the elliptic curve.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_ENGINE_UNKNOWN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_ENGINE_UNKNOWN</code></h3>
<p>An invalid crypto engine identifier was passed to
<a href="crypto.md#cryptosetengineengine-flags"><code>require('node:crypto').setEngine()</code></a>.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_FIPS_FORCED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_FIPS_FORCED</code></h3>
<p>The <a href="cli.md#--force-fips"><code>--force-fips</code></a> command-line argument was used but there was an attempt
to enable or disable FIPS mode in the <code>node:crypto</code> module.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_FIPS_UNAVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_FIPS_UNAVAILABLE</code></h3>
<p>An attempt was made to enable or disable FIPS mode, but FIPS mode was not
available.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_HASH_FINALIZED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_HASH_FINALIZED</code></h3>
<p><a href="crypto.md#hashdigestencoding"><code>hash.digest()</code></a> was called multiple times. The <code>hash.digest()</code> method must
be called no more than one time per instance of a <code>Hash</code> object.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_HASH_UPDATE_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_HASH_UPDATE_FAILED</code></h3>
<p><a href="crypto.md#hashupdatedata-inputencoding"><code>hash.update()</code></a> failed for an unspecified reason.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INCOMPATIBLE_KEY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INCOMPATIBLE_KEY</code></h3>
<p>The given crypto keys are incompatible with the attempted operation.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INCOMPATIBLE_KEY_OPTIONS</code></h3>
<p>The selected public or private key encoding is incompatible with other options.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INITIALIZATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INITIALIZATION_FAILED</code></h3>
<p>Initialization of the crypto subsystem failed.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_AUTH_TAG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_AUTH_TAG</code></h3>
<p>An invalid authentication tag was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_COUNTER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_COUNTER</code></h3>
<p>An invalid counter was provided for a counter-mode cipher.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_CURVE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_CURVE</code></h3>
<p>An invalid elliptic-curve was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_DIGEST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_DIGEST</code></h3>
<p>An invalid <a href="crypto.md#cryptogethashes">crypto digest algorithm</a> was specified.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_IV&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_IV</code></h3>
<p>An invalid initialization vector was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_JWK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_JWK</code></h3>
<p>An invalid JSON Web Key was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_KEYLEN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_KEYLEN</code></h3>
<p>An invalid key length was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_KEYPAIR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_KEYPAIR</code></h3>
<p>An invalid key pair was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_KEYTYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_KEYTYPE</code></h3>
<p>An invalid key type was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_KEY_OBJECT_TYPE</code></h3>
<p>The given crypto key object's type is invalid for the attempted operation.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_MAC&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_MAC</code></h3>
<p>An invalid MAC algorithm was specified.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_MESSAGELEN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_MESSAGELEN</code></h3>
<p>An invalid message length was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_SCRYPT_PARAMS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_SCRYPT_PARAMS</code></h3>
<p>One or more <a href="crypto.md#cryptoscryptpassword-salt-keylen-options-callback"><code>crypto.scrypt()</code></a> or <a href="crypto.md#cryptoscryptsyncpassword-salt-keylen-options"><code>crypto.scryptSync()</code></a> parameters are
outside their legal range.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_STATE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_STATE</code></h3>
<p>A crypto method was used on an object that was in an invalid state. For
instance, calling <a href="crypto.md#ciphergetauthtag"><code>cipher.getAuthTag()</code></a> before calling <code>cipher.final()</code>.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_INVALID_TAG_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_INVALID_TAG_LENGTH</code></h3>
<p>An invalid authentication tag length was provided.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_JOB_INIT_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_JOB_INIT_FAILED</code></h3>
<p>Initialization of an asynchronous crypto operation failed.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_JWK_UNSUPPORTED_CURVE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_JWK_UNSUPPORTED_CURVE</code></h3>
<p>Key's Elliptic Curve is not registered for use in the
<a href="https://www.iana.org/assignments/jose/jose.xhtml#web-key-elliptic-curve">JSON Web Key Elliptic Curve Registry</a>.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_JWK_UNSUPPORTED_KEY_TYPE</code></h3>
<p>Key's Asymmetric Key Type is not registered for use in the
<a href="https://www.iana.org/assignments/jose/jose.xhtml#web-key-types">JSON Web Key Types Registry</a>.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_KEM_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_KEM_NOT_SUPPORTED</code></h3>
<p>Attempted to use KEM operations while Node.js was not compiled with
OpenSSL with KEM support.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_MAC_FINALIZED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_MAC_FINALIZED</code></h3>
<p>An operation was attempted on a <code>Mac</code> object after finalization was attempted
or an underlying MAC update failed.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_MAC_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_MAC_NOT_SUPPORTED</code></h3>
<p>Node.js was built without support for the OpenSSL <code>EVP_MAC</code> API.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_MAC_UPDATE_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_MAC_UPDATE_FAILED</code></h3>
<p><a href="crypto.md#macupdatedata-inputencoding"><code>mac.update()</code></a> failed for an unspecified reason.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_OPERATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_OPERATION_FAILED</code></h3>
<p>A crypto operation failed for an otherwise unspecified reason.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_PBKDF2_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_PBKDF2_ERROR</code></h3>
<p>The PBKDF2 algorithm failed for unspecified reasons. OpenSSL does not provide
more details and therefore neither does Node.js.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_SCRYPT_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_SCRYPT_NOT_SUPPORTED</code></h3>
<p>Node.js was compiled without <code>scrypt</code> support. Not possible with the official
release binaries but can happen with custom builds, including distro builds.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_SIGN_KEY_REQUIRED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_SIGN_KEY_REQUIRED</code></h3>
<p>A signing <code>key</code> was not provided to the <a href="crypto.md#signsignprivatekey-outputencoding"><code>sign.sign()</code></a> method.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_TIMING_SAFE_EQUAL_LENGTH</code></h3>
<p><a href="crypto.md#cryptotimingsafeequala-b"><code>crypto.timingSafeEqual()</code></a> was called with <code>Buffer</code>, <code>TypedArray</code>, or
<code>DataView</code> arguments of different lengths.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_UNKNOWN_CIPHER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_UNKNOWN_CIPHER</code></h3>
<p>An unknown cipher was specified.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_UNKNOWN_DH_GROUP&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_UNKNOWN_DH_GROUP</code></h3>
<p>An unknown Diffie-Hellman group name was given. See
<a href="crypto.md#cryptogetdiffiehellmangroupname"><code>crypto.getDiffieHellman()</code></a> for a list of valid group names.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_UNSUPPORTED_OPERATION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_UNSUPPORTED_OPERATION</code></h3>
<p>An attempt to invoke an unsupported crypto operation was made.</p>
<p>&lt;a id=&quot;ERR_DEBUGGER_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DEBUGGER_ERROR</code></h3>
<p>An error occurred with the <a href="debugger.md">debugger</a>.</p>
<p>&lt;a id=&quot;ERR_DEBUGGER_STARTUP_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DEBUGGER_STARTUP_ERROR</code></h3>
<p>The <a href="debugger.md">debugger</a> timed out waiting for the required host/port to be free.</p>
<p>&lt;a id=&quot;ERR_DIR_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DIR_CLOSED</code></h3>
<p>The <a href="fs.md#class-fsdir"><code>fs.Dir</code></a> was previously closed.</p>
<p>&lt;a id=&quot;ERR_DIR_CONCURRENT_OPERATION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DIR_CONCURRENT_OPERATION</code></h3>
<p>A synchronous read or close call was attempted on an <a href="fs.md#class-fsdir"><code>fs.Dir</code></a> which has
ongoing asynchronous operations.</p>
<p>&lt;a id=&quot;ERR_DLOPEN_DISABLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DLOPEN_DISABLED</code></h3>
<p>Loading native addons has been disabled using <a href="cli.md#--no-addons"><code>--no-addons</code></a>.</p>
<p>&lt;a id=&quot;ERR_DLOPEN_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DLOPEN_FAILED</code></h3>
<p>A call to <code>process.dlopen()</code> failed.</p>
<p>&lt;a id=&quot;ERR_DNS_SET_SERVERS_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DNS_SET_SERVERS_FAILED</code></h3>
<p><code>c-ares</code> failed to set the DNS server.</p>
<p>&lt;a id=&quot;ERR_DOMAIN_CALLBACK_NOT_AVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DOMAIN_CALLBACK_NOT_AVAILABLE</code></h3>
<p>The <code>node:domain</code> module was not usable since it could not establish the
required error handling hooks, because
<a href="process.md#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a> had been called at an
earlier point in time.</p>
<p>&lt;a id=&quot;ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DOMAIN_CANNOT_SET_UNCAUGHT_EXCEPTION_CAPTURE</code></h3>
<p><a href="process.md#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a> could not be called
because the <code>node:domain</code> module has been loaded at an earlier point in time.</p>
<p>The stack trace is extended to include the point in time at which the
<code>node:domain</code> module had been loaded.</p>
<p>&lt;a id=&quot;ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_DUPLICATE_STARTUP_SNAPSHOT_MAIN_FUNCTION</code></h3>
<p><a href="v8.md#v8startupsnapshotsetdeserializemainfunctioncallback-data"><code>v8.startupSnapshot.setDeserializeMainFunction()</code></a> could not be called
because it had already been called before.</p>
<p>&lt;a id=&quot;ERR_ENCODING_INVALID_ENCODED_DATA&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ENCODING_INVALID_ENCODED_DATA</code></h3>
<p>Data provided to <code>TextDecoder()</code> API was invalid according to the encoding
provided.</p>
<p>&lt;a id=&quot;ERR_ENCODING_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ENCODING_NOT_SUPPORTED</code></h3>
<p>Encoding provided to <code>TextDecoder()</code> API was not one of the
<a href="util.md#whatwg-supported-encodings">WHATWG Supported Encodings</a>.</p>
<p>&lt;a id=&quot;ERR_EVAL_ESM_CANNOT_PRINT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_EVAL_ESM_CANNOT_PRINT</code></h3>
<p><code>--print</code> cannot be used with ESM input.</p>
<p>&lt;a id=&quot;ERR_EVENT_RECURSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_EVENT_RECURSION</code></h3>
<p>Thrown when an attempt is made to recursively dispatch an event on <code>EventTarget</code>.</p>
<p>&lt;a id=&quot;ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_EXECUTION_ENVIRONMENT_NOT_AVAILABLE</code></h3>
<p>The JS execution context is not associated with a Node.js environment.
This may occur when Node.js is used as an embedded library and some hooks
for the JS engine are not set up properly.</p>
<p>&lt;a id=&quot;ERR_FALSY_VALUE_REJECTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FALSY_VALUE_REJECTION</code></h3>
<p>A <code>Promise</code> that was callbackified via <code>util.callbackify()</code> was rejected with a
falsy value.</p>
<p>&lt;a id=&quot;ERR_FEATURE_UNAVAILABLE_ON_PLATFORM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FEATURE_UNAVAILABLE_ON_PLATFORM</code></h3>
<p>Used when a feature that is not available
to the current platform which is running Node.js is used.</p>
<p>&lt;a id=&quot;ERR_FFI_CALL_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FFI_CALL_FAILED</code></h3>
<p>A low-level FFI call failed.</p>
<p>&lt;a id=&quot;ERR_FFI_INVALID_POINTER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FFI_INVALID_POINTER</code></h3>
<p>An invalid pointer was passed to an FFI operation.</p>
<p>&lt;a id=&quot;ERR_FFI_LIBRARY_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FFI_LIBRARY_CLOSED</code></h3>
<p>An operation was attempted on an FFI dynamic library after it was closed.</p>
<p>&lt;a id=&quot;ERR_FS_CP_DIR_TO_NON_DIR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_DIR_TO_NON_DIR</code></h3>
<p>An attempt was made to copy a directory to a non-directory (file, symlink,
etc.) using <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_EEXIST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_EEXIST</code></h3>
<p>An attempt was made to copy over a file that already existed with
<a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>, with the <code>force</code> and <code>errorOnExist</code> set to <code>true</code>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_EINVAL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_EINVAL</code></h3>
<p>When using <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>, <code>src</code> or <code>dest</code> pointed to an invalid path.</p>
<p>&lt;a id=&quot;ERR_FS_CP_FIFO_PIPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_FIFO_PIPE</code></h3>
<p>An attempt was made to copy a named pipe with <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_NON_DIR_TO_DIR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_NON_DIR_TO_DIR</code></h3>
<p>An attempt was made to copy a non-directory (file, symlink, etc.) to a directory
using <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_SOCKET&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_SOCKET</code></h3>
<p>An attempt was made to copy to a socket with <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_SYMLINK_TO_SUBDIRECTORY</code></h3>
<p>When using <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>, a symlink in <code>dest</code> pointed to a subdirectory
of <code>src</code>.</p>
<p>&lt;a id=&quot;ERR_FS_CP_UNKNOWN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_CP_UNKNOWN</code></h3>
<p>An attempt was made to copy to an unknown file type with <a href="fs.md#fscpsrc-dest-options-callback"><code>fs.cp()</code></a>.</p>
<p>&lt;a id=&quot;ERR_FS_EISDIR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_EISDIR</code></h3>
<p>Path is a directory.</p>
<p>&lt;a id=&quot;ERR_FS_FILE_TOO_LARGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_FILE_TOO_LARGE</code></h3>
<p>An attempt was made to read a file larger than the supported 2 GiB limit for
<code>fs.readFile()</code>. This is not a limitation of <code>Buffer</code>, but an internal I/O constraint.
For handling larger files, consider using <code>fs.createReadStream()</code> to read the
file in chunks.</p>
<p>&lt;a id=&quot;ERR_FS_WATCH_QUEUE_OVERFLOW&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_WATCH_QUEUE_OVERFLOW</code></h3>
<p>The number of file system events queued without being handled exceeded the size specified in
<code>maxQueue</code> in <code>fs.watch()</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_ALTSVC_INVALID_ORIGIN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_ALTSVC_INVALID_ORIGIN</code></h3>
<p>HTTP/2 ALTSVC frames require a valid origin.</p>
<p>&lt;a id=&quot;ERR_HTTP2_ALTSVC_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_ALTSVC_LENGTH</code></h3>
<p>HTTP/2 ALTSVC frames are limited to a maximum of 16,382 payload bytes.</p>
<p>&lt;a id=&quot;ERR_HTTP2_CONNECT_AUTHORITY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_CONNECT_AUTHORITY</code></h3>
<p>For HTTP/2 requests using the <code>CONNECT</code> method, the <code>:authority</code> pseudo-header
is required.</p>
<p>&lt;a id=&quot;ERR_HTTP2_CONNECT_PATH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_CONNECT_PATH</code></h3>
<p>For HTTP/2 requests using the <code>CONNECT</code> method, the <code>:path</code> pseudo-header is
forbidden.</p>
<p>&lt;a id=&quot;ERR_HTTP2_CONNECT_SCHEME&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_CONNECT_SCHEME</code></h3>
<p>For HTTP/2 requests using the <code>CONNECT</code> method, the <code>:scheme</code> pseudo-header is
forbidden.</p>
<p>&lt;a id=&quot;ERR_HTTP2_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_ERROR</code></h3>
<p>A non-specific HTTP/2 error has occurred.</p>
<p>&lt;a id=&quot;ERR_HTTP2_GOAWAY_SESSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_GOAWAY_SESSION</code></h3>
<p>New HTTP/2 Streams may not be opened after the <code>Http2Session</code> has received a
<code>GOAWAY</code> frame from the connected peer.</p>
<p>&lt;a id=&quot;ERR_HTTP2_HEADERS_AFTER_RESPOND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_HEADERS_AFTER_RESPOND</code></h3>
<p>Additional headers were specified after an HTTP/2 response was initiated.</p>
<p>&lt;a id=&quot;ERR_HTTP2_HEADERS_SENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_HEADERS_SENT</code></h3>
<p>An attempt was made to send multiple response headers.</p>
<p>&lt;a id=&quot;ERR_HTTP2_HEADER_SINGLE_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_HEADER_SINGLE_VALUE</code></h3>
<p>Multiple values were provided for an HTTP/2 header field that was required to
have only a single value.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INFO_STATUS_NOT_ALLOWED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INFO_STATUS_NOT_ALLOWED</code></h3>
<p>Informational HTTP status codes (<code>1xx</code>) may not be set as the response status
code on HTTP/2 responses.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_CONNECTION_HEADERS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_CONNECTION_HEADERS</code></h3>
<p>HTTP/1 connection specific headers are forbidden to be used in HTTP/2
requests and responses.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_HEADER_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_HEADER_VALUE</code></h3>
<p>An invalid HTTP/2 header value was specified.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_INFO_STATUS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_INFO_STATUS</code></h3>
<p>An invalid HTTP informational status code has been specified. Informational
status codes must be an integer between <code>100</code> and <code>199</code> (inclusive).</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_ORIGIN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_ORIGIN</code></h3>
<p>HTTP/2 <code>ORIGIN</code> frames require a valid origin.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH</code></h3>
<p>Input <code>Buffer</code> and <code>Uint8Array</code> instances passed to the
<code>http2.getUnpackedSettings()</code> API must have a length that is a multiple of
six.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_PSEUDOHEADER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_PSEUDOHEADER</code></h3>
<p>Only valid HTTP/2 pseudoheaders (<code>:status</code>, <code>:path</code>, <code>:authority</code>, <code>:scheme</code>,
and <code>:method</code>) may be used.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_SESSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_SESSION</code></h3>
<p>An action was performed on an <code>Http2Session</code> object that had already been
destroyed.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_SETTING_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_SETTING_VALUE</code></h3>
<p>An invalid value has been specified for an HTTP/2 setting.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INVALID_STREAM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INVALID_STREAM</code></h3>
<p>An operation was performed on a stream that had already been destroyed.</p>
<p>&lt;a id=&quot;ERR_HTTP2_MAX_PENDING_SETTINGS_ACK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_MAX_PENDING_SETTINGS_ACK</code></h3>
<p>Whenever an HTTP/2 <code>SETTINGS</code> frame is sent to a connected peer, the peer is
required to send an acknowledgment that it has received and applied the new
<code>SETTINGS</code>. By default, a maximum number of unacknowledged <code>SETTINGS</code> frames may
be sent at any given time. This error code is used when that limit has been
reached.</p>
<p>&lt;a id=&quot;ERR_HTTP2_NESTED_PUSH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_NESTED_PUSH</code></h3>
<p>An attempt was made to initiate a new push stream from within a push stream.
Nested push streams are not permitted.</p>
<p>&lt;a id=&quot;ERR_HTTP2_NO_MEM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_NO_MEM</code></h3>
<p>Out of memory when using the <code>http2session.setLocalWindowSize(windowSize)</code> API.</p>
<p>&lt;a id=&quot;ERR_HTTP2_NO_SOCKET_MANIPULATION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_NO_SOCKET_MANIPULATION</code></h3>
<p>An attempt was made to directly manipulate (read, write, pause, resume, etc.) a
socket attached to an <code>Http2Session</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_ORIGIN_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_ORIGIN_LENGTH</code></h3>
<p>HTTP/2 <code>ORIGIN</code> frames are limited to a length of 16382 bytes.</p>
<p>&lt;a id=&quot;ERR_HTTP2_OUT_OF_STREAMS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_OUT_OF_STREAMS</code></h3>
<p>The number of streams created on a single HTTP/2 session reached the maximum
limit.</p>
<p>&lt;a id=&quot;ERR_HTTP2_PAYLOAD_FORBIDDEN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_PAYLOAD_FORBIDDEN</code></h3>
<p>A message payload was specified for an HTTP response code for which a payload is
forbidden.</p>
<p>&lt;a id=&quot;ERR_HTTP2_PING_CANCEL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_PING_CANCEL</code></h3>
<p>An HTTP/2 ping was canceled.</p>
<p>&lt;a id=&quot;ERR_HTTP2_PING_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_PING_LENGTH</code></h3>
<p>HTTP/2 ping payloads must be exactly 8 bytes in length.</p>
<p>&lt;a id=&quot;ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED</code></h3>
<p>An HTTP/2 pseudo-header has been used inappropriately. Pseudo-headers are header
key names that begin with the <code>:</code> prefix.</p>
<p>&lt;a id=&quot;ERR_HTTP2_PUSH_DISABLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_PUSH_DISABLED</code></h3>
<p>An attempt was made to create a push stream, which had been disabled by the
client.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SEND_FILE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SEND_FILE</code></h3>
<p>An attempt was made to use the <code>Http2Stream.prototype.responseWithFile()</code> API to
send a directory.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SEND_FILE_NOSEEK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SEND_FILE_NOSEEK</code></h3>
<p>An attempt was made to use the <code>Http2Stream.prototype.responseWithFile()</code> API to
send something other than a regular file, but <code>offset</code> or <code>length</code> options were
provided.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SESSION_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SESSION_ERROR</code></h3>
<p>The <code>Http2Session</code> closed with a non-zero error code.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SETTINGS_CANCEL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SETTINGS_CANCEL</code></h3>
<p>The <code>Http2Session</code> settings canceled.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SOCKET_BOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SOCKET_BOUND</code></h3>
<p>An attempt was made to connect a <code>Http2Session</code> object to a <code>net.Socket</code> or
<code>tls.TLSSocket</code> that had already been bound to another <code>Http2Session</code> object.</p>
<p>&lt;a id=&quot;ERR_HTTP2_SOCKET_UNBOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_SOCKET_UNBOUND</code></h3>
<p>An attempt was made to use the <code>socket</code> property of an <code>Http2Session</code> that
has already been closed.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STATUS_101&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STATUS_101</code></h3>
<p>Use of the <code>101</code> Informational status code is forbidden in HTTP/2.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STATUS_INVALID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STATUS_INVALID</code></h3>
<p>An invalid HTTP status code has been specified. Status codes must be an integer
between <code>100</code> and <code>599</code> (inclusive).</p>
<p>&lt;a id=&quot;ERR_HTTP2_STREAM_ABORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STREAM_ABORTED</code></h3>
<p>The peer reset the <code>Http2Stream</code> with a clean error code (<code>NGHTTP2_NO_ERROR</code>
or <code>NGHTTP2_CANCEL</code>) before sending <code>END_STREAM</code>, so the readable side will
not be fully delivered. Mirrors HTTP/1's <code>ECONNRESET</code> for a peer-side
<code>socket.destroy()</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STREAM_CANCEL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STREAM_CANCEL</code></h3>
<p>An <code>Http2Stream</code> was destroyed before any data was transmitted to the connected
peer.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STREAM_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STREAM_ERROR</code></h3>
<p>A non-zero error code was been specified in an <code>RST_STREAM</code> frame.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STREAM_SELF_DEPENDENCY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STREAM_SELF_DEPENDENCY</code></h3>
<p>When setting the priority for an HTTP/2 stream, the stream may be marked as
a dependency for a parent stream. This error code is used when an attempt is
made to mark a stream and dependent of itself.</p>
<p>&lt;a id=&quot;ERR_HTTP2_TOO_MANY_CUSTOM_SETTINGS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_TOO_MANY_CUSTOM_SETTINGS</code></h3>
<p>The number of supported custom settings (10) has been exceeded.</p>
<p>&lt;a id=&quot;ERR_HTTP2_TOO_MANY_INVALID_FRAMES&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_TOO_MANY_INVALID_FRAMES</code></h3>
<p>The limit of acceptable invalid HTTP/2 protocol frames sent by the peer,
as specified through the <code>maxSessionInvalidFrames</code> option, has been exceeded.</p>
<p>&lt;a id=&quot;ERR_HTTP2_TOO_MANY_ORIGINS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_TOO_MANY_ORIGINS</code></h3>
<p>The number of uniq origin sent by the server has exceeded the value defined in
<code>options.maxOriginSetSize</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_TRAILERS_ALREADY_SENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_TRAILERS_ALREADY_SENT</code></h3>
<p>Trailing headers have already been sent on the <code>Http2Stream</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_TRAILERS_NOT_READY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_TRAILERS_NOT_READY</code></h3>
<p>The <code>http2stream.sendTrailers()</code> method cannot be called until after the
<code>'wantTrailers'</code> event is emitted on an <code>Http2Stream</code> object. The
<code>'wantTrailers'</code> event will only be emitted if the <code>waitForTrailers</code> option
is set for the <code>Http2Stream</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP2_UNSUPPORTED_PROTOCOL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_UNSUPPORTED_PROTOCOL</code></h3>
<p><code>http2.connect()</code> was passed a URL that uses any protocol other than <code>http:</code> or
<code>https:</code>.</p>
<p>&lt;a id=&quot;ERR_HTTP_BODY_NOT_ALLOWED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_BODY_NOT_ALLOWED</code></h3>
<p>An error is thrown when writing to an HTTP response which does not allow
contents.</p>
<p>&lt;a id=&quot;ERR_HTTP_CONTENT_LENGTH_MISMATCH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_CONTENT_LENGTH_MISMATCH</code></h3>
<p>Response body size doesn't match with the specified content-length header value.</p>
<p>&lt;a id=&quot;ERR_HTTP_HEADERS_SENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_HEADERS_SENT</code></h3>
<p>An attempt was made to add more headers after the headers had already been sent.</p>
<p>&lt;a id=&quot;ERR_HTTP_INVALID_HEADER_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_INVALID_HEADER_VALUE</code></h3>
<p>An invalid HTTP header value was specified.</p>
<p>&lt;a id=&quot;ERR_HTTP_INVALID_STATUS_CODE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_INVALID_STATUS_CODE</code></h3>
<p>Status code was outside the regular status code range (100-999).</p>
<p>&lt;a id=&quot;ERR_HTTP_REQUEST_TIMEOUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_REQUEST_TIMEOUT</code></h3>
<p>The client has not sent the entire request within the allowed time.</p>
<p>&lt;a id=&quot;ERR_HTTP_SOCKET_ASSIGNED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_SOCKET_ASSIGNED</code></h3>
<p>The given <a href="http.md#class-httpserverresponse"><code>ServerResponse</code></a> was already assigned a socket.</p>
<p>&lt;a id=&quot;ERR_HTTP_SOCKET_ENCODING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_SOCKET_ENCODING</code></h3>
<p>Changing the socket encoding is not allowed per <a href="https://tools.ietf.org/html/rfc7230#section-3">RFC 7230 Section 3</a>.</p>
<p>&lt;a id=&quot;ERR_HTTP_TRAILER_INVALID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_TRAILER_INVALID</code></h3>
<p>The <code>Trailer</code> header was set even though the transfer encoding does not support
that.</p>
<p>&lt;a id=&quot;ERR_ILLEGAL_CONSTRUCTOR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ILLEGAL_CONSTRUCTOR</code></h3>
<p>An attempt was made to construct an object using a non-public constructor.</p>
<p>&lt;a id=&quot;ERR_IMPORT_ATTRIBUTE_MISSING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ATTRIBUTE_MISSING</code></h3>
<p>An import attribute is missing, preventing the specified module to be imported.</p>
<p>&lt;a id=&quot;ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ATTRIBUTE_TYPE_INCOMPATIBLE</code></h3>
<p>An import <code>type</code> attribute was provided, but the specified module is of a
different type.</p>
<p>&lt;a id=&quot;ERR_IMPORT_ATTRIBUTE_UNSUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ATTRIBUTE_UNSUPPORTED</code></h3>
<p>An import attribute is not supported by this version of Node.js.</p>
<p>&lt;a id=&quot;ERR_INCOMPATIBLE_OPTION_PAIR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INCOMPATIBLE_OPTION_PAIR</code></h3>
<p>An option pair is incompatible with each other and cannot be used at the same
time.</p>
<p>&lt;a id=&quot;ERR_INPUT_TYPE_NOT_ALLOWED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INPUT_TYPE_NOT_ALLOWED</code></h3>
<p>The <code>--input-type</code> flag was used to attempt to execute a file. This flag can
only be used with input via <code>--eval</code>, <code>--print</code>, or <code>STDIN</code>.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_ALREADY_ACTIVATED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_ALREADY_ACTIVATED</code></h3>
<p>While using the <code>node:inspector</code> module, an attempt was made to activate the
inspector when it already started to listen on a port. Use <code>inspector.close()</code>
before activating it on a different address.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_ALREADY_CONNECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_ALREADY_CONNECTED</code></h3>
<p>While using the <code>node:inspector</code> module, an attempt was made to connect when the
inspector was already connected.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_CLOSED</code></h3>
<p>While using the <code>node:inspector</code> module, an attempt was made to use the
inspector after the session had already closed.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_COMMAND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_COMMAND</code></h3>
<p>An error occurred while issuing a command via the <code>node:inspector</code> module.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_NOT_ACTIVE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_NOT_ACTIVE</code></h3>
<p>The <code>inspector</code> is not active when <code>inspector.waitForDebugger()</code> is called.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_NOT_AVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_NOT_AVAILABLE</code></h3>
<p>The <code>node:inspector</code> module is not available for use.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_NOT_CONNECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_NOT_CONNECTED</code></h3>
<p>While using the <code>node:inspector</code> module, an attempt was made to use the
inspector before it was connected.</p>
<p>&lt;a id=&quot;ERR_INSPECTOR_NOT_WORKER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INSPECTOR_NOT_WORKER</code></h3>
<p>An API was called on the main thread that can only be used from
the worker thread.</p>
<p>&lt;a id=&quot;ERR_INTERNAL_ASSERTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INTERNAL_ASSERTION</code></h3>
<p>There was a bug in Node.js or incorrect usage of Node.js internals.
To fix the error, open an issue at <a href="https://github.com/nodejs/node/issues">https://github.com/nodejs/node/issues</a>.</p>
<p>&lt;a id=&quot;ERR_INVALID_ADDRESS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_ADDRESS</code></h3>
<p>The provided address is not understood by the Node.js API.</p>
<p>&lt;a id=&quot;ERR_INVALID_ADDRESS_FAMILY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_ADDRESS_FAMILY</code></h3>
<p>The provided address family is not understood by the Node.js API.</p>
<p>&lt;a id=&quot;ERR_INVALID_ARG_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_ARG_TYPE</code></h3>
<p>An argument of the wrong type was passed to a Node.js API.</p>
<p>&lt;a id=&quot;ERR_INVALID_ARG_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_ARG_VALUE</code></h3>
<p>An invalid or unsupported value was passed for a given argument.</p>
<p>&lt;a id=&quot;ERR_INVALID_ASYNC_ID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_ASYNC_ID</code></h3>
<p>An invalid <code>asyncId</code> or <code>triggerAsyncId</code> was passed using <code>AsyncHooks</code>. An id
less than -1 should never happen.</p>
<p>&lt;a id=&quot;ERR_INVALID_BUFFER_SIZE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_BUFFER_SIZE</code></h3>
<p>A swap was performed on a <code>Buffer</code> but its size was not compatible with the
operation.</p>
<p>&lt;a id=&quot;ERR_INVALID_CHAR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_CHAR</code></h3>
<p>Invalid characters were detected in headers.</p>
<p>&lt;a id=&quot;ERR_INVALID_CURSOR_POS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_CURSOR_POS</code></h3>
<p>A cursor on a given stream cannot be moved to a specified row without a
specified column.</p>
<p>&lt;a id=&quot;ERR_INVALID_FD&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_FD</code></h3>
<p>A file descriptor ('fd') was not valid (e.g. it was a negative value).</p>
<p>&lt;a id=&quot;ERR_INVALID_FD_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_FD_TYPE</code></h3>
<p>A file descriptor ('fd') type was not valid.</p>
<p>&lt;a id=&quot;ERR_INVALID_FILE_URL_HOST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_FILE_URL_HOST</code></h3>
<p>A Node.js API that consumes <code>file:</code> URLs (such as certain functions in the
<a href="fs.md"><code>fs</code></a> module) encountered a file URL with an incompatible host. This
situation can only occur on Unix-like systems where only <code>localhost</code> or an empty
host is supported.</p>
<p>&lt;a id=&quot;ERR_INVALID_FILE_URL_PATH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_FILE_URL_PATH</code></h3>
<p>A Node.js API that consumes <code>file:</code> URLs (such as certain functions in the
<a href="fs.md"><code>fs</code></a> module) encountered a file URL with an incompatible path. The exact
semantics for determining whether a path can be used is platform-dependent.</p>
<p>The thrown error object includes an <code>input</code> property that contains the URL object
of the invalid <code>file:</code> URL.</p>
<p>&lt;a id=&quot;ERR_INVALID_HANDLE_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_HANDLE_TYPE</code></h3>
<p>An attempt was made to send an unsupported &quot;handle&quot; over an IPC communication
channel to a child process. See <a href="child_process.md#subprocesssendmessage-sendhandle-options-callback"><code>subprocess.send()</code></a> and <a href="process.md#processsendmessage-sendhandle-options-callback"><code>process.send()</code></a>
for more information.</p>
<p>&lt;a id=&quot;ERR_INVALID_HTTP_TOKEN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_HTTP_TOKEN</code></h3>
<p>An invalid HTTP token was supplied.</p>
<p>&lt;a id=&quot;ERR_INVALID_IP_ADDRESS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_IP_ADDRESS</code></h3>
<p>An IP address is not valid.</p>
<p>&lt;a id=&quot;ERR_INVALID_MIME_SYNTAX&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_MIME_SYNTAX</code></h3>
<p>The syntax of a MIME is not valid.</p>
<p>&lt;a id=&quot;ERR_INVALID_MODULE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_MODULE</code></h3>
<p>An attempt was made to load a module that does not exist or was otherwise not
valid.</p>
<p>&lt;a id=&quot;ERR_INVALID_MODULE_SPECIFIER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_MODULE_SPECIFIER</code></h3>
<p>The imported module string is an invalid URL, package name, or package subpath
specifier.</p>
<p>&lt;a id=&quot;ERR_INVALID_OBJECT_DEFINE_PROPERTY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_OBJECT_DEFINE_PROPERTY</code></h3>
<p>An error occurred while setting an invalid attribute on the property of
an object.</p>
<p>&lt;a id=&quot;ERR_INVALID_PACKAGE_CONFIG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_PACKAGE_CONFIG</code></h3>
<p>An invalid <a href="packages.md#nodejs-packagejson-field-definitions"><code>package.json</code></a> file failed parsing.</p>
<p>&lt;a id=&quot;ERR_INVALID_PACKAGE_TARGET&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_PACKAGE_TARGET</code></h3>
<p>The <code>package.json</code> <a href="packages.md#exports"><code>&quot;exports&quot;</code></a> field contains an invalid target mapping
value for the attempted module resolution.</p>
<p>&lt;a id=&quot;ERR_INVALID_PROTOCOL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_PROTOCOL</code></h3>
<p>An invalid <code>options.protocol</code> was passed to <code>http.request()</code>.</p>
<p>&lt;a id=&quot;ERR_INVALID_REPL_EVAL_CONFIG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_REPL_EVAL_CONFIG</code></h3>
<p>Both <code>breakEvalOnSigint</code> and <code>eval</code> options were set in the <a href="repl.md"><code>REPL</code></a> config,
which is not supported.</p>
<p>&lt;a id=&quot;ERR_INVALID_RETURN_PROPERTY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_RETURN_PROPERTY</code></h3>
<p>Thrown in case a function option does not provide a valid value for one of its
returned object properties on execution.</p>
<p>&lt;a id=&quot;ERR_INVALID_RETURN_PROPERTY_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_RETURN_PROPERTY_VALUE</code></h3>
<p>Thrown in case a function option does not provide an expected value
type for one of its returned object properties on execution.</p>
<p>&lt;a id=&quot;ERR_INVALID_RETURN_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_RETURN_VALUE</code></h3>
<p>Thrown in case a function option does not return an expected value
type on execution, such as when a function is expected to return a promise.</p>
<p>&lt;a id=&quot;ERR_INVALID_STATE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_STATE</code></h3>
<p>Indicates that an operation cannot be completed due to an invalid state.
For instance, an object may have already been destroyed, or may be
performing another operation.</p>
<p>&lt;a id=&quot;ERR_INVALID_SYNC_FORK_INPUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_SYNC_FORK_INPUT</code></h3>
<p>A <code>Buffer</code>, <code>TypedArray</code>, <code>DataView</code>, or <code>string</code> was provided as stdio input to
an asynchronous fork. See the documentation for the <a href="child_process.md"><code>child_process</code></a> module
for more information.</p>
<p>&lt;a id=&quot;ERR_INVALID_THIS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_THIS</code></h3>
<p>A Node.js API function was called with an incompatible <code>this</code> value.</p>
<pre><code class="language-js">const urlSearchParams = new URLSearchParams('foo=bar&amp;baz=new');

const buf = Buffer.alloc(1);
urlSearchParams.has.call(buf, 'foo');
// Throws a TypeError with code 'ERR_INVALID_THIS'
</code></pre>
<p>&lt;a id=&quot;ERR_INVALID_TUPLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_TUPLE</code></h3>
<p>An element in the <code>iterable</code> provided to the <a href="url.md#the-whatwg-url-api">WHATWG</a>
<a href="url.md#new-urlsearchparamsiterable"><code>URLSearchParams</code> constructor</a> did not
represent a <code>[name, value]</code> tuple – that is, if an element is not iterable, or
does not consist of exactly two elements.</p>
<p>&lt;a id=&quot;ERR_INVALID_TYPESCRIPT_SYNTAX&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_TYPESCRIPT_SYNTAX</code></h3>
<p>The provided TypeScript syntax is not valid.</p>
<p>&lt;a id=&quot;ERR_INVALID_URI&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_URI</code></h3>
<p>An invalid URI was passed.</p>
<p>&lt;a id=&quot;ERR_INVALID_URL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_URL</code></h3>
<p>An invalid URL was passed to the <a href="url.md#the-whatwg-url-api">WHATWG</a> <a href="url.md#new-urlinput-base"><code>URL</code>
constructor</a> or the legacy <a href="url.md#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> to be parsed.
The thrown error object typically has an additional property <code>'input'</code> that
contains the URL that failed to parse.</p>
<p>&lt;a id=&quot;ERR_INVALID_URL_PATTERN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_URL_PATTERN</code></h3>
<p>An invalid URLPattern was passed to the <a href="url.md#the-whatwg-url-api">WHATWG</a>
<a href="url.md#new-urlpatternstring-baseurl-options"><code>URLPattern</code> constructor</a> to be parsed.</p>
<p>&lt;a id=&quot;ERR_INVALID_URL_SCHEME&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_URL_SCHEME</code></h3>
<p>An attempt was made to use a URL of an incompatible scheme (protocol) for a
specific purpose. It is only used in the <a href="url.md#the-whatwg-url-api">WHATWG URL API</a> support in the
<a href="fs.md"><code>fs</code></a> module (which only accepts URLs with <code>'file'</code> scheme), but may be used
in other Node.js APIs as well in the future.</p>
<p>&lt;a id=&quot;ERR_IPC_CHANNEL_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IPC_CHANNEL_CLOSED</code></h3>
<p>An attempt was made to use an IPC communication channel that was already closed.</p>
<p>&lt;a id=&quot;ERR_IPC_DISCONNECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IPC_DISCONNECTED</code></h3>
<p>An attempt was made to disconnect an IPC communication channel that was already
disconnected. See the documentation for the <a href="child_process.md"><code>child_process</code></a> module
for more information.</p>
<p>&lt;a id=&quot;ERR_IPC_ONE_PIPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IPC_ONE_PIPE</code></h3>
<p>An attempt was made to create a child Node.js process using more than one IPC
communication channel. See the documentation for the <a href="child_process.md"><code>child_process</code></a> module
for more information.</p>
<p>&lt;a id=&quot;ERR_IPC_SYNC_FORK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IPC_SYNC_FORK</code></h3>
<p>An attempt was made to open an IPC communication channel with a synchronously
forked Node.js process. See the documentation for the <a href="child_process.md"><code>child_process</code></a> module
for more information.</p>
<p>&lt;a id=&quot;ERR_IP_BLOCKED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IP_BLOCKED</code></h3>
<p>IP is blocked by <code>net.BlockList</code>.</p>
<p>&lt;a id=&quot;ERR_LOADER_CHAIN_INCOMPLETE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_LOADER_CHAIN_INCOMPLETE</code></h3>
<p>An ESM loader hook returned without calling <code>next()</code> and without explicitly
signaling a short circuit.</p>
<p>&lt;a id=&quot;ERR_LOAD_SQLITE_EXTENSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_LOAD_SQLITE_EXTENSION</code></h3>
<p>An error occurred while loading a SQLite extension.</p>
<p>&lt;a id=&quot;ERR_MEMORY_ALLOCATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MEMORY_ALLOCATION_FAILED</code></h3>
<p>An attempt was made to allocate memory (usually in the C++ layer) but it
failed.</p>
<p>&lt;a id=&quot;ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MESSAGE_TARGET_CONTEXT_UNAVAILABLE</code></h3>
<p>A message posted to a <a href="worker_threads.md#class-messageport"><code>MessagePort</code></a> could not be deserialized in the target
<a href="vm.md">vm</a> <code>Context</code>. Not all Node.js objects can be successfully instantiated in
any context at this time, and attempting to transfer them using <code>postMessage()</code>
can fail on the receiving side in that case.</p>
<p>&lt;a id=&quot;ERR_METHOD_NOT_IMPLEMENTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_METHOD_NOT_IMPLEMENTED</code></h3>
<p>A method is required but not implemented.</p>
<p>&lt;a id=&quot;ERR_MISSING_ARGS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_ARGS</code></h3>
<p>A required argument of a Node.js API was not passed. This is only used for
strict compliance with the API specification (which in some cases may accept
<code>func(undefined)</code> but not <code>func()</code>). In most native Node.js APIs,
<code>func(undefined)</code> and <code>func()</code> are treated identically, and the
<a href="#err_invalid_arg_type"><code>ERR_INVALID_ARG_TYPE</code></a> error code may be used instead.</p>
<p>&lt;a id=&quot;ERR_MISSING_OPTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_OPTION</code></h3>
<p>For APIs that accept options objects, some options might be mandatory. This code
is thrown if a required option is missing.</p>
<p>&lt;a id=&quot;ERR_MISSING_PASSPHRASE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_PASSPHRASE</code></h3>
<p>An attempt was made to read an encrypted key without specifying a passphrase.</p>
<p>&lt;a id=&quot;ERR_MISSING_PLATFORM_FOR_WORKER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_PLATFORM_FOR_WORKER</code></h3>
<p>The V8 platform used by this instance of Node.js does not support creating
Workers. This is caused by lack of embedder support for Workers. In particular,
this error will not occur with standard builds of Node.js.</p>
<p>&lt;a id=&quot;ERR_MODULE_LINK_MISMATCH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MODULE_LINK_MISMATCH</code></h3>
<p>A module can not be linked because the same module requests in it are not
resolved to the same module.</p>
<p>&lt;a id=&quot;ERR_MODULE_NOT_FOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MODULE_NOT_FOUND</code></h3>
<p>A module file could not be resolved by the ECMAScript modules loader while
attempting an <code>import</code> operation or when loading the program entry point.</p>
<p>&lt;a id=&quot;ERR_MULTIPLE_CALLBACK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MULTIPLE_CALLBACK</code></h3>
<p>A callback was called more than once.</p>
<p>A callback is almost always meant to only be called once as the query
can either be fulfilled or rejected but not both at the same time. The latter
would be possible by calling a callback more than once.</p>
<p>&lt;a id=&quot;ERR_NAPI_CONS_FUNCTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_CONS_FUNCTION</code></h3>
<p>While using <code>Node-API</code>, a constructor passed was not a function.</p>
<p>&lt;a id=&quot;ERR_NAPI_INVALID_DATAVIEW_ARGS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_INVALID_DATAVIEW_ARGS</code></h3>
<p>While calling <code>napi_create_dataview()</code>, a given <code>offset</code> was outside the bounds
of the dataview or <code>offset + length</code> was larger than a length of given <code>buffer</code>.</p>
<p>&lt;a id=&quot;ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_INVALID_TYPEDARRAY_ALIGNMENT</code></h3>
<p>While calling <code>napi_create_typedarray()</code>, the provided <code>offset</code> was not a
multiple of the element size.</p>
<p>&lt;a id=&quot;ERR_NAPI_INVALID_TYPEDARRAY_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_INVALID_TYPEDARRAY_LENGTH</code></h3>
<p>While calling <code>napi_create_typedarray()</code>, <code>(length * size_of_element) + byte_offset</code> was larger than the length of given <code>buffer</code>.</p>
<p>&lt;a id=&quot;ERR_NAPI_TSFN_CALL_JS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_TSFN_CALL_JS</code></h3>
<p>An error occurred while invoking the JavaScript portion of the thread-safe
function.</p>
<p>&lt;a id=&quot;ERR_NAPI_TSFN_GET_UNDEFINED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_TSFN_GET_UNDEFINED</code></h3>
<p>An error occurred while attempting to retrieve the JavaScript <code>undefined</code>
value.</p>
<p>&lt;a id=&quot;ERR_NON_CONTEXT_AWARE_DISABLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NON_CONTEXT_AWARE_DISABLED</code></h3>
<p>A non-context-aware native addon was loaded in a process that disallows them.</p>
<p>&lt;a id=&quot;ERR_NOT_BUILDING_SNAPSHOT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NOT_BUILDING_SNAPSHOT</code></h3>
<p>An attempt was made to use operations that can only be used when building
V8 startup snapshot even though Node.js isn't building one.</p>
<p>&lt;a id=&quot;ERR_NOT_IN_SINGLE_EXECUTABLE_APPLICATION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NOT_IN_SINGLE_EXECUTABLE_APPLICATION</code></h3>
<p>The operation cannot be performed when it's not in a single-executable
application.</p>
<p>&lt;a id=&quot;ERR_NOT_SUPPORTED_IN_SNAPSHOT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NOT_SUPPORTED_IN_SNAPSHOT</code></h3>
<p>An attempt was made to perform operations that are not supported when
building a startup snapshot.</p>
<p>&lt;a id=&quot;ERR_NO_CRYPTO&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NO_CRYPTO</code></h3>
<p>An attempt was made to use crypto features while Node.js was not compiled with
OpenSSL crypto support.</p>
<p>&lt;a id=&quot;ERR_NO_ICU&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NO_ICU</code></h3>
<p>An attempt was made to use features that require <a href="intl.md#internationalization-support">ICU</a>, but Node.js was not
compiled with ICU support.</p>
<p>&lt;a id=&quot;ERR_NO_TEMPORAL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NO_TEMPORAL</code></h3>
<p>An attempt was made to use features that require <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal"><code>Temporal</code></a>, but Node.js was not
compiled with <code>Temporal</code> support or it has been disabled in the current environment
(for example, when running with <code>--no-harmony-temporal</code>).</p>
<p>&lt;a id=&quot;ERR_NO_TYPESCRIPT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NO_TYPESCRIPT</code></h3>
<p>An attempt was made to use features that require <a href="typescript.md#type-stripping">Native TypeScript support</a>, but Node.js was not
compiled with TypeScript support.</p>
<p>&lt;a id=&quot;ERR_OPERATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_OPERATION_FAILED</code></h3>
<p>An operation failed. This is typically used to signal the general failure
of an asynchronous operation.</p>
<p>&lt;a id=&quot;ERR_OPTIONS_BEFORE_BOOTSTRAPPING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_OPTIONS_BEFORE_BOOTSTRAPPING</code></h3>
<p>An attempt was made to get options before the bootstrapping was completed.</p>
<p>&lt;a id=&quot;ERR_OUT_OF_RANGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_OUT_OF_RANGE</code></h3>
<p>A given value is out of the accepted range.</p>
<p>&lt;a id=&quot;ERR_PACKAGE_IMPORT_NOT_DEFINED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PACKAGE_IMPORT_NOT_DEFINED</code></h3>
<p>The <code>package.json</code> <a href="packages.md#imports"><code>&quot;imports&quot;</code></a> field does not define the given internal
package specifier mapping.</p>
<p>&lt;a id=&quot;ERR_PACKAGE_MAP_EXTERNAL_FILE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PACKAGE_MAP_EXTERNAL_FILE</code></h3>
<p>A module attempted to resolve a bare specifier using the <a href="packages.md#package-maps">package map</a>, but
the importing file is not located within any package defined in the map.</p>
<pre><code class="language-console">$ node --experimental-package-map=./package-map.json /tmp/script.js
Error [ERR_PACKAGE_MAP_EXTERNAL_FILE]: Cannot resolve &quot;dep-a&quot; from &quot;/tmp/script.js&quot;: file is not within any package defined in /path/to/package-map.json
</code></pre>
<p>To fix this error, ensure the importing file is inside one of the package
directories listed in the package map, or add a new package entry whose <code>url</code>
covers the importing file.</p>
<p>&lt;a id=&quot;ERR_PACKAGE_MAP_INVALID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PACKAGE_MAP_INVALID</code></h3>
<p>The <a href="packages.md#package-maps">package map</a> configuration file is invalid. This can occur when:</p>
<ul>
<li>The file does not exist at the specified path.</li>
<li>The file contains invalid JSON.</li>
<li>The file is missing the required <code>packages</code> object.</li>
<li>A package entry is missing the required <code>url</code> field.</li>
<li>Two package entries have the same <code>url</code> value.</li>
</ul>
<pre><code class="language-console">$ node --experimental-package-map=./missing.json app.js
Error [ERR_PACKAGE_MAP_INVALID]: Invalid package map at &quot;./missing.json&quot;: file not found
</code></pre>
<p>&lt;a id=&quot;ERR_PACKAGE_MAP_KEY_NOT_FOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PACKAGE_MAP_KEY_NOT_FOUND</code></h3>
<p>A package's <code>dependencies</code> object in the <a href="packages.md#package-maps">package map</a> references a package
key that is not defined in the <code>packages</code> object.</p>
<pre><code class="language-json">{
  &quot;packages&quot;: {
    &quot;app&quot;: {
      &quot;url&quot;: &quot;./app&quot;,
      &quot;dependencies&quot;: {
        &quot;foo&quot;: &quot;nonexistent&quot;
      }
    }
  }
}
</code></pre>
<p>In this example, <code>&quot;nonexistent&quot;</code> is referenced as a dependency target but not
defined in <code>packages</code>, which will throw this error.</p>
<p>To fix this error, ensure all package keys referenced in <code>dependencies</code> values
are defined in the <code>packages</code> object.</p>
<p>&lt;a id=&quot;ERR_PACKAGE_PATH_NOT_EXPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PACKAGE_PATH_NOT_EXPORTED</code></h3>
<p>The <code>package.json</code> <a href="packages.md#exports"><code>&quot;exports&quot;</code></a> field does not export the requested subpath.
Because exports are encapsulated, private internal modules that are not exported
cannot be imported through the package resolution, unless using an absolute URL.</p>
<p>&lt;a id=&quot;ERR_PARSE_ARGS_INVALID_OPTION_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PARSE_ARGS_INVALID_OPTION_VALUE</code></h3>
<p>When <code>strict</code> set to <code>true</code>, thrown by <a href="util.md#utilparseargsconfig"><code>util.parseArgs()</code></a> if a {boolean}
value is provided for an option of type {string}, or if a {string}
value is provided for an option of type {boolean}.</p>
<p>&lt;a id=&quot;ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL</code></h3>
<p>Thrown by <a href="util.md#utilparseargsconfig"><code>util.parseArgs()</code></a>, when a positional argument is provided and
<code>allowPositionals</code> is set to <code>false</code>.</p>
<p>&lt;a id=&quot;ERR_PARSE_ARGS_UNKNOWN_OPTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PARSE_ARGS_UNKNOWN_OPTION</code></h3>
<p>When <code>strict</code> set to <code>true</code>, thrown by <a href="util.md#utilparseargsconfig"><code>util.parseArgs()</code></a> if an argument
is not configured in <code>options</code>.</p>
<p>&lt;a id=&quot;ERR_PERFORMANCE_INVALID_TIMESTAMP&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PERFORMANCE_INVALID_TIMESTAMP</code></h3>
<p>An invalid timestamp value was provided for a performance mark or measure.</p>
<p>&lt;a id=&quot;ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PERFORMANCE_MEASURE_INVALID_OPTIONS</code></h3>
<p>Invalid options were provided for a performance measure.</p>
<p>&lt;a id=&quot;ERR_PROTO_ACCESS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PROTO_ACCESS</code></h3>
<p>Accessing <code>Object.prototype.__proto__</code> has been forbidden using
<a href="cli.md#--disable-protomode"><code>--disable-proto=throw</code></a>. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf"><code>Object.getPrototypeOf</code></a> and
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf</code></a> should be used to get and set the prototype of an
object.</p>
<p>&lt;a id=&quot;ERR_PROXY_INVALID_CONFIG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PROXY_INVALID_CONFIG</code></h3>
<p>Failed to proxy a request because the proxy configuration is invalid.</p>
<p>&lt;a id=&quot;ERR_PROXY_TUNNEL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PROXY_TUNNEL</code></h3>
<p>Failed to establish proxy tunnel when <code>NODE_USE_ENV_PROXY</code> or <code>--use-env-proxy</code> is enabled.</p>
<p>&lt;a id=&quot;ERR_QUIC_APPLICATION_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_APPLICATION_ERROR</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A QUIC application error occurred.</p>
<p>&lt;a id=&quot;ERR_QUIC_CONNECTION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_CONNECTION_FAILED</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Establishing a QUIC connection failed.</p>
<p>&lt;a id=&quot;ERR_QUIC_ENDPOINT_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_ENDPOINT_CLOSED</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A QUIC Endpoint closed with an error.</p>
<p>&lt;a id=&quot;ERR_QUIC_OPEN_STREAM_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_OPEN_STREAM_FAILED</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Opening a QUIC stream failed.</p>
<p>&lt;a id=&quot;ERR_QUIC_STREAM_ABORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_STREAM_ABORTED</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The Node.js error code for a <a href="quic.md#class-quicerror"><code>QuicError</code></a> thrown to abort a QUIC stream
or session with an explicit application or transport error code.</p>
<p>&lt;a id=&quot;ERR_QUIC_STREAM_RESET&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_STREAM_RESET</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A QUIC stream was reset by the peer. The error includes the reset code
provided by the peer.</p>
<p>&lt;a id=&quot;ERR_QUIC_TRANSPORT_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_TRANSPORT_ERROR</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A QUIC transport error occurred.</p>
<p>&lt;a id=&quot;ERR_QUIC_VERSION_NEGOTIATION_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_QUIC_VERSION_NEGOTIATION_ERROR</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>A QUIC session failed because version negotiation is required.</p>
<p>&lt;a id=&quot;ERR_REQUIRE_ASYNC_MODULE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_REQUIRE_ASYNC_MODULE</code></h3>
<p>When trying to <code>require()</code> an <a href="esm.md">ES Module</a>, the module turns out to be asynchronous.
That is, it contains top-level await.</p>
<p>When uncaught, the flag <code>--experimental-print-required-tla</code> prints
the locations of the top-level awaits in the graph to stderr.</p>
<p>This error has the following additional non-enumerable properties:</p>
<ul>
<li><code>requireStack</code> {string[]} The chain of modules that led to the failing
<code>require()</code>, starting with the module that required the asynchronous module.</li>
<li><code>topLevelAwaitLocations</code> {Object[]} The locations of the top-level awaits in
the graph. Only populated when <code>--experimental-print-required-tla</code> is enabled.
Each entry has the following properties:
<ul>
<li><code>url</code> {string} The URL of the module containing the top-level await.</li>
<li><code>line</code> {number} The 1-based line number of the top-level await.</li>
<li><code>column</code> {number} The 1-based column number of the top-level await.</li>
<li><code>sourceLine</code> {string} The source line containing the top-level await.</li>
</ul>
</li>
</ul>
<p>&lt;a id=&quot;ERR_REQUIRE_CYCLE_MODULE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_REQUIRE_CYCLE_MODULE</code></h3>
<p>When trying to <code>require()</code> an <a href="esm.md">ES Module</a>, a CommonJS to ESM or ESM to CommonJS edge
participates in an immediate cycle.
This is not allowed because ES Modules cannot be evaluated while they are
already being evaluated.</p>
<p>To avoid the cycle, the <code>require()</code> call involved in a cycle should not happen
at the top-level of either an ES Module (via <code>createRequire()</code>) or a CommonJS
module, and should be done lazily in an inner function.</p>
<p>&lt;a id=&quot;ERR_REQUIRE_ESM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_REQUIRE_ESM</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>An attempt was made to <code>require()</code> an <a href="esm.md">ES Module</a>.</p>
<p>This error has been deprecated since <code>require()</code> now supports loading synchronous
ES modules. When <code>require()</code> encounters an ES module that contains top-level
<code>await</code>, it will throw <a href="#err_require_async_module"><code>ERR_REQUIRE_ASYNC_MODULE</code></a> instead.</p>
<p>&lt;a id=&quot;ERR_REQUIRE_ESM_RACE_CONDITION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_REQUIRE_ESM_RACE_CONDITION</code></h3>
<blockquote>
<p>Stability: 1 - Experimental.</p>
</blockquote>
<p>An attempt was made to <code>require()</code> an <a href="esm.md">ES Module</a> while another <code>import()</code> call
was already in progress to load it asynchronously.</p>
<p>&lt;a id=&quot;ERR_SCRIPT_EXECUTION_INTERRUPTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SCRIPT_EXECUTION_INTERRUPTED</code></h3>
<p>Script execution was interrupted by <code>SIGINT</code> (For
example, &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; was pressed.)</p>
<p>&lt;a id=&quot;ERR_SCRIPT_EXECUTION_TIMEOUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SCRIPT_EXECUTION_TIMEOUT</code></h3>
<p>Script execution timed out, possibly due to bugs in the script being executed.</p>
<p>&lt;a id=&quot;ERR_SERVER_ALREADY_LISTEN&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SERVER_ALREADY_LISTEN</code></h3>
<p>The <a href="net.md#serverlisten"><code>server.listen()</code></a> method was called while a <code>net.Server</code> was already
listening. This applies to all instances of <code>net.Server</code>, including HTTP, HTTPS,
and HTTP/2 <code>Server</code> instances.</p>
<p>&lt;a id=&quot;ERR_SERVER_NOT_RUNNING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SERVER_NOT_RUNNING</code></h3>
<p>The <a href="net.md#serverclosecallback"><code>server.close()</code></a> method was called when a <code>net.Server</code> was not
running. This applies to all instances of <code>net.Server</code>, including HTTP, HTTPS,
and HTTP/2 <code>Server</code> instances.</p>
<p>&lt;a id=&quot;ERR_SINGLE_EXECUTABLE_APPLICATION_ASSET_NOT_FOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SINGLE_EXECUTABLE_APPLICATION_ASSET_NOT_FOUND</code></h3>
<p>A key was passed to single executable application APIs to identify an asset,
but no match could be found.</p>
<p>&lt;a id=&quot;ERR_SOCKET_ALREADY_BOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_ALREADY_BOUND</code></h3>
<p>An attempt was made to bind a socket that has already been bound.</p>
<p>&lt;a id=&quot;ERR_SOCKET_BAD_BUFFER_SIZE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_BAD_BUFFER_SIZE</code></h3>
<p>An invalid (negative) size was passed for either the <code>recvBufferSize</code> or
<code>sendBufferSize</code> options in <a href="dgram.md#dgramcreatesocketoptions-callback"><code>dgram.createSocket()</code></a>.</p>
<p>&lt;a id=&quot;ERR_SOCKET_BAD_PORT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_BAD_PORT</code></h3>
<p>An API function expecting a port &gt;= 0 and &lt; 65536 received an invalid value.</p>
<p>&lt;a id=&quot;ERR_SOCKET_BAD_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_BAD_TYPE</code></h3>
<p>An API function expecting a socket type (<code>udp4</code> or <code>udp6</code>) received an invalid
value.</p>
<p>&lt;a id=&quot;ERR_SOCKET_BUFFER_SIZE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_BUFFER_SIZE</code></h3>
<p>While using <a href="dgram.md#dgramcreatesocketoptions-callback"><code>dgram.createSocket()</code></a>, the size of the receive or send <code>Buffer</code>
could not be determined.</p>
<p>&lt;a id=&quot;ERR_SOCKET_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_CLOSED</code></h3>
<p>An attempt was made to operate on an already closed socket.</p>
<p>&lt;a id=&quot;ERR_SOCKET_CLOSED_BEFORE_CONNECTION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_CLOSED_BEFORE_CONNECTION</code></h3>
<p>When calling <a href="net.md#socketwritedata-encoding-callback"><code>net.Socket.write()</code></a> on a connecting socket and the socket was
closed before the connection was established.</p>
<p>&lt;a id=&quot;ERR_SOCKET_CONNECTION_TIMEOUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_CONNECTION_TIMEOUT</code></h3>
<p>The socket was unable to connect to any address returned by the DNS within the
allowed timeout when using the family autoselection algorithm.</p>
<p>&lt;a id=&quot;ERR_SOCKET_DGRAM_IS_CONNECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_DGRAM_IS_CONNECTED</code></h3>
<p>A <a href="dgram.md#socketconnectport-address-callback"><code>dgram.connect()</code></a> call was made on an already connected socket.</p>
<p>&lt;a id=&quot;ERR_SOCKET_DGRAM_NOT_CONNECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_DGRAM_NOT_CONNECTED</code></h3>
<p>A <a href="dgram.md#socketdisconnect"><code>dgram.disconnect()</code></a> or <a href="dgram.md#socketremoteaddress"><code>dgram.remoteAddress()</code></a> call was made on a
disconnected socket.</p>
<p>&lt;a id=&quot;ERR_SOCKET_DGRAM_NOT_RUNNING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_DGRAM_NOT_RUNNING</code></h3>
<p>A call was made and the UDP subsystem was not running.</p>
<p>&lt;a id=&quot;ERR_SOCKET_HANDLE_ADOPTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_HANDLE_ADOPTED</code></h3>
<p>An operation was attempted on a <a href="net.md#class-netboundsocket"><code>BoundSocket</code></a> that had already been adopted
by a <a href="net.md#class-netserver"><code>net.Server</code></a> or <a href="net.md#class-netsocket"><code>net.Socket</code></a>, or transferred to another thread.
Once a bound socket is adopted or transferred, its <code>address()</code> and <code>close()</code>
methods can no longer be used.</p>
<p>&lt;a id=&quot;ERR_SOURCE_MAP_CORRUPT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOURCE_MAP_CORRUPT</code></h3>
<p>The source map could not be parsed because it does not exist, or is corrupt.</p>
<p>&lt;a id=&quot;ERR_SOURCE_MAP_MISSING_SOURCE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOURCE_MAP_MISSING_SOURCE</code></h3>
<p>A file imported from a source map was not found.</p>
<p>&lt;a id=&quot;ERR_SOURCE_PHASE_NOT_DEFINED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOURCE_PHASE_NOT_DEFINED</code></h3>
<p>The provided module import does not provide a source phase imports representation for source phase
import syntax <code>import source x from 'x'</code> or <code>import.source(x)</code>.</p>
<p>&lt;a id=&quot;ERR_SQLITE_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SQLITE_ERROR</code></h3>
<p>An error was returned from <a href="sqlite.md">SQLite</a>.</p>
<p>&lt;a id=&quot;ERR_SRI_PARSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SRI_PARSE</code></h3>
<p>A string was provided for a Subresource Integrity check, but was unable to be
parsed. Check the format of integrity attributes by looking at the
<a href="https://www.w3.org/TR/SRI/#the-integrity-attribute">Subresource Integrity specification</a>.</p>
<p>&lt;a id=&quot;ERR_STREAM_ALREADY_FINISHED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_ALREADY_FINISHED</code></h3>
<p>A stream method was called that cannot complete because the stream was
finished.</p>
<p>&lt;a id=&quot;ERR_STREAM_CANNOT_PIPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_CANNOT_PIPE</code></h3>
<p>An attempt was made to call <a href="stream.md#readablepipedestination-options"><code>stream.pipe()</code></a> on a <a href="stream.md#class-streamwritable"><code>Writable</code></a> stream.</p>
<p>&lt;a id=&quot;ERR_STREAM_DESTROYED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_DESTROYED</code></h3>
<p>A stream method was called that cannot complete because the stream was
destroyed using <code>stream.destroy()</code>.</p>
<p>&lt;a id=&quot;ERR_STREAM_ITER_MISSING_FLAG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_ITER_MISSING_FLAG</code></h3>
<p>A stream/iter API was used without the <code>--experimental-stream-iter</code> CLI flag
enabled.</p>
<p>&lt;a id=&quot;ERR_STREAM_NULL_VALUES&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_NULL_VALUES</code></h3>
<p>An attempt was made to call <a href="stream.md#writablewritechunk-encoding-callback"><code>stream.write()</code></a> with a <code>null</code> chunk.</p>
<p>&lt;a id=&quot;ERR_STREAM_PREMATURE_CLOSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_PREMATURE_CLOSE</code></h3>
<p>An error returned by <code>stream.finished()</code> and <code>stream.pipeline()</code>, when a stream
or a pipeline ends non gracefully with no explicit error.</p>
<p>&lt;a id=&quot;ERR_STREAM_PUSH_AFTER_EOF&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_PUSH_AFTER_EOF</code></h3>
<p>An attempt was made to call <a href="stream.md#readablepushchunk-encoding"><code>stream.push()</code></a> after a <code>null</code>(EOF) had been
pushed to the stream.</p>
<p>&lt;a id=&quot;ERR_STREAM_UNABLE_TO_PIPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_UNABLE_TO_PIPE</code></h3>
<p>An attempt was made to pipe to a closed or destroyed stream in a pipeline.</p>
<p>&lt;a id=&quot;ERR_STREAM_UNSHIFT_AFTER_END_EVENT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_UNSHIFT_AFTER_END_EVENT</code></h3>
<p>An attempt was made to call <a href="stream.md#readableunshiftchunk-encoding"><code>stream.unshift()</code></a> after the <code>'end'</code> event was
emitted.</p>
<p>&lt;a id=&quot;ERR_STREAM_WRAP&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_WRAP</code></h3>
<p>Prevents an abort if a string decoder was set on the Socket or if the decoder
is in <code>objectMode</code>.</p>
<pre><code class="language-js">const Socket = require('node:net').Socket;
const instance = new Socket();

instance.setEncoding('utf8');
</code></pre>
<p>&lt;a id=&quot;ERR_STREAM_WRITE_AFTER_END&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_WRITE_AFTER_END</code></h3>
<p>An attempt was made to call <a href="stream.md#writablewritechunk-encoding-callback"><code>stream.write()</code></a> after <code>stream.end()</code> has been
called.</p>
<p>&lt;a id=&quot;ERR_STRING_TOO_LONG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STRING_TOO_LONG</code></h3>
<p>An attempt has been made to create a string longer than the maximum allowed
length.</p>
<p>&lt;a id=&quot;ERR_SYNTHETIC&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SYNTHETIC</code></h3>
<p>An artificial error object used to capture the call stack for diagnostic
reports.</p>
<p>&lt;a id=&quot;ERR_SYSTEM_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SYSTEM_ERROR</code></h3>
<p>An unspecified or non-specific system error has occurred within the Node.js
process. The error object will have an <code>err.info</code> object property with
additional details.</p>
<p>&lt;a id=&quot;ERR_TEST_FAILURE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TEST_FAILURE</code></h3>
<p>This error represents a failed test. Additional information about the failure
is available via the <code>cause</code> property. The <code>failureType</code> property specifies
what the test was doing when the failure occurred.</p>
<p>&lt;a id=&quot;ERR_THROTTLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_THROTTLED</code></h3>
<p>A call was dropped because a throttled function could not invoke it immediately
or its pending queue was full.</p>
<p>&lt;a id=&quot;ERR_TLS_ALPN_CALLBACK_INVALID_RESULT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_ALPN_CALLBACK_INVALID_RESULT</code></h3>
<p>This error is thrown when an <code>ALPNCallback</code> returns a value that is not in the
list of ALPN protocols offered by the client.</p>
<p>&lt;a id=&quot;ERR_TLS_ALPN_CALLBACK_WITH_PROTOCOLS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_ALPN_CALLBACK_WITH_PROTOCOLS</code></h3>
<p>This error is thrown when creating a <code>TLSServer</code> if the TLS options include
both <code>ALPNProtocols</code> and <code>ALPNCallback</code>. These options are mutually exclusive.</p>
<p>&lt;a id=&quot;ERR_TLS_CERT_ALTNAME_FORMAT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_CERT_ALTNAME_FORMAT</code></h3>
<p>This error is thrown by <code>checkServerIdentity</code> if a user-supplied
<code>subjectaltname</code> property violates encoding rules. Certificate objects produced
by Node.js itself always comply with encoding rules and will never cause
this error.</p>
<p>&lt;a id=&quot;ERR_TLS_CERT_ALTNAME_INVALID&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_CERT_ALTNAME_INVALID</code></h3>
<p>While using TLS, the host name/IP of the peer did not match any of the
<code>subjectAltNames</code> in its certificate.</p>
<p>&lt;a id=&quot;ERR_TLS_DH_PARAM_SIZE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_DH_PARAM_SIZE</code></h3>
<p>While using TLS, the parameter offered for the Diffie-Hellman (<code>DH</code>)
key-agreement protocol is too small. By default, the key length must be greater
than or equal to 1024 bits to avoid vulnerabilities, even though it is strongly
recommended to use 2048 bits or larger for stronger security.</p>
<p>&lt;a id=&quot;ERR_TLS_HANDSHAKE_TIMEOUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_HANDSHAKE_TIMEOUT</code></h3>
<p>A TLS/SSL handshake timed out. In this case, the server must also abort the
connection.</p>
<p>&lt;a id=&quot;ERR_TLS_INVALID_CONTEXT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_INVALID_CONTEXT</code></h3>
<p>The context must be a <code>SecureContext</code>.</p>
<p>&lt;a id=&quot;ERR_TLS_INVALID_PROTOCOL_METHOD&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_INVALID_PROTOCOL_METHOD</code></h3>
<p>The specified <code>secureProtocol</code> method is invalid. It is either unknown, or
disabled because it is insecure.</p>
<p>&lt;a id=&quot;ERR_TLS_INVALID_PROTOCOL_VERSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_INVALID_PROTOCOL_VERSION</code></h3>
<p>Valid TLS protocol versions are <code>'TLSv1'</code>, <code>'TLSv1.1'</code>, or <code>'TLSv1.2'</code>.</p>
<p>&lt;a id=&quot;ERR_TLS_INVALID_STATE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_INVALID_STATE</code></h3>
<p>The TLS socket must be connected and securely established. Ensure the 'secure'
event is emitted before continuing.</p>
<p>&lt;a id=&quot;ERR_TLS_PROTOCOL_VERSION_CONFLICT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_PROTOCOL_VERSION_CONFLICT</code></h3>
<p>Attempting to set a TLS protocol <code>minVersion</code> or <code>maxVersion</code> conflicts with an
attempt to set the <code>secureProtocol</code> explicitly. Use one mechanism or the other.</p>
<p>&lt;a id=&quot;ERR_TLS_PSK_SET_IDENTITY_HINT_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_PSK_SET_IDENTITY_HINT_FAILED</code></h3>
<p>Failed to set PSK identity hint. Hint may be too long.</p>
<p>&lt;a id=&quot;ERR_TLS_RENEGOTIATION_DISABLED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_RENEGOTIATION_DISABLED</code></h3>
<p>An attempt was made to renegotiate TLS on a socket instance with renegotiation
disabled.</p>
<p>&lt;a id=&quot;ERR_TLS_RENEGOTIATION_UNSUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_RENEGOTIATION_UNSUPPORTED</code></h3>
<p>An attempt was made to renegotiate TLS, but the TLS implementation does not
support caller-initiated renegotiation.</p>
<p>&lt;a id=&quot;ERR_TLS_REQUIRED_SERVER_NAME&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_REQUIRED_SERVER_NAME</code></h3>
<p>While using TLS, the <code>server.addContext()</code> method was called without providing
a host name in the first parameter.</p>
<p>&lt;a id=&quot;ERR_TLS_SESSION_ATTACK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_SESSION_ATTACK</code></h3>
<p>An excessive amount of TLS renegotiations is detected, which is a potential
vector for denial-of-service attacks.</p>
<p>&lt;a id=&quot;ERR_TLS_SNI_FROM_SERVER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_SNI_FROM_SERVER</code></h3>
<p>An attempt was made to issue Server Name Indication from a TLS server-side
socket, which is only valid from a client.</p>
<p>&lt;a id=&quot;ERR_TRACE_EVENTS_CATEGORY_REQUIRED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRACE_EVENTS_CATEGORY_REQUIRED</code></h3>
<p>The <code>trace_events.createTracing()</code> method requires at least one trace event
category.</p>
<p>&lt;a id=&quot;ERR_TRACE_EVENTS_UNAVAILABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRACE_EVENTS_UNAVAILABLE</code></h3>
<p>The <code>node:trace_events</code> module could not be loaded because Node.js was compiled
with the <code>--without-v8-platform</code> flag, or because the process was initialized by
an embedder that provides its own V8 platform.</p>
<p>&lt;a id=&quot;ERR_TRAILING_JUNK_AFTER_STREAM_END&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRAILING_JUNK_AFTER_STREAM_END</code></h3>
<p>Trailing junk found after the end of the compressed stream.
This error is thrown when extra, unexpected data is detected
after the end of a compressed stream (for example, in zlib
or gzip decompression).</p>
<p>&lt;a id=&quot;ERR_TRANSFORM_ALREADY_TRANSFORMING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRANSFORM_ALREADY_TRANSFORMING</code></h3>
<p>A <code>Transform</code> stream finished while it was still transforming.</p>
<p>&lt;a id=&quot;ERR_TRANSFORM_WITH_LENGTH_0&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRANSFORM_WITH_LENGTH_0</code></h3>
<p>A <code>Transform</code> stream finished with data still in the write buffer.</p>
<p>&lt;a id=&quot;ERR_TTY_INIT_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TTY_INIT_FAILED</code></h3>
<p>The initialization of a TTY failed due to a system error.</p>
<p>&lt;a id=&quot;ERR_UNAVAILABLE_DURING_EXIT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNAVAILABLE_DURING_EXIT</code></h3>
<p>Function was called within a <a href="process.md#event-exit"><code>process.on('exit')</code></a> handler that shouldn't be
called within <a href="process.md#event-exit"><code>process.on('exit')</code></a> handler.</p>
<p>&lt;a id=&quot;ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNCAUGHT_EXCEPTION_CAPTURE_ALREADY_SET</code></h3>
<p><a href="process.md#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a> was called twice,
without first resetting the callback to <code>null</code>.</p>
<p>This error is designed to prevent accidentally overwriting a callback registered
from another module.</p>
<p>&lt;a id=&quot;ERR_UNESCAPED_CHARACTERS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNESCAPED_CHARACTERS</code></h3>
<p>A string that contained unescaped characters was received.</p>
<p>&lt;a id=&quot;ERR_UNHANDLED_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNHANDLED_ERROR</code></h3>
<p>An unhandled error occurred (for instance, when an <code>'error'</code> event is emitted
by an <a href="events.md#class-eventemitter"><code>EventEmitter</code></a> but an <code>'error'</code> handler is not registered).</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_BUILTIN_MODULE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_BUILTIN_MODULE</code></h3>
<p>Used to identify a specific kind of internal Node.js error that should not
typically be triggered by user code. Instances of this error point to an
internal bug within the Node.js binary itself.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_CREDENTIAL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_CREDENTIAL</code></h3>
<p>A Unix group or user identifier that does not exist was passed.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_ENCODING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_ENCODING</code></h3>
<p>An invalid or unknown encoding option was passed to an API.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_FILE_EXTENSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_FILE_EXTENSION</code></h3>
<p>An attempt was made to load a module with an unknown or unsupported file
extension.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_MODULE_FORMAT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_MODULE_FORMAT</code></h3>
<p>An attempt was made to load a module with an unknown or unsupported format.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_SIGNAL&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_SIGNAL</code></h3>
<p>An invalid or unknown process signal was passed to an API expecting a valid
signal (such as <a href="child_process.md#subprocesskillsignal"><code>subprocess.kill()</code></a>).</p>
<p>&lt;a id=&quot;ERR_UNSUPPORTED_DIR_IMPORT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNSUPPORTED_DIR_IMPORT</code></h3>
<p><code>import</code> a directory URL is unsupported. Instead,
<a href="packages.md#self-referencing-a-package-using-its-name">self-reference a package using its name</a> and <a href="packages.md#subpath-exports">define a custom subpath</a> in
the <a href="packages.md#exports"><code>&quot;exports&quot;</code></a> field of the <a href="packages.md#nodejs-packagejson-field-definitions"><code>package.json</code></a> file.</p>
<pre><code class="language-mjs">import './'; // unsupported
import './index.js'; // supported
import 'package-name'; // supported
</code></pre>
<p>&lt;a id=&quot;ERR_UNSUPPORTED_ESM_URL_SCHEME&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNSUPPORTED_ESM_URL_SCHEME</code></h3>
<p><code>import</code> with URL schemes other than <code>file</code> and <code>data</code> is unsupported.</p>
<p>&lt;a id=&quot;ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING</code></h3>
<p>Type stripping is not supported for files descendant of a <code>node_modules</code> directory.</p>
<p>&lt;a id=&quot;ERR_UNSUPPORTED_RESOLVE_REQUEST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNSUPPORTED_RESOLVE_REQUEST</code></h3>
<p>An attempt was made to resolve an invalid module referrer. This can happen when
importing or calling <code>import.meta.resolve()</code> with either:</p>
<ul>
<li>a bare specifier that is not a builtin module from a module whose URL scheme
is not <code>file</code>.</li>
<li>a <a href="https://url.spec.whatwg.org/#relative-url-string">relative URL</a> from a module whose URL scheme is not a <a href="https://url.spec.whatwg.org/#special-scheme">special scheme</a>.</li>
</ul>
<pre><code class="language-mjs">try {
  // Trying to import the package 'bare-specifier' from a `data:` URL module:
  await import('data:text/javascript,import &quot;bare-specifier&quot;');
} catch (e) {
  console.log(e.code); // ERR_UNSUPPORTED_RESOLVE_REQUEST
}
</code></pre>
<p>&lt;a id=&quot;ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX</code></h3>
<p>The provided TypeScript syntax is unsupported.
This could happen when using TypeScript syntax that requires
transformation with <a href="typescript.md#type-stripping">type-stripping</a>.</p>
<p>&lt;a id=&quot;ERR_USE_AFTER_CLOSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_USE_AFTER_CLOSE</code></h3>
<p>An attempt was made to use something that was already closed.</p>
<p>&lt;a id=&quot;ERR_VALID_PERFORMANCE_ENTRY_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VALID_PERFORMANCE_ENTRY_TYPE</code></h3>
<p>While using the Performance Timing API (<code>perf_hooks</code>), no valid performance
entry types are found.</p>
<p>&lt;a id=&quot;ERR_VFS_INVALID_TARGET&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VFS_INVALID_TARGET</code></h3>
<p>A <code>--vfs-load</code> source does not exist, is neither a regular file nor a
directory, or is a source no provider claims.</p>
<p>&lt;a id=&quot;ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING</code></h3>
<p>A dynamic import callback was not specified.</p>
<p>&lt;a id=&quot;ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING_FLAG&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING_FLAG</code></h3>
<p>A dynamic import callback was invoked without <code>--experimental-vm-modules</code>.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_ALREADY_LINKED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_ALREADY_LINKED</code></h3>
<p>The module attempted to be linked is not eligible for linking, because of one of
the following reasons:</p>
<ul>
<li>It has already been linked (<code>linkingStatus</code> is <code>'linked'</code>)</li>
<li>It is being linked (<code>linkingStatus</code> is <code>'linking'</code>)</li>
<li>Linking has failed for this module (<code>linkingStatus</code> is <code>'errored'</code>)</li>
</ul>
<p>&lt;a id=&quot;ERR_VM_MODULE_CACHED_DATA_REJECTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_CACHED_DATA_REJECTED</code></h3>
<p>The <code>cachedData</code> option passed to a module constructor is invalid.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_CANNOT_CREATE_CACHED_DATA</code></h3>
<p>Cached data cannot be created for modules which have already been evaluated.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_DIFFERENT_CONTEXT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_DIFFERENT_CONTEXT</code></h3>
<p>The module being returned from the linker function is from a different context
than the parent module. Linked modules must share the same context.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_LINK_FAILURE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_LINK_FAILURE</code></h3>
<p>The module was unable to be linked due to a failure.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_NOT_MODULE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_NOT_MODULE</code></h3>
<p>The fulfilled value of a linking promise is not a <code>vm.Module</code> object.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_STATUS&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_STATUS</code></h3>
<p>The current module's status does not allow for this operation. The specific
meaning of the error depends on the specific function.</p>
<p>&lt;a id=&quot;ERR_WASI_ALREADY_STARTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WASI_ALREADY_STARTED</code></h3>
<p>The WASI instance has already started.</p>
<p>&lt;a id=&quot;ERR_WASI_NOT_STARTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WASI_NOT_STARTED</code></h3>
<p>The WASI instance has not been started.</p>
<p>&lt;a id=&quot;ERR_WEBASSEMBLY_NOT_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WEBASSEMBLY_NOT_SUPPORTED</code></h3>
<p>A feature requiring WebAssembly was used, but WebAssembly is not supported or
has been disabled in the current environment (for example, when running with
<code>--jitless</code>).</p>
<p>&lt;a id=&quot;ERR_WEBASSEMBLY_RESPONSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WEBASSEMBLY_RESPONSE</code></h3>
<p>The <code>Response</code> that has been passed to <code>WebAssembly.compileStreaming</code> or to
<code>WebAssembly.instantiateStreaming</code> is not a valid WebAssembly response.</p>
<p>&lt;a id=&quot;ERR_WORKER_HANDLE_NOT_TRANSFERABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_HANDLE_NOT_TRANSFERABLE</code></h3>
<p>An attempt was made to transfer a <code>net.Socket</code>, <code>net.Server</code> or
<code>net.BoundSocket</code> to another thread via a <code>worker_threads</code> <code>postMessage()</code> call
while it was not in a transferable state, for example because it had already
started reading, had buffered data, or had already been adopted.</p>
<p>&lt;a id=&quot;ERR_WORKER_INIT_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_INIT_FAILED</code></h3>
<p>The <code>Worker</code> initialization failed.</p>
<p>&lt;a id=&quot;ERR_WORKER_INVALID_EXEC_ARGV&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_INVALID_EXEC_ARGV</code></h3>
<p>The <code>execArgv</code> option passed to the <code>Worker</code> constructor contains
invalid flags.</p>
<p>&lt;a id=&quot;ERR_WORKER_MESSAGING_ERRORED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_MESSAGING_ERRORED</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>The destination thread threw an error while processing a message sent via <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a>.</p>
<p>&lt;a id=&quot;ERR_WORKER_MESSAGING_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_MESSAGING_FAILED</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>The thread requested in <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a> is invalid or has no <code>workerMessage</code> listener.</p>
<p>&lt;a id=&quot;ERR_WORKER_MESSAGING_SAME_THREAD&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_MESSAGING_SAME_THREAD</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>The thread id requested in <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a> is the current thread id.</p>
<p>&lt;a id=&quot;ERR_WORKER_MESSAGING_TIMEOUT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_MESSAGING_TIMEOUT</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Sending a message via <a href="worker_threads.md#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout"><code>postMessageToThread()</code></a> timed out.</p>
<p>&lt;a id=&quot;ERR_WORKER_NOT_RUNNING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_NOT_RUNNING</code></h3>
<p>An operation failed because the <code>Worker</code> instance is not currently running.</p>
<p>&lt;a id=&quot;ERR_WORKER_OUT_OF_MEMORY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_OUT_OF_MEMORY</code></h3>
<p>The <code>Worker</code> instance terminated because it reached its memory limit.</p>
<p>&lt;a id=&quot;ERR_WORKER_PATH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_PATH</code></h3>
<p>The path for the main script of a worker is neither an absolute path
nor a relative path starting with <code>./</code> or <code>../</code>.</p>
<p>&lt;a id=&quot;ERR_WORKER_UNSERIALIZABLE_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_UNSERIALIZABLE_ERROR</code></h3>
<p>All attempts at serializing an uncaught exception from a worker thread failed.</p>
<p>&lt;a id=&quot;ERR_WORKER_UNSUPPORTED_OPERATION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_UNSUPPORTED_OPERATION</code></h3>
<p>The requested functionality is not supported in worker threads.</p>
<p>&lt;a id=&quot;ERR_ZIP_ARCHIVE_TOO_LARGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_ARCHIVE_TOO_LARGE</code></h3>
<p>An archive-level structure exceeds a limit: the archive comment exceeds the
65,535-byte encoded length that the ZIP format allows, or the archive's
central directory is too large to buffer in memory.</p>
<p>&lt;a id=&quot;ERR_ZIP_ENTRY_CORRUPT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_ENTRY_CORRUPT</code></h3>
<p>A ZIP archive entry failed CRC-32 verification, or produced more or fewer
bytes than its declared uncompressed size, while being read.</p>
<p>&lt;a id=&quot;ERR_ZIP_ENTRY_NOT_FOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_ENTRY_NOT_FOUND</code></h3>
<p>A named entry was requested from a <a href="zlib.md#class-zlibzipfile"><code>ZipFile</code></a> or <a href="zlib.md#class-zlibzipbuffer"><code>ZipBuffer</code></a> that does
not contain an entry with that name.</p>
<p>&lt;a id=&quot;ERR_ZIP_ENTRY_TOO_LARGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_ENTRY_TOO_LARGE</code></h3>
<p>A ZIP archive entry's declared size exceeds the configured limit, or a
provided entry name or comment exceeds the 65,535-byte encoded length that
the ZIP format allows.</p>
<p>&lt;a id=&quot;ERR_ZIP_INVALID_ARCHIVE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_INVALID_ARCHIVE</code></h3>
<p>Data that was expected to be a ZIP archive, or a structure within one, is
missing, out of bounds, or otherwise inconsistent with the ZIP format.</p>
<p>&lt;a id=&quot;ERR_ZIP_NOT_WRITABLE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_NOT_WRITABLE</code></h3>
<p>A mutating method (such as <code>zipFile.addEntry()</code> or <code>zipFile.delete()</code>) was
called on a <a href="zlib.md#class-zlibzipfile"><code>ZipFile</code></a> that was not opened with <code>{ writable: true }</code>.</p>
<p>&lt;a id=&quot;ERR_ZIP_UNSUPPORTED_FEATURE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZIP_UNSUPPORTED_FEATURE</code></h3>
<p>A ZIP archive uses a feature outside of what this implementation supports,
such as entry encryption, an unsupported compression method, or a multi-disk
archive.</p>
<p>&lt;a id=&quot;ERR_ZLIB_INITIALIZATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZLIB_INITIALIZATION_FAILED</code></h3>
<p>Creation of a <a href="zlib.md"><code>zlib</code></a> object failed due to incorrect configuration.</p>
<p>&lt;a id=&quot;ERR_ZSTD_INVALID_PARAM&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZSTD_INVALID_PARAM</code></h3>
<p>An invalid parameter key was passed during construction of a Zstd stream.</p>
<p>&lt;a id=&quot;HPE_CHUNK_EXTENSIONS_OVERFLOW&quot;&gt;&lt;/a&gt;</p>
<h3><code>HPE_CHUNK_EXTENSIONS_OVERFLOW</code></h3>
<p>Too much data was received for a chunk extensions. In order to protect against
malicious or malconfigured clients, if more than 16 KiB of data is received
then an <code>Error</code> with this code will be emitted.</p>
<p>&lt;a id=&quot;HPE_HEADER_OVERFLOW&quot;&gt;&lt;/a&gt;</p>
<h3><code>HPE_HEADER_OVERFLOW</code></h3>
<p>Too much HTTP header data was received. In order to protect against malicious or
malconfigured clients, if more than <code>maxHeaderSize</code> of HTTP header data is received then
HTTP parsing will abort without a request or response object being created, and
an <code>Error</code> with this code will be emitted.</p>
<p>&lt;a id=&quot;HPE_UNEXPECTED_CONTENT_LENGTH&quot;&gt;&lt;/a&gt;</p>
<h3><code>HPE_UNEXPECTED_CONTENT_LENGTH</code></h3>
<p>Server is sending both a <code>Content-Length</code> header and <code>Transfer-Encoding: chunked</code>.</p>
<p><code>Transfer-Encoding: chunked</code> allows the server to maintain an HTTP persistent
connection for dynamically generated content.
In this case, the <code>Content-Length</code> HTTP header cannot be used.</p>
<p>Use <code>Content-Length</code> or <code>Transfer-Encoding: chunked</code>.</p>
<p>&lt;a id=&quot;MODULE_NOT_FOUND&quot;&gt;&lt;/a&gt;</p>
<h3><code>MODULE_NOT_FOUND</code></h3>
<p>A module file could not be resolved by the CommonJS modules loader while
attempting a <a href="modules.md#requireid"><code>require()</code></a> operation or when loading the program entry point.</p>
<h2>Legacy Node.js error codes</h2>
<blockquote>
<p>Stability: 0 - Deprecated. These error codes are either inconsistent, or have
been removed.</p>
</blockquote>
<p>&lt;a id=&quot;ERR_CANNOT_TRANSFER_OBJECT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CANNOT_TRANSFER_OBJECT</code></h3>
<p>The value passed to <code>postMessage()</code> contained an object that is not supported
for transferring.</p>
<p>&lt;a id=&quot;ERR_CPU_USAGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CPU_USAGE</code></h3>
<p>The native call from <code>process.cpuUsage</code> could not be processed.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_HASH_DIGEST_NO_UTF16&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_HASH_DIGEST_NO_UTF16</code></h3>
<p>The UTF-16 encoding was used with <a href="crypto.md#hashdigestencoding"><code>hash.digest()</code></a>. While the
<code>hash.digest()</code> method does allow an <code>encoding</code> argument to be passed in,
causing the method to return a string rather than a <code>Buffer</code>, the UTF-16
encoding (e.g. <code>ucs</code> or <code>utf16le</code>) is not supported.</p>
<p>&lt;a id=&quot;ERR_CRYPTO_SCRYPT_INVALID_PARAMETER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_CRYPTO_SCRYPT_INVALID_PARAMETER</code></h3>
<p>An incompatible combination of options was passed to <a href="crypto.md#cryptoscryptpassword-salt-keylen-options-callback"><code>crypto.scrypt()</code></a> or
<a href="crypto.md#cryptoscryptsyncpassword-salt-keylen-options"><code>crypto.scryptSync()</code></a>. New versions of Node.js use the error code
<a href="#err_incompatible_option_pair"><code>ERR_INCOMPATIBLE_OPTION_PAIR</code></a> instead, which is consistent with other APIs.</p>
<p>&lt;a id=&quot;ERR_FS_INVALID_SYMLINK_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_FS_INVALID_SYMLINK_TYPE</code></h3>
<p>An invalid symlink type was passed to the <a href="fs.md#fssymlinktarget-path-type-callback"><code>fs.symlink()</code></a> or
<a href="fs.md#fssymlinksynctarget-path-type"><code>fs.symlinkSync()</code></a> methods.</p>
<p>&lt;a id=&quot;ERR_HTTP2_FRAME_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_FRAME_ERROR</code></h3>
<p>Used when a failure occurs sending an individual frame on the HTTP/2
session.</p>
<p>&lt;a id=&quot;ERR_HTTP2_HEADERS_OBJECT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_HEADERS_OBJECT</code></h3>
<p>Used when an HTTP/2 Headers Object is expected.</p>
<p>&lt;a id=&quot;ERR_HTTP2_HEADER_REQUIRED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_HEADER_REQUIRED</code></h3>
<p>Used when a required header is missing in an HTTP/2 message.</p>
<p>&lt;a id=&quot;ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND</code></h3>
<p>HTTP/2 informational headers must only be sent <em>prior</em> to calling the
<code>Http2Stream.prototype.respond()</code> method.</p>
<p>&lt;a id=&quot;ERR_HTTP2_STREAM_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP2_STREAM_CLOSED</code></h3>
<p>Used when an action has been performed on an HTTP/2 Stream that has already
been closed.</p>
<p>&lt;a id=&quot;ERR_HTTP_INVALID_CHAR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_HTTP_INVALID_CHAR</code></h3>
<p>Used when an invalid character is found in an HTTP response status message
(reason phrase).</p>
<p>&lt;a id=&quot;ERR_IMPORT_ASSERTION_TYPE_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ASSERTION_TYPE_FAILED</code></h3>
<p>An import assertion has failed, preventing the specified module to be imported.</p>
<p>&lt;a id=&quot;ERR_IMPORT_ASSERTION_TYPE_MISSING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ASSERTION_TYPE_MISSING</code></h3>
<p>An import assertion is missing, preventing the specified module to be imported.</p>
<p>&lt;a id=&quot;ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_IMPORT_ASSERTION_TYPE_UNSUPPORTED</code></h3>
<p>An import attribute is not supported by this version of Node.js.</p>
<p>&lt;a id=&quot;ERR_INDEX_OUT_OF_RANGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INDEX_OUT_OF_RANGE</code></h3>
<p>A given index was out of the accepted range (e.g. negative offsets).</p>
<p>&lt;a id=&quot;ERR_INVALID_OPT_VALUE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_OPT_VALUE</code></h3>
<p>An invalid or unexpected value was passed in an options object.</p>
<p>&lt;a id=&quot;ERR_INVALID_OPT_VALUE_ENCODING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_OPT_VALUE_ENCODING</code></h3>
<p>An invalid or unknown file encoding was passed.</p>
<p>&lt;a id=&quot;ERR_INVALID_PERFORMANCE_MARK&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_PERFORMANCE_MARK</code></h3>
<p>While using the Performance Timing API (<code>perf_hooks</code>), a performance mark is
invalid.</p>
<p>&lt;a id=&quot;ERR_INVALID_TRANSFER_OBJECT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_INVALID_TRANSFER_OBJECT</code></h3>
<p>An invalid transfer object was passed to <code>postMessage()</code>.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_ASSERT_INTEGRITY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_ASSERT_INTEGRITY</code></h3>
<p>An attempt was made to load a resource, but the resource did not match the
integrity defined by the policy manifest. See the documentation for policy
manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_DEPENDENCY_MISSING&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_DEPENDENCY_MISSING</code></h3>
<p>An attempt was made to load a resource, but the resource was not listed as a
dependency from the location that attempted to load it. See the documentation
for policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_INTEGRITY_MISMATCH&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_INTEGRITY_MISMATCH</code></h3>
<p>An attempt was made to load a policy manifest, but the manifest had multiple
entries for a resource which did not match each other. Update the manifest
entries to match in order to resolve this error. See the documentation for
policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_INVALID_RESOURCE_FIELD&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_INVALID_RESOURCE_FIELD</code></h3>
<p>A policy manifest resource had an invalid value for one of its fields. Update
the manifest entry to match in order to resolve this error. See the
documentation for policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_INVALID_SPECIFIER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_INVALID_SPECIFIER</code></h3>
<p>A policy manifest resource had an invalid value for one of its dependency
mappings. Update the manifest entry to match to resolve this error. See the
documentation for policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_PARSE_POLICY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_PARSE_POLICY</code></h3>
<p>An attempt was made to load a policy manifest, but the manifest was unable to
be parsed. See the documentation for policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_TDZ&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_TDZ</code></h3>
<p>An attempt was made to read from a policy manifest, but the manifest
initialization has not yet taken place. This is likely a bug in Node.js.</p>
<p>&lt;a id=&quot;ERR_MANIFEST_UNKNOWN_ONERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MANIFEST_UNKNOWN_ONERROR</code></h3>
<p>A policy manifest was loaded, but had an unknown value for its &quot;onerror&quot;
behavior. See the documentation for policy manifests for more information.</p>
<p>&lt;a id=&quot;ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST</code></h3>
<p>This error code was replaced by <a href="#err_missing_transferable_in_transfer_list"><code>ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST</code></a>
in Node.js 15.0.0, because it is no longer accurate as other types of
transferable objects also exist now.</p>
<p>&lt;a id=&quot;ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_MISSING_TRANSFERABLE_IN_TRANSFER_LIST</code></h3>
<p>An object that needs to be explicitly listed in the <code>transferList</code> argument
is in the object passed to a <a href="worker_threads.md#portpostmessagevalue-transferlist"><code>postMessage()</code></a> call, but is not provided
in the <code>transferList</code> for that call. Usually, this is a <code>MessagePort</code>.</p>
<p>In Node.js versions prior to v15.0.0, the error code being used here was
<a href="#err_missing_message_port_in_transfer_list"><code>ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST</code></a>. However, the set of
transferable object types has been expanded to cover more types than
<code>MessagePort</code>.</p>
<p>&lt;a id=&quot;ERR_NAPI_CONS_PROTOTYPE_OBJECT&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_CONS_PROTOTYPE_OBJECT</code></h3>
<p>Used by the <code>Node-API</code> when <code>Constructor.prototype</code> is not an object.</p>
<p>&lt;a id=&quot;ERR_NAPI_TSFN_START_IDLE_LOOP&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_TSFN_START_IDLE_LOOP</code></h3>
<p>On the main thread, values are removed from the queue associated with the
thread-safe function in an idle loop. This error indicates that an error
has occurred when attempting to start the loop.</p>
<p>&lt;a id=&quot;ERR_NAPI_TSFN_STOP_IDLE_LOOP&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NAPI_TSFN_STOP_IDLE_LOOP</code></h3>
<p>Once no more items are left in the queue, the idle loop must be suspended. This
error indicates that the idle loop has failed to stop.</p>
<p>&lt;a id=&quot;ERR_NO_LONGER_SUPPORTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_NO_LONGER_SUPPORTED</code></h3>
<p>A Node.js API was called in an unsupported manner, such as
<code>Buffer.write(string, encoding, offset[, length])</code>.</p>
<p>&lt;a id=&quot;ERR_OUTOFMEMORY&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_OUTOFMEMORY</code></h3>
<p>Used generically to identify that an operation caused an out of memory
condition.</p>
<p>&lt;a id=&quot;ERR_PARSE_HISTORY_DATA&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_PARSE_HISTORY_DATA</code></h3>
<p>The <code>node:repl</code> module was unable to parse data from the REPL history file.</p>
<p>&lt;a id=&quot;ERR_SOCKET_CANNOT_SEND&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_SOCKET_CANNOT_SEND</code></h3>
<p>Data could not be sent on a socket.</p>
<p>&lt;a id=&quot;ERR_STDERR_CLOSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STDERR_CLOSE</code></h3>
<p>An attempt was made to close the <code>process.stderr</code> stream. By design, Node.js
does not allow <code>stdout</code> or <code>stderr</code> streams to be closed by user code.</p>
<p>&lt;a id=&quot;ERR_STDOUT_CLOSE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STDOUT_CLOSE</code></h3>
<p>An attempt was made to close the <code>process.stdout</code> stream. By design, Node.js
does not allow <code>stdout</code> or <code>stderr</code> streams to be closed by user code.</p>
<p>&lt;a id=&quot;ERR_STREAM_READ_NOT_IMPLEMENTED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_STREAM_READ_NOT_IMPLEMENTED</code></h3>
<p>Used when an attempt is made to use a readable stream that has not implemented
<a href="stream.md#readable_readsize"><code>readable._read()</code></a>.</p>
<p>&lt;a id=&quot;ERR_TAP_LEXER_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TAP_LEXER_ERROR</code></h3>
<p>An error representing a failing lexer state.</p>
<p>&lt;a id=&quot;ERR_TAP_PARSER_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TAP_PARSER_ERROR</code></h3>
<p>An error representing a failing parser state. Additional information about
the token causing the error is available via the <code>cause</code> property.</p>
<p>&lt;a id=&quot;ERR_TAP_VALIDATION_ERROR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TAP_VALIDATION_ERROR</code></h3>
<p>This error represents a failed TAP validation.</p>
<p>&lt;a id=&quot;ERR_TLS_RENEGOTIATION_FAILED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TLS_RENEGOTIATION_FAILED</code></h3>
<p>Used when a TLS renegotiation request has failed in a non-specific way.</p>
<p>&lt;a id=&quot;ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_TRANSFERRING_EXTERNALIZED_SHAREDARRAYBUFFER</code></h3>
<p>A <code>SharedArrayBuffer</code> whose memory is not managed by the JavaScript engine
or by Node.js was encountered during serialization. Such a <code>SharedArrayBuffer</code>
cannot be serialized.</p>
<p>This can only happen when native addons create <code>SharedArrayBuffer</code>s in
&quot;externalized&quot; mode, or put existing <code>SharedArrayBuffer</code> into externalized mode.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_STDIN_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_STDIN_TYPE</code></h3>
<p>An attempt was made to launch a Node.js process with an unknown <code>stdin</code> file
type. This error is usually an indication of a bug within Node.js itself,
although it is possible for user code to trigger it.</p>
<p>&lt;a id=&quot;ERR_UNKNOWN_STREAM_TYPE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_UNKNOWN_STREAM_TYPE</code></h3>
<p>An attempt was made to launch a Node.js process with an unknown <code>stdout</code> or
<code>stderr</code> file type. This error is usually an indication of a bug within Node.js
itself, although it is possible for user code to trigger it.</p>
<p>&lt;a id=&quot;ERR_V8BREAKITERATOR&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_V8BREAKITERATOR</code></h3>
<p>The V8 <code>BreakIterator</code> API was used but the full ICU data set is not installed.</p>
<p>&lt;a id=&quot;ERR_VALUE_OUT_OF_RANGE&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VALUE_OUT_OF_RANGE</code></h3>
<p>Used when a given value is out of the accepted range.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_LINKING_ERRORED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_LINKING_ERRORED</code></h3>
<p>The linker function returned a module for which linking has failed.</p>
<p>&lt;a id=&quot;ERR_VM_MODULE_NOT_LINKED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_VM_MODULE_NOT_LINKED</code></h3>
<p>The module must be successfully linked before instantiation.</p>
<p>&lt;a id=&quot;ERR_WORKER_UNSUPPORTED_EXTENSION&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_WORKER_UNSUPPORTED_EXTENSION</code></h3>
<p>The pathname used for the main script of a worker has an
unknown file extension.</p>
<p>&lt;a id=&quot;ERR_ZLIB_BINDING_CLOSED&quot;&gt;&lt;/a&gt;</p>
<h3><code>ERR_ZLIB_BINDING_CLOSED</code></h3>
<p>Used when an attempt is made to use a <code>zlib</code> object after it has already been
closed.</p>
<p>&lt;a id=&quot;openssl-error-codes&quot;&gt;&lt;/a&gt;</p>
<h2>OpenSSL Error Codes</h2>
<p>&lt;a id=&quot;Time Validity Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Time Validity Errors</h3>
<p>&lt;a id=&quot;CERT_NOT_YET_VALID&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_NOT_YET_VALID</code></h4>
<p>The certificate is not yet valid: the notBefore date is after the current time.</p>
<p>&lt;a id=&quot;CERT_HAS_EXPIRED&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_HAS_EXPIRED</code></h4>
<p>The certificate has expired: the notAfter date is before the current time.</p>
<p>&lt;a id=&quot;CRL_NOT_YET_VALID&quot;&gt;&lt;/a&gt;</p>
<h4><code>CRL_NOT_YET_VALID</code></h4>
<p>The certificate revocation list (CRL) has a future issue date.</p>
<p>&lt;a id=&quot;CRL_HAS_EXPIRED&quot;&gt;&lt;/a&gt;</p>
<h4><code>CRL_HAS_EXPIRED</code></h4>
<p>The certificate revocation list (CRL) has expired.</p>
<p>&lt;a id=&quot;CERT_REVOKED&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_REVOKED</code></h4>
<p>The certificate has been revoked; it is on a certificate revocation list (CRL).</p>
<p>&lt;a id=&quot;Trust or Chain Related Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Trust or Chain Related Errors</h3>
<p>&lt;a id=&quot;UNABLE_TO_GET_ISSUER_CERT&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_GET_ISSUER_CERT</code></h4>
<p>The issuer certificate of a looked up certificate could not be found. This
normally means the list of trusted certificates is not complete.</p>
<p>&lt;a id=&quot;UNABLE_TO_GET_ISSUER_CERT_LOCALLY&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_GET_ISSUER_CERT_LOCALLY</code></h4>
<p>The certificate’s issuer is not known. This is the case if the issuer is not
included in the trusted certificate list.</p>
<p>&lt;a id=&quot;DEPTH_ZERO_SELF_SIGNED_CERT&quot;&gt;&lt;/a&gt;</p>
<h4><code>DEPTH_ZERO_SELF_SIGNED_CERT</code></h4>
<p>The passed certificate is self-signed and the same certificate cannot be found
in the list of trusted certificates.</p>
<p>&lt;a id=&quot;SELF_SIGNED_CERT_IN_CHAIN&quot;&gt;&lt;/a&gt;</p>
<h4><code>SELF_SIGNED_CERT_IN_CHAIN</code></h4>
<p>The certificate’s issuer is not known. This is the case if the issuer is not
included in the trusted certificate list.</p>
<p>&lt;a id=&quot;CERT_CHAIN_TOO_LONG&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_CHAIN_TOO_LONG</code></h4>
<p>The certificate chain length is greater than the maximum depth.</p>
<p>&lt;a id=&quot;UNABLE_TO_GET_CRL&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_GET_CRL</code></h4>
<p>The CRL reference by the certificate could not be found.</p>
<p>&lt;a id=&quot;UNABLE_TO_VERIFY_LEAF_SIGNATURE&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_VERIFY_LEAF_SIGNATURE</code></h4>
<p>No signatures could be verified because the chain contains only one certificate
and it is not self signed.</p>
<p>&lt;a id=&quot;CERT_UNTRUSTED&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_UNTRUSTED</code></h4>
<p>The root certificate authority (CA) is not marked as trusted for the specified
purpose.</p>
<p>&lt;a id=&quot;Basic Extension Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Basic Extension Errors</h3>
<p>&lt;a id=&quot;INVALID_CA&quot;&gt;&lt;/a&gt;</p>
<h4><code>INVALID_CA</code></h4>
<p>A CA certificate is invalid. Either it is not a CA or its extensions are not
consistent with the supplied purpose.</p>
<p>&lt;a id=&quot;PATH_LENGTH_EXCEEDED&quot;&gt;&lt;/a&gt;</p>
<h4><code>PATH_LENGTH_EXCEEDED</code></h4>
<p>The basicConstraints pathlength parameter has been exceeded.</p>
<p>&lt;a id=&quot;Name Related Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Name Related Errors</h3>
<p>&lt;a id=&quot;HOSTNAME_MISMATCH&quot;&gt;&lt;/a&gt;</p>
<h4><code>HOSTNAME_MISMATCH</code></h4>
<p>Certificate does not match provided name.</p>
<p>&lt;a id=&quot;Usage and Policy Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Usage and Policy Errors</h3>
<p>&lt;a id=&quot;INVALID_PURPOSE&quot;&gt;&lt;/a&gt;</p>
<h4><code>INVALID_PURPOSE</code></h4>
<p>The supplied certificate cannot be used for the specified purpose.</p>
<p>&lt;a id=&quot;CERT_REJECTED&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_REJECTED</code></h4>
<p>The root CA is marked to reject the specified purpose.</p>
<p>&lt;a id=&quot;Formatting Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Formatting Errors</h3>
<p>&lt;a id=&quot;CERT_SIGNATURE_FAILURE&quot;&gt;&lt;/a&gt;</p>
<h4><code>CERT_SIGNATURE_FAILURE</code></h4>
<p>The signature of the certificate is invalid.</p>
<p>&lt;a id=&quot;CRL_SIGNATURE_FAILURE&quot;&gt;&lt;/a&gt;</p>
<h4><code>CRL_SIGNATURE_FAILURE</code></h4>
<p>The signature of the certificate revocation list (CRL) is invalid.</p>
<p>&lt;a id=&quot;ERROR_IN_CERT_NOT_BEFORE_FIELD&quot;&gt;&lt;/a&gt;</p>
<h4><code>ERROR_IN_CERT_NOT_BEFORE_FIELD</code></h4>
<p>The certificate notBefore field contains an invalid time.</p>
<p>&lt;a id=&quot;ERROR_IN_CERT_NOT_AFTER_FIELD&quot;&gt;&lt;/a&gt;</p>
<h4><code>ERROR_IN_CERT_NOT_AFTER_FIELD</code></h4>
<p>The certificate notAfter field contains an invalid time.</p>
<p>&lt;a id=&quot;ERROR_IN_CRL_LAST_UPDATE_FIELD&quot;&gt;&lt;/a&gt;</p>
<h4><code>ERROR_IN_CRL_LAST_UPDATE_FIELD</code></h4>
<p>The CRL lastUpdate field contains an invalid time.</p>
<p>&lt;a id=&quot;ERROR_IN_CRL_NEXT_UPDATE_FIELD&quot;&gt;&lt;/a&gt;</p>
<h4><code>ERROR_IN_CRL_NEXT_UPDATE_FIELD</code></h4>
<p>The CRL nextUpdate field contains an invalid time.</p>
<p>&lt;a id=&quot;UNABLE_TO_DECRYPT_CERT_SIGNATURE&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_DECRYPT_CERT_SIGNATURE</code></h4>
<p>The certificate signature could not be decrypted. This means that the actual
signature value could not be determined rather than it not matching the expected
value, this is only meaningful for RSA keys.</p>
<p>&lt;a id=&quot;UNABLE_TO_DECRYPT_CRL_SIGNATURE&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_DECRYPT_CRL_SIGNATURE</code></h4>
<p>The certificate revocation list (CRL) signature could not be decrypted: this
means that the actual signature value could not be determined rather than it not
matching the expected value.</p>
<p>&lt;a id=&quot;UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY&quot;&gt;&lt;/a&gt;</p>
<h4><code>UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY</code></h4>
<p>The public key in the certificate SubjectPublicKeyInfo could not be read.</p>
<p>&lt;a id=&quot;Other OpenSSL Errors&quot;&gt;&lt;/a&gt;</p>
<h3>Other OpenSSL Errors</h3>
<p>&lt;a id=&quot;OUT_OF_MEM&quot;&gt;&lt;/a&gt;</p>
<h4><code>OUT_OF_MEM</code></h4>
<p>An error occurred trying to allocate memory. This should never happen.</p>
