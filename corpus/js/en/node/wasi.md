---
id: "js-en-function-node-wasi"
language: "js"
lang: "en"
category: "function"
name: "node:wasi"
title: "WebAssembly System Interface (WASI)"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/wasi.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# WebAssembly System Interface (WASI)

<h1>WebAssembly System Interface (WASI)</h1>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>&lt;strong class=&quot;critical&quot;&gt;The <code>node:wasi</code> module does not currently provide the
comprehensive file system security properties provided by some WASI runtimes.
Full support for secure file system sandboxing may or may not be implemented in
future. In the mean time, do not rely on it to run untrusted code. &lt;/strong&gt;</p>
<p>The WASI API provides an implementation of the <a href="https://wasi.dev/">WebAssembly System Interface</a>
specification. WASI gives WebAssembly applications access to the underlying
operating system via a collection of POSIX-like functions.</p>
<pre><code class="language-mjs">import { readFile } from 'node:fs/promises';
import { WASI } from 'node:wasi';
import { argv, env } from 'node:process';

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/local': '/some/real/path/that/wasm/can/access',
  },
});

const wasm = await WebAssembly.compile(
  await readFile(new URL('./demo.wasm', import.meta.url)),
);
const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

wasi.start(instance);
</code></pre>
<pre><code class="language-cjs">const { readFile } = require('node:fs/promises');
const { WASI } = require('node:wasi');
const { argv, env } = require('node:process');
const { join } = require('node:path');

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/local': '/some/real/path/that/wasm/can/access',
  },
});

(async () =&gt; {
  const wasm = await WebAssembly.compile(
    await readFile(join(__dirname, 'demo.wasm')),
  );
  const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

  wasi.start(instance);
})();
</code></pre>
<p>To run the above example, create a new WebAssembly text format file named
<code>demo.wat</code>:</p>
<pre><code class="language-text">(module
    ;; Import the required fd_write WASI function which will write the given io vectors to stdout
    ;; The function signature for fd_write is:
    ;; (File Descriptor, *iovs, iovs_len, nwritten) -&gt; Returns number of bytes written
    (import &quot;wasi_snapshot_preview1&quot; &quot;fd_write&quot; (func $fd_write (param i32 i32 i32 i32) (result i32)))

    (memory 1)
    (export &quot;memory&quot; (memory 0))

    ;; Write 'hello world\n' to memory at an offset of 8 bytes
    ;; Note the trailing newline which is required for the text to appear
    (data (i32.const 8) &quot;hello world\n&quot;)

    (func $main (export &quot;_start&quot;)
        ;; Creating a new io vector within linear memory
        (i32.store (i32.const 0) (i32.const 8))  ;; iov.iov_base - This is a pointer to the start of the 'hello world\n' string
        (i32.store (i32.const 4) (i32.const 12))  ;; iov.iov_len - The length of the 'hello world\n' string

        (call $fd_write
            (i32.const 1) ;; file_descriptor - 1 for stdout
            (i32.const 0) ;; *iovs - The pointer to the iov array, which is stored at memory location 0
            (i32.const 1) ;; iovs_len - We're printing 1 string stored in an iov - so one.
            (i32.const 20) ;; nwritten - A place in memory to store the number of bytes written
        )
        drop ;; Discard the number of bytes written from the top of the stack
    )
)
</code></pre>
<p>Use <a href="https://github.com/WebAssembly/wabt">wabt</a> to compile <code>.wat</code> to <code>.wasm</code></p>
<pre><code class="language-bash">wat2wasm demo.wat
</code></pre>
<h2>Security</h2>
<p>WASI provides a capabilities-based model through which applications are provided
their own custom <code>env</code>, <code>preopens</code>, <code>stdin</code>, <code>stdout</code>, <code>stderr</code>, and <code>exit</code>
capabilities.</p>
<p><strong>The current Node.js threat model does not provide secure sandboxing as is
present in some WASI runtimes.</strong></p>
<p>While the capability features are supported, they do not form a security model
in Node.js. For example, the file system sandboxing can be escaped with various
techniques. The project is exploring whether these security guarantees could be
added in future.</p>
<h2>Class: <code>WASI</code></h2>
<p>The <code>WASI</code> class provides the WASI system call API and additional convenience
methods for working with WASI-based applications. Each <code>WASI</code> instance
represents a distinct environment.</p>
<h3><code>new WASI([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>args</code> {Array} An array of strings that the WebAssembly application will
see as command-line arguments. The first argument is the virtual path to the
WASI command itself. <strong>Default:</strong> <code>[]</code>.</li>
<li><code>env</code> {Object} An object similar to <code>process.env</code> that the WebAssembly
application will see as its environment. <strong>Default:</strong> <code>{}</code>.</li>
<li><code>preopens</code> {Object} This object represents the WebAssembly application's
local directory structure. The string keys of <code>preopens</code> are treated as
directories within the file system. The corresponding values in <code>preopens</code>
are the real paths to those directories on the host machine.</li>
<li><code>returnOnExit</code> {boolean} By default, when WASI applications call
<code>__wasi_proc_exit()</code>  <code>wasi.start()</code> will return with the exit code
specified rather than terminating the process. Setting this option to
<code>false</code> will cause the Node.js process to exit with the specified
exit code instead.  <strong>Default:</strong> <code>true</code>.</li>
<li><code>stdin</code> {integer} The file descriptor used as standard input in the
WebAssembly application. <strong>Default:</strong> <code>0</code>.</li>
<li><code>stdout</code> {integer} The file descriptor used as standard output in the
WebAssembly application. <strong>Default:</strong> <code>1</code>.</li>
<li><code>stderr</code> {integer} The file descriptor used as standard error in the
WebAssembly application. <strong>Default:</strong> <code>2</code>.</li>
<li><code>version</code> {string} The version of WASI requested. Currently the only
supported versions are <code>unstable</code> and <code>preview1</code>. This option is
mandatory.</li>
</ul>
</li>
</ul>
<h3><code>wasi.getImportObject()</code></h3>
<p>Return an import object that can be passed to <code>WebAssembly.instantiate()</code> if
no other WASM imports are needed beyond those provided by WASI.</p>
<p>If version <code>unstable</code> was passed into the constructor it will return:</p>
<pre><code class="language-json">{ wasi_unstable: wasi.wasiImport }
</code></pre>
<p>If version <code>preview1</code> was passed into the constructor it will return:</p>
<pre><code class="language-json">{ wasi_snapshot_preview1: wasi.wasiImport }
</code></pre>
<h3><code>wasi.start(instance)</code></h3>
<ul>
<li><code>instance</code> {WebAssembly.Instance}</li>
</ul>
<p>Attempt to begin execution of <code>instance</code> as a WASI command by invoking its
<code>_start()</code> export. If <code>instance</code> does not contain a <code>_start()</code> export, or if
<code>instance</code> contains an <code>_initialize()</code> export, then an exception is thrown.</p>
<p><code>start()</code> requires that <code>instance</code> exports a <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory"><code>WebAssembly.Memory</code></a> named
<code>memory</code>. If <code>instance</code> does not have a <code>memory</code> export an exception is thrown.</p>
<p>If <code>start()</code> is called more than once, an exception is thrown.</p>
<h3><code>wasi.initialize(instance)</code></h3>
<ul>
<li><code>instance</code> {WebAssembly.Instance}</li>
</ul>
<p>Attempt to initialize <code>instance</code> as a WASI reactor by invoking its
<code>_initialize()</code> export, if it is present. If <code>instance</code> contains a <code>_start()</code>
export, then an exception is thrown.</p>
<p><code>initialize()</code> requires that <code>instance</code> exports a <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory"><code>WebAssembly.Memory</code></a> named
<code>memory</code>. If <code>instance</code> does not have a <code>memory</code> export an exception is thrown.</p>
<p>If <code>initialize()</code> is called more than once, an exception is thrown.</p>
<h3><code>wasi.finalizeBindings(instance[, options])</code></h3>
<ul>
<li><code>instance</code> {WebAssembly.Instance}</li>
<li><code>options</code> {Object}
<ul>
<li><code>memory</code> {WebAssembly.Memory} <strong>Default:</strong> <code>instance.exports.memory</code>.</li>
</ul>
</li>
</ul>
<p>Set up WASI host bindings to <code>instance</code> without calling <code>initialize()</code>
or <code>start()</code>. This method is useful when the WASI module is instantiated in
child threads for sharing the memory across threads.</p>
<p><code>finalizeBindings()</code> requires that either <code>instance</code> exports a
<a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory"><code>WebAssembly.Memory</code></a> named <code>memory</code> or user specify a
<a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory"><code>WebAssembly.Memory</code></a> object in <code>options.memory</code>. If the <code>memory</code> is invalid
an exception is thrown.</p>
<p><code>start()</code> and <code>initialize()</code> will call <code>finalizeBindings()</code> internally.
If <code>finalizeBindings()</code> is called more than once, an exception is thrown.</p>
<h3><code>wasi.wasiImport</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p><code>wasiImport</code> is an object that implements the WASI system call API. This object
should be passed as the <code>wasi_snapshot_preview1</code> import during the instantiation
of a <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance"><code>WebAssembly.Instance</code></a>.</p>
