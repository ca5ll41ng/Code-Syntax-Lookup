---
id: "js-en-function-node-punycode"
language: "js"
lang: "en"
category: "function"
name: "node:punycode"
title: "Punycode"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/punycode.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Punycode

<h1>Punycode</h1>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p><strong>The version of the punycode module bundled in Node.js is being deprecated.</strong>
In a future major version of Node.js this module will be removed. Users
currently depending on the <code>punycode</code> module should switch to using the
userland-provided <a href="https://github.com/bestiejs/punycode.js">Punycode.js</a> module instead. For punycode-based URL
encoding, see <a href="url.md#urldomaintoasciidomain"><code>url.domainToASCII</code></a> or, more generally, the
<a href="url.md#the-whatwg-url-api">WHATWG URL API</a>.</p>
<p>The <code>punycode</code> module is a bundled version of the <a href="https://github.com/bestiejs/punycode.js">Punycode.js</a> module. It
can be accessed using:</p>
<pre><code class="language-js">const punycode = require('node:punycode');
</code></pre>
<p><a href="https://tools.ietf.org/html/rfc3492">Punycode</a> is a character encoding scheme defined by RFC 3492 that is
primarily intended for use in Internationalized Domain Names. Because host
names in URLs are limited to ASCII characters only, Domain Names that contain
non-ASCII characters must be converted into ASCII using the Punycode scheme.
For instance, the Japanese character that translates into the English word,
<code>'example'</code> is <code>'例'</code>. The Internationalized Domain Name, <code>'例.com'</code> (equivalent
to <code>'example.com'</code>) is represented by Punycode as the ASCII string
<code>'xn--fsq.com'</code>.</p>
<p>The <code>punycode</code> module provides a simple implementation of the Punycode standard.</p>
<p>The <code>punycode</code> module is a third-party dependency used by Node.js and
made available to developers as a convenience. Fixes or other modifications to
the module must be directed to the <a href="https://github.com/bestiejs/punycode.js">Punycode.js</a> project.</p>
<h2><code>punycode.decode(string)</code></h2>
<ul>
<li><code>string</code> {string}</li>
</ul>
<p>The <code>punycode.decode()</code> method converts a <a href="https://tools.ietf.org/html/rfc3492">Punycode</a> string of ASCII-only
characters to the equivalent string of Unicode codepoints.</p>
<pre><code class="language-js">punycode.decode('maana-pta'); // 'mañana'
punycode.decode('--dqo34k'); // '☃-⌘'
</code></pre>
<h2><code>punycode.encode(string)</code></h2>
<ul>
<li><code>string</code> {string}</li>
</ul>
<p>The <code>punycode.encode()</code> method converts a string of Unicode codepoints to a
<a href="https://tools.ietf.org/html/rfc3492">Punycode</a> string of ASCII-only characters.</p>
<pre><code class="language-js">punycode.encode('mañana'); // 'maana-pta'
punycode.encode('☃-⌘'); // '--dqo34k'
</code></pre>
<h2><code>punycode.toASCII(domain)</code></h2>
<ul>
<li><code>domain</code> {string}</li>
</ul>
<p>The <code>punycode.toASCII()</code> method converts a Unicode string representing an
Internationalized Domain Name to <a href="https://tools.ietf.org/html/rfc3492">Punycode</a>. Only the non-ASCII parts of the
domain name will be converted. Calling <code>punycode.toASCII()</code> on a string that
already only contains ASCII characters will have no effect.</p>
<pre><code class="language-js">// encode domain names
punycode.toASCII('mañana.com');  // 'xn--maana-pta.com'
punycode.toASCII('☃-⌘.com');   // 'xn----dqo34k.com'
punycode.toASCII('example.com'); // 'example.com'
</code></pre>
<h2><code>punycode.toUnicode(domain)</code></h2>
<ul>
<li><code>domain</code> {string}</li>
</ul>
<p>The <code>punycode.toUnicode()</code> method converts a string representing a domain name
containing <a href="https://tools.ietf.org/html/rfc3492">Punycode</a> encoded characters into Unicode. Only the <a href="https://tools.ietf.org/html/rfc3492">Punycode</a>
encoded parts of the domain name are converted.</p>
<pre><code class="language-js">// decode domain names
punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
punycode.toUnicode('xn----dqo34k.com');  // '☃-⌘.com'
punycode.toUnicode('example.com');       // 'example.com'
</code></pre>
<h2><code>punycode.ucs2</code></h2>
<h3><code>punycode.ucs2.decode(string)</code></h3>
<ul>
<li><code>string</code> {string}</li>
</ul>
<p>The <code>punycode.ucs2.decode()</code> method returns an array containing the numeric
codepoint values of each Unicode symbol in the string.</p>
<pre><code class="language-js">punycode.ucs2.decode('abc'); // [0x61, 0x62, 0x63]
// surrogate pair for U+1D306 tetragram for centre:
punycode.ucs2.decode('\uD834\uDF06'); // [0x1D306]
</code></pre>
<h3><code>punycode.ucs2.encode(codePoints)</code></h3>
<ul>
<li><code>codePoints</code> {integer[]}</li>
</ul>
<p>The <code>punycode.ucs2.encode()</code> method returns a string based on an array of
numeric code point values.</p>
<pre><code class="language-js">punycode.ucs2.encode([0x61, 0x62, 0x63]); // 'abc'
punycode.ucs2.encode([0x1D306]); // '\uD834\uDF06'
</code></pre>
<h2><code>punycode.version</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>Returns a string identifying the current <a href="https://github.com/bestiejs/punycode.js">Punycode.js</a> version number.</p>
