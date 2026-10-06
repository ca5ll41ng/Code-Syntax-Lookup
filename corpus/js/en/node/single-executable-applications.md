---
id: "js-en-function-node-single-executable-applications"
language: "js"
lang: "en"
category: "function"
name: "node:single-executable-applications"
title: "Single executable applications"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/single-executable-applications.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Single executable applications

<h1>Single executable applications</h1>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>This feature allows the distribution of a Node.js application conveniently to a
system that does not have Node.js installed.</p>
<p>Node.js supports the creation of <a href="https://github.com/nodejs/single-executable">single executable applications</a> by allowing
the injection of a blob prepared by Node.js, which can contain a bundled script,
into the <code>node</code> binary. During start up, the program checks if anything has been
injected. If the blob is found, it executes the script in the blob. Otherwise
Node.js operates as it normally does.</p>
<p>The single executable application feature supports running a
single embedded script using the <a href="modules.md#modules-commonjs-modules">CommonJS</a> or the <a href="esm.md#modules-ecmascript-modules">ECMAScript Modules</a> module system.</p>
<p>Users can create a single executable application from their bundled script
with the <code>node</code> binary itself and any tool which can inject resources into the
binary.</p>
<ol>
<li>
<p>Create a JavaScript file:</p>
<pre><code class="language-bash">echo 'console.log(`Hello, ${process.argv[2]}!`);' &gt; hello.js
</code></pre>
</li>
<li>
<p>Create a configuration file building a blob that can be injected into the
single executable application (see
<a href="#1-generating-single-executable-preparation-blobs">Generating single executable preparation blobs</a> for details):</p>
<ul>
<li>On systems other than Windows:</li>
</ul>
<pre><code class="language-bash">echo '{ &quot;main&quot;: &quot;hello.js&quot;, &quot;output&quot;: &quot;sea&quot; }' &gt; sea-config.json
</code></pre>
<ul>
<li>On Windows:</li>
</ul>
<pre><code class="language-bash">echo '{ &quot;main&quot;: &quot;hello.js&quot;, &quot;output&quot;: &quot;sea.exe&quot; }' &gt; sea-config.json
</code></pre>
<p>The <code>.exe</code> extension is necessary.</p>
</li>
<li>
<p>Generate the target executable:</p>
<pre><code class="language-bash">node --build-sea sea-config.json
</code></pre>
</li>
<li>
<p>Sign the binary (macOS and Windows only):</p>
<ul>
<li>On macOS:</li>
</ul>
<pre><code class="language-bash">codesign --sign - sea
</code></pre>
<ul>
<li>On Windows (optional):</li>
</ul>
<p>A certificate needs to be present for this to work. However, the unsigned
binary would still be runnable.</p>
<pre><code class="language-powershell">signtool sign /fd SHA256 sea.exe
</code></pre>
</li>
<li>
<p>Run the binary:</p>
<ul>
<li>On systems other than Windows</li>
</ul>
<pre><code class="language-console">$ ./sea world
Hello, world!
</code></pre>
<ul>
<li>On Windows</li>
</ul>
<pre><code class="language-console">$ .\sea.exe world
Hello, world!
</code></pre>
</li>
</ol>
<h2>Generating single executable applications with <code>--build-sea</code></h2>
<p>To generate a single executable application directly, the <code>--build-sea</code> flag can be
used. It takes a path to a configuration file in JSON format. If the path passed to it
isn't absolute, Node.js will use the path relative to the current working directory.</p>
<p>The configuration currently reads the following top-level fields:</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  &quot;mainFormat&quot;: &quot;commonjs&quot;, // Default: &quot;commonjs&quot;, options: &quot;commonjs&quot;, &quot;module&quot;
  &quot;executable&quot;: &quot;/path/to/node/binary&quot;, // Optional, if not specified, uses the current Node.js binary
  &quot;output&quot;: &quot;/path/to/write/the/generated/executable&quot;,
  &quot;disableExperimentalSEAWarning&quot;: true, // Default: false
  &quot;useSnapshot&quot;: false,  // Default: false
  &quot;useCodeCache&quot;: true, // Default: false
  &quot;useVfs&quot;: true, // Default: false
  &quot;vfsArchive&quot;: &quot;/path/to/assets.zip&quot;, // Optional
  &quot;execArgv&quot;: [&quot;--no-warnings&quot;, &quot;--max-old-space-size=4096&quot;], // Optional
  &quot;execArgvExtension&quot;: &quot;env&quot;, // Default: &quot;env&quot;, options: &quot;none&quot;, &quot;env&quot;, &quot;cli&quot;
  &quot;assets&quot;: {  // Optional
    &quot;a.dat&quot;: &quot;/path/to/a.dat&quot;,
    &quot;b.txt&quot;: &quot;/path/to/b.txt&quot;
  }
}
</code></pre>
<p>If the paths are not absolute, Node.js will use the path relative to the
current working directory. The version of the Node.js binary used to produce
the blob must be the same as the one to which the blob will be injected.</p>
<p>Note: When generating cross-platform SEAs (e.g., generating a SEA
for <code>linux-x64</code> on <code>darwin-arm64</code>), <code>useCodeCache</code> and <code>useSnapshot</code>
must be set to false to avoid generating incompatible executables.
Since code cache and snapshots can only be loaded on the same platform
where they are compiled, the generated executable might crash on startup when
trying to load code cache or snapshots built on a different platform.</p>
<h3>Assets</h3>
<p>Users can include assets by adding a key-path dictionary to the configuration
as the <code>assets</code> field. At build time, Node.js would read the assets from the
specified paths and bundle them into the preparation blob. In the generated
executable, users can retrieve the assets using the <a href="#seagetassetkey-encoding"><code>sea.getAsset()</code></a> and
<a href="#seagetassetasblobkey-options"><code>sea.getAssetAsBlob()</code></a> APIs.</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  &quot;output&quot;: &quot;/path/to/write/the/generated/executable&quot;,
  &quot;assets&quot;: {
    &quot;a.jpg&quot;: &quot;/path/to/a.jpg&quot;,
    &quot;b.txt&quot;: &quot;/path/to/b.txt&quot;
  }
}
</code></pre>
<p>The single-executable application can access the assets as follows:</p>
<pre><code class="language-cjs">const { getAsset, getAssetAsBlob, getRawAsset, getAssetKeys } = require('node:sea');
// Get all asset keys.
const keys = getAssetKeys();
console.log(keys); // ['a.jpg', 'b.txt']
// Returns a copy of the data in an ArrayBuffer.
const image = getAsset('a.jpg');
// Returns a string decoded from the asset as UTF8.
const text = getAsset('b.txt', 'utf8');
// Returns a Blob containing the asset.
const blob = getAssetAsBlob('a.jpg');
// Returns an ArrayBuffer containing the raw asset without copying.
const raw = getRawAsset('a.jpg');
</code></pre>
<p>See documentation of the <a href="#seagetassetkey-encoding"><code>sea.getAsset()</code></a>, <a href="#seagetassetasblobkey-options"><code>sea.getAssetAsBlob()</code></a>,
<a href="#seagetrawassetkey"><code>sea.getRawAsset()</code></a> and <a href="#seagetassetkeys"><code>sea.getAssetKeys()</code></a> APIs for more information.</p>
<h3>Virtual file system (VFS) for assets</h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>In addition to using the <code>node:sea</code> API to access individual assets, the
bundled assets can be exposed as a read-only <a href="vfs.md">virtual file system</a> and
accessed through standard <code>node:fs</code> APIs. To enable this, set
<code>&quot;useVfs&quot;: true</code> in the SEA configuration.</p>
<p>A virtual file system never shadows the real file system: it is mounted at a
reserved mount point that cannot exist on the real file system, and the mount
point is chosen at runtime rather than being a fixed path. When <code>useVfs</code> is
enabled, the injected main script itself is placed at the root of the mount
and executed from there, so <code>__filename</code> and <code>__dirname</code> point inside the
virtual file system instead of reflecting <a href="process.md#processexecpath"><code>process.execPath</code></a>. Bundled
code therefore reaches the assets through <code>__dirname</code>-relative paths and
relative <a href="modules.md#requireid"><code>require()</code></a> calls, without having to know the mount point:</p>
<pre><code class="language-cjs">const fs = require('node:fs');
const path = require('node:path');

// __dirname is the root of the virtual file system holding the assets.
const rawConfig = fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8');
const data = fs.readFileSync(path.join(__dirname, 'data/file.txt'));

// Directory operations work too.
const files = fs.readdirSync(path.join(__dirname, 'assets'));

// Check if a bundled file exists.
if (fs.existsSync(path.join(__dirname, 'optional.json'))) {
  // ...
}
</code></pre>
<p>The VFS supports the <code>node:fs</code> operations for reading files and directories.
Since the SEA VFS is read-only, write operations fail with <code>EROFS</code>. See the
<a href="vfs.md">VFS documentation</a> for the full list of supported operations.</p>
<h4>Loading modules from the VFS in a SEA</h4>
<p>When <code>useVfs</code> is enabled, the main script is executed from inside the
virtual file system, and <code>require()</code> uses the <a href="vfs.md#module-loader-integration">module loader
integration</a> of the VFS to load modules from the bundled assets. This
supports relative requires (e.g. <code>require('./helper.js')</code>) as well as
<code>node_modules</code> package lookups, which are confined to the mount:</p>
<pre><code class="language-cjs">// Require bundled modules using relative paths.
const myModule = require('./lib/mymodule.js');

// Packages bundled under the node_modules asset prefix also resolve.
const dep = require('some-package');
</code></pre>
<h4>ESM entry points</h4>
<p><code>&quot;useVfs&quot;: true</code> also supports <code>&quot;mainFormat&quot;: &quot;module&quot;</code>. The ESM main
script is loaded from inside the mount through the ESM loader, so
<code>import.meta.url</code>, <code>import.meta.filename</code>, and <code>import.meta.dirname</code>
reflect the location of the main script in the virtual file system, and
static and dynamic imports resolve against the bundled assets:</p>
<pre><code class="language-mjs">import fs from 'node:fs';
import path from 'node:path';

// import.meta.dirname is the root of the virtual file system.
const data = fs.readFileSync(
  path.join(import.meta.dirname, 'data/file.txt'));

// Relative and bare specifier imports resolve inside the mount.
import myModule from './lib/mymodule.mjs';
const lazy = await import('./lib/lazy.mjs');
</code></pre>
<p>Module format detection works the same way as on the real file
system: name bundled ES modules with the <code>.mjs</code> extension (or provide the
relevant <code>package.json</code> files as assets) so they are interpreted as ESM.</p>
<h4>Serving the assets from a ZIP archive with <code>&quot;vfsArchive&quot;</code></h4>
<p>Instead of listing individual <code>&quot;assets&quot;</code>, the configuration can point
<code>&quot;vfsArchive&quot;</code> at a prebuilt ZIP archive. The archive is embedded into the
executable as-is, and the virtual file system serves the files inside it,
inflating each one when it is read. When the assets are compressible (such
as JavaScript, JSON, or other text), a deflate-compressed archive can
substantially reduce the size of the generated executable.</p>
<p>The archive can be built with any ZIP tool, or with the ZIP support in
<a href="zlib.md"><code>node:zlib</code></a>:</p>
<pre><code class="language-mjs">import { zipFiles } from 'node:zlib';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

await pipeline(
  zipFiles([
    ['./dist/config.json', 'config.json'],
    ['./dist/data.txt', 'data/data.txt'],
  ]),
  createWriteStream('assets.zip'),
);
</code></pre>
<p>The mounted file tree looks the same as with <code>&quot;assets&quot;</code>: the entries appear
under the mount point using their archive names, the main script is placed
at the mount point root, and access through <code>__dirname</code>-relative paths,
<code>require()</code>, and <code>import</code> is unchanged. However, <code>sea.getAsset()</code> and
<code>sea.getAssetAsBlob()</code> do not serve the individual files, because the
executable only embeds the archive; read the files through the file system
APIs instead. <code>&quot;vfsArchive&quot;</code> requires <code>&quot;useVfs&quot;: true</code> and cannot be
combined with <code>&quot;assets&quot;</code>.</p>
<h4>Snapshot and code caching limitations</h4>
<p><code>&quot;useVfs&quot;: true</code> cannot be used together with <code>&quot;useSnapshot&quot;: true</code> or
<code>&quot;useCodeCache&quot;: true</code>. The code cache limitation is due to incomplete
implementation, not a technical impossibility. Consider bundling the
application if startup performance matters and do not rely on module loading
from the VFS in that case.</p>
<h4>Native addon limitations</h4>
<p>Native addons (<code>.node</code> files) cannot be loaded directly from the VFS because
<code>process.dlopen()</code> requires files on the real file system. To use native
addons in a SEA with VFS, write the asset to a temporary file first. See
<a href="#using-native-addons-in-the-injected-main-script">Using native addons in the injected main script</a> for an example.</p>
<h3>Startup snapshot support</h3>
<p>The <code>useSnapshot</code> field can be used to enable startup snapshot support. In this
case, the <code>main</code> script would not be executed when the final executable is launched.
Instead, it would be run when the single executable application preparation
blob is generated on the building machine. The generated preparation blob would
then include a snapshot capturing the states initialized by the <code>main</code> script.
The final executable, with the preparation blob injected, would deserialize
the snapshot at run time.</p>
<p>When <code>useSnapshot</code> is true, the main script must invoke the
<a href="v8.md#v8startupsnapshotsetdeserializemainfunctioncallback-data"><code>v8.startupSnapshot.setDeserializeMainFunction()</code></a> API to configure code
that needs to be run when the final executable is launched by the users.</p>
<p>The typical pattern for an application to use snapshot in a single executable
application is:</p>
<ol>
<li>At build time, on the building machine, the main script is run to
initialize the heap to a state that's ready to take user input. The script
should also configure a main function with
<a href="v8.md#v8startupsnapshotsetdeserializemainfunctioncallback-data"><code>v8.startupSnapshot.setDeserializeMainFunction()</code></a>. This function will be
compiled and serialized into the snapshot, but not invoked at build time.</li>
<li>At run time, the main function will be run on top of the deserialized heap
on the user machine to process user input and generate output.</li>
</ol>
<p>The general constraints of the startup snapshot scripts also apply to the main
script when it's used to build snapshot for the single executable application,
and the main script can use the <a href="v8.md#startup-snapshot-api"><code>v8.startupSnapshot</code> API</a> to adapt to
these constraints. See
<a href="cli.md#--build-snapshot">documentation about startup snapshot support in Node.js</a>.</p>
<h3>V8 code cache support</h3>
<p>When <code>useCodeCache</code> is set to <code>true</code> in the configuration, during the generation
of the single executable preparation blob, Node.js will compile the <code>main</code>
script to generate the V8 code cache. The generated code cache would be part of
the preparation blob and get injected into the final executable. When the single
executable application is launched, instead of compiling the <code>main</code> script from
scratch, Node.js would use the code cache to speed up the compilation, then
execute the script, which would improve the startup performance.</p>
<h3>Execution arguments</h3>
<p>The <code>execArgv</code> field can be used to specify Node.js-specific
arguments that will be automatically applied when the single
executable application starts. This allows application developers
to configure Node.js runtime options without requiring end users
to be aware of these flags.</p>
<p>For example, the following configuration:</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  &quot;output&quot;: &quot;/path/to/write/the/generated/executable&quot;,
  &quot;execArgv&quot;: [&quot;--no-warnings&quot;, &quot;--max-old-space-size=2048&quot;]
}
</code></pre>
<p>will instruct the SEA to be launched with the <code>--no-warnings</code> and
<code>--max-old-space-size=2048</code> flags. In the scripts embedded in the executable, these flags
can be accessed using the <code>process.execArgv</code> property:</p>
<pre><code class="language-js">// If the executable is launched with `sea user-arg1 user-arg2`
console.log(process.execArgv);
// Prints: ['--no-warnings', '--max-old-space-size=2048']
console.log(process.argv);
// Prints ['/path/to/sea', 'path/to/sea', 'user-arg1', 'user-arg2']
</code></pre>
<p>The user-provided arguments are in the <code>process.argv</code> array starting from index 2,
similar to what would happen if the application is started with:</p>
<pre><code class="language-console">node --no-warnings --max-old-space-size=2048 /path/to/bundled/script.js user-arg1 user-arg2
</code></pre>
<h3>Execution argument extension</h3>
<p>The <code>execArgvExtension</code> field controls how additional execution arguments can be
provided beyond those specified in the <code>execArgv</code> field. It accepts one of three string values:</p>
<ul>
<li><code>&quot;none&quot;</code>: No extension is allowed. Only the arguments specified in <code>execArgv</code> will be used,
and the <code>NODE_OPTIONS</code> environment variable will be ignored.</li>
<li><code>&quot;env&quot;</code>: <em>(Default)</em> The <code>NODE_OPTIONS</code> environment variable can extend the execution arguments.
This is the default behavior to maintain backward compatibility.</li>
<li><code>&quot;cli&quot;</code>: The executable can be launched with <code>--node-options=&quot;--flag1 --flag2&quot;</code>, and those flags
will be parsed as execution arguments for Node.js instead of being passed to the user script.
This allows using arguments that are not supported by the <code>NODE_OPTIONS</code> environment variable.</li>
</ul>
<p>For example, with <code>&quot;execArgvExtension&quot;: &quot;cli&quot;</code>:</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  &quot;output&quot;: &quot;/path/to/write/the/generated/executable&quot;,
  &quot;execArgv&quot;: [&quot;--no-warnings&quot;],
  &quot;execArgvExtension&quot;: &quot;cli&quot;
}
</code></pre>
<p>The executable can be launched as:</p>
<pre><code class="language-console">./my-sea --node-options=&quot;--trace-exit&quot; user-arg1 user-arg2
</code></pre>
<p>This would be equivalent to running:</p>
<pre><code class="language-console">node --no-warnings --trace-exit /path/to/bundled/script.js user-arg1 user-arg2
</code></pre>
<h2>Single-executable application API</h2>
<p>The <code>node:sea</code> builtin allows interaction with the single-executable application
from the JavaScript main script embedded into the executable.</p>
<h3><code>sea.isSea()</code></h3>
<ul>
<li>Returns: {boolean} Whether this script is running inside a single-executable
application.</li>
</ul>
<h3><code>sea.getAsset(key[, encoding])</code></h3>
<p>This method can be used to retrieve the assets configured to be bundled into the
single-executable application at build time.
An error is thrown when no matching asset can be found.</p>
<ul>
<li><code>key</code>  {string} the key for the asset in the dictionary specified by the
<code>assets</code> field in the single-executable application configuration.</li>
<li><code>encoding</code> {string} If specified, the asset will be decoded as
a string. Any encoding supported by the <code>TextDecoder</code> is accepted.
If unspecified, an <code>ArrayBuffer</code> containing a copy of the asset would be
returned instead.</li>
<li>Returns: {string|ArrayBuffer}</li>
</ul>
<h3><code>sea.getAssetAsBlob(key[, options])</code></h3>
<p>Similar to <a href="#seagetassetkey-encoding"><code>sea.getAsset()</code></a>, but returns the result in a {Blob}.
An error is thrown when no matching asset can be found.</p>
<ul>
<li><code>key</code>  {string} the key for the asset in the dictionary specified by the
<code>assets</code> field in the single-executable application configuration.</li>
<li><code>options</code> {Object}
<ul>
<li><code>type</code> {string} An optional mime type for the blob.</li>
</ul>
</li>
<li>Returns: {Blob}</li>
</ul>
<h3><code>sea.getRawAsset(key)</code></h3>
<p>This method can be used to retrieve the assets configured to be bundled into the
single-executable application at build time.
An error is thrown when no matching asset can be found.</p>
<p>Unlike <code>sea.getAsset()</code> or <code>sea.getAssetAsBlob()</code>, this method does not
return a copy. Instead, it returns the raw asset bundled inside the executable.</p>
<p>For now, users should avoid writing to the returned array buffer. If the
injected section is not marked as writable or not aligned properly,
writes to the returned array buffer is likely to result in a crash.</p>
<ul>
<li><code>key</code>  {string} the key for the asset in the dictionary specified by the
<code>assets</code> field in the single-executable application configuration.</li>
<li>Returns: {ArrayBuffer}</li>
</ul>
<h3><code>sea.getAssetKeys()</code></h3>
<ul>
<li>Returns {string[]} An array containing all the keys of the assets
embedded in the executable. If no assets are embedded, returns an empty array.</li>
</ul>
<p>This method can be used to retrieve an array of all the keys of assets
embedded into the single-executable application.
An error is thrown when not running inside a single-executable application.</p>
<h2>In the injected main script</h2>
<h3>Module format of the injected main script</h3>
<p>To specify how Node.js should interpret the injected main script, use the
<code>mainFormat</code> field in the single-executable application configuration.
The accepted values are:</p>
<ul>
<li><code>&quot;commonjs&quot;</code>: The injected main script is treated as a CommonJS module.</li>
<li><code>&quot;module&quot;</code>: The injected main script is treated as an ECMAScript module.</li>
</ul>
<p>If the <code>mainFormat</code> field is not specified, it defaults to <code>&quot;commonjs&quot;</code>.</p>
<p>Currently, <code>&quot;mainFormat&quot;: &quot;module&quot;</code> cannot be used together with <code>&quot;useSnapshot&quot;</code>.</p>
<h3>Module loading in the injected main script</h3>
<p>In the injected main script, module loading does not read from the file system.
By default, both <code>require()</code> and <code>import</code> statements would only be able to load
the built-in modules. Attempting to load a module that can only be found in the
file system will throw an error.</p>
<p>Users can bundle their application into a standalone JavaScript file to inject
into the executable. This also ensures a more deterministic dependency graph.</p>
<p>To load modules from the file system in the injected main script, users can
create a <code>require</code> function that can load from the file system using
<code>module.createRequire()</code>. For example, in a CommonJS entry point:</p>
<pre><code class="language-js">const { createRequire } = require('node:module');
require = createRequire(__filename);
</code></pre>
<h3><code>require()</code> in the injected main script</h3>
<p><code>require()</code> in the injected main script is not the same as the <a href="modules.md#requireid"><code>require()</code></a>
available to modules that are not injected.
Currently, it does not have any of the properties that non-injected
<a href="modules.md#requireid"><code>require()</code></a> has except <a href="modules.md#accessing-the-main-module"><code>require.main</code></a>.</p>
<h3><code>__filename</code> and <code>module.filename</code> in the injected main script</h3>
<p>The values of <code>__filename</code> and <code>module.filename</code> in the injected main script
are equal to <a href="process.md#processexecpath"><code>process.execPath</code></a>.</p>
<h3><code>__dirname</code> in the injected main script</h3>
<p>The value of <code>__dirname</code> in the injected main script is equal to the directory
name of <a href="process.md#processexecpath"><code>process.execPath</code></a>.</p>
<h3><code>import.meta</code> in the injected main script</h3>
<p>When using <code>&quot;mainFormat&quot;: &quot;module&quot;</code>, <code>import.meta</code> is available in the
injected main script with the following properties:</p>
<ul>
<li><code>import.meta.url</code>: A <code>file:</code> URL corresponding to <a href="process.md#processexecpath"><code>process.execPath</code></a>.</li>
<li><code>import.meta.filename</code>: Equal to <a href="process.md#processexecpath"><code>process.execPath</code></a>.</li>
<li><code>import.meta.dirname</code>: The directory name of <a href="process.md#processexecpath"><code>process.execPath</code></a>.</li>
<li><code>import.meta.main</code>: <code>true</code>.</li>
</ul>
<p><code>import.meta.resolve</code> is currently not supported.</p>
<h3><code>import()</code> in the injected main script</h3>
<p><code>import()</code> can be used to dynamically load built-in modules in both
CommonJS and ESM (<code>&quot;mainFormat&quot;: &quot;module&quot;</code>) single executable applications.
Attempting to use <code>import()</code> to load modules from
the file system will throw an error.</p>
<h3>Using native addons in the injected main script</h3>
<p>Native addons can be bundled as assets into the single-executable application
by specifying them in the <code>assets</code> field of the configuration file used to
generate the single-executable application preparation blob.
The addon can then be loaded in the injected main script by writing the asset
to a temporary file and loading it with <code>process.dlopen()</code>.</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  &quot;output&quot;: &quot;/path/to/write/the/generated/executable&quot;,
  &quot;assets&quot;: {
    &quot;myaddon.node&quot;: &quot;/path/to/myaddon/build/Release/myaddon.node&quot;
  }
}
</code></pre>
<pre><code class="language-js">// script.js
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { getRawAsset } = require('node:sea');
const addonPath = path.join(os.tmpdir(), 'myaddon.node');
fs.writeFileSync(addonPath, new Uint8Array(getRawAsset('myaddon.node')));
const myaddon = { exports: {} };
process.dlopen(myaddon, addonPath);
console.log(myaddon.exports);
fs.rmSync(addonPath);
</code></pre>
<p>Known caveat: if the single-executable application is produced by postject running on a Linux arm64 docker container,
<a href="https://github.com/nodejs/postject/issues/105">the produced ELF binary does not have the correct hash table to load the addons</a> and
will crash on <code>process.dlopen()</code>. Build the single-executable application on other platforms, or at least on
a non-container Linux arm64 environment to work around this issue.</p>
<h2>Notes</h2>
<h3>Single executable application creation process</h3>
<p>The process documented here is subject to change.</p>
<h4>1. Generating single executable preparation blobs</h4>
<p>To build a single executable application, Node.js would first generate a blob
that contains all the necessary information to run the bundled script.
When using <code>--build-sea</code>, this step is done internally along with the injection.</p>
<h5>Dumping the preparation blob to disk</h5>
<p>Before <code>--build-sea</code> was introduced, an older workflow was introduced to write the
preparation blob to disk for injection by external tools. This can still
be used for verification purposes.</p>
<p>To dump the preparation blob to disk for verification, use <code>--experimental-sea-config</code>.
This writes a file that can be injected into a Node.js binary using tools like <a href="https://github.com/nodejs/postject">postject</a>.</p>
<p>The configuration is similar to that of <code>--build-sea</code>, except that the
<code>output</code> field specifies the path to write the generated blob file instead of
the final executable.</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;/path/to/bundled/script.js&quot;,
  // Instead of the final executable, this is the path to write the blob.
  &quot;output&quot;: &quot;/path/to/write/the/generated/blob.blob&quot;
}
</code></pre>
<h4>2. Injecting the preparation blob into the <code>node</code> binary</h4>
<p>To complete the creation of a single executable application, the generated blob
needs to be injected into a copy of the <code>node</code> binary, as documented below.</p>
<p>When using <code>--build-sea</code>, this step is done internally along with the blob generation.</p>
<ul>
<li>If the <code>node</code> binary is a <a href="https://en.wikipedia.org/wiki/Portable_Executable">PE</a> file, the blob should be injected as a resource
named <code>NODE_SEA_BLOB</code>.</li>
<li>If the <code>node</code> binary is a <a href="https://en.wikipedia.org/wiki/Mach-O">Mach-O</a> file, the blob should be injected as a section
named <code>NODE_SEA_BLOB</code> in the <code>NODE_SEA</code> segment.</li>
<li>If the <code>node</code> binary is an <a href="https://en.wikipedia.org/wiki/Executable_and_Linkable_Format">ELF</a> file, the blob should be injected as a note
named <code>NODE_SEA_BLOB</code>.</li>
</ul>
<p>Then, the SEA building process searches the binary for the
<code>NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2:0</code> <a href="https://www.electronjs.org/docs/latest/tutorial/fuses">fuse</a> string and flip the
last character to <code>1</code> to indicate that a resource has been injected.</p>
<h5>Injecting the preparation blob manually</h5>
<p>Before <code>--build-sea</code> was introduced, an older workflow was introduced to allow
external tools to inject the generated blob into a copy of the <code>node</code> binary.</p>
<p>For example, with <a href="https://github.com/nodejs/postject">postject</a>:</p>
<ol>
<li>
<p>Create a copy of the <code>node</code> executable and name it according to your needs:</p>
<ul>
<li>On systems other than Windows:</li>
</ul>
<pre><code class="language-bash">cp $(command -v node) hello
</code></pre>
<ul>
<li>On Windows:</li>
</ul>
<pre><code class="language-text">node -e &quot;require('fs').copyFileSync(process.execPath, 'hello.exe')&quot;
</code></pre>
<p>The <code>.exe</code> extension is necessary.</p>
</li>
<li>
<p>Remove the signature of the binary (macOS and Windows only):</p>
<ul>
<li>On macOS:</li>
</ul>
<pre><code class="language-bash">codesign --remove-signature hello
</code></pre>
<ul>
<li>On Windows (optional):</li>
</ul>
<p><a href="https://learn.microsoft.com/en-us/windows/win32/seccrypto/signtool">signtool</a> can be used from the installed <a href="https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/">Windows SDK</a>. If this step is
skipped, ignore any signature-related warning from postject.</p>
<pre><code class="language-powershell">signtool remove /s hello.exe
</code></pre>
</li>
<li>
<p>Inject the blob into the copied binary by running <code>postject</code> with
the following options:</p>
<ul>
<li><code>hello</code> / <code>hello.exe</code> - The name of the copy of the <code>node</code> executable
created in step 4.</li>
<li><code>NODE_SEA_BLOB</code> - The name of the resource / note / section in the binary
where the contents of the blob will be stored.</li>
<li><code>sea-prep.blob</code> - The name of the blob created in step 1.</li>
<li><code>--sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2</code> - The
<a href="https://www.electronjs.org/docs/latest/tutorial/fuses">fuse</a> used by the Node.js project to detect if a file has been injected.</li>
<li><code>--macho-segment-name NODE_SEA</code> (only needed on macOS) - The name of the
segment in the binary where the contents of the blob will be
stored.</li>
</ul>
<p>To summarize, here is the required command for each platform:</p>
<ul>
<li>
<p>On Linux:</p>
<pre><code class="language-bash">npx postject hello NODE_SEA_BLOB sea-prep.blob \
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
</code></pre>
</li>
<li>
<p>On Windows - PowerShell:</p>
<pre><code class="language-powershell">npx postject hello.exe NODE_SEA_BLOB sea-prep.blob `
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
</code></pre>
</li>
<li>
<p>On Windows - Command Prompt:</p>
<pre><code class="language-text">npx postject hello.exe NODE_SEA_BLOB sea-prep.blob ^
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
</code></pre>
</li>
<li>
<p>On macOS:</p>
<pre><code class="language-bash">npx postject hello NODE_SEA_BLOB sea-prep.blob \
    --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 \
    --macho-segment-name NODE_SEA
</code></pre>
</li>
</ul>
</li>
</ol>
<h3>Platform support</h3>
<p>Single-executable support is tested regularly on CI only on the following
platforms:</p>
<ul>
<li>Windows</li>
<li>macOS (arm64 only; x64 is not currently supported and is skipped in the
tests)</li>
<li>Linux (all distributions <a href="https://github.com/nodejs/node/blob/main/BUILDING.md#platform-list">supported by Node.js</a> except Alpine and all
architectures <a href="https://github.com/nodejs/node/blob/main/BUILDING.md#platform-list">supported by Node.js</a> except s390x)</li>
</ul>
<p>This is due to a lack of better tools to generate single-executables that can be
used to test this feature on other platforms.</p>
<p>Suggestions for other resource injection tools/workflows are welcomed. Please
start a discussion at <a href="https://github.com/nodejs/single-executable/discussions">https://github.com/nodejs/single-executable/discussions</a>
to help us document them.</p>
