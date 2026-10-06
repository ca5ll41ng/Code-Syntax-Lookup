---
id: "js-en-function-node-string_decoder"
language: "js"
lang: "en"
category: "function"
name: "node:string_decoder"
title: "String decoder"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/string_decoder.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# String decoder

<h1>String decoder</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:string_decoder</code> module provides an API for decoding <code>Buffer</code> objects
into strings in a manner that preserves encoded multi-byte UTF-8 and UTF-16
characters. It can be accessed using:</p>
<pre><code class="language-mjs">import { StringDecoder } from 'node:string_decoder';
</code></pre>
<pre><code class="language-cjs">const { StringDecoder } = require('node:string_decoder');
</code></pre>
<p>The following example shows the basic use of the <code>StringDecoder</code> class.</p>
<pre><code class="language-mjs">import { StringDecoder } from 'node:string_decoder';
import { Buffer } from 'node:buffer';
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // Prints: ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // Prints: €
</code></pre>
<pre><code class="language-cjs">const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // Prints: ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // Prints: €
</code></pre>
<p>When a <code>Buffer</code> instance is written to the <code>StringDecoder</code> instance, an
internal buffer is used to ensure that the decoded string does not contain
any incomplete multibyte characters. These are held in the buffer until the
next call to <code>stringDecoder.write()</code> or until <code>stringDecoder.end()</code> is called.</p>
<p>In the following example, the three UTF-8 encoded bytes of the European Euro
symbol (<code>€</code>) are written over three separate operations:</p>
<pre><code class="language-mjs">import { StringDecoder } from 'node:string_decoder';
import { Buffer } from 'node:buffer';
const decoder = new StringDecoder('utf8');

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // Prints: €
</code></pre>
<pre><code class="language-cjs">const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // Prints: €
</code></pre>
<h2>Class: <code>StringDecoder</code></h2>
<h3><code>new StringDecoder([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The character <a href="buffer.md#buffers-and-character-encodings">encoding</a> the <code>StringDecoder</code> will use.
<strong>Default:</strong> <code>'utf8'</code>.</li>
</ul>
<p>Creates a new <code>StringDecoder</code> instance.</p>
<h3><code>stringDecoder.end([buffer])</code></h3>
<ul>
<li><code>buffer</code> {string|Buffer|TypedArray|DataView} The bytes to decode.</li>
<li>Returns: {string}</li>
</ul>
<p>Returns any remaining input stored in the internal buffer as a string. Bytes
representing incomplete UTF-8 and UTF-16 characters will be replaced with
substitution characters appropriate for the character encoding.</p>
<p>If the <code>buffer</code> argument is provided, one final call to <code>stringDecoder.write()</code>
is performed before returning the remaining input.
After <code>end()</code> is called, the <code>stringDecoder</code> object can be reused for new input.</p>
<h3><code>stringDecoder.write(buffer)</code></h3>
<ul>
<li><code>buffer</code> {string|Buffer|TypedArray|DataView} The bytes to decode.</li>
<li>Returns: {string}</li>
</ul>
<p>Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the <code>Buffer</code>, or <code>TypedArray</code>, or <code>DataView</code> are omitted from the
returned string and stored in an internal buffer for the next call to
<code>stringDecoder.write()</code> or <code>stringDecoder.end()</code>.</p>
