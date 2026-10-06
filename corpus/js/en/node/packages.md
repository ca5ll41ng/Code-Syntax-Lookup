---
id: "js-en-function-node-packages"
language: "js"
lang: "en"
category: "function"
name: "node:packages"
title: "Modules: Packages"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/packages.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Modules: Packages

<h1>Modules: Packages</h1>
<h2>Introduction</h2>
<p>A package is a folder tree described by a <code>package.json</code> file. The package
consists of the folder containing the <code>package.json</code> file and all subfolders
until the next folder containing another <code>package.json</code> file, or a folder
named <code>node_modules</code>.</p>
<p>This page provides guidance for package authors writing <code>package.json</code> files
along with a reference for the <a href="#nodejs-packagejson-field-definitions"><code>package.json</code></a> fields defined by Node.js.</p>
<h2>Determining module system</h2>
<h3>Introduction</h3>
<p>Node.js will treat the following as <a href="esm.md">ES modules</a> when passed to <code>node</code> as the
initial input, or when referenced by <code>import</code> statements or <code>import()</code>
expressions:</p>
<ul>
<li>
<p>Files with an <code>.mjs</code> extension.</p>
</li>
<li>
<p>Files with a <code>.js</code> extension when the nearest parent <code>package.json</code> file
contains a top-level <a href="#type"><code>&quot;type&quot;</code></a> field with a value of <code>&quot;module&quot;</code>.</p>
</li>
<li>
<p>Strings passed in as an argument to <code>--eval</code>, or piped to <code>node</code> via <code>STDIN</code>,
with the flag <code>--input-type=module</code>.</p>
</li>
<li>
<p>Code containing syntax only successfully parsed as <a href="esm.md">ES modules</a>, such as
<code>import</code> or <code>export</code> statements or <code>import.meta</code>, with no explicit marker of
how it should be interpreted. Explicit markers are <code>.mjs</code> or <code>.cjs</code>
extensions, <code>package.json</code> <code>&quot;type&quot;</code> fields with either <code>&quot;module&quot;</code> or
<code>&quot;commonjs&quot;</code> values, or the <code>--input-type</code> flag. Dynamic <code>import()</code>
expressions are supported in either CommonJS or ES modules and would not force
a file to be treated as an ES module. See <a href="#syntax-detection">Syntax detection</a>.</p>
</li>
</ul>
<p>Node.js will treat the following as <a href="modules.md">CommonJS</a> when passed to <code>node</code> as the
initial input, or when referenced by <code>import</code> statements or <code>import()</code>
expressions:</p>
<ul>
<li>
<p>Files with a <code>.cjs</code> extension.</p>
</li>
<li>
<p>Files with a <code>.js</code> extension when the nearest parent <code>package.json</code> file
contains a top-level field <a href="#type"><code>&quot;type&quot;</code></a> with a value of <code>&quot;commonjs&quot;</code>.</p>
</li>
<li>
<p>Strings passed in as an argument to <code>--eval</code> or <code>--print</code>, or piped to <code>node</code>
via <code>STDIN</code>, with the flag <code>--input-type=commonjs</code>.</p>
</li>
<li>
<p>Files with a <code>.js</code> extension with no parent <code>package.json</code> file or where the
nearest parent <code>package.json</code> file lacks a <code>type</code> field, and where the code
can evaluate successfully as CommonJS. In other words, Node.js tries to run
such &quot;ambiguous&quot; files as CommonJS first, and will retry evaluating them as ES
modules if the evaluation as CommonJS fails because the parser found ES module
syntax.</p>
</li>
</ul>
<p>Writing ES module syntax in &quot;ambiguous&quot; files incurs a performance cost, and
therefore it is encouraged that authors be explicit wherever possible. In
particular, package authors should always include the <a href="#type"><code>&quot;type&quot;</code></a> field in
their <code>package.json</code> files, even in packages where all sources are CommonJS.
Being explicit about the <code>type</code> of the package will future-proof the package in
case the default type of Node.js ever changes, and it will also make things
easier for build tools and loaders to determine how the files in the package
should be interpreted.</p>
<h3>Syntax detection</h3>
<blockquote>
<p>Stability: 1.2 - Release candidate</p>
</blockquote>
<p>Node.js will inspect the source code of ambiguous input to determine whether it
contains ES module syntax; if such syntax is detected, the input will be treated
as an ES module.</p>
<p>Ambiguous input is defined as:</p>
<ul>
<li>Files with a <code>.js</code> extension or no extension; and either no controlling
<code>package.json</code> file or one that lacks a <code>type</code> field.</li>
<li>String input (<code>--eval</code> or <code>STDIN</code>) when <code>--input-type</code>is not specified.</li>
</ul>
<p>ES module syntax is defined as syntax that would throw when evaluated as
CommonJS. This includes the following:</p>
<ul>
<li><code>import</code> statements (but <em>not</em> <code>import()</code> expressions, which are valid in
CommonJS).</li>
<li><code>export</code> statements.</li>
<li><code>import.meta</code> references.</li>
<li><code>await</code> at the top level of a module.</li>
<li>Lexical redeclarations of the CommonJS wrapper variables (<code>require</code>, <code>module</code>,
<code>exports</code>, <code>__dirname</code>, <code>__filename</code>).</li>
</ul>
<h3>Module resolution and loading</h3>
<p>Node.js has two types of module resolution and loading, chosen based on how the module is requested.</p>
<p>When a module is requested via <code>require()</code> (available by default in CommonJS modules,
and can be dynamically generated using <code>createRequire()</code> in both CommonJS and ES Modules):</p>
<ul>
<li>Resolution:
<ul>
<li>The resolution initiated by <code>require()</code> supports <a href="modules.md#folders-as-modules">folders as modules</a>.</li>
<li>When resolving a specifier, if no exact match is found, <code>require()</code> will try to add
extensions (<code>.js</code>, <code>.json</code>, and finally <code>.node</code>) and then attempt to resolve
<a href="modules.md#folders-as-modules">folders as modules</a>.</li>
<li>It does not support URLs as specifiers by default.</li>
</ul>
</li>
<li>Loading:
<ul>
<li><code>.json</code> files are treated as JSON text files.</li>
<li><code>.node</code> files are interpreted as compiled addon modules loaded with <code>process.dlopen()</code>.</li>
<li><code>.ts</code>, <code>.mts</code> and <code>.cts</code> files are treated as <a href="typescript.md">TypeScript</a> text files.</li>
<li>Files with any other extension, or without extensions, are treated as JavaScript
text files.</li>
<li><code>require()</code> can only be used to <a href="modules.md#loading-ecmascript-modules-using-require">load ECMAScript modules from CommonJS modules</a> if
the <a href="esm.md">ECMAScript module</a> <em>and its dependencies</em> are synchronous
(i.e. they do not contain top-level <code>await</code>).</li>
</ul>
</li>
</ul>
<p>When a module is requested via static <code>import</code> statements (only available in ES Modules)
or <code>import()</code> expressions (available in both CommonJS and ES Modules):</p>
<ul>
<li>Resolution:
<ul>
<li>The resolution of <code>import</code>/<code>import()</code> does not support folders as modules,
directory indexes (e.g. <code>'./startup/index.js'</code>) must be fully specified.</li>
<li>It does not perform extension searching. A file extension must be provided
when the specifier is a relative or absolute file URL.</li>
<li>It supports <code>file://</code> and <code>data:</code> URLs as specifiers by default.</li>
</ul>
</li>
<li>Loading:
<ul>
<li><code>.json</code> files are treated as JSON text files. When importing JSON modules,
an import type attribute is required (e.g.
<code>import json from './data.json' with { type: 'json' }</code>).</li>
<li><code>.node</code> files are interpreted as compiled addon modules loaded with
<code>process.dlopen()</code>, if <a href="cli.md#--experimental-addon-modules"><code>--experimental-addon-modules</code></a> is enabled.</li>
<li><code>.ts</code>, <code>.mts</code> and <code>.cts</code> files are treated as <a href="typescript.md">TypeScript</a> text files.</li>
<li>It accepts only <code>.js</code>, <code>.mjs</code>, and <code>.cjs</code> extensions for JavaScript text
files.</li>
<li><code>.wasm</code> files are treated as <a href="esm.md#wasm-modules">WebAssembly modules</a>.</li>
<li>Any other file extensions will result in a  <a href="errors.md#err_unknown_file_extension"><code>ERR_UNKNOWN_FILE_EXTENSION</code></a> error.
Additional file extensions can be facilitated via <a href="module.md#customization-hooks">customization hooks</a>.</li>
<li><code>import</code>/<code>import()</code> can be used to load JavaScript <a href="modules.md">CommonJS modules</a>.
Such modules are passed through <a href="https://github.com/anonrig/merve">merve</a> to try to identify named
exports, which are available if they can be determined through static analysis.</li>
</ul>
</li>
</ul>
<p>Regardless of how a module is requested, the resolution and loading process can be customized
using <a href="module.md#customization-hooks">customization hooks</a>.</p>
<h3><code>package.json</code> and file extensions</h3>
<p>Within a package, the <a href="#nodejs-packagejson-field-definitions"><code>package.json</code></a> <a href="#type"><code>&quot;type&quot;</code></a> field defines how
Node.js should interpret <code>.js</code> files. If a <code>package.json</code> file does not have a
<code>&quot;type&quot;</code> field, <code>.js</code> files are treated as <a href="modules.md">CommonJS</a>.</p>
<p>A <code>package.json</code> <code>&quot;type&quot;</code> value of <code>&quot;module&quot;</code> tells Node.js to interpret <code>.js</code>
files within that package as using <a href="esm.md">ES module</a> syntax.</p>
<p>The <code>&quot;type&quot;</code> field applies not only to initial entry points (<code>node my-app.js</code>)
but also to files referenced by <code>import</code> statements and <code>import()</code> expressions.</p>
<pre><code class="language-js">// my-app.js, treated as an ES module because there is a package.json
// file in the same folder with &quot;type&quot;: &quot;module&quot;.

import './startup/init.js';
// Loaded as ES module since ./startup contains no package.json file,
// and therefore inherits the &quot;type&quot; value from one level up.

import 'commonjs-package';
// Loaded as CommonJS since ./node_modules/commonjs-package/package.json
// lacks a &quot;type&quot; field or contains &quot;type&quot;: &quot;commonjs&quot;.

import './node_modules/commonjs-package/index.js';
// Loaded as CommonJS since ./node_modules/commonjs-package/package.json
// lacks a &quot;type&quot; field or contains &quot;type&quot;: &quot;commonjs&quot;.
</code></pre>
<p>Files ending with <code>.mjs</code> are always loaded as <a href="esm.md">ES modules</a> regardless of
the nearest parent <code>package.json</code>.</p>
<p>Files ending with <code>.cjs</code> are always loaded as <a href="modules.md">CommonJS</a> regardless of the
nearest parent <code>package.json</code>.</p>
<pre><code class="language-js">import './legacy-file.cjs';
// Loaded as CommonJS since .cjs is always loaded as CommonJS.

import 'commonjs-package/src/index.mjs';
// Loaded as ES module since .mjs is always loaded as ES module.
</code></pre>
<p>The <code>.mjs</code> and <code>.cjs</code> extensions can be used to mix types within the same
package:</p>
<ul>
<li>
<p>Within a <code>&quot;type&quot;: &quot;module&quot;</code> package, Node.js can be instructed to
interpret a particular file as <a href="modules.md">CommonJS</a> by naming it with a <code>.cjs</code>
extension (since both <code>.js</code> and <code>.mjs</code> files are treated as ES modules within
a <code>&quot;module&quot;</code> package).</p>
</li>
<li>
<p>Within a <code>&quot;type&quot;: &quot;commonjs&quot;</code> package, Node.js can be instructed to
interpret a particular file as an <a href="esm.md">ES module</a> by naming it with an <code>.mjs</code>
extension (since both <code>.js</code> and <code>.cjs</code> files are treated as CommonJS within a
<code>&quot;commonjs&quot;</code> package).</p>
</li>
</ul>
<h3><code>--input-type</code> flag</h3>
<p>Strings passed in as an argument to <code>--eval</code> (or <code>-e</code>), or piped to <code>node</code> via
<code>STDIN</code>, are treated as <a href="esm.md">ES modules</a> when the <code>--input-type=module</code> flag
is set.</p>
<pre><code class="language-bash">node --input-type=module --eval &quot;import { sep } from 'node:path'; console.log(sep);&quot;

echo &quot;import { sep } from 'node:path'; console.log(sep);&quot; | node --input-type=module
</code></pre>
<p>For completeness there is also <code>--input-type=commonjs</code>, for explicitly running
string input as CommonJS. This is the default behavior if <code>--input-type</code> is
unspecified.</p>
<h2>Package entry points</h2>
<p>In a package's <code>package.json</code> file, two fields can define entry points for a
package: <a href="#main"><code>&quot;main&quot;</code></a> and <a href="#exports"><code>&quot;exports&quot;</code></a>. Both fields apply to both ES module
and CommonJS module entry points.</p>
<p>The <a href="#main"><code>&quot;main&quot;</code></a> field is supported in all versions of Node.js, but its
capabilities are limited: it only defines the main entry point of the package.</p>
<p>The <a href="#exports"><code>&quot;exports&quot;</code></a> provides a modern alternative to <a href="#main"><code>&quot;main&quot;</code></a> allowing
multiple entry points to be defined, conditional entry resolution support
between environments, and <strong>preventing any other entry points besides those
defined in <a href="#exports"><code>&quot;exports&quot;</code></a></strong>. This encapsulation allows module authors to
clearly define the public interface for their package.</p>
<p>For new packages targeting the currently supported versions of Node.js, the
<a href="#exports"><code>&quot;exports&quot;</code></a> field is recommended. For packages supporting Node.js 10 and
below, the <a href="#main"><code>&quot;main&quot;</code></a> field is required. If both <a href="#exports"><code>&quot;exports&quot;</code></a> and
<a href="#main"><code>&quot;main&quot;</code></a> are defined, the <a href="#exports"><code>&quot;exports&quot;</code></a> field takes precedence over
<a href="#main"><code>&quot;main&quot;</code></a> in supported versions of Node.js.</p>
<p><a href="#conditional-exports">Conditional exports</a> can be used within <a href="#exports"><code>&quot;exports&quot;</code></a> to define different
package entry points per environment, including whether the package is
referenced via <code>require</code> or via <code>import</code>. For more information about supporting
both CommonJS and ES modules in a single package please consult
<a href="#dual-commonjses-module-packages">the dual CommonJS/ES module packages section</a>.</p>
<p>Existing packages introducing the <a href="#exports"><code>&quot;exports&quot;</code></a> field will prevent consumers
of the package from using any entry points that are not defined, including the
<a href="#nodejs-packagejson-field-definitions"><code>package.json</code></a> (e.g. <code>require('your-package/package.json')</code>). <strong>This will
likely be a breaking change.</strong></p>
<p>To make the introduction of <a href="#exports"><code>&quot;exports&quot;</code></a> non-breaking, ensure that every
previously supported entry point is exported. It is best to explicitly specify
entry points so that the package's public API is well-defined. For example,
a project that previously exported <code>main</code>, <code>lib</code>,
<code>feature</code>, and the <code>package.json</code> could use the following <code>package.exports</code>:</p>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;my-package&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./lib/index.js&quot;,
    &quot;./lib&quot;: &quot;./lib/index.js&quot;,
    &quot;./lib/index&quot;: &quot;./lib/index.js&quot;,
    &quot;./lib/index.js&quot;: &quot;./lib/index.js&quot;,
    &quot;./feature&quot;: &quot;./feature/index.js&quot;,
    &quot;./feature/index&quot;: &quot;./feature/index.js&quot;,
    &quot;./feature/index.js&quot;: &quot;./feature/index.js&quot;,
    &quot;./package.json&quot;: &quot;./package.json&quot;
  }
}
</code></pre>
<p>Alternatively a project could choose to export entire folders both with and
without extensioned subpaths using export patterns:</p>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;my-package&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./lib/index.js&quot;,
    &quot;./lib&quot;: &quot;./lib/index.js&quot;,
    &quot;./lib/*&quot;: &quot;./lib/*.js&quot;,
    &quot;./lib/*.js&quot;: &quot;./lib/*.js&quot;,
    &quot;./feature&quot;: &quot;./feature/index.js&quot;,
    &quot;./feature/*&quot;: &quot;./feature/*.js&quot;,
    &quot;./feature/*.js&quot;: &quot;./feature/*.js&quot;,
    &quot;./package.json&quot;: &quot;./package.json&quot;
  }
}
</code></pre>
<p>With the above providing backwards-compatibility for any minor package versions,
a future major change for the package can then properly restrict the exports
to only the specific feature exports exposed:</p>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;my-package&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./lib/index.js&quot;,
    &quot;./feature/*.js&quot;: &quot;./feature/*.js&quot;,
    &quot;./feature/internal/*&quot;: null
  }
}
</code></pre>
<h3>Main entry point export</h3>
<p>When writing a new package, it is recommended to use the <a href="#exports"><code>&quot;exports&quot;</code></a> field:</p>
<pre><code class="language-json">{
  &quot;exports&quot;: &quot;./index.js&quot;
}
</code></pre>
<p>When the <a href="#exports"><code>&quot;exports&quot;</code></a> field is defined, all subpaths of the package are
encapsulated and no longer available to importers. For example,
<code>require('pkg/subpath.js')</code> throws an <a href="errors.md#err_package_path_not_exported"><code>ERR_PACKAGE_PATH_NOT_EXPORTED</code></a>
error.</p>
<p>This encapsulation of exports provides more reliable guarantees
about package interfaces for tools and when handling semver upgrades for a
package. It is not a strong encapsulation since a direct require of any
absolute subpath of the package such as
<code>require('/path/to/node_modules/pkg/subpath.js')</code> will still load <code>subpath.js</code>.</p>
<p>All currently supported versions of Node.js and modern build tools support the
<code>&quot;exports&quot;</code> field. For projects using an older version of Node.js or a related
build tool, compatibility can be achieved by including the <code>&quot;main&quot;</code> field
alongside <code>&quot;exports&quot;</code> pointing to the same module:</p>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;./index.js&quot;,
  &quot;exports&quot;: &quot;./index.js&quot;
}
</code></pre>
<h3>Subpath exports</h3>
<p>When using the <a href="#exports"><code>&quot;exports&quot;</code></a> field, custom subpaths can be defined along
with the main entry point by treating the main entry point as the
<code>&quot;.&quot;</code> subpath:</p>
<pre><code class="language-json">{
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./index.js&quot;,
    &quot;./submodule.js&quot;: &quot;./src/submodule.js&quot;
  }
}
</code></pre>
<p>Now only the defined subpath in <a href="#exports"><code>&quot;exports&quot;</code></a> can be imported by a consumer:</p>
<pre><code class="language-js">import submodule from 'es-module-package/submodule.js';
// Loads ./node_modules/es-module-package/src/submodule.js
</code></pre>
<p>While other subpaths will error:</p>
<pre><code class="language-js">import submodule from 'es-module-package/private-module.js';
// Throws ERR_PACKAGE_PATH_NOT_EXPORTED
</code></pre>
<h4>Extensions in subpaths</h4>
<p>Package authors should provide either extensioned (<code>import 'pkg/subpath.js'</code>) or
extensionless (<code>import 'pkg/subpath'</code>) subpaths in their exports. This ensures
that there is only one subpath for each exported module so that all dependents
import the same consistent specifier, keeping the package contract clear for
consumers and simplifying package subpath completions.</p>
<p>Traditionally, packages tended to use the extensionless style, which has the
benefits of readability and of masking the true path of the file within the
package.</p>
<p>With <a href="https://github.com/WICG/import-maps">import maps</a> now providing a standard for package resolution in browsers
and other JavaScript runtimes, using the extensionless style can result in
bloated import map definitions. Explicit file extensions can avoid this issue by
enabling the import map to utilize a <a href="https://github.com/WICG/import-maps#packages-via-trailing-slashes">packages folder mapping</a> to map multiple
subpaths where possible instead of a separate map entry per package subpath
export. This also mirrors the requirement of using <a href="esm.md#mandatory-file-extensions">the full specifier path</a>
in relative and absolute import specifiers.</p>
<h4>Path Rules and Validation for Export Targets</h4>
<p>When defining paths as targets in the <a href="#exports"><code>&quot;exports&quot;</code></a> field, Node.js enforces
several rules to ensure security, predictability, and proper encapsulation.
Understanding these rules is crucial for authors publishing packages.</p>
<h5>Targets must be relative URLs</h5>
<p>All target paths in the <a href="#exports"><code>&quot;exports&quot;</code></a> map (the values associated with export
keys) must be relative URL strings starting with <code>./</code>.</p>
<pre><code class="language-json">// package.json
{
  &quot;name&quot;: &quot;my-package&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./dist/main.js&quot;,          // Correct
    &quot;./feature&quot;: &quot;./lib/feature.js&quot;, // Correct
    // &quot;./origin-relative&quot;: &quot;/dist/main.js&quot;, // Incorrect: Must start with ./
    // &quot;./absolute&quot;: &quot;file:///dev/null&quot;, // Incorrect: Must start with ./
    // &quot;./outside&quot;: &quot;../common/util.js&quot; // Incorrect: Must start with ./
  }
}
</code></pre>
<p>Reasons for this behavior include:</p>
<ul>
<li><strong>Security:</strong> Prevents exporting arbitrary files from outside the
package's own directory.</li>
<li><strong>Encapsulation:</strong> Ensures all exported paths are resolved relative to
the package root, making the package self-contained.</li>
</ul>
<h5>No path traversal or invalid segments</h5>
<p>Export targets must not resolve to a location outside the package's root
directory. Additionally, path segments like <code>.</code> (single dot), <code>..</code> (double dot),
or <code>node_modules</code> (and their URL-encoded equivalents) are generally disallowed
within the <code>target</code> string after the initial <code>./</code> and in any <code>subpath</code> part
substituted into a target pattern.</p>
<pre><code class="language-json">// package.json
{
  &quot;name&quot;: &quot;my-package&quot;,
  &quot;exports&quot;: {
    // &quot;.&quot;: &quot;./dist/../../elsewhere/file.js&quot;, // Invalid: path traversal
    // &quot;.&quot;: &quot;././dist/main.js&quot;,             // Invalid: contains &quot;.&quot; segment
    // &quot;.&quot;: &quot;./dist/../dist/main.js&quot;,       // Invalid: contains &quot;..&quot; segment
    // &quot;./utils/./helper.js&quot;: &quot;./utils/helper.js&quot; // Key has invalid segment
  }
}
</code></pre>
<h3>Exports sugar</h3>
<p>If the <code>&quot;.&quot;</code> export is the only export, the <a href="#exports"><code>&quot;exports&quot;</code></a> field provides sugar
for this case being the direct <a href="#exports"><code>&quot;exports&quot;</code></a> field value.</p>
<pre><code class="language-json">{
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./index.js&quot;
  }
}
</code></pre>
<p>can be written:</p>
<pre><code class="language-json">{
  &quot;exports&quot;: &quot;./index.js&quot;
}
</code></pre>
<h3>Subpath imports</h3>
<p>In addition to the <a href="#exports"><code>&quot;exports&quot;</code></a> field, there is a package <code>&quot;imports&quot;</code> field
to create private mappings that only apply to import specifiers from within the
package itself.</p>
<p>Entries in the <code>&quot;imports&quot;</code> field must always start with <code>#</code> to ensure they are
disambiguated from external package specifiers.</p>
<p>For example, the imports field can be used to gain the benefits of conditional
exports for internal modules:</p>
<pre><code class="language-json">// package.json
{
  &quot;imports&quot;: {
    &quot;#dep&quot;: {
      &quot;node&quot;: &quot;dep-node-native&quot;,
      &quot;default&quot;: &quot;./dep-polyfill.js&quot;
    }
  },
  &quot;dependencies&quot;: {
    &quot;dep-node-native&quot;: &quot;^1.0.0&quot;
  }
}
</code></pre>
<p>where <code>import '#dep'</code> does not get the resolution of the external package
<code>dep-node-native</code> (including its exports in turn), and instead gets the local
file <code>./dep-polyfill.js</code> relative to the package in other environments.</p>
<p>Unlike the <code>&quot;exports&quot;</code> field, the <code>&quot;imports&quot;</code> field permits mapping to external
packages.</p>
<p>The resolution rules for the imports field are otherwise analogous to the
exports field.</p>
<h3>Subpath patterns</h3>
<p>For packages with a small number of exports or imports, we recommend
explicitly listing each exports subpath entry. But for packages that have
large numbers of subpaths, this might cause <code>package.json</code> bloat and
maintenance issues.</p>
<p>For these use cases, subpath export patterns can be used instead:</p>
<pre><code class="language-json">// ./node_modules/es-module-package/package.json
{
  &quot;exports&quot;: {
    &quot;./features/*.js&quot;: &quot;./src/features/*.js&quot;
  },
  &quot;imports&quot;: {
    &quot;#internal/*.js&quot;: &quot;./src/internal/*.js&quot;
  }
}
</code></pre>
<p><strong><code>*</code> maps expose nested subpaths as it is a string replacement syntax
only.</strong></p>
<p>All instances of <code>*</code> on the right hand side will then be replaced with this
value, including if it contains any <code>/</code> separators.</p>
<pre><code class="language-js">import featureX from 'es-module-package/features/x.js';
// Loads ./node_modules/es-module-package/src/features/x.js

import featureY from 'es-module-package/features/y/y.js';
// Loads ./node_modules/es-module-package/src/features/y/y.js

import internalZ from '#internal/z.js';
// Loads ./src/internal/z.js
</code></pre>
<p>This is a direct static matching and replacement without any special handling
for file extensions. Including the <code>&quot;*.js&quot;</code> on both sides of the mapping
restricts the exposed package exports to only JS files.</p>
<p>The property of exports being statically enumerable is maintained with exports
patterns since the individual exports for a package can be determined by
treating the right hand side target pattern as a <code>**</code> glob against the list of
files within the package. Because <code>node_modules</code> paths are forbidden in exports
targets, this expansion is dependent on only the files of the package itself.</p>
<p>To exclude private subfolders from patterns, <code>null</code> targets can be used:</p>
<pre><code class="language-json">// ./node_modules/es-module-package/package.json
{
  &quot;exports&quot;: {
    &quot;./features/*.js&quot;: &quot;./src/features/*.js&quot;,
    &quot;./features/private-internal/*&quot;: null
  }
}
</code></pre>
<pre><code class="language-js">import featureInternal from 'es-module-package/features/private-internal/m.js';
// Throws: ERR_PACKAGE_PATH_NOT_EXPORTED

import featureX from 'es-module-package/features/x.js';
// Loads ./node_modules/es-module-package/src/features/x.js
</code></pre>
<h3>Conditional exports</h3>
<p>Conditional exports provide a way to map to different paths depending on
certain conditions. They are supported for both CommonJS and ES module imports.</p>
<p>For example, a package that wants to provide different ES module exports for
<code>require()</code> and <code>import</code> can be written:</p>
<pre><code class="language-json">// package.json
{
  &quot;exports&quot;: {
    &quot;import&quot;: &quot;./index-module.js&quot;,
    &quot;require&quot;: &quot;./index-require.cjs&quot;
  },
  &quot;type&quot;: &quot;module&quot;
}
</code></pre>
<p>Node.js implements the following conditions, listed in order from most
specific to least specific as conditions should be defined:</p>
<ul>
<li><code>&quot;node-addons&quot;</code> - similar to <code>&quot;node&quot;</code> and matches for any Node.js environment.
This condition can be used to provide an entry point which uses native C++
addons as opposed to an entry point which is more universal and doesn't rely
on native addons. This condition can be disabled via the
<a href="cli.md#--no-addons"><code>--no-addons</code> flag</a>.</li>
<li><code>&quot;node&quot;</code> - matches for any Node.js environment. Can be a CommonJS or ES
module file. <em>In most cases explicitly calling out the Node.js platform is
not necessary.</em></li>
<li><code>&quot;import&quot;</code> - matches when the package is loaded via <code>import</code> or
<code>import()</code>, or via any top-level import or resolve operation by the
ECMAScript module loader. Applies regardless of the module format of the
target file. <em>Always mutually exclusive with <code>&quot;require&quot;</code>.</em></li>
<li><code>&quot;require&quot;</code> - matches when the package is loaded via <code>require()</code>. The
referenced file should be loadable with <code>require()</code> although the condition
matches regardless of the module format of the target file. Expected
formats include CommonJS, JSON, native addons, and ES modules. <em>Always mutually
exclusive with <code>&quot;import&quot;</code>.</em></li>
<li><code>&quot;module-sync&quot;</code> - matches no matter the package is loaded via <code>import</code>,
<code>import()</code> or <code>require()</code>. The format is expected to be ES modules that does
not contain top-level await in its module graph - if it does,
<code>ERR_REQUIRE_ASYNC_MODULE</code> will be thrown when the module is <code>require()</code>-ed.</li>
<li><code>&quot;default&quot;</code> - the generic fallback that always matches. Can be a CommonJS
or ES module file. <em>This condition should always come last.</em></li>
</ul>
<p>Within the <a href="#exports"><code>&quot;exports&quot;</code></a> object, key order is significant. During condition
matching, earlier entries have higher priority and take precedence over later
entries. <em>The general rule is that conditions should be from most specific to
least specific in object order</em>.</p>
<p>Using the <code>&quot;import&quot;</code> and <code>&quot;require&quot;</code> conditions can lead to some hazards,
which are further explained in <a href="#dual-commonjses-module-packages">the dual CommonJS/ES module packages section</a>.</p>
<p>The <code>&quot;node-addons&quot;</code> condition can be used to provide an entry point which
uses native C++ addons. However, this condition can be disabled via the
<a href="cli.md#--no-addons"><code>--no-addons</code> flag</a>. When using <code>&quot;node-addons&quot;</code>, it's recommended to treat
<code>&quot;default&quot;</code> as an enhancement that provides a more universal entry point, e.g.
using WebAssembly instead of a native addon.</p>
<p>Conditional exports can also be extended to exports subpaths, for example:</p>
<pre><code class="language-json">{
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./index.js&quot;,
    &quot;./feature.js&quot;: {
      &quot;node&quot;: &quot;./feature-node.js&quot;,
      &quot;default&quot;: &quot;./feature.js&quot;
    }
  }
}
</code></pre>
<p>Defines a package where <code>require('pkg/feature.js')</code> and
<code>import 'pkg/feature.js'</code> could provide different implementations between
Node.js and other JS environments.</p>
<p>When using environment branches, always include a <code>&quot;default&quot;</code> condition where
possible. Providing a <code>&quot;default&quot;</code> condition ensures that any unknown JS
environments are able to use this universal implementation, which helps avoid
these JS environments from having to pretend to be existing environments in
order to support packages with conditional exports. For this reason, using
<code>&quot;node&quot;</code> and <code>&quot;default&quot;</code> condition branches is usually preferable to using
<code>&quot;node&quot;</code> and <code>&quot;browser&quot;</code> condition branches.</p>
<h3>Nested conditions</h3>
<p>In addition to direct mappings, Node.js also supports nested condition objects.</p>
<p>For example, to define a package that only has dual mode entry points for
use in Node.js but not the browser:</p>
<pre><code class="language-json">{
  &quot;exports&quot;: {
    &quot;node&quot;: {
      &quot;import&quot;: &quot;./feature-node.mjs&quot;,
      &quot;require&quot;: &quot;./feature-node.cjs&quot;
    },
    &quot;default&quot;: &quot;./feature.mjs&quot;
  }
}
</code></pre>
<p>Conditions continue to be matched in order as with flat conditions. If
a nested condition does not have any mapping it will continue checking
the remaining conditions of the parent condition. In this way nested
conditions behave analogously to nested JavaScript <code>if</code> statements.</p>
<h3>Resolving user conditions</h3>
<p>When running Node.js, custom user conditions can be added with the
<code>--conditions</code> flag:</p>
<pre><code class="language-bash">node --conditions=development index.js
</code></pre>
<p>which would then resolve the <code>&quot;development&quot;</code> condition in package imports and
exports, while resolving the existing <code>&quot;node&quot;</code>, <code>&quot;node-addons&quot;</code>, <code>&quot;default&quot;</code>,
<code>&quot;import&quot;</code>, and <code>&quot;require&quot;</code> conditions as appropriate.</p>
<p>Any number of custom conditions can be set with repeat flags.</p>
<p>Typical conditions should only contain alphanumerical characters,
using &quot;:&quot;, &quot;-&quot;, or &quot;=&quot; as separators if necessary. Anything else may run
into compatibility issues outside of node.</p>
<p>In node, conditions have very few restrictions, but specifically these include:</p>
<ol>
<li>They must contain at least one character.</li>
<li>They cannot start with &quot;.&quot; since they may appear in places that also
allow relative paths.</li>
<li>They cannot contain &quot;,&quot; since they may be parsed as a comma-separated
list by some CLI tools.</li>
<li>They cannot be integer property keys like &quot;10&quot; since that can have
unexpected effects on property key ordering for JS objects.</li>
</ol>
<h3>Community Conditions Definitions</h3>
<p>Condition strings other than the <code>&quot;import&quot;</code>, <code>&quot;require&quot;</code>, <code>&quot;node&quot;</code>, <code>&quot;module-sync&quot;</code>,
<code>&quot;node-addons&quot;</code> and <code>&quot;default&quot;</code> conditions
<a href="#conditional-exports">implemented in Node.js core</a> are ignored by default.</p>
<p>Other platforms may implement other conditions and user conditions can be
enabled in Node.js via the <a href="#resolving-user-conditions"><code>--conditions</code> / <code>-C</code> flag</a>.</p>
<p>Since custom package conditions require clear definitions to ensure correct
usage, a list of common known package conditions and their strict definitions
is provided below to assist with ecosystem coordination.</p>
<ul>
<li><code>&quot;types&quot;</code> - can be used by typing systems to resolve the typing file for
the given export. <em>This condition should always be included first.</em></li>
<li><code>&quot;browser&quot;</code> - any web browser environment.</li>
<li><code>&quot;development&quot;</code> - can be used to define a development-only environment
entry point, for example to provide additional debugging context such as
better error messages when running in a development mode. <em>Must always be
mutually exclusive with <code>&quot;production&quot;</code>.</em></li>
<li><code>&quot;production&quot;</code> - can be used to define a production environment entry
point. <em>Must always be mutually exclusive with <code>&quot;development&quot;</code>.</em></li>
</ul>
<p>For other runtimes, platform-specific condition key definitions are maintained
by the <a href="https://wintercg.org/">WinterCG</a> in the <a href="https://runtime-keys.proposal.wintercg.org/">Runtime Keys</a> proposal specification.</p>
<p>New conditions definitions may be added to this list by creating a pull request
to the <a href="https://github.com/nodejs/node/blob/HEAD/doc/api/packages.md#conditions-definitions">Node.js documentation for this section</a>. The requirements for listing
a new condition definition here are that:</p>
<ul>
<li>The definition should be clear and unambiguous for all implementers.</li>
<li>The use case for why the condition is needed should be clearly justified.</li>
<li>There should exist sufficient existing implementation usage.</li>
<li>The condition name should not conflict with another condition definition or
condition in wide usage.</li>
<li>The listing of the condition definition should provide a coordination
benefit to the ecosystem that wouldn't otherwise be possible. For example,
this would not necessarily be the case for company-specific or
application-specific conditions.</li>
<li>The condition should be such that a Node.js user would expect it to be in
Node.js core documentation. The <code>&quot;types&quot;</code> condition is a good example: It
doesn't really belong in the <a href="https://runtime-keys.proposal.wintercg.org/">Runtime Keys</a> proposal but is a good fit
here in the Node.js docs.</li>
</ul>
<p>The above definitions may be moved to a dedicated conditions registry in due
course.</p>
<h3>Self-referencing a package using its name</h3>
<p>Within a package, the values defined in the package's
<code>package.json</code> <a href="#exports"><code>&quot;exports&quot;</code></a> field can be referenced via the package's name.
For example, assuming the <code>package.json</code> is:</p>
<pre><code class="language-json">// package.json
{
  &quot;name&quot;: &quot;a-package&quot;,
  &quot;exports&quot;: {
    &quot;.&quot;: &quot;./index.mjs&quot;,
    &quot;./foo.js&quot;: &quot;./foo.js&quot;
  }
}
</code></pre>
<p>Then any module <em>in that package</em> can reference an export in the package itself:</p>
<pre><code class="language-js">// ./a-module.mjs
import { something } from 'a-package'; // Imports &quot;something&quot; from ./index.mjs.
</code></pre>
<p>Self-referencing is available only if <code>package.json</code> has <a href="#exports"><code>&quot;exports&quot;</code></a>, and
will allow importing only what that <a href="#exports"><code>&quot;exports&quot;</code></a> (in the <code>package.json</code>)
allows. So the code below, given the previous package, will generate a runtime
error:</p>
<pre><code class="language-js">// ./another-module.mjs

// Imports &quot;another&quot; from ./m.mjs. Fails because
// the &quot;package.json&quot; &quot;exports&quot; field
// does not provide an export named &quot;./m.mjs&quot;.
import { another } from 'a-package/m.mjs';
</code></pre>
<p>Self-referencing is also available when using <code>require</code>, both in an ES module,
and in a CommonJS one. For example, this code will also work:</p>
<pre><code class="language-cjs">// ./a-module.js
const { something } = require('a-package/foo.js'); // Loads from ./foo.js.
</code></pre>
<p>Finally, self-referencing also works with scoped packages. For example, this
code will also work:</p>
<pre><code class="language-json">// package.json
{
  &quot;name&quot;: &quot;@my/package&quot;,
  &quot;exports&quot;: &quot;./index.js&quot;
}
</code></pre>
<pre><code class="language-cjs">// ./index.js
module.exports = 42;
</code></pre>
<pre><code class="language-cjs">// ./other.js
console.log(require('@my/package'));
</code></pre>
<pre><code class="language-console">$ node other.js
42
</code></pre>
<h2>Dual CommonJS/ES module packages</h2>
<p>See <a href="https://github.com/nodejs/package-examples">the package examples repository</a> for details.</p>
<h2>Package maps</h2>
<blockquote>
<p>Stability: 1 - Experimental. Enable this API with <a href="cli.md#--experimental-package-mappath"><code>--experimental-package-map</code></a>.</p>
</blockquote>
<p>Package maps provide a mechanism to control package resolution without relying
on the <code>node_modules</code> folder structure. When enabled via the
<a href="cli.md#--experimental-package-mappath"><code>--experimental-package-map</code></a> flag, Node.js uses a JSON configuration file
to determine how bare specifiers are resolved.</p>
<p>This feature is useful for:</p>
<ul>
<li><strong>Monorepos</strong>: Define explicit dependency relationships between workspace
packages without symlinks or hoisting complexities.</li>
<li><strong>Dependency isolation</strong>: Prevent packages from accessing undeclared
dependencies (phantom dependencies).</li>
<li><strong>Low file system coupling</strong>: The package resolution algorithm runs without
inspecting the file system, relying instead on static data tables.</li>
</ul>
<h3>Configuration file format</h3>
<p>The package map configuration file is a JSON file with a <code>packages</code> object.
Each key in <code>packages</code> is called a package ID and is a unique identifier for a package entry:</p>
<pre><code class="language-json">{
  &quot;packages&quot;: {
    &quot;app&quot;: {
      &quot;url&quot;: &quot;./packages/app&quot;,
      &quot;dependencies&quot;: {
        &quot;@myorg/utils&quot;: &quot;utils&quot;,
        &quot;@myorg/ui-lib&quot;: &quot;ui-lib&quot;
      }
    },
    &quot;utils&quot;: {
      &quot;url&quot;: &quot;./packages/utils&quot;
    },
    &quot;ui-lib&quot;: {
      &quot;url&quot;: &quot;./packages/ui-lib&quot;,
      &quot;dependencies&quot;: {
        &quot;@myorg/utils&quot;: &quot;utils&quot;
      }
    }
  }
}
</code></pre>
<p>Each package entry has the following fields:</p>
<ul>
<li><code>url</code> {string} <strong>Required.</strong> An absolute or relative URL. This is parsed using
the WHATWG <a href="url.md#the-whatwg-url-api"><code>URL</code></a> API, using the configuration file URL as base. Only
<code>file:</code> protocol is supported. Multiple packages are allowed to share the
same URL; consumers must key module instances by both module url <strong>and package IDs</strong>
to differentiate them.</li>
<li><code>dependencies</code> {Object} An object mapping bare specifiers to package keys.
Each key is the import name used in source code, and each value is the
corresponding package key in the <code>packages</code> object. Defaults to an empty
object.</li>
</ul>
<h3>Resolution algorithm</h3>
<p>When a bare specifier is encountered:</p>
<ol>
<li>Node.js determines which package performs the resolution request.
<ul>
<li>If possible the package ID for the importer file should be provided to the resolution algorithm.</li>
<li>Failing that, the resolution will check if the file path is within any
package location decoded from its <code>url</code>.</li>
</ul>
</li>
<li>If no package ID is provided and the importing file is not within any mapped package, an
<a href="errors.md#err_package_map_external_file"><code>ERR_PACKAGE_MAP_EXTERNAL_FILE</code></a> error is thrown.</li>
<li>Node.js looks up the specifier's package name in the importing package's
<code>dependencies</code> object to find the corresponding package key.</li>
<li>If found, the resolution algorithm locates the target package location from the
package's <code>url</code> field in the package map.</li>
<li>If the specifier is not in <code>dependencies</code>, a
<code>MODULE_NOT_FOUND</code> error is thrown.</li>
<li>The package location is forwarded to the regular Node.js resolution algorithm to
finish the resolution (<code>index.js</code>, exports field, etc).</li>
</ol>
<p>More details can be found in the <a href="modules.md#all-together">resolution algorithm pseudo-code</a>.</p>
<h3>Multiple package versions</h3>
<p>Different packages can depend on different versions of the same package.
Because <code>dependencies</code> maps bare specifiers to package keys, two packages
can map the same specifier to different targets:</p>
<pre><code class="language-json">{
  &quot;packages&quot;: {
    &quot;app&quot;: {
      &quot;url&quot;: &quot;./app&quot;,
      &quot;dependencies&quot;: {
        &quot;component&quot;: &quot;component-v2&quot;
      }
    },
    &quot;legacy&quot;: {
      &quot;url&quot;: &quot;./legacy&quot;,
      &quot;dependencies&quot;: {
        &quot;component&quot;: &quot;component-v1&quot;
      }
    },
    &quot;component-v1&quot;: {
      &quot;url&quot;: &quot;./vendor/component-1.0.0&quot;
    },
    &quot;component-v2&quot;: {
      &quot;url&quot;: &quot;./vendor/component-2.0.0&quot;
    }
  }
}
</code></pre>
<p>Both <code>app</code> and <code>legacy</code> can <code>import 'component'</code>, but they resolve to
different paths based on their declared dependencies.</p>
<h3>Multiple packages for the same URL</h3>
<p>To address complex hoisting situations, multiple packages may share the same
URL, which introduces ambiguity when determining which package an import
originates from:</p>
<pre><code class="language-json">{
  &quot;packages&quot;: {
    &quot;app-old&quot;: {
      &quot;url&quot;: &quot;./app-old&quot;,
      &quot;dependencies&quot;: {
        &quot;lib&quot;: &quot;lib-old&quot;
      }
    },
    &quot;app-new&quot;: {
      &quot;url&quot;: &quot;./app-new&quot;,
      &quot;dependencies&quot;: {
        &quot;lib&quot;: &quot;lib-new&quot;
      }
    },
    &quot;lib-old&quot;: {
      &quot;url&quot;: &quot;./lib&quot;,
      &quot;dependencies&quot;: {
        &quot;react&quot;: &quot;react-15&quot;
      }
    },
    &quot;lib-new&quot;: {
      &quot;url&quot;: &quot;./lib&quot;,
      &quot;dependencies&quot;: {
        &quot;react&quot;: &quot;react-18&quot;
      }
    }
  }
}
</code></pre>
<p>In the example above both <code>lib-old</code> and <code>lib-new</code> use the same <code>./lib</code> folder to
store their sources, the only difference being in which version of <code>react</code> they'll
access when performing <code>require</code> calls or using <code>import</code>.</p>
<p>Because multiple package entries share the same URL, resolving a bare specifier
from a file within that URL is ambiguous unless the originating package ID is
known. If the package ID cannot be determined (for example, because the caller
did not propagate it from a previous resolution), Node.js will throw an error
rather than guess.</p>
<p>To support this pattern, implementers must key module instances by package ID
and propagate it from each resolution result to subsequent resolution requests.
This ensures that when <code>lib</code> requires <code>react</code>, the runtime knows whether the
request comes from <code>lib-old</code> or <code>lib-new</code> and can select the correct dependency.</p>
<h3>Interaction with other resolution</h3>
<p>Package maps only apply to bare specifiers that are not Node.js builtin
modules. The following cases are not affected by package maps and continue
to use standard resolution:</p>
<ul>
<li>Relative paths or URLs (<code>./</code> or <code>../</code>).</li>
<li>Absolute paths or URLs.</li>
<li>Node.js builtin modules (<code>node:fs</code>, etc.).</li>
</ul>
<h3>Limitations</h3>
<ul>
<li>Package maps must be a single static file; dynamic configuration is not
supported.</li>
<li>Circular dependency detection is not performed by the package map resolver.</li>
<li>The package map file is loaded synchronously at startup.</li>
</ul>
<h2>Node.js <code>package.json</code> field definitions</h2>
<p>This section describes the fields used by the Node.js runtime. Other tools (such
as <a href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json">npm</a>) use
additional fields which are ignored by Node.js and not documented here.</p>
<p>The following fields in <code>package.json</code> files are used in Node.js:</p>
<ul>
<li><a href="#name"><code>&quot;name&quot;</code></a> - Relevant when using named imports within a package. Also used
by package managers as the name of the package.</li>
<li><a href="#main"><code>&quot;main&quot;</code></a> - The default module when loading the package, if exports is not
specified, and in versions of Node.js prior to the introduction of exports.</li>
<li><a href="#type"><code>&quot;type&quot;</code></a> - The package type determining whether to load <code>.js</code> files as
CommonJS or ES modules.</li>
<li><a href="#exports"><code>&quot;exports&quot;</code></a> - Package exports and conditional exports. When present,
limits which submodules can be loaded from within the package.</li>
<li><a href="#imports"><code>&quot;imports&quot;</code></a> - Package imports, for use by modules within the package
itself.</li>
</ul>
<h3><code>&quot;name&quot;</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<pre><code class="language-json">{
  &quot;name&quot;: &quot;package-name&quot;
}
</code></pre>
<p>The <code>&quot;name&quot;</code> field defines your package's name. Publishing to the
<em>npm</em> registry requires a name that satisfies
<a href="https://docs.npmjs.com/files/package.json#name">certain requirements</a>.</p>
<p>The <code>&quot;name&quot;</code> field can be used in addition to the <a href="#exports"><code>&quot;exports&quot;</code></a> field to
<a href="#self-referencing-a-package-using-its-name">self-reference</a> a package using its name.</p>
<h3><code>&quot;main&quot;</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<pre><code class="language-json">{
  &quot;main&quot;: &quot;./index.js&quot;
}
</code></pre>
<p>The <code>&quot;main&quot;</code> field defines the entry point of a package when imported by name
via a <code>node_modules</code> lookup.  Its value is a path.</p>
<p>The <a href="#exports"><code>&quot;exports&quot;</code></a> field, if it exists, takes precedence over the
<code>&quot;main&quot;</code> field when importing the package by name.</p>
<p>It also defines the script that is used when the <a href="modules.md#folders-as-modules">package directory is loaded
via <code>require()</code></a>.</p>
<pre><code class="language-cjs">// This resolves to ./path/to/directory/index.js.
require('./path/to/directory');
</code></pre>
<h3><code>&quot;type&quot;</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The <code>&quot;type&quot;</code> field defines the module format that Node.js uses for all
<code>.js</code> files that have that <code>package.json</code> file as their nearest parent.</p>
<p>Files ending with <code>.js</code> are loaded as ES modules when the nearest parent
<code>package.json</code> file contains a top-level field <code>&quot;type&quot;</code> with a value of
<code>&quot;module&quot;</code>.</p>
<p>The nearest parent <code>package.json</code> is defined as the first <code>package.json</code> found
when searching in the current folder, that folder's parent, and so on up
until a node_modules folder or the volume root is reached.</p>
<pre><code class="language-json">// package.json
{
  &quot;type&quot;: &quot;module&quot;
}
</code></pre>
<pre><code class="language-bash"># In same folder as preceding package.json
node my-app.js # Runs as ES module
</code></pre>
<p>If the nearest parent <code>package.json</code> lacks a <code>&quot;type&quot;</code> field, or contains
<code>&quot;type&quot;: &quot;commonjs&quot;</code>, <code>.js</code> files are treated as <a href="modules.md">CommonJS</a>. If the volume
root is reached and no <code>package.json</code> is found, <code>.js</code> files are treated as
<a href="modules.md">CommonJS</a>.</p>
<p><code>import</code> statements of <code>.js</code> files are treated as ES modules if the nearest
parent <code>package.json</code> contains <code>&quot;type&quot;: &quot;module&quot;</code>.</p>
<pre><code class="language-js">// my-app.js, part of the same example as above
import './startup.js'; // Loaded as ES module because of package.json
</code></pre>
<p>Regardless of the value of the <code>&quot;type&quot;</code> field, <code>.mjs</code> files are always treated
as ES modules and <code>.cjs</code> files are always treated as CommonJS.</p>
<h3><code>&quot;exports&quot;</code></h3>
<ul>
<li>Type: {Object|string|string[]}</li>
</ul>
<pre><code class="language-json">{
  &quot;exports&quot;: &quot;./index.js&quot;
}
</code></pre>
<p>The <code>&quot;exports&quot;</code> field allows defining the <a href="#package-entry-points">entry points</a> of a package when
imported by name loaded either via a <code>node_modules</code> lookup or a
<a href="#self-referencing-a-package-using-its-name">self-reference</a> to its own name. It is supported in Node.js 12+ as an
alternative to the <a href="#main"><code>&quot;main&quot;</code></a> that can support defining <a href="#subpath-exports">subpath exports</a>
and <a href="#conditional-exports">conditional exports</a> while encapsulating internal unexported modules.</p>
<p><a href="#conditional-exports">Conditional Exports</a> can also be used within <code>&quot;exports&quot;</code> to define different
package entry points per environment, including whether the package is
referenced via <code>require</code> or via <code>import</code>.</p>
<p>All paths defined in the <code>&quot;exports&quot;</code> must be relative file URLs starting with
<code>./</code>.</p>
<h3><code>&quot;imports&quot;</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<pre><code class="language-json">// package.json
{
  &quot;imports&quot;: {
    &quot;#dep&quot;: {
      &quot;node&quot;: &quot;dep-node-native&quot;,
      &quot;default&quot;: &quot;./dep-polyfill.js&quot;
    }
  },
  &quot;dependencies&quot;: {
    &quot;dep-node-native&quot;: &quot;^1.0.0&quot;
  }
}
</code></pre>
<p>Entries in the imports field must be strings starting with <code>#</code>.</p>
<p>Package imports permit mapping to external packages.</p>
<p>This field defines <a href="#subpath-imports">subpath imports</a> for the current package.</p>
