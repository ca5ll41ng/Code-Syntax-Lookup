---
id: "js-en-function-node-assert"
language: "js"
lang: "en"
category: "function"
name: "node:assert"
title: "Assert"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/assert.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Assert

<h1>Assert</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:assert</code> module provides a set of assertion functions for verifying
invariants.</p>
<h2>Strict assertion mode</h2>
<p>In strict assertion mode, non-strict methods behave like their corresponding
strict methods. For example, <a href="#assertdeepequalactual-expected-message"><code>assert.deepEqual()</code></a> will behave like
<a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>.</p>
<p>In strict assertion mode, error messages for objects display a diff. In legacy
assertion mode, error messages for objects display the objects, often truncated.</p>
<h3>Message parameter semantics</h3>
<p>For assertion methods that accept an optional <code>message</code> parameter, the message
may be provided in one of the following forms:</p>
<ul>
<li><strong>string</strong>: Used as-is. If additional arguments are supplied after the
<code>message</code> string, they are treated as printf-like substitutions (see
<a href="util.md#utilformatformat-args"><code>util.format()</code></a>).</li>
<li><strong>Error</strong>: If an <code>Error</code> instance is provided as <code>message</code>, that error is
thrown directly instead of an <code>AssertionError</code>.</li>
<li><strong>function</strong>: A function of the form <code>(actual, expected) =&gt; string</code>. It is
called only when the assertion fails and should return a string to be used as
the error message. Non-string return values are ignored and the default
message is used instead.</li>
</ul>
<p>If additional arguments are passed along with an <code>Error</code> or a function as
<code>message</code>, the call is rejected with <code>ERR_AMBIGUOUS_ARGUMENT</code>.</p>
<p>If the first item is neither a string, <code>Error</code>, nor function, <code>ERR_INVALID_ARG_TYPE</code>
is thrown.</p>
<p>To use strict assertion mode:</p>
<pre><code class="language-mjs">import { strict as assert } from 'node:assert';
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert').strict;
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert/strict';
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');
</code></pre>
<p>Example error diff:</p>
<pre><code class="language-mjs">import { strict as assert } from 'node:assert';

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected ... Lines skipped
//
//   [
//     [
// ...
//       2,
// +     3
// -     '3'
//     ],
// ...
//     5
//   ]
</code></pre>
<p>To deactivate the colors, use the <code>NO_COLOR</code> or <code>NODE_DISABLE_COLORS</code>
environment variables. This will also deactivate the colors in the REPL. For
more on color support in terminal environments, read the tty
<a href="tty.md#writestreamgetcolordepthenv"><code>getColorDepth()</code></a> documentation.</p>
<h2>Legacy assertion mode</h2>
<p>Legacy assertion mode uses the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"><code>==</code> operator</a> in:</p>
<ul>
<li><a href="#assertdeepequalactual-expected-message"><code>assert.deepEqual()</code></a></li>
<li><a href="#assertequalactual-expected-message"><code>assert.equal()</code></a></li>
<li><a href="#assertnotdeepequalactual-expected-message"><code>assert.notDeepEqual()</code></a></li>
<li><a href="#assertnotequalactual-expected-message"><code>assert.notEqual()</code></a></li>
</ul>
<p>To use legacy assertion mode:</p>
<pre><code class="language-mjs">import assert from 'node:assert';
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
</code></pre>
<p>Legacy assertion mode may have surprising results, especially when using
<a href="#assertdeepequalactual-expected-message"><code>assert.deepEqual()</code></a>:</p>
<pre><code class="language-cjs">// WARNING: This does not throw an AssertionError in legacy assertion mode!
assert.deepEqual(/a/gi, new Date());
</code></pre>
<h2>Class: <code>assert.AssertionError</code></h2>
<ul>
<li>Extends: {errors.Error}</li>
</ul>
<p>Indicates the failure of an assertion. All errors thrown by the <code>node:assert</code>
module will be instances of the <code>AssertionError</code> class.</p>
<h3><code>new assert.AssertionError(options)</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>message</code> {string} If provided, the error message is set to this value.</li>
<li><code>actual</code> {any} The <code>actual</code> property on the error instance.</li>
<li><code>expected</code> {any} The <code>expected</code> property on the error instance.</li>
<li><code>operator</code> {string} The <code>operator</code> property on the error instance.</li>
<li><code>stackStartFn</code> {Function} If provided, the generated stack trace omits
frames before this function.</li>
<li><code>diff</code> {string} If set to <code>'full'</code>, shows the full diff in assertion errors. Defaults to <code>'simple'</code>.
Accepted values: <code>'simple'</code>, <code>'full'</code>.</li>
</ul>
</li>
</ul>
<p>A subclass of {Error} that indicates the failure of an assertion.</p>
<p>All instances contain the built-in <code>Error</code> properties (<code>message</code> and <code>name</code>)
and:</p>
<ul>
<li><code>actual</code> {any} Set to the <code>actual</code> argument for methods such as
<a href="#assertstrictequalactual-expected-message"><code>assert.strictEqual()</code></a>.</li>
<li><code>expected</code> {any} Set to the <code>expected</code> value for methods such as
<a href="#assertstrictequalactual-expected-message"><code>assert.strictEqual()</code></a>.</li>
<li><code>generatedMessage</code> {boolean} Indicates if the message was auto-generated
(<code>true</code>) or not.</li>
<li><code>code</code> {string} Value is always <code>ERR_ASSERTION</code> to show that the error is an
assertion error.</li>
<li><code>operator</code> {string} Set to the passed in operator value.</li>
</ul>
<pre><code class="language-mjs">import assert from 'node:assert';

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual',
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual',
});

// Verify error output:
try {
  assert.strictEqual(1, 2);
} catch (err) {
  assert(err instanceof assert.AssertionError);
  assert.strictEqual(err.message, message);
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}
</code></pre>
<h2>Class: <code>assert.Assert</code></h2>
<p>The <code>Assert</code> class allows creating independent assertion instances with custom options.</p>
<h3><code>new assert.Assert([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>diff</code> {string} If set to <code>'full'</code>, shows the full diff in assertion errors. Defaults to <code>'simple'</code>.
Accepted values: <code>'simple'</code>, <code>'full'</code>.</li>
<li><code>strict</code> {boolean} If set to <code>true</code>, non-strict methods behave like their
corresponding strict methods. Defaults to <code>true</code>.</li>
<li><code>skipPrototype</code> {boolean} If set to <code>true</code>, skips prototype and constructor
comparison in deep equality checks. Defaults to <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Creates a new assertion instance. The <code>diff</code> option controls the verbosity of diffs in assertion error messages.</p>
<pre><code class="language-js">const { Assert } = require('node:assert');
const assertInstance = new Assert({ diff: 'full' });
assertInstance.deepStrictEqual({ a: 1 }, { a: 2 });
// Shows a full diff in the error message.
</code></pre>
<p><strong>Important</strong>: When destructuring assertion methods from an <code>Assert</code> instance,
the methods lose their connection to the instance's configuration options (such
as <code>diff</code>, <code>strict</code>, and <code>skipPrototype</code> settings).
The destructured methods will fall back to default behavior instead.</p>
<pre><code class="language-js">const myAssert = new Assert({ diff: 'full' });

// This works as expected - uses 'full' diff
myAssert.strictEqual({ a: 1 }, { b: { c: 1 } });

// This loses the 'full' diff setting - falls back to default 'simple' diff
const { strictEqual } = myAssert;
strictEqual({ a: 1 }, { b: { c: 1 } });
</code></pre>
<p>The <code>skipPrototype</code> option affects all deep equality methods:</p>
<pre><code class="language-js">class Foo {
  constructor(a) {
    this.a = a;
  }
}

class Bar {
  constructor(a) {
    this.a = a;
  }
}

const foo = new Foo(1);
const bar = new Bar(1);

// Default behavior - fails due to different constructors
const assert1 = new Assert();
assert1.deepStrictEqual(foo, bar); // AssertionError

// Skip prototype comparison - passes if properties are equal
const assert2 = new Assert({ skipPrototype: true });
assert2.deepStrictEqual(foo, bar); // OK
</code></pre>
<p>When destructured, methods lose access to the instance's <code>this</code> context and revert to the default assertion behavior
(diff: 'simple', non-strict mode).
To maintain custom options when using destructured methods, avoid
destructuring and call methods directly on the instance.</p>
<h2><code>assert(value[, message])</code></h2>
<ul>
<li><code>value</code> {any} The input that is checked for being truthy.</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>An alias of <a href="#assertokvalue-message"><code>assert.ok()</code></a>.</p>
<h2><code>assert.deepEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p><strong>Strict assertion mode</strong></p>
<p>An alias of <a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>.</p>
<p><strong>Legacy assertion mode</strong></p>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a> instead.</p>
</blockquote>
<p>Tests for deep equality between the <code>actual</code> and <code>expected</code> parameters. Consider
using <a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a> instead. <a href="#assertdeepequalactual-expected-message"><code>assert.deepEqual()</code></a> can have
surprising results.</p>
<p><em>Deep equality</em> means that the enumerable &quot;own&quot; properties of child objects
are also recursively evaluated by the following rules.</p>
<h3>Comparison details</h3>
<ul>
<li>Primitive values are compared with the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"><code>==</code> operator</a>,
except for {NaN}, which is treated as identical when both
sides are {NaN}.</li>
<li><a href="https://tc39.github.io/ecma262/#sec-object.prototype.tostring">Type tags</a> of objects should be the same.</li>
<li>Only <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties">enumerable &quot;own&quot; properties</a> are considered.</li>
<li>Object constructors are compared when available.</li>
<li>{Error} names, messages, causes, and errors are always compared,
even if these are not enumerable properties.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values">Object wrappers</a> are compared both as objects and unwrapped values.</li>
<li><code>Object</code> properties are compared unordered.</li>
<li>{Map} keys and {Set} items are compared unordered.</li>
<li>Recursion stops when both sides differ or either side encounters a circular
reference.</li>
<li>Implementation does not test the <a href="https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots"><code>[[Prototype]]</code></a> of
objects.</li>
<li>{Symbol} properties are not compared.</li>
<li>{WeakMap}, {WeakSet} and {Promise} instances are <strong>not</strong> compared
structurally. They are only equal if they reference the same object. Any
comparison between different <code>WeakMap</code>, <code>WeakSet</code>, or <code>Promise</code> instances
will result in inequality, even if they contain the same content.</li>
<li>{RegExp} lastIndex, flags, and source are always compared, even if these
are not enumerable properties.</li>
</ul>
<p>The following example does not throw an <a href="#class-assertassertionerror"><code>AssertionError</code></a> because the
primitives are compared using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"><code>==</code> operator</a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
// WARNING: This does not throw an AssertionError!

assert.deepEqual('+00000000', false);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
// WARNING: This does not throw an AssertionError!

assert.deepEqual('+00000000', false);
</code></pre>
<p>&quot;Deep&quot; equality means that the enumerable &quot;own&quot; properties of child objects
are evaluated also:</p>
<pre><code class="language-mjs">import assert from 'node:assert';

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = { __proto__: obj1 };

assert.deepEqual(obj1, obj1);
// OK

// Values of b are different:
assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(obj1, obj3);
// OK

// Prototypes are ignored:
assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = { __proto__: obj1 };

assert.deepEqual(obj1, obj1);
// OK

// Values of b are different:
assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(obj1, obj3);
// OK

// Prototypes are ignored:
assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
</code></pre>
<p>If the values are not equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned. If the <code>message</code>
parameter is an instance of {Error} then it will be thrown instead of the
<a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<h2><code>assert.deepStrictEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Tests for deep equality between the <code>actual</code> and <code>expected</code> parameters.
&quot;Deep&quot; equality means that the enumerable &quot;own&quot; properties of child objects
are recursively evaluated also by the following rules.</p>
<h3>Comparison details</h3>
<ul>
<li>Primitive values are compared using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is()</code></a>.</li>
<li><a href="https://tc39.github.io/ecma262/#sec-object.prototype.tostring">Type tags</a> of objects should be the same.</li>
<li><a href="https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots"><code>[[Prototype]]</code></a> of objects are compared using
the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code> operator</a>.</li>
<li>Only <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties">enumerable &quot;own&quot; properties</a> are considered.</li>
<li>Object constructors are compared when available.</li>
<li>{Error} names, messages, causes, and errors are always compared,
even if these are not enumerable properties.
<code>errors</code> is also compared.</li>
<li>Enumerable own {Symbol} properties are compared as well.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values">Object wrappers</a> are compared both as objects and unwrapped values.</li>
<li><code>Object</code> properties are compared unordered.</li>
<li>{Map} keys and {Set} items are compared unordered.</li>
<li>Recursion stops when both sides differ or either side encounters a circular
reference.</li>
<li>{WeakMap}, {WeakSet} and {Promise} instances are <strong>not</strong> compared
structurally. They are only equal if they reference the same object. Any
comparison between different <code>WeakMap</code>, <code>WeakSet</code>, or <code>Promise</code> instances
will result in inequality, even if they contain the same content.</li>
<li>{RegExp} lastIndex, flags, and source are always compared, even if these
are not enumerable properties.</li>
</ul>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

// This fails because 1 !== '1'.
assert.deepStrictEqual({ a: 1 }, { a: '1' });
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
//   {
// +   a: 1
// -   a: '1'
//   }

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);

// Different [[Prototype]]:
assert.deepStrictEqual(object, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + {}
// - Date {}

// Different type tags:
assert.deepStrictEqual(date, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 2018-04-26T00:49:08.604Z
// - Date {}

assert.deepStrictEqual(NaN, NaN);
// OK because Object.is(NaN, NaN) is true.

// Different unwrapped numbers:
assert.deepStrictEqual(new Number(1), new Number(2));
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + [Number: 1]
// - [Number: 2]

assert.deepStrictEqual(new String('foo'), Object('foo'));
// OK because the object and the string are identical when unwrapped.

assert.deepStrictEqual(-0, -0);
// OK

// Different zeros:
assert.deepStrictEqual(0, -0);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 0
// - -0

const symbol1 = Symbol();
const symbol2 = Symbol();
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
// OK, because it is the same symbol on both objects.

assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });
// AssertionError [ERR_ASSERTION]: Inputs identical but not reference equal:
//
// {
//   Symbol(): 1
// }

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap();
const obj = {};

weakMap1.set(obj, 'value');
weakMap2.set(obj, 'value');

// Comparing different instances fails, even with same contents
assert.deepStrictEqual(weakMap1, weakMap2);
// AssertionError: Values have same structure but are not reference-equal:
//
// WeakMap {
//   &lt;items unknown&gt;
// }

// Comparing the same instance to itself succeeds
assert.deepStrictEqual(weakMap1, weakMap1);
// OK

const weakSet1 = new WeakSet();
const weakSet2 = new WeakSet();
weakSet1.add(obj);
weakSet2.add(obj);

// Comparing different instances fails, even with same contents
assert.deepStrictEqual(weakSet1, weakSet2);
// AssertionError: Values have same structure but are not reference-equal:
// + actual - expected
//
// WeakSet {
//   &lt;items unknown&gt;
// }

// Comparing the same instance to itself succeeds
assert.deepStrictEqual(weakSet1, weakSet1);
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

// This fails because 1 !== '1'.
assert.deepStrictEqual({ a: 1 }, { a: '1' });
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
//   {
// +   a: 1
// -   a: '1'
//   }

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);

// Different [[Prototype]]:
assert.deepStrictEqual(object, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + {}
// - Date {}

// Different type tags:
assert.deepStrictEqual(date, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 2018-04-26T00:49:08.604Z
// - Date {}

assert.deepStrictEqual(NaN, NaN);
// OK because Object.is(NaN, NaN) is true.

// Different unwrapped numbers:
assert.deepStrictEqual(new Number(1), new Number(2));
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + [Number: 1]
// - [Number: 2]

assert.deepStrictEqual(new String('foo'), Object('foo'));
// OK because the object and the string are identical when unwrapped.

assert.deepStrictEqual(-0, -0);
// OK

// Different zeros:
assert.deepStrictEqual(0, -0);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 0
// - -0

const symbol1 = Symbol();
const symbol2 = Symbol();
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
// OK, because it is the same symbol on both objects.

assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });
// AssertionError [ERR_ASSERTION]: Inputs identical but not reference equal:
//
// {
//   Symbol(): 1
// }

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap();
const obj = {};

weakMap1.set(obj, 'value');
weakMap2.set(obj, 'value');

// Comparing different instances fails, even with same contents
assert.deepStrictEqual(weakMap1, weakMap2);
// AssertionError: Values have same structure but are not reference-equal:
//
// WeakMap {
//   &lt;items unknown&gt;
// }

// Comparing the same instance to itself succeeds
assert.deepStrictEqual(weakMap1, weakMap1);
// OK

const weakSet1 = new WeakSet();
const weakSet2 = new WeakSet();
weakSet1.add(obj);
weakSet2.add(obj);

// Comparing different instances fails, even with same contents
assert.deepStrictEqual(weakSet1, weakSet2);
// AssertionError: Values have same structure but are not reference-equal:
// + actual - expected
//
// WeakSet {
//   &lt;items unknown&gt;
// }

// Comparing the same instance to itself succeeds
assert.deepStrictEqual(weakSet1, weakSet1);
// OK
</code></pre>
<p>If the values are not equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned. If the <code>message</code>
parameter is an instance of {Error} then it will be thrown instead of the
<code>AssertionError</code>.</p>
<h2><code>assert.doesNotMatch(string, regexp[, message])</code></h2>
<ul>
<li><code>string</code> {string}</li>
<li><code>regexp</code> {RegExp}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Expects the <code>string</code> input not to match the regular expression.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.doesNotMatch('I will fail', /fail/);
// AssertionError [ERR_ASSERTION]: The input was expected to not match the ...

assert.doesNotMatch(123, /pass/);
// AssertionError [ERR_ASSERTION]: The &quot;string&quot; argument must be of type string.

assert.doesNotMatch('I will pass', /different/);
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.doesNotMatch('I will fail', /fail/);
// AssertionError [ERR_ASSERTION]: The input was expected to not match the ...

assert.doesNotMatch(123, /pass/);
// AssertionError [ERR_ASSERTION]: The &quot;string&quot; argument must be of type string.

assert.doesNotMatch('I will pass', /different/);
// OK
</code></pre>
<p>If the values do match, or if the <code>string</code> argument is of another type than
<code>string</code>, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code> property set equal
to the value of the <code>message</code> parameter. If the <code>message</code> parameter is
undefined, a default error message is assigned. If the <code>message</code> parameter is an
instance of {Error} then it will be thrown instead of the
<a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<h2><code>assert.doesNotReject(asyncFn[, error][, message])</code></h2>
<ul>
<li><code>asyncFn</code> {Function|Promise}</li>
<li><code>error</code> {RegExp|Function}</li>
<li><code>message</code> {string}</li>
<li>Returns: {Promise}</li>
</ul>
<p>Awaits the <code>asyncFn</code> promise or, if <code>asyncFn</code> is a function, immediately
calls the function and awaits the returned promise to complete. It will then
check that the promise is not rejected.</p>
<p>If <code>asyncFn</code> is a function and it throws an error synchronously,
<code>assert.doesNotReject()</code> will return a rejected <code>Promise</code> with that error. If
the function does not return a promise, <code>assert.doesNotReject()</code> will return a
rejected <code>Promise</code> with an <a href="errors.md#err_invalid_return_value"><code>ERR_INVALID_RETURN_VALUE</code></a> error. In both cases
the error handler is skipped.</p>
<p>Using <code>assert.doesNotReject()</code> is actually not useful because there is little
benefit in catching a rejection and then rejecting it again. Instead, consider
adding a comment next to the specific code path that should not reject and keep
error messages as expressive as possible.</p>
<p>If specified, <code>error</code> can be a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"><code>Class</code></a>, {RegExp} or a validation
function. See <a href="#assertthrowsfn-error-message"><code>assert.throws()</code></a> for more details.</p>
<p>Aside from asynchronously awaiting completion, it behaves identically to
<a href="#assertdoesnotthrowfn-error-message"><code>assert.doesNotThrow()</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

await assert.doesNotReject(
  async () =&gt; {
    throw new TypeError('Wrong value');
  },
  SyntaxError,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

(async () =&gt; {
  await assert.doesNotReject(
    async () =&gt; {
      throw new TypeError('Wrong value');
    },
    SyntaxError,
  );
})();
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.doesNotReject(Promise.reject(new TypeError('Wrong value')))
  .then(() =&gt; {
    // ...
  });
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.doesNotReject(Promise.reject(new TypeError('Wrong value')))
  .then(() =&gt; {
    // ...
  });
</code></pre>
<h2><code>assert.doesNotThrow(fn[, error][, message])</code></h2>
<ul>
<li><code>fn</code> {Function}</li>
<li><code>error</code> {RegExp|Function}</li>
<li><code>message</code> {string}</li>
</ul>
<p>Asserts that the function <code>fn</code> does not throw an error.</p>
<p>Using <code>assert.doesNotThrow()</code> is actually not useful because there
is no benefit in catching an error and then rethrowing it. Instead, consider
adding a comment next to the specific code path that should not throw and keep
error messages as expressive as possible.</p>
<p>When <code>assert.doesNotThrow()</code> is called, it will immediately call the <code>fn</code>
function.</p>
<p>If an error is thrown and it is the same type as that specified by the <code>error</code>
parameter, then an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown. If the error is of a
different type, or if the <code>error</code> parameter is undefined, the error is
propagated back to the caller.</p>
<p>If specified, <code>error</code> can be a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"><code>Class</code></a>, {RegExp}, or a validation
function. See <a href="#assertthrowsfn-error-message"><code>assert.throws()</code></a> for more details.</p>
<p>The following, for instance, will throw the {TypeError} because there is no
matching error type in the assertion:</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  SyntaxError,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  SyntaxError,
);
</code></pre>
<p>However, the following will result in an <a href="#class-assertassertionerror"><code>AssertionError</code></a> with the message
'Got unwanted exception...':</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  TypeError,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  TypeError,
);
</code></pre>
<p>If an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown and a value is provided for the <code>message</code>
parameter, the value of <code>message</code> will be appended to the <a href="#class-assertassertionerror"><code>AssertionError</code></a>
message:</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  /Wrong value/,
  'Whoops',
);
// Throws: AssertionError: Got unwanted exception: Whoops
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.doesNotThrow(
  () =&gt; {
    throw new TypeError('Wrong value');
  },
  /Wrong value/,
  'Whoops',
);
// Throws: AssertionError: Got unwanted exception: Whoops
</code></pre>
<h2><code>assert.equal(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p><strong>Strict assertion mode</strong></p>
<p>An alias of <a href="#assertstrictequalactual-expected-message"><code>assert.strictEqual()</code></a>.</p>
<p><strong>Legacy assertion mode</strong></p>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="#assertstrictequalactual-expected-message"><code>assert.strictEqual()</code></a> instead.</p>
</blockquote>
<p>Tests shallow, coercive equality between the <code>actual</code> and <code>expected</code> parameters
using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality"><code>==</code> operator</a>. <code>NaN</code> is specially handled
and treated as being identical if both sides are <code>NaN</code>.</p>
<pre><code class="language-mjs">import assert from 'node:assert';

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'
assert.equal(NaN, NaN);
// OK

assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({ a: { b: 1 } }, { a: { b: 1 } });
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'
assert.equal(NaN, NaN);
// OK

assert.equal(1, 2);
// AssertionError: 1 == 2
assert.equal({ a: { b: 1 } }, { a: { b: 1 } });
// AssertionError: { a: { b: 1 } } == { a: { b: 1 } }
</code></pre>
<p>If the values are not equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned. If the <code>message</code>
parameter is an instance of {Error} then it will be thrown instead of the
<code>AssertionError</code>.</p>
<h2><code>assert.fail([message])</code></h2>
<ul>
<li><code>message</code> {string|Error} <strong>Default:</strong> <code>'Failed'</code></li>
</ul>
<p>Throws an <a href="#class-assertassertionerror"><code>AssertionError</code></a> with the provided error message or a default
error message. If the <code>message</code> parameter is an instance of {Error} then
it will be thrown instead of the <a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

assert.fail('boom');
// AssertionError [ERR_ASSERTION]: boom

assert.fail(new TypeError('need array'));
// TypeError: need array
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

assert.fail('boom');
// AssertionError [ERR_ASSERTION]: boom

assert.fail(new TypeError('need array'));
// TypeError: need array
</code></pre>
<h2><code>assert.ifError(value)</code></h2>
<ul>
<li><code>value</code> {any}</li>
</ul>
<p>Throws <code>value</code> if <code>value</code> is not <code>undefined</code> or <code>null</code>. This is useful when
testing the <code>error</code> argument in callbacks. The stack trace contains all frames
from the error passed to <code>ifError()</code> including the potential new frames for
<code>ifError()</code> itself.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.ifError(null);
// OK
assert.ifError(0);
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 0
assert.ifError('error');
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'error'
assert.ifError(new Error());
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Error

// Create some random error frames.
let err;
(function errorFrame() {
  err = new Error('test error');
})();

(function ifErrorFrame() {
  assert.ifError(err);
})();
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: test error
//     at ifErrorFrame
//     at errorFrame
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.ifError(null);
// OK
assert.ifError(0);
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 0
assert.ifError('error');
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'error'
assert.ifError(new Error());
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Error

// Create some random error frames.
let err;
(function errorFrame() {
  err = new Error('test error');
})();

(function ifErrorFrame() {
  assert.ifError(err);
})();
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: test error
//     at ifErrorFrame
//     at errorFrame
</code></pre>
<h2><code>assert.match(string, regexp[, message])</code></h2>
<ul>
<li><code>string</code> {string}</li>
<li><code>regexp</code> {RegExp}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Expects the <code>string</code> input to match the regular expression.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.match('I will fail', /pass/);
// AssertionError [ERR_ASSERTION]: The input did not match the regular ...

assert.match(123, /pass/);
// AssertionError [ERR_ASSERTION]: The &quot;string&quot; argument must be of type string.

assert.match('I will pass', /pass/);
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.match('I will fail', /pass/);
// AssertionError [ERR_ASSERTION]: The input did not match the regular ...

assert.match(123, /pass/);
// AssertionError [ERR_ASSERTION]: The &quot;string&quot; argument must be of type string.

assert.match('I will pass', /pass/);
// OK
</code></pre>
<p>If the values do not match, or if the <code>string</code> argument is of another type than
<code>string</code>, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code> property set equal
to the value of the <code>message</code> parameter. If the <code>message</code> parameter is
undefined, a default error message is assigned. If the <code>message</code> parameter is an
instance of {Error} then it will be thrown instead of the
<a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<h2><code>assert.notDeepEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p><strong>Strict assertion mode</strong></p>
<p>An alias of <a href="#assertnotdeepstrictequalactual-expected-message"><code>assert.notDeepStrictEqual()</code></a>.</p>
<p><strong>Legacy assertion mode</strong></p>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="#assertnotdeepstrictequalactual-expected-message"><code>assert.notDeepStrictEqual()</code></a> instead.</p>
</blockquote>
<p>Tests for any deep inequality. Opposite of <a href="#assertdeepequalactual-expected-message"><code>assert.deepEqual()</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert';

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = { __proto__: obj1 };

assert.notDeepEqual(obj1, obj1);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj2);
// OK

assert.notDeepEqual(obj1, obj3);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj4);
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};
const obj4 = { __proto__: obj1 };

assert.notDeepEqual(obj1, obj1);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj2);
// OK

assert.notDeepEqual(obj1, obj3);
// AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }

assert.notDeepEqual(obj1, obj4);
// OK
</code></pre>
<p>If the values are deeply equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a
<code>message</code> property set equal to the value of the <code>message</code> parameter. If the
<code>message</code> parameter is undefined, a default error message is assigned. If the
<code>message</code> parameter is an instance of {Error} then it will be thrown
instead of the <code>AssertionError</code>.</p>
<h2><code>assert.notDeepStrictEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Tests for deep strict inequality. Opposite of <a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// OK
</code></pre>
<p>If the values are deeply and strictly equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown
with a <code>message</code> property set equal to the value of the <code>message</code> parameter. If
the <code>message</code> parameter is undefined, a default error message is assigned. If
the <code>message</code> parameter is an instance of {Error} then it will be thrown
instead of the <a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<h2><code>assert.notEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p><strong>Strict assertion mode</strong></p>
<p>An alias of <a href="#assertnotstrictequalactual-expected-message"><code>assert.notStrictEqual()</code></a>.</p>
<p><strong>Legacy assertion mode</strong></p>
<blockquote>
<p>Stability: 3 - Legacy: Use <a href="#assertnotstrictequalactual-expected-message"><code>assert.notStrictEqual()</code></a> instead.</p>
</blockquote>
<p>Tests shallow, coercive inequality with the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality"><code>!=</code> operator</a>. <code>NaN</code> is
specially handled and treated as being identical if both sides are <code>NaN</code>.</p>
<pre><code class="language-mjs">import assert from 'node:assert';

assert.notEqual(1, 2);
// OK

assert.notEqual(1, 1);
// AssertionError: 1 != 1

assert.notEqual(1, '1');
// AssertionError: 1 != '1'
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

assert.notEqual(1, 2);
// OK

assert.notEqual(1, 1);
// AssertionError: 1 != 1

assert.notEqual(1, '1');
// AssertionError: 1 != '1'
</code></pre>
<p>If the values are equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is undefined, a default error message is assigned. If the <code>message</code>
parameter is an instance of {Error} then it will be thrown instead of the
<code>AssertionError</code>.</p>
<h2><code>assert.notStrictEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Tests strict inequality between the <code>actual</code> and <code>expected</code> parameters as
determined by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is()</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.notStrictEqual(1, 2);
// OK

assert.notStrictEqual(1, 1);
// AssertionError [ERR_ASSERTION]: Expected &quot;actual&quot; to be strictly unequal to:
//
// 1

assert.notStrictEqual(1, '1');
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.notStrictEqual(1, 2);
// OK

assert.notStrictEqual(1, 1);
// AssertionError [ERR_ASSERTION]: Expected &quot;actual&quot; to be strictly unequal to:
//
// 1

assert.notStrictEqual(1, '1');
// OK
</code></pre>
<p>If the values are strictly equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a
<code>message</code> property set equal to the value of the <code>message</code> parameter. If the
<code>message</code> parameter is undefined, a default error message is assigned. If the
<code>message</code> parameter is an instance of {Error} then it will be thrown
instead of the <code>AssertionError</code>.</p>
<h2><code>assert.ok(value[, message])</code></h2>
<ul>
<li><code>value</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Tests if <code>value</code> is truthy. It is equivalent to
<code>assert.equal(!!value, true, message)</code>.</p>
<p>If <code>value</code> is not truthy, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a <code>message</code>
property set equal to the value of the <code>message</code> parameter. If the <code>message</code>
parameter is <code>undefined</code>, a default error message is assigned. If the <code>message</code>
parameter is an instance of {Error} then it will be thrown instead of the
<code>AssertionError</code>.
If no arguments are passed in at all <code>message</code> will be set to the string:
<code>'No value argument passed to `assert.ok()`'</code>.</p>
<p>Be aware that in the <code>repl</code> the error message will be different to the one
thrown in a file! See below for further details.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.ok(true);
// OK
assert.ok(1);
// OK

assert.ok();
// AssertionError: No value argument passed to `assert.ok()`

assert.ok(false, 'it\'s false');
// AssertionError: it's false

// In the repl:
assert.ok(typeof 123 === 'string');
// AssertionError: false == true

// In a file (e.g. test.js):
assert.ok(typeof 123 === 'string');
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(typeof 123 === 'string')

assert.ok(false);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(false)

assert.ok(0);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(0)
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.ok(true);
// OK
assert.ok(1);
// OK

assert.ok();
// AssertionError: No value argument passed to `assert.ok()`

assert.ok(false, 'it\'s false');
// AssertionError: it's false

// In the repl:
assert.ok(typeof 123 === 'string');
// AssertionError: false == true

// In a file (e.g. test.js):
assert.ok(typeof 123 === 'string');
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(typeof 123 === 'string')

assert.ok(false);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(false)

assert.ok(0);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert.ok(0)
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

// Using `assert()` works the same:
assert(2 + 2 &gt; 5);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert(2 + 2 &gt; 5)
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

// Using `assert()` works the same:
assert(2 + 2 &gt; 5);
// AssertionError: The expression evaluated to a falsy value:
//
//   assert(2 + 2 &gt; 5)
</code></pre>
<h2><code>assert.rejects(asyncFn[, error][, message])</code></h2>
<ul>
<li><code>asyncFn</code> {Function|Promise}</li>
<li><code>error</code> {RegExp|Function|Object|Error}</li>
<li><code>message</code> {string}</li>
<li>Returns: {Promise}</li>
</ul>
<p>Awaits the <code>asyncFn</code> promise or, if <code>asyncFn</code> is a function, immediately
calls the function and awaits the returned promise to complete. It will then
check that the promise is rejected.</p>
<p>If <code>asyncFn</code> is a function and it throws an error synchronously,
<code>assert.rejects()</code> will return a rejected <code>Promise</code> with that error. If the
function does not return a promise, <code>assert.rejects()</code> will return a rejected
<code>Promise</code> with an <a href="errors.md#err_invalid_return_value"><code>ERR_INVALID_RETURN_VALUE</code></a> error. In both cases the error
handler is skipped.</p>
<p>Besides the async nature to await the completion behaves identically to
<a href="#assertthrowsfn-error-message"><code>assert.throws()</code></a>.</p>
<p>If specified, <code>error</code> can be a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"><code>Class</code></a>, {RegExp}, a validation function,
an object where each property will be tested for, or an instance of error where
each property will be tested for including the non-enumerable <code>message</code> and
<code>name</code> properties.</p>
<p>If specified, <code>message</code> will be the message provided by the <a href="#class-assertassertionerror"><code>AssertionError</code></a>
if the <code>asyncFn</code> fails to reject.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

await assert.rejects(
  async () =&gt; {
    throw new TypeError('Wrong value');
  },
  {
    name: 'TypeError',
    message: 'Wrong value',
  },
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

(async () =&gt; {
  await assert.rejects(
    async () =&gt; {
      throw new TypeError('Wrong value');
    },
    {
      name: 'TypeError',
      message: 'Wrong value',
    },
  );
})();
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

await assert.rejects(
  async () =&gt; {
    throw new TypeError('Wrong value');
  },
  (err) =&gt; {
    assert.strictEqual(err.name, 'TypeError');
    assert.strictEqual(err.message, 'Wrong value');
    return true;
  },
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

(async () =&gt; {
  await assert.rejects(
    async () =&gt; {
      throw new TypeError('Wrong value');
    },
    (err) =&gt; {
      assert.strictEqual(err.name, 'TypeError');
      assert.strictEqual(err.message, 'Wrong value');
      return true;
    },
  );
})();
</code></pre>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.rejects(
  Promise.reject(new Error('Wrong value')),
  Error,
).then(() =&gt; {
  // ...
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.rejects(
  Promise.reject(new Error('Wrong value')),
  Error,
).then(() =&gt; {
  // ...
});
</code></pre>
<p><code>error</code> cannot be a string. If a string is provided as the second
argument, then <code>error</code> is assumed to be omitted and the string will be used for
<code>message</code> instead. This can lead to easy-to-miss mistakes. Please read the
example in <a href="#assertthrowsfn-error-message"><code>assert.throws()</code></a> carefully if using a string as the second
argument gets considered.</p>
<h2><code>assert.strictEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function} Postfix <code>printf</code>-like arguments in case
it's used as format string.
If message is a function, it is called in case of a comparison failure. The
function receives the <code>actual</code> and <code>expected</code> arguments and has to return a
string that is going to be used as error message.
<code>printf</code>-like format strings and functions are beneficial for performance
reasons in case arguments are passed through. In addition, it allows nice
formatting with ease.</li>
</ul>
<p>Tests strict equality between the <code>actual</code> and <code>expected</code> parameters as
determined by <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is()</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.strictEqual(1, 2);
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
//
// 1 !== 2

assert.strictEqual(1, 1);
// OK

assert.strictEqual('Hello foobar', 'Hello World!');
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
// + actual - expected
//
// + 'Hello foobar'
// - 'Hello World!'
//          ^

const apples = 1;
const oranges = 2;
assert.strictEqual(apples, oranges, `apples ${apples} !== oranges ${oranges}`);
// AssertionError [ERR_ASSERTION]: apples 1 !== oranges 2

assert.strictEqual(apples, oranges, 'apples %s !== oranges %s', apples, oranges);
// AssertionError [ERR_ASSERTION]: apples 1 !== oranges 2

assert.strictEqual(1, '1', new TypeError('Inputs are not identical'));
// TypeError: Inputs are not identical

assert.strictEqual(apples, oranges, (actual, expected) =&gt; {
  // Do 'heavy' computations
  return `I expected ${expected} but I got ${actual}`;
});
// AssertionError [ERR_ASSERTION]: I expected oranges but I got apples
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.strictEqual(1, 2);
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
//
// 1 !== 2

assert.strictEqual(1, 1);
// OK

assert.strictEqual('Hello foobar', 'Hello World!');
// AssertionError [ERR_ASSERTION]: Expected inputs to be strictly equal:
// + actual - expected
//
// + 'Hello foobar'
// - 'Hello World!'
//          ^

const apples = 1;
const oranges = 2;
assert.strictEqual(apples, oranges, `apples ${apples} !== oranges ${oranges}`);
// AssertionError [ERR_ASSERTION]: apples 1 !== oranges 2

assert.strictEqual(apples, oranges, 'apples %s !== oranges %s', apples, oranges);
// AssertionError [ERR_ASSERTION]: apples 1 !== oranges 2

assert.strictEqual(1, '1', new TypeError('Inputs are not identical'));
// TypeError: Inputs are not identical

assert.strictEqual(apples, oranges, (actual, expected) =&gt; {
  // Do 'heavy' computations
  return `I expected ${expected} but I got ${actual}`;
});
// AssertionError [ERR_ASSERTION]: I expected oranges but I got apples
</code></pre>
<p>If the values are not strictly equal, an <a href="#class-assertassertionerror"><code>AssertionError</code></a> is thrown with a
<code>message</code> property set equal to the value of the <code>message</code> parameter. If the
<code>message</code> parameter is undefined, a default error message is assigned. If the
<code>message</code> parameter is an instance of {Error} then it will be thrown
instead of the <a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<h2><code>assert.throws(fn[, error][, message])</code></h2>
<ul>
<li><code>fn</code> {Function}</li>
<li><code>error</code> {RegExp|Function|Object|Error}</li>
<li><code>message</code> {string}</li>
</ul>
<p>Expects the function <code>fn</code> to throw an error.</p>
<p>If specified, <code>error</code> can be a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"><code>Class</code></a>, {RegExp}, a validation function,
a validation object where each property will be tested for strict deep equality,
or an instance of error where each property will be tested for strict deep
equality including the non-enumerable <code>message</code> and <code>name</code> properties. When
using an object, it is also possible to use a regular expression, when
validating against a string property. See below for examples.</p>
<p>If specified, <code>message</code> will be appended to the message provided by the
<code>AssertionError</code> if the <code>fn</code> call fails to throw or in case the error validation
fails.</p>
<p>Custom validation object/error instance:</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

const err = new TypeError('Wrong value');
err.code = 404;
err.foo = 'bar';
err.info = {
  nested: true,
  baz: 'text',
};
err.reg = /abc/i;

assert.throws(
  () =&gt; {
    throw err;
  },
  {
    name: 'TypeError',
    message: 'Wrong value',
    info: {
      nested: true,
      baz: 'text',
    },
    // Only properties on the validation object will be tested for.
    // Using nested objects requires all properties to be present. Otherwise
    // the validation is going to fail.
  },
);

// Using regular expressions to validate error properties:
assert.throws(
  () =&gt; {
    throw err;
  },
  {
    // The `name` and `message` properties are strings and using regular
    // expressions on those will match against the string. If they fail, an
    // error is thrown.
    name: /^TypeError$/,
    message: /Wrong/,
    foo: 'bar',
    info: {
      nested: true,
      // It is not possible to use regular expressions for nested properties!
      baz: 'text',
    },
    // The `reg` property contains a regular expression and only if the
    // validation object contains an identical regular expression, it is going
    // to pass.
    reg: /abc/i,
  },
);

// Fails due to the different `message` and `name` properties:
assert.throws(
  () =&gt; {
    const otherErr = new Error('Not found');
    // Copy all enumerable properties from `err` to `otherErr`.
    for (const [key, value] of Object.entries(err)) {
      otherErr[key] = value;
    }
    throw otherErr;
  },
  // The error's `message` and `name` properties will also be checked when using
  // an error as validation object.
  err,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

const err = new TypeError('Wrong value');
err.code = 404;
err.foo = 'bar';
err.info = {
  nested: true,
  baz: 'text',
};
err.reg = /abc/i;

assert.throws(
  () =&gt; {
    throw err;
  },
  {
    name: 'TypeError',
    message: 'Wrong value',
    info: {
      nested: true,
      baz: 'text',
    },
    // Only properties on the validation object will be tested for.
    // Using nested objects requires all properties to be present. Otherwise
    // the validation is going to fail.
  },
);

// Using regular expressions to validate error properties:
assert.throws(
  () =&gt; {
    throw err;
  },
  {
    // The `name` and `message` properties are strings and using regular
    // expressions on those will match against the string. If they fail, an
    // error is thrown.
    name: /^TypeError$/,
    message: /Wrong/,
    foo: 'bar',
    info: {
      nested: true,
      // It is not possible to use regular expressions for nested properties!
      baz: 'text',
    },
    // The `reg` property contains a regular expression and only if the
    // validation object contains an identical regular expression, it is going
    // to pass.
    reg: /abc/i,
  },
);

// Fails due to the different `message` and `name` properties:
assert.throws(
  () =&gt; {
    const otherErr = new Error('Not found');
    // Copy all enumerable properties from `err` to `otherErr`.
    for (const [key, value] of Object.entries(err)) {
      otherErr[key] = value;
    }
    throw otherErr;
  },
  // The error's `message` and `name` properties will also be checked when using
  // an error as validation object.
  err,
);
</code></pre>
<p>Validate instanceof using constructor:</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  Error,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  Error,
);
</code></pre>
<p>Validate error message using {RegExp}:</p>
<p>Using a regular expression runs <code>.toString</code> on the error object, and will
therefore also include the error name.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  /^Error: Wrong value$/,
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  /^Error: Wrong value$/,
);
</code></pre>
<p>Custom error validation:</p>
<p>The function must return <code>true</code> to indicate all internal validations passed.
It will otherwise fail with an <a href="#class-assertassertionerror"><code>AssertionError</code></a>.</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  (err) =&gt; {
    assert(err instanceof Error);
    assert(/value/.test(err));
    // Avoid returning anything from validation functions besides `true`.
    // Otherwise, it's not clear what part of the validation failed. Instead,
    // throw an error about the specific validation that failed (as done in this
    // example) and add as much helpful debugging information to that error as
    // possible.
    return true;
  },
  'unexpected error',
);
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

assert.throws(
  () =&gt; {
    throw new Error('Wrong value');
  },
  (err) =&gt; {
    assert(err instanceof Error);
    assert(/value/.test(err));
    // Avoid returning anything from validation functions besides `true`.
    // Otherwise, it's not clear what part of the validation failed. Instead,
    // throw an error about the specific validation that failed (as done in this
    // example) and add as much helpful debugging information to that error as
    // possible.
    return true;
  },
  'unexpected error',
);
</code></pre>
<p><code>error</code> cannot be a string. If a string is provided as the second
argument, then <code>error</code> is assumed to be omitted and the string will be used for
<code>message</code> instead. This can lead to easy-to-miss mistakes. Using the same
message as the thrown error message is going to result in an
<code>ERR_AMBIGUOUS_ARGUMENT</code> error. Please read the example below carefully if using
a string as the second argument gets considered:</p>
<pre><code class="language-mjs">import assert from 'node:assert/strict';

function throwingFirst() {
  throw new Error('First');
}

function throwingSecond() {
  throw new Error('Second');
}

function notThrowing() {}

// The second argument is a string and the input function threw an Error.
// The first case will not throw as it does not match for the error message
// thrown by the input function!
assert.throws(throwingFirst, 'Second');
// In the next example the message has no benefit over the message from the
// error and since it is not clear if the user intended to actually match
// against the error message, Node.js throws an `ERR_AMBIGUOUS_ARGUMENT` error.
assert.throws(throwingSecond, 'Second');
// TypeError [ERR_AMBIGUOUS_ARGUMENT]

// The string is only used (as message) in case the function does not throw:
assert.throws(notThrowing, 'Second');
// AssertionError [ERR_ASSERTION]: Missing expected exception: Second

// If it was intended to match for the error message do this instead:
// It does not throw because the error messages match.
assert.throws(throwingSecond, /Second$/);

// If the error message does not match, an AssertionError is thrown.
assert.throws(throwingFirst, /Second$/);
// AssertionError [ERR_ASSERTION]
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert/strict');

function throwingFirst() {
  throw new Error('First');
}

function throwingSecond() {
  throw new Error('Second');
}

function notThrowing() {}

// The second argument is a string and the input function threw an Error.
// The first case will not throw as it does not match for the error message
// thrown by the input function!
assert.throws(throwingFirst, 'Second');
// In the next example the message has no benefit over the message from the
// error and since it is not clear if the user intended to actually match
// against the error message, Node.js throws an `ERR_AMBIGUOUS_ARGUMENT` error.
assert.throws(throwingSecond, 'Second');
// TypeError [ERR_AMBIGUOUS_ARGUMENT]

// The string is only used (as message) in case the function does not throw:
assert.throws(notThrowing, 'Second');
// AssertionError [ERR_ASSERTION]: Missing expected exception: Second

// If it was intended to match for the error message do this instead:
// It does not throw because the error messages match.
assert.throws(throwingSecond, /Second$/);

// If the error message does not match, an AssertionError is thrown.
assert.throws(throwingFirst, /Second$/);
// AssertionError [ERR_ASSERTION]
</code></pre>
<p>Due to the confusing error-prone notation, avoid a string as the second
argument.</p>
<h2><code>assert.partialDeepStrictEqual(actual, expected[, message])</code></h2>
<ul>
<li><code>actual</code> {any}</li>
<li><code>expected</code> {any}</li>
<li><code>message</code> {string|Error|Function}</li>
</ul>
<p>Tests for partial deep equality between the <code>actual</code> and <code>expected</code> parameters.
&quot;Deep&quot; equality means that the enumerable &quot;own&quot; properties of child objects
are recursively evaluated also by the following rules. &quot;Partial&quot; equality means
that only properties that exist on the <code>expected</code> parameter are going to be
compared.</p>
<p>This method always passes the same test cases as <a href="#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>,
behaving as a super set of it.</p>
<h3>Comparison details</h3>
<ul>
<li>Primitive values are compared using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is()</code></a>.</li>
<li><a href="https://tc39.github.io/ecma262/#sec-object.prototype.tostring">Type tags</a> of objects should be the same.</li>
<li><a href="https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots"><code>[[Prototype]]</code></a> of objects are not compared.</li>
<li>Only <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties">enumerable &quot;own&quot; properties</a> are considered.</li>
<li>{Error} names, messages, causes, and errors are always compared,
even if these are not enumerable properties.
<code>errors</code> is also compared.</li>
<li>Enumerable own {Symbol} properties are compared as well.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#primitive_values">Object wrappers</a> are compared both as objects and unwrapped values.</li>
<li><code>Object</code> properties are compared unordered.</li>
<li>{Map} keys and {Set} items are compared unordered.</li>
<li>Recursion stops when both sides differ or both sides encounter a circular
reference.</li>
<li>{WeakMap}, {WeakSet} and {Promise} instances are <strong>not</strong> compared
structurally. They are only equal if they reference the same object. Any
comparison between different <code>WeakMap</code>, <code>WeakSet</code>, or <code>Promise</code> instances
will result in inequality, even if they contain the same content.</li>
<li>{RegExp} lastIndex, flags, and source are always compared, even if these
are not enumerable properties.</li>
<li>Holes in sparse arrays are ignored.</li>
</ul>
<pre><code class="language-mjs">import assert from 'node:assert';

assert.partialDeepStrictEqual(
  { a: { b: { c: 1 } } },
  { a: { b: { c: 1 } } },
);
// OK

assert.partialDeepStrictEqual(
  { a: 1, b: 2, c: 3 },
  { b: 2 },
);
// OK

assert.partialDeepStrictEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 8],
);
// OK

assert.partialDeepStrictEqual(
  new Set([{ a: 1 }, { b: 1 }]),
  new Set([{ a: 1 }]),
);
// OK

assert.partialDeepStrictEqual(
  new Map([['key1', 'value1'], ['key2', 'value2']]),
  new Map([['key2', 'value2']]),
);
// OK

assert.partialDeepStrictEqual(123n, 123n);
// OK

assert.partialDeepStrictEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [5, 4, 8],
);
// AssertionError

assert.partialDeepStrictEqual(
  { a: 1 },
  { a: 1, b: 2 },
);
// AssertionError

assert.partialDeepStrictEqual(
  { a: { b: 2 } },
  { a: { b: '2' } },
);
// AssertionError
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

assert.partialDeepStrictEqual(
  { a: { b: { c: 1 } } },
  { a: { b: { c: 1 } } },
);
// OK

assert.partialDeepStrictEqual(
  { a: 1, b: 2, c: 3 },
  { b: 2 },
);
// OK

assert.partialDeepStrictEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 8],
);
// OK

assert.partialDeepStrictEqual(
  new Set([{ a: 1 }, { b: 1 }]),
  new Set([{ a: 1 }]),
);
// OK

assert.partialDeepStrictEqual(
  new Map([['key1', 'value1'], ['key2', 'value2']]),
  new Map([['key2', 'value2']]),
);
// OK

assert.partialDeepStrictEqual(123n, 123n);
// OK

assert.partialDeepStrictEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [5, 4, 8],
);
// AssertionError

assert.partialDeepStrictEqual(
  { a: 1 },
  { a: 1, b: 2 },
);
// AssertionError

assert.partialDeepStrictEqual(
  { a: { b: 2 } },
  { a: { b: '2' } },
);
// AssertionError
</code></pre>
