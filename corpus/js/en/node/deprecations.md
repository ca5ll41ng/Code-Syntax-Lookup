---
id: "js-en-function-node-deprecations"
language: "js"
lang: "en"
category: "function"
name: "node:deprecations"
title: "Deprecated APIs"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/deprecations.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Deprecated APIs

<h1>Deprecated APIs</h1>
<p>Node.js APIs might be deprecated for any of the following reasons:</p>
<ul>
<li>Use of the API is unsafe.</li>
<li>An improved alternative API is available.</li>
<li>Breaking changes to the API are expected in a future major release.</li>
</ul>
<p>Node.js uses four kinds of deprecations:</p>
<ul>
<li>Documentation-only</li>
<li>Application (non-<code>node_modules</code> code only)</li>
<li>Runtime (all code)</li>
<li>End-of-Life</li>
</ul>
<p>A Documentation-only deprecation is one that is expressed only within the
Node.js API docs. These generate no side-effects while running Node.js.
Some Documentation-only deprecations trigger a runtime warning when launched
with <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a> flag (or its alternative,
<code>NODE_PENDING_DEPRECATION=1</code> environment variable), similarly to Runtime
deprecations below. Documentation-only deprecations that support that flag
are explicitly labeled as such in the
<a href="#list-of-deprecated-apis">list of Deprecated APIs</a>.</p>
<p>An Application deprecation for only non-<code>node_modules</code> code will, by default,
generate a process warning that will be printed to <code>stderr</code> the first time
the deprecated API is used in code that's not loaded from <code>node_modules</code>.
When the <a href="cli.md#--throw-deprecation"><code>--throw-deprecation</code></a> command-line flag is used, a Runtime
deprecation will cause an error to be thrown. When
<a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a> is used, warnings will also be emitted for
code loaded from <code>node_modules</code>.</p>
<p>A runtime deprecation for all code is similar to the runtime deprecation
for non-<code>node_modules</code> code, except that it also emits a warning for
code loaded from <code>node_modules</code>.</p>
<p>An End-of-Life deprecation is used when functionality is or will soon be removed
from Node.js.</p>
<h2>Revoking deprecations</h2>
<p>Occasionally, the deprecation of an API might be reversed. In such situations,
this document will be updated with information relevant to the decision.
However, the deprecation identifier will not be modified.</p>
<h2>List of deprecated APIs</h2>
<h3>DEP0001: <code>http.OutgoingMessage.prototype.flush</code></h3>
<p>Type: End-of-Life</p>
<p><code>OutgoingMessage.prototype.flush()</code> has been removed. Use
<code>OutgoingMessage.prototype.flushHeaders()</code> instead.</p>
<h3>DEP0002: <code>require('_linklist')</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>_linklist</code> module is deprecated. Please use a userland alternative.</p>
<h3>DEP0003: <code>_writableState.buffer</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>_writableState.buffer</code> has been removed. Use <code>_writableState.getBuffer()</code>
instead.</p>
<h3>DEP0004: <code>CryptoStream.prototype.readyState</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>CryptoStream.prototype.readyState</code> property was removed.</p>
<h3>DEP0005: <code>Buffer()</code> constructor</h3>
<p>Type: Application (non-<code>node_modules</code> code only)</p>
<p>The <code>Buffer()</code> function and <code>new Buffer()</code> constructor are deprecated due to
API usability issues that can lead to accidental security issues.</p>
<p>As an alternative, use one of the following methods of constructing <code>Buffer</code>
objects:</p>
<ul>
<li><a href="buffer.md#static-method-bufferallocsize-fill-encoding"><code>Buffer.alloc(size[, fill[, encoding]])</code></a>: Create a <code>Buffer</code> with
<em>initialized</em> memory.</li>
<li><a href="buffer.md#static-method-bufferallocunsafesize-alignment"><code>Buffer.allocUnsafe(size)</code></a>: Create a <code>Buffer</code> with
<em>uninitialized</em> memory.</li>
<li><a href="buffer.md#static-method-bufferallocunsafeslowsize-alignment"><code>Buffer.allocUnsafeSlow(size)</code></a>: Create a <code>Buffer</code> with <em>uninitialized</em>
memory.</li>
<li><a href="buffer.md#static-method-bufferfromarray"><code>Buffer.from(array)</code></a>: Create a <code>Buffer</code> with a copy of <code>array</code></li>
<li><a href="buffer.md#static-method-bufferfromarraybuffer-byteoffset-length"><code>Buffer.from(arrayBuffer[, byteOffset[, length]])</code></a> -
Create a <code>Buffer</code> that wraps the given <code>arrayBuffer</code>.</li>
<li><a href="buffer.md#static-method-bufferfrombuffer"><code>Buffer.from(buffer)</code></a>: Create a <code>Buffer</code> that copies <code>buffer</code>.</li>
<li><a href="buffer.md#static-method-bufferfromstring-encoding"><code>Buffer.from(string[, encoding])</code></a>: Create a <code>Buffer</code>
that copies <code>string</code>.</li>
</ul>
<p>Without <code>--pending-deprecation</code>, runtime warnings occur only for code not in
<code>node_modules</code>. This means there will not be deprecation warnings for
<code>Buffer()</code> usage in dependencies. With <code>--pending-deprecation</code>, a runtime
warning results no matter where the <code>Buffer()</code> usage occurs.</p>
<h3>DEP0006: <code>child_process</code> <code>options.customFds</code></h3>
<p>Type: End-of-Life</p>
<p>Within the <a href="child_process.md"><code>child_process</code></a> module's <code>spawn()</code>, <code>fork()</code>, and <code>exec()</code>
methods, the <code>options.customFds</code> option is deprecated. The <code>options.stdio</code>
option should be used instead.</p>
<h3>DEP0007: Replace <code>cluster</code> <code>worker.suicide</code> with <code>worker.exitedAfterDisconnect</code></h3>
<p>Type: End-of-Life</p>
<p>In an earlier version of the Node.js <code>cluster</code>, a boolean property with the name
<code>suicide</code> was added to the <code>Worker</code> object. The intent of this property was to
provide an indication of how and why the <code>Worker</code> instance exited. In Node.js
6.0.0, the old property was deprecated and replaced with a new
<a href="cluster.md#workerexitedafterdisconnect"><code>worker.exitedAfterDisconnect</code></a> property. The old property name did not
precisely describe the actual semantics and was unnecessarily emotion-laden.</p>
<h3>DEP0008: <code>require('node:constants')</code></h3>
<p>Type: Documentation-only</p>
<p>The <code>node:constants</code> module is deprecated. When requiring access to constants
relevant to specific Node.js builtin modules, developers should instead refer
to the <code>constants</code> property exposed by the relevant module. For instance,
<code>require('node:fs').constants</code> and <code>require('node:os').constants</code>.</p>
<h3>DEP0009: <code>crypto.pbkdf2</code> without digest</h3>
<p>Type: End-of-Life</p>
<p>Use of the <a href="crypto.md#cryptopbkdf2password-salt-iterations-keylen-digest-callback"><code>crypto.pbkdf2()</code></a> API without specifying a digest was deprecated
in Node.js 6.0 because the method defaulted to using the non-recommended
<code>'SHA1'</code> digest. Previously, a deprecation warning was printed. Starting in
Node.js 8.0.0, calling <code>crypto.pbkdf2()</code> or <code>crypto.pbkdf2Sync()</code> with
<code>digest</code> set to <code>undefined</code> will throw a <code>TypeError</code>.</p>
<p>Beginning in Node.js 11.0.0, calling these functions with <code>digest</code> set to
<code>null</code> would print a deprecation warning to align with the behavior when <code>digest</code>
is <code>undefined</code>.</p>
<p>Now, however, passing either <code>undefined</code> or <code>null</code> will throw a <code>TypeError</code>.</p>
<h3>DEP0010: <code>crypto.createCredentials</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>crypto.createCredentials()</code> API was removed. Please use
<a href="tls.md#tlscreatesecurecontextoptions"><code>tls.createSecureContext()</code></a> instead.</p>
<h3>DEP0011: <code>crypto.Credentials</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>crypto.Credentials</code> class was removed. Please use <a href="tls.md#tlscreatesecurecontextoptions"><code>tls.SecureContext</code></a>
instead.</p>
<h3>DEP0012: <code>Domain.dispose</code></h3>
<p>Type: End-of-Life</p>
<p><code>Domain.dispose()</code> has been removed. Recover from failed I/O actions
explicitly via error event handlers set on the domain instead.</p>
<h3>DEP0013: <code>fs</code> asynchronous function without callback</h3>
<p>Type: End-of-Life</p>
<p>Calling an asynchronous function without a callback throws a <code>TypeError</code>
in Node.js 10.0.0 onwards. See <a href="https://github.com/nodejs/node/pull/12562">https://github.com/nodejs/node/pull/12562</a>.</p>
<h3>DEP0014: <code>fs.read</code> legacy String interface</h3>
<p>Type: End-of-Life</p>
<p>The <a href="fs.md#fsreadfd-buffer-offset-length-position-callback"><code>fs.read()</code></a> legacy <code>String</code> interface is deprecated. Use the <code>Buffer</code>
API as mentioned in the documentation instead.</p>
<h3>DEP0015: <code>fs.readSync</code> legacy String interface</h3>
<p>Type: End-of-Life</p>
<p>The <a href="fs.md#fsreadsyncfd-buffer-offset-length-position"><code>fs.readSync()</code></a> legacy <code>String</code> interface is deprecated. Use the
<code>Buffer</code> API as mentioned in the documentation instead.</p>
<h3>DEP0016: <code>GLOBAL</code>/<code>root</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>GLOBAL</code> and <code>root</code> aliases for the <code>global</code> property were deprecated
in Node.js 6.0.0 and have since been removed.</p>
<h3>DEP0017: <code>Intl.v8BreakIterator</code></h3>
<p>Type: End-of-Life</p>
<p><code>Intl.v8BreakIterator</code> was a non-standard extension and has been removed.
See <a href="https://github.com/tc39/proposal-intl-segmenter"><code>Intl.Segmenter</code></a>.</p>
<h3>DEP0018: Unhandled promise rejections</h3>
<p>Type: End-of-Life</p>
<p>Unhandled promise rejections are deprecated. By default, promise rejections
that are not handled terminate the Node.js process with a non-zero exit
code. To change the way Node.js treats unhandled rejections, use the
<a href="cli.md#--unhandled-rejectionsmode"><code>--unhandled-rejections</code></a> command-line option.</p>
<h3>DEP0019: <code>require('.')</code> resolved outside directory</h3>
<p>Type: End-of-Life</p>
<p>In certain cases, <code>require('.')</code> could resolve outside the package directory.
This behavior has been removed.</p>
<h3>DEP0020: <code>Server.connections</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>Server.connections</code> property was deprecated in Node.js 0.9.7 and has
been removed. Please use the <a href="net.md#servergetconnectionscallback"><code>Server.getConnections()</code></a> method instead.</p>
<h3>DEP0021: <code>Server.listenFD</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>Server.listenFD()</code> method was deprecated and removed. Please use
<a href="net.md#serverlistenhandle-backlog-callback"><code>Server.listen({fd: &lt;number&gt;})</code></a> instead.</p>
<h3>DEP0022: <code>os.tmpDir()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>os.tmpDir()</code> API was deprecated in Node.js 7.0.0 and has since been
removed. Please use <a href="os.md#ostmpdir"><code>os.tmpdir()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/tmpdir-to-tmpdir">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/tmpDir-to-tmpdir
</code></pre>
<h3>DEP0023: <code>os.getNetworkInterfaces()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>os.getNetworkInterfaces()</code> method is deprecated. Please use the
<a href="os.md#osnetworkinterfaces"><code>os.networkInterfaces()</code></a> method instead.</p>
<h3>DEP0024: <code>REPLServer.prototype.convertToContext()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>REPLServer.prototype.convertToContext()</code> API has been removed.</p>
<h3>DEP0025: <code>require('node:sys')</code></h3>
<p>Type: Runtime</p>
<p>The <code>node:sys</code> module is deprecated. Please use the <a href="util.md"><code>util</code></a> module instead.</p>
<h3>DEP0026: <code>util.print()</code></h3>
<p>Type: End-of-Life</p>
<p><code>util.print()</code> has been removed. Please use <a href="console.md#consolelogdata-args"><code>console.log()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-print-to-console-log">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-print-to-console-log
</code></pre>
<h3>DEP0027: <code>util.puts()</code></h3>
<p>Type: End-of-Life</p>
<p><code>util.puts()</code> has been removed. Please use <a href="console.md#consolelogdata-args"><code>console.log()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-print-to-console-log">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-print-to-console-log
</code></pre>
<h3>DEP0028: <code>util.debug()</code></h3>
<p>Type: End-of-Life</p>
<p><code>util.debug()</code> has been removed. Please use <a href="console.md#consoleerrordata-args"><code>console.error()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-print-to-console-log">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-print-to-console-log
</code></pre>
<h3>DEP0029: <code>util.error()</code></h3>
<p>Type: End-of-Life</p>
<p><code>util.error()</code> has been removed. Please use <a href="console.md#consoleerrordata-args"><code>console.error()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-print-to-console-log">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-print-to-console-log
</code></pre>
<h3>DEP0030: <code>SlowBuffer</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>SlowBuffer</code> class has been removed. Please use
<a href="buffer.md#static-method-bufferallocunsafeslowsize-alignment"><code>Buffer.allocUnsafeSlow(size)</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/slow-buffer-to-buffer-alloc-unsafe-slow">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/slow-buffer-to-buffer-alloc-unsafe-slow
</code></pre>
<h3>DEP0031: <code>ecdh.setPublicKey()</code></h3>
<p>Type: Runtime</p>
<p>The <a href="crypto.md#ecdhsetpublickeypublickey-encoding"><code>ecdh.setPublicKey()</code></a> method is now deprecated as its inclusion in
the API is not useful.</p>
<h3>DEP0032: <code>node:domain</code> module</h3>
<p>Type: Runtime</p>
<p>The <a href="domain.md"><code>domain</code></a> module is deprecated and should not be used. Loading the
module emits a runtime deprecation warning.</p>
<h3>DEP0033: <code>EventEmitter.listenerCount()</code></h3>
<p>Type: Revoked</p>
<p>The <a href="events.md#eventslistenercountemitterortarget-eventname"><code>events.listenerCount(emitter, eventName)</code></a> API was deprecated, as it
provided identical functionality to <a href="events.md#emitterlistenercounteventname-listener"><code>emitter.listenerCount(eventName)</code></a>. The
deprecation was revoked because this function has been repurposed to also
accept {EventTarget} arguments.</p>
<h3>DEP0034: <code>fs.exists(path, callback)</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="fs.md#fsexistspath-callback"><code>fs.exists(path, callback)</code></a> API is deprecated. Please use
<a href="fs.md#fsstatpath-options-callback"><code>fs.stat()</code></a> or <a href="fs.md#fsaccesspath-mode-callback"><code>fs.access()</code></a> instead.</p>
<h3>DEP0035: <code>fs.lchmod(path, mode, callback)</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="fs.md#fslchmodpath-mode-callback"><code>fs.lchmod(path, mode, callback)</code></a> API is deprecated.</p>
<h3>DEP0036: <code>fs.lchmodSync(path, mode)</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="fs.md#fslchmodsyncpath-mode"><code>fs.lchmodSync(path, mode)</code></a> API is deprecated.</p>
<h3>DEP0037: <code>fs.lchown(path, uid, gid, callback)</code></h3>
<p>Type: Deprecation revoked</p>
<p>The <a href="fs.md#fslchownpath-uid-gid-callback"><code>fs.lchown(path, uid, gid, callback)</code></a> API was deprecated. The
deprecation was revoked because the requisite supporting APIs were added in
libuv.</p>
<h3>DEP0038: <code>fs.lchownSync(path, uid, gid)</code></h3>
<p>Type: Deprecation revoked</p>
<p>The <a href="fs.md#fslchownsyncpath-uid-gid"><code>fs.lchownSync(path, uid, gid)</code></a> API was deprecated. The deprecation was
revoked because the requisite supporting APIs were added in libuv.</p>
<h3>DEP0039: <code>require.extensions</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="modules.md#requireextensions"><code>require.extensions</code></a> property is deprecated.</p>
<h3>DEP0040: <code>node:punycode</code> module</h3>
<p>Type: Application (non-<code>node_modules</code> code only)</p>
<p>The <a href="punycode.md"><code>punycode</code></a> module is deprecated. Please use a userland alternative
instead.</p>
<h3>DEP0041: <code>NODE_REPL_HISTORY_FILE</code> environment variable</h3>
<p>Type: End-of-Life</p>
<p>The <code>NODE_REPL_HISTORY_FILE</code> environment variable was removed. Please use
<code>NODE_REPL_HISTORY</code> instead.</p>
<h3>DEP0042: <code>tls.CryptoStream</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>tls.CryptoStream</code> class was removed. Please use
<a href="tls.md#class-tlstlssocket"><code>tls.TLSSocket</code></a> instead.</p>
<h3>DEP0043: <code>tls.SecurePair</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>tls.SecurePair</code> class is deprecated. Please use
<a href="tls.md#class-tlstlssocket"><code>tls.TLSSocket</code></a> instead.</p>
<h3>DEP0044: <code>util.isArray()</code></h3>
<p>Type: Runtime</p>
<p>The <a href="util.md#utilisarrayobject"><code>util.isArray()</code></a> API is deprecated. Please use <code>Array.isArray()</code>
instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0045: <code>util.isBoolean()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isBoolean()</code> API has been removed. Please use
<code>typeof arg === 'boolean'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0046: <code>util.isBuffer()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isBuffer()</code> API has been removed. Please use
<a href="buffer.md#static-method-bufferisbufferobj"><code>Buffer.isBuffer()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0047: <code>util.isDate()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isDate()</code> API has been removed. Please use
<code>arg instanceof Date</code> instead.</p>
<p>Also for stronger approaches, consider using:
<code>Date.prototype.toString.call(arg) === '[object Date]' &amp;&amp; !isNaN(arg)</code>.
This can also be used in a <code>try/catch</code> block to handle invalid date objects.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0048: <code>util.isError()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isError()</code> API has been removed. Please use <code>Error.isError(arg)</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0049: <code>util.isFunction()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isFunction()</code> API has been removed. Please use
<code>typeof arg === 'function'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0050: <code>util.isNull()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isNull()</code> API has been removed. Please use
<code>arg === null</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0051: <code>util.isNullOrUndefined()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isNullOrUndefined()</code> API has been removed. Please use
<code>arg === null || arg === undefined</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0052: <code>util.isNumber()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isNumber()</code> API has been removed. Please use
<code>typeof arg === 'number'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0053: <code>util.isObject()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isObject()</code> API has been removed. Please use
<code>arg &amp;&amp; typeof arg === 'object'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0054: <code>util.isPrimitive()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isPrimitive()</code> API has been removed. Please use <code>Object(arg) !== arg</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0055: <code>util.isRegExp()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isRegExp()</code> API has been removed. Please use
<code>arg instanceof RegExp</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0056: <code>util.isString()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isString()</code> API has been removed. Please use
<code>typeof arg === 'string'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0057: <code>util.isSymbol()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isSymbol()</code> API has been removed. Please use
<code>typeof arg === 'symbol'</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0058: <code>util.isUndefined()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.isUndefined()</code> API has been removed. Please use
<code>arg === undefined</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-is">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-is
</code></pre>
<h3>DEP0059: <code>util.log()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.log()</code> API has been removed because it's an unmaintained
legacy API that was exposed to user land by accident. Instead,
consider the following alternatives based on your specific needs:</p>
<ul>
<li>
<p><strong>Third-Party Logging Libraries</strong></p>
</li>
<li>
<p><strong>Use <code>console.log(new Date().toLocaleString(), message)</code></strong></p>
</li>
</ul>
<p>By adopting one of these alternatives, you can transition away from <code>util.log()</code>
and choose a logging strategy that aligns with the specific
requirements and complexity of your application.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-log-to-console-log">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-log-to-console-log
</code></pre>
<h3>DEP0060: <code>util._extend()</code></h3>
<p>Type: Runtime</p>
<p>The <a href="util.md#util_extendtarget-source"><code>util._extend()</code></a> API is deprecated because it's an unmaintained
legacy API that was exposed to user land by accident.
Please use <code>target = Object.assign(target, source)</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/util-extend-to-object-assign">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/util-extend-to-object-assign
</code></pre>
<h3>DEP0061: <code>fs.SyncWriteStream</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>fs.SyncWriteStream</code> class was never intended to be a publicly accessible
API and has been removed. No alternative API is available. Please use a userland
alternative.</p>
<h3>DEP0062: <code>node --debug</code></h3>
<p>Type: End-of-Life</p>
<p><code>--debug</code> activates the legacy V8 debugger interface, which was removed as
of V8 5.8. It is replaced by Inspector which is activated with <code>--inspect</code>
instead.</p>
<h3>DEP0063: <code>ServerResponse.prototype.writeHeader()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:http</code> module <code>ServerResponse.prototype.writeHeader()</code> API is
deprecated. Please use <code>ServerResponse.prototype.writeHead()</code> instead.</p>
<p>The <code>ServerResponse.prototype.writeHeader()</code> method was never documented as an
officially supported API.</p>
<h3>DEP0064: <code>tls.createSecurePair()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>tls.createSecurePair()</code> API was deprecated in documentation in Node.js
0.11.3. Users should use <code>tls.Socket</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/tls-create-secure-pair-to-tls-socket">source</a>):</p>
<pre><code class="language-bash">npx codemod @nodejs/tls-create-secure-pair-to-tls-socket
</code></pre>
<h3>DEP0065: <code>repl.REPL_MODE_MAGIC</code> and <code>NODE_REPL_MODE=magic</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:repl</code> module's <code>REPL_MODE_MAGIC</code> constant, used for <code>replMode</code> option,
has been removed. Its behavior has been functionally identical to that of
<code>REPL_MODE_SLOPPY</code> since Node.js 6.0.0, when V8 5.0 was imported. Please use
<code>REPL_MODE_SLOPPY</code> instead.</p>
<p>The <code>NODE_REPL_MODE</code> environment variable is used to set the underlying
<code>replMode</code> of an interactive <code>node</code> session. Its value, <code>magic</code>, is also
removed. Please use <code>sloppy</code> instead.</p>
<h3>DEP0066: <code>OutgoingMessage.prototype._headers, OutgoingMessage.prototype._headerNames</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:http</code> module <code>OutgoingMessage.prototype._headers</code> and
<code>OutgoingMessage.prototype._headerNames</code> properties are deprecated. Use one of
the public methods (e.g. <code>OutgoingMessage.prototype.getHeader()</code>,
<code>OutgoingMessage.prototype.getHeaders()</code>,
<code>OutgoingMessage.prototype.getHeaderNames()</code>,
<code>OutgoingMessage.prototype.getRawHeaderNames()</code>,
<code>OutgoingMessage.prototype.hasHeader()</code>,
<code>OutgoingMessage.prototype.removeHeader()</code>,
<code>OutgoingMessage.prototype.setHeader()</code>) for working with outgoing headers.</p>
<p>The <code>OutgoingMessage.prototype._headers</code> and
<code>OutgoingMessage.prototype._headerNames</code> properties were never documented as
officially supported properties.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/http-outgoingmessage-headers">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/http-outgoingmessage-headers
</code></pre>
<h3>DEP0067: <code>OutgoingMessage.prototype._renderHeaders</code></h3>
<p>Type: Documentation-only</p>
<p>The <code>node:http</code> module <code>OutgoingMessage.prototype._renderHeaders()</code> API is
deprecated.</p>
<p>The <code>OutgoingMessage.prototype._renderHeaders</code> property was never documented as
an officially supported API.</p>
<h3>DEP0068: <code>node debug</code></h3>
<p>Type: End-of-Life</p>
<p><code>node debug</code> corresponds to the legacy CLI debugger which has been replaced with
a V8-inspector based CLI debugger available through <code>node inspect</code>.</p>
<h3>DEP0069: <code>vm.runInDebugContext(string)</code></h3>
<p>Type: End-of-Life</p>
<p>DebugContext has been removed in V8 and is not available in Node.js 10+.</p>
<p>DebugContext was an experimental API.</p>
<h3>DEP0070: <code>async_hooks.currentId()</code></h3>
<p>Type: End-of-Life</p>
<p><code>async_hooks.currentId()</code> was renamed to <code>async_hooks.executionAsyncId()</code> for
clarity.</p>
<p>This change was made while <code>async_hooks</code> was an experimental API.</p>
<h3>DEP0071: <code>async_hooks.triggerId()</code></h3>
<p>Type: End-of-Life</p>
<p><code>async_hooks.triggerId()</code> was renamed to <code>async_hooks.triggerAsyncId()</code> for
clarity.</p>
<p>This change was made while <code>async_hooks</code> was an experimental API.</p>
<h3>DEP0072: <code>async_hooks.AsyncResource.triggerId()</code></h3>
<p>Type: End-of-Life</p>
<p><code>async_hooks.AsyncResource.triggerId()</code> was renamed to
<code>async_hooks.AsyncResource.triggerAsyncId()</code> for clarity.</p>
<p>This change was made while <code>async_hooks</code> was an experimental API.</p>
<h3>DEP0073: Several internal properties of <code>net.Server</code></h3>
<p>Type: End-of-Life</p>
<p>Accessing several internal, undocumented properties of <code>net.Server</code> instances
with inappropriate names is deprecated.</p>
<p>As the original API was undocumented and not generally useful for non-internal
code, no replacement API is provided.</p>
<h3>DEP0074: <code>REPLServer.bufferedCommand</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>REPLServer.bufferedCommand</code> property was deprecated in favor of
<a href="repl.md#replserverclearbufferedcommand"><code>REPLServer.clearBufferedCommand()</code></a>.</p>
<h3>DEP0075: <code>REPLServer.parseREPLKeyword()</code></h3>
<p>Type: End-of-Life</p>
<p><code>REPLServer.parseREPLKeyword()</code> was removed from userland visibility.</p>
<h3>DEP0076: <code>tls.parseCertString()</code></h3>
<p>Type: End-of-Life</p>
<p><code>tls.parseCertString()</code> was a trivial parsing helper that was made public by
mistake. While it was supposed to parse certificate subject and issuer strings,
it never handled multi-value Relative Distinguished Names correctly.</p>
<p>Earlier versions of this document suggested using <code>querystring.parse()</code> as an
alternative to <code>tls.parseCertString()</code>. However, <code>querystring.parse()</code> also does
not handle all certificate subjects correctly and should not be used.</p>
<h3>DEP0077: <code>Module._debug()</code></h3>
<p>Type: End-of-Life</p>
<p><code>Module._debug()</code> has been removed.</p>
<p>The <code>Module._debug()</code> function was never documented as an officially
supported API.</p>
<h3>DEP0078: <code>REPLServer.turnOffEditorMode()</code></h3>
<p>Type: End-of-Life</p>
<p><code>REPLServer.turnOffEditorMode()</code> was removed from userland visibility.</p>
<h3>DEP0079: Custom inspection function on objects via <code>.inspect()</code></h3>
<p>Type: End-of-Life</p>
<p>Using a property named <code>inspect</code> on an object to specify a custom inspection
function for <a href="util.md#utilinspectobject-options"><code>util.inspect()</code></a> is deprecated. Use <a href="util.md#utilinspectcustom"><code>util.inspect.custom</code></a>
instead. For backward compatibility with Node.js prior to version 6.4.0, both
can be specified.</p>
<h3>DEP0080: <code>path._makeLong()</code></h3>
<p>Type: Documentation-only</p>
<p>The internal <code>path._makeLong()</code> was not intended for public use. However,
userland modules have found it useful. The internal API is deprecated
and replaced with an identical, public <code>path.toNamespacedPath()</code> method.</p>
<h3>DEP0081: <code>fs.truncate()</code> using a file descriptor</h3>
<p>Type: End-of-Life</p>
<p><code>fs.truncate()</code> <code>fs.truncateSync()</code> usage with a file descriptor is
deprecated. Please use <code>fs.ftruncate()</code> or <code>fs.ftruncateSync()</code> to work with
file descriptors.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/fs-truncate-fd-deprecation">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/fs-truncate-fd-deprecation
</code></pre>
<h3>DEP0082: <code>REPLServer.prototype.memory()</code></h3>
<p>Type: End-of-Life</p>
<p><code>REPLServer.prototype.memory()</code> is only necessary for the internal mechanics of
the <code>REPLServer</code> itself. Do not use this function.</p>
<h3>DEP0083: Disabling ECDH by setting <code>ecdhCurve</code> to <code>false</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>ecdhCurve</code> option to <code>tls.createSecureContext()</code> and <code>tls.TLSSocket</code> could
be set to <code>false</code> to disable ECDH entirely on the server only. This mode was
deprecated in preparation for migrating to OpenSSL 1.1.0 and consistency with
the client and is now unsupported. Use the <code>ciphers</code> parameter instead.</p>
<h3>DEP0084: requiring bundled internal dependencies</h3>
<p>Type: End-of-Life</p>
<p>Since Node.js versions 4.4.0 and 5.2.0, several modules only intended for
internal usage were mistakenly exposed to user code through <code>require()</code>. These
modules were:</p>
<ul>
<li><code>v8/tools/codemap</code></li>
<li><code>v8/tools/consarray</code></li>
<li><code>v8/tools/csvparser</code></li>
<li><code>v8/tools/logreader</code></li>
<li><code>v8/tools/profile_view</code></li>
<li><code>v8/tools/profile</code></li>
<li><code>v8/tools/SourceMap</code></li>
<li><code>v8/tools/splaytree</code></li>
<li><code>v8/tools/tickprocessor-driver</code></li>
<li><code>v8/tools/tickprocessor</code></li>
<li><code>node-inspect/lib/_inspect</code> (from 7.6.0)</li>
<li><code>node-inspect/lib/internal/inspect_client</code> (from 7.6.0)</li>
<li><code>node-inspect/lib/internal/inspect_repl</code> (from 7.6.0)</li>
</ul>
<p>The <code>v8/*</code> modules do not have any exports, and if not imported in a specific
order would in fact throw errors. As such there are virtually no legitimate use
cases for importing them through <code>require()</code>.</p>
<p>On the other hand, <code>node-inspect</code> can be installed locally through a package
manager, as it is published on the npm registry under the same name. No source
code modification is necessary if that is done.</p>
<h3>DEP0085: AsyncHooks sensitive API</h3>
<p>Type: End-of-Life</p>
<p>The AsyncHooks sensitive API was never documented and had various minor issues.
Use the <code>AsyncResource</code> API instead. See
<a href="https://github.com/nodejs/node/issues/15572">https://github.com/nodejs/node/issues/15572</a>.</p>
<h3>DEP0086: Remove <code>runInAsyncIdScope</code></h3>
<p>Type: End-of-Life</p>
<p><code>runInAsyncIdScope</code> doesn't emit the <code>'before'</code> or <code>'after'</code> event and can thus
cause a lot of issues. See <a href="https://github.com/nodejs/node/issues/14328">https://github.com/nodejs/node/issues/14328</a>.</p>
<h3>DEP0089: <code>require('node:assert')</code></h3>
<p>Type: Deprecation revoked</p>
<p>Importing assert directly was not recommended as the exposed functions use
loose equality checks. The deprecation was revoked because use of the
<code>node:assert</code> module is not discouraged, and the deprecation caused developer
confusion.</p>
<h3>DEP0090: Invalid GCM authentication tag lengths</h3>
<p>Type: End-of-Life</p>
<p>Node.js used to support all GCM authentication tag lengths which are accepted by
OpenSSL when calling <a href="crypto.md#deciphersetauthtagbuffer-encoding"><code>decipher.setAuthTag()</code></a>. Beginning with Node.js
v11.0.0, only authentication tag lengths of 128, 120, 112, 104, 96, 64, and 32
bits are allowed. Authentication tags of other lengths are invalid per
<a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf">NIST SP 800-38D</a>.</p>
<h3>DEP0091: <code>crypto.DEFAULT_ENCODING</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>crypto.DEFAULT_ENCODING</code> property only existed for compatibility with
Node.js releases prior to versions 0.9.3 and has been removed.</p>
<h3>DEP0092: Top-level <code>this</code> bound to <code>module.exports</code></h3>
<p>Type: Documentation-only</p>
<p>Assigning properties to the top-level <code>this</code> as an alternative
to <code>module.exports</code> is deprecated. Developers should use <code>exports</code>
or <code>module.exports</code> instead.</p>
<h3>DEP0093: <code>crypto.fips</code> is deprecated and replaced</h3>
<p>Type: Runtime</p>
<p>The <a href="crypto.md#cryptofips"><code>crypto.fips</code></a> property is deprecated. Please use <code>crypto.setFips()</code>
and <code>crypto.getFips()</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/crypto-fips-to-getFips">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/crypto-fips-to-getFips
</code></pre>
<h3>DEP0094: Using <code>assert.fail()</code> with more than one argument</h3>
<p>Type: End-of-Life</p>
<p>Using <code>assert.fail()</code> with more than one argument is deprecated. Use
<code>assert.fail()</code> with only one argument or use a different <code>node:assert</code> module
method.</p>
<h3>DEP0095: <code>timers.enroll()</code></h3>
<p>Type: End-of-Life</p>
<p><code>timers.enroll()</code> has been removed. Please use the publicly documented
<a href="timers.md#settimeoutcallback-delay-args"><code>setTimeout()</code></a> or <a href="timers.md#setintervalcallback-delay-args"><code>setInterval()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/timers-deprecations">source</a>).</p>
<pre><code class="language-bash">npx codemod @nodejs/timers-deprecations
</code></pre>
<h3>DEP0096: <code>timers.unenroll()</code></h3>
<p>Type: End-of-Life</p>
<p><code>timers.unenroll()</code> has been removed. Please use the publicly documented
<a href="timers.md#cleartimeouttimeout"><code>clearTimeout()</code></a> or <a href="timers.md#clearintervaltimeout"><code>clearInterval()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/timers-deprecations">source</a>).</p>
<pre><code class="language-bash">npx codemod @nodejs/timers-deprecations
</code></pre>
<h3>DEP0097: <code>MakeCallback</code> with <code>domain</code> property</h3>
<p>Type: End-of-Life</p>
<p>The <code>domain</code> property on async resources and <code>MakeCallback</code> has been removed.
The domain module now uses <code>AsyncLocalStorage</code> for context propagation instead
of <code>async_hooks</code>. Accessing the <code>domain</code> property on <code>AsyncResource</code> will throw
an error. Use <code>AsyncLocalStorage</code> instead for context propagation.</p>
<h3>DEP0098: AsyncHooks embedder <code>AsyncResource.emitBefore</code> and <code>AsyncResource.emitAfter</code> APIs</h3>
<p>Type: End-of-Life</p>
<p>The embedded API provided by AsyncHooks exposes <code>.emitBefore()</code> and
<code>.emitAfter()</code> methods which are very easy to use incorrectly which can lead
to unrecoverable errors.</p>
<p>Use <a href="async_context.md#asyncresourceruninasyncscopefn-thisarg-args"><code>asyncResource.runInAsyncScope()</code></a> API instead which provides a much
safer, and more convenient, alternative. See
<a href="https://github.com/nodejs/node/pull/18513">https://github.com/nodejs/node/pull/18513</a>.</p>
<h3>DEP0099: Async context-unaware <code>node::MakeCallback</code> C++ APIs</h3>
<p>Type: Compile-time</p>
<p>Certain versions of <code>node::MakeCallback</code> APIs available to native addons are
deprecated. Please use the versions of the API that accept an <code>async_context</code>
parameter.</p>
<h3>DEP0100: <code>process.assert()</code></h3>
<p>Type: End-of-Life</p>
<p><code>process.assert()</code> is deprecated. Please use the <a href="assert.md"><code>assert</code></a> module instead.</p>
<p>This was never a documented feature.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/process-assert-to-node-assert">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/process-assert-to-node-assert
</code></pre>
<h3>DEP0101: <code>--with-lttng</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>--with-lttng</code> compile-time option has been removed.</p>
<h3>DEP0102: Using <code>noAssert</code> in <code>Buffer#(read|write)</code> operations</h3>
<p>Type: End-of-Life</p>
<p>Using the <code>noAssert</code> argument has no functionality anymore. All input is
verified regardless of the value of <code>noAssert</code>. Skipping the verification
could lead to hard-to-find errors and crashes.</p>
<h3>DEP0103: <code>process.binding('util').is[...]</code> typechecks</h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>Using <code>process.binding()</code> in general should be avoided. The type checking
methods in particular can be replaced by using <a href="util.md#utiltypes"><code>util.types</code></a>.</p>
<p>This deprecation has been superseded by the deprecation of the
<code>process.binding()</code> API (<a href="#DEP0111">DEP0111</a>).</p>
<h3>DEP0104: <code>process.env</code> string coercion</h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>When assigning a non-string property to <a href="process.md#processenv"><code>process.env</code></a>, the assigned value is
implicitly converted to a string. This behavior is deprecated if the assigned
value is not a string, boolean, or number. In the future, such assignment might
result in a thrown error. Please convert the property to a string before
assigning it to <code>process.env</code>.</p>
<h3>DEP0105: <code>decipher.finaltol</code></h3>
<p>Type: End-of-Life</p>
<p><code>decipher.finaltol()</code> has never been documented and was an alias for
<a href="crypto.md#decipherfinaloutputencoding"><code>decipher.final()</code></a>. This API has been removed, and it is recommended to use
<a href="crypto.md#decipherfinaloutputencoding"><code>decipher.final()</code></a> instead.</p>
<h3>DEP0106: <code>crypto.createCipher</code> and <code>crypto.createDecipher</code></h3>
<p>Type: End-of-Life</p>
<p><code>crypto.createCipher()</code> and <code>crypto.createDecipher()</code> have been removed
as they use a weak key derivation function (MD5 with no salt) and static
initialization vectors.
It is recommended to derive a key using
<a href="crypto.md#cryptopbkdf2password-salt-iterations-keylen-digest-callback"><code>crypto.pbkdf2()</code></a> or <a href="crypto.md#cryptoscryptpassword-salt-keylen-options-callback"><code>crypto.scrypt()</code></a> with random salts and to use
<a href="crypto.md#cryptocreatecipherivalgorithm-key-iv-options"><code>crypto.createCipheriv()</code></a> and <a href="crypto.md#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a> to obtain the
<a href="crypto.md#class-cipheriv"><code>Cipheriv</code></a> and <a href="crypto.md#class-decipheriv"><code>Decipheriv</code></a> objects respectively.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/crypto-createcipheriv-migration">source</a>):</p>
<pre><code class="language-bash">npx codemod @nodejs/crypto-createcipheriv-migration
</code></pre>
<h3>DEP0107: <code>tls.convertNPNProtocols()</code></h3>
<p>Type: End-of-Life</p>
<p>This was an undocumented helper function not intended for use outside Node.js
core and obsoleted by the removal of NPN (Next Protocol Negotiation) support.</p>
<h3>DEP0108: <code>zlib.bytesRead</code></h3>
<p>Type: End-of-Life</p>
<p>Deprecated alias for <a href="zlib.md#zlibbyteswritten"><code>zlib.bytesWritten</code></a>. This original name was chosen
because it also made sense to interpret the value as the number of bytes
read by the engine, but is inconsistent with other streams in Node.js that
expose values under these names.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/zlib-bytesread-to-byteswritten">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/zlib-bytesread-to-byteswritten
</code></pre>
<h3>DEP0109: <code>http</code>, <code>https</code>, and <code>tls</code> support for invalid URLs</h3>
<p>Type: End-of-Life</p>
<p>Some previously supported (but strictly invalid) URLs were accepted through the
<a href="http.md#httprequestoptions-callback"><code>http.request()</code></a>, <a href="http.md#httpgetoptions-callback"><code>http.get()</code></a>, <a href="https.md#httpsrequestoptions-callback"><code>https.request()</code></a>,
<a href="https.md#httpsgetoptions-callback"><code>https.get()</code></a>, and <a href="tls.md#tlscheckserveridentityhostname-cert"><code>tls.checkServerIdentity()</code></a> APIs because those were
accepted by the legacy <code>url.parse()</code> API. The mentioned APIs now use the WHATWG
URL parser that requires strictly valid URLs. Passing an invalid URL is
deprecated and support will be removed in the future.</p>
<h3>DEP0110: <code>vm.Script</code> cached data</h3>
<p>Type: Documentation-only</p>
<p>The <code>produceCachedData</code> option is deprecated. Use
<a href="vm.md#scriptcreatecacheddata"><code>script.createCachedData()</code></a> instead.</p>
<h3>DEP0111: <code>process.binding()</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p><code>process.binding()</code> is for use by Node.js internal code only.</p>
<p>While <code>process.binding()</code> has not reached End-of-Life status in general, it is
unavailable when the <a href="permissions.md#permission-model">permission model</a> is enabled.</p>
<h3>DEP0112: <code>dgram</code> private APIs</h3>
<p>Type: End-of-Life</p>
<p>The <code>node:dgram</code> module previously contained several APIs that were never meant
to accessed outside of Node.js core: <code>Socket.prototype._handle</code>,
<code>Socket.prototype._receiving</code>, <code>Socket.prototype._bindState</code>,
<code>Socket.prototype._queue</code>, <code>Socket.prototype._reuseAddr</code>,
<code>Socket.prototype._healthCheck()</code>, <code>Socket.prototype._stopReceiving()</code>, and
<code>dgram._createSocketHandle()</code>. These have been removed.</p>
<h3>DEP0113: <code>Cipher.setAuthTag()</code>, <code>Decipher.getAuthTag()</code></h3>
<p>Type: End-of-Life</p>
<p><code>Cipher.setAuthTag()</code> and <code>Decipher.getAuthTag()</code> are no longer available. They
were never documented and would throw when called.</p>
<h3>DEP0114: <code>crypto._toBuf()</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>crypto._toBuf()</code> function was not designed to be used by modules outside
of Node.js core and was removed.</p>
<h3>DEP0115: <code>crypto.prng()</code>, <code>crypto.pseudoRandomBytes()</code>, <code>crypto.rng()</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>In recent versions of Node.js, there is no difference between
<a href="crypto.md#cryptorandombytessize-callback"><code>crypto.randomBytes()</code></a> and <code>crypto.pseudoRandomBytes()</code>. The latter is
deprecated along with the undocumented aliases <code>crypto.prng()</code> and
<code>crypto.rng()</code> in favor of <a href="crypto.md#cryptorandombytessize-callback"><code>crypto.randomBytes()</code></a> and might be removed in a
future release.</p>
<h3>DEP0116: Legacy URL API</h3>
<p>Type: Deprecation revoked</p>
<p>The <a href="url.md#legacy-url-api">legacy URL API</a> is deprecated. This includes <a href="url.md#urlformaturlobject"><code>url.format()</code></a>,
<a href="url.md#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a>, <a href="url.md#urlresolvefrom-to"><code>url.resolve()</code></a>, and the <a href="url.md#legacy-urlobject">legacy <code>urlObject</code></a>. Please
use the <a href="url.md#the-whatwg-url-api">WHATWG URL API</a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/node-url-to-whatwg-url">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/node-url-to-whatwg-url
</code></pre>
<h3>DEP0117: Native crypto handles</h3>
<p>Type: End-of-Life</p>
<p>Previous versions of Node.js exposed handles to internal native objects through
the <code>_handle</code> property of the <code>Cipher</code>, <code>Decipher</code>, <code>DiffieHellman</code>,
<code>DiffieHellmanGroup</code>, <code>ECDH</code>, <code>Hash</code>, <code>Hmac</code>, <code>Sign</code>, and <code>Verify</code> classes.
The <code>_handle</code> property has been removed because improper use of the native
object can lead to crashing the application.</p>
<h3>DEP0118: <code>dns.lookup()</code> support for a falsy host name</h3>
<p>Type: End-of-Life</p>
<p>Previous versions of Node.js supported <code>dns.lookup()</code> with a falsy host name
like <code>dns.lookup(false)</code> due to backward compatibility. This has been removed.</p>
<h3>DEP0119: <code>process.binding('uv').errname()</code> private API</h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p><code>process.binding('uv').errname()</code> is deprecated. Please use
<a href="util.md#utilgetsystemerrornameerr"><code>util.getSystemErrorName()</code></a> instead.</p>
<h3>DEP0120: Windows Performance Counter support</h3>
<p>Type: End-of-Life</p>
<p>Windows Performance Counter support has been removed from Node.js. The
undocumented <code>COUNTER_NET_SERVER_CONNECTION()</code>,
<code>COUNTER_NET_SERVER_CONNECTION_CLOSE()</code>, <code>COUNTER_HTTP_SERVER_REQUEST()</code>,
<code>COUNTER_HTTP_SERVER_RESPONSE()</code>, <code>COUNTER_HTTP_CLIENT_REQUEST()</code>, and
<code>COUNTER_HTTP_CLIENT_RESPONSE()</code> functions have been deprecated.</p>
<h3>DEP0121: <code>net._setSimultaneousAccepts()</code></h3>
<p>Type: End-of-Life</p>
<p>The undocumented <code>net._setSimultaneousAccepts()</code> function was originally
intended for debugging and performance tuning when using the
<code>node:child_process</code> and <code>node:cluster</code> modules on Windows. The function is not
generally useful and is being removed. See discussion here:
<a href="https://github.com/nodejs/node/issues/18391">https://github.com/nodejs/node/issues/18391</a></p>
<h3>DEP0122: <code>tls</code> <code>Server.prototype.setOptions()</code></h3>
<p>Type: End-of-Life</p>
<p>Please use <code>Server.prototype.setSecureContext()</code> instead.</p>
<h3>DEP0123: setting the TLS ServerName to an IP address</h3>
<p>Type: End-of-Life</p>
<p>Setting the TLS ServerName to an IP address is not permitted by
<a href="https://tools.ietf.org/html/rfc6066#section-3">RFC 6066</a>.</p>
<h3>DEP0124: using <code>REPLServer.rli</code></h3>
<p>Type: End-of-Life</p>
<p>This property is a reference to the instance itself.</p>
<h3>DEP0125: <code>require('node:_stream_wrap')</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:_stream_wrap</code> module is deprecated.</p>
<h3>DEP0126: <code>timers.active()</code></h3>
<p>Type: End-of-Life</p>
<p>The previously undocumented <code>timers.active()</code> has been removed.
Please use the publicly documented <a href="timers.md#timeoutrefresh"><code>timeout.refresh()</code></a> instead.
If re-referencing the timeout is necessary, <a href="timers.md#timeoutref"><code>timeout.ref()</code></a> can be used
with no performance impact since Node.js 10.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/timers-deprecations">source</a>).</p>
<pre><code class="language-bash">npx codemod @nodejs/timers-deprecations
</code></pre>
<h3>DEP0127: <code>timers._unrefActive()</code></h3>
<p>Type: End-of-Life</p>
<p>The previously undocumented and &quot;private&quot; <code>timers._unrefActive()</code> has been removed.
Please use the publicly documented <a href="timers.md#timeoutrefresh"><code>timeout.refresh()</code></a> instead.
If unreferencing the timeout is necessary, <a href="timers.md#timeoutunref"><code>timeout.unref()</code></a> can be used
with no performance impact since Node.js 10.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/timers-deprecations">source</a>).</p>
<pre><code class="language-bash">npx codemod @nodejs/timers-deprecations
</code></pre>
<h3>DEP0128: modules with an invalid <code>main</code> entry and an <code>index.js</code> file</h3>
<p>Type: Runtime</p>
<p>Modules that have an invalid <code>main</code> entry (e.g., <code>./does-not-exist.js</code>) and
also have an <code>index.js</code> file in the top level directory will resolve the
<code>index.js</code> file. That is deprecated and is going to throw an error in future
Node.js versions.</p>
<h3>DEP0129: <code>ChildProcess._channel</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>_channel</code> property of child process objects returned by <code>spawn()</code> and
similar functions is not intended for public use. Use <code>ChildProcess.channel</code>
instead.</p>
<h3>DEP0130: <code>Module.createRequireFromPath()</code></h3>
<p>Type: End-of-Life</p>
<p>Use <a href="module.md#modulecreaterequirefilename"><code>module.createRequire()</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/create-require-from-path">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/create-require-from-path
</code></pre>
<h3>DEP0131: Legacy HTTP parser</h3>
<p>Type: End-of-Life</p>
<p>The legacy HTTP parser, used by default in versions of Node.js prior to 12.0.0,
is deprecated and has been removed in v13.0.0. Prior to v13.0.0, the
<code>--http-parser=legacy</code> command-line flag could be used to revert to using the
legacy parser.</p>
<h3>DEP0132: <code>worker.terminate()</code> with callback</h3>
<p>Type: End-of-Life</p>
<p>Passing a callback to <a href="worker_threads.md#workerterminate"><code>worker.terminate()</code></a> is deprecated. Use the returned
<code>Promise</code> instead, or a listener to the worker's <code>'exit'</code> event.</p>
<h3>DEP0133: <code>http</code> <code>connection</code></h3>
<p>Type: Documentation-only</p>
<p>Prefer <a href="http.md#responsesocket"><code>response.socket</code></a> over <a href="http.md#responseconnection"><code>response.connection</code></a> and
<a href="http.md#requestsocket"><code>request.socket</code></a> over <a href="http.md#requestconnection"><code>request.connection</code></a>.</p>
<h3>DEP0134: <code>process._tickCallback</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>The <code>process._tickCallback</code> property was never documented as
an officially supported API.</p>
<h3>DEP0135: <code>WriteStream.open()</code> and <code>ReadStream.open()</code> are internal</h3>
<p>Type: End-of-Life</p>
<p><a href="fs.md#class-fswritestream"><code>WriteStream.open()</code></a> and <a href="fs.md#class-fsreadstream"><code>ReadStream.open()</code></a> are undocumented internal
APIs that do not make sense to use in userland. File streams should always be
opened through their corresponding factory methods <a href="fs.md#fscreatewritestreampath-options"><code>fs.createWriteStream()</code></a>
and <a href="fs.md#fscreatereadstreampath-options"><code>fs.createReadStream()</code></a>) or by passing a file descriptor in options.</p>
<h3>DEP0136: <code>http</code> <code>finished</code></h3>
<p>Type: Documentation-only</p>
<p><a href="http.md#responsefinished"><code>response.finished</code></a> indicates whether <a href="http.md#responseenddata-encoding-callback"><code>response.end()</code></a> has been
called, not whether <code>'finish'</code> has been emitted and the underlying data
is flushed.</p>
<p>Use <a href="http.md#responsewritablefinished"><code>response.writableFinished</code></a> or <a href="http.md#responsewritableended"><code>response.writableEnded</code></a>
accordingly instead to avoid the ambiguity.</p>
<p>To maintain existing behavior <code>response.finished</code> should be replaced with
<code>response.writableEnded</code>.</p>
<h3>DEP0137: Closing fs.FileHandle on garbage collection</h3>
<p>Type: End-of-Life</p>
<p>Allowing a <a href="fs.md#class-filehandle"><code>fs.FileHandle</code></a> object to be closed on garbage collection used
to be allowed, but now throws an error.</p>
<p>Please ensure that all <code>fs.FileHandle</code> objects are explicitly closed using
<code>FileHandle.prototype.close()</code> when the <code>fs.FileHandle</code> is no longer needed:</p>
<pre><code class="language-js">const fsPromises = require('node:fs').promises;
async function openAndClose() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('thefile.txt', 'r');
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}
</code></pre>
<h3>DEP0138: <code>process.mainModule</code></h3>
<p>Type: Documentation-only</p>
<p><a href="process.md#processmainmodule"><code>process.mainModule</code></a> is a CommonJS-only feature while <code>process</code> global
object is shared with non-CommonJS environment. Its use within ECMAScript
modules is unsupported.</p>
<p>It is deprecated in favor of <a href="modules.md#accessing-the-main-module"><code>require.main</code></a>, because it serves the same
purpose and is only available on CommonJS environment.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/process-main-module">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/process-main-module
</code></pre>
<h3>DEP0139: <code>process.umask()</code> with no arguments</h3>
<p>Type: Documentation-only</p>
<p>Calling <code>process.umask()</code> with no argument causes the process-wide umask to be
written twice. This introduces a race condition between threads, and is a
potential security vulnerability. There is no safe, cross-platform alternative
API.</p>
<h3>DEP0140: Use <code>request.destroy()</code> instead of <code>request.abort()</code></h3>
<p>Type: Documentation-only</p>
<p>Use <a href="http.md#requestdestroyerror"><code>request.destroy()</code></a> instead of <a href="http.md#requestabort"><code>request.abort()</code></a>.</p>
<h3>DEP0141: <code>repl.inputStream</code> and <code>repl.outputStream</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>The <code>node:repl</code> module exported the input and output stream twice. Use <code>.input</code>
instead of <code>.inputStream</code> and <code>.output</code> instead of <code>.outputStream</code>.</p>
<h3>DEP0142: <code>repl._builtinLibs</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>The <code>node:repl</code> module exports a <code>_builtinLibs</code> property that contains an array
of built-in modules. It was incomplete so far and instead it's better to rely
upon <code>require('node:module').builtinModules</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/repl-builtin-modules">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/repl-builtin-modules
</code></pre>
<h3>DEP0143: <code>Transform._transformState</code></h3>
<p>Type: End-of-Life</p>
<p><code>Transform._transformState</code> will be removed in future versions where it is
no longer required due to simplification of the implementation.</p>
<h3>DEP0144: <code>module.parent</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>A CommonJS module can access the first module that required it using
<code>module.parent</code>. This feature is deprecated because it does not work
consistently in the presence of ECMAScript modules and because it gives an
inaccurate representation of the CommonJS module graph.</p>
<p>Some modules use it to check if they are the entry point of the current process.
Instead, it is recommended to compare <code>require.main</code> and <code>module</code>:</p>
<pre><code class="language-js">if (require.main === module) {
  // Code section that will run only if current file is the entry point.
}
</code></pre>
<p>When looking for the CommonJS modules that have required the current one,
<code>require.cache</code> and <code>module.children</code> can be used:</p>
<pre><code class="language-js">const moduleParents = Object.values(require.cache)
  .filter((m) =&gt; m.children.includes(module));
</code></pre>
<h3>DEP0145: <code>socket.bufferSize</code></h3>
<p>Type: Documentation-only</p>
<p><a href="net.md#socketbuffersize"><code>socket.bufferSize</code></a> is just an alias for <a href="stream.md#writablewritablelength"><code>writable.writableLength</code></a>.</p>
<h3>DEP0146: <code>new crypto.Certificate()</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="crypto.md#legacy-api"><code>crypto.Certificate()</code> constructor</a> is deprecated. Use
<a href="crypto.md#class-certificate">static methods of <code>crypto.Certificate()</code></a> instead.</p>
<h3>DEP0147: <code>fs.rmdir(path, { recursive: true })</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>fs.rmdir</code>, <code>fs.rmdirSync</code>, and <code>fs.promises.rmdir</code> methods used
to support a <code>recursive</code> option. That option has been removed.</p>
<p>Use <code>fs.rm(path, { recursive: true, force: true })</code>,
<code>fs.rmSync(path, { recursive: true, force: true })</code> or
<code>fs.promises.rm(path, { recursive: true, force: true })</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/rmdir">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/rmdir
</code></pre>
<h3>DEP0148: Folder mappings in <code>&quot;exports&quot;</code> (trailing <code>&quot;/&quot;</code>)</h3>
<p>Type: End-of-Life</p>
<p>Using a trailing <code>&quot;/&quot;</code> to define subpath folder mappings in the
<a href="packages.md#subpath-exports">subpath exports</a> or <a href="packages.md#subpath-imports">subpath imports</a> fields is no longer supported.
Use <a href="packages.md#subpath-patterns">subpath patterns</a> instead.</p>
<h3>DEP0149: <code>http.IncomingMessage#connection</code></h3>
<p>Type: Documentation-only</p>
<p>Prefer <a href="http.md#messagesocket"><code>message.socket</code></a> over <a href="http.md#messageconnection"><code>message.connection</code></a>.</p>
<h3>DEP0150: Changing the value of <code>process.config</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>process.config</code> property provides access to Node.js compile-time settings.
However, the property is mutable and therefore subject to tampering. The ability
to change the value will be removed in a future version of Node.js.</p>
<h3>DEP0151: Main index lookup and extension searching</h3>
<p>Type: Runtime</p>
<p>Previously, <code>index.js</code> and extension searching lookups would apply to
<code>import 'pkg'</code> main entry point resolution, even when resolving ES modules.</p>
<p>With this deprecation, all ES module main entry point resolutions require
an explicit <a href="packages.md#main-entry-point-export"><code>&quot;exports&quot;</code> or <code>&quot;main&quot;</code> entry</a> with the exact file extension.</p>
<h3>DEP0152: Extension PerformanceEntry properties</h3>
<p>Type: End-of-Life</p>
<p>The <code>'gc'</code>, <code>'http2'</code>, and <code>'http'</code> {PerformanceEntry} object types used to have
additional properties assigned to them that provide additional information.
These properties are now available within the standard <code>detail</code> property
of the <code>PerformanceEntry</code> object. The deprecated accessors have been
removed.</p>
<h3>DEP0153: <code>dns.lookup</code> and <code>dnsPromises.lookup</code> options type coercion</h3>
<p>Type: End-of-Life</p>
<p>Using a non-nullish non-integer value for <code>family</code> option, a non-nullish
non-number value for <code>hints</code> option, a non-nullish non-boolean value for <code>all</code>
option, or a non-nullish non-boolean value for <code>verbatim</code> option in
<a href="dns.md#dnslookuphostname-options-callback"><code>dns.lookup()</code></a> and <a href="dns.md#dnspromiseslookuphostname-options"><code>dnsPromises.lookup()</code></a> throws an
<code>ERR_INVALID_ARG_TYPE</code> error.</p>
<h3>DEP0154: RSA-PSS generate key pair options</h3>
<p>Type: End-of-Life</p>
<p>Use  <code>'hashAlgorithm'</code> instead of <code>'hash'</code>, and <code>'mgf1HashAlgorithm'</code> instead of <code>'mgf1Hash'</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/crypto-rsa-pss-update">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/crypto-rsa-pss-update
</code></pre>
<h3>DEP0155: Trailing slashes in pattern specifier resolutions</h3>
<p>Type: Runtime</p>
<p>The remapping of specifiers ending in <code>&quot;/&quot;</code> like <code>import 'pkg/x/'</code> is deprecated
for package <code>&quot;exports&quot;</code> and <code>&quot;imports&quot;</code> pattern resolutions.</p>
<h3>DEP0156: <code>.aborted</code> property and <code>'abort'</code>, <code>'aborted'</code> event in <code>http</code></h3>
<p>Type: Documentation-only</p>
<p>Move to {Stream} API instead, as the <a href="http.md#class-httpclientrequest"><code>http.ClientRequest</code></a>,
<a href="http.md#class-httpserverresponse"><code>http.ServerResponse</code></a>, and <a href="http.md#class-httpincomingmessage"><code>http.IncomingMessage</code></a> are all stream-based.
Check <code>stream.destroyed</code> instead of the <code>.aborted</code> property, and listen for
<code>'close'</code> instead of <code>'abort'</code>, <code>'aborted'</code> event.</p>
<p>The <code>.aborted</code> property and <code>'abort'</code> event are only useful for detecting
<code>.abort()</code> calls. For closing a request early, use the Stream
<code>.destroy([error])</code> then check the <code>.destroyed</code> property and <code>'close'</code> event
should have the same effect. The receiving end should also check the
<a href="stream.md#readablereadableended"><code>readable.readableEnded</code></a> value on <a href="http.md#class-httpincomingmessage"><code>http.IncomingMessage</code></a> to get whether
it was an aborted or graceful destroy.</p>
<h3>DEP0157: Thenable support in streams</h3>
<p>Type: End-of-Life</p>
<p>An undocumented feature of Node.js streams was to support thenables in
implementation methods. This is now deprecated, use callbacks instead and avoid
use of async function for streams implementation methods.</p>
<p>This feature caused users to encounter unexpected problems where the user
implements the function in callback style but uses e.g. an async method which
would cause an error since mixing promise and callback semantics is not valid.</p>
<pre><code class="language-js">const w = new Writable({
  async final(callback) {
    await someOp();
    callback();
  },
});
</code></pre>
<h3>DEP0158: <code>buffer.slice(start, end)</code></h3>
<p>Type: Documentation-only</p>
<p>This method was deprecated because it is not compatible with
<code>Uint8Array.prototype.slice()</code>, which is a superclass of <code>Buffer</code>.</p>
<p>Use <a href="buffer.md#bufsubarraystart-end"><code>buffer.subarray</code></a> which does the same thing instead.</p>
<h3>DEP0159: <code>ERR_INVALID_CALLBACK</code></h3>
<p>Type: End-of-Life</p>
<p>This error code was removed due to adding more confusion to
the errors used for value type validation.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/err-invalid-callback">source</a>):</p>
<pre><code class="language-bash">npx codemod @nodejs/err-invalid-callback
</code></pre>
<h3>DEP0160: <code>process.on('multipleResolves', handler)</code></h3>
<p>Type: End-of-Life</p>
<p>This event was deprecated and removed because it did not work with V8 promise
combinators which diminished its usefulness.</p>
<h3>DEP0161: <code>process._getActiveRequests()</code> and <code>process._getActiveHandles()</code></h3>
<p>Type: Documentation-only</p>
<p>The <code>process._getActiveHandles()</code> and <code>process._getActiveRequests()</code>
functions are not intended for public use and can be removed in future
releases.</p>
<p>Use <a href="process.md#processgetactiveresourcesinfo"><code>process.getActiveResourcesInfo()</code></a> to get a list of types of active
resources and not the actual references.</p>
<h3>DEP0162: <code>fs.write()</code>, <code>fs.writeFileSync()</code> coercion to string</h3>
<p>Type: End-of-Life</p>
<p>Implicit coercion of objects with own <code>toString</code> property, passed as second
parameter in <a href="fs.md#fswritefd-buffer-offset-length-position-callback"><code>fs.write()</code></a>, <a href="fs.md#fswritefilefile-data-options-callback"><code>fs.writeFile()</code></a>, <a href="fs.md#fsappendfilepath-data-options-callback"><code>fs.appendFile()</code></a>,
<a href="fs.md#fswritefilesyncfile-data-options"><code>fs.writeFileSync()</code></a>, and <a href="fs.md#fsappendfilesyncpath-data-options"><code>fs.appendFileSync()</code></a> is deprecated.
Convert them to primitive strings.</p>
<h3>DEP0163: <code>channel.subscribe(onMessage)</code>, <code>channel.unsubscribe(onMessage)</code></h3>
<p>Type: Deprecation revoked</p>
<p>These methods were deprecated because their use could leave the channel object
vulnerable to being garbage-collected if not strongly referenced by the user.
The deprecation was revoked because channel objects are now resistant to
garbage collection when the channel has active subscribers.</p>
<h3>DEP0164: <code>process.exit(code)</code>, <code>process.exitCode</code> coercion to integer</h3>
<p>Type: End-of-Life</p>
<p>Values other than <code>undefined</code>, <code>null</code>, integer numbers, and integer strings
(e.g., <code>'1'</code>) are deprecated as value for the <code>code</code> parameter in
<a href="process.md#processexitcode"><code>process.exit()</code></a> and as value to assign to <a href="process.md#processexitcode_1"><code>process.exitCode</code></a>.</p>
<h3>DEP0165: <code>--trace-atomics-wait</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>--trace-atomics-wait</code> flag has been removed because
it uses the V8 hook <code>SetAtomicsWaitCallback</code>,
that will be removed in a future V8 release.</p>
<h3>DEP0166: Double slashes in imports and exports targets</h3>
<p>Type: Runtime</p>
<p>Package imports and exports targets mapping into paths including a double slash
(of <em>&quot;/&quot;</em> or <em>&quot;\&quot;</em>) are deprecated and will fail with a resolution validation
error in a future release. This same deprecation also applies to pattern matches
starting or ending in a slash.</p>
<h3>DEP0167: Weak <code>DiffieHellmanGroup</code> instances (<code>modp1</code>, <code>modp2</code>, <code>modp5</code>)</h3>
<p>Type: Documentation-only</p>
<p>The well-known MODP groups <code>modp1</code>, <code>modp2</code>, and <code>modp5</code> are deprecated because
they are not secure against practical attacks. See <a href="https://www.rfc-editor.org/rfc/rfc8247#section-2.4">RFC 8247 Section 2.4</a> for
details.</p>
<p>These groups might be removed in future versions of Node.js. Applications that
rely on these groups should evaluate using stronger MODP groups instead.</p>
<h3>DEP0168: Unhandled exception in Node-API callbacks</h3>
<p>Type: Runtime</p>
<p>The implicit suppression of uncaught exceptions in Node-API callbacks is now
deprecated.</p>
<p>Set the flag <a href="cli.md#--force-node-api-uncaught-exceptions-policy"><code>--force-node-api-uncaught-exceptions-policy</code></a> to force Node.js
to emit an <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a> event if the exception is not handled in
Node-API callbacks.</p>
<h3>DEP0169: Insecure url.parse()</h3>
<p>Type: Application (non-<code>node_modules</code> code only)</p>
<p><a href="url.md#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> behavior is not standardized and prone to errors that
have security implications. Use the <a href="url.md#the-whatwg-url-api">WHATWG URL API</a> instead. CVEs are not
issued for <code>url.parse()</code> vulnerabilities.</p>
<p>Calling <a href="url.md#urlformaturlstring"><code>url.format(urlString)</code></a> or <a href="url.md#urlresolvefrom-to"><code>url.resolve()</code></a> invokes <code>url.parse()</code>
internally, and is therefore also covered by this deprecation.</p>
<h3>DEP0170: Invalid port when using <code>url.parse()</code></h3>
<p>Type: End-of-Life</p>
<p><a href="url.md#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> used to accept URLs with ports that are not numbers. This
behavior might result in host name spoofing with unexpected input. These URLs
will throw an error (which the <a href="url.md#the-whatwg-url-api">WHATWG URL API</a> also does).</p>
<h3>DEP0171: Setters for <code>http.IncomingMessage</code> headers and trailers</h3>
<p>Type: Documentation-only</p>
<p>In a future version of Node.js, <a href="http.md#messageheaders"><code>message.headers</code></a>,
<a href="http.md#messageheadersdistinct"><code>message.headersDistinct</code></a>, <a href="http.md#messagetrailers"><code>message.trailers</code></a>, and
<a href="http.md#messagetrailersdistinct"><code>message.trailersDistinct</code></a> will be read-only.</p>
<h3>DEP0172: The <code>asyncResource</code> property of <code>AsyncResource</code> bound functions</h3>
<p>Type: End-of-Life</p>
<p>Older versions of Node.js would add the <code>asyncResource</code> when a function is
bound to an <code>AsyncResource</code>. It no longer does.</p>
<h3>DEP0173: the <code>assert.CallTracker</code> class</h3>
<p>Type: End-of-Life</p>
<p>The <code>assert.CallTracker</code> API has been removed.</p>
<h3>DEP0174: calling <code>promisify</code> on a function that returns a <code>Promise</code></h3>
<p>Type: Runtime</p>
<p>Calling <a href="util.md#utilpromisifyoriginal"><code>util.promisify</code></a> on a function that returns a <code>Promise</code> will ignore
the result of said promise, which can lead to unhandled promise rejections.</p>
<h3>DEP0175: <code>util.toUSVString</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="util.md#utiltousvstringstring"><code>util.toUSVString()</code></a> API is deprecated. Please use
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toWellFormed"><code>String.prototype.toWellFormed</code></a> instead.</p>
<h3>DEP0176: <code>fs.F_OK</code>, <code>fs.R_OK</code>, <code>fs.W_OK</code>, <code>fs.X_OK</code></h3>
<p>Type: End-of-Life</p>
<p><code>F_OK</code>, <code>R_OK</code>, <code>W_OK</code> and <code>X_OK</code> getters exposed directly on <code>node:fs</code> were
removed. Get them from <code>fs.constants</code> or <code>fs.promises.constants</code> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/fs-access-mode-constants">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/fs-access-mode-constants
</code></pre>
<h3>DEP0177: <code>util.types.isWebAssemblyCompiledModule</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>util.types.isWebAssemblyCompiledModule</code> API has been removed.
Please use <code>value instanceof WebAssembly.Module</code> instead.</p>
<h3>DEP0178: <code>dirent.path</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>dirent.path</code> property has been removed due to its lack of consistency across
release lines. Please use <a href="fs.md#direntparentpath"><code>dirent.parentPath</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/dirent-path-to-parent-path">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/dirent-path-to-parent-path
</code></pre>
<h3>DEP0179: <code>Hash</code> constructor</h3>
<p>Type: Runtime</p>
<p>Calling <code>Hash</code> class directly with <code>Hash()</code> or <code>new Hash()</code> is
deprecated due to being internals, not intended for public use.
Please use the <a href="crypto.md#cryptocreatehashalgorithm-options"><code>crypto.createHash()</code></a> method to create Hash instances.</p>
<h3>DEP0180: <code>fs.Stats</code> constructor</h3>
<p>Type: Runtime</p>
<p>Calling <code>fs.Stats</code> class directly with <code>Stats()</code> or <code>new Stats()</code> is
deprecated due to being internals, not intended for public use.</p>
<h3>DEP0181: <code>Hmac</code> constructor</h3>
<p>Type: Runtime</p>
<p>Calling <code>Hmac</code> class directly with <code>Hmac()</code> or <code>new Hmac()</code> is
deprecated due to being internals, not intended for public use.
Please use the <a href="crypto.md#cryptocreatehmacalgorithm-key-options"><code>crypto.createHmac()</code></a> method to create Hmac instances.</p>
<h3>DEP0182: Short GCM authentication tags without explicit <code>authTagLength</code></h3>
<p>Type: End-of-Life</p>
<p>For ciphers in GCM mode, the <a href="crypto.md#deciphersetauthtagbuffer-encoding"><code>decipher.setAuthTag()</code></a> function used to accept
authentication tags of any valid length (see also <a href="#DEP0090">DEP0090</a>). This
exception has been removed to better align with recommendations per
<a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf">NIST SP 800-38D</a>, and applications that intend to use authentication tags
that are shorter than the default authentication tag length (i.e., shorter than
16 bytes for AES-GCM) must explicitly set the <code>authTagLength</code> option of the
<a href="crypto.md#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a> function to the appropriate length.</p>
<h3>DEP0183: OpenSSL engine-based APIs</h3>
<p>Type: Runtime</p>
<p>OpenSSL 3 has deprecated support for custom engines with a recommendation to
switch to its new provider model. The <code>clientCertEngine</code> option for
<code>https.request()</code>, <a href="tls.md#tlscreatesecurecontextoptions"><code>tls.createSecureContext()</code></a>, and <a href="tls.md#tlscreateserveroptions-secureconnectionlistener"><code>tls.createServer()</code></a>;
the <code>privateKeyEngine</code> and <code>privateKeyIdentifier</code> for <a href="tls.md#tlscreatesecurecontextoptions"><code>tls.createSecureContext()</code></a>;
and <a href="crypto.md#cryptosetengineengine-flags"><code>crypto.setEngine()</code></a> all depend on this functionality from OpenSSL.</p>
<h3>DEP0184: Instantiating <code>node:zlib</code> classes without <code>new</code></h3>
<p>Type: End-of-Life</p>
<p>Instantiating classes without the <code>new</code> qualifier exported by the <code>node:zlib</code> module is no longer
supported. The <code>new</code> qualifier must be used instead. This applies to all Zlib classes, such as
<code>Deflate</code>, <code>DeflateRaw</code>, <code>Gunzip</code>, <code>Inflate</code>, <code>InflateRaw</code>, <code>Unzip</code>, <code>BrotliCompress</code>,
<code>BrotliDecompress</code>, <code>ZstdCompress</code>, and <code>ZstdDecompress</code>.</p>
<h3>DEP0185: Instantiating <code>node:repl</code> classes without <code>new</code></h3>
<p>Type: End-of-Life</p>
<p>Instantiating classes without the <code>new</code> qualifier exported by the <code>node:repl</code> module is deprecated.
The <code>new</code> qualifier must be used instead. This applies to all REPL classes, including
<code>REPLServer</code> and <code>Recoverable</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/repl-classes-with-new">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/repl-classes-with-new
</code></pre>
<h3>DEP0187: Passing invalid argument types to <code>fs.existsSync</code></h3>
<p>Type: Runtime</p>
<p>Passing non-supported argument types is deprecated and, instead of returning <code>false</code>,
will throw an error in a future version.</p>
<h3>DEP0188: <code>process.features.ipv6</code> and <code>process.features.uv</code></h3>
<p>Type: Documentation-only</p>
<p>These properties are unconditionally <code>true</code>. Any checks based on these properties are redundant.</p>
<h3>DEP0189: <code>process.features.tls_*</code></h3>
<p>Type: Documentation-only</p>
<p><code>process.features.tls_alpn</code>, <code>process.features.tls_ocsp</code>, and <code>process.features.tls_sni</code> are
deprecated, as their values are guaranteed to be identical to that of <code>process.features.tls</code>.</p>
<h3>DEP0190: Passing <code>args</code> to <code>node:child_process</code> <code>execFile</code>/<code>spawn</code> with <code>shell</code> option</h3>
<p>Type: Runtime</p>
<p>When an <code>args</code> array is passed to <a href="child_process.md#child_processexecfilefile-args-options-callback"><code>child_process.execFile</code></a> or <a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn</code></a> with the option
<code>{ shell: true }</code> or <code>{ shell: '/path/to/shell' }</code>, the values are not escaped, only space-separated,
which can lead to shell injection.</p>
<h3>DEP0191: <code>repl.builtinModules</code></h3>
<p>Type: Documentation-only (supports <a href="cli.md#--pending-deprecation"><code>--pending-deprecation</code></a>)</p>
<p>The <code>node:repl</code> module exports a <code>builtinModules</code> property that contains an array
of built-in modules. This was incomplete and matched the already deprecated
<code>repl._builtinLibs</code> (<a href="#dep0142-repl_builtinlibs">DEP0142</a>) instead it's better to rely
upon <code>require('node:module').builtinModules</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/repl-builtin-modules">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/repl-builtin-modules
</code></pre>
<h3>DEP0192: <code>require('node:_tls_common')</code> and <code>require('node:_tls_wrap')</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:_tls_common</code> and <code>node:_tls_wrap</code> modules are deprecated as they should be considered
an internal nodejs implementation rather than a public facing API, use <code>node:tls</code> instead.</p>
<h3>DEP0193: <code>require('node:_stream_*')</code></h3>
<p>Type: End-of-Life</p>
<p>The <code>node:_stream_duplex</code>, <code>node:_stream_passthrough</code>, <code>node:_stream_readable</code>, <code>node:_stream_transform</code>,
<code>node:_stream_wrap</code> and <code>node:_stream_writable</code> modules are deprecated as they should be considered
an internal nodejs implementation rather than a public facing API, use <code>node:stream</code> instead.</p>
<h3>DEP0194: HTTP/2 priority signaling</h3>
<p>Type: End-of-Life</p>
<p>The support for priority signaling has been removed following its deprecation in the <a href="https://datatracker.ietf.org/doc/html/rfc9113#section-5.3.1">RFC 9113</a>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/http2-priority-signaling">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/http2-priority-signaling
</code></pre>
<h3>DEP0195: Instantiating <code>node:http</code> classes without <code>new</code></h3>
<p>Type: Runtime</p>
<p>Instantiating classes without the <code>new</code> qualifier exported by the <code>node:http</code> module is deprecated.
It is recommended to use the <code>new</code> qualifier instead. This applies to all http classes, such as
<code>OutgoingMessage</code>, <code>IncomingMessage</code>, <code>ServerResponse</code>, <code>ClientRequest</code>, <code>Server</code>, and <code>Agent</code>.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/http-classes-with-new">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/http-classes-with-new
</code></pre>
<h3>DEP0196: Calling <code>node:child_process</code> functions with <code>options.shell</code> as an empty string</h3>
<p>Type: Documentation-only</p>
<p>Calling the process-spawning functions with <code>{ shell: '' }</code> is almost certainly
unintentional, and can cause aberrant behavior.</p>
<p>To make <a href="child_process.md#child_processexecfilefile-args-options-callback"><code>child_process.execFile</code></a> or <a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn</code></a> invoke the
default shell, use <code>{ shell: true }</code>. If the intention is not to invoke a shell
(default behavior), either omit the <code>shell</code> option, or set it to <code>false</code> or a
nullish value.</p>
<p>To make <a href="child_process.md#child_processexeccommand-options-callback"><code>child_process.exec</code></a> invoke the default shell, either omit the
<code>shell</code> option, or set it to a nullish value. If the intention is not to invoke
a shell, use <a href="child_process.md#child_processexecfilefile-args-options-callback"><code>child_process.execFile</code></a> instead.</p>
<h3>DEP0197: <code>util.types.isNativeError()</code></h3>
<p>Type: Documentation-only</p>
<p>The <a href="util.md#utiltypesisnativeerrorvalue"><code>util.types.isNativeError</code></a> API is deprecated. Please use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError"><code>Error.isError</code></a> instead.</p>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/types-is-native-error">source</a>):</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/types-is-native-error
</code></pre>
<h3>DEP0198: Creating SHAKE-128 and SHAKE-256 digests without an explicit <code>options.outputLength</code></h3>
<p>Type: End-of-Life</p>
<p>Creating SHAKE-128 and SHAKE-256 digests without an explicit
<code>options.outputLength</code> is no longer supported.</p>
<h3>DEP0199: <code>require('node:_http_*')</code></h3>
<p>Type: Documentation-only</p>
<p>The <code>node:_http_agent</code>, <code>node:_http_client</code>, <code>node:_http_common</code>, <code>node:_http_incoming</code>,
<code>node:_http_outgoing</code> and <code>node:_http_server</code> modules are deprecated as they should be considered
an internal nodejs implementation rather than a public facing API, use <code>node:http</code> instead.</p>
<h3>DEP0200: Closing fs.Dir on garbage collection</h3>
<p>Type: Documentation-only</p>
<p>Allowing a <a href="fs.md#class-fsdir"><code>fs.Dir</code></a> object to be closed on garbage collection is
deprecated. In the future, doing so might result in a thrown error that will
terminate the process.</p>
<p>Please ensure that all <code>fs.Dir</code> objects are explicitly closed using
<code>Dir.prototype.close()</code> or <code>using</code> keyword:</p>
<pre><code class="language-mjs">import { opendir } from 'node:fs/promises';

{
  await using dir = await opendir('/async/disposable/directory');
} // Closed by dir[Symbol.asyncDispose]()

{
  using dir = await opendir('/sync/disposable/directory');
} // Closed by dir[Symbol.dispose]()

{
  const dir = await opendir('/unconditionally/iterated/directory');
  for await (const entry of dir) {
    // process an entry
  } // Closed by iterator
}

{
  let dir;
  try {
    dir = await opendir('/legacy/closeable/directory');
  } finally {
    await dir?.close();
  }
}
</code></pre>
<h3>DEP0201: Passing <code>options.type</code> to <code>Duplex.toWeb()</code></h3>
<p>Type: Runtime</p>
<p>Passing the <code>type</code> option to <a href="stream.md#streamduplextowebstreamduplex-options"><code>Duplex.toWeb()</code></a> is deprecated. To specify the
type of the readable half of the constructed readable-writable pair, use the
<code>readableType</code> option instead.</p>
<h3>DEP0202: <code>Http1IncomingMessage</code> and <code>Http1ServerResponse</code> options of HTTP/2 servers</h3>
<p>Type: Documentation-only</p>
<p>The <code>Http1IncomingMessage</code> and <code>Http1ServerResponse</code> options of
<a href="http2.md#http2createserveroptions-onrequesthandler"><code>http2.createServer()</code></a> and <a href="http2.md#http2createsecureserveroptions-onrequesthandler"><code>http2.createSecureServer()</code></a> are
deprecated. Use <code>http1Options.IncomingMessage</code> and
<code>http1Options.ServerResponse</code> instead.</p>
<pre><code class="language-cjs">// Deprecated
const server = http2.createSecureServer({
  allowHTTP1: true,
  Http1IncomingMessage: MyIncomingMessage,
  Http1ServerResponse: MyServerResponse,
});
</code></pre>
<pre><code class="language-cjs">// Use this instead
const server = http2.createSecureServer({
  allowHTTP1: true,
  http1Options: {
    IncomingMessage: MyIncomingMessage,
    ServerResponse: MyServerResponse,
  },
});
</code></pre>
<h3>DEP0203: Passing <code>CryptoKey</code> to <code>node:crypto</code> APIs</h3>
<p>Type: End-of-Life</p>
<p>Passing a <a href="webcrypto.md#class-cryptokey"><code>CryptoKey</code></a> to <code>node:crypto</code> functions is no longer supported.</p>
<h3>DEP0204: <code>KeyObject.from()</code> with non-extractable <code>CryptoKey</code></h3>
<p>Type: End-of-Life</p>
<p>Passing a non-extractable <a href="webcrypto.md#class-cryptokey"><code>CryptoKey</code></a> to <a href="crypto.md#static-method-keyobjectfromkey"><code>KeyObject.from()</code></a> is
no longer supported.</p>
<h3>DEP0205: <code>module.register()</code></h3>
<p>Type: Runtime</p>
<p><a href="module.md#moduleregisterspecifier-parenturl-options"><code>module.register()</code></a> is deprecated. Use <a href="module.md#moduleregisterhooksoptions"><code>module.registerHooks()</code></a>
instead.</p>
<p>The <code>module.register()</code> API provides off-thread async hooks for customizing ES modules;
the <code>module.registerHooks()</code> API provides similar hooks that are synchronous, in-thread, and
work for all types of modules.
Supporting async hooks has proven to be complex, involving worker threads orchestration, and there are issues
that have proven unresolvable. See <a href="module.md#caveats-of-asynchronous-customization-hooks">caveats of asynchronous customization hooks</a>. Please migrate to
<code>module.registerHooks()</code> as soon as possible as <code>module.register()</code> will be
removed in a future version of Node.js.</p>
<h3>DEP0206: Calling <code>digest()</code> on an already-finalized <code>Hmac</code> instance</h3>
<p>Type: Runtime</p>
<p>Calling <code>hmac.digest()</code> more than once returns an empty buffer instead of
throwing an error. This behavior is inconsistent with <code>hash.digest()</code> and
may lead to subtle bugs. Calling <code>hmac.digest()</code> on a finalized <code>Hmac</code> instance
will throw an error in a future version.</p>
<h3>DEP0207: <code>.aborted</code> property and <code>'aborted'</code> event in <code>node:http2</code></h3>
<p>Type: Documentation-only</p>
<p>Use standard stream events and state checks instead. Read-side aborts
(peer cancelled before sending <code>END_STREAM</code>) now surface as <code>'error'</code>
with code <code>ERR_HTTP2_STREAM_ABORTED</code> (clean peer reset code) or
<code>ERR_HTTP2_STREAM_ERROR</code> (non-clean code). Write-side aborts (peer
cancelled while we still had writes in flight) are detectable from
<code>'close'</code> by checking <code>writableFinished</code>. Parallels <a href="#dep0156-aborted-property-and-abort-aborted-event-in-http">DEP0156</a> for
<code>http</code>.</p>
<pre><code class="language-cjs">// Deprecated
server.on('stream', (stream) =&gt; {
  stream.on('aborted', () =&gt; {
    // Stream was closed while the writable was still open.
  });
});
</code></pre>
<pre><code class="language-cjs">// Use this instead
server.on('stream', (stream) =&gt; {
  // Read-side abort: peer cancelled before sending END_STREAM.
  stream.on('error', (err) =&gt; {
    if (err.code === 'ERR_HTTP2_STREAM_ABORTED' ||
        err.code === 'ERR_HTTP2_STREAM_ERROR') {
      // Peer cancelled the request mid-stream.
    }
  });
  // Write-side abort: our response didn't fully send before close.
  stream.on('close', () =&gt; {
    if (!stream.writableFinished) {
      // Writes were aborted (peer cancel, local destroy, etc.).
    }
  });
});
</code></pre>
<p>The same patterns apply to the compatibility API (<code>req</code> / <code>res</code> on
<code>http2.createServer((req, res) =&gt; …)</code>). On the read-side, errors on the
underlying stream are emitted from <code>req</code>. On the write-side you can use
<code>res.on('close', …)</code> to hear about client aborts by checking
<code>res.writableFinished</code> to confirm whether the response was written
successfully before the response closed.</p>
<h3>DEP0208: <code>Server.prototype._listen2</code></h3>
<p>Type: Runtime</p>
<p><code>net.Server.prototype._listen2</code> is an undocumented alias for an internal
function that sets up the listening handle. It is kept only so that code
replacing it keeps being called by <a href="net.md#serverlisten"><code>server.listen()</code></a>, and it will be
removed in a future version of Node.js. Use <a href="net.md#serverlisten"><code>server.listen()</code></a> instead of
calling or overriding <code>_listen2</code>.</p>
<h3>DEP0209: Using <code>AbortSignal</code> to dispose of resources</h3>
<p>Type: Documentation-only</p>
<p>Using <code>AbortSignal</code> to destroy long-lived resources is deprecated. Prefer
<code>using</code> for resource cleanup.</p>
<p><code>AbortSignal</code> is still a good fit for canceling actions, propagating
cancellation from the outside, and timeouts.</p>
<pre><code class="language-js">// Deprecated
async function example() {
  const ac = new AbortController();
  const server = http.createServer(handler);
  server.listen({ port: 3000, signal: ac.signal });

  await doWork();
  ac.abort();
}
</code></pre>
<pre><code class="language-js">// Use this instead
async function example() {
  await using server = http.createServer(handler);
  server.listen(3000);

  await doWork();
}
</code></pre>
<pre><code class="language-js">// Deprecated
async function example() {
  const ac = new AbortController();
  const stream = addAbortSignal(ac.signal, fs.createReadStream(file));

  await consume(stream);
  ac.abort();
}
</code></pre>
<pre><code class="language-js">// Use this instead
async function example() {
  await using stream = fs.createReadStream(file);

  await consume(stream);
}
</code></pre>
<pre><code class="language-js">// Deprecated
async function example() {
  const ac = new AbortController();
  const child = spawn(command, args, { signal: ac.signal });

  await doWork();
  ac.abort();
}
</code></pre>
<pre><code class="language-js">// Use this instead
async function example() {
  using child = spawn(command, args);

  await doWork();
}
</code></pre>
<h3>DEP0210: <code>sqlite.DatabaseSync</code></h3>
<p>Type: Documentation-only</p>
<p><code>node:sqlite</code>'s <code>DatabaseSync</code> class was renamed to <code>Database</code>. <code>DatabaseSync</code>
is kept as a deprecated alias. Use <code>Database</code> instead.</p>
<h3>DEP0211: <code>sqlite.StatementSync</code></h3>
<p>Type: Documentation-only</p>
<p><code>node:sqlite</code>'s <code>StatementSync</code> class was renamed to <code>Statement</code>.
<code>StatementSync</code> is kept as a deprecated alias. Use <code>Statement</code> instead.</p>
