---
id: "js-en-function-node-vm"
language: "js"
lang: "en"
category: "function"
name: "node:vm"
title: "VM (executing JavaScript)"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/vm.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-94"],"note":"vm 沙箱不是安全边界，可被逃逸"}]
---

# VM (executing JavaScript)

<h1>VM (executing JavaScript)</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:vm</code> module enables compiling and running code within V8 Virtual
Machine contexts.</p>
<p>&lt;strong class=&quot;critical&quot;&gt;The <code>node:vm</code> module is not a security
mechanism. Do not use it to run untrusted code.&lt;/strong&gt;</p>
<p>JavaScript code can be compiled and run immediately or
compiled, saved, and run later.</p>
<p>A common use case is to run the code in a different V8 Context. This means
invoked code has a different global object than the invoking code.</p>
<p>One can provide the context by <a href="#what-does-it-mean-to-contextify-an-object"><em>contextifying</em></a> an
object. The invoked code treats any property in the context like a
global variable. Any changes to global variables caused by the invoked
code are reflected in the context object.</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';

const x = 1;

const context = { x: 2 };
createContext(context); // Contextify the object.

const code = 'x += 40; var y = 17;';
// `x` and `y` are global variables in the context.
// Initially, x has the value 2 because that is the value of context.x.
runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17

console.log(x); // 1; y is not defined
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');

const x = 1;

const context = { x: 2 };
createContext(context); // Contextify the object.

const code = 'x += 40; var y = 17;';
// `x` and `y` are global variables in the context.
// Initially, x has the value 2 because that is the value of context.x.
runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17

console.log(x); // 1; y is not defined
</code></pre>
<h2>Class: <code>vm.Script</code></h2>
<p>Instances of the <code>vm.Script</code> class contain precompiled scripts that can be
executed in specific contexts.</p>
<h3><code>new vm.Script(code[, options])</code></h3>
<ul>
<li><code>code</code> {string} The JavaScript code to compile.</li>
<li><code>options</code> {Object|string}
<ul>
<li><code>filename</code> {string} Specifies the filename used in stack traces produced
by this script. <strong>Default:</strong> <code>'evalmachine.&lt;anonymous&gt;'</code>.</li>
<li><code>lineOffset</code> {number} Specifies the line number offset that is displayed
in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {number} Specifies the first-line column number offset that
is displayed in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source. When supplied, the <code>cachedDataRejected</code> value will be set to
either <code>true</code> or <code>false</code> depending on acceptance of the data by V8.</li>
<li><code>produceCachedData</code> {boolean} When <code>true</code> and no <code>cachedData</code> is present, V8
will attempt to produce code cache data for <code>code</code>. Upon success, a
<code>Buffer</code> with V8's code cache data will be produced and stored in the
<code>cachedData</code> property of the returned <code>vm.Script</code> instance.
The <code>cachedDataProduced</code> value will be set to either <code>true</code> or <code>false</code>
depending on whether code cache data is produced successfully.
This option is <strong>deprecated</strong> in favor of <code>script.createCachedData()</code>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify how the modules should be loaded during the evaluation
of this script when <code>import()</code> is called. This option is part of the
experimental modules API. We do not recommend using it in a production
environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
</ul>
<p>If <code>options</code> is a string, then it specifies the filename.</p>
<p>Creating a new <code>vm.Script</code> object compiles <code>code</code> but does not run it. The
compiled <code>vm.Script</code> can be run later multiple times. The <code>code</code> is not bound to
any global object; rather, it is bound before each run, just for that run.</p>
<h3><code>script.cachedDataRejected</code></h3>
<ul>
<li>Type: {boolean|undefined}</li>
</ul>
<p>When <code>cachedData</code> is supplied to create the <code>vm.Script</code>, this value will be set
to either <code>true</code> or <code>false</code> depending on acceptance of the data by V8.
Otherwise the value is <code>undefined</code>.</p>
<h3><code>script.createCachedData()</code></h3>
<ul>
<li>Returns: {Buffer}</li>
</ul>
<p>Creates a code cache that can be used with the <code>Script</code> constructor's
<code>cachedData</code> option. Returns a <code>Buffer</code>. This method may be called at any
time and any number of times.</p>
<p>The code cache of the <code>Script</code> doesn't contain any JavaScript observable
states. The code cache is safe to be saved along side the script source and
used to construct new <code>Script</code> instances multiple times.</p>
<p>Functions in the <code>Script</code> source can be marked as lazily compiled and they are
not compiled at construction of the <code>Script</code>. These functions are going to be
compiled when they are invoked the first time. The code cache serializes the
metadata that V8 currently knows about the <code>Script</code> that it can use to speed up
future compilations.</p>
<pre><code class="language-js">const script = new vm.Script(`
function add(a, b) {
  return a + b;
}

const x = add(1, 2);
`);

const cacheWithoutAdd = script.createCachedData();
// In `cacheWithoutAdd` the function `add()` is marked for full compilation
// upon invocation.

script.runInThisContext();

const cacheWithAdd = script.createCachedData();
// `cacheWithAdd` contains fully compiled function `add()`.
</code></pre>
<h3><code>script.runInContext(contextifiedObject[, options])</code></h3>
<ul>
<li><code>contextifiedObject</code> {Object} A <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object as returned by the
<code>vm.createContext()</code> method.</li>
<li><code>options</code> {Object}
<ul>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {any} the result of the very last statement executed in the script.</li>
</ul>
<p>Runs the compiled code contained by the <code>vm.Script</code> object within the given
<code>contextifiedObject</code> and returns the result. Running code does not have access
to local scope.</p>
<p>The following example compiles code that increments a global variable, sets
the value of another global variable, then execute the code multiple times.
The globals are contained in the <code>context</code> object.</p>
<pre><code class="language-mjs">import { createContext, Script } from 'node:vm';

const context = {
  animal: 'cat',
  count: 2,
};

const script = new Script('count += 1; name = &quot;kitty&quot;;');

createContext(context);
for (let i = 0; i &lt; 10; ++i) {
  script.runInContext(context);
}

console.log(context);
// Prints: { animal: 'cat', count: 12, name: 'kitty' }
</code></pre>
<pre><code class="language-cjs">const { createContext, Script } = require('node:vm');

const context = {
  animal: 'cat',
  count: 2,
};

const script = new Script('count += 1; name = &quot;kitty&quot;;');

createContext(context);
for (let i = 0; i &lt; 10; ++i) {
  script.runInContext(context);
}

console.log(context);
// Prints: { animal: 'cat', count: 12, name: 'kitty' }
</code></pre>
<p>Using the <code>timeout</code> or <code>breakOnSigint</code> options will result in new event loops
and corresponding threads being started, which have a non-zero performance
overhead.</p>
<h3><code>script.runInNewContext([contextObject[, options]])</code></h3>
<ul>
<li><code>contextObject</code> {Object|vm.constants.DONT_CONTEXTIFY|undefined}
Either <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a> or an object that will be <a href="#what-does-it-mean-to-contextify-an-object">contextified</a>.
If <code>undefined</code>, an empty contextified object will be created for backwards compatibility.</li>
<li><code>options</code> {Object}
<ul>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
<li><code>contextName</code> {string} Human-readable name of the newly created context.
<strong>Default:</strong> <code>'VM Context i'</code>, where <code>i</code> is an ascending numerical index of
the created context.</li>
<li><code>contextOrigin</code> {string} <a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin">Origin</a> corresponding to the newly
created context for display purposes. The origin should be formatted like a
URL, but with only the scheme, host, and port (if necessary), like the
value of the <a href="url.md#urlorigin"><code>url.origin</code></a> property of a <a href="url.md#class-url"><code>URL</code></a> object. Most notably,
this string should omit the trailing slash, as that denotes a path.
<strong>Default:</strong> <code>''</code>.</li>
<li><code>contextCodeGeneration</code> {Object}
<ul>
<li><code>strings</code> {boolean} If set to false any calls to <code>eval</code> or function
constructors (<code>Function</code>, <code>GeneratorFunction</code>, etc) will throw an
<code>EvalError</code>. <strong>Default:</strong> <code>true</code>.</li>
<li><code>wasm</code> {boolean} If set to false any attempt to compile a WebAssembly
module will throw a <code>WebAssembly.CompileError</code>. <strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li><code>microtaskMode</code> {string} If set to <code>afterEvaluate</code>, microtasks (tasks
scheduled through <code>Promise</code>s and <code>async function</code>s) will be run immediately
after the script has run. They are included in the <code>timeout</code> and
<code>breakOnSigint</code> scopes in that case.</li>
</ul>
</li>
<li>Returns: {any} the result of the very last statement executed in the script.</li>
</ul>
<p>This method is a shortcut to <code>script.runInContext(vm.createContext(options), options)</code>.
It does several things at once:</p>
<ol>
<li>Creates a new context.</li>
<li>If <code>contextObject</code> is an object, <a href="#what-does-it-mean-to-contextify-an-object">contextifies</a> it with the new context.
If  <code>contextObject</code> is undefined, creates a new object and <a href="#what-does-it-mean-to-contextify-an-object">contextifies</a> it.
If <code>contextObject</code> is <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a>, don't <a href="#what-does-it-mean-to-contextify-an-object">contextify</a> anything.</li>
<li>Runs the compiled code contained by the <code>vm.Script</code> object within the created context. The code
does not have access to the scope in which this method is called.</li>
<li>Returns the result.</li>
</ol>
<p>The following example compiles code that sets a global variable, then executes
the code multiple times in different contexts. The globals are set on and
contained within each individual <code>context</code>.</p>
<pre><code class="language-mjs">import { constants, Script } from 'node:vm';

const script = new Script('globalVar = &quot;set&quot;');

const contexts = [{}, {}, {}];
contexts.forEach((context) =&gt; {
  script.runInNewContext(context);
});

console.log(contexts);
// Prints: [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]

// This would throw if the context is created from a contextified object.
// constants.DONT_CONTEXTIFY allows creating contexts with ordinary
// global objects that can be frozen.
const freezeScript = new Script('Object.freeze(globalThis); globalThis;');
const frozenContext = freezeScript.runInNewContext(constants.DONT_CONTEXTIFY);
</code></pre>
<pre><code class="language-cjs">const { constants, Script } = require('node:vm');

const script = new Script('globalVar = &quot;set&quot;');

const contexts = [{}, {}, {}];
contexts.forEach((context) =&gt; {
  script.runInNewContext(context);
});

console.log(contexts);
// Prints: [{ globalVar: 'set' }, { globalVar: 'set' }, { globalVar: 'set' }]

// This would throw if the context is created from a contextified object.
// constants.DONT_CONTEXTIFY allows creating contexts with ordinary
// global objects that can be frozen.
const freezeScript = new Script('Object.freeze(globalThis); globalThis;');
const frozenContext = freezeScript.runInNewContext(constants.DONT_CONTEXTIFY);
</code></pre>
<h3><code>script.runInThisContext([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {any} the result of the very last statement executed in the script.</li>
</ul>
<p>Runs the compiled code contained by the <code>vm.Script</code> within the context of the
current <code>global</code> object. Running code does not have access to local scope, but
<em>does</em> have access to the current <code>global</code> object.</p>
<p>The following example compiles code that increments a <code>global</code> variable then
executes that code multiple times:</p>
<pre><code class="language-mjs">import { Script } from 'node:vm';

global.globalVar = 0;

const script = new Script('globalVar += 1', { filename: 'myfile.vm' });

for (let i = 0; i &lt; 1000; ++i) {
  script.runInThisContext();
}

console.log(globalVar);

// 1000
</code></pre>
<pre><code class="language-cjs">const { Script } = require('node:vm');

global.globalVar = 0;

const script = new Script('globalVar += 1', { filename: 'myfile.vm' });

for (let i = 0; i &lt; 1000; ++i) {
  script.runInThisContext();
}

console.log(globalVar);

// 1000
</code></pre>
<h3><code>script.sourceMapURL</code></h3>
<ul>
<li>Type: {string|undefined}</li>
</ul>
<p>When the script is compiled from a source that contains a source map magic
comment, this property will be set to the URL of the source map.</p>
<pre><code class="language-mjs">import vm from 'node:vm';

const script = new vm.Script(`
function myFunc() {}
//# sourceMappingURL=sourcemap.json
`);

console.log(script.sourceMapURL);
// Prints: sourcemap.json
</code></pre>
<pre><code class="language-cjs">const vm = require('node:vm');

const script = new vm.Script(`
function myFunc() {}
//# sourceMappingURL=sourcemap.json
`);

console.log(script.sourceMapURL);
// Prints: sourcemap.json
</code></pre>
<h2>Class: <code>vm.Module</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>This feature is only available with the <code>--experimental-vm-modules</code> command
flag enabled.</p>
<p>The <code>vm.Module</code> class provides a low-level interface for using
ECMAScript modules in VM contexts. It is the counterpart of the <code>vm.Script</code>
class that closely mirrors <a href="https://tc39.es/ecma262/#sec-abstract-module-records">Module Record</a>s as defined in the ECMAScript
specification.</p>
<p>Unlike <code>vm.Script</code> however, every <code>vm.Module</code> object is bound to a context from
its creation.</p>
<p>Using a <code>vm.Module</code> object requires three distinct steps: creation/parsing,
linking, and evaluation. These three steps are illustrated in the following
example.</p>
<p>This implementation lies at a lower level than the <a href="esm.md#modules-ecmascript-modules">ECMAScript Module
loader</a>. There is also no way to interact with the Loader yet, though
support is planned.</p>
<pre><code class="language-mjs">import vm from 'node:vm';

const contextifiedObject = vm.createContext({
  secret: 42,
  print: console.log,
});

// Step 1
//
// Create a Module by constructing a new `vm.SourceTextModule` object. This
// parses the provided source text, throwing a `SyntaxError` if anything goes
// wrong. By default, a Module is created in the top context. But here, we
// specify `contextifiedObject` as the context this Module belongs to.
//
// Here, we attempt to obtain the default export from the module &quot;foo&quot;, and
// put it into local binding &quot;secret&quot;.

const rootModule = new vm.SourceTextModule(`
  import s from 'foo';
  s;
  print(s);
`, { context: contextifiedObject });

// Step 2
//
// &quot;Link&quot; the imported dependencies of this Module to it.
//
// Obtain the requested dependencies of a SourceTextModule by
// `sourceTextModule.moduleRequests` and resolve them.
//
// Even top-level Modules without dependencies must be explicitly linked. The
// array passed to `sourceTextModule.linkRequests(modules)` can be
// empty, however.
//
// Note: This is a contrived example in that the resolveAndLinkDependencies
// creates a new &quot;foo&quot; module every time it is called. In a full-fledged
// module system, a cache would probably be used to avoid duplicated modules.

const moduleMap = new Map([
  ['root', rootModule],
]);

function resolveAndLinkDependencies(module) {
  const requestedModules = module.moduleRequests.map((request) =&gt; {
    // In a full-fledged module system, the resolveAndLinkDependencies would
    // resolve the module with the module cache key `[specifier, attributes]`.
    // In this example, we just use the specifier as the key.
    const specifier = request.specifier;

    let requestedModule = moduleMap.get(specifier);
    if (requestedModule === undefined) {
      requestedModule = new vm.SourceTextModule(`
        // The &quot;secret&quot; variable refers to the global variable we added to
        // &quot;contextifiedObject&quot; when creating the context.
        export default secret;
      `, { context: module.context });
      moduleMap.set(specifier, requestedModule);
      // Resolve the dependencies of the new module as well.
      resolveAndLinkDependencies(requestedModule);
    }

    return requestedModule;
  });

  module.linkRequests(requestedModules);
}

resolveAndLinkDependencies(rootModule);
rootModule.instantiate();

// Step 3
//
// Evaluate the Module. The evaluate() method returns a promise which will
// resolve after the module has finished evaluating.

// Prints 42.
await rootModule.evaluate();
</code></pre>
<pre><code class="language-cjs">const vm = require('node:vm');

const contextifiedObject = vm.createContext({
  secret: 42,
  print: console.log,
});

(async () =&gt; {
  // Step 1
  //
  // Create a Module by constructing a new `vm.SourceTextModule` object. This
  // parses the provided source text, throwing a `SyntaxError` if anything goes
  // wrong. By default, a Module is created in the top context. But here, we
  // specify `contextifiedObject` as the context this Module belongs to.
  //
  // Here, we attempt to obtain the default export from the module &quot;foo&quot;, and
  // put it into local binding &quot;secret&quot;.

  const rootModule = new vm.SourceTextModule(`
    import s from 'foo';
    s;
    print(s);
  `, { context: contextifiedObject });

  // Step 2
  //
  // &quot;Link&quot; the imported dependencies of this Module to it.
  //
  // Obtain the requested dependencies of a SourceTextModule by
  // `sourceTextModule.moduleRequests` and resolve them.
  //
  // Even top-level Modules without dependencies must be explicitly linked. The
  // array passed to `sourceTextModule.linkRequests(modules)` can be
  // empty, however.
  //
  // Note: This is a contrived example in that the resolveAndLinkDependencies
  // creates a new &quot;foo&quot; module every time it is called. In a full-fledged
  // module system, a cache would probably be used to avoid duplicated modules.

  const moduleMap = new Map([
    ['root', rootModule],
  ]);

  function resolveAndLinkDependencies(module) {
    const requestedModules = module.moduleRequests.map((request) =&gt; {
      // In a full-fledged module system, the resolveAndLinkDependencies would
      // resolve the module with the module cache key `[specifier, attributes]`.
      // In this example, we just use the specifier as the key.
      const specifier = request.specifier;

      let requestedModule = moduleMap.get(specifier);
      if (requestedModule === undefined) {
        requestedModule = new vm.SourceTextModule(`
          // The &quot;secret&quot; variable refers to the global variable we added to
          // &quot;contextifiedObject&quot; when creating the context.
          export default secret;
        `, { context: module.context });
        moduleMap.set(specifier, requestedModule);
        // Resolve the dependencies of the new module as well.
        resolveAndLinkDependencies(requestedModule);
      }

      return requestedModule;
    });

    module.linkRequests(requestedModules);
  }

  resolveAndLinkDependencies(rootModule);
  rootModule.instantiate();

  // Step 3
  //
  // Evaluate the Module. The evaluate() method returns a promise which will
  // resolve after the module has finished evaluating.

  // Prints 42.
  await rootModule.evaluate();
})();
</code></pre>
<h3><code>module.error</code></h3>
<ul>
<li>Type: {any}</li>
</ul>
<p>If the <code>module.status</code> is <code>'errored'</code>, this property contains the exception
thrown by the module during evaluation. If the status is anything else,
accessing this property will result in a thrown exception.</p>
<p>The value <code>undefined</code> cannot be used for cases where there is not a thrown
exception due to possible ambiguity with <code>throw undefined;</code>.</p>
<p>Corresponds to the <code>[[EvaluationError]]</code> field of <a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module Record</a>s
in the ECMAScript specification.</p>
<h3><code>module.evaluate([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to evaluate
before terminating execution. If execution is interrupted, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with <code>undefined</code> upon success.</li>
</ul>
<p>Evaluate the module and its dependencies. Corresponds to the <a href="https://tc39.es/ecma262/#sec-moduleevaluation">Evaluate() concrete method</a> field of
<a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module Record</a>s in the ECMAScript specification.</p>
<p>If the module is a <code>vm.SourceTextModule</code>, <code>evaluate()</code> must be called after the module has been instantiated;
otherwise <code>evaluate()</code> will return a rejected promise.</p>
<p>For a <code>vm.SourceTextModule</code>, the promise returned by <code>evaluate()</code> may be fulfilled either
synchronously or asynchronously:</p>
<ol>
<li>If the <code>vm.SourceTextModule</code> has no top-level <code>await</code> in itself or any of its dependencies, the promise will be
fulfilled <em>synchronously</em> after the module and all its dependencies have been evaluated.
<ol>
<li>If the evaluation succeeds, the promise will be <em>synchronously</em> resolved to <code>undefined</code>.</li>
<li>If the evaluation results in an exception, the promise will be <em>synchronously</em> rejected with the exception
that causes the evaluation to fail, which is the same as <code>module.error</code>.</li>
</ol>
</li>
<li>If the <code>vm.SourceTextModule</code> has top-level <code>await</code> in itself or any of its dependencies, the promise will be
fulfilled <em>asynchronously</em> after the module and all its dependencies have been evaluated.
<ol>
<li>If the evaluation succeeds, the promise will be <em>asynchronously</em> resolved to <code>undefined</code>.</li>
<li>If the evaluation results in an exception, the promise will be <em>asynchronously</em> rejected with the exception
that causes the evaluation to fail.</li>
</ol>
</li>
</ol>
<p>If the module is a <code>vm.SyntheticModule</code>, <code>evaluate()</code> always returns a promise that fulfills synchronously, see
the specification of <a href="https://tc39.es/ecma262/#sec-smr-Evaluate">Evaluate() of a Synthetic Module Record</a>:</p>
<ol>
<li>If the <code>evaluateCallback</code> passed to its constructor throws an exception synchronously, <code>evaluate()</code> returns
a promise that will be synchronously rejected with that exception.</li>
<li>If the <code>evaluateCallback</code> does not throw an exception, <code>evaluate()</code> returns a promise that will be
synchronously resolved to <code>undefined</code>.</li>
</ol>
<p>The <code>evaluateCallback</code> of a <code>vm.SyntheticModule</code> is executed synchronously within the <code>evaluate()</code> call, and its
return value is discarded. This means if <code>evaluateCallback</code> is an asynchronous function, the promise returned by
<code>evaluate()</code> will not reflect its asynchronous behavior, and any rejections from an asynchronous
<code>evaluateCallback</code> will be lost.</p>
<p><code>evaluate()</code> could also be called again after the module has already been evaluated, in which case:</p>
<ol>
<li>If the initial evaluation ended in success (<code>module.status</code> is <code>'evaluated'</code>), it will do nothing
and return a promise that resolves to <code>undefined</code>.</li>
<li>If the initial evaluation resulted in an exception (<code>module.status</code> is <code>'errored'</code>), it will re-reject
the exception that the initial evaluation resulted in.</li>
</ol>
<p>This method cannot be called while the module is being evaluated (<code>module.status</code> is <code>'evaluating'</code>).</p>
<h3><code>module.identifier</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The identifier of the current module, as set in the constructor.</p>
<h3><code>module.link(linker)</code></h3>
<ul>
<li><code>linker</code> {Function}
<ul>
<li>
<p><code>specifier</code> {string} The specifier of the requested module:</p>
<pre><code class="language-mjs">import foo from 'foo';
//              ^^^^^ the module specifier
</code></pre>
</li>
<li>
<p><code>referencingModule</code> {vm.Module} The <code>Module</code> object <code>link()</code> is called on.</p>
</li>
<li>
<p><code>extra</code> {Object}</p>
<ul>
<li><code>attributes</code> {Object} The data from the attribute:<pre><code class="language-mjs">import foo from 'foo' with { name: 'value' };
//                         ^^^^^^^^^^^^^^^^^ the attribute
</code></pre>
Per ECMA-262, hosts are expected to trigger an error if an
unsupported attribute is present.</li>
<li><code>assert</code> {Object} Alias for <code>extra.attributes</code>.</li>
</ul>
</li>
<li>
<p>Returns: {vm.Module|Promise}</p>
</li>
</ul>
</li>
<li>Returns: {Promise}</li>
</ul>
<p>Link module dependencies. This method must be called before evaluation, and
can only be called once per module.</p>
<p>Use <a href="#sourcetextmodulelinkrequestsmodules"><code>sourceTextModule.linkRequests(modules)</code></a> and
<a href="#sourcetextmoduleinstantiate"><code>sourceTextModule.instantiate()</code></a> to link modules either synchronously or
asynchronously.</p>
<p>The function is expected to return a <code>Module</code> object or a <code>Promise</code> that
eventually resolves to a <code>Module</code> object. The returned <code>Module</code> must satisfy the
following two invariants:</p>
<ul>
<li>It must belong to the same context as the parent <code>Module</code>.</li>
<li>Its <code>status</code> must not be <code>'errored'</code>.</li>
</ul>
<p>If the returned <code>Module</code>'s <code>status</code> is <code>'unlinked'</code>, this method will be
recursively called on the returned <code>Module</code> with the same provided <code>linker</code>
function.</p>
<p><code>link()</code> returns a <code>Promise</code> that will either get resolved when all linking
instances resolve to a valid <code>Module</code>, or rejected if the linker function either
throws an exception or returns an invalid <code>Module</code>.</p>
<p>The linker function roughly corresponds to the implementation-defined
<a href="https://tc39.es/ecma262/#sec-hostresolveimportedmodule">HostResolveImportedModule</a> abstract operation in the ECMAScript
specification, with a few key differences:</p>
<ul>
<li>The linker function is allowed to be asynchronous while
<a href="https://tc39.es/ecma262/#sec-hostresolveimportedmodule">HostResolveImportedModule</a> is synchronous.</li>
</ul>
<p>The actual <a href="https://tc39.es/ecma262/#sec-hostresolveimportedmodule">HostResolveImportedModule</a> implementation used during module
linking is one that returns the modules linked during linking. Since at
that point all modules would have been fully linked already, the
<a href="https://tc39.es/ecma262/#sec-hostresolveimportedmodule">HostResolveImportedModule</a> implementation is fully synchronous per
specification.</p>
<p>Corresponds to the <a href="https://tc39.es/ecma262/#sec-moduledeclarationlinking">Link() concrete method</a> field of <a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module
Record</a>s in the ECMAScript specification.</p>
<h3><code>module.namespace</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>The namespace object of the module. This is only available after linking
(<code>module.link()</code>) has completed.</p>
<p>Corresponds to the <a href="https://tc39.es/ecma262/#sec-getmodulenamespace">GetModuleNamespace</a> abstract operation in the ECMAScript
specification.</p>
<h3><code>module.status</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The current status of the module. Will be one of:</p>
<ul>
<li>
<p><code>'unlinked'</code>: <code>module.link()</code> has not yet been called.</p>
</li>
<li>
<p><code>'linking'</code>: <code>module.link()</code> has been called, but not all Promises returned
by the linker function have been resolved yet.</p>
</li>
<li>
<p><code>'linked'</code>: The module has been linked successfully, and all of its
dependencies are linked, but <code>module.evaluate()</code> has not yet been called.</p>
</li>
<li>
<p><code>'evaluating'</code>: The module is being evaluated through a <code>module.evaluate()</code> on
itself or a parent module.</p>
</li>
<li>
<p><code>'evaluated'</code>: The module has been successfully evaluated.</p>
</li>
<li>
<p><code>'errored'</code>: The module has been evaluated, but an exception was thrown.</p>
</li>
</ul>
<p>Other than <code>'errored'</code>, this status string corresponds to the specification's
<a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module Record</a>'s <code>[[Status]]</code> field. <code>'errored'</code> corresponds to
<code>'evaluated'</code> in the specification, but with <code>[[EvaluationError]]</code> set to a
value that is not <code>undefined</code>.</p>
<h2>Class: <code>vm.SourceTextModule</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>This feature is only available with the <code>--experimental-vm-modules</code> command
flag enabled.</p>
<ul>
<li>Extends: {vm.Module}</li>
</ul>
<p>The <code>vm.SourceTextModule</code> class provides the <a href="https://tc39.es/ecma262/#sec-source-text-module-records">Source Text Module Record</a> as
defined in the ECMAScript specification.</p>
<h3><code>new vm.SourceTextModule(code[, options])</code></h3>
<ul>
<li><code>code</code> {string} JavaScript Module code to parse</li>
<li><code>options</code>
<ul>
<li><code>identifier</code> {string} String used in stack traces.
<strong>Default:</strong> <code>'vm:module(i)'</code> where <code>i</code> is a context-specific ascending
index.</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source. The <code>code</code> must be the same as the module from which this
<code>cachedData</code> was created.</li>
<li><code>context</code> {Object} The <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object as returned by the
<code>vm.createContext()</code> method, to compile and evaluate this <code>Module</code> in.
If no context is specified, the module is evaluated in the current
execution context.</li>
<li><code>lineOffset</code> {integer} Specifies the line number offset that is displayed
in stack traces produced by this <code>Module</code>. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {integer} Specifies the first-line column number offset that
is displayed in stack traces produced by this <code>Module</code>. <strong>Default:</strong> <code>0</code>.</li>
<li><code>initializeImportMeta</code> {Function} Called during evaluation of this <code>Module</code>
to initialize the <code>import.meta</code>.
<ul>
<li><code>meta</code> {import.meta}</li>
<li><code>module</code> {vm.SourceTextModule}</li>
</ul>
</li>
<li><code>importModuleDynamically</code> {Function} Used to specify the
how the modules should be loaded during the evaluation of this module
when <code>import()</code> is called. This option is part of the experimental
modules API. We do not recommend using it in a production environment.
For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>SourceTextModule</code> instance.</p>
<p>Properties assigned to the <code>import.meta</code> object that are objects may
allow the module to access information outside the specified <code>context</code>. Use
<code>vm.runInContext()</code> to create objects in a specific context.</p>
<pre><code class="language-mjs">import vm from 'node:vm';

const contextifiedObject = vm.createContext({ secret: 42 });

const module = new vm.SourceTextModule(
  'Object.getPrototypeOf(import.meta.prop).secret = secret;',
  {
    context: contextifiedObject,
    initializeImportMeta(meta) {
      // Note: this object is created in the top context. As such,
      // Object.getPrototypeOf(import.meta.prop) points to the
      // Object.prototype in the top context rather than that in
      // the contextified object.
      meta.prop = {};
    },
  });
// The module has an empty `moduleRequests` array.
module.linkRequests([]);
module.instantiate();
await module.evaluate();

// Now, Object.prototype.secret will be equal to 42.
//
// To fix this problem, replace
//     meta.prop = {};
// above with
//     meta.prop = vm.runInContext('({})', contextifiedObject);
</code></pre>
<pre><code class="language-cjs">const vm = require('node:vm');
const contextifiedObject = vm.createContext({ secret: 42 });
(async () =&gt; {
  const module = new vm.SourceTextModule(
    'Object.getPrototypeOf(import.meta.prop).secret = secret;',
    {
      context: contextifiedObject,
      initializeImportMeta(meta) {
        // Note: this object is created in the top context. As such,
        // Object.getPrototypeOf(import.meta.prop) points to the
        // Object.prototype in the top context rather than that in
        // the contextified object.
        meta.prop = {};
      },
    });
  // The module has an empty `moduleRequests` array.
  module.linkRequests([]);
  module.instantiate();
  await module.evaluate();
  // Now, Object.prototype.secret will be equal to 42.
  //
  // To fix this problem, replace
  //     meta.prop = {};
  // above with
  //     meta.prop = vm.runInContext('({})', contextifiedObject);
})();
</code></pre>
<h3><code>sourceTextModule.createCachedData()</code></h3>
<ul>
<li>Returns: {Buffer}</li>
</ul>
<p>Creates a code cache that can be used with the <code>SourceTextModule</code> constructor's
<code>cachedData</code> option. Returns a <code>Buffer</code>. This method may be called any number
of times before the module has been evaluated.</p>
<p>The code cache of the <code>SourceTextModule</code> doesn't contain any JavaScript
observable states. The code cache is safe to be saved along side the script
source and used to construct new <code>SourceTextModule</code> instances multiple times.</p>
<p>Functions in the <code>SourceTextModule</code> source can be marked as lazily compiled
and they are not compiled at construction of the <code>SourceTextModule</code>. These
functions are going to be compiled when they are invoked the first time. The
code cache serializes the metadata that V8 currently knows about the
<code>SourceTextModule</code> that it can use to speed up future compilations.</p>
<pre><code class="language-js">// Create an initial module
const module = new vm.SourceTextModule('const a = 1;');

// Create cached data from this module
const cachedData = module.createCachedData();

// Create a new module using the cached data. The code must be the same.
const module2 = new vm.SourceTextModule('const a = 1;', { cachedData });
</code></pre>
<h3><code>sourceTextModule.dependencySpecifiers</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use <a href="#sourcetextmodulemodulerequests"><code>sourceTextModule.moduleRequests</code></a> instead.</p>
</blockquote>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>The specifiers of all dependencies of this module. The returned array is frozen
to disallow any changes to it.</p>
<p>Corresponds to the <code>[[RequestedModules]]</code> field of <a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module Record</a>s in
the ECMAScript specification.</p>
<h3><code>sourceTextModule.hasAsyncGraph()</code></h3>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>Iterates over the dependency graph and returns <code>true</code> if any module in its
dependencies or this module itself contains top-level <code>await</code> expressions,
otherwise returns <code>false</code>.</p>
<p>The search may be slow if the graph is big enough.</p>
<p>This requires the module to be instantiated first. If the module is not
instantiated yet, an error will be thrown.</p>
<h3><code>sourceTextModule.hasTopLevelAwait()</code></h3>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>Returns whether the module itself contains any top-level <code>await</code> expressions.</p>
<p>This corresponds to the field <code>[[HasTLA]]</code> in <a href="https://tc39.es/ecma262/#sec-cyclic-module-records">Cyclic Module Record</a> in the
ECMAScript specification.</p>
<h3><code>sourceTextModule.instantiate()</code></h3>
<ul>
<li>Returns: {undefined}</li>
</ul>
<p>Instantiate the module with the linked requested modules.</p>
<p>This resolves the imported bindings of the module, including re-exported
binding names. When there are any bindings that cannot be resolved,
an error would be thrown synchronously.</p>
<p>If the requested modules include cyclic dependencies, the
<a href="#sourcetextmodulelinkrequestsmodules"><code>sourceTextModule.linkRequests(modules)</code></a> method must be called on all
modules in the cycle before calling this method.</p>
<h3><code>sourceTextModule.linkRequests(modules)</code></h3>
<ul>
<li><code>modules</code> {vm.Module[]} Array of <code>vm.Module</code> objects that this module depends on.
The order of the modules in the array is the order of
<a href="#sourcetextmodulemodulerequests"><code>sourceTextModule.moduleRequests</code></a>.</li>
<li>Returns: {undefined}</li>
</ul>
<p>Link module dependencies. This method must be called before evaluation, and
can only be called once per module.</p>
<p>The order of the module instances in the <code>modules</code> array should correspond to the order of
<a href="#sourcetextmodulemodulerequests"><code>sourceTextModule.moduleRequests</code></a> being resolved. If two module requests have the same
specifier and import attributes, they must be resolved with the same module instance or an
<code>ERR_MODULE_LINK_MISMATCH</code> would be thrown. For example, when linking requests for this
module:</p>
<pre><code class="language-mjs">import foo from 'foo';
import source Foo from 'foo';
</code></pre>
<p>The <code>modules</code> array must contain two references to the same instance, because the two
module requests are identical but in two phases.</p>
<p>If the module has no dependencies, the <code>modules</code> array can be empty.</p>
<p>Users can use <code>sourceTextModule.moduleRequests</code> to implement the host-defined
<a href="https://tc39.es/ecma262/#sec-HostLoadImportedModule">HostLoadImportedModule</a> abstract operation in the ECMAScript specification,
and using <code>sourceTextModule.linkRequests()</code> to invoke specification defined
<a href="https://tc39.es/ecma262/#sec-FinishLoadingImportedModule">FinishLoadingImportedModule</a>, on the module with all dependencies in a batch.</p>
<p>It's up to the creator of the <code>SourceTextModule</code> to determine if the resolution
of the dependencies is synchronous or asynchronous.</p>
<p>After each module in the <code>modules</code> array is linked, call
<a href="#sourcetextmoduleinstantiate"><code>sourceTextModule.instantiate()</code></a>.</p>
<h3><code>sourceTextModule.moduleRequests</code></h3>
<ul>
<li>Type: {ModuleRequest[]} Dependencies of this module.</li>
</ul>
<p>The requested import dependencies of this module. The returned array is frozen
to disallow any changes to it.</p>
<p>For example, given a source text:</p>
<pre><code class="language-mjs">import foo from 'foo';
import fooAlias from 'foo';
import bar from './bar.js';
import withAttrs from '../with-attrs.ts' with { arbitraryAttr: 'attr-val' };
import source Module from 'wasm-mod.wasm';
</code></pre>
<p>The value of the <code>sourceTextModule.moduleRequests</code> will be:</p>
<pre><code class="language-js">[
  {
    specifier: 'foo',
    attributes: {},
    phase: 'evaluation',
  },
  {
    specifier: 'foo',
    attributes: {},
    phase: 'evaluation',
  },
  {
    specifier: './bar.js',
    attributes: {},
    phase: 'evaluation',
  },
  {
    specifier: '../with-attrs.ts',
    attributes: { arbitraryAttr: 'attr-val' },
    phase: 'evaluation',
  },
  {
    specifier: 'wasm-mod.wasm',
    attributes: {},
    phase: 'source',
  },
];
</code></pre>
<h2>Class: <code>vm.SyntheticModule</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>This feature is only available with the <code>--experimental-vm-modules</code> command
flag enabled.</p>
<ul>
<li>Extends: {vm.Module}</li>
</ul>
<p>The <code>vm.SyntheticModule</code> class provides the <a href="https://tc39.es/ecma262/#sec-synthetic-module-records">Synthetic Module Record</a> as
defined in the WebIDL specification. The purpose of synthetic modules is to
provide a generic interface for exposing non-JavaScript sources to ECMAScript
module graphs.</p>
<pre><code class="language-mjs">import { SyntheticModule } from 'node:vm';

const source = '{ &quot;a&quot;: 1 }';
const syntheticModule = new SyntheticModule(['default'], function() {
  const obj = JSON.parse(source);
  this.setExport('default', obj);
});

// Use `syntheticModule` in linking
(async () =&gt; {
  await syntheticModule.link(() =&gt; {});
  await syntheticModule.evaluate();

  console.log('Default export:', syntheticModule.namespace.default);
})();
</code></pre>
<pre><code class="language-cjs">const { SyntheticModule } = require('node:vm');

const source = '{ &quot;a&quot;: 1 }';
const syntheticModule = new SyntheticModule(['default'], function() {
  const obj = JSON.parse(source);
  this.setExport('default', obj);
});

// Use `syntheticModule` in linking
(async () =&gt; {
  await syntheticModule.link(() =&gt; {});
  await syntheticModule.evaluate();

  console.log('Default export:', syntheticModule.namespace.default);
})();
</code></pre>
<h3><code>new vm.SyntheticModule(exportNames, evaluateCallback[, options])</code></h3>
<ul>
<li><code>exportNames</code> {string[]} Array of names that will be exported from the
module.</li>
<li><code>evaluateCallback</code> {Function} Called when the module is evaluated.</li>
<li><code>options</code>
<ul>
<li><code>identifier</code> {string} String used in stack traces.
<strong>Default:</strong> <code>'vm:module(i)'</code> where <code>i</code> is a context-specific ascending
index.</li>
<li><code>context</code> {Object} The <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object as returned by the
<code>vm.createContext()</code> method, to compile and evaluate this <code>Module</code> in.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>SyntheticModule</code> instance.</p>
<p>Objects assigned to the exports of this instance may allow importers of
the module to access information outside the specified <code>context</code>. Use
<code>vm.runInContext()</code> to create objects in a specific context.</p>
<h3><code>syntheticModule.setExport(name, value)</code></h3>
<ul>
<li><code>name</code> {string} Name of the export to set.</li>
<li><code>value</code> {any} The value to set the export to.</li>
</ul>
<p>This method sets the module export binding slots with the given value.</p>
<pre><code class="language-mjs">import vm from 'node:vm';

const m = new vm.SyntheticModule(['x'], () =&gt; {
  m.setExport('x', 1);
});

await m.evaluate();

assert.strictEqual(m.namespace.x, 1);
</code></pre>
<pre><code class="language-cjs">const vm = require('node:vm');
(async () =&gt; {
  const m = new vm.SyntheticModule(['x'], () =&gt; {
    m.setExport('x', 1);
  });
  await m.evaluate();
  assert.strictEqual(m.namespace.x, 1);
})();
</code></pre>
<h2>Type: <code>ModuleRequest</code></h2>
<ul>
<li>Type: {Object}
<ul>
<li><code>specifier</code> {string} The specifier of the requested module.</li>
<li><code>attributes</code> {Object} The <code>&quot;with&quot;</code> value passed to the
<a href="https://tc39.es/ecma262/#prod-WithClause">WithClause</a> in a <a href="https://tc39.es/ecma262/#prod-ImportDeclaration">ImportDeclaration</a>, or an empty object if no value was
provided.</li>
<li><code>phase</code> {string} The phase of the requested module (<code>&quot;source&quot;</code> or <code>&quot;evaluation&quot;</code>).</li>
</ul>
</li>
</ul>
<p>A <code>ModuleRequest</code> represents the request to import a module with given import attributes and phase.</p>
<h2><code>vm.compileFunction(code[, params[, options]])</code></h2>
<ul>
<li><code>code</code> {string} The body of the function to compile.</li>
<li><code>params</code> {string[]} An array of strings containing all parameters for the
function.</li>
<li><code>options</code> {Object}
<ul>
<li><code>filename</code> {string} Specifies the filename used in stack traces produced
by this script. <strong>Default:</strong> <code>''</code>.</li>
<li><code>lineOffset</code> {number} Specifies the line number offset that is displayed
in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {number} Specifies the first-line column number offset that
is displayed in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source. This must be produced by a prior call to <a href="#vmcompilefunctioncode-params-options"><code>vm.compileFunction()</code></a>
with the same <code>code</code> and <code>params</code>.</li>
<li><code>produceCachedData</code> {boolean} Specifies whether to produce new cache data.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>parsingContext</code> {Object} The <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object in which the said
function should be compiled in.</li>
<li><code>contextExtensions</code> {Object[]} An array containing a collection of context
extensions (objects wrapping the current scope) to be applied while
compiling. <strong>Default:</strong> <code>[]</code>.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify the how the modules should be loaded during the evaluation of
this function when <code>import()</code> is called. This option is part of the
experimental modules API. We do not recommend using it in a production
environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
<li>Returns: {Function}</li>
</ul>
<p>Compiles the given code into the provided context (if no context is
supplied, the current context is used), and returns it wrapped inside a
function with the given <code>params</code>.</p>
<h2><code>vm.constants</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Returns an object containing commonly used constants for VM operations.</p>
<h3><code>vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>A constant that can be used as the <code>importModuleDynamically</code> option to
<code>vm.Script</code> and <code>vm.compileFunction()</code> so that Node.js uses the default
ESM loader from the main context to load the requested module.</p>
<p>For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</p>
<h2><code>vm.createContext([contextObject[, options]])</code></h2>
<ul>
<li><code>contextObject</code> {Object|vm.constants.DONT_CONTEXTIFY|undefined}
Either <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a> or an object that will be <a href="#what-does-it-mean-to-contextify-an-object">contextified</a>.
If <code>undefined</code>, an empty contextified object will be created for backwards compatibility.</li>
<li><code>options</code> {Object}
<ul>
<li><code>name</code> {string} Human-readable name of the newly created context.
<strong>Default:</strong> <code>'VM Context i'</code>, where <code>i</code> is an ascending numerical index of
the created context.</li>
<li><code>origin</code> {string} <a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin">Origin</a> corresponding to the newly created
context for display purposes. The origin should be formatted like a URL,
but with only the scheme, host, and port (if necessary), like the value of
the <a href="url.md#urlorigin"><code>url.origin</code></a> property of a <a href="url.md#class-url"><code>URL</code></a> object. Most notably, this
string should omit the trailing slash, as that denotes a path.
<strong>Default:</strong> <code>''</code>.</li>
<li><code>codeGeneration</code> {Object}
<ul>
<li><code>strings</code> {boolean} If set to false any calls to <code>eval</code> or function
constructors (<code>Function</code>, <code>GeneratorFunction</code>, etc) will throw an
<code>EvalError</code>. <strong>Default:</strong> <code>true</code>.</li>
<li><code>wasm</code> {boolean} If set to false any attempt to compile a WebAssembly
module will throw a <code>WebAssembly.CompileError</code>. <strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li><code>microtaskMode</code> {string} If set to <code>afterEvaluate</code>, microtasks (tasks
scheduled through <code>Promise</code>s and <code>async function</code>s) will be run immediately
after a script has run through <a href="#scriptrunincontextcontextifiedobject-options"><code>script.runInContext()</code></a>.
They are included in the <code>timeout</code> and <code>breakOnSigint</code> scopes in that case.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify the how the modules should be loaded when <code>import()</code> is
called in this context without a referrer script or module. This option is
part of the experimental modules API. We do not recommend using it in a
production environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
<li>Returns: {Object} contextified object.</li>
</ul>
<p>If the given <code>contextObject</code> is an object, the <code>vm.createContext()</code> method will <a href="#what-does-it-mean-to-contextify-an-object">prepare that
object</a> and return a reference to it so that it can be used in
calls to <a href="#vmrunincontextcode-contextifiedobject-options"><code>vm.runInContext()</code></a> or <a href="#scriptrunincontextcontextifiedobject-options"><code>script.runInContext()</code></a>. Inside such
scripts, the global object will be wrapped by the <code>contextObject</code>, retaining all of its
existing properties but also having the built-in objects and functions any
standard <a href="https://tc39.es/ecma262/#sec-global-object">global object</a> has. Outside of scripts run by the vm module, global
variables will remain unchanged.</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';

global.globalVar = 3;

const context = { globalVar: 1 };
createContext(context);

runInContext('globalVar *= 2;', context);

console.log(context);
// Prints: { globalVar: 2 }

console.log(global.globalVar);
// Prints: 3
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');

global.globalVar = 3;

const context = { globalVar: 1 };
createContext(context);

runInContext('globalVar *= 2;', context);

console.log(context);
// Prints: { globalVar: 2 }

console.log(global.globalVar);
// Prints: 3
</code></pre>
<p>If <code>contextObject</code> is omitted (or passed explicitly as <code>undefined</code>), a new,
empty <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object will be returned.</p>
<p>When the global object in the newly created context is <a href="#what-does-it-mean-to-contextify-an-object">contextified</a>, it has some quirks
compared to ordinary global objects. For example, it cannot be frozen. To create a context
without the contextifying quirks, pass <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a> as the <code>contextObject</code>
argument. See the documentation of <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a> for details.</p>
<p>The <code>vm.createContext()</code> method is primarily useful for creating a single
context that can be used to run multiple scripts. For instance, if emulating a
web browser, the method can be used to create a single context representing a
window's global object, then run all <code>&lt;script&gt;</code> tags together within that
context.</p>
<p>The provided <code>name</code> and <code>origin</code> of the context are made visible through the
Inspector API.</p>
<h2><code>vm.isContext(object)</code></h2>
<ul>
<li><code>object</code> {Object}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> if the given <code>object</code> object has been <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> using
<a href="#vmcreatecontextcontextobject-options"><code>vm.createContext()</code></a>, or if it's the global object of a context created
using <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a>.</p>
<h2><code>vm.measureMemory([options])</code></h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>Measure the memory known to V8 and used by all contexts known to the
current V8 isolate, or the main context.</p>
<ul>
<li><code>options</code> {Object} Optional.
<ul>
<li><code>mode</code> {string} Either <code>'summary'</code> or <code>'detailed'</code>. In summary mode,
only the memory measured for the main context will be returned. In
detailed mode, the memory measured for all contexts known to the
current V8 isolate will be returned.
<strong>Default:</strong> <code>'summary'</code></li>
<li><code>execution</code> {string} Either <code>'default'</code> or <code>'eager'</code>. With default
execution, the promise will not resolve until after the next scheduled
garbage collection starts, which may take a while (or never if the program
exits before the next GC). With eager execution, the GC will be started
right away to measure the memory.
<strong>Default:</strong> <code>'default'</code></li>
</ul>
</li>
<li>Returns: {Promise} If the memory is successfully measured, the promise will
resolve with an object containing information about the memory usage.
Otherwise it will be rejected with an <code>ERR_CONTEXT_NOT_INITIALIZED</code> error.</li>
</ul>
<p>The format of the object that the returned Promise may resolve with is
specific to the V8 engine and may change from one version of V8 to the next.</p>
<p>The returned result is different from the statistics returned by
<code>v8.getHeapSpaceStatistics()</code> in that <code>vm.measureMemory()</code> measure the
memory reachable by each V8 specific contexts in the current instance of
the V8 engine, while the result of <code>v8.getHeapSpaceStatistics()</code> measure
the memory occupied by each heap space in the current V8 instance.</p>
<pre><code class="language-mjs">import { createContext, measureMemory } from 'node:vm';
// Measure the memory used by the main context.
measureMemory({ mode: 'summary' })
  // This is the same as vm.measureMemory()
  .then((result) =&gt; {
    // The current format is:
    // {
    //   total: { jsMemoryEstimate: 1601828, jsMemoryRange: [1601828, 5275288] },
    //   WebAssembly: { code: 0, metadata: 33962 },
    // }
    console.log(result);
  });

const context = createContext({ a: 1 });
measureMemory({ mode: 'detailed', execution: 'eager' }).then((result) =&gt; {
  // Reference the context here so that it won't be GC'ed
  // until the measurement is complete.
  console.log('Context:', context.a);
  // {
  //   total: { jsMemoryEstimate: 1767100, jsMemoryRange: [1767100, 5440560] },
  //   WebAssembly: { code: 0, metadata: 33962 },
  //   current: { jsMemoryEstimate: 1601828, jsMemoryRange: [1601828, 5275288] },
  //   other: [{ jsMemoryEstimate: 165272, jsMemoryRange: [Array] }],
  // }
  console.log(result);
});
</code></pre>
<pre><code class="language-cjs">const { createContext, measureMemory } = require('node:vm');
// Measure the memory used by the main context.
measureMemory({ mode: 'summary' })
  // This is the same as vm.measureMemory()
  .then((result) =&gt; {
    // The current format is:
    // {
    //   total: { jsMemoryEstimate: 1601828, jsMemoryRange: [1601828, 5275288] },
    //   WebAssembly: { code: 0, metadata: 33962 },
    // }
    console.log(result);
  });

const context = createContext({ a: 1 });
measureMemory({ mode: 'detailed', execution: 'eager' }).then((result) =&gt; {
  // Reference the context here so that it won't be GC'ed
  // until the measurement is complete.
  console.log('Context:', context.a);
  // {
  //   total: { jsMemoryEstimate: 1767100, jsMemoryRange: [1767100, 5440560] },
  //   WebAssembly: { code: 0, metadata: 33962 },
  //   current: { jsMemoryEstimate: 1601828, jsMemoryRange: [1601828, 5275288] },
  //   other: [{ jsMemoryEstimate: 165272, jsMemoryRange: [Array] }],
  // }
  console.log(result);
});
</code></pre>
<h2><code>vm.runInContext(code, contextifiedObject[, options])</code></h2>
<ul>
<li><code>code</code> {string} The JavaScript code to compile and run.</li>
<li><code>contextifiedObject</code> {Object} The <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object that will be used
as the <code>global</code> when the <code>code</code> is compiled and run.</li>
<li><code>options</code> {Object|string}
<ul>
<li><code>filename</code> {string} Specifies the filename used in stack traces produced
by this script. <strong>Default:</strong> <code>'evalmachine.&lt;anonymous&gt;'</code>.</li>
<li><code>lineOffset</code> {number} Specifies the line number offset that is displayed
in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {number} Specifies the first-line column number offset that
is displayed in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify the how the modules should be loaded during the evaluation
of this script when <code>import()</code> is called. This option is part of the
experimental modules API. We do not recommend using it in a production
environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
</ul>
<p>The <code>vm.runInContext()</code> method compiles <code>code</code>, runs it within the context of
the <code>contextifiedObject</code>, then returns the result. Running code does not have
access to the local scope. The <code>contextifiedObject</code> object <em>must</em> have been
previously <a href="#what-does-it-mean-to-contextify-an-object">contextified</a> using the <a href="#vmcreatecontextcontextobject-options"><code>vm.createContext()</code></a> method.</p>
<p>If <code>options</code> is a string, then it specifies the filename.</p>
<p>The following example compiles and executes different scripts using a single
<a href="#what-does-it-mean-to-contextify-an-object">contextified</a> object:</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';

const contextObject = { globalVar: 1 };
createContext(contextObject);

for (let i = 0; i &lt; 10; ++i) {
  runInContext('globalVar *= 2;', contextObject);
}
console.log(contextObject);
// Prints: { globalVar: 1024 }
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');

const contextObject = { globalVar: 1 };
createContext(contextObject);

for (let i = 0; i &lt; 10; ++i) {
  runInContext('globalVar *= 2;', contextObject);
}
console.log(contextObject);
// Prints: { globalVar: 1024 }
</code></pre>
<h2><code>vm.runInNewContext(code[, contextObject[, options]])</code></h2>
<ul>
<li><code>code</code> {string} The JavaScript code to compile and run.</li>
<li><code>contextObject</code> {Object|vm.constants.DONT_CONTEXTIFY|undefined}
Either <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a> or an object that will be <a href="#what-does-it-mean-to-contextify-an-object">contextified</a>.
If <code>undefined</code>, an empty contextified object will be created for backwards compatibility.</li>
<li><code>options</code> {Object|string}
<ul>
<li><code>filename</code> {string} Specifies the filename used in stack traces produced
by this script. <strong>Default:</strong> <code>'evalmachine.&lt;anonymous&gt;'</code>.</li>
<li><code>lineOffset</code> {number} Specifies the line number offset that is displayed
in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {number} Specifies the first-line column number offset that
is displayed in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
<li><code>contextName</code> {string} Human-readable name of the newly created context.
<strong>Default:</strong> <code>'VM Context i'</code>, where <code>i</code> is an ascending numerical index of
the created context.</li>
<li><code>contextOrigin</code> {string} <a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin">Origin</a> corresponding to the newly
created context for display purposes. The origin should be formatted like a
URL, but with only the scheme, host, and port (if necessary), like the
value of the <a href="url.md#urlorigin"><code>url.origin</code></a> property of a <a href="url.md#class-url"><code>URL</code></a> object. Most notably,
this string should omit the trailing slash, as that denotes a path.
<strong>Default:</strong> <code>''</code>.</li>
<li><code>contextCodeGeneration</code> {Object}
<ul>
<li><code>strings</code> {boolean} If set to false any calls to <code>eval</code> or function
constructors (<code>Function</code>, <code>GeneratorFunction</code>, etc) will throw an
<code>EvalError</code>. <strong>Default:</strong> <code>true</code>.</li>
<li><code>wasm</code> {boolean} If set to false any attempt to compile a WebAssembly
module will throw a <code>WebAssembly.CompileError</code>. <strong>Default:</strong> <code>true</code>.</li>
</ul>
</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify the how the modules should be loaded during the evaluation
of this script when <code>import()</code> is called. This option is part of the
experimental modules API. We do not recommend using it in a production
environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
<li><code>microtaskMode</code> {string} If set to <code>afterEvaluate</code>, microtasks (tasks
scheduled through <code>Promise</code>s and <code>async function</code>s) will be run immediately
after the script has run. They are included in the <code>timeout</code> and
<code>breakOnSigint</code> scopes in that case.</li>
</ul>
</li>
<li>Returns: {any} the result of the very last statement executed in the script.</li>
</ul>
<p>This method is a shortcut to
<code>(new vm.Script(code, options)).runInContext(vm.createContext(options), options)</code>.
If <code>options</code> is a string, then it specifies the filename.</p>
<p>It does several things at once:</p>
<ol>
<li>Creates a new context.</li>
<li>If <code>contextObject</code> is an object, <a href="#what-does-it-mean-to-contextify-an-object">contextifies</a> it with the new context.
If <code>contextObject</code> is undefined, creates a new object and <a href="#what-does-it-mean-to-contextify-an-object">contextifies</a> it.
If <code>contextObject</code> is <a href="#vmconstantsdont_contextify"><code>vm.constants.DONT_CONTEXTIFY</code></a>, don't <a href="#what-does-it-mean-to-contextify-an-object">contextify</a> anything.</li>
<li>Compiles the code as a <code>vm.Script</code></li>
<li>Runs the compiled code within the created context. The code does not have access to the scope in
which this method is called.</li>
<li>Returns the result.</li>
</ol>
<p>The following example compiles and executes code that increments a global
variable and sets a new one. These globals are contained in the <code>contextObject</code>.</p>
<pre><code class="language-mjs">import { runInNewContext, constants } from 'node:vm';

const contextObject = {
  animal: 'cat',
  count: 2,
};

runInNewContext('count += 1; name = &quot;kitty&quot;', contextObject);
console.log(contextObject);
// Prints: { animal: 'cat', count: 3, name: 'kitty' }

// This would throw if the context is created from a contextified object.
// vm.constants.DONT_CONTEXTIFY allows creating contexts with ordinary global objects that
// can be frozen.
const frozenContext = runInNewContext(
  'Object.freeze(globalThis); globalThis;',
  constants.DONT_CONTEXTIFY,
);
</code></pre>
<pre><code class="language-cjs">const { runInNewContext, constants } = require('node:vm');

const contextObject = {
  animal: 'cat',
  count: 2,
};

runInNewContext('count += 1; name = &quot;kitty&quot;', contextObject);
console.log(contextObject);
// Prints: { animal: 'cat', count: 3, name: 'kitty' }

// This would throw if the context is created from a contextified object.
// vm.constants.DONT_CONTEXTIFY allows creating contexts with ordinary global objects that
// can be frozen.
const frozenContext = runInNewContext(
  'Object.freeze(globalThis); globalThis;',
  constants.DONT_CONTEXTIFY,
);
</code></pre>
<h2><code>vm.runInThisContext(code[, options])</code></h2>
<ul>
<li><code>code</code> {string} The JavaScript code to compile and run.</li>
<li><code>options</code> {Object|string}
<ul>
<li><code>filename</code> {string} Specifies the filename used in stack traces produced
by this script. <strong>Default:</strong> <code>'evalmachine.&lt;anonymous&gt;'</code>.</li>
<li><code>lineOffset</code> {number} Specifies the line number offset that is displayed
in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>columnOffset</code> {number} Specifies the first-line column number offset that
is displayed in stack traces produced by this script. <strong>Default:</strong> <code>0</code>.</li>
<li><code>displayErrors</code> {boolean} When <code>true</code>, if an <a href="errors.md#class-error"><code>Error</code></a> occurs
while compiling the <code>code</code>, the line of code causing the error is attached
to the stack trace. <strong>Default:</strong> <code>true</code>.</li>
<li><code>timeout</code> {integer} Specifies the number of milliseconds to execute <code>code</code>
before terminating execution. If execution is terminated, an <a href="errors.md#class-error"><code>Error</code></a>
will be thrown. This value must be a strictly positive integer.</li>
<li><code>breakOnSigint</code> {boolean} If <code>true</code>, receiving <code>SIGINT</code>
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;) will terminate execution and throw an
<a href="errors.md#class-error"><code>Error</code></a>. Existing handlers for the event that have been attached via
<code>process.on('SIGINT')</code> are disabled during script execution, but continue to
work after that. <strong>Default:</strong> <code>false</code>.</li>
<li><code>cachedData</code> {Buffer|TypedArray|DataView} Provides an optional <code>Buffer</code> or
<code>TypedArray</code>, or <code>DataView</code> with V8's code cache data for the supplied
source.</li>
<li><code>importModuleDynamically</code>
{Function|vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER}
Used to specify the how the modules should be loaded during the evaluation
of this script when <code>import()</code> is called. This option is part of the
experimental modules API. We do not recommend using it in a production
environment. For detailed information, see
<a href="#support-of-dynamic-import-in-compilation-apis">Support of dynamic <code>import()</code> in compilation APIs</a>.</li>
</ul>
</li>
<li>Returns: {any} the result of the very last statement executed in the script.</li>
</ul>
<p><code>vm.runInThisContext()</code> compiles <code>code</code>, runs it within the context of the
current <code>global</code> and returns the result. Running code does not have access to
local scope, but does have access to the current <code>global</code> object.</p>
<p>If <code>options</code> is a string, then it specifies the filename.</p>
<p>The following example illustrates using both <code>vm.runInThisContext()</code> and
the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval"><code>eval()</code></a> function to run the same code:</p>
<pre><code class="language-mjs">import { runInThisContext } from 'node:vm';
let localVar = 'initial value';

const vmResult = runInThisContext('localVar = &quot;vm&quot;;');
console.log(`vmResult: '${vmResult}', localVar: '${localVar}'`);
// Prints: vmResult: 'vm', localVar: 'initial value'

const evalResult = eval('localVar = &quot;eval&quot;;');
console.log(`evalResult: '${evalResult}', localVar: '${localVar}'`);
// Prints: evalResult: 'eval', localVar: 'eval'
</code></pre>
<pre><code class="language-cjs">const { runInThisContext } = require('node:vm');
let localVar = 'initial value';

const vmResult = runInThisContext('localVar = &quot;vm&quot;;');
console.log(`vmResult: '${vmResult}', localVar: '${localVar}'`);
// Prints: vmResult: 'vm', localVar: 'initial value'

const evalResult = eval('localVar = &quot;eval&quot;;');
console.log(`evalResult: '${evalResult}', localVar: '${localVar}'`);
// Prints: evalResult: 'eval', localVar: 'eval'
</code></pre>
<p>Because <code>vm.runInThisContext()</code> does not have access to the local scope,
<code>localVar</code> is unchanged. In contrast, a direct <code>eval()</code> call <em>does</em> have access
to the local scope, so the value <code>localVar</code> is changed. In this way
<code>vm.runInThisContext()</code> is much like an <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval">indirect <code>eval()</code> call</a>, e.g.
<code>(0,eval)('code')</code>.</p>
<h2>Example: Running an HTTP server within a VM</h2>
<p>When using either <a href="#scriptruninthiscontextoptions"><code>script.runInThisContext()</code></a> or
<a href="#vmruninthiscontextcode-options"><code>vm.runInThisContext()</code></a>, the code is executed within the current V8 global
context. The code passed to this VM context will have its own isolated scope.</p>
<p>In order to run a simple web server using the <code>node:http</code> module the code passed
to the context must either call <code>require('node:http')</code> on its own, or have a
reference to the <code>node:http</code> module passed to it. For instance:</p>
<pre><code class="language-mjs">import { runInThisContext } from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const code = `
((require) =&gt; {
  const { createServer } = require('node:http');

  createServer((request, response) =&gt; {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\\n');
  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
})`;

runInThisContext(code)(require);
</code></pre>
<pre><code class="language-cjs">const { runInThisContext } = require('node:vm');

const code = `
((require) =&gt; {
  const { createServer } = require('node:http');

  createServer((request, response) =&gt; {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\\n');
  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
})`;

runInThisContext(code)(require);
</code></pre>
<p>The <code>require()</code> in the above case shares the state with the context it is
passed from. This may introduce risks when untrusted code is executed, e.g.
altering objects in the context in unwanted ways.</p>
<h2>What does it mean to &quot;contextify&quot; an object?</h2>
<p>All JavaScript executed within Node.js runs within the scope of a &quot;context&quot;.
According to the <a href="https://v8.dev/docs/embed#contexts">V8 Embedder's Guide</a>:</p>
<blockquote>
<p>In V8, a context is an execution environment that allows separate, unrelated,
JavaScript applications to run in a single instance of V8. You must explicitly
specify the context in which you want any JavaScript code to be run.</p>
</blockquote>
<p>When the method <code>vm.createContext()</code> is called with an object, the <code>contextObject</code> argument
will be used to wrap the global object of a new instance of a V8 Context
(if <code>contextObject</code> is <code>undefined</code>, a new object will be created from the current context
before its contextified). This V8 Context provides the <code>code</code> run using the <code>node:vm</code>
module's methods with an isolated global environment within which it can operate.
The process of creating the V8 Context and associating it with the <code>contextObject</code>
in the outer context is what this document refers to as &quot;contextifying&quot; the object.</p>
<p>The contextifying would introduce some quirks to the <code>globalThis</code> value in the context.
For example, it cannot be frozen, and it is not reference equal to the <code>contextObject</code>
in the outer context.</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';

// An undefined `contextObject` option makes the global object contextified.
const context = createContext();
console.log(runInContext('globalThis', context) === context);  // false
// A contextified global object cannot be frozen.
try {
  runInContext('Object.freeze(globalThis);', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // TypeError: Cannot freeze
}
console.log(runInContext('globalThis.foo = 1; foo;', context));  // 1
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');

// An undefined `contextObject` option makes the global object contextified.
const context = createContext();
console.log(runInContext('globalThis', context) === context);  // false
// A contextified global object cannot be frozen.
try {
  runInContext('Object.freeze(globalThis);', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // TypeError: Cannot freeze
}
console.log(runInContext('globalThis.foo = 1; foo;', context));  // 1
</code></pre>
<p>To create a context with an ordinary global object and get access to a global proxy in
the outer context with fewer quirks, specify <code>vm.constants.DONT_CONTEXTIFY</code> as the
<code>contextObject</code> argument.</p>
<h3><code>vm.constants.DONT_CONTEXTIFY</code></h3>
<p>This constant, when used as the <code>contextObject</code> argument in vm APIs, instructs Node.js to create
a context without wrapping its global object with another object in a Node.js-specific manner.
As a result, the <code>globalThis</code> value inside the new context would behave more closely to an ordinary
one.</p>
<pre><code class="language-mjs">import { createContext, runInContext, constants } from 'node:vm';

// Use vm.constants.DONT_CONTEXTIFY to freeze the global object.
const context = createContext(constants.DONT_CONTEXTIFY);
runInContext('Object.freeze(globalThis);', context);
try {
  runInContext('bar = 1; bar;', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // ReferenceError: bar is not defined
}
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext, constants } = require('node:vm');

// Use vm.constants.DONT_CONTEXTIFY to freeze the global object.
const context = createContext(constants.DONT_CONTEXTIFY);
runInContext('Object.freeze(globalThis);', context);
try {
  runInContext('bar = 1; bar;', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // ReferenceError: bar is not defined
}
</code></pre>
<p>When <code>vm.constants.DONT_CONTEXTIFY</code> is used as the <code>contextObject</code> argument to <a href="#vmcreatecontextcontextobject-options"><code>vm.createContext()</code></a>,
the returned object is a proxy-like object to the global object in the newly created context with
fewer Node.js-specific quirks. It is reference equal to the <code>globalThis</code> value in the new context,
can be modified from outside the context, and can be used to access built-ins in the new context directly.</p>
<pre><code class="language-mjs">import { createContext, runInContext, constants } from 'node:vm';

const context = createContext(constants.DONT_CONTEXTIFY);

// Returned object is reference equal to globalThis in the new context.
console.log(runInContext('globalThis', context) === context);  // true

// Can be used to access globals in the new context directly.
console.log(context.Array);  // [Function: Array]
runInContext('foo = 1;', context);
console.log(context.foo);  // 1
context.bar = 1;
console.log(runInContext('bar;', context));  // 1

// Can be frozen and it affects the inner context.
Object.freeze(context);
try {
  runInContext('baz = 1; baz;', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // ReferenceError: baz is not defined
}
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext, constants } = require('node:vm');

const context = createContext(constants.DONT_CONTEXTIFY);

// Returned object is reference equal to globalThis in the new context.
console.log(runInContext('globalThis', context) === context);  // true

// Can be used to access globals in the new context directly.
console.log(context.Array);  // [Function: Array]
runInContext('foo = 1;', context);
console.log(context.foo);  // 1
context.bar = 1;
console.log(runInContext('bar;', context));  // 1

// Can be frozen and it affects the inner context.
Object.freeze(context);
try {
  runInContext('baz = 1; baz;', context);
} catch (e) {
  console.log(`${e.constructor.name}: ${e.message}`); // ReferenceError: baz is not defined
}
</code></pre>
<h2>Timeout interactions with asynchronous tasks and Promises</h2>
<p><code>Promise</code>s and <code>async function</code>s can schedule tasks run by the JavaScript
engine asynchronously. By default, these tasks are run after all JavaScript
functions on the current stack are done executing.
This allows escaping the functionality of the <code>timeout</code> and
<code>breakOnSigint</code> options.</p>
<p>For example, the following code executed by <code>vm.runInNewContext()</code> with a
timeout of 5 milliseconds schedules an infinite loop to run after a promise
resolves. The scheduled loop is never interrupted by the timeout:</p>
<pre><code class="language-mjs">import { runInNewContext } from 'node:vm';

function loop() {
  console.log('entering loop');
  while (1) console.log(Date.now());
}

runInNewContext(
  'Promise.resolve().then(() =&gt; loop());',
  { loop, console },
  { timeout: 5 },
);
// This is printed *before* 'entering infinite loop' (!)
console.log('done executing');
</code></pre>
<pre><code class="language-cjs">const { runInNewContext } = require('node:vm');

function loop() {
  console.log('entering loop');
  while (1) console.log(Date.now());
}

runInNewContext(
  'Promise.resolve().then(() =&gt; loop());',
  { loop, console },
  { timeout: 5 },
);
// This is printed *before* 'entering infinite loop' (!)
console.log('done executing');
</code></pre>
<p>This can be addressed by passing <code>microtaskMode: 'afterEvaluate'</code> to the code
that creates the <code>Context</code>:</p>
<pre><code class="language-mjs">import { runInNewContext } from 'node:vm';

function loop() {
  while (1) console.log(Date.now());
}

runInNewContext(
  'Promise.resolve().then(() =&gt; loop());',
  { loop, console },
  { timeout: 5, microtaskMode: 'afterEvaluate' },
);
</code></pre>
<pre><code class="language-cjs">const { runInNewContext } = require('node:vm');

function loop() {
  while (1) console.log(Date.now());
}

runInNewContext(
  'Promise.resolve().then(() =&gt; loop());',
  { loop, console },
  { timeout: 5, microtaskMode: 'afterEvaluate' },
);
</code></pre>
<p>In this case, the microtask scheduled through <code>promise.then()</code> will be run
before returning from <code>vm.runInNewContext()</code>, and will be interrupted
by the <code>timeout</code> functionality. This applies only to code running in a
<code>vm.Context</code>, so e.g. <a href="#vmruninthiscontextcode-options"><code>vm.runInThisContext()</code></a> does not take this option.</p>
<p>Promise callbacks are entered into the microtask queue of the context in which
they were created. For example, if <code>() =&gt; loop()</code> is replaced with just <code>loop</code>
in the above example, then <code>loop</code> will be pushed into the global microtask
queue, because it is a function from the outer (main) context, and thus will
also be able to escape the timeout.</p>
<p>If asynchronous scheduling functions such as <code>process.nextTick()</code>,
<code>queueMicrotask()</code>, <code>setTimeout()</code>, <code>setImmediate()</code>, etc. are made available
inside a <code>vm.Context</code>, functions passed to them will be added to global queues,
which are shared by all contexts. Therefore, callbacks passed to those functions
are not controllable through the timeout either.</p>
<h3>When <code>microtaskMode</code> is <code>'afterEvaluate'</code>, beware sharing Promises between Contexts</h3>
<p>In <code>'afterEvaluate'</code> mode, the <code>Context</code> has its own microtask queue, separate
from the global microtask queue used by the outer (main) context. While this
mode is necessary to enforce <code>timeout</code> and enable <code>breakOnSigint</code> with
asynchronous tasks, it also makes sharing promises between contexts challenging.</p>
<p>In the example below, a promise is created in the inner context and shared with
the outer context. When the outer context <code>await</code> on the promise, the execution
flow of the outer context is disrupted in a surprising way: the log statement
is never executed.</p>
<pre><code class="language-mjs">import { createContext, runInContext } from 'node:vm';

const inner_context = createContext({}, { microtaskMode: 'afterEvaluate' });

// runInContext() returns a Promise created in the inner context.
const inner_promise = runInContext('Promise.resolve()', inner_context);

// As part of performing `await`, the JavaScript runtime must enqueue a task
// on the microtask queue of the context where `inner_promise` was created.
// A task is added on the inner microtask queue, but **it will not be run
// automatically**: this task will remain pending indefinitely.
//
// Since the outer microtask queue is empty, execution in the outer module
// falls through, and the log statement below is never executed.
await inner_promise;

console.log('this will NOT be printed');
</code></pre>
<pre><code class="language-cjs">const { createContext, runInContext } = require('node:vm');

// runInContext() returns a Promise created in the inner context.
const inner_context = createContext({}, { microtaskMode: 'afterEvaluate' });

(async () =&gt; {
  const inner_promise = runInContext('Promise.resolve()', inner_context);

  // As part of performing `await`, the JavaScript runtime must enqueue a task
  // on the microtask queue of the context where `inner_promise` was created.
  // A task is added on the inner microtask queue, but **it will not be run
  // automatically**: this task will remain pending indefinitely.
  //
  // Since the outer microtask queue is empty, execution in the outer module
  // falls through, and the log statement below is never executed.
  await inner_promise;

  console.log('this will NOT be printed');
})();
</code></pre>
<p>To successfully share promises between contexts with different microtask queues,
it is necessary to ensure that tasks on the inner microtask queue will be run
<strong>whenever</strong> the outer context enqueues a task on the inner microtask queue.</p>
<p>The tasks on the microtask queue of a given context are run whenever
<code>runInContext()</code> or <code>SourceTextModule.evaluate()</code> are invoked on a script or
module using this context. In our example, the normal execution flow can be
restored by scheduling a second call to <code>runInContext()</code> <em>before</em> <code>await inner_promise</code>.</p>
<pre><code class="language-mjs">// Schedule `runInContext()` to manually drain the inner context microtask
// queue; it will run after the `await` statement below.
setImmediate(() =&gt; {
  vm.runInContext('', context);
});

await inner_promise;

console.log('OK');
</code></pre>
<p><strong>Note:</strong> Strictly speaking, in this mode, <code>node:vm</code> departs from the letter of
the ECMAScript specification for <a href="https://tc39.es/ecma262/#sec-hostenqueuepromisejob">enqueuing jobs</a>, by allowing asynchronous
tasks from different contexts to run in a different order than they were
enqueued.</p>
<h2>Support of dynamic <code>import()</code> in compilation APIs</h2>
<p>The following APIs support an <code>importModuleDynamically</code> option to enable dynamic
<code>import()</code> in code compiled by the vm module.</p>
<ul>
<li><code>new vm.Script</code></li>
<li><code>vm.compileFunction()</code></li>
<li><code>new vm.SourceTextModule</code></li>
<li><code>vm.runInThisContext()</code></li>
<li><code>vm.runInContext()</code></li>
<li><code>vm.runInNewContext()</code></li>
<li><code>vm.createContext()</code></li>
</ul>
<p>This option is still part of the experimental modules API. We do not recommend
using it in a production environment.</p>
<h3>When the <code>importModuleDynamically</code> option is not specified or undefined</h3>
<p>If this option is not specified, or if it's <code>undefined</code>, code containing
<code>import()</code> can still be compiled by the vm APIs, but when the compiled code is
executed and it actually calls <code>import()</code>, the result will reject with
<a href="errors.md#err_vm_dynamic_import_callback_missing"><code>ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING</code></a>.</p>
<h3>When <code>importModuleDynamically</code> is <code>vm.constants.USE_MAIN_CONTEXT_DEFAULT_LOADER</code></h3>
<p>This option is currently not supported for <code>vm.SourceTextModule</code>.</p>
<p>With this option, when an <code>import()</code> is initiated in the compiled code, Node.js
would use the default ESM loader from the main context to load the requested
module and return it to the code being executed.</p>
<p>This gives access to Node.js built-in modules such as <code>fs</code> or <code>http</code>
to the code being compiled. If the code is executed in a different context,
be aware that the objects created by modules loaded from the main context
are still from the main context and not <code>instanceof</code> built-in classes in the
new context.</p>
<pre><code class="language-cjs">const { Script, constants } = require('node:vm');
const script = new Script(
  'import(&quot;node:fs&quot;).then(({readFile}) =&gt; readFile instanceof Function)',
  { importModuleDynamically: constants.USE_MAIN_CONTEXT_DEFAULT_LOADER });

// false: URL loaded from the main context is not an instance of the Function
// class in the new context.
script.runInNewContext().then(console.log);
</code></pre>
<pre><code class="language-mjs">import { Script, constants } from 'node:vm';

const script = new Script(
  'import(&quot;node:fs&quot;).then(({readFile}) =&gt; readFile instanceof Function)',
  { importModuleDynamically: constants.USE_MAIN_CONTEXT_DEFAULT_LOADER });

// false: URL loaded from the main context is not an instance of the Function
// class in the new context.
script.runInNewContext().then(console.log);
</code></pre>
<p>This option also allows the script or function to load user modules:</p>
<pre><code class="language-mjs">import { Script, constants } from 'node:vm';
import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';

// Write test.js and test.txt to the directory where the current script
// being run is located.
writeFileSync(resolve(import.meta.dirname, 'test.mjs'),
              'export const filename = &quot;./test.json&quot;;');
writeFileSync(resolve(import.meta.dirname, 'test.json'),
              '{&quot;hello&quot;: &quot;world&quot;}');

// Compile a script that loads test.mjs and then test.json
// as if the script is placed in the same directory.
const script = new Script(
  `(async function() {
    const { filename } = await import('./test.mjs');
    return import(filename, { with: { type: 'json' } })
  })();`,
  {
    filename: resolve(import.meta.dirname, 'test-with-default.js'),
    importModuleDynamically: constants.USE_MAIN_CONTEXT_DEFAULT_LOADER,
  });

// { default: { hello: 'world' } }
script.runInThisContext().then(console.log);
</code></pre>
<pre><code class="language-cjs">const { Script, constants } = require('node:vm');
const { resolve } = require('node:path');
const { writeFileSync } = require('node:fs');

// Write test.js and test.txt to the directory where the current script
// being run is located.
writeFileSync(resolve(__dirname, 'test.mjs'),
              'export const filename = &quot;./test.json&quot;;');
writeFileSync(resolve(__dirname, 'test.json'),
              '{&quot;hello&quot;: &quot;world&quot;}');

// Compile a script that loads test.mjs and then test.json
// as if the script is placed in the same directory.
const script = new Script(
  `(async function() {
    const { filename } = await import('./test.mjs');
    return import(filename, { with: { type: 'json' } })
  })();`,
  {
    filename: resolve(__dirname, 'test-with-default.js'),
    importModuleDynamically: constants.USE_MAIN_CONTEXT_DEFAULT_LOADER,
  });

// { default: { hello: 'world' } }
script.runInThisContext().then(console.log);
</code></pre>
<p>There are a few caveats with loading user modules using the default loader
from the main context:</p>
<ol>
<li>The module being resolved would be relative to the <code>filename</code> option passed
to <code>vm.Script</code> or <code>vm.compileFunction()</code>. The resolution can work with a
<code>filename</code> that's either an absolute path or a URL string.  If <code>filename</code> is
a string that's neither an absolute path or a URL, or if it's undefined,
the resolution will be relative to the current working directory
of the process. In the case of <code>vm.createContext()</code>, the resolution is always
relative to the current working directory since this option is only used when
there isn't a referrer script or module.</li>
<li>For any given <code>filename</code> that resolves to a specific path, once the process
manages to load a particular module from that path, the result may be cached,
and subsequent load of the same module from the same path would return the
same thing. If the <code>filename</code> is a URL string, the cache would not be hit
if it has different search parameters. For <code>filename</code>s that are not URL
strings, there is currently no way to bypass the caching behavior.</li>
</ol>
<h3>When <code>importModuleDynamically</code> is a function</h3>
<p>When <code>importModuleDynamically</code> is a function, it will be invoked when <code>import()</code>
is called in the compiled code for users to customize how the requested module
should be compiled and evaluated. Currently, the Node.js instance must be
launched with the <code>--experimental-vm-modules</code> flag for this option to work. If
the flag isn't set, this callback will be ignored. If the code evaluated
actually calls to <code>import()</code>, the result will reject with
<a href="errors.md#err_vm_dynamic_import_callback_missing_flag"><code>ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING_FLAG</code></a>.</p>
<p>The callback <code>importModuleDynamically(specifier, referrer, importAttributes)</code>
has the following signature:</p>
<ul>
<li><code>specifier</code> {string} specifier passed to <code>import()</code></li>
<li><code>referrer</code> {vm.Script|Function|vm.SourceTextModule|Object}
The referrer is the compiled <code>vm.Script</code> for <code>new vm.Script</code>,
<code>vm.runInThisContext</code>, <code>vm.runInContext</code> and <code>vm.runInNewContext</code>. It's the
compiled <code>Function</code> for <code>vm.compileFunction</code>, the compiled
<code>vm.SourceTextModule</code> for <code>new vm.SourceTextModule</code>, and the context <code>Object</code>
for <code>vm.createContext()</code>.</li>
<li><code>importAttributes</code> {Object} The <code>&quot;with&quot;</code> value passed to the
<a href="https://tc39.es/proposal-import-attributes/#sec-evaluate-import-call"><code>optionsExpression</code></a> optional parameter, or an empty object if no value was
provided.</li>
<li><code>phase</code> {string} The phase of the dynamic import (<code>&quot;source&quot;</code> or <code>&quot;evaluation&quot;</code>).</li>
<li>Returns: {Module Namespace Object|vm.Module} Returning a <code>vm.Module</code> is
recommended in order to take advantage of error tracking, and to avoid issues
with namespaces that contain <code>then</code> function exports.</li>
</ul>
<pre><code class="language-mjs">// This script must be run with --experimental-vm-modules.
import { Script, SyntheticModule } from 'node:vm';

const script = new Script('import(&quot;foo.json&quot;, { with: { type: &quot;json&quot; } })', {
  async importModuleDynamically(specifier, referrer, importAttributes) {
    console.log(specifier);  // 'foo.json'
    console.log(referrer);   // The compiled script
    console.log(importAttributes);  // { type: 'json' }
    const m = new SyntheticModule(['bar'], () =&gt; { });
    await m.link(() =&gt; { });
    m.setExport('bar', { hello: 'world' });
    return m;
  },
});
const result = await script.runInThisContext();
console.log(result);  //  { bar: { hello: 'world' } }
</code></pre>
<pre><code class="language-cjs">// This script must be run with --experimental-vm-modules.
const { Script, SyntheticModule } = require('node:vm');

(async function main() {
  const script = new Script('import(&quot;foo.json&quot;, { with: { type: &quot;json&quot; } })', {
    async importModuleDynamically(specifier, referrer, importAttributes) {
      console.log(specifier);  // 'foo.json'
      console.log(referrer);   // The compiled script
      console.log(importAttributes);  // { type: 'json' }
      const m = new SyntheticModule(['bar'], () =&gt; { });
      await m.link(() =&gt; { });
      m.setExport('bar', { hello: 'world' });
      return m;
    },
  });
  const result = await script.runInThisContext();
  console.log(result);  //  { bar: { hello: 'world' } }
})();
</code></pre>
