---
id: "js-en-function-node-console"
language: "js"
lang: "en"
category: "function"
name: "node:console"
title: "Console"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/console.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Console

<h1>Console</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:console</code> module provides a simple debugging console that is similar to
the JavaScript console mechanism provided by web browsers.</p>
<p>The module exports two specific components:</p>
<ul>
<li>A <code>Console</code> class with methods such as <code>console.log()</code>, <code>console.error()</code>, and
<code>console.warn()</code> that can be used to write to any Node.js stream.</li>
<li>A global <code>console</code> instance configured to write to <a href="process.md#processstdout"><code>process.stdout</code></a> and
<a href="process.md#processstderr"><code>process.stderr</code></a>. The global <code>console</code> can be used without calling
<code>require('node:console')</code>.</li>
</ul>
<p><em><strong>Warning</strong></em>: The global console object's methods are neither consistently
synchronous like the browser APIs they resemble, nor are they consistently
asynchronous like all other Node.js streams. Programs that desire to depend
on the synchronous / asynchronous behavior of the console functions should
first figure out the nature of console's backing stream. This is because the
stream is dependent on the underlying platform and standard stream
configuration of the current process. See the <a href="process.md#a-note-on-process-io">note on process I/O</a> for
more information.</p>
<p>Example using the global <code>console</code>:</p>
<pre><code class="language-js">console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
</code></pre>
<p>Example using the <code>Console</code> class:</p>
<pre><code class="language-js">const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);

myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err

const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
</code></pre>
<h2>Class: <code>Console</code></h2>
<p>The <code>Console</code> class can be used to create a simple logger with configurable
output streams and can be accessed using either <code>require('node:console').Console</code>
or <code>console.Console</code> (or their destructured counterparts):</p>
<pre><code class="language-mjs">import { Console } from 'node:console';
</code></pre>
<pre><code class="language-cjs">const { Console } = require('node:console');
</code></pre>
<pre><code class="language-js">const { Console } = console;
</code></pre>
<h3><code>new Console(stdout[, stderr][, ignoreErrors])</code></h3>
<h3><code>new Console(options)</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>stdout</code> {stream.Writable}</li>
<li><code>stderr</code> {stream.Writable}</li>
<li><code>ignoreErrors</code> {boolean} Ignore errors when writing to the underlying
streams. <strong>Default:</strong> <code>true</code>.</li>
<li><code>colorMode</code> {boolean|string} Set color support for this <code>Console</code> instance.
Setting to <code>true</code> enables coloring while inspecting values. Setting to
<code>false</code> disables coloring while inspecting values. Setting to
<code>'auto'</code> makes color support depend on the value of the <code>isTTY</code> property
and the value returned by <code>getColorDepth()</code> on the respective stream. This
option can not be used, if <code>inspectOptions.colors</code> is set as well.
<strong>Default:</strong> <code>'auto'</code>.</li>
<li><code>inspectOptions</code> {Object|Map} Specifies options that are passed along to
<a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a>. Can be an options object or, if different options
for stdout and stderr are desired, a <code>Map</code> from stream objects to options.</li>
<li><code>groupIndentation</code> {number} Set group indentation.
<strong>Default:</strong> <code>2</code>.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>Console</code> with one or two writable stream instances. <code>stdout</code> is a
writable stream to print log or info output. <code>stderr</code> is used for warning or
error output. If <code>stderr</code> is not provided, <code>stdout</code> is used for <code>stderr</code>.</p>
<pre><code class="language-mjs">import { createWriteStream } from 'node:fs';
import { Console } from 'node:console';
// Alternatively
// const { Console } = console;

const output = createWriteStream('./stdout.log');
const errorOutput = createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
const count = 5;
logger.log('count: %d', count);
// In stdout.log: count 5
</code></pre>
<pre><code class="language-cjs">const fs = require('node:fs');
const { Console } = require('node:console');
// Alternatively
// const { Console } = console;

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
const count = 5;
logger.log('count: %d', count);
// In stdout.log: count 5
</code></pre>
<p>The global <code>console</code> is a special <code>Console</code> whose output is sent to
<a href="process.md#processstdout"><code>process.stdout</code></a> and <a href="process.md#processstderr"><code>process.stderr</code></a>. It is equivalent to calling:</p>
<pre><code class="language-js">new Console({ stdout: process.stdout, stderr: process.stderr });
</code></pre>
<h3><code>console.assert(value[, ...message])</code></h3>
<ul>
<li><code>value</code> {any} The value tested for being truthy.</li>
<li><code>...message</code> {any} All arguments besides <code>value</code> are used as error message.</li>
</ul>
<p><code>console.assert()</code> writes a message if <code>value</code> is <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">falsy</a> or omitted. It only
writes a message and does not otherwise affect execution. The output always
starts with <code>&quot;Assertion failed&quot;</code>. If provided, <code>message</code> is formatted using
<a href="util.md#utilformatformat-args"><code>util.format()</code></a>.</p>
<p>If <code>value</code> is <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">truthy</a>, nothing happens.</p>
<pre><code class="language-js">console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();
// Assertion failed
</code></pre>
<h3><code>console.clear()</code></h3>
<p>When <code>stdout</code> is a TTY, calling <code>console.clear()</code> will attempt to clear the
TTY. When <code>stdout</code> is not a TTY, this method does nothing.</p>
<p>The specific operation of <code>console.clear()</code> can vary across operating systems
and terminal types. For most Linux operating systems, <code>console.clear()</code>
operates similarly to the <code>clear</code> shell command. On Windows, <code>console.clear()</code>
will clear only the output in the current terminal viewport for the Node.js
binary.</p>
<h3><code>console.count([label])</code></h3>
<ul>
<li><code>label</code> {string} The display label for the counter. <strong>Default:</strong> <code>'default'</code>.</li>
</ul>
<p>Maintains an internal counter specific to <code>label</code> and outputs to <code>stdout</code> the
number of times <code>console.count()</code> has been called with the given <code>label</code>.</p>
<pre><code class="language-console">&gt; console.count()
default: 1
undefined
&gt; console.count('default')
default: 2
undefined
&gt; console.count('abc')
abc: 1
undefined
&gt; console.count('xyz')
xyz: 1
undefined
&gt; console.count('abc')
abc: 2
undefined
&gt; console.count()
default: 3
undefined
&gt;
</code></pre>
<h3><code>console.countReset([label])</code></h3>
<ul>
<li><code>label</code> {string} The display label for the counter. <strong>Default:</strong> <code>'default'</code>.</li>
</ul>
<p>Resets the internal counter specific to <code>label</code>.</p>
<pre><code class="language-console">&gt; console.count('abc');
abc: 1
undefined
&gt; console.countReset('abc');
undefined
&gt; console.count('abc');
abc: 1
undefined
&gt;
</code></pre>
<h3><code>console.debug(data[, ...args])</code></h3>
<ul>
<li><code>data</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>The <code>console.debug()</code> function is an alias for <a href="#consolelogdata-args"><code>console.log()</code></a>.</p>
<h3><code>console.dir(obj[, options])</code></h3>
<ul>
<li><code>obj</code> {any}</li>
<li><code>options</code> {Object}
<ul>
<li><code>showHidden</code> {boolean} If <code>true</code> then the object's non-enumerable and symbol
properties will be shown too. <strong>Default:</strong> <code>false</code>.</li>
<li><code>depth</code> {number} Tells <a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> how many times to recurse while
formatting the object. This is useful for inspecting large complicated
objects. To make it recurse indefinitely, pass <code>null</code>. <strong>Default:</strong> <code>2</code>.</li>
<li><code>colors</code> {boolean} If <code>true</code>, then the output will be styled with ANSI color
codes. Colors are customizable;
see <a href="util.md#customizing-utilinspect-colors">customizing <code>util.inspect()</code> colors</a>. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Uses <a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> on <code>obj</code> and prints the resulting string to <code>stdout</code>.
This function bypasses any custom <code>inspect()</code> function defined on <code>obj</code>.</p>
<h3><code>console.dirxml(...data)</code></h3>
<ul>
<li><code>...data</code> {any}</li>
</ul>
<p>This method calls <code>console.log()</code> passing it the arguments received.
This method does not produce any XML formatting.</p>
<h3><code>console.error([data][, ...args])</code></h3>
<ul>
<li><code>data</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>Prints to <code>stderr</code> with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to printf(3) (the arguments are all passed to
<a href="util.md#utilformatformat-args"><code>util.format()</code></a>).</p>
<pre><code class="language-js">const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
</code></pre>
<p>If formatting elements (e.g. <code>%d</code>) are not found in the first string then
<a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> is called on each argument and the resulting string
values are concatenated. See <a href="util.md#utilformatformat-args"><code>util.format()</code></a> for more information.</p>
<h3><code>console.group([...label])</code></h3>
<ul>
<li><code>...label</code> {any}</li>
</ul>
<p>Increases indentation of subsequent lines by spaces for <code>groupIndentation</code>
length.</p>
<p>If one or more <code>label</code>s are provided, those are printed first without the
additional indentation.</p>
<h3><code>console.groupCollapsed()</code></h3>
<p>An alias for <a href="#consolegrouplabel"><code>console.group()</code></a>.</p>
<h3><code>console.groupEnd()</code></h3>
<p>Decreases indentation of subsequent lines by spaces for <code>groupIndentation</code>
length.</p>
<h3><code>console.info([data][, ...args])</code></h3>
<ul>
<li><code>data</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>The <code>console.info()</code> function is an alias for <a href="#consolelogdata-args"><code>console.log()</code></a>.</p>
<h3><code>console.log([data][, ...args])</code></h3>
<ul>
<li><code>data</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>Prints to <code>stdout</code> with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to printf(3) (the arguments are all passed to
<a href="util.md#utilformatformat-args"><code>util.format()</code></a>).</p>
<pre><code class="language-js">const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
</code></pre>
<p>See <a href="util.md#utilformatformat-args"><code>util.format()</code></a> for more information.</p>
<h3><code>console.table(tabularData[, properties])</code></h3>
<ul>
<li><code>tabularData</code> {any}</li>
<li><code>properties</code> {string[]} Alternate properties for constructing the table.</li>
</ul>
<p>Try to construct a table with the columns of the properties of <code>tabularData</code>
(or use <code>properties</code>) and rows of <code>tabularData</code> and log it. Falls back to just
logging the argument if it can't be parsed as tabular.</p>
<pre><code class="language-js">// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │ a   │ b   │
// ├─────────┼─────┼─────┤
// │ 0       │ 1   │ 'Y' │
// │ 1       │ 'Z' │ 2   │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │ a   │
// ├─────────┼─────┤
// │ 0       │ 1   │
// │ 1       │ 'Z' │
// └─────────┴─────┘
</code></pre>
<h3><code>console.time([label])</code></h3>
<ul>
<li><code>label</code> {string} <strong>Default:</strong> <code>'default'</code></li>
</ul>
<p>Starts a timer that can be used to compute the duration of an operation. Timers
are identified by a unique <code>label</code>. Use the same <code>label</code> when calling
<a href="#consoletimeendlabel"><code>console.timeEnd()</code></a> to stop the timer and output the elapsed time in
suitable time units to <code>stdout</code>. For example, if the elapsed
time is 3869ms, <code>console.timeEnd()</code> displays &quot;3.869s&quot;.</p>
<h3><code>console.timeEnd([label])</code></h3>
<ul>
<li><code>label</code> {string} <strong>Default:</strong> <code>'default'</code></li>
</ul>
<p>Stops a timer that was previously started by calling <a href="#consoletimelabel"><code>console.time()</code></a> and
prints the result to <code>stdout</code>:</p>
<pre><code class="language-js">console.time('bunch-of-stuff');
// Do a bunch of stuff.
console.timeEnd('bunch-of-stuff');
// Prints: bunch-of-stuff: 225.438ms
</code></pre>
<h3><code>console.timeLog([label][, ...data])</code></h3>
<ul>
<li><code>label</code> {string} <strong>Default:</strong> <code>'default'</code></li>
<li><code>...data</code> {any}</li>
</ul>
<p>For a timer that was previously started by calling <a href="#consoletimelabel"><code>console.time()</code></a>, prints
the elapsed time and other <code>data</code> arguments to <code>stdout</code>:</p>
<pre><code class="language-js">console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints &quot;process: 365.227ms 42&quot;.
doExpensiveProcess2(value);
console.timeEnd('process');
</code></pre>
<h3><code>console.trace([message][, ...args])</code></h3>
<ul>
<li><code>message</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>Prints to <code>stderr</code> the string <code>'Trace: '</code>, followed by the <a href="util.md#utilformatformat-args"><code>util.format()</code></a>
formatted message and stack trace to the current position in the code.</p>
<pre><code class="language-js">console.trace('Show me');
// Prints: (stack trace will vary based on where trace is called)
//  Trace: Show me
//    at repl:2:9
//    at REPLServer.defaultEval (repl.js:248:27)
//    at bound (domain.js:287:14)
//    at REPLServer.runBound [as eval] (domain.js:300:12)
//    at REPLServer.&lt;anonymous&gt; (repl.js:412:12)
//    at emitOne (events.js:82:20)
//    at REPLServer.emit (events.js:169:7)
//    at REPLServer.Interface._onLine (readline.js:210:10)
//    at REPLServer.Interface._line (readline.js:549:8)
//    at REPLServer.Interface._ttyWrite (readline.js:826:14)
</code></pre>
<h3><code>console.warn([data][, ...args])</code></h3>
<ul>
<li><code>data</code> {any}</li>
<li><code>...args</code> {any}</li>
</ul>
<p>The <code>console.warn()</code> function is an alias for <a href="#consoleerrordata-args"><code>console.error()</code></a>.</p>
<h2>Inspector only methods</h2>
<p>The following methods are exposed by the V8 engine in the general API but do
not display anything unless used in conjunction with the <a href="debugger.md">inspector</a>
(<code>--inspect</code> flag).</p>
<h3><code>console.profile([label])</code></h3>
<ul>
<li><code>label</code> {string}</li>
</ul>
<p>This method does not display anything unless used in the inspector. The
<code>console.profile()</code> method starts a JavaScript CPU profile with an optional
label until <a href="#consoleprofileendlabel"><code>console.profileEnd()</code></a> is called. The profile is then added to
the <strong>Profile</strong> panel of the inspector.</p>
<pre><code class="language-js">console.profile('MyLabel');
// Some code
console.profileEnd('MyLabel');
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.
</code></pre>
<h3><code>console.profileEnd([label])</code></h3>
<ul>
<li><code>label</code> {string}</li>
</ul>
<p>This method does not display anything unless used in the inspector. Stops the
current JavaScript CPU profiling session if one has been started and prints
the report to the <strong>Profiles</strong> panel of the inspector. See
<a href="#consoleprofilelabel"><code>console.profile()</code></a> for an example.</p>
<p>If this method is called without a label, the most recently started profile is
stopped.</p>
<h3><code>console.timeStamp([label])</code></h3>
<ul>
<li><code>label</code> {string}</li>
</ul>
<p>This method does not display anything unless used in the inspector. The
<code>console.timeStamp()</code> method adds an event with the label <code>'label'</code> to the
<strong>Timeline</strong> panel of the inspector.</p>
