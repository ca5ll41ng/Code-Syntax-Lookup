---
id: "js-en-function-node-url"
language: "js"
lang: "en"
category: "function"
name: "node:url"
title: "URL"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/url.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# URL

<h1>URL</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:url</code> module provides utilities for URL resolution and parsing. It can
be accessed using:</p>
<pre><code class="language-mjs">import url from 'node:url';
</code></pre>
<pre><code class="language-cjs">const url = require('node:url');
</code></pre>
<h2>URL strings and URL objects</h2>
<p>A URL string is a structured string containing multiple meaningful components.
When parsed, a URL object is returned containing properties for each of these
components.</p>
<p>The <code>node:url</code> module provides two APIs for working with URLs: a legacy API that
is Node.js specific, and a newer API that implements the same
<a href="https://url.spec.whatwg.org/">WHATWG URL Standard</a> used by web browsers.</p>
<p>A comparison between the WHATWG and legacy APIs is provided below. Above the URL
<code>'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'</code>, properties
of an object returned by the legacy <code>url.parse()</code> are shown. Below it are
properties of a WHATWG <code>URL</code> object.</p>
<p>WHATWG URL's <code>origin</code> property includes <code>protocol</code> and <code>host</code>, but not
<code>username</code> or <code>password</code>.</p>
<pre><code class="language-text">┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
&quot;  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash &quot;
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the &quot;&quot; line should be ignored. They are purely for formatting.)
</code></pre>
<p>Parsing the URL string using the WHATWG API:</p>
<pre><code class="language-js">const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
</code></pre>
<p>Parsing the URL string using the legacy API:</p>
<pre><code class="language-mjs">import url from 'node:url';
const myURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
</code></pre>
<pre><code class="language-cjs">const url = require('node:url');
const myURL =
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
</code></pre>
<h3>Constructing a URL from component parts and getting the constructed string</h3>
<p>It is possible to construct a WHATWG URL from component parts using either the
property setters or a template literal string:</p>
<pre><code class="language-js">const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
</code></pre>
<pre><code class="language-js">const pathname = '/a/b/c';
const search = '?d=e';
const hash = '#fgh';
const myURL = new URL(`https://example.org${pathname}${search}${hash}`);
</code></pre>
<p>To get the constructed URL string, use the <code>href</code> property accessor:</p>
<pre><code class="language-js">console.log(myURL.href);
</code></pre>
<h2>The WHATWG URL API</h2>
<h3>Class: <code>URL</code></h3>
<p>Browser-compatible <code>URL</code> class, implemented by following the WHATWG URL
Standard. <a href="https://url.spec.whatwg.org/#example-url-parsing">Examples of parsed URLs</a> may be found in the Standard itself.
The <code>URL</code> class is also available on the global object.</p>
<p>In accordance with browser conventions, all properties of <code>URL</code> objects
are implemented as getters and setters on the class prototype, rather than as
data properties on the object itself. Thus, unlike <a href="#legacy-urlobject">legacy <code>urlObject</code></a>s,
using the <code>delete</code> keyword on any properties of <code>URL</code> objects (e.g. <code>delete myURL.protocol</code>, <code>delete myURL.pathname</code>, etc) has no effect but will still
return <code>true</code>.</p>
<h4><code>new URL(input[, base])</code></h4>
<ul>
<li><code>input</code> {string} The absolute or relative input URL to parse. If <code>input</code>
is relative, then <code>base</code> is required. If <code>input</code> is absolute, the <code>base</code>
is ignored. If <code>input</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
<li><code>base</code> {string} The base URL to resolve against if the <code>input</code> is not
absolute. If <code>base</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
</ul>
<p>Creates a new <code>URL</code> object by parsing the <code>input</code> relative to the <code>base</code>. If
<code>base</code> is passed as a string, it will be parsed equivalent to <code>new URL(base)</code>.</p>
<pre><code class="language-js">const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo
</code></pre>
<p>The URL constructor is accessible as a property on the global object.
It can also be imported from the built-in url module:</p>
<pre><code class="language-mjs">import { URL } from 'node:url';
console.log(URL === globalThis.URL); // Prints 'true'.
</code></pre>
<pre><code class="language-cjs">console.log(URL === require('node:url').URL); // Prints 'true'.
</code></pre>
<p>A <code>TypeError</code> will be thrown if the <code>input</code> or <code>base</code> are not valid URLs. Note
that an effort will be made to coerce the given values into strings. For
instance:</p>
<pre><code class="language-js">const myURL = new URL({ toString: () =&gt; 'https://example.org/' });
// https://example.org/
</code></pre>
<p>Unicode characters appearing within the host name of <code>input</code> will be
automatically converted to ASCII using the <a href="https://tools.ietf.org/html/rfc5891#section-4.4">Punycode</a> algorithm.</p>
<pre><code class="language-js">const myURL = new URL('https://測試');
// https://xn--g6w251d/
</code></pre>
<p>In cases where it is not known in advance if <code>input</code> is an absolute URL
and a <code>base</code> is provided, it is advised to validate that the <code>origin</code> of
the <code>URL</code> object is what is expected.</p>
<pre><code class="language-js">let myURL = new URL('http://Example.com/', 'https://example.org/');
// http://example.com/

myURL = new URL('https://Example.com/', 'https://example.org/');
// https://example.com/

myURL = new URL('foo://Example.com/', 'https://example.org/');
// foo://Example.com/

myURL = new URL('http:Example.com/', 'https://example.org/');
// http://example.com/

myURL = new URL('https:Example.com/', 'https://example.org/');
// https://example.org/Example.com/

myURL = new URL('foo:Example.com/', 'https://example.org/');
// foo:Example.com/
</code></pre>
<h4><code>url.hash</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the fragment portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
// Prints #bar

myURL.hash = 'baz';
console.log(myURL.href);
// Prints https://example.org/foo#baz
</code></pre>
<p>Invalid URL characters included in the value assigned to the <code>hash</code> property
are <a href="#percent-encoding-in-urls">percent-encoded</a>. The selection of which characters to
percent-encode may vary somewhat from what the <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> and
<a href="#urlformaturlobject"><code>url.format()</code></a> methods would produce.</p>
<h4><code>url.host</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the host portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
// Prints example.org:81

myURL.host = 'example.com:82';
console.log(myURL.href);
// Prints https://example.com:82/foo
</code></pre>
<p>Invalid host values assigned to the <code>host</code> property are ignored.</p>
<h4><code>url.hostname</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the host name portion of the URL. The key difference between
<code>url.host</code> and <code>url.hostname</code> is that <code>url.hostname</code> does <em>not</em> include the
port.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
// Prints example.org

// Setting the hostname does not change the port
myURL.hostname = 'example.com';
console.log(myURL.href);
// Prints https://example.com:81/foo

// Use myURL.host to change the hostname and port
myURL.host = 'example.org:82';
console.log(myURL.href);
// Prints https://example.org:82/foo
</code></pre>
<p>Invalid host name values assigned to the <code>hostname</code> property are ignored.</p>
<h4><code>url.href</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the serialized URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/foo');
console.log(myURL.href);
// Prints https://example.org/foo

myURL.href = 'https://example.com/bar';
console.log(myURL.href);
// Prints https://example.com/bar
</code></pre>
<p>Getting the value of the <code>href</code> property is equivalent to calling
<a href="#urltostring"><code>url.toString()</code></a>.</p>
<p>Setting the value of this property to a new value is equivalent to creating a
new <code>URL</code> object using <a href="#new-urlinput-base"><code>new URL(value)</code></a>. Each of the <code>URL</code>
object's properties will be modified.</p>
<p>If the value assigned to the <code>href</code> property is not a valid URL, a <code>TypeError</code>
will be thrown.</p>
<h4><code>url.origin</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets the read-only serialization of the URL's origin.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin);
// Prints https://example.org
</code></pre>
<pre><code class="language-js">const idnURL = new URL('https://測試');
console.log(idnURL.origin);
// Prints https://xn--g6w251d

console.log(idnURL.hostname);
// Prints xn--g6w251d
</code></pre>
<h4><code>url.password</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the password portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
// Prints https://abc:123@example.com/
</code></pre>
<p>Invalid URL characters included in the value assigned to the <code>password</code> property
are <a href="#percent-encoding-in-urls">percent-encoded</a>. The selection of which characters to
percent-encode may vary somewhat from what the <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> and
<a href="#urlformaturlobject"><code>url.format()</code></a> methods would produce.</p>
<h4><code>url.pathname</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the path portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
// Prints /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
// Prints https://example.org/abcdef?123
</code></pre>
<p>Invalid URL characters included in the value assigned to the <code>pathname</code>
property are <a href="#percent-encoding-in-urls">percent-encoded</a>. The selection of which characters
to percent-encode may vary somewhat from what the <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> and
<a href="#urlformaturlobject"><code>url.format()</code></a> methods would produce.</p>
<h4><code>url.port</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the port portion of the URL.</p>
<p>The port value may be a number or a string containing a number in the range
<code>0</code> to <code>65535</code> (inclusive). Setting the value to the default port of the
<code>URL</code> objects given <code>protocol</code> will result in the <code>port</code> value becoming
the empty string (<code>''</code>).</p>
<p>The port value can be an empty string in which case the port depends on
the protocol/scheme:</p>
<table>
<thead>
<tr>
<th>protocol</th>
<th>port</th>
</tr>
</thead>
<tbody>
<tr>
<td>&quot;ftp&quot;</td>
<td>21</td>
</tr>
<tr>
<td>&quot;file&quot;</td>
<td></td>
</tr>
<tr>
<td>&quot;http&quot;</td>
<td>80</td>
</tr>
<tr>
<td>&quot;https&quot;</td>
<td>443</td>
</tr>
<tr>
<td>&quot;ws&quot;</td>
<td>80</td>
</tr>
<tr>
<td>&quot;wss&quot;</td>
<td>443</td>
</tr>
</tbody>
</table>
<p>Upon assigning a value to the port, the value will first be converted to a
string using <code>.toString()</code>.</p>
<p>If that string is invalid but it begins with a number, the leading number is
assigned to <code>port</code>.
If the number lies outside the range denoted above, it is ignored.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org:8888');
console.log(myURL.port);
// Prints 8888

// Default ports are automatically transformed to the empty string
// (HTTPS protocol's default port is 443)
myURL.port = '443';
console.log(myURL.port);
// Prints the empty string
console.log(myURL.href);
// Prints https://example.org/

myURL.port = 1234;
console.log(myURL.port);
// Prints 1234
console.log(myURL.href);
// Prints https://example.org:1234/

// Completely invalid port strings are ignored
myURL.port = 'abcd';
console.log(myURL.port);
// Prints 1234

// Leading numbers are treated as a port number
myURL.port = '5678abcd';
console.log(myURL.port);
// Prints 5678

// Non-integers are truncated
myURL.port = 1234.5678;
console.log(myURL.port);
// Prints 1234

// Out-of-range numbers which are not represented in scientific notation
// will be ignored.
myURL.port = 1e10; // 10000000000, will be range-checked as described below
console.log(myURL.port);
// Prints 1234
</code></pre>
<p>Numbers which contain a decimal point,
such as floating-point numbers or numbers in scientific notation,
are not an exception to this rule.
Leading numbers up to the decimal point will be set as the URL's port,
assuming they are valid:</p>
<pre><code class="language-js">myURL.port = 4.567e21;
console.log(myURL.port);
// Prints 4 (because it is the leading number in the string '4.567e21')
</code></pre>
<h4><code>url.protocol</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the protocol portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org');
console.log(myURL.protocol);
// Prints https:

myURL.protocol = 'ftp';
console.log(myURL.href);
// Prints ftp://example.org/
</code></pre>
<p>Invalid URL protocol values assigned to the <code>protocol</code> property are ignored.</p>
<h5>Special schemes</h5>
<p>The <a href="https://url.spec.whatwg.org/">WHATWG URL Standard</a> considers a handful of URL protocol schemes to be
<em>special</em> in terms of how they are parsed and serialized. When a URL is
parsed using one of these special protocols, the <code>url.protocol</code> property
may be changed to another special protocol but cannot be changed to a
non-special protocol, and vice versa.</p>
<p>For instance, changing from <code>http</code> to <code>https</code> works:</p>
<pre><code class="language-js">const u = new URL('http://example.org');
u.protocol = 'https';
console.log(u.href);
// https://example.org/
</code></pre>
<p>However, changing from <code>http</code> to a hypothetical <code>fish</code> protocol does not
because the new protocol is not special.</p>
<pre><code class="language-js">const u = new URL('http://example.org');
u.protocol = 'fish';
console.log(u.href);
// http://example.org/
</code></pre>
<p>Likewise, changing from a non-special protocol to a special protocol is also
not permitted:</p>
<pre><code class="language-js">const u = new URL('fish://example.org');
u.protocol = 'http';
console.log(u.href);
// fish://example.org
</code></pre>
<p>According to the WHATWG URL Standard, special protocol schemes are <code>ftp</code>,
<code>file</code>, <code>http</code>, <code>https</code>, <code>ws</code>, and <code>wss</code>.</p>
<h4><code>url.search</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the serialized query portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/abc?123');
console.log(myURL.search);
// Prints ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);
// Prints https://example.org/abc?abc=xyz
</code></pre>
<p>Any invalid URL characters appearing in the value assigned the <code>search</code>
property will be <a href="#percent-encoding-in-urls">percent-encoded</a>. The selection of which
characters to percent-encode may vary somewhat from what the <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a>
and <a href="#urlformaturlobject"><code>url.format()</code></a> methods would produce.</p>
<h4><code>url.searchParams</code></h4>
<ul>
<li>Type: {URLSearchParams}</li>
</ul>
<p>Gets the <a href="#class-urlsearchparams"><code>URLSearchParams</code></a> object representing the query parameters of the
URL. This property is read-only but the <code>URLSearchParams</code> object it provides
can be used to mutate the URL instance; to replace the entirety of query
parameters of the URL, use the <a href="#urlsearch"><code>url.search</code></a> setter. See
<a href="#class-urlsearchparams"><code>URLSearchParams</code></a> documentation for details.</p>
<p>Use care when using <code>.searchParams</code> to modify the <code>URL</code> because,
per the WHATWG specification, the <code>URLSearchParams</code> object uses
different rules to determine which characters to percent-encode. For
instance, the <code>URL</code> object will not percent encode the ASCII tilde (<code>~</code>)
character, while <code>URLSearchParams</code> will always encode it:</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/abc?foo=~bar');

console.log(myURL.search);  // prints ?foo=~bar

// Modify the URL via searchParams...
myURL.searchParams.sort();

console.log(myURL.search);  // prints ?foo=%7Ebar
</code></pre>
<h4><code>url.username</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>Gets and sets the username portion of the URL.</p>
<pre><code class="language-js">const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
// Prints abc

myURL.username = '123';
console.log(myURL.href);
// Prints https://123:xyz@example.com/
</code></pre>
<p>Any invalid URL characters appearing in the value assigned the <code>username</code>
property will be <a href="#percent-encoding-in-urls">percent-encoded</a>. The selection of which
characters to percent-encode may vary somewhat from what the <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a>
and <a href="#urlformaturlobject"><code>url.format()</code></a> methods would produce.</p>
<h4><code>url.toString()</code></h4>
<ul>
<li>Returns: {string}</li>
</ul>
<p>The <code>toString()</code> method on the <code>URL</code> object returns the serialized URL. The
value returned is equivalent to that of <a href="#urlhref"><code>url.href</code></a> and <a href="#urltojson"><code>url.toJSON()</code></a>.</p>
<h4><code>url.toJSON()</code></h4>
<ul>
<li>Returns: {string}</li>
</ul>
<p>The <code>toJSON()</code> method on the <code>URL</code> object returns the serialized URL. The
value returned is equivalent to that of <a href="#urlhref"><code>url.href</code></a> and
<a href="#urltostring"><code>url.toString()</code></a>.</p>
<p>This method is automatically called when an <code>URL</code> object is serialized
with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a>.</p>
<pre><code class="language-js">const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org'),
];
console.log(JSON.stringify(myURLs));
// Prints [&quot;https://www.example.com/&quot;,&quot;https://test.example.org/&quot;]
</code></pre>
<h4><code>URL.createObjectURL(blob)</code></h4>
<ul>
<li><code>blob</code> {Blob}</li>
<li>Returns: {string}</li>
</ul>
<p>Creates a <code>'blob:nodedata:...'</code> URL string that represents the given {Blob}
object and can be used to retrieve the <code>Blob</code> later.</p>
<pre><code class="language-js">const {
  Blob,
  resolveObjectURL,
} = require('node:buffer');

const blob = new Blob(['hello']);
const id = URL.createObjectURL(blob);

// later...

const otherBlob = resolveObjectURL(id);
console.log(otherBlob.size);
</code></pre>
<p>The data stored by the registered {Blob} will be retained in memory until
<code>URL.revokeObjectURL()</code> is called to remove it.</p>
<p><code>Blob</code> objects are registered within the current thread. If using Worker
Threads, <code>Blob</code> objects registered within one Worker will not be available
to other workers or the main thread.</p>
<h4><code>URL.revokeObjectURL(id)</code></h4>
<ul>
<li><code>id</code> {string} A <code>'blob:nodedata:...</code> URL string returned by a prior call to
<code>URL.createObjectURL()</code>.</li>
</ul>
<p>Removes the stored {Blob} identified by the given ID. Attempting to revoke a
ID that isn't registered will silently fail.</p>
<h4><code>URL.canParse(input[, base])</code></h4>
<ul>
<li><code>input</code> {string} The absolute or relative input URL to parse. If <code>input</code>
is relative, then <code>base</code> is required. If <code>input</code> is absolute, the <code>base</code>
is ignored. If <code>input</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
<li><code>base</code> {string} The base URL to resolve against if the <code>input</code> is not
absolute. If <code>base</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Checks if an <code>input</code> relative to the <code>base</code> can be parsed to a <code>URL</code>.</p>
<pre><code class="language-js">const isValid = URL.canParse('/foo', 'https://example.org/'); // true

const isNotValid = URL.canParse('/foo'); // false
</code></pre>
<h4><code>URL.parse(input[, base])</code></h4>
<ul>
<li><code>input</code> {string} The absolute or relative input URL to parse. If <code>input</code>
is relative, then <code>base</code> is required. If <code>input</code> is absolute, the <code>base</code>
is ignored. If <code>input</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
<li><code>base</code> {string} The base URL to resolve against if the <code>input</code> is not
absolute. If <code>base</code> is not a string, it is <a href="https://tc39.es/ecma262/#sec-tostring">converted to a string</a> first.</li>
<li>Returns: {URL|null}</li>
</ul>
<p>Parses a string as a URL. If <code>base</code> is provided, it will be used as the base
URL for the purpose of resolving non-absolute <code>input</code> URLs. Returns <code>null</code>
if the parameters can't be resolved to a valid URL.</p>
<h3>Class: <code>URLPattern</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The <code>URLPattern</code> API provides an interface to match URLs or parts of URLs
against a pattern.</p>
<pre><code class="language-js">const myPattern = new URLPattern('https://nodejs.org/docs/latest/api/*.html');
console.log(myPattern.exec('https://nodejs.org/docs/latest/api/dns.html'));
// Prints:
// {
//  &quot;hash&quot;: { &quot;groups&quot;: {  &quot;0&quot;: &quot;&quot; },  &quot;input&quot;: &quot;&quot; },
//  &quot;hostname&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;nodejs.org&quot; },
//  &quot;inputs&quot;: [
//    &quot;https://nodejs.org/docs/latest/api/dns.html&quot;
//  ],
//  &quot;password&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; },
//  &quot;pathname&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;dns&quot; }, &quot;input&quot;: &quot;/docs/latest/api/dns.html&quot; },
//  &quot;port&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;&quot; },
//  &quot;protocol&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;https&quot; },
//  &quot;search&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; },
//  &quot;username&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; }
// }

console.log(myPattern.test('https://nodejs.org/docs/latest/api/dns.html'));
// Prints: true
</code></pre>
<h4><code>new URLPattern()</code></h4>
<p>Instantiate a new empty <code>URLPattern</code> object.</p>
<h4><code>new URLPattern(string[, baseURL][, options])</code></h4>
<ul>
<li><code>string</code> {string} A URL string</li>
<li><code>baseURL</code> {string | undefined} A base URL string</li>
<li><code>options</code> {Object} Options</li>
</ul>
<p>Parse the <code>string</code> as a URL, and use it to instantiate a new
<code>URLPattern</code> object.</p>
<p>If <code>baseURL</code> is not specified, it defaults to <code>undefined</code>.</p>
<p>An option can have <code>ignoreCase</code> boolean attribute which enables
case-insensitive matching if set to true.</p>
<p>The constructor can throw a <code>TypeError</code> to indicate parsing failure.</p>
<h4><code>new URLPattern(obj[, baseURL][, options])</code></h4>
<ul>
<li><code>obj</code> {Object} An input pattern</li>
<li><code>baseURL</code> {string | undefined} A base URL string</li>
<li><code>options</code> {Object} Options</li>
</ul>
<p>Parse the <code>Object</code> as an input pattern, and use it to instantiate a new
<code>URLPattern</code> object. The object members can be any of <code>protocol</code>, <code>username</code>,
<code>password</code>, <code>hostname</code>, <code>port</code>, <code>pathname</code>, <code>search</code>, <code>hash</code> or <code>baseURL</code>.</p>
<p>If <code>baseURL</code> is not specified, it defaults to <code>undefined</code>.</p>
<p>An option can have <code>ignoreCase</code> boolean attribute which enables
case-insensitive matching if set to true.</p>
<p>The constructor can throw a <code>TypeError</code> to indicate parsing failure.</p>
<h4><code>urlPattern.exec(input[, baseURL])</code></h4>
<ul>
<li><code>input</code> {string | Object} A URL or URL parts</li>
<li><code>baseURL</code> {string | undefined} A base URL string</li>
</ul>
<p>Input can be a string or an object providing the individual URL parts. The
object members can be any of <code>protocol</code>, <code>username</code>, <code>password</code>, <code>hostname</code>,
<code>port</code>, <code>pathname</code>, <code>search</code>, <code>hash</code> or <code>baseURL</code>.</p>
<p>If <code>baseURL</code> is not specified, it will default to <code>undefined</code>.</p>
<p>Returns an object with an <code>inputs</code> key containing the array of arguments
passed into the function and keys of the URL components which contains the
matched input and matched groups.</p>
<pre><code class="language-js">const myPattern = new URLPattern('https://nodejs.org/docs/latest/api/*.html');
console.log(myPattern.exec('https://nodejs.org/docs/latest/api/dns.html'));
// Prints:
// {
//  &quot;hash&quot;: { &quot;groups&quot;: {  &quot;0&quot;: &quot;&quot; },  &quot;input&quot;: &quot;&quot; },
//  &quot;hostname&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;nodejs.org&quot; },
//  &quot;inputs&quot;: [
//    &quot;https://nodejs.org/docs/latest/api/dns.html&quot;
//  ],
//  &quot;password&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; },
//  &quot;pathname&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;dns&quot; }, &quot;input&quot;: &quot;/docs/latest/api/dns.html&quot; },
//  &quot;port&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;&quot; },
//  &quot;protocol&quot;: { &quot;groups&quot;: {}, &quot;input&quot;: &quot;https&quot; },
//  &quot;search&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; },
//  &quot;username&quot;: { &quot;groups&quot;: { &quot;0&quot;: &quot;&quot; }, &quot;input&quot;: &quot;&quot; }
// }
</code></pre>
<h4><code>urlPattern.test(input[, baseURL])</code></h4>
<ul>
<li><code>input</code> {string | Object} A URL or URL parts</li>
<li><code>baseURL</code> {string | undefined} A base URL string</li>
<li>Returns {boolean}</li>
</ul>
<p>Input can be a string or an object providing the individual URL parts. The
object members can be any of <code>protocol</code>, <code>username</code>, <code>password</code>, <code>hostname</code>,
<code>port</code>, <code>pathname</code>, <code>search</code>, <code>hash</code> or <code>baseURL</code>.</p>
<p>If <code>baseURL</code> is not specified, it will default to <code>undefined</code>.</p>
<p>Returns a boolean indicating if the input matches the current pattern.</p>
<pre><code class="language-js">const myPattern = new URLPattern('https://nodejs.org/docs/latest/api/*.html');
console.log(myPattern.test('https://nodejs.org/docs/latest/api/dns.html'));
// Prints: true
</code></pre>
<h3>Class: <code>URLSearchParams</code></h3>
<p>The <code>URLSearchParams</code> API provides read and write access to the query of a
<code>URL</code>. The <code>URLSearchParams</code> class can also be used standalone with one of the
four following constructors.
The <code>URLSearchParams</code> class is also available on the global object.</p>
<p>The WHATWG <code>URLSearchParams</code> interface and the <a href="querystring.md"><code>querystring</code></a> module have
similar purpose, but the purpose of the <a href="querystring.md"><code>querystring</code></a> module is more
general, as it allows the customization of delimiter characters (<code>&amp;</code> and <code>=</code>).
On the other hand, this API is designed purely for URL query strings.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));
// Prints 123

myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
// Prints https://example.org/?abc=123&amp;abc=xyz

myURL.searchParams.delete('abc');
myURL.searchParams.set('a', 'b');
console.log(myURL.href);
// Prints https://example.org/?a=b

const newSearchParams = new URLSearchParams(myURL.searchParams);
// The above is equivalent to
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// Prints https://example.org/?a=b
console.log(newSearchParams.toString());
// Prints a=b&amp;a=c

// newSearchParams.toString() is implicitly called
myURL.search = newSearchParams;
console.log(myURL.href);
// Prints https://example.org/?a=b&amp;a=c
newSearchParams.delete('a');
console.log(myURL.href);
// Prints https://example.org/?a=b&amp;a=c
</code></pre>
<h4><code>new URLSearchParams()</code></h4>
<p>Instantiate a new empty <code>URLSearchParams</code> object.</p>
<h4><code>new URLSearchParams(string)</code></h4>
<ul>
<li><code>string</code> {string} A query string</li>
</ul>
<p>Parse the <code>string</code> as a query string, and use it to instantiate a new
<code>URLSearchParams</code> object. A leading <code>'?'</code>, if present, is ignored.</p>
<pre><code class="language-js">let params;

params = new URLSearchParams('user=abc&amp;query=xyz');
console.log(params.get('user'));
// Prints 'abc'
console.log(params.toString());
// Prints 'user=abc&amp;query=xyz'

params = new URLSearchParams('?user=abc&amp;query=xyz');
console.log(params.toString());
// Prints 'user=abc&amp;query=xyz'
</code></pre>
<h4><code>new URLSearchParams(obj)</code></h4>
<ul>
<li><code>obj</code> {Object} An object representing a collection of key-value pairs</li>
</ul>
<p>Instantiate a new <code>URLSearchParams</code> object with a query hash map. The key and
value of each property of <code>obj</code> are always coerced to strings.</p>
<p>Unlike <a href="querystring.md"><code>querystring</code></a> module, duplicate keys in the form of array values are
not allowed. Arrays are stringified using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"><code>array.toString()</code></a>, which simply
joins all array elements with commas.</p>
<pre><code class="language-js">const params = new URLSearchParams({
  user: 'abc',
  query: ['first', 'second'],
});
console.log(params.getAll('query'));
// Prints [ 'first,second' ]
console.log(params.toString());
// Prints 'user=abc&amp;query=first%2Csecond'
</code></pre>
<h4><code>new URLSearchParams(iterable)</code></h4>
<ul>
<li><code>iterable</code> {Iterable} An iterable object whose elements are key-value pairs</li>
</ul>
<p>Instantiate a new <code>URLSearchParams</code> object with an iterable map in a way that
is similar to {Map}'s constructor. <code>iterable</code> can be an <code>Array</code> or any
iterable object. That means <code>iterable</code> can be another <code>URLSearchParams</code>, in
which case the constructor will simply create a clone of the provided
<code>URLSearchParams</code>. Elements of <code>iterable</code> are key-value pairs, and can
themselves be any iterable object.</p>
<p>Duplicate keys are allowed.</p>
<pre><code class="language-js">let params;

// Using an array
params = new URLSearchParams([
  ['user', 'abc'],
  ['query', 'first'],
  ['query', 'second'],
]);
console.log(params.toString());
// Prints 'user=abc&amp;query=first&amp;query=second'

// Using a Map object
const map = new Map();
map.set('user', 'abc');
map.set('query', 'xyz');
params = new URLSearchParams(map);
console.log(params.toString());
// Prints 'user=abc&amp;query=xyz'

// Using a generator function
function* getQueryPairs() {
  yield ['user', 'abc'];
  yield ['query', 'first'];
  yield ['query', 'second'];
}
params = new URLSearchParams(getQueryPairs());
console.log(params.toString());
// Prints 'user=abc&amp;query=first&amp;query=second'

// Each key-value pair must have exactly two elements
new URLSearchParams([
  ['user', 'abc', 'error'],
]);
// Throws TypeError [ERR_INVALID_TUPLE]:
//        Each query pair must be an iterable [name, value] tuple
</code></pre>
<h4><code>urlSearchParams.append(name, value)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string}</li>
</ul>
<p>Append a new name-value pair to the query string.</p>
<h4><code>urlSearchParams.delete(name[, value])</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string}</li>
</ul>
<p>If <code>value</code> is provided, removes all name-value pairs
where name is <code>name</code> and value is <code>value</code>..</p>
<p>If <code>value</code> is not provided, removes all name-value pairs whose name is <code>name</code>.</p>
<h4><code>urlSearchParams.entries()</code></h4>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an ES6 <code>Iterator</code> over each of the name-value pairs in the query.
Each item of the iterator is a JavaScript <code>Array</code>. The first item of the <code>Array</code>
is the <code>name</code>, the second item of the <code>Array</code> is the <code>value</code>.</p>
<p>Alias for <a href="#urlsearchparamssymboliterator"><code>urlSearchParams[Symbol.iterator]()</code></a>.</p>
<h4><code>urlSearchParams.forEach(fn[, thisArg])</code></h4>
<ul>
<li><code>fn</code> {Function} Invoked for each name-value pair in the query</li>
<li><code>thisArg</code> {Object} To be used as <code>this</code> value for when <code>fn</code> is called</li>
</ul>
<p>Iterates over each name-value pair in the query and invokes the given function.</p>
<pre><code class="language-js">const myURL = new URL('https://example.org/?a=b&amp;c=d');
myURL.searchParams.forEach((value, name, searchParams) =&gt; {
  console.log(name, value, myURL.searchParams === searchParams);
});
// Prints:
//   a b true
//   c d true
</code></pre>
<h4><code>urlSearchParams.get(name)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {string | null} A string or <code>null</code> if there is no name-value pair
with the given <code>name</code>.</li>
</ul>
<p>Returns the value of the first name-value pair whose name is <code>name</code>. If there
are no such pairs, <code>null</code> is returned.</p>
<h4><code>urlSearchParams.getAll(name)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {string[]}</li>
</ul>
<p>Returns the values of all name-value pairs whose name is <code>name</code>. If there are
no such pairs, an empty array is returned.</p>
<h4><code>urlSearchParams.has(name[, value])</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Checks if the <code>URLSearchParams</code> object contains key-value pair(s) based on
<code>name</code> and an optional <code>value</code> argument.</p>
<p>If <code>value</code> is provided, returns <code>true</code> when name-value pair with
same <code>name</code> and <code>value</code> exists.</p>
<p>If <code>value</code> is not provided, returns <code>true</code> if there is at least one name-value
pair whose name is <code>name</code>.</p>
<h4><code>urlSearchParams.keys()</code></h4>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an ES6 <code>Iterator</code> over the names of each name-value pair.</p>
<pre><code class="language-js">const params = new URLSearchParams('foo=bar&amp;foo=baz');
for (const name of params.keys()) {
  console.log(name);
}
// Prints:
//   foo
//   foo
</code></pre>
<h4><code>urlSearchParams.set(name, value)</code></h4>
<ul>
<li><code>name</code> {string}</li>
<li><code>value</code> {string}</li>
</ul>
<p>Sets the value in the <code>URLSearchParams</code> object associated with <code>name</code> to
<code>value</code>. If there are any pre-existing name-value pairs whose names are <code>name</code>,
set the first such pair's value to <code>value</code> and remove all others. If not,
append the name-value pair to the query string.</p>
<pre><code class="language-js">const params = new URLSearchParams();
params.append('foo', 'bar');
params.append('foo', 'baz');
params.append('abc', 'def');
console.log(params.toString());
// Prints foo=bar&amp;foo=baz&amp;abc=def

params.set('foo', 'def');
params.set('xyz', 'opq');
console.log(params.toString());
// Prints foo=def&amp;abc=def&amp;xyz=opq
</code></pre>
<h4><code>urlSearchParams.size</code></h4>
<p>The total number of parameter entries.</p>
<h4><code>urlSearchParams.sort()</code></h4>
<p>Sort all existing name-value pairs in-place by their names. Sorting is done
with a <a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability">stable sorting algorithm</a>, so relative order between name-value pairs
with the same name is preserved.</p>
<p>This method can be used, in particular, to increase cache hits.</p>
<pre><code class="language-js">const params = new URLSearchParams('query[]=abc&amp;type=search&amp;query[]=123');
params.sort();
console.log(params.toString());
// Prints query%5B%5D=abc&amp;query%5B%5D=123&amp;type=search
</code></pre>
<h4><code>urlSearchParams.toString()</code></h4>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the search parameters serialized as a string, with characters
percent-encoded where necessary.</p>
<h4><code>urlSearchParams.values()</code></h4>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an ES6 <code>Iterator</code> over the values of each name-value pair.</p>
<h4><code>urlSearchParams[Symbol.iterator]()</code></h4>
<ul>
<li>Returns: {Iterator}</li>
</ul>
<p>Returns an ES6 <code>Iterator</code> over each of the name-value pairs in the query string.
Each item of the iterator is a JavaScript <code>Array</code>. The first item of the <code>Array</code>
is the <code>name</code>, the second item of the <code>Array</code> is the <code>value</code>.</p>
<p>Alias for <a href="#urlsearchparamsentries"><code>urlSearchParams.entries()</code></a>.</p>
<pre><code class="language-js">const params = new URLSearchParams('foo=bar&amp;xyz=baz');
for (const [name, value] of params) {
  console.log(name, value);
}
// Prints:
//   foo bar
//   xyz baz
</code></pre>
<h3><code>url.domainToASCII(domain)</code></h3>
<ul>
<li><code>domain</code> {string}</li>
<li>Returns: {string}</li>
</ul>
<p>Returns the <a href="https://tools.ietf.org/html/rfc5891#section-4.4">Punycode</a> ASCII serialization of the <code>domain</code>. If <code>domain</code> is an
invalid domain, the empty string is returned.</p>
<p>It performs the inverse operation to <a href="#urldomaintounicodedomain"><code>url.domainToUnicode()</code></a>.</p>
<pre><code class="language-mjs">import url from 'node:url';

console.log(url.domainToASCII('español.com'));
// Prints xn--espaol-zwa.com
console.log(url.domainToASCII('中文.com'));
// Prints xn--fiq228c.com
console.log(url.domainToASCII('xn--iñvalid.com'));
// Prints an empty string
</code></pre>
<pre><code class="language-cjs">const url = require('node:url');

console.log(url.domainToASCII('español.com'));
// Prints xn--espaol-zwa.com
console.log(url.domainToASCII('中文.com'));
// Prints xn--fiq228c.com
console.log(url.domainToASCII('xn--iñvalid.com'));
// Prints an empty string
</code></pre>
<h3><code>url.domainToUnicode(domain)</code></h3>
<ul>
<li><code>domain</code> {string}</li>
<li>Returns: {string}</li>
</ul>
<p>Returns the Unicode serialization of the <code>domain</code>. If <code>domain</code> is an invalid
domain, the empty string is returned.</p>
<p>It performs the inverse operation to <a href="#urldomaintoasciidomain"><code>url.domainToASCII()</code></a>.</p>
<pre><code class="language-mjs">import url from 'node:url';

console.log(url.domainToUnicode('xn--espaol-zwa.com'));
// Prints español.com
console.log(url.domainToUnicode('xn--fiq228c.com'));
// Prints 中文.com
console.log(url.domainToUnicode('xn--iñvalid.com'));
// Prints an empty string
</code></pre>
<pre><code class="language-cjs">const url = require('node:url');

console.log(url.domainToUnicode('xn--espaol-zwa.com'));
// Prints español.com
console.log(url.domainToUnicode('xn--fiq228c.com'));
// Prints 中文.com
console.log(url.domainToUnicode('xn--iñvalid.com'));
// Prints an empty string
</code></pre>
<h3><code>url.fileURLToPath(url[, options])</code></h3>
<ul>
<li><code>url</code> {URL | string} The file URL string or URL object to convert to a path.</li>
<li><code>options</code> {Object}
<ul>
<li><code>windows</code> {boolean|undefined} <code>true</code> if the <code>path</code> should be
return as a windows filepath, <code>false</code> for posix, and
<code>undefined</code> for the system default.
<strong>Default:</strong> <code>undefined</code>.</li>
</ul>
</li>
<li>Returns: {string} The fully-resolved platform-specific Node.js file path.</li>
</ul>
<p>This function ensures the correct decodings of percent-encoded characters as
well as ensuring a cross-platform valid absolute path string.</p>
<p><strong>Security Considerations:</strong></p>
<p>This function decodes percent-encoded characters, including encoded dot-segments
(<code>%2e</code> as <code>.</code> and <code>%2e%2e</code> as <code>..</code>), and then normalizes the resulting path.
This means that encoded directory traversal sequences (such as <code>%2e%2e</code>) are
decoded and processed as actual path traversal, even though encoded slashes
(<code>%2F</code>, <code>%5C</code>) are correctly rejected.</p>
<p><strong>Applications must not rely on <code>fileURLToPath()</code> alone to prevent directory
traversal attacks.</strong> Always perform explicit path validation and security checks
on the returned path value to ensure it remains within expected boundaries
before using it for file system operations.</p>
<pre><code class="language-mjs">import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
</code></pre>
<pre><code class="language-cjs">const { fileURLToPath } = require('node:url');
new URL('file:///C:/path/').pathname;      // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)

new URL('file://nas/foo.txt').pathname;    // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)

new URL('file:///你好.txt').pathname;      // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');         // Correct:   /你好.txt (POSIX)

new URL('file:///hello world').pathname;   // Incorrect: /hello%20world
fileURLToPath('file:///hello world');      // Correct:   /hello world (POSIX)
</code></pre>
<h3><code>url.fileURLToPathBuffer(url[, options])</code></h3>
<ul>
<li><code>url</code> {URL | string} The file URL string or URL object to convert to a path.</li>
<li><code>options</code> {Object}
<ul>
<li><code>windows</code> {boolean|undefined} <code>true</code> if the <code>path</code> should be
return as a windows filepath, <code>false</code> for posix, and
<code>undefined</code> for the system default.
<strong>Default:</strong> <code>undefined</code>.</li>
</ul>
</li>
<li>Returns: {Buffer} The fully-resolved platform-specific Node.js file path
as a {Buffer}.</li>
</ul>
<p>Like <code>url.fileURLToPath(...)</code> except that instead of returning a string
representation of the path, a <code>Buffer</code> is returned. This conversion is
helpful when the input URL contains percent-encoded segments that are
not valid UTF-8 / Unicode sequences.</p>
<p><strong>Security Considerations:</strong></p>
<p>This function has the same security considerations as <a href="#urlfileurltopathurl-options"><code>url.fileURLToPath()</code></a>.
It decodes percent-encoded characters, including encoded dot-segments
(<code>%2e</code> as <code>.</code> and <code>%2e%2e</code> as <code>..</code>), and normalizes the path. <strong>Applications
must not rely on this function alone to prevent directory traversal attacks.</strong>
Always perform explicit path validation on the returned buffer value before
using it for file system operations.</p>
<h3><code>url.format(URL[, options])</code></h3>
<ul>
<li><code>URL</code> {URL} A <a href="#the-whatwg-url-api">WHATWG URL</a> object</li>
<li><code>options</code> {Object}
<ul>
<li><code>auth</code> {boolean} <code>true</code> if the serialized URL string should include the
username and password, <code>false</code> otherwise. <strong>Default:</strong> <code>true</code>.</li>
<li><code>fragment</code> {boolean} <code>true</code> if the serialized URL string should include the
fragment, <code>false</code> otherwise. <strong>Default:</strong> <code>true</code>.</li>
<li><code>search</code> {boolean} <code>true</code> if the serialized URL string should include the
search query, <code>false</code> otherwise. <strong>Default:</strong> <code>true</code>.</li>
<li><code>unicode</code> {boolean} <code>true</code> if Unicode characters appearing in the host
component of the URL string should be encoded directly as opposed to being
Punycode encoded. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Returns a customizable serialization of a URL <code>String</code> representation of a
<a href="#the-whatwg-url-api">WHATWG URL</a> object.</p>
<p>The URL object has both a <code>toString()</code> method and <code>href</code> property that return
string serializations of the URL. These are not, however, customizable in
any way. The <code>url.format(URL[, options])</code> method allows for basic customization
of the output.</p>
<pre><code class="language-mjs">import url from 'node:url';
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
// Prints 'https://測試/?abc'
</code></pre>
<pre><code class="language-cjs">const url = require('node:url');
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(myURL.href);
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(myURL.toString());
// Prints https://a:b@xn--g6w251d/?abc#foo

console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
// Prints 'https://測試/?abc'
</code></pre>
<h3><code>url.pathToFileURL(path[, options])</code></h3>
<ul>
<li><code>path</code> {string} The path to convert to a File URL.</li>
<li><code>options</code> {Object}
<ul>
<li><code>windows</code> {boolean|undefined} <code>true</code> if the <code>path</code> should be
treated as a windows filepath, <code>false</code> for posix, and
<code>undefined</code> for the system default.
<strong>Default:</strong> <code>undefined</code>.</li>
</ul>
</li>
<li>Returns: {URL} The file URL object.</li>
</ul>
<p>This function ensures that <code>path</code> is resolved absolutely, and that the URL
control characters are correctly encoded when converting into a File URL.</p>
<pre><code class="language-mjs">import { pathToFileURL } from 'node:url';

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
</code></pre>
<pre><code class="language-cjs">const { pathToFileURL } = require('node:url');
new URL(__filename);                  // Incorrect: throws (POSIX)
new URL(__filename);                  // Incorrect: C:\... (Windows)
pathToFileURL(__filename);            // Correct:   file:///... (POSIX)
pathToFileURL(__filename);            // Correct:   file:///C:/... (Windows)

new URL('/foo#1', 'file:');           // Incorrect: file:///foo#1
pathToFileURL('/foo#1');              // Correct:   file:///foo%231 (POSIX)

new URL('/some/path%.c', 'file:');    // Incorrect: file:///some/path%.c
pathToFileURL('/some/path%.c');       // Correct:   file:///some/path%25.c (POSIX)
</code></pre>
<h3><code>url.urlToHttpOptions(url)</code></h3>
<ul>
<li><code>url</code> {URL} The <a href="#the-whatwg-url-api">WHATWG URL</a> object to convert to an options object.</li>
<li>Returns: {Object} Options object
<ul>
<li><code>protocol</code> {string} Protocol to use.</li>
<li><code>hostname</code> {string} A domain name or IP address of the server to issue the
request to.</li>
<li><code>hash</code> {string} The fragment portion of the URL.</li>
<li><code>search</code> {string} The serialized query portion of the URL.</li>
<li><code>pathname</code> {string} The path portion of the URL.</li>
<li><code>path</code> {string} Request path. Should include query string if any.
E.G. <code>'/index.html?page=12'</code>. An exception is thrown when the request path
contains illegal characters. Currently, only spaces are rejected but that
may change in the future.</li>
<li><code>href</code> {string} The serialized URL.</li>
<li><code>port</code> {number} Port of remote server.</li>
<li><code>auth</code> {string} Basic authentication i.e. <code>'user:password'</code> to compute an
Authorization header.</li>
</ul>
</li>
</ul>
<p>This utility function converts a URL object into an ordinary options object as
expected by the <a href="http.md#httprequestoptions-callback"><code>http.request()</code></a> and <a href="https.md#httpsrequestoptions-callback"><code>https.request()</code></a> APIs.</p>
<pre><code class="language-mjs">import { urlToHttpOptions } from 'node:url';
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(urlToHttpOptions(myURL));
/*
{
  protocol: 'https:',
  hostname: 'xn--g6w251d',
  hash: '#foo',
  search: '?abc',
  pathname: '/',
  path: '/?abc',
  href: 'https://a:b@xn--g6w251d/?abc#foo',
  auth: 'a:b'
}
*/
</code></pre>
<pre><code class="language-cjs">const { urlToHttpOptions } = require('node:url');
const myURL = new URL('https://a:b@測試?abc#foo');

console.log(urlToHttpOptions(myURL));
/*
{
  protocol: 'https:',
  hostname: 'xn--g6w251d',
  hash: '#foo',
  search: '?abc',
  pathname: '/',
  path: '/?abc',
  href: 'https://a:b@xn--g6w251d/?abc#foo',
  auth: 'a:b'
}
*/
</code></pre>
<h2>Legacy URL API</h2>
<blockquote>
<p>Stability: 3 - Legacy: Use the WHATWG URL API instead.</p>
</blockquote>
<h3>Legacy <code>urlObject</code></h3>
<p>The legacy <code>urlObject</code> (<code>require('node:url').Url</code> or
<code>import { Url } from 'node:url'</code>) is
created and returned by the <code>url.parse()</code> function.</p>
<h4><code>urlObject.auth</code></h4>
<p>The <code>auth</code> property is the username and password portion of the URL, also
referred to as <em>userinfo</em>. This string subset follows the <code>protocol</code> and
double slashes (if present) and precedes the <code>host</code> component, delimited by <code>@</code>.
The string is either the username, or it is the username and password separated
by <code>:</code>.</p>
<p>For example: <code>'user:pass'</code>.</p>
<h4><code>urlObject.hash</code></h4>
<p>The <code>hash</code> property is the fragment identifier portion of the URL including the
leading <code>#</code> character.</p>
<p>For example: <code>'#hash'</code>.</p>
<h4><code>urlObject.host</code></h4>
<p>The <code>host</code> property is the full lower-cased host portion of the URL, including
the <code>port</code> if specified.</p>
<p>For example: <code>'sub.example.com:8080'</code>.</p>
<h4><code>urlObject.hostname</code></h4>
<p>The <code>hostname</code> property is the lower-cased host name portion of the <code>host</code>
component <em>without</em> the <code>port</code> included.</p>
<p>For example: <code>'sub.example.com'</code>.</p>
<h4><code>urlObject.href</code></h4>
<p>The <code>href</code> property is the full URL string that was parsed with both the
<code>protocol</code> and <code>host</code> components converted to lower-case.</p>
<p>For example: <code>'http://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'</code>.</p>
<h4><code>urlObject.path</code></h4>
<p>The <code>path</code> property is a concatenation of the <code>pathname</code> and <code>search</code>
components.</p>
<p>For example: <code>'/p/a/t/h?query=string'</code>.</p>
<p>No decoding of the <code>path</code> is performed.</p>
<h4><code>urlObject.pathname</code></h4>
<p>The <code>pathname</code> property consists of the entire path section of the URL. This
is everything following the <code>host</code> (including the <code>port</code>) and before the start
of the <code>query</code> or <code>hash</code> components, delimited by either the ASCII question
mark (<code>?</code>) or hash (<code>#</code>) characters.</p>
<p>For example: <code>'/p/a/t/h'</code>.</p>
<p>No decoding of the path string is performed.</p>
<h4><code>urlObject.port</code></h4>
<p>The <code>port</code> property is the numeric port portion of the <code>host</code> component.</p>
<p>For example: <code>'8080'</code>.</p>
<h4><code>urlObject.protocol</code></h4>
<p>The <code>protocol</code> property identifies the URL's lower-cased protocol scheme.</p>
<p>For example: <code>'http:'</code>.</p>
<h4><code>urlObject.query</code></h4>
<p>The <code>query</code> property is either the query string without the leading ASCII
question mark (<code>?</code>), or an object returned by the <a href="querystring.md"><code>querystring</code></a> module's
<code>parse()</code> method. Whether the <code>query</code> property is a string or object is
determined by the <code>parseQueryString</code> argument passed to <code>url.parse()</code>.</p>
<p>For example: <code>'query=string'</code> or <code>{'query': 'string'}</code>.</p>
<p>If returned as a string, no decoding of the query string is performed. If
returned as an object, both keys and values are decoded.</p>
<h4><code>urlObject.search</code></h4>
<p>The <code>search</code> property consists of the entire &quot;query string&quot; portion of the
URL, including the leading ASCII question mark (<code>?</code>) character.</p>
<p>For example: <code>'?query=string'</code>.</p>
<p>No decoding of the query string is performed.</p>
<h4><code>urlObject.slashes</code></h4>
<p>The <code>slashes</code> property is a <code>boolean</code> with a value of <code>true</code> if two ASCII
forward-slash characters (<code>/</code>) are required following the colon in the
<code>protocol</code>.</p>
<h3><code>url.format(urlObject)</code></h3>
<ul>
<li><code>urlObject</code> {Object} A URL object (as returned by <code>url.parse()</code> or
constructed otherwise).</li>
<li>Returns: {string}</li>
</ul>
<p>The <code>url.format()</code> method returns a formatted URL string derived from
<code>urlObject</code>.</p>
<pre><code class="language-js">const url = require('node:url');
url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json',
  },
});

// =&gt; 'https://example.com/some/path?page=1&amp;format=json'
</code></pre>
<p>If <code>urlObject</code> is not an object or a string, <code>url.format()</code> will throw a
<a href="errors.md#class-typeerror"><code>TypeError</code></a>.</p>
<p>The formatting process operates as follows:</p>
<ul>
<li>A new empty string <code>result</code> is created.</li>
<li>If <code>urlObject.protocol</code> is a string, it is appended as-is to <code>result</code>.</li>
<li>Otherwise, if <code>urlObject.protocol</code> is not <code>undefined</code> and is not a string, an
<a href="errors.md#class-error"><code>Error</code></a> is thrown.</li>
<li>For all string values of <code>urlObject.protocol</code> that <em>do not end</em> with an ASCII
colon (<code>:</code>) character, the literal string <code>:</code> will be appended to <code>result</code>.</li>
<li>If either of the following conditions is true, then the literal string <code>//</code>
will be appended to <code>result</code>:
<ul>
<li><code>urlObject.slashes</code> property is true;</li>
<li><code>urlObject.protocol</code> begins with <code>http</code>, <code>https</code>, <code>ftp</code>, <code>gopher</code>, or
<code>file</code>;</li>
</ul>
</li>
<li>If the value of the <code>urlObject.auth</code> property is truthy, and either
<code>urlObject.host</code> or <code>urlObject.hostname</code> are not <code>undefined</code>, the value of
<code>urlObject.auth</code> will be coerced into a string and appended to <code>result</code>
followed by the literal string <code>@</code>.</li>
<li>If the <code>urlObject.host</code> property is <code>undefined</code> then:
<ul>
<li>If the <code>urlObject.hostname</code> is a string, it is appended to <code>result</code>.</li>
<li>Otherwise, if <code>urlObject.hostname</code> is not <code>undefined</code> and is not a string,
an <a href="errors.md#class-error"><code>Error</code></a> is thrown.</li>
<li>If the <code>urlObject.port</code> property value is truthy, and <code>urlObject.hostname</code>
is not <code>undefined</code>:
<ul>
<li>The literal string <code>:</code> is appended to <code>result</code>, and</li>
<li>The value of <code>urlObject.port</code> is coerced to a string and appended to
<code>result</code>.</li>
</ul>
</li>
</ul>
</li>
<li>Otherwise, if the <code>urlObject.host</code> property value is truthy, the value of
<code>urlObject.host</code> is coerced to a string and appended to <code>result</code>.</li>
<li>If the <code>urlObject.pathname</code> property is a string that is not an empty string:
<ul>
<li>If the <code>urlObject.pathname</code> <em>does not start</em> with an ASCII forward slash
(<code>/</code>), then the literal string <code>'/'</code> is appended to <code>result</code>.</li>
<li>The value of <code>urlObject.pathname</code> is appended to <code>result</code>.</li>
</ul>
</li>
<li>Otherwise, if <code>urlObject.pathname</code> is not <code>undefined</code> and is not a string, an
<a href="errors.md#class-error"><code>Error</code></a> is thrown.</li>
<li>If the <code>urlObject.search</code> property is <code>undefined</code> and if the <code>urlObject.query</code>
property is an <code>Object</code>, the literal string <code>?</code> is appended to <code>result</code>
followed by the output of calling the <a href="querystring.md"><code>querystring</code></a> module's <code>stringify()</code>
method passing the value of <code>urlObject.query</code>.</li>
<li>Otherwise, if <code>urlObject.search</code> is a string:
<ul>
<li>If the value of <code>urlObject.search</code> <em>does not start</em> with the ASCII question
mark (<code>?</code>) character, the literal string <code>?</code> is appended to <code>result</code>.</li>
<li>The value of <code>urlObject.search</code> is appended to <code>result</code>.</li>
</ul>
</li>
<li>Otherwise, if <code>urlObject.search</code> is not <code>undefined</code> and is not a string, an
<a href="errors.md#class-error"><code>Error</code></a> is thrown.</li>
<li>If the <code>urlObject.hash</code> property is a string:
<ul>
<li>If the value of <code>urlObject.hash</code> <em>does not start</em> with the ASCII hash (<code>#</code>)
character, the literal string <code>#</code> is appended to <code>result</code>.</li>
<li>The value of <code>urlObject.hash</code> is appended to <code>result</code>.</li>
</ul>
</li>
<li>Otherwise, if the <code>urlObject.hash</code> property is not <code>undefined</code> and is not a
string, an <a href="errors.md#class-error"><code>Error</code></a> is thrown.</li>
<li><code>result</code> is returned.</li>
</ul>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/node-url-to-whatwg-url">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/node-url-to-whatwg-url
</code></pre>
<h3><code>url.format(urlString)</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use the WHATWG URL API instead.</p>
</blockquote>
<ul>
<li><code>urlString</code> {string} A string that will be passed to <code>url.parse()</code> and then
formatted.</li>
<li>Returns: {string}</li>
</ul>
<p><code>url.format(urlString)</code> is shorthand for <code>url.format(url.parse(urlString))</code>.</p>
<p>Because it invokes the deprecated <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> internally, passing a string argument
to <code>url.format()</code> is itself deprecated.</p>
<p>Canonicalizing a URL string can be performed using the WHATWG URL API, by
constructing a new URL object and calling <a href="#urltostring"><code>url.toString()</code></a>.</p>
<pre><code class="language-mjs">import { URL } from 'node:url';

const unformatted = 'http://[fe80:0:0:0:0:0:0:1]:/a/b?a=b#abc';
const formatted = new URL(unformatted).toString();

console.log(formatted); // Prints: http://[fe80::1]/a/b?a=b#abc
</code></pre>
<pre><code class="language-cjs">const { URL } = require('node:url');

const unformatted = 'http://[fe80:0:0:0:0:0:0:1]:/a/b?a=b#abc';
const formatted = new URL(unformatted).toString();

console.log(formatted); // Prints: http://[fe80::1]/a/b?a=b#abc
</code></pre>
<h3><code>url.parse(urlString[, parseQueryString[, slashesDenoteHost]])</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use the WHATWG URL API instead.</p>
</blockquote>
<ul>
<li><code>urlString</code> {string} The URL string to parse.</li>
<li><code>parseQueryString</code> {boolean} If <code>true</code>, the <code>query</code> property will always
be set to an object returned by the <a href="querystring.md"><code>querystring</code></a> module's <code>parse()</code>
method. If <code>false</code>, the <code>query</code> property on the returned URL object will be an
unparsed, undecoded string. <strong>Default:</strong> <code>false</code>.</li>
<li><code>slashesDenoteHost</code> {boolean} If <code>true</code>, the first token after the literal
string <code>//</code> and preceding the next <code>/</code> will be interpreted as the <code>host</code>.
For instance, given <code>//foo/bar</code>, the result would be
<code>{host: 'foo', pathname: '/bar'}</code> rather than <code>{pathname: '//foo/bar'}</code>.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
<p>The <code>url.parse()</code> method takes a URL string, parses it, and returns a URL
object.</p>
<p>A <code>TypeError</code> is thrown if <code>urlString</code> is not a string.</p>
<p>A <code>URIError</code> is thrown if the <code>auth</code> property is present but cannot be decoded.</p>
<p><code>url.parse()</code> uses a lenient, non-standard algorithm for parsing URL
strings. It is prone to security issues such as <a href="https://hackerone.com/reports/678487">host name spoofing</a>
and incorrect handling of usernames and passwords. Do not use with untrusted
input. CVEs are not issued for <code>url.parse()</code> vulnerabilities. Use the
<a href="#the-whatwg-url-api">WHATWG URL</a> API instead, for example:</p>
<pre><code class="language-js">function getURL(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'example.com';
  return new URL(`${proto}://${host}${req.url || '/'}`);
}
</code></pre>
<p>The example above assumes well-formed headers are forwarded from a reverse
proxy to your Node.js server. If you are not using a reverse proxy, you should
use the example below:</p>
<pre><code class="language-js">function getURL(req) {
  return new URL(`https://example.com${req.url || '/'}`);
}
</code></pre>
<p>An automated migration is available (<a href="https://github.com/nodejs/userland-migrations/tree/main/recipes/node-url-to-whatwg-url">source</a>).</p>
<pre><code class="language-bash">npx codemod@latest @nodejs/node-url-to-whatwg-url
</code></pre>
<h3><code>url.resolve(from, to)</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated: Use the WHATWG URL API instead.</p>
</blockquote>
<ul>
<li><code>from</code> {string} The base URL to use if <code>to</code> is a relative URL.</li>
<li><code>to</code> {string} The target URL to resolve.</li>
</ul>
<p>The <code>url.resolve()</code> method resolves a target URL relative to a base URL in a
manner similar to that of a web browser resolving an anchor tag.</p>
<pre><code class="language-js">const url = require('node:url');
url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'
</code></pre>
<p>Because it invokes the deprecated <a href="#urlparseurlstring-parsequerystring-slashesdenotehost"><code>url.parse()</code></a> internally, <code>url.resolve()</code> is itself deprecated.</p>
<p>To achieve the same result using the WHATWG URL API:</p>
<pre><code class="language-js">function resolve(from, to) {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
  if (resolvedUrl.protocol === 'resolve:') {
    // `from` is a relative URL.
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
}

resolve('/one/two/three', 'four');         // '/one/two/four'
resolve('http://example.com/', '/one');    // 'http://example.com/one'
resolve('http://example.com/one', '/two'); // 'http://example.com/two'
</code></pre>
<p>&lt;a id=&quot;whatwg-percent-encoding&quot;&gt;&lt;/a&gt;</p>
<h2>Percent-encoding in URLs</h2>
<p>URLs are permitted to only contain a certain range of characters. Any character
falling outside of that range must be encoded. How such characters are encoded,
and which characters to encode depends entirely on where the character is
located within the structure of the URL.</p>
<h3>Legacy API</h3>
<p>Within the Legacy API, spaces (<code>' '</code>) and the following characters will be
automatically escaped in the properties of URL objects:</p>
<pre><code class="language-text">&lt; &gt; &quot; ` \r \n \t { } | \ ^ '
</code></pre>
<p>For example, the ASCII space character (<code>' '</code>) is encoded as <code>%20</code>. The ASCII
forward slash (<code>/</code>) character is encoded as <code>%3C</code>.</p>
<h3>WHATWG API</h3>
<p>The <a href="https://url.spec.whatwg.org/">WHATWG URL Standard</a> uses a more selective and fine grained approach to
selecting encoded characters than that used by the Legacy API.</p>
<p>The WHATWG algorithm defines four &quot;percent-encode sets&quot; that describe ranges
of characters that must be percent-encoded:</p>
<ul>
<li>
<p>The <em>C0 control percent-encode set</em> includes code points in range U+0000 to
U+001F (inclusive) and all code points greater than U+007E (~).</p>
</li>
<li>
<p>The <em>fragment percent-encode set</em> includes the <em>C0 control percent-encode set</em>
and code points U+0020 SPACE, U+0022 (&quot;), U+003C (&lt;), U+003E (&gt;),
and U+0060 (`).</p>
</li>
<li>
<p>The <em>path percent-encode set</em> includes the <em>C0 control percent-encode set</em>
and code points U+0020 SPACE, U+0022 (&quot;), U+0023 (#), U+003C (&lt;), U+003E (&gt;),
U+003F (?), U+0060 (`), U+007B ({), and U+007D (}).</p>
</li>
<li>
<p>The <em>userinfo encode set</em> includes the <em>path percent-encode set</em> and code
points U+002F (/), U+003A (:), U+003B (;), U+003D (=), U+0040 (@),
U+005B ([) to U+005E(^), and U+007C (|).</p>
</li>
</ul>
<p>The <em>userinfo percent-encode set</em> is used exclusively for username and
passwords encoded within the URL. The <em>path percent-encode set</em> is used for the
path of most URLs. The <em>fragment percent-encode set</em> is used for URL fragments.
The <em>C0 control percent-encode set</em> is used for host and path under certain
specific conditions, in addition to all other cases.</p>
<p>When non-ASCII characters appear within a host name, the host name is encoded
using the <a href="https://tools.ietf.org/html/rfc5891#section-4.4">Punycode</a> algorithm. Note, however, that a host name <em>may</em> contain
<em>both</em> Punycode encoded and percent-encoded characters:</p>
<pre><code class="language-js">const myURL = new URL('https://%CF%80.example.com/foo');
console.log(myURL.href);
// Prints https://xn--1xa.example.com/foo
console.log(myURL.origin);
// Prints https://xn--1xa.example.com
</code></pre>
