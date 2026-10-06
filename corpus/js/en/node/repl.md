---
id: "js-en-function-node-repl"
language: "js"
lang: "en"
category: "function"
name: "node:repl"
title: "REPL"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/repl.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# REPL

<h1>REPL</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:repl</code> module provides a Read-Eval-Print-Loop (REPL) implementation
that is available both as a standalone program or includible in other
applications. It can be accessed using:</p>
<pre><code class="language-mjs">import repl from 'node:repl';
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');
</code></pre>
<h2>Design and features</h2>
<p>The <code>node:repl</code> module exports the <a href="#class-replserver"><code>repl.REPLServer</code></a> class. While running,
instances of <a href="#class-replserver"><code>repl.REPLServer</code></a> will accept individual lines of user input,
evaluate those according to a user-defined evaluation function, then output the
result. Input and output may be from <code>stdin</code> and <code>stdout</code>, respectively, or may
be connected to any Node.js <a href="stream.md">stream</a>.</p>
<p>Instances of <a href="#class-replserver"><code>repl.REPLServer</code></a> support automatic completion of inputs,
completion preview, simplistic Emacs-style line editing, multi-line inputs,
<a href="https://en.wikipedia.org/wiki/Z_shell">ZSH</a>-like reverse-i-search, <a href="https://en.wikipedia.org/wiki/Z_shell">ZSH</a>-like substring-based history search,
ANSI-styled output, saving and restoring current REPL session state, error
recovery, and customizable evaluation functions. Terminals that do not support
ANSI styles and Emacs-style line editing automatically fall back to a limited
feature set.</p>
<h3>Commands and special keys</h3>
<p>The following special commands are supported by all REPL instances:</p>
<ul>
<li><code>.break</code>: When in the process of inputting a multi-line expression, enter
the <code>.break</code> command (or press &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) to abort
further input or processing of that expression.</li>
<li><code>.clear</code>: Resets the REPL <code>context</code> to an empty object and clears any
multi-line expression being input.</li>
<li><code>.exit</code>: Close the I/O stream, causing the REPL to exit.</li>
<li><code>.help</code>: Show this list of special commands.</li>
<li><code>.save</code>: Save the current REPL session to a file:
<code>&gt; .save ./file/to/save.js</code></li>
<li><code>.load</code>: Load a file into the current REPL session.
<code>&gt; .load ./file/to/load.js</code></li>
<li><code>.editor</code>: Enter editor mode (&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt; to
finish, &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; to cancel).</li>
</ul>
<pre><code class="language-console">&gt; .editor
// Entering editor mode (^D to finish, ^C to cancel)
function welcome(name) {
  return `Hello ${name}!`;
}

welcome('Node.js User');

// ^D
'Hello Node.js User!'
&gt;
</code></pre>
<p>The following key combinations in the REPL have these special effects:</p>
<ul>
<li>&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;: When pressed once, has the same effect as the
<code>.break</code> command.
When pressed twice on a blank line, has the same effect as the <code>.exit</code>
command.</li>
<li>&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt;: Has the same effect as the <code>.exit</code> command.</li>
<li>&lt;kbd&gt;Tab&lt;/kbd&gt;: When pressed on a blank line, displays global and local
(scope) variables. When pressed while entering other input, displays relevant
autocompletion options.</li>
</ul>
<p>For key bindings related to the reverse-i-search, see <a href="#reverse-i-search"><code>reverse-i-search</code></a>.
For all other key bindings, see <a href="readline.md#tty-keybindings">TTY keybindings</a>.</p>
<h3>Default evaluation</h3>
<p>By default, all instances of <a href="#class-replserver"><code>repl.REPLServer</code></a> use an evaluation function
that evaluates JavaScript expressions and provides access to Node.js built-in
modules. This default behavior can be overridden by passing in an alternative
evaluation function when the <a href="#class-replserver"><code>repl.REPLServer</code></a> instance is created.</p>
<h4>JavaScript expressions</h4>
<p>The default evaluator supports direct evaluation of JavaScript expressions:</p>
<pre><code class="language-console">&gt; 1 + 1
2
&gt; const m = 2
undefined
&gt; m + 1
3
</code></pre>
<p>Unless otherwise scoped within blocks or functions, variables declared
either implicitly or using the <code>const</code>, <code>let</code>, or <code>var</code> keywords
are declared at the global scope.</p>
<h4>Global and local scope</h4>
<p>The default evaluator provides access to any variables that exist in the global
scope. It is possible to expose a variable to the REPL explicitly by assigning
it to the <code>context</code> object associated with each <code>REPLServer</code>:</p>
<pre><code class="language-mjs">import repl from 'node:repl';
const msg = 'message';

repl.start('&gt; ').context.m = msg;
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');
const msg = 'message';

repl.start('&gt; ').context.m = msg;
</code></pre>
<p>Properties in the <code>context</code> object appear as local within the REPL:</p>
<pre><code class="language-console">$ node repl_test.js
&gt; m
'message'
</code></pre>
<p>Context properties are not read-only by default. To specify read-only globals,
context properties must be defined using <code>Object.defineProperty()</code>:</p>
<pre><code class="language-mjs">import repl from 'node:repl';
const msg = 'message';

const r = repl.start('&gt; ');
Object.defineProperty(r.context, 'm', {
  configurable: false,
  enumerable: true,
  value: msg,
});
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');
const msg = 'message';

const r = repl.start('&gt; ');
Object.defineProperty(r.context, 'm', {
  configurable: false,
  enumerable: true,
  value: msg,
});
</code></pre>
<h4>Accessing core Node.js modules</h4>
<p>The default evaluator will automatically load Node.js core modules into the
REPL environment when used. For instance, unless otherwise declared as a
global or scoped variable, the input <code>fs</code> will be evaluated on-demand as
<code>global.fs = require('node:fs')</code>.</p>
<pre><code class="language-console">&gt; fs.createReadStream('./some/file');
</code></pre>
<h4>Assignment of the <code>_</code> (underscore) variable</h4>
<p>The default evaluator will, by default, assign the result of the most recently
evaluated expression to the special variable <code>_</code> (underscore).
Explicitly setting <code>_</code> to a value will disable this behavior.</p>
<pre><code class="language-console">&gt; [ 'a', 'b', 'c' ]
[ 'a', 'b', 'c' ]
&gt; _.length
3
&gt; _ += 1
Expression assignment to _ now disabled.
4
&gt; 1 + 1
2
&gt; _
4
</code></pre>
<p>Similarly, <code>_error</code> will refer to the last seen error, if there was any.
Explicitly setting <code>_error</code> to a value will disable this behavior.</p>
<pre><code class="language-console">&gt; throw new Error('foo');
Uncaught Error: foo
&gt; _error.message
'foo'
</code></pre>
<h4><code>await</code> keyword</h4>
<p>Support for the <code>await</code> keyword is enabled at the top level.</p>
<pre><code class="language-console">&gt; await Promise.resolve(123)
123
&gt; await Promise.reject(new Error('REPL await'))
Uncaught Error: REPL await
    at REPL2:1:54
&gt; const timeout = util.promisify(setTimeout);
undefined
&gt; const old = Date.now(); await timeout(1000); console.log(Date.now() - old);
1002
undefined
</code></pre>
<h3>Error handling</h3>
<p>By default, uncaught exceptions in the REPL are printed to the output stream
(as with <code>Uncaught Error: REPL await</code> above). <code>uncaughtException</code> listeners
can be added freely in both standalone and nested REPLs. The <code>handleError</code>
option of <a href="#replstartoptions"><code>repl.start()</code></a> can customize this behavior, including
forwarding exceptions to <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a> by returning
<code>'unhandled'</code>.</p>
<h3>Reverse-i-search</h3>
<p>The REPL supports bi-directional reverse-i-search similar to <a href="https://en.wikipedia.org/wiki/Z_shell">ZSH</a>. It is
triggered with &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;R&lt;/kbd&gt; to search backward
and &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;S&lt;/kbd&gt; to search forwards.</p>
<p>Duplicated history entries will be skipped.</p>
<p>Entries are accepted as soon as any key is pressed that doesn't correspond
with the reverse search. Cancelling is possible by pressing &lt;kbd&gt;Esc&lt;/kbd&gt;
or &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;.</p>
<p>Changing the direction immediately searches for the next entry in the expected
direction from the current position on.</p>
<h3>Custom evaluation functions</h3>
<p>When a new <a href="#class-replserver"><code>repl.REPLServer</code></a> is created, a custom evaluation function may be
provided. This can be used, for instance, to implement fully customized REPL
applications.</p>
<p>An evaluation function accepts the following four arguments:</p>
<ul>
<li><code>code</code> {string} The code to be executed (e.g. <code>1 + 1</code>).</li>
<li><code>context</code> {Object} The context in which the code is executed. This can either be the JavaScript <code>global</code>
context or a context specific to the REPL instance, depending on the <code>useGlobal</code> option.</li>
<li><code>replResourceName</code> {string} An identifier for the REPL resource associated with the current code
evaluation. This can be useful for debugging purposes.</li>
<li><code>callback</code> {Function} A function to invoke once the code evaluation is complete. The callback takes two parameters:
<ul>
<li>An error object to provide if an error occurred during evaluation, or <code>null</code>/<code>undefined</code> if no error occurred.</li>
<li>The result of the code evaluation (this is not relevant if an error is provided).</li>
</ul>
</li>
</ul>
<p>The following illustrates an example of a REPL that squares a given number, an error is instead printed
if the provided input is not actually a number:</p>
<pre><code class="language-mjs">import repl from 'node:repl';

function byThePowerOfTwo(number) {
  return number * number;
}

function myEval(code, context, replResourceName, callback) {
  if (isNaN(code)) {
    callback(new Error(`${code.trim()} is not a number`));
  } else {
    callback(null, byThePowerOfTwo(code));
  }
}

repl.start({ prompt: 'Enter a number: ', eval: myEval });
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

function byThePowerOfTwo(number) {
  return number * number;
}

function myEval(code, context, replResourceName, callback) {
  if (isNaN(code)) {
    callback(new Error(`${code.trim()} is not a number`));
  } else {
    callback(null, byThePowerOfTwo(code));
  }
}

repl.start({ prompt: 'Enter a number: ', eval: myEval });
</code></pre>
<h4>Recoverable errors</h4>
<p>At the REPL prompt, pressing &lt;kbd&gt;Enter&lt;/kbd&gt; sends the current line of input to
the <code>eval</code> function. In order to support multi-line input, the <code>eval</code> function
can return an instance of <code>repl.Recoverable</code> to the provided callback function:</p>
<pre><code class="language-js">function myEval(cmd, context, filename, callback) {
  let result;
  try {
    result = vm.runInThisContext(cmd);
  } catch (e) {
    if (isRecoverableError(e)) {
      return callback(new repl.Recoverable(e));
    }
  }
  callback(null, result);
}

function isRecoverableError(error) {
  if (error.name === 'SyntaxError') {
    return /^(Unexpected end of input|Unexpected token)/.test(error.message);
  }
  return false;
}
</code></pre>
<h3>Customizing REPL output</h3>
<p>By default, <a href="#class-replserver"><code>repl.REPLServer</code></a> instances format output using the
<a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> method before writing the output to the provided <code>Writable</code>
stream (<code>process.stdout</code> by default). The <code>showProxy</code> inspection option is set
to true by default and the <code>colors</code> option is set to true depending on the
REPL's <code>useColors</code> option.</p>
<p>The <code>useColors</code> boolean option can be specified at construction to instruct the
default writer to use ANSI style codes to colorize the output from the
<code>util.inspect()</code> method.</p>
<p>If the REPL is run as standalone program, it is also possible to change the
REPL's <a href="util.md#utilinspectobject-options">inspection defaults</a> from inside the REPL by using the
<code>inspect.replDefaults</code> property which mirrors the <code>defaultOptions</code> from
<a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a>.</p>
<pre><code class="language-console">&gt; util.inspect.replDefaults.compact = false;
false
&gt; [1]
[
  1
]
&gt;
</code></pre>
<p>To fully customize the output of a <a href="#class-replserver"><code>repl.REPLServer</code></a> instance pass in a new
function for the <code>writer</code> option on construction. The following example, for
instance, simply converts any input text to upper case:</p>
<pre><code class="language-mjs">import repl from 'node:repl';

const r = repl.start({ prompt: '&gt; ', eval: myEval, writer: myWriter });

function myEval(cmd, context, filename, callback) {
  callback(null, cmd);
}

function myWriter(output) {
  return output.toUpperCase();
}
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

const r = repl.start({ prompt: '&gt; ', eval: myEval, writer: myWriter });

function myEval(cmd, context, filename, callback) {
  callback(null, cmd);
}

function myWriter(output) {
  return output.toUpperCase();
}
</code></pre>
<h2>Class: <code>REPLServer</code></h2>
<ul>
<li><code>options</code> {Object|string} See <a href="#replstartoptions"><code>repl.start()</code></a></li>
<li>Extends: {readline.Interface}</li>
</ul>
<p>Instances of <code>repl.REPLServer</code> are created using the <a href="#replstartoptions"><code>repl.start()</code></a> method
or directly using the JavaScript <code>new</code> keyword.</p>
<pre><code class="language-mjs">import repl from 'node:repl';

const options = { useColors: true };

const firstInstance = repl.start(options);
const secondInstance = new repl.REPLServer(options);
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

const options = { useColors: true };

const firstInstance = repl.start(options);
const secondInstance = new repl.REPLServer(options);
</code></pre>
<p>Calling <code>repl.REPLServer()</code> without the <code>new</code> keyword throws a <code>TypeError</code>
(see <a href="deprecations.md#dep0185-instantiating-noderepl-classes-without-new">DEP0185</a>).</p>
<h3>Event: <code>'exit'</code></h3>
<p>The <code>'exit'</code> event is emitted when the REPL is exited either by receiving the
<code>.exit</code> command as input, the user pressing &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; twice
to signal <code>SIGINT</code>,
or by pressing &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt; to signal <code>'end'</code> on the input
stream. The listener
callback is invoked without any arguments.</p>
<pre><code class="language-js">replServer.on('exit', () =&gt; {
  console.log('Received &quot;exit&quot; event from repl!');
  process.exit();
});
</code></pre>
<h3>Event: <code>'reset'</code></h3>
<p>The <code>'reset'</code> event is emitted when the REPL's context is reset. This occurs
whenever the <code>.clear</code> command is received as input <em>unless</em> the REPL is using
the default evaluator and the <code>repl.REPLServer</code> instance was created with the
<code>useGlobal</code> option set to <code>true</code>. The listener callback will be called with a
reference to the <code>context</code> object as the only argument.</p>
<p>This can be used primarily to re-initialize REPL context to some pre-defined
state:</p>
<pre><code class="language-mjs">import repl from 'node:repl';

function initializeContext(context) {
  context.m = 'test';
}

const r = repl.start({ prompt: '&gt; ' });
initializeContext(r.context);

r.on('reset', initializeContext);
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

function initializeContext(context) {
  context.m = 'test';
}

const r = repl.start({ prompt: '&gt; ' });
initializeContext(r.context);

r.on('reset', initializeContext);
</code></pre>
<p>When this code is executed, the global <code>'m'</code> variable can be modified but then
reset to its initial value using the <code>.clear</code> command:</p>
<pre><code class="language-console">$ ./node example.js
&gt; m
'test'
&gt; m = 1
1
&gt; m
1
&gt; .clear
Clearing context...
&gt; m
'test'
&gt;
</code></pre>
<h3><code>replServer.defineCommand(keyword, cmd)</code></h3>
<ul>
<li><code>keyword</code> {string} The command keyword (<em>without</em> a leading <code>.</code> character).</li>
<li><code>cmd</code> {Object|Function} The function to invoke when the command is processed.</li>
</ul>
<p>The <code>replServer.defineCommand()</code> method is used to add new <code>.</code>-prefixed commands
to the REPL instance. Such commands are invoked by typing a <code>.</code> followed by the
<code>keyword</code>. The <code>cmd</code> is either a <code>Function</code> or an <code>Object</code> with the following
properties:</p>
<ul>
<li><code>help</code> {string} Help text to be displayed when <code>.help</code> is entered (Optional).</li>
<li><code>action</code> {Function} The function to execute, optionally accepting a single
string argument.</li>
</ul>
<p>The following example shows two new commands added to the REPL instance:</p>
<pre><code class="language-mjs">import repl from 'node:repl';

const replServer = repl.start({ prompt: '&gt; ' });
replServer.defineCommand('sayhello', {
  help: 'Say hello',
  action(name) {
    this.clearBufferedCommand();
    console.log(`Hello, ${name}!`);
    this.displayPrompt();
  },
});
replServer.defineCommand('saybye', function saybye() {
  console.log('Goodbye!');
  this.close();
});
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

const replServer = repl.start({ prompt: '&gt; ' });
replServer.defineCommand('sayhello', {
  help: 'Say hello',
  action(name) {
    this.clearBufferedCommand();
    console.log(`Hello, ${name}!`);
    this.displayPrompt();
  },
});
replServer.defineCommand('saybye', function saybye() {
  console.log('Goodbye!');
  this.close();
});
</code></pre>
<p>The new commands can then be used from within the REPL instance:</p>
<pre><code class="language-console">&gt; .sayhello Node.js User
Hello, Node.js User!
&gt; .saybye
Goodbye!
</code></pre>
<h3><code>replServer.displayPrompt([preserveCursor])</code></h3>
<ul>
<li><code>preserveCursor</code> {boolean}</li>
</ul>
<p>The <code>replServer.displayPrompt()</code> method readies the REPL instance for input
from the user, printing the configured <code>prompt</code> to a new line in the <code>output</code>
and resuming the <code>input</code> to accept new input.</p>
<p>When multi-line input is being entered, a pipe <code>'|'</code> is printed rather than the
'prompt'.</p>
<p>When <code>preserveCursor</code> is <code>true</code>, the cursor placement will not be reset to <code>0</code>.</p>
<p>The <code>replServer.displayPrompt</code> method is primarily intended to be called from
within the action function for commands registered using the
<code>replServer.defineCommand()</code> method.</p>
<h3><code>replServer.clearBufferedCommand()</code></h3>
<p>The <code>replServer.clearBufferedCommand()</code> method clears any command that has been
buffered but not yet executed. This method is primarily intended to be
called from within the action function for commands registered using the
<code>replServer.defineCommand()</code> method.</p>
<h3><code>replServer.setupHistory(historyConfig, callback)</code></h3>
<ul>
<li><code>historyConfig</code> {Object|string} the path to the history file
If it is a string, it is the path to the history file.
If it is an object, it can have the following properties:
<ul>
<li><code>filePath</code> {string} the path to the history file</li>
<li><code>size</code> {number} Maximum number of history lines retained. To disable
the history set this value to <code>0</code>. This option makes sense only if
<code>terminal</code> is set to <code>true</code> by the user or by an internal <code>output</code> check,
otherwise the history caching mechanism is not initialized at all.
<strong>Default:</strong> <code>30</code>.</li>
<li><code>removeHistoryDuplicates</code> {boolean} If <code>true</code>, when a new input line added
to the history list duplicates an older one, this removes the older line
from the list. <strong>Default:</strong> <code>false</code>.</li>
<li><code>onHistoryFileLoaded</code> {Function} called when history writes are ready or upon error
<ul>
<li><code>err</code> {Error}</li>
<li><code>repl</code> {repl.REPLServer}</li>
</ul>
</li>
</ul>
</li>
<li><code>callback</code> {Function} called when history writes are ready or upon error
(Optional if provided as <code>onHistoryFileLoaded</code> in <code>historyConfig</code>)
<ul>
<li><code>err</code> {Error}</li>
<li><code>repl</code> {repl.REPLServer}</li>
</ul>
</li>
</ul>
<p>Initializes a history log file for the REPL instance. When executing the
Node.js binary and using the command-line REPL, a history file is initialized
by default. However, this is not the case when creating a REPL
programmatically. Use this method to initialize a history log file when working
with REPL instances programmatically.</p>
<h2><code>repl.builtinModules</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated. Use <a href="module.md#modulebuiltinmodules"><code>module.builtinModules</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>A list of the names of some Node.js modules, e.g., <code>'http'</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/repl-builtin-modules">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/repl-builtin-modules
</code></pre>
<h2><code>repl.start([options])</code></h2>
<ul>
<li><code>options</code> {Object|string}
<ul>
<li><code>prompt</code> {string} The input prompt to display. <strong>Default:</strong> <code>'&gt; '</code>
(with a trailing space).</li>
<li><code>input</code> {stream.Readable} The <code>Readable</code> stream from which REPL input will
be read. <strong>Default:</strong> <code>process.stdin</code>.</li>
<li><code>output</code> {stream.Writable} The <code>Writable</code> stream to which REPL output will
be written. <strong>Default:</strong> <code>process.stdout</code>.</li>
<li><code>terminal</code> {boolean} If <code>true</code>, specifies that the <code>output</code> should be
treated as a TTY terminal.
<strong>Default:</strong> checking the value of the <code>isTTY</code> property on the <code>output</code>
stream upon instantiation.</li>
<li><code>eval</code> {Function} The function to be used when evaluating each given line
of input. <strong>Default:</strong> an async wrapper for the JavaScript <code>eval()</code>
function. An <code>eval</code> function can error with <code>repl.Recoverable</code> to indicate
the input was incomplete and prompt for additional lines. See the
<a href="#custom-evaluation-functions">custom evaluation functions</a> section for more details.</li>
<li><code>useColors</code> {boolean} If <code>true</code>, specifies that the default <code>writer</code>
function should include ANSI color styling to REPL output. If a custom
<code>writer</code> function is provided then this has no effect. <strong>Default:</strong> checking
color support on the <code>output</code> stream if the REPL instance's <code>terminal</code> value
is <code>true</code>.</li>
<li><code>useGlobal</code> {boolean} If <code>true</code>, specifies that the default evaluation
function will use the JavaScript <code>global</code> as the context as opposed to
creating a new separate context for the REPL instance. The node CLI REPL
sets this value to <code>true</code>. <strong>Default:</strong> <code>false</code>.</li>
<li><code>ignoreUndefined</code> {boolean} If <code>true</code>, specifies that the default writer
will not output the return value of a command if it evaluates to
<code>undefined</code>. <strong>Default:</strong> <code>false</code>.</li>
<li><code>writer</code> {Function} The function to invoke to format the output of each
command before writing to <code>output</code>. <strong>Default:</strong> <a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a>.</li>
<li><code>completer</code> {Function} An optional function used for custom Tab auto
completion. See <a href="readline.md#use-of-the-completer-function"><code>readline.InterfaceCompleter</code></a> for an example.</li>
<li><code>replMode</code> {symbol} A flag that specifies whether the default evaluator
executes all JavaScript commands in strict mode or default (sloppy) mode.
Acceptable values are:
<ul>
<li><code>repl.REPL_MODE_SLOPPY</code> to evaluate expressions in sloppy mode.</li>
<li><code>repl.REPL_MODE_STRICT</code> to evaluate expressions in strict mode. This is
equivalent to prefacing every repl statement with <code>'use strict'</code>.</li>
</ul>
</li>
<li><code>breakEvalOnSigint</code> {boolean} Stop evaluating the current piece of code when
<code>SIGINT</code> is received, such as when &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; is pressed.
This cannot be used
together with a custom <code>eval</code> function. <strong>Default:</strong> <code>false</code>.</li>
<li><code>preview</code> {boolean} Defines if the repl prints autocomplete and output
previews or not. <strong>Default:</strong> <code>true</code> with the default eval function and
<code>false</code> in case a custom eval function is used. If <code>terminal</code> is falsy, then
there are no previews and the value of <code>preview</code> has no effect.</li>
<li><code>handleError</code> {Function} This function customizes error handling in the REPL.
It receives the thrown exception as its first argument and must return one
of the following values synchronously:
<ul>
<li><code>'print'</code> to print the error to the output stream (default behavior).</li>
<li><code>'ignore'</code> to skip all remaining error handling.</li>
<li><code>'unhandled'</code> to treat the exception as fully unhandled. In this case,
the error will be passed to process-wide exception handlers, such as
the <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a> event.
The <code>'unhandled'</code> value may or may not be desirable in situations
where the <code>REPLServer</code> instance has been closed, depending on the particular
use case.</li>
</ul>
</li>
</ul>
</li>
<li>Returns: {repl.REPLServer}</li>
</ul>
<p>The <code>repl.start()</code> method creates and starts a <a href="#class-replserver"><code>repl.REPLServer</code></a> instance.</p>
<p>If <code>options</code> is a string, then it specifies the input prompt:</p>
<pre><code class="language-mjs">import repl from 'node:repl';

// a Unix style prompt
repl.start('$ ');
</code></pre>
<pre><code class="language-cjs">const repl = require('node:repl');

// a Unix style prompt
repl.start('$ ');
</code></pre>
<h2>The Node.js REPL</h2>
<p>Node.js itself uses the <code>node:repl</code> module to provide its own interactive
interface for executing JavaScript. This can be used by executing the Node.js
binary without passing any arguments (or by passing the <code>-i</code> argument):</p>
<pre><code class="language-console">$ node
&gt; const a = [1, 2, 3];
undefined
&gt; a
[ 1, 2, 3 ]
&gt; a.forEach((v) =&gt; {
...   console.log(v);
...   });
1
2
3
</code></pre>
<h3>Environment variable options</h3>
<p>Various behaviors of the Node.js REPL can be customized using the following
environment variables:</p>
<ul>
<li><code>NODE_REPL_HISTORY</code>: When a valid path is given, persistent REPL history
will be saved to the specified file rather than <code>.node_repl_history</code> in the
user's home directory. Setting this value to <code>''</code> (an empty string) will
disable persistent REPL history. Whitespace will be trimmed from the value.
On Windows platforms environment variables with empty values are invalid so
set this variable to one or more spaces to disable persistent REPL history.</li>
<li><code>NODE_REPL_HISTORY_SIZE</code>: Controls how many lines of history will be
persisted if history is available. Must be a positive number.
<strong>Default:</strong> <code>1000</code>.</li>
<li><code>NODE_REPL_MODE</code>: May be either <code>'sloppy'</code> or <code>'strict'</code>. <strong>Default:</strong>
<code>'sloppy'</code>, which will allow non-strict mode code to be run.</li>
</ul>
<h3>Persistent history</h3>
<p>By default, the Node.js REPL will persist history between <code>node</code> REPL sessions
by saving inputs to a <code>.node_repl_history</code> file located in the user's home
directory. This can be disabled by setting the environment variable
<code>NODE_REPL_HISTORY=''</code>.</p>
<h3>Using the Node.js REPL with advanced line-editors</h3>
<p>For advanced line-editors, start Node.js with the environment variable
<code>NODE_NO_READLINE=1</code>. This will start the main and debugger REPL in canonical
terminal settings, which will allow use with <code>rlwrap</code>.</p>
<p>For example, the following can be added to a <code>.bashrc</code> file:</p>
<pre><code class="language-bash">alias node=&quot;env NODE_NO_READLINE=1 rlwrap node&quot;
</code></pre>
<h3>Starting multiple REPL instances in the same process</h3>
<p>It is possible to create and run multiple REPL instances against a single
running instance of Node.js that share a single <code>global</code> object (by setting
the <code>useGlobal</code> option to <code>true</code>) but have separate I/O interfaces.</p>
<p>The following example, for instance, provides separate REPLs on <code>stdin</code>, a Unix
socket, and a TCP socket, all sharing the same <code>global</code> object:</p>
<pre><code class="language-mjs">import net from 'node:net';
import repl from 'node:repl';
import process from 'node:process';
import fs from 'node:fs';

let connections = 0;

repl.start({
  prompt: 'Node.js via stdin&gt; ',
  useGlobal: true,
  input: process.stdin,
  output: process.stdout,
});

const unixSocketPath = '/tmp/node-repl-sock';

// If the socket file already exists let's remove it
fs.rmSync(unixSocketPath, { force: true });

net.createServer((socket) =&gt; {
  connections += 1;
  repl.start({
    prompt: 'Node.js via Unix socket&gt; ',
    useGlobal: true,
    input: socket,
    output: socket,
  }).on('exit', () =&gt; {
    socket.end();
  });
}).listen(unixSocketPath);

net.createServer((socket) =&gt; {
  connections += 1;
  repl.start({
    prompt: 'Node.js via TCP socket&gt; ',
    useGlobal: true,
    input: socket,
    output: socket,
  }).on('exit', () =&gt; {
    socket.end();
  });
}).listen(5001);
</code></pre>
<pre><code class="language-cjs">const net = require('node:net');
const repl = require('node:repl');
const fs = require('node:fs');

let connections = 0;

repl.start({
  prompt: 'Node.js via stdin&gt; ',
  useGlobal: true,
  input: process.stdin,
  output: process.stdout,
});

const unixSocketPath = '/tmp/node-repl-sock';

// If the socket file already exists let's remove it
fs.rmSync(unixSocketPath, { force: true });

net.createServer((socket) =&gt; {
  connections += 1;
  repl.start({
    prompt: 'Node.js via Unix socket&gt; ',
    useGlobal: true,
    input: socket,
    output: socket,
  }).on('exit', () =&gt; {
    socket.end();
  });
}).listen(unixSocketPath);

net.createServer((socket) =&gt; {
  connections += 1;
  repl.start({
    prompt: 'Node.js via TCP socket&gt; ',
    useGlobal: true,
    input: socket,
    output: socket,
  }).on('exit', () =&gt; {
    socket.end();
  });
}).listen(5001);
</code></pre>
<p>Running this application from the command line will start a REPL on stdin.
Other REPL clients may connect through the Unix socket or TCP socket. <code>telnet</code>,
for instance, is useful for connecting to TCP sockets, while <code>socat</code> can be used
to connect to both Unix and TCP sockets.</p>
<p>By starting a REPL from a Unix socket-based server instead of stdin, it is
possible to connect to a long-running Node.js process without restarting it.</p>
<h3>Examples</h3>
<h4>Full-featured &quot;terminal&quot; REPL over <code>net.Server</code> and <code>net.Socket</code></h4>
<p>This is an example on how to run a &quot;full-featured&quot; (terminal) REPL using
<a href="net.md#class-netserver"><code>net.Server</code></a> and <a href="net.md#class-netsocket"><code>net.Socket</code></a></p>
<p>The following script starts an HTTP server on port <code>1337</code> that allows
clients to establish socket connections to its REPL instance.</p>
<pre><code class="language-mjs">// repl-server.js
import repl from 'node:repl';
import net from 'node:net';

net
  .createServer((socket) =&gt; {
    const r = repl.start({
      prompt: `socket ${socket.remoteAddress}:${socket.remotePort}&gt; `,
      input: socket,
      output: socket,
      terminal: true,
      useGlobal: false,
    });
    r.on('exit', () =&gt; {
      socket.end();
    });
    r.context.socket = socket;
  })
  .listen(1337);
</code></pre>
<pre><code class="language-cjs">// repl-server.js
const repl = require('node:repl');
const net = require('node:net');

net
  .createServer((socket) =&gt; {
    const r = repl.start({
      prompt: `socket ${socket.remoteAddress}:${socket.remotePort}&gt; `,
      input: socket,
      output: socket,
      terminal: true,
      useGlobal: false,
    });
    r.on('exit', () =&gt; {
      socket.end();
    });
    r.context.socket = socket;
  })
  .listen(1337);
</code></pre>
<p>While the following implements a client that can create a socket connection
with the above defined server over port <code>1337</code>.</p>
<pre><code class="language-mjs">// repl-client.js
import net from 'node:net';
import process from 'node:process';

const sock = net.connect(1337);

process.stdin.pipe(sock);
sock.pipe(process.stdout);

sock.on('connect', () =&gt; {
  process.stdin.resume();
  process.stdin.setRawMode(true);
});

sock.on('close', () =&gt; {
  process.stdin.setRawMode(false);
  process.stdin.pause();
  sock.removeListener('close', done);
});

process.stdin.on('end', () =&gt; {
  sock.destroy();
  console.log();
});

process.stdin.on('data', (b) =&gt; {
  if (b.length === 1 &amp;&amp; b[0] === 4) {
    process.stdin.emit('end');
  }
});
</code></pre>
<pre><code class="language-cjs">// repl-client.js
const net = require('node:net');

const sock = net.connect(1337);

process.stdin.pipe(sock);
sock.pipe(process.stdout);

sock.on('connect', () =&gt; {
  process.stdin.resume();
  process.stdin.setRawMode(true);
});

sock.on('close', () =&gt; {
  process.stdin.setRawMode(false);
  process.stdin.pause();
  sock.removeListener('close', done);
});

process.stdin.on('end', () =&gt; {
  sock.destroy();
  console.log();
});

process.stdin.on('data', (b) =&gt; {
  if (b.length === 1 &amp;&amp; b[0] === 4) {
    process.stdin.emit('end');
  }
});
</code></pre>
<p>To run the example open two different terminals on your machine, start the server
with <code>node repl-server.js</code> in one terminal and <code>node repl-client.js</code> on the other.</p>
<p>Original code from <a href="https://gist.github.com/TooTallNate/2209310">https://gist.github.com/TooTallNate/2209310</a>.</p>
<h4>REPL over <code>curl</code></h4>
<p>This is an example on how to run a REPL instance over <a href="https://curl.haxx.se/docs/manpage.html"><code>curl()</code></a></p>
<p>The following script starts an HTTP server on port <code>8000</code> that can accept
a connection established via <a href="https://curl.haxx.se/docs/manpage.html"><code>curl()</code></a>.</p>
<pre><code class="language-mjs">import http from 'node:http';
import repl from 'node:repl';

const server = http.createServer((req, res) =&gt; {
  res.setHeader('content-type', 'multipart/octet-stream');

  repl.start({
    prompt: 'curl repl&gt; ',
    input: req,
    output: res,
    terminal: false,
    useColors: true,
    useGlobal: false,
  });
});

server.listen(8000);
</code></pre>
<pre><code class="language-cjs">const http = require('node:http');
const repl = require('node:repl');

const server = http.createServer((req, res) =&gt; {
  res.setHeader('content-type', 'multipart/octet-stream');

  repl.start({
    prompt: 'curl repl&gt; ',
    input: req,
    output: res,
    terminal: false,
    useColors: true,
    useGlobal: false,
  });
});

server.listen(8000);
</code></pre>
<p>When the above script is running you can then use <a href="https://curl.haxx.se/docs/manpage.html"><code>curl()</code></a> to connect to
the server and connect to its REPL instance by running <code>curl --no-progress-meter -sSNT. localhost:8000</code>.</p>
<p><strong>Warning</strong> This example is intended purely for educational purposes to demonstrate how
Node.js REPLs can be started using different I/O streams.
It should <strong>not</strong> be used in production environments or any context where security
is a concern without additional protective measures.
If you need to implement REPLs in a real-world application, consider alternative
approaches that mitigate these risks, such as using secure input mechanisms and
avoiding open network interfaces.</p>
<p>Original code from <a href="https://gist.github.com/TooTallNate/2053342">https://gist.github.com/TooTallNate/2053342</a>.</p>
