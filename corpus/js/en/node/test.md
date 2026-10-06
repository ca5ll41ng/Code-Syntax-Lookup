---
id: "js-en-function-node-test"
language: "js"
lang: "en"
category: "function"
name: "node:test"
title: "Test runner"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/test.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Test runner

<h1>Test runner</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:test</code> module facilitates the creation of JavaScript tests.
To access it:</p>
<pre><code class="language-mjs">import test from 'node:test';
</code></pre>
<pre><code class="language-cjs">const test = require('node:test');
</code></pre>
<p>This module is only available under the <code>node:</code> scheme.</p>
<p>Tests created via the <code>test</code> module consist of a single function that is
processed in one of three ways:</p>
<ol>
<li>A synchronous function that is considered failing if it throws an exception,
and is considered passing otherwise.</li>
<li>A function that returns a <code>Promise</code> that is considered failing if the
<code>Promise</code> rejects, and is considered passing if the <code>Promise</code> fulfills.</li>
<li>A function that receives a callback function. If the callback receives any
truthy value as its first argument, the test is considered failing. If a
falsy value is passed as the first argument to the callback, the test is
considered passing. If the test function receives a callback function and
also returns a <code>Promise</code>, the test will fail.</li>
</ol>
<p>The following example illustrates how tests are written using the
<code>test</code> module.</p>
<pre><code class="language-js">test('synchronous passing test', (t) =&gt; {
  // This test passes because it does not throw an exception.
  assert.strictEqual(1, 1);
});

test('synchronous failing test', (t) =&gt; {
  // This test fails because it throws an exception.
  assert.strictEqual(1, 2);
});

test('asynchronous passing test', async (t) =&gt; {
  // This test passes because the Promise returned by the async
  // function is settled and not rejected.
  assert.strictEqual(1, 1);
});

test('asynchronous failing test', async (t) =&gt; {
  // This test fails because the Promise returned by the async
  // function is rejected.
  assert.strictEqual(1, 2);
});

test('failing test using Promises', (t) =&gt; {
  // Promises can be used directly as well.
  return new Promise((resolve, reject) =&gt; {
    setImmediate(() =&gt; {
      reject(new Error('this will cause the test to fail'));
    });
  });
});

test('callback passing test', (t, done) =&gt; {
  // done() is the callback function. When the setImmediate() runs, it invokes
  // done() with no arguments.
  setImmediate(done);
});

test('callback failing test', (t, done) =&gt; {
  // When the setImmediate() runs, done() is invoked with an Error object and
  // the test fails.
  setImmediate(() =&gt; {
    done(new Error('callback failure'));
  });
});
</code></pre>
<p>If any tests fail, the process exit code is set to <code>1</code>.</p>
<h2>Subtests</h2>
<p>The test context's <code>test()</code> method allows subtests to be created.
It allows you to structure your tests in a hierarchical manner,
where you can create nested tests within a larger test.
This method behaves identically to the top level <code>test()</code> function.
The following example demonstrates the creation of a
top level test with two subtests.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  await t.test('subtest 1', (t) =&gt; {
    assert.strictEqual(1, 1);
  });

  await t.test('subtest 2', (t) =&gt; {
    assert.strictEqual(2, 2);
  });
});
</code></pre>
<blockquote>
<p><strong>Note:</strong> <code>beforeEach</code> and <code>afterEach</code> hooks are triggered
between each subtest execution.</p>
</blockquote>
<p>In this example, <code>await</code> is used to ensure that both subtests have completed.
This is necessary because tests do not wait for their subtests to
complete, unlike tests created within suites.
Any subtests that are still outstanding when their parent finishes
are cancelled and treated as failures. Any subtest failures cause the parent
test to fail.</p>
<h2>Rerunning failed tests</h2>
<p>The test runner supports persisting the state of the run to a file, allowing
the test runner to rerun failed tests without having to re-run the entire test suite.
Use the <a href="cli.md#--test-rerun-failures"><code>--test-rerun-failures</code></a> command-line option to specify a file path where the
state of the run is stored. if the state file does not exist, the test runner will
create it.
the state file is a JSON file that contains an array of run attempts.
Each run attempt is an object mapping successful tests to the attempt they have passed in.
The key identifying a test in this map is the test file path, with the line and column where the test is defined.
in a case where a test defined in a specific location is run multiple times,
for example within a function or a loop,
a counter will be appended to the key, to disambiguate the test runs.
note changing the order of test execution or the location of a test can lead the test runner
to consider tests as passed on a previous attempt,
meaning <code>--test-rerun-failures</code> should be used when tests run in a deterministic order.</p>
<p>example of a state file:</p>
<pre><code class="language-json">[
  {
    &quot;test.js:10:5&quot;: { &quot;passed_on_attempt&quot;: 0, &quot;name&quot;: &quot;test 1&quot; }
  },
  {
    &quot;test.js:10:5&quot;: { &quot;passed_on_attempt&quot;: 0, &quot;name&quot;: &quot;test 1&quot; },
    &quot;test.js:20:5&quot;: { &quot;passed_on_attempt&quot;: 1, &quot;name&quot;: &quot;test 2&quot; }
  }
]
</code></pre>
<p>in this example, there are two run attempts, with two tests defined in <code>test.js</code>,
the first test succeeded on the first attempt, and the second test succeeded on the second attempt.</p>
<p>When the <code>--test-rerun-failures</code> option is used, the test runner will only run tests that have not yet passed.</p>
<pre><code class="language-bash">node --test-rerun-failures /path/to/state/file
</code></pre>
<h2><code>describe()</code> and <code>it()</code> aliases</h2>
<p>Suites and tests can also be written using the <code>describe()</code> and <code>it()</code>
functions. <a href="#describename-options-fn"><code>describe()</code></a> is an alias for <a href="#suitename-options-fn"><code>suite()</code></a>, and <a href="#itname-options-fn"><code>it()</code></a> is an
alias for <a href="#testname-options-fn"><code>test()</code></a>.</p>
<pre><code class="language-js">describe('A thing', () =&gt; {
  it('should work', () =&gt; {
    assert.strictEqual(1, 1);
  });

  it('should be ok', () =&gt; {
    assert.strictEqual(2, 2);
  });

  describe('a nested thing', () =&gt; {
    it('should work', () =&gt; {
      assert.strictEqual(3, 3);
    });
  });
});
</code></pre>
<p><code>describe()</code> and <code>it()</code> are imported from the <code>node:test</code> module.</p>
<pre><code class="language-mjs">import { describe, it } from 'node:test';
</code></pre>
<pre><code class="language-cjs">const { describe, it } = require('node:test');
</code></pre>
<h2>Skipping tests</h2>
<p>Individual tests can be skipped by passing the <code>skip</code> option to the test, or by
calling the test context's <code>skip()</code> method as shown in the
following example.</p>
<pre><code class="language-js">// The skip option is used, but no message is provided.
test('skip option', { skip: true }, (t) =&gt; {
  // This code is never executed.
});

// The skip option is used, and a message is provided.
test('skip option with message', { skip: 'this is skipped' }, (t) =&gt; {
  // This code is never executed.
});

test('skip() method', (t) =&gt; {
  // Make sure to return here as well if the test contains additional logic.
  t.skip();
});

test('skip() method with message', (t) =&gt; {
  // Make sure to return here as well if the test contains additional logic.
  t.skip('this is skipped');
});
</code></pre>
<h2>TODO tests</h2>
<p>Individual tests can be marked as flaky or incomplete by passing the <code>todo</code>
option to the test, or by calling the test context's <code>todo()</code> method, as shown
in the following example. These tests represent a pending implementation or bug
that needs to be fixed. TODO tests are executed, but are not treated as test
failures, and therefore do not affect the process exit code. If a test is marked
as both TODO and skipped, the TODO option is ignored.</p>
<pre><code class="language-js">// The todo option is used, but no message is provided.
test('todo option', { todo: true }, (t) =&gt; {
  // This code is executed, but not treated as a failure.
  throw new Error('this does not fail the test');
});

// The todo option is used, and a message is provided.
test('todo option with message', { todo: 'this is a todo test' }, (t) =&gt; {
  // This code is executed.
});

test('todo() method', (t) =&gt; {
  t.todo();
});

test('todo() method with message', (t) =&gt; {
  t.todo('this is a todo test and is not treated as a failure');
  throw new Error('this does not fail the test');
});
</code></pre>
<h2>Expecting tests to fail</h2>
<p>This flips the pass/fail reporting for a specific test or suite: a flagged test
case must throw in order to pass, and a flagged test case that does not throw
fails.</p>
<p>In each of the following, <code>doTheThing()</code> fails to return <code>true</code>, but since the
tests are flagged <code>expectFailure</code>, they pass.</p>
<pre><code class="language-js">it.expectFailure('should do the thing', () =&gt; {
  assert.strictEqual(doTheThing(), true);
});

it('should do the thing', { expectFailure: true }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});

it('should do the thing', { expectFailure: 'feature not implemented' }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});
</code></pre>
<p>If the value of <code>expectFailure</code> is a {RegExp|Function|Object|Error}
the tests will pass only if they throw a matching value.
See <a href="assert.md#assertthrowsfn-error-message"><code>assert.throws</code></a> for how each value type is handled.</p>
<p>Each of the following tests fails <em>despite</em> being flagged <code>expectFailure</code>
because the failure does not match the specific <strong>expected</strong> failure.</p>
<pre><code class="language-js">it('fails because regex does not match', {
  expectFailure: /expected message/,
}, () =&gt; {
  throw new Error('different message');
});

it('fails because object matcher does not match', {
  expectFailure: { code: 'ERR_EXPECTED' },
}, () =&gt; {
  const err = new Error('boom');
  err.code = 'ERR_ACTUAL';
  throw err;
});
</code></pre>
<p>To supply both a reason and specific error for <code>expectFailure</code>, use <code>{ label, match }</code>.</p>
<pre><code class="language-js">it('should fail with specific error and reason', {
  expectFailure: {
    label: 'reason for failure',
    match: /error message/,
  },
}, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});
</code></pre>
<p><code>skip</code> and/or <code>todo</code> are mutually exclusive to <code>expectFailure</code>, and <code>skip</code> or <code>todo</code>
will &quot;win&quot; when both are applied (<code>skip</code> wins against both, and <code>todo</code> wins
against <code>expectFailure</code>).</p>
<p>These tests will be skipped (and not run):</p>
<pre><code class="language-js">it.expectFailure('should do the thing', { skip: true }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});

it.skip('should do the thing', { expectFailure: true }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});
</code></pre>
<p>These tests will be marked &quot;todo&quot; (silencing errors):</p>
<pre><code class="language-js">it.expectFailure('should do the thing', { todo: true }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});

it.todo('should do the thing', { expectFailure: true }, () =&gt; {
  assert.strictEqual(doTheThing(), true);
});
</code></pre>
<h2><code>only</code> tests</h2>
<p>If Node.js is started with the <a href="cli.md#--test-only"><code>--test-only</code></a> command-line option, or test
isolation is disabled, it is possible to skip all tests except for a selected
subset by passing the <code>only</code> option to the tests that should run. When a test
with the <code>only</code> option is set, all subtests are also run.
If a suite has the <code>only</code> option set, all tests within the suite are run,
unless it has descendants with the <code>only</code> option set, in which case only those
tests are run.</p>
<p>When using <a href="#subtests">subtests</a> within a <code>test()</code>/<code>it()</code>, it is required to mark
all ancestor tests with the <code>only</code> option to run only a
selected subset of tests.</p>
<p>The test context's <code>runOnly()</code>
method can be used to implement the same behavior at the subtest level. Tests
that are not executed are omitted from the test runner output.</p>
<pre><code class="language-js">// Assume Node.js is run with the --test-only command-line option.
// The suite's 'only' option is set, so these tests are run.
test('this test is run', { only: true }, async (t) =&gt; {
  // Within this test, all subtests are run by default.
  await t.test('running subtest');

  // The test context can be updated to run subtests with the 'only' option.
  t.runOnly(true);
  await t.test('this subtest is now skipped');
  await t.test('this subtest is run', { only: true });

  // Switch the context back to execute all tests.
  t.runOnly(false);
  await t.test('this subtest is now run');

  // Explicitly do not run these tests.
  await t.test('skipped subtest 3', { only: false });
  await t.test('skipped subtest 4', { skip: true });
});

// The 'only' option is not set, so this test is skipped.
test('this test is not run', () =&gt; {
  // This code is not run.
  throw new Error('fail');
});

describe('a suite', () =&gt; {
  // The 'only' option is set, so this test is run.
  it('this test is run', { only: true }, () =&gt; {
    // This code is run.
  });

  it('this test is not run', () =&gt; {
    // This code is not run.
    throw new Error('fail');
  });
});

describe.only('a suite', () =&gt; {
  // The 'only' option is set, so this test is run.
  it('this test is run', () =&gt; {
    // This code is run.
  });

  it('this test is run', () =&gt; {
    // This code is run.
  });
});
</code></pre>
<h2>Filtering tests by name</h2>
<p>The <a href="cli.md#--test-name-pattern"><code>--test-name-pattern</code></a> command-line option can be used to only run
tests whose name matches the provided pattern, and the
<a href="cli.md#--test-skip-pattern"><code>--test-skip-pattern</code></a> option can be used to skip tests whose name
matches the provided pattern. Test name patterns are interpreted as
JavaScript regular expressions. The <code>--test-name-pattern</code> and
<code>--test-skip-pattern</code> options can be specified multiple times in order to run
nested tests. For each test that is executed, any corresponding test hooks,
such as <code>beforeEach()</code>, are also run. Tests that are not executed are omitted
from the test runner output.</p>
<p>Given the following test file, starting Node.js with the
<code>--test-name-pattern=&quot;test [1-3]&quot;</code> option would cause the test runner to execute
<code>test 1</code>, <code>test 2</code>, and <code>test 3</code>. If <code>test 1</code> did not match the test name
pattern, then its subtests would not execute, despite matching the pattern. The
same set of tests could also be executed by passing <code>--test-name-pattern</code>
multiple times (e.g. <code>--test-name-pattern=&quot;test 1&quot;</code>,
<code>--test-name-pattern=&quot;test 2&quot;</code>, etc.).</p>
<pre><code class="language-js">test('test 1', async (t) =&gt; {
  await t.test('test 2');
  await t.test('test 3');
});

test('Test 4', async (t) =&gt; {
  await t.test('Test 5');
  await t.test('test 6');
});
</code></pre>
<p>Test name patterns can also be specified using regular expression literals. This
allows regular expression flags to be used. In the previous example, starting
Node.js with <code>--test-name-pattern=&quot;/test [4-5]/i&quot;</code> (or <code>--test-skip-pattern=&quot;/test [4-5]/i&quot;</code>)
would match <code>Test 4</code> and <code>Test 5</code> because the pattern is case-insensitive.</p>
<p>To match a single test with a pattern, you can prefix it with all its ancestor
test names separated by space, to ensure it is unique.
For example, given the following test file:</p>
<pre><code class="language-js">describe('test 1', (t) =&gt; {
  it('some test');
});

describe('test 2', (t) =&gt; {
  it('some test');
});
</code></pre>
<p>Starting Node.js with <code>--test-name-pattern=&quot;test 1 some test&quot;</code> would match
only <code>some test</code> in <code>test 1</code>.</p>
<p>Test name patterns do not change the set of files that the test runner executes.</p>
<p>If both <code>--test-name-pattern</code> and <code>--test-skip-pattern</code> are supplied,
tests must satisfy <strong>both</strong> requirements in order to be executed.</p>
<h2>Test tags</h2>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>Tags annotate tests and suites with arbitrary string labels. The
<a href="cli.md#--experimental-test-tag-filtertag"><code>--experimental-test-tag-filter</code></a> CLI flag (or the <code>testTagFilters</code>
option on <a href="#runoptions"><code>run()</code></a>) selects tests by a boolean expression over those
labels.</p>
<p>Tags are an alternative to encoding metadata into test names. They are
useful for cross-cutting axes such as subsystem, speed bucket, flakiness,
or environment, where a name pattern would be brittle.</p>
<h3>Authoring tagged tests</h3>
<p>Pass a <code>tags</code> array on any of <code>test()</code>, <code>it()</code>, <code>suite()</code>, or <code>describe()</code>.
Tags inherit from a suite to its child tests by union—a test inside a
suite tagged <code>['db']</code> that declares its own <code>tags: ['integration']</code>
effectively has both tags.</p>
<pre><code class="language-mjs">import { describe, it } from 'node:test';

describe('database', { tags: ['db'] }, () =&gt; {
  it('reads a row');                                            // tags: ['db']
  it('writes a row', { tags: ['integration'] });                // tags: ['db', 'integration']
  it('reconnects after disconnect', { tags: ['flaky'] });       // tags: ['db', 'flaky']
});
</code></pre>
<pre><code class="language-cjs">const { describe, it } = require('node:test');

describe('database', { tags: ['db'] }, () =&gt; {
  it('reads a row');                                            // tags: ['db']
  it('writes a row', { tags: ['integration'] });                // tags: ['db', 'integration']
  it('reconnects after disconnect', { tags: ['flaky'] });       // tags: ['db', 'flaky']
});
</code></pre>
<p>Tag values must be non-empty strings that contain no whitespace, no
operator characters (<code>&amp; | ! ( ) *</code>), and are not the reserved words
<code>'and'</code>, <code>'or'</code>, or <code>'not'</code> in any casing. Tags are matched
case-insensitively; the canonical form is lowercase. Duplicates within a
single <code>tags</code> array are collapsed on the lowercased form, preserving the
first-seen declaration order.</p>
<p>Hooks (<code>before</code>, <code>after</code>, <code>beforeEach</code>, <code>afterEach</code>) do not declare their
own tags. They run as part of their owning suite, which carries the
suite's tags.</p>
<h3>Filtering syntax</h3>
<p>The filter expression supports:</p>
<ul>
<li>Identifiers—any non-whitespace, non-operator characters. A literal
identifier matches a tag of the same value (case-insensitive).</li>
<li><code>*</code> wildcards inside an identifier match any sequence of characters.
A bare <code>*</code> matches any tagged test.</li>
<li>Boolean operators with two equivalent forms:
<ul>
<li><code>and</code> / <code>&amp;&amp;</code></li>
<li><code>or</code> / <code>||</code></li>
<li><code>not</code> / <code>!</code></li>
</ul>
</li>
<li>Parentheses for grouping.</li>
</ul>
<p>The word forms (<code>and</code>, <code>or</code>, <code>not</code>) require whitespace separation; the
punctuation forms do not.</p>
<h4>Operator precedence</h4>
<p>The expression is evaluated with the standard precedence
<code>not &gt; and &gt; or</code>. Binary operators are left-associative.</p>
<table>
<thead>
<tr>
<th>Expression</th>
<th>Equivalent grouping</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>a or b and c</code></td>
<td><code>a or (b and c)</code></td>
</tr>
<tr>
<td><code>not a and b</code></td>
<td><code>(not a) and b</code></td>
</tr>
</tbody>
</table>
<p>Use parentheses to override:</p>
<table>
<thead>
<tr>
<th>Expression</th>
<th>Selects</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>(unit or smoke) and not slow</code></td>
<td>unit-or-smoke tests that are not also slow</td>
</tr>
<tr>
<td><code>db &amp;&amp; !flaky</code></td>
<td>db tests that are not flaky</td>
</tr>
<tr>
<td><code>*</code></td>
<td>every tagged test</td>
</tr>
</tbody>
</table>
<h4>Untagged tests</h4>
<p>Untagged tests behave as if they have an empty tag set. As a result:</p>
<table>
<thead>
<tr>
<th>Filter expression</th>
<th>Untagged test</th>
<th>Why</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>db</code></td>
<td>excluded</td>
<td>Positive match against an empty tag set is false</td>
</tr>
<tr>
<td><code>*</code></td>
<td>excluded</td>
<td>The bare wildcard requires at least one tag</td>
</tr>
<tr>
<td><code>db or unit</code></td>
<td>excluded</td>
<td>Both branches are false against an empty tag set</td>
</tr>
<tr>
<td><code>not flaky</code></td>
<td>included</td>
<td>Negation against an empty tag set is true</td>
</tr>
<tr>
<td><code>not flaky and not slow</code></td>
<td>included</td>
<td>Both negations are true against an empty tag set</td>
</tr>
<tr>
<td><code>db or not flaky</code></td>
<td>included</td>
<td>The negated branch is true</td>
</tr>
</tbody>
</table>
<p>For example, <code>--experimental-test-tag-filter='not flaky'</code> runs every test
that is not tagged <code>flaky</code>, including all untagged tests.</p>
<h4>Composing multiple filters</h4>
<p><a href="cli.md#--experimental-test-tag-filtertag"><code>--experimental-test-tag-filter</code></a> may be specified more than once on the
command line. Multiple expressions compose by AND—a test must satisfy
every expression to run. The same applies to passing an array to
<code>testTagFilters</code> on <a href="#runoptions"><code>run()</code></a>. The tag filter is also AND'd with
<a href="cli.md#--test-name-pattern"><code>--test-name-pattern</code></a>, <a href="cli.md#--test-skip-pattern"><code>--test-skip-pattern</code></a>, and <code>.only</code>
filtering.</p>
<h4>Reading tags from inside a test</h4>
<p>The <a href="#class-testcontext"><code>TestContext</code></a> object exposes the test's tags as a frozen array
through <a href="#contexttags"><code>context.tags</code></a>, so tests can branch on their own metadata.</p>
<h4>Errors</h4>
<p>A tag value that violates the validation rules above throws
<code>ERR_INVALID_ARG_VALUE</code> at the registration site, before any test runs.
A non-array <code>tags</code> value throws <code>ERR_INVALID_ARG_TYPE</code>. A malformed
filter expression on the CLI causes the test runner to exit with a
non-zero status before running any test files.</p>
<h2>Extraneous asynchronous activity</h2>
<p>Once a test function finishes executing, the results are reported as quickly
as possible while maintaining the order of the tests. However, it is possible
for the test function to generate asynchronous activity that outlives the test
itself. The test runner handles this type of activity, but does not delay the
reporting of test results in order to accommodate it.</p>
<p>In the following example, a test completes with two <code>setImmediate()</code>
operations still outstanding. The first <code>setImmediate()</code> attempts to create a
new subtest. Because the parent test has already finished and output its
results, the new subtest is immediately marked as failed, and reported later
to the {TestsStream}.</p>
<p>The second <code>setImmediate()</code> creates an <code>uncaughtException</code> event.
<code>uncaughtException</code> and <code>unhandledRejection</code> events originating from a completed
test are marked as failed by the <code>test</code> module and reported as diagnostic
warnings at the top level by the {TestsStream}.</p>
<pre><code class="language-js">test('a test that creates asynchronous activity', (t) =&gt; {
  setImmediate(() =&gt; {
    t.test('subtest that is created too late', (t) =&gt; {
      throw new Error('error1');
    });
  });

  setImmediate(() =&gt; {
    throw new Error('error2');
  });

  // The test finishes after this line.
});
</code></pre>
<h2>Watch mode</h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The Node.js test runner supports running in watch mode by passing the <code>--watch</code> flag:</p>
<pre><code class="language-bash">node --test --watch
</code></pre>
<p>In watch mode, the test runner will watch for changes to test files and
their dependencies. When a change is detected, the test runner will
rerun the tests affected by the change.
The test runner will continue to run until the process is terminated.</p>
<h2>Global setup and teardown</h2>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>The test runner supports specifying a module that will be evaluated before all tests are executed and
can be used to setup global state or fixtures for tests. This is useful for preparing resources or setting up
shared state that is required by multiple tests.</p>
<p>This module can export any of the following:</p>
<ul>
<li>A <code>globalSetup</code> function which runs once before all tests start</li>
<li>A <code>globalTeardown</code> function which runs once after all tests complete</li>
</ul>
<p>The module is specified using the <code>--test-global-setup</code> flag when running tests from the command line.</p>
<pre><code class="language-cjs">// setup-module.js
async function globalSetup() {
  // Setup shared resources, state, or environment
  console.log('Global setup executed');
  // Run servers, create files, prepare databases, etc.
}

async function globalTeardown() {
  // Clean up resources, state, or environment
  console.log('Global teardown executed');
  // Close servers, remove files, disconnect from databases, etc.
}

module.exports = { globalSetup, globalTeardown };
</code></pre>
<pre><code class="language-mjs">// setup-module.mjs
export async function globalSetup() {
  // Setup shared resources, state, or environment
  console.log('Global setup executed');
  // Run servers, create files, prepare databases, etc.
}

export async function globalTeardown() {
  // Clean up resources, state, or environment
  console.log('Global teardown executed');
  // Close servers, remove files, disconnect from databases, etc.
}
</code></pre>
<p>If the global setup function throws an error, no tests will be run and the process will exit with a non-zero exit code.
The global teardown function will not be called in this case.</p>
<h2>Running tests from the command line</h2>
<p>The Node.js test runner can be invoked from the command line by passing the
<a href="cli.md#--test"><code>--test</code></a> flag:</p>
<pre><code class="language-bash">node --test
</code></pre>
<p>By default, Node.js will run all files matching these patterns:</p>
<ul>
<li><code>**/*.test.{cjs,mjs,js}</code></li>
<li><code>**/*-test.{cjs,mjs,js}</code></li>
<li><code>**/*_test.{cjs,mjs,js}</code></li>
<li><code>**/test-*.{cjs,mjs,js}</code></li>
<li><code>**/test.{cjs,mjs,js}</code></li>
<li><code>**/test/**/*.{cjs,mjs,js}</code></li>
</ul>
<p>Unless <a href="cli.md#--no-strip-types"><code>--no-strip-types</code></a> is supplied, the following
additional patterns are also matched:</p>
<ul>
<li><code>**/*.test.{cts,mts,ts}</code></li>
<li><code>**/*-test.{cts,mts,ts}</code></li>
<li><code>**/*_test.{cts,mts,ts}</code></li>
<li><code>**/test-*.{cts,mts,ts}</code></li>
<li><code>**/test.{cts,mts,ts}</code></li>
<li><code>**/test/**/*.{cts,mts,ts}</code></li>
</ul>
<p>Alternatively, one or more glob patterns can be provided as the
final argument(s) to the Node.js command, as shown below.
Glob patterns follow the behavior of <a href="https://man7.org/linux/man-pages/man7/glob.7.html"><code>glob(7)</code></a>.
The glob patterns should be enclosed in double quotes on the command line to
prevent shell expansion, which can reduce portability across systems.</p>
<pre><code class="language-bash">node --test &quot;**/*.test.js&quot; &quot;**/*.spec.js&quot;
</code></pre>
<h3>Randomizing tests execution order</h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>The test runner can randomize execution order to help detect
order-dependent tests. When enabled, the runner randomizes both discovered
test files and queued tests within each file. Use <code>--test-randomize</code> to
enable this mode.</p>
<pre><code class="language-bash">node --test --test-randomize
</code></pre>
<p>When randomization is enabled, the test runner prints the seed used for the run
as a diagnostic message:</p>
<pre><code class="language-text">Randomized test order seed: 12345
</code></pre>
<p>Use <code>--test-random-seed=&lt;number&gt;</code> to replay the same randomized order
deterministically. Supplying <code>--test-random-seed</code> also enables randomization,
so <code>--test-randomize</code> is optional when a seed is provided:</p>
<pre><code class="language-bash">node --test --test-random-seed=12345
</code></pre>
<p>In most test files, randomization works automatically. One important exception
is when subtests are awaited one by one. In that pattern, each subtest starts
only after the previous one finishes, so the runner keeps declaration order
instead of randomizing it.</p>
<p>Example: this runs sequentially and is <strong>not</strong> randomized.</p>
<pre><code class="language-mjs">import test from 'node:test';

test('math', async (t) =&gt; {
  for (const name of ['adds', 'subtracts', 'multiplies']) {
    // Sequentially awaiting each subtest preserves declaration order.
    await t.test(name, async () =&gt; {});
  }
});
</code></pre>
<pre><code class="language-cjs">const test = require('node:test');

test('math', async (t) =&gt; {
  for (const name of ['adds', 'subtracts', 'multiplies']) {
    // Sequentially awaiting each subtest preserves declaration order.
    await t.test(name, async () =&gt; {});
  }
});
</code></pre>
<p>Using suite-style APIs such as <code>describe()</code>/<code>it()</code> or <code>suite()</code>/<code>test()</code>
still allows randomization, because sibling tests are enqueued together.</p>
<p>Example: this remains eligible for randomization.</p>
<pre><code class="language-mjs">import { describe, it } from 'node:test';

describe('math', () =&gt; {
  it('adds', () =&gt; {});
  it('subtracts', () =&gt; {});
  it('multiplies', () =&gt; {});
});
</code></pre>
<pre><code class="language-cjs">const { describe, it } = require('node:test');

describe('math', () =&gt; {
  it('adds', () =&gt; {});
  it('subtracts', () =&gt; {});
  it('multiplies', () =&gt; {});
});
</code></pre>
<p><code>--test-randomize</code> and <code>--test-random-seed</code> are not supported with <code>--watch</code> mode.</p>
<p>Matching files are executed as test files.
More information on the test file execution can be found
in the <a href="#test-runner-execution-model">test runner execution model</a> section.</p>
<h3>Test runner execution model</h3>
<p>When process-level test isolation is enabled, each matching test file is
executed in a separate child process. The maximum number of child processes
running at any time is controlled by the <a href="cli.md#--test-concurrency"><code>--test-concurrency</code></a> flag. If the
child process finishes with an exit code of 0, the test is considered passing.
Otherwise, the test is considered to be a failure. Test files must be executable
by Node.js, but are not required to use the <code>node:test</code> module internally.</p>
<p>Each test file is executed as if it was a regular script. That is, if the test
file itself uses <code>node:test</code> to define tests, all of those tests will be
executed within a single application thread, regardless of the value of the
<code>concurrency</code> option of <a href="#testname-options-fn"><code>test()</code></a>.</p>
<p>When process-level test isolation is disabled, each matching test file is
imported into the test runner process. Once all test files have been loaded, the
top level tests are executed with a concurrency of one. Because the test files
are all run within the same context, it is possible for tests to interact with
each other in ways that are not possible when isolation is enabled. For example,
if a test relies on global state, it is possible for that state to be modified
by a test originating from another file.</p>
<h4>Child process option inheritance</h4>
<p>When running tests in process isolation mode (the default), spawned child processes
inherit Node.js options from the parent process, including those specified in
<a href="cli.md#--config-filepath---config-file">configuration files</a>. However, certain flags are filtered out to enable proper
test runner functionality:</p>
<ul>
<li><code>--test</code> - Prevented to avoid recursive test execution</li>
<li><code>--experimental-test-coverage</code> - Managed by the test runner</li>
<li><code>--experimental-test-tag-filter</code> - Filter expressions are validated by the parent
process and re-emitted to child processes</li>
<li><code>--watch</code> - Watch mode is handled at the parent level</li>
<li><code>--test-reporter</code> - Reporting is managed by the parent process</li>
<li><code>--test-reporter-destination</code> - Output destinations are controlled by the parent</li>
<li><code>--config-file</code> - Config file paths are managed by the parent</li>
<li><code>--test-randomize</code> - Randomization is managed by the parent process and
propagated to child processes</li>
<li><code>--test-random-seed</code> - Randomization seed is managed by the parent process and
propagated to child processes</li>
</ul>
<p>All other Node.js options from command line arguments, environment variables,
and configuration files are inherited by the child processes.</p>
<h2>Collecting code coverage</h2>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>When Node.js is started with the <a href="cli.md#--experimental-test-coverage"><code>--experimental-test-coverage</code></a>
command-line flag, code coverage is collected and statistics are reported once
all tests have completed. If the <a href="cli.md#node_v8_coveragedir"><code>NODE_V8_COVERAGE</code></a> environment variable is
used to specify a code coverage directory, the generated V8 coverage files are
written to that directory. Node.js core modules and files within
<code>node_modules/</code> directories are, by default, not included in the coverage report.
However, they can be explicitly included via the <a href="cli.md#--test-coverage-include"><code>--test-coverage-include</code></a> flag.
By default all the matching test files are excluded from the coverage report.
Exclusions can be overridden by using the <a href="cli.md#--test-coverage-exclude"><code>--test-coverage-exclude</code></a> flag.
If coverage is enabled, the coverage report is sent to any <a href="#test-reporters">test reporters</a> via
the <code>'test:coverage'</code> event.</p>
<p>Coverage can be disabled on a series of lines using the following
comment syntax:</p>
<pre><code class="language-js">/* node:coverage disable */
if (anAlwaysFalseCondition) {
  // Code in this branch will never be executed, but the lines are ignored for
  // coverage purposes. All lines following the 'disable' comment are ignored
  // until a corresponding 'enable' comment is encountered.
  console.log('this is never executed');
}
/* node:coverage enable */
</code></pre>
<p>Coverage can also be disabled for a specified number of lines. After the
specified number of lines, coverage will be automatically reenabled. If the
number of lines is not explicitly provided, a single line is ignored.</p>
<pre><code class="language-js">/* node:coverage ignore next */
if (anAlwaysFalseCondition) { console.log('this is never executed'); }

/* node:coverage ignore next 3 */
if (anAlwaysFalseCondition) {
  console.log('this is never executed');
}
</code></pre>
<h3>Coverage reporters</h3>
<p>The tap and spec reporters will print a summary of the coverage statistics.
There is also an lcov reporter that will generate an lcov file which can be
used as an in depth coverage report.</p>
<pre><code class="language-bash">node --test --experimental-test-coverage --test-reporter=lcov --test-reporter-destination=lcov.info
</code></pre>
<ul>
<li>No test results are reported by this reporter.</li>
<li>This reporter should ideally be used alongside another reporter.</li>
</ul>
<h2>Mocking</h2>
<p>The <code>node:test</code> module supports mocking during testing via a top-level <code>mock</code>
object. The following example creates a spy on a function that adds two numbers
together. The spy is then used to assert that the function was called as
expected.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { mock, test } from 'node:test';

test('spies on a function', () =&gt; {
  const sum = mock.fn((a, b) =&gt; {
    return a + b;
  });

  assert.strictEqual(sum.mock.callCount(), 0);
  assert.strictEqual(sum(3, 4), 7);
  assert.strictEqual(sum.mock.callCount(), 1);

  const call = sum.mock.calls[0];
  assert.deepStrictEqual(call.arguments, [3, 4]);
  assert.strictEqual(call.result, 7);
  assert.strictEqual(call.error, undefined);

  // Reset the globally tracked mocks.
  mock.reset();
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { mock, test } = require('node:test');

test('spies on a function', () =&gt; {
  const sum = mock.fn((a, b) =&gt; {
    return a + b;
  });

  assert.strictEqual(sum.mock.callCount(), 0);
  assert.strictEqual(sum(3, 4), 7);
  assert.strictEqual(sum.mock.callCount(), 1);

  const call = sum.mock.calls[0];
  assert.deepStrictEqual(call.arguments, [3, 4]);
  assert.strictEqual(call.result, 7);
  assert.strictEqual(call.error, undefined);

  // Reset the globally tracked mocks.
  mock.reset();
});
</code></pre>
<p>The same mocking functionality is also exposed on the <a href="#class-testcontext"><code>TestContext</code></a> object
of each test. The following example creates a spy on an object method using the
API exposed on the <code>TestContext</code>. The benefit of mocking via the test context is
that the test runner will automatically restore all mocked functionality once
the test finishes.</p>
<pre><code class="language-js">test('spies on an object method', (t) =&gt; {
  const number = {
    value: 5,
    add(a) {
      return this.value + a;
    },
  };

  t.mock.method(number, 'add');
  assert.strictEqual(number.add.mock.callCount(), 0);
  assert.strictEqual(number.add(3), 8);
  assert.strictEqual(number.add.mock.callCount(), 1);

  const call = number.add.mock.calls[0];

  assert.deepStrictEqual(call.arguments, [3]);
  assert.strictEqual(call.result, 8);
  assert.strictEqual(call.target, undefined);
  assert.strictEqual(call.this, number);
});
</code></pre>
<h3>Timers</h3>
<p>Mocking timers is a technique commonly used in software testing to simulate and
control the behavior of timers, such as <code>setInterval</code> and <code>setTimeout</code>,
without actually waiting for the specified time intervals.</p>
<p>Refer to the <a href="#class-mocktimers"><code>MockTimers</code></a> class for a full list of methods and features.</p>
<p>This allows developers to write more reliable and
predictable tests for time-dependent functionality.</p>
<p>The example below shows how to mock <code>setTimeout</code>.
Using <code>.enable({ apis: ['setTimeout'] });</code>
it will mock the <code>setTimeout</code> functions in the <a href="./timers.md">node:timers</a> and
<a href="./timers.md#timers-promises-api">node:timers/promises</a> modules,
as well as from the Node.js global context.</p>
<p><strong>Note:</strong> Destructuring functions such as
<code>import { setTimeout } from 'node:timers'</code>
is currently not supported by this API.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { mock, test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', () =&gt; {
  const fn = mock.fn();

  // Optionally choose what to mock
  mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);

  // Reset the globally tracked mocks.
  mock.timers.reset();

  // If you call reset mock instance, it will also reset timers instance
  mock.reset();
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { mock, test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', () =&gt; {
  const fn = mock.fn();

  // Optionally choose what to mock
  mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);

  // Reset the globally tracked mocks.
  mock.timers.reset();

  // If you call reset mock instance, it will also reset timers instance
  mock.reset();
});
</code></pre>
<p>The same mocking functionality is also exposed in the mock property on the <a href="#class-testcontext"><code>TestContext</code></a> object
of each test. The benefit of mocking via the test context is
that the test runner will automatically restore all mocked timers
functionality once the test finishes.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<h3>Dates</h3>
<p>The mock timers API also allows the mocking of the <code>Date</code> object. This is a
useful feature for testing time-dependent functionality, or to simulate
internal calendar functions such as <code>Date.now()</code>.</p>
<p>The dates implementation is also part of the <a href="#class-mocktimers"><code>MockTimers</code></a> class. Refer to it
for a full list of methods and features.</p>
<p><strong>Note:</strong> Dates and timers are dependent when mocked together. This means that
if you have both the <code>Date</code> and <code>setTimeout</code> mocked, advancing the time will
also advance the mocked date as they simulate a single internal clock.</p>
<p>The example below show how to mock the <code>Date</code> object and obtain the current
<code>Date.now()</code> value.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks the Date object', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'] });
  // If not specified, the initial date will be based on 0 in the UNIX epoch
  assert.strictEqual(Date.now(), 0);

  // Advance in time will also advance the date
  context.mock.timers.tick(9999);
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks the Date object', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'] });
  // If not specified, the initial date will be based on 0 in the UNIX epoch
  assert.strictEqual(Date.now(), 0);

  // Advance in time will also advance the date
  context.mock.timers.tick(9999);
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<p>If there is no initial epoch set, the initial date will be based on 0 in the
Unix epoch. This is January 1st, 1970, 00:00:00 UTC. You can set an initial date
by passing a <code>now</code> property to the <code>.enable()</code> method. This value will be used
as the initial date for the mocked <code>Date</code> object. It can either be a positive
integer, or another Date object.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks the Date object with initial time', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'], now: 100 });
  assert.strictEqual(Date.now(), 100);

  // Advance in time will also advance the date
  context.mock.timers.tick(200);
  assert.strictEqual(Date.now(), 300);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks the Date object with initial time', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'], now: 100 });
  assert.strictEqual(Date.now(), 100);

  // Advance in time will also advance the date
  context.mock.timers.tick(200);
  assert.strictEqual(Date.now(), 300);
});
</code></pre>
<p>You can use the <code>.setTime()</code> method to manually move the mocked date to another
time. This method only accepts a positive integer.</p>
<p><strong>Note:</strong> This method will <strong>not</strong> execute any mocked timers that are in the past
from the new time.</p>
<p>In the below example we are setting a new time for the mocked date.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('sets the time of a date object', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'], now: 100 });
  assert.strictEqual(Date.now(), 100);

  // Advance in time will also advance the date
  context.mock.timers.setTime(1000);
  context.mock.timers.tick(200);
  assert.strictEqual(Date.now(), 1200);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('sets the time of a date object', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['Date'], now: 100 });
  assert.strictEqual(Date.now(), 100);

  // Advance in time will also advance the date
  context.mock.timers.setTime(1000);
  context.mock.timers.tick(200);
  assert.strictEqual(Date.now(), 1200);
});
</code></pre>
<p>Timers scheduled in the past will <strong>not</strong> run when you call <code>setTime()</code>. To execute those timers, you can use
the <code>.tick()</code> method to move forward from the new time.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('setTime does not execute timers', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const fn = context.mock.fn();
  setTimeout(fn, 1000);

  context.mock.timers.setTime(800);
  // Timer is not executed as the time is not yet reached
  assert.strictEqual(fn.mock.callCount(), 0);
  assert.strictEqual(Date.now(), 800);

  context.mock.timers.setTime(1200);
  // Timer is still not executed
  assert.strictEqual(fn.mock.callCount(), 0);
  // Advance in time to execute the timer
  context.mock.timers.tick(0);
  assert.strictEqual(fn.mock.callCount(), 1);
  assert.strictEqual(Date.now(), 1200);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('setTime does not execute timers', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const fn = context.mock.fn();
  setTimeout(fn, 1000);

  context.mock.timers.setTime(800);
  // Timer is not executed as the time is not yet reached
  assert.strictEqual(fn.mock.callCount(), 0);
  assert.strictEqual(Date.now(), 800);

  context.mock.timers.setTime(1200);
  // Timer is still not executed
  assert.strictEqual(fn.mock.callCount(), 0);
  // Advance in time to execute the timer
  context.mock.timers.tick(0);
  assert.strictEqual(fn.mock.callCount(), 1);
  assert.strictEqual(Date.now(), 1200);
});
</code></pre>
<p>Using <code>.runAll()</code> will execute all timers that are currently in the queue. This
will also advance the mocked date to the time of the last timer that was
executed as if the time has passed.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('runs timers as setTime passes ticks', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const fn = context.mock.fn();
  setTimeout(fn, 1000);
  setTimeout(fn, 2000);
  setTimeout(fn, 3000);

  context.mock.timers.runAll();
  // All timers are executed as the time is now reached
  assert.strictEqual(fn.mock.callCount(), 3);
  assert.strictEqual(Date.now(), 3000);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('runs timers as setTime passes ticks', (context) =&gt; {
  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const fn = context.mock.fn();
  setTimeout(fn, 1000);
  setTimeout(fn, 2000);
  setTimeout(fn, 3000);

  context.mock.timers.runAll();
  // All timers are executed as the time is now reached
  assert.strictEqual(fn.mock.callCount(), 3);
  assert.strictEqual(Date.now(), 3000);
});
</code></pre>
<h2>Snapshot testing</h2>
<p>Snapshot tests allow arbitrary values to be serialized into string values and
compared against a set of known good values. The known good values are known as
snapshots, and are stored in a snapshot file. Snapshot files are managed by the
test runner, but are designed to be human readable to aid in debugging. Best
practice is for snapshot files to be checked into source control along with your
test files.</p>
<p>Snapshot files are generated by starting Node.js with the
<a href="cli.md#--test-update-snapshots"><code>--test-update-snapshots</code></a> command-line flag. A separate snapshot file is
generated for each test file. By default, the snapshot file has the same name
as the test file with a <code>.snapshot</code> file extension. This behavior can be
configured using the <code>snapshot.setResolveSnapshotPath()</code> function. Each
snapshot assertion corresponds to an export in the snapshot file.</p>
<p>An example snapshot test is shown below. The first time this test is executed,
it will fail because the corresponding snapshot file does not exist.</p>
<pre><code class="language-js">// test.js
suite('suite of snapshot tests', () =&gt; {
  test('snapshot test', (t) =&gt; {
    t.assert.snapshot({ value1: 1, value2: 2 });
    t.assert.snapshot(5);
  });
});
</code></pre>
<p>Generate the snapshot file by running the test file with
<code>--test-update-snapshots</code>. The test should pass, and a file named
<code>test.js.snapshot</code> is created in the same directory as the test file. The
contents of the snapshot file are shown below. Each snapshot is identified by
the full name of test and a counter to differentiate between snapshots in the
same test.</p>
<pre><code class="language-js">exports[`suite of snapshot tests &gt; snapshot test 1`] = `
{
  &quot;value1&quot;: 1,
  &quot;value2&quot;: 2
}
`;

exports[`suite of snapshot tests &gt; snapshot test 2`] = `
5
`;
</code></pre>
<p>Once the snapshot file is created, run the tests again without the
<code>--test-update-snapshots</code> flag. The tests should pass now.</p>
<h2>Test reporters</h2>
<p>The <code>node:test</code> module supports passing <a href="cli.md#--test-reporter"><code>--test-reporter</code></a>
flags for the test runner to use a specific reporter.</p>
<p>The following built-reporters are supported:</p>
<ul>
<li>
<p><code>spec</code>
The <code>spec</code> reporter outputs the test results in a human-readable format. This
is the default reporter.</p>
</li>
<li>
<p><code>tap</code>
The <code>tap</code> reporter outputs the test results in the <a href="https://testanything.org/">TAP</a> format.</p>
</li>
<li>
<p><code>dot</code>
The <code>dot</code> reporter outputs the test results in a compact format,
where each passing test is represented by a <code>.</code>,
and each failing test is represented by a <code>X</code>.</p>
</li>
<li>
<p><code>junit</code>
The junit reporter outputs test results in a jUnit XML format</p>
</li>
<li>
<p><code>lcov</code>
The <code>lcov</code> reporter outputs test coverage when used with the
<a href="cli.md#--experimental-test-coverage"><code>--experimental-test-coverage</code></a> flag.</p>
</li>
</ul>
<p>The exact output of these reporters is subject to change between versions of
Node.js, and should not be relied on programmatically. If programmatic access
to the test runner's output is required, use the events emitted by the
{TestsStream}.</p>
<p>The reporters are available via the <code>node:test/reporters</code> module:</p>
<pre><code class="language-mjs">import { tap, spec, dot, junit, lcov } from 'node:test/reporters';
</code></pre>
<pre><code class="language-cjs">const { tap, spec, dot, junit, lcov } = require('node:test/reporters');
</code></pre>
<h3>Custom reporters</h3>
<p><a href="cli.md#--test-reporter"><code>--test-reporter</code></a> can be used to specify a path to custom reporter.
A custom reporter is a module that exports a value
accepted by <a href="stream.md#streamcomposestreams">stream.compose</a>.
Reporters should transform events emitted by a {TestsStream}</p>
<p>Example of a custom reporter using {stream.Transform}:</p>
<pre><code class="language-mjs">import { Transform } from 'node:stream';

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    switch (event.type) {
      case 'test:dequeue':
        callback(null, `test ${event.data.name} dequeued`);
        break;
      case 'test:enqueue':
        callback(null, `test ${event.data.name} enqueued`);
        break;
      case 'test:watch:drained':
        callback(null, 'test watch queue drained');
        break;
      case 'test:watch:restarted':
        callback(null, 'test watch restarted due to file change');
        break;
      case 'test:start':
        callback(null, `test ${event.data.name} started`);
        break;
      case 'test:pass':
        callback(null, `test ${event.data.name} passed`);
        break;
      case 'test:fail':
        callback(null, `test ${event.data.name} failed`);
        break;
      case 'test:plan':
        callback(null, 'test plan');
        break;
      case 'test:diagnostic':
      case 'test:stderr':
      case 'test:stdout':
        callback(null, event.data.message);
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        callback(null, `total line count: ${totalLineCount}\n`);
        break;
      }
    }
  },
});

export default customReporter;
</code></pre>
<pre><code class="language-cjs">const { Transform } = require('node:stream');

const customReporter = new Transform({
  writableObjectMode: true,
  transform(event, encoding, callback) {
    switch (event.type) {
      case 'test:dequeue':
        callback(null, `test ${event.data.name} dequeued`);
        break;
      case 'test:enqueue':
        callback(null, `test ${event.data.name} enqueued`);
        break;
      case 'test:watch:drained':
        callback(null, 'test watch queue drained');
        break;
      case 'test:watch:restarted':
        callback(null, 'test watch restarted due to file change');
        break;
      case 'test:start':
        callback(null, `test ${event.data.name} started`);
        break;
      case 'test:pass':
        callback(null, `test ${event.data.name} passed`);
        break;
      case 'test:fail':
        callback(null, `test ${event.data.name} failed`);
        break;
      case 'test:plan':
        callback(null, 'test plan');
        break;
      case 'test:diagnostic':
      case 'test:stderr':
      case 'test:stdout':
        callback(null, event.data.message);
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        callback(null, `total line count: ${totalLineCount}\n`);
        break;
      }
    }
  },
});

module.exports = customReporter;
</code></pre>
<p>Example of a custom reporter using a generator function:</p>
<pre><code class="language-mjs">export default async function * customReporter(source) {
  for await (const event of source) {
    switch (event.type) {
      case 'test:dequeue':
        yield `test ${event.data.name} dequeued\n`;
        break;
      case 'test:enqueue':
        yield `test ${event.data.name} enqueued\n`;
        break;
      case 'test:watch:drained':
        yield 'test watch queue drained\n';
        break;
      case 'test:watch:restarted':
        yield 'test watch restarted due to file change\n';
        break;
      case 'test:start':
        yield `test ${event.data.name} started\n`;
        break;
      case 'test:pass':
        yield `test ${event.data.name} passed\n`;
        break;
      case 'test:fail':
        yield `test ${event.data.name} failed\n`;
        break;
      case 'test:plan':
        yield 'test plan\n';
        break;
      case 'test:diagnostic':
      case 'test:stderr':
      case 'test:stdout':
        yield `${event.data.message}\n`;
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        yield `total line count: ${totalLineCount}\n`;
        break;
      }
    }
  }
}
</code></pre>
<pre><code class="language-cjs">module.exports = async function * customReporter(source) {
  for await (const event of source) {
    switch (event.type) {
      case 'test:dequeue':
        yield `test ${event.data.name} dequeued\n`;
        break;
      case 'test:enqueue':
        yield `test ${event.data.name} enqueued\n`;
        break;
      case 'test:watch:drained':
        yield 'test watch queue drained\n';
        break;
      case 'test:watch:restarted':
        yield 'test watch restarted due to file change\n';
        break;
      case 'test:start':
        yield `test ${event.data.name} started\n`;
        break;
      case 'test:pass':
        yield `test ${event.data.name} passed\n`;
        break;
      case 'test:fail':
        yield `test ${event.data.name} failed\n`;
        break;
      case 'test:plan':
        yield 'test plan\n';
        break;
      case 'test:diagnostic':
      case 'test:stderr':
      case 'test:stdout':
        yield `${event.data.message}\n`;
        break;
      case 'test:coverage': {
        const { totalLineCount } = event.data.summary.totals;
        yield `total line count: ${totalLineCount}\n`;
        break;
      }
    }
  }
};
</code></pre>
<p>The value provided to <code>--test-reporter</code> should be a string like one used in an
<code>import()</code> in JavaScript code, or a value provided for <a href="cli.md#--importmodule"><code>--import</code></a>.</p>
<h3>Multiple reporters</h3>
<p>The <a href="cli.md#--test-reporter"><code>--test-reporter</code></a> flag can be specified multiple times to report test
results in several formats. In this situation
it is required to specify a destination for each reporter
using <a href="cli.md#--test-reporter-destination"><code>--test-reporter-destination</code></a>.
Destination can be <code>stdout</code>, <code>stderr</code>, or a file path.
Reporters and destinations are paired according
to the order they were specified.</p>
<p>In the following example, the <code>spec</code> reporter will output to <code>stdout</code>,
and the <code>dot</code> reporter will output to <code>file.txt</code>:</p>
<pre><code class="language-bash">node --test-reporter=spec --test-reporter=dot --test-reporter-destination=stdout --test-reporter-destination=file.txt
</code></pre>
<p>When a single reporter is specified, the destination will default to <code>stdout</code>,
unless a destination is explicitly provided.</p>
<h2><code>run([options])</code></h2>
<ul>
<li><code>options</code> {Object} Configuration options for running tests. The following
properties are supported:
<ul>
<li><code>concurrency</code> {number|boolean} If a number is provided,
then that many test processes would run in parallel, where each process
corresponds to one test file.
If <code>true</code>, it would run <code>os.availableParallelism() - 1</code> test files in
parallel.
If <code>false</code>, it would only run one test file at a time.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>cwd</code> {string} Specifies the current working directory to be used by the test runner.
Serves as the base path for resolving files as if <a href="#running-tests-from-the-command-line">running tests from the command line</a> from that directory.
<strong>Default:</strong> <code>process.cwd()</code>.</li>
<li><code>files</code> {Array} An array containing the list of files to run.
<strong>Default:</strong> Same as <a href="#running-tests-from-the-command-line">running tests from the command line</a>.</li>
<li><code>forceExit</code> {boolean} Configures the test runner to exit the process once
all known tests have finished executing even if the event loop would
otherwise remain active. <strong>Default:</strong> <code>false</code>.</li>
<li><code>globPatterns</code> {Array} An array containing the list of glob patterns to
match test files. This option cannot be used together with <code>files</code>.
<strong>Default:</strong> Same as <a href="#running-tests-from-the-command-line">running tests from the command line</a>.</li>
<li><code>inspectPort</code> {number|Function} Sets inspector port of test child process.
This can be a number, or a function that takes no arguments and returns a
number. If a nullish value is provided, each process gets its own port,
incremented from the primary's <code>process.debugPort</code>. This option is ignored
if the <code>isolation</code> option is set to <code>'none'</code> as no child processes are
spawned. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>isolation</code> {string} Configures the type of test isolation. If set to
<code>'process'</code>, each test file is run in a separate child process. If set to
<code>'none'</code>, all test files run in the current process. <strong>Default:</strong>
<code>'process'</code>.</li>
<li><code>only</code> {boolean} If truthy, the test context will only run tests that
have the <code>only</code> option set</li>
<li><code>setup</code> {Function} A function that accepts the <code>TestsStream</code> instance
and can be used to setup listeners before any tests are run.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>execArgv</code> {Array} An array of CLI flags to pass to the <code>node</code> executable when
spawning the subprocesses. This option has no effect when <code>isolation</code> is <code>'none</code>'.
<strong>Default:</strong> <code>[]</code></li>
<li><code>argv</code> {Array} An array of CLI flags to pass to each test file when spawning the
subprocesses. This option has no effect when <code>isolation</code> is <code>'none'</code>.
<strong>Default:</strong> <code>[]</code>.</li>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress test execution.</li>
<li><code>testNamePatterns</code> {string|RegExp|Array} A String, RegExp or a RegExp Array,
that can be used to only run tests whose name matches the provided pattern.
Test name patterns are interpreted as JavaScript regular expressions.
For each test that is executed, any corresponding test hooks, such as
<code>beforeEach()</code>, are also run.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>testSkipPatterns</code> {string|RegExp|Array} A String, RegExp or a RegExp Array,
that can be used to exclude running tests whose name matches the provided pattern.
Test name patterns are interpreted as JavaScript regular expressions.
For each test that is executed, any corresponding test hooks, such as
<code>beforeEach()</code>, are also run.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>testTagFilters</code> {string|string[]} A boolean expression, or an array of
boolean expressions, used to filter tests by their declared tags.
Multiple expressions compose by AND. Equivalent to passing
<a href="cli.md#--experimental-test-tag-filtertag"><code>--experimental-test-tag-filter</code></a> on the command line. See
<a href="#test-tags">Test tags</a>. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>timeout</code> {number} A number of milliseconds the test execution will
fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>watch</code> {boolean} Whether to run in watch mode or not. <strong>Default:</strong> <code>false</code>.</li>
<li><code>shard</code> {Object} Running tests in a specific shard. <strong>Default:</strong> <code>undefined</code>.
<ul>
<li><code>index</code> {number} is a positive integer between 1 and <code>&lt;total&gt;</code>
that specifies the index of the shard to run. This option is <em>required</em>.</li>
<li><code>total</code> {number} is a positive integer that specifies the total number
of shards to split the test files to. This option is <em>required</em>.</li>
</ul>
</li>
<li><code>randomize</code> {boolean} Randomize execution order for test files and queued tests.
This option is not supported with <code>watch: true</code>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>randomSeed</code> {number} Seed used when randomizing execution order. If this
option is set, runs can replay the same randomized order deterministically,
and setting this option also enables randomization. The value must be an
integer between <code>0</code> and <code>4294967295</code>.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>rerunFailuresFilePath</code> {string} A file path where the test runner will
store the state of the tests to allow rerunning only the failed tests on a next run.
see [Rerunning failed tests][] for more information.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>coverage</code> {boolean} enable <a href="#collecting-code-coverage">code coverage</a> collection.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>coverageExcludeGlobs</code> {string|Array} Excludes specific files from code coverage
using a glob pattern, which can match both absolute and relative file paths.
This property is only applicable when <code>coverage</code> was set to <code>true</code>.
If both <code>coverageExcludeGlobs</code> and <code>coverageIncludeGlobs</code> are provided,
files must meet <strong>both</strong> criteria to be included in the coverage report.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>coverageIncludeGlobs</code> {string|Array} Includes specific files in code coverage
using a glob pattern, which can match both absolute and relative file paths.
This property is only applicable when <code>coverage</code> was set to <code>true</code>.
If both <code>coverageExcludeGlobs</code> and <code>coverageIncludeGlobs</code> are provided,
files must meet <strong>both</strong> criteria to be included in the coverage report.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>coverageIncludeAll</code> {boolean} Includes source files that were never loaded by
the test run in the coverage report, where they are reported as having zero
coverage. Candidate files are searched for in <code>cwd</code>, and are subject to the
same <code>coverageIncludeGlobs</code> and <code>coverageExcludeGlobs</code> filtering as the rest
of the report. This property is only applicable when <code>coverage</code> was set to
<code>true</code>.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>lineCoverage</code> {number} Require a minimum percent of covered lines. If code
coverage does not reach the threshold specified, the process will exit with code <code>1</code>.
<strong>Default:</strong> <code>0</code>.</li>
<li><code>branchCoverage</code> {number} Require a minimum percent of covered branches. If code
coverage does not reach the threshold specified, the process will exit with code <code>1</code>.
<strong>Default:</strong> <code>0</code>.</li>
<li><code>functionCoverage</code> {number} Require a minimum percent of covered functions. If code
coverage does not reach the threshold specified, the process will exit with code <code>1</code>.
<strong>Default:</strong> <code>0</code>.</li>
<li><code>env</code> {Object} Specify environment variables to be passed along to the test process.
This option is not compatible with <code>isolation='none'</code>. These variables will override
those from the main process, and are not merged with <code>process.env</code>.
<strong>Default:</strong> <code>process.env</code>.</li>
</ul>
</li>
<li>Returns: {TestsStream}</li>
</ul>
<p><strong>Note:</strong> <code>shard</code> is used to horizontally parallelize test running across
machines or processes, ideal for large-scale executions across varied
environments. It's incompatible with <code>watch</code> mode, tailored for rapid
code iteration by automatically rerunning tests on file changes.</p>
<pre><code class="language-mjs">import { tap } from 'node:test/reporters';
import { run } from 'node:test';
import process from 'node:process';
import path from 'node:path';

run({ files: [path.resolve('./tests/test.js')] })
 .on('test:fail', () =&gt; {
   process.exitCode = 1;
 })
 .compose(tap)
 .pipe(process.stdout);
</code></pre>
<pre><code class="language-cjs">const { tap } = require('node:test/reporters');
const { run } = require('node:test');
const path = require('node:path');

run({ files: [path.resolve('./tests/test.js')] })
 .on('test:fail', () =&gt; {
   process.exitCode = 1;
 })
 .compose(tap)
 .pipe(process.stdout);
</code></pre>
<h2><code>suite([name][, options][, fn])</code></h2>
<ul>
<li><code>name</code> {string} The name of the suite, which is displayed when reporting test
results. <strong>Default:</strong> The <code>name</code> property of <code>fn</code>, or <code>'&lt;anonymous&gt;'</code> if <code>fn</code>
does not have a name.</li>
<li><code>options</code> {Object} Optional configuration options for the suite.
This supports the same options as <code>test([name][, options][, fn])</code>.</li>
<li><code>fn</code> {Function|AsyncFunction} The suite function declaring nested tests and
suites. The first argument to this function is a <a href="#class-suitecontext"><code>SuiteContext</code></a> object.
<strong>Default:</strong> A no-op function.</li>
<li>Returns: {Promise} Immediately fulfilled with <code>undefined</code>.</li>
</ul>
<p>The <code>suite()</code> function is imported from the <code>node:test</code> module.</p>
<h2><code>suite.skip([name][, options][, fn])</code></h2>
<p>Shorthand for skipping a suite. This is the same as
<a href="#suitename-options-fn"><code>suite([name], { skip: true }[, fn])</code></a>.</p>
<h2><code>suite.todo([name][, options][, fn])</code></h2>
<p>Shorthand for marking a suite as <code>TODO</code>. This is the same as
<a href="#suitename-options-fn"><code>suite([name], { todo: true }[, fn])</code></a>.</p>
<h2><code>suite.only([name][, options][, fn])</code></h2>
<p>Shorthand for marking a suite as <code>only</code>. This is the same as
<a href="#suitename-options-fn"><code>suite([name], { only: true }[, fn])</code></a>.</p>
<h2><code>test([name][, options][, fn])</code></h2>
<ul>
<li><code>name</code> {string} The name of the test, which is displayed when reporting test
results. <strong>Default:</strong> The <code>name</code> property of <code>fn</code>, or <code>'&lt;anonymous&gt;'</code> if <code>fn</code>
does not have a name.</li>
<li><code>options</code> {Object} Configuration options for the test. The following
properties are supported:
<ul>
<li><code>concurrency</code> {number|boolean} If a number is provided,
then that many tests would run asynchronously (they are still managed by the single-threaded event loop).
If <code>true</code>, all scheduled asynchronous tests run concurrently within the
thread. If <code>false</code>, only one test runs at a time.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>expectFailure</code> {boolean|string|RegExp|Function|Object|Error} If truthy, the
test is expected to fail. If a non-empty string is provided, that string is displayed
in the test results as the reason why the test is expected to fail. If a {RegExp|Function|Object|Error}
is provided directly (without wrapping in <code>{ match: … }</code>), the test passes
only if the thrown error matches, following the behavior of
<a href="assert.md#assertthrowsfn-error-message"><code>assert.throws</code></a>. To provide both a reason and validation, pass an object
with <code>label</code> (string) and <code>match</code> (RegExp, Function, Object, or Error).
<strong>Default:</strong> <code>false</code>.</li>
<li><code>only</code> {boolean} If truthy, and the test context is configured to run
<code>only</code> tests, then this test will be run. Otherwise, the test is skipped.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress test.</li>
<li><code>skip</code> {boolean|string} If truthy, the test is skipped. If a string is
provided, that string is displayed in the test results as the reason for
skipping the test. <strong>Default:</strong> <code>false</code>.</li>
<li><code>tags</code> {string[]} An array of string labels associated with the test.
Used together with <a href="cli.md#--experimental-test-tag-filtertag"><code>--experimental-test-tag-filter</code></a> to filter which
tests run. Tags inherit from suites to nested tests by union. See
<a href="#test-tags">Test tags</a>. <strong>Default:</strong> <code>[]</code>.</li>
<li><code>todo</code> {boolean|string} If truthy, the test marked as <code>TODO</code>. If a string
is provided, that string is displayed in the test results as the reason why
the test is <code>TODO</code>. <strong>Default:</strong> <code>false</code>.</li>
<li><code>timeout</code> {number} A number of milliseconds the test will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>plan</code> {number} The number of assertions and subtests expected to be run in the test.
If the number of assertions run in the test does not match the number
specified in the plan, the test will fail.
<strong>Default:</strong> <code>undefined</code>.</li>
<li><code>fn</code> {Function|AsyncFunction} The function under test. If provided, it will take
precedence over the <code>fn</code> parameter.</li>
<li><code>name</code> {string} The name of the test. If provided, it will take precedence over the
<code>name</code> parameter.</li>
</ul>
</li>
<li><code>fn</code> {Function|AsyncFunction} The function under test. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the test uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li>Returns: {Promise} Fulfilled with <code>undefined</code> once
the test completes, or immediately if the test runs within a suite.</li>
</ul>
<p>The <code>test()</code> function is the value imported from the <code>test</code> module. Each
invocation of this function results in reporting the test to the {TestsStream}.</p>
<p>The <code>TestContext</code> object passed to the <code>fn</code> argument can be used to perform
actions related to the current test. Examples include skipping the test, adding
additional diagnostic information, or creating subtests.</p>
<p><code>test()</code> returns a <code>Promise</code> that fulfills once the test completes.
if <code>test()</code> is called within a suite, it fulfills immediately.
The return value can usually be discarded for top level tests.
However, the return value from subtests should be used to prevent the parent
test from finishing first and cancelling the subtest
as shown in the following example.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  // The setTimeout() in the following subtest would cause it to outlive its
  // parent test if 'await' is removed on the next line. Once the parent test
  // completes, it will cancel any outstanding subtests.
  await t.test('longer running subtest', async (t) =&gt; {
    return new Promise((resolve, reject) =&gt; {
      setTimeout(resolve, 1000);
    });
  });
});
</code></pre>
<p>The <code>timeout</code> option can be used to fail the test if it takes longer than
<code>timeout</code> milliseconds to complete. However, it is not a reliable mechanism for
canceling tests because a running test might block the application thread and
thus prevent the scheduled cancellation.</p>
<h2><code>test.skip([name][, options][, fn])</code></h2>
<p>Shorthand for skipping a test,
same as <a href="#testname-options-fn"><code>test([name], { skip: true }[, fn])</code></a>.</p>
<h2><code>test.todo([name][, options][, fn])</code></h2>
<p>Shorthand for marking a test as <code>TODO</code>,
same as <a href="#testname-options-fn"><code>test([name], { todo: true }[, fn])</code></a>.</p>
<h2><code>test.only([name][, options][, fn])</code></h2>
<p>Shorthand for marking a test as <code>only</code>,
same as <a href="#testname-options-fn"><code>test([name], { only: true }[, fn])</code></a>.</p>
<h2><code>describe([name][, options][, fn])</code></h2>
<p>Alias for <a href="#suitename-options-fn"><code>suite()</code></a>.</p>
<p>The <code>describe()</code> function is imported from the <code>node:test</code> module.</p>
<h2><code>describe.skip([name][, options][, fn])</code></h2>
<p>Shorthand for skipping a suite. This is the same as
<a href="#describename-options-fn"><code>describe([name], { skip: true }[, fn])</code></a>.</p>
<h2><code>describe.todo([name][, options][, fn])</code></h2>
<p>Shorthand for marking a suite as <code>TODO</code>. This is the same as
<a href="#describename-options-fn"><code>describe([name], { todo: true }[, fn])</code></a>.</p>
<h2><code>describe.only([name][, options][, fn])</code></h2>
<p>Shorthand for marking a suite as <code>only</code>. This is the same as
<a href="#describename-options-fn"><code>describe([name], { only: true }[, fn])</code></a>.</p>
<h2><code>it([name][, options][, fn])</code></h2>
<p>Alias for <a href="#testname-options-fn"><code>test()</code></a>.</p>
<p>The <code>it()</code> function is imported from the <code>node:test</code> module.</p>
<h2><code>it.skip([name][, options][, fn])</code></h2>
<p>Shorthand for skipping a test,
same as <a href="#testname-options-fn"><code>it([name], { skip: true }[, fn])</code></a>.</p>
<h2><code>it.todo([name][, options][, fn])</code></h2>
<p>Shorthand for marking a test as <code>TODO</code>,
same as <a href="#testname-options-fn"><code>it([name], { todo: true }[, fn])</code></a>.</p>
<h2><code>it.only([name][, options][, fn])</code></h2>
<p>Shorthand for marking a test as <code>only</code>,
same as <a href="#testname-options-fn"><code>it([name], { only: true }[, fn])</code></a>.</p>
<h2><code>before([fn][, options])</code></h2>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function.
If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function creates a hook that runs before executing a suite.</p>
<pre><code class="language-js">describe('tests', async () =&gt; {
  before(() =&gt; console.log('about to run some test'));
  it('is a subtest', () =&gt; {
    // Some relevant assertions here
  });
});
</code></pre>
<h2><code>after([fn][, options])</code></h2>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function.
If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function creates a hook that runs after executing a suite.</p>
<pre><code class="language-js">describe('tests', async () =&gt; {
  after(() =&gt; console.log('finished running tests'));
  it('is a subtest', () =&gt; {
    // Some relevant assertion here
  });
});
</code></pre>
<p><strong>Note:</strong> The <code>after</code> hook is guaranteed to run,
even if tests within the suite fail.</p>
<h2><code>beforeEach([fn][, options])</code></h2>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function.
If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function creates a hook that runs before each test in the current suite.</p>
<pre><code class="language-js">describe('tests', async () =&gt; {
  beforeEach(() =&gt; console.log('about to run a test'));
  it('is a subtest', () =&gt; {
    // Some relevant assertion here
  });
});
</code></pre>
<h2><code>afterEach([fn][, options])</code></h2>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function.
If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function creates a hook that runs after each test in the current suite.
The <code>afterEach()</code> hook is run even if the test fails.</p>
<pre><code class="language-js">describe('tests', async () =&gt; {
  afterEach(() =&gt; console.log('finished running a test'));
  it('is a subtest', () =&gt; {
    // Some relevant assertion here
  });
});
</code></pre>
<h2><code>assert</code></h2>
<p>An object whose methods are used to configure available assertions on the
<code>TestContext</code> objects in the current process. The methods from <code>node:assert</code>
and snapshot testing functions are available by default.</p>
<p>It is possible to apply the same configuration to all files by placing common
configuration code in a module
preloaded with <code>--require</code> or <code>--import</code>.</p>
<h3><code>assert.register(name, fn)</code></h3>
<p>Defines a new assertion function with the provided name and function. If an
assertion already exists with the same name, it is overwritten.</p>
<h2><code>snapshot</code></h2>
<p>An object whose methods are used to configure default snapshot settings in the
current process. It is possible to apply the same configuration to all files by
placing common configuration code in a module preloaded with <code>--require</code> or
<code>--import</code>.</p>
<h3><code>snapshot.setDefaultSnapshotSerializers(serializers)</code></h3>
<ul>
<li><code>serializers</code> {Array} An array of synchronous functions used as the default
serializers for snapshot tests.</li>
</ul>
<p>This function is used to customize the default serialization mechanism used by
the test runner. By default, the test runner performs serialization by calling
<code>JSON.stringify(value, null, 2)</code> on the provided value. <code>JSON.stringify()</code> does
have limitations regarding circular structures and supported data types. If a
more robust serialization mechanism is required, this function should be used.</p>
<h3><code>snapshot.setResolveSnapshotPath(fn)</code></h3>
<ul>
<li><code>fn</code> {Function} A function used to compute the location of the snapshot file.
The function receives the path of the test file as its only argument. If the
test is not associated with a file (for example in the REPL), the input is
undefined. <code>fn()</code> must return a string specifying the location of the snapshot file.</li>
</ul>
<p>This function is used to customize the location of the snapshot file used for
snapshot testing. By default, the snapshot filename is the same as the entry
point filename with a <code>.snapshot</code> file extension.</p>
<h2>Class: <code>MockFunctionContext</code></h2>
<p>The <code>MockFunctionContext</code> class is used to inspect or manipulate the behavior of
mocks created via the <a href="#class-mocktracker"><code>MockTracker</code></a> APIs.</p>
<h3><code>ctx.calls</code></h3>
<ul>
<li>Type: {Array}</li>
</ul>
<p>A getter that returns a copy of the internal array used to track calls to the
mock. Each entry in the array is an object with the following properties.</p>
<ul>
<li><code>arguments</code> {Array} An array of the arguments passed to the mock function.</li>
<li><code>error</code> {any} If the mocked function threw then this property contains the
thrown value. <strong>Default:</strong> <code>undefined</code>.</li>
<li><code>result</code> {any} The value returned by the mocked function.</li>
<li><code>stack</code> {Error} An <code>Error</code> object whose stack can be used to determine the
callsite of the mocked function invocation.</li>
<li><code>target</code> {Function|undefined} If the mocked function is a constructor, this
field contains the class being constructed. Otherwise this will be
<code>undefined</code>.</li>
<li><code>this</code> {any} The mocked function's <code>this</code> value.</li>
</ul>
<h3><code>ctx.callCount()</code></h3>
<ul>
<li>Returns: {integer} The number of times that this mock has been invoked.</li>
</ul>
<p>This function returns the number of times that this mock has been invoked. This
function is more efficient than checking <code>ctx.calls.length</code> because <code>ctx.calls</code>
is a getter that creates a copy of the internal call tracking array.</p>
<h3><code>ctx.mockImplementation(implementation)</code></h3>
<ul>
<li><code>implementation</code> {Function|AsyncFunction} The function to be used as the
mock's new implementation.</li>
</ul>
<p>This function is used to change the behavior of an existing mock.</p>
<p>The following example creates a mock function using <code>t.mock.fn()</code>, calls the
mock function, and then changes the mock implementation to a different function.</p>
<pre><code class="language-js">test('changes a mock behavior', (t) =&gt; {
  let cnt = 0;

  function addOne() {
    cnt++;
    return cnt;
  }

  function addTwo() {
    cnt += 2;
    return cnt;
  }

  const fn = t.mock.fn(addOne);

  assert.strictEqual(fn(), 1);
  fn.mock.mockImplementation(addTwo);
  assert.strictEqual(fn(), 3);
  assert.strictEqual(fn(), 5);
});
</code></pre>
<h3><code>ctx.mockImplementationOnce(implementation[, onCall])</code></h3>
<ul>
<li><code>implementation</code> {Function|AsyncFunction} The function to be used as the
mock's implementation for the invocation number specified by <code>onCall</code>.</li>
<li><code>onCall</code> {integer} The invocation number that will use <code>implementation</code>. If
the specified invocation has already occurred then an exception is thrown.
<strong>Default:</strong> The number of the next invocation.</li>
</ul>
<p>This function is used to change the behavior of an existing mock for a single
invocation. Once invocation <code>onCall</code> has occurred, the mock will revert to
whatever behavior it would have used had <code>mockImplementationOnce()</code> not been
called.</p>
<p>The following example creates a mock function using <code>t.mock.fn()</code>, calls the
mock function, changes the mock implementation to a different function for the
next invocation, and then resumes its previous behavior.</p>
<pre><code class="language-js">test('changes a mock behavior once', (t) =&gt; {
  let cnt = 0;

  function addOne() {
    cnt++;
    return cnt;
  }

  function addTwo() {
    cnt += 2;
    return cnt;
  }

  const fn = t.mock.fn(addOne);

  assert.strictEqual(fn(), 1);
  fn.mock.mockImplementationOnce(addTwo);
  assert.strictEqual(fn(), 3);
  assert.strictEqual(fn(), 4);
});
</code></pre>
<h3><code>ctx.resetCalls()</code></h3>
<p>Resets the call history of the mock function.</p>
<h3><code>ctx.restore()</code></h3>
<p>Resets the implementation of the mock function to its original behavior. The
mock can still be used after calling this function.</p>
<h2>Class: <code>MockModuleContext</code></h2>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<p>The <code>MockModuleContext</code> class is used to manipulate the behavior of module mocks
created via the <a href="#class-mocktracker"><code>MockTracker</code></a> APIs.</p>
<h3><code>ctx.restore()</code></h3>
<p>Resets the implementation of the mock module.</p>
<h2>Class: <code>MockPropertyContext</code></h2>
<p>The <code>MockPropertyContext</code> class is used to inspect or manipulate the behavior
of property mocks created via the <a href="#class-mocktracker"><code>MockTracker</code></a> APIs.</p>
<h3><code>ctx.accesses</code></h3>
<ul>
<li>Type: {Array}</li>
</ul>
<p>A getter that returns a copy of the internal array used to track accesses (get/set) to
the mocked property. Each entry in the array is an object with the following properties:</p>
<ul>
<li><code>type</code> {string} Either <code>'get'</code> or <code>'set'</code>, indicating the type of access.</li>
<li><code>value</code> {any} The value that was read (for <code>'get'</code>) or written (for <code>'set'</code>).</li>
<li><code>stack</code> {Error} An <code>Error</code> object whose stack can be used to determine the
callsite of the mocked function invocation.</li>
</ul>
<h3><code>ctx.accessCount()</code></h3>
<ul>
<li>Returns: {integer} The number of times that the property was accessed (read or written).</li>
</ul>
<p>This function returns the number of times that the property was accessed.
This function is more efficient than checking <code>ctx.accesses.length</code> because
<code>ctx.accesses</code> is a getter that creates a copy of the internal access tracking array.</p>
<h3><code>ctx.mockImplementation(value)</code></h3>
<ul>
<li><code>value</code> {any} The new value to be set as the mocked property value.</li>
</ul>
<p>This function is used to change the value returned by the mocked property getter.</p>
<h3><code>ctx.mockImplementationOnce(value[, onAccess])</code></h3>
<ul>
<li><code>value</code> {any} The value to be used as the mock's
implementation for the invocation number specified by <code>onAccess</code>.</li>
<li><code>onAccess</code> {integer} The invocation number that will use <code>value</code>. If
the specified invocation has already occurred then an exception is thrown.
<strong>Default:</strong> The number of the next invocation.</li>
</ul>
<p>This function is used to change the behavior of an existing mock for a single
invocation. Once invocation <code>onAccess</code> has occurred, the mock will revert to
whatever behavior it would have used had <code>mockImplementationOnce()</code> not been
called.</p>
<p>The following example creates a mock function using <code>t.mock.property()</code>, calls the
mock property, changes the mock implementation to a different value for the
next invocation, and then resumes its previous behavior.</p>
<pre><code class="language-js">test('changes a mock behavior once', (t) =&gt; {
  const obj = { foo: 1 };

  const prop = t.mock.property(obj, 'foo', 5);

  assert.strictEqual(obj.foo, 5);
  prop.mock.mockImplementationOnce(25);
  assert.strictEqual(obj.foo, 25);
  assert.strictEqual(obj.foo, 5);
});
</code></pre>
<h4>Caveat</h4>
<p>For consistency with the rest of the mocking API, this function treats both property gets and sets
as accesses. If a property set occurs at the same access index, the &quot;once&quot; value will be consumed
by the set operation, and the mocked property value will be changed to the &quot;once&quot; value. This may
lead to unexpected behavior if you intend the &quot;once&quot; value to only be used for a get operation.</p>
<h3><code>ctx.resetAccesses()</code></h3>
<p>Resets the access history of the mocked property.</p>
<h3><code>ctx.restore()</code></h3>
<p>Resets the implementation of the mock property to its original behavior. The
mock can still be used after calling this function.</p>
<h2>Class: <code>MockTracker</code></h2>
<p>The <code>MockTracker</code> class is used to manage mocking functionality. The test runner
module provides a top level <code>mock</code> export which is a <code>MockTracker</code> instance.
Each test also provides its own <code>MockTracker</code> instance via the test context's
<code>mock</code> property.</p>
<h3><code>mock.fn([original[, implementation]][, options])</code></h3>
<ul>
<li><code>original</code> {Function|AsyncFunction} An optional function to create a mock on.
<strong>Default:</strong> A no-op function.</li>
<li><code>implementation</code> {Function|AsyncFunction} An optional function used as the
mock implementation for <code>original</code>. This is useful for creating mocks that
exhibit one behavior for a specified number of calls and then restore the
behavior of <code>original</code>. <strong>Default:</strong> The function specified by <code>original</code>.</li>
<li><code>options</code> {Object} Optional configuration options for the mock function. The
following properties are supported:
<ul>
<li><code>times</code> {integer} The number of times that the mock will use the behavior of
<code>implementation</code>. Once the mock function has been called <code>times</code> times, it
will automatically restore the behavior of <code>original</code>. This value must be an
integer greater than zero. <strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
<li>Returns: {Proxy} The mocked function. The mocked function contains a special
<code>mock</code> property, which is an instance of <a href="#class-mockfunctioncontext"><code>MockFunctionContext</code></a>, and can
be used for inspecting and changing the behavior of the mocked function.</li>
</ul>
<p>This function is used to create a mock function.</p>
<p>The following example creates a mock function that increments a counter by one
on each invocation. The <code>times</code> option is used to modify the mock behavior such
that the first two invocations add two to the counter instead of one.</p>
<pre><code class="language-js">test('mocks a counting function', (t) =&gt; {
  let cnt = 0;

  function addOne() {
    cnt++;
    return cnt;
  }

  function addTwo() {
    cnt += 2;
    return cnt;
  }

  const fn = t.mock.fn(addOne, addTwo, { times: 2 });

  assert.strictEqual(fn(), 2);
  assert.strictEqual(fn(), 4);
  assert.strictEqual(fn(), 5);
  assert.strictEqual(fn(), 6);
});
</code></pre>
<h3><code>mock.getter(object, methodName[, implementation][, options])</code></h3>
<p>This function is syntax sugar for <a href="#mockmethodobject-methodname-implementation-options"><code>MockTracker.method</code></a> with <code>options.getter</code>
set to <code>true</code>.</p>
<h3><code>mock.method(object, methodName[, implementation][, options])</code></h3>
<ul>
<li><code>object</code> {Object} The object whose method is being mocked.</li>
<li><code>methodName</code> {string|symbol} The identifier of the method on <code>object</code> to mock.
If <code>object[methodName]</code> is not a function, an error is thrown.</li>
<li><code>implementation</code> {Function|AsyncFunction} An optional function used as the
mock implementation for <code>object[methodName]</code>. <strong>Default:</strong> The original method
specified by <code>object[methodName]</code>.</li>
<li><code>options</code> {Object} Optional configuration options for the mock method. The
following properties are supported:
<ul>
<li><code>getter</code> {boolean} If <code>true</code>, <code>object[methodName]</code> is treated as a getter.
This option cannot be used with the <code>setter</code> option. <strong>Default:</strong> false.</li>
<li><code>setter</code> {boolean} If <code>true</code>, <code>object[methodName]</code> is treated as a setter.
This option cannot be used with the <code>getter</code> option. <strong>Default:</strong> false.</li>
<li><code>times</code> {integer} The number of times that the mock will use the behavior of
<code>implementation</code>. Once the mocked method has been called <code>times</code> times, it
will automatically restore the original behavior. This value must be an
integer greater than zero. <strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
<li>Returns: {Proxy} The mocked method. The mocked method contains a special
<code>mock</code> property, which is an instance of <a href="#class-mockfunctioncontext"><code>MockFunctionContext</code></a>, and can
be used for inspecting and changing the behavior of the mocked method.</li>
</ul>
<p>This function is used to create a mock on an existing object method. The
following example demonstrates how a mock is created on an existing object
method.</p>
<pre><code class="language-js">test('spies on an object method', (t) =&gt; {
  const number = {
    value: 5,
    subtract(a) {
      return this.value - a;
    },
  };

  t.mock.method(number, 'subtract');
  assert.strictEqual(number.subtract.mock.callCount(), 0);
  assert.strictEqual(number.subtract(3), 2);
  assert.strictEqual(number.subtract.mock.callCount(), 1);

  const call = number.subtract.mock.calls[0];

  assert.deepStrictEqual(call.arguments, [3]);
  assert.strictEqual(call.result, 2);
  assert.strictEqual(call.error, undefined);
  assert.strictEqual(call.target, undefined);
  assert.strictEqual(call.this, number);
});
</code></pre>
<h3><code>mock.module(specifier[, options])</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<ul>
<li><code>specifier</code> {string|URL} A string identifying the module to mock.</li>
<li><code>options</code> {Object} Optional configuration options for the mock module. The
following properties are supported:
<ul>
<li><code>cache</code> {boolean} If <code>false</code>, each call to <code>require()</code> or <code>import()</code>
generates a new mock module. If <code>true</code>, subsequent calls will return the same
module mock, and the mock module is inserted into the CommonJS cache.
<strong>Default:</strong> false.</li>
<li><code>exports</code> {Object} Optional mocked exports. The <code>default</code> property, if
provided, is used as the mocked module's default export. All other own
enumerable properties are used as named exports.
<strong>This option cannot be used with <code>defaultExport</code> or <code>namedExports</code>.</strong>
<ul>
<li>If the mock is a CommonJS or builtin module, <code>exports.default</code> is used as
the value of <code>module.exports</code>.</li>
<li>If <code>exports.default</code> is not provided for a CommonJS or builtin mock,
<code>module.exports</code> defaults to an empty object.</li>
<li>If named exports are provided with a non-object default export, the mock
throws an exception when used as a CommonJS or builtin module.</li>
</ul>
</li>
<li><code>defaultExport</code> {any} An optional value used as the mocked module's default
export. If this value is not provided, ESM mocks do not include a default
export. If the mock is a CommonJS or builtin module, this setting is used as
the value of <code>module.exports</code>. If this value is not provided, CJS and builtin
mocks use an empty object as the value of <code>module.exports</code>.
<strong>This option cannot be used with <code>options.exports</code>.</strong>
This option is deprecated and will be removed in a later version.
Prefer <code>options.exports.default</code>.</li>
<li><code>namedExports</code> {Object} An optional object whose keys and values are used to
create the named exports of the mock module. If the mock is a CommonJS or
builtin module, these values are copied onto <code>module.exports</code>. Therefore, if a
mock is created with both named exports and a non-object default export, the
mock will throw an exception when used as a CJS or builtin module.
<strong>This option cannot be used with <code>options.exports</code>.</strong>
This option is deprecated and will be removed in a later version.
Prefer <code>options.exports</code>.</li>
</ul>
</li>
<li>Returns: {MockModuleContext} An object that can be used to manipulate the mock.</li>
</ul>
<p>This function is used to mock the exports of ECMAScript modules, CommonJS modules, JSON modules, and
Node.js builtin modules. Any references to the original module prior to mocking are not impacted. In
order to enable module mocking, Node.js must be started with the
<a href="cli.md#--experimental-test-module-mocks"><code>--experimental-test-module-mocks</code></a> command-line flag.</p>
<p><strong>Note</strong>: <a href="module.md#customization-hooks">module customization hooks</a> registered via the <strong>synchronous</strong> API effect resolution of
the <code>specifier</code> provided to <code>mock.module</code>. Customization hooks registered via the <strong>asynchronous</strong>
API are currently ignored (because the test runner's loader is synchronous, and node does not
support multi-chain / cross-chain loading).</p>
<p>The following example demonstrates how a mock is created for a module.</p>
<pre><code class="language-js">test('mocks a builtin module in both module systems', async (t) =&gt; {
  // Create a mock of 'node:readline' with a named export named 'foo', which
  // does not exist in the original 'node:readline' module.
  const mock = t.mock.module('node:readline', {
    exports: { foo: () =&gt; 42 },
  });

  let esmImpl = await import('node:readline');
  let cjsImpl = require('node:readline');

  // cursorTo() is an export of the original 'node:readline' module.
  assert.strictEqual(esmImpl.cursorTo, undefined);
  assert.strictEqual(cjsImpl.cursorTo, undefined);
  assert.strictEqual(esmImpl.foo(), 42);
  assert.strictEqual(cjsImpl.foo(), 42);

  mock.restore();

  // The mock is restored, so the original builtin module is returned.
  esmImpl = await import('node:readline');
  cjsImpl = require('node:readline');

  assert.strictEqual(typeof esmImpl.cursorTo, 'function');
  assert.strictEqual(typeof cjsImpl.cursorTo, 'function');
  assert.strictEqual(esmImpl.foo, undefined);
  assert.strictEqual(cjsImpl.foo, undefined);
});
</code></pre>
<h3><code>mock.property(object, propertyName[, value])</code></h3>
<ul>
<li><code>object</code> {Object} The object whose value is being mocked.</li>
<li><code>propertyName</code> {string|symbol} The identifier of the property on <code>object</code> to mock.</li>
<li><code>value</code> {any} An optional value used as the mock value
for <code>object[propertyName]</code>. <strong>Default:</strong> The original property value.</li>
<li>Returns: {Proxy} A proxy to the mocked object. The mocked object contains a
special <code>mock</code> property, which is an instance of <a href="#class-mockpropertycontext"><code>MockPropertyContext</code></a>, and
can be used for inspecting and changing the behavior of the mocked property.</li>
</ul>
<p>Creates a mock for a property value on an object. This allows you to track and control access to a specific property,
including how many times it is read (getter) or written (setter), and to restore the original value after mocking.</p>
<pre><code class="language-js">test('mocks a property value', (t) =&gt; {
  const obj = { foo: 42 };
  const prop = t.mock.property(obj, 'foo', 100);

  assert.strictEqual(obj.foo, 100);
  assert.strictEqual(prop.mock.accessCount(), 1);
  assert.strictEqual(prop.mock.accesses[0].type, 'get');
  assert.strictEqual(prop.mock.accesses[0].value, 100);

  obj.foo = 200;
  assert.strictEqual(prop.mock.accessCount(), 2);
  assert.strictEqual(prop.mock.accesses[1].type, 'set');
  assert.strictEqual(prop.mock.accesses[1].value, 200);

  prop.mock.restore();
  assert.strictEqual(obj.foo, 42);
});
</code></pre>
<h3><code>mock.reset()</code></h3>
<p>This function restores the default behavior of all mocks that were previously
created by this <code>MockTracker</code> and disassociates the mocks from the
<code>MockTracker</code> instance. Once disassociated, the mocks can still be used, but the
<code>MockTracker</code> instance can no longer be used to reset their behavior or
otherwise interact with them.</p>
<p>After each test completes, this function is called on the test context's
<code>MockTracker</code>. If the global <code>MockTracker</code> is used extensively, calling this
function manually is recommended.</p>
<h3><code>mock.restoreAll()</code></h3>
<p>This function restores the default behavior of all mocks that were previously
created by this <code>MockTracker</code>. Unlike <code>mock.reset()</code>, <code>mock.restoreAll()</code> does
not disassociate the mocks from the <code>MockTracker</code> instance.</p>
<h3><code>mock.setter(object, methodName[, implementation][, options])</code></h3>
<p>This function is syntax sugar for <a href="#mockmethodobject-methodname-implementation-options"><code>MockTracker.method</code></a> with <code>options.setter</code>
set to <code>true</code>.</p>
<h2>Class: <code>MockTimers</code></h2>
<p>Mocking timers is a technique commonly used in software testing to simulate and
control the behavior of timers, such as <code>setInterval</code> and <code>setTimeout</code>,
without actually waiting for the specified time intervals.</p>
<p>MockTimers is also able to mock the <code>Date</code> object.</p>
<p>The <a href="#class-mocktracker"><code>MockTracker</code></a> provides a top-level <code>timers</code> export
which is a <code>MockTimers</code> instance.</p>
<h3><code>timers.enable([enableOptions])</code></h3>
<p>Enables timer mocking for the specified timers.</p>
<ul>
<li><code>enableOptions</code> {Object} Optional configuration options for enabling timer
mocking. The following properties are supported:
<ul>
<li><code>apis</code> {Array} An optional array containing the timers to mock.
The currently supported timer values are <code>'setInterval'</code>, <code>'setTimeout'</code>, <code>'setImmediate'</code>,
and <code>'Date'</code>. <strong>Default:</strong> <code>['setInterval', 'setTimeout', 'setImmediate', 'Date']</code>.
If no array is provided, all time related APIs (<code>'setInterval'</code>, <code>'clearInterval'</code>,
<code>'setTimeout'</code>, <code>'clearTimeout'</code>, <code>'setImmediate'</code>, <code>'clearImmediate'</code>, and
<code>'Date'</code>) will be mocked by default.</li>
<li><code>now</code> {number | Date} An optional number or Date object representing the
initial time (in milliseconds) to use as the value
for <code>Date.now()</code>. <strong>Default:</strong> <code>0</code>.</li>
</ul>
</li>
</ul>
<p><strong>Note:</strong> When you enable mocking for a specific timer, its associated
clear function will also be implicitly mocked.</p>
<p><strong>Note:</strong> Mocking <code>Date</code> will affect the behavior of the mocked timers
as they use the same internal clock.</p>
<p>Example usage without setting initial time:</p>
<pre><code class="language-mjs">import { mock } from 'node:test';
mock.timers.enable({ apis: ['setInterval'] });
</code></pre>
<pre><code class="language-cjs">const { mock } = require('node:test');
mock.timers.enable({ apis: ['setInterval'] });
</code></pre>
<p>The above example enables mocking for the <code>setInterval</code> timer and
implicitly mocks the <code>clearInterval</code> function. Only the <code>setInterval</code>
and <code>clearInterval</code> functions from <a href="./timers.md">node:timers</a>,
<a href="./timers.md#timers-promises-api">node:timers/promises</a>, and
<code>globalThis</code> will be mocked.</p>
<p>Example usage with initial time set</p>
<pre><code class="language-mjs">import { mock } from 'node:test';
mock.timers.enable({ apis: ['Date'], now: 1000 });
</code></pre>
<pre><code class="language-cjs">const { mock } = require('node:test');
mock.timers.enable({ apis: ['Date'], now: 1000 });
</code></pre>
<p>Example usage with initial Date object as time set</p>
<pre><code class="language-mjs">import { mock } from 'node:test';
mock.timers.enable({ apis: ['Date'], now: new Date() });
</code></pre>
<pre><code class="language-cjs">const { mock } = require('node:test');
mock.timers.enable({ apis: ['Date'], now: new Date() });
</code></pre>
<p>Alternatively, if you call <code>mock.timers.enable()</code> without any parameters:</p>
<p>All timers (<code>'setInterval'</code>, <code>'clearInterval'</code>, <code>'setTimeout'</code>, <code>'clearTimeout'</code>,
<code>'setImmediate'</code>, and <code>'clearImmediate'</code>) will be mocked. The <code>setInterval</code>,
<code>clearInterval</code>, <code>setTimeout</code>, <code>clearTimeout</code>, <code>setImmediate</code>, and
<code>clearImmediate</code> functions from <code>node:timers</code>, <code>node:timers/promises</code>, and
<code>globalThis</code> will be mocked. As well as the global <code>Date</code> object.</p>
<h3><code>timers.reset()</code></h3>
<p>This function restores the default behavior of all mocks that were previously
created by this  <code>MockTimers</code> instance and disassociates the mocks
from the  <code>MockTracker</code> instance.</p>
<p><strong>Note:</strong> After each test completes, this function is called on
the test context's  <code>MockTracker</code>.</p>
<pre><code class="language-mjs">import { mock } from 'node:test';
mock.timers.reset();
</code></pre>
<pre><code class="language-cjs">const { mock } = require('node:test');
mock.timers.reset();
</code></pre>
<h3><code>timers[Symbol.dispose]()</code></h3>
<p>Calls <code>timers.reset()</code>.</p>
<h3><code>timers.tick([milliseconds])</code></h3>
<p>Advances time for all mocked timers.</p>
<ul>
<li><code>milliseconds</code> {number} The amount of time, in milliseconds,
to advance the timers. <strong>Default:</strong> <code>1</code>.</li>
</ul>
<p><strong>Note:</strong> This diverges from how <code>setTimeout</code> in Node.js behaves and accepts
only positive numbers. In Node.js, <code>setTimeout</code> with negative numbers is
only supported for web compatibility reasons.</p>
<p>The following example mocks a <code>setTimeout</code> function and
by using <code>.tick</code> advances in
time triggering all pending timers.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  context.mock.timers.enable({ apis: ['setTimeout'] });

  setTimeout(fn, 9999);

  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  context.mock.timers.tick(9999);

  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();
  context.mock.timers.enable({ apis: ['setTimeout'] });

  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);

  // Advance in time
  context.mock.timers.tick(9999);

  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<p>Alternatively, the <code>.tick</code> function can be called many times</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();
  context.mock.timers.enable({ apis: ['setTimeout'] });
  const nineSecs = 9000;
  setTimeout(fn, nineSecs);

  const threeSeconds = 3000;
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);

  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();
  context.mock.timers.enable({ apis: ['setTimeout'] });
  const nineSecs = 9000;
  setTimeout(fn, nineSecs);

  const threeSeconds = 3000;
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);
  context.mock.timers.tick(threeSeconds);

  assert.strictEqual(fn.mock.callCount(), 1);
});
</code></pre>
<p>Advancing time using <code>.tick</code> will also advance the time for any <code>Date</code> object
created after the mock was enabled (if <code>Date</code> was also set to be mocked).</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  setTimeout(fn, 9999);

  assert.strictEqual(fn.mock.callCount(), 0);
  assert.strictEqual(Date.now(), 0);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });

  setTimeout(fn, 9999);
  assert.strictEqual(fn.mock.callCount(), 0);
  assert.strictEqual(Date.now(), 0);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(fn.mock.callCount(), 1);
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<h4>Using clear functions</h4>
<p>As mentioned, all clear functions from timers (<code>clearTimeout</code>, <code>clearInterval</code>,and
<code>clearImmediate</code>) are implicitly mocked. Take a look at this example using <code>setTimeout</code>:</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  const id = setTimeout(fn, 9999);

  // Implicitly mocked as well
  clearTimeout(id);
  context.mock.timers.tick(9999);

  // As that setTimeout was cleared the mock function will never be called
  assert.strictEqual(fn.mock.callCount(), 0);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', (context) =&gt; {
  const fn = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  const id = setTimeout(fn, 9999);

  // Implicitly mocked as well
  clearTimeout(id);
  context.mock.timers.tick(9999);

  // As that setTimeout was cleared the mock function will never be called
  assert.strictEqual(fn.mock.callCount(), 0);
});
</code></pre>
<h4>Working with Node.js timers modules</h4>
<p>Once you enable mocking timers, <a href="./timers.md">node:timers</a>,
<a href="./timers.md#timers-promises-api">node:timers/promises</a> modules,
and timers from the Node.js global context are enabled:</p>
<p><strong>Note:</strong> Destructuring functions such as
<code>import { setTimeout } from 'node:timers'</code> is currently
not supported by this API.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';
import nodeTimers from 'node:timers';
import nodeTimersPromises from 'node:timers/promises';

test('mocks setTimeout to be executed synchronously without having to actually wait for it', async (context) =&gt; {
  const globalTimeoutObjectSpy = context.mock.fn();
  const nodeTimerSpy = context.mock.fn();
  const nodeTimerPromiseSpy = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(globalTimeoutObjectSpy, 9999);
  nodeTimers.setTimeout(nodeTimerSpy, 9999);

  const promise = nodeTimersPromises.setTimeout(9999).then(nodeTimerPromiseSpy);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(globalTimeoutObjectSpy.mock.callCount(), 1);
  assert.strictEqual(nodeTimerSpy.mock.callCount(), 1);
  await promise;
  assert.strictEqual(nodeTimerPromiseSpy.mock.callCount(), 1);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');
const nodeTimers = require('node:timers');
const nodeTimersPromises = require('node:timers/promises');

test('mocks setTimeout to be executed synchronously without having to actually wait for it', async (context) =&gt; {
  const globalTimeoutObjectSpy = context.mock.fn();
  const nodeTimerSpy = context.mock.fn();
  const nodeTimerPromiseSpy = context.mock.fn();

  // Optionally choose what to mock
  context.mock.timers.enable({ apis: ['setTimeout'] });
  setTimeout(globalTimeoutObjectSpy, 9999);
  nodeTimers.setTimeout(nodeTimerSpy, 9999);

  const promise = nodeTimersPromises.setTimeout(9999).then(nodeTimerPromiseSpy);

  // Advance in time
  context.mock.timers.tick(9999);
  assert.strictEqual(globalTimeoutObjectSpy.mock.callCount(), 1);
  assert.strictEqual(nodeTimerSpy.mock.callCount(), 1);
  await promise;
  assert.strictEqual(nodeTimerPromiseSpy.mock.callCount(), 1);
});
</code></pre>
<p>In Node.js, <code>setInterval</code> from <a href="./timers.md#timers-promises-api">node:timers/promises</a>
is an <code>AsyncGenerator</code> and is also supported by this API:</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';
import nodeTimersPromises from 'node:timers/promises';
test('should tick five times testing a real use case', async (context) =&gt; {
  context.mock.timers.enable({ apis: ['setInterval'] });

  const expectedIterations = 3;
  const interval = 1000;
  const startedAt = Date.now();
  async function run() {
    const times = [];
    for await (const time of nodeTimersPromises.setInterval(interval, startedAt)) {
      times.push(time);
      if (times.length === expectedIterations) break;
    }
    return times;
  }

  const r = run();
  context.mock.timers.tick(interval);
  context.mock.timers.tick(interval);
  context.mock.timers.tick(interval);

  const timeResults = await r;
  assert.strictEqual(timeResults.length, expectedIterations);
  for (let it = 1; it &lt; expectedIterations; it++) {
    assert.strictEqual(timeResults[it - 1], startedAt + (interval * it));
  }
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');
const nodeTimersPromises = require('node:timers/promises');
test('should tick five times testing a real use case', async (context) =&gt; {
  context.mock.timers.enable({ apis: ['setInterval'] });

  const expectedIterations = 3;
  const interval = 1000;
  const startedAt = Date.now();
  async function run() {
    const times = [];
    for await (const time of nodeTimersPromises.setInterval(interval, startedAt)) {
      times.push(time);
      if (times.length === expectedIterations) break;
    }
    return times;
  }

  const r = run();
  context.mock.timers.tick(interval);
  context.mock.timers.tick(interval);
  context.mock.timers.tick(interval);

  const timeResults = await r;
  assert.strictEqual(timeResults.length, expectedIterations);
  for (let it = 1; it &lt; expectedIterations; it++) {
    assert.strictEqual(timeResults[it - 1], startedAt + (interval * it));
  }
});
</code></pre>
<h3><code>timers.runAll()</code></h3>
<p>Triggers all pending mocked timers immediately. If the <code>Date</code> object is also
mocked, it will also advance the <code>Date</code> object to the furthest timer's time.</p>
<p>The example below triggers all pending timers immediately,
causing them to execute without any delay.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('runAll functions following the given order', (context) =&gt; {
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const results = [];
  setTimeout(() =&gt; results.push(1), 9999);

  // Notice that if both timers have the same timeout,
  // the order of execution is guaranteed
  setTimeout(() =&gt; results.push(3), 8888);
  setTimeout(() =&gt; results.push(2), 8888);

  assert.deepStrictEqual(results, []);

  context.mock.timers.runAll();
  assert.deepStrictEqual(results, [3, 2, 1]);
  // The Date object is also advanced to the furthest timer's time
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('runAll functions following the given order', (context) =&gt; {
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const results = [];
  setTimeout(() =&gt; results.push(1), 9999);

  // Notice that if both timers have the same timeout,
  // the order of execution is guaranteed
  setTimeout(() =&gt; results.push(3), 8888);
  setTimeout(() =&gt; results.push(2), 8888);

  assert.deepStrictEqual(results, []);

  context.mock.timers.runAll();
  assert.deepStrictEqual(results, [3, 2, 1]);
  // The Date object is also advanced to the furthest timer's time
  assert.strictEqual(Date.now(), 9999);
});
</code></pre>
<p><strong>Note:</strong> The <code>runAll()</code> function is specifically designed for
triggering timers in the context of timer mocking.
It does not have any effect on real-time system
clocks or actual timers outside of the mocking environment.</p>
<h3><code>timers.setTime(milliseconds)</code></h3>
<p>Sets the current Unix timestamp that will be used as reference for any mocked
<code>Date</code> objects.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('runAll functions following the given order', (context) =&gt; {
  const now = Date.now();
  const setTime = 1000;
  // Date.now is not mocked
  assert.deepStrictEqual(Date.now(), now);

  context.mock.timers.enable({ apis: ['Date'] });
  context.mock.timers.setTime(setTime);
  // Date.now is now 1000
  assert.strictEqual(Date.now(), setTime);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('setTime replaces current time', (context) =&gt; {
  const now = Date.now();
  const setTime = 1000;
  // Date.now is not mocked
  assert.deepStrictEqual(Date.now(), now);

  context.mock.timers.enable({ apis: ['Date'] });
  context.mock.timers.setTime(setTime);
  // Date.now is now 1000
  assert.strictEqual(Date.now(), setTime);
});
</code></pre>
<h4>Dates and Timers working together</h4>
<p>Dates and timer objects are dependent on each other. If you use <code>setTime()</code> to
pass the current time to the mocked <code>Date</code> object, the set timers with
<code>setTimeout</code> and <code>setInterval</code> will <strong>not</strong> be affected.</p>
<p>However, the <code>tick</code> method <strong>will</strong> advance the mocked <code>Date</code> object.</p>
<pre><code class="language-mjs">import assert from 'node:assert';
import { test } from 'node:test';

test('runAll functions following the given order', (context) =&gt; {
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const results = [];
  setTimeout(() =&gt; results.push(1), 9999);

  assert.deepStrictEqual(results, []);
  context.mock.timers.setTime(12000);
  assert.deepStrictEqual(results, []);
  // The date is advanced but the timers don't tick
  assert.strictEqual(Date.now(), 12000);
});
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');
const { test } = require('node:test');

test('runAll functions following the given order', (context) =&gt; {
  context.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
  const results = [];
  setTimeout(() =&gt; results.push(1), 9999);

  assert.deepStrictEqual(results, []);
  context.mock.timers.setTime(12000);
  assert.deepStrictEqual(results, []);
  // The date is advanced but the timers don't tick
  assert.strictEqual(Date.now(), 12000);
});
</code></pre>
<h2>Class: <code>TestsStream</code></h2>
<ul>
<li>Extends {Readable}</li>
</ul>
<p>A successful call to <a href="#runoptions"><code>run()</code></a> method will return a new {TestsStream}
object, streaming a series of events representing the execution of the tests.
<code>TestsStream</code> will emit events, in the order of the tests definition</p>
<p>Some of the events are guaranteed to be emitted in the same order as the tests
are defined, while others are emitted in the order that the tests execute.</p>
<p>The following tables summarize all events by scope.</p>
<p>Test scoped events are emitted once per test or suite. Most of them come in
pairs: a declaration ordered event, buffered so that events are emitted in the
same order as the tests are defined, and one or more corresponding execution
ordered events, emitted immediately as the tests execute.</p>
<table>
<thead>
<tr>
<th>Declaration ordered (buffered)</th>
<th>Execution ordered (immediate)</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#event-teststart"><code>'test:start'</code></a></td>
<td><a href="#event-testenqueue"><code>'test:enqueue'</code></a> followed by <a href="#event-testdequeue"><code>'test:dequeue'</code></a></td>
</tr>
<tr>
<td><a href="#event-testpass"><code>'test:pass'</code></a></td>
<td><a href="#event-testcomplete"><code>'test:complete'</code></a> (<code>details.passed</code> is <code>true</code>)</td>
</tr>
<tr>
<td><a href="#event-testfail"><code>'test:fail'</code></a></td>
<td><a href="#event-testcomplete"><code>'test:complete'</code></a> (<code>details.passed</code> is <code>false</code>)</td>
</tr>
<tr>
<td><a href="#event-testplan"><code>'test:plan'</code></a></td>
<td></td>
</tr>
<tr>
<td><a href="#event-testdiagnostic"><code>'test:diagnostic'</code></a></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="#event-testlog"><code>'test:log'</code></a></td>
</tr>
</tbody>
</table>
<p><a href="#event-testlog"><code>'test:log'</code></a> is deliberately execution ordered only: it is the live
counterpart of <a href="#event-testdiagnostic"><code>'test:diagnostic'</code></a>'s buffered reporting.</p>
<p>File scoped and global events are always emitted immediately, in execution
order.</p>
<p>File scoped events are emitted once per test file:</p>
<table>
<thead>
<tr>
<th>Event</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#event-teststderr"><code>'test:stderr'</code></a></td>
<td>Only emitted if the <code>--test</code> flag is passed.</td>
</tr>
<tr>
<td><a href="#event-teststdout"><code>'test:stdout'</code></a></td>
<td>Only emitted if the <code>--test</code> flag is passed.</td>
</tr>
<tr>
<td><a href="#event-testsummary"><code>'test:summary'</code></a></td>
<td>Per file, only when process isolation is used.</td>
</tr>
</tbody>
</table>
<p>Global events are emitted once per test run:</p>
<table>
<thead>
<tr>
<th>Event</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#event-testsummary"><code>'test:summary'</code></a></td>
<td>The final cumulative summary.</td>
</tr>
<tr>
<td><a href="#event-testcoverage"><code>'test:coverage'</code></a></td>
<td>Only when code coverage is enabled.</td>
</tr>
<tr>
<td><a href="#event-testinterrupted"><code>'test:interrupted'</code></a></td>
<td>Only when the run receives <code>SIGINT</code>.</td>
</tr>
<tr>
<td><a href="#event-testwatchdrained"><code>'test:watch:drained'</code></a></td>
<td>Watch mode only.</td>
</tr>
<tr>
<td><a href="#event-testwatchrestarted"><code>'test:watch:restarted'</code></a></td>
<td>Watch mode only.</td>
</tr>
</tbody>
</table>
<p>The root test also emits <a href="#event-testplan"><code>'test:plan'</code></a> and <a href="#event-testdiagnostic"><code>'test:diagnostic'</code></a> events
at the end of the run to report run level totals.</p>
<h3>Event lifecycle</h3>
<p>The tables above group the events; the diagram below places them on a
timeline. The declaration ordered events form the main spine, buffered so that
a reporter sees them in source order, while each execution ordered twin is
emitted immediately, when the work actually happens. In particular,
<a href="#event-teststart"><code>'test:start'</code></a> marks when a test begins <em>reporting</em> its own and its
subtests' status, not when its body begins executing; that moment is
<a href="#event-testdequeue"><code>'test:dequeue'</code></a>.</p>
<pre><code class="language-text">                     node:test reporter event lifecycle
   main spine = DECLARATION order (buffered; matches source order)
   right side = EXECUTION order (emitted immediately); ◄ marks each twin

  LEAF TEST
  ─────────
   ┌──────────────┐                   test:enqueue
   │ test:start   │ ◄──── twins ────  (queued for execution;
   └──────────────┘                    type: 'suite' | 'test')
        │  begins REPORTING           test:dequeue
        │  (not the start of          (about to run; emitted right
        │   the test body)             before the test body runs)
        │
        │     [ between the twins, on the execution timeline, the test
        │       body runs: context.log() emits test:log live, and
        │       test:stdout / test:stderr stream with --test ]
        │
        ▼
   ┌───────────────────────┐
   │ test:pass │ test:fail │ ◄──── twin ────  test:complete
   └───────────────────────┘   result         (details.passed says which)
        │
        ▼
   test:diagnostic    the test's own context.diagnostic() messages,
                      buffered while it runs, flushed after its result


  SUITE / PARENT TEST   (each subtest is the whole LEAF flow above)
  ───────────────────
   test:start ─► [ full flow of each subtest ... ] ─►
        test:plan (count = subtests) ─► test:pass │ test:fail ─►
        test:diagnostic


  RUN-LEVEL FINALE   (root, after all top-level tests)
  ────────────────
   test:plan         top-level count
        │
        ▼
   test:diagnostic   x N   tests, suites, pass, fail, cancelled,
        │                  skipped, todo, duration_ms (+ coverage errors)
        ▼
   test:coverage     only if coverage is enabled
        │
        ▼
   test:summary  ─►  stream ends


  INTERRUPTION   (SIGINT, e.g. Ctrl+C, while tests are still running)
  ────────────
   test:interrupted   the innermost tests still running at that moment
        │             (not emitted if none were running)
        ▼
   the run exits immediately — the buffered spine never flushes, so
   neither the finale above nor those tests' own results are emitted
</code></pre>
<h3>Event: <code>'test:coverage'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>summary</code> {Object} An object containing the coverage report.
<ul>
<li><code>files</code> {Array} An array of coverage reports for individual files. Each
report is an object with the following schema:
<ul>
<li><code>path</code> {string} The absolute path of the file.</li>
<li><code>totalLineCount</code> {number} The total number of lines.</li>
<li><code>totalBranchCount</code> {number} The total number of branches.</li>
<li><code>totalFunctionCount</code> {number} The total number of functions.</li>
<li><code>coveredLineCount</code> {number} The number of covered lines.</li>
<li><code>coveredBranchCount</code> {number} The number of covered branches.</li>
<li><code>coveredFunctionCount</code> {number} The number of covered functions.</li>
<li><code>coveredLinePercent</code> {number} The percentage of lines covered.</li>
<li><code>coveredBranchPercent</code> {number} The percentage of branches covered.</li>
<li><code>coveredFunctionPercent</code> {number} The percentage of functions covered.</li>
<li><code>functions</code> {Array} An array of functions representing function
coverage.
<ul>
<li><code>name</code> {string} The name of the function.</li>
<li><code>line</code> {number} The line number where the function is defined.</li>
<li><code>count</code> {number} The number of times the function was called.</li>
</ul>
</li>
<li><code>branches</code> {Array} An array of branches representing branch coverage.
<ul>
<li><code>line</code> {number} The line number where the branch is defined.</li>
<li><code>count</code> {number} The number of times the branch was taken.</li>
</ul>
</li>
<li><code>lines</code> {Array} An array of lines representing line
numbers and the number of times they were covered.
<ul>
<li><code>line</code> {number} The line number.</li>
<li><code>count</code> {number} The number of times the line was covered.</li>
</ul>
</li>
</ul>
</li>
<li><code>thresholds</code> {Object} An object containing whether or not the coverage for
each coverage type.
<ul>
<li><code>function</code> {number} The function coverage threshold.</li>
<li><code>branch</code> {number} The branch coverage threshold.</li>
<li><code>line</code> {number} The line coverage threshold.</li>
</ul>
</li>
<li><code>totals</code> {Object} An object containing a summary of coverage for all
files.
<ul>
<li><code>totalLineCount</code> {number} The total number of lines.</li>
<li><code>totalBranchCount</code> {number} The total number of branches.</li>
<li><code>totalFunctionCount</code> {number} The total number of functions.</li>
<li><code>coveredLineCount</code> {number} The number of covered lines.</li>
<li><code>coveredBranchCount</code> {number} The number of covered branches.</li>
<li><code>coveredFunctionCount</code> {number} The number of covered functions.</li>
<li><code>coveredLinePercent</code> {number} The percentage of lines covered.</li>
<li><code>coveredBranchPercent</code> {number} The percentage of branches covered.</li>
<li><code>coveredFunctionPercent</code> {number} The percentage of functions covered.</li>
</ul>
</li>
<li><code>workingDirectory</code> {string} The working directory when code coverage
began. This is useful for displaying relative path names in case the tests
changed the working directory of the Node.js process.</li>
</ul>
</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
</ul>
</li>
</ul>
<p>Emitted when code coverage is enabled and all tests have completed.</p>
<h3>Event: <code>'test:complete'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>details</code> {Object} Additional execution metadata.
<ul>
<li><code>passed</code> {boolean} Whether the test passed or not.</li>
<li><code>duration_ms</code> {number} The duration of the test in milliseconds.</li>
<li><code>error</code> {Error|undefined} An error wrapping the error thrown by the test
if it did not pass.
<ul>
<li><code>cause</code> {Error} The actual error thrown by the test.</li>
</ul>
</li>
<li><code>type</code> {string|undefined} The type of the test, used to denote whether
this is a suite.</li>
</ul>
</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
<li><code>testNumber</code> {number} The ordinal number of the test.</li>
<li><code>todo</code> {string|boolean|undefined} Present if <a href="#contexttodomessage"><code>context.todo</code></a> is called</li>
<li><code>skip</code> {string|boolean|undefined} Present if <a href="#contextskipmessage"><code>context.skip</code></a> is called</li>
</ul>
</li>
</ul>
<p>Emitted when a test completes its execution.
This event is not emitted in the same order as the tests are
defined.
The corresponding declaration ordered events are <code>'test:pass'</code> and <code>'test:fail'</code>.</p>
<h3>Event: <code>'test:dequeue'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
<li><code>type</code> {string} The test type. Either <code>'suite'</code> or <code>'test'</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a test is dequeued, right before it is executed.
This event is not guaranteed to be emitted in the same order as the tests are
defined. The corresponding declaration ordered event is <code>'test:start'</code>.</p>
<h3>Event: <code>'test:diagnostic'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>message</code> {string} The diagnostic message.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>level</code> {string} The severity level of the diagnostic message.
Possible values are:
<ul>
<li><code>'info'</code>: Informational messages.</li>
<li><code>'warn'</code>: Warnings.</li>
<li><code>'error'</code>: Errors.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Emitted when <a href="#contextdiagnosticmessage"><code>context.diagnostic</code></a> is called.
This event is guaranteed to be emitted in the same order as the tests are
defined.</p>
<h3>Event: <code>'test:enqueue'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
<li><code>type</code> {string} The test type. Either <code>'suite'</code> or <code>'test'</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a test is enqueued for execution.</p>
<h3>Event: <code>'test:fail'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>details</code> {Object} Additional execution metadata.
<ul>
<li><code>duration_ms</code> {number} The duration of the test in milliseconds.</li>
<li><code>error</code> {Error} An error wrapping the error thrown by the test.
<ul>
<li><code>cause</code> {Error} The actual error thrown by the test.</li>
</ul>
</li>
<li><code>type</code> {string|undefined} The type of the test, used to denote whether
this is a suite.</li>
<li><code>attempt</code> {number|undefined} The attempt number of the test run,
present only when using the <a href="cli.md#--test-rerun-failures"><code>--test-rerun-failures</code></a> flag.</li>
</ul>
</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
<li><code>testNumber</code> {number} The ordinal number of the test.</li>
<li><code>todo</code> {string|boolean|undefined} Present if <a href="#contexttodomessage"><code>context.todo</code></a> is called</li>
<li><code>skip</code> {string|boolean|undefined} Present if <a href="#contextskipmessage"><code>context.skip</code></a> is called</li>
</ul>
</li>
</ul>
<p>Emitted when a test fails.
This event is guaranteed to be emitted in the same order as the tests are
defined.
The corresponding execution ordered event is <code>'test:complete'</code>.</p>
<h3>Event: <code>'test:interrupted'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>tests</code> {Array} An array of objects containing information about the
interrupted tests.
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined,
or <code>undefined</code> if the test was run through the REPL.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Emitted when the test runner is interrupted by a <code>SIGINT</code> signal (e.g., when
pressing &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;). The event contains information about
the tests that were running at the time of interruption.</p>
<p>When using process isolation (the default), the test name will be the file path
since the parent runner only knows about file-level tests. When using
<code>--test-isolation=none</code>, the actual test name is shown.</p>
<h3>Event: <code>'test:log'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>data</code> {any} The structured payload passed to <a href="#contextlogmessage-data"><code>context.log</code></a>, or
<code>undefined</code> if none was provided. The test runner does not interpret this
value.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>message</code> {string} The log message.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests.</li>
<li><code>testId</code> {number} A numeric identifier for the test instance that emitted
the log message.</li>
</ul>
</li>
</ul>
<p>Emitted when <a href="#contextlogmessage-data"><code>context.log</code></a> is called. Unlike <a href="#event-testdiagnostic"><code>'test:diagnostic'</code></a>,
this event is emitted immediately, in the order that the tests execute,
making it suitable for reporters that render test output unbuffered.</p>
<h3>Event: <code>'test:pass'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>details</code> {Object} Additional execution metadata.
<ul>
<li><code>duration_ms</code> {number} The duration of the test in milliseconds.</li>
<li><code>type</code> {string|undefined} The type of the test, used to denote whether
this is a suite.</li>
<li><code>attempt</code> {number|undefined} The attempt number of the test run,
present only when using the <a href="cli.md#--test-rerun-failures"><code>--test-rerun-failures</code></a> flag.</li>
<li><code>passed_on_attempt</code> {number|undefined} The attempt number the test passed on,
present only when using the <a href="cli.md#--test-rerun-failures"><code>--test-rerun-failures</code></a> flag.</li>
</ul>
</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
<li><code>testNumber</code> {number} The ordinal number of the test.</li>
<li><code>todo</code> {string|boolean|undefined} Present if <a href="#contexttodomessage"><code>context.todo</code></a> is called</li>
<li><code>skip</code> {string|boolean|undefined} Present if <a href="#contextskipmessage"><code>context.skip</code></a> is called</li>
</ul>
</li>
</ul>
<p>Emitted when a test passes.
This event is guaranteed to be emitted in the same order as the tests are
defined.
The corresponding execution ordered event is <code>'test:complete'</code>.</p>
<h3>Event: <code>'test:plan'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>count</code> {number} The number of subtests that have ran.</li>
</ul>
</li>
</ul>
<p>Emitted when all subtests have completed for a given test.
This event is guaranteed to be emitted in the same order as the tests are
defined.</p>
<h3>Event: <code>'test:start'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>column</code> {number|undefined} The column number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation. May differ from
<code>file</code> when the test is defined in a module imported by the entry file.</li>
<li><code>file</code> {string|undefined} The path of the test file,
<code>undefined</code> if test was run through the REPL.</li>
<li><code>line</code> {number|undefined} The line number where the test is defined, or
<code>undefined</code> if the test was run through the REPL.</li>
<li><code>name</code> {string} The test name.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>parentId</code> {number|undefined} The <code>testId</code> of the enclosing test, or
<code>undefined</code> for top-level tests. Lets custom reporters track lineage
when concurrent siblings at the same nesting level interleave.</li>
<li><code>tags</code> {string[]} The flattened lowercased tags declared on the test
and its ancestor suites, in declaration order. Empty for untagged tests.
See <a href="#test-tags">Test tags</a>.</li>
<li><code>testId</code> {number} A numeric identifier for this test instance, unique
within the test file's process. Consistent across all events for the same
test instance, enabling reliable correlation in custom reporters.</li>
</ul>
</li>
</ul>
<p>Emitted when a test starts reporting its own and its subtests status.
This event is guaranteed to be emitted in the same order as the tests are
defined.
The corresponding execution ordered event is <code>'test:dequeue'</code>.</p>
<h3>Event: <code>'test:stderr'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation.</li>
<li><code>file</code> {string} The path of the test file.</li>
<li><code>message</code> {string} The message written to <code>stderr</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a running test writes to <code>stderr</code>.
This event is only emitted if <code>--test</code> flag is passed.
This event is not guaranteed to be emitted in the same order as the tests are
defined.</p>
<h3>Event: <code>'test:stdout'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>entryFile</code> {string|undefined} The path of the test file that was
executed as the entry point of the child process that emitted this event.
Only present when tests run with process isolation.</li>
<li><code>file</code> {string} The path of the test file.</li>
<li><code>message</code> {string} The message written to <code>stdout</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a running test writes to <code>stdout</code>.
This event is only emitted if <code>--test</code> flag is passed.
This event is not guaranteed to be emitted in the same order as the tests are
defined.</p>
<h3>Event: <code>'test:summary'</code></h3>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>counts</code> {Object} An object containing the counts of various test results.
<ul>
<li><code>cancelled</code> {number} The total number of cancelled tests.</li>
<li><code>failed</code> {number} The total number of failed tests.</li>
<li><code>passed</code> {number} The total number of passed tests.</li>
<li><code>skipped</code> {number} The total number of skipped tests.</li>
<li><code>suites</code> {number} The total number of suites run.</li>
<li><code>tests</code> {number} The total number of tests run, excluding suites.</li>
<li><code>todo</code> {number} The total number of TODO tests.</li>
<li><code>topLevel</code> {number} The total number of top level tests and suites.</li>
</ul>
</li>
<li><code>duration_ms</code> {number} The duration of the test run in milliseconds.</li>
<li><code>file</code> {string|undefined} The path of the test file that generated the
summary. If the summary corresponds to multiple files, this value is
<code>undefined</code>.</li>
<li><code>success</code> {boolean} Indicates whether or not the test run is considered
successful or not. If any error condition occurs, such as a failing test or
unmet coverage threshold, this value will be set to <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a test run completes. This event contains metrics pertaining to
the completed test run, and is useful for determining if a test run passed or
failed. If process-level test isolation is used, a <code>'test:summary'</code> event is
generated for each test file in addition to a final cumulative summary.</p>
<h3>Event: <code>'test:watch:drained'</code></h3>
<p>Emitted when no more tests are queued for execution in watch mode.</p>
<h3>Event: <code>'test:watch:restarted'</code></h3>
<p>Emitted when one or more tests are restarted due to a file change in watch mode.</p>
<h2><code>getTestContext()</code></h2>
<ul>
<li>Returns: {TestContext|SuiteContext|undefined}</li>
</ul>
<p>Returns the <a href="#class-testcontext"><code>TestContext</code></a> or <a href="#class-suitecontext"><code>SuiteContext</code></a> object associated with the
currently executing test or suite, or <code>undefined</code> if called outside of a test or
suite. This function can be used to access context information from within the
test or suite function or any async operations within them.</p>
<pre><code class="language-mjs">import { getTestContext } from 'node:test';

test('example test', async () =&gt; {
  const ctx = getTestContext();
  console.log(`Running test: ${ctx.name}`);
});

describe('example suite', () =&gt; {
  const ctx = getTestContext();
  console.log(`Running suite: ${ctx.name}`);
});
</code></pre>
<p>When called from a test, returns a <a href="#class-testcontext"><code>TestContext</code></a>.
When called from a suite, returns a <a href="#class-suitecontext"><code>SuiteContext</code></a>.</p>
<p>If called from outside a test or suite (e.g., at the top level of a module or in
a setTimeout callback after execution has completed), this function returns
<code>undefined</code>.</p>
<p>When called from within a hook (before, beforeEach, after, afterEach), this
function returns the context of the test or suite that the hook is associated
with.</p>
<h2>Test instrumentation and OpenTelemetry</h2>
<p>The test runner publishes test execution events through the Node.js
<a href="diagnostics_channel.md"><code>diagnostics_channel</code></a> module, enabling integration with observability tools
like OpenTelemetry without requiring changes to the test runner itself.</p>
<h3>Tracing events</h3>
<p>The test runner publishes events to the <code>'node.test'</code> tracing channel. Subscribers
can use the <a href="diagnostics_channel.md#class-tracingchannel"><code>TracingChannel</code></a> API to bind context or perform custom
instrumentation.</p>
<h4>Channel: <code>'tracing:node.test:start'</code></h4>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>name</code> {string} The name of the test.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>file</code> {string|undefined} The path to the test file, or <code>undefined</code> when
running in the REPL.</li>
<li><code>type</code> {string} The type of test. Either <code>'test'</code> or <code>'suite'</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a test or suite starts execution. The test's span encompasses all
of its before, beforeEach, and afterEach hooks, as well as the test body.</p>
<h4>Channel: <code>'tracing:node.test:end'</code></h4>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>name</code> {string} The name of the test.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>file</code> {string|undefined} The path to the test file, or <code>undefined</code> when
running in the REPL.</li>
<li><code>type</code> {string} The type of test. Either <code>'test'</code> or <code>'suite'</code>.</li>
</ul>
</li>
</ul>
<p>Emitted when a test or suite finishes execution.</p>
<h4>Channel: <code>'tracing:node.test:error'</code></h4>
<ul>
<li><code>data</code> {Object}
<ul>
<li><code>name</code> {string} The name of the test.</li>
<li><code>nesting</code> {number} The nesting level of the test.</li>
<li><code>file</code> {string|undefined} The path to the test file, or <code>undefined</code> when
running in the REPL.</li>
<li><code>type</code> {string} The type of test. Either <code>'test'</code> or <code>'suite'</code>.</li>
<li><code>error</code> {Error} The error that was thrown.</li>
</ul>
</li>
</ul>
<p>Emitted when a test or suite throws an error.</p>
<h3>Context propagation with <code>bindStore()</code></h3>
<p>The tracing channel can be used to propagate context through test execution by
binding an <code>AsyncLocalStorage</code> instance. This allows context to be automatically
available in the test function and all async operations within the test.</p>
<pre><code class="language-mjs">import dc from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const testStorage = new AsyncLocalStorage();
const testChannel = dc.tracingChannel('node.test');

// Bind context to test execution — the returned value becomes the store
testChannel.start.bindStore(testStorage, (data) =&gt; {
  return { testName: data.name, startTime: Date.now() };
});

// Optionally handle errors and cleanup
testChannel.error.subscribe((data) =&gt; {
  const store = testStorage.getStore();
  console.log(`Test &quot;${data.name}&quot; failed after ${Date.now() - store.startTime}ms`);
});

testChannel.end.subscribe((data) =&gt; {
  const store = testStorage.getStore();
  console.log(`Test &quot;${data.name}&quot; completed in ${Date.now() - store.startTime}ms`);
});
</code></pre>
<p>When using <code>bindStore()</code>, the context provided will be automatically propagated
to the test function and all async operations within the test, without requiring
any additional instrumentation in the test code.</p>
<h2>Class: <code>TestContext</code></h2>
<p>An instance of <code>TestContext</code> is passed to each test function in order to
interact with the test runner. However, the <code>TestContext</code> constructor is not
exposed as part of the API.</p>
<h3><code>context.before([fn][, options])</code></h3>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function registers a hook that runs before any subtests of the current
test.</p>
<h3><code>context.beforeEach([fn][, options])</code></h3>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function registers a hook that runs before each subtest of the current
test.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  t.beforeEach((t) =&gt; t.diagnostic(`about to run ${t.name}`));
  await t.test(
    'This is a subtest',
    (t) =&gt; {
      // Some relevant assertion here
    },
  );
});
</code></pre>
<h3><code>context.after([fn][, options])</code></h3>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function registers a hook that runs after the current test finishes.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  t.after((t) =&gt; t.diagnostic(`finished running ${t.name}`));
  // Some relevant assertion here
});
</code></pre>
<h3><code>context.afterEach([fn][, options])</code></h3>
<ul>
<li><code>fn</code> {Function|AsyncFunction} The hook function. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the hook uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li><code>options</code> {Object} Configuration options for the hook. The following
properties are supported:
<ul>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress hook.</li>
<li><code>timeout</code> {number} A number of milliseconds the hook will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
</ul>
</li>
</ul>
<p>This function registers a hook that runs after each subtest of the current
test.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  t.afterEach((t) =&gt; t.diagnostic(`finished running ${t.name}`));
  await t.test(
    'This is a subtest',
    (t) =&gt; {
      // Some relevant assertion here
    },
  );
});
</code></pre>
<h3><code>context.assert</code></h3>
<p>An object containing assertion methods bound to <code>context</code>. The top-level
functions from the <code>node:assert</code> module are exposed here for the purpose of
creating test plans.</p>
<pre><code class="language-js">test('test', (t) =&gt; {
  t.plan(1);
  t.assert.strictEqual(true, true);
});
</code></pre>
<h4><code>context.assert.callCount(fn, times[, message])</code></h4>
<ul>
<li><code>fn</code> {Function} A mock function created by the test runner's mocking API.</li>
<li><code>times</code> {integer} The expected number of calls.</li>
<li><code>message</code> {string} Optional error message.</li>
</ul>
<p>Asserts that the mock function <code>fn</code> has been called exactly <code>times</code> times.</p>
<pre><code class="language-js">test('mock was called twice', (t) =&gt; {
  const fn = t.mock.fn();
  fn();
  fn();
  t.assert.callCount(fn, 2);
});
</code></pre>
<h4><code>context.assert.called(fn[, message])</code></h4>
<ul>
<li><code>fn</code> {Function} A mock function created by the test runner's mocking API.</li>
<li><code>message</code> {string} Optional error message.</li>
</ul>
<p>Asserts that the mock function <code>fn</code> has been called at least once.</p>
<pre><code class="language-js">test('mock was called', (t) =&gt; {
  const fn = t.mock.fn();
  fn();
  t.assert.called(fn);
});
</code></pre>
<h4><code>context.assert.fileSnapshot(value, path[, options])</code></h4>
<ul>
<li><code>value</code> {any} A value to serialize to a string. If Node.js was started with
the <a href="cli.md#--test-update-snapshots"><code>--test-update-snapshots</code></a> flag, the serialized value is written to
<code>path</code>. Otherwise, the serialized value is compared to the contents of the
existing snapshot file.</li>
<li><code>path</code> {string} The file where the serialized <code>value</code> is written.</li>
<li><code>options</code> {Object} Optional configuration options. The following properties
are supported:
<ul>
<li><code>serializers</code> {Array} An array of synchronous functions used to serialize
<code>value</code> into a string. <code>value</code> is passed as the only argument to the first
serializer function. The return value of each serializer is passed as input
to the next serializer. Once all serializers have run, the resulting value
is coerced to a string. <strong>Default:</strong> If no serializers are provided, the
test runner's default serializers are used.</li>
</ul>
</li>
</ul>
<p>This function serializes <code>value</code> and writes it to the file specified by <code>path</code>.</p>
<pre><code class="language-js">test('snapshot test with default serialization', (t) =&gt; {
  t.assert.fileSnapshot({ value1: 1, value2: 2 }, './snapshots/snapshot.json');
});
</code></pre>
<p>This function differs from <code>context.assert.snapshot()</code> in the following ways:</p>
<ul>
<li>The snapshot file path is explicitly provided by the user.</li>
<li>Each snapshot file is limited to a single snapshot value.</li>
<li>No additional escaping is performed by the test runner.</li>
</ul>
<p>These differences allow snapshot files to better support features such as syntax
highlighting.</p>
<h4><code>context.assert.lastCalledWith(fn[, ...args])</code></h4>
<ul>
<li><code>fn</code> {Function} A mock function created by the test runner's mocking API.</li>
<li><code>...args</code> {any} The expected arguments.</li>
</ul>
<p>Asserts that the most recent call to the mock function <code>fn</code> received arguments
deeply and strictly equal to <code>args</code>, using the same comparison as
<a href="assert.md#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>.</p>
<pre><code class="language-js">test('mock was last called with arguments', (t) =&gt; {
  const fn = t.mock.fn();
  fn(1);
  fn(2);
  t.assert.lastCalledWith(fn, 2);
});
</code></pre>
<h4><code>context.assert.nthCalledWith(fn, n[, ...args])</code></h4>
<ul>
<li><code>fn</code> {Function} A mock function created by the test runner's mocking API.</li>
<li><code>n</code> {integer} The 1-based index of the call to check.</li>
<li><code>...args</code> {any} The expected arguments.</li>
</ul>
<p>Asserts that the <code>n</code>th call to the mock function <code>fn</code> received arguments
deeply and strictly equal to <code>args</code>, using the same comparison as
<a href="assert.md#assertdeepstrictequalactual-expected-message"><code>assert.deepStrictEqual()</code></a>. <code>n</code> starts at <code>1</code>, so
<code>t.assert.nthCalledWith(fn, 1)</code> checks <code>fn.mock.calls[0]</code>.</p>
<pre><code class="language-js">test('mock was called with arguments on the second call', (t) =&gt; {
  const fn = t.mock.fn();
  fn(1);
  fn(2);
  t.assert.nthCalledWith(fn, 2, 2);
});
</code></pre>
<h4><code>context.assert.snapshot(value[, options])</code></h4>
<ul>
<li><code>value</code> {any} A value to serialize to a string. If Node.js was started with
the <a href="cli.md#--test-update-snapshots"><code>--test-update-snapshots</code></a> flag, the serialized value is written to
the snapshot file. Otherwise, the serialized value is compared to the
corresponding value in the existing snapshot file.</li>
<li><code>options</code> {Object} Optional configuration options. The following properties
are supported:
<ul>
<li><code>serializers</code> {Array} An array of synchronous functions used to serialize
<code>value</code> into a string. <code>value</code> is passed as the only argument to the first
serializer function. The return value of each serializer is passed as input
to the next serializer. Once all serializers have run, the resulting value
is coerced to a string. <strong>Default:</strong> If no serializers are provided, the
test runner's default serializers are used.</li>
</ul>
</li>
</ul>
<p>This function implements assertions for snapshot testing.</p>
<pre><code class="language-js">test('snapshot test with default serialization', (t) =&gt; {
  t.assert.snapshot({ value1: 1, value2: 2 });
});

test('snapshot test with custom serialization', (t) =&gt; {
  t.assert.snapshot({ value3: 3, value4: 4 }, {
    serializers: [(value) =&gt; JSON.stringify(value)],
  });
});
</code></pre>
<h3><code>context.diagnostic(message)</code></h3>
<ul>
<li><code>message</code> {string} Message to be reported.</li>
</ul>
<p>This function is used to write diagnostics to the output. Any diagnostic
information is included at the end of the test's results. This function does
not return a value.</p>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  t.diagnostic('A diagnostic message');
});
</code></pre>
<h3><code>context.log(message[, data])</code></h3>
<ul>
<li><code>message</code> {string} Message to be reported.</li>
<li><code>data</code> {any} Optional structured payload attached to the message. The test
runner passes it through untouched. When tests run with process isolation,
this value must be compatible with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">HTML structured clone algorithm</a>.</li>
</ul>
<p>This function is used to write a log message to the output. Unlike
<a href="#contextdiagnosticmessage"><code>context.diagnostic</code></a>, the resulting <a href="#event-testlog"><code>'test:log'</code></a> event is emitted
immediately, in the order that the tests execute, rather than being buffered
until the test reports its results. This function does not return a value.</p>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  t.log('fetched user', { userId: 42 });
  t.log('retrying flaky endpoint', { attempt: 3 });
});
</code></pre>
<h3><code>context.filePath</code></h3>
<p>The absolute path of the test file that created the current test. If a test file
imports additional modules that generate tests, the imported tests will return
the path of the root test file.</p>
<h3><code>context.fullName</code></h3>
<p>The name of the test and each of its ancestors, separated by <code>&gt;</code>.</p>
<h3><code>context.name</code></h3>
<p>The name of the test.</p>
<h3><code>context.passed</code></h3>
<ul>
<li>Type: {boolean} <code>false</code> before the test is executed, e.g. in a <code>beforeEach</code> hook.</li>
</ul>
<p>Indicated whether the test succeeded.</p>
<h3><code>context.error</code></h3>
<ul>
<li>Type: {Error|null}</li>
</ul>
<p>The failure reason for the test/case; wrapped and available via <code>context.error.cause</code>.</p>
<h3><code>context.attempt</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The attempt number of the test. This value is zero-based, so the first attempt is <code>0</code>,
the second attempt is <code>1</code>, and so on. This property is useful in conjunction with the
<code>--test-rerun-failures</code> option to determine which attempt the test is currently running.</p>
<h3><code>context.tags</code></h3>
<blockquote>
<p>Stability: 1.0 - Early development</p>
</blockquote>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>A frozen array of the test's flattened lowercased tags, in declaration
order, including any tags inherited from ancestor suites. Empty when the
test has no tags. See <a href="#test-tags">Test tags</a>.</p>
<h3><code>context.workerId</code></h3>
<ul>
<li>Type: {number|undefined}</li>
</ul>
<p>The unique identifier of the worker running the current test file. This value is
derived from the <code>NODE_TEST_WORKER_ID</code> environment variable. When running tests
with <code>--test-isolation=process</code> (the default), each test file runs in a separate
child process and is assigned a worker ID from 1 to N, where N is the number of
concurrent workers. A worker ID is never shared by two test files running at the
same time. Once a test file finishes, its worker ID is reused by the next test
file that starts. When running with <code>--test-isolation=none</code>, all tests run in
the same process and the worker ID is always 1. This value is <code>undefined</code> when
not running in a test context.</p>
<p>This property is useful for splitting resources (like database connections or
server ports) across concurrent test files:</p>
<pre><code class="language-mjs">import { test } from 'node:test';
import { process } from 'node:process';

test('database operations', async (t) =&gt; {
  // Worker ID is available via context
  console.log(`Running in worker ${t.workerId}`);

  // Or via environment variable (available at import time)
  const workerId = process.env.NODE_TEST_WORKER_ID;
  // Use workerId to allocate separate resources per worker
});
</code></pre>
<h3><code>context.plan(count[,options])</code></h3>
<ul>
<li><code>count</code> {number} The number of assertions and subtests that are expected to run.</li>
<li><code>options</code> {Object} Additional options for the plan.
<ul>
<li><code>wait</code> {boolean|number} The wait time for the plan:
<ul>
<li>If <code>true</code>, the plan waits indefinitely for all assertions and subtests to run.</li>
<li>If <code>false</code>, the plan performs an immediate check after the test function completes,
without waiting for any pending assertions or subtests.
Any assertions or subtests that complete after this check will not be counted towards the plan.</li>
<li>If a number, it specifies the maximum wait time in milliseconds
before timing out while waiting for expected assertions and subtests to be matched.
If the timeout is reached, the test will fail.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>This function is used to set the number of assertions and subtests that are expected to run
within the test. If the number of assertions and subtests that run does not match the
expected count, the test will fail.</p>
<blockquote>
<p>Note: To make sure assertions are tracked, <code>t.assert</code> must be used instead of <code>assert</code> directly.</p>
</blockquote>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  t.plan(2);
  t.assert.ok('some relevant assertion here');
  t.test('subtest', () =&gt; {});
});
</code></pre>
<p>When working with asynchronous code, the <code>plan</code> function can be used to ensure that the
correct number of assertions are run:</p>
<pre><code class="language-js">test('planning with streams', (t, done) =&gt; {
  function* generate() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  const expected = ['a', 'b', 'c'];
  t.plan(expected.length);
  const stream = Readable.from(generate());
  stream.on('data', (chunk) =&gt; {
    t.assert.strictEqual(chunk, expected.shift());
  });

  stream.on('end', () =&gt; {
    done();
  });
});
</code></pre>
<p>When using the <code>wait</code> option, you can control how long the test will wait for the expected assertions.
For example, setting a maximum wait time ensures that the test will wait for asynchronous assertions
to complete within the specified timeframe:</p>
<pre><code class="language-js">test('plan with wait: 2000 waits for async assertions', (t) =&gt; {
  t.plan(1, { wait: 2000 }); // Waits for up to 2 seconds for the assertion to complete.

  const asyncActivity = () =&gt; {
    setTimeout(() =&gt; {
      t.assert.ok(true, 'Async assertion completed within the wait time');
    }, 1000); // Completes after 1 second, within the 2-second wait time.
  };

  asyncActivity(); // The test will pass because the assertion is completed in time.
});
</code></pre>
<p>Note: If a <code>wait</code> timeout is specified, it begins counting down only after the test function finishes executing.</p>
<h3><code>context.runOnly(shouldRunOnlyTests)</code></h3>
<ul>
<li><code>shouldRunOnlyTests</code> {boolean} Whether or not to run <code>only</code> tests.</li>
</ul>
<p>If <code>shouldRunOnlyTests</code> is truthy, the test context will only run tests that
have the <code>only</code> option set. Otherwise, all tests are run. If Node.js was not
started with the <a href="cli.md#--test-only"><code>--test-only</code></a> command-line option, this function is a
no-op.</p>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  // The test context can be set to run subtests with the 'only' option.
  t.runOnly(true);
  return Promise.all([
    t.test('this subtest is now skipped'),
    t.test('this subtest is run', { only: true }),
  ]);
});
</code></pre>
<h3><code>context.signal</code></h3>
<ul>
<li>Type: {AbortSignal}</li>
</ul>
<p>Can be used to abort test subtasks when the test has been aborted.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  await fetch('some/uri', { signal: t.signal });
});
</code></pre>
<h3><code>context.skip([message])</code></h3>
<ul>
<li><code>message</code> {string} Optional skip message.</li>
</ul>
<p>This function causes the test's output to indicate the test as skipped. If
<code>message</code> is provided, it is included in the output. Calling <code>skip()</code> does
not terminate execution of the test function. This function does not return a
value.</p>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  // Make sure to return here as well if the test contains additional logic.
  t.skip('this is skipped');
});
</code></pre>
<h3><code>context.todo([message])</code></h3>
<ul>
<li><code>message</code> {string} Optional <code>TODO</code> message.</li>
</ul>
<p>This function adds a <code>TODO</code> directive to the test's output. If <code>message</code> is
provided, it is included in the output. Calling <code>todo()</code> does not terminate
execution of the test function. This function does not return a value.</p>
<pre><code class="language-js">test('top level test', (t) =&gt; {
  // This test is marked as `TODO`
  t.todo('this is a todo');
});
</code></pre>
<h3><code>context.test([name][, options][, fn])</code></h3>
<ul>
<li><code>name</code> {string} The name of the subtest, which is displayed when reporting
test results. <strong>Default:</strong> The <code>name</code> property of <code>fn</code>, or <code>'&lt;anonymous&gt;'</code> if
<code>fn</code> does not have a name.</li>
<li><code>options</code> {Object} Configuration options for the subtest. The following
properties are supported:
<ul>
<li><code>concurrency</code> {number|boolean|null} If a number is provided,
then that many tests would run asynchronously (they are still managed by the single-threaded event loop).
If <code>true</code>, it would run all subtests in parallel.
If <code>false</code>, it would only run one test at a time.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>null</code>.</li>
<li><code>only</code> {boolean} If truthy, and the test context is configured to run
<code>only</code> tests, then this test will be run. Otherwise, the test is skipped.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>signal</code> {AbortSignal} Allows aborting an in-progress test.</li>
<li><code>skip</code> {boolean|string} If truthy, the test is skipped. If a string is
provided, that string is displayed in the test results as the reason for
skipping the test. <strong>Default:</strong> <code>false</code>.</li>
<li><code>tags</code> {string[]} An array of string labels associated with the subtest.
Used together with <a href="cli.md#--experimental-test-tag-filtertag"><code>--experimental-test-tag-filter</code></a> to filter which
tests run. Tags inherit from the parent test or suite by union. See
<a href="#test-tags">Test tags</a>. <strong>Default:</strong> <code>[]</code>.</li>
<li><code>todo</code> {boolean|string} If truthy, the test marked as <code>TODO</code>. If a string
is provided, that string is displayed in the test results as the reason why
the test is <code>TODO</code>. <strong>Default:</strong> <code>false</code>.</li>
<li><code>timeout</code> {number} A number of milliseconds the test will fail after.
If unspecified, subtests inherit this value from their parent.
<strong>Default:</strong> <code>Infinity</code>.</li>
<li><code>plan</code> {number} The number of assertions and subtests expected to be run in the test.
If the number of assertions run in the test does not match the number
specified in the plan, the test will fail.
<strong>Default:</strong> <code>undefined</code>.</li>
</ul>
</li>
<li><code>fn</code> {Function|AsyncFunction} The function under test. The first argument
to this function is a <a href="#class-testcontext"><code>TestContext</code></a> object. If the test uses callbacks,
the callback function is passed as the second argument. <strong>Default:</strong> A no-op
function.</li>
<li>Returns: {Promise} Fulfilled with <code>undefined</code> once the test completes.</li>
</ul>
<p>This function is used to create subtests under the current test. This function
behaves in the same fashion as the top level <a href="#testname-options-fn"><code>test()</code></a> function.</p>
<pre><code class="language-js">test('top level test', async (t) =&gt; {
  await t.test(
    'This is a subtest',
    { only: false, skip: false, concurrency: 1, todo: false, plan: 1 },
    (t) =&gt; {
      t.assert.ok('some relevant assertion here');
    },
  );
});
</code></pre>
<h3><code>context.waitFor(condition[, options])</code></h3>
<ul>
<li><code>condition</code> {Function|AsyncFunction} An assertion function that is invoked
periodically until it completes successfully or the defined polling timeout
elapses. Successful completion is defined as not throwing or rejecting. This
function does not accept any arguments, and is allowed to return any value.</li>
<li><code>options</code> {Object} An optional configuration object for the polling operation.
The following properties are supported:
<ul>
<li><code>interval</code> {number} The number of milliseconds to wait after an unsuccessful
invocation of <code>condition</code> before trying again. <strong>Default:</strong> <code>50</code>.</li>
<li><code>timeout</code> {number} The poll timeout in milliseconds. If <code>condition</code> has not
succeeded by the time this elapses, an error occurs. <strong>Default:</strong> <code>1000</code>.</li>
</ul>
</li>
<li>Returns: {Promise} Fulfilled with the value returned by <code>condition</code>.</li>
</ul>
<p>This method polls a <code>condition</code> function until that function either returns
successfully or the operation times out.</p>
<h2>Class: <code>SuiteContext</code></h2>
<p>An instance of <code>SuiteContext</code> is passed to each suite function in order to
interact with the test runner. However, the <code>SuiteContext</code> constructor is not
exposed as part of the API.</p>
<h3><code>context.filePath</code></h3>
<p>The absolute path of the test file that created the current suite. If a test
file imports additional modules that generate suites, the imported suites will
return the path of the root test file.</p>
<h3><code>context.fullName</code></h3>
<p>The name of the suite and each of its ancestors, separated by <code>&gt;</code>.</p>
<h3><code>context.name</code></h3>
<p>The name of the suite.</p>
<h3><code>context.signal</code></h3>
<ul>
<li>Type: {AbortSignal}</li>
</ul>
<p>Can be used to abort test subtasks when the test has been aborted.</p>
<h3><code>context.passed</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>Indicates whether the suite and all of its subtests have passed.</p>
<h3><code>context.attempt</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>The attempt number of the suite. This value is zero-based, so the first attempt is <code>0</code>,
the second attempt is <code>1</code>, and so on. This property is useful in conjunction with the
<code>--test-rerun-failures</code> option to determine the attempt number of the current run.</p>
<h3><code>context.diagnostic(message)</code></h3>
<ul>
<li><code>message</code> {string} A diagnostic message to output.</li>
</ul>
<p>Output a diagnostic message. This is typically used for logging information
about the current suite or its tests.</p>
<pre><code class="language-js">test.describe('my suite', (suite) =&gt; {
  suite.diagnostic('Suite diagnostic message');
});
</code></pre>
<h3><code>context.log(message[, data])</code></h3>
<ul>
<li><code>message</code> {string} Message to be reported.</li>
<li><code>data</code> {any} Optional structured payload attached to the message. The test
runner passes it through untouched.</li>
</ul>
<p>Write a log message to the output. The resulting <a href="#event-testlog"><code>'test:log'</code></a> event is
emitted immediately, in the order that the tests execute.</p>
<pre><code class="language-js">test.describe('my suite', (suite) =&gt; {
  suite.log('Suite log message');
});
</code></pre>
