---
id: "js-en-function-node-crypto"
language: "js"
lang: "en"
category: "function"
name: "node:crypto"
title: "Crypto"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/crypto.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
danger: [{"type":"sink","cwe":["CWE-327"],"note":"md5/sha1 已不安全，弱随机勿用于安全用途"}]
---

# Crypto

<h1>Crypto</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:crypto</code> module provides cryptographic functionality that includes a
set of wrappers for OpenSSL's hash, message authentication code (MAC), cipher,
decipher, sign, verify, and key encapsulation mechanism (KEM) functions.</p>
<pre><code class="language-mjs">const { createHmac } = await import('node:crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
</code></pre>
<pre><code class="language-cjs">const { createHmac } = require('node:crypto');

const secret = 'abcdefg';
const hash = createHmac('sha256', secret)
               .update('I love cupcakes')
               .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e
</code></pre>
<h2>Determining if crypto support is unavailable</h2>
<p>It is possible for Node.js to be built without including support for the
<code>node:crypto</code> module. In such cases, attempting to <code>import</code> from <code>crypto</code> or
calling <code>require('node:crypto')</code> will result in an error being thrown.</p>
<p>When using CommonJS, the error thrown can be caught using try/catch:</p>
<pre><code class="language-cjs">let crypto;
try {
  crypto = require('node:crypto');
} catch (err) {
  console.error('crypto support is disabled!');
}
</code></pre>
<p>When using the lexical ESM <code>import</code> keyword, the error can only be
caught if a handler for <code>process.on('uncaughtException')</code> is registered
<em>before</em> any attempt to load the module is made (using, for instance,
a preload module).</p>
<p>When using ESM, if there is a chance that the code may be run on a build
of Node.js where crypto support is not enabled, consider using the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"><code>import()</code></a> function instead of the lexical <code>import</code> keyword:</p>
<pre><code class="language-mjs">let crypto;
try {
  crypto = await import('node:crypto');
} catch (err) {
  console.error('crypto support is disabled!');
}
</code></pre>
<h2>Asymmetric key types</h2>
<p>The following lists group the asymmetric key types recognized by the
<a href="#class-keyobject"><code>KeyObject</code></a> API by the complete set of formats supported for importing and
exporting each type.</p>
<p><strong>Formats:</strong> <code>'pem'</code>, <code>'der'</code></p>
<ul>
<li><strong><code>'dh'</code> (Diffie-Hellman)</strong> — OID <code>1.2.840.113549.1.3.1</code></li>
<li><strong><code>'dsa'</code></strong> — OID <code>1.2.840.10040.4.1</code></li>
<li><strong><code>'rsa-pss'</code></strong> — OID <code>1.2.840.113549.1.1.10</code></li>
</ul>
<p><strong>Formats:</strong> <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code></p>
<ul>
<li><strong><code>'rsa'</code></strong> — OID <code>1.2.840.113549.1.1.1</code></li>
</ul>
<p><strong>Formats:</strong> <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, <code>'raw-public'</code>, <code>'raw-private'</code></p>
<ul>
<li><strong><code>'ec'</code> (Elliptic curve)</strong> — OID <code>1.2.840.10045.2.1</code></li>
<li><strong><code>'ed25519'</code></strong> — OID <code>1.3.101.112</code></li>
<li><strong><code>'ed448'</code></strong> — OID <code>1.3.101.113</code></li>
<li><strong><code>'slh-dsa-sha2-128f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.21</code></li>
<li><strong><code>'slh-dsa-sha2-128s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.20</code></li>
<li><strong><code>'slh-dsa-sha2-192f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.23</code></li>
<li><strong><code>'slh-dsa-sha2-192s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.22</code></li>
<li><strong><code>'slh-dsa-sha2-256f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.25</code></li>
<li><strong><code>'slh-dsa-sha2-256s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.24</code></li>
<li><strong><code>'slh-dsa-shake-128f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.27</code></li>
<li><strong><code>'slh-dsa-shake-128s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.26</code></li>
<li><strong><code>'slh-dsa-shake-192f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.29</code></li>
<li><strong><code>'slh-dsa-shake-192s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.28</code></li>
<li><strong><code>'slh-dsa-shake-256f'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.31</code></li>
<li><strong><code>'slh-dsa-shake-256s'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.30</code></li>
<li><strong><code>'x25519'</code></strong> — OID <code>1.3.101.110</code></li>
<li><strong><code>'x448'</code></strong> — OID <code>1.3.101.111</code></li>
</ul>
<p><strong>Formats:</strong> <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, <code>'raw-public'</code>, <code>'raw-seed'</code></p>
<ul>
<li><strong><code>'ml-dsa-44'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.17</code></li>
<li><strong><code>'ml-dsa-65'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.18</code></li>
<li><strong><code>'ml-dsa-87'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.3.19</code></li>
<li><strong><code>'ml-kem-512'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.4.1</code></li>
<li><strong><code>'ml-kem-768'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.4.2</code></li>
<li><strong><code>'ml-kem-1024'</code>[^openssl35]</strong> — OID <code>2.16.840.1.101.3.4.4.3</code></li>
</ul>
<h3>Key formats</h3>
<p>Asymmetric keys can be represented in several formats. <strong>The recommended
approach is to import key material into a <a href="#class-keyobject"><code>KeyObject</code></a> once and reuse it</strong>
for all subsequent operations, as this avoids repeated parsing and delivers
the best performance.</p>
<p>When a <a href="#class-keyobject"><code>KeyObject</code></a> is not practical - for example, when key material
arrives in a protocol message and is used only once - most cryptographic
functions also accept a PEM string or an object specifying the format
and key material directly. See <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>,
<a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>, and <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a> for the full
options accepted by each format.</p>
<h4>KeyObject</h4>
<p>A <a href="#class-keyobject"><code>KeyObject</code></a> is the in-memory representation of a parsed key. It is
created by <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>, <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>,
<a href="#cryptocreatesecretkeykey-encoding"><code>crypto.createSecretKey()</code></a>, or key generation functions such as
<a href="#cryptogeneratekeypairtype-options-callback"><code>crypto.generateKeyPair()</code></a>. The first cryptographic operation with a given
<a href="#class-keyobject"><code>KeyObject</code></a> may be slower than subsequent ones because OpenSSL lazily
initializes internal caches on first use.</p>
<h4>PEM and DER</h4>
<p>PEM and DER are the traditional encoding formats for asymmetric keys based on
ASN.1 structures.</p>
<ul>
<li><strong>PEM</strong> is a text encoding that wraps Base64-encoded DER data between
header and footer lines (e.g. <code>-----BEGIN PUBLIC KEY-----</code>). PEM strings can
be passed directly to most cryptographic operations.</li>
<li><strong>DER</strong> is the binary encoding of the same ASN.1 structures. When providing
DER input, the <code>type</code> (typically <code>'spki'</code> or <code>'pkcs8'</code>) must be specified
explicitly.</li>
</ul>
<h4>JSON Web Key (JWK)</h4>
<p>JSON Web Key (JWK) is a JSON-based key representation defined in
<a href="https://www.rfc-editor.org/rfc/rfc7517.txt">RFC 7517</a>. JWK encodes each key component as an individual Base64url-encoded
value inside a JSON object. For RSA keys, JWK avoids ASN.1 parsing overhead
and is the fastest serialized import format.</p>
<h4>Raw key formats</h4>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>The <code>'raw-public'</code>, <code>'raw-private'</code>, and <code>'raw-seed'</code> key formats allow
importing and exporting raw key material without any encoding wrapper.
See <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a>, <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>, and
<a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a> for usage details.</p>
<p><code>'raw-public'</code> is generally the fastest way to import a public key.
<code>'raw-private'</code> and <code>'raw-seed'</code> are not always faster than other formats
because they only contain the private scalar or seed - importing them requires
deriving the public key component (e.g. elliptic curve point multiplication or
seed expansion), which can be expensive. Other formats include both private
and public components, avoiding that computation.</p>
<h3>Choosing a key format</h3>
<p><strong>Always prefer a <a href="#class-keyobject"><code>KeyObject</code></a></strong> - create one from whatever format you
have and reuse it. The guidance below applies only when choosing between
serialization formats, either for importing into a <a href="#class-keyobject"><code>KeyObject</code></a> or for
passing key material inline when a <a href="#class-keyobject"><code>KeyObject</code></a> is not practical.</p>
<h4>Importing keys</h4>
<p>When creating a <a href="#class-keyobject"><code>KeyObject</code></a> for repeated use, the import cost is paid once,
so choosing a faster format reduces startup latency.</p>
<p>The import cost breaks down into two parts: <strong>parsing overhead</strong> (decoding the
serialization wrapper) and <strong>key computation</strong> (any mathematical work needed to
reconstruct the full key, such as deriving a public key from a private scalar
or expanding a seed). Which part dominates depends on the key type. For
example:</p>
<ul>
<li>Public keys - <code>'raw-public'</code> is the fastest serialized format because the
raw format skips all ASN.1 and Base64 decoding.</li>
<li>EC private keys - <code>'raw-private'</code> is faster than PEM or DER because it
avoids ASN.1 parsing. However, for larger curves (e.g. P-384, P-521) the
required derivation of the public point from the private scalar becomes
expensive, reducing the advantage.</li>
<li>RSA keys - <code>'jwk'</code> is the fastest serialized format. JWK represents RSA
key components as individual Base64url-encoded integers, avoiding the
overhead of ASN.1 parsing entirely.</li>
</ul>
<h4>Inline key material in operations</h4>
<p>When a <a href="#class-keyobject"><code>KeyObject</code></a> cannot be reused (e.g. the key arrives as raw bytes in
a protocol message and is used only once), most cryptographic functions also
accept a PEM string or an object specifying the format and key
material directly. In this case the total cost is the sum of key import and
the cryptographic computation itself.</p>
<p>For operations where the cryptographic computation dominates - such as
signing with RSA or ECDH key agreement with P-384 or P-521 - the
serialization format has negligible impact on overall throughput, so choose
whichever format is most convenient. For lightweight operations like Ed25519
signing or verification, the import cost is a larger fraction of the total,
so a faster format like <code>'raw-public'</code> or <code>'raw-private'</code> can meaningfully
improve throughput.</p>
<p>Even if the same key material is used only a few times, it is worth importing it
into a <a href="#class-keyobject"><code>KeyObject</code></a> rather than passing the raw or PEM representation
repeatedly.</p>
<h3>Examples</h3>
<p>Example: Reusing a <a href="#class-keyobject"><code>KeyObject</code></a> across sign and verify operations:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
const { generateKeyPair, sign, verify } = await import('node:crypto');

const { publicKey, privateKey } = await promisify(generateKeyPair)('ed25519');

// A KeyObject holds the parsed key in memory and can be reused
// across multiple operations without re-parsing.
const data = new TextEncoder().encode('message to sign');
const signature = sign(null, data, privateKey);
verify(null, data, publicKey, signature);
</code></pre>
<p>Example: Importing keys of various formats into <a href="#class-keyobject"><code>KeyObject</code></a>s:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
const {
  createPrivateKey, createPublicKey, generateKeyPair,
} = await import('node:crypto');

const generated = await promisify(generateKeyPair)('ed25519');

// PEM
const privatePem = generated.privateKey.export({ format: 'pem', type: 'pkcs8' });
const publicPem = generated.publicKey.export({ format: 'pem', type: 'spki' });
createPrivateKey(privatePem);
createPublicKey(publicPem);

// DER - requires explicit type
const privateDer = generated.privateKey.export({ format: 'der', type: 'pkcs8' });
const publicDer = generated.publicKey.export({ format: 'der', type: 'spki' });
createPrivateKey({ key: privateDer, format: 'der', type: 'pkcs8' });
createPublicKey({ key: publicDer, format: 'der', type: 'spki' });

// JWK
const privateJwk = generated.privateKey.export({ format: 'jwk' });
const publicJwk = generated.publicKey.export({ format: 'jwk' });
createPrivateKey({ key: privateJwk, format: 'jwk' });
createPublicKey({ key: publicJwk, format: 'jwk' });

// Raw
const rawPriv = generated.privateKey.export({ format: 'raw-private' });
const rawPub = generated.publicKey.export({ format: 'raw-public' });
createPrivateKey({ key: rawPriv, format: 'raw-private', asymmetricKeyType: 'ed25519' });
createPublicKey({ key: rawPub, format: 'raw-public', asymmetricKeyType: 'ed25519' });
</code></pre>
<p>Example: Passing key material directly to <a href="#cryptosignalgorithm-data-key-callback"><code>crypto.sign()</code></a> and
<a href="#cryptoverifyalgorithm-data-key-signature-callback"><code>crypto.verify()</code></a> without creating a <a href="#class-keyobject"><code>KeyObject</code></a> first:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
const { generateKeyPair, sign, verify } = await import('node:crypto');

const generated = await promisify(generateKeyPair)('ed25519');

const data = new TextEncoder().encode('message to sign');

// PEM strings
const privatePem = generated.privateKey.export({ format: 'pem', type: 'pkcs8' });
const publicPem = generated.publicKey.export({ format: 'pem', type: 'spki' });
const sig1 = sign(null, data, privatePem);
verify(null, data, publicPem, sig1);

// JWK objects
const privateJwk = generated.privateKey.export({ format: 'jwk' });
const publicJwk = generated.publicKey.export({ format: 'jwk' });
const sig2 = sign(null, data, { key: privateJwk, format: 'jwk' });
verify(null, data, { key: publicJwk, format: 'jwk' }, sig2);

// Raw key bytes
const rawPriv = generated.privateKey.export({ format: 'raw-private' });
const rawPub = generated.publicKey.export({ format: 'raw-public' });
const sig3 = sign(null, data, {
  key: rawPriv, format: 'raw-private', asymmetricKeyType: 'ed25519',
});
verify(null, data, {
  key: rawPub, format: 'raw-public', asymmetricKeyType: 'ed25519',
}, sig3);
</code></pre>
<p>Example: For EC keys, the <code>namedCurve</code> option is required when importing
raw keys:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
const {
  createPrivateKey, createPublicKey, generateKeyPair, sign, verify,
} = await import('node:crypto');

const generated = await promisify(generateKeyPair)('ec', {
  namedCurve: 'P-256',
});

// Export the raw EC public key (uncompressed by default).
const rawPublicKey = generated.publicKey.export({ format: 'raw-public' });

// The following is equivalent.
const rawPublicKeyUncompressed = generated.publicKey.export({
  format: 'raw-public',
  type: 'uncompressed',
});

// Export compressed point format.
const rawPublicKeyCompressed = generated.publicKey.export({
  format: 'raw-public',
  type: 'compressed',
});

// Export the raw EC private key.
const rawPrivateKey = generated.privateKey.export({ format: 'raw-private' });

// Import the raw EC keys.
// Both compressed and uncompressed point formats are accepted.
const publicKey = createPublicKey({
  key: rawPublicKey,
  format: 'raw-public',
  asymmetricKeyType: 'ec',
  namedCurve: 'P-256',
});
const privateKey = createPrivateKey({
  key: rawPrivateKey,
  format: 'raw-private',
  asymmetricKeyType: 'ec',
  namedCurve: 'P-256',
});

const data = new TextEncoder().encode('message to sign');
const signature = sign('sha256', data, privateKey);
verify('sha256', data, publicKey, signature);
</code></pre>
<p>Example: Exporting raw seeds and importing them:</p>
<pre><code class="language-mjs">import { promisify } from 'node:util';
const {
  createPrivateKey, decapsulate, encapsulate, generateKeyPair,
} = await import('node:crypto');

const generated = await promisify(generateKeyPair)('ml-kem-768');

// Export the raw seed (64 bytes for ML-KEM).
const seed = generated.privateKey.export({ format: 'raw-seed' });

// Import the raw seed.
const privateKey = createPrivateKey({
  key: seed,
  format: 'raw-seed',
  asymmetricKeyType: 'ml-kem-768',
});

const { ciphertext } = encapsulate(generated.publicKey);
decapsulate(privateKey, ciphertext);
</code></pre>
<h2>Class: <code>Certificate</code></h2>
<p>SPKAC is a Certificate Signing Request mechanism originally implemented by
Netscape and was specified formally as part of HTML5's <code>keygen</code> element.</p>
<p><code>&lt;keygen&gt;</code> is deprecated since <a href="https://www.w3.org/TR/html52/changes.html#features-removed">HTML 5.2</a> and new projects
should not use this element anymore.</p>
<p>The <code>node:crypto</code> module provides the <code>Certificate</code> class for working with SPKAC
data. The most common usage is handling output generated by the HTML5
<code>&lt;keygen&gt;</code> element. Node.js uses <a href="https://www.openssl.org/docs/man3.0/man1/openssl-spkac.html">OpenSSL's SPKAC implementation</a> internally.</p>
<h3>Static method: <code>Certificate.exportChallenge(spkac[, encoding])</code></h3>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {Buffer} The challenge component of the <code>spkac</code> data structure, which
includes a public key and a challenge.</li>
</ul>
<pre><code class="language-mjs">const { Certificate } = await import('node:crypto');
const spkac = getSpkacSomehow();
const challenge = Certificate.exportChallenge(spkac);
console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string
</code></pre>
<pre><code class="language-cjs">const { Certificate } = require('node:crypto');
const spkac = getSpkacSomehow();
const challenge = Certificate.exportChallenge(spkac);
console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string
</code></pre>
<h3>Static method: <code>Certificate.exportPublicKey(spkac[, encoding])</code></h3>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {Buffer} The public key component of the <code>spkac</code> data structure,
which includes a public key and a challenge.</li>
</ul>
<pre><code class="language-mjs">const { Certificate } = await import('node:crypto');
const spkac = getSpkacSomehow();
const publicKey = Certificate.exportPublicKey(spkac);
console.log(publicKey);
// Prints: the public key as &lt;Buffer ...&gt;
</code></pre>
<pre><code class="language-cjs">const { Certificate } = require('node:crypto');
const spkac = getSpkacSomehow();
const publicKey = Certificate.exportPublicKey(spkac);
console.log(publicKey);
// Prints: the public key as &lt;Buffer ...&gt;
</code></pre>
<h3>Static method: <code>Certificate.verifySpkac(spkac[, encoding])</code></h3>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {boolean} <code>true</code> if the given <code>spkac</code> data structure is valid,
<code>false</code> otherwise.</li>
</ul>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { Certificate } = await import('node:crypto');

const spkac = getSpkacSomehow();
console.log(Certificate.verifySpkac(Buffer.from(spkac)));
// Prints: true or false
</code></pre>
<pre><code class="language-cjs">const { Buffer } = require('node:buffer');
const { Certificate } = require('node:crypto');

const spkac = getSpkacSomehow();
console.log(Certificate.verifySpkac(Buffer.from(spkac)));
// Prints: true or false
</code></pre>
<h3>Legacy API</h3>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>As a legacy interface, it is possible to create new instances of
the <code>crypto.Certificate</code> class as illustrated in the examples below.</p>
<h4><code>new crypto.Certificate()</code></h4>
<p>Instances of the <code>Certificate</code> class can be created using the <code>new</code> keyword
or by calling <code>crypto.Certificate()</code> as a function:</p>
<pre><code class="language-mjs">const { Certificate } = await import('node:crypto');

const cert1 = new Certificate();
const cert2 = Certificate();
</code></pre>
<pre><code class="language-cjs">const { Certificate } = require('node:crypto');

const cert1 = new Certificate();
const cert2 = Certificate();
</code></pre>
<h4><code>certificate.exportChallenge(spkac[, encoding])</code></h4>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {Buffer} The challenge component of the <code>spkac</code> data structure, which
includes a public key and a challenge.</li>
</ul>
<pre><code class="language-mjs">const { Certificate } = await import('node:crypto');
const cert = Certificate();
const spkac = getSpkacSomehow();
const challenge = cert.exportChallenge(spkac);
console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string
</code></pre>
<pre><code class="language-cjs">const { Certificate } = require('node:crypto');
const cert = Certificate();
const spkac = getSpkacSomehow();
const challenge = cert.exportChallenge(spkac);
console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string
</code></pre>
<h4><code>certificate.exportPublicKey(spkac[, encoding])</code></h4>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {Buffer} The public key component of the <code>spkac</code> data structure,
which includes a public key and a challenge.</li>
</ul>
<pre><code class="language-mjs">const { Certificate } = await import('node:crypto');
const cert = Certificate();
const spkac = getSpkacSomehow();
const publicKey = cert.exportPublicKey(spkac);
console.log(publicKey);
// Prints: the public key as &lt;Buffer ...&gt;
</code></pre>
<pre><code class="language-cjs">const { Certificate } = require('node:crypto');
const cert = Certificate();
const spkac = getSpkacSomehow();
const publicKey = cert.exportPublicKey(spkac);
console.log(publicKey);
// Prints: the public key as &lt;Buffer ...&gt;
</code></pre>
<h4><code>certificate.verifySpkac(spkac[, encoding])</code></h4>
<ul>
<li><code>spkac</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>spkac</code> string.</li>
<li>Returns: {boolean} <code>true</code> if the given <code>spkac</code> data structure is valid,
<code>false</code> otherwise.</li>
</ul>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { Certificate } = await import('node:crypto');

const cert = Certificate();
const spkac = getSpkacSomehow();
console.log(cert.verifySpkac(Buffer.from(spkac)));
// Prints: true or false
</code></pre>
<pre><code class="language-cjs">const { Buffer } = require('node:buffer');
const { Certificate } = require('node:crypto');

const cert = Certificate();
const spkac = getSpkacSomehow();
console.log(cert.verifySpkac(Buffer.from(spkac)));
// Prints: true or false
</code></pre>
<h2>Class: <code>Cipheriv</code></h2>
<ul>
<li>Extends: {stream.Transform}</li>
</ul>
<p>Instances of the <code>Cipheriv</code> class are used to encrypt data. The class can be
used in one of two ways:</p>
<ul>
<li>As a <a href="stream.md">stream</a> that is both readable and writable, where plain unencrypted
data is written to produce encrypted data on the readable side, or</li>
<li>Using the <a href="#cipherupdatedata-inputencoding-outputencoding"><code>cipher.update()</code></a> and <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> methods to produce
the encrypted data.</li>
</ul>
<p>The <a href="#cryptocreatecipherivalgorithm-key-iv-options"><code>crypto.createCipheriv()</code></a> method is
used to create <code>Cipheriv</code> instances. <code>Cipheriv</code> objects are not to be created
directly using the <code>new</code> keyword.</p>
<p>The selected algorithm may impose additional restrictions on streaming and
calls to <a href="#cipherupdatedata-inputencoding-outputencoding"><code>cipher.update()</code></a>. See <a href="#ccm-mode">CCM mode</a>, <a href="#cbc-cts-mode">CBC-CTS mode</a>, <a href="#xts-mode">XTS mode</a>,
<a href="#aes-key-wrap-modes">AES key wrap modes</a>, and <a href="#siv-and-gcm-siv-modes">SIV and GCM-SIV modes</a>.</p>
<p>Example: Using <code>Cipheriv</code> objects as streams:</p>
<pre><code class="language-mjs">const {
  scrypt,
  randomFill,
  createCipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) =&gt; encrypted += chunk);
    cipher.on('end', () =&gt; console.log(encrypted));

    cipher.write('some clear text data');
    cipher.end();
  });
});
</code></pre>
<pre><code class="language-cjs">const {
  scrypt,
  randomFill,
  createCipheriv,
} = require('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) =&gt; encrypted += chunk);
    cipher.on('end', () =&gt; console.log(encrypted));

    cipher.write('some clear text data');
    cipher.end();
  });
});
</code></pre>
<p>Example: Using <code>Cipheriv</code> and piped streams:</p>
<pre><code class="language-mjs">import {
  createReadStream,
  createWriteStream,
} from 'node:fs';

import {
  pipeline,
} from 'node:stream';

const {
  scrypt,
  randomFill,
  createCipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    const input = createReadStream('test.js');
    const output = createWriteStream('test.enc');

    pipeline(input, cipher, output, (err) =&gt; {
      if (err) throw err;
    });
  });
});
</code></pre>
<pre><code class="language-cjs">const {
  createReadStream,
  createWriteStream,
} = require('node:fs');

const {
  pipeline,
} = require('node:stream');

const {
  scrypt,
  randomFill,
  createCipheriv,
} = require('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    const input = createReadStream('test.js');
    const output = createWriteStream('test.enc');

    pipeline(input, cipher, output, (err) =&gt; {
      if (err) throw err;
    });
  });
});
</code></pre>
<p>Example: Using the <a href="#cipherupdatedata-inputencoding-outputencoding"><code>cipher.update()</code></a> and <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> methods:</p>
<pre><code class="language-mjs">const {
  scrypt,
  randomFill,
  createCipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
  });
});
</code></pre>
<pre><code class="language-cjs">const {
  scrypt,
  randomFill,
  createCipheriv,
} = require('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) =&gt; {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) =&gt; {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
  });
});
</code></pre>
<h3><code>cipher.final([outputEncoding])</code></h3>
<ul>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string} Any remaining enciphered contents.
If <code>outputEncoding</code> is specified, a string is
returned. If an <code>outputEncoding</code> is not provided, a <a href="buffer.md"><code>Buffer</code></a> is returned.</li>
</ul>
<p>If an output encoding was specified in a previous call to
<a href="#cipherupdatedata-inputencoding-outputencoding"><code>cipher.update()</code></a>, <code>outputEncoding</code> must use the same encoding.</p>
<p>Once the <code>cipher.final()</code> method has been called, the <code>Cipheriv</code> object can no
longer be used to encrypt data. Attempts to call <code>cipher.final()</code> more than
once will result in an error being thrown.</p>
<h3><code>cipher.getAuthTag()</code></h3>
<ul>
<li>Returns: {Buffer} When using an authenticated encryption mode (<code>GCM</code>, <code>CCM</code>,
<code>OCB</code>, <code>SIV</code>, <code>GCM-SIV</code>, and <code>chacha20-poly1305</code> are currently
supported), the <code>cipher.getAuthTag()</code> method returns a
<a href="buffer.md"><code>Buffer</code></a> containing the <em>authentication tag</em> that has been computed from
the given data.</li>
</ul>
<p>The <code>cipher.getAuthTag()</code> method should only be called after encryption has
been completed using the <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> method.</p>
<p>If the <code>authTagLength</code> option was set during the <code>cipher</code> instance's creation,
this function will return exactly <code>authTagLength</code> bytes.</p>
<h3><code>cipher.setAAD(buffer[, options])</code></h3>
<ul>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a>
<ul>
<li><code>plaintextLength</code> {number}</li>
<li><code>encoding</code> {string} The string encoding to use when <code>buffer</code> is a string.</li>
</ul>
</li>
<li>Returns: {Cipheriv} The same <code>Cipheriv</code> instance for method chaining.</li>
</ul>
<p>When using an authenticated encryption mode (<code>GCM</code>, <code>CCM</code>, <code>OCB</code>, <code>SIV</code>,
<code>GCM-SIV</code>, and <code>chacha20-poly1305</code> are currently supported), the
<code>cipher.setAAD()</code> method sets the value used for the <em>additional authenticated
data</em> (AAD) input parameter.</p>
<p>The <code>plaintextLength</code> option is optional for <code>GCM</code>, <code>OCB</code>, <code>SIV</code>, and
<code>GCM-SIV</code>. When using <code>CCM</code>, the <code>plaintextLength</code> option must be specified and
its value must match the length of the plaintext in bytes. See <a href="#ccm-mode">CCM mode</a>.</p>
<p>The <code>cipher.setAAD()</code> method must be called before <a href="#cipherupdatedata-inputencoding-outputencoding"><code>cipher.update()</code></a>.</p>
<h3><code>cipher.setAutoPadding([autoPadding])</code></h3>
<ul>
<li><code>autoPadding</code> {boolean} <strong>Default:</strong> <code>true</code></li>
<li>Returns: {Cipheriv} The same <code>Cipheriv</code> instance for method chaining.</li>
</ul>
<p>When using block ciphers that use standard block padding, the <code>Cipheriv</code> class
will automatically add padding to the input data to the appropriate block size.
To disable the default padding call <code>cipher.setAutoPadding(false)</code>.</p>
<p>For block ciphers that use standard block padding, when <code>autoPadding</code> is
<code>false</code>, the length of the entire input data must be a multiple of the cipher's
block size or <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> will throw an error. Disabling automatic
padding is useful for non-standard padding, for instance using <code>0x0</code> instead of
PKCS padding.</p>
<p>The <code>cipher.setAutoPadding()</code> method must be called before
<a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a>.</p>
<h3><code>cipher.update(data[, inputEncoding][, outputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the data.</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Updates the cipher with <code>data</code>. If the <code>inputEncoding</code> argument is given,
the <code>data</code>
argument is a string using the specified encoding. If the <code>inputEncoding</code>
argument is not given, <code>data</code> must be a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, then
<code>inputEncoding</code> is ignored.</p>
<p>The <code>outputEncoding</code> specifies the output format of the enciphered
data. If the <code>outputEncoding</code>
is specified, a string using the specified encoding is returned. If no
<code>outputEncoding</code> is provided, a <a href="buffer.md"><code>Buffer</code></a> is returned.
When <code>outputEncoding</code> is specified, it must use the same encoding as previous
calls to <code>cipher.update()</code>.</p>
<p>For most algorithms, <code>cipher.update()</code> can be called multiple times with new
data until <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> is called. Some algorithms restrict calls to
<code>cipher.update()</code>. For example, <a href="#ccm-mode">CCM mode</a>, <a href="#cbc-cts-mode">CBC-CTS mode</a>, <a href="#xts-mode">XTS mode</a>,
<a href="#aes-key-wrap-modes">AES key wrap modes</a>, and <a href="#siv-and-gcm-siv-modes">SIV and GCM-SIV modes</a> require the whole message
in a single call. Calling <code>cipher.update()</code> after <a href="#cipherfinaloutputencoding"><code>cipher.final()</code></a> will
result in an error being thrown.</p>
<h2>Class: <code>Decipheriv</code></h2>
<ul>
<li>Extends: {stream.Transform}</li>
</ul>
<p>Instances of the <code>Decipheriv</code> class are used to decrypt data. The class can be
used in one of two ways:</p>
<ul>
<li>As a <a href="stream.md">stream</a> that is both readable and writable, where plain encrypted
data is written to produce unencrypted data on the readable side, or</li>
<li>Using the <a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a> and <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> methods to
produce the unencrypted data.</li>
</ul>
<p>The <a href="#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a> method is
used to create <code>Decipheriv</code> instances. <code>Decipheriv</code> objects are not to be created
directly using the <code>new</code> keyword.</p>
<p>The selected algorithm may impose additional restrictions on streaming and
calls to <a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a>. See <a href="#ccm-mode">CCM mode</a>, <a href="#cbc-cts-mode">CBC-CTS mode</a>,
<a href="#xts-mode">XTS mode</a>, <a href="#aes-key-wrap-modes">AES key wrap modes</a>, and <a href="#siv-and-gcm-siv-modes">SIV and GCM-SIV modes</a>.</p>
<p>Example: Using <code>Decipheriv</code> objects as streams:</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const {
  scryptSync,
  createDecipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Key length is dependent on the algorithm. In this case for aes192, it is
// 24 bytes (192 bits).
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

let decrypted = '';
decipher.on('readable', () =&gt; {
  let chunk;
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});
decipher.on('end', () =&gt; {
  console.log(decrypted);
  // Prints: some clear text data
});

// Encrypted with same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
decipher.write(encrypted, 'hex');
decipher.end();
</code></pre>
<pre><code class="language-cjs">const {
  scryptSync,
  createDecipheriv,
} = require('node:crypto');
const { Buffer } = require('node:buffer');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Key length is dependent on the algorithm. In this case for aes192, it is
// 24 bytes (192 bits).
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

let decrypted = '';
decipher.on('readable', () =&gt; {
  let chunk;
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});
decipher.on('end', () =&gt; {
  console.log(decrypted);
  // Prints: some clear text data
});

// Encrypted with same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
decipher.write(encrypted, 'hex');
decipher.end();
</code></pre>
<p>Example: Using <code>Decipheriv</code> and piped streams:</p>
<pre><code class="language-mjs">import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { Buffer } from 'node:buffer';
const {
  scryptSync,
  createDecipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

const input = createReadStream('test.enc');
const output = createWriteStream('test.js');

input.pipe(decipher).pipe(output);
</code></pre>
<pre><code class="language-cjs">const {
  createReadStream,
  createWriteStream,
} = require('node:fs');
const {
  scryptSync,
  createDecipheriv,
} = require('node:crypto');
const { Buffer } = require('node:buffer');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

const input = createReadStream('test.enc');
const output = createWriteStream('test.js');

input.pipe(decipher).pipe(output);
</code></pre>
<p>Example: Using the <a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a> and <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> methods:</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const {
  scryptSync,
  createDecipheriv,
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

// Encrypted using same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
// Prints: some clear text data
</code></pre>
<pre><code class="language-cjs">const {
  scryptSync,
  createDecipheriv,
} = require('node:crypto');
const { Buffer } = require('node:buffer');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

// Encrypted using same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
// Prints: some clear text data
</code></pre>
<h3><code>decipher.final([outputEncoding])</code></h3>
<ul>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string} Any remaining deciphered contents.
If <code>outputEncoding</code> is specified, a string is
returned. If an <code>outputEncoding</code> is not provided, a <a href="buffer.md"><code>Buffer</code></a> is returned.</li>
</ul>
<p>If an output encoding was specified in a previous call to
<a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a>, <code>outputEncoding</code> must use the same encoding.</p>
<p>Once the <code>decipher.final()</code> method has been called, the <code>Decipheriv</code> object can
no longer be used to decrypt data. Attempts to call <code>decipher.final()</code> more
than once will result in an error being thrown.</p>
<h3><code>decipher.setAAD(buffer[, options])</code></h3>
<ul>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a>
<ul>
<li><code>plaintextLength</code> {number}</li>
<li><code>encoding</code> {string} String encoding to use when <code>buffer</code> is a string.</li>
</ul>
</li>
<li>Returns: {Decipheriv} The same <code>Decipheriv</code> instance for method chaining.</li>
</ul>
<p>When using an authenticated encryption mode (<code>GCM</code>, <code>CCM</code>, <code>OCB</code>, <code>SIV</code>,
<code>GCM-SIV</code>, and <code>chacha20-poly1305</code> are currently supported), the
<code>decipher.setAAD()</code> method sets the value used for the <em>additional
authenticated data</em> (AAD) input parameter.</p>
<p>The <code>options</code> argument is optional for <code>GCM</code>, <code>OCB</code>, <code>SIV</code>, and <code>GCM-SIV</code>.
When using <code>CCM</code>, the <code>plaintextLength</code> option must be specified and its value
must match the length of the ciphertext in bytes. See <a href="#ccm-mode">CCM mode</a>.</p>
<p>The <code>decipher.setAAD()</code> method must be called before <a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a>.</p>
<p>When passing a string as the <code>buffer</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<h3><code>decipher.setAuthTag(buffer[, encoding])</code></h3>
<ul>
<li><code>buffer</code> {string|Buffer|ArrayBuffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} String encoding to use when <code>buffer</code> is a string.</li>
<li>Returns: {Decipheriv} The same <code>Decipheriv</code> instance for method chaining.</li>
</ul>
<p>When using an authenticated encryption mode (<code>GCM</code>, <code>CCM</code>, <code>OCB</code>, <code>SIV</code>,
<code>GCM-SIV</code>, and <code>chacha20-poly1305</code> are currently supported), the
<code>decipher.setAuthTag()</code> method is used to pass in the received
<em>authentication tag</em>. If no tag is provided, or if the cipher text has been
tampered with, <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> will throw, indicating that the cipher
text should be discarded due to failed authentication. If the tag length is
invalid according to <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf">NIST SP 800-38D</a> or does not match the value of the
<code>authTagLength</code> option, <code>decipher.setAuthTag()</code> will throw an error.</p>
<p>The <code>decipher.setAuthTag()</code> method must be called before <a href="#decipherupdatedata-inputencoding-outputencoding"><code>decipher.update()</code></a>
for <code>CCM</code>, <code>SIV</code>, and <code>GCM-SIV</code> modes or before <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> for
<code>GCM</code> and <code>OCB</code> modes and <code>chacha20-poly1305</code>.
<code>decipher.setAuthTag()</code> can only be called once.</p>
<p>When passing a string as the authentication tag, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<h3><code>decipher.setAutoPadding([autoPadding])</code></h3>
<ul>
<li><code>autoPadding</code> {boolean} <strong>Default:</strong> <code>true</code></li>
<li>Returns: {Decipheriv} The same <code>Decipheriv</code> instance for method chaining.</li>
</ul>
<p>When data has been encrypted without standard block padding, calling
<code>decipher.setAutoPadding(false)</code> will disable automatic padding to prevent
<a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> from checking for and removing padding.</p>
<p>For block ciphers that use standard block padding, disabling it requires the
input data's length to be a multiple of the cipher's block size.</p>
<p>The <code>decipher.setAutoPadding()</code> method must be called before
<a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a>.</p>
<h3><code>decipher.update(data[, inputEncoding][, outputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Updates the decipher with <code>data</code>. If the <code>inputEncoding</code> argument is given,
the <code>data</code>
argument is a string using the specified encoding. If the <code>inputEncoding</code>
argument is not given, <code>data</code> must be a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, then
<code>inputEncoding</code> is ignored.</p>
<p>The <code>outputEncoding</code> specifies the output format of the deciphered
data. If the <code>outputEncoding</code>
is specified, a string using the specified encoding is returned. If no
<code>outputEncoding</code> is provided, a <a href="buffer.md"><code>Buffer</code></a> is returned.
When <code>outputEncoding</code> is specified, it must use the same encoding as previous
calls to <code>decipher.update()</code>.</p>
<p>For most algorithms, <code>decipher.update()</code> can be called multiple times with new
data until <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> is called. Some algorithms restrict calls to
<code>decipher.update()</code>. For example, <a href="#ccm-mode">CCM mode</a>, <a href="#cbc-cts-mode">CBC-CTS mode</a>, <a href="#xts-mode">XTS mode</a>,
<a href="#aes-key-wrap-modes">AES key wrap modes</a>, and <a href="#siv-and-gcm-siv-modes">SIV and GCM-SIV modes</a> require the whole message
in a single call. Calling <code>decipher.update()</code> after <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a> will
result in an error being thrown.</p>
<p>Even if the underlying cipher implements authentication, the authenticity and
integrity of the plaintext returned from this function may be uncertain at this
time. For authenticated encryption algorithms, authenticity is generally only
established when the application calls <a href="#decipherfinaloutputencoding"><code>decipher.final()</code></a>.</p>
<h2>Class: <code>DiffieHellman</code></h2>
<p>The <code>DiffieHellman</code> class is a utility for creating Diffie-Hellman key
exchanges.</p>
<p>Instances of the <code>DiffieHellman</code> class can be created using the
<a href="#cryptocreatediffiehellmanprime-primeencoding-generator-generatorencoding"><code>crypto.createDiffieHellman()</code></a> function.</p>
<pre><code class="language-mjs">import assert from 'node:assert';

const {
  createDiffieHellman,
} = await import('node:crypto');

// Generate Alice's keys...
const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

const {
  createDiffieHellman,
} = require('node:crypto');

// Generate Alice's keys...
const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
</code></pre>
<h3><code>diffieHellman.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])</code></h3>
<ul>
<li><code>otherPublicKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of an <code>otherPublicKey</code> string.</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Computes the shared secret using <code>otherPublicKey</code> as the other
party's public key and returns the computed shared secret. The supplied
key is interpreted using the specified <code>inputEncoding</code>, and secret is
encoded using specified <code>outputEncoding</code>.
If the <code>inputEncoding</code> is not
provided, <code>otherPublicKey</code> is expected to be a <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>.</p>
<p>If <code>outputEncoding</code> is given a string is returned; otherwise, a
<a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<h3><code>diffieHellman.generateKeys([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Generates private and public Diffie-Hellman key values unless they have been
generated or computed already, and returns
the public key in the specified <code>encoding</code>. This key should be
transferred to the other party.
If <code>encoding</code> is provided a string is returned; otherwise a
<a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<p>This function is a thin wrapper around <a href="https://www.openssl.org/docs/man3.0/man3/DH_generate_key.html"><code>DH_generate_key()</code></a>. In particular,
once a private key has been generated or set, calling this function only
recomputes the public key from the existing private key. Since the public key is
determined by the private key, the result will be the same unless the private key
has been changed via <a href="#diffiehellmansetprivatekeyprivatekey-encoding"><code>diffieHellman.setPrivateKey()</code></a>.</p>
<h3><code>diffieHellman.getGenerator([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Returns the Diffie-Hellman generator in the specified <code>encoding</code>.
If <code>encoding</code> is provided a string is
returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<h3><code>diffieHellman.getPrime([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Returns the Diffie-Hellman prime in the specified <code>encoding</code>.
If <code>encoding</code> is provided a string is
returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<h3><code>diffieHellman.getPrivateKey([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Returns the Diffie-Hellman private key in the specified <code>encoding</code>.
If <code>encoding</code> is provided a
string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<h3><code>diffieHellman.getPublicKey([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Returns the Diffie-Hellman public key in the specified <code>encoding</code>.
If <code>encoding</code> is provided a
string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<h3><code>diffieHellman.setPrivateKey(privateKey[, encoding])</code></h3>
<ul>
<li><code>privateKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>privateKey</code> string.</li>
</ul>
<p>Sets the Diffie-Hellman private key. If the <code>encoding</code> argument is provided,
<code>privateKey</code> is expected
to be a string. If no <code>encoding</code> is provided, <code>privateKey</code> is expected
to be a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>.</p>
<p>This function does not automatically compute the associated public key. Either
<a href="#diffiehellmansetpublickeypublickey-encoding"><code>diffieHellman.setPublicKey()</code></a> or <a href="#diffiehellmangeneratekeysencoding"><code>diffieHellman.generateKeys()</code></a> can be
used to manually provide the public key or to automatically derive it.</p>
<h3><code>diffieHellman.setPublicKey(publicKey[, encoding])</code></h3>
<ul>
<li><code>publicKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>publicKey</code> string.</li>
</ul>
<p>Sets the Diffie-Hellman public key. If the <code>encoding</code> argument is provided,
<code>publicKey</code> is expected
to be a string. If no <code>encoding</code> is provided, <code>publicKey</code> is expected
to be a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>.</p>
<h3><code>diffieHellman.verifyError</code></h3>
<p>A bit field containing any warnings and/or errors resulting from a check
performed during initialization of the <code>DiffieHellman</code> object.</p>
<p>The following values are valid for this property (as defined in <code>node:constants</code> module):</p>
<ul>
<li><code>DH_CHECK_P_NOT_SAFE_PRIME</code></li>
<li><code>DH_CHECK_P_NOT_PRIME</code></li>
<li><code>DH_UNABLE_TO_CHECK_GENERATOR</code></li>
<li><code>DH_NOT_SUITABLE_GENERATOR</code></li>
</ul>
<h2>Class: <code>DiffieHellmanGroup</code></h2>
<p>The <code>DiffieHellmanGroup</code> class takes a well-known modp group as its argument.
It works the same as <code>DiffieHellman</code>, except that it does not allow changing
its keys after creation. In other words, it does not implement <code>setPublicKey()</code>
or <code>setPrivateKey()</code> methods.</p>
<pre><code class="language-mjs">const { createDiffieHellmanGroup } = await import('node:crypto');
const dh = createDiffieHellmanGroup('modp16');
</code></pre>
<pre><code class="language-cjs">const { createDiffieHellmanGroup } = require('node:crypto');
const dh = createDiffieHellmanGroup('modp16');
</code></pre>
<p>The following groups are supported:</p>
<ul>
<li><code>'modp14'</code> (2048 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 3)</li>
<li><code>'modp15'</code> (3072 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 4)</li>
<li><code>'modp16'</code> (4096 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 5)</li>
<li><code>'modp17'</code> (6144 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 6)</li>
<li><code>'modp18'</code> (8192 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 7)</li>
</ul>
<p>The following groups are still supported but deprecated (see <a href="#support-for-weak-or-compromised-algorithms">Caveats</a>):</p>
<ul>
<li><code>'modp1'</code> (768 bits, <a href="https://www.rfc-editor.org/rfc/rfc2409.txt">RFC 2409</a> Section 6.1) &lt;span class=&quot;deprecated-inline&quot;&gt;&lt;/span&gt;</li>
<li><code>'modp2'</code> (1024 bits, <a href="https://www.rfc-editor.org/rfc/rfc2409.txt">RFC 2409</a> Section 6.2) &lt;span class=&quot;deprecated-inline&quot;&gt;&lt;/span&gt;</li>
<li><code>'modp5'</code> (1536 bits, <a href="https://www.rfc-editor.org/rfc/rfc3526.txt">RFC 3526</a> Section 2) &lt;span class=&quot;deprecated-inline&quot;&gt;&lt;/span&gt;</li>
</ul>
<p>These deprecated groups might be removed in future versions of Node.js.</p>
<h2>Class: <code>ECDH</code></h2>
<p>The <code>ECDH</code> class is a utility for creating Elliptic Curve Diffie-Hellman (ECDH)
key exchanges.</p>
<p>Instances of the <code>ECDH</code> class can be created using the
<a href="#cryptocreateecdhcurvename"><code>crypto.createECDH()</code></a> function.</p>
<pre><code class="language-mjs">import assert from 'node:assert';

const {
  createECDH,
} = await import('node:crypto');

// Generate Alice's keys...
const alice = createECDH('secp521r1');
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createECDH('secp521r1');
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
// OK
</code></pre>
<pre><code class="language-cjs">const assert = require('node:assert');

const {
  createECDH,
} = require('node:crypto');

// Generate Alice's keys...
const alice = createECDH('secp521r1');
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createECDH('secp521r1');
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
// OK
</code></pre>
<h3>Static method: <code>ECDH.convertKey(key, curve[, inputEncoding[, outputEncoding[, format]]])</code></h3>
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>curve</code> {string}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>key</code> string.</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li><code>format</code> {string} <strong>Default:</strong> <code>'uncompressed'</code></li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Converts the EC Diffie-Hellman public key specified by <code>key</code> and <code>curve</code> to the
format specified by <code>format</code>. The <code>format</code> argument specifies point encoding
and can be <code>'compressed'</code>, <code>'uncompressed'</code> or <code>'hybrid'</code>. The supplied key is
interpreted using the specified <code>inputEncoding</code>, and the returned key is encoded
using the specified <code>outputEncoding</code>.</p>
<p>Use <a href="#cryptogetcurves"><code>crypto.getCurves()</code></a> to obtain a list of available curve names.
On recent OpenSSL releases, <code>openssl ecparam -list_curves</code> will also display
the name and description of each available elliptic curve.</p>
<p>If <code>format</code> is not specified the point will be returned in <code>'uncompressed'</code>
format.</p>
<p>If the <code>inputEncoding</code> is not provided, <code>key</code> is expected to be a <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>.</p>
<p>Example (uncompressing a key):</p>
<pre><code class="language-mjs">const {
  createECDH,
  ECDH,
} = await import('node:crypto');

const ecdh = createECDH('secp256k1');
ecdh.generateKeys();

const compressedKey = ecdh.getPublicKey('hex', 'compressed');

const uncompressedKey = ECDH.convertKey(compressedKey,
                                        'secp256k1',
                                        'hex',
                                        'hex',
                                        'uncompressed');

// The converted key and the uncompressed public key should be the same
console.log(uncompressedKey === ecdh.getPublicKey('hex'));
</code></pre>
<pre><code class="language-cjs">const {
  createECDH,
  ECDH,
} = require('node:crypto');

const ecdh = createECDH('secp256k1');
ecdh.generateKeys();

const compressedKey = ecdh.getPublicKey('hex', 'compressed');

const uncompressedKey = ECDH.convertKey(compressedKey,
                                        'secp256k1',
                                        'hex',
                                        'hex',
                                        'uncompressed');

// The converted key and the uncompressed public key should be the same
console.log(uncompressedKey === ecdh.getPublicKey('hex'));
</code></pre>
<h3><code>ecdh.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])</code></h3>
<ul>
<li><code>otherPublicKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>otherPublicKey</code> string.</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Computes the shared secret using <code>otherPublicKey</code> as the other
party's public key and returns the computed shared secret. The supplied
key is interpreted using specified <code>inputEncoding</code>, and the returned secret
is encoded using the specified <code>outputEncoding</code>.
If the <code>inputEncoding</code> is not
provided, <code>otherPublicKey</code> is expected to be a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>.</p>
<p>If <code>outputEncoding</code> is given a string will be returned; otherwise a
<a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<p><code>ecdh.computeSecret</code> will throw an
<code>ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY</code> error when <code>otherPublicKey</code>
lies outside of the elliptic curve. Since <code>otherPublicKey</code> is
usually supplied from a remote user over an insecure network,
be sure to handle this exception accordingly.</p>
<h3><code>ecdh.generateKeys([encoding[, format]])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li><code>format</code> {string} <strong>Default:</strong> <code>'uncompressed'</code></li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Generates private and public EC Diffie-Hellman key values, and returns
the public key in the specified <code>format</code> and <code>encoding</code>. This key should be
transferred to the other party.</p>
<p>The <code>format</code> argument specifies point encoding and can be <code>'compressed'</code> or
<code>'uncompressed'</code>. If <code>format</code> is not specified, the point will be returned in
<code>'uncompressed'</code> format.</p>
<p>If <code>encoding</code> is provided a string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a>
is returned.</p>
<h3><code>ecdh.getPrivateKey([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string} The EC Diffie-Hellman in the specified <code>encoding</code>.</li>
</ul>
<p>If <code>encoding</code> is specified, a string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is
returned.</p>
<h3><code>ecdh.getPublicKey([encoding][, format])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li><code>format</code> {string} <strong>Default:</strong> <code>'uncompressed'</code></li>
<li>Returns: {Buffer | string} The EC Diffie-Hellman public key in the specified
<code>encoding</code> and <code>format</code>.</li>
</ul>
<p>The <code>format</code> argument specifies point encoding and can be <code>'compressed'</code> or
<code>'uncompressed'</code>. If <code>format</code> is not specified the point will be returned in
<code>'uncompressed'</code> format.</p>
<p>If <code>encoding</code> is specified, a string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is
returned.</p>
<h3><code>ecdh.setPrivateKey(privateKey[, encoding])</code></h3>
<ul>
<li><code>privateKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>privateKey</code> string.</li>
</ul>
<p>Sets the EC Diffie-Hellman private key.
If <code>encoding</code> is provided, <code>privateKey</code> is expected
to be a string; otherwise <code>privateKey</code> is expected to be a <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>.</p>
<p>If <code>privateKey</code> is not valid for the curve specified when the <code>ECDH</code> object was
created, an error is thrown. Upon setting the private key, the associated
public point (key) is also generated and set in the <code>ECDH</code> object.</p>
<h3><code>ecdh.setPublicKey(publicKey[, encoding])</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<ul>
<li><code>publicKey</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>publicKey</code> string.</li>
</ul>
<p>Sets the EC Diffie-Hellman public key.
If <code>encoding</code> is provided <code>publicKey</code> is expected to
be a string; otherwise a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code> is expected.</p>
<p>There is not normally a reason to call this method because <code>ECDH</code>
only requires a private key and the other party's public key to compute the
shared secret. Typically either <a href="#ecdhgeneratekeysencoding-format"><code>ecdh.generateKeys()</code></a> or
<a href="#ecdhsetprivatekeyprivatekey-encoding"><code>ecdh.setPrivateKey()</code></a> will be called. The <a href="#ecdhsetprivatekeyprivatekey-encoding"><code>ecdh.setPrivateKey()</code></a> method
attempts to generate the public point/key associated with the private key being
set.</p>
<p>Example (obtaining a shared secret):</p>
<pre><code class="language-mjs">const {
  createECDH,
  createHash,
} = await import('node:crypto');

const alice = createECDH('secp256k1');
const bob = createECDH('secp256k1');

// This is a shortcut way of specifying one of Alice's previous private
// keys. It would be unwise to use such a predictable private key in a real
// application.
alice.setPrivateKey(
  createHash('sha256').update('alice', 'utf8').digest(),
);

// Bob uses a newly generated cryptographically strong
// pseudorandom key pair
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same shared secret value
console.log(aliceSecret === bobSecret);
</code></pre>
<pre><code class="language-cjs">const {
  createECDH,
  createHash,
} = require('node:crypto');

const alice = createECDH('secp256k1');
const bob = createECDH('secp256k1');

// This is a shortcut way of specifying one of Alice's previous private
// keys. It would be unwise to use such a predictable private key in a real
// application.
alice.setPrivateKey(
  createHash('sha256').update('alice', 'utf8').digest(),
);

// Bob uses a newly generated cryptographically strong
// pseudorandom key pair
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

// aliceSecret and bobSecret should be the same shared secret value
console.log(aliceSecret === bobSecret);
</code></pre>
<h2>Class: <code>Hash</code></h2>
<ul>
<li>Extends: {stream.Transform}</li>
</ul>
<p>The <code>Hash</code> class is a utility for creating hash digests of data. It can be
used in one of two ways:</p>
<ul>
<li>As a <a href="stream.md">stream</a> that is both readable and writable, where data is written
to produce a computed hash digest on the readable side, or</li>
<li>Using the <a href="#hashupdatedata-inputencoding"><code>hash.update()</code></a> and <a href="#hashdigestencoding"><code>hash.digest()</code></a> methods to produce the
computed hash.</li>
</ul>
<p>The <a href="#cryptocreatehashalgorithm-options"><code>crypto.createHash()</code></a> method is used to create <code>Hash</code> instances. <code>Hash</code>
objects are not to be created directly using the <code>new</code> keyword.</p>
<p>Example: Using <code>Hash</code> objects as streams:</p>
<pre><code class="language-mjs">const {
  createHash,
} = await import('node:crypto');

const hash = createHash('sha256');

hash.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  }
});

hash.write('some data to hash');
hash.end();
</code></pre>
<pre><code class="language-cjs">const {
  createHash,
} = require('node:crypto');

const hash = createHash('sha256');

hash.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hash.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
  }
});

hash.write('some data to hash');
hash.end();
</code></pre>
<p>Example: Using <code>Hash</code> and piped streams:</p>
<pre><code class="language-mjs">import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const { createHash } = await import('node:crypto');

const hash = createHash('sha256');

const input = createReadStream('test.js');
input.pipe(hash).setEncoding('hex').pipe(stdout);
</code></pre>
<pre><code class="language-cjs">const { createReadStream } = require('node:fs');
const { createHash } = require('node:crypto');
const { stdout } = require('node:process');

const hash = createHash('sha256');

const input = createReadStream('test.js');
input.pipe(hash).setEncoding('hex').pipe(stdout);
</code></pre>
<p>Example: Using the <a href="#hashupdatedata-inputencoding"><code>hash.update()</code></a> and <a href="#hashdigestencoding"><code>hash.digest()</code></a> methods:</p>
<pre><code class="language-mjs">const {
  createHash,
} = await import('node:crypto');

const hash = createHash('sha256');

hash.update('some data to hash');
console.log(hash.digest('hex'));
// Prints:
//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
</code></pre>
<pre><code class="language-cjs">const {
  createHash,
} = require('node:crypto');

const hash = createHash('sha256');

hash.update('some data to hash');
console.log(hash.digest('hex'));
// Prints:
//   6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50
</code></pre>
<h3><code>hash.copy([options])</code></h3>
<ul>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a></li>
<li>Returns: {Hash}</li>
</ul>
<p>Creates a new <code>Hash</code> object that contains a deep copy of the internal state
of the current <code>Hash</code> object.</p>
<p>The optional <code>options</code> argument controls stream behavior. For XOF hash
functions such as <code>'shake256'</code>, the <code>outputLength</code> option can be used to
specify the desired output length in bytes.</p>
<p>An error is thrown when an attempt is made to copy the <code>Hash</code> object after
its <a href="#hashdigestencoding"><code>hash.digest()</code></a> method has been called.</p>
<pre><code class="language-mjs">// Calculate a rolling hash.
const {
  createHash,
} = await import('node:crypto');

const hash = createHash('sha256');

hash.update('one');
console.log(hash.copy().digest('hex'));

hash.update('two');
console.log(hash.copy().digest('hex'));

hash.update('three');
console.log(hash.copy().digest('hex'));

// Etc.
</code></pre>
<pre><code class="language-cjs">// Calculate a rolling hash.
const {
  createHash,
} = require('node:crypto');

const hash = createHash('sha256');

hash.update('one');
console.log(hash.copy().digest('hex'));

hash.update('two');
console.log(hash.copy().digest('hex'));

hash.update('three');
console.log(hash.copy().digest('hex'));

// Etc.
</code></pre>
<h3><code>hash.digest([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Calculates the digest of all of the data passed to be hashed (using the
<a href="#hashupdatedata-inputencoding"><code>hash.update()</code></a> method).
If <code>encoding</code> is provided a string will be returned; otherwise
a <a href="buffer.md"><code>Buffer</code></a> is returned.</p>
<p>The <code>Hash</code> object can not be used again after <code>hash.digest()</code> method has been
called. Multiple calls will cause an error to be thrown.</p>
<h3><code>hash.update(data[, inputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
</ul>
<p>Updates the hash content with the given <code>data</code>, the encoding of which
is given in <code>inputEncoding</code>.
If <code>encoding</code> is not provided, and the <code>data</code> is a string, an
encoding of <code>'utf8'</code> is enforced. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>, then <code>inputEncoding</code> is ignored.</p>
<p>This can be called many times with new data as it is streamed.</p>
<h2>Class: <code>Hmac</code></h2>
<ul>
<li>Extends: {stream.Transform}</li>
</ul>
<p>The <code>Hmac</code> class is a utility for creating cryptographic HMAC digests. It can
be used in one of two ways:</p>
<ul>
<li>As a <a href="stream.md">stream</a> that is both readable and writable, where data is written
to produce a computed HMAC digest on the readable side, or</li>
<li>Using the <a href="#hmacupdatedata-inputencoding"><code>hmac.update()</code></a> and <a href="#hmacdigestencoding"><code>hmac.digest()</code></a> methods to produce the
computed HMAC digest.</li>
</ul>
<p>The <a href="#cryptocreatehmacalgorithm-key-options"><code>crypto.createHmac()</code></a> method is used to create <code>Hmac</code> instances. <code>Hmac</code>
objects are not to be created directly using the <code>new</code> keyword.</p>
<p>Example: Using <code>Hmac</code> objects as streams:</p>
<pre><code class="language-mjs">const {
  createHmac,
} = await import('node:crypto');

const hmac = createHmac('sha256', 'a secret');

hmac.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hmac.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
  }
});

hmac.write('some data to hash');
hmac.end();
</code></pre>
<pre><code class="language-cjs">const {
  createHmac,
} = require('node:crypto');

const hmac = createHmac('sha256', 'a secret');

hmac.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = hmac.read();
  if (data) {
    console.log(data.toString('hex'));
    // Prints:
    //   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
  }
});

hmac.write('some data to hash');
hmac.end();
</code></pre>
<p>Example: Using <code>Hmac</code> and piped streams:</p>
<pre><code class="language-mjs">import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const {
  createHmac,
} = await import('node:crypto');

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream('test.js');
input.pipe(hmac).pipe(stdout);
</code></pre>
<pre><code class="language-cjs">const {
  createReadStream,
} = require('node:fs');
const {
  createHmac,
} = require('node:crypto');
const { stdout } = require('node:process');

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream('test.js');
input.pipe(hmac).pipe(stdout);
</code></pre>
<p>Example: Using the <a href="#hmacupdatedata-inputencoding"><code>hmac.update()</code></a> and <a href="#hmacdigestencoding"><code>hmac.digest()</code></a> methods:</p>
<pre><code class="language-mjs">const {
  createHmac,
} = await import('node:crypto');

const hmac = createHmac('sha256', 'a secret');

hmac.update('some data to hash');
console.log(hmac.digest('hex'));
// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
</code></pre>
<pre><code class="language-cjs">const {
  createHmac,
} = require('node:crypto');

const hmac = createHmac('sha256', 'a secret');

hmac.update('some data to hash');
console.log(hmac.digest('hex'));
// Prints:
//   7fd04df92f636fd450bc841c9418e5825c17f33ad9c87c518115a45971f7f77e
</code></pre>
<h3><code>hmac.digest([encoding])</code></h3>
<ul>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Calculates the HMAC digest of all of the data passed using <a href="#hmacupdatedata-inputencoding"><code>hmac.update()</code></a>.
If <code>encoding</code> is
provided a string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a> is returned;</p>
<p>The <code>Hmac</code> object can not be used again after <code>hmac.digest()</code> has been
called. Multiple calls to <code>hmac.digest()</code> will result in an error being thrown.</p>
<h3><code>hmac.update(data[, inputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
</ul>
<p>Updates the <code>Hmac</code> content with the given <code>data</code>, the encoding of which
is given in <code>inputEncoding</code>.
If <code>encoding</code> is not provided, and the <code>data</code> is a string, an
encoding of <code>'utf8'</code> is enforced. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>, then <code>inputEncoding</code> is ignored.</p>
<p>This can be called many times with new data as it is streamed.</p>
<h2>Class: <code>KeyObject</code></h2>
<p>Node.js uses a <code>KeyObject</code> class to represent a symmetric or asymmetric key,
and each kind of key exposes different functions. The
<a href="#cryptocreatesecretkeykey-encoding"><code>crypto.createSecretKey()</code></a>, <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a> and
<a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a> methods are used to create <code>KeyObject</code>
instances. <code>KeyObject</code> objects are not to be created directly using the <code>new</code>
keyword.</p>
<p>Most applications should consider using the new <code>KeyObject</code> API instead of
passing keys as strings or <code>Buffer</code>s due to improved security features.</p>
<p><code>KeyObject</code> instances can be passed to other threads via <a href="worker_threads.md#portpostmessagevalue-transferlist"><code>postMessage()</code></a>.
The receiver obtains a cloned <code>KeyObject</code>, and the <code>KeyObject</code> does not need to
be listed in the <code>transferList</code> argument.</p>
<h3>Static method: <code>KeyObject.from(key)</code></h3>
<ul>
<li><code>key</code> {CryptoKey}</li>
<li>Returns: {KeyObject}</li>
</ul>
<p>Returns a {KeyObject} representation of the underlying key material of an
extractable {CryptoKey}.
The returned {KeyObject} does not retain any of the restrictions imposed by
the Web Crypto API on the original {CryptoKey}, such as the allowed key usages,
the algorithm or hash algorithm bindings.</p>
<pre><code class="language-mjs">const { KeyObject } = await import('node:crypto');
const { subtle } = globalThis.crypto;

const key = await subtle.generateKey({
  name: 'HMAC',
  hash: 'SHA-256',
  length: 256,
}, true, ['sign', 'verify']);

const keyObject = KeyObject.from(key);
console.log(keyObject.symmetricKeySize);
// Prints: 32 (symmetric key size in bytes)
</code></pre>
<pre><code class="language-cjs">const { KeyObject } = require('node:crypto');
const { subtle } = globalThis.crypto;

(async function() {
  const key = await subtle.generateKey({
    name: 'HMAC',
    hash: 'SHA-256',
    length: 256,
  }, true, ['sign', 'verify']);

  const keyObject = KeyObject.from(key);
  console.log(keyObject.symmetricKeySize);
  // Prints: 32 (symmetric key size in bytes)
})();
</code></pre>
<h3><code>keyObject.asymmetricKeyDetails</code></h3>
<ul>
<li>Type: {Object}
<ul>
<li><code>modulusLength</code> {number} Key size in bits (RSA, DSA).</li>
<li><code>publicExponent</code> {bigint} Public exponent (RSA).</li>
<li><code>hashAlgorithm</code> {string} Name of the message digest (RSA-PSS).</li>
<li><code>mgf1HashAlgorithm</code> {string} Name of the message digest used by
MGF1 (RSA-PSS).</li>
<li><code>saltLength</code> {number} Minimal salt length in bytes (RSA-PSS).</li>
<li><code>divisorLength</code> {number} Size of <code>q</code> in bits (DSA).</li>
<li><code>namedCurve</code> {string} Name of the curve (EC).</li>
</ul>
</li>
</ul>
<p>This property exists only on asymmetric keys. Depending on the type of the key,
this object contains information about the key. None of the information obtained
through this property can be used to uniquely identify a key or to compromise
the security of the key.</p>
<p>For RSA-PSS keys, if the key material contains a <code>RSASSA-PSS-params</code> sequence,
the <code>hashAlgorithm</code>, <code>mgf1HashAlgorithm</code>, and <code>saltLength</code> properties will be
set.</p>
<p>Other key details might be exposed via this API using additional attributes.</p>
<h3><code>keyObject.asymmetricKeyType</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>For asymmetric keys, this property represents the type of the key. See the
supported <a href="#asymmetric-key-types">asymmetric key types</a>.</p>
<p>This property is <code>undefined</code> for unrecognized <code>KeyObject</code> types and symmetric
keys.</p>
<h3><code>keyObject.equals(otherKeyObject)</code></h3>
<ul>
<li><code>otherKeyObject</code> {KeyObject} A <code>KeyObject</code> with which to
compare <code>keyObject</code>.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Returns <code>true</code> or <code>false</code> depending on whether the keys have exactly the same
type, value, and parameters. This method is not
<a href="https://en.wikipedia.org/wiki/Timing_attack">constant time</a>.</p>
<h3><code>keyObject.export([options])</code></h3>
<ul>
<li><code>options</code> {Object}</li>
<li>Returns: {string | Buffer | Object}</li>
</ul>
<p>For symmetric keys, the following encoding options can be used:</p>
<ul>
<li><code>format</code> {string} Must be <code>'buffer'</code> (default) or <code>'jwk'</code>.</li>
</ul>
<p>For public keys, the following encoding options can be used:</p>
<ul>
<li><code>format</code> {string} Must be <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, or <code>'raw-public'</code>.
See <a href="#asymmetric-key-types">asymmetric key types</a> for format support.</li>
<li><code>type</code> {string} When <code>format</code> is <code>'pem'</code> or <code>'der'</code>, must be <code>'pkcs1'</code>
(RSA only) or <code>'spki'</code>. For EC keys with <code>'raw-public'</code> format, may be
<code>'uncompressed'</code> (default) or <code>'compressed'</code>. Ignored when <code>format</code> is
<code>'jwk'</code>.</li>
</ul>
<p>For private keys, the following encoding options can be used:</p>
<ul>
<li><code>format</code> {string} Must be <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, <code>'raw-private'</code>,
or <code>'raw-seed'</code>. See <a href="#asymmetric-key-types">asymmetric key types</a> for format support.</li>
<li><code>type</code> {string} When <code>format</code> is <code>'pem'</code> or <code>'der'</code>, must be <code>'pkcs1'</code>
(RSA only), <code>'pkcs8'</code>, or <code>'sec1'</code> (EC only). Ignored when <code>format</code> is
<code>'jwk'</code>, <code>'raw-private'</code>, or <code>'raw-seed'</code>.</li>
<li><code>cipher</code> {string} If specified, the private key will be encrypted with
the given <code>cipher</code> and <code>passphrase</code> using PKCS#5 v2.0 password based
encryption. Ignored when <code>format</code> is <code>'jwk'</code>, <code>'raw-private'</code>, or
<code>'raw-seed'</code>.</li>
<li><code>passphrase</code> {string | Buffer} The passphrase to use for encryption.
Required when <code>cipher</code> is specified.</li>
</ul>
<p>The result type depends on the selected encoding format, when PEM the
result is a string, when DER it will be a buffer containing the data
encoded as DER, when <a href="https://tools.ietf.org/html/rfc7517">JWK</a> it will be an object. Raw formats return a
{Buffer} containing the raw key material.</p>
<p>Private keys can be encrypted by specifying a <code>cipher</code> and <code>passphrase</code>.
The PKCS#8 <code>type</code> supports encryption with both PEM and DER <code>format</code> for any
key algorithm. PKCS#1 and SEC1 can only be encrypted when the PEM <code>format</code> is
used. For maximum compatibility, use PKCS#8 for encrypted private keys. Since
PKCS#8 defines its own encryption mechanism, PEM-level encryption is not
supported when encrypting a PKCS#8 key. See <a href="https://www.rfc-editor.org/rfc/rfc5208.txt">RFC 5208</a> for PKCS#8 encryption
and <a href="https://www.rfc-editor.org/rfc/rfc1421.txt">RFC 1421</a> for PKCS#1 and SEC1 encryption.</p>
<h3><code>keyObject.symmetricKeySize</code></h3>
<ul>
<li>Type: {number}</li>
</ul>
<p>For secret keys, this property represents the size of the key in bytes. This
property is <code>undefined</code> for asymmetric keys.</p>
<h3><code>keyObject.toCryptoKey(algorithm, extractable, keyUsages)</code></h3>
<ul>
<li>
<p><code>algorithm</code> {string|Algorithm|RsaHashedImportParams|EcKeyImportParams|HmacImportParams}</p>
</li>
<li>
<p><code>extractable</code> {boolean}</p>
</li>
<li>
<p><code>keyUsages</code> {string[]} See <a href="webcrypto.md#cryptokeyusages">Key usages</a>.</p>
</li>
<li>
<p>Returns: {CryptoKey}</p>
</li>
</ul>
<p>Converts a <code>KeyObject</code> instance to a <code>CryptoKey</code>.</p>
<h3><code>keyObject.type</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Depending on the type of this <code>KeyObject</code>, this property is either
<code>'secret'</code> for secret (symmetric) keys, <code>'public'</code> for public (asymmetric) keys
or <code>'private'</code> for private (asymmetric) keys.</p>
<h2>Class: <code>Mac</code></h2>
<ul>
<li>Extends: {stream.Transform}</li>
</ul>
<p>The <code>Mac</code> class computes message authentication codes using MAC
implementations supplied by OpenSSL providers. It can be used in one of two
ways:</p>
<ul>
<li>As a <a href="stream.md">stream</a> that is both readable and writable, where data is written and
one authentication tag is produced on the readable side when the writable
side ends; or</li>
<li>By calling <a href="#macupdatedata-inputencoding"><code>mac.update()</code></a> one or more times followed by <a href="#macfinaloutputencoding"><code>mac.final()</code></a>.</li>
</ul>
<p>Instances of <code>Mac</code> are created using <a href="#cryptocreatemacalgorithm-key-options"><code>crypto.createMac()</code></a>. The <code>Mac</code> class
is not exported directly by the <code>node:crypto</code> module.</p>
<p>Calling <code>mac.end()</code> without first writing data computes the authentication tag
for an empty message. If the selected MAC produces a zero-byte tag, such as
when a provider accepts <code>outputLength: 0</code>, the readable side ends without
emitting a data chunk because Node.js streams do not emit zero-length chunks.
When using <code>mac.final()</code> instead, it returns a zero-length <a href="buffer.md"><code>Buffer</code></a> or an
empty encoded string.</p>
<p><code>mac.end()</code> and <code>mac.final()</code> are alternative terminal operations and must not
both be called on the same object. A <code>Mac</code> object cannot be used again after
either operation attempts finalization or after an underlying MAC update fails.</p>
<p>Example: Using <a href="#macupdatedata-inputencoding"><code>mac.update()</code></a> and <a href="#macfinaloutputencoding"><code>mac.final()</code></a>:</p>
<pre><code class="language-mjs">const { createMac, randomBytes } = await import('node:crypto');

const key = randomBytes(16);
const mac = createMac('CMAC', key, {
  cipher: 'AES-128-CBC',
});

mac.update('some data to authenticate');
console.log(mac.final('hex'));
</code></pre>
<h3><code>mac.final([outputEncoding])</code></h3>
<ul>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Completes the MAC computation and returns the authentication tag. If
<code>outputEncoding</code> is omitted or is <code>'buffer'</code>, a <a href="buffer.md"><code>Buffer</code></a> is returned.
Otherwise, a string is returned.</p>
<p>To verify an authentication tag, compare equal-length <a href="buffer.md"><code>Buffer</code></a> values using
<a href="#cryptotimingsafeequala-b"><code>crypto.timingSafeEqual()</code></a>.</p>
<p>The <code>Mac</code> object cannot be used again after finalization is attempted,
including when finalization fails. Later calls to <code>mac.update()</code> or
<code>mac.final()</code> throw <code>ERR_CRYPTO_MAC_FINALIZED</code>.</p>
<h3><code>mac.update(data[, inputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
<li>Returns: {Mac}</li>
</ul>
<p>Updates the MAC with <code>data</code> and returns the <code>Mac</code> object so that calls can be
chained. When <code>data</code> is a string, <code>inputEncoding</code> defaults to <code>'utf8'</code>. When
<code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, <code>inputEncoding</code> is
ignored.</p>
<p>This method can be called multiple times before finalization. If an underlying
MAC update fails, the <code>Mac</code> object cannot be used again. Calling this method
after a previous underlying MAC update failure or after finalization throws
<code>ERR_CRYPTO_MAC_FINALIZED</code>.</p>
<h2>Class: <code>Sign</code></h2>
<ul>
<li>Extends: {stream.Writable}</li>
</ul>
<p>The <code>Sign</code> class is a utility for generating signatures. It can be used in one
of two ways:</p>
<ul>
<li>As a writable <a href="stream.md">stream</a>, where data to be signed is written and the
<a href="#signsignprivatekey-outputencoding"><code>sign.sign()</code></a> method is used to generate and return the signature, or</li>
<li>Using the <a href="#signupdatedata-inputencoding"><code>sign.update()</code></a> and <a href="#signsignprivatekey-outputencoding"><code>sign.sign()</code></a> methods to produce the
signature.</li>
</ul>
<p>The <a href="#cryptocreatesignalgorithm-options"><code>crypto.createSign()</code></a> method is used to create <code>Sign</code> instances. The
argument is the string name of the hash function to use. <code>Sign</code> objects are not
to be created directly using the <code>new</code> keyword.</p>
<p>Example: Using <code>Sign</code> and <a href="#class-verify"><code>Verify</code></a> objects as streams:</p>
<pre><code class="language-mjs">const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = await import('node:crypto');

const { privateKey, publicKey } = generateKeyPairSync('ec', {
  namedCurve: 'sect239k1',
});

const sign = createSign('SHA256');
sign.write('some data to sign');
sign.end();
const signature = sign.sign(privateKey, 'hex');

const verify = createVerify('SHA256');
verify.write('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature, 'hex'));
// Prints: true
</code></pre>
<pre><code class="language-cjs">const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = require('node:crypto');

const { privateKey, publicKey } = generateKeyPairSync('ec', {
  namedCurve: 'sect239k1',
});

const sign = createSign('SHA256');
sign.write('some data to sign');
sign.end();
const signature = sign.sign(privateKey, 'hex');

const verify = createVerify('SHA256');
verify.write('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature, 'hex'));
// Prints: true
</code></pre>
<p>Example: Using the <a href="#signupdatedata-inputencoding"><code>sign.update()</code></a> and <a href="#verifyupdatedata-inputencoding"><code>verify.update()</code></a> methods:</p>
<pre><code class="language-mjs">const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = await import('node:crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const sign = createSign('SHA256');
sign.update('some data to sign');
sign.end();
const signature = sign.sign(privateKey);

const verify = createVerify('SHA256');
verify.update('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature));
// Prints: true
</code></pre>
<pre><code class="language-cjs">const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = require('node:crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const sign = createSign('SHA256');
sign.update('some data to sign');
sign.end();
const signature = sign.sign(privateKey);

const verify = createVerify('SHA256');
verify.update('some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature));
// Prints: true
</code></pre>
<h3><code>sign.sign(privateKey[, outputEncoding])</code></h3>
<ul>
<li><code>privateKey</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}
<ul>
<li><code>dsaEncoding</code> {string}</li>
<li><code>padding</code> {integer}</li>
<li><code>saltLength</code> {integer}</li>
</ul>
</li>
<li><code>outputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the return value.</li>
<li>Returns: {Buffer | string}</li>
</ul>
<p>Calculates the signature on all the data passed through using either
<a href="#signupdatedata-inputencoding"><code>sign.update()</code></a> or <a href="stream.md#writablewritechunk-encoding-callback"><code>sign.write()</code></a>.</p>
<p>If <code>privateKey</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>privateKey</code> had been passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>. When
<code>privateKey</code> is a string, <code>ArrayBuffer</code>, <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>, it must contain PEM-encoded key material. If it is an object, the
following additional properties can be passed:</p>
<ul>
<li>
<p><code>dsaEncoding</code> {string} For DSA and ECDSA, this option specifies the
format of the generated signature. It can be one of the following:</p>
<ul>
<li><code>'der'</code> (default): DER-encoded ASN.1 signature structure encoding <code>(r, s)</code>.</li>
<li><code>'ieee-p1363'</code>: Signature format <code>r || s</code> as proposed in IEEE-P1363.</li>
</ul>
</li>
<li>
<p><code>padding</code> {integer} Optional padding value for RSA, one of the following:</p>
<ul>
<li><code>crypto.constants.RSA_PKCS1_PADDING</code> (default)</li>
<li><code>crypto.constants.RSA_PKCS1_PSS_PADDING</code></li>
</ul>
<p><code>RSA_PKCS1_PSS_PADDING</code> will use MGF1 with the same hash function
used to sign the message as specified in section 3.1 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>, unless
an MGF1 hash function has been specified as part of the key in compliance with
section 3.3 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>.</p>
</li>
<li>
<p><code>saltLength</code> {integer} Salt length for when padding is
<code>RSA_PKCS1_PSS_PADDING</code>. The special value
<code>crypto.constants.RSA_PSS_SALTLEN_DIGEST</code> sets the salt length to the digest
size, <code>crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN</code> (default) sets it to the
maximum permissible value.</p>
</li>
</ul>
<p>If <code>outputEncoding</code> is provided a string is returned; otherwise a <a href="buffer.md"><code>Buffer</code></a>
is returned.</p>
<p>The <code>Sign</code> object can not be again used after <code>sign.sign()</code> method has been
called. Multiple calls to <code>sign.sign()</code> will result in an error being thrown.</p>
<h3><code>sign.update(data[, inputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
</ul>
<p>Updates the <code>Sign</code> content with the given <code>data</code>, the encoding of which
is given in <code>inputEncoding</code>.
If <code>encoding</code> is not provided, and the <code>data</code> is a string, an
encoding of <code>'utf8'</code> is enforced. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>, then <code>inputEncoding</code> is ignored.</p>
<p>This can be called many times with new data as it is streamed.</p>
<h2>Class: <code>Verify</code></h2>
<ul>
<li>Extends: {stream.Writable}</li>
</ul>
<p>The <code>Verify</code> class is a utility for verifying signatures. It can be used in one
of two ways:</p>
<ul>
<li>As a writable <a href="stream.md">stream</a> where written data is used to validate against the
supplied signature, or</li>
<li>Using the <a href="#verifyupdatedata-inputencoding"><code>verify.update()</code></a> and <a href="#verifyverifykey-signature-signatureencoding"><code>verify.verify()</code></a> methods to verify
the signature.</li>
</ul>
<p>The <a href="#cryptocreateverifyalgorithm-options"><code>crypto.createVerify()</code></a> method is used to create <code>Verify</code> instances.
<code>Verify</code> objects are not to be created directly using the <code>new</code> keyword.</p>
<p>See <a href="#class-sign"><code>Sign</code></a> for examples.</p>
<h3><code>verify.update(data[, inputEncoding])</code></h3>
<ul>
<li><code>data</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>inputEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>data</code> string.</li>
</ul>
<p>Updates the <code>Verify</code> content with the given <code>data</code>, the encoding of which
is given in <code>inputEncoding</code>.
If <code>inputEncoding</code> is not provided, and the <code>data</code> is a string, an
encoding of <code>'utf8'</code> is enforced. If <code>data</code> is a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or
<code>DataView</code>, then <code>inputEncoding</code> is ignored.</p>
<p>This can be called many times with new data as it is streamed.</p>
<h3><code>verify.verify(key, signature[, signatureEncoding])</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}
<ul>
<li><code>dsaEncoding</code> {string}</li>
<li><code>padding</code> {integer}</li>
<li><code>saltLength</code> {integer}</li>
</ul>
</li>
<li><code>signature</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>signatureEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>signature</code> string.</li>
<li>Returns: {boolean} <code>true</code> or <code>false</code> depending on the validity of the
signature for the data and public key.</li>
</ul>
<p>Verifies the provided data using the given <code>key</code> and <code>signature</code>.</p>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>key</code> had been passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>. When <code>key</code> is a string,
<code>ArrayBuffer</code>, <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, it must contain
PEM-encoded key material. If it is an object, the following additional
properties can be passed:</p>
<ul>
<li>
<p><code>dsaEncoding</code> {string} For DSA and ECDSA, this option specifies the
format of the signature. It can be one of the following:</p>
<ul>
<li><code>'der'</code> (default): DER-encoded ASN.1 signature structure encoding <code>(r, s)</code>.</li>
<li><code>'ieee-p1363'</code>: Signature format <code>r || s</code> as proposed in IEEE-P1363.</li>
</ul>
</li>
<li>
<p><code>padding</code> {integer} Optional padding value for RSA, one of the following:</p>
<ul>
<li><code>crypto.constants.RSA_PKCS1_PADDING</code> (default)</li>
<li><code>crypto.constants.RSA_PKCS1_PSS_PADDING</code></li>
</ul>
<p><code>RSA_PKCS1_PSS_PADDING</code> will use MGF1 with the same hash function
used to verify the message as specified in section 3.1 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>, unless
an MGF1 hash function has been specified as part of the key in compliance with
section 3.3 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>.</p>
</li>
<li>
<p><code>saltLength</code> {integer} Salt length for when padding is
<code>RSA_PKCS1_PSS_PADDING</code>. The special value
<code>crypto.constants.RSA_PSS_SALTLEN_DIGEST</code> sets the salt length to the digest
size, <code>crypto.constants.RSA_PSS_SALTLEN_AUTO</code> (default) causes it to be
determined automatically.</p>
</li>
</ul>
<p>The <code>signature</code> argument is the previously calculated signature for the data, in
the <code>signatureEncoding</code>.
If a <code>signatureEncoding</code> is specified, the <code>signature</code> is expected to be a
string; otherwise <code>signature</code> is expected to be a <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>.</p>
<p>The <code>verify</code> object can not be used again after <code>verify.verify()</code> has been
called. Multiple calls to <code>verify.verify()</code> will result in an error being
thrown.</p>
<p>Because public keys can be derived from private keys, a private key may
be passed instead of a public key.</p>
<h2>Class: <code>X509Certificate</code></h2>
<p>Encapsulates an X509 certificate and provides read-only access to
its information.</p>
<pre><code class="language-mjs">const { X509Certificate } = await import('node:crypto');

const x509 = new X509Certificate('{... pem encoded cert ...}');

console.log(x509.subject);
</code></pre>
<pre><code class="language-cjs">const { X509Certificate } = require('node:crypto');

const x509 = new X509Certificate('{... pem encoded cert ...}');

console.log(x509.subject);
</code></pre>
<h3><code>new X509Certificate(buffer)</code></h3>
<ul>
<li><code>buffer</code> {string|TypedArray|Buffer|DataView} A PEM or DER encoded
X509 Certificate.</li>
</ul>
<h3><code>x509.ca</code></h3>
<ul>
<li>Type: {boolean} Will be <code>true</code> if this is a Certificate Authority (CA)
certificate.</li>
</ul>
<h3><code>x509.checkEmail(email[, options])</code></h3>
<ul>
<li><code>email</code> {string}</li>
<li><code>options</code> {Object}
<ul>
<li><code>subject</code> {string} <code>'default'</code>, <code>'always'</code>, or <code>'never'</code>.
<strong>Default:</strong> <code>'default'</code>.</li>
</ul>
</li>
<li>Returns: {string|undefined} Returns <code>email</code> if the certificate matches,
<code>undefined</code> if it does not.</li>
</ul>
<p>Checks whether the certificate matches the given email address.</p>
<p>If the <code>'subject'</code> option is undefined or set to <code>'default'</code>, the certificate
subject is considered according to OpenSSL's default behavior.</p>
<p>If the <code>'subject'</code> option is set to <code>'always'</code> and if the subject alternative
name extension either does not exist or does not contain a matching email
address, the certificate subject is considered.</p>
<p>If the <code>'subject'</code> option is set to <code>'never'</code>, the certificate subject is never
considered, even if the certificate contains no subject alternative names.</p>
<h3><code>x509.checkHost(name[, options])</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li><code>options</code> {Object}
<ul>
<li><code>subject</code> {string} <code>'default'</code>, <code>'always'</code>, or <code>'never'</code>.
<strong>Default:</strong> <code>'default'</code>.</li>
<li><code>wildcards</code> {boolean} <strong>Default:</strong> <code>true</code>.</li>
<li><code>partialWildcards</code> {boolean} <strong>Default:</strong> <code>true</code>.</li>
<li><code>multiLabelWildcards</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>singleLabelSubdomains</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string|undefined} Returns a subject name that matches <code>name</code>,
or <code>undefined</code> if no subject name matches <code>name</code>.</li>
</ul>
<p>Checks whether the certificate matches the given host name.</p>
<p>If the certificate matches the given host name, the matching subject name is
returned. The returned name might be an exact match (e.g., <code>foo.example.com</code>)
or it might contain wildcards (e.g., <code>*.example.com</code>). Because host name
comparisons are case-insensitive, the returned subject name might also differ
from the given <code>name</code> in capitalization.</p>
<p>If the <code>'subject'</code> option is undefined or set to <code>'default'</code>, the certificate
subject is considered according to OpenSSL's default behavior.</p>
<p>If the <code>'subject'</code> option is set to <code>'always'</code> and if the subject alternative
name extension either does not exist or does not contain a matching DNS name,
the certificate subject is considered.</p>
<p>If the <code>'subject'</code> option is set to <code>'never'</code>, the certificate subject is never
considered, even if the certificate contains no subject alternative names.</p>
<h3><code>x509.checkIP(ip)</code></h3>
<ul>
<li><code>ip</code> {string}</li>
<li>Returns: {string|undefined} Returns <code>ip</code> if the certificate matches,
<code>undefined</code> if it does not.</li>
</ul>
<p>Checks whether the certificate matches the given IP address (IPv4 or IPv6).</p>
<p>Only <a href="https://www.rfc-editor.org/rfc/rfc5280.txt">RFC 5280</a> <code>iPAddress</code> subject alternative names are considered, and they
must match the given <code>ip</code> address exactly. Other subject alternative names as
well as the subject field of the certificate are ignored.</p>
<h3><code>x509.checkIssued(otherCert)</code></h3>
<ul>
<li><code>otherCert</code> {X509Certificate}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Checks whether this certificate was potentially issued by the given <code>otherCert</code>
by comparing the certificate metadata.</p>
<p>This is useful for pruning a list of possible issuer certificates which have been
selected using a more rudimentary filtering routine, i.e. just based on subject
and issuer names.</p>
<p>Finally, to verify that this certificate's signature was produced by a private key
corresponding to <code>otherCert</code>'s public key use <a href="#x509verifypublickey"><code>x509.verify(publicKey)</code></a>
with <code>otherCert</code>'s public key represented as a <a href="#class-keyobject"><code>KeyObject</code></a>
like so</p>
<pre><code class="language-js">if (!x509.verify(otherCert.publicKey)) {
  throw new Error('otherCert did not issue x509');
}
</code></pre>
<h3><code>x509.checkPrivateKey(privateKey)</code></h3>
<ul>
<li><code>privateKey</code> {KeyObject} A private key.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Checks whether the public key for this certificate is consistent with
the given private key.</p>
<h3><code>x509.fingerprint</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The SHA-1 fingerprint of this certificate.</p>
<p>Because SHA-1 is cryptographically broken and because the security of SHA-1 is
significantly worse than that of algorithms that are commonly used to sign
certificates, consider using <a href="#x509fingerprint256"><code>x509.fingerprint256</code></a> instead.</p>
<h3><code>x509.fingerprint256</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The SHA-256 fingerprint of this certificate.</p>
<h3><code>x509.fingerprint512</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The SHA-512 fingerprint of this certificate.</p>
<p>Because computing the SHA-256 fingerprint is usually faster and because it is
only half the size of the SHA-512 fingerprint, <a href="#x509fingerprint256"><code>x509.fingerprint256</code></a> may be
a better choice. While SHA-512 presumably provides a higher level of security in
general, the security of SHA-256 matches that of most algorithms that are
commonly used to sign certificates.</p>
<h3><code>x509.infoAccess</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>A textual representation of the certificate's authority information access
extension.</p>
<p>This is a line feed separated list of access descriptions. Each line begins with
the access method and the kind of the access location, followed by a colon and
the value associated with the access location.</p>
<p>After the prefix denoting the access method and the kind of the access location,
the remainder of each line might be enclosed in quotes to indicate that the
value is a JSON string literal. For backward compatibility, Node.js only uses
JSON string literals within this property when necessary to avoid ambiguity.
Third-party code should be prepared to handle both possible entry formats.</p>
<h3><code>x509.issuer</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The issuer identification included in this certificate.</p>
<h3><code>x509.issuerCertificate</code></h3>
<ul>
<li>Type: {X509Certificate}</li>
</ul>
<p>The issuer certificate or <code>undefined</code> if the issuer certificate is not
available.</p>
<h3><code>x509.keyUsage</code></h3>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>An array detailing the key extended usages for this certificate.</p>
<h3><code>x509.publicKey</code></h3>
<ul>
<li>Type: {KeyObject}</li>
</ul>
<p>The public key {KeyObject} for this certificate.</p>
<h3><code>x509.raw</code></h3>
<ul>
<li>Type: {Buffer}</li>
</ul>
<p>A <code>Buffer</code> containing the DER encoding of this certificate.</p>
<h3><code>x509.serialNumber</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The serial number of this certificate.</p>
<p>Serial numbers are assigned by certificate authorities and do not uniquely
identify certificates. Consider using <a href="#x509fingerprint256"><code>x509.fingerprint256</code></a> as a unique
identifier instead.</p>
<h3><code>x509.subject</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The complete subject of this certificate.</p>
<h3><code>x509.subjectAltName</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The subject alternative name specified for this certificate.</p>
<p>This is a comma-separated list of subject alternative names. Each entry begins
with a string identifying the kind of the subject alternative name followed by
a colon and the value associated with the entry.</p>
<p>Earlier versions of Node.js incorrectly assumed that it is safe to split this
property at the two-character sequence <code>', '</code> (see <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44532">CVE-2021-44532</a>). However,
both malicious and legitimate certificates can contain subject alternative names
that include this sequence when represented as a string.</p>
<p>After the prefix denoting the type of the entry, the remainder of each entry
might be enclosed in quotes to indicate that the value is a JSON string literal.
For backward compatibility, Node.js only uses JSON string literals within this
property when necessary to avoid ambiguity. Third-party code should be prepared
to handle both possible entry formats.</p>
<h3><code>x509.toJSON()</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>There is no standard JSON encoding for X509 certificates. The
<code>toJSON()</code> method returns a string containing the PEM encoded
certificate.</p>
<h3><code>x509.toLegacyObject()</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Returns information about this certificate using the legacy
<a href="tls.md#certificate-object">certificate object</a> encoding.</p>
<h3><code>x509.toString()</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>Returns the PEM-encoded certificate.</p>
<h3><code>x509.validFrom</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The date/time from which this certificate is valid.</p>
<h3><code>x509.validFromDate</code></h3>
<ul>
<li>Type: {Date}</li>
</ul>
<p>The date/time from which this certificate is valid, encapsulated in a <code>Date</code> object.</p>
<h3><code>x509.validTo</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The date/time until which this certificate is valid.</p>
<h3><code>x509.validToDate</code></h3>
<ul>
<li>Type: {Date}</li>
</ul>
<p>The date/time until which this certificate is valid, encapsulated in a <code>Date</code> object.</p>
<h3><code>x509.signatureAlgorithm</code></h3>
<ul>
<li>Type: {string|undefined}</li>
</ul>
<p>The algorithm used to sign the certificate or <code>undefined</code> if the signature algorithm is unknown by OpenSSL.</p>
<h3><code>x509.signatureAlgorithmOid</code></h3>
<ul>
<li>Type: {string}</li>
</ul>
<p>The OID of the algorithm used to sign the certificate.</p>
<h3><code>x509.verify(publicKey)</code></h3>
<ul>
<li><code>publicKey</code> {KeyObject} A public key.</li>
<li>Returns: {boolean}</li>
</ul>
<p>Verifies that this certificate was signed by the given public key.
Does not perform any other validation checks on the certificate.</p>
<h2><code>node:crypto</code> module methods and properties</h2>
<h3><code>crypto.argon2(algorithm, parameters, callback)</code></h3>
<ul>
<li><code>algorithm</code> {string} Variant of Argon2, one of <code>&quot;argon2d&quot;</code>, <code>&quot;argon2i&quot;</code> or <code>&quot;argon2id&quot;</code>.</li>
<li><code>parameters</code> {Object}
<ul>
<li><code>message</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} REQUIRED, this is the password for password
hashing applications of Argon2.</li>
<li><code>nonce</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} REQUIRED, must be at
least 8 bytes long. This is the salt for password hashing applications of Argon2.</li>
<li><code>parallelism</code> {number} REQUIRED, degree of parallelism determines how many computational chains (lanes)
can be run. Must be at least <code>1</code> and at most <code>2**24-1</code>.</li>
<li><code>tagLength</code> {number} REQUIRED, the length of the key to generate. Must be at least <code>4</code> and
at most <code>2**32-1</code>.</li>
<li><code>memory</code> {number} REQUIRED, memory cost in 1KiB blocks. Must be at least
<code>8 * parallelism</code> and at most <code>2**32-1</code>. The actual number of blocks is rounded
down to the nearest multiple of <code>4 * parallelism</code>.</li>
<li><code>passes</code> {number} REQUIRED, number of passes (iterations). Must be at least <code>1</code> and at most
<code>2**32-1</code>.</li>
<li><code>secret</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|undefined} OPTIONAL, Random additional input,
similar to the salt, that should <strong>NOT</strong> be stored with the derived key. This is known as pepper in
password hashing applications. If used, must have a length not greater than <code>2**32-1</code> bytes.</li>
<li><code>associatedData</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|undefined} OPTIONAL, Additional data to
be added to the hash, functionally equivalent to salt or secret, but meant for
non-random data. If used, must have a length not greater than <code>2**32-1</code> bytes.</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>derivedKey</code> {Buffer}</li>
</ul>
</li>
</ul>
<p>Provides an asynchronous <a href="https://www.rfc-editor.org/rfc/rfc9106.html">Argon2</a> implementation. Argon2 is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.</p>
<p>The <code>nonce</code> should be as unique as possible. It is recommended that a nonce is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>message</code>, <code>nonce</code>, <code>secret</code> or <code>associatedData</code>, please
consider <a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>The <code>callback</code> function is called with two arguments: <code>err</code> and <code>derivedKey</code>.
<code>err</code> is an exception object when key derivation fails, otherwise <code>err</code> is
<code>null</code>. <code>derivedKey</code> is passed to the callback as a <a href="buffer.md"><code>Buffer</code></a>.</p>
<p>An exception is thrown when any of the input arguments specify invalid values
or types.</p>
<pre><code class="language-mjs">const { argon2, randomBytes } = await import('node:crypto');

const parameters = {
  message: 'password',
  nonce: randomBytes(16),
  parallelism: 4,
  tagLength: 64,
  memory: 65536,
  passes: 3,
};

argon2('argon2id', parameters, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // 'af91dad...9520f15'
});
</code></pre>
<pre><code class="language-cjs">const { argon2, randomBytes } = require('node:crypto');

const parameters = {
  message: 'password',
  nonce: randomBytes(16),
  parallelism: 4,
  tagLength: 64,
  memory: 65536,
  passes: 3,
};

argon2('argon2id', parameters, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // 'af91dad...9520f15'
});
</code></pre>
<h3><code>crypto.argon2Sync(algorithm, parameters)</code></h3>
<ul>
<li><code>algorithm</code> {string} Variant of Argon2, one of <code>&quot;argon2d&quot;</code>, <code>&quot;argon2i&quot;</code> or <code>&quot;argon2id&quot;</code>.</li>
<li><code>parameters</code> {Object}
<ul>
<li><code>message</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} REQUIRED, this is the password for password
hashing applications of Argon2.</li>
<li><code>nonce</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} REQUIRED, must be at
least 8 bytes long. This is the salt for password hashing applications of Argon2.</li>
<li><code>parallelism</code> {number} REQUIRED, degree of parallelism determines how many computational chains (lanes)
can be run. Must be at least 1 and at most <code>2**24-1</code>.</li>
<li><code>tagLength</code> {number} REQUIRED, the length of the key to generate. Must be at least <code>4</code> and
at most <code>2**32-1</code>.</li>
<li><code>memory</code> {number} REQUIRED, memory cost in 1KiB blocks. Must be at least
<code>8 * parallelism</code> and at most <code>2**32-1</code>. The actual number of blocks is rounded
down to the nearest multiple of <code>4 * parallelism</code>.</li>
<li><code>passes</code> {number} REQUIRED, number of passes (iterations). Must be at least <code>1</code> and at most
<code>2**32-1</code>.</li>
<li><code>secret</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|undefined} OPTIONAL, Random additional input,
similar to the salt, that should <strong>NOT</strong> be stored with the derived key. This is known as pepper in
password hashing applications. If used, must have a length not greater than <code>2**32-1</code> bytes.</li>
<li><code>associatedData</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|undefined} OPTIONAL, Additional data to
be added to the hash, functionally equivalent to salt or secret, but meant for
non-random data. If used, must have a length not greater than <code>2**32-1</code> bytes.</li>
</ul>
</li>
<li>Returns: {Buffer}</li>
</ul>
<p>Provides a synchronous <a href="https://www.rfc-editor.org/rfc/rfc9106.html">Argon2</a> implementation. Argon2 is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.</p>
<p>The <code>nonce</code> should be as unique as possible. It is recommended that a nonce is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>message</code>, <code>nonce</code>, <code>secret</code> or <code>associatedData</code>, please
consider <a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>An exception is thrown when key derivation fails, otherwise the derived key is
returned as a <a href="buffer.md"><code>Buffer</code></a>.</p>
<p>An exception is thrown when any of the input arguments specify invalid values
or types.</p>
<pre><code class="language-mjs">const { argon2Sync, randomBytes } = await import('node:crypto');

const parameters = {
  message: 'password',
  nonce: randomBytes(16),
  parallelism: 4,
  tagLength: 64,
  memory: 65536,
  passes: 3,
};

const derivedKey = argon2Sync('argon2id', parameters);
console.log(derivedKey.toString('hex'));  // 'af91dad...9520f15'
</code></pre>
<pre><code class="language-cjs">const { argon2Sync, randomBytes } = require('node:crypto');

const parameters = {
  message: 'password',
  nonce: randomBytes(16),
  parallelism: 4,
  tagLength: 64,
  memory: 65536,
  passes: 3,
};

const derivedKey = argon2Sync('argon2id', parameters);
console.log(derivedKey.toString('hex'));  // 'af91dad...9520f15'
</code></pre>
<h3><code>crypto.checkPrime(candidate[, options], callback)</code></h3>
<ul>
<li><code>candidate</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}
A possible prime encoded as a sequence of big endian octets of arbitrary
length.</li>
<li><code>options</code> {Object}
<ul>
<li><code>checks</code> {number} The number of Miller-Rabin probabilistic primality
iterations to perform. When the value is <code>0</code> (zero), a number of checks
is used that yields a false positive rate of at most 2&lt;sup&gt;-64&lt;/sup&gt; for
random input. Care must be used when selecting a number of checks. Refer
to the OpenSSL documentation for the <a href="https://www.openssl.org/docs/man1.1.1/man3/BN_is_prime_ex.html"><code>BN_is_prime_ex</code></a> function <code>nchecks</code>
options for more details. <strong>Default:</strong> <code>0</code></li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error} Set to an {Error} object if an error occurred during check.</li>
<li><code>result</code> {boolean} <code>true</code> if the candidate is a prime with an error
probability less than <code>0.25 ** options.checks</code>.</li>
</ul>
</li>
</ul>
<p>Checks the primality of the <code>candidate</code>.</p>
<h3><code>crypto.checkPrimeSync(candidate[, options])</code></h3>
<ul>
<li><code>candidate</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}
A possible prime encoded as a sequence of big endian octets of arbitrary
length.</li>
<li><code>options</code> {Object}
<ul>
<li><code>checks</code> {number} The number of Miller-Rabin probabilistic primality
iterations to perform. When the value is <code>0</code> (zero), a number of checks
is used that yields a false positive rate of at most 2&lt;sup&gt;-64&lt;/sup&gt; for
random input. Care must be used when selecting a number of checks. Refer
to the OpenSSL documentation for the <a href="https://www.openssl.org/docs/man1.1.1/man3/BN_is_prime_ex.html"><code>BN_is_prime_ex</code></a> function <code>nchecks</code>
options for more details. <strong>Default:</strong> <code>0</code></li>
</ul>
</li>
<li>Returns: {boolean} <code>true</code> if the candidate is a prime with an error
probability less than <code>0.25 ** options.checks</code>.</li>
</ul>
<p>Checks the primality of the <code>candidate</code>.</p>
<h3><code>crypto.constants</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object containing commonly used constants for crypto and security related
operations. The specific constants currently defined are described in
<a href="#crypto-constants">Crypto constants</a>.</p>
<h3><code>crypto.createCipheriv(algorithm, key, iv[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
<li><code>iv</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|null}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a> with these additional
properties:
<ul>
<li><code>authTagLength</code> {number} The authentication tag length in bytes. Its
requirements and default depend on the authenticated cipher, as described
below.</li>
<li><code>ctsMode</code> {string} The <a href="#cbc-cts-mode">CBC-CTS mode</a> variant. One of <code>'CS1'</code>, <code>'CS2'</code>,
or <code>'CS3'</code>. The values are case-sensitive. <strong>Default:</strong> <code>'CS1'</code>.</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> to use when <code>key</code> is a string. This
option does not affect a string <code>iv</code>, which is always interpreted as UTF-8.
<strong>Default:</strong> <code>'utf8'</code>.</li>
<li><code>xtsStandard</code> {string} The standard used by <code>sm4-xts</code>. One of <code>'GB'</code> or
<code>'IEEE'</code>. The values are case-sensitive. <strong>Default:</strong> <code>'GB'</code>.</li>
</ul>
</li>
<li>Returns: {Cipheriv}</li>
</ul>
<p>Creates and returns a <code>Cipheriv</code> object, with the given <code>algorithm</code>, <code>key</code> and
initialization vector (<code>iv</code>).</p>
<p>The <code>options</code> argument controls cipher-specific settings and stream behavior.
It is optional except when a cipher in CCM or OCB mode (e.g. <code>'aes-128-ccm'</code>)
is used. In that case, the <code>authTagLength</code> option is required and specifies the
length of the authentication tag in bytes, see <a href="#ccm-mode">CCM mode</a>. In GCM mode, the
<code>authTagLength</code> option is not required but can be used to set the length of the
authentication tag that will be returned by <code>getAuthTag()</code> and defaults to 16
bytes.
For <code>SIV</code>, <code>GCM-SIV</code>, and <code>chacha20-poly1305</code>, the <code>authTagLength</code> option
defaults to 16 bytes. <code>SIV</code> and <code>GCM-SIV</code> only support 16-byte authentication
tags.</p>
<p>The <code>ctsMode</code> and <code>xtsStandard</code> options configure parameters exposed by OpenSSL
providers. They are available only with OpenSSL 3.0 or later and a provider
that supports the corresponding parameter. <code>ctsMode</code> applies only to CBC-CTS
ciphers, and <code>xtsStandard</code> applies only to <code>sm4-xts</code>. Supplying either option
for an available cipher implementation that does not support it throws an
<code>ERR_CRYPTO_UNSUPPORTED_OPERATION</code> error. See <a href="#cbc-cts-mode">CBC-CTS mode</a> and <a href="#xts-mode">XTS mode</a>
for details.</p>
<p>The available algorithms depend on OpenSSL. <a href="#cryptogetciphers"><code>crypto.getCiphers()</code></a> lists the
algorithms exposed by Node.js. On recent OpenSSL releases,
<code>openssl list -cipher-algorithms</code> displays the algorithms available to OpenSSL,
which can include algorithms that Node.js does not expose.</p>
<p>The <code>key</code> is the raw key used by the <code>algorithm</code> and <code>iv</code> is an
<a href="https://en.wikipedia.org/wiki/Initialization_vector">initialization vector</a>. Each may be a string, <code>ArrayBuffer</code>, <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>. A string <code>key</code> is decoded using <code>options.encoding</code>,
which defaults to <code>'utf8'</code>; a string <code>iv</code> is always decoded as UTF-8. The <code>key</code>
may optionally be a <a href="#class-keyobject"><code>KeyObject</code></a> of type <code>secret</code>. If the cipher does not
need an initialization vector, <code>iv</code> may be <code>null</code>.</p>
<p>When passing strings for <code>key</code> or <code>iv</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>Initialization vector requirements depend on the algorithm. For some
algorithms, an IV must be unpredictable and unique; for others, uniqueness
alone is sufficient, a fixed value is required, or no IV is used. Follow the
requirements for the selected algorithm. IVs typically do not have to be secret
and can be transmitted with the ciphertext.</p>
<h3><code>crypto.createDecipheriv(algorithm, key, iv[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
<li><code>iv</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|null}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a> with these additional
properties:
<ul>
<li><code>authTagLength</code> {number} The authentication tag length in bytes. Its
requirements and default depend on the authenticated cipher, as described
below.</li>
<li><code>ctsMode</code> {string} The <a href="#cbc-cts-mode">CBC-CTS mode</a> variant. One of <code>'CS1'</code>, <code>'CS2'</code>,
or <code>'CS3'</code>. The values are case-sensitive. <strong>Default:</strong> <code>'CS1'</code>.</li>
<li><code>encoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> to use when <code>key</code> is a string. This
option does not affect a string <code>iv</code>, which is always interpreted as UTF-8.
<strong>Default:</strong> <code>'utf8'</code>.</li>
<li><code>xtsStandard</code> {string} The standard used by <code>sm4-xts</code>. One of <code>'GB'</code> or
<code>'IEEE'</code>. The values are case-sensitive. <strong>Default:</strong> <code>'GB'</code>.</li>
</ul>
</li>
<li>Returns: {Decipheriv}</li>
</ul>
<p>Creates and returns a <code>Decipheriv</code> object that uses the given <code>algorithm</code>, <code>key</code>
and initialization vector (<code>iv</code>).</p>
<p>The <code>options</code> argument controls cipher-specific settings and stream behavior.
It is optional except when a cipher in CCM or OCB mode (e.g. <code>'aes-128-ccm'</code>)
is used. In that case, the <code>authTagLength</code> option is required and specifies the
length of the authentication tag in bytes, see <a href="#ccm-mode">CCM mode</a>. For GCM and
<code>chacha20-poly1305</code>, the <code>authTagLength</code> option defaults to 16 bytes and must be
set if a different length is used. For <code>SIV</code> and <code>GCM-SIV</code>, the <code>authTagLength</code>
option defaults to 16 bytes and only 16-byte authentication tags are supported.</p>
<p>The <code>ctsMode</code> and <code>xtsStandard</code> options configure parameters exposed by OpenSSL
providers. They are available only with OpenSSL 3.0 or later and a provider
that supports the corresponding parameter. <code>ctsMode</code> applies only to CBC-CTS
ciphers, and <code>xtsStandard</code> applies only to <code>sm4-xts</code>. Supplying either option
for an available cipher implementation that does not support it throws an
<code>ERR_CRYPTO_UNSUPPORTED_OPERATION</code> error. See <a href="#cbc-cts-mode">CBC-CTS mode</a> and <a href="#xts-mode">XTS mode</a>
for details.</p>
<p>The available algorithms depend on OpenSSL. <a href="#cryptogetciphers"><code>crypto.getCiphers()</code></a> lists the
algorithms exposed by Node.js. On recent OpenSSL releases,
<code>openssl list -cipher-algorithms</code> displays the algorithms available to OpenSSL,
which can include algorithms that Node.js does not expose.</p>
<p>The <code>key</code> is the raw key used by the <code>algorithm</code> and <code>iv</code> is an
<a href="https://en.wikipedia.org/wiki/Initialization_vector">initialization vector</a>. Each may be a string, <code>ArrayBuffer</code>, <a href="buffer.md"><code>Buffer</code></a>,
<code>TypedArray</code>, or <code>DataView</code>. A string <code>key</code> is decoded using <code>options.encoding</code>,
which defaults to <code>'utf8'</code>; a string <code>iv</code> is always decoded as UTF-8. The <code>key</code>
may optionally be a <a href="#class-keyobject"><code>KeyObject</code></a> of type <code>secret</code>. If the cipher does not
need an initialization vector, <code>iv</code> may be <code>null</code>.</p>
<p>When passing strings for <code>key</code> or <code>iv</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>Initialization vector requirements depend on the algorithm. For some
algorithms, an IV must be unpredictable and unique; for others, uniqueness
alone is sufficient, a fixed value is required, or no IV is used. Follow the
requirements for the selected algorithm. IVs typically do not have to be secret
and can be transmitted with the ciphertext.</p>
<h3><code>crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])</code></h3>
<ul>
<li><code>prime</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>primeEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>prime</code> string.</li>
<li><code>generator</code> {number|string|ArrayBuffer|Buffer|TypedArray|DataView}
<strong>Default:</strong> <code>2</code></li>
<li><code>generatorEncoding</code> {string} The <a href="buffer.md#buffers-and-character-encodings">encoding</a> of the <code>generator</code> string.</li>
<li>Returns: {DiffieHellman}</li>
</ul>
<p>Creates a <code>DiffieHellman</code> key exchange object using the supplied <code>prime</code> and an
optional specific <code>generator</code>.</p>
<p>The <code>generator</code> argument can be a number, string, or <a href="buffer.md"><code>Buffer</code></a>. If
<code>generator</code> is not specified, the value <code>2</code> is used.</p>
<p>If <code>primeEncoding</code> is specified, <code>prime</code> is expected to be a string; otherwise
a <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code> is expected.</p>
<p>If <code>generatorEncoding</code> is specified, <code>generator</code> is expected to be a string;
otherwise a number, <a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code> is expected.</p>
<h3><code>crypto.createDiffieHellman(primeLength[, generator])</code></h3>
<ul>
<li><code>primeLength</code> {number}</li>
<li><code>generator</code> {number} <strong>Default:</strong> <code>2</code></li>
<li>Returns: {DiffieHellman}</li>
</ul>
<p>Creates a <code>DiffieHellman</code> key exchange object and generates a prime of
<code>primeLength</code> bits using an optional specific numeric <code>generator</code>.
If <code>generator</code> is not specified, the value <code>2</code> is used.</p>
<h3><code>crypto.createDiffieHellmanGroup(name)</code></h3>
<ul>
<li><code>name</code> {string}</li>
<li>Returns: {DiffieHellmanGroup}</li>
</ul>
<p>An alias for <a href="#cryptogetdiffiehellmangroupname"><code>crypto.getDiffieHellman()</code></a></p>
<h3><code>crypto.createECDH(curveName)</code></h3>
<ul>
<li><code>curveName</code> {string}</li>
<li>Returns: {ECDH}</li>
</ul>
<p>Creates an Elliptic Curve Diffie-Hellman (<code>ECDH</code>) key exchange object using a
predefined curve specified by the <code>curveName</code> string. Use
<a href="#cryptogetcurves"><code>crypto.getCurves()</code></a> to obtain a list of available curve names. On recent
OpenSSL releases, <code>openssl ecparam -list_curves</code> will also display the name
and description of each available elliptic curve.</p>
<h3><code>crypto.createHash(algorithm[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a>
<ul>
<li><code>customization</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} For cSHAKE
hash functions, specifies the customization byte string. <strong>Default:</strong> an
empty byte string.</li>
<li><code>functionName</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} For cSHAKE
hash functions, specifies the NIST function-name byte string. <strong>Default:</strong>
an empty byte string.</li>
<li><code>outputLength</code> {number} For XOF hash functions, specifies the desired
output length in bytes.</li>
</ul>
</li>
<li>Returns: {Hash}</li>
</ul>
<p>Creates and returns a <code>Hash</code> object that can be used to generate hash digests
using the given <code>algorithm</code>. Optional <code>options</code> argument controls stream
behavior. For XOF hash functions such as <code>'shake256'</code>, the <code>outputLength</code> option
specifies the desired output length in bytes. It is required for XOF hash
functions without a default output length.</p>
<p>The <code>functionName</code> and <code>customization</code> options apply only to cSHAKE-128 and
cSHAKE-256. They are supported only when Node.js is built with OpenSSL 4.0 or
later and the selected provider supports the corresponding digest parameters.
Strings are encoded as UTF-8, and neither strings nor byte values may contain
NUL bytes. Both options default to an empty byte string. For OpenSSL's built-in
providers, <code>functionName</code> is case-sensitive and must be <code>''</code>, <code>'TupleHash'</code>,
<code>'ParallelHash'</code>, or <code>'KMAC'</code>. Other providers can impose different
restrictions. With both options empty, cSHAKE produces the same output as the
corresponding SHAKE function for the same output length. <code>cshake-128</code> and
<code>cshake-256</code> default to output lengths of 32 and 64 bytes, respectively.</p>
<p>When the data is small (&lt; 5MB) and readily available, <a href="#cryptohashalgorithm-data-options"><code>crypto.hash()</code></a> is usually faster.</p>
<p>The available algorithms depend on the version and configuration of OpenSSL on
the platform. Examples are <code>'sha256'</code> and <code>'sha512'</code>. Use
<a href="#cryptogethashes"><code>crypto.getHashes()</code></a> to obtain the list of hash algorithms available to the
Node.js process.</p>
<p>Example: generating the sha256 sum of a file</p>
<pre><code class="language-mjs">import {
  createReadStream,
} from 'node:fs';
import { argv } from 'node:process';
const {
  createHash,
} = await import('node:crypto');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
</code></pre>
<pre><code class="language-cjs">const {
  createReadStream,
} = require('node:fs');
const {
  createHash,
} = require('node:crypto');
const { argv } = require('node:process');

const filename = argv[2];

const hash = createHash('sha256');

const input = createReadStream(filename);
input.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
</code></pre>
<h3><code>crypto.createHmac(algorithm, key[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a>
<ul>
<li><code>encoding</code> {string} The string encoding to use when <code>key</code> is a string.</li>
</ul>
</li>
<li>Returns: {Hmac}</li>
</ul>
<p>Creates and returns an <code>Hmac</code> object that uses the given <code>algorithm</code> and <code>key</code>.
Optional <code>options</code> argument controls stream behavior.</p>
<p>The available algorithms depend on the version and configuration of OpenSSL on
the platform. Examples are <code>'sha256'</code> and <code>'sha512'</code>.
<a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the hashing APIs, but
HMAC imposes additional restrictions, so not every listed algorithm is
suitable.</p>
<p>The <code>key</code> is the HMAC key used to generate the cryptographic HMAC hash. If it is
a <a href="#class-keyobject"><code>KeyObject</code></a>, its type must be <code>secret</code>. If it is a string, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>. If it was
obtained from a cryptographically secure source of entropy, such as
<a href="#cryptorandombytessize-callback"><code>crypto.randomBytes()</code></a> or <a href="#cryptogeneratekeytype-options-callback"><code>crypto.generateKey()</code></a>, its length should not
exceed the block size of <code>algorithm</code> (e.g., 512 bits for SHA-256).</p>
<p>Example: generating the sha256 HMAC of a file</p>
<pre><code class="language-mjs">import {
  createReadStream,
} from 'node:fs';
import { argv } from 'node:process';
const {
  createHmac,
} = await import('node:crypto');

const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hmac.update(data);
  else {
    console.log(`${hmac.digest('hex')} ${filename}`);
  }
});
</code></pre>
<pre><code class="language-cjs">const {
  createReadStream,
} = require('node:fs');
const {
  createHmac,
} = require('node:crypto');
const { argv } = require('node:process');

const filename = argv[2];

const hmac = createHmac('sha256', 'a secret');

const input = createReadStream(filename);
input.on('readable', () =&gt; {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hmac.update(data);
  else {
    console.log(`${hmac.digest('hex')} ${filename}`);
  }
});
</code></pre>
<h3><code>crypto.createMac(algorithm, key[, options])</code></h3>
<blockquote>
<p>Stability: 1.2 - Release candidate</p>
</blockquote>
<ul>
<li><code>algorithm</code> {string} The name of the MAC algorithm.</li>
<li><code>key</code> {ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a>
<ul>
<li><code>digest</code> {string} The digest used by a MAC such as HMAC.</li>
<li><code>cipher</code> {string} The cipher used by a MAC such as CMAC or GMAC.</li>
<li><code>iv</code> {ArrayBuffer|Buffer|TypedArray|DataView} The initialization vector for
a MAC such as GMAC.</li>
<li><code>customization</code> {ArrayBuffer|Buffer|TypedArray|DataView} A customization
byte string for MACs that support it, such as KMAC.</li>
<li><code>salt</code> {ArrayBuffer|Buffer|TypedArray|DataView} A salt byte string for MACs
that support it, such as BLAKE2 MACs.</li>
<li><code>outputLength</code> {number} The requested provider output size in bytes. Must be
an unsigned 32-bit integer. Provider-specific restrictions also apply.</li>
</ul>
</li>
<li>Returns: {Mac}</li>
</ul>
<p><code>algorithm</code> must be a non-empty provider MAC name. The MAC-specific properties
listed above are extensions to the standard <a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a> and
are passed only when the selected provider implementation advertises the
corresponding parameter with the expected type. A supplied MAC-specific option
that the selected implementation does not support causes an error.</p>
<p>The following table summarizes the MAC-specific options accepted by MAC
implementations in OpenSSL's built-in providers. The <code>key</code> argument is required
for every MAC. The table lists only MAC-specific options; standard
<a href="stream.md#new-streamtransformoptions"><code>stream.transform</code> options</a> remain available for every family.</p>
<table>
<thead>
<tr>
<th>MAC family</th>
<th>Required options</th>
<th>Optional options</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>HMAC</td>
<td><code>digest</code></td>
<td>None</td>
<td></td>
</tr>
<tr>
<td>CMAC</td>
<td><code>cipher</code> using CBC mode</td>
<td>None</td>
<td></td>
</tr>
<tr>
<td>GMAC</td>
<td><code>cipher</code> using GCM mode, non-empty <code>iv</code></td>
<td>None</td>
<td>Requires a unique IV for every message authenticated with a given key.</td>
</tr>
<tr>
<td>KMAC</td>
<td>None</td>
<td><code>customization</code>, <code>outputLength</code></td>
<td></td>
</tr>
<tr>
<td>BLAKE2 MAC</td>
<td>None</td>
<td><code>customization</code>, <code>salt</code>, <code>outputLength</code></td>
<td></td>
</tr>
<tr>
<td>Poly1305</td>
<td>None</td>
<td>None</td>
<td>Each key must be used for only one message.</td>
</tr>
<tr>
<td>SipHash</td>
<td>None</td>
<td><code>outputLength</code></td>
<td></td>
</tr>
</tbody>
</table>
<p><code>outputLength</code> configures the output size of the provider MAC. It is never
implemented by computing a longer tag and truncating it. A value of <code>0</code> is
passed to the provider and is accepted only when that provider can initialize
and finalize the MAC with a zero-byte output. When <code>outputLength</code> is omitted,
the provider's default output size is used and must be nonzero.</p>
<p>The <code>key</code> must contain bytes or be a <a href="#class-keyobject"><code>KeyObject</code></a> of type <code>secret</code>. Key
length and other key requirements are determined by the selected provider
implementation.</p>
<p>Available algorithms and their accepted parameters depend on the OpenSSL
version, loaded providers, and active default property query. Use
<a href="#cryptogetmacs"><code>crypto.getMacs()</code></a> to list fetchable MAC names. A listed name can still
require options or a key with provider-specific properties.</p>
<h3><code>crypto.createPrivateKey(key)</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|URL}
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|Object|URL} The key
material, either in PEM, DER, JWK, or raw format, or a {URL} referencing an
object for an OpenSSL STORE loader.</li>
<li><code>format</code> {string} Must be <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, <code>'raw-private'</code>,
or <code>'raw-seed'</code>. <strong>Default:</strong> <code>'pem'</code>.</li>
<li><code>type</code> {string} Must be <code>'pkcs1'</code>, <code>'pkcs8'</code> or <code>'sec1'</code>. This option is
required only if the <code>format</code> is <code>'der'</code> and ignored otherwise.</li>
<li><code>passphrase</code> {string | Buffer} The passphrase to use for decryption. When
<code>key</code> is a {URL}, this is the optional PIN/passphrase forwarded to the
STORE loader.</li>
<li><code>properties</code> {string} The optional OpenSSL property query used when
fetching the STORE loader for a {URL} key.</li>
<li><code>encoding</code> {string} The string encoding to use when <code>key</code> is a string.</li>
<li><code>asymmetricKeyType</code> {string} Required when <code>format</code> is <code>'raw-private'</code>
or <code>'raw-seed'</code> and ignored otherwise.
Must be a <a href="#asymmetric-key-types">supported key type</a>.</li>
<li><code>namedCurve</code> {string} Name of the curve to use. Required when
<code>asymmetricKeyType</code> is <code>'ec'</code> and ignored otherwise.</li>
</ul>
</li>
<li>Returns: {KeyObject}</li>
</ul>
<p>Creates and returns a new key object containing a private key. If <code>key</code> is a
string or <code>Buffer</code>, <code>format</code> is assumed to be <code>'pem'</code>; otherwise, <code>key</code>
must be an object with the properties described above.</p>
<p>If the private key is encrypted, a <code>passphrase</code> must be specified. The length
of the passphrase is limited to 1024 bytes.</p>
<h4>Private keys from OpenSSL STORE loaders</h4>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>If <code>key</code> is a {URL} (or an object whose <code>key</code> is a {URL}), the private key is
loaded through an OpenSSL STORE loader. The URL is passed to OpenSSL as a URI,
for example a <code>file:</code> URI or a provider-backed scheme such as <code>pkcs11:</code>. When
the <a href="permissions.md#permission-model">Permission Model</a> is enabled, <a href="cli.md#--allow-openssl-store"><code>--allow-openssl-store</code></a> is required.</p>
<blockquote>
<p><strong>Warning</strong>: A URI scheme does not pin an OpenSSL STORE loader or prove where
the returned key came from. Node.js forwards the URI to OpenSSL, which chooses
loaders according to its version and configuration. For example, OpenSSL may
offer an opaque URI such as <code>pkcs11:object=...</code> (one without <code>//</code> after the
scheme) to its <code>file</code> loader before trying the <code>pkcs11</code> loader. If the complete
URI is a valid local path and that file exists, it may be loaded instead.
Node.js does not verify which loader supplied the key. Do not rely on a
provider-specific URI scheme as proof that a key came from that provider or
from a hardware device.</p>
</blockquote>
<p>Configured OpenSSL STORE loaders have broad authority and may access files,
devices, tokens, or the network. Access performed by a loader is not constrained
by the <code>fs.read</code>, <code>fs.write</code>, or <code>net</code> permission scopes.</p>
<p>When a {URL} is used, <code>format</code>, <code>type</code>, <code>asymmetricKeyType</code>, and <code>namedCurve</code>
are ignored even when those options would otherwise depend on each other, such
as <code>type</code> with <code>format: 'der'</code> or <code>namedCurve</code> with
<code>asymmetricKeyType: 'ec'</code>. The input is passed to the STORE loader as a URI,
not handled as PEM, DER, JWK, or raw key material. <code>passphrase</code> is still used as
the optional PIN/passphrase passed to the loader, and <code>encoding</code> applies if that
<code>passphrase</code> is a string.</p>
<p>Use <code>passphrase</code> instead of embedding credentials in the URI passed to the
STORE loader. Node.js redacts the URI from its own permission-denial resource
and diagnostics. Errors reported by OpenSSL or a provider after loading begins
may include the URI.</p>
<p>When <code>properties</code> is specified with a {URL} key, it is passed to OpenSSL as the
property query for selecting the STORE loader. It is not appended to the URL and
is distinct from provider-specific URI parameters.</p>
<h3><code>crypto.createPublicKey(key)</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView}
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|Object} The key
material, either in PEM, DER, JWK, or raw format.</li>
<li><code>format</code> {string} Must be <code>'pem'</code>, <code>'der'</code>, <code>'jwk'</code>, or <code>'raw-public'</code>.
<strong>Default:</strong> <code>'pem'</code>.</li>
<li><code>type</code> {string} Must be <code>'pkcs1'</code> or <code>'spki'</code>. This option is
required only if the <code>format</code> is <code>'der'</code> and ignored otherwise.</li>
<li><code>encoding</code> {string} The string encoding to use when <code>key</code> is a string.</li>
<li><code>asymmetricKeyType</code> {string} Required when <code>format</code> is <code>'raw-public'</code>
and ignored otherwise.
Must be a <a href="#asymmetric-key-types">supported key type</a>.</li>
<li><code>namedCurve</code> {string} Name of the curve to use. Required when
<code>asymmetricKeyType</code> is <code>'ec'</code> and ignored otherwise.</li>
</ul>
</li>
<li>Returns: {KeyObject}</li>
</ul>
<p>Creates and returns a new key object containing a public key. If <code>key</code> is a
string or <code>Buffer</code>, <code>format</code> is assumed to be <code>'pem'</code>; if <code>key</code> is a <code>KeyObject</code>
with type <code>'private'</code>, the public key is derived from the given private key;
otherwise, <code>key</code> must be an object with the properties described above.</p>
<p>If the format is <code>'pem'</code>, the <code>'key'</code> may also be an X.509 certificate.</p>
<p>Because public keys can be derived from private keys, a private key may be
passed instead of a public key. In that case, this function behaves as if
<a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a> had been called, except that the type of the
returned <code>KeyObject</code> will be <code>'public'</code> and that the private key cannot be
extracted from the returned <code>KeyObject</code>. Similarly, if a <code>KeyObject</code> with type
<code>'private'</code> is given, a new <code>KeyObject</code> with type <code>'public'</code> will be returned
and it will be impossible to extract the private key from the returned object.</p>
<p>A store-backed private key can be used as a public key by first loading it with
<a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>; a {URL} cannot be passed to
<code>crypto.createPublicKey()</code> directly.</p>
<h3><code>crypto.createSecretKey(key[, encoding])</code></h3>
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>encoding</code> {string} The string encoding when <code>key</code> is a string.</li>
<li>Returns: {KeyObject}</li>
</ul>
<p>Creates and returns a new key object containing a secret key for symmetric
encryption or <code>Hmac</code>.</p>
<h3><code>crypto.createSign(algorithm[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamwritableoptions"><code>stream.Writable</code> options</a></li>
<li>Returns: {Sign}</li>
</ul>
<p>Creates and returns a <code>Sign</code> object that uses the given <code>algorithm</code>. Use
<a href="#cryptogethashes"><code>crypto.getHashes()</code></a> to obtain the names available to the hashing APIs. The
key type and signature scheme can impose additional restrictions on which
digests can be used. Optional <code>options</code> argument controls the
<code>stream.Writable</code> behavior.</p>
<p>In some cases, a <code>Sign</code> instance can be created using the name of a signature
algorithm, such as <code>'RSA-SHA256'</code>, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as <code>'ecdsa-with-SHA256'</code>, so it is best to always use digest
algorithm names.</p>
<h3><code>crypto.createVerify(algorithm[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string}</li>
<li><code>options</code> {Object} <a href="stream.md#new-streamwritableoptions"><code>stream.Writable</code> options</a></li>
<li>Returns: {Verify}</li>
</ul>
<p>Creates and returns a <code>Verify</code> object that uses the given algorithm.
Use <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> to obtain the names available to the hashing APIs.
The key type and signature scheme can impose additional restrictions on which
digests can be used. Optional <code>options</code> argument controls the
<code>stream.Writable</code> behavior.</p>
<p>In some cases, a <code>Verify</code> instance can be created using the name of a signature
algorithm, such as <code>'RSA-SHA256'</code>, instead of a digest algorithm. This will use
the corresponding digest algorithm. This does not work for all signature
algorithms, such as <code>'ecdsa-with-SHA256'</code>, so it is best to always use digest
algorithm names.</p>
<h3><code>crypto.decapsulate(key, ciphertext[, callback])</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL} Private Key</li>
<li><code>ciphertext</code> {ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>sharedKey</code> {Buffer}</li>
</ul>
</li>
<li>Returns: {Buffer} if the <code>callback</code> function is not provided.</li>
</ul>
<p>Key decapsulation using a KEM algorithm with a private key.</p>
<p>Supported key types and their KEM algorithms are:</p>
<ul>
<li><code>'rsa'</code>[^openssl30] RSA Secret Value Encapsulation</li>
<li><code>'ec'</code>[^openssl32] DHKEM(P-256, HKDF-SHA256), DHKEM(P-384, HKDF-SHA256), DHKEM(P-521, HKDF-SHA256)</li>
<li><code>'x25519'</code>[^openssl32] DHKEM(X25519, HKDF-SHA256)</li>
<li><code>'x448'</code>[^openssl32] DHKEM(X448, HKDF-SHA512)</li>
<li><code>'ml-kem-512'</code>[^openssl35] ML-KEM</li>
<li><code>'ml-kem-768'</code>[^openssl35] ML-KEM</li>
<li><code>'ml-kem-1024'</code>[^openssl35] ML-KEM</li>
</ul>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if <code>key</code> had been
passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>.</p>
<p>If the <code>callback</code> function is provided this function uses libuv's threadpool.</p>
<h3><code>crypto.diffieHellman(options[, callback])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>privateKey</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}</li>
<li><code>publicKey</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>secret</code> {Buffer}</li>
</ul>
</li>
<li>Returns: {Buffer} if the <code>callback</code> function is not provided.</li>
</ul>
<p>Computes the Diffie-Hellman shared secret based on a <code>privateKey</code> and a <code>publicKey</code>.
Both keys must represent the same asymmetric key type and must support either the DH or
ECDH operation.</p>
<p>If <code>options.privateKey</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>options.privateKey</code> had been passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>.</p>
<p>If <code>options.publicKey</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>options.publicKey</code> had been passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>.</p>
<p>If the <code>callback</code> function is provided this function uses libuv's threadpool.</p>
<h3><code>crypto.encapsulate(key[, callback])</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject} Public Key</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>result</code> {Object}
<ul>
<li><code>sharedKey</code> {Buffer}</li>
<li><code>ciphertext</code> {Buffer}</li>
</ul>
</li>
</ul>
</li>
<li>Returns: {Object} if the <code>callback</code> function is not provided.
<ul>
<li><code>sharedKey</code> {Buffer}</li>
<li><code>ciphertext</code> {Buffer}</li>
</ul>
</li>
</ul>
<p>Key encapsulation using a KEM algorithm with a public key.</p>
<p>Supported key types and their KEM algorithms are:</p>
<ul>
<li><code>'rsa'</code>[^openssl30] RSA Secret Value Encapsulation</li>
<li><code>'ec'</code>[^openssl32] DHKEM(P-256, HKDF-SHA256), DHKEM(P-384, HKDF-SHA256), DHKEM(P-521, HKDF-SHA256)</li>
<li><code>'x25519'</code>[^openssl32] DHKEM(X25519, HKDF-SHA256)</li>
<li><code>'x448'</code>[^openssl32] DHKEM(X448, HKDF-SHA512)</li>
<li><code>'ml-kem-512'</code>[^openssl35] ML-KEM</li>
<li><code>'ml-kem-768'</code>[^openssl35] ML-KEM</li>
<li><code>'ml-kem-1024'</code>[^openssl35] ML-KEM</li>
</ul>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if <code>key</code> had been
passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>.</p>
<p>If the <code>callback</code> function is provided this function uses libuv's threadpool.</p>
<h3><code>crypto.fips</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>Deprecated property for checking and controlling <a href="#fips-mode">FIPS mode</a>. Use
<a href="#cryptogetfips"><code>crypto.getFips()</code></a> and <a href="#cryptosetfipsbool"><code>crypto.setFips()</code></a> instead.</p>
<h3><code>crypto.generateKey(type, options, callback)</code></h3>
<ul>
<li><code>type</code> {string} The intended use of the generated secret key. Currently
accepted values are <code>'hmac'</code> and <code>'aes'</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>length</code> {number} The bit length of the key to generate. This must be a
value greater than 0.
<ul>
<li>If <code>type</code> is <code>'hmac'</code>, the minimum is 8, and the maximum length is
2&lt;sup&gt;31&lt;/sup&gt;-1. If the value is not a multiple of 8, the generated
key will be truncated to <code>Math.floor(length / 8)</code>.</li>
<li>If <code>type</code> is <code>'aes'</code>, the length must be one of <code>128</code>, <code>192</code>, or <code>256</code>.</li>
</ul>
</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>key</code> {KeyObject}</li>
</ul>
</li>
</ul>
<p>Asynchronously generates a new random secret key of the given <code>length</code>. The
<code>type</code> will determine which validations will be performed on the <code>length</code>.</p>
<pre><code class="language-mjs">const {
  generateKey,
} = await import('node:crypto');

generateKey('hmac', { length: 512 }, (err, key) =&gt; {
  if (err) throw err;
  console.log(key.export().toString('hex'));  // 46e..........620
});
</code></pre>
<pre><code class="language-cjs">const {
  generateKey,
} = require('node:crypto');

generateKey('hmac', { length: 512 }, (err, key) =&gt; {
  if (err) throw err;
  console.log(key.export().toString('hex'));  // 46e..........620
});
</code></pre>
<p>The size of a generated HMAC key should not exceed the block size of the
underlying hash function. See <a href="#cryptocreatehmacalgorithm-key-options"><code>crypto.createHmac()</code></a> for more information.</p>
<h3><code>crypto.generateKeyPair(type, options, callback)</code></h3>
<ul>
<li><code>type</code> {string} The asymmetric key type to generate. See the
supported <a href="#asymmetric-key-types">asymmetric key types</a>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>modulusLength</code> {number} Key size in bits (RSA, DSA).</li>
<li><code>publicExponent</code> {number} Public exponent (RSA). <strong>Default:</strong> <code>0x10001</code>.</li>
<li><code>hashAlgorithm</code> {string} Name of the message digest (RSA-PSS).</li>
<li><code>mgf1HashAlgorithm</code> {string} Name of the message digest used by
MGF1 (RSA-PSS).</li>
<li><code>saltLength</code> {number} Minimal salt length in bytes (RSA-PSS).</li>
<li><code>divisorLength</code> {number} Size of <code>q</code> in bits (DSA).</li>
<li><code>namedCurve</code> {string} Name of the curve to use (EC).</li>
<li><code>prime</code> {Buffer} The prime parameter (DH).</li>
<li><code>primeLength</code> {number} Prime length in bits (DH).</li>
<li><code>generator</code> {number} Custom generator (DH). <strong>Default:</strong> <code>2</code>.</li>
<li><code>groupName</code> {string} Diffie-Hellman group name (DH). See
<a href="#cryptogetdiffiehellmangroupname"><code>crypto.getDiffieHellman()</code></a>.</li>
<li><code>paramEncoding</code> {string} Must be <code>'named'</code> or <code>'explicit'</code> (EC).
<strong>Default:</strong> <code>'named'</code>.</li>
<li><code>publicKeyEncoding</code> {Object} See <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a>.</li>
<li><code>privateKeyEncoding</code> {Object} See <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a>.</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>publicKey</code> {string | Buffer | KeyObject}</li>
<li><code>privateKey</code> {string | Buffer | KeyObject}</li>
</ul>
</li>
</ul>
<p>Generates a new asymmetric key pair of the given <code>type</code>. See the
supported <a href="#asymmetric-key-types">asymmetric key types</a>.</p>
<p>For RSA-PSS keys, <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the
hashing APIs, but not every listed digest can be encoded in RSA-PSS parameters
or is supported by the active RSA implementation.</p>
<p>If a <code>publicKeyEncoding</code> or <code>privateKeyEncoding</code> was specified, this function
behaves as if <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a> had been called on its result. Otherwise,
the respective part of the key is returned as a <a href="#class-keyobject"><code>KeyObject</code></a>.</p>
<p>It is recommended to encode public keys as <code>'spki'</code> and private keys as
<code>'pkcs8'</code> with encryption for long-term storage:</p>
<pre><code class="language-mjs">const {
  generateKeyPair,
} = await import('node:crypto');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret',
  },
}, (err, publicKey, privateKey) =&gt; {
  // Handle errors and use the generated key pair.
});
</code></pre>
<pre><code class="language-cjs">const {
  generateKeyPair,
} = require('node:crypto');

generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret',
  },
}, (err, publicKey, privateKey) =&gt; {
  // Handle errors and use the generated key pair.
});
</code></pre>
<p>On completion, <code>callback</code> will be called with <code>err</code> set to <code>undefined</code> and
<code>publicKey</code> / <code>privateKey</code> representing the generated key pair.</p>
<p>If this method is invoked as its <a href="util.md#utilpromisifyoriginal"><code>util.promisify()</code></a>ed version, it returns
a <code>Promise</code> for an <code>Object</code> with <code>publicKey</code> and <code>privateKey</code> properties.</p>
<h3><code>crypto.generateKeyPairSync(type, options)</code></h3>
<ul>
<li><code>type</code> {string} The asymmetric key type to generate. See the
supported <a href="#asymmetric-key-types">asymmetric key types</a>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>modulusLength</code> {number} Key size in bits (RSA, DSA).</li>
<li><code>publicExponent</code> {number} Public exponent (RSA). <strong>Default:</strong> <code>0x10001</code>.</li>
<li><code>hashAlgorithm</code> {string} Name of the message digest (RSA-PSS).</li>
<li><code>mgf1HashAlgorithm</code> {string} Name of the message digest used by
MGF1 (RSA-PSS).</li>
<li><code>saltLength</code> {number} Minimal salt length in bytes (RSA-PSS).</li>
<li><code>divisorLength</code> {number} Size of <code>q</code> in bits (DSA).</li>
<li><code>namedCurve</code> {string} Name of the curve to use (EC).</li>
<li><code>prime</code> {Buffer} The prime parameter (DH).</li>
<li><code>primeLength</code> {number} Prime length in bits (DH).</li>
<li><code>generator</code> {number} Custom generator (DH). <strong>Default:</strong> <code>2</code>.</li>
<li><code>groupName</code> {string} Diffie-Hellman group name (DH). See
<a href="#cryptogetdiffiehellmangroupname"><code>crypto.getDiffieHellman()</code></a>.</li>
<li><code>paramEncoding</code> {string} Must be <code>'named'</code> or <code>'explicit'</code> (EC).
<strong>Default:</strong> <code>'named'</code>.</li>
<li><code>publicKeyEncoding</code> {Object} See <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a>.</li>
<li><code>privateKeyEncoding</code> {Object} See <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a>.</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>publicKey</code> {string | Buffer | KeyObject}</li>
<li><code>privateKey</code> {string | Buffer | KeyObject}</li>
</ul>
</li>
</ul>
<p>Generates a new asymmetric key pair of the given <code>type</code>. See the
supported <a href="#asymmetric-key-types">asymmetric key types</a>.</p>
<p>For RSA-PSS keys, <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the
hashing APIs, but not every listed digest can be encoded in RSA-PSS parameters
or is supported by the active RSA implementation.</p>
<p>If a <code>publicKeyEncoding</code> or <code>privateKeyEncoding</code> was specified, this function
behaves as if <a href="#keyobjectexportoptions"><code>keyObject.export()</code></a> had been called on its result. Otherwise,
the respective part of the key is returned as a <a href="#class-keyobject"><code>KeyObject</code></a>.</p>
<p>When encoding public keys, it is recommended to use <code>'spki'</code>. When encoding
private keys, it is recommended to use <code>'pkcs8'</code> with a strong passphrase,
and to keep the passphrase confidential.</p>
<pre><code class="language-mjs">const {
  generateKeyPairSync,
} = await import('node:crypto');

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret',
  },
});
</code></pre>
<pre><code class="language-cjs">const {
  generateKeyPairSync,
} = require('node:crypto');

const {
  publicKey,
  privateKey,
} = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret',
  },
});
</code></pre>
<p>The return value <code>{ publicKey, privateKey }</code> represents the generated key pair.
When PEM encoding was selected, the respective key will be a string, otherwise
it will be a buffer containing the data encoded as DER.</p>
<h3><code>crypto.generateKeySync(type, options)</code></h3>
<ul>
<li><code>type</code> {string} The intended use of the generated secret key. Currently
accepted values are <code>'hmac'</code> and <code>'aes'</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>length</code> {number} The bit length of the key to generate.
<ul>
<li>If <code>type</code> is <code>'hmac'</code>, the minimum is 8, and the maximum length is
2&lt;sup&gt;31&lt;/sup&gt;-1. If the value is not a multiple of 8, the generated
key will be truncated to <code>Math.floor(length / 8)</code>.</li>
<li>If <code>type</code> is <code>'aes'</code>, the length must be one of <code>128</code>, <code>192</code>, or <code>256</code>.</li>
</ul>
</li>
</ul>
</li>
<li>Returns: {KeyObject}</li>
</ul>
<p>Synchronously generates a new random secret key of the given <code>length</code>. The
<code>type</code> will determine which validations will be performed on the <code>length</code>.</p>
<pre><code class="language-mjs">const {
  generateKeySync,
} = await import('node:crypto');

const key = generateKeySync('hmac', { length: 512 });
console.log(key.export().toString('hex'));  // e89..........41e
</code></pre>
<pre><code class="language-cjs">const {
  generateKeySync,
} = require('node:crypto');

const key = generateKeySync('hmac', { length: 512 });
console.log(key.export().toString('hex'));  // e89..........41e
</code></pre>
<p>The size of a generated HMAC key should not exceed the block size of the
underlying hash function. See <a href="#cryptocreatehmacalgorithm-key-options"><code>crypto.createHmac()</code></a> for more information.</p>
<h3><code>crypto.generatePrime(size[, options], callback)</code></h3>
<ul>
<li><code>size</code> {number} The size (in bits) of the prime to generate.</li>
<li><code>options</code> {Object}
<ul>
<li><code>add</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}</li>
<li><code>rem</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}</li>
<li><code>safe</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>bigint</code> {boolean} When <code>true</code>, the generated prime is returned
as a <code>bigint</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>prime</code> {ArrayBuffer|bigint}</li>
</ul>
</li>
</ul>
<p>Generates a pseudorandom prime of <code>size</code> bits.</p>
<p>If <code>options.safe</code> is <code>true</code>, the prime will be a safe prime -- that is,
<code>(prime - 1) / 2</code> will also be a prime.</p>
<p>The <code>options.add</code> and <code>options.rem</code> parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:</p>
<ul>
<li>If <code>options.add</code> and <code>options.rem</code> are both set, the prime will satisfy the
condition that <code>prime % add = rem</code>.</li>
<li>If only <code>options.add</code> is set and <code>options.safe</code> is not <code>true</code>, the prime will
satisfy the condition that <code>prime % add = 1</code>.</li>
<li>If only <code>options.add</code> is set and <code>options.safe</code> is set to <code>true</code>, the prime
will instead satisfy the condition that <code>prime % add = 3</code>. This is necessary
because <code>prime % add = 1</code> for <code>options.add &gt; 2</code> would contradict the condition
enforced by <code>options.safe</code>.</li>
<li><code>options.rem</code> is ignored if <code>options.add</code> is not given.</li>
</ul>
<p>Both <code>options.add</code> and <code>options.rem</code> must be encoded as big-endian sequences
if given as an <code>ArrayBuffer</code>, <code>SharedArrayBuffer</code>, <code>TypedArray</code>, <code>Buffer</code>, or
<code>DataView</code>.</p>
<p>By default, the prime is encoded as a big-endian sequence of octets
in an {ArrayBuffer}. If the <code>bigint</code> option is <code>true</code>, then a {bigint}
is provided.</p>
<p>The <code>size</code> of the prime will have a direct impact on how long it takes to
generate the prime. The larger the size, the longer it will take. Because
we use OpenSSL's <code>BN_generate_prime_ex</code> function, which provides only
minimal control over our ability to interrupt the generation process,
it is not recommended to generate overly large primes, as doing so may make
the process unresponsive.</p>
<h3><code>crypto.generatePrimeSync(size[, options])</code></h3>
<ul>
<li><code>size</code> {number} The size (in bits) of the prime to generate.</li>
<li><code>options</code> {Object}
<ul>
<li><code>add</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}</li>
<li><code>rem</code> {ArrayBuffer|SharedArrayBuffer|TypedArray|Buffer|DataView|bigint}</li>
<li><code>safe</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>bigint</code> {boolean} When <code>true</code>, the generated prime is returned
as a <code>bigint</code>.</li>
</ul>
</li>
<li>Returns: {ArrayBuffer|bigint}</li>
</ul>
<p>Generates a pseudorandom prime of <code>size</code> bits.</p>
<p>If <code>options.safe</code> is <code>true</code>, the prime will be a safe prime -- that is,
<code>(prime - 1) / 2</code> will also be a prime.</p>
<p>The <code>options.add</code> and <code>options.rem</code> parameters can be used to enforce additional
requirements, e.g., for Diffie-Hellman:</p>
<ul>
<li>If <code>options.add</code> and <code>options.rem</code> are both set, the prime will satisfy the
condition that <code>prime % add = rem</code>.</li>
<li>If only <code>options.add</code> is set and <code>options.safe</code> is not <code>true</code>, the prime will
satisfy the condition that <code>prime % add = 1</code>.</li>
<li>If only <code>options.add</code> is set and <code>options.safe</code> is set to <code>true</code>, the prime
will instead satisfy the condition that <code>prime % add = 3</code>. This is necessary
because <code>prime % add = 1</code> for <code>options.add &gt; 2</code> would contradict the condition
enforced by <code>options.safe</code>.</li>
<li><code>options.rem</code> is ignored if <code>options.add</code> is not given.</li>
</ul>
<p>Both <code>options.add</code> and <code>options.rem</code> must be encoded as big-endian sequences
if given as an <code>ArrayBuffer</code>, <code>SharedArrayBuffer</code>, <code>TypedArray</code>, <code>Buffer</code>, or
<code>DataView</code>.</p>
<p>By default, the prime is encoded as a big-endian sequence of octets
in an {ArrayBuffer}. If the <code>bigint</code> option is <code>true</code>, then a {bigint}
is provided.</p>
<p>The <code>size</code> of the prime will have a direct impact on how long it takes to
generate the prime. The larger the size, the longer it will take. Because
we use OpenSSL's <code>BN_generate_prime_ex</code> function, which provides only
minimal control over our ability to interrupt the generation process,
it is not recommended to generate overly large primes, as doing so may make
the process unresponsive.</p>
<h3><code>crypto.getCipherInfo(nameOrNid[, options])</code></h3>
<ul>
<li><code>nameOrNid</code> {string|number} The name or nid of the cipher to query.</li>
<li><code>options</code> {Object}
<ul>
<li><code>keyLength</code> {number} A test key length.</li>
<li><code>ivLength</code> {number} A test IV length.</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>name</code> {string} The name of the cipher</li>
<li><code>nid</code> {number|undefined} The nid of the cipher. This property is <code>undefined</code> if the
cipher has no OpenSSL nid.</li>
<li><code>blockSize</code> {number|undefined} The block size of the cipher in bytes. This property
is <code>undefined</code> when <code>mode</code> is <code>'stream'</code>.</li>
<li><code>ivLength</code> {number|undefined} The expected or default initialization vector length in
bytes. This property is <code>undefined</code> if the cipher does not use an initialization
vector.</li>
<li><code>keyLength</code> {number} The expected or default key length in bytes.</li>
<li><code>mode</code> {string} The cipher mode. One of <code>'cbc'</code>, <code>'ccm'</code>, <code>'cfb'</code>, <code>'ctr'</code>,
<code>'ecb'</code>, <code>'gcm'</code>, <code>'gcm-siv'</code>, <code>'ocb'</code>, <code>'ofb'</code>, <code>'siv'</code>, <code>'stream'</code>,
<code>'wrap'</code>, <code>'xts'</code>.</li>
</ul>
</li>
</ul>
<p>Returns information about a given cipher.</p>
<p>Some ciphers accept variable length keys and initialization vectors. By default,
the <code>crypto.getCipherInfo()</code> method will return the default values for these
ciphers. To test if a given key length or iv length is acceptable for given
cipher, use the <code>keyLength</code> and <code>ivLength</code> options. If the given values are
unacceptable, <code>undefined</code> will be returned.</p>
<h3><code>crypto.getCiphers()</code></h3>
<ul>
<li>Returns: {string[]} An array with the names of the supported cipher
algorithms.</li>
</ul>
<pre><code class="language-mjs">const {
  getCiphers,
} = await import('node:crypto');

console.log(getCiphers()); // ['aes-128-cbc', 'aes-128-ccm', ...]
</code></pre>
<pre><code class="language-cjs">const {
  getCiphers,
} = require('node:crypto');

console.log(getCiphers()); // ['aes-128-cbc', 'aes-128-ccm', ...]
</code></pre>
<h3><code>crypto.getCurves()</code></h3>
<ul>
<li>Returns: {string[]} An array with the names of the supported elliptic curves.</li>
</ul>
<pre><code class="language-mjs">const {
  getCurves,
} = await import('node:crypto');

console.log(getCurves()); // ['Oakley-EC2N-3', 'Oakley-EC2N-4', ...]
</code></pre>
<pre><code class="language-cjs">const {
  getCurves,
} = require('node:crypto');

console.log(getCurves()); // ['Oakley-EC2N-3', 'Oakley-EC2N-4', ...]
</code></pre>
<h3><code>crypto.getDiffieHellman(groupName)</code></h3>
<ul>
<li><code>groupName</code> {string}</li>
<li>Returns: {DiffieHellmanGroup}</li>
</ul>
<p>Creates a predefined <code>DiffieHellmanGroup</code> key exchange object. The
supported groups are listed in the documentation for <a href="#class-diffiehellmangroup"><code>DiffieHellmanGroup</code></a>.</p>
<p>The returned object mimics the interface of objects created by
<a href="#cryptocreatediffiehellmanprime-primeencoding-generator-generatorencoding"><code>crypto.createDiffieHellman()</code></a>, but will not allow changing
the keys (with <a href="#diffiehellmansetpublickeypublickey-encoding"><code>diffieHellman.setPublicKey()</code></a>, for example). The
advantage of using this method is that the parties do not have to
generate nor exchange a group modulus beforehand, saving both processor
and communication time.</p>
<p>Example (obtaining a shared secret):</p>
<pre><code class="language-mjs">const {
  getDiffieHellman,
} = await import('node:crypto');
const alice = getDiffieHellman('modp14');
const bob = getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

/* aliceSecret and bobSecret should be the same */
console.log(aliceSecret === bobSecret);
</code></pre>
<pre><code class="language-cjs">const {
  getDiffieHellman,
} = require('node:crypto');

const alice = getDiffieHellman('modp14');
const bob = getDiffieHellman('modp14');

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');

/* aliceSecret and bobSecret should be the same */
console.log(aliceSecret === bobSecret);
</code></pre>
<h3><code>crypto.getFips()</code></h3>
<ul>
<li>Returns: {number} <code>1</code> if FIPS mode is enabled, <code>0</code> otherwise. A future
semver-major release may change the return type of this API to a {boolean}.</li>
</ul>
<p>With OpenSSL 3, this reports whether the default property query includes
<code>fips=yes</code>. It does not establish that a FIPS provider is loaded or validated.
It can return <code>1</code> even when a requested cryptographic implementation cannot be
fetched because no loaded provider supplies a match for <code>fips=yes</code>. See <a href="#fips-mode">FIPS
mode</a>.</p>
<h3><code>crypto.getHashes()</code></h3>
<ul>
<li>Returns: {string[]} An array of the names of the supported hash algorithms,
such as <code>'RSA-SHA256'</code>. Hash algorithms are also called &quot;digest&quot; algorithms.</li>
</ul>
<p>This is the authoritative Node.js list of hash algorithms available to
<a href="#cryptocreatehashalgorithm-options"><code>crypto.createHash()</code></a> and <a href="#cryptohashalgorithm-data-options"><code>crypto.hash()</code></a> in the current process. With
OpenSSL 3 or later, the list depends on the loaded providers and the default
property query in effect when the list is first generated. Some listed
algorithms can require API-specific options, such as <code>outputLength</code> for XOF
hash functions.</p>
<p>A listed hash algorithm is not necessarily supported by APIs that combine a
digest with another cryptographic operation, such as HMAC, key derivation, or
signing. Those operations can apply additional restrictions.</p>
<pre><code class="language-mjs">const {
  getHashes,
} = await import('node:crypto');

console.log(getHashes()); // ['DSA', 'DSA-SHA', 'DSA-SHA1', ...]
</code></pre>
<pre><code class="language-cjs">const {
  getHashes,
} = require('node:crypto');

console.log(getHashes()); // ['DSA', 'DSA-SHA', 'DSA-SHA1', ...]
</code></pre>
<h3><code>crypto.getMacs()</code></h3>
<blockquote>
<p>Stability: 1.2 - Release candidate</p>
</blockquote>
<ul>
<li>Returns: {string[]} A fresh array containing the sorted, lowercase names
and aliases of fetchable MAC implementations.</li>
</ul>
<p>Returns MAC names exposed by loaded OpenSSL providers that match the active
default property query. Duplicate names and numeric OID aliases are omitted.
On builds without OpenSSL <code>EVP_MAC</code> support, this function returns an empty
array.</p>
<p>The returned names describe implementations that OpenSSL can fetch. They do not
guarantee that <a href="#cryptocreatemacalgorithm-key-options"><code>crypto.createMac()</code></a> can initialize the MAC without
additional options. A provider can require additional parameters or a key with
algorithm-specific properties, and it can expose parameters that this API does
not support.</p>
<p>After a successful FIPS mode change made with <a href="#cryptosetfipsbool"><code>crypto.setFips()</code></a>, subsequent
calls reflect the new mode, and newly created <code>Mac</code> objects use it. Existing
<code>Mac</code> objects continue using the provider implementation selected when they
were created.</p>
<pre><code class="language-mjs">const { getMacs } = await import('node:crypto');

console.log(getMacs());
// ['blake2bmac', 'blake2smac', 'cmac', 'gmac', 'hmac', ...]
</code></pre>
<h3><code>crypto.getRandomValues(typedArray)</code></h3>
<ul>
<li><code>typedArray</code> {Buffer|TypedArray|DataView|ArrayBuffer}</li>
<li>Returns: {Buffer|TypedArray|DataView|ArrayBuffer} Returns <code>typedArray</code>.</li>
</ul>
<p>A convenient alias for <a href="webcrypto.md#cryptogetrandomvaluestypedarray"><code>crypto.webcrypto.getRandomValues()</code></a>. This
implementation is not compliant with the Web Crypto spec, to write
web-compatible code use <a href="webcrypto.md#cryptogetrandomvaluestypedarray"><code>crypto.webcrypto.getRandomValues()</code></a> instead.</p>
<h3><code>crypto.hash(algorithm, data[, options])</code></h3>
<ul>
<li><code>algorithm</code> {string|undefined}</li>
<li><code>data</code> {string|Buffer|TypedArray|DataView} When <code>data</code> is a
string, it will be encoded as UTF-8 before being hashed. If a different
input encoding is desired for a string input, user could encode the string
into a <code>TypedArray</code> using either <code>TextEncoder</code> or <code>Buffer.from()</code> and passing
the encoded <code>TypedArray</code> into this API instead.</li>
<li><code>options</code> {Object|string}
<ul>
<li><code>customization</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} For cSHAKE
hash functions, specifies the customization byte string. <strong>Default:</strong> an
empty byte string.</li>
<li><code>functionName</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} For cSHAKE
hash functions, specifies the NIST function-name byte string. <strong>Default:</strong>
an empty byte string.</li>
<li><code>outputEncoding</code> {string} <a href="buffer.md#buffers-and-character-encodings">Encoding</a> used to encode the
returned digest. <strong>Default:</strong> <code>'hex'</code>.</li>
<li><code>outputLength</code> {number} For XOF hash functions such as 'shake256',
specifies the desired output length in bytes. This option is required for
XOF hash functions without a default output length.</li>
</ul>
</li>
<li>Returns: {string|Buffer}</li>
</ul>
<p>A utility for creating one-shot hash digests of data. It can be faster than
the object-based <code>crypto.createHash()</code> when hashing a smaller amount of data
(&lt;= 5MB) that's readily available. If the data can be big or if it is streamed,
it's still recommended to use <code>crypto.createHash()</code> instead.</p>
<p>The available algorithms depend on the version and configuration of OpenSSL on
the platform. Examples are <code>'sha256'</code> and <code>'sha512'</code>. Use
<a href="#cryptogethashes"><code>crypto.getHashes()</code></a> to obtain the list of hash algorithms available to the
Node.js process.</p>
<p>The <code>functionName</code> and <code>customization</code> options apply only to cSHAKE-128 and
cSHAKE-256. They are supported only when Node.js is built with OpenSSL 4.0 or
later and the selected provider supports the corresponding digest parameters.
Strings are encoded as UTF-8, and neither strings nor byte values may contain
NUL bytes. Both options default to an empty byte string. For OpenSSL's built-in
providers, <code>functionName</code> is case-sensitive and must be <code>''</code>, <code>'TupleHash'</code>,
<code>'ParallelHash'</code>, or <code>'KMAC'</code>. Other providers can impose different
restrictions. With both options empty, cSHAKE produces the same output as the
corresponding SHAKE function for the same output length. <code>cshake-128</code> and
<code>cshake-256</code> default to output lengths of 32 and 64 bytes, respectively.</p>
<p>If <code>options</code> is a string, then it specifies the <code>outputEncoding</code>.</p>
<p>Example:</p>
<pre><code class="language-cjs">const crypto = require('node:crypto');
const { Buffer } = require('node:buffer');

// Hashing a string and return the result as a hex-encoded string.
const string = 'Node.js';
// 10b3493287f831e81a438811a1ffba01f8cec4b7
console.log(crypto.hash('sha1', string));

// Encode a base64-encoded string into a Buffer, hash it and return
// the result as a buffer.
const base64 = 'Tm9kZS5qcw==';
// &lt;Buffer 10 b3 49 32 87 f8 31 e8 1a 43 88 11 a1 ff ba 01 f8 ce c4 b7&gt;
console.log(crypto.hash('sha1', Buffer.from(base64, 'base64'), 'buffer'));
</code></pre>
<pre><code class="language-mjs">import crypto from 'node:crypto';
import { Buffer } from 'node:buffer';

// Hashing a string and return the result as a hex-encoded string.
const string = 'Node.js';
// 10b3493287f831e81a438811a1ffba01f8cec4b7
console.log(crypto.hash('sha1', string));

// Encode a base64-encoded string into a Buffer, hash it and return
// the result as a buffer.
const base64 = 'Tm9kZS5qcw==';
// &lt;Buffer 10 b3 49 32 87 f8 31 e8 1a 43 88 11 a1 ff ba 01 f8 ce c4 b7&gt;
console.log(crypto.hash('sha1', Buffer.from(base64, 'base64'), 'buffer'));
</code></pre>
<h3><code>crypto.hkdf(digest, ikm, salt, info, keylen, callback)</code></h3>
<ul>
<li><code>digest</code> {string} The digest algorithm to use.</li>
<li><code>ikm</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject} The input
keying material. Must be provided but can be zero-length.</li>
<li><code>salt</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} The salt value. Must
be provided but can be zero-length.</li>
<li><code>info</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} Additional info value.
Must be provided but can be zero-length, and cannot be more than 1024 bytes.</li>
<li><code>keylen</code> {number} The length of the key to generate. Must be greater than 0.
The maximum allowable value is <code>255</code> times the number of bytes produced by
the selected digest function (e.g. <code>sha512</code> generates 64-byte hashes, making
the maximum HKDF output 16320 bytes).</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>derivedKey</code> {ArrayBuffer}</li>
</ul>
</li>
</ul>
<p>HKDF is a simple key derivation function defined in RFC 5869. The given <code>ikm</code>,
<code>salt</code> and <code>info</code> are used with the <code>digest</code> to derive a key of <code>keylen</code> bytes.
The available digest algorithms depend on the version and configuration of
OpenSSL. HKDF uses HMAC internally. <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms
available to the hashing APIs, but not every listed algorithm is necessarily
suitable for HMAC or HKDF.</p>
<p>The supplied <code>callback</code> function is called with two arguments: <code>err</code> and
<code>derivedKey</code>. If an error occurs while deriving the key, <code>err</code> will be set;
otherwise <code>err</code> will be <code>null</code>. The successfully generated <code>derivedKey</code> will
be passed to the callback as an {ArrayBuffer}. An error will be thrown if any
of the input arguments specify invalid values or types.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const {
  hkdf,
} = await import('node:crypto');

hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
});
</code></pre>
<pre><code class="language-cjs">const {
  hkdf,
} = require('node:crypto');
const { Buffer } = require('node:buffer');

hkdf('sha512', 'key', 'salt', 'info', 64, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
});
</code></pre>
<h3><code>crypto.hkdfSync(digest, ikm, salt, info, keylen)</code></h3>
<ul>
<li><code>digest</code> {string} The digest algorithm to use.</li>
<li><code>ikm</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject} The input
keying material. Must be provided but can be zero-length.</li>
<li><code>salt</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} The salt value. Must
be provided but can be zero-length.</li>
<li><code>info</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} Additional info value.
Must be provided but can be zero-length, and cannot be more than 1024 bytes.</li>
<li><code>keylen</code> {number} The length of the key to generate. Must be greater than 0.
The maximum allowable value is <code>255</code> times the number of bytes produced by
the selected digest function (e.g. <code>sha512</code> generates 64-byte hashes, making
the maximum HKDF output 16320 bytes).</li>
<li>Returns: {ArrayBuffer}</li>
</ul>
<p>Provides a synchronous HKDF key derivation function as defined in RFC 5869. The
given <code>ikm</code>, <code>salt</code> and <code>info</code> are used with the <code>digest</code> to derive a key of
<code>keylen</code> bytes.
The available digest algorithms depend on the version and configuration of
OpenSSL. HKDF uses HMAC internally. <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms
available to the hashing APIs, but not every listed algorithm is necessarily
suitable for HMAC or HKDF.</p>
<p>The successfully generated <code>derivedKey</code> will be returned as an {ArrayBuffer}.</p>
<p>An error will be thrown if any of the input arguments specify invalid values or
types, or if the derived key cannot be generated.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const {
  hkdfSync,
} = await import('node:crypto');

const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64);
console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
</code></pre>
<pre><code class="language-cjs">const {
  hkdfSync,
} = require('node:crypto');
const { Buffer } = require('node:buffer');

const derivedKey = hkdfSync('sha512', 'key', 'salt', 'info', 64);
console.log(Buffer.from(derivedKey).toString('hex'));  // '24156e2...5391653'
</code></pre>
<h3><code>crypto.parsePKCS12(bundle[, options])</code></h3>
<ul>
<li><code>bundle</code> {ArrayBuffer|Buffer|TypedArray|DataView} A DER-encoded PKCS#12
(<code>.p12</code> or <code>.pfx</code>) bundle.</li>
<li><code>options</code> {Object}
<ul>
<li><code>passphrase</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} The passphrase
protecting the bundle. Omitting this option is equivalent to passing <code>''</code>.</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>privateKey</code> {KeyObject|null} The first private key in the bundle, or
<code>null</code> if none is present.</li>
<li><code>certificate</code> {X509Certificate|null} The certificate matching <code>privateKey</code>,
or <code>null</code> if no matching certificate is present.</li>
<li><code>additionalCertificates</code> {X509Certificate[]} All other certificates in
the bundle. If there is no private key, this contains all certificates.
May be empty.</li>
</ul>
</li>
</ul>
<p>Parses a PKCS#12 bundle, commonly stored with a <code>.p12</code> or <code>.pfx</code> extension,
and returns its private key and certificates.</p>
<pre><code class="language-mjs">import { parsePKCS12 } from 'node:crypto';
import { readFileSync } from 'node:fs';

const { privateKey, certificate, additionalCertificates } = parsePKCS12(
  readFileSync('bundle.p12'),
  { passphrase: 'secret' },
);
</code></pre>
<h3><code>crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)</code></h3>
<ul>
<li><code>password</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>salt</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>iterations</code> {number}</li>
<li><code>keylen</code> {number}</li>
<li><code>digest</code> {string}</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>derivedKey</code> {Buffer}</li>
</ul>
</li>
</ul>
<p>Provides an asynchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by <code>digest</code> is
applied to derive a key of the requested byte length (<code>keylen</code>) from the
<code>password</code>, <code>salt</code> and <code>iterations</code>.</p>
<p>The supplied <code>callback</code> function is called with two arguments: <code>err</code> and
<code>derivedKey</code>. If an error occurs while deriving the key, <code>err</code> will be set;
otherwise <code>err</code> will be <code>null</code>. By default, the successfully generated
<code>derivedKey</code> will be passed to the callback as a <a href="buffer.md"><code>Buffer</code></a>. An error will be
thrown if any of the input arguments specify invalid values or types.</p>
<p>The <code>iterations</code> argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.</p>
<p>The <code>salt</code> should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>password</code> or <code>salt</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<pre><code class="language-mjs">const {
  pbkdf2,
} = await import('node:crypto');

pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
</code></pre>
<pre><code class="language-cjs">const {
  pbkdf2,
} = require('node:crypto');

pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
</code></pre>
<p>The available digest algorithms depend on the version and configuration of
OpenSSL. PBKDF2 uses HMAC internally. <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms
available to the hashing APIs, but not every listed algorithm is necessarily
suitable for HMAC or PBKDF2.</p>
<p>This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the
<a href="cli.md#uv_threadpool_sizesize"><code>UV_THREADPOOL_SIZE</code></a> documentation for more information.</p>
<h3><code>crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)</code></h3>
<ul>
<li><code>password</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>salt</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>iterations</code> {number}</li>
<li><code>keylen</code> {number}</li>
<li><code>digest</code> {string}</li>
<li>Returns: {Buffer}</li>
</ul>
<p>Provides a synchronous Password-Based Key Derivation Function 2 (PBKDF2)
implementation. A selected HMAC digest algorithm specified by <code>digest</code> is
applied to derive a key of the requested byte length (<code>keylen</code>) from the
<code>password</code>, <code>salt</code> and <code>iterations</code>.</p>
<p>If an error occurs an <code>Error</code> will be thrown, otherwise the derived key will be
returned as a <a href="buffer.md"><code>Buffer</code></a>.</p>
<p>The <code>iterations</code> argument must be a number set as high as possible. The
higher the number of iterations, the more secure the derived key will be,
but will take a longer amount of time to complete.</p>
<p>The <code>salt</code> should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>password</code> or <code>salt</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<pre><code class="language-mjs">const {
  pbkdf2Sync,
} = await import('node:crypto');

const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
</code></pre>
<pre><code class="language-cjs">const {
  pbkdf2Sync,
} = require('node:crypto');

const key = pbkdf2Sync('secret', 'salt', 100000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
</code></pre>
<p>The available digest algorithms depend on the version and configuration of
OpenSSL. PBKDF2 uses HMAC internally. <a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms
available to the hashing APIs, but not every listed algorithm is necessarily
suitable for HMAC or PBKDF2.</p>
<h3><code>crypto.privateDecrypt(privateKey, buffer)</code></h3>
<ul>
<li><code>privateKey</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}
<ul>
<li><code>oaepHash</code> {string} The hash function to use for OAEP padding and, unless
<code>mgf1Hash</code> is set, MGF1. <strong>Default:</strong> <code>'sha1'</code></li>
<li><code>mgf1Hash</code> {string} The hash function to use for the MGF1 mask generation
function of OAEP padding. If not specified, the value of <code>oaepHash</code> is used.
This allows the OAEP digest and the MGF1 digest to differ.</li>
<li><code>oaepLabel</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} The label to
use for OAEP padding. If not specified, no label is used.</li>
<li><code>padding</code> {crypto.constants} An optional padding value defined in
<code>crypto.constants</code>, which may be: <code>crypto.constants.RSA_NO_PADDING</code>,
<code>crypto.constants.RSA_PKCS1_PADDING</code>, or
<code>crypto.constants.RSA_PKCS1_OAEP_PADDING</code>.</li>
</ul>
</li>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li>Returns: {Buffer} A new <code>Buffer</code> with the decrypted content.</li>
</ul>
<p>Decrypts <code>buffer</code> with <code>privateKey</code>. <code>buffer</code> was previously encrypted using
the corresponding public key, for example using <a href="#cryptopublicencryptkey-buffer"><code>crypto.publicEncrypt()</code></a>.</p>
<p><a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the hashing APIs, but
the active RSA implementation can impose additional restrictions on digests
used for OAEP or MGF1.</p>
<p>If <code>privateKey</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>privateKey</code> had been passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>. If it is an
object, the <code>padding</code> property can be passed. Otherwise, this function uses
<code>RSA_PKCS1_OAEP_PADDING</code>.</p>
<p>Using <code>crypto.constants.RSA_PKCS1_PADDING</code> in <a href="#cryptoprivatedecryptprivatekey-buffer"><code>crypto.privateDecrypt()</code></a>
requires OpenSSL to support implicit rejection (<code>rsa_pkcs1_implicit_rejection</code>).
If the version of OpenSSL used by Node.js does not support this feature,
attempting to use <code>RSA_PKCS1_PADDING</code> will fail.</p>
<h3><code>crypto.privateEncrypt(privateKey, buffer)</code></h3>
<ul>
<li><code>privateKey</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}
The private key material, a {KeyObject}, or a {URL} referencing an object
for an OpenSSL STORE loader.</li>
<li><code>passphrase</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} An optional
passphrase for the private key.</li>
<li><code>padding</code> {crypto.constants} An optional padding value defined in
<code>crypto.constants</code>, which may be: <code>crypto.constants.RSA_NO_PADDING</code> or
<code>crypto.constants.RSA_PKCS1_PADDING</code>.</li>
<li><code>encoding</code> {string} The string encoding to use when <code>buffer</code>, <code>key</code>,
or <code>passphrase</code> are strings.</li>
</ul>
</li>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li>Returns: {Buffer} A new <code>Buffer</code> with the encrypted content.</li>
</ul>
<p>Encrypts <code>buffer</code> with <code>privateKey</code>. The returned data can be decrypted using
the corresponding public key, for example using <a href="#cryptopublicdecryptkey-buffer"><code>crypto.publicDecrypt()</code></a>.</p>
<p>If <code>privateKey</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>privateKey</code> had been passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>. If it is an
object, the <code>padding</code> property can be passed. Otherwise, this function uses
<code>RSA_PKCS1_PADDING</code>.</p>
<h3><code>crypto.publicDecrypt(key, buffer)</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}
<ul>
<li><code>passphrase</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} An optional
passphrase for the private key.</li>
<li><code>padding</code> {crypto.constants} An optional padding value defined in
<code>crypto.constants</code>, which may be: <code>crypto.constants.RSA_NO_PADDING</code> or
<code>crypto.constants.RSA_PKCS1_PADDING</code>.</li>
<li><code>encoding</code> {string} The string encoding to use when <code>buffer</code>, <code>key</code>,
or <code>passphrase</code> are strings.</li>
</ul>
</li>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li>Returns: {Buffer} A new <code>Buffer</code> with the decrypted content.</li>
</ul>
<p>Decrypts <code>buffer</code> with <code>key</code>. <code>buffer</code> was previously encrypted using
the corresponding private key, for example using <a href="#cryptoprivateencryptprivatekey-buffer"><code>crypto.privateEncrypt()</code></a>.</p>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>key</code> had been passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>. If it is an
object, the <code>padding</code> property can be passed. Otherwise, this function uses
<code>RSA_PKCS1_PADDING</code>.</p>
<p>Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.</p>
<h3><code>crypto.publicEncrypt(key, buffer)</code></h3>
<ul>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}
<ul>
<li><code>key</code> {string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}
A PEM encoded public or private key, or {KeyObject}.</li>
<li><code>oaepHash</code> {string} The hash function to use for OAEP padding and, unless
<code>mgf1Hash</code> is set, MGF1. <strong>Default:</strong> <code>'sha1'</code></li>
<li><code>mgf1Hash</code> {string} The hash function to use for the MGF1 mask generation
function of OAEP padding. If not specified, the value of <code>oaepHash</code> is used.
This allows the OAEP digest and the MGF1 digest to differ.</li>
<li><code>oaepLabel</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} The label to
use for OAEP padding. If not specified, no label is used.</li>
<li><code>passphrase</code> {string|ArrayBuffer|Buffer|TypedArray|DataView} An optional
passphrase for the private key.</li>
<li><code>padding</code> {crypto.constants} An optional padding value defined in
<code>crypto.constants</code>, which may be: <code>crypto.constants.RSA_NO_PADDING</code>,
<code>crypto.constants.RSA_PKCS1_PADDING</code>, or
<code>crypto.constants.RSA_PKCS1_OAEP_PADDING</code>.</li>
<li><code>encoding</code> {string} The string encoding to use when <code>buffer</code>, <code>key</code>,
<code>oaepLabel</code>, or <code>passphrase</code> are strings.</li>
</ul>
</li>
<li><code>buffer</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li>Returns: {Buffer} A new <code>Buffer</code> with the encrypted content.</li>
</ul>
<p>Encrypts the content of <code>buffer</code> with <code>key</code> and returns a new
<a href="buffer.md"><code>Buffer</code></a> with encrypted content. The returned data can be decrypted using
the corresponding private key, for example using <a href="#cryptoprivatedecryptprivatekey-buffer"><code>crypto.privateDecrypt()</code></a>.</p>
<p><a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the hashing APIs, but
the active RSA implementation can impose additional restrictions on digests
used for OAEP or MGF1.</p>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if
<code>key</code> had been passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>. If it is an
object, the <code>padding</code> property can be passed. Otherwise, this function uses
<code>RSA_PKCS1_OAEP_PADDING</code>.</p>
<p>Because RSA public keys can be derived from private keys, a private key may
be passed instead of a public key.</p>
<h3><code>crypto.randomBytes(size[, callback])</code></h3>
<ul>
<li><code>size</code> {number} The number of bytes to generate.  The <code>size</code> must
not be larger than <code>2**31 - 1</code>.</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>buf</code> {Buffer}</li>
</ul>
</li>
<li>Returns: {Buffer} if the <code>callback</code> function is not provided.</li>
</ul>
<p>Generates cryptographically strong pseudorandom data. The <code>size</code> argument
is a number indicating the number of bytes to generate.</p>
<p>If a <code>callback</code> function is provided, the bytes are generated asynchronously
and the <code>callback</code> function is invoked with two arguments: <code>err</code> and <code>buf</code>.
If an error occurs, <code>err</code> will be an <code>Error</code> object; otherwise it is <code>null</code>. The
<code>buf</code> argument is a <a href="buffer.md"><code>Buffer</code></a> containing the generated bytes.</p>
<pre><code class="language-mjs">// Asynchronous
const {
  randomBytes,
} = await import('node:crypto');

randomBytes(256, (err, buf) =&gt; {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
</code></pre>
<pre><code class="language-cjs">// Asynchronous
const {
  randomBytes,
} = require('node:crypto');

randomBytes(256, (err, buf) =&gt; {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
</code></pre>
<p>If the <code>callback</code> function is not provided, the random bytes are generated
synchronously and returned as a <a href="buffer.md"><code>Buffer</code></a>. An error will be thrown if
there is a problem generating the bytes.</p>
<pre><code class="language-mjs">// Synchronous
const {
  randomBytes,
} = await import('node:crypto');

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
</code></pre>
<pre><code class="language-cjs">// Synchronous
const {
  randomBytes,
} = require('node:crypto');

const buf = randomBytes(256);
console.log(
  `${buf.length} bytes of random data: ${buf.toString('hex')}`);
</code></pre>
<p>The <code>crypto.randomBytes()</code> method will not complete until there is
sufficient entropy available.
This should normally never take longer than a few milliseconds. The only time
when generating the random bytes may conceivably block for a longer period of
time is right after boot, when the whole system is still low on entropy.</p>
<p>This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the
<a href="cli.md#uv_threadpool_sizesize"><code>UV_THREADPOOL_SIZE</code></a> documentation for more information.</p>
<p>The asynchronous version of <code>crypto.randomBytes()</code> is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large <code>randomBytes</code> requests when doing so as part of fulfilling a client
request.</p>
<h3><code>crypto.randomFill(buffer[, offset][, size], callback)</code></h3>
<ul>
<li><code>buffer</code> {ArrayBuffer|Buffer|TypedArray|DataView} Must be supplied. The
size of the provided <code>buffer</code> must not be larger than <code>2**31 - 1</code>.</li>
<li><code>offset</code> {number} The start position, in elements for a <code>TypedArray</code> and in
bytes for an <code>ArrayBuffer</code> or <code>DataView</code>. <strong>Default:</strong> <code>0</code></li>
<li><code>size</code> {number} The amount to fill, in the same units as <code>offset</code>.
<strong>Default:</strong> <code>buffer.length - offset</code> for a <code>TypedArray</code>, or
<code>buffer.byteLength - offset</code> for an <code>ArrayBuffer</code> or <code>DataView</code>. The <code>size</code>
must not be larger than <code>2**31 - 1</code>.</li>
<li><code>callback</code> {Function} <code>function(err, buf) {}</code>.</li>
</ul>
<p>This function is similar to <a href="#cryptorandombytessize-callback"><code>crypto.randomBytes()</code></a> but requires the first
argument to be a <a href="buffer.md"><code>Buffer</code></a> that will be filled. It also
requires that a callback is passed in.</p>
<p>If the <code>callback</code> function is not provided, an error will be thrown.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { randomFill } = await import('node:crypto');

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
</code></pre>
<pre><code class="language-cjs">const { randomFill } = require('node:crypto');
const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(10);
randomFill(buf, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

randomFill(buf, 5, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});

// The above is equivalent to the following:
randomFill(buf, 5, 5, (err, buf) =&gt; {
  if (err) throw err;
  console.log(buf.toString('hex'));
});
</code></pre>
<p>Any <code>ArrayBuffer</code>, <code>TypedArray</code>, or <code>DataView</code> instance may be passed as
<code>buffer</code>.</p>
<p>While this includes instances of <code>Float32Array</code> and <code>Float64Array</code>, this
function should not be used to generate random floating-point numbers. The
result may contain <code>+Infinity</code>, <code>-Infinity</code>, and <code>NaN</code>, and even if the array
contains finite numbers only, they are not drawn from a uniform random
distribution and have no meaningful lower or upper bounds.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { randomFill } = await import('node:crypto');

const a = new Uint32Array(10);
randomFill(a, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
</code></pre>
<pre><code class="language-cjs">const { randomFill } = require('node:crypto');
const { Buffer } = require('node:buffer');

const a = new Uint32Array(10);
randomFill(a, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const b = new DataView(new ArrayBuffer(10));
randomFill(b, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength)
    .toString('hex'));
});

const c = new ArrayBuffer(10);
randomFill(c, (err, buf) =&gt; {
  if (err) throw err;
  console.log(Buffer.from(buf).toString('hex'));
});
</code></pre>
<p>This API uses libuv's threadpool, which can have surprising and
negative performance implications for some applications; see the
<a href="cli.md#uv_threadpool_sizesize"><code>UV_THREADPOOL_SIZE</code></a> documentation for more information.</p>
<p>The asynchronous version of <code>crypto.randomFill()</code> is carried out in a single
threadpool request. To minimize threadpool task length variation, partition
large <code>randomFill</code> requests when doing so as part of fulfilling a client
request.</p>
<h3><code>crypto.randomFillSync(buffer[, offset][, size])</code></h3>
<ul>
<li><code>buffer</code> {ArrayBuffer|Buffer|TypedArray|DataView} Must be supplied. The
size of the provided <code>buffer</code> must not be larger than <code>2**31 - 1</code>.</li>
<li><code>offset</code> {number} The start position, in elements for a <code>TypedArray</code> and in
bytes for an <code>ArrayBuffer</code> or <code>DataView</code>. <strong>Default:</strong> <code>0</code></li>
<li><code>size</code> {number} The amount to fill, in the same units as <code>offset</code>.
<strong>Default:</strong> <code>buffer.length - offset</code> for a <code>TypedArray</code>, or
<code>buffer.byteLength - offset</code> for an <code>ArrayBuffer</code> or <code>DataView</code>. The <code>size</code>
must not be larger than <code>2**31 - 1</code>.</li>
<li>Returns: {ArrayBuffer|Buffer|TypedArray|DataView} The object passed as
<code>buffer</code> argument.</li>
</ul>
<p>Synchronous version of <a href="#cryptorandomfillbuffer-offset-size-callback"><code>crypto.randomFill()</code></a>.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { randomFillSync } = await import('node:crypto');

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
</code></pre>
<pre><code class="language-cjs">const { randomFillSync } = require('node:crypto');
const { Buffer } = require('node:buffer');

const buf = Buffer.alloc(10);
console.log(randomFillSync(buf).toString('hex'));

randomFillSync(buf, 5);
console.log(buf.toString('hex'));

// The above is equivalent to the following:
randomFillSync(buf, 5, 5);
console.log(buf.toString('hex'));
</code></pre>
<p>Any <code>ArrayBuffer</code>, <code>TypedArray</code> or <code>DataView</code> instance may be passed as
<code>buffer</code>.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const { randomFillSync } = await import('node:crypto');

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
</code></pre>
<pre><code class="language-cjs">const { randomFillSync } = require('node:crypto');
const { Buffer } = require('node:buffer');

const a = new Uint32Array(10);
console.log(Buffer.from(randomFillSync(a).buffer,
                        a.byteOffset, a.byteLength).toString('hex'));

const b = new DataView(new ArrayBuffer(10));
console.log(Buffer.from(randomFillSync(b).buffer,
                        b.byteOffset, b.byteLength).toString('hex'));

const c = new ArrayBuffer(10);
console.log(Buffer.from(randomFillSync(c)).toString('hex'));
</code></pre>
<h3><code>crypto.randomInt([min, ]max[, callback])</code></h3>
<ul>
<li><code>min</code> {integer} Start of random range (inclusive). <strong>Default:</strong> <code>0</code>.</li>
<li><code>max</code> {integer} End of random range (exclusive).</li>
<li><code>callback</code> {Function} <code>function(err, n) {}</code>.</li>
</ul>
<p>Return a random integer <code>n</code> such that <code>min &lt;= n &lt; max</code>.  This
implementation avoids <a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modulo_bias">modulo bias</a>.</p>
<p>The range (<code>max - min</code>) must be less than 2&lt;sup&gt;48&lt;/sup&gt;. <code>min</code> and <code>max</code> must
be <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger">safe integers</a>.</p>
<p>If the <code>callback</code> function is not provided, the random integer is
generated synchronously.</p>
<pre><code class="language-mjs">// Asynchronous
const {
  randomInt,
} = await import('node:crypto');

randomInt(3, (err, n) =&gt; {
  if (err) throw err;
  console.log(`Random number chosen from (0, 1, 2): ${n}`);
});
</code></pre>
<pre><code class="language-cjs">// Asynchronous
const {
  randomInt,
} = require('node:crypto');

randomInt(3, (err, n) =&gt; {
  if (err) throw err;
  console.log(`Random number chosen from (0, 1, 2): ${n}`);
});
</code></pre>
<pre><code class="language-mjs">// Synchronous
const {
  randomInt,
} = await import('node:crypto');

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
</code></pre>
<pre><code class="language-cjs">// Synchronous
const {
  randomInt,
} = require('node:crypto');

const n = randomInt(3);
console.log(`Random number chosen from (0, 1, 2): ${n}`);
</code></pre>
<pre><code class="language-mjs">// With `min` argument
const {
  randomInt,
} = await import('node:crypto');

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
</code></pre>
<pre><code class="language-cjs">// With `min` argument
const {
  randomInt,
} = require('node:crypto');

const n = randomInt(1, 7);
console.log(`The dice rolled: ${n}`);
</code></pre>
<h3><code>crypto.randomUUID([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>disableEntropyCache</code> {boolean} By default, to improve performance,
Node.js generates and caches enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set <code>disableEntropyCache</code> to <code>true</code>.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Generates a random <a href="https://www.rfc-editor.org/rfc/rfc4122.txt">RFC 4122</a> version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.</p>
<h3><code>crypto.randomUUIDv7([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>disableEntropyCache</code> {boolean} By default, to improve performance,
Node.js generates and caches enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set <code>disableEntropyCache</code> to <code>true</code>.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Generates a random <a href="https://www.rfc-editor.org/rfc/rfc9562.txt">RFC 9562</a> version 7 UUID. The UUID contains a millisecond
precision Unix timestamp in the most significant 48 bits, followed by
cryptographically secure random bits for the remaining fields, making it
suitable for use as a database key with time-based sorting. The embedded
timestamp relies on a non-monotonic clock and is not guaranteed to be strictly
increasing.</p>
<h3><code>crypto.scrypt(password, salt, keylen[, options], callback)</code></h3>
<ul>
<li><code>password</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>salt</code> {string|ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>keylen</code> {number}</li>
<li><code>options</code> {Object}
<ul>
<li><code>cost</code> {number} CPU/memory cost parameter. Must be a power of two greater
than one. <strong>Default:</strong> <code>16384</code>.</li>
<li><code>blockSize</code> {number} Block size parameter. <strong>Default:</strong> <code>8</code>.</li>
<li><code>parallelization</code> {number} Parallelization parameter. <strong>Default:</strong> <code>1</code>.</li>
<li><code>N</code> {number} Alias for <code>cost</code>. Only one of both may be specified.</li>
<li><code>r</code> {number} Alias for <code>blockSize</code>. Only one of both may be specified.</li>
<li><code>p</code> {number} Alias for <code>parallelization</code>. Only one of both may be specified.</li>
<li><code>maxmem</code> {number} Memory upper bound. It is an error when (approximately)
<code>128 * N * r &gt; maxmem</code>. <strong>Default:</strong> <code>32 * 1024 * 1024</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>derivedKey</code> {Buffer}</li>
</ul>
</li>
</ul>
<p>Provides an asynchronous <a href="https://en.wikipedia.org/wiki/Scrypt">scrypt</a> implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.</p>
<p>The <code>salt</code> should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>password</code> or <code>salt</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>The <code>callback</code> function is called with two arguments: <code>err</code> and <code>derivedKey</code>.
<code>err</code> is an exception object when key derivation fails, otherwise <code>err</code> is
<code>null</code>. <code>derivedKey</code> is passed to the callback as a <a href="buffer.md"><code>Buffer</code></a>.</p>
<p>An exception is thrown when any of the input arguments specify invalid values
or types.</p>
<pre><code class="language-mjs">const {
  scrypt,
} = await import('node:crypto');

// Using the factory defaults.
scrypt('password', 'salt', 64, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
scrypt('password', 'salt', 64, { N: 1024 }, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});
</code></pre>
<pre><code class="language-cjs">const {
  scrypt,
} = require('node:crypto');

// Using the factory defaults.
scrypt('password', 'salt', 64, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});
// Using a custom N parameter. Must be a power of two.
scrypt('password', 'salt', 64, { N: 1024 }, (err, derivedKey) =&gt; {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});
</code></pre>
<h3><code>crypto.scryptSync(password, salt, keylen[, options])</code></h3>
<ul>
<li><code>password</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>salt</code> {string|Buffer|TypedArray|DataView}</li>
<li><code>keylen</code> {number}</li>
<li><code>options</code> {Object}
<ul>
<li><code>cost</code> {number} CPU/memory cost parameter. Must be a power of two greater
than one. <strong>Default:</strong> <code>16384</code>.</li>
<li><code>blockSize</code> {number} Block size parameter. <strong>Default:</strong> <code>8</code>.</li>
<li><code>parallelization</code> {number} Parallelization parameter. <strong>Default:</strong> <code>1</code>.</li>
<li><code>N</code> {number} Alias for <code>cost</code>. Only one of both may be specified.</li>
<li><code>r</code> {number} Alias for <code>blockSize</code>. Only one of both may be specified.</li>
<li><code>p</code> {number} Alias for <code>parallelization</code>. Only one of both may be specified.</li>
<li><code>maxmem</code> {number} Memory upper bound. It is an error when (approximately)
<code>128 * N * r &gt; maxmem</code>. <strong>Default:</strong> <code>32 * 1024 * 1024</code>.</li>
</ul>
</li>
<li>Returns: {Buffer}</li>
</ul>
<p>Provides a synchronous <a href="https://en.wikipedia.org/wiki/Scrypt">scrypt</a> implementation. Scrypt is a password-based
key derivation function that is designed to be expensive computationally and
memory-wise in order to make brute-force attacks unrewarding.</p>
<p>The <code>salt</code> should be as unique as possible. It is recommended that a salt is
random and at least 16 bytes long. See <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf">NIST SP 800-132</a> for details.</p>
<p>When passing strings for <code>password</code> or <code>salt</code>, please consider
<a href="#using-strings-as-inputs-to-cryptographic-apis">caveats when using strings as inputs to cryptographic APIs</a>.</p>
<p>An exception is thrown when key derivation fails, otherwise the derived key is
returned as a <a href="buffer.md"><code>Buffer</code></a>.</p>
<p>An exception is thrown when any of the input arguments specify invalid values
or types.</p>
<pre><code class="language-mjs">const {
  scryptSync,
} = await import('node:crypto');
// Using the factory defaults.

const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// Using a custom N parameter. Must be a power of two.
const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
console.log(key2.toString('hex'));  // '3745e48...aa39b34'
</code></pre>
<pre><code class="language-cjs">const {
  scryptSync,
} = require('node:crypto');
// Using the factory defaults.

const key1 = scryptSync('password', 'salt', 64);
console.log(key1.toString('hex'));  // '3745e48...08d59ae'
// Using a custom N parameter. Must be a power of two.
const key2 = scryptSync('password', 'salt', 64, { N: 1024 });
console.log(key2.toString('hex'));  // '3745e48...aa39b34'
</code></pre>
<h3><code>crypto.secureHeapUsed()</code></h3>
<ul>
<li>Returns: {Object}
<ul>
<li><code>total</code> {number} The total allocated secure heap size as specified
using the <code>--secure-heap=n</code> command-line flag.</li>
<li><code>min</code> {number} The minimum allocation from the secure heap as
specified using the <code>--secure-heap-min</code> command-line flag.</li>
<li><code>used</code> {number} The total number of bytes currently allocated from
the secure heap.</li>
<li><code>utilization</code> {number} The calculated ratio of <code>used</code> to <code>total</code>
allocated bytes.</li>
</ul>
</li>
</ul>
<h3><code>crypto.setEngine(engine[, flags])</code></h3>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<ul>
<li><code>engine</code> {string}</li>
<li><code>flags</code> {crypto.constants} <strong>Default:</strong> <code>crypto.constants.ENGINE_METHOD_ALL</code></li>
</ul>
<p>Load and set the <code>engine</code> for some or all OpenSSL functions (selected by flags).
Use of this API is deprecated because custom engine support has been deprecated
since OpenSSL 3.</p>
<p><code>engine</code> could be either an id or a path to the engine's shared library.</p>
<p>The optional <code>flags</code> argument uses <code>ENGINE_METHOD_ALL</code> by default. The <code>flags</code>
is a bit field taking one of or a mix of the following flags (defined in
<code>crypto.constants</code>):</p>
<ul>
<li><code>crypto.constants.ENGINE_METHOD_RSA</code></li>
<li><code>crypto.constants.ENGINE_METHOD_DSA</code></li>
<li><code>crypto.constants.ENGINE_METHOD_DH</code></li>
<li><code>crypto.constants.ENGINE_METHOD_RAND</code></li>
<li><code>crypto.constants.ENGINE_METHOD_EC</code></li>
<li><code>crypto.constants.ENGINE_METHOD_CIPHERS</code></li>
<li><code>crypto.constants.ENGINE_METHOD_DIGESTS</code></li>
<li><code>crypto.constants.ENGINE_METHOD_PKEY_METHS</code></li>
<li><code>crypto.constants.ENGINE_METHOD_PKEY_ASN1_METHS</code></li>
<li><code>crypto.constants.ENGINE_METHOD_ALL</code></li>
<li><code>crypto.constants.ENGINE_METHOD_NONE</code></li>
</ul>
<h3><code>crypto.setFips(bool)</code></h3>
<ul>
<li><code>bool</code> {boolean} <code>true</code> to enable FIPS mode, <code>false</code> to disable it.</li>
</ul>
<p>Changes <a href="#fips-mode">FIPS mode</a>. With OpenSSL 3, this only adds or removes <code>fips=yes</code> in
the default property query. It does not install, load, initialize, or validate
a FIPS provider. For a usable FIPS configuration, install the provider and
configure OpenSSL to load it when Node.js starts, as described in <a href="#fips-mode">FIPS
mode</a>.</p>
<p>If no loaded provider supplies a requested cryptographic implementation
matching <code>fips=yes</code>, the call can still succeed and <code>crypto.getFips()</code> can still
return <code>1</code>, but fetching that implementation fails. Affected <code>node:crypto</code>
operations typically fail with <code>ERR_OSSL_EVP_UNSUPPORTED</code>. Operations that do
not require a new fetch, including those using previously fetched
implementations or initialized operation contexts, may still succeed. Call this
method during application initialization, before application code uses other
OpenSSL-backed APIs.</p>
<p>This method only affects subsequent algorithm fetches. Node.js initializes some
OpenSSL state before application code runs. When the property query must be
active from process startup, set <code>default_properties = fips=yes</code> in the OpenSSL
configuration or use <a href="cli.md#--enable-fips"><code>--enable-fips</code></a> or <a href="cli.md#--force-fips"><code>--force-fips</code></a>. The command-line
flags additionally require a configured provider named <code>fips</code> to initialize and
pass its self-test; Node.js fails to start otherwise.</p>
<p>Throws an error if OpenSSL cannot change the state. FIPS mode cannot be
disabled when Node.js was started with <code>--force-fips</code>. With OpenSSL 1.1.1,
enabling FIPS mode requires a FIPS-capable OpenSSL build.</p>
<h3><code>crypto.sign(algorithm, data, key[, callback])</code></h3>
<ul>
<li><code>algorithm</code> {string | null | undefined}</li>
<li><code>data</code> {ArrayBuffer|Buffer|SharedArrayBuffer|TypedArray|DataView|string}</li>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject|URL}</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>signature</code> {Buffer}</li>
</ul>
</li>
<li>Returns: {Buffer} if the <code>callback</code> function is not provided.</li>
</ul>
<p>Calculates and returns the signature for <code>data</code> using the given private key and
algorithm. If <code>algorithm</code> is <code>null</code> or <code>undefined</code>, then the algorithm is
dependent upon the key type.</p>
<p><code>algorithm</code> is required to be <code>null</code> or <code>undefined</code> for Ed25519, Ed448, and
ML-DSA.</p>
<p><a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the hashing APIs, but
the key type and signature scheme determine whether a listed digest can be
used for signing.</p>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if <code>key</code> had been
passed to <a href="#cryptocreateprivatekeykey"><code>crypto.createPrivateKey()</code></a>. When <code>key</code> is a string, <code>ArrayBuffer</code>,
<a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, it must contain PEM-encoded key
material. If it is an object, the following additional properties can be
passed:</p>
<ul>
<li>
<p><code>dsaEncoding</code> {string} For DSA and ECDSA, this option specifies the
format of the generated signature. It can be one of the following:</p>
<ul>
<li><code>'der'</code> (default): DER-encoded ASN.1 signature structure encoding <code>(r, s)</code>.</li>
<li><code>'ieee-p1363'</code>: Signature format <code>r || s</code> as proposed in IEEE-P1363.</li>
</ul>
</li>
<li>
<p><code>padding</code> {integer} Optional padding value for RSA, one of the following:</p>
<ul>
<li><code>crypto.constants.RSA_PKCS1_PADDING</code> (default)</li>
<li><code>crypto.constants.RSA_PKCS1_PSS_PADDING</code></li>
</ul>
<p><code>RSA_PKCS1_PSS_PADDING</code> will use MGF1 with the same hash function
used to sign the message as specified in section 3.1 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>.</p>
</li>
<li>
<p><code>saltLength</code> {integer} Salt length for when padding is
<code>RSA_PKCS1_PSS_PADDING</code>. The special value
<code>crypto.constants.RSA_PSS_SALTLEN_DIGEST</code> sets the salt length to the digest
size, <code>crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN</code> (default) sets it to the
maximum permissible value.</p>
</li>
<li>
<p><code>context</code> {ArrayBuffer|Buffer|TypedArray|DataView} For Ed25519[^openssl32]
(using Ed25519ctx from <a href="https://www.rfc-editor.org/rfc/rfc8032.txt">RFC 8032</a>), Ed448, ML-DSA, and SLH-DSA,
this option specifies the optional context to differentiate signatures
generated for different purposes with the same key.</p>
</li>
</ul>
<p>If the <code>callback</code> function is provided this function uses libuv's threadpool.</p>
<h3><code>crypto.subtle</code></h3>
<ul>
<li>Type: {SubtleCrypto}</li>
</ul>
<p>A convenient alias for <a href="webcrypto.md#class-subtlecrypto"><code>crypto.webcrypto.subtle</code></a>.</p>
<h3><code>crypto.timingSafeEqual(a, b)</code></h3>
<ul>
<li><code>a</code> {ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li><code>b</code> {ArrayBuffer|Buffer|TypedArray|DataView}</li>
<li>Returns: {boolean}</li>
</ul>
<p>This function compares the underlying bytes that represent the given
<code>ArrayBuffer</code>, <code>TypedArray</code>, or <code>DataView</code> instances using a constant-time
algorithm.</p>
<p>This function does not leak timing information that
would allow an attacker to guess one of the values. This is suitable for
comparing HMAC digests or secret values like authentication cookies or
<a href="https://www.w3.org/TR/capability-urls/">capability urls</a>.</p>
<p><code>a</code> and <code>b</code> must both be <code>Buffer</code>s, <code>TypedArray</code>s, or <code>DataView</code>s, and they
must have the same byte length. An error is thrown if <code>a</code> and <code>b</code> have
different byte lengths.</p>
<p>If at least one of <code>a</code> and <code>b</code> is a <code>TypedArray</code> with more than one byte per
entry, such as <code>Uint16Array</code>, the result will be computed using the platform
byte order.</p>
<p>&lt;strong class=&quot;critical&quot;&gt;When both of the inputs are <code>Float32Array</code>s or
<code>Float64Array</code>s, this function might return unexpected results due to IEEE 754
encoding of floating-point numbers. In particular, neither <code>x === y</code> nor
<code>Object.is(x, y)</code> implies that the byte representations of two floating-point
numbers <code>x</code> and <code>y</code> are equal.&lt;/strong&gt;</p>
<p>Use of <code>crypto.timingSafeEqual</code> does not guarantee that the <em>surrounding</em> code
is timing-safe. Care should be taken to ensure that the surrounding code does
not introduce timing vulnerabilities.</p>
<h3><code>crypto.verify(algorithm, data, key, signature[, callback])</code></h3>
<ul>
<li><code>algorithm</code> {string|null|undefined}</li>
<li><code>data</code> {ArrayBuffer|Buffer|SharedArrayBuffer|TypedArray|DataView|string}</li>
<li><code>key</code> {Object|string|ArrayBuffer|Buffer|TypedArray|DataView|KeyObject}</li>
<li><code>signature</code> {ArrayBuffer|Buffer|SharedArrayBuffer|TypedArray|DataView}</li>
<li><code>callback</code> {Function}
<ul>
<li><code>err</code> {Error}</li>
<li><code>result</code> {boolean}</li>
</ul>
</li>
<li>Returns: {boolean} <code>true</code> or <code>false</code> depending on the validity of the
signature for the data and public key if the <code>callback</code> function is not
provided.</li>
</ul>
<p>Verifies the given signature for <code>data</code> using the given key and algorithm. If
<code>algorithm</code> is <code>null</code> or <code>undefined</code>, then the algorithm is dependent upon the
key type.</p>
<p><code>algorithm</code> is required to be <code>null</code> or <code>undefined</code> for Ed25519, Ed448, and
ML-DSA.</p>
<p><a href="#cryptogethashes"><code>crypto.getHashes()</code></a> lists algorithms available to the hashing APIs, but
the key type and signature scheme determine whether a listed digest can be
used for verification.</p>
<p>If <code>key</code> is not a <a href="#class-keyobject"><code>KeyObject</code></a>, this function behaves as if <code>key</code> had been
passed to <a href="#cryptocreatepublickeykey"><code>crypto.createPublicKey()</code></a>. When <code>key</code> is a string, <code>ArrayBuffer</code>,
<a href="buffer.md"><code>Buffer</code></a>, <code>TypedArray</code>, or <code>DataView</code>, it must contain PEM-encoded key
material. If it is an object, the following additional properties can be
passed:</p>
<ul>
<li>
<p><code>dsaEncoding</code> {string} For DSA and ECDSA, this option specifies the
format of the signature. It can be one of the following:</p>
<ul>
<li><code>'der'</code> (default): DER-encoded ASN.1 signature structure encoding <code>(r, s)</code>.</li>
<li><code>'ieee-p1363'</code>: Signature format <code>r || s</code> as proposed in IEEE-P1363.</li>
</ul>
</li>
<li>
<p><code>padding</code> {integer} Optional padding value for RSA, one of the following:</p>
<ul>
<li><code>crypto.constants.RSA_PKCS1_PADDING</code> (default)</li>
<li><code>crypto.constants.RSA_PKCS1_PSS_PADDING</code></li>
</ul>
<p><code>RSA_PKCS1_PSS_PADDING</code> will use MGF1 with the same hash function
used to sign the message as specified in section 3.1 of <a href="https://www.rfc-editor.org/rfc/rfc4055.txt">RFC 4055</a>.</p>
</li>
<li>
<p><code>saltLength</code> {integer} Salt length for when padding is
<code>RSA_PKCS1_PSS_PADDING</code>. The special value
<code>crypto.constants.RSA_PSS_SALTLEN_DIGEST</code> sets the salt length to the digest
size, <code>crypto.constants.RSA_PSS_SALTLEN_MAX_SIGN</code> (default) sets it to the
maximum permissible value.</p>
</li>
<li>
<p><code>context</code> {ArrayBuffer|Buffer|TypedArray|DataView} For Ed25519[^openssl32]
(using Ed25519ctx from <a href="https://www.rfc-editor.org/rfc/rfc8032.txt">RFC 8032</a>), Ed448, ML-DSA, and SLH-DSA,
this option specifies the optional context to differentiate signatures
generated for different purposes with the same key.</p>
</li>
</ul>
<p>The <code>signature</code> argument is the previously calculated signature for the <code>data</code>.</p>
<p>Because public keys can be derived from private keys, a private key or a public
key may be passed for <code>key</code>.</p>
<p>If the <code>callback</code> function is provided this function uses libuv's threadpool.</p>
<h3><code>crypto.webcrypto</code></h3>
<p>Type: {Crypto} An implementation of the Web Crypto API standard.</p>
<p>See the <a href="webcrypto.md">Web Crypto API documentation</a> for details.</p>
<h2>Notes</h2>
<h3>Using strings as inputs to cryptographic APIs</h3>
<p>For historical reasons, many cryptographic APIs provided by Node.js accept
strings as inputs where the underlying cryptographic algorithm works on byte
sequences. These instances include plaintexts, ciphertexts, symmetric keys,
initialization vectors, passphrases, salts, authentication tags,
and additional authenticated data.</p>
<p>When passing strings to cryptographic APIs, consider the following factors.</p>
<ul>
<li>
<p>Not all byte sequences are valid UTF-8 strings. Therefore, when a byte
sequence of length <code>n</code> is derived from a string, its entropy is generally
lower than the entropy of a random or pseudorandom <code>n</code> byte sequence.
For example, no UTF-8 string will result in the byte sequence <code>c0 af</code>. Secret
keys should almost exclusively be random or pseudorandom byte sequences.</p>
</li>
<li>
<p>Similarly, when converting random or pseudorandom byte sequences to UTF-8
strings, subsequences that do not represent valid code points may be replaced
by the Unicode replacement character (<code>U+FFFD</code>). The byte representation of
the resulting Unicode string may, therefore, not be equal to the byte sequence
that the string was created from.</p>
<pre><code class="language-js">const original = [0xc0, 0xaf];
const bytesAsString = Buffer.from(original).toString('utf8');
const stringAsBytes = Buffer.from(bytesAsString, 'utf8');
console.log(stringAsBytes);
// Prints '&lt;Buffer ef bf bd ef bf bd&gt;'.
</code></pre>
<p>The outputs of ciphers, hash functions, signature algorithms, and key
derivation functions are pseudorandom byte sequences and should not be
used as Unicode strings.</p>
</li>
<li>
<p>When strings are obtained from user input, some Unicode characters can be
represented in multiple equivalent ways that result in different byte
sequences. For example, when passing a user passphrase to a key derivation
function, such as PBKDF2 or scrypt, the result of the key derivation function
depends on whether the string uses composed or decomposed characters. Node.js
does not normalize character representations. Developers should consider using
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"><code>String.prototype.normalize()</code></a> on user inputs before passing them to
cryptographic APIs.</p>
</li>
</ul>
<h3>Legacy streams API (prior to Node.js 0.10)</h3>
<p>The Crypto module was added to Node.js before there was the concept of a
unified Stream API, and before there were <a href="buffer.md"><code>Buffer</code></a> objects for handling
binary data. As such, many <code>crypto</code> classes have methods not
typically found on other Node.js classes that implement the <a href="stream.md">streams</a>
API (e.g. <code>update()</code>, <code>final()</code>, or <code>digest()</code>). Also, many methods accepted
and returned <code>'latin1'</code> encoded strings by default rather than <code>Buffer</code>s. This
default was changed in Node.js 0.9.3 to use <a href="buffer.md"><code>Buffer</code></a> objects by default
instead.</p>
<h3>Support for weak or compromised algorithms</h3>
<p>The <code>node:crypto</code> module still supports some algorithms which are already
compromised and are not recommended for use. The API also allows
the use of ciphers and hashes with a small key size that are too weak for safe
use.</p>
<p>Users should take full responsibility for selecting the crypto
algorithm and key size according to their security requirements.</p>
<p>Based on the recommendations of <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf">NIST SP 800-131A</a>:</p>
<ul>
<li>MD5 and SHA-1 are no longer acceptable where collision resistance is
required such as digital signatures.</li>
<li>The key used with RSA, DSA, and DH algorithms is recommended to have
at least 2048 bits and that of the curve of ECDSA and ECDH at least
224 bits, to be safe to use for several years.</li>
<li>The DH groups of <code>modp1</code>, <code>modp2</code> and <code>modp5</code> have a key size
smaller than 2048 bits and are not recommended.</li>
</ul>
<p>See the reference for other recommendations and details.</p>
<p>Some algorithms that have known weaknesses and are of little relevance in
practice are only available through the <a href="cli.md#--openssl-legacy-provider">legacy provider</a>, which is not
enabled by default.</p>
<h3>CCM mode</h3>
<p>CCM is one of the supported <a href="https://en.wikipedia.org/wiki/Authenticated_encryption">AEAD algorithms</a>. Applications which use this
mode must adhere to certain restrictions when using the cipher API:</p>
<ul>
<li>The authentication tag length must be specified during cipher creation by
setting the <code>authTagLength</code> option and must be one of 4, 6, 8, 10, 12, 14 or
16 bytes.</li>
<li>The length of the initialization vector (nonce) <code>N</code> must be between 7 and 13
bytes (<code>7 ≤ N ≤ 13</code>).</li>
<li>The length of the plaintext is limited to <code>2 ** (8 * (15 - N))</code> bytes.</li>
<li>When decrypting, the authentication tag must be set via <code>setAuthTag()</code> before
calling <code>update()</code>.
Otherwise, decryption will fail and <code>final()</code> will throw an error in
compliance with section 2.6 of <a href="https://www.rfc-editor.org/rfc/rfc3610.txt">RFC 3610</a>.</li>
<li>Using stream methods such as <code>write(data)</code>, <code>end(data)</code> or <code>pipe()</code> in CCM
mode might fail as CCM cannot handle more than one chunk of data per instance.</li>
<li>When passing additional authenticated data (AAD), the length of the actual
message in bytes must be passed to <code>setAAD()</code> via the <code>plaintextLength</code>
option.
Many crypto libraries include the authentication tag in the ciphertext,
which means that they produce ciphertexts of the length
<code>plaintextLength + authTagLength</code>. Node.js does not include the authentication
tag, so the ciphertext length is always <code>plaintextLength</code>.
This is not necessary if no AAD is used.</li>
<li>As CCM processes the whole message at once, <code>update()</code> must be called exactly
once.</li>
<li>Even though calling <code>update()</code> is sufficient to encrypt/decrypt the message,
applications <em>must</em> call <code>final()</code> to compute or verify the
authentication tag.</li>
</ul>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
const {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} = await import('node:crypto');

const key = 'keykeykeykeykeykeykeykey';
const nonce = randomBytes(12);

const aad = Buffer.from('0123456789', 'hex');

const cipher = createCipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16,
});
const plaintext = 'Hello world';
cipher.setAAD(aad, {
  plaintextLength: Buffer.byteLength(plaintext),
});
const ciphertext = cipher.update(plaintext, 'utf8');
cipher.final();
const tag = cipher.getAuthTag();

// Now transmit { ciphertext, nonce, tag }.

const decipher = createDecipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16,
});
decipher.setAuthTag(tag);
decipher.setAAD(aad, {
  plaintextLength: ciphertext.length,
});
const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

try {
  decipher.final();
} catch (err) {
  throw new Error('Authentication failed!', { cause: err });
}

console.log(receivedPlaintext);
</code></pre>
<pre><code class="language-cjs">const { Buffer } = require('node:buffer');
const {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} = require('node:crypto');

const key = 'keykeykeykeykeykeykeykey';
const nonce = randomBytes(12);

const aad = Buffer.from('0123456789', 'hex');

const cipher = createCipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16,
});
const plaintext = 'Hello world';
cipher.setAAD(aad, {
  plaintextLength: Buffer.byteLength(plaintext),
});
const ciphertext = cipher.update(plaintext, 'utf8');
cipher.final();
const tag = cipher.getAuthTag();

// Now transmit { ciphertext, nonce, tag }.

const decipher = createDecipheriv('aes-192-ccm', key, nonce, {
  authTagLength: 16,
});
decipher.setAuthTag(tag);
decipher.setAAD(aad, {
  plaintextLength: ciphertext.length,
});
const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

try {
  decipher.final();
} catch (err) {
  throw new Error('Authentication failed!', { cause: err });
}

console.log(receivedPlaintext);
</code></pre>
<h3>CBC-CTS mode</h3>
<p>For CBC ciphertext stealing (CBC-CTS) ciphers, the <code>ctsMode</code> option to
<a href="#cryptocreatecipherivalgorithm-key-iv-options"><code>crypto.createCipheriv()</code></a> or <a href="#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a> selects the
variant:</p>
<ul>
<li><code>'CS1'</code> is the default. For block-aligned input, its output is the same as CBC
mode.</li>
<li><code>'CS2'</code> is also the same as CBC for block-aligned input. For input with a
partial final block, it swaps the final full and partial ciphertext blocks
relative to CS1.</li>
<li><code>'CS3'</code> is the Kerberos 5 variant. It uses the CS2 ordering for a partial
final block and swaps the final two ciphertext blocks even for block-aligned
input.</li>
</ul>
<p>Encryption and decryption must use the same variant. The option is available
only with CBC-CTS provider ciphers on OpenSSL 3.0 or later.</p>
<p>Applications which use this mode must adhere to these restrictions:</p>
<ul>
<li>The plaintext or ciphertext must be at least one block long.</li>
<li>The ciphertext has the same length as the plaintext.</li>
<li><code>cipher.update()</code> or <code>decipher.update()</code> must be called exactly once with all
input data. Stream methods such as <code>write(data)</code>, <code>end(data)</code>, or <code>pipe()</code> may
fail because CBC-CTS does not accept multiple data updates.</li>
<li><code>cipher.final()</code> or <code>decipher.final()</code> must still be called to complete the
operation.</li>
<li><code>crypto.getCipherInfo()</code> reports the base mode as <code>'cbc'</code>.</li>
</ul>
<h3>XTS mode</h3>
<p>XTS ciphers operate on independently tweakable data units. A <code>Cipheriv</code> or
<code>Decipheriv</code> instance represents one complete data unit, and its <code>iv</code> argument
provides the 16-byte tweak. Use a new instance with the appropriate positional
tweak for each different logical data unit.</p>
<p>Applications which use XTS mode must adhere to these restrictions:</p>
<ul>
<li>The plaintext or ciphertext must be at least one 16-byte block. Its length
does not have to be a multiple of 16 bytes because XTS uses ciphertext
stealing for a final partial block.</li>
<li>The ciphertext has the same length as the plaintext.</li>
<li><code>cipher.update()</code> or <code>decipher.update()</code> must be called exactly once with all
input data. Stream methods such as <code>write(data)</code>, <code>end(data)</code>, or <code>pipe()</code> may
fail because XTS does not accept multiple data updates.</li>
<li><code>cipher.final()</code> or <code>decipher.final()</code> must still be called to complete the
operation.</li>
</ul>
<p>For <code>sm4-xts</code>, the <code>xtsStandard</code> option to <a href="#cryptocreatecipherivalgorithm-key-iv-options"><code>crypto.createCipheriv()</code></a> or
<a href="#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a> selects either the default <code>'GB'</code> variant from
GB/T 17964-2021 or the <code>'IEEE'</code> variant from IEEE Std 1619-2007. Encryption and
decryption must use the same variant. The option is available only for
<code>sm4-xts</code>; it does not apply to AES-XTS ciphers. OpenSSL's default provider
supports <code>sm4-xts</code> in OpenSSL 3.2 or later.</p>
<h3>AES key wrap modes</h3>
<p>AES key wrap (<code>AES-WRAP</code>) and AES key wrap with padding (<code>AES-WRAP-PAD</code>)
ciphers operate on a complete key-data value rather than on an incremental byte
stream. The inverse-transform variants have the same processing restrictions.</p>
<p>Applications which use an AES key wrap cipher must adhere to these
restrictions:</p>
<ul>
<li><code>cipher.update()</code> or <code>decipher.update()</code> must be called exactly once with the
complete, non-empty input value.</li>
<li>Do not use AES key wrap ciphers as generic <a href="stream.md#class-streamtransform"><code>stream.Transform</code></a> streams.
Methods such as <code>write(data)</code>, <code>end(data)</code>, and <code>pipe()</code> can split one value
across multiple updates, with each update being treated as a separate wrap or
unwrap operation.</li>
<li><code>cipher.final()</code> or <code>decipher.final()</code> must still be called to complete the
operation.</li>
</ul>
<h3>SIV and GCM-SIV modes</h3>
<p><code>SIV</code>[^openssl30] and <code>GCM-SIV</code>[^openssl32] are supported <a href="https://en.wikipedia.org/wiki/Authenticated_encryption">AEAD algorithms</a>
when supported by OpenSSL. Applications which use these modes must adhere to
certain restrictions when using the cipher API:</p>
<ul>
<li>The authentication tag length is fixed at 16 bytes.</li>
<li><code>AES-SIV</code> keys are twice the named AES key size: <code>aes-128-siv</code> requires a
32-byte key, <code>aes-192-siv</code> requires a 48-byte key, and <code>aes-256-siv</code>
requires a 64-byte key.</li>
<li><code>AES-SIV</code> ciphers do not use an initialization vector. Pass <code>null</code> or a
zero-length <code>iv</code> to <a href="#cryptocreatecipherivalgorithm-key-iv-options"><code>crypto.createCipheriv()</code></a> or
<a href="#cryptocreatedecipherivalgorithm-key-iv-options"><code>crypto.createDecipheriv()</code></a>.</li>
<li><code>AES-SIV</code> and <code>AES-GCM-SIV</code> support zero-length plaintext only with OpenSSL
3.5 or later.</li>
<li><code>AES-SIV</code> does not have a separate nonce or IV parameter. RFC 5297 defines
<code>AES-SIV</code> over an ordered list of associated-data inputs. Each <code>setAAD()</code>
call supplies one input in that list. If a protocol uses a nonce with
<code>AES-SIV</code>, call <code>setAAD(nonce)</code> after the other associated-data inputs and
before <code>update()</code>. At most 126 associated-data inputs may be supplied.</li>
<li><code>AES-GCM-SIV</code> ciphers require a 12-byte initialization vector.</li>
<li>When decrypting, the authentication tag must be set via <code>setAuthTag()</code> before
calling <code>update()</code>.</li>
<li>Using stream methods such as <code>write(data)</code>, <code>end(data)</code> or <code>pipe()</code> might
fail as these modes cannot handle more than one chunk of data per instance.</li>
<li>As these modes process the whole message at once, <code>update()</code> must be called
exactly once.</li>
<li>Even though calling <code>update()</code> is sufficient to encrypt/decrypt the message,
applications <em>must</em> call <code>final()</code> to compute or verify the authentication
tag.</li>
</ul>
<h3>FIPS mode</h3>
<p>Node.js exposes the FIPS support provided by the linked OpenSSL library. Node.js
is not itself FIPS validated. Validation belongs to a specific OpenSSL module or
provider and only applies when it is deployed according to its security policy.
Vendor-provided Node.js or OpenSSL builds can require a different configuration;
follow the vendor's documentation for those builds.</p>
<p>With OpenSSL 1.1.1, Node.js must be built against a FIPS-capable OpenSSL library.</p>
<p>With OpenSSL 3, FIPS support uses the provider model described in the
<a href="https://docs.openssl.org/master/man7/fips_module/">OpenSSL FIPS module guide</a>. Using FIPS-approved implementations requires:</p>
<ul>
<li>A correctly installed OpenSSL 3 FIPS provider.</li>
<li>An OpenSSL 3 <a href="https://docs.openssl.org/3.0/man5/fips_config/">FIPS module configuration file</a>.</li>
<li>The FIPS provider to be loaded into the OpenSSL library context used by
Node.js, normally by activating it in an OpenSSL configuration file when
Node.js starts.</li>
<li>The default property query to include <code>fips=yes</code> when cryptographic
implementations are fetched. This can be set from process startup by the
OpenSSL configuration, <a href="cli.md#--enable-fips"><code>--enable-fips</code></a>, or <a href="cli.md#--force-fips"><code>--force-fips</code></a>, or for
subsequent fetches by <code>crypto.setFips(true)</code>.</li>
</ul>
<p>An example OpenSSL 3 configuration file looks like this:</p>
<pre><code class="language-text">nodejs_conf = nodejs_init
config_diagnostics = 1

.include /&lt;absolute path&gt;/fipsmodule.cnf

[nodejs_init]
providers = provider_sect
alg_section = algorithm_sect

[provider_sect]
# The fips section name should match the section name inside the
# included fipsmodule.cnf.
fips = fips_sect
base = base_sect

[base_sect]
activate = 1

[algorithm_sect]
default_properties = fips=yes
</code></pre>
<p>The <code>fipsmodule.cnf</code> file is generated as part of the FIPS provider installation
and contains module integrity and self-test information. The exact command and
arguments are installation-specific; see <a href="https://docs.openssl.org/3.0/man5/fips_config/">OpenSSL FIPS configuration</a> and the
<a href="https://docs.openssl.org/master/man7/fips_module/">OpenSSL FIPS module guide</a>. The installation uses <code>openssl fipsinstall</code>.</p>
<p>The example activates the provider and enables the <code>fips=yes</code> property query
when Node.js starts. To activate the provider at startup but enable the property
query later with <code>crypto.setFips(true)</code>, omit <code>alg_section = algorithm_sect</code> and
the <code>[algorithm_sect]</code> block. The provider must still be loaded; when using this
startup configuration, keep its activation enabled. <code>crypto.setFips(true)</code>
should be called before application code uses other OpenSSL-backed APIs. It is
not equivalent to enabling the property query from process startup because
Node.js initializes some OpenSSL state before application code runs. Use the
example as written, <a href="cli.md#--enable-fips"><code>--enable-fips</code></a>, or <a href="cli.md#--force-fips"><code>--force-fips</code></a> when the property
query must be active from process startup.</p>
<p><code>config_diagnostics</code> causes configuration errors to prevent startup instead of
being ignored. The <code>base</code> provider supplies non-cryptographic supporting
algorithms, such as encoders and decoders, that are commonly needed alongside
the FIPS provider. <code>default_properties = fips=yes</code> restricts OpenSSL's default
algorithm selection to implementations that match <code>fips=yes</code>.</p>
<p>Set <code>OPENSSL_CONF</code> to the OpenSSL configuration file. For a dynamically loaded
provider, <code>OPENSSL_MODULES</code> can set the directory containing the provider module.
For example:</p>
<pre><code class="language-bash">export OPENSSL_CONF=/&lt;path to configuration file&gt;/nodejs.cnf
export OPENSSL_MODULES=/&lt;path to openssl lib&gt;/ossl-modules
</code></pre>
<p>The <a href="cli.md#--openssl-configfile"><code>--openssl-config</code></a> command-line option selects the configuration file and
takes precedence over <code>OPENSSL_CONF</code>. If neither is set, OpenSSL's default
configuration file is used.</p>
<p>By default, Node.js reads the <code>nodejs_conf</code> section instead of OpenSSL's usual
<code>openssl_conf</code> section. Use <a href="cli.md#--openssl-shared-config"><code>--openssl-shared-config</code></a> to read <code>openssl_conf</code>,
or build Node.js with <code>./configure --openssl-conf-name=&lt;name&gt;</code> to change the
default section name.</p>
<p>On OpenSSL 3, the configuration above enables the <code>fips=yes</code> property query at
startup. The following controls are also available:</p>
<ul>
<li><a href="cli.md#--enable-fips"><code>--enable-fips</code></a> and <a href="cli.md#--force-fips"><code>--force-fips</code></a> enable the property query and
additionally require the configured provider named <code>fips</code> to initialize and
pass its self-test. Node.js exits if that check fails. <code>--force-fips</code> also
prevents FIPS mode from being disabled from script code. With
<code>--force-fips=strict</code>, Node.js also rejects non-approved operations reported
through the OpenSSL FIPS indicator callback.</li>
<li><a href="#cryptosetfipsbool"><code>crypto.setFips()</code></a> changes the FIPS/property-query state. On OpenSSL 3, it
does not install, load, initialize, or validate a provider. Implementations
fetched before the call are not changed.</li>
<li><a href="#cryptogetfips"><code>crypto.getFips()</code></a> reports the FIPS/property-query state. On OpenSSL 3, a
return value of <code>1</code> does not prove that a FIPS provider is loaded or validated.</li>
<li>With <a href="cli.md#--enable-fips-indicator-events"><code>--enable-fips-indicator-events</code></a>, the
<a href="diagnostics_channel.md#event-cryptofipsindicator"><code>'crypto.fips.indicator'</code></a> diagnostics channel reports non-approved
operations permitted by an OpenSSL 3.4 or later FIPS provider configured for
backwards compatibility.</li>
</ul>
<p>With OpenSSL 1.1.1, these controls use the library's FIPS mode support and
require a FIPS-capable OpenSSL build.</p>
<p>Only algorithms available under the active FIPS settings can be used. With
OpenSSL 3, if no loaded provider supplies a requested cryptographic
implementation matching <code>fips=yes</code>, fetching it fails, typically with
<code>ERR_OSSL_EVP_UNSUPPORTED</code>. The same error can occur for algorithms that
Node.js supports when FIPS mode is disabled but that are unavailable under the
active FIPS settings.</p>
<p>OpenSSL documents that the same FIPS provider cannot be used by multiple copies
of <code>libcrypto</code> in one process. This can affect native addons that load another
copy of <code>libcrypto</code>; OpenSSL's documented workaround is to use a separate copy
of the provider for each <code>libcrypto</code> instance. See <a href="https://docs.openssl.org/3.6/man7/OSSL_PROVIDER-FIPS/">OpenSSL FIPS provider
limitations</a>.</p>
<h2>Crypto constants</h2>
<p>The following constants exported by <code>crypto.constants</code> apply to various uses of
the <code>node:crypto</code>, <code>node:tls</code>, and <code>node:https</code> modules and are generally
specific to OpenSSL.</p>
<h3>OpenSSL options</h3>
<p>See the <a href="https://wiki.openssl.org/index.php/List_of_SSL_OP_Flags#Table_of_Options">list of SSL OP Flags</a> for details.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_ALL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Applies multiple bug workarounds within OpenSSL. See
&lt;a href=&quot;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&quot;&gt;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&lt;/a&gt;
for detail.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_ALLOW_NO_DHE_KEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to allow a non-[EC]DHE-based key exchange mode
for TLS v1.3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Allows legacy insecure renegotiation between OpenSSL and unpatched
clients or servers. See
&lt;a href=&quot;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&quot;&gt;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&lt;/a&gt;.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_CIPHER_SERVER_PREFERENCE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Attempts to use the server's preferences instead of the client's when
selecting a cipher. Behavior depends on protocol version. See
&lt;a href=&quot;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&quot;&gt;https://www.openssl.org/docs/man3.0/man3/SSL_CTX_set_options.html&lt;/a&gt;.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_CISCO_ANYCONNECT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to use Cisco's version identifier of DTLS_BAD_VER.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_COOKIE_EXCHANGE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn on cookie exchange.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_CRYPTOPRO_TLSEXT_BUG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to add server-hello extension from an early version
of the cryptopro draft.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable an SSL 3.0/TLS 1.0 vulnerability
workaround added in OpenSSL 0.9.6d.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_LEGACY_SERVER_CONNECT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Allows initial connection to servers that do not support RI.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_COMPRESSION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable support for SSL/TLS compression.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_ENCRYPT_THEN_MAC&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable encrypt-then-MAC.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_QUERY_MTU&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_RENEGOTIATION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable renegotiation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to always start a new session when performing
renegotiation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_SSLv2&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off SSL v2&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_SSLv3&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off SSL v3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_TICKET&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable use of RFC4507bis tickets.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_TLSv1&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off TLS v1&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_TLSv1_1&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off TLS v1.1&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_TLSv1_2&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off TLS v1.2&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_NO_TLSv1_3&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to turn off TLS v1.3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_PRIORITIZE_CHACHA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL server to prioritize ChaCha20-Poly1305
when the client does.
This option has no effect if
&lt;code&gt;SSL_OP_CIPHER_SERVER_PREFERENCE&lt;/code&gt;
is not enabled.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SSL_OP_TLS_ROLLBACK_BUG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Instructs OpenSSL to disable version rollback attack detection.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>OpenSSL engine constants</h3>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_RSA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to RSA&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_DSA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to DSA&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_DH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to DH&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_RAND&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to RAND&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_EC&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to EC&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_CIPHERS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to CIPHERS&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_DIGESTS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to DIGESTS&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_PKEY_METHS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to PKEY_METHS&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_PKEY_ASN1_METHS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Limit engine usage to PKEY_ASN1_METHS&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_ALL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENGINE_METHOD_NONE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>Other OpenSSL constants</h3>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;DH_CHECK_P_NOT_SAFE_PRIME&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;DH_CHECK_P_NOT_PRIME&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;DH_UNABLE_TO_CHECK_GENERATOR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;DH_NOT_SUITABLE_GENERATOR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PKCS1_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_SSLV23_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_NO_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PKCS1_OAEP_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_X931_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PKCS1_PSS_PADDING&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PSS_SALTLEN_DIGEST&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sets the salt length for &lt;code&gt;RSA_PKCS1_PSS_PADDING&lt;/code&gt; to the
digest size when signing or verifying.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PSS_SALTLEN_MAX_SIGN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sets the salt length for &lt;code&gt;RSA_PKCS1_PSS_PADDING&lt;/code&gt; to the
maximum permissible value when signing data.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RSA_PSS_SALTLEN_AUTO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Causes the salt length for &lt;code&gt;RSA_PKCS1_PSS_PADDING&lt;/code&gt; to be
determined automatically when verifying a signature.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;POINT_CONVERSION_COMPRESSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;POINT_CONVERSION_UNCOMPRESSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;POINT_CONVERSION_HYBRID&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>Node.js crypto constants</h3>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;defaultCoreCipherList&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Specifies the built-in default cipher list used by Node.js.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;defaultCipherList&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Specifies the active default cipher list used by the current Node.js
process.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<p>[^openssl30]: Requires OpenSSL &gt;= 3.0</p>
<p>[^openssl32]: Requires OpenSSL &gt;= 3.2</p>
<p>[^openssl35]: Requires OpenSSL &gt;= 3.5</p>
