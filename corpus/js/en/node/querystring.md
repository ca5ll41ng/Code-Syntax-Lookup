---
id: "js-en-function-node-querystring"
language: "js"
lang: "en"
category: "function"
name: "node:querystring"
title: "Query string"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/querystring.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Query string

<h1>Query string</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:querystring</code> module provides utilities for parsing and formatting URL
query strings. It can be accessed using:</p>
<pre><code class="language-js">const querystring = require('node:querystring');
</code></pre>
<p><code>querystring</code> is more performant than {URLSearchParams} but is not a
standardized API. Use {URLSearchParams} when performance is not critical or
when compatibility with browser code is desirable.</p>
<h2><code>querystring.decode()</code></h2>
<p>The <code>querystring.decode()</code> function is an alias for <code>querystring.parse()</code>.</p>
<h2><code>querystring.encode()</code></h2>
<p>The <code>querystring.encode()</code> function is an alias for <code>querystring.stringify()</code>.</p>
<h2><code>querystring.escape(str)</code></h2>
<ul>
<li><code>str</code> {string}</li>
</ul>
<p>The <code>querystring.escape()</code> method performs URL percent-encoding on the given
<code>str</code> in a manner that is optimized for the specific requirements of URL
query strings.</p>
<p>The <code>querystring.escape()</code> method is used by <code>querystring.stringify()</code> and is
generally not expected to be used directly. It is exported primarily to allow
application code to provide a replacement percent-encoding implementation if
necessary by assigning <code>querystring.escape</code> to an alternative function.</p>
<h2><code>querystring.parse(str[, sep[, eq[, options]]])</code></h2>
<ul>
<li><code>str</code> {string} The URL query string to parse</li>
<li><code>sep</code> {string} The substring used to delimit key and value pairs in the
query string. <strong>Default:</strong> <code>'&amp;'</code>.</li>
<li><code>eq</code> {string}. The substring used to delimit keys and values in the
query string. <strong>Default:</strong> <code>'='</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>decodeURIComponent</code> {Function} The function to use when decoding
percent-encoded characters in the query string. <strong>Default:</strong>
<code>querystring.unescape()</code>.</li>
<li><code>maxKeys</code> {number} Specifies the maximum number of keys to parse.
Specify <code>0</code> to remove key counting limitations. <strong>Default:</strong> <code>1000</code>.</li>
</ul>
</li>
</ul>
<p>The <code>querystring.parse()</code> method parses a URL query string (<code>str</code>) into a
collection of key and value pairs.</p>
<p>For example, the query string <code>'foo=bar&amp;abc=xyz&amp;abc=123'</code> is parsed into:</p>
<pre><code class="language-json">{
  &quot;foo&quot;: &quot;bar&quot;,
  &quot;abc&quot;: [&quot;xyz&quot;, &quot;123&quot;]
}
</code></pre>
<p>The object returned by the <code>querystring.parse()</code> method <em>does not</em>
prototypically inherit from the JavaScript <code>Object</code>. This means that typical
<code>Object</code> methods such as <code>obj.toString()</code>, <code>obj.hasOwnProperty()</code>, and others
are not defined and <em>will not work</em>.</p>
<p>By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative <code>decodeURIComponent</code> option will need to be specified:</p>
<pre><code class="language-js">// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&amp;foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
</code></pre>
<h2><code>querystring.stringify(obj[, sep[, eq[, options]]])</code></h2>
<ul>
<li><code>obj</code> {Object} The object to serialize into a URL query string</li>
<li><code>sep</code> {string} The substring used to delimit key and value pairs in the
query string. <strong>Default:</strong> <code>'&amp;'</code>.</li>
<li><code>eq</code> {string}. The substring used to delimit keys and values in the
query string. <strong>Default:</strong> <code>'='</code>.</li>
<li><code>options</code>
<ul>
<li><code>encodeURIComponent</code> {Function} The function to use when converting
URL-unsafe characters to percent-encoding in the query string. <strong>Default:</strong>
<code>querystring.escape()</code>.</li>
</ul>
</li>
</ul>
<p>The <code>querystring.stringify()</code> method produces a URL query string from a
given <code>obj</code> by iterating through the object's &quot;own properties&quot;.</p>
<p>It serializes the following types of values passed in <code>obj</code>:
{string|number|bigint|boolean|string[]|number[]|bigint[]|boolean[]}
The numeric values must be finite. Any other input values will be coerced to
empty strings.</p>
<pre><code class="language-js">querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&amp;baz=qux&amp;baz=quux&amp;corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux'
</code></pre>
<p>By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8. If an alternative encoding is required, then an alternative
<code>encodeURIComponent</code> option will need to be specified:</p>
<pre><code class="language-js">// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
</code></pre>
<h2><code>querystring.unescape(str)</code></h2>
<ul>
<li><code>str</code> {string}</li>
</ul>
<p>The <code>querystring.unescape()</code> method performs decoding of URL percent-encoded
characters on the given <code>str</code>.</p>
<p>The <code>querystring.unescape()</code> method is used by <code>querystring.parse()</code> and is
generally not expected to be used directly. It is exported primarily to allow
application code to provide a replacement decoding implementation if
necessary by assigning <code>querystring.unescape</code> to an alternative function.</p>
<p>By default, the <code>querystring.unescape()</code> method will attempt to use the
JavaScript built-in <code>decodeURIComponent()</code> method to decode. If that fails,
a safer equivalent that does not throw on malformed URLs will be used.</p>
