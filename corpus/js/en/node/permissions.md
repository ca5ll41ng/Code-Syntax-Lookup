---
id: "js-en-function-node-permissions"
language: "js"
lang: "en"
category: "function"
name: "node:permissions"
title: "Permissions"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/permissions.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Permissions

<h1>Permissions</h1>
<p>Permissions can be used to control what system resources the
Node.js process has access to or what actions the process can take
with those resources.</p>
<ul>
<li><a href="#process-based-permissions">Process-based permissions</a> control the Node.js
process's access to resources.
The resource can be entirely allowed or denied, or actions related to it can
be controlled. For example, file system reads can be allowed while denying
writes.
This feature does not protect against malicious code. According to the Node.js
<a href="https://github.com/nodejs/node/blob/main/SECURITY.md">Security Policy</a>, Node.js trusts any code it is asked to run.</li>
</ul>
<p>The permission model implements a &quot;seat belt&quot; approach, which prevents trusted
code from unintentionally changing files or using resources that access has
not explicitly been granted to. It does not provide security guarantees in the
presence of malicious code. Malicious code can bypass the permission model and
execute arbitrary code without the restrictions imposed by the permission
model.</p>
<p>If you find a potential security vulnerability, please refer to our
<a href="https://github.com/nodejs/node/blob/main/SECURITY.md">Security Policy</a>.</p>
<h2>Process-based permissions</h2>
<h3>Permission Model</h3>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The Node.js Permission Model is a mechanism for restricting access to specific
resources during execution.
The API exists behind a flag <a href="cli.md#--permission"><code>--permission</code></a> which when enabled,
will restrict access to all available permissions.</p>
<p>The available permissions are documented by the <a href="cli.md#--permission"><code>--permission</code></a>
flag.</p>
<p>The Permission Model has two operational modes:</p>
<ul>
<li><strong>Enforce mode</strong> (default when using <a href="cli.md#--permission"><code>--permission</code></a>): Access is denied and
an <code>ERR_ACCESS_DENIED</code> error is thrown for any operation the process has not
been granted permission to perform.</li>
<li><strong>Audit mode</strong> (when using <a href="cli.md#--permission-audit"><code>--permission-audit</code></a>): Permission checks are
performed and violations are published through the diagnostics channel, but
access is <strong>not</strong> denied. Execution continues normally. This mode is useful
for discovering what permissions your application requires before deploying
with enforce mode.</li>
</ul>
<p>When starting Node.js with <code>--permission</code>,
the ability to access the file system through the <code>fs</code> module, access the network,
access environment variables, spawn processes, use <code>node:worker_threads</code>, use
native addons, use WASI, use FFI, and enable the runtime inspector will be
restricted (the listener for SIGUSR1 won't be created).</p>
<pre><code class="language-console">$ node --permission index.js

Error: Access to this API has been restricted
    at node:internal/main/run_main_module:23:47 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'FileSystemRead',
  resource: '/home/user/index.js'
}
</code></pre>
<p>Allowing access to spawning a process and creating worker threads can be done
using the <a href="cli.md#--allow-child-process"><code>--allow-child-process</code></a> and <a href="cli.md#--allow-worker"><code>--allow-worker</code></a> respectively.</p>
<p>To grant access to environment variables, use <a href="cli.md#--allow-env"><code>--allow-env</code></a>.</p>
<p>To allow network access, use <a href="cli.md#--allow-net"><code>--allow-net</code></a> and for allowing native addons
when using permission model, use the <a href="cli.md#--allow-addons"><code>--allow-addons</code></a>
flag. For WASI, use the <a href="cli.md#--allow-wasi"><code>--allow-wasi</code></a> flag. For FFI, use the
<a href="cli.md#--allow-ffi"><code>--allow-ffi</code></a> flag. The <a href="ffi.md"><code>node:ffi</code></a> module is only available in
builds with FFI support.</p>
<p>To allow use of OpenSSL STORE loaders, for example to load a private key
from a {URL} passed to <a href="crypto.md#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>, use the
<a href="cli.md#--allow-openssl-store"><code>--allow-openssl-store</code></a> flag.
This flag grants broad authority to configured OpenSSL STORE loaders, which may
access files, devices, tokens, or the network. Access performed by a loader is
not constrained by the <code>fs.read</code>, <code>fs.write</code>, or <code>net</code> permission scopes.</p>
<h4>Runtime API</h4>
<p>When enabling the Permission Model through the <a href="cli.md#--permission"><code>--permission</code></a>
or <a href="cli.md#--permission-audit"><code>--permission-audit</code></a> flags, a new property <code>permission</code> is added to the
<code>process</code> object. This property contains the following functions:</p>
<h5><code>permission.has(scope[, reference])</code></h5>
<p>API call to check permissions at runtime (<a href="process.md#processpermissionhasscope-reference"><code>permission.has()</code></a>)</p>
<pre><code class="language-js">process.permission.has('fs.write'); // true
process.permission.has('fs.write', '/home/rafaelgss/protected-folder'); // true

process.permission.has('fs.read'); // true
process.permission.has('fs.read', '/home/rafaelgss/protected-folder'); // false
</code></pre>
<h5><code>permission.drop(scope[, reference])</code></h5>
<p>API call to drop permissions at runtime. This operation is <strong>irreversible</strong>.</p>
<p>When called without a reference, the entire scope is dropped. When called
with a reference, only the permission for that specific resource is revoked.
Dropping a permission only affects future access checks. It does not close or
revoke access to resources that are already open, such as file descriptors,
network sockets, child processes, or worker threads. Applications are
responsible for closing or terminating those resources when they are no longer
needed.</p>
<p>You can only drop the exact resource that was explicitly granted. The
reference passed to <code>drop()</code> must match the original grant. If a permission
was granted using a wildcard (<code>*</code>), only the entire scope can be dropped
(by calling <code>drop()</code> without a reference). If a directory was granted
(e.g. <code>--allow-fs-read=/my/folder</code>), you cannot drop individual files
inside it - you must drop the same directory that was originally granted.</p>
<pre><code class="language-js">const fs = require('node:fs');

// Read config at startup while we still have permission
const config = fs.readFileSync('/etc/myapp/config.json', 'utf8');

// Drop read access to /etc/myapp after initialization
process.permission.drop('fs.read', '/etc/myapp');

// This will now return false
process.permission.has('fs.read', '/etc/myapp/config.json'); // false

// Drop child process permission entirely
process.permission.drop('child');
</code></pre>
<h4>Audit Mode</h4>
<p>The <a href="cli.md#--permission-audit"><code>--permission-audit</code></a> flag enables audit mode for the Permission Model.
In audit mode, permission checks are performed but access is <strong>not</strong> denied —
no <code>ERR_ACCESS_DENIED</code> error is thrown. Instead, each permission violation is
published through the <code>node:diagnostics_channel</code> module, allowing the
application to observe and log which operations would be denied under enforce
mode. Execution continues normally.</p>
<p>Audit mode is useful for discovering what permissions your application
requires before deploying with <a href="cli.md#--permission"><code>--permission</code></a>. It can also be combined
with the <a href="cli.md#--allow-fs-read"><code>--allow-fs-read</code></a>, <a href="cli.md#--allow-fs-write"><code>--allow-fs-write</code></a>, <a href="cli.md#--allow-net"><code>--allow-net</code></a>,
<a href="cli.md#--allow-env"><code>--allow-env</code></a>, <a href="cli.md#--allow-child-process"><code>--allow-child-process</code></a>, <a href="cli.md#--allow-worker"><code>--allow-worker</code></a>,
<a href="cli.md#--allow-addons"><code>--allow-addons</code></a>, <a href="cli.md#--allow-wasi"><code>--allow-wasi</code></a>, and <a href="cli.md#--allow-ffi"><code>--allow-ffi</code></a> flags to audit
a subset of permissions while granting others.</p>
<p>When a permission check fails in audit mode, a message is published to the
diagnostics channel corresponding to the denied scope. The channel names are:</p>
<ul>
<li><code>node:permission-model:fs</code> — File System (read and write)</li>
<li><code>node:permission-model:net</code> — Network</li>
<li><code>node:permission-model:child</code> — Child Process</li>
<li><code>node:permission-model:worker</code> — Worker Threads</li>
<li><code>node:permission-model:inspector</code> — Inspector</li>
<li><code>node:permission-model:wasi</code> — WASI</li>
<li><code>node:permission-model:addon</code> — Native Addons</li>
<li><code>node:permission-model:ffi</code> — FFI</li>
<li><code>node:permission-model:env</code> — Environment variables</li>
</ul>
<p>Each message is an object with the following properties:</p>
<ul>
<li><code>permission</code> {string} The name of the denied permission scope.</li>
<li><code>resource</code> {string} The resource that access was denied to (e.g. a file path
or host).</li>
</ul>
<pre><code class="language-js">const diagnostics_channel = require('node:diagnostics_channel');

diagnostics_channel.channel('node:permission-model:fs').subscribe((msg) =&gt; {
  console.log(`Permission denied: ${msg.permission} on ${msg.resource}`);
});

// Running with --permission-audit, this publishes a diagnostics channel
// message but does not throw
const fs = require('node:fs');
fs.readFileSync('/etc/passwd');
</code></pre>
<p>If both <a href="cli.md#--permission"><code>--permission</code></a> and <a href="cli.md#--permission-audit"><code>--permission-audit</code></a> are specified,
<code>--permission</code> takes precedence and the Permission Model runs in enforce mode.</p>
<h4>File System Permissions</h4>
<p>The Permission Model, by default, restricts access to the file system through the <code>node:fs</code> module.
It does not guarantee that users will not be able to access the file system through other means,
such as through the <code>node:sqlite</code> module.</p>
<p>To allow access to the file system, use the <a href="cli.md#--allow-fs-read"><code>--allow-fs-read</code></a> and
<a href="cli.md#--allow-fs-write"><code>--allow-fs-write</code></a> flags:</p>
<pre><code class="language-console">$ node --permission --allow-fs-read=* --allow-fs-write=* index.js
Hello world!
</code></pre>
<p>By default the entrypoints of your application are included
in the allowed file system read list. For example:</p>
<pre><code class="language-console">$ node --permission index.js
</code></pre>
<ul>
<li><code>index.js</code> will be included in the allowed file system read list</li>
</ul>
<pre><code class="language-console">$ node -r /path/to/custom-require.js --permission index.js
</code></pre>
<ul>
<li><code>/path/to/custom-require.js</code> will be included in the allowed file system read
list.</li>
<li><code>index.js</code> will be included in the allowed file system read list.</li>
</ul>
<p>The valid arguments for both flags are:</p>
<ul>
<li><code>*</code> - To allow all <code>FileSystemRead</code> or <code>FileSystemWrite</code> operations,
respectively.</li>
<li>Relative paths to the current working directory.</li>
<li>Absolute paths.</li>
</ul>
<p>Example:</p>
<ul>
<li><code>--allow-fs-read=*</code> - It will allow all <code>FileSystemRead</code> operations.</li>
<li><code>--allow-fs-write=*</code> - It will allow all <code>FileSystemWrite</code> operations.</li>
<li><code>--allow-fs-write=/tmp/</code> - It will allow <code>FileSystemWrite</code> access to the <code>/tmp/</code>
folder.</li>
<li><code>--allow-fs-read=/tmp/ --allow-fs-read=/home/.gitignore</code> - It allows <code>FileSystemRead</code> access
to the <code>/tmp/</code> folder <strong>and</strong> the <code>/home/.gitignore</code> path.</li>
</ul>
<p>Wildcards are supported too:</p>
<ul>
<li><code>--allow-fs-read=/home/test*</code> will allow read access to everything
that matches the wildcard. e.g: <code>/home/test/file1</code> or <code>/home/test2</code></li>
</ul>
<p>After passing a wildcard character (<code>*</code>) all subsequent characters will
be ignored. For example: <code>/home/*.js</code> will work similar to <code>/home/*</code>.</p>
<p>When the permission model is initialized, it will automatically add a wildcard
(*) if the specified directory exists. For example, if <code>/home/test/files</code>
exists, it will be treated as <code>/home/test/files/*</code>. However, if the directory
does not exist, the wildcard will not be added, and access will be limited to
<code>/home/test/files</code>. If you want to allow access to a folder that does not exist
yet, make sure to explicitly include the wildcard:
<code>/my-path/folder-do-not-exist/*</code>.</p>
<p>Some <code>node:fs</code> operations act on an already-open file descriptor rather than a
path, so they cannot be tied to a <code>--allow-fs-read</code> or <code>--allow-fs-write</code> grant.
When the permission model is enabled these operations are disabled and throw
<code>ERR_ACCESS_DENIED</code>, regardless of how the descriptor was obtained. This applies
both to the top-level <code>node:fs</code> functions and to the equivalent
<code>FileHandle</code> methods, and currently includes <code>fsync</code>/<code>fdatasync</code>,
<code>fchmod</code>, and <code>fchown</code> (and their synchronous variants).</p>
<h4>Environment variable permissions</h4>
<p>When the Permission Model is enforced, the process only has access to the
environment variables that <a href="cli.md#--allow-env"><code>--allow-env</code></a> grants access to.</p>
<p>Instead of checking each access, Node.js removes every other variable from the
process environment at startup, before any JavaScript code runs and before
Node.js starts any other thread. Removed variables are absent from everything
that exposes the environment of the process: <code>process.env</code>, diagnostic reports,
native code calling <code>getenv()</code>, worker threads, and the environment inherited by
child processes.</p>
<pre><code class="language-console">$ node --permission --allow-env=PORT --allow-env=APP_* index.js
</code></pre>
<p>The valid arguments for the flag are:</p>
<ul>
<li><code>*</code> - Grants access to every environment variable. Nothing is removed.</li>
<li>A variable name, such as <code>PORT</code>.</li>
<li>A variable name prefix followed by <code>*</code>, such as <code>APP_*</code>.</li>
</ul>
<p>Some variables are always kept:</p>
<ul>
<li>The variables that Node.js and its bundled dependencies read after startup,
such as <code>NODE_OPTIONS</code>, <code>NODE_EXTRA_CA_CERTS</code>, <code>PATH</code>, <code>HOME</code>, <code>TMPDIR</code>, <code>TZ</code>,
<code>LANG</code>, <code>SSL_CERT_FILE</code>, and the variables that terminal color detection
reads. Other variables whose names start with <code>NODE_</code>, such as
<code>NODE_AUTH_TOKEN</code>, are not kept.</li>
<li>The variables defined in the files passed to <a href="cli.md#--env-filefile"><code>--env-file</code></a> and
<a href="cli.md#--env-file-if-existsfile"><code>--env-file-if-exists</code></a>. If a variable is defined in such a file and also
inherited from the parent process, and <code>--allow-env</code> does not grant access to
it, the inherited value is removed and the value from the file is used.</li>
</ul>
<p><code>NODE_ENV</code> is not kept either. Node.js does not read it, but many applications
and libraries do, and treat it being unset as a development environment. Grant
access to it explicitly:</p>
<pre><code class="language-console">$ node --permission --allow-env=NODE_ENV index.js
</code></pre>
<p>Proxy URLs often contain credentials, so the <code>HTTP_PROXY</code>, <code>HTTPS_PROXY</code>, and
<code>NO_PROXY</code> variables, and their lowercase forms, are not kept. Grant access to
them explicitly when using <a href="cli.md#--use-env-proxy"><code>--use-env-proxy</code></a>. When <code>--use-env-proxy</code> is
enabled and any of them were removed at startup, a warning naming them is
emitted.</p>
<p>Native code that Node.js loads on behalf of the application, such as addons,
OpenSSL providers and STORE loaders, and the libraries they load in turn, sees
the same reduced environment. Only the variables that OpenSSL itself reads are
kept, not those read by third-party modules it loads. For example, a PKCS#11
provider backed by SoftHSM needs <code>SOFTHSM2_CONF</code> to find its token, and fails to
initialize without it. Grant access to such variables explicitly:</p>
<pre><code class="language-console">$ node --permission --allow-openssl-store --allow-env=SOFTHSM2_CONF index.js
</code></pre>
<p>Reading a variable that was removed at startup returns <code>undefined</code>, emits a
warning the first time, and publishes a message to the
<code>node:permission-model:env</code> diagnostics channel.</p>
<p>Variables set at runtime, for example with <code>process.env.KEY = 'value'</code> or
<a href="process.md#processloadenvfilepath"><code>process.loadEnvFile()</code></a>, are not restricted, as they cannot reveal what was
removed.</p>
<p>Dropping a variable with <a href="process.md#processpermissiondropscope-reference"><code>permission.drop()</code></a> removes it from the
environment. Dropping the whole <code>env</code> scope removes every variable except the
ones Node.js reads itself. This makes it possible to read a secret during
initialization, and then remove it:</p>
<pre><code class="language-js">const databaseUrl = process.env.DATABASE_URL;
process.permission.drop('env', 'DATABASE_URL');
</code></pre>
<p>When a process that enforces the Permission Model spawns a child process, the
child is started with <code>--allow-env=*</code>: the environment it inherits only contains
variables that the parent had access to. The child can still read its own
<code>/proc/&lt;pid&gt;/environ</code> on Linux, but not that of any other process, see below.</p>
<p>In audit mode, nothing is removed. Accesses to variables that <code>--allow-env</code>
does not grant access to are published to the <code>node:permission-model:env</code>
diagnostics channel instead.</p>
<p>On Linux, <code>/proc/&lt;pid&gt;/environ</code> exposes the environment a process was started
with. When the Permission Model is enforced, reading the <code>/proc/&lt;pid&gt;/environ</code>
file of any other process, including the parent process and its ancestors, is
denied regardless of <a href="cli.md#--allow-fs-read"><code>--allow-fs-read</code></a>. Reading the process's own file is
only allowed with <code>--allow-env=*</code>. Symbolic links are resolved before the
check, so paths that reach these files indirectly, such as
<code>/dev/fd/../environ</code>, are denied as well.</p>
<p>In addition, the removed variables are overwritten in the initial environment
block of the process, so that other processes do not find them in its
<code>/proc/&lt;pid&gt;/environ</code> either. Variables removed later with
<a href="process.md#processpermissiondropscope-reference"><code>permission.drop()</code></a> are overwritten there as well.</p>
<p>These measures do not change the environment of other processes. A process
granted <a href="cli.md#--allow-child-process"><code>--allow-child-process</code></a> can read their environment through other
programs.</p>
<h4>Configuration file support</h4>
<p>In addition to passing permission flags on the command line, they can also be
declared in a Node.js configuration file when using the <a href="cli.md#--config-filepath---config-file"><code>--config-file</code></a>
flag. Permission options must be placed inside the <code>permission</code> top-level
object.</p>
<p>Example <code>node.config.json</code>:</p>
<pre><code class="language-json">{
  &quot;permission&quot;: {
    &quot;allow-fs-read&quot;: [&quot;./foo&quot;],
    &quot;allow-fs-write&quot;: [&quot;./bar&quot;],
    &quot;allow-child-process&quot;: true,
    &quot;allow-worker&quot;: true,
    &quot;allow-net&quot;: true,
    &quot;allow-addons&quot;: false,
    &quot;allow-ffi&quot;: false,
    &quot;allow-openssl-store&quot;: false
  }
}
</code></pre>
<p>When the <code>permission</code> namespace is present in the configuration file, Node.js
automatically enables the <code>--permission</code> flag. Run with:</p>
<pre><code class="language-console">$ node --config-file app.js
</code></pre>
<p>A configuration file, like the <code>NODE_OPTIONS</code> defined in an <a href="cli.md#--env-filefile"><code>--env-file</code></a>
file, may be controlled by the project being run rather than by whoever starts
Node.js. When the command line or the <code>NODE_OPTIONS</code> environment variable
enable the Permission Model, the <code>allow-env</code> values these files define can only
narrow the access that <a href="cli.md#--allow-env"><code>--allow-env</code></a> grants, and never widen it:</p>
<pre><code class="language-console">$ node --permission --allow-env=APP_* --config-file=node.config.json app.js
</code></pre>
<p>With <code>&quot;allow-env&quot;: [&quot;*&quot;]</code> in <code>node.config.json</code>, only the variables starting with
<code>APP_</code> are kept. With <code>&quot;allow-env&quot;: [&quot;APP_DATABASE_URL&quot;, &quot;OTHER&quot;]</code>, only
<code>APP_DATABASE_URL</code> is.</p>
<h4>Using the Permission Model with <code>npx</code></h4>
<p>If you're using <a href="https://docs.npmjs.com/cli/commands/npx"><code>npx</code></a> to execute a Node.js script, you can enable the
Permission Model by passing the <code>--node-options</code> flag. For example:</p>
<pre><code class="language-bash">npx --node-options=&quot;--permission&quot; package-name
</code></pre>
<p>This sets the <code>NODE_OPTIONS</code> environment variable for all Node.js processes
spawned by <a href="https://docs.npmjs.com/cli/commands/npx"><code>npx</code></a>, without affecting the <code>npx</code> process itself.</p>
<p><strong>FileSystemRead Error with <code>npx</code></strong></p>
<p>The above command will likely throw a <code>FileSystemRead</code> invalid access error
because Node.js requires file system read access to locate and execute the
package. To avoid this:</p>
<ol>
<li>
<p><strong>Using a Globally Installed Package</strong>
Grant read access to the global <code>node_modules</code> directory by running:</p>
<pre><code class="language-bash">npx --node-options=&quot;--permission --allow-fs-read=$(npm prefix -g)&quot; package-name
</code></pre>
</li>
<li>
<p><strong>Using the <code>npx</code> Cache</strong>
If you are installing the package temporarily or relying on the <code>npx</code> cache,
grant read access to the npm cache directory:</p>
<pre><code class="language-bash">npx --node-options=&quot;--permission --allow-fs-read=$(npm config get cache)&quot; package-name
</code></pre>
</li>
</ol>
<p>Any arguments you would normally pass to <code>node</code> (e.g., <code>--allow-*</code> flags) can
also be passed through the <code>--node-options</code> flag. This flexibility makes it
easy to configure permissions as needed when using <code>npx</code>.</p>
<h4>Permission Model constraints</h4>
<p>There are constraints you need to know before using this system:</p>
<ul>
<li>The model does not inherit to a worker thread. A default
<code>worker_threads.Worker</code> (no <code>execArgv</code> option) still receives the parent
process CLI flags, including <code>--permission</code> and <code>--allow-*</code> if those were
passed to the parent. Setting <code>execArgv</code> explicitly, including
<code>execArgv: []</code>, replaces the inherited flags. The worker then does not keep
the parent's Permission Model grants unless those flags are listed again in
<code>execArgv</code>. That difference is intended, not a bypass.</li>
<li>When using the Permission Model the following features will be restricted:
<ul>
<li>Native modules</li>
<li>Network</li>
<li>Environment variables</li>
<li>Child process</li>
<li>Worker Threads</li>
<li>Inspector protocol</li>
<li>File system access</li>
<li>WASI</li>
<li>FFI</li>
<li>OpenSSL STORE loaders</li>
</ul>
</li>
<li>The Permission Model is initialized after the Node.js environment is set up.
However, certain flags such as <code>--env-file</code> or <code>--openssl-config</code> are designed
to read files before environment initialization. As a result, such flags are
not subject to the rules of the Permission Model. The same applies for V8
flags that can be set via runtime through <code>v8.setFlagsFromString</code>.</li>
<li>Files that Node.js itself creates, writes, or reads at a location selected
by an operator flag may not be consistently checked against the Permission
Model, in particular when the flag accepts a template or pattern that
expands to several paths. For example, trace files rotated by
<code>--trace-event-file-pattern</code> (<code>${rotation}</code>) can be written even when the
expanded path is not covered by <code>--allow-fs-write</code>. Because the location is
chosen by the operator, gaps like this are treated as regular bugs rather
than vulnerabilities. Please report them through the regular issue tracker.</li>
<li>OpenSSL engines cannot be requested at runtime when the Permission
Model is enabled, affecting the built-in crypto, https, and tls modules.</li>
<li>Run-Time Loadable Extensions cannot be loaded when the Permission Model is
enabled, affecting the sqlite module.</li>
<li>Using existing file descriptors via the <code>node:fs</code> module bypasses the
Permission Model.</li>
</ul>
<h4>process._debugProcess() and cross-process Inspector activation</h4>
<p>The <code>kInspector</code> permission scope restricts the current process from opening its own V8 Inspector. However,
process._debugProcess(pid) — which sends an OS-level signal (SIGUSR1 on POSIX, a remote thread on Windows)
to an external process — is not gated by the <code>kInspector</code> scope or any other Permission Model scope.</p>
<p>A sandboxed process running under --permission with no additional grants can call process._debugProcess(pid)
to force another Node.js process to open its V8 Inspector. The target process does not need to be running
under --permission for this to work — any Node.js process running on the same host under the same OS user
can be signaled.</p>
<p>This is consistent with the Node.js threat model: Node.js trusts the OS environment in which it runs.
Cross-process signaling is an operating-system-level capability; restricting it is the responsibility of
the operator (for example, using OS-level process isolation, separate OS users per process, or
seccomp/AppArmor profiles on Linux).</p>
<p>Developers relying on --permission to sandbox untrusted code should be aware that:</p>
<ul>
<li>process._debugProcess() is callable from any sandboxed process with no grants.</li>
<li>If a target Node.js process is running on the same host under the same OS user, it can be forced to
open its Inspector via this API.</li>
<li>To prevent this, run sandboxed and target processes under different OS users, or use OS-level isolation
mechanisms outside of Node.js.</li>
</ul>
<h4>Limitations and Known Issues</h4>
<ul>
<li>Symbolic links will be followed even to locations outside of the set of paths
that access has been granted to. Relative symbolic links may allow access to
arbitrary files and directories. When starting applications with the
permission model enabled, you must ensure that no paths to which access has
been granted contain relative symbolic links.</li>
</ul>
