---
id: "js-en-function-node-child_process"
language: "js"
lang: "en"
category: "function"
name: "node:child_process"
title: "Child process"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/child_process.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-78"],"note":"命令注入 sink；拼接用户输入即 RCE"}]
---

# Child process

<h1>Child process</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:child_process</code> module provides the ability to spawn subprocesses in
a manner that is similar, but not identical, to popen(3). This capability
is primarily provided by the <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> function:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) =&gt; {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) =&gt; {
  console.log(`child process exited with code ${code}`);
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import { once } from 'node:events';
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) =&gt; {
  console.error(`stderr: ${data}`);
});

const [code] = await once(ls, 'close');
console.log(`child process exited with code ${code}`);
</code></pre>
<p>By default, pipes for <code>stdin</code>, <code>stdout</code>, and <code>stderr</code> are established between
the parent Node.js process and the spawned subprocess. These pipes have
limited (and platform-specific) capacity. If the subprocess writes to
stdout in excess of that limit without the output being captured, the
subprocess blocks, waiting for the pipe buffer to accept more data. This is
identical to the behavior of pipes in the shell. Use the <code>{ stdio: 'ignore' }</code>
option if the output will not be consumed.</p>
<p>The command lookup is performed using the <code>options.env.PATH</code> environment
variable if <code>env</code> is in the <code>options</code> object. Otherwise, <code>process.env.PATH</code> is
used. If <code>options.env</code> is set without <code>PATH</code>, lookup on Unix is performed
on a default search path search of <code>/usr/bin:/bin</code> (see your operating system's
manual for execvpe/execvp), on Windows the current processes environment
variable <code>PATH</code> is used.</p>
<p>On Windows, environment variables are case-insensitive. Node.js
lexicographically sorts the <code>env</code> keys and uses the first one that
case-insensitively matches. Only first (in lexicographic order) entry will be
passed to the subprocess. This might lead to issues on Windows when passing
objects to the <code>env</code> option that have multiple variants of the same key, such as
<code>PATH</code> and <code>Path</code>.</p>
<p>The <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> method spawns the child process asynchronously,
without blocking the Node.js event loop. The <a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>
function provides equivalent functionality in a synchronous manner that blocks
the event loop until the spawned process either exits or is terminated.</p>
<p>For convenience, the <code>node:child_process</code> module provides a handful of
synchronous and asynchronous alternatives to <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> and
<a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>. Each of these alternatives are implemented on
top of <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> or <a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>.</p>
<ul>
<li><a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>: spawns a shell and runs a command within that
shell, passing the <code>stdout</code> and <code>stderr</code> to a callback function when
complete.</li>
<li><a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a>: similar to <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> except
that it spawns the command directly without first spawning a shell by
default.</li>
<li><a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>: spawns a new Node.js process and invokes a
specified module with an IPC communication channel established that allows
sending messages between parent and child.</li>
<li><a href="#child_processexecsynccommand-options"><code>child_process.execSync()</code></a>: a synchronous version of
<a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> that will block the Node.js event loop.</li>
<li><a href="#child_processexecfilesyncfile-args-options"><code>child_process.execFileSync()</code></a>: a synchronous version of
<a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> that will block the Node.js event loop.</li>
</ul>
<p>For certain use cases, such as automating shell scripts, the
<a href="#synchronous-process-creation">synchronous counterparts</a> may be more convenient. In many cases, however,
the synchronous methods can have significant impact on performance due to
stalling the event loop while spawned processes complete.</p>
<h2>Asynchronous process creation</h2>
<p>The <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>, <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>, <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>,
and <a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> methods all follow the idiomatic asynchronous
programming pattern typical of other Node.js APIs.</p>
<p>Each of the methods returns a <a href="#class-childprocess"><code>ChildProcess</code></a> instance. These objects
implement the Node.js <a href="events.md#class-eventemitter"><code>EventEmitter</code></a> API, allowing the parent process to
register listener functions that are called when certain events occur during
the life cycle of the child process.</p>
<p>The <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> and <a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> methods
additionally allow for an optional <code>callback</code> function to be specified that is
invoked when the child process terminates.</p>
<h3>Spawning <code>.bat</code> and <code>.cmd</code> files on Windows</h3>
<p>The importance of the distinction between <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> and
<a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> can vary based on platform. On Unix-type
operating systems (Unix, Linux, macOS) <a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> can be
more efficient because it does not spawn a shell by default. On Windows,
however, <code>.bat</code> and <code>.cmd</code> files are not executable on their own without a
terminal, and therefore cannot be launched using <a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a>.
When running on Windows, <code>.bat</code> and <code>.cmd</code> files can be invoked by:</p>
<ul>
<li>using <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> with the <code>shell</code> option set (not recommended, see <a href="deprecations.md#DEP0190">DEP0190</a>), or</li>
<li>using <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>, or</li>
<li>spawning <code>cmd.exe</code> and passing the <code>.bat</code> or <code>.cmd</code> file as an argument
(which is what <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> does internally).</li>
</ul>
<p>In any case, if the script filename contains spaces, it needs to be quoted.</p>
<pre><code class="language-cjs">const { exec, spawn } = require('node:child_process');

exec('my.bat', (err, stdout, stderr) =&gt; { /* ... */ });

// Or, spawning cmd.exe directly:
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

// If the script filename contains spaces, it needs to be quoted
exec('&quot;my script.cmd&quot; a b', (err, stdout, stderr) =&gt; { /* ... */ });
</code></pre>
<pre><code class="language-mjs">import { exec, spawn } from 'node:child_process';

exec('my.bat', (err, stdout, stderr) =&gt; { /* ... */ });

// Or, spawning cmd.exe directly:
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

// If the script filename contains spaces, it needs to be quoted
exec('&quot;my script.cmd&quot; a b', (err, stdout, stderr) =&gt; { /* ... */ });
</code></pre>
<h3><code>child_process.exec(command[, options][, callback])</code></h3>
<ul>
<li><code>command</code> {string} The command to run, with space-separated arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.
<strong>Default:</strong> <code>process.cwd()</code>.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>encoding</code> {string} <strong>Default:</strong> <code>'utf8'</code></li>
<li><code>shell</code> {string} Shell to execute the command with. See
<a href="#shell-requirements">Shell requirements</a> and <a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong>
<code>'/bin/sh'</code> on Unix, <code>process.env.ComSpec</code> on Windows.</li>
<li><code>signal</code> {AbortSignal} allows aborting the child process using an
AbortSignal.</li>
<li><code>timeout</code> {number} <strong>Default:</strong> <code>0</code></li>
<li><code>maxBuffer</code> {number} Largest amount of data in bytes allowed on stdout or
stderr. If exceeded, the child process is terminated and any output is
truncated. See caveat at <a href="#maxbuffer-and-unicode"><code>maxBuffer</code> and Unicode</a>.
<strong>Default:</strong> <code>1024 * 1024</code>.</li>
<li><code>killSignal</code> {string|integer} <strong>Default:</strong> <code>'SIGTERM'</code></li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function} called with the output when process terminates.
<ul>
<li><code>error</code> {Error}</li>
<li><code>stdout</code> {string|Buffer}</li>
<li><code>stderr</code> {string|Buffer}</li>
</ul>
</li>
<li>Returns: {ChildProcess}</li>
</ul>
<p>Spawns a shell then executes the <code>command</code> within that shell, buffering any
generated output. The <code>command</code> string passed to the exec function is processed
directly by the shell and special characters (vary based on
<a href="https://en.wikipedia.org/wiki/List_of_command-line_interpreters">shell</a>)
need to be dealt with accordingly:</p>
<pre><code class="language-cjs">const { exec } = require('node:child_process');

exec('&quot;/path/to/test file/test.sh&quot; arg1 arg2');
// Double quotes are used so that the space in the path is not interpreted as
// a delimiter of multiple arguments.

exec('echo &quot;The \\$HOME variable is $HOME&quot;');
// The $HOME variable is escaped in the first instance, but not in the second.
</code></pre>
<pre><code class="language-mjs">import { exec } from 'node:child_process';

exec('&quot;/path/to/test file/test.sh&quot; arg1 arg2');
// Double quotes are used so that the space in the path is not interpreted as
// a delimiter of multiple arguments.

exec('echo &quot;The \\$HOME variable is $HOME&quot;');
// The $HOME variable is escaped in the first instance, but not in the second.
</code></pre>
<p><strong>Never pass unsanitized user input to this function. Any input containing shell
metacharacters may be used to trigger arbitrary command execution.</strong></p>
<p>If a <code>callback</code> function is provided, it is called with the arguments
<code>(error, stdout, stderr)</code>. On success, <code>error</code> will be <code>null</code>. On error,
<code>error</code> will be an instance of <a href="errors.md#class-error"><code>Error</code></a>. The <code>error.code</code> property will be
the exit code of the process. By convention, any exit code other than <code>0</code>
indicates an error. <code>error.signal</code> will be the signal that terminated the
process.</p>
<p>The <code>stdout</code> and <code>stderr</code> arguments passed to the callback will contain the
stdout and stderr output of the child process. By default, Node.js will decode
the output as UTF-8 and pass strings to the callback. The <code>encoding</code> option
can be used to specify the character encoding used to decode the stdout and
stderr output. If <code>encoding</code> is <code>'buffer'</code>, or an unrecognized character
encoding, <code>Buffer</code> objects will be passed to the callback instead.</p>
<blockquote>
<p>Using the <code>signal</code> option to destroy a long-lived child process as a resource
cleanup mechanism is deprecated. The <code>signal</code> option remains appropriate for
cancellation, externally propagated aborts, and timeouts. See
<a href="deprecations.md#dep0209-using-abortsignal-to-dispose-of-resources">DEP0209</a>.</p>
</blockquote>
<pre><code class="language-cjs">const { exec } = require('node:child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) =&gt; {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
</code></pre>
<pre><code class="language-mjs">import { exec } from 'node:child_process';
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) =&gt; {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
</code></pre>
<p>If <code>timeout</code> is greater than <code>0</code>, the parent process will send the signal
identified by the <code>killSignal</code> property (the default is <code>'SIGTERM'</code>) if the
child process runs longer than <code>timeout</code> milliseconds.</p>
<p>Unlike the exec(3) POSIX system call, <code>child_process.exec()</code> does not replace
the existing process and uses a shell to execute the command.</p>
<p>If this method is invoked as its <a href="util.md#utilpromisifyoriginal"><code>util.promisify()</code></a>ed version, it returns
a <code>Promise</code> for an <code>Object</code> with <code>stdout</code> and <code>stderr</code> properties. The returned
<code>ChildProcess</code> instance is attached to the <code>Promise</code> as a <code>child</code> property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same <code>error</code> object given in the
callback, but with two additional properties <code>stdout</code> and <code>stderr</code>.</p>
<pre><code class="language-cjs">const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
</code></pre>
<pre><code class="language-mjs">import { promisify } from 'node:util';
import child_process from 'node:child_process';
const exec = promisify(child_process.exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
</code></pre>
<p>If the <code>signal</code> option is enabled, calling <code>.abort()</code> on the corresponding
<code>AbortController</code> is similar to calling <code>.kill()</code> on the child process except
the error passed to the callback will be an <code>AbortError</code>:</p>
<pre><code class="language-cjs">const { exec } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const child = exec('grep ssh', { signal }, (error) =&gt; {
  console.error(error); // an AbortError
});
controller.abort();
</code></pre>
<pre><code class="language-mjs">import { exec } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = exec('grep ssh', { signal }, (error) =&gt; {
  console.error(error); // an AbortError
});
controller.abort();
</code></pre>
<h3><code>child_process.execFile(file[, args][, options][, callback])</code></h3>
<ul>
<li><code>file</code> {string} The name or path of the executable file to run.</li>
<li><code>args</code> {string[]} List of string arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>encoding</code> {string} <strong>Default:</strong> <code>'utf8'</code></li>
<li><code>timeout</code> {number} <strong>Default:</strong> <code>0</code></li>
<li><code>maxBuffer</code> {number} Largest amount of data in bytes allowed on stdout or
stderr. If exceeded, the child process is terminated and any output is
truncated. See caveat at <a href="#maxbuffer-and-unicode"><code>maxBuffer</code> and Unicode</a>.
<strong>Default:</strong> <code>1024 * 1024</code>.</li>
<li><code>killSignal</code> {string|integer} <strong>Default:</strong> <code>'SIGTERM'</code></li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
<li><code>windowsVerbatimArguments</code> {boolean} No quoting or escaping of arguments is
done on Windows. Ignored on Unix. <strong>Default:</strong> <code>false</code>.</li>
<li><code>shell</code> {boolean|string} If <code>true</code>, runs <code>command</code> inside of a shell. Uses
<code>'/bin/sh'</code> on Unix, and <code>process.env.ComSpec</code> on Windows. A different
shell can be specified as a string. See <a href="#shell-requirements">Shell requirements</a> and
<a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong> <code>false</code> (no shell).</li>
<li><code>signal</code> {AbortSignal} allows aborting the child process using an
AbortSignal.</li>
</ul>
</li>
<li><code>callback</code> {Function} Called with the output when process terminates.
<ul>
<li><code>error</code> {Error}</li>
<li><code>stdout</code> {string|Buffer}</li>
<li><code>stderr</code> {string|Buffer}</li>
</ul>
</li>
<li>Returns: {ChildProcess}</li>
</ul>
<p>The <code>child_process.execFile()</code> function is similar to <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>
except that it does not spawn a shell by default. Rather, the specified
executable <code>file</code> is spawned directly as a new process making it slightly more
efficient than <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>.</p>
<blockquote>
<p>Using the <code>signal</code> option to destroy a long-lived child process as a resource
cleanup mechanism is deprecated. The <code>signal</code> option remains appropriate for
cancellation, externally propagated aborts, and timeouts. See
<a href="deprecations.md#dep0209-using-abortsignal-to-dispose-of-resources">DEP0209</a>.</p>
</blockquote>
<p>The same options as <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> are supported. Since a shell is
not spawned, behaviors such as I/O redirection and file globbing are not
supported.</p>
<pre><code class="language-cjs">const { execFile } = require('node:child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) =&gt; {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
</code></pre>
<pre><code class="language-mjs">import { execFile } from 'node:child_process';
const child = execFile('node', ['--version'], (error, stdout, stderr) =&gt; {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
</code></pre>
<p>The <code>stdout</code> and <code>stderr</code> arguments passed to the callback will contain the
stdout and stderr output of the child process. By default, Node.js will decode
the output as UTF-8 and pass strings to the callback. The <code>encoding</code> option
can be used to specify the character encoding used to decode the stdout and
stderr output. If <code>encoding</code> is <code>'buffer'</code>, or an unrecognized character
encoding, <code>Buffer</code> objects will be passed to the callback instead.</p>
<p>If this method is invoked as its <a href="util.md#utilpromisifyoriginal"><code>util.promisify()</code></a>ed version, it returns
a <code>Promise</code> for an <code>Object</code> with <code>stdout</code> and <code>stderr</code> properties. The returned
<code>ChildProcess</code> instance is attached to the <code>Promise</code> as a <code>child</code> property. In
case of an error (including any error resulting in an exit code other than 0), a
rejected promise is returned, with the same <code>error</code> object given in the
callback, but with two additional properties <code>stdout</code> and <code>stderr</code>.</p>
<pre><code class="language-cjs">const util = require('node:util');
const execFile = util.promisify(require('node:child_process').execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
</code></pre>
<pre><code class="language-mjs">import { promisify } from 'node:util';
import child_process from 'node:child_process';
const execFile = promisify(child_process.execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();
</code></pre>
<p><strong>If the <code>shell</code> option is enabled, do not pass unsanitized user input to this
function. Any input containing shell metacharacters may be used to trigger
arbitrary command execution.</strong></p>
<p>If the <code>signal</code> option is enabled, calling <code>.abort()</code> on the corresponding
<code>AbortController</code> is similar to calling <code>.kill()</code> on the child process except
the error passed to the callback will be an <code>AbortError</code>:</p>
<pre><code class="language-cjs">const { execFile } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) =&gt; {
  console.error(error); // an AbortError
});
controller.abort();
</code></pre>
<pre><code class="language-mjs">import { execFile } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const child = execFile('node', ['--version'], { signal }, (error) =&gt; {
  console.error(error); // an AbortError
});
controller.abort();
</code></pre>
<h3><code>child_process.fork(modulePath[, args][, options])</code></h3>
<ul>
<li><code>modulePath</code> {string|URL} The module to run in the child.</li>
<li><code>args</code> {string[]} List of string arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>detached</code> {boolean} Prepare child process to run independently of its
parent process. Specific behavior depends on the platform (see
<a href="#optionsdetached"><code>options.detached</code></a>).</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>execPath</code> {string} Executable used to create the child process.</li>
<li><code>execArgv</code> {string[]} List of string arguments passed to the executable.
<strong>Default:</strong> <code>process.execArgv</code>.</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>serialization</code> {string} Specify the kind of serialization used for sending
messages between processes. Possible values are <code>'json'</code> and <code>'advanced'</code>.
See <a href="#advanced-serialization">Advanced serialization</a> for more details. <strong>Default:</strong> <code>'json'</code>.</li>
<li><code>signal</code> {AbortSignal} Allows closing the child process using an
AbortSignal.</li>
<li><code>killSignal</code> {string|integer} The signal value to be used when the spawned
process will be killed by timeout or abort signal. <strong>Default:</strong> <code>'SIGTERM'</code>.</li>
<li><code>silent</code> {boolean} If <code>true</code>, stdin, stdout, and stderr of the child
process will be piped to the parent process, otherwise they will be inherited
from the parent process, see the <code>'pipe'</code> and <code>'inherit'</code> options for
<a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="#optionsstdio"><code>stdio</code></a> for more details.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>stdio</code> {Array|string} See <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="#optionsstdio"><code>stdio</code></a>.
When this option is provided, it overrides <code>silent</code>. If the array variant
is used, it must contain exactly one item with value <code>'ipc'</code> or an error
will be thrown. For instance <code>[0, 1, 2, 'ipc']</code>.</li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
<li><code>windowsVerbatimArguments</code> {boolean} No quoting or escaping of arguments is
done on Windows. Ignored on Unix. <strong>Default:</strong> <code>false</code>.</li>
<li><code>timeout</code> {number} In milliseconds the maximum amount of time the process
is allowed to run. <strong>Default:</strong> <code>undefined</code>.</li>
</ul>
</li>
<li>Returns: {ChildProcess}</li>
</ul>
<p>The <code>child_process.fork()</code> method is a special case of
<a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> used specifically to spawn new Node.js processes.
Like <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>, a <a href="#class-childprocess"><code>ChildProcess</code></a> object is returned. The
returned <a href="#class-childprocess"><code>ChildProcess</code></a> will have an additional communication channel
built-in that allows messages to be passed back and forth between the parent and
child. See <a href="#subprocesssendmessage-sendhandle-options-callback"><code>subprocess.send()</code></a> for details.</p>
<p>Keep in mind that spawned Node.js child processes are
independent of the parent with exception of the IPC communication channel
that is established between the two. Each process has its own memory, with
their own V8 instances. Because of the additional resource allocations
required, spawning a large number of child Node.js processes is not
recommended.</p>
<p>By default, <code>child_process.fork()</code> will spawn new Node.js instances using the
<a href="process.md#processexecpath"><code>process.execPath</code></a> of the parent process. The <code>execPath</code> property in the
<code>options</code> object allows for an alternative execution path to be used.</p>
<p>Node.js processes launched with a custom <code>execPath</code> will communicate with the
parent process using the file descriptor (fd) identified using the
environment variable <code>NODE_CHANNEL_FD</code> on the child process.</p>
<p>Unlike the fork(2) POSIX system call, <code>child_process.fork()</code> does not clone the
current process.</p>
<p>The <code>shell</code> option available in <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> is not supported by
<code>child_process.fork()</code> and will be ignored if set.</p>
<blockquote>
<p>Using the <code>signal</code> option to destroy a long-lived child process as a resource
cleanup mechanism is deprecated. The <code>signal</code> option remains appropriate for
cancellation, externally propagated aborts, and timeouts. See
<a href="deprecations.md#dep0209-using-abortsignal-to-dispose-of-resources">DEP0209</a>.</p>
</blockquote>
<p>If the <code>signal</code> option is enabled, calling <code>.abort()</code> on the corresponding
<code>AbortController</code> is similar to calling <code>.kill()</code> on the child process except
the error passed to the callback will be an <code>AbortError</code>:</p>
<pre><code class="language-cjs">const { fork } = require('node:child_process');

if (process.argv[2] === 'child') {
  setTimeout(() =&gt; {
    console.log(`Hello from ${process.argv[2]}!`);
  }, 1_000);
} else {
  const controller = new AbortController();
  const { signal } = controller;
  const child = fork(__filename, ['child'], { signal });
  child.on('error', (err) =&gt; {
    // This will be called with err being an AbortError if the controller aborts
  });
  controller.abort(); // Stops the child process
}
</code></pre>
<pre><code class="language-mjs">import { fork } from 'node:child_process';
import process from 'node:process';

if (process.argv[2] === 'child') {
  setTimeout(() =&gt; {
    console.log(`Hello from ${process.argv[2]}!`);
  }, 1_000);
} else {
  const controller = new AbortController();
  const { signal } = controller;
  const child = fork(import.meta.url, ['child'], { signal });
  child.on('error', (err) =&gt; {
    // This will be called with err being an AbortError if the controller aborts
  });
  controller.abort(); // Stops the child process
}
</code></pre>
<h3><code>child_process.spawn(command[, args][, options])</code></h3>
<ul>
<li><code>command</code> {string} The command to run.</li>
<li><code>args</code> {string[]} List of string arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>argv0</code> {string} Explicitly set the value of <code>argv[0]</code> sent to the child
process. This will be set to <code>command</code> if not specified.</li>
<li><code>stdio</code> {Array|string} Child's stdio configuration (see
<a href="#optionsstdio"><code>options.stdio</code></a>).</li>
<li><code>detached</code> {boolean} Prepare child process to run independently of
its parent process. Specific behavior depends on the platform (see
<a href="#optionsdetached"><code>options.detached</code></a>).</li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>serialization</code> {string} Specify the kind of serialization used for sending
messages between processes. Possible values are <code>'json'</code> and <code>'advanced'</code>.
See <a href="#advanced-serialization">Advanced serialization</a> for more details. <strong>Default:</strong> <code>'json'</code>.</li>
<li><code>shell</code> {boolean|string} If <code>true</code>, runs <code>command</code> inside of a shell. Uses
<code>'/bin/sh'</code> on Unix, and <code>process.env.ComSpec</code> on Windows. A different
shell can be specified as a string. See <a href="#shell-requirements">Shell requirements</a> and
<a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong> <code>false</code> (no shell).</li>
<li><code>windowsVerbatimArguments</code> {boolean} No quoting or escaping of arguments is
done on Windows. Ignored on Unix. This is set to <code>true</code> automatically
when <code>shell</code> is specified and is CMD. <strong>Default:</strong> <code>false</code>.</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
<li><code>signal</code> {AbortSignal} allows aborting the child process using an
AbortSignal.</li>
<li><code>timeout</code> {number} In milliseconds the maximum amount of time the process
is allowed to run. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>killSignal</code> {string|integer} The signal value to be used when the spawned
process will be killed by timeout or abort signal. <strong>Default:</strong> <code>'SIGTERM'</code>.</li>
</ul>
</li>
<li>Returns: {ChildProcess}</li>
</ul>
<p>The <code>child_process.spawn()</code> method spawns a new process using the given
<code>command</code>, with command-line arguments in <code>args</code>. If omitted, <code>args</code> defaults
to an empty array.</p>
<p><strong>If the <code>shell</code> option is enabled, do not pass unsanitized user input to this
function. Any input containing shell metacharacters may be used to trigger
arbitrary command execution.</strong></p>
<p>A third argument may be used to specify additional options, with these defaults:</p>
<pre><code class="language-js">const defaults = {
  cwd: undefined,
  env: process.env,
};
</code></pre>
<p>Use <code>cwd</code> to specify the working directory from which the process is spawned.
If not given, the default is to inherit the current working directory. If given,
but the path does not exist, the child process emits an <code>ENOENT</code> error
and exits immediately. <code>ENOENT</code> is also emitted when the command
does not exist.</p>
<p>Use <code>env</code> to specify environment variables that will be visible to the new
process, the default is <a href="process.md#processenv"><code>process.env</code></a>.</p>
<p><code>undefined</code> values in <code>env</code> will be ignored.</p>
<blockquote>
<p>Using the <code>signal</code> option to destroy a long-lived child process as a resource
cleanup mechanism is deprecated. The <code>signal</code> option remains appropriate for
cancellation, externally propagated aborts, and timeouts. See
<a href="deprecations.md#dep0209-using-abortsignal-to-dispose-of-resources">DEP0209</a>.</p>
</blockquote>
<p>Example of running <code>ls -lh /usr</code>, capturing <code>stdout</code>, <code>stderr</code>, and the
exit code:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) =&gt; {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) =&gt; {
  console.log(`child process exited with code ${code}`);
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import { once } from 'node:events';
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) =&gt; {
  console.error(`stderr: ${data}`);
});

const [code] = await once(ls, 'close');
console.log(`child process exited with code ${code}`);
</code></pre>
<p>Example: A very elaborate way to run <code>ps ax | grep ssh</code></p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) =&gt; {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) =&gt; {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) =&gt; {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) =&gt; {
  console.log(data.toString());
});

grep.stderr.on('data', (data) =&gt; {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) =&gt; {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) =&gt; {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) =&gt; {
  console.error(`ps stderr: ${data}`);
});

ps.on('close', (code) =&gt; {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) =&gt; {
  console.log(data.toString());
});

grep.stderr.on('data', (data) =&gt; {
  console.error(`grep stderr: ${data}`);
});

grep.on('close', (code) =&gt; {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
});
</code></pre>
<p>Example of checking for failed <code>spawn</code>:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const subprocess = spawn('bad_command');

subprocess.on('error', (err) =&gt; {
  console.error('Failed to start subprocess.');
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
const subprocess = spawn('bad_command');

subprocess.on('error', (err) =&gt; {
  console.error('Failed to start subprocess.');
});
</code></pre>
<p>Certain platforms (macOS, Linux) will use the value of <code>argv[0]</code> for the process
title while others (Windows, SunOS) will use <code>command</code>.</p>
<p>Node.js overwrites <code>argv[0]</code> with <code>process.execPath</code> on startup, so
<code>process.argv[0]</code> in a Node.js child process will not match the <code>argv0</code>
parameter passed to <code>spawn</code> from the parent. Retrieve it with the
<code>process.argv0</code> property instead.</p>
<p>If the <code>signal</code> option is enabled, calling <code>.abort()</code> on the corresponding
<code>AbortController</code> is similar to calling <code>.kill()</code> on the child process except
the error passed to the callback will be an <code>AbortError</code>:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;
const grep = spawn('grep', ['ssh'], { signal });
grep.on('error', (err) =&gt; {
  // This will be called with err being an AbortError if the controller aborts
});
controller.abort(); // Stops the child process
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
const controller = new AbortController();
const { signal } = controller;
const grep = spawn('grep', ['ssh'], { signal });
grep.on('error', (err) =&gt; {
  // This will be called with err being an AbortError if the controller aborts
});
controller.abort(); // Stops the child process
</code></pre>
<h4><code>options.detached</code></h4>
<p>On Windows, setting <code>options.detached</code> to <code>true</code> makes it possible for the
child process to continue running after the parent exits. The child process
will have its own console window. Once enabled for a child process,
it cannot be disabled.</p>
<p>On non-Windows platforms, if <code>options.detached</code> is set to <code>true</code>, the child
process will be made the leader of a new process group and session. Child
processes may continue running after the parent exits regardless of whether
they are detached or not. See setsid(2) for more information.</p>
<p>By default, the parent will wait for the detached child process to exit.
To prevent the parent process from waiting for a given <code>subprocess</code> to exit, use
the <code>subprocess.unref()</code> method. Doing so will cause the parent process' event
loop to not include the child process in its reference count, allowing the
parent process to exit independently of the child process, unless there is an established
IPC channel between the child and the parent processes.</p>
<p>When using the <code>detached</code> option to start a long-running process, the process
will not stay running in the background after the parent exits unless it is
provided with a <code>stdio</code> configuration that is not connected to the parent.
If the parent process' <code>stdio</code> is inherited, the child process will remain attached
to the controlling terminal.</p>
<p>Example of a long-running process, by detaching and also ignoring its parent
<code>stdio</code> file descriptors, in order to ignore the parent's termination:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import process from 'node:process';

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
</code></pre>
<p>Alternatively one can redirect the child process' output into files:</p>
<pre><code class="language-cjs">const { openSync } = require('node:fs');
const { spawn } = require('node:child_process');
const out = openSync('./out.log', 'a');
const err = openSync('./out.log', 'a');

const subprocess = spawn('prg', [], {
  detached: true,
  stdio: [ 'ignore', out, err ],
});

subprocess.unref();
</code></pre>
<pre><code class="language-mjs">import { openSync } from 'node:fs';
import { spawn } from 'node:child_process';
const out = openSync('./out.log', 'a');
const err = openSync('./out.log', 'a');

const subprocess = spawn('prg', [], {
  detached: true,
  stdio: [ 'ignore', out, err ],
});

subprocess.unref();
</code></pre>
<h4><code>options.stdio</code></h4>
<p>The <code>options.stdio</code> option is used to configure the pipes that are established
between the parent and child process. By default, the child's stdin, stdout,
and stderr are redirected to corresponding <a href="#subprocessstdin"><code>subprocess.stdin</code></a>,
<a href="#subprocessstdout"><code>subprocess.stdout</code></a>, and <a href="#subprocessstderr"><code>subprocess.stderr</code></a> streams on the
<a href="#class-childprocess"><code>ChildProcess</code></a> object. This is equivalent to setting the <code>options.stdio</code>
equal to <code>['pipe', 'pipe', 'pipe']</code>.</p>
<p>For convenience, <code>options.stdio</code> may be one of the following strings:</p>
<ul>
<li><code>'pipe'</code>: equivalent to <code>['pipe', 'pipe', 'pipe']</code> (the default)</li>
<li><code>'overlapped'</code>: equivalent to <code>['overlapped', 'overlapped', 'overlapped']</code></li>
<li><code>'ignore'</code>: equivalent to <code>['ignore', 'ignore', 'ignore']</code></li>
<li><code>'inherit'</code>: equivalent to <code>['inherit', 'inherit', 'inherit']</code> or <code>[0, 1, 2]</code></li>
</ul>
<p>Otherwise, the value of <code>options.stdio</code> is an array where each index corresponds
to an fd in the child. The fds 0, 1, and 2 correspond to stdin, stdout,
and stderr, respectively. Additional fds can be specified to create additional
pipes between the parent and child. The value is one of the following:</p>
<ol>
<li>
<p><code>'pipe'</code>: Create a pipe between the child process and the parent process.
The parent end of the pipe is exposed to the parent as a property on the
<code>child_process</code> object as <a href="#subprocessstdio"><code>subprocess.stdio[fd]</code></a>. Pipes
created for fds 0, 1, and 2 are also available as <a href="#subprocessstdin"><code>subprocess.stdin</code></a>,
<a href="#subprocessstdout"><code>subprocess.stdout</code></a> and <a href="#subprocessstderr"><code>subprocess.stderr</code></a>, respectively.
These are not actual Unix pipes and therefore the child process
can not use them by their descriptor files,
e.g. <code>/dev/fd/2</code> or <code>/dev/stdout</code>.</p>
</li>
<li>
<p><code>'overlapped'</code>: Same as <code>'pipe'</code> except that the <code>FILE_FLAG_OVERLAPPED</code> flag
is set on the handle. This is necessary for overlapped I/O on the child
process's stdio handles. See the
<a href="https://docs.microsoft.com/en-us/windows/win32/fileio/synchronous-and-asynchronous-i-o">docs</a>
for more details. This is exactly the same as <code>'pipe'</code> on non-Windows
systems.</p>
</li>
<li>
<p><code>'ipc'</code>: Create an IPC channel for passing messages/file descriptors
between parent and child. A <a href="#class-childprocess"><code>ChildProcess</code></a> may have at most one IPC
stdio file descriptor. Setting this option enables the
<a href="#subprocesssendmessage-sendhandle-options-callback"><code>subprocess.send()</code></a> method. If the child process is a Node.js instance,
the presence of an IPC channel will enable <a href="process.md#processsendmessage-sendhandle-options-callback"><code>process.send()</code></a> and
<a href="process.md#processdisconnect"><code>process.disconnect()</code></a> methods, as well as <a href="process.md#event-disconnect"><code>'disconnect'</code></a> and
<a href="process.md#event-message"><code>'message'</code></a> events within the child process.</p>
<p>Accessing the IPC channel fd in any way other than <a href="process.md#processsendmessage-sendhandle-options-callback"><code>process.send()</code></a>
or using the IPC channel with a child process that is not a Node.js instance
is not supported.</p>
</li>
<li>
<p><code>'ignore'</code>: Instructs Node.js to ignore the fd in the child. While Node.js
will always open fds 0, 1, and 2 for the processes it spawns, setting the fd
to <code>'ignore'</code> will cause Node.js to open <code>/dev/null</code> and attach it to the
child's fd.</p>
</li>
<li>
<p><code>'inherit'</code>: Pass through the corresponding stdio stream to/from the
parent process. In the first three positions, this is equivalent to
<code>process.stdin</code>, <code>process.stdout</code>, and <code>process.stderr</code>, respectively. In
any other position, equivalent to <code>'ignore'</code>.</p>
</li>
<li>
<p>{Stream} object: Share a readable or writable stream that refers to a tty,
file, socket, or a pipe with the child process. The stream's underlying
file descriptor is duplicated in the child process to the fd that
corresponds to the index in the <code>stdio</code> array. The stream must have an
underlying descriptor (file streams do not start until the <code>'open'</code> event has
occurred).
<strong>NOTE:</strong> While it is technically possible to pass <code>stdin</code> as a writable or
<code>stdout</code>/<code>stderr</code> as readable, it is not recommended.
Readable and writable streams are designed with distinct behaviors, and using
them incorrectly (e.g., passing a readable stream where a writable stream is
expected) can lead to unexpected results or errors. This practice is discouraged
as it may result in undefined behavior or dropped callbacks if the stream
encounters errors. Always ensure that <code>stdin</code> is used as readable and
<code>stdout</code>/<code>stderr</code> as writable to maintain the intended flow of data between
the parent and child processes. The stream passed in the <code>stdin</code> position
is the source from which the child process reads its input, and the
streams in the <code>stdout</code>/<code>stderr</code> positions receive the output the child
writes. This is the opposite of <a href="#subprocessstdin"><code>subprocess.stdin</code></a> (writable) and
<a href="#subprocessstdout"><code>subprocess.stdout</code></a> (readable), which are the parent's ends of the
pipes created by <code>'pipe'</code>.</p>
</li>
<li>
<p>Positive integer: The integer value is interpreted as a file descriptor
that is open in the parent process. It is shared with the child
process, similar to how {Stream} objects can be shared. Passing sockets
is not supported on Windows.</p>
</li>
<li>
<p><code>null</code>, <code>undefined</code>: Use default value. For stdio fds 0, 1, and 2 (in other
words, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, the
default is <code>'ignore'</code>.</p>
</li>
</ol>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

// Child will use parent's stdios.
spawn('prg', [], { stdio: 'inherit' });

// Spawn child sharing only stderr.
spawn('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });

// Open an extra fd=4, to interact with programs presenting a
// startd-style interface.
spawn('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import process from 'node:process';

// Child will use parent's stdios.
spawn('prg', [], { stdio: 'inherit' });

// Spawn child sharing only stderr.
spawn('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });

// Open an extra fd=4, to interact with programs presenting a
// startd-style interface.
spawn('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });
</code></pre>
<p><em>It is worth noting that when an IPC channel is established between the
parent and child processes, and the child process is a Node.js instance,
the child process is launched with the IPC channel unreferenced (using
<code>unref()</code>) until the child process registers an event handler for the
<a href="process.md#event-disconnect"><code>'disconnect'</code></a> event or the <a href="process.md#event-message"><code>'message'</code></a> event. This allows the
child process to exit normally without the process being held open by the
open IPC channel.</em>
See also: <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> and <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>.</p>
<h2>Synchronous process creation</h2>
<p>The <a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>, <a href="#child_processexecsynccommand-options"><code>child_process.execSync()</code></a>, and
<a href="#child_processexecfilesyncfile-args-options"><code>child_process.execFileSync()</code></a> methods are synchronous and will block the
Node.js event loop, pausing execution of any additional code until the spawned
process exits.</p>
<p>Blocking calls like these are mostly useful for simplifying general-purpose
scripting tasks and for simplifying the loading/processing of application
configuration at startup.</p>
<h3><code>child_process.execFileSync(file[, args][, options])</code></h3>
<ul>
<li><code>file</code> {string} The name or path of the executable file to run.</li>
<li><code>args</code> {string[]} List of string arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>input</code> {string|Buffer|TypedArray|DataView} The value which will be passed
as stdin to the spawned process. If <code>stdio[0]</code> is set to <code>'pipe'</code>, Supplying
this value will override <code>stdio[0]</code>.</li>
<li><code>stdio</code> {string|Array} Child's stdio configuration.
See <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="#optionsstdio"><code>stdio</code></a>. <code>stderr</code> by default will
be output to the parent process' stderr unless <code>stdio</code> is specified.
<strong>Default:</strong> <code>'pipe'</code>.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>timeout</code> {number} In milliseconds the maximum amount of time the process
is allowed to run. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>killSignal</code> {string|integer} The signal value to be used when the spawned
process will be killed. <strong>Default:</strong> <code>'SIGTERM'</code>.</li>
<li><code>maxBuffer</code> {number} Largest amount of data in bytes allowed on stdout or
stderr. If exceeded, the child process is terminated. See caveat at
<a href="#maxbuffer-and-unicode"><code>maxBuffer</code> and Unicode</a>. <strong>Default:</strong> <code>1024 * 1024</code>.</li>
<li><code>encoding</code> {string} The encoding used for all stdio inputs and outputs.
<strong>Default:</strong> <code>'buffer'</code>.</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
<li><code>shell</code> {boolean|string} If <code>true</code>, runs <code>command</code> inside of a shell. Uses
<code>'/bin/sh'</code> on Unix, and <code>process.env.ComSpec</code> on Windows. A different
shell can be specified as a string. See <a href="#shell-requirements">Shell requirements</a> and
<a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong> <code>false</code> (no shell).</li>
</ul>
</li>
<li>Returns: {Buffer|string|null} If <code>stdio</code> is <code>'pipe'</code>, the stdout from the
command, otherwise null.</li>
</ul>
<p>The <code>child_process.execFileSync()</code> method is generally identical to
<a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a> with the exception that the method will not
return until the child process has fully closed. When a timeout has been
encountered and <code>killSignal</code> is sent, the method won't return until the process
has completely exited.</p>
<p>If the child process intercepts and handles the <code>SIGTERM</code> signal and
does not exit, the parent process will still wait until the child process has
exited.</p>
<p>If the process times out or has a non-zero exit code, this method will throw an
<a href="errors.md#class-error"><code>Error</code></a> that will include the full result of the underlying
<a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>.</p>
<p><strong>If the <code>shell</code> option is enabled, do not pass unsanitized user input to this
function. Any input containing shell metacharacters may be used to trigger
arbitrary command execution.</strong></p>
<pre><code class="language-cjs">const { execFileSync } = require('node:child_process');

try {
  const stdout = execFileSync('my-script.sh', ['my-arg'], {
    // Capture stdout and stderr from child process. Overrides the
    // default behavior of streaming child stderr to the parent stderr
    stdio: 'pipe',

    // Use utf8 encoding for stdio pipes
    encoding: 'utf8',
  });

  console.log(stdout);
} catch (err) {
  if (err.code) {
    // Spawning child process failed
    console.error(err.code);
  } else {
    // Child was spawned but exited with non-zero exit code
    // Error contains any stdout and stderr from the child
    const { stdout, stderr } = err;

    console.error({ stdout, stderr });
  }
}
</code></pre>
<pre><code class="language-mjs">import { execFileSync } from 'node:child_process';

try {
  const stdout = execFileSync('my-script.sh', ['my-arg'], {
    // Capture stdout and stderr from child process. Overrides the
    // default behavior of streaming child stderr to the parent stderr
    stdio: 'pipe',

    // Use utf8 encoding for stdio pipes
    encoding: 'utf8',
  });

  console.log(stdout);
} catch (err) {
  if (err.code) {
    // Spawning child process failed
    console.error(err.code);
  } else {
    // Child was spawned but exited with non-zero exit code
    // Error contains any stdout and stderr from the child
    const { stdout, stderr } = err;

    console.error({ stdout, stderr });
  }
}
</code></pre>
<h3><code>child_process.execSync(command[, options])</code></h3>
<ul>
<li><code>command</code> {string} The command to run.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>input</code> {string|Buffer|TypedArray|DataView} The value which will be passed
as stdin to the spawned process. If <code>stdio[0]</code> is set to <code>'pipe'</code>, Supplying
this value will override <code>stdio[0]</code>.</li>
<li><code>stdio</code> {string|Array} Child's stdio configuration.
See <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="#optionsstdio"><code>stdio</code></a>. <code>stderr</code> by default will
be output to the parent process' stderr unless <code>stdio</code> is specified.
<strong>Default:</strong> <code>'pipe'</code>.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>shell</code> {string} Shell to execute the command with. See
<a href="#shell-requirements">Shell requirements</a> and <a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong>
<code>'/bin/sh'</code> on Unix, <code>process.env.ComSpec</code> on Windows.</li>
<li><code>uid</code> {number} Sets the user identity of the process. (See setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process. (See setgid(2)).</li>
<li><code>timeout</code> {number} In milliseconds the maximum amount of time the process
is allowed to run. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>killSignal</code> {string|integer} The signal value to be used when the spawned
process will be killed. <strong>Default:</strong> <code>'SIGTERM'</code>.</li>
<li><code>maxBuffer</code> {number} Largest amount of data in bytes allowed on stdout or
stderr. If exceeded, the child process is terminated and any output is
truncated. See caveat at <a href="#maxbuffer-and-unicode"><code>maxBuffer</code> and Unicode</a>.
<strong>Default:</strong> <code>1024 * 1024</code>.</li>
<li><code>encoding</code> {string} The encoding used for all stdio inputs and outputs.
<strong>Default:</strong> <code>'buffer'</code>.</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Buffer|string|null} If <code>stdio</code> is <code>'pipe'</code>, the stdout from the
command, otherwise null.</li>
</ul>
<p>The <code>child_process.execSync()</code> method is generally identical to
<a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a> with the exception that the method will not return
until the child process has fully closed. When a timeout has been encountered
and <code>killSignal</code> is sent, the method won't return until the process has
completely exited. If the child process intercepts and handles the <code>SIGTERM</code>
signal and doesn't exit, the parent process will wait until the child process
has exited.</p>
<p>If the process times out or has a non-zero exit code, this method will throw.
The <a href="errors.md#class-error"><code>Error</code></a> object will contain the entire result from
<a href="#child_processspawnsynccommand-args-options"><code>child_process.spawnSync()</code></a>.</p>
<p><strong>Never pass unsanitized user input to this function. Any input containing shell
metacharacters may be used to trigger arbitrary command execution.</strong></p>
<h3><code>child_process.spawnSync(command[, args][, options])</code></h3>
<ul>
<li><code>command</code> {string} The command to run.</li>
<li><code>args</code> {string[]} List of string arguments.</li>
<li><code>options</code> {Object}
<ul>
<li><code>cwd</code> {string|URL} Current working directory of the child process.</li>
<li><code>input</code> {string|Buffer|TypedArray|DataView} The value which will be passed
as stdin to the spawned process. If <code>stdio[0]</code> is set to <code>'pipe'</code>, Supplying
this value will override <code>stdio[0]</code>.</li>
<li><code>argv0</code> {string} Explicitly set the value of <code>argv[0]</code> sent to the child
process. This will be set to <code>command</code> if not specified.</li>
<li><code>stdio</code> {string|Array} Child's stdio configuration.
See <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="#optionsstdio"><code>stdio</code></a>. <strong>Default:</strong> <code>'pipe'</code>.</li>
<li><code>env</code> {Object} Environment key-value pairs. <strong>Default:</strong> <code>process.env</code>.</li>
<li><code>uid</code> {number} Sets the user identity of the process (see setuid(2)).</li>
<li><code>gid</code> {number} Sets the group identity of the process (see setgid(2)).</li>
<li><code>timeout</code> {number} In milliseconds the maximum amount of time the process
is allowed to run. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>killSignal</code> {string|integer} The signal value to be used when the spawned
process will be killed. <strong>Default:</strong> <code>'SIGTERM'</code>.</li>
<li><code>maxBuffer</code> {number} Largest amount of data in bytes allowed on stdout or
stderr. If exceeded, the child process is terminated and any output is
truncated. See caveat at <a href="#maxbuffer-and-unicode"><code>maxBuffer</code> and Unicode</a>.
<strong>Default:</strong> <code>1024 * 1024</code>.</li>
<li><code>encoding</code> {string} The encoding used for all stdio inputs and outputs.
<strong>Default:</strong> <code>'buffer'</code>.</li>
<li><code>shell</code> {boolean|string} If <code>true</code>, runs <code>command</code> inside of a shell. Uses
<code>'/bin/sh'</code> on Unix, and <code>process.env.ComSpec</code> on Windows. A different
shell can be specified as a string. See <a href="#shell-requirements">Shell requirements</a> and
<a href="#default-windows-shell">Default Windows shell</a>. <strong>Default:</strong> <code>false</code> (no shell).</li>
<li><code>windowsVerbatimArguments</code> {boolean} No quoting or escaping of arguments is
done on Windows. Ignored on Unix. This is set to <code>true</code> automatically
when <code>shell</code> is specified and is CMD. <strong>Default:</strong> <code>false</code>.</li>
<li><code>windowsHide</code> {boolean} Hide the subprocess console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>pid</code> {number} Pid of the child process.</li>
<li><code>output</code> {Array} Array of results from stdio output.</li>
<li><code>stdout</code> {Buffer|string|null} If <code>stdio</code> is <code>'pipe'</code>, the contents of
<code>output[1]</code>, otherwise null.</li>
<li><code>stderr</code> {Buffer|string|null} If <code>stdio</code> is <code>'pipe'</code>, the contents of
<code>output[2]</code>, otherwise null.</li>
<li><code>status</code> {number|null} The exit code of the subprocess, or <code>null</code> if the
subprocess terminated due to a signal.</li>
<li><code>signal</code> {string|null} The signal used to kill the subprocess, or <code>null</code> if
the subprocess did not terminate due to a signal.</li>
<li><code>error</code> {Error} The error object if the child process failed or timed out.</li>
</ul>
</li>
</ul>
<p>The <code>child_process.spawnSync()</code> method is generally identical to
<a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> with the exception that the function will not return
until the child process has fully closed. When a timeout has been encountered
and <code>killSignal</code> is sent, the method won't return until the process has
completely exited. If the process intercepts and handles the <code>SIGTERM</code> signal
and doesn't exit, the parent process will wait until the child process has
exited.</p>
<p><strong>If the <code>shell</code> option is enabled, do not pass unsanitized user input to this
function. Any input containing shell metacharacters may be used to trigger
arbitrary command execution.</strong></p>
<h2>Class: <code>ChildProcess</code></h2>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>Instances of the <code>ChildProcess</code> represent spawned child processes.</p>
<p>Instances of <code>ChildProcess</code> are not intended to be created directly. Rather,
use the <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>, <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>,
<a href="#child_processexecfilefile-args-options-callback"><code>child_process.execFile()</code></a>, or <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a> methods to create
instances of <code>ChildProcess</code>.</p>
<h3>Event: <code>'close'</code></h3>
<ul>
<li><code>code</code> {number} The exit code if the child process exited on its own, or
<code>null</code> if the child process terminated due to a signal.</li>
<li><code>signal</code> {string} The signal by which the child process was terminated, or
<code>null</code> if the child process did not terminated due to a signal.</li>
</ul>
<p>The <code>'close'</code> event is emitted after a process has ended <em>and</em> the stdio
streams of a child process have been closed. This is distinct from the
<a href="#event-exit"><code>'exit'</code></a> event, since multiple processes might share the same stdio
streams. The <code>'close'</code> event will always emit after <a href="#event-exit"><code>'exit'</code></a> was
already emitted, or <a href="#event-error"><code>'error'</code></a> if the child process failed to spawn.</p>
<p>If the process exited, <code>code</code> is the final exit code of the process, otherwise
<code>null</code>. If the process terminated due to receipt of a signal, <code>signal</code> is the
string name of the signal, otherwise <code>null</code>. One of the two will always be
non-<code>null</code>.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) =&gt; {
  console.log(`child process close all stdio with code ${code}`);
});

ls.on('exit', (code) =&gt; {
  console.log(`child process exited with code ${code}`);
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import { once } from 'node:events';
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) =&gt; {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) =&gt; {
  console.log(`child process close all stdio with code ${code}`);
});

ls.on('exit', (code) =&gt; {
  console.log(`child process exited with code ${code}`);
});

const [code] = await once(ls, 'close');
console.log(`child process close all stdio with code ${code}`);
</code></pre>
<h3>Event: <code>'disconnect'</code></h3>
<p>The <code>'disconnect'</code> event is emitted after calling the
<a href="#subprocessdisconnect"><code>subprocess.disconnect()</code></a> method in parent process or
<a href="process.md#processdisconnect"><code>process.disconnect()</code></a> in child process. After disconnecting it is no longer
possible to send or receive messages, and the <a href="#subprocessconnected"><code>subprocess.connected</code></a>
property is <code>false</code>.</p>
<h3>Event: <code>'error'</code></h3>
<ul>
<li><code>err</code> {Error} The error.</li>
</ul>
<p>The <code>'error'</code> event is emitted whenever:</p>
<ul>
<li>The process could not be spawned.</li>
<li>The process could not be killed.</li>
<li>Sending a message to the child process failed.</li>
<li>The child process was aborted via the <code>signal</code> option.</li>
</ul>
<p>The <code>'exit'</code> event may or may not fire after an error has occurred. When
listening to both the <code>'exit'</code> and <code>'error'</code> events, guard
against accidentally invoking handler functions multiple times.</p>
<p>See also <a href="#subprocesskillsignal"><code>subprocess.kill()</code></a> and <a href="#subprocesssendmessage-sendhandle-options-callback"><code>subprocess.send()</code></a>.</p>
<h3>Event: <code>'exit'</code></h3>
<ul>
<li><code>code</code> {number} The exit code if the child process exited on its own, or
<code>null</code> if the child process terminated due to a signal.</li>
<li><code>signal</code> {string} The signal by which the child process was terminated, or
<code>null</code> if the child process did not terminated due to a signal.</li>
</ul>
<p>The <code>'exit'</code> event is emitted after the child process ends. If the process
exited, <code>code</code> is the final exit code of the process, otherwise <code>null</code>. If the
process terminated due to receipt of a signal, <code>signal</code> is the string name of
the signal, otherwise <code>null</code>. One of the two will always be non-<code>null</code>.</p>
<p>When the <code>'exit'</code> event is triggered, child process stdio streams might still be
open.</p>
<p>Node.js establishes signal handlers for <code>SIGINT</code> and <code>SIGTERM</code> and Node.js
processes will not terminate immediately due to receipt of those signals.
Rather, Node.js will perform a sequence of cleanup actions and then will
re-raise the handled signal.</p>
<p>See waitpid(2).</p>
<p>When <code>code</code> is <code>null</code> due to signal termination, you can use
<a href="util.md#utilconvertprocesssignaltoexitcodesignal"><code>util.convertProcessSignalToExitCode()</code></a> to convert the signal to a POSIX
exit code.</p>
<h3>Event: <code>'message'</code></h3>
<ul>
<li><code>message</code> {Object} A parsed JSON object or primitive value.</li>
<li><code>sendHandle</code> {Handle|undefined} <code>undefined</code> or a <a href="net.md#class-netsocket"><code>net.Socket</code></a>,
<a href="net.md#class-netserver"><code>net.Server</code></a>, <a href="net.md#class-netboundsocket"><code>net.BoundSocket</code></a>, or <a href="dgram.md#class-dgramsocket"><code>dgram.Socket</code></a> object.</li>
</ul>
<p>The <code>'message'</code> event is triggered when a child process uses
<a href="process.md#processsendmessage-sendhandle-options-callback"><code>process.send()</code></a> to send messages.</p>
<p>The message goes through serialization and parsing. The resulting
message might not be the same as what is originally sent.</p>
<p>If the <code>serialization</code> option was set to <code>'advanced'</code> used when spawning the
child process, the <code>message</code> argument can contain data that JSON is not able
to represent.
See <a href="#advanced-serialization">Advanced serialization</a> for more details.</p>
<h3>Event: <code>'spawn'</code></h3>
<p>The <code>'spawn'</code> event is emitted once the child process has spawned successfully.
If the child process does not spawn successfully, the <code>'spawn'</code> event is not
emitted and the <code>'error'</code> event is emitted instead.</p>
<p>If emitted, the <code>'spawn'</code> event comes before all other events and before any
data is received via <code>stdout</code> or <code>stderr</code>.</p>
<p>The <code>'spawn'</code> event will fire regardless of whether an error occurs <strong>within</strong>
the spawned process. For example, if <code>bash some-command</code> spawns successfully,
the <code>'spawn'</code> event will fire, though <code>bash</code> may fail to spawn <code>some-command</code>.
This caveat also applies when using <code>{ shell: true }</code>.</p>
<h3><code>subprocess.channel</code></h3>
<ul>
<li>Type: {Object} A pipe representing the IPC channel to the child process.</li>
</ul>
<p>The <code>subprocess.channel</code> property is a reference to the child's IPC channel. If
no IPC channel exists, this property is <code>undefined</code>.</p>
<h4><code>subprocess.channel.ref()</code></h4>
<p>This method makes the IPC channel keep the event loop of the parent process
running if <code>.unref()</code> has been called before.</p>
<h4><code>subprocess.channel.unref()</code></h4>
<p>This method makes the IPC channel not keep the event loop of the parent process
running, and lets it finish even while the channel is open.</p>
<h3><code>subprocess.connected</code></h3>
<ul>
<li>Type: {boolean} Set to <code>false</code> after <code>subprocess.disconnect()</code> is called.</li>
</ul>
<p>The <code>subprocess.connected</code> property indicates whether it is still possible to
send and receive messages from a child process. When <code>subprocess.connected</code> is
<code>false</code>, it is no longer possible to send or receive messages.</p>
<h3><code>subprocess.disconnect()</code></h3>
<p>Closes the IPC channel between parent and child processes, allowing the child
process to exit gracefully once there are no other connections keeping it alive.
After calling this method the <code>subprocess.connected</code> and
<code>process.connected</code> properties in both the parent and child processes
(respectively) will be set to <code>false</code>, and it will be no longer possible
to pass messages between the processes.</p>
<p>The <code>'disconnect'</code> event will be emitted when there are no messages in the
process of being received. This will most often be triggered immediately after
calling <code>subprocess.disconnect()</code>.</p>
<p>When the child process is a Node.js instance (e.g. spawned using
<a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>), the <code>process.disconnect()</code> method can be invoked
within the child process to close the IPC channel as well.</p>
<h3><code>subprocess.exitCode</code></h3>
<ul>
<li>Type: {integer}</li>
</ul>
<p>The <code>subprocess.exitCode</code> property indicates the exit code of the child process.
If the child process is still running, the field will be <code>null</code>.</p>
<p>When the child process is terminated by a signal, <code>subprocess.exitCode</code> will be
<code>null</code> and <a href="#subprocesssignalcode"><code>subprocess.signalCode</code></a> will be set. To get the corresponding
POSIX exit code, use
<a href="util.md#utilconvertprocesssignaltoexitcodesignal"><code>util.convertProcessSignalToExitCode(subprocess.signalCode)</code></a>.</p>
<h3><code>subprocess.kill([signal])</code></h3>
<ul>
<li><code>signal</code> {number|string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>The <code>subprocess.kill()</code> method sends a signal to the child process. If no
argument is given, the process will be sent the <code>'SIGTERM'</code> signal. See
signal(7) for a list of available signals. This function returns <code>true</code> if
kill(2) succeeds, and <code>false</code> otherwise.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) =&gt; {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) =&gt; {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});

// Send SIGHUP to process.
grep.kill('SIGHUP');
</code></pre>
<p>The <a href="#class-childprocess"><code>ChildProcess</code></a> object may emit an <a href="#event-error"><code>'error'</code></a> event if the signal
cannot be delivered. Sending a signal to a child process that has already exited
is not an error but may have unforeseen consequences. Specifically, if the
process identifier (PID) has been reassigned to another process, the signal will
be delivered to that process instead which can have unexpected results.</p>
<p>While the function is called <code>kill</code>, the signal delivered to the child process
may not actually terminate the process.</p>
<p>See kill(2) for reference.</p>
<p>On Windows, where POSIX signals do not exist, signals are handled as follows.
<code>'SIGKILL'</code>, <code>'SIGTERM'</code>, <code>'SIGINT'</code> and <code>'SIGQUIT'</code> terminate the process
forcefully and abruptly (similar to <code>'SIGKILL'</code>); any other signal whose name is
known on Windows (such as <code>'SIGHUP'</code>) does the same. <code>'SIGWINCH'</code> is not
terminal and is not coerced: <code>subprocess.kill()</code> throws an <code>ENOSYS</code> error and
the child keeps running. A signal name that does not exist on Windows (such as
<code>'SIGSTOP'</code>) throws an <code>ERR_UNKNOWN_SIGNAL</code> error. See <a href="process.md#signal-events">Signal Events</a> for more
details.</p>
<p>On Linux, child processes of child processes will not be terminated
when attempting to kill their parent. This is likely to happen when running a
new process in a shell or with the use of the <code>shell</code> option of <code>ChildProcess</code>:</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e &quot;setInterval(() =&gt; {
      console.log(process.pid, 'is alive')
    }, 500);&quot;`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() =&gt; {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';

const subprocess = spawn(
  'sh',
  [
    '-c',
    `node -e &quot;setInterval(() =&gt; {
      console.log(process.pid, 'is alive')
    }, 500);&quot;`,
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  },
);

setTimeout(() =&gt; {
  subprocess.kill(); // Does not terminate the Node.js process in the shell.
}, 2000);
</code></pre>
<h3><code>subprocess[Symbol.dispose]()</code></h3>
<p>Calls <a href="#subprocesskillsignal"><code>subprocess.kill()</code></a> with <code>'SIGTERM'</code>.</p>
<h3><code>subprocess.killed</code></h3>
<ul>
<li>Type: {boolean} Set to <code>true</code> after <code>subprocess.kill()</code> is used to successfully
send a signal to the child process.</li>
</ul>
<p>The <code>subprocess.killed</code> property indicates whether the child process
successfully received a signal from <code>subprocess.kill()</code>. The <code>killed</code> property
does not indicate that the child process has been terminated.</p>
<h3><code>subprocess.pid</code></h3>
<ul>
<li>Type: {integer|undefined}</li>
</ul>
<p>Returns the process identifier (PID) of the child process. If the child process
fails to spawn due to errors, then the value is <code>undefined</code> and <code>error</code> is
emitted.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end();
</code></pre>
<h3><code>subprocess.ref()</code></h3>
<p>Calling <code>subprocess.ref()</code> after making a call to <code>subprocess.unref()</code> will
restore the removed reference count for the child process, forcing the parent
process to wait for the child process to exit before exiting itself.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
subprocess.ref();
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import process from 'node:process';

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
subprocess.ref();
</code></pre>
<h3><code>subprocess.send(message[, sendHandle[, options]][, callback])</code></h3>
<ul>
<li><code>message</code> {Object}</li>
<li><code>sendHandle</code> {Handle|undefined} <code>undefined</code>, or a <a href="net.md#class-netsocket"><code>net.Socket</code></a>,
<a href="net.md#class-netserver"><code>net.Server</code></a>, <a href="net.md#class-netboundsocket"><code>net.BoundSocket</code></a>, or <a href="dgram.md#class-dgramsocket"><code>dgram.Socket</code></a> object.</li>
<li><code>options</code> {Object} The <code>options</code> argument, if present, is an object used to
parameterize the sending of certain types of handles. <code>options</code> supports
the following properties:
<ul>
<li><code>keepOpen</code> {boolean} A value that can be used when passing instances of
<code>net.Socket</code>. When <code>true</code>, the socket is kept open in the sending process.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>When an IPC channel has been established between the parent and child processes
( i.e. when using <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>), the <code>subprocess.send()</code> method
can be used to send messages to the child process. When the child process is a
Node.js instance, these messages can be received via the <a href="process.md#event-message"><code>'message'</code></a> event.</p>
<p>The message goes through serialization and parsing. The resulting
message might not be the same as what is originally sent.</p>
<p>For example, in the parent script:</p>
<pre><code class="language-cjs">const { fork } = require('node:child_process');
const forkedProcess = fork(`${__dirname}/sub.js`);

forkedProcess.on('message', (message) =&gt; {
  console.log('PARENT got message:', message);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
forkedProcess.send({ hello: 'world' });
</code></pre>
<pre><code class="language-mjs">import { fork } from 'node:child_process';
const forkedProcess = fork(`${import.meta.dirname}/sub.js`);

forkedProcess.on('message', (message) =&gt; {
  console.log('PARENT got message:', message);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
forkedProcess.send({ hello: 'world' });
</code></pre>
<p>And then the child script, <code>'sub.js'</code> might look like this:</p>
<pre><code class="language-js">process.on('message', (message) =&gt; {
  console.log('CHILD got message:', message);
});

// Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });
</code></pre>
<p>Child Node.js processes will have a <a href="process.md#processsendmessage-sendhandle-options-callback"><code>process.send()</code></a> method of their own
that allows the child process to send messages back to the parent process.</p>
<p>There is a special case when sending a <code>{cmd: 'NODE_foo'}</code> message. Messages
containing a <code>NODE_</code> prefix in the <code>cmd</code> property are reserved for use within
Node.js core and will not be emitted in the child's <a href="process.md#event-message"><code>'message'</code></a>
event. Rather, such messages are emitted using the
<code>'internalMessage'</code> event and are consumed internally by Node.js.
Applications should avoid using such messages or listening for
<code>'internalMessage'</code> events as it is subject to change without notice.</p>
<p>The optional <code>sendHandle</code> argument that may be passed to <code>subprocess.send()</code> is
for passing a TCP server, socket or <a href="net.md#class-netboundsocket"><code>net.BoundSocket</code></a> object to the child
process. The child process will
receive the object as the second argument passed to the callback function
registered on the <a href="process.md#event-message"><code>'message'</code></a> event. Any data that is received
and buffered in the socket will not be sent to the child. Sending IPC sockets is
not supported on Windows.</p>
<p>Sending a <code>net.BoundSocket</code> moves its underlying TCP handle to the child
process, leaving the source instance in the adopted state as if it had been
adopted by a server or socket. The bound socket must not have been adopted or
closed, and pipe (<code>path</code>) binds cannot be sent.</p>
<p>The optional <code>callback</code> is a function that is invoked after the message is
sent but before the child process may have received it. The function is called with a
single argument: <code>null</code> on success, or an <a href="errors.md#class-error"><code>Error</code></a> object on failure.</p>
<p>If no <code>callback</code> function is provided and the message cannot be sent, an
<code>'error'</code> event will be emitted by the <a href="#class-childprocess"><code>ChildProcess</code></a> object. This can
happen, for instance, when the child process has already exited.</p>
<p><code>subprocess.send()</code> will return <code>false</code> if the channel has closed or when the
backlog of unsent messages exceeds a threshold that makes it unwise to send
more. Otherwise, the method returns <code>true</code>. The <code>callback</code> function can be
used to implement flow control.</p>
<h4>Example: sending a server object</h4>
<p>The <code>sendHandle</code> argument can be used, for instance, to pass the handle of
a TCP server object to the child process as illustrated in the example below:</p>
<pre><code class="language-cjs">const { fork } = require('node:child_process');
const { createServer } = require('node:net');

const subprocess = fork('subprocess.js');

// Open up the server object and send the handle.
const server = createServer();
server.on('connection', (socket) =&gt; {
  socket.end('handled by parent');
});
server.listen(1337, () =&gt; {
  subprocess.send('server', server);
});
</code></pre>
<pre><code class="language-mjs">import { fork } from 'node:child_process';
import { createServer } from 'node:net';

const subprocess = fork('subprocess.js');

// Open up the server object and send the handle.
const server = createServer();
server.on('connection', (socket) =&gt; {
  socket.end('handled by parent');
});
server.listen(1337, () =&gt; {
  subprocess.send('server', server);
});
</code></pre>
<p>The child process would then receive the server object as:</p>
<pre><code class="language-js">process.on('message', (m, server) =&gt; {
  if (m === 'server') {
    server.on('connection', (socket) =&gt; {
      socket.end('handled by child');
    });
  }
});
</code></pre>
<p>Once the server is now shared between the parent and child, some connections
can be handled by the parent and some by the child.</p>
<p>While the example above uses a server created using the <code>node:net</code> module,
<code>node:dgram</code> module servers use exactly the same workflow with the exceptions of
listening on a <code>'message'</code> event instead of <code>'connection'</code> and using
<code>server.bind()</code> instead of <code>server.listen()</code>. This is, however, only
supported on Unix platforms.</p>
<h4>Example: sending a socket object</h4>
<p>Similarly, the <code>sendHandler</code> argument can be used to pass the handle of a
socket to the child process. The example below spawns two children that each
handle connections with &quot;normal&quot; or &quot;special&quot; priority:</p>
<pre><code class="language-cjs">const { fork } = require('node:child_process');
const { createServer } = require('node:net');

const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = createServer({ pauseOnConnect: true });
server.on('connection', (socket) =&gt; {

  // If this is special priority...
  if (socket.remoteAddress === '74.125.127.100') {
    special.send('socket', socket);
    return;
  }
  // This is normal priority.
  normal.send('socket', socket);
});
server.listen(1337);
</code></pre>
<pre><code class="language-mjs">import { fork } from 'node:child_process';
import { createServer } from 'node:net';

const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// Open up the server and send sockets to child. Use pauseOnConnect to prevent
// the sockets from being read before they are sent to the child process.
const server = createServer({ pauseOnConnect: true });
server.on('connection', (socket) =&gt; {

  // If this is special priority...
  if (socket.remoteAddress === '74.125.127.100') {
    special.send('socket', socket);
    return;
  }
  // This is normal priority.
  normal.send('socket', socket);
});
server.listen(1337);
</code></pre>
<p>The <code>subprocess.js</code> would receive the socket handle as the second argument
passed to the event callback function:</p>
<pre><code class="language-js">process.on('message', (m, socket) =&gt; {
  if (m === 'socket') {
    if (socket) {
      // Check that the client socket exists.
      // It is possible for the socket to be closed between the time it is
      // sent and the time it is received in the child process.
      socket.end(`Request handled with ${process.argv[2]} priority`);
    }
  }
});
</code></pre>
<p>Do not use <code>.maxConnections</code> on a socket that has been passed to a subprocess.
The parent cannot track when the socket is destroyed.</p>
<p>Any <code>'message'</code> handlers in the subprocess should verify that <code>socket</code> exists,
as the connection may have been closed during the time it takes to send the
connection to the child.</p>
<h3><code>subprocess.signalCode</code></h3>
<ul>
<li>Type: {string|null}</li>
</ul>
<p>The <code>subprocess.signalCode</code> property indicates the signal received by
the child process if any, else <code>null</code>.</p>
<p>When the child process is terminated by a signal, <a href="#subprocessexitcode"><code>subprocess.exitCode</code></a> will be <code>null</code>.
To get the corresponding POSIX exit code, use
<a href="util.md#utilconvertprocesssignaltoexitcodesignal"><code>util.convertProcessSignalToExitCode(subprocess.signalCode)</code></a>.</p>
<h3><code>subprocess.spawnargs</code></h3>
<ul>
<li>Type: {Array}</li>
</ul>
<p>The <code>subprocess.spawnargs</code> property represents the full list of command-line
arguments the child process was launched with.</p>
<h3><code>subprocess.spawnfile</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>subprocess.spawnfile</code> property indicates the executable file name of
the child process that is launched.</p>
<p>For <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>, its value will be equal to
<a href="process.md#processexecpath"><code>process.execPath</code></a>.
For <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>, its value will be the name of
the executable file.
For <a href="#child_processexeccommand-options-callback"><code>child_process.exec()</code></a>,  its value will be the name of the shell
in which the child process is launched.</p>
<h3><code>subprocess.stderr</code></h3>
<ul>
<li>Type: {stream.Readable|null|undefined}</li>
</ul>
<p>A <code>Readable Stream</code> that represents the child process's <code>stderr</code>.</p>
<p>If the child process was spawned with <code>stdio[2]</code> set to anything other than <code>'pipe'</code>,
then this will be <code>null</code>.</p>
<p><code>subprocess.stderr</code> is an alias for <code>subprocess.stdio[2]</code>. Both properties will
refer to the same value.</p>
<p>The <code>subprocess.stderr</code> property can be <code>null</code> or <code>undefined</code>
if the child process could not be successfully spawned.</p>
<h3><code>subprocess.stdin</code></h3>
<ul>
<li>Type: {stream.Writable|null|undefined}</li>
</ul>
<p>A <code>Writable Stream</code> that represents the child process's <code>stdin</code>.</p>
<p>If a child process waits to read all of its input, the child process will not continue
until this stream has been closed via <code>end()</code>.</p>
<p>If the child process was spawned with <code>stdio[0]</code> set to anything other than <code>'pipe'</code>,
then this will be <code>null</code>.</p>
<p><code>subprocess.stdin</code> is an alias for <code>subprocess.stdio[0]</code>. Both properties will
refer to the same value.</p>
<p>The <code>subprocess.stdin</code> property can be <code>null</code> or <code>undefined</code>
if the child process could not be successfully spawned.</p>
<h3><code>subprocess.stdio</code></h3>
<ul>
<li>Type: {Array}</li>
</ul>
<p>A sparse array of pipes to the child process, corresponding with positions in
the <a href="#optionsstdio"><code>stdio</code></a> option passed to <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> that have been set
to the value <code>'pipe'</code>. <code>subprocess.stdio[0]</code>, <code>subprocess.stdio[1]</code>, and
<code>subprocess.stdio[2]</code> are also available as <code>subprocess.stdin</code>,
<code>subprocess.stdout</code>, and <code>subprocess.stderr</code>, respectively.</p>
<p>In the following example, only the child's fd <code>1</code> (stdout) is configured as a
pipe, so only the parent's <code>subprocess.stdio[1]</code> is a stream, all other values
in the array are <code>null</code>.</p>
<pre><code class="language-cjs">const assert = require('node:assert');
const fs = require('node:fs');
const child_process = require('node:child_process');

const subprocess = child_process.spawn('ls', {
  stdio: [
    0, // Use parent's stdin for child.
    'pipe', // Pipe child's stdout to parent.
    fs.openSync('err.out', 'w'), // Direct child's stderr to a file.
  ],
});

assert.strictEqual(subprocess.stdio[0], null);
assert.strictEqual(subprocess.stdio[0], subprocess.stdin);

assert(subprocess.stdout);
assert.strictEqual(subprocess.stdio[1], subprocess.stdout);

assert.strictEqual(subprocess.stdio[2], null);
assert.strictEqual(subprocess.stdio[2], subprocess.stderr);
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert';
import fs from 'node:fs';
import child_process from 'node:child_process';

const subprocess = child_process.spawn('ls', {
  stdio: [
    0, // Use parent's stdin for child.
    'pipe', // Pipe child's stdout to parent.
    fs.openSync('err.out', 'w'), // Direct child's stderr to a file.
  ],
});

assert.strictEqual(subprocess.stdio[0], null);
assert.strictEqual(subprocess.stdio[0], subprocess.stdin);

assert(subprocess.stdout);
assert.strictEqual(subprocess.stdio[1], subprocess.stdout);

assert.strictEqual(subprocess.stdio[2], null);
assert.strictEqual(subprocess.stdio[2], subprocess.stderr);
</code></pre>
<p>The <code>subprocess.stdio</code> property can be <code>undefined</code> if the child process could
not be successfully spawned.</p>
<h3><code>subprocess.stdout</code></h3>
<ul>
<li>Type: {stream.Readable|null|undefined}</li>
</ul>
<p>A <code>Readable Stream</code> that represents the child process's <code>stdout</code>.</p>
<p>If the child process was spawned with <code>stdio[1]</code> set to anything other than <code>'pipe'</code>,
then this will be <code>null</code>.</p>
<p><code>subprocess.stdout</code> is an alias for <code>subprocess.stdio[1]</code>. Both properties will
refer to the same value.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) =&gt; {
  console.log(`Received chunk ${data}`);
});
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';

const subprocess = spawn('ls');

subprocess.stdout.on('data', (data) =&gt; {
  console.log(`Received chunk ${data}`);
});
</code></pre>
<p>The <code>subprocess.stdout</code> property can be <code>null</code> or <code>undefined</code>
if the child process could not be successfully spawned.</p>
<h3><code>subprocess.unref()</code></h3>
<p>By default, the parent process will wait for the detached child process to exit.
To prevent the parent process from waiting for a given <code>subprocess</code> to exit, use the
<code>subprocess.unref()</code> method. Doing so will cause the parent's event loop to not
include the child process in its reference count, allowing the parent to exit
independently of the child, unless there is an established IPC channel between
the child and the parent processes.</p>
<pre><code class="language-cjs">const { spawn } = require('node:child_process');

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
</code></pre>
<pre><code class="language-mjs">import { spawn } from 'node:child_process';
import process from 'node:process';

const subprocess = spawn(process.argv[0], ['child_program.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref();
</code></pre>
<h2><code>maxBuffer</code> and Unicode</h2>
<p>The <code>maxBuffer</code> option specifies the largest number of bytes allowed on <code>stdout</code>
or <code>stderr</code>. If this value is exceeded, then the child process is terminated.
This impacts output that includes multibyte character encodings such as UTF-8 or
UTF-16. For instance, <code>console.log('中文测试')</code> will send 13 UTF-8 encoded bytes
to <code>stdout</code> although there are only 4 characters.</p>
<h2>Shell requirements</h2>
<p>The shell should understand the <code>-c</code> switch. If the shell is <code>'cmd.exe'</code>, it
should understand the <code>/d /s /c</code> switches and command-line parsing should be
compatible.</p>
<h2>Default Windows shell</h2>
<p>Although Microsoft specifies <code>%COMSPEC%</code> must contain the path to
<code>'cmd.exe'</code> in the root environment, child processes are not always subject to
the same requirement. Thus, in <code>child_process</code> functions where a shell can be
spawned, <code>'cmd.exe'</code> is used as a fallback if <code>process.env.ComSpec</code> is
unavailable.</p>
<h2>Advanced serialization</h2>
<p>Child processes support a serialization mechanism for IPC that is based on the
<a href="v8.md#serialization-api">serialization API of the <code>node:v8</code> module</a>, based on the
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>. This is generally more powerful and
supports more built-in JavaScript object types, such as <code>BigInt</code>, <code>Map</code>
and <code>Set</code>, <code>ArrayBuffer</code> and <code>TypedArray</code>, <code>Buffer</code>, <code>Error</code>, <code>RegExp</code> etc.</p>
<p>However, this format is not a full superset of JSON, and e.g. properties set on
objects of such built-in types will not be passed on through the serialization
step. Additionally, performance may not be equivalent to that of JSON, depending
on the structure of the passed data.
Therefore, this feature requires opting in by setting the
<code>serialization</code> option to <code>'advanced'</code> when calling <a href="#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>
or <a href="#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>.</p>
