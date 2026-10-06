---
id: "js-en-function-node-vfs"
language: "js"
lang: "en"
category: "function"
name: "node:vfs"
title: "Virtual File System"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/vfs.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Virtual File System

<h1>Virtual File System</h1>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The <code>node:vfs</code> module provides a virtual file system with a <code>node:fs</code>-like API.
It is useful for tests, fixtures, embedded assets, and other scenarios where you
need a self-contained file system without touching the actual file-system.</p>
<p>To access it:</p>
<pre><code class="language-mjs">import vfs from 'node:vfs';
</code></pre>
<pre><code class="language-cjs">const vfs = require('node:vfs');
</code></pre>
<p>This module is only available under the <code>node:</code> scheme, and only when Node.js
is started with the <code>--experimental-vfs</code> flag.</p>
<h2>Security</h2>
<p>The VFS API is not a sandbox, permission system, or access-control mechanism.
It does not isolate untrusted code from the host file system or from other
Node.js capabilities. Code that can access a <a href="#class-virtualfilesystem"><code>VirtualFileSystem</code></a> instance,
mount it, select its provider, or pass paths to it is trusted application code.</p>
<p>Mounting a VFS only redirects supported <a href="fs.md"><code>node:fs</code></a> calls whose resolved paths
are under the mount point. It does not prevent code from using other paths or
other Node.js APIs to access resources available to the process.
<a href="#class-realfsprovider"><code>RealFSProvider</code></a> maps VFS paths under its configured root and rejects paths
that resolve outside that root, but that check is not a security boundary.
<a href="#class-zipprovider"><code>ZipProvider</code></a> has no real file-system paths of its own to escape; its
entries only ever exist within the archive's own namespace. Do not rely on VFS
to run untrusted code; use operating-system-level isolation, such as separate
users, containers, or platform sandboxes, when a security boundary is
required.</p>
<h2>Basic usage</h2>
<pre><code class="language-cjs">const vfs = require('node:vfs');

const myVfs = vfs.create();
myVfs.mkdirSync('/dir', { recursive: true });
myVfs.writeFileSync('/dir/hello.txt', 'Hello, VFS!');

console.log(myVfs.readFileSync('/dir/hello.txt', 'utf8')); // 'Hello, VFS!'
</code></pre>
<p><code>vfs.create()</code> returns a <a href="#class-virtualfilesystem"><code>VirtualFileSystem</code></a> instance backed by a
<a href="#class-memoryprovider"><code>MemoryProvider</code></a> by default. The instance exposes synchronous,
callback-based, and promise-based file system methods that mirror the
shape of the <a href="fs.md"><code>node:fs</code></a> API. All paths are POSIX-style and absolute
(starting with <code>/</code>).</p>
<p>By default, the file tree is private to the VFS instance. To expose
it through the global <code>node:fs</code> module, <code>require()</code>, and <code>import</code>,
call <a href="#vfsmount"><code>vfs.mount()</code></a>; call <a href="#vfsunmount"><code>vfs.unmount()</code></a> (or rely on a
<code>using</code> declaration) to detach again.</p>
<h2><code>vfs.create([provider][, options])</code></h2>
<ul>
<li><code>provider</code> {VirtualProvider} The provider to use. <strong>Default:</strong>
<code>new MemoryProvider()</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>emitExperimentalWarning</code> {boolean} Whether to emit the experimental
warning when the instance is created. <strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li>Returns: {VirtualFileSystem}</li>
</ul>
<p>Convenience factory equivalent to <code>new VirtualFileSystem(provider, options)</code>.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');

// Default in-memory provider
const memoryVfs = vfs.create();

// Explicit provider
const realVfs = vfs.create(new vfs.RealFSProvider('/tmp/vfs-root'));
</code></pre>
<h2><code>vfs.registerProvider(entry)</code></h2>
<ul>
<li><code>entry</code> {Object}
<ul>
<li><code>name</code> {string} A short identifier, used in diagnostics.</li>
<li><code>canHandle</code> {Function} Called with the resolved path and its
<a href="fs.md#class-fsstats"><code>fs.Stats</code></a>. Returns <code>true</code> if this provider should back the source.</li>
<li><code>create</code> {Function} Called with the resolved path and its <a href="fs.md#class-fsstats"><code>fs.Stats</code></a>.
Returns the {VirtualProvider} backing the source.</li>
</ul>
</li>
</ul>
<p>Registers a provider that <a href="cli.md#--vfs-loadsource"><code>--vfs-load</code></a> can select for a source it
recognizes, so a file format Node.js has no built-in provider for can still be
mounted.</p>
<p>A source is claimed by the first provider whose <code>canHandle()</code> returns <code>true</code>.
Registered providers are consulted before the built-in ones, newest
registration first, and are offered directories as well as files, so a
registered provider can back, wrap, or vet any source. If none claims the
source, the built-in providers handle it: a directory with
<a href="#class-realfsprovider"><code>RealFSProvider</code></a>, and a file whose bytes are a ZIP archive with
<a href="#class-zipprovider"><code>ZipProvider</code></a>.</p>
<p>Providers must be registered before the source is mounted. Register from a
module preloaded with <a href="cli.md#-r---require-module"><code>--require</code></a> or <a href="cli.md#--importmodule"><code>--import</code></a>:</p>
<pre><code class="language-cjs">// provider.js, preloaded with --require
const fs = require('node:fs');
const vfs = require('node:vfs');

const MAGIC = Buffer.from('CUSTOMFMT');

vfs.registerProvider({
  name: 'customfmt',
  canHandle(path, stats) {
    if (!stats.isFile()) return false;
    const head = Buffer.alloc(MAGIC.length);
    const fd = fs.openSync(path, 'r');
    try {
      fs.readSync(fd, head, 0, MAGIC.length, 0);
    } finally {
      fs.closeSync(fd);
    }
    return head.equals(MAGIC);
  },
  create(path) {
    return new MyCustomProvider(path);
  },
});
</code></pre>
<pre><code class="language-console">$ node --experimental-vfs --require ./provider.js \
       --vfs-load archive.customfmt
</code></pre>
<h2><code>vfs.vfsBase()</code></h2>
<ul>
<li>Returns: {string} The absolute path of the <a href="#the-reserved-root-directory">reserved root directory</a>.</li>
</ul>
<p>Returns the directory that holds the mount points of every mounted virtual file
system, which is <code>path.join(os.devNull, 'vfs')</code>. Reading it lists what is
mounted; see <a href="#the-reserved-root-directory">The reserved root directory</a>.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');
const fs = require('node:fs');

const myVfs = vfs.create();
const mountPoint = myVfs.mount();

fs.readdirSync(vfs.vfsBase()); // The name of every mount point in it
mountPoint.startsWith(vfs.vfsBase()); // true
</code></pre>
<h2>Class: <code>VirtualFileSystem</code></h2>
<p>A <code>VirtualFileSystem</code> wraps a <a href="#class-virtualprovider"><code>VirtualProvider</code></a> and exposes a
<code>node:fs</code>-like API. Each instance maintains its own file tree.</p>
<h3><code>new VirtualFileSystem([provider][, options])</code></h3>
<ul>
<li><code>provider</code> {VirtualProvider} The provider to use. <strong>Default:</strong>
<code>new MemoryProvider()</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>emitExperimentalWarning</code> {boolean} Whether to emit the experimental
warning. <strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
</ul>
<h3><code>vfs.mount()</code></h3>
<ul>
<li>Returns: {string} The absolute mount point.</li>
</ul>
<p>Mounts the virtual file system and returns the resulting mount point.
After mounting, files in the VFS can be accessed through the
<code>node:fs</code> module and resolved through <code>require()</code> and <code>import</code>
using paths under the returned mount point.</p>
<p>Mount points always live inside a reserved namespace that cannot have child file system entries,
so virtual paths never conflate with (or shadow) real paths. A mount point is obtained from what
<code>vfs.mount()</code> returns or from <a href="#vfsmountpoint"><code>vfs.mountPoint</code></a>, and the mount points of all mounted file
systems can be listed by reading the <a href="#the-reserved-root-directory">reserved root directory</a>, whose path <a href="#vfsvfsbase"><code>vfs.vfsBase()</code></a>
returns. The name of a mount point within that directory is assigned at runtime, so it is not
something to construct or hard-code.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');
const fs = require('node:fs');

const myVfs = vfs.create();
myVfs.writeFileSync('/data.txt', 'Hello');
const mountPoint = myVfs.mount();
// e.g. '/dev/null/vfs/0'

fs.readFileSync(`${mountPoint}/data.txt`, 'utf8'); // 'Hello'
</code></pre>
<p>Like any mount point, the mount point cannot be removed or renamed, nor
replaced by renaming something else onto it: <a href="fs.md#fsrmdirpath-options-callback"><code>fs.rmdir()</code></a> and
<a href="fs.md#fsrenameoldpath-newpath-callback"><code>fs.rename()</code></a> fail with <code>EBUSY</code>. A recursive <a href="fs.md#fsrmpath-options-callback"><code>fs.rm()</code></a> of the mount
point empties the file system before failing the same way.</p>
<p>Each <code>VirtualFileSystem</code> instance may be mounted at most once at a
time. Attempting to mount an already-mounted instance throws
<code>ERR_INVALID_STATE</code>. Because each instance mounts inside its own
per-layer namespace, mounts from different instances can never
overlap.</p>
<p>The VFS supports the <a href="https://github.com/tc39/proposal-explicit-resource-management">Explicit Resource Management</a> proposal. Use
a <code>using</code> declaration to unmount automatically when leaving scope:</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');
const fs = require('node:fs');

let mountPoint;
{
  using myVfs = vfs.create();
  myVfs.writeFileSync('/data.txt', 'Hello');
  mountPoint = myVfs.mount();

  fs.readFileSync(`${mountPoint}/data.txt`, 'utf8'); // 'Hello'
} // VFS is automatically unmounted here

fs.existsSync(`${mountPoint}/data.txt`); // false
</code></pre>
<h3><code>vfs.unmount()</code></h3>
<p>Unmounts the virtual file system. After unmounting, virtual files
are no longer reachable through <code>node:fs</code>, <code>require()</code>, or <code>import</code>.
The same instance may be mounted again by calling <code>mount()</code>.</p>
<p>This method is idempotent: calling <code>unmount()</code> on a VFS that is not
currently mounted has no effect.</p>
<h3><code>vfs.mounted</code></h3>
<ul>
<li>{boolean}</li>
</ul>
<p><code>true</code> while the VFS is mounted; <code>false</code> otherwise.</p>
<h3><code>vfs.mountPoint</code></h3>
<ul>
<li>{string | null}</li>
</ul>
<p>The current mount point as an absolute string (the value returned by
the last <a href="#vfsmount"><code>vfs.mount()</code></a> call), or <code>null</code> when the VFS is not
mounted.</p>
<h3><code>vfs.mountPointURL</code></h3>
<ul>
<li>{string | null}</li>
</ul>
<p>The current mount point as a <code>file:</code> URL string (the <a href="#vfsmountpoint"><code>vfs.mountPoint</code></a>
path converted with <a href="url.md#urlpathtofileurlpath-options"><code>url.pathToFileURL()</code></a>), or <code>null</code> when the VFS
is not mounted.</p>
<p>This is a convenience for addressing mounted files with URL-based
APIs such as dynamic <code>import()</code>:</p>
<pre><code class="language-mjs">import vfs from 'node:vfs';

const myVfs = vfs.create();
myVfs.writeFileSync('/mod.mjs', 'export const value = 42;');
myVfs.mount();

const { value } = await import(`${myVfs.mountPointURL}/mod.mjs`);
console.log(value); // 42

myVfs.unmount();
</code></pre>
<h3><code>vfs.provider</code></h3>
<ul>
<li>{VirtualProvider}</li>
</ul>
<p>The provider backing this VFS instance.</p>
<h3><code>vfs.readonly</code></h3>
<ul>
<li>{boolean}</li>
</ul>
<p><code>true</code> when the underlying provider is read-only.</p>
<h3>APIs</h3>
<p><code>VirtualFileSystem</code> implements the following methods, with the same
signatures as their <a href="fs.md"><code>node:fs</code></a> counterparts:</p>
<h4>Synchronous API</h4>
<ul>
<li><code>existsSync(path)</code></li>
<li><code>statSync(path[, options])</code></li>
<li><code>lstatSync(path[, options])</code></li>
<li><code>readFileSync(path[, options])</code></li>
<li><code>writeFileSync(path, data[, options])</code></li>
<li><code>appendFileSync(path, data[, options])</code></li>
<li><code>readdirSync(path[, options])</code></li>
<li><code>mkdirSync(path[, options])</code></li>
<li><code>rmdirSync(path)</code></li>
<li><code>unlinkSync(path)</code></li>
<li><code>renameSync(oldPath, newPath)</code></li>
<li><code>copyFileSync(src, dest[, mode])</code></li>
<li><code>realpathSync(path[, options])</code></li>
<li><code>readlinkSync(path[, options])</code></li>
<li><code>symlinkSync(target, path[, type])</code></li>
<li><code>accessSync(path[, mode])</code></li>
<li><code>rmSync(path[, options])</code></li>
<li><code>truncateSync(path[, len])</code></li>
<li><code>ftruncateSync(fd[, len])</code></li>
<li><code>linkSync(existingPath, newPath)</code></li>
<li><code>chmodSync(path, mode)</code></li>
<li><code>chownSync(path, uid, gid)</code></li>
<li><code>lchownSync(path, uid, gid)</code></li>
<li><code>utimesSync(path, atime, mtime)</code></li>
<li><code>lutimesSync(path, atime, mtime)</code></li>
<li><code>mkdtempSync(prefix)</code></li>
<li><code>opendirSync(path[, options])</code></li>
<li><code>openAsBlob(path[, options])</code></li>
<li>File-descriptor ops: <code>openSync</code>, <code>closeSync</code>, <code>readSync</code>, <code>writeSync</code>,
<code>fstatSync</code></li>
<li>Streams: <code>createReadStream</code>, <code>createWriteStream</code></li>
<li>Watchers: <code>watch</code>, <code>watchFile</code>, <code>unwatchFile</code></li>
</ul>
<h4>Callback API</h4>
<p><code>readFile</code>, <code>writeFile</code>, <code>stat</code>, <code>lstat</code>, <code>readdir</code>, <code>realpath</code>, <code>readlink</code>,
<code>access</code>, <code>open</code>, <code>close</code>, <code>read</code>, <code>write</code>, <code>rm</code>, <code>fstat</code>, <code>truncate</code>,
<code>ftruncate</code>, <code>link</code>, <code>mkdtemp</code>, <code>opendir</code>. Each takes a Node.js-style
callback <code>(err, ...result) =&gt; {}</code>.</p>
<h4>Promise API</h4>
<p><code>vfs.promises</code> exposes the promise-based variants:</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');

async function example() {
  const myVfs = vfs.create();
  await myVfs.promises.writeFile('/file.txt', 'hello');
  const data = await myVfs.promises.readFile('/file.txt', 'utf8');
  return data;
}
example();
</code></pre>
<p>The promise namespace mirrors <code>fs.promises</code> and includes <code>readFile</code>,
<code>writeFile</code>, <code>appendFile</code>, <code>stat</code>, <code>lstat</code>, <code>readdir</code>, <code>mkdir</code>, <code>rmdir</code>,
<code>unlink</code>, <code>rename</code>, <code>copyFile</code>, <code>realpath</code>, <code>readlink</code>, <code>symlink</code>,
<code>access</code>, <code>rm</code>, <code>truncate</code>, <code>link</code>, <code>mkdtemp</code>, <code>chmod</code>, <code>chown</code>, <code>lchown</code>,
<code>utimes</code>, <code>lutimes</code>, <code>open</code>, <code>lchmod</code>, and <code>watch</code>.</p>
<h2>The reserved root directory</h2>
<p>While any virtual file system is mounted, the directory that holds the mount
points can be read through <a href="fs.md"><code>node:fs</code></a>. <a href="#vfsvfsbase"><code>vfs.vfsBase()</code></a> returns its path,
<code>path.join(os.devNull, 'vfs')</code>. It contains a directory for every mounted file
system, named like the last segment of its <a href="#vfsmountpoint"><code>vfs.mountPoint</code></a>.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');
const fs = require('node:fs');
const path = require('node:path');

const root = vfs.vfsBase();
const assets = vfs.create();
assets.writeFileSync('/logo.svg', '&lt;svg/&gt;');
const mountPoint = assets.mount();

const name = path.basename(mountPoint);
fs.readdirSync(root); // [ name ]
fs.readdirSync(root, { recursive: true }); // [ name, `${name}/logo.svg` ]
</code></pre>
<p>The root directory itself is read-only. Creating, removing, or changing its
entries fails with <code>EROFS</code>, while the file systems its entries lead to can be
written to as usual. When nothing is mounted, the root directory does not exist.</p>
<h2>Module loader integration</h2>
<p>Once a <code>VirtualFileSystem</code> is mounted, paths under the mount point
participate in module resolution and loading. The <a href="modules.md#all-together">CommonJS
resolution algorithm</a> used by <a href="modules.md#requireid"><code>require()</code></a> and
<a href="modules.md#requireresolverequest-options"><code>require.resolve()</code></a> and the <a href="esm.md#resolution-algorithm">ES modules resolution algorithm</a>
used by <code>import</code> and <a href="esm.md#importmetaresolvespecifier"><code>import.meta.resolve()</code></a> are unchanged;
instead, every file system operation those algorithms perform is
dispatched on the path being probed: paths under a mount point are
served by the owning VFS, and all other paths are served by the real
file system. Files served from the VFS therefore behave as
first-class modules.</p>
<p>Because mounted paths live in a reserved namespace that cannot exist
on disk, any given path is served either by exactly one VFS or by
the real file system, never both. There is no search order or
fallback between the two: if a path under a mount point does not
exist in the VFS, resolution fails with <code>ENOENT</code> without consulting
the disk, and a mounted layer never shadows a real directory.</p>
<p>For resolution purposes the mount point behaves as a file system
root: <code>package.json</code> scope lookups and <a href="modules.md#loading-from-node_modules-folders">loading from <code>node_modules</code>
folders</a> stop at the mount point. For example, when
<code>${mountPoint}/foo/bar/main.cjs</code> calls <code>require('baz')</code>, the lookup
goes through:</p>
<ul>
<li><code>${mountPoint}/foo/bar/node_modules/baz</code></li>
<li><code>${mountPoint}/foo/node_modules/baz</code></li>
<li><code>${mountPoint}/node_modules/baz</code></li>
<li>If <code>$NODE_PATH</code> is set, the folders listed in <code>$NODE_PATH</code></li>
<li><code>$HOME/.node_modules/baz</code></li>
<li><code>$HOME/.node_libraries/baz</code></li>
<li><code>$PREFIX/lib/node/baz</code></li>
</ul>
<p>The last four entries are <a href="modules.md#loading-from-the-global-folders">the global folders</a>, which are legacy
CommonJS behavior and do not apply to <code>import</code>. Absolute specifiers
may cross the boundary in either direction: a module on the real
file system can <code>require()</code> a mounted path, and a virtual module can
<code>require()</code> a real one.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');

const myVfs = vfs.create();
myVfs.mkdirSync('/lib');
myVfs.writeFileSync('/lib/greet.js', 'module.exports = () =&gt; &quot;hi&quot;;');
myVfs.writeFileSync(
  '/lib/package.json', '{&quot;main&quot;: &quot;./greet.js&quot;}');
const mountPoint = myVfs.mount();

const greet = require(`${mountPoint}/lib`);
console.log(greet()); // 'hi'

myVfs.unmount();
</code></pre>
<p>For ECMAScript modules, use <code>file:</code> URLs when passing mounted paths
to dynamic <code>import()</code>. <a href="#vfsmountpointurl"><code>vfs.mountPointURL</code></a> provides the mount
point in that form; this keeps VFS imports portable on Windows,
where mounted paths use Windows path syntax.</p>
<pre><code class="language-mjs">import vfs from 'node:vfs';

const myVfs = vfs.create();
myVfs.writeFileSync('/mod.mjs', 'export const value = 42;');
myVfs.mount();

const { value } = await import(`${myVfs.mountPointURL}/mod.mjs`);
console.log(value); // 42

myVfs.unmount();
</code></pre>
<p>CommonJS modules loaded from a mounted VFS are identified by their VFS paths
that start with the mount point. This is reflected in, for example, <code>__filename</code> and
<code>__dirname</code> in the module, or the errors stack traces involving functions from
the VFS modules. ES modules in the VFS are similarly identified by the <code>file:</code> URL of
their VFS paths and this is reflected in e.g. <code>import.meta.url</code>.</p>
<p>Like modules loaded from the real file system, modules loaded from the VFS are
cached on the first load. When <code>require()</code> or <code>import()</code> is used to load an absolute
path or URL that falls under the mounted VFS multiple times, the module is only loaded
once and subsequent calls return the same instance.</p>
<p>Calling <a href="#vfsunmount"><code>vfs.unmount()</code></a> invalidates the modules that were loaded
from the mount point: a subsequent <code>require()</code> or <code>import</code> of a path
under a re-created mount re-reads the file from the newly mounted
VFS rather than returning a stale module. Modules loaded from other
VFS instances or from the real file system are unaffected.</p>
<p>Mounting and unmounting do not stop any module execution that is
already started, or invalidate any objects materialized from VFS
modules that are already executed. As with modules in the real file
system, the callers are responsible for avoiding removal or
invalidation of modules in the virtual file system while they are
being loaded.</p>
<p>Native addons (<code>.node</code> files) stored in a mounted VFS can be <code>require()</code>d as
well. The operating system's dynamic loader cannot open a virtual path, so the
addon's bytes are read from the VFS and loaded from a private, self-cleaning
temporary image instead. Addons on the real file system are unaffected and
load directly.</p>
<p>Shared libraries opened through <a href="ffi.md#ffidlopenpath-definitions"><code>ffi.dlopen()</code></a> (or
<a href="ffi.md#new-dynamiclibrarypath"><code>new ffi.DynamicLibrary()</code></a>) work the same way: a library path inside a
mounted VFS is detected, its bytes are read from the VFS, and the library is
loaded from a private, self-cleaning image while <code>library.path</code> keeps
reporting the virtual path. Libraries on the real file system load directly.</p>
<h2>Use with Single Executable Applications</h2>
<p>When running as a <a href="single-executable-applications.md">Single Executable Application</a> built with
<code>&quot;useVfs&quot;: true</code> in the SEA configuration, the bundled assets are
automatically mounted as a read-only virtual file system and the injected
main script is executed from the root of the mount. No additional setup is
required. Since the mount point is reserved and chosen at runtime, bundled
code accesses the assets through <code>__dirname</code>-relative paths and relative
<code>require()</code> calls rather than through a fixed path:</p>
<pre><code class="language-cjs">// In the SEA main script, __dirname is the root of the mounted assets.
const fs = require('node:fs');
const path = require('node:path');

const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
const template = fs.readFileSync(
  path.join(__dirname, 'templates/index.html'), 'utf8');
</code></pre>
<p>ESM entry points (<code>&quot;mainFormat&quot;: &quot;module&quot;</code>) are supported: the main module
is loaded from inside the mount through the ESM loader, and
<code>import.meta.dirname</code> points at the mount root.</p>
<p><code>&quot;useVfs&quot;</code> cannot be used together with <code>&quot;useSnapshot&quot;</code> or <code>&quot;useCodeCache&quot;</code>.
The SEA configuration parser will error if either combination is detected.</p>
<p>Instead of listing individual <code>&quot;assets&quot;</code>, the SEA configuration can point
<code>&quot;vfsArchive&quot;</code> at a prebuilt ZIP archive; the mount is then backed by a
<a href="#class-zipprovider"><code>ZipProvider</code></a> over the embedded archive, and each file is inflated when
it is read. See <a href="single-executable-applications.md#serving-the-assets-from-a-zip-archive-with-vfsarchive">Serving the assets from a ZIP archive</a> for details.</p>
<p>See the <a href="single-executable-applications.md">Single Executable Application</a> documentation for more information
on creating SEA builds with assets.</p>
<h2>Class: <code>VirtualProvider</code></h2>
<p>The base class for all VFS providers. Subclasses implement the essential
primitives (such as <code>open</code>, <code>stat</code>, <code>readdir</code>, <code>mkdir</code>, <code>rmdir</code>, <code>unlink</code>,
<code>rename</code>, etc.) and inherit default implementations of the derived
methods (such as <code>readFile</code>, <code>writeFile</code>, <code>exists</code>, <code>copyFile</code>, <code>access</code>, etc.).</p>
<h3>Capability flags</h3>
<ul>
<li><code>provider.readonly</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>provider.supportsSymlinks</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>provider.supportsWatch</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
</ul>
<h3>Creating custom providers</h3>
<pre><code class="language-cjs">const { VirtualProvider } = require('node:vfs');

class StaticProvider extends VirtualProvider {
  get readonly() { return true; }

  statSync(path) { /* ... */ }
  openSync(path, flags) { /* ... */ }
  readdirSync(path, options) { /* ... */ }
  // ...
}
</code></pre>
<p>The base class throws <code>ERR_METHOD_NOT_IMPLEMENTED</code> for any primitive
that has not been overridden, and rejects writes from a <code>readonly</code>
provider with <code>EROFS</code>.</p>
<h2>Class: <code>MemoryProvider</code></h2>
<p>The default in-memory provider. Stores files, directories, and symbolic
links in a <code>Map</code>-backed tree, supports symlinks (<code>supportsSymlinks === true</code>), and supports watching (<code>supportsWatch === true</code>).</p>
<h3><code>memoryProvider.setReadOnly()</code></h3>
<p>Locks the provider into read-only mode. Subsequent writes through any
<a href="#class-virtualfilesystem"><code>VirtualFileSystem</code></a> using this provider throw <code>EROFS</code>. There is no
way to revert the provider to writable.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');

const provider = new vfs.MemoryProvider();
const myVfs = vfs.create(provider);
myVfs.writeFileSync('/seed.txt', 'initial');

provider.setReadOnly();

myVfs.writeFileSync('/x.txt', 'fail'); // throws EROFS
</code></pre>
<h2>Class: <code>ComposableProvider</code></h2>
<p><a href="#class-composableprovider"><code>ComposableProvider</code></a> combines one or more providers in priority order. The first
provider is the writable layer; reads search from first to last. Directories
are merged, with entries in higher-priority layers shadowing entries with the
same name in lower layers. Writes to a lower file copy it to the first provider
before changing it. Removing a file hides lower copies without deleting them.
The first provider must be writable to change the composed file system.</p>
<h3><code>new ComposableProvider(providers)</code></h3>
<ul>
<li><code>providers</code> {VirtualProvider[]} Non-empty array of providers, ordered from
highest to lowest priority.</li>
</ul>
<pre><code class="language-cjs">const vfs = require('node:vfs');

const memory = new vfs.MemoryProvider();
const disk = new vfs.RealFSProvider('/tmp/vfs-root');
const combined = vfs.create(new vfs.ComposableProvider([memory, disk]));
combined.writeFileSync('/config.json', '{&quot;debug&quot;:true}');
// The file in memory shadows /tmp/vfs-root/config.json.
</code></pre>
<h3><code>composableProvider.providers</code></h3>
<ul>
<li>{VirtualProvider[]}</li>
</ul>
<p>A copy of the ordered provider list. Changes to this array do not affect the
composition. File handles opened before a write continue to refer to the layer
on which they were opened. Watching a path watches only its currently selected
provider, not changes across the entire composition. Symbolic links are
resolved by the provider containing them, not across providers. Traversal
through a symbolic-link directory is not supported by the composition. Renaming
a directory over a directory that exists only in a lower layer is not supported.
Layer selection and copy-up use synchronous provider operations, including
when invoked through the asynchronous VFS API.</p>
<h2>Class: <code>RealFSProvider</code></h2>
<p>A provider that wraps a directory (i.e. one on the actual file system) and
exposes its contents through the VFS API. All VFS paths are resolved relative to
the root and verified to stay inside it; symbolic links resolving outside the
root are rejected. This path mapping is not a sandbox or access-control
mechanism.</p>
<h3><code>new RealFSProvider(rootPath)</code></h3>
<ul>
<li><code>rootPath</code> {string} The absolute file-system path to use as the root.
Must be a non-empty string.</li>
</ul>
<pre><code class="language-cjs">const vfs = require('node:vfs');

const realVfs = vfs.create(new vfs.RealFSProvider('/tmp/vfs-root'));
realVfs.writeFileSync('/file.txt', 'hello'); // writes /tmp/vfs-root/file.txt
</code></pre>
<h3><code>realFSProvider.rootPath</code></h3>
<ul>
<li>{string}</li>
</ul>
<p>The resolved absolute path used as the root.</p>
<h2>Class: <code>ZipProvider</code></h2>
<p>A provider that exposes the entries of a ZIP archive - either a
<a href="zlib.md#class-zlibzipbuffer"><code>zlib.ZipBuffer</code></a> (in memory) or a <a href="zlib.md#class-zlibzipfile"><code>zlib.ZipFile</code></a> (on disk) - through
the VFS API. <code>provider.readonly</code> reflects the archive's own
<a href="zlib.md#zipfilewritable"><code>zipFile.writable</code></a> flag: a <code>ZipBuffer</code> is always writable, and a
<code>ZipFile</code> is writable only when opened with <code>{ writable: true }</code>.</p>
<p>Directories are recognized both explicitly (an entry whose name ends in <code>/</code>)
and implicitly (any entry name starting with <code>&quot;&lt;dir&gt;/&quot;</code>), and are listed by
<code>readdir()</code>, including with <code>{ recursive: true }</code>, either way. Because a ZIP
member cannot be edited or read in place - only fully written or fully
decompressed - a file opened for writing only commits its content (as a new
archive entry) when the handle is closed.</p>
<p>Every method has a synchronous counterpart (<code>openSync()</code>, <code>statSync()</code>,
<code>readdirSync()</code>, and so on), backed by the equally complete synchronous
surface <a href="zlib.md#class-zlibzipbuffer"><code>zlib.ZipBuffer</code></a>/<a href="zlib.md#class-zlibzipfile"><code>zlib.ZipFile</code></a> expose. As with those, the
synchronous methods here block the Node.js event loop and further JavaScript
execution until the operation - including any deflate/inflate pass -
completes.</p>
<pre><code class="language-cjs">const vfs = require('node:vfs');
const zlib = require('node:zlib');
const { readFileSync } = require('node:fs');

async function main() {
  const zip = new zlib.ZipBuffer(readFileSync('archive.zip'));
  const archiveVfs = vfs.create(new vfs.ZipProvider(zip));

  console.log(await archiveVfs.promises.readdir('/'));
  await archiveVfs.promises.writeFile('/new.txt', 'hello');
}
main();
</code></pre>
<h3><code>new ZipProvider(source)</code></h3>
<ul>
<li><code>source</code> {zlib.ZipBuffer|zlib.ZipFile} An already-open archive.</li>
</ul>
<h2>Implementation details</h2>
<h3><code>Stats</code> objects</h3>
<p>VFS <code>Stats</code> objects are real instances of <a href="fs.md#class-fsstats"><code>fs.Stats</code></a> (or
<a href="fs.md#class-fsstats"><code>fs.BigIntStats</code></a> when <code>{ bigint: true }</code> is requested). Their
fields use synthetic but stable values:</p>
<ul>
<li><code>dev</code> is <code>4085</code> (the VFS device id).</li>
<li><code>ino</code> is monotonically increasing per process.</li>
<li><code>blksize</code> is <code>4096</code>.</li>
<li><code>blocks</code> is <code>Math.ceil(size / 512)</code>.</li>
<li>Times default to the moment the entry was created/last modified.</li>
</ul>
