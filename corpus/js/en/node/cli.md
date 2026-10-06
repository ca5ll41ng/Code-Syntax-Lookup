---
id: "js-en-function-node-cli"
language: "js"
lang: "en"
category: "function"
name: "node:cli"
title: "Command-line API"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/cli.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Command-line API

<h1>Command-line API</h1>
<p>Node.js comes with a variety of CLI options. These options expose built-in
debugging, multiple ways to execute scripts, and other helpful runtime options.</p>
<p>To view this documentation as a manual page in a terminal, run <code>man node</code>.</p>
<h2>Synopsis</h2>
<p><code>node [options] [V8 options] [&lt;program-entry-point&gt; | -e &quot;script&quot; | -] [--] [arguments]</code></p>
<p><code>node inspect [&lt;program-entry-point&gt; | -e &quot;script&quot; | &lt;host&gt;:&lt;port&gt;] …</code></p>
<p><code>node --v8-options</code></p>
<p>Execute without arguments to start the <a href="repl.md">REPL</a>.</p>
<p>For more info about <code>node inspect</code>, see the <a href="debugger.md">debugger</a> documentation.</p>
<h2>Program entry point</h2>
<p>The program entry point is a specifier-like string. If the string is not an
absolute path, it's resolved as a relative path from the current working
directory. That entry point string is then resolved as if it's been requested
by <code>require()</code> from the current working directory. If no corresponding file
is found, an error is thrown.</p>
<p>By default, the resolved path is also loaded as if it's been requested by <code>require()</code>,
unless one of the conditions below apply—then it's loaded as if it's been requested
by <code>import()</code>:</p>
<ul>
<li>The program was started with a command-line flag that forces the entry
point to be loaded with ECMAScript module loader, such as <code>--import</code>.</li>
<li>The file has an <code>.mjs</code>, <code>.mts</code> or <code>.wasm</code> extension.</li>
<li>The file does not have a <code>.cjs</code> extension, and the nearest parent
<code>package.json</code> file contains a top-level <a href="packages.md#type"><code>&quot;type&quot;</code></a> field with a value of
<code>&quot;module&quot;</code>.</li>
</ul>
<p>See <a href="packages.md#module-resolution-and-loading">module resolution and loading</a> for more details.</p>
<h2>Options</h2>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>All options, including V8 options, allow words to be separated by both
dashes (<code>-</code>) or underscores (<code>_</code>). For example, <code>--pending-deprecation</code> is
equivalent to <code>--pending_deprecation</code>.</p>
<p>If an option that takes a single value (such as <code>--max-http-header-size</code>) is
passed more than once, then the last passed value is used. Options from the
command line take precedence over options passed through the <a href="#node_optionsoptions"><code>NODE_OPTIONS</code></a>
environment variable.</p>
<h3><code>-</code></h3>
<p>Alias for stdin. Analogous to the use of <code>-</code> in other command-line utilities,
meaning that the script is read from stdin, and the rest of the options
are passed to that script.</p>
<h3><code>--</code></h3>
<p>Indicate the end of node options. Pass the rest of the arguments to the script.
If no script filename or eval/print script is supplied prior to this, then
the next argument is used as a script filename.</p>
<h3><code>--abort-on-uncaught-exception</code></h3>
<p>Aborting instead of exiting causes a core file to be generated for post-mortem
analysis using a debugger (such as <code>lldb</code>, <code>gdb</code>, and <code>mdb</code>).</p>
<p>If this flag is passed, the behavior can still be set to not abort through
<a href="process.md#processsetuncaughtexceptioncapturecallbackfn"><code>process.setUncaughtExceptionCaptureCallback()</code></a> (and through usage of the
<code>node:domain</code> module that uses it).</p>
<h3><code>--allow-addons</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to use
native addons by default.
Attempts to do so will throw an <code>ERR_DLOPEN_DISABLED</code> unless the
user explicitly passes the <code>--allow-addons</code> flag when starting Node.js.</p>
<p>Example:</p>
<pre><code class="language-cjs">// Attempt to require an native addon
require('nodejs-addon-example');
</code></pre>
<pre><code class="language-console">$ node --permission --allow-fs-read=* index.js
node:internal/modules/cjs/loader:1319
  return process.dlopen(module, path.toNamespacedPath(filename));
                 ^

Error: Cannot load native addon because loading addons is disabled.
    at Module._extensions..node (node:internal/modules/cjs/loader:1319:18)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Module.require (node:internal/modules/cjs/loader:1115:19)
    at require (node:internal/modules/helpers:130:18)
    at Object.&lt;anonymous&gt; (/home/index.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1233:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12) {
  code: 'ERR_DLOPEN_DISABLED'
}
</code></pre>
<h3><code>--allow-child-process</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to spawn any
child process by default.
Attempts to do so will throw an <code>ERR_ACCESS_DENIED</code> unless the
user explicitly passes the <code>--allow-child-process</code> flag when starting Node.js.</p>
<p>Example:</p>
<pre><code class="language-js">const childProcess = require('node:child_process');
// Attempt to bypass the permission
childProcess.spawn('node', ['-e', 'require(&quot;fs&quot;).writeFileSync(&quot;/new-file&quot;, &quot;example&quot;)']);
</code></pre>
<pre><code class="language-console">$ node --permission --allow-fs-read=* index.js
node:internal/child_process:388
  const err = this._handle.spawn(options);
                           ^
Error: Access to this API has been restricted
    at ChildProcess.spawn (node:internal/child_process:388:28)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'ChildProcess'
}
</code></pre>
<p>The <code>child_process.fork()</code> API inherits the execution arguments from the
parent process. This means that if Node.js is started with the Permission
Model enabled and the <code>--allow-child-process</code> flag is set, any child process
created using <code>child_process.fork()</code> will automatically receive all relevant
Permission Model flags.</p>
<p>This behavior also applies to <code>child_process.spawn()</code>, but in that case, the
flags are propagated via the <code>NODE_OPTIONS</code> environment variable rather than
directly through the process arguments.</p>
<h3><code>--allow-env</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process starts without the environment
variables it has not been granted access to. At startup, every variable that
<code>--allow-env</code> does not match is removed from the process environment. Removed
variables are absent from <code>process.env</code>, from diagnostic reports, from native
code calling <code>getenv()</code>, and from the environment of child processes and worker
threads.</p>
<p>The valid values are:</p>
<ul>
<li><code>*</code> - Grants access to every environment variable.</li>
<li>A variable name, for example <code>--allow-env=DATABASE_URL</code>.</li>
<li>A variable name prefix followed by <code>*</code>, for example <code>--allow-env=APP_*</code>.</li>
</ul>
<p>Multiple values can be passed by repeating the flag, or by separating them with
commas: <code>--allow-env=PORT,APP_*</code>. Variable names are case-insensitive on
Windows.</p>
<p>Example:</p>
<pre><code class="language-js">console.log(process.env.DATABASE_URL);
console.log(process.env.AWS_SECRET_ACCESS_KEY);
</code></pre>
<pre><code class="language-console">$ node --permission --allow-fs-read=* --allow-env=DATABASE_URL index.js
postgres://localhost/app
undefined
(node:1234) Warning: The permission model removed the environment variable &quot;AWS_SECRET_ACCESS_KEY&quot; at startup. Use --allow-env to manage permissions.
</code></pre>
<p>The variables that Node.js and its bundled dependencies read, such as
<code>NODE_OPTIONS</code>, <code>PATH</code>, <code>HOME</code>, <code>TZ</code>, and <code>SSL_CERT_FILE</code>, are always kept, as
are the variables defined in <a href="#--env-filefile"><code>--env-file</code></a> files. <code>NODE_ENV</code> is not kept
by default, so applications and libraries that read it need
<code>--allow-env=NODE_ENV</code>. See <a href="permissions.md#environment-variable-permissions">Environment variable permissions</a> for details.</p>
<h3><code>--allow-ffi</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to use FFI
APIs by default. Attempts to use FFI APIs will throw an <code>ERR_ACCESS_DENIED</code>
exception unless the user explicitly passes the <code>--allow-ffi</code> flag when
starting Node.js. The <a href="ffi.md"><code>node:ffi</code></a> module is only available in builds with
FFI support.</p>
<p>Example:</p>
<pre><code class="language-js">const { DynamicLibrary, suffix } = require('node:ffi');
const lib = new DynamicLibrary(`./mylib.${suffix}`);
</code></pre>
<pre><code class="language-console">$ node --permission index.js
Error: Access to this API has been restricted. Use --allow-ffi to manage permissions.
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'FFI'
}
</code></pre>
<h3><code>--allow-fs-read</code></h3>
<p>This flag configures file system read permissions using
the <a href="permissions.md#permission-model">Permission Model</a>.</p>
<p>The valid arguments for the <code>--allow-fs-read</code> flag are:</p>
<ul>
<li><code>*</code> - To allow all <code>FileSystemRead</code> operations.</li>
<li>Multiple paths can be allowed using multiple <code>--allow-fs-read</code> flags.
Example <code>--allow-fs-read=/folder1/ --allow-fs-read=/folder2/</code></li>
</ul>
<p>Examples can be found in the <a href="permissions.md#file-system-permissions">File System Permissions</a> documentation.</p>
<p>The initializer module and custom <code>--require</code> modules has a implicit
read permission.</p>
<pre><code class="language-console">$ node --permission -r custom-require.js -r custom-require-2.js index.js
</code></pre>
<ul>
<li>The <code>custom-require.js</code>, <code>custom-require-2.js</code>, and <code>index.js</code> will be
by default in the allowed read list.</li>
</ul>
<pre><code class="language-js">process.permission.has('fs.read', 'index.js'); // true
process.permission.has('fs.read', 'custom-require.js'); // true
process.permission.has('fs.read', 'custom-require-2.js'); // true
</code></pre>
<h3><code>--allow-fs-vfs</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, a <a href="vfs.md">virtual file system</a> cannot be
mounted by default: <a href="vfs.md#vfsmount"><code>vfs.mount()</code></a> throws <code>ERR_INVALID_STATE</code> unless the
user explicitly passes the <code>--allow-fs-vfs</code> flag when starting Node.js.</p>
<p>A mounted VFS serves paths that the file system permissions do not describe,
so mounting one is gated on its own flag rather than on <code>--allow-fs-read</code> or
<code>--allow-fs-write</code>.</p>
<pre><code class="language-console">$ node --experimental-vfs --permission --allow-fs-vfs app.js
</code></pre>
<h3><code>--allow-fs-write</code></h3>
<p>This flag configures file system write permissions using
the <a href="permissions.md#permission-model">Permission Model</a>.</p>
<p>The valid arguments for the <code>--allow-fs-write</code> flag are:</p>
<ul>
<li><code>*</code> - To allow all <code>FileSystemWrite</code> operations.</li>
<li>Multiple paths can be allowed using multiple <code>--allow-fs-write</code> flags.
Example <code>--allow-fs-write=/folder1/ --allow-fs-write=/folder2/</code></li>
</ul>
<p>Paths delimited by comma (<code>,</code>) are no longer allowed.
When passing a single flag with a comma a warning will be displayed.</p>
<p>Examples can be found in the <a href="permissions.md#file-system-permissions">File System Permissions</a> documentation.</p>
<h3><code>--allow-inspector</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to connect
through inspector protocol.</p>
<p>Attempts to do so will throw an <code>ERR_ACCESS_DENIED</code> unless the
user explicitly passes the <code>--allow-inspector</code> flag when starting Node.js.</p>
<p>Example:</p>
<pre><code class="language-js">const { Session } = require('node:inspector/promises');

const session = new Session();
session.connect();
</code></pre>
<pre><code class="language-console">$ node --permission index.js
Error: connect ERR_ACCESS_DENIED Access to this API has been restricted. Use --allow-inspector to manage permissions.
  code: 'ERR_ACCESS_DENIED',
}
</code></pre>
<h3><code>--allow-net</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to access
network by default.
Attempts to do so will throw an <code>ERR_ACCESS_DENIED</code> unless the
user explicitly passes the <code>--allow-net</code> flag when starting Node.js.</p>
<p>Example:</p>
<pre><code class="language-js">const http = require('node:http');
// Attempt to bypass the permission
const req = http.get('http://example.com', () =&gt; {});

req.on('error', (err) =&gt; {
  console.log('err', err);
});
</code></pre>
<pre><code class="language-console">$ node --permission index.js
Error: connect ERR_ACCESS_DENIED Access to this API has been restricted. Use --allow-net to manage permissions.
  code: 'ERR_ACCESS_DENIED',
}
</code></pre>
<h3><code>--allow-openssl-store</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to use
OpenSSL STORE loaders by default, for example to load a private key from a
{URL} passed to <a href="crypto.md#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>. Attempts to do so will throw
an <code>ERR_ACCESS_DENIED</code> unless the user explicitly passes the
<code>--allow-openssl-store</code> flag. This permission can be dropped at runtime via
<a href="permissions.md#permissiondropscope-reference"><code>permission.drop()</code></a>.</p>
<p>This flag grants broad authority to configured OpenSSL STORE loaders. A loader
may access files, devices, tokens, or the network. Access performed by a loader
is not constrained by the <code>fs.read</code>, <code>fs.write</code>, or <code>net</code> permission scopes.</p>
<p>Loaders and the modules they load are subject to <a href="#--allow-env"><code>--allow-env</code></a>, however.
Environment variables they rely on, such as <code>SOFTHSM2_CONF</code> for SoftHSM, are
removed at startup unless they are granted explicitly with <code>--allow-env</code>. See
<a href="permissions.md#environment-variable-permissions">Environment variable permissions</a> for details.</p>
<h3><code>--allow-wasi</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be capable of creating
any WASI instances by default.
For security reasons, the call will throw an <code>ERR_ACCESS_DENIED</code> unless the
user explicitly passes the flag <code>--allow-wasi</code> in the main Node.js process.</p>
<p>Example:</p>
<pre><code class="language-js">const { WASI } = require('node:wasi');
// Attempt to bypass the permission
new WASI({
  version: 'preview1',
  // Attempt to mount the whole filesystem
  preopens: {
    '/': '/',
  },
});
</code></pre>
<pre><code class="language-console">$ node --permission --allow-fs-read=* index.js

Error: Access to this API has been restricted
    at node:internal/main/run_main_module:30:49 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'WASI',
}
</code></pre>
<h3><code>--allow-worker</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>When using the <a href="permissions.md#permission-model">Permission Model</a>, the process will not be able to create any
worker threads by default.
For security reasons, the call will throw an <code>ERR_ACCESS_DENIED</code> unless the
user explicitly pass the flag <code>--allow-worker</code> in the main Node.js process.</p>
<p>Example:</p>
<pre><code class="language-js">const { Worker } = require('node:worker_threads');
// Attempt to bypass the permission
new Worker(__filename);
</code></pre>
<pre><code class="language-console">$ node --permission --allow-fs-read=* index.js

Error: Access to this API has been restricted
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'WorkerThreads'
}
</code></pre>
<h3><code>--bench</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Starts the Node.js command-line benchmark runner. At least one explicit file or
glob pattern is required:</p>
<pre><code class="language-console">node --experimental-bench --bench benchmark.mjs
node --experimental-bench --bench 'benchmarks/**/*.js'
</code></pre>
<p>The <code>--experimental-bench</code> flag is required to use this flag or any other
<code>--bench-*</code> option.</p>
<p>Quote glob patterns to prevent expansion by the shell. Matching files are
sorted and executed serially. By default, each file runs in a separate child
process. Benchmark files declare benchmarks using <code>node:bench</code>; they must not
call <code>run()</code> themselves. See the <a href="bench.md#command-line-runner">benchmark runner</a> documentation for more
details.</p>
<p>This flag cannot be combined with <code>--test</code>, <code>--watch</code>, <code>--watch-path</code>,
<code>--check</code>, <code>--eval</code>, or <code>--interactive</code>.</p>
<h3><code>--bench-isolation=mode</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Configures benchmark file isolation. When <code>mode</code> is <code>'process'</code>, each matching
file runs in a separate child process. This is the default. Files are still run
serially so their measured work does not overlap.</p>
<p>When <code>mode</code> is <code>'none'</code>, all matching files and benchmarks run serially in the
benchmark runner process. This reduces startup overhead but allows module,
heap, and process state to carry between files. User writes to stdout or stderr
also share destinations with benchmark reporters in this mode.</p>
<p>The supported modes are <code>'process'</code> and <code>'none'</code>.</p>
<h3><code>--bench-name-pattern=pattern</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Only runs benchmarks whose full hierarchical name matches the JavaScript
regular expression <code>pattern</code>. Non-matching benchmarks are reported as skipped.</p>
<h3><code>--bench-reporter-destination=destination</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Specifies the destination for the corresponding benchmark reporter. The value
can be <code>stdout</code>, <code>stderr</code>, or a file path. A single reporter defaults to
<code>stdout</code> when no destination is specified.</p>
<h3><code>--bench-reporter=reporter</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Specifies a benchmark reporter. The built-in reporters are <code>spec</code> and <code>json</code>.
The <code>json</code> reporter emits newline-delimited JSON. A custom reporter can be
specified using a module specifier resolved from the current working directory.</p>
<p>This option can be repeated. When multiple reporters are specified, each must
have a corresponding <code>--bench-reporter-destination</code>. The default reporter is
<code>spec</code>.</p>
<h3><code>--bench-samples=count</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Overrides the maximum number of measured callback invocations for every
selected benchmark. A benchmark may finish earlier by calling
<code>context.done()</code>. <code>count</code> must be an integer between <code>1</code> and <code>4294967295</code>.</p>
<h3><code>--bench-warmup=count</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Overrides the number of unreported warmup callback invocations for every
selected benchmark. <code>count</code> must be an integer between <code>0</code> and <code>4294967295</code>.</p>
<h3><code>--build-sea=config</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Generates a <a href="single-executable-applications.md">single executable application</a> from a JSON
configuration file. The argument must be a path to the configuration file. If
the path is not absolute, it is resolved relative to the current working
directory.</p>
<p>For configuration fields, cross-platform notes, and asset APIs, see
the <a href="single-executable-applications.md">single executable application</a> documentation.</p>
<h3><code>--build-snapshot</code></h3>
<p>Generates a snapshot blob when the process exits and writes it to
disk, which can be loaded later with <code>--snapshot-blob</code>.</p>
<p>When building the snapshot, if <code>--snapshot-blob</code> is not specified,
the generated blob will be written, by default, to <code>snapshot.blob</code>
in the current working directory. Otherwise it will be written to
the path specified by <code>--snapshot-blob</code>.</p>
<pre><code class="language-console">$ echo &quot;globalThis.foo = 'I am from the snapshot'&quot; &gt; snapshot.js

# Run snapshot.js to initialize the application and snapshot the
# state of it into snapshot.blob.
$ node --snapshot-blob snapshot.blob --build-snapshot snapshot.js

$ echo &quot;console.log(globalThis.foo)&quot; &gt; index.js

# Load the generated snapshot and start the application from index.js.
$ node --snapshot-blob snapshot.blob index.js
I am from the snapshot
</code></pre>
<p>The <a href="v8.md#startup-snapshot-api"><code>v8.startupSnapshot</code> API</a> can be used to specify an entry point at
snapshot building time, thus avoiding the need of an additional entry
script at deserialization time:</p>
<pre><code class="language-console">$ echo &quot;require('v8').startupSnapshot.setDeserializeMainFunction(() =&gt; console.log('I am from the snapshot'))&quot; &gt; snapshot.js
$ node --snapshot-blob snapshot.blob --build-snapshot snapshot.js
$ node --snapshot-blob snapshot.blob
I am from the snapshot
</code></pre>
<p>For more information, check out the <a href="v8.md#startup-snapshot-api"><code>v8.startupSnapshot</code> API</a> documentation.</p>
<p>The snapshot currently only supports loading a single entrypoint during the
snapshot building process, which can load built-in modules, but not additional user-land modules.
Users can bundle their applications into a single script with their bundler
of choice before building a snapshot.</p>
<p>As it's complicated to ensure the serializablility of all built-in modules,
which are also growing over time, only a subset of the built-in modules are
well tested to be serializable during the snapshot building process.
The Node.js core test suite checks that a few fairly complex applications
can be snapshotted. The list of built-in modules being
<a href="https://github.com/nodejs/node/blob/b19525a33cc84033af4addd0f80acd4dc33ce0cf/test/parallel/test-bootstrap-modules.js#L24">captured by the built-in snapshot of Node.js</a> is considered supported.
When the snapshot builder encounters a built-in module that cannot be
serialized, it may crash the snapshot building process. In that case a typical
workaround would be to delay loading that module until
runtime, using either <a href="v8.md#v8startupsnapshotsetdeserializemainfunctioncallback-data"><code>v8.startupSnapshot.setDeserializeMainFunction()</code></a> or
<a href="v8.md#v8startupsnapshotadddeserializecallbackcallback-data"><code>v8.startupSnapshot.addDeserializeCallback()</code></a>. If serialization for
an additional module during the snapshot building process is needed,
please file a request in the <a href="https://github.com/nodejs/node/issues">Node.js issue tracker</a> and link to it in the
<a href="https://github.com/nodejs/node/issues/44014">tracking issue for user-land snapshots</a>.</p>
<h3><code>--build-snapshot-config</code></h3>
<p>Specifies the path to a JSON configuration file which configures snapshot
creation behavior.</p>
<p>The following options are currently supported:</p>
<ul>
<li><code>builder</code> {string} Required. Provides the name to the script that is executed
before building the snapshot, as if <a href="#--build-snapshot"><code>--build-snapshot</code></a> had been passed
with <code>builder</code> as the main script name.</li>
<li><code>withoutCodeCache</code> {boolean} Optional. Including the code cache reduces the
time spent on compiling functions included in the snapshot at the expense
of a bigger snapshot size and potentially breaking portability of the
snapshot.</li>
</ul>
<p>When using this flag, additional script files provided on the command line will
not be executed and instead be interpreted as regular command line arguments.</p>
<h3><code>-c</code>, <code>--check</code></h3>
<p>Syntax check the script without executing.</p>
<h3><code>--completion-bash</code></h3>
<p>Print source-able bash completion script for Node.js.</p>
<pre><code class="language-bash">node --completion-bash &gt; node_bash_completion
source node_bash_completion
</code></pre>
<h3><code>-C condition</code>, <code>--conditions=condition</code></h3>
<p>Provide custom <a href="packages.md#conditional-exports">conditional exports</a> resolution conditions.</p>
<p>Any number of custom string condition names are permitted.</p>
<p>The default Node.js conditions of <code>&quot;node&quot;</code>, <code>&quot;default&quot;</code>, <code>&quot;import&quot;</code>, and
<code>&quot;require&quot;</code> will always apply as defined.</p>
<p>For example, to run a module with &quot;development&quot; resolutions:</p>
<pre><code class="language-bash">node -C development app.js
</code></pre>
<h3><code>--config-file=path</code>, <code>--config-file</code></h3>
<p>If present, Node.js will look for a configuration file at the specified path.
If the path is not specified, Node.js will look for a <code>node.config.json</code> file
in the current working directory.
To specify a custom path, use the <code>--config-file=path</code> form.
The space-separated <code>--config-file path</code> form is not supported.
Node.js will read the configuration file and apply the settings. The
configuration file should be a JSON file with the following structure. <code>vX.Y.Z</code>
in the <code>$schema</code> must be replaced with the version of Node.js you are using or
<code>latest-vX.x</code> for the latest version of that major release line.</p>
<pre><code class="language-json">{
  &quot;$schema&quot;: &quot;https://nodejs.org/dist/vX.Y.Z/docs/node-config-schema.json&quot;,
  &quot;nodeOptions&quot;: {
    &quot;import&quot;: [
      &quot;amaro/strip&quot;
    ],
    &quot;watch-path&quot;: &quot;src&quot;,
    &quot;watch-preserve-output&quot;: true
  },
  &quot;test&quot;: {
    &quot;test-isolation&quot;: &quot;process&quot;
  },
  &quot;watch&quot;: {
    &quot;watch-preserve-output&quot;: true
  }
}
</code></pre>
<p>The configuration file supports namespace-specific options:</p>
<ul>
<li>
<p>The <code>nodeOptions</code> field contains CLI flags that are allowed in <a href="#node_optionsoptions"><code>NODE_OPTIONS</code></a>.</p>
</li>
<li>
<p>Namespace fields like <code>test</code>, <code>watch</code>, and <code>permission</code> contain configuration specific to that subsystem.</p>
</li>
</ul>
<p>The configuration file can target a specific Node.js major version with
<code>nodeVersion</code>:</p>
<pre><code class="language-json">{
  &quot;nodeVersion&quot;: 25,
  &quot;nodeOptions&quot;: {
    &quot;watch-path&quot;: &quot;src&quot;
  }
}
</code></pre>
<p>To keep multiple version-specific configurations in the same file, use the
<code>configs</code> array. Node.js will use the first entry whose <code>nodeVersion</code> matches
the current Node.js major version:</p>
<pre><code class="language-json">{
  &quot;$schema&quot;: &quot;https://nodejs.org/dist/latest-v26.x/docs/node-config-schema.json&quot;,
  &quot;configs&quot;: [
    {
      &quot;nodeVersion&quot;: 25,
      &quot;config&quot;: {
        &quot;$schema&quot;: &quot;https://nodejs.org/dist/latest-v25.x/docs/node-config-schema.json&quot;,
        &quot;nodeOptions&quot;: {
          &quot;watch-path&quot;: &quot;src&quot;
        }
      }
    }
  ]
}
</code></pre>
<p>When <code>configs</code> is used, the top level may only contain <code>$schema</code> and
<code>configs</code>. Each <code>configs</code> item must define an integer <code>nodeVersion</code> and an
object <code>config</code>. A single top-level config does not require <code>nodeVersion</code>, but
if present it must match the current Node.js major version.</p>
<p>When a namespace is present in the
configuration file, Node.js automatically enables the corresponding flag
(e.g., <code>--test</code>, <code>--watch</code>, <code>--permission</code>). This allows you to configure
subsystem-specific options without explicitly passing the flag on the command line.</p>
<p>For example:</p>
<pre><code class="language-json">{
  &quot;test&quot;: {
    &quot;test-isolation&quot;: &quot;process&quot;
  }
}
</code></pre>
<p>is equivalent to:</p>
<pre><code class="language-bash">node --test --test-isolation=process
</code></pre>
<p>To disable the automatic flag while still using namespace options, you can
explicitly set the flag to <code>false</code> within the namespace:</p>
<pre><code class="language-json">{
  &quot;test&quot;: {
    &quot;test&quot;: false,
    &quot;test-isolation&quot;: &quot;process&quot;
  }
}
</code></pre>
<p>No-op flags are not supported.
Not all V8 flags are currently supported.</p>
<p>It is possible to use the <a href="../node-config-schema.json">official JSON schema</a>
to validate the configuration file, which may vary depending on the Node.js version.
Each key in the configuration file corresponds to a flag that can be passed
as a command-line argument. The value of the key is the value that would be
passed to the flag.</p>
<p>For example, the configuration file above is equivalent to
the following command-line arguments:</p>
<pre><code class="language-bash">node --import amaro/strip --watch-path=src --watch-preserve-output --test-isolation=process
</code></pre>
<p>The priority in configuration is as follows:</p>
<ol>
<li>NODE_OPTIONS and command-line options</li>
<li>Dotenv NODE_OPTIONS</li>
<li>Configuration file</li>
</ol>
<p>Values in the configuration file will not override the values in the environment
variables, command-line options, or the <code>NODE_OPTIONS</code> env file parsed by the
<code>--env-file</code> flag.</p>
<p>Keys cannot be duplicated within the same or different namespaces.</p>
<p>The configuration parser will throw an error if the configuration file contains
unknown keys or keys that cannot be used in a namespace.</p>
<p>Node.js will not sanitize or perform validation on the user-provided configuration,
so <strong>NEVER</strong> use untrusted configuration files.</p>
<h3><code>--cpu-prof</code></h3>
<p>Starts the V8 CPU profiler on start up, and writes the CPU profile to disk
before exit.</p>
<p>If <code>--cpu-prof-dir</code> is not specified, the generated profile is placed
in the current working directory.</p>
<p>If <code>--cpu-prof-name</code> is not specified, the generated profile is
named <code>CPU.${yyyymmdd}.${hhmmss}.${pid}.${tid}.${seq}.cpuprofile</code>.</p>
<pre><code class="language-console">$ node --cpu-prof index.js
$ ls *.cpuprofile
CPU.20190409.202950.15293.0.0.cpuprofile
</code></pre>
<p>If <code>--cpu-prof-name</code> is specified, the provided value is used as a template
for the file name. The following placeholder is supported and will be
substituted at runtime:</p>
<ul>
<li><code>${pid}</code> — the current process ID</li>
</ul>
<pre><code class="language-console">$ node --cpu-prof --cpu-prof-name 'CPU.${pid}.cpuprofile' index.js
$ ls *.cpuprofile
CPU.15293.cpuprofile
</code></pre>
<h3><code>--cpu-prof-dir</code></h3>
<p>Specify the directory where the CPU profiles generated by <code>--cpu-prof</code> will
be placed.</p>
<p>The default value is controlled by the
<a href="#--diagnostic-dirdirectory"><code>--diagnostic-dir</code></a> command-line option.</p>
<h3><code>--cpu-prof-interval</code></h3>
<p>Specify the sampling interval in microseconds for the CPU profiles generated
by <code>--cpu-prof</code>. The default is 1000 microseconds.</p>
<h3><code>--cpu-prof-name</code></h3>
<p>Specify the file name of the CPU profile generated by <code>--cpu-prof</code>.</p>
<h3><code>--diagnostic-dir=directory</code></h3>
<p>Set the directory to which all diagnostic output files are written.
Defaults to current working directory.</p>
<p>Affects the default output directory of:</p>
<ul>
<li><a href="#--cpu-prof-dir"><code>--cpu-prof-dir</code></a></li>
<li><a href="#--heap-prof-dir"><code>--heap-prof-dir</code></a></li>
<li><a href="#--redirect-warningsfile"><code>--redirect-warnings</code></a></li>
</ul>
<h3><code>--disable-proto=mode</code></h3>
<p>Disable the <code>Object.prototype.__proto__</code> property. If <code>mode</code> is <code>delete</code>, the
property is removed entirely. If <code>mode</code> is <code>throw</code>, accesses to the
property throw an exception with the code <code>ERR_PROTO_ACCESS</code>.</p>
<h3><code>--disable-sigusr1</code></h3>
<p>Disable the ability of starting a debugging session by sending a
<code>SIGUSR1</code> signal to the process.</p>
<h3><code>--disable-warning=code-or-type</code></h3>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Disable specific process warnings by <code>code</code> or <code>type</code>.</p>
<p>Warnings emitted from <a href="process.md#processemitwarningwarning-options"><code>process.emitWarning()</code></a> may contain a
<code>code</code> and a <code>type</code>. This option will not-emit warnings that have a matching
<code>code</code> or <code>type</code>.</p>
<p>List of <a href="deprecations.md#list-of-deprecated-apis">deprecation warnings</a>.</p>
<p>The Node.js core warning types are: <code>DeprecationWarning</code> and
<code>ExperimentalWarning</code></p>
<p>For example, the following script will not emit
<a href="deprecations.md#dep0025-requirenodesys">DEP0025 <code>require('node:sys')</code></a> when executed with
<code>node --disable-warning=DEP0025</code>:</p>
<pre><code class="language-mjs">import sys from 'node:sys';
</code></pre>
<pre><code class="language-cjs">const sys = require('node:sys');
</code></pre>
<p>For example, the following script will emit the
<a href="deprecations.md#dep0025-requirenodesys">DEP0025 <code>require('node:sys')</code></a>, but not any Experimental
Warnings (such as
<a href="vm.md#vmmeasurememoryoptions">ExperimentalWarning: <code>vm.measureMemory</code> is an experimental feature</a>
in &lt;=v21) when executed with <code>node --disable-warning=ExperimentalWarning</code>:</p>
<pre><code class="language-mjs">import sys from 'node:sys';
import vm from 'node:vm';

vm.measureMemory();
</code></pre>
<pre><code class="language-cjs">const sys = require('node:sys');
const vm = require('node:vm');

vm.measureMemory();
</code></pre>
<h3><code>--disable-wasm-trap-handler</code></h3>
<p>Node.js enables V8's trap-handler-based WebAssembly bound checks on 64-bit platforms,
which significantly improves WebAssembly performance by eliminating the need for
inline bound checks. This optimization requires allocating a large virtual memory
cage per WebAssembly memory instance (currently typically 8GB for 32-bit WebAssembly memory,
16GB for 64-bit WebAssembly memory) to trap out-of-bound accesses. On most 64-bit
platforms, the virtual memory address space is usually large enough (around 128TB)
to accommodate typical WebAssembly usages, but if the machine has manual limits
on virtual memory (e.g. through <code>ulimit -v</code>), WebAssembly memory allocation is
more likely to fail with <code>WebAssembly.Memory(): could not allocate memory</code>.</p>
<p>At startup, Node.js automatically checks whether there is enough virtual memory
available to allocate at least one cage, and if not, the trap-handler optimization
is automatically disabled so that WebAssembly can still run using inline
bound checks (with less optimal performance). But if the application needs to create
many WebAssembly memory instances and the machine still configures a relatively high
limit on virtual memory, allocation of WebAssembly memory instances may still fail
more quickly than expected due to the raised virtual memory usage.</p>
<p><code>--disable-wasm-trap-handler</code> fully disables this optimization so that WebAssembly memory
instances always use inline bound checks instead of reserving large virtual memory cages.
This allows more instances to be created when the virtual memory address space available
to the Node.js process is limited.</p>
<h3><code>--disallow-code-generation-from-strings</code></h3>
<p>Make built-in language features like <code>eval</code> and <code>new Function</code> that generate
code from strings throw an exception instead. This does not affect the Node.js
<code>node:vm</code> module.</p>
<h3><code>--dns-result-order=order</code></h3>
<p>Set the default value of <code>order</code> in <a href="dns.md#dnslookuphostname-options-callback"><code>dns.lookup()</code></a> and
<a href="dns.md#dnspromiseslookuphostname-options"><code>dnsPromises.lookup()</code></a>. The value could be:</p>
<ul>
<li><code>ipv4first</code>: sets default <code>order</code> to <code>ipv4first</code>.</li>
<li><code>ipv6first</code>: sets default <code>order</code> to <code>ipv6first</code>.</li>
<li><code>verbatim</code>: sets default <code>order</code> to <code>verbatim</code>.</li>
</ul>
<p>The default is <code>verbatim</code> and <a href="dns.md#dnssetdefaultresultorderorder"><code>dns.setDefaultResultOrder()</code></a> have higher
priority than <code>--dns-result-order</code>.</p>
<h3><code>--enable-fips</code></h3>
<p>Enable <a href="crypto.md#fips-mode">FIPS mode</a> at startup. With OpenSSL 3, a configured provider named
<code>fips</code> must be available and initialize successfully. With OpenSSL 1.1.1,
Node.js must be built against a FIPS-capable OpenSSL.</p>
<h3><code>--enable-fips-indicator-events</code></h3>
<p>Publish OpenSSL FIPS indicator results to the
<a href="diagnostics_channel.md#event-cryptofipsindicator"><code>'crypto.fips.indicator'</code></a> diagnostics channel. This option requires OpenSSL
3.4 or later. It does not enable <a href="crypto.md#fips-mode">FIPS mode</a> or change whether an operation
is permitted.</p>
<h3><code>--enable-source-maps</code></h3>
<p>Enable <a href="https://tc39.es/ecma426/">Source Map</a> support for stack traces.</p>
<p>When using a transpiler, such as TypeScript, stack traces thrown by an
application reference the transpiled code, not the original source position.
<code>--enable-source-maps</code> enables caching of Source Maps and makes a best
effort to report stack traces relative to the original source file.</p>
<p>Overriding <code>Error.prepareStackTrace</code> may prevent <code>--enable-source-maps</code> from
modifying the stack trace. Call and return the results of the original
<code>Error.prepareStackTrace</code> in the overriding function to modify the stack trace
with source maps.</p>
<pre><code class="language-js">const originalPrepareStackTrace = Error.prepareStackTrace;
Error.prepareStackTrace = (error, trace) =&gt; {
  // Modify error and trace and format stack trace with
  // original Error.prepareStackTrace.
  return originalPrepareStackTrace(error, trace);
};
</code></pre>
<p>Note, enabling source maps can introduce latency to your application
when <code>Error.stack</code> is accessed. If you access <code>Error.stack</code> frequently
in your application, take into account the performance implications
of <code>--enable-source-maps</code>.</p>
<h3><code>--entry-url</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>When present, Node.js will interpret the entry point as a URL, rather than a
path.</p>
<p>Follows <a href="esm.md#modules-ecmascript-modules">ECMAScript module</a> resolution rules.</p>
<p>Any query parameter or hash in the URL will be accessible via <a href="esm.md#importmetaurl"><code>import.meta.url</code></a>.</p>
<pre><code class="language-bash">node --entry-url 'file:///path/to/file.js?queryparams=work#and-hashes-too'
node --entry-url 'file.ts?query#hash'
node --entry-url 'data:text/javascript,console.log(&quot;Hello&quot;)'
</code></pre>
<h3><code>--env-file-if-exists=file</code></h3>
<p>Behavior is the same as <a href="#--env-filefile"><code>--env-file</code></a>, but an error is not thrown if the file
does not exist.</p>
<h3><code>--env-file=file</code></h3>
<p>Loads environment variables from a file relative to the current directory,
making them available to applications on <code>process.env</code>. The <a href="#environment-variables-1">environment
variables which configure Node.js</a>, such as <code>NODE_OPTIONS</code>,
are parsed and applied. If the same variable is defined in the environment and
in the file, the value from the environment takes precedence.</p>
<p>You can pass multiple <code>--env-file</code> arguments. Subsequent files override
pre-existing variables defined in previous files.</p>
<p>An error is thrown if the file does not exist.</p>
<pre><code class="language-bash">node --env-file=.env --env-file=.development.env index.js
</code></pre>
<p>The format of the file should be one line per key-value pair of environment
variable name and value separated by <code>=</code>:</p>
<pre><code class="language-text">PORT=3000
</code></pre>
<p>Any text after a <code>#</code> is treated as a comment:</p>
<pre><code class="language-text"># This is a comment
PORT=3000 # This is also a comment
</code></pre>
<p>Values can start and end with the following quotes: <code>`</code>, <code>&quot;</code> or <code>'</code>.
They are omitted from the values.</p>
<pre><code class="language-text">USERNAME=&quot;nodejs&quot; # will result in `nodejs` as the value.
</code></pre>
<p>Multi-line values are supported:</p>
<pre><code class="language-text">MULTI_LINE=&quot;THIS IS
A MULTILINE&quot;
# will result in `THIS IS\nA MULTILINE` as the value.
</code></pre>
<p>Export keyword before a key is ignored:</p>
<pre><code class="language-text">export USERNAME=&quot;nodejs&quot; # will result in `nodejs` as the value.
</code></pre>
<p>If you want to load environment variables from a file that may not exist, you
can use the <a href="#--env-file-if-existsfile"><code>--env-file-if-exists</code></a> flag instead.</p>
<h3><code>-e</code>, <code>--eval &quot;script&quot;</code></h3>
<p>Evaluate the following argument as JavaScript. The modules which are
predefined in the REPL can also be used in <code>script</code>.</p>
<p>If <code>script</code> starts with <code>-</code>, pass it using <code>=</code> (for example,
<code>node --print --eval=-42</code>) so it is parsed as the value of <code>--eval</code>.</p>
<p>On Windows, using <code>cmd.exe</code> a single quote will not work correctly because it
only recognizes double <code>&quot;</code> for quoting. In Powershell or Git bash, both <code>'</code>
and <code>&quot;</code> are usable.</p>
<p>It is possible to run code containing inline types unless the
<a href="#--no-strip-types"><code>--no-strip-types</code></a> flag is provided.</p>
<h3><code>--experimental-addon-modules</code></h3>
<blockquote>
<p>Stability: 1.2 - Release candidate</p>
</blockquote>
<p>Enable experimental import support for <code>.node</code> addons.</p>
<h3><code>--experimental-bench</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable the experimental <code>node:bench</code> module and command-line benchmark runner.</p>
<h3><code>--experimental-dtls</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable experimental support for the DTLS protocol. See the
<a href="dtls.md">dtls documentation</a> for details.</p>
<h3><code>--experimental-eventsource</code></h3>
<p>Enable exposition of <a href="https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events">EventSource Web API</a> on the global scope.</p>
<h3><code>--experimental-import-meta-resolve</code></h3>
<p>Enable experimental <code>import.meta.resolve()</code> parent URL support, which allows
passing a second <code>parentURL</code> argument for contextual resolution.</p>
<p>Previously gated the entire <code>import.meta.resolve</code> feature.</p>
<h3><code>--experimental-import-text</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>Enable experimental support for importing modules with
<code>with { type: 'text' }</code>.</p>
<h3><code>--experimental-inspector-network-resource</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>Enable experimental support for inspector network resources.</p>
<h3><code>--experimental-loader=module</code></h3>
<blockquote>
<p>This flag is discouraged and may be removed in a future version of Node.js.
Please use
<a href="module.md#registration-of-asynchronous-customization-hooks"><code>--import</code> with <code>register()</code></a> instead.</p>
</blockquote>
<p>Specify the <code>module</code> containing exported <a href="module.md#asynchronous-customization-hooks">asynchronous module customization hooks</a>.
<code>module</code> may be any string accepted as an <a href="esm.md#import-specifiers"><code>import</code> specifier</a>.</p>
<p>This feature requires <code>--allow-worker</code> if used with the <a href="permissions.md#permission-model">Permission Model</a>.</p>
<h3><code>--experimental-network-inspection</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable experimental support for the network inspection with Chrome DevTools.</p>
<h3><code>--experimental-package-map=&lt;path&gt;</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable experimental package map resolution. The <code>path</code> argument specifies the
location of a JSON configuration file that defines package resolution mappings.</p>
<pre><code class="language-bash">node --experimental-package-map=./package-map.json app.js
</code></pre>
<p>When enabled, bare specifier resolution consults the package map for resolution.
This allows explicit control over which packages can import which dependencies.</p>
<p>See <a href="packages.md#package-maps">Package maps</a> for details on the configuration file format and
resolution algorithm.</p>
<h3><code>--experimental-print-required-tla</code></h3>
<p>If the ES module graph cannot be <code>require()</code>'d because it contains any top-level <code>await</code>,
this flag allows Node.js to locate and print their locations.</p>
<h3><code>--experimental-quic</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Enable experimental support for the QUIC protocol.</p>
<h3><code>--experimental-sea-config</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Use this flag to generate a blob that can be injected into the Node.js
binary to produce a <a href="single-executable-applications.md">single executable application</a>. See the documentation
about <a href="single-executable-applications.md#1-generating-single-executable-preparation-blobs">this configuration</a> for details.</p>
<h3><code>--experimental-shadow-realm</code></h3>
<p>Use this flag to enable <a href="https://github.com/tc39/proposal-shadowrealm">ShadowRealm</a> support.</p>
<h3><code>--experimental-storage-inspection</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>Enable experimental support for storage inspection</p>
<h3><code>--experimental-stream-iter</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable the experimental <a href="stream_iter.md"><code>node:stream/iter</code></a> module.</p>
<h3><code>--experimental-test-coverage</code></h3>
<p>When used in conjunction with the <code>node:test</code> module, a code coverage report is
generated as part of the test runner output. If no tests are run, a coverage
report is not generated. See the documentation on
<a href="test.md#collecting-code-coverage">collecting code coverage from tests</a> for more details.</p>
<h3><code>--experimental-test-module-mocks</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>Enable module mocking in the test runner.</p>
<p>This feature requires <code>--allow-worker</code> if used with the <a href="permissions.md#permission-model">Permission Model</a>.</p>
<h3><code>--experimental-test-tag-filter='&lt;expr&gt;'</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>Run only tests that match the provided boolean tag-filter expression. Tests
declare tags via the <code>tags</code> option on <code>test()</code>, <code>it()</code>, <code>suite()</code>, or
<code>describe()</code>. Tags inherit from suites to nested tests by union.</p>
<p>The expression supports boolean operators (<code>and</code>/<code>&amp;&amp;</code>, <code>or</code>/<code>||</code>,
<code>not</code>/<code>!</code>), parentheses for grouping, and <code>*</code> wildcards inside identifiers.
Standard precedence applies: <code>not</code> binds tighter than <code>and</code>, which binds
tighter than <code>or</code>. See <a href="test.md#test-tags">Test tags</a> for the full grammar and behavior.</p>
<p>The flag may be specified more than once; multiple expressions are combined
with AND, so a test must satisfy every expression to run.</p>
<p>A malformed expression causes the test runner to exit with a non-zero status
before running any tests.</p>
<h3><code>--experimental-vfs</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable the experimental <a href="vfs.md"><code>node:vfs</code></a> module.</p>
<h3><code>--experimental-vm-modules</code></h3>
<p>Enable experimental ES Module support in the <code>node:vm</code> module.</p>
<h3><code>--experimental-wasi-unstable-preview1</code></h3>
<p>Enable experimental WebAssembly System Interface (WASI) support.</p>
<h3><code>--experimental-web-worker</code></h3>
<p>Enable experimental support for the Web Worker API.</p>
<h3><code>--experimental-worker-inspection</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>Enable experimental support for the worker inspection with Chrome DevTools.</p>
<h3><code>--force-context-aware</code></h3>
<p>Disable loading native addons that are not <a href="addons.md#context-aware-addons">context-aware</a>.</p>
<h3><code>--force-fips[=mode]</code></h3>
<p>Enable <a href="crypto.md#fips-mode">FIPS mode</a> at startup and prevent it from being disabled from script
code. The same OpenSSL requirements as <a href="#--enable-fips"><code>--enable-fips</code></a> apply.</p>
<p>An optional mode can be specified using <code>--force-fips=mode</code>:</p>
<ul>
<li><code>provider</code>: Preserve the OpenSSL FIPS provider's configured handling of
non-approved operations. This is the current default when the mode is
omitted.</li>
<li><code>strict</code>: Reject non-approved operations reported through the OpenSSL FIPS
indicator callback. This mode requires OpenSSL 3.4 or later.</li>
</ul>
<p>The <code>strict</code> mode only covers operations reported through the callback for
OpenSSL's default library context. It does not cover native addons that use
another <code>OSSL_LIB_CTX</code> or another copy of <code>libcrypto</code>, nor operation-specific
indicators that do not invoke the callback.</p>
<h3><code>--force-node-api-uncaught-exceptions-policy</code></h3>
<p>Enforces <code>uncaughtException</code> event on Node-API asynchronous callbacks.</p>
<p>To prevent from an existing add-on from crashing the process, this flag is not
enabled by default. In the future, this flag will be enabled by default to
enforce the correct behavior.</p>
<h3><code>--frozen-intrinsics</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Enable experimental frozen intrinsics like <code>Array</code> and <code>Object</code>.</p>
<p>Only the root context is supported. There is no guarantee that
<code>globalThis.Array</code> is indeed the default intrinsic reference. Code may break
under this flag.</p>
<p>To allow polyfills to be added,
<a href="#-r---require-module"><code>--require</code></a> and <a href="#--importmodule"><code>--import</code></a> both run before freezing intrinsics.</p>
<h3><code>--heap-prof</code></h3>
<p>Starts the V8 heap profiler on start up, and writes the heap profile to disk
before exit.</p>
<p>If <code>--heap-prof-dir</code> is not specified, the generated profile is placed
in the current working directory.</p>
<p>If <code>--heap-prof-name</code> is not specified, the generated profile is
named <code>Heap.${yyyymmdd}.${hhmmss}.${pid}.${tid}.${seq}.heapprofile</code>.</p>
<pre><code class="language-console">$ node --heap-prof index.js
$ ls *.heapprofile
Heap.20190409.202950.15293.0.001.heapprofile
</code></pre>
<h3><code>--heap-prof-dir</code></h3>
<p>Specify the directory where the heap profiles generated by <code>--heap-prof</code> will
be placed.</p>
<p>The default value is controlled by the
<a href="#--diagnostic-dirdirectory"><code>--diagnostic-dir</code></a> command-line option.</p>
<h3><code>--heap-prof-interval</code></h3>
<p>Specify the average sampling interval in bytes for the heap profiles generated
by <code>--heap-prof</code>. The default is 512 * 1024 bytes.</p>
<h3><code>--heap-prof-name</code></h3>
<p>Specify the file name of the heap profile generated by <code>--heap-prof</code>.</p>
<h3><code>--heapsnapshot-near-heap-limit=max_count</code></h3>
<p>Writes a V8 heap snapshot to disk when the V8 heap usage is approaching the
heap limit. <code>count</code> should be a non-negative integer (in which case
Node.js will write no more than <code>max_count</code> snapshots to disk).</p>
<p>When generating snapshots, garbage collection may be triggered and bring
the heap usage down. Therefore multiple snapshots may be written to disk
before the Node.js instance finally runs out of memory. These heap snapshots
can be compared to determine what objects are being allocated during the
time consecutive snapshots are taken. It's not guaranteed that Node.js will
write exactly <code>max_count</code> snapshots to disk, but it will try
its best to generate at least one and up to <code>max_count</code> snapshots before the
Node.js instance runs out of memory when <code>max_count</code> is greater than <code>0</code>.</p>
<p>Generating V8 snapshots takes time and memory (both memory managed by the
V8 heap and native memory outside the V8 heap). The bigger the heap is,
the more resources it needs. Node.js will adjust the V8 heap to accommodate
the additional V8 heap memory overhead, and try its best to avoid using up
all the memory available to the process. When the process uses
more memory than the system deems appropriate, the process may be terminated
abruptly by the system, depending on the system configuration.</p>
<pre><code class="language-console">$ node --max-old-space-size=100 --heapsnapshot-near-heap-limit=3 index.js
Wrote snapshot to Heap.20200430.100036.49580.0.001.heapsnapshot
Wrote snapshot to Heap.20200430.100037.49580.0.002.heapsnapshot
Wrote snapshot to Heap.20200430.100038.49580.0.003.heapsnapshot

&lt;--- Last few GCs ---&gt;

[49580:0x110000000]     4826 ms: Mark-sweep 130.6 (147.8) -&gt; 130.5 (147.8) MB, 27.4 / 0.0 ms  (average mu = 0.126, current mu = 0.034) allocation failure scavenge might not succeed
[49580:0x110000000]     4845 ms: Mark-sweep 130.6 (147.8) -&gt; 130.6 (147.8) MB, 18.8 / 0.0 ms  (average mu = 0.088, current mu = 0.031) allocation failure scavenge might not succeed


&lt;--- JS stacktrace ---&gt;

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
....
</code></pre>
<h3><code>--heapsnapshot-signal=signal</code></h3>
<p>Enables a signal handler that causes the Node.js process to write a heap dump
when the specified signal is received. <code>signal</code> must be a valid signal name.
Disabled by default.</p>
<pre><code class="language-console">$ node --heapsnapshot-signal=SIGUSR2 index.js &amp;
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
node         1  5.5  6.1 787252 247004 ?       Ssl  16:43   0:02 node --heapsnapshot-signal=SIGUSR2 index.js
$ kill -USR2 1
$ ls
Heap.20190718.133405.15554.0.001.heapsnapshot
</code></pre>
<h3><code>-h</code>, <code>--help</code></h3>
<p>Print node command-line options.
The output of this option is less detailed than this document.</p>
<h3><code>--icu-data-dir=file</code></h3>
<p>Specify ICU data load path. (Overrides <code>NODE_ICU_DATA</code>.)</p>
<h3><code>--import=module</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Preload the specified module at startup. If the flag is provided several times,
each module will be executed sequentially in the order they appear, starting
with the ones provided in <a href="#node_optionsoptions"><code>NODE_OPTIONS</code></a>.</p>
<p>Follows <a href="esm.md#modules-ecmascript-modules">ECMAScript module</a> resolution rules.
Use <a href="#-r---require-module"><code>--require</code></a> to load a <a href="modules.md">CommonJS module</a>.
Modules preloaded with <code>--require</code> will run before modules preloaded with <code>--import</code>.</p>
<p>Modules are preloaded into the main thread as well as any worker threads,
forked processes, or clustered processes.</p>
<h3><code>--input-type=type</code></h3>
<p>This configures Node.js to interpret <code>--eval</code> or <code>STDIN</code> input as CommonJS or
as an ES module. Valid values are <code>&quot;commonjs&quot;</code>, <code>&quot;module&quot;</code>, <code>&quot;module-typescript&quot;</code> and <code>&quot;commonjs-typescript&quot;</code>.
The <code>&quot;-typescript&quot;</code> values are not available with the flag <code>--no-strip-types</code>.
The default is no value, or <code>&quot;commonjs&quot;</code> if <code>--no-experimental-detect-module</code> is passed.</p>
<p>If <code>--input-type</code> is not provided,
Node.js will try to detect the syntax with the following steps:</p>
<ol>
<li>Run the input as CommonJS.</li>
<li>If step 1 fails, run the input as an ES module.</li>
<li>If step 2 fails with a SyntaxError, strip the types.</li>
<li>If step 3 fails with an error code <a href="errors.md#err_unsupported_typescript_syntax"><code>ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX</code></a>
or <a href="errors.md#err_invalid_typescript_syntax"><code>ERR_INVALID_TYPESCRIPT_SYNTAX</code></a>,
throw the error from step 2, including the TypeScript error in the message,
else run as CommonJS.</li>
<li>If step 4 fails, run the input as an ES module.</li>
</ol>
<p>To avoid the delay of multiple syntax detection passes, the <code>--input-type=type</code> flag can be used to specify
how the <code>--eval</code> input should be interpreted.</p>
<p>The REPL does not support this option. Usage of <code>--input-type=module</code> with
<a href="#-p---print-script"><code>--print</code></a> will throw an error, as <code>--print</code> does not support ES module
syntax.</p>
<h3><code>--insecure-http-parser</code></h3>
<p>Enable leniency flags on the HTTP parser. This may allow
interoperability with non-conformant HTTP implementations.</p>
<p>When enabled, the parser will accept the following:</p>
<ul>
<li>Invalid HTTP headers values.</li>
<li>Invalid HTTP versions.</li>
<li>Allow message containing both <code>Transfer-Encoding</code>
and <code>Content-Length</code> headers.</li>
<li>Allow extra data after message when <code>Connection: close</code> is present.</li>
<li>Allow extra transfer encodings after <code>chunked</code> has been provided.</li>
<li>Allow <code>\n</code> to be used as token separator instead of <code>\r\n</code>.</li>
<li>Allow <code>\r\n</code> not to be provided after a chunk.</li>
<li>Allow spaces to be present after a chunk size and before <code>\r\n</code>.</li>
</ul>
<p>All the above will expose your application to request smuggling
or poisoning attack. Avoid using this option.</p>
<h3><code>--inspect-brk[=[host:]port]</code></h3>
<p>Activate inspector on <code>host:port</code> and break at start of user script.
Default <code>host:port</code> is <code>127.0.0.1:9229</code>. If port <code>0</code> is specified,
a random available port will be used.</p>
<p>See <a href="debugger.md#v8-inspector-integration-for-nodejs">V8 Inspector integration for Node.js</a> for further explanation on Node.js debugger.</p>
<p>See the <a href="#warning-binding-inspector-to-a-public-ipport-combination-is-insecure">security warning</a> below regarding the <code>host</code>
parameter usage.</p>
<h3><code>--inspect-port=[host:]port</code></h3>
<p>Set the <code>host:port</code> to be used when the inspector is activated.
Useful when activating the inspector by sending the <code>SIGUSR1</code> signal.
Except when <a href="#--disable-sigusr1"><code>--disable-sigusr1</code></a> is passed.</p>
<p>Default host is <code>127.0.0.1</code>. If port <code>0</code> is specified,
a random available port will be used.</p>
<p>See the <a href="#warning-binding-inspector-to-a-public-ipport-combination-is-insecure">security warning</a> below regarding the <code>host</code>
parameter usage.</p>
<h3><code>--inspect-publish-uid=stderr,http</code></h3>
<p>Specify ways of the inspector web socket url exposure.</p>
<p>By default inspector websocket url is available in stderr and under <code>/json/list</code>
endpoint on <code>http://host:port/json/list</code>.</p>
<h3><code>--inspect-wait[=[host:]port]</code></h3>
<p>Activate inspector on <code>host:port</code> and wait for debugger to be attached.
Default <code>host:port</code> is <code>127.0.0.1:9229</code>. If port <code>0</code> is specified,
a random available port will be used.</p>
<p>See <a href="debugger.md#v8-inspector-integration-for-nodejs">V8 Inspector integration for Node.js</a> for further explanation on Node.js debugger.</p>
<p>See the <a href="#warning-binding-inspector-to-a-public-ipport-combination-is-insecure">security warning</a> below regarding the <code>host</code>
parameter usage.</p>
<h3><code>--inspect[=[host:]port]</code></h3>
<p>Activate inspector on <code>host:port</code>. Default is <code>127.0.0.1:9229</code>. If port <code>0</code> is
specified, a random available port will be used.</p>
<p>V8 inspector integration allows tools such as Chrome DevTools and IDEs to debug
and profile Node.js instances. The tools attach to Node.js instances via a
tcp port and communicate using the <a href="https://chromedevtools.github.io/devtools-protocol/">Chrome DevTools Protocol</a>.
See <a href="debugger.md#v8-inspector-integration-for-nodejs">V8 Inspector integration for Node.js</a> for further explanation on Node.js debugger.</p>
<p>&lt;a id=&quot;inspector_security&quot;&gt;&lt;/a&gt;</p>
<h4>Warning: binding inspector to a public IP:port combination is insecure</h4>
<p>Binding the inspector to a public IP (including <code>0.0.0.0</code>) with an open port is
insecure, as it allows external hosts to connect to the inspector and perform
a <a href="https://www.owasp.org/index.php/Code_Injection">remote code execution</a> attack.</p>
<p>If specifying a host, make sure that either:</p>
<ul>
<li>The host is not accessible from public networks.</li>
<li>A firewall disallows unwanted connections on the port.</li>
</ul>
<p><strong>More specifically, <code>--inspect=0.0.0.0</code> is insecure if the port (<code>9229</code> by
default) is not firewall-protected.</strong></p>
<p>See the <a href="https://nodejs.org/learn/getting-started/debugging#security-implications">debugging security implications</a> section for more information.</p>
<h3><code>-i</code>, <code>--interactive</code></h3>
<p>Opens the REPL even if stdin does not appear to be a terminal.</p>
<h3><code>--jitless</code></h3>
<blockquote>
<p>Stability: 1 - Experimental. This flag is inherited from V8 and is subject to
change upstream.</p>
</blockquote>
<p>Disable <a href="https://v8.dev/blog/jitless">runtime allocation of executable memory</a>. This may be
required on some platforms for security reasons. It can also reduce attack
surface on other platforms, but the performance impact may be severe.</p>
<h3><code>--localstorage-file=file</code></h3>
<blockquote>
<p>Stability: 1.2 - Release candidate.</p>
</blockquote>
<p>The file used to store <code>localStorage</code> data. If the file does not exist, it is
created the first time <code>localStorage</code> is accessed. The same file may be shared
between multiple Node.js processes concurrently.</p>
<h3><code>--max-http-header-size=size</code></h3>
<p>Specify the maximum size, in bytes, of HTTP headers. Defaults to 16 KiB.</p>
<h3><code>--max-old-space-size-percentage=percentage</code></h3>
<p>Sets the maximum memory size of V8's old memory section as a percentage of available system memory.
This flag takes precedence over <code>--max-old-space-size</code> when both are specified.</p>
<p>The <code>percentage</code> parameter must be a number greater than 0 and up to 100, representing the percentage
of available system memory to allocate to the V8 heap.</p>
<p><strong>Note:</strong> This flag utilizes <code>--max-old-space-size</code>, which may be unreliable on 32-bit platforms due to
integer overflow issues.</p>
<pre><code class="language-bash"># Using 50% of available system memory
node --max-old-space-size-percentage=50 index.js

# Using 75% of available system memory
node --max-old-space-size-percentage=75 index.js
</code></pre>
<h3><code>--network-family-autoselection-attempt-timeout</code></h3>
<p>Sets the default value for the network family autoselection attempt timeout.
For more information, see <a href="net.md#netgetdefaultautoselectfamilyattempttimeout"><code>net.getDefaultAutoSelectFamilyAttemptTimeout()</code></a>.</p>
<h3><code>--no-addons</code></h3>
<p>Disable the <code>node-addons</code> exports condition as well as disable loading
native addons. When <code>--no-addons</code> is specified, calling <code>process.dlopen</code> or
requiring a native C++ addon will fail and throw an exception.</p>
<h3><code>--no-deprecation</code></h3>
<p>Silence deprecation warnings.</p>
<h3><code>--no-experimental-detect-module</code></h3>
<p>Disable using <a href="packages.md#syntax-detection">syntax detection</a> to determine module type.</p>
<h3><code>--no-experimental-ffi</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Disable the experimental <a href="ffi.md"><code>node:ffi</code></a> module.</p>
<p>This flag is only available in builds with FFI support.</p>
<h3><code>--no-experimental-global-navigator</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Disable exposition of <a href="globals.md#navigator">Navigator API</a> on the global scope.</p>
<h3><code>--no-experimental-require-module</code></h3>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="#--no-require-module"><code>--no-require-module</code></a> instead.</p>
</blockquote>
<p>Legacy alias for <a href="#--no-require-module"><code>--no-require-module</code></a>.</p>
<h3><code>--no-experimental-sqlite</code></h3>
<p>Disable the experimental <a href="sqlite.md"><code>node:sqlite</code></a> module.</p>
<h3><code>--no-experimental-webstorage</code></h3>
<blockquote>
<p>Stability: 1.2 - Release candidate.</p>
</blockquote>
<p>Disable <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"><code>Web Storage</code></a> support.</p>
<h3><code>--no-extra-info-on-fatal-exception</code></h3>
<p>Hide extra information on fatal exception that causes exit.</p>
<h3><code>--no-force-async-hooks-checks</code></h3>
<p>Disables runtime checks for <code>async_hooks</code>. These will still be enabled
dynamically when <code>async_hooks</code> is enabled.</p>
<h3><code>--no-global-search-paths</code></h3>
<p>Do not search modules from global paths like <code>$HOME/.node_modules</code> and
<code>$NODE_PATH</code>.</p>
<h3><code>--no-network-family-autoselection</code></h3>
<p>Disables the family autoselection algorithm unless connection options explicitly
enables it.</p>
<p>&lt;a id=&quot;--experimental-require-module&quot;&gt;&lt;/a&gt;</p>
<h3><code>--no-require-module</code></h3>
<p>Disable support for loading a synchronous ES module graph in <code>require()</code>.</p>
<p>See <a href="modules.md#loading-ecmascript-modules-using-require">Loading ECMAScript modules using <code>require()</code></a>.</p>
<h3><code>--no-strip-types</code></h3>
<p>Disable type-stripping for TypeScript files.
For more information, see the <a href="typescript.md#type-stripping">TypeScript type-stripping</a> documentation.</p>
<h3><code>--no-warnings</code></h3>
<p>Silence all process warnings (including deprecations).</p>
<h3><code>--no-worker-snapshot</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Start worker threads by running the internal bootstrap from scratch instead of
deserializing the bootstrapped context from the built-in startup snapshot.</p>
<h3><code>--node-memory-debug</code></h3>
<p>Enable extra debug checks for memory leaks in Node.js internals. This is
usually only useful for developers debugging Node.js itself.</p>
<h3><code>--openssl-config=file</code></h3>
<p>Load an OpenSSL configuration file on startup. The file can activate an
OpenSSL 3 FIPS provider or configure a FIPS-capable OpenSSL 1.1.1 build. See
<a href="crypto.md#fips-mode">FIPS mode</a>.</p>
<p>This option takes precedence over the <code>OPENSSL_CONF</code> environment variable.</p>
<h3><code>--openssl-legacy-provider</code></h3>
<p>Enable OpenSSL 3.0 legacy provider. For more information please see
<a href="https://www.openssl.org/docs/man3.0/man7/OSSL_PROVIDER-legacy.html">OSSL_PROVIDER-legacy</a>.</p>
<h3><code>--openssl-shared-config</code></h3>
<p>Enable OpenSSL default configuration section, <code>openssl_conf</code> to be read from
the OpenSSL configuration file. The default configuration file is named
<code>openssl.cnf</code> but this can be changed using the environment variable
<code>OPENSSL_CONF</code>, or by using the command line option <code>--openssl-config</code>.
The location of the default OpenSSL configuration file depends on how OpenSSL
is being linked to Node.js. Sharing the OpenSSL configuration may have unwanted
implications and it is recommended to use a configuration section specific to
Node.js which is <code>nodejs_conf</code> and is default when this option is not used.</p>
<h3><code>--pending-deprecation</code></h3>
<p>Emit pending deprecation warnings.</p>
<p>Pending deprecations are generally identical to a runtime deprecation with the
notable exception that they are turned <em>off</em> by default and will not be emitted
unless either the <code>--pending-deprecation</code> command-line flag, or the
<code>NODE_PENDING_DEPRECATION=1</code> environment variable, is set. Pending deprecations
are used to provide a kind of selective &quot;early warning&quot; mechanism that
developers may leverage to detect deprecated API usage.</p>
<h3><code>--permission</code></h3>
<p>Enable the Permission Model for current process. When enabled, the
following permissions are restricted:</p>
<blockquote>
<p>See also <a href="#--permission-audit"><code>--permission-audit</code></a> for an audit-only mode
that logs violations without denying access.</p>
</blockquote>
<ul>
<li>File System - manageable through
<a href="#--allow-fs-read"><code>--allow-fs-read</code></a>, <a href="#--allow-fs-write"><code>--allow-fs-write</code></a> flags</li>
<li>Network - manageable through <a href="#--allow-net"><code>--allow-net</code></a> flag</li>
<li>Environment variables - manageable through <a href="#--allow-env"><code>--allow-env</code></a> flag</li>
<li>Child Process - manageable through <a href="#--allow-child-process"><code>--allow-child-process</code></a> flag</li>
<li>Worker Threads - manageable through <a href="#--allow-worker"><code>--allow-worker</code></a> flag</li>
<li>WASI - manageable through <a href="#--allow-wasi"><code>--allow-wasi</code></a> flag</li>
<li>Addons - manageable through <a href="#--allow-addons"><code>--allow-addons</code></a> flag</li>
<li>FFI - manageable through <a href="#--allow-ffi"><code>--allow-ffi</code></a> flag</li>
<li>OpenSSL STORE loaders - manageable through <a href="#--allow-openssl-store"><code>--allow-openssl-store</code></a> flag</li>
</ul>
<h3><code>--permission-audit</code></h3>
<p>Enable audit mode for the permission model. When enabled, permission checks
are performed but access is <strong>not</strong> denied — no <code>ERR_ACCESS_DENIED</code> error is
thrown. Instead, each permission violation is published through the
<code>node:diagnostics_channel</code> module, and execution continues normally.</p>
<p>This flag does not require <a href="#--permission"><code>--permission</code></a> to be specified. The
<code>--allow-*</code> flags are not needed in audit mode, since no
access is denied.</p>
<p>Audit mode is useful for discovering what permissions your application
requires before deploying with <a href="#--permission"><code>--permission</code></a>. See the
<a href="permissions.md#permission-model">Permission Model</a> documentation for the list of diagnostics channel names
and the message format.</p>
<p>If both <a href="#--permission"><code>--permission</code></a> and <code>--permission-audit</code> are specified,
<code>--permission</code> takes precedence and the Permission Model runs in enforce mode.</p>
<h3><code>--preserve-symlinks</code></h3>
<p>Instructs the module loader to preserve symbolic links when resolving and
caching modules.</p>
<p>By default, when Node.js loads a module from a path that is symbolically linked
to a different on-disk location, Node.js will dereference the link and use the
actual on-disk &quot;real path&quot; of the module as both an identifier and as a root
path to locate other dependency modules. In most cases, this default behavior
is acceptable. However, when using symbolically linked peer dependencies, as
illustrated in the example below, the default behavior causes an exception to
be thrown if <code>moduleA</code> attempts to require <code>moduleB</code> as a peer dependency:</p>
<pre><code class="language-text">{appDir}
 ├── app
 │   ├── index.js
 │   └── node_modules
 │       ├── moduleA -&gt; {appDir}/moduleA
 │       └── moduleB
 │           ├── index.js
 │           └── package.json
 └── moduleA
     ├── index.js
     └── package.json
</code></pre>
<p>The <code>--preserve-symlinks</code> command-line flag instructs Node.js to use the
symlink path for modules as opposed to the real path, allowing symbolically
linked peer dependencies to be found.</p>
<p>Note, however, that using <code>--preserve-symlinks</code> can have other side effects.
Specifically, symbolically linked <em>native</em> modules can fail to load if those
are linked from more than one location in the dependency tree (Node.js would
see those as two separate modules and would attempt to load the module multiple
times, causing an exception to be thrown).</p>
<p>The <code>--preserve-symlinks</code> flag does not apply to the main module, which allows
<code>node --preserve-symlinks node_module/.bin/&lt;foo&gt;</code> to work. To apply the same
behavior for the main module, also use <code>--preserve-symlinks-main</code>.</p>
<h3><code>--preserve-symlinks-main</code></h3>
<p>Instructs the module loader to preserve symbolic links when resolving and
caching the main module (<code>require.main</code>).</p>
<p>This flag exists so that the main module can be opted-in to the same behavior
that <code>--preserve-symlinks</code> gives to all other imports; they are separate flags,
however, for backward compatibility with older Node.js versions.</p>
<p><code>--preserve-symlinks-main</code> does not imply <code>--preserve-symlinks</code>; use
<code>--preserve-symlinks-main</code> in addition to
<code>--preserve-symlinks</code> when it is not desirable to follow symlinks before
resolving relative paths.</p>
<p>See <a href="#--preserve-symlinks"><code>--preserve-symlinks</code></a> for more information.</p>
<h3><code>-p</code>, <code>--print &quot;script&quot;</code></h3>
<p>Identical to <code>-e</code> but prints the result.</p>
<h3><code>--process-timeout=duration</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Exits the process with code <code>124</code> if it is still running after <code>duration</code>,
measured from the start of the process. <code>duration</code> is a positive integer
followed by a unit: <code>ms</code>, <code>s</code>, <code>m</code>, or <code>h</code>, for example <code>500ms</code>, <code>30s</code>, <code>5m</code>, or
<code>1h</code>. The exit code matches the one used by the <code>timeout(1)</code> command.</p>
<p>Before exiting, Node.js prints what the main thread was doing and which
resources were keeping the event loop alive to stderr:</p>
<pre><code class="language-console">$ node --process-timeout=5s server.js
(node:25418) Process timed out after 5s (--process-timeout). Exiting with code 124.
Main thread was not executing JavaScript.
Resources keeping the event loop alive:
    TCPServerWrap (listening on [::]:3000, fd 20)
    Timeout x2 (next due in 2931ms)
</code></pre>
<p>If the main thread was executing JavaScript, its stack trace is printed instead.
Use <a href="#--report-on-process-timeout"><code>--report-on-process-timeout</code></a> to also generate a <a href="report.md">diagnostic report</a>.</p>
<p>The process exits without emitting the <code>'beforeExit'</code> and <code>'exit'</code> events, as
the JavaScript code may be what keeps the process running. Code coverage and
profiles, such as those enabled with <a href="#node_v8_coveragedir"><code>NODE_V8_COVERAGE=dir</code></a> or
<a href="#--cpu-prof"><code>--cpu-prof</code></a>, are still written.</p>
<p>If the main thread does not respond within two seconds, for example because it
is blocked in a synchronous operation such as <a href="child_process.md#child_processexecsynccommand-options"><code>child_process.execSync()</code></a>,
Node.js exits immediately without printing the stack trace and resources.</p>
<p>This option is not allowed in <a href="#node_optionsoptions"><code>NODE_OPTIONS</code></a>, and it cannot be combined
with the options that enable the inspector, such as <code>--inspect</code>,
<code>--inspect-brk</code>, <code>--inspect-wait</code>, <code>--inspect-port</code>, and
<code>--inspect-publish-uid</code>, nor with <code>node inspect</code>, <code>--run</code>, or
<code>--build-snapshot</code>. While it is in effect, <a href="inspector.md#inspectoropenport-host-wait"><code>inspector.open()</code></a> and
<a href="inspector.md#sessionconnecttomainthread"><code>session.connectToMainThread()</code></a> throw, and requests to activate the
inspector with <code>SIGUSR1</code> are ignored.</p>
<p>Child processes that inherit <code>process.execArgv</code>, such as those created with
<a href="child_process.md#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>, apply the timeout from their own start. With
<a href="#--watch"><code>--watch</code></a>, the timeout applies to each run of the application rather than
to the process that watches for changes. When
<a href="test.md#running-tests-from-the-command-line">running tests from the command line</a>, the test runner process applies the
timeout to the whole run, and each test file that runs in its own process
applies it as well.</p>
<h3><code>--prof</code></h3>
<p>Generate V8 profiler output.</p>
<h3><code>--prof-process</code></h3>
<p>Process V8 profiler output generated using the V8 option <code>--prof</code>.</p>
<h3><code>--redirect-warnings=file</code></h3>
<p>Write process warnings to the given file instead of printing to stderr. The
file will be created if it does not exist, and will be appended to if it does.
If an error occurs while attempting to write the warning to the file, the
warning will be written to stderr instead.</p>
<p>The <code>file</code> name may be an absolute path. If it is not, the default directory it
will be written to is controlled by the
<a href="#--diagnostic-dirdirectory"><code>--diagnostic-dir</code></a> command-line option.</p>
<h3><code>--report-compact</code></h3>
<p>Write reports in a compact format, single-line JSON, more easily consumable
by log processing systems than the default multi-line format designed for
human consumption.</p>
<h3><code>--report-dir=directory</code>, <code>--report-directory=directory</code></h3>
<p>Location at which the report will be generated.</p>
<h3><code>--report-exclude-env</code></h3>
<p>When <code>--report-exclude-env</code> is passed the diagnostic report generated will not
contain the <code>environmentVariables</code> data.</p>
<h3><code>--report-exclude-network</code></h3>
<p>Exclude <code>header.networkInterfaces</code> from the diagnostic report. By default
this is not set and the network interfaces are included.</p>
<h3><code>--report-filename=filename</code></h3>
<p>Name of the file to which the report will be written.</p>
<p>If the filename is set to <code>'stdout'</code> or <code>'stderr'</code>, the report is written to
the stdout or stderr of the process respectively.</p>
<h3><code>--report-on-fatalerror</code></h3>
<p>Enables the report to be triggered on fatal errors (internal errors within
the Node.js runtime such as out of memory) that lead to termination of the
application. Useful to inspect various diagnostic data elements such as heap,
stack, event loop state, resource consumption etc. to reason about the fatal
error.</p>
<h3><code>--report-on-process-timeout</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Enables the report to be generated when <a href="#--process-timeoutduration"><code>--process-timeout</code></a> expires, in
addition to the summary printed to stderr. Useful to inspect the JavaScript
and native stacks, the event loop state, and resource consumption to reason
about why the process did not exit. Requires <a href="#--process-timeoutduration"><code>--process-timeout</code></a>.</p>
<p>Worker threads that do not provide their part of the report within two
seconds, for example because they are blocked in a synchronous operation such
as <a href="child_process.md#child_processexecsynccommand-options"><code>child_process.execSync()</code></a>, are left out of it.</p>
<h3><code>--report-on-signal</code></h3>
<p>Enables report to be generated upon receiving the specified (or predefined)
signal to the running Node.js process. The signal to trigger the report is
specified through <code>--report-signal</code>.</p>
<h3><code>--report-signal=signal</code></h3>
<p>Sets or resets the signal for report generation (not supported on Windows).
Default signal is <code>SIGUSR2</code>.</p>
<h3><code>--report-uncaught-exception</code></h3>
<p>Enables report to be generated when the process exits due to an uncaught
exception. Useful when inspecting the JavaScript stack in conjunction with
native stack and other runtime environment data.</p>
<h3><code>-r</code>, <code>--require module</code></h3>
<p>Preload the specified module at startup.</p>
<p>Follows <code>require()</code>'s module resolution
rules. <code>module</code> may be either a path to a file, or a node module name.</p>
<p>Modules preloaded with <code>--require</code> will run before modules preloaded with <code>--import</code>.</p>
<p>Modules are preloaded into the main thread as well as any worker threads,
forked processes, or clustered processes.</p>
<h3><code>--run</code></h3>
<p>This runs a specified command from a package.json's <code>&quot;scripts&quot;</code> object.
If a missing <code>&quot;command&quot;</code> is provided, it will list the available scripts.</p>
<p>Passing <code>--run</code> without a command lists the available scripts and exits
with a non-zero exit code:</p>
<pre><code class="language-console">$ node --run
Available scripts are:
  test: node --test
</code></pre>
<p><code>--run</code> will traverse up to the root directory and finds a <code>package.json</code>
file to run the command from.</p>
<p><code>--run</code> prepends <code>./node_modules/.bin</code> for each ancestor of
the current directory, to the <code>PATH</code> in order to execute the binaries from
different folders where multiple <code>node_modules</code> directories are present, if
<code>ancestor-folder/node_modules/.bin</code> is a directory.</p>
<p><code>--run</code> executes the command in the directory containing the related <code>package.json</code>.</p>
<p>For example, the following command will run the <code>test</code> script of
the <code>package.json</code> in the current folder:</p>
<pre><code class="language-console">$ node --run test
</code></pre>
<p>You can also pass arguments to the command. Any argument after <code>--</code> will
be appended to the script:</p>
<pre><code class="language-console">$ node --run test -- --verbose
</code></pre>
<h4>Intentional limitations</h4>
<p><code>node --run</code> is not meant to match the behaviors of <code>npm run</code> or of the <code>run</code>
commands of other package managers. The Node.js implementation is intentionally
more limited, in order to focus on top performance for the most common use
cases.
Some features of other <code>run</code> implementations that are intentionally excluded
are:</p>
<ul>
<li>Running <code>pre</code> or <code>post</code> scripts in addition to the specified script.</li>
<li>Defining package manager-specific environment variables.</li>
</ul>
<h4>Environment variables</h4>
<p>The following environment variables are set when running a script with <code>--run</code>:</p>
<ul>
<li><code>NODE_RUN_SCRIPT_NAME</code>: The name of the script being run. For example, if
<code>--run</code> is used to run <code>test</code>, the value of this variable will be <code>test</code>.</li>
<li><code>NODE_RUN_PACKAGE_JSON_PATH</code>: The path to the <code>package.json</code> that is being
processed.</li>
</ul>
<p>Environment variables loaded from a file with <a href="#--env-filefile"><code>--env-file</code></a> are not applied
to the command executed by <code>--run</code>.</p>
<h3><code>--secure-heap-min=n</code></h3>
<p>When using <code>--secure-heap</code>, the <code>--secure-heap-min</code> flag specifies the
minimum allocation from the secure heap. The minimum value is <code>2</code>.
The maximum value is the lesser of <code>--secure-heap</code> or <code>2147483647</code>.
The value given must be a power of two.</p>
<h3><code>--secure-heap=n</code></h3>
<p>Initializes an OpenSSL secure heap of <code>n</code> bytes. When initialized, the
secure heap is used for selected types of allocations within OpenSSL
during key generation and other operations. This is useful, for instance,
to prevent sensitive information from leaking due to pointer overruns
or underruns.</p>
<p>The secure heap is a fixed size and cannot be resized at runtime so,
if used, it is important to select a large enough heap to cover all
application uses.</p>
<p>The heap size given must be a power of two. Any value less than 2
will disable the secure heap.</p>
<p>The secure heap is disabled by default.</p>
<p>The secure heap is not available on Windows.</p>
<p>See <a href="https://www.openssl.org/docs/man3.0/man3/CRYPTO_secure_malloc_init.html"><code>CRYPTO_secure_malloc_init</code></a> for more details.</p>
<h3><code>--snapshot-blob=path</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>When used with <code>--build-snapshot</code>, <code>--snapshot-blob</code> specifies the path
where the generated snapshot blob is written to. If not specified, the
generated blob is written to <code>snapshot.blob</code> in the current working directory.</p>
<p>When used without <code>--build-snapshot</code>, <code>--snapshot-blob</code> specifies the
path to the blob that is used to restore the application state.</p>
<p>When loading a snapshot, Node.js checks that:</p>
<ol>
<li>The version, architecture, and platform of the running Node.js binary
are exactly the same as that of the binary that generates the snapshot.</li>
<li>The V8 flags and CPU features are compatible with that of the binary
that generates the snapshot.</li>
</ol>
<p>If they don't match, Node.js refuses to load the snapshot and exits with
status code 1.</p>
<h3><code>--test</code></h3>
<p>Starts the Node.js command line test runner. This flag cannot be combined with
<code>--watch-path</code>, <code>--check</code>, <code>--eval</code>, <code>--interactive</code>, or the inspector.
See the documentation on <a href="test.md#running-tests-from-the-command-line">running tests from the command line</a>
for more details.</p>
<h3><code>--test-concurrency</code></h3>
<p>The maximum number of test files that the test runner CLI will execute
concurrently. If <code>--test-isolation</code> is set to <code>'none'</code>, this flag is ignored and
concurrency is one. Otherwise, concurrency defaults to
<code>os.availableParallelism() - 1</code>.</p>
<h3><code>--test-coverage-branches=threshold</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Require a minimum percent of covered branches. If code coverage does not reach
the threshold specified, the process will exit with code <code>1</code>.</p>
<h3><code>--test-coverage-exclude</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Excludes specific files from code coverage using a glob pattern, which can match
both absolute and relative file paths.</p>
<p>This option may be specified multiple times to exclude multiple glob patterns.</p>
<p>If both <code>--test-coverage-exclude</code> and <code>--test-coverage-include</code> are provided,
files must meet <strong>both</strong> criteria to be included in the coverage report.</p>
<p>By default all the matching test files are excluded from the coverage report.
Specifying this option will override the default behavior.</p>
<h3><code>--test-coverage-functions=threshold</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Require a minimum percent of covered functions. If code coverage does not reach
the threshold specified, the process will exit with code <code>1</code>.</p>
<h3><code>--test-coverage-include</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Includes specific files in code coverage using a glob pattern, which can match
both absolute and relative file paths.</p>
<p>This option may be specified multiple times to include multiple glob patterns.</p>
<p>If both <code>--test-coverage-exclude</code> and <code>--test-coverage-include</code> are provided,
files must meet <strong>both</strong> criteria to be included in the coverage report.</p>
<h3><code>--test-coverage-include-all</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Includes source files that were never loaded by the test run in the coverage
report, where they are reported as having zero coverage.</p>
<p>Candidate files are searched for in the current working directory, and are
subject to the same <code>--test-coverage-include</code> and <code>--test-coverage-exclude</code>
filtering as the rest of the report.</p>
<h3><code>--test-coverage-lines=threshold</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Require a minimum percent of covered lines. If code coverage does not reach
the threshold specified, the process will exit with code <code>1</code>.</p>
<h3><code>--test-force-exit</code></h3>
<p>Configures the test runner to exit the process once all known tests have
finished executing even if the event loop would otherwise remain active.</p>
<h3><code>--test-global-setup=module</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>Specify a module that will be evaluated before all tests are executed and
can be used to setup global state or fixtures for tests.</p>
<p>See the documentation on <a href="test.md#global-setup-and-teardown">global setup and teardown</a> for more details.</p>
<h3><code>--test-isolation=mode</code></h3>
<p>Configures the type of test isolation used in the test runner. When <code>mode</code> is
<code>'process'</code>, each test file is run in a separate child process. When <code>mode</code> is
<code>'none'</code>, all test files run in the same process as the test runner. The default
isolation mode is <code>'process'</code>. This flag is ignored if the <code>--test</code> flag is not
present. See the <a href="test.md#test-runner-execution-model">test runner execution model</a> section for more information.</p>
<h3><code>--test-name-pattern</code></h3>
<p>A regular expression that configures the test runner to only execute tests
whose name matches the provided pattern. See the documentation on
<a href="test.md#filtering-tests-by-name">filtering tests by name</a> for more details.</p>
<p>If both <code>--test-name-pattern</code> and <code>--test-skip-pattern</code> are supplied,
tests must satisfy <strong>both</strong> requirements in order to be executed.</p>
<h3><code>--test-only</code></h3>
<p>Configures the test runner to only execute top level tests that have the <code>only</code>
option set. This flag is not necessary when test isolation is disabled.</p>
<h3><code>--test-random-seed</code></h3>
<p>Set the seed used to randomize test execution order. This applies to both test
file execution order and queued tests within each file. Providing this flag
enables randomization implicitly, even without <code>--test-randomize</code>.</p>
<p>The value must be an integer between <code>0</code> and <code>4294967295</code>.</p>
<p>This flag cannot be used with <code>--watch</code> or <code>--test-rerun-failures</code>.</p>
<h3><code>--test-randomize</code></h3>
<p>Randomize test execution order. This applies to both test file execution order
and queued tests within each file. This can help detect tests that rely on
shared state or execution order.</p>
<p>The seed used for randomization is printed in the test summary and can be
reused with <code>--test-random-seed</code>.</p>
<p>For detailed behavior and examples, see
<a href="test.md#randomizing-tests-execution-order">randomizing tests execution order</a>.</p>
<p>This flag cannot be used with <code>--watch</code> or <code>--test-rerun-failures</code>.</p>
<h3><code>--test-reporter</code></h3>
<p>A test reporter to use when running tests. See the documentation on
<a href="test.md#test-reporters">test reporters</a> for more details.</p>
<h3><code>--test-reporter-destination</code></h3>
<p>The destination for the corresponding test reporter. See the documentation on
<a href="test.md#test-reporters">test reporters</a> for more details.</p>
<h3><code>--test-rerun-failures</code></h3>
<p>A path to a file allowing the test runner to persist the state of the test
suite between runs. The test runner will use this file to determine which tests
have already succeeded or failed, allowing for re-running of failed tests
without having to re-run the entire test suite. The test runner will create this
file if it does not exist.
See the documentation on <a href="test.md#rerunning-failed-tests">test reruns</a> for more details.</p>
<h3><code>--test-shard</code></h3>
<p>Test suite shard to execute in a format of <code>&lt;index&gt;/&lt;total&gt;</code>, where</p>
<ul>
<li><code>index</code> is a positive integer, index of divided parts.</li>
<li><code>total</code> is a positive integer, total of divided part.</li>
</ul>
<p>This command will divide all tests files into <code>total</code> equal parts,
and will run only those that happen to be in an <code>index</code> part.</p>
<p>For example, to split your tests suite into three parts, use this:</p>
<pre><code class="language-bash">node --test --test-shard=1/3
node --test --test-shard=2/3
node --test --test-shard=3/3
</code></pre>
<h3><code>--test-skip-pattern</code></h3>
<p>A regular expression that configures the test runner to skip tests
whose name matches the provided pattern. See the documentation on
<a href="test.md#filtering-tests-by-name">filtering tests by name</a> for more details.</p>
<p>If both <code>--test-name-pattern</code> and <code>--test-skip-pattern</code> are supplied,
tests must satisfy <strong>both</strong> requirements in order to be executed.</p>
<h3><code>--test-timeout</code></h3>
<p>A number of milliseconds the test execution will fail after. If unspecified,
subtests inherit this value from their parent. The default value is <code>Infinity</code>.</p>
<h3><code>--test-update-snapshots</code></h3>
<p>Regenerates the snapshot files used by the test runner for <a href="test.md#snapshot-testing">snapshot testing</a>.</p>
<h3><code>--throw-deprecation</code></h3>
<p>Throw errors for deprecations.</p>
<h3><code>--title=title</code></h3>
<p>Set <code>process.title</code> on startup.</p>
<h3><code>--tls-cipher-list=list</code></h3>
<p>Specify an alternative default TLS cipher list. Requires Node.js to be built
with crypto support (default).</p>
<h3><code>--tls-keylog=file</code></h3>
<p>Log TLS key material to a file. The key material is in NSS <code>SSLKEYLOGFILE</code>
format and can be used by software (such as Wireshark) to decrypt the TLS
traffic.</p>
<h3><code>--tls-max-v1.2</code></h3>
<p>Set <a href="tls.md#tlsdefault_max_version"><code>tls.DEFAULT_MAX_VERSION</code></a> to 'TLSv1.2'. Use to disable support for
TLSv1.3.</p>
<h3><code>--tls-max-v1.3</code></h3>
<p>Set default <a href="tls.md#tlsdefault_max_version"><code>tls.DEFAULT_MAX_VERSION</code></a> to 'TLSv1.3'. Use to enable support
for TLSv1.3.</p>
<h3><code>--tls-min-v1.0</code></h3>
<p>Set default <a href="tls.md#tlsdefault_min_version"><code>tls.DEFAULT_MIN_VERSION</code></a> to 'TLSv1'. Use for compatibility with
old TLS clients or servers.</p>
<h3><code>--tls-min-v1.1</code></h3>
<p>Set default <a href="tls.md#tlsdefault_min_version"><code>tls.DEFAULT_MIN_VERSION</code></a> to 'TLSv1.1'. Use for compatibility
with old TLS clients or servers.</p>
<h3><code>--tls-min-v1.2</code></h3>
<p>Set default <a href="tls.md#tlsdefault_min_version"><code>tls.DEFAULT_MIN_VERSION</code></a> to 'TLSv1.2'. This is the default for
12.x and later, but the option is supported for compatibility with older Node.js
versions.</p>
<h3><code>--tls-min-v1.3</code></h3>
<p>Set default <a href="tls.md#tlsdefault_min_version"><code>tls.DEFAULT_MIN_VERSION</code></a> to 'TLSv1.3'. Use to disable support
for TLSv1.2, which is not as secure as TLSv1.3.</p>
<h3><code>--trace-deprecation</code></h3>
<p>Print stack traces for deprecations.</p>
<h3><code>--trace-env</code></h3>
<p>Print information about any access to environment variables done in the current Node.js
instance to stderr, including:</p>
<ul>
<li>The environment variable reads that Node.js does internally.</li>
<li>Writes in the form of <code>process.env.KEY = &quot;SOME VALUE&quot;</code>.</li>
<li>Reads in the form of <code>process.env.KEY</code>.</li>
<li>Definitions in the form of <code>Object.defineProperty(process.env, 'KEY', {...})</code>.</li>
<li>Queries in the form of <code>Object.hasOwn(process.env, 'KEY')</code>,
<code>process.env.hasOwnProperty('KEY')</code> or <code>'KEY' in process.env</code>.</li>
<li>Deletions in the form of <code>delete process.env.KEY</code>.</li>
<li>Enumerations inf the form of <code>...process.env</code> or <code>Object.keys(process.env)</code>.</li>
</ul>
<p>Only the names of the environment variables being accessed are printed. The values are not printed.</p>
<p>To print the stack trace of the access, use <code>--trace-env-js-stack</code> and/or
<code>--trace-env-native-stack</code>.</p>
<h3><code>--trace-env-js-stack</code></h3>
<p>In addition to what <code>--trace-env</code> does, this prints the JavaScript stack trace of the access.</p>
<h3><code>--trace-env-native-stack</code></h3>
<p>In addition to what <code>--trace-env</code> does, this prints the native stack trace of the access.</p>
<h3><code>--trace-event-categories</code></h3>
<p>A comma separated list of categories that should be traced when trace event
tracing is enabled using <code>--trace-events-enabled</code>.</p>
<h3><code>--trace-event-file-pattern</code></h3>
<p>Template string specifying the filepath for the trace event data, it
supports <code>${rotation}</code> and <code>${pid}</code>.</p>
<h3><code>--trace-events-enabled</code></h3>
<p>Enables the collection of trace event tracing information.</p>
<h3><code>--trace-exit</code></h3>
<p>Prints a stack trace whenever an environment is exited proactively,
i.e. invoking <code>process.exit()</code>.</p>
<h3><code>--trace-require-module=mode</code></h3>
<p>Prints information about usage of <a href="modules.md#loading-ecmascript-modules-using-require">Loading ECMAScript modules using <code>require()</code></a>.</p>
<p>When <code>mode</code> is <code>all</code>, all usage is printed. When <code>mode</code> is <code>no-node-modules</code>, usage
from the <code>node_modules</code> folder is excluded.</p>
<h3><code>--trace-sigint</code></h3>
<p>Prints a stack trace on SIGINT.</p>
<h3><code>--trace-sync-io</code></h3>
<p>Prints a stack trace whenever synchronous I/O is detected after the first turn
of the event loop.</p>
<h3><code>--trace-tls</code></h3>
<p>Prints TLS packet trace information to <code>stderr</code>. This can be used to debug TLS
connection problems.</p>
<h3><code>--trace-uncaught</code></h3>
<p>Print stack traces for uncaught exceptions; usually, the stack trace associated
with the creation of an <code>Error</code> is printed, whereas this makes Node.js also
print the stack trace associated with throwing the value (which does not need
to be an <code>Error</code> instance).</p>
<p>Enabling this option may affect garbage collection behavior negatively.</p>
<h3><code>--trace-warnings</code></h3>
<p>Print stack traces for process warnings (including deprecations).</p>
<h3><code>--track-heap-objects</code></h3>
<p>Track heap object allocations for heap snapshots.</p>
<h3><code>--unhandled-rejections=mode</code></h3>
<p>Using this flag allows to change what should happen when an unhandled rejection
occurs. One of the following modes can be chosen:</p>
<ul>
<li><code>throw</code>: Emit <a href="process.md#event-unhandledrejection"><code>unhandledRejection</code></a>. If this hook is not set, raise the
unhandled rejection as an uncaught exception. This is the default.</li>
<li><code>strict</code>: Raise the unhandled rejection as an uncaught exception. If the
exception is handled, <a href="process.md#event-unhandledrejection"><code>unhandledRejection</code></a> is emitted.</li>
<li><code>warn</code>: Always trigger a warning, no matter if the <a href="process.md#event-unhandledrejection"><code>unhandledRejection</code></a>
hook is set or not but do not print the deprecation warning.</li>
<li><code>warn-with-error-code</code>: Emit <a href="process.md#event-unhandledrejection"><code>unhandledRejection</code></a>. If this hook is not
set, trigger a warning, and set the process exit code to 1.</li>
<li><code>none</code>: Silence all warnings.</li>
</ul>
<p>If a rejection happens during the command line entry point's ES module static
loading phase, it will always raise it as an uncaught exception.</p>
<h3><code>--use-bundled-ca</code>, <code>--use-openssl-ca</code></h3>
<p>Use bundled Mozilla CA store as supplied by current Node.js version
or use OpenSSL's default CA store. The default store is selectable
at build-time.</p>
<p>The bundled CA store, as supplied by Node.js, is a snapshot of Mozilla CA store
that is fixed at release time. It is identical on all supported platforms.</p>
<p>Using OpenSSL store allows for external modifications of the store. For most
Linux and BSD distributions, this store is maintained by the distribution
maintainers and system administrators. OpenSSL CA store location is dependent on
configuration of the OpenSSL library but this can be altered at runtime using
environment variables.</p>
<p>See <code>SSL_CERT_DIR</code> and <code>SSL_CERT_FILE</code>.</p>
<h3><code>--use-env-proxy</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>When enabled, Node.js parses the <code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code> and <code>NO_PROXY</code>
environment variables during startup, and routes requests through the
specified proxy.</p>
<p>Use this only with proxies that are trusted and authorized for the deployment.
Proxy support is intended for reaching external networks through authorized
proxy servers, for example when a firewall requires one. It is not for hiding
traffic or evading network policy. See <a href="http.md#built-in-proxy-support">Built-in Proxy Support</a>.</p>
<p>This is equivalent to setting the <a href="#node_use_env_proxy1"><code>NODE_USE_ENV_PROXY=1</code></a> environment variable.
When both are set, <code>--use-env-proxy</code> takes precedence.</p>
<h3><code>--use-largepages=mode</code></h3>
<p>This option is no longer supported and a no-op. It used to re-map the Node.js
static code to large memory pages at startup.</p>
<p>It still accepts the following values for compatibility:</p>
<ul>
<li><code>off</code>: No mapping will be attempted. This is the default.</li>
<li><code>on</code>: No mapping will be attempted and a message will be printed to
standard error stating it's no longer supported.</li>
<li><code>silent</code>: Same as <code>off</code>.</li>
</ul>
<h3><code>--use-system-ca</code></h3>
<p>Node.js uses the trusted CA certificates present in the system store along with
the <code>--use-bundled-ca</code> option and the <code>NODE_EXTRA_CA_CERTS</code> environment variable.
On platforms other than Windows and macOS, this loads certificates from the directory
and file trusted by OpenSSL, similar to <code>--use-openssl-ca</code>, with the difference being
that it caches the certificates after first load.</p>
<p>On Windows and macOS, the certificate trust policy is similar to
<a href="https://chromium.googlesource.com/chromium/src/+/main/net/data/ssl/chrome_root_store/faq.md#does-the-chrome-certificate-verifier-consider-local-trust-decisions">Chromium's policy for locally trusted certificates</a>, but with some differences:</p>
<p>On macOS, the following settings are respected:</p>
<ul>
<li>Default and System Keychains
<ul>
<li>Trust:
<ul>
<li>Any certificate where the “When using this certificate” flag is set to “Always Trust” or</li>
<li>Any certificate where the “Secure Sockets Layer (SSL)” flag is set to “Always Trust”.</li>
</ul>
</li>
<li>The certificate must also be valid, with &quot;X.509 Basic Policy&quot; set to  “Always Trust”.</li>
</ul>
</li>
</ul>
<p>On Windows, the following settings are respected:</p>
<ul>
<li>Local Machine (accessed via <code>certlm.msc</code>)
<ul>
<li>Trust:
<ul>
<li>Trusted Root Certification Authorities</li>
<li>Trusted People</li>
<li>Enterprise Trust -&gt; Enterprise -&gt; Trusted Root Certification Authorities</li>
<li>Enterprise Trust -&gt; Enterprise -&gt; Trusted People</li>
<li>Enterprise Trust -&gt; Group Policy -&gt; Trusted Root Certification Authorities</li>
<li>Enterprise Trust -&gt; Group Policy -&gt; Trusted People</li>
</ul>
</li>
</ul>
</li>
<li>Current User (accessed via <code>certmgr.msc</code>)
<ul>
<li>Trust:
<ul>
<li>Trusted Root Certification Authorities</li>
<li>Enterprise Trust -&gt; Group Policy -&gt; Trusted Root Certification Authorities</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>On Windows and macOS, Node.js would check that the user settings for the trusted
certificates do not forbid them for TLS server authentication before using them.</p>
<p>Node.js currently does not support distrust/revocation of certificates
from another source based on system settings.</p>
<p>On other systems, Node.js loads certificates from the default certificate file
(typically <code>/etc/ssl/cert.pem</code>) and default certificate directory (typically
<code>/etc/ssl/certs</code>) that the version of OpenSSL that Node.js links to respects.
This typically works with the convention on major Linux distributions and other
Unix-like systems. If the overriding OpenSSL environment variables
(typically <code>SSL_CERT_FILE</code> and <code>SSL_CERT_DIR</code>, depending on the configuration
of the OpenSSL that Node.js links to) are set, the specified paths will be used to load
certificates instead. These environment variables can be used as workarounds
if the conventional paths used by the version of OpenSSL Node.js links to are
not consistent with the system configuration that the users have for some reason.</p>
<h3><code>--v8-options</code></h3>
<p>Print V8 command-line options.</p>
<h3><code>--v8-pool-size=num</code></h3>
<p>Set V8's thread pool size which will be used to allocate background jobs.</p>
<p>If set to <code>0</code> then Node.js will choose an appropriate size of the thread pool
based on an estimate of the amount of parallelism.</p>
<p>The amount of parallelism refers to the number of computations that can be
carried out simultaneously in a given machine. In general, it's the same as the
amount of CPUs, but it may diverge in environments such as VMs or containers.</p>
<h3><code>-v</code>, <code>--version</code></h3>
<p>Print node's version.</p>
<h3><code>--vfs-load=source</code></h3>
<ul>
<li><code>source</code> {string} A directory or an archive file to mount and run.</li>
</ul>
<p>Requires <a href="#--experimental-vfs"><code>--experimental-vfs</code></a>. May be given at most once.</p>
<p>Mounts <code>source</code> as a virtual file system (<a href="vfs.md"><code>node:vfs</code></a>), and runs the entry
point and all subsequent <code>require()</code>/<code>import</code> resolution against that mount
rather than the real file system. The mount is placed at a reserved mount point
assigned by Node.js, so it never shadows real paths and no target can be
chosen. The entry point is taken from the mount the same way <code>node &lt;directory&gt;</code>
takes one: the mount's own <code>package.json</code> <code>&quot;main&quot;</code>, or <code>index.js</code>. Any
positional command-line argument is the program's own (available from
<code>process.argv[2]</code> onward), never an entry-point override.</p>
<p><code>process.argv[1]</code> reports <code>source</code> rather than the reserved mount point, since
the mount point is an opaque implementation detail.</p>
<p>The provider backing a source is chosen from the source itself rather than from
its file name:</p>
<ul>
<li>A directory is mounted with a <a href="vfs.md#class-realfsprovider"><code>RealFSProvider</code></a> rooted there.</li>
<li>A file whose bytes are a ZIP archive is mounted with a <a href="vfs.md#class-zipprovider"><code>ZipProvider</code></a>, so
an archive can carry any name.</li>
</ul>
<p>Providers registered with <code>vfs.registerProvider()</code> (typically from a module
preloaded with <a href="#-r---require-module"><code>--require</code></a> or <a href="#--importmodule"><code>--import</code></a>) are consulted first, in
reverse registration order, and may claim directories as well as files. If no
provider claims the source, Node.js exits with an error.</p>
<p>In worker threads <code>--vfs-load</code> mounts but does not load: a worker inherits the
mount and runs its own entry point, which may itself live in the mount.</p>
<p>The source is mounted at the same reserved mount point in every thread that
mounts it, whatever else that thread mounts, so a path into the mount means the
same thing in all of them.</p>
<p>A worker created with its own <code>execArgv</code> inherits none of the parent's options,
and so does not mount the source at all. To run a script from the mount, such a
worker must be given the same options again, <code>--experimental-vfs</code> and
<code>--vfs-load</code>; without them, that thread has no mount for the script to come
from, and the worker fails to load it. <code>--experimental-vfs</code> is also what makes
<a href="vfs.md"><code>node:vfs</code></a> available to the worker's own code. A worker whose script comes
from anywhere else, such as the real file system, needs nothing added.</p>
<p><code>--vfs-load</code> is not permitted in <a href="#node_optionsoptions"><code>NODE_OPTIONS</code></a>: which entry point runs is
the command line's decision, and the environment must not be able to redirect
it.</p>
<pre><code class="language-console">$ node --experimental-vfs --vfs-load=app.zip
</code></pre>
<h3><code>--watch</code></h3>
<p>Starts Node.js in watch mode.
When in watch mode, changes in the watched files cause the Node.js process to
restart.
By default, watch mode will watch the entry point
and any required or imported module.
Use <code>--watch-path</code> to specify what paths to watch.</p>
<p>This flag cannot be combined with
<code>--check</code>, <code>--eval</code>, <code>--interactive</code>, or the REPL.</p>
<p>Note: The <code>--watch</code> flag requires a file path as an argument and is incompatible
with <code>--run</code> or inline script input, as <code>--run</code> takes precedence and ignores watch
mode. If no file is provided, Node.js will exit with status code <code>9</code>.</p>
<pre><code class="language-bash">node --watch index.js
</code></pre>
<h3><code>--watch-kill-signal</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>Customizes the signal sent to the process on watch mode restarts.</p>
<pre><code class="language-bash">node --watch --watch-kill-signal SIGINT test.js
</code></pre>
<h3><code>--watch-path</code></h3>
<p>Starts Node.js in watch mode and specifies what paths to watch.
When in watch mode, changes in the watched paths cause the Node.js process to
restart.
This will turn off watching of required or imported modules, even when used in
combination with <code>--watch</code>.</p>
<p>This flag cannot be combined with
<code>--check</code>, <code>--eval</code>, <code>--interactive</code>, <code>--test</code>, or the REPL.</p>
<p>Note: Using <code>--watch-path</code> implicitly enables <code>--watch</code>, which requires a file path
and is incompatible with <code>--run</code>, as <code>--run</code> takes precedence and ignores watch mode.</p>
<pre><code class="language-bash">node --watch-path=./src --watch-path=./tests index.js
</code></pre>
<p>This option is only supported on macOS and Windows.
An <code>ERR_FEATURE_UNAVAILABLE_ON_PLATFORM</code> exception will be thrown
when the option is used on a platform that does not support it.</p>
<h3><code>--watch-preserve-output</code></h3>
<p>Disable the clearing of the console when watch mode restarts the process.</p>
<pre><code class="language-bash">node --watch --watch-preserve-output test.js
</code></pre>
<h3><code>--zero-fill-buffers</code></h3>
<p>Automatically zero-fills all newly allocated <a href="buffer.md#class-buffer"><code>Buffer</code></a> instances.</p>
<h2>Environment variables</h2>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<h3><code>FORCE_COLOR=[1, 2, 3]</code></h3>
<p>The <code>FORCE_COLOR</code> environment variable is used to
enable ANSI colorized output. The value may be:</p>
<ul>
<li><code>1</code>, <code>true</code>, or the empty string <code>''</code> indicate 16-color support,</li>
<li><code>2</code> to indicate 256-color support, or</li>
<li><code>3</code> to indicate 16 million-color support.</li>
</ul>
<p>When <code>FORCE_COLOR</code> is used and set to a supported value, both the <code>NO_COLOR</code>,
and <code>NODE_DISABLE_COLORS</code> environment variables are ignored.</p>
<p>Any other value will result in colorized output being disabled.</p>
<h3><code>NODE_COMPILE_CACHE=dir</code></h3>
<p>Enable the <a href="module.md#module-compile-cache">module compile cache</a> for the Node.js instance. See the documentation of
<a href="module.md#module-compile-cache">module compile cache</a> for details.</p>
<h3><code>NODE_COMPILE_CACHE_PORTABLE=1</code></h3>
<p>When set to 1, the <a href="module.md#module-compile-cache">module compile cache</a> can be reused across different directory
locations as long as the module layout relative to the cache directory remains the same,
and by any user (the cache subdirectory is not suffixed with the creating user's uid).</p>
<h3><code>NODE_COMPILE_CACHE_READONLY=1</code></h3>
<p>When set to 1, the <a href="module.md#module-compile-cache">module compile cache</a> only reads existing entries from
its directory: nothing is written to it and it is not created if missing.</p>
<h3><code>NODE_DEBUG=module[,…]</code></h3>
<p><code>','</code>-separated list of core modules that should print debug information.</p>
<h3><code>NODE_DEBUG_NATIVE=module[,…]</code></h3>
<p><code>','</code>-separated list of core C++ modules that should print debug information.</p>
<h3><code>NODE_DISABLE_COLORS=1</code></h3>
<p>When set, colors will not be used in the REPL.</p>
<h3><code>NODE_DISABLE_COMPILE_CACHE=1</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>Disable the <a href="module.md#module-compile-cache">module compile cache</a> for the Node.js instance. See the documentation of
<a href="module.md#module-compile-cache">module compile cache</a> for details.</p>
<h3><code>NODE_EXTRA_CA_CERTS=file</code></h3>
<p>When set, the well known &quot;root&quot; CAs (like VeriSign) will be extended with the
extra certificates in <code>file</code>. The file should consist of one or more trusted
certificates in PEM format. A message will be emitted (once) with
<a href="process.md#processemitwarningwarning-options"><code>process.emitWarning()</code></a> if the file is missing or
malformed, but any errors are otherwise ignored.</p>
<p>Neither the well known nor extra certificates are used when the <code>ca</code>
options property is explicitly specified for a TLS or HTTPS client or server.</p>
<p>This environment variable is ignored when <code>node</code> runs as setuid root or
has Linux file capabilities set.</p>
<p>The <code>NODE_EXTRA_CA_CERTS</code> environment variable is only read when the Node.js
process is first launched. Changing the value at runtime using
<code>process.env.NODE_EXTRA_CA_CERTS</code> has no effect on the current process.</p>
<h3><code>NODE_ICU_DATA=file</code></h3>
<p>Data path for ICU (<code>Intl</code> object) data. Will extend linked-in data when compiled
with small-icu support.</p>
<h3><code>NODE_NO_WARNINGS=1</code></h3>
<p>When set to <code>1</code>, process warnings are silenced.</p>
<h3><code>NODE_OPTIONS=options...</code></h3>
<p>A space-separated list of command-line options. <code>options...</code> are interpreted
before command-line options, so command-line options will override or
compound after anything in <code>options...</code>. Node.js will exit with an error if
an option that is not allowed in the environment is used, such as <code>-p</code> or a
script file.</p>
<p>If an option value contains a space, it can be escaped using double quotes:</p>
<pre><code class="language-bash">NODE_OPTIONS='--require &quot;./my path/file.js&quot;'
</code></pre>
<p>A singleton flag passed as a command-line option will override the same flag
passed into <code>NODE_OPTIONS</code>:</p>
<pre><code class="language-bash"># The inspector will be available on port 5555
NODE_OPTIONS='--inspect=localhost:4444' node --inspect=localhost:5555
</code></pre>
<p>A flag that can be passed multiple times will be treated as if its
<code>NODE_OPTIONS</code> instances were passed first, and then its command-line
instances afterwards:</p>
<pre><code class="language-bash">NODE_OPTIONS='--require &quot;./a.js&quot;' node --require &quot;./b.js&quot;
# is equivalent to:
node --require &quot;./a.js&quot; --require &quot;./b.js&quot;
</code></pre>
<p>Node.js options that are allowed are in the following list. If an option
supports both --XX and --no-XX variants, they are both supported but only
one is included in the list below.</p>
<ul>
<li><code>--allow-addons</code></li>
<li><code>--allow-child-process</code></li>
<li><code>--allow-env</code></li>
<li><code>--allow-ffi</code></li>
<li><code>--allow-fs-read</code></li>
<li><code>--allow-fs-vfs</code></li>
<li><code>--allow-fs-write</code></li>
<li><code>--allow-inspector</code></li>
<li><code>--allow-net</code></li>
<li><code>--allow-openssl-store</code></li>
<li><code>--allow-wasi</code></li>
<li><code>--allow-worker</code></li>
<li><code>--bench-isolation</code></li>
<li><code>--bench-name-pattern</code></li>
<li><code>--bench-reporter-destination</code></li>
<li><code>--bench-reporter</code></li>
<li><code>--bench-samples</code></li>
<li><code>--bench-warmup</code></li>
<li><code>--conditions</code>, <code>-C</code></li>
<li><code>--cpu-prof-dir</code></li>
<li><code>--cpu-prof-interval</code></li>
<li><code>--cpu-prof-name</code></li>
<li><code>--cpu-prof</code></li>
<li><code>--diagnostic-dir</code></li>
<li><code>--disable-proto</code></li>
<li><code>--disable-sigusr1</code></li>
<li><code>--disable-warning</code></li>
<li><code>--disable-wasm-trap-handler</code></li>
<li><code>--dns-result-order</code></li>
<li><code>--enable-fips-indicator-events</code></li>
<li><code>--enable-fips</code></li>
<li><code>--enable-network-family-autoselection</code></li>
<li><code>--enable-source-maps</code></li>
<li><code>--entry-url</code></li>
<li><code>--experimental-abortcontroller</code></li>
<li><code>--experimental-addon-modules</code></li>
<li><code>--experimental-bench</code></li>
<li><code>--experimental-detect-module</code></li>
<li><code>--experimental-dtls</code></li>
<li><code>--experimental-eventsource</code></li>
<li><code>--experimental-import-meta-resolve</code></li>
<li><code>--experimental-import-text</code></li>
<li><code>--experimental-json-modules</code></li>
<li><code>--experimental-loader</code></li>
<li><code>--experimental-modules</code></li>
<li><code>--experimental-package-map</code></li>
<li><code>--experimental-print-required-tla</code></li>
<li><code>--experimental-quic</code></li>
<li><code>--experimental-repl-await</code></li>
<li><code>--experimental-require-module</code></li>
<li><code>--experimental-shadow-realm</code></li>
<li><code>--experimental-specifier-resolution</code></li>
<li><code>--experimental-stream-iter</code></li>
<li><code>--experimental-test-isolation</code></li>
<li><code>--experimental-top-level-await</code></li>
<li><code>--experimental-vfs</code></li>
<li><code>--experimental-vm-modules</code></li>
<li><code>--experimental-wasi-unstable-preview1</code></li>
<li><code>--experimental-web-worker</code></li>
<li><code>--experimental-websocket</code></li>
<li><code>--force-context-aware</code></li>
<li><code>--force-fips</code></li>
<li><code>--force-node-api-uncaught-exceptions-policy</code></li>
<li><code>--frozen-intrinsics</code></li>
<li><code>--heap-prof-dir</code></li>
<li><code>--heap-prof-interval</code></li>
<li><code>--heap-prof-name</code></li>
<li><code>--heap-prof</code></li>
<li><code>--heapsnapshot-near-heap-limit</code></li>
<li><code>--heapsnapshot-signal</code></li>
<li><code>--http-parser</code></li>
<li><code>--icu-data-dir</code></li>
<li><code>--import</code></li>
<li><code>--input-type</code></li>
<li><code>--insecure-http-parser</code></li>
<li><code>--inspect-brk</code></li>
<li><code>--inspect-port</code>, <code>--debug-port</code></li>
<li><code>--inspect-publish-uid</code></li>
<li><code>--inspect-wait</code></li>
<li><code>--inspect</code></li>
<li><code>--localstorage-file</code></li>
<li><code>--max-http-header-size</code></li>
<li><code>--max-old-space-size-percentage</code></li>
<li><code>--network-family-autoselection-attempt-timeout</code></li>
<li><code>--no-addons</code></li>
<li><code>--no-deprecation</code></li>
<li><code>--no-experimental-ffi</code></li>
<li><code>--no-experimental-global-navigator</code></li>
<li><code>--no-experimental-sqlite</code></li>
<li><code>--no-experimental-strip-types</code></li>
<li><code>--no-experimental-webstorage</code></li>
<li><code>--no-extra-info-on-fatal-exception</code></li>
<li><code>--no-force-async-hooks-checks</code></li>
<li><code>--no-global-search-paths</code></li>
<li><code>--no-network-family-autoselection</code></li>
<li><code>--no-strip-types</code></li>
<li><code>--no-warnings</code></li>
<li><code>--no-webstorage</code></li>
<li><code>--no-worker-snapshot</code></li>
<li><code>--node-memory-debug</code></li>
<li><code>--openssl-config</code></li>
<li><code>--openssl-legacy-provider</code></li>
<li><code>--openssl-shared-config</code></li>
<li><code>--pending-deprecation</code></li>
<li><code>--permission-audit</code></li>
<li><code>--permission</code></li>
<li><code>--preserve-symlinks-main</code></li>
<li><code>--preserve-symlinks</code></li>
<li><code>--prof-process</code></li>
<li><code>--redirect-warnings</code></li>
<li><code>--report-compact</code></li>
<li><code>--report-dir</code>, <code>--report-directory</code></li>
<li><code>--report-exclude-env</code></li>
<li><code>--report-exclude-network</code></li>
<li><code>--report-filename</code></li>
<li><code>--report-on-fatalerror</code></li>
<li><code>--report-on-signal</code></li>
<li><code>--report-signal</code></li>
<li><code>--report-uncaught-exception</code></li>
<li><code>--require-module</code></li>
<li><code>--require</code>, <code>-r</code></li>
<li><code>--secure-heap-min</code></li>
<li><code>--secure-heap</code></li>
<li><code>--snapshot-blob</code></li>
<li><code>--test-coverage-branches</code></li>
<li><code>--test-coverage-exclude</code></li>
<li><code>--test-coverage-functions</code></li>
<li><code>--test-coverage-include-all</code></li>
<li><code>--test-coverage-include</code></li>
<li><code>--test-coverage-lines</code></li>
<li><code>--test-global-setup</code></li>
<li><code>--test-isolation</code></li>
<li><code>--test-name-pattern</code></li>
<li><code>--test-only</code></li>
<li><code>--test-random-seed</code></li>
<li><code>--test-randomize</code></li>
<li><code>--test-reporter-destination</code></li>
<li><code>--test-reporter</code></li>
<li><code>--test-rerun-failures</code></li>
<li><code>--test-shard</code></li>
<li><code>--test-skip-pattern</code></li>
<li><code>--throw-deprecation</code></li>
<li><code>--title</code></li>
<li><code>--tls-cipher-list</code></li>
<li><code>--tls-keylog</code></li>
<li><code>--tls-max-v1.2</code></li>
<li><code>--tls-max-v1.3</code></li>
<li><code>--tls-min-v1.0</code></li>
<li><code>--tls-min-v1.1</code></li>
<li><code>--tls-min-v1.2</code></li>
<li><code>--tls-min-v1.3</code></li>
<li><code>--trace-deprecation</code></li>
<li><code>--trace-env-js-stack</code></li>
<li><code>--trace-env-native-stack</code></li>
<li><code>--trace-env</code></li>
<li><code>--trace-event-categories</code></li>
<li><code>--trace-event-file-pattern</code></li>
<li><code>--trace-events-enabled</code></li>
<li><code>--trace-exit</code></li>
<li><code>--trace-require-module</code></li>
<li><code>--trace-sigint</code></li>
<li><code>--trace-sync-io</code></li>
<li><code>--trace-tls</code></li>
<li><code>--trace-uncaught</code></li>
<li><code>--trace-warnings</code></li>
<li><code>--track-heap-objects</code></li>
<li><code>--unhandled-rejections</code></li>
<li><code>--use-bundled-ca</code></li>
<li><code>--use-env-proxy</code></li>
<li><code>--use-largepages</code></li>
<li><code>--use-openssl-ca</code></li>
<li><code>--use-system-ca</code></li>
<li><code>--v8-pool-size</code></li>
<li><code>--watch-kill-signal</code></li>
<li><code>--watch-path</code></li>
<li><code>--watch-preserve-output</code></li>
<li><code>--watch</code></li>
<li><code>--zero-fill-buffers</code></li>
</ul>
<p>V8 options that are allowed are:</p>
<ul>
<li><code>--abort-on-uncaught-exception</code></li>
<li><code>--disallow-code-generation-from-strings</code></li>
<li><code>--enable-etw-stack-walking</code></li>
<li><code>--expose-gc</code></li>
<li><code>--interpreted-frames-native-stack</code></li>
<li><code>--jitless</code></li>
<li><code>--max-heap-size</code></li>
<li><code>--max-old-space-size</code></li>
<li><code>--max-semi-space-size</code></li>
<li><code>--perf-basic-prof-only-functions</code></li>
<li><code>--perf-basic-prof</code></li>
<li><code>--perf-prof-unwinding-info</code></li>
<li><code>--perf-prof</code></li>
<li><code>--stack-trace-limit</code></li>
</ul>
<p><code>--perf-basic-prof-only-functions</code>, <code>--perf-basic-prof</code>,
<code>--perf-prof-unwinding-info</code>, and <code>--perf-prof</code> are only available on Linux.</p>
<p><code>--enable-etw-stack-walking</code> is only available on Windows.</p>
<h3><code>NODE_PATH=path[:…]</code></h3>
<p><code>':'</code>-separated list of directories prefixed to the module search path.</p>
<p>On Windows, this is a <code>';'</code>-separated list instead.</p>
<h3><code>NODE_PENDING_DEPRECATION=1</code></h3>
<p>When set to <code>1</code>, emit pending deprecation warnings.</p>
<p>Pending deprecations are generally identical to a runtime deprecation with the
notable exception that they are turned <em>off</em> by default and will not be emitted
unless either the <code>--pending-deprecation</code> command-line flag, or the
<code>NODE_PENDING_DEPRECATION=1</code> environment variable, is set. Pending deprecations
are used to provide a kind of selective &quot;early warning&quot; mechanism that
developers may leverage to detect deprecated API usage.</p>
<h3><code>NODE_PENDING_PIPE_INSTANCES=instances</code></h3>
<p>Set the number of pending pipe instance handles when the pipe server is waiting
for connections. This setting applies to Windows only.</p>
<h3><code>NODE_PRESERVE_SYMLINKS=1</code></h3>
<p>When set to <code>1</code>, instructs the module loader to preserve symbolic links when
resolving and caching modules.</p>
<h3><code>NODE_REDIRECT_WARNINGS=file</code></h3>
<p>When set, process warnings will be emitted to the given file instead of
printing to stderr. The file will be created if it does not exist, and will be
appended to if it does. If an error occurs while attempting to write the
warning to the file, the warning will be written to stderr instead. This is
equivalent to using the <code>--redirect-warnings=file</code> command-line flag.</p>
<h3><code>NODE_REPL_EXTERNAL_MODULE=file</code></h3>
<p>Path to a Node.js module which will be loaded in place of the built-in REPL.
Overriding this value to an empty string (<code>''</code>) will use the built-in REPL.</p>
<h3><code>NODE_REPL_HISTORY=file</code></h3>
<p>Path to the file used to store the persistent REPL history. The default path is
<code>~/.node_repl_history</code>, which is overridden by this variable. Setting the value
to an empty string (<code>''</code> or <code>' '</code>) disables persistent REPL history.</p>
<h3><code>NODE_SKIP_PLATFORM_CHECK=value</code></h3>
<p>If <code>value</code> equals <code>'1'</code>, the check for a supported platform is skipped during
Node.js startup. Node.js might not execute correctly. Any issues encountered
on unsupported platforms will not be fixed.</p>
<h3><code>NODE_TEST_CONTEXT=value</code></h3>
<p>If <code>value</code> equals <code>'child'</code>, test reporter options will be overridden and test
output will be sent to stdout in the TAP format. If any other value is provided,
Node.js makes no guarantees about the reporter format used or its stability.</p>
<h3><code>NODE_TLS_REJECT_UNAUTHORIZED=value</code></h3>
<p>If <code>value</code> equals <code>'0'</code>, certificate validation is disabled for TLS connections.
This makes TLS, and HTTPS by extension, insecure. The use of this environment
variable is strongly discouraged.</p>
<h3><code>NODE_USE_ENV_PROXY=1</code></h3>
<blockquote>
<p>Stability: 1.1 - Active Development</p>
</blockquote>
<p>When enabled, Node.js parses the <code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code> and <code>NO_PROXY</code>
environment variables during startup, and routes requests through the
specified proxy.</p>
<p>Use this only with proxies that are trusted and authorized for the deployment.
Proxy support is intended for reaching external networks through authorized
proxy servers, for example when a firewall requires one. It is not for hiding
traffic or evading network policy. See <a href="http.md#built-in-proxy-support">Built-in Proxy Support</a>.</p>
<p>This can also be enabled using the <a href="#--use-env-proxy"><code>--use-env-proxy</code></a> command-line flag.
When both are set, <code>--use-env-proxy</code> takes precedence.</p>
<h3><code>NODE_USE_SYSTEM_CA=1</code></h3>
<p>Node.js uses the trusted CA certificates present in the system store along with
the <code>--use-bundled-ca</code> option and the <code>NODE_EXTRA_CA_CERTS</code> environment variable.</p>
<p>This can also be enabled using the <a href="#--use-system-ca"><code>--use-system-ca</code></a> command-line flag.
When both are set, <code>--use-system-ca</code> takes precedence.</p>
<h3><code>NODE_V8_COVERAGE=dir</code></h3>
<p>When set, Node.js will begin outputting <a href="https://v8project.blogspot.com/2017/12/javascript-code-coverage.html">V8 JavaScript code coverage</a> and
<a href="https://tc39.es/ecma426/">Source Map</a> data to the directory provided as an argument (coverage
information is written as JSON to files with a <code>coverage</code> prefix).</p>
<p><code>NODE_V8_COVERAGE</code> will automatically propagate to subprocesses, making it
easier to instrument applications that call the <code>child_process.spawn()</code> family
of functions. <code>NODE_V8_COVERAGE</code> can be set to an empty string, to prevent
propagation.</p>
<h4>Coverage output</h4>
<p>Coverage is output as an array of <a href="https://chromedevtools.github.io/devtools-protocol/tot/Profiler#type-ScriptCoverage">ScriptCoverage</a> objects on the top-level
key <code>result</code>:</p>
<pre><code class="language-json">{
  &quot;result&quot;: [
    {
      &quot;scriptId&quot;: &quot;67&quot;,
      &quot;url&quot;: &quot;internal/tty.js&quot;,
      &quot;functions&quot;: []
    }
  ]
}
</code></pre>
<h4>Source map cache</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>If found, source map data is appended to the top-level key <code>source-map-cache</code>
on the JSON coverage object.</p>
<p><code>source-map-cache</code> is an object with keys representing the files source maps
were extracted from, and values which include the raw source-map URL
(in the key <code>url</code>), the parsed Source Map v3 information (in the key <code>data</code>),
and the line lengths of the source file (in the key <code>lineLengths</code>).</p>
<pre><code class="language-json">{
  &quot;result&quot;: [
    {
      &quot;scriptId&quot;: &quot;68&quot;,
      &quot;url&quot;: &quot;file:///absolute/path/to/source.js&quot;,
      &quot;functions&quot;: []
    }
  ],
  &quot;source-map-cache&quot;: {
    &quot;file:///absolute/path/to/source.js&quot;: {
      &quot;url&quot;: &quot;./path-to-map.json&quot;,
      &quot;data&quot;: {
        &quot;version&quot;: 3,
        &quot;sources&quot;: [
          &quot;file:///absolute/path/to/original.js&quot;
        ],
        &quot;names&quot;: [
          &quot;Foo&quot;,
          &quot;console&quot;,
          &quot;info&quot;
        ],
        &quot;mappings&quot;: &quot;MAAMA,IACJC,YAAaC&quot;,
        &quot;sourceRoot&quot;: &quot;./&quot;
      },
      &quot;lineLengths&quot;: [
        13,
        62,
        38,
        27
      ]
    }
  }
}
</code></pre>
<h3><code>NO_COLOR=&lt;any&gt;</code></h3>
<p><a href="https://no-color.org"><code>NO_COLOR</code></a>  is an alias for <code>NODE_DISABLE_COLORS</code>. The value of the
environment variable is arbitrary.</p>
<h3><code>OPENSSL_CONF=file</code></h3>
<p>Load an OpenSSL configuration file on startup. The file can be used as part of
a <a href="crypto.md#fips-mode">FIPS mode</a> configuration.</p>
<p>If the variable is set to an empty value, Node.js starts without loading any
OpenSSL configuration file. This is a way past a default configuration file
that exists but cannot be read, for example when <code>/etc/ssl</code> is not accessible
to the user Node.js runs as, which is otherwise fatal at startup. No
configuration is applied in that case, including any <a href="crypto.md#fips-mode">FIPS mode</a> setup the
file would have performed.</p>
<p>If the <a href="#--openssl-configfile"><code>--openssl-config</code></a> command-line option is used, the environment
variable is ignored, and an empty value has no effect.</p>
<h3><code>SSL_CERT_DIR=dir</code></h3>
<p>If <code>--use-openssl-ca</code> is enabled, or if <code>--use-system-ca</code> is enabled on
platforms other than macOS and Windows, this overrides and sets OpenSSL's directory
containing trusted certificates.</p>
<p>Be aware that unless the child environment is explicitly set, this environment
variable will be inherited by any child processes, and if they use OpenSSL, it
may cause them to trust the same CAs as node.</p>
<h3><code>SSL_CERT_FILE=file</code></h3>
<p>If <code>--use-openssl-ca</code> is enabled, or if <code>--use-system-ca</code> is enabled on
platforms other than macOS and Windows, this overrides and sets OpenSSL's file
containing trusted certificates.</p>
<p>Be aware that unless the child environment is explicitly set, this environment
variable will be inherited by any child processes, and if they use OpenSSL, it
may cause them to trust the same CAs as node.</p>
<h3><code>TZ</code></h3>
<p>The <code>TZ</code> environment variable is used to specify the timezone configuration.</p>
<p>While Node.js does not support all of the various <a href="https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html">ways that <code>TZ</code> is handled in
other environments</a>, it does support basic <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">timezone IDs</a> (such as
<code>'Etc/UTC'</code>, <code>'Europe/Paris'</code>, or <code>'America/New_York'</code>).
It may support a few other abbreviations or aliases, but these are strongly
discouraged and not guaranteed.</p>
<pre><code class="language-console">$ TZ=Europe/Dublin node -pe &quot;new Date().toString()&quot;
Wed May 12 2021 20:30:48 GMT+0100 (Irish Standard Time)
</code></pre>
<h3><code>UV_THREADPOOL_SIZE=size</code></h3>
<p>Set the number of threads used in libuv's threadpool to <code>size</code> threads.</p>
<p>Asynchronous system APIs are used by Node.js whenever possible, but where they
do not exist, libuv's threadpool is used to create asynchronous node APIs based
on synchronous system APIs. Node.js APIs that use the threadpool are:</p>
<ul>
<li>all <code>fs</code> APIs, other than the file watcher APIs and those that are explicitly
synchronous</li>
<li>asynchronous crypto APIs such as <code>crypto.pbkdf2()</code>, <code>crypto.scrypt()</code>,
<code>crypto.randomBytes()</code>, <code>crypto.randomFill()</code>, <code>crypto.generateKeyPair()</code></li>
<li><code>dns.lookup()</code></li>
<li>all <code>zlib</code> APIs, other than those that are explicitly synchronous</li>
</ul>
<p>Because libuv's threadpool has a fixed size, it means that if for whatever
reason any of these APIs takes a long time, other (seemingly unrelated) APIs
that run in libuv's threadpool will experience degraded performance. In order to
mitigate this issue, one potential solution is to increase the size of libuv's
threadpool by setting the <code>'UV_THREADPOOL_SIZE'</code> environment variable to a value
greater than <code>4</code> (its current default value). However, setting this from inside
the process using <code>process.env.UV_THREADPOOL_SIZE=size</code> is not guaranteed to work
as the threadpool would have been created as part of the runtime initialisation
much before user code is run. For more information, see the <a href="https://docs.libuv.org/en/latest/threadpool.html">libuv threadpool documentation</a>.</p>
<h2>Useful V8 options</h2>
<p>V8 has its own set of CLI options. Any V8 CLI option that is provided to <code>node</code>
will be passed on to V8 to handle. V8's options have <em>no stability guarantee</em>.
The V8 team themselves don't consider them to be part of their formal API,
and reserve the right to change them at any time. Likewise, they are not
covered by the Node.js stability guarantees. Many of the V8
options are of interest only to V8 developers. Despite this, there is a small
set of V8 options that are widely applicable to Node.js, and they are
documented here:</p>
<h3><code>--abort-on-uncaught-exception</code></h3>
<h3><code>--disallow-code-generation-from-strings</code></h3>
<h3><code>--enable-etw-stack-walking</code></h3>
<h3><code>--expose-gc</code></h3>
<h3><code>--harmony-shadow-realm</code></h3>
<h3><code>--heap-snapshot-on-oom</code></h3>
<h3><code>--interpreted-frames-native-stack</code></h3>
<h3><code>--jitless</code></h3>
<h3><code>--max-heap-size</code></h3>
<p>Specifies the maximum heap size (in megabytes) for the process.</p>
<p>This option is typically used to limit the amount of memory the process can use for its JavaScript heap.</p>
<p>&lt;a id=&quot;--max-old-space-sizesize-in-megabytes&quot;&gt;&lt;/a&gt;</p>
<h3><code>--max-old-space-size=SIZE</code> (in MiB)</h3>
<p>Sets the max memory size of V8's old memory section. As memory
consumption approaches the limit, V8 will spend more time on
garbage collection in an effort to free unused memory.</p>
<p>On a machine with 2 GiB of memory, consider setting this to
1536 (1.5 GiB) to leave some memory for other uses and avoid swapping.</p>
<pre><code class="language-bash">node --max-old-space-size=1536 index.js
</code></pre>
<p>&lt;a id=&quot;--max-semi-space-sizesize-in-megabytes&quot;&gt;&lt;/a&gt;</p>
<h3><code>--max-semi-space-size=SIZE</code> (in MiB)</h3>
<p>Sets the maximum <a href="https://v8.dev/blog/trash-talk#minor-gc">semi-space</a> size for V8's <a href="https://v8.dev/blog/orinoco-parallel-scavenger">scavenge garbage collector</a> in
MiB (mebibytes).
Increasing the max size of a semi-space may improve throughput for Node.js at
the cost of more memory consumption.</p>
<p>Since the young generation size of the V8 heap is three times (see
<a href="https://chromium.googlesource.com/v8/v8.git/+/refs/tags/10.3.129/src/heap/heap.cc#328"><code>YoungGenerationSizeFromSemiSpaceSize</code></a> in V8) the size of the semi-space,
an increase of 1 MiB to semi-space applies to each of the three individual
semi-spaces and causes the heap size to increase by 3 MiB. The throughput
improvement depends on your workload (see <a href="https://github.com/nodejs/node/issues/42511">#42511</a>).</p>
<p>The default value depends on the memory limit. For example, on 64-bit systems
with a memory limit of 512 MiB, the max size of a semi-space defaults to 1 MiB.
For memory limits up to and including 2GiB, the default max size of a
semi-space will be less than 16 MiB on 64-bit systems.</p>
<p>To get the best configuration for your application, you should try different
max-semi-space-size values when running benchmarks for your application.</p>
<p>For example, benchmark on a 64-bit systems:</p>
<pre><code class="language-bash">for MiB in 16 32 64 128; do
    node --max-semi-space-size=$MiB index.js
done
</code></pre>
<h3><code>--perf-basic-prof</code></h3>
<h3><code>--perf-basic-prof-only-functions</code></h3>
<h3><code>--perf-prof</code></h3>
<h3><code>--perf-prof-unwinding-info</code></h3>
<h3><code>--prof</code></h3>
<h3><code>--security-revert</code></h3>
<h3><code>--stack-trace-limit=limit</code></h3>
<p>The maximum number of stack frames to collect in an error's stack trace.
Setting it to 0 disables stack trace collection. The default value is 10.</p>
<pre><code class="language-bash">node --stack-trace-limit=12 -p -e &quot;Error.stackTraceLimit&quot; # prints 12
</code></pre>
