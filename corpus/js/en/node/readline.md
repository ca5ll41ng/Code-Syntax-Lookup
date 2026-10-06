---
id: "js-en-function-node-readline"
language: "js"
lang: "en"
category: "function"
name: "node:readline"
title: "Readline"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/readline.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Readline

<h1>Readline</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:readline</code> module provides an interface for reading data from a
<a href="stream.md#readable-streams">Readable</a> stream (such as <a href="process.md#processstdin"><code>process.stdin</code></a>) one line at a time.</p>
<p>To use the promise-based APIs:</p>
<pre><code class="language-mjs">import * as readline from 'node:readline/promises';
</code></pre>
<pre><code class="language-cjs">const readline = require('node:readline/promises');
</code></pre>
<p>To use the callback and sync APIs:</p>
<pre><code class="language-mjs">import * as readline from 'node:readline';
</code></pre>
<pre><code class="language-cjs">const readline = require('node:readline');
</code></pre>
<p>The following simple example illustrates the basic use of the <code>node:readline</code>
module.</p>
<pre><code class="language-mjs">import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
</code></pre>
<pre><code class="language-cjs">const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) =&gt; {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
</code></pre>
<p>Once this code is invoked, the Node.js application will not terminate until the
<code>readline.Interface</code> is closed because the interface waits for data to be
received on the <code>input</code> stream.</p>
<p>&lt;a id='readline_class_interface'&gt;&lt;/a&gt;</p>
<h2>Class: <code>InterfaceConstructor</code></h2>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>Instances of the <code>InterfaceConstructor</code> class are constructed using the
<code>readlinePromises.createInterface()</code> or <code>readline.createInterface()</code> method.
Every instance is associated with a single <code>input</code> <a href="stream.md#readable-streams">Readable</a> stream and a
single <code>output</code> <a href="stream.md#writable-streams">Writable</a> stream.
The <code>output</code> stream is used to print prompts for user input that arrives on,
and is read from, the <code>input</code> stream.</p>
<h3>Event: <code>'close'</code></h3>
<p>The <code>'close'</code> event is emitted when one of the following occur:</p>
<ul>
<li>The <code>rl.close()</code> method is called and the <code>InterfaceConstructor</code> instance has
relinquished control over the <code>input</code> and <code>output</code> streams;</li>
<li>The <code>input</code> stream receives its <code>'end'</code> event;</li>
<li>The <code>input</code> stream receives &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt; to signal
end-of-transmission (EOT);</li>
<li>The <code>input</code> stream receives &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt; to signal <code>SIGINT</code>
and there is no <code>'SIGINT'</code> event listener registered on the
<code>InterfaceConstructor</code> instance.</li>
</ul>
<p>The listener function is called without passing any arguments.</p>
<p>The <code>InterfaceConstructor</code> instance is finished once the <code>'close'</code> event is
emitted.</p>
<h3>Event: <code>'error'</code></h3>
<p>The <code>'error'</code> event is emitted when an error occurs on the <code>input</code> stream
associated with the <code>node:readline</code> <code>Interface</code>.</p>
<p>The listener function is called with an <code>Error</code> object passed as the single argument.</p>
<h3>Event: <code>'line'</code></h3>
<p>The <code>'line'</code> event is emitted whenever the <code>input</code> stream receives an
end-of-line input (<code>\n</code>, <code>\r</code>, or <code>\r\n</code>). This usually occurs when the user
presses &lt;kbd&gt;Enter&lt;/kbd&gt; or &lt;kbd&gt;Return&lt;/kbd&gt;.</p>
<p>The <code>'line'</code> event is also emitted if new data has been read from a stream and
that stream ends without a final end-of-line marker.</p>
<p>The listener function is called with a string containing the single line of
received input.</p>
<pre><code class="language-js">rl.on('line', (input) =&gt; {
  console.log(`Received: ${input}`);
});
</code></pre>
<h3>Event: <code>'history'</code></h3>
<p>The <code>'history'</code> event is emitted whenever the history array has changed.</p>
<p>The listener function is called with an array containing the history array.
It will reflect all changes, added lines and removed lines due to
<code>historySize</code> and <code>removeHistoryDuplicates</code>.</p>
<p>The primary purpose is to allow a listener to persist the history.
It is also possible for the listener to change the history object. This
could be useful to prevent certain lines to be added to the history, like
a password.</p>
<pre><code class="language-js">rl.on('history', (history) =&gt; {
  console.log(`Received: ${history}`);
});
</code></pre>
<h3>Event: <code>'pause'</code></h3>
<p>The <code>'pause'</code> event is emitted when one of the following occur:</p>
<ul>
<li>The <code>input</code> stream is paused.</li>
<li>The <code>input</code> stream is not paused and receives the <code>'SIGCONT'</code> event. (See
events <a href="#event-sigtstp"><code>'SIGTSTP'</code></a> and <a href="#event-sigcont"><code>'SIGCONT'</code></a>.)</li>
</ul>
<p>The listener function is called without passing any arguments.</p>
<pre><code class="language-js">rl.on('pause', () =&gt; {
  console.log('Readline paused.');
});
</code></pre>
<h3>Event: <code>'resume'</code></h3>
<p>The <code>'resume'</code> event is emitted whenever the <code>input</code> stream is resumed.</p>
<p>The listener function is called without passing any arguments.</p>
<pre><code class="language-js">rl.on('resume', () =&gt; {
  console.log('Readline resumed.');
});
</code></pre>
<h3>Event: <code>'SIGCONT'</code></h3>
<p>The <code>'SIGCONT'</code> event is emitted when a Node.js process previously moved into
the background using &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Z&lt;/kbd&gt; (i.e. <code>SIGTSTP</code>) is then
brought back to the foreground using fg(1p).</p>
<p>If the <code>input</code> stream was paused <em>before</em> the <code>SIGTSTP</code> request, this event will
not be emitted.</p>
<p>The listener function is invoked without passing any arguments.</p>
<pre><code class="language-js">rl.on('SIGCONT', () =&gt; {
  // `prompt` will automatically resume the stream
  rl.prompt();
});
</code></pre>
<p>The <code>'SIGCONT'</code> event is <em>not</em> supported on Windows.</p>
<h3>Event: <code>'SIGINT'</code></h3>
<p>The <code>'SIGINT'</code> event is emitted whenever the <code>input</code> stream receives
a &lt;kbd&gt;Ctrl+C&lt;/kbd&gt; input, known typically as <code>SIGINT</code>. If there are no
<code>'SIGINT'</code> event listeners registered when the <code>input</code> stream receives a
<code>SIGINT</code>, the <code>'pause'</code> event will be emitted.</p>
<p>The listener function is invoked without passing any arguments.</p>
<pre><code class="language-js">rl.on('SIGINT', () =&gt; {
  rl.question('Are you sure you want to exit? ', (answer) =&gt; {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});
</code></pre>
<h3>Event: <code>'SIGTSTP'</code></h3>
<p>The <code>'SIGTSTP'</code> event is emitted when the <code>input</code> stream receives
a &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Z&lt;/kbd&gt; input, typically known as <code>SIGTSTP</code>. If there are
no <code>'SIGTSTP'</code> event listeners registered when the <code>input</code> stream receives a
<code>SIGTSTP</code>, the Node.js process will be sent to the background.</p>
<p>When the program is resumed using fg(1p), the <code>'pause'</code> and <code>'SIGCONT'</code> events
will be emitted. These can be used to resume the <code>input</code> stream.</p>
<p>The <code>'pause'</code> and <code>'SIGCONT'</code> events will not be emitted if the <code>input</code> was
paused before the process was sent to the background.</p>
<p>The listener function is invoked without passing any arguments.</p>
<pre><code class="language-js">rl.on('SIGTSTP', () =&gt; {
  // This will override SIGTSTP and prevent the program from going to the
  // background.
  console.log('Caught SIGTSTP.');
});
</code></pre>
<p>The <code>'SIGTSTP'</code> event is <em>not</em> supported on Windows.</p>
<h3><code>rl.close()</code></h3>
<p>The <code>rl.close()</code> method closes the <code>InterfaceConstructor</code> instance and
relinquishes control over the <code>input</code> and <code>output</code> streams. When called,
the <code>'close'</code> event will be emitted.</p>
<p>Calling <code>rl.close()</code> does not immediately stop other events (including <code>'line'</code>)
from being emitted by the <code>InterfaceConstructor</code> instance.</p>
<h3><code>rl[Symbol.dispose]()</code></h3>
<p>Alias for <code>rl.close()</code>.</p>
<h3><code>rl.pause()</code></h3>
<p>The <code>rl.pause()</code> method pauses the <code>input</code> stream, allowing it to be resumed
later if necessary.</p>
<p>Calling <code>rl.pause()</code> does not immediately pause other events (including
<code>'line'</code>) from being emitted by the <code>InterfaceConstructor</code> instance.</p>
<h3><code>rl.prompt([preserveCursor])</code></h3>
<ul>
<li><code>preserveCursor</code> {boolean} If <code>true</code>, prevents the cursor placement from
being reset to <code>0</code>.</li>
</ul>
<p>The <code>rl.prompt()</code> method writes the <code>InterfaceConstructor</code> instances configured
<code>prompt</code> to a new line in <code>output</code> in order to provide a user with a new
location at which to provide input.</p>
<p>When called, <code>rl.prompt()</code> will resume the <code>input</code> stream if it has been
paused.</p>
<p>If the <code>InterfaceConstructor</code> was created with <code>output</code> set to <code>null</code> or
<code>undefined</code> the prompt is not written.</p>
<h3><code>rl.resume()</code></h3>
<p>The <code>rl.resume()</code> method resumes the <code>input</code> stream if it has been paused.</p>
<h3><code>rl.setPrompt(prompt)</code></h3>
<ul>
<li><code>prompt</code> {string}</li>
</ul>
<p>The <code>rl.setPrompt()</code> method sets the prompt that will be written to <code>output</code>
whenever <code>rl.prompt()</code> is called.</p>
<h3><code>rl.getPrompt()</code></h3>
<ul>
<li>Returns: {string} the current prompt string</li>
</ul>
<p>The <code>rl.getPrompt()</code> method returns the current prompt used by <code>rl.prompt()</code>.</p>
<h3><code>rl.write(data[, key])</code></h3>
<ul>
<li><code>data</code> {string}</li>
<li><code>key</code> {Object}
<ul>
<li><code>ctrl</code> {boolean} <code>true</code> to indicate the &lt;kbd&gt;Ctrl&lt;/kbd&gt; key.</li>
<li><code>meta</code> {boolean} <code>true</code> to indicate the &lt;kbd&gt;Meta&lt;/kbd&gt; key.</li>
<li><code>shift</code> {boolean} <code>true</code> to indicate the &lt;kbd&gt;Shift&lt;/kbd&gt; key.</li>
<li><code>name</code> {string} The name of the a key.</li>
</ul>
</li>
</ul>
<p>The <code>rl.write()</code> method will write either <code>data</code> or a key sequence identified
by <code>key</code> to the <code>output</code>. The <code>key</code> argument is supported only if <code>output</code> is
a <a href="tty.md">TTY</a> text terminal. See <a href="#tty-keybindings">TTY keybindings</a> for a list of key
combinations.</p>
<p>If <code>key</code> is specified, <code>data</code> is ignored.</p>
<p>When called, <code>rl.write()</code> will resume the <code>input</code> stream if it has been
paused.</p>
<p>If the <code>InterfaceConstructor</code> was created with <code>output</code> set to <code>null</code> or
<code>undefined</code> the <code>data</code> and <code>key</code> are not written.</p>
<pre><code class="language-js">rl.write('Delete this!');
// Simulate Ctrl+U to delete the line written previously
rl.write(null, { ctrl: true, name: 'u' });
</code></pre>
<p>The <code>rl.write()</code> method will write the data to the <code>readline</code> <code>Interface</code>'s
<code>input</code> <em>as if it were provided by the user</em>.</p>
<h3><code>rl[Symbol.asyncIterator]()</code></h3>
<ul>
<li>Returns: {AsyncIterator}</li>
</ul>
<p>Create an <code>AsyncIterator</code> object that iterates through each line in the input
stream as a string. This method allows asynchronous iteration of
<code>InterfaceConstructor</code> objects through <code>for await...of</code> loops.</p>
<p>Errors in the input stream are not forwarded.</p>
<p>If the loop is terminated with <code>break</code>, <code>throw</code>, or <code>return</code>,
<a href="#rlclose"><code>rl.close()</code></a> will be called. In other words, iterating over a
<code>InterfaceConstructor</code> will always consume the input stream fully.</p>
<p>Performance is not on par with the traditional <code>'line'</code> event API. Use <code>'line'</code>
instead for performance-sensitive applications.</p>
<pre><code class="language-js">async function processLineByLine() {
  const rl = readline.createInterface({
    // ...
  });

  for await (const line of rl) {
    // Each line in the readline input will be successively available here as
    // `line`.
  }
}
</code></pre>
<p><code>readline.createInterface()</code> will start to consume the input stream once
invoked. Having asynchronous operations between interface creation and
asynchronous iteration may result in missed lines.</p>
<h3><code>rl.line</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The current input data being processed by node.</p>
<p>This can be used when collecting input from a TTY stream to retrieve the
current value that has been processed thus far, prior to the <code>line</code> event
being emitted. Once the <code>line</code> event has been emitted, this property will
be an empty string.</p>
<p>Be aware that modifying the value during the instance runtime may have
unintended consequences if <code>rl.cursor</code> is not also controlled.</p>
<p><strong>If not using a TTY stream for input, use the <a href="#event-line"><code>'line'</code></a> event.</strong></p>
<p>One possible use case would be as follows:</p>
<pre><code class="language-js">const values = ['lorem ipsum', 'dolor sit amet'];
const rl = readline.createInterface(process.stdin);
const showResults = debounce(() =&gt; {
  console.log(
    '\n',
    values.filter((val) =&gt; val.startsWith(rl.line)).join(' '),
  );
}, 300);
process.stdin.on('keypress', (c, k) =&gt; {
  showResults();
});
</code></pre>
<h3><code>rl.cursor</code></h3>
<ul>
<li>Type: {number|undefined}</li>
</ul>
<p>The cursor position relative to <code>rl.line</code>.</p>
<p>This will track where the current cursor lands in the input string, when
reading input from a TTY stream. The position of cursor determines the
portion of the input string that will be modified as input is processed,
as well as the column where the terminal caret will be rendered.</p>
<h3><code>rl.getCursorPos()</code></h3>
<ul>
<li>Returns: {Object}
<ul>
<li><code>rows</code> {number} the row of the prompt the cursor currently lands on</li>
<li><code>cols</code> {number} the screen column the cursor currently lands on</li>
</ul>
</li>
</ul>
<p>Returns the real position of the cursor in relation to the input
prompt + string. Long input (wrapping) strings, as well as multiple
line prompts are included in the calculations.</p>
<h2>Promises API</h2>
<h3>Class: <code>readlinePromises.Interface</code></h3>
<ul>
<li>Extends: {readline.InterfaceConstructor}</li>
</ul>
<p>Instances of the <code>readlinePromises.Interface</code> class are constructed using the
<code>readlinePromises.createInterface()</code> method. Every instance is associated with a
single <code>input</code> <a href="stream.md#readable-streams">Readable</a> stream and a single <code>output</code> <a href="stream.md#writable-streams">Writable</a> stream.
The <code>output</code> stream is used to print prompts for user input that arrives on,
and is read from, the <code>input</code> stream.</p>
<h4><code>rl.question(query[, options])</code></h4>
<ul>
<li><code>query</code> {string} A statement or query to write to <code>output</code>, prepended to the
prompt.</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Optionally allows the <code>question()</code> to be canceled
using an <code>AbortSignal</code>.</li>
</ul>
</li>
<li>Returns: {Promise} A promise that is fulfilled with the user's
input in response to the <code>query</code>.</li>
</ul>
<p>The <code>rl.question()</code> method displays the <code>query</code> by writing it to the <code>output</code>,
waits for user input to be provided on <code>input</code>, then invokes the <code>callback</code>
function passing the provided input as the first argument.</p>
<p>When called, <code>rl.question()</code> will resume the <code>input</code> stream if it has been
paused.</p>
<p>If the <code>readlinePromises.Interface</code> was created with <code>output</code> set to <code>null</code> or
<code>undefined</code> the <code>query</code> is not written.</p>
<p>If the question is called after <code>rl.close()</code>, it returns a rejected promise.</p>
<p>Example usage:</p>
<pre><code class="language-mjs">const answer = await rl.question('What is your favorite food? ');
console.log(`Oh, so your favorite food is ${answer}`);
</code></pre>
<p>Using an <code>AbortSignal</code> to cancel a question.</p>
<pre><code class="language-mjs">const signal = AbortSignal.timeout(10_000);

signal.addEventListener('abort', () =&gt; {
  console.log('The food question timed out');
}, { once: true });

const answer = await rl.question('What is your favorite food? ', { signal });
console.log(`Oh, so your favorite food is ${answer}`);
</code></pre>
<h3>Class: <code>readlinePromises.Readline</code></h3>
<h4><code>new readlinePromises.Readline(stream[, options])</code></h4>
<ul>
<li><code>stream</code> {stream.Writable} A <a href="tty.md">TTY</a> stream.</li>
<li><code>options</code> {Object}
<ul>
<li><code>autoCommit</code> {boolean} If <code>true</code>, no need to call <code>rl.commit()</code>.</li>
</ul>
</li>
</ul>
<h4><code>rl.clearLine(dir)</code></h4>
<ul>
<li><code>dir</code> {integer}
<ul>
<li><code>-1</code>: to the left from cursor</li>
<li><code>1</code>: to the right from cursor</li>
<li><code>0</code>: the entire line</li>
</ul>
</li>
<li>Returns: this</li>
</ul>
<p>The <code>rl.clearLine()</code> method adds to the internal list of pending action an
action that clears current line of the associated <code>stream</code> in a specified
direction identified by <code>dir</code>.
Call <code>rl.commit()</code> to see the effect of this method, unless <code>autoCommit: true</code>
was passed to the constructor.</p>
<h4><code>rl.clearScreenDown()</code></h4>
<ul>
<li>Returns: this</li>
</ul>
<p>The <code>rl.clearScreenDown()</code> method adds to the internal list of pending action an
action that clears the associated stream from the current position of the
cursor down.
Call <code>rl.commit()</code> to see the effect of this method, unless <code>autoCommit: true</code>
was passed to the constructor.</p>
<h4><code>rl.commit()</code></h4>
<ul>
<li>Returns: {Promise}</li>
</ul>
<p>The <code>rl.commit()</code> method sends all the pending actions to the associated
<code>stream</code> and clears the internal list of pending actions.</p>
<h4><code>rl.cursorTo(x[, y])</code></h4>
<ul>
<li><code>x</code> {integer}</li>
<li><code>y</code> {integer}</li>
<li>Returns: this</li>
</ul>
<p>The <code>rl.cursorTo()</code> method adds to the internal list of pending action an action
that moves cursor to the specified position in the associated <code>stream</code>.
Call <code>rl.commit()</code> to see the effect of this method, unless <code>autoCommit: true</code>
was passed to the constructor.</p>
<h4><code>rl.moveCursor(dx, dy)</code></h4>
<ul>
<li><code>dx</code> {integer}</li>
<li><code>dy</code> {integer}</li>
<li>Returns: this</li>
</ul>
<p>The <code>rl.moveCursor()</code> method adds to the internal list of pending action an
action that moves the cursor <em>relative</em> to its current position in the
associated <code>stream</code>.
Call <code>rl.commit()</code> to see the effect of this method, unless <code>autoCommit: true</code>
was passed to the constructor.</p>
<h4><code>rl.rollback()</code></h4>
<ul>
<li>Returns: this</li>
</ul>
<p>The <code>rl.rollback</code> methods clears the internal list of pending actions without
sending it to the associated <code>stream</code>.</p>
<h3><code>readlinePromises.createInterface(options)</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>input</code> {stream.Readable} The <a href="stream.md#readable-streams">Readable</a> stream to listen to. This option
is <em>required</em>.</li>
<li><code>output</code> {stream.Writable} The <a href="stream.md#writable-streams">Writable</a> stream to write readline data
to.</li>
<li><code>completer</code> {Function} An optional function used for Tab autocompletion.</li>
<li><code>terminal</code> {boolean} <code>true</code> if the <code>input</code> and <code>output</code> streams should be
treated like a TTY, and have ANSI/VT100 escape codes written to it.
<strong>Default:</strong> checking <code>isTTY</code> on the <code>output</code> stream upon instantiation.</li>
<li><code>history</code> {string[]} Initial list of history lines. This option makes sense
only if <code>terminal</code> is set to <code>true</code> by the user or by an internal <code>output</code>
check, otherwise the history caching mechanism is not initialized at all.
<strong>Default:</strong> <code>[]</code>.</li>
<li><code>historySize</code> {number} Maximum number of history lines retained. To disable
the history set this value to <code>0</code>. This option makes sense only if
<code>terminal</code> is set to <code>true</code> by the user or by an internal <code>output</code> check,
otherwise the history caching mechanism is not initialized at all.
<strong>Default:</strong> <code>30</code>.</li>
<li><code>removeHistoryDuplicates</code> {boolean} If <code>true</code>, when a new input line added
to the history list duplicates an older one, this removes the older line
from the list. <strong>Default:</strong> <code>false</code>.</li>
<li><code>prompt</code> {string} The prompt string to use. <strong>Default:</strong> <code>'&gt; '</code>.</li>
<li><code>crlfDelay</code> {number} If the delay between <code>\r</code> and <code>\n</code> exceeds
<code>crlfDelay</code> milliseconds, both <code>\r</code> and <code>\n</code> will be treated as separate
end-of-line input. <code>crlfDelay</code> will be coerced to a number no less than
<code>100</code>. It can be set to <code>Infinity</code>, in which case <code>\r</code> followed by <code>\n</code>
will always be considered a single newline (which may be reasonable for
<a href="#example-read-file-stream-line-by-line">reading files</a> with <code>\r\n</code> line delimiter). <strong>Default:</strong> <code>100</code>.</li>
<li><code>escapeCodeTimeout</code> {number} The duration <code>readlinePromises</code> will wait for a
character (when reading an ambiguous key sequence in milliseconds one that
can both form a complete key sequence using the input read so far and can
take additional input to complete a longer key sequence).
<strong>Default:</strong> <code>500</code>.</li>
<li><code>tabSize</code> {integer} The number of spaces a tab is equal to (minimum 1).
<strong>Default:</strong> <code>8</code>.</li>
<li><code>signal</code> {AbortSignal} Allows closing the interface using an AbortSignal.</li>
</ul>
</li>
<li>Returns: {readlinePromises.Interface}</li>
</ul>
<p>The <code>readlinePromises.createInterface()</code> method creates a new <code>readlinePromises.Interface</code>
instance.</p>
<pre><code class="language-mjs">import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});
</code></pre>
<pre><code class="language-cjs">const { createInterface } = require('node:readline/promises');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
</code></pre>
<p>Once the <code>readlinePromises.Interface</code> instance is created, the most common case
is to listen for the <code>'line'</code> event:</p>
<pre><code class="language-js">rl.on('line', (line) =&gt; {
  console.log(`Received: ${line}`);
});
</code></pre>
<p>If <code>terminal</code> is <code>true</code> for this instance then the <code>output</code> stream will get
the best compatibility if it defines an <code>output.columns</code> property and emits
a <code>'resize'</code> event on the <code>output</code> if or when the columns ever change
(<a href="process.md#processstdout"><code>process.stdout</code></a> does this automatically when it is a TTY).</p>
<h4>Use of the <code>completer</code> function</h4>
<p>The <code>completer</code> function takes the current line entered by the user
as an argument, and returns an <code>Array</code> with 2 entries:</p>
<ul>
<li>An <code>Array</code> with matching entries for the completion.</li>
<li>The substring that was used for the matching.</li>
</ul>
<p>For instance: <code>[[substr1, substr2, ...], originalsubstring]</code>.</p>
<pre><code class="language-js">function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) =&gt; c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
}
</code></pre>
<p>The <code>completer</code> function can also return a {Promise}, or be asynchronous:</p>
<pre><code class="language-js">async function completer(linePartial) {
  await someAsyncWork();
  return [['123'], linePartial];
}
</code></pre>
<h2>Callback API</h2>
<h3>Class: <code>readline.Interface</code></h3>
<ul>
<li>Extends: {readline.InterfaceConstructor}</li>
</ul>
<p>Instances of the <code>readline.Interface</code> class are constructed using the
<code>readline.createInterface()</code> method. Every instance is associated with a
single <code>input</code> <a href="stream.md#readable-streams">Readable</a> stream and a single <code>output</code> <a href="stream.md#writable-streams">Writable</a> stream.
The <code>output</code> stream is used to print prompts for user input that arrives on,
and is read from, the <code>input</code> stream.</p>
<h4><code>rl.question(query[, options], callback)</code></h4>
<ul>
<li><code>query</code> {string} A statement or query to write to <code>output</code>, prepended to the
prompt.</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Optionally allows the <code>question()</code> to be canceled
using an <code>AbortController</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function} A callback function that is invoked with the user's
input in response to the <code>query</code>.</li>
</ul>
<p>The <code>rl.question()</code> method displays the <code>query</code> by writing it to the <code>output</code>,
waits for user input to be provided on <code>input</code>, then invokes the <code>callback</code>
function passing the provided input as the first argument.</p>
<p>When called, <code>rl.question()</code> will resume the <code>input</code> stream if it has been
paused.</p>
<p>If the <code>readline.Interface</code> was created with <code>output</code> set to <code>null</code> or
<code>undefined</code> the <code>query</code> is not written.</p>
<p>The <code>callback</code> function passed to <code>rl.question()</code> does not follow the typical
pattern of accepting an <code>Error</code> object or <code>null</code> as the first argument.
The <code>callback</code> is called with the provided answer as the only argument.</p>
<p>An error will be thrown if calling <code>rl.question()</code> after <code>rl.close()</code>.</p>
<p>Example usage:</p>
<pre><code class="language-js">rl.question('What is your favorite food? ', (answer) =&gt; {
  console.log(`Oh, so your favorite food is ${answer}`);
});
</code></pre>
<p>Using an <code>AbortController</code> to cancel a question.</p>
<pre><code class="language-js">const ac = new AbortController();
const signal = ac.signal;

rl.question('What is your favorite food? ', { signal }, (answer) =&gt; {
  console.log(`Oh, so your favorite food is ${answer}`);
});

signal.addEventListener('abort', () =&gt; {
  console.log('The food question timed out');
}, { once: true });

setTimeout(() =&gt; ac.abort(), 10000);
</code></pre>
<h3><code>readline.clearLine(stream, dir[, callback])</code></h3>
<ul>
<li><code>stream</code> {stream.Writable}</li>
<li><code>dir</code> {number}
<ul>
<li><code>-1</code>: to the left from cursor</li>
<li><code>1</code>: to the right from cursor</li>
<li><code>0</code>: the entire line</li>
</ul>
</li>
<li><code>callback</code> {Function} Invoked once the operation completes.</li>
<li>Returns: {boolean} <code>false</code> if <code>stream</code> wishes for the calling code to wait for
the <code>'drain'</code> event to be emitted before continuing to write additional data;
otherwise <code>true</code>.</li>
</ul>
<p>The <code>readline.clearLine()</code> method clears current line of given <a href="tty.md">TTY</a> stream
in a specified direction identified by <code>dir</code>.</p>
<h3><code>readline.clearScreenDown(stream[, callback])</code></h3>
<ul>
<li><code>stream</code> {stream.Writable}</li>
<li><code>callback</code> {Function} Invoked once the operation completes.</li>
<li>Returns: {boolean} <code>false</code> if <code>stream</code> wishes for the calling code to wait for
the <code>'drain'</code> event to be emitted before continuing to write additional data;
otherwise <code>true</code>.</li>
</ul>
<p>The <code>readline.clearScreenDown()</code> method clears the given <a href="tty.md">TTY</a> stream from
the current position of the cursor down.</p>
<h3><code>readline.createInterface(options)</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>input</code> {stream.Readable} The <a href="stream.md#readable-streams">Readable</a> stream to listen to. This option
is <em>required</em>.</li>
<li><code>output</code> {stream.Writable} The <a href="stream.md#writable-streams">Writable</a> stream to write readline data
to.</li>
<li><code>completer</code> {Function} An optional function used for Tab autocompletion.</li>
<li><code>terminal</code> {boolean} <code>true</code> if the <code>input</code> and <code>output</code> streams should be
treated like a TTY, and have ANSI/VT100 escape codes written to it.
<strong>Default:</strong> checking <code>isTTY</code> on the <code>output</code> stream upon instantiation.</li>
<li><code>history</code> {string[]} Initial list of history lines. This option makes sense
only if <code>terminal</code> is set to <code>true</code> by the user or by an internal <code>output</code>
check, otherwise the history caching mechanism is not initialized at all.
<strong>Default:</strong> <code>[]</code>.</li>
<li><code>historySize</code> {number} Maximum number of history lines retained. To disable
the history set this value to <code>0</code>. This option makes sense only if
<code>terminal</code> is set to <code>true</code> by the user or by an internal <code>output</code> check,
otherwise the history caching mechanism is not initialized at all.
<strong>Default:</strong> <code>30</code>.</li>
<li><code>removeHistoryDuplicates</code> {boolean} If <code>true</code>, when a new input line added
to the history list duplicates an older one, this removes the older line
from the list. <strong>Default:</strong> <code>false</code>.</li>
<li><code>prompt</code> {string} The prompt string to use. <strong>Default:</strong> <code>'&gt; '</code>.</li>
<li><code>crlfDelay</code> {number} If the delay between <code>\r</code> and <code>\n</code> exceeds
<code>crlfDelay</code> milliseconds, both <code>\r</code> and <code>\n</code> will be treated as separate
end-of-line input. <code>crlfDelay</code> will be coerced to a number no less than
<code>100</code>. It can be set to <code>Infinity</code>, in which case <code>\r</code> followed by <code>\n</code>
will always be considered a single newline (which may be reasonable for
<a href="#example-read-file-stream-line-by-line">reading files</a> with <code>\r\n</code> line delimiter). <strong>Default:</strong> <code>100</code>.</li>
<li><code>escapeCodeTimeout</code> {number} The duration <code>readline</code> will wait for a
character (when reading an ambiguous key sequence in milliseconds one that
can both form a complete key sequence using the input read so far and can
take additional input to complete a longer key sequence).
<strong>Default:</strong> <code>500</code>.</li>
<li><code>tabSize</code> {integer} The number of spaces a tab is equal to (minimum 1).
<strong>Default:</strong> <code>8</code>.</li>
<li><code>signal</code> {AbortSignal} Allows closing the interface using an AbortSignal.
Aborting the signal will internally call <code>close</code> on the interface.</li>
</ul>
</li>
<li>Returns: {readline.Interface}</li>
</ul>
<p>The <code>readline.createInterface()</code> method creates a new <code>readline.Interface</code>
instance.</p>
<pre><code class="language-mjs">import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});
</code></pre>
<pre><code class="language-cjs">const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
</code></pre>
<p>Once the <code>readline.Interface</code> instance is created, the most common case is to
listen for the <code>'line'</code> event:</p>
<pre><code class="language-js">rl.on('line', (line) =&gt; {
  console.log(`Received: ${line}`);
});
</code></pre>
<p>If <code>terminal</code> is <code>true</code> for this instance then the <code>output</code> stream will get
the best compatibility if it defines an <code>output.columns</code> property and emits
a <code>'resize'</code> event on the <code>output</code> if or when the columns ever change
(<a href="process.md#processstdout"><code>process.stdout</code></a> does this automatically when it is a TTY).</p>
<p>When creating a <code>readline.Interface</code> using <code>stdin</code> as input, the program
will not terminate until it receives an <a href="https://en.wikipedia.org/wiki/End-of-file#EOF_character">EOF character</a>. To exit without
waiting for user input, call <code>process.stdin.unref()</code>.</p>
<h4>Use of the <code>completer</code> function</h4>
<p>The <code>completer</code> function takes the current line entered by the user
as an argument, and returns an <code>Array</code> with 2 entries:</p>
<ul>
<li>An <code>Array</code> with matching entries for the completion.</li>
<li>The substring that was used for the matching.</li>
</ul>
<p>For instance: <code>[[substr1, substr2, ...], originalsubstring]</code>.</p>
<pre><code class="language-js">function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) =&gt; c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
}
</code></pre>
<p>The <code>completer</code> function can be called asynchronously if it accepts two
arguments:</p>
<pre><code class="language-js">function completer(linePartial, callback) {
  callback(null, [['123'], linePartial]);
}
</code></pre>
<h3><code>readline.cursorTo(stream, x[, y][, callback])</code></h3>
<ul>
<li><code>stream</code> {stream.Writable}</li>
<li><code>x</code> {number}</li>
<li><code>y</code> {number}</li>
<li><code>callback</code> {Function} Invoked once the operation completes.</li>
<li>Returns: {boolean} <code>false</code> if <code>stream</code> wishes for the calling code to wait for
the <code>'drain'</code> event to be emitted before continuing to write additional data;
otherwise <code>true</code>.</li>
</ul>
<p>The <code>readline.cursorTo()</code> method moves cursor to the specified position in a
given <a href="tty.md">TTY</a> <code>stream</code>.</p>
<h3><code>readline.moveCursor(stream, dx, dy[, callback])</code></h3>
<ul>
<li><code>stream</code> {stream.Writable}</li>
<li><code>dx</code> {number}</li>
<li><code>dy</code> {number}</li>
<li><code>callback</code> {Function} Invoked once the operation completes.</li>
<li>Returns: {boolean} <code>false</code> if <code>stream</code> wishes for the calling code to wait for
the <code>'drain'</code> event to be emitted before continuing to write additional data;
otherwise <code>true</code>.</li>
</ul>
<p>The <code>readline.moveCursor()</code> method moves the cursor <em>relative</em> to its current
position in a given <a href="tty.md">TTY</a> <code>stream</code>.</p>
<h2><code>readline.emitKeypressEvents(stream[, interface])</code></h2>
<ul>
<li><code>stream</code> {stream.Readable}</li>
<li><code>interface</code> {readline.InterfaceConstructor}</li>
</ul>
<p>The <code>readline.emitKeypressEvents()</code> method causes the given <a href="stream.md#readable-streams">Readable</a>
stream to begin emitting <code>'keypress'</code> events corresponding to received input.</p>
<p>Optionally, <code>interface</code> specifies a <code>readline.Interface</code> instance for which
autocompletion is disabled when copy-pasted input is detected.</p>
<p>If the <code>stream</code> is a <a href="tty.md">TTY</a>, then it must be in raw mode.</p>
<p>This is automatically called by any readline instance on its <code>input</code> if the
<code>input</code> is a terminal. Closing the <code>readline</code> instance does not stop
the <code>input</code> from emitting <code>'keypress'</code> events.</p>
<pre><code class="language-js">readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY)
  process.stdin.setRawMode(true);
</code></pre>
<h2>Example: Tiny CLI</h2>
<p>The following example illustrates the use of <code>readline.Interface</code> class to
implement a small command-line interface:</p>
<pre><code class="language-mjs">import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: 'OHAI&gt; ',
});

rl.prompt();

rl.on('line', (line) =&gt; {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () =&gt; {
  console.log('Have a great day!');
  exit(0);
});
</code></pre>
<pre><code class="language-cjs">const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI&gt; ',
});

rl.prompt();

rl.on('line', (line) =&gt; {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () =&gt; {
  console.log('Have a great day!');
  process.exit(0);
});
</code></pre>
<h2>Example: Read file stream line-by-Line</h2>
<p>A common use case for <code>readline</code> is to consume an input file one line at a
time. The easiest way to do so is leveraging the <a href="fs.md#class-fsreadstream"><code>fs.ReadStream</code></a> API as
well as a <code>for await...of</code> loop:</p>
<pre><code class="language-mjs">import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

async function processLineByLine() {
  const fileStream = createReadStream('input.txt');

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();
</code></pre>
<pre><code class="language-cjs">const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

async function processLineByLine() {
  const fileStream = createReadStream('input.txt');

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();
</code></pre>
<p>Alternatively, one could use the <a href="#event-line"><code>'line'</code></a> event:</p>
<pre><code class="language-mjs">import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({
  input: createReadStream('sample.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (line) =&gt; {
  console.log(`Line from file: ${line}`);
});
</code></pre>
<pre><code class="language-cjs">const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

const rl = createInterface({
  input: createReadStream('sample.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (line) =&gt; {
  console.log(`Line from file: ${line}`);
});
</code></pre>
<p>Currently, <code>for await...of</code> loop can be a bit slower. If <code>async</code> / <code>await</code>
flow and speed are both essential, a mixed approach can be applied:</p>
<pre><code class="language-mjs">import { once } from 'node:events';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('big-file.txt'),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) =&gt; {
      // Process the line.
    });

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();
</code></pre>
<pre><code class="language-cjs">const { once } = require('node:events');
const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('big-file.txt'),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) =&gt; {
      // Process the line.
    });

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();
</code></pre>
<h2>TTY keybindings</h2>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Keybindings&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;th&gt;Notes&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Shift&lt;/kbd&gt;+&lt;kbd&gt;Backspace&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete line left&lt;/td&gt;
&lt;td&gt;Doesn't work on Linux, Mac and Windows&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Shift&lt;/kbd&gt;+&lt;kbd&gt;Delete&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete line right&lt;/td&gt;
&lt;td&gt;Doesn't work on Mac&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Emit &lt;code&gt;SIGINT&lt;/code&gt; or close the readline instance&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;H&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete left&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete right or close the readline instance in case the current line is empty / EOF&lt;/td&gt;
&lt;td&gt;Doesn't work on Windows&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;U&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete from the current position to the line start&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;K&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete from the current position to the end of line&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Y&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Yank (Recall) the previously deleted text&lt;/td&gt;
&lt;td&gt;Only works with text deleted by &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;U&lt;/kbd&gt; or &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;K&lt;/kbd&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;Y&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Cycle among previously deleted texts&lt;/td&gt;
&lt;td&gt;Only available when the last keystroke is &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Y&lt;/kbd&gt; or &lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;Y&lt;/kbd&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;A&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Go to start of line&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;E&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Go to end of line&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;B&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Back one character&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;F&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Forward one character&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;L&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Clear screen&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;N&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Next history item&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;P&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Previous history item&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;-&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Undo previous change&lt;/td&gt;
&lt;td&gt;Any keystroke that emits key code &lt;code&gt;0x1F&lt;/code&gt; will do this action.
In many terminals, for example &lt;code&gt;xterm&lt;/code&gt;,
this is bound to &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;-&lt;/kbd&gt;.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;6&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Redo previous change&lt;/td&gt;
&lt;td&gt;Many terminals don't have a default redo keystroke.
We choose key code &lt;code&gt;0x1E&lt;/code&gt; to perform redo.
In &lt;code&gt;xterm&lt;/code&gt;, it is bound to &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;6&lt;/kbd&gt;
by default.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Z&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Moves running process into background. Type
&lt;code&gt;fg&lt;/code&gt; and press &lt;kbd&gt;Enter&lt;/kbd&gt;
to return.&lt;/td&gt;
&lt;td&gt;Doesn't work on Windows&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;W&lt;/kbd&gt; or &lt;kbd&gt;Ctrl&lt;/kbd&gt;
+&lt;kbd&gt;Backspace&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete backward to a word boundary&lt;/td&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Backspace&lt;/kbd&gt; Doesn't
work on Linux, Mac and Windows&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Delete&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete forward to a word boundary&lt;/td&gt;
&lt;td&gt;Doesn't work on Mac&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Left arrow&lt;/kbd&gt; or
&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;B&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Word left&lt;/td&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Left arrow&lt;/kbd&gt; Doesn't work
on Mac&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Right arrow&lt;/kbd&gt; or
&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;F&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Word right&lt;/td&gt;
&lt;td&gt;&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Right arrow&lt;/kbd&gt; Doesn't work
on Mac&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;D&lt;/kbd&gt; or &lt;kbd&gt;Meta&lt;/kbd&gt;
+&lt;kbd&gt;Delete&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete word right&lt;/td&gt;
&lt;td&gt;&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;Delete&lt;/kbd&gt; Doesn't work
on windows&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;kbd&gt;Meta&lt;/kbd&gt;+&lt;kbd&gt;Backspace&lt;/kbd&gt;&lt;/td&gt;
&lt;td&gt;Delete word left&lt;/td&gt;
&lt;td&gt;Doesn't work on Mac&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
