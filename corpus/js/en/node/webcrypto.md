---
id: "js-en-function-node-webcrypto"
language: "js"
lang: "en"
category: "function"
name: "node:webcrypto"
title: "Web Crypto API"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/webcrypto.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Web Crypto API

<h1>Web Crypto API</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Node.js provides an implementation of the <a href="https://www.w3.org/TR/WebCryptoAPI/">Web Crypto API</a> standard.</p>
<p>Use <code>globalThis.crypto</code> or <code>require('node:crypto').webcrypto</code> to access this
module.</p>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

(async function() {

  const key = await subtle.generateKey({
    name: 'HMAC',
    hash: 'SHA-256',
    length: 256,
  }, true, ['sign', 'verify']);

  const enc = new TextEncoder();
  const message = enc.encode('I love cupcakes');

  const digest = await subtle.sign({
    name: 'HMAC',
  }, key, message);

})();
</code></pre>
<h2>Modern Algorithms in the Web Cryptography API</h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Node.js provides an implementation of the following features from the
<a href="https://wicg.github.io/webcrypto-modern-algos/">Modern Algorithms in the Web Cryptography API</a>
WICG proposal:</p>
<p>Algorithms:</p>
<ul>
<li><code>'AES-OCB'</code>[^openssl30]</li>
<li><code>'Argon2d'</code>[^openssl32]</li>
<li><code>'Argon2i'</code>[^openssl32]</li>
<li><code>'Argon2id'</code>[^openssl32]</li>
<li><code>'ChaCha20-Poly1305'</code></li>
<li><code>'cSHAKE128'</code></li>
<li><code>'cSHAKE256'</code></li>
<li><code>'KMAC128'</code>[^openssl30]</li>
<li><code>'KMAC256'</code>[^openssl30]</li>
<li><code>'KT128'</code></li>
<li><code>'KT256'</code></li>
<li><code>'ML-DSA-44'</code>[^openssl35]</li>
<li><code>'ML-DSA-65'</code>[^openssl35]</li>
<li><code>'ML-DSA-87'</code>[^openssl35]</li>
<li><code>'ML-KEM-512'</code>[^openssl35]</li>
<li><code>'ML-KEM-768'</code>[^openssl35]</li>
<li><code>'ML-KEM-1024'</code>[^openssl35]</li>
<li><code>'MLKEM768-P256'</code>[^openssl35]</li>
<li><code>'MLKEM768-X25519'</code>[^openssl35]</li>
<li><code>'MLKEM1024-P384'</code>[^openssl35]</li>
<li><code>'SHA3-256'</code></li>
<li><code>'SHA3-384'</code></li>
<li><code>'SHA3-512'</code></li>
<li><code>'TurboSHAKE128'</code></li>
<li><code>'TurboSHAKE256'</code></li>
</ul>
<p>Key Formats:</p>
<ul>
<li><code>'raw-public'</code></li>
<li><code>'raw-secret'</code></li>
<li><code>'raw-seed'</code></li>
</ul>
<p>Methods:</p>
<ul>
<li><a href="#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext"><code>subtle.decapsulateBits()</code></a></li>
<li><a href="#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-keyusages"><code>subtle.decapsulateKey()</code></a></li>
<li><a href="#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey"><code>subtle.encapsulateBits()</code></a></li>
<li><a href="#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-keyusages"><code>subtle.encapsulateKey()</code></a></li>
<li><a href="#subtlegetpublickeykey-keyusages"><code>subtle.getPublicKey()</code></a></li>
<li><a href="#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm"><code>SubtleCrypto.supports()</code></a></li>
</ul>
<h2>Secure Curves in the Web Cryptography API</h2>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<p>Node.js provides an implementation of the following features from the
<a href="https://wicg.github.io/webcrypto-secure-curves/">Secure Curves in the Web Cryptography API</a>
WICG proposal:</p>
<p>Algorithms:</p>
<ul>
<li><code>'Ed448'</code></li>
<li><code>'X448'</code></li>
</ul>
<h2>Examples</h2>
<h3>Generating keys</h3>
<p>The {SubtleCrypto} class can be used to generate symmetric (secret) keys
or asymmetric key pairs (public key and private key).</p>
<h4>AES keys</h4>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateAesKey(length = 256) {
  const key = await subtle.generateKey({
    name: 'AES-CBC',
    length,
  }, true, ['encrypt', 'decrypt']);

  return key;
}
</code></pre>
<h4>ECDSA key pairs</h4>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateEcKey(namedCurve = 'P-521') {
  const {
    publicKey,
    privateKey,
  } = await subtle.generateKey({
    name: 'ECDSA',
    namedCurve,
  }, true, ['sign', 'verify']);

  return { publicKey, privateKey };
}
</code></pre>
<h4>Ed25519/X25519 key pairs</h4>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateEd25519Key() {
  return subtle.generateKey({
    name: 'Ed25519',
  }, true, ['sign', 'verify']);
}

async function generateX25519Key() {
  return subtle.generateKey({
    name: 'X25519',
  }, true, ['deriveKey']);
}
</code></pre>
<h4>HMAC keys</h4>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateHmacKey(hash = 'SHA-256') {
  const key = await subtle.generateKey({
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return key;
}
</code></pre>
<h4>RSA key pairs</h4>
<pre><code class="language-js">const { subtle } = globalThis.crypto;
const publicExponent = new Uint8Array([1, 0, 1]);

async function generateRsaKey(modulusLength = 2048, hash = 'SHA-256') {
  const {
    publicKey,
    privateKey,
  } = await subtle.generateKey({
    name: 'RSASSA-PKCS1-v1_5',
    modulusLength,
    publicExponent,
    hash,
  }, true, ['sign', 'verify']);

  return { publicKey, privateKey };
}
</code></pre>
<h3>Encryption and decryption</h3>
<pre><code class="language-js">const crypto = globalThis.crypto;

async function aesEncrypt(plaintext) {
  const ec = new TextEncoder();
  const key = await generateAesKey();
  const iv = crypto.getRandomValues(new Uint8Array(16));

  const ciphertext = await crypto.subtle.encrypt({
    name: 'AES-CBC',
    iv,
  }, key, ec.encode(plaintext));

  return {
    key,
    iv,
    ciphertext,
  };
}

async function aesDecrypt(ciphertext, key, iv) {
  const dec = new TextDecoder();
  const plaintext = await crypto.subtle.decrypt({
    name: 'AES-CBC',
    iv,
  }, key, ciphertext);

  return dec.decode(plaintext);
}
</code></pre>
<h3>Exporting and importing keys</h3>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateAndExportHmacKey(format = 'jwk', hash = 'SHA-512') {
  const key = await subtle.generateKey({
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return subtle.exportKey(format, key);
}

async function importHmacKey(keyData, format = 'jwk', hash = 'SHA-512') {
  const key = await subtle.importKey(format, keyData, {
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return key;
}
</code></pre>
<h3>Wrapping and unwrapping keys</h3>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function generateAndWrapHmacKey(format = 'jwk', hash = 'SHA-512') {
  const [
    key,
    wrappingKey,
  ] = await Promise.all([
    subtle.generateKey({
      name: 'HMAC', hash,
    }, true, ['sign', 'verify']),
    subtle.generateKey({
      name: 'AES-KW',
      length: 256,
    }, true, ['wrapKey', 'unwrapKey']),
  ]);

  const wrappedKey = await subtle.wrapKey(format, key, wrappingKey, 'AES-KW');

  return { wrappedKey, wrappingKey };
}

async function unwrapHmacKey(
  wrappedKey,
  wrappingKey,
  format = 'jwk',
  hash = 'SHA-512') {

  const key = await subtle.unwrapKey(
    format,
    wrappedKey,
    wrappingKey,
    'AES-KW',
    { name: 'HMAC', hash },
    true,
    ['sign', 'verify']);

  return key;
}
</code></pre>
<h3>Sign and verify</h3>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function sign(key, data) {
  const ec = new TextEncoder();
  const signature =
    await subtle.sign('RSASSA-PKCS1-v1_5', key, ec.encode(data));
  return signature;
}

async function verify(key, signature, data) {
  const ec = new TextEncoder();
  const verified =
    await subtle.verify(
      'RSASSA-PKCS1-v1_5',
      key,
      signature,
      ec.encode(data));
  return verified;
}
</code></pre>
<h3>Deriving bits and keys</h3>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function pbkdf2(pass, salt, iterations = 1000, length = 256) {
  const ec = new TextEncoder();
  const key = await subtle.importKey(
    'raw',
    ec.encode(pass),
    'PBKDF2',
    false,
    ['deriveBits']);
  const bits = await subtle.deriveBits({
    name: 'PBKDF2',
    hash: 'SHA-512',
    salt: ec.encode(salt),
    iterations,
  }, key, length);
  return bits;
}

async function pbkdf2Key(pass, salt, iterations = 1000, length = 256) {
  const ec = new TextEncoder();
  const keyMaterial = await subtle.importKey(
    'raw',
    ec.encode(pass),
    'PBKDF2',
    false,
    ['deriveKey']);
  const key = await subtle.deriveKey({
    name: 'PBKDF2',
    hash: 'SHA-512',
    salt: ec.encode(salt),
    iterations,
  }, keyMaterial, {
    name: 'AES-GCM',
    length,
  }, true, ['encrypt', 'decrypt']);
  return key;
}
</code></pre>
<h3>Digest</h3>
<pre><code class="language-js">const { subtle } = globalThis.crypto;

async function digest(data, algorithm = 'SHA-512') {
  const ec = new TextEncoder();
  const digest = await subtle.digest(algorithm, ec.encode(data));
  return digest;
}
</code></pre>
<h3>Checking for runtime algorithm support</h3>
<p><a href="#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm"><code>SubtleCrypto.supports()</code></a> allows feature detection in Web Crypto API,
which can be used to detect whether a given algorithm identifier
(including its parameters) is supported for the given operation.</p>
<p>This example derives a key from a password using Argon2, if available,
or PBKDF2, otherwise; and then encrypts and decrypts some text with it
using AES-OCB, if available, and AES-GCM, otherwise.</p>
<pre><code class="language-mjs">const { SubtleCrypto, crypto } = globalThis;

const password = 'correct horse battery staple';
const derivationAlg =
  SubtleCrypto.supports?.('importKey', 'Argon2id') ?
    'Argon2id' :
    'PBKDF2';
const encryptionAlg =
  SubtleCrypto.supports?.('importKey', 'AES-OCB') ?
    'AES-OCB' :
    'AES-GCM';
const passwordKey = await crypto.subtle.importKey(
  derivationAlg === 'Argon2id' ? 'raw-secret' : 'raw',
  new TextEncoder().encode(password),
  derivationAlg,
  false,
  ['deriveKey'],
);
const nonce = crypto.getRandomValues(new Uint8Array(16));
const derivationParams =
  derivationAlg === 'Argon2id' ?
    {
      nonce,
      parallelism: 4,
      memory: 2 ** 21,
      passes: 1,
    } :
    {
      salt: nonce,
      iterations: 100_000,
      hash: 'SHA-256',
    };
const key = await crypto.subtle.deriveKey(
  {
    name: derivationAlg,
    ...derivationParams,
  },
  passwordKey,
  {
    name: encryptionAlg,
    length: 256,
  },
  false,
  ['encrypt', 'decrypt'],
);
const plaintext = 'Hello, world!';
const iv = crypto.getRandomValues(new Uint8Array(12));
const encrypted = await crypto.subtle.encrypt(
  { name: encryptionAlg, iv },
  key,
  new TextEncoder().encode(plaintext),
);
const decrypted = new TextDecoder().decode(await crypto.subtle.decrypt(
  { name: encryptionAlg, iv },
  key,
  encrypted,
));
</code></pre>
<h2>Algorithm support</h2>
<p>The following sections detail the algorithms supported by the Node.js Web
Crypto API implementation and the APIs supported for each:</p>
<h3>Key Management APIs</h3>
<ul>
<li><a href="#subtlegeneratekeyalgorithm-extractable-keyusages"><code>subtle.generateKey()</code></a>, <a href="#subtleexportkeyformat-key"><code>subtle.exportKey()</code></a>, and
<a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a> support <code>'AES-CBC'</code>, <code>'AES-CTR'</code>, <code>'AES-GCM'</code>,
<code>'AES-KW'</code>, <code>'AES-OCB'</code>, <code>'ChaCha20-Poly1305'</code>[^modern-algos], <code>'HMAC'</code>,
<code>'KMAC128'</code>[^modern-algos], and <code>'KMAC256'</code>[^modern-algos].</li>
<li><a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a> supports <code>'Argon2d'</code>, <code>'Argon2i'</code>, <code>'Argon2id'</code>,
<code>'HKDF'</code>, and <code>'PBKDF2'</code>.</li>
<li><a href="#subtlegeneratekeyalgorithm-extractable-keyusages"><code>subtle.generateKey()</code></a>, <a href="#subtleexportkeyformat-key"><code>subtle.exportKey()</code></a>,
<a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a>, and <a href="#subtlegetpublickeykey-keyusages"><code>subtle.getPublicKey()</code></a> support <code>'ECDH'</code>,
<code>'ECDSA'</code>, <code>'Ed25519'</code>, <code>'Ed448'</code>[^secure-curves],
<code>'ML-DSA-44'</code>[^modern-algos], <code>'ML-DSA-65'</code>[^modern-algos],
<code>'ML-DSA-87'</code>[^modern-algos], <code>'ML-KEM-512'</code>[^modern-algos],
<code>'ML-KEM-768'</code>[^modern-algos], <code>'ML-KEM-1024'</code>[^modern-algos],
<code>'MLKEM768-P256'</code>[^modern-algos], <code>'MLKEM768-X25519'</code>[^modern-algos],
<code>'MLKEM1024-P384'</code>[^modern-algos], <code>'RSA-OAEP'</code>, <code>'RSA-PSS'</code>,
<code>'RSASSA-PKCS1-v1_5'</code>, <code>'X25519'</code>, and <code>'X448'</code>[^secure-curves].</li>
</ul>
<h3>Crypto Operation APIs</h3>
<ul>
<li><a href="#subtleencryptalgorithm-key-data"><code>subtle.encrypt()</code></a> and <a href="#subtledecryptalgorithm-key-data"><code>subtle.decrypt()</code></a> support <code>'AES-CBC'</code>,
<code>'AES-CTR'</code>, <code>'AES-GCM'</code>, <code>'AES-OCB'</code>,
<code>'ChaCha20-Poly1305'</code>[^modern-algos], and <code>'RSA-OAEP'</code>.</li>
<li><a href="#subtlesignalgorithm-key-data"><code>subtle.sign()</code></a> and <a href="#subtleverifyalgorithm-key-signature-data"><code>subtle.verify()</code></a> support <code>'ECDSA'</code>, <code>'Ed25519'</code>,
<code>'Ed448'</code>[^secure-curves], <code>'HMAC'</code>, <code>'KMAC128'</code>[^modern-algos],
<code>'KMAC256'</code>[^modern-algos], <code>'ML-DSA-44'</code>[^modern-algos],
<code>'ML-DSA-65'</code>[^modern-algos], <code>'ML-DSA-87'</code>[^modern-algos], <code>'RSA-PSS'</code>, and
<code>'RSASSA-PKCS1-v1_5'</code>.</li>
<li><a href="#subtlederivebitsalgorithm-basekey-length"><code>subtle.deriveBits()</code></a> and <a href="#subtlederivekeyalgorithm-basekey-derivedkeytype-extractable-keyusages"><code>subtle.deriveKey()</code></a> support <code>'Argon2d'</code>,
<code>'Argon2i'</code>, <code>'Argon2id'</code>, <code>'ECDH'</code>, <code>'HKDF'</code>, <code>'PBKDF2'</code>, <code>'X25519'</code>, and
<code>'X448'</code>[^secure-curves].</li>
<li><a href="#subtlewrapkeyformat-key-wrappingkey-wrapalgorithm"><code>subtle.wrapKey()</code></a> and <a href="#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgorithm-unwrappedkeyalgorithm-extractable-keyusages"><code>subtle.unwrapKey()</code></a> support <code>'AES-CBC'</code>,
<code>'AES-CTR'</code>, <code>'AES-GCM'</code>, <code>'AES-KW'</code>, <code>'AES-OCB'</code>,
<code>'ChaCha20-Poly1305'</code>[^modern-algos], and <code>'RSA-OAEP'</code>.</li>
<li><a href="#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey"><code>subtle.encapsulateBits()</code></a>, <a href="#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext"><code>subtle.decapsulateBits()</code></a>,
<a href="#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-keyusages"><code>subtle.encapsulateKey()</code></a>, and <a href="#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-keyusages"><code>subtle.decapsulateKey()</code></a> support
<code>'ML-KEM-512'</code>[^modern-algos], <code>'ML-KEM-768'</code>[^modern-algos],
<code>'ML-KEM-1024'</code>[^modern-algos], <code>'MLKEM768-P256'</code>[^modern-algos],
<code>'MLKEM768-X25519'</code>[^modern-algos], and
<code>'MLKEM1024-P384'</code>[^modern-algos].</li>
<li><a href="#subtledigestalgorithm-data"><code>subtle.digest()</code></a> supports <code>'cSHAKE128'</code>[^modern-algos],
<code>'cSHAKE256'</code>[^modern-algos], <code>'KT128'</code>[^modern-algos],
<code>'KT256'</code>[^modern-algos], <code>'SHA-1'</code>, <code>'SHA-256'</code>, <code>'SHA-384'</code>, <code>'SHA-512'</code>,
<code>'SHA3-256'</code>[^modern-algos], <code>'SHA3-384'</code>[^modern-algos],
<code>'SHA3-512'</code>[^modern-algos], <code>'TurboSHAKE128'</code>[^modern-algos], and
<code>'TurboSHAKE256'</code>[^modern-algos].</li>
</ul>
<h3>Key Formats</h3>
<p>The following list describes the formats supported by <a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a>
and <a href="#subtleexportkeyformat-key"><code>subtle.exportKey()</code></a>.</p>
<ul>
<li><strong><code>'AES-CBC'</code>, <code>'AES-CTR'</code>, <code>'AES-GCM'</code>, <code>'AES-KW'</code>, and <code>'HMAC'</code></strong> can
be imported and exported using <code>'jwk'</code>, <code>'raw'</code>, and
<code>'raw-secret'</code>[^modern-algos].</li>
<li><strong><code>'AES-OCB'</code>[^modern-algos], <code>'ChaCha20-Poly1305'</code>[^modern-algos],
<code>'KMAC128'</code>[^modern-algos], and <code>'KMAC256'</code>[^modern-algos]</strong> can be imported
and exported using <code>'jwk'</code> and <code>'raw-secret'</code>[^modern-algos].</li>
<li><strong><code>'Argon2d'</code>[^modern-algos], <code>'Argon2i'</code>[^modern-algos], and
<code>'Argon2id'</code>[^modern-algos]</strong> can be imported using
<code>'raw-secret'</code>[^modern-algos]; export is not supported.</li>
<li><strong><code>'ECDH'</code>, <code>'ECDSA'</code>, <code>'Ed25519'</code>, <code>'Ed448'</code>[^secure-curves], <code>'X25519'</code>,
and <code>'X448'</code>[^secure-curves]</strong> can be imported and exported using <code>'spki'</code>,
<code>'pkcs8'</code>, <code>'jwk'</code>, <code>'raw'</code>, and <code>'raw-public'</code>[^modern-algos].</li>
<li><strong><code>'HKDF'</code> and <code>'PBKDF2'</code></strong> can be imported using <code>'raw'</code> and
<code>'raw-secret'</code>[^modern-algos]; export is not supported.</li>
<li><strong><code>'ML-DSA-44'</code>[^modern-algos], <code>'ML-DSA-65'</code>[^modern-algos],
<code>'ML-DSA-87'</code>[^modern-algos], <code>'ML-KEM-512'</code>[^modern-algos],
<code>'ML-KEM-768'</code>[^modern-algos], and <code>'ML-KEM-1024'</code>[^modern-algos]</strong> can be
imported and exported using <code>'spki'</code>, <code>'pkcs8'</code>, <code>'jwk'</code>,
<code>'raw-public'</code>[^modern-algos], and <code>'raw-seed'</code>[^modern-algos].</li>
<li><strong><code>'MLKEM768-P256'</code>[^modern-algos],
<code>'MLKEM768-X25519'</code>[^modern-algos], and
<code>'MLKEM1024-P384'</code>[^modern-algos]</strong> can be imported and exported using
<code>'jwk'</code>, <code>'raw-public'</code>[^modern-algos], and <code>'raw-seed'</code>[^modern-algos].</li>
<li><strong><code>'RSA-OAEP'</code>, <code>'RSA-PSS'</code>, and <code>'RSASSA-PKCS1-v1_5'</code></strong> can be imported
and exported using <code>'spki'</code>, <code>'pkcs8'</code>, and <code>'jwk'</code>.</li>
</ul>
<h2>Class: <code>Crypto</code></h2>
<p><code>globalThis.crypto</code> is an instance of the <code>Crypto</code>
class. <code>Crypto</code> is a singleton that provides access to the remainder of the
crypto API.</p>
<h3><code>crypto.subtle</code></h3>
<ul>
<li>Type: {SubtleCrypto}</li>
</ul>
<p>Provides access to the <code>SubtleCrypto</code> API.</p>
<h3><code>crypto.getRandomValues(typedArray)</code></h3>
<ul>
<li><code>typedArray</code> {Buffer|TypedArray}</li>
<li>Returns: {Buffer|TypedArray}</li>
</ul>
<p>Generates cryptographically strong random values. The given <code>typedArray</code> is
filled with random values, and a reference to <code>typedArray</code> is returned.</p>
<p>The given <code>typedArray</code> must be an integer-based instance of {TypedArray},
i.e. <code>Float32Array</code> and <code>Float64Array</code> are not accepted.</p>
<p>An error will be thrown if the given <code>typedArray</code> is larger than 65,536 bytes.</p>
<h3><code>crypto.randomUUID()</code></h3>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Generates a random <a href="https://www.rfc-editor.org/rfc/rfc4122.txt">RFC 4122</a> version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.</p>
<h2>Class: <code>CryptoKey</code></h2>
<h3><code>cryptoKey.algorithm</code></h3>
<ul>
<li>Type: {KeyAlgorithm|RsaHashedKeyAlgorithm|EcKeyAlgorithm|AesKeyAlgorithm|HmacKeyAlgorithm|KmacKeyAlgorithm}</li>
</ul>
<p>An object detailing the algorithm for which the key can be used along with
additional algorithm-specific parameters.</p>
<p>Read-only.</p>
<h3><code>cryptoKey.extractable</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>When <code>true</code>, the {CryptoKey} can be extracted using either
<a href="#subtleexportkeyformat-key"><code>subtle.exportKey()</code></a> or <a href="#subtlewrapkeyformat-key-wrappingkey-wrapalgorithm"><code>subtle.wrapKey()</code></a>.</p>
<p>Read-only.</p>
<h3><code>cryptoKey.type</code></h3>
<ul>
<li>Type: {string} One of <code>'secret'</code>, <code>'private'</code>, or <code>'public'</code>.</li>
</ul>
<p>A string identifying whether the key is a symmetric (<code>'secret'</code>) or
asymmetric (<code>'private'</code> or <code>'public'</code>) key.</p>
<h3><code>cryptoKey.usages</code></h3>
<ul>
<li>Type: {string[]}</li>
</ul>
<p>An array of strings identifying the operations for which the
key may be used.</p>
<p>The possible usages are:</p>
<ul>
<li><code>'encrypt'</code> - Enable using the key with <a href="#subtleencryptalgorithm-key-data"><code>subtle.encrypt()</code></a></li>
<li><code>'decrypt'</code> - Enable using the key with <a href="#subtledecryptalgorithm-key-data"><code>subtle.decrypt()</code></a></li>
<li><code>'sign'</code> - Enable using the key with <a href="#subtlesignalgorithm-key-data"><code>subtle.sign()</code></a></li>
<li><code>'verify'</code> - Enable using the key with <a href="#subtleverifyalgorithm-key-signature-data"><code>subtle.verify()</code></a></li>
<li><code>'deriveKey'</code> - Enable using the key with <a href="#subtlederivekeyalgorithm-basekey-derivedkeytype-extractable-keyusages"><code>subtle.deriveKey()</code></a></li>
<li><code>'deriveBits'</code> - Enable using the key with <a href="#subtlederivebitsalgorithm-basekey-length"><code>subtle.deriveBits()</code></a></li>
<li><code>'encapsulateBits'</code> - Enable using the key with <a href="#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey"><code>subtle.encapsulateBits()</code></a></li>
<li><code>'decapsulateBits'</code> - Enable using the key with <a href="#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext"><code>subtle.decapsulateBits()</code></a></li>
<li><code>'encapsulateKey'</code> - Enable using the key with <a href="#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-keyusages"><code>subtle.encapsulateKey()</code></a></li>
<li><code>'decapsulateKey'</code> - Enable using the key with <a href="#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-keyusages"><code>subtle.decapsulateKey()</code></a></li>
<li><code>'wrapKey'</code> - Enable using the key with <a href="#subtlewrapkeyformat-key-wrappingkey-wrapalgorithm"><code>subtle.wrapKey()</code></a></li>
<li><code>'unwrapKey'</code> - Enable using the key with <a href="#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgorithm-unwrappedkeyalgorithm-extractable-keyusages"><code>subtle.unwrapKey()</code></a></li>
</ul>
<p>Valid key usages depend on the key algorithm (identified by
<code>cryptokey.algorithm.name</code>). See <a href="#crypto-operation-apis">Crypto operation APIs</a> for the operations
supported by each key algorithm.</p>
<h2>Class: <code>CryptoKeyPair</code></h2>
<p>The <code>CryptoKeyPair</code> is a simple dictionary object with <code>publicKey</code> and
<code>privateKey</code> properties, representing an asymmetric key pair.</p>
<h3><code>cryptoKeyPair.privateKey</code></h3>
<ul>
<li>Type: {CryptoKey} A {CryptoKey} whose <code>type</code> will be <code>'private'</code>.</li>
</ul>
<h3><code>cryptoKeyPair.publicKey</code></h3>
<ul>
<li>Type: {CryptoKey} A {CryptoKey} whose <code>type</code> will be <code>'public'</code>.</li>
</ul>
<h2>Class: <code>SubtleCrypto</code></h2>
<h3>Static method: <code>SubtleCrypto.supports(operation, algorithm[, lengthOrAdditionalAlgorithm])</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>operation</code> {string} &quot;encrypt&quot;, &quot;decrypt&quot;, &quot;sign&quot;, &quot;verify&quot;, &quot;digest&quot;, &quot;generateKey&quot;, &quot;deriveKey&quot;, &quot;deriveBits&quot;, &quot;importKey&quot;, &quot;exportKey&quot;, &quot;getPublicKey&quot;, &quot;wrapKey&quot;, &quot;unwrapKey&quot;, &quot;encapsulateBits&quot;, &quot;encapsulateKey&quot;, &quot;decapsulateBits&quot;, or &quot;decapsulateKey&quot;</li>
<li><code>algorithm</code> {string|Algorithm}</li>
<li><code>lengthOrAdditionalAlgorithm</code> {null|number|string|Algorithm|undefined} Depending on the operation this is either ignored, the value of the length argument when operation is &quot;deriveBits&quot;, the algorithm of key to be derived when operation is &quot;deriveKey&quot;, the algorithm of key to be exported before wrapping when operation is &quot;wrapKey&quot;, the algorithm of key to be imported after unwrapping when operation is &quot;unwrapKey&quot;, or the algorithm of key to be imported after en/decapsulating a key when operation is &quot;encapsulateKey&quot; or &quot;decapsulateKey&quot;. <strong>Default:</strong> <code>null</code> when operation is &quot;deriveBits&quot;, <code>undefined</code> otherwise.</li>
<li>Returns: {boolean} Indicating whether the implementation supports the given operation</li>
</ul>
<p>Allows feature detection in Web Crypto API,
which can be used to detect whether a given algorithm identifier
(including its parameters) is supported for the given operation.</p>
<p>See <a href="#checking-for-runtime-algorithm-support">Checking for runtime algorithm support</a> for an example use of this method.</p>
<h3><code>subtle.decapsulateBits(decapsulationAlgorithm, decapsulationKey, ciphertext)</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>decapsulationAlgorithm</code> {string|Algorithm}</li>
<li><code>decapsulationKey</code> {CryptoKey}</li>
<li><code>ciphertext</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with {ArrayBuffer} upon success.</li>
</ul>
<p>A message recipient uses their asymmetric private key to decrypt an
&quot;encapsulated key&quot; (ciphertext), thereby recovering a temporary symmetric
key (represented as {ArrayBuffer}) which is then used to decrypt a message.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
</ul>
<h3><code>subtle.decapsulateKey(decapsulationAlgorithm, decapsulationKey, ciphertext, sharedKeyAlgorithm, extractable, keyUsages)</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>decapsulationAlgorithm</code> {string|Algorithm}</li>
<li><code>decapsulationKey</code> {CryptoKey}</li>
<li><code>ciphertext</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li><code>sharedKeyAlgorithm</code> {string|Algorithm|HmacImportParams|AesDerivedKeyParams|KmacImportParams}</li>
<li><code>extractable</code> {boolean}</li>
<li><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</li>
<li>Returns: {Promise} Fulfills with {CryptoKey} upon success.</li>
</ul>
<p>A message recipient uses their asymmetric private key to decrypt an
&quot;encapsulated key&quot; (ciphertext), thereby recovering a temporary symmetric
key (represented as {CryptoKey}) which is then used to decrypt a message.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
</ul>
<h3><code>subtle.decrypt(algorithm, key, data)</code></h3>
<ul>
<li><code>algorithm</code> {RsaOaepParams|AesCtrParams|AesCbcParams|AeadParams}</li>
<li><code>key</code> {CryptoKey}</li>
<li><code>data</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>Using the method and parameters specified in <code>algorithm</code> and the keying
material provided by <code>key</code>, this method attempts to decipher the
provided <code>data</code>. If successful, the returned promise will be resolved with
an {ArrayBuffer} containing the plaintext result.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
</ul>
<h3><code>subtle.deriveBits(algorithm, baseKey[, length])</code></h3>
<ul>
<li><code>algorithm</code> {EcdhKeyDeriveParams|HkdfParams|Pbkdf2Params|Argon2Params}</li>
<li><code>baseKey</code> {CryptoKey}</li>
<li><code>length</code> {number|null} <strong>Default:</strong> <code>null</code></li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>Using the method and parameters specified in <code>algorithm</code> and the keying
material provided by <code>baseKey</code>, this method attempts to generate
<code>length</code> bits.</p>
<p>When <code>length</code> is not provided or <code>null</code> the maximum number of bits for a given
algorithm is generated. This is allowed for the <code>'ECDH'</code>, <code>'X25519'</code>, and <code>'X448'</code>[^secure-curves]
algorithms, for other algorithms <code>length</code> is required to be a number.</p>
<p>If successful, the returned promise will be resolved with an {ArrayBuffer}
containing the generated data.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'Argon2d'</code>[^modern-algos]</li>
<li><code>'Argon2i'</code>[^modern-algos]</li>
<li><code>'Argon2id'</code>[^modern-algos]</li>
<li><code>'ECDH'</code></li>
<li><code>'HKDF'</code></li>
<li><code>'PBKDF2'</code></li>
<li><code>'X25519'</code></li>
<li><code>'X448'</code>[^secure-curves]</li>
</ul>
<h3><code>subtle.deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages)</code></h3>
<ul>
<li><code>algorithm</code> {EcdhKeyDeriveParams|HkdfParams|Pbkdf2Params|Argon2Params}</li>
<li><code>baseKey</code> {CryptoKey}</li>
<li><code>derivedKeyType</code> {string|Algorithm|HmacImportParams|AesDerivedKeyParams|KmacImportParams}</li>
<li><code>extractable</code> {boolean}</li>
<li><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</li>
<li>Returns: {Promise} Fulfills with a {CryptoKey} upon success.</li>
</ul>
<p>Using the method and parameters specified in <code>algorithm</code>, and the keying
material provided by <code>baseKey</code>, this method attempts to generate
a new {CryptoKey} based on the method and parameters in <code>derivedKeyType</code>.</p>
<p>Calling this method is equivalent to calling <a href="#subtlederivebitsalgorithm-basekey-length"><code>subtle.deriveBits()</code></a> to
generate raw keying material, then passing the result into the
<a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a> method using the <code>derivedKeyType</code>, <code>extractable</code>, and
<code>keyUsages</code> parameters as input.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'Argon2d'</code>[^modern-algos]</li>
<li><code>'Argon2i'</code>[^modern-algos]</li>
<li><code>'Argon2id'</code>[^modern-algos]</li>
<li><code>'ECDH'</code></li>
<li><code>'HKDF'</code></li>
<li><code>'PBKDF2'</code></li>
<li><code>'X25519'</code></li>
<li><code>'X448'</code>[^secure-curves]</li>
</ul>
<h3><code>subtle.digest(algorithm, data)</code></h3>
<ul>
<li><code>algorithm</code> {string|Algorithm|CShakeParams|TurboShakeParams|KangarooTwelveParams}</li>
<li><code>data</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>Using the method identified by <code>algorithm</code>, this method attempts to
generate a digest of <code>data</code>. If successful, the returned promise is resolved
with an {ArrayBuffer} containing the computed digest.</p>
<p>If <code>algorithm</code> is provided as a {string}, it must be one of:</p>
<ul>
<li><code>'cSHAKE128'</code>[^modern-algos]</li>
<li><code>'cSHAKE256'</code>[^modern-algos]</li>
<li><code>'KT128'</code>[^modern-algos]</li>
<li><code>'KT256'</code>[^modern-algos]</li>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
<li><code>'TurboSHAKE128'</code>[^modern-algos]</li>
<li><code>'TurboSHAKE256'</code>[^modern-algos]</li>
</ul>
<p>If <code>algorithm</code> is provided as an {Object}, it must have a <code>name</code> property
whose value is one of the above.</p>
<h3><code>subtle.encapsulateBits(encapsulationAlgorithm, encapsulationKey)</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>encapsulationAlgorithm</code> {string|Algorithm}</li>
<li><code>encapsulationKey</code> {CryptoKey}</li>
<li>Returns: {Promise} Fulfills with {EncapsulatedBits} upon success.</li>
</ul>
<p>Uses a message recipient's asymmetric public key to encrypt a temporary symmetric key.
This encrypted key is the &quot;encapsulated key&quot; represented as {EncapsulatedBits}.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
</ul>
<h3><code>subtle.encapsulateKey(encapsulationAlgorithm, encapsulationKey, sharedKeyAlgorithm, extractable, keyUsages)</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>encapsulationAlgorithm</code> {string|Algorithm}</li>
<li><code>encapsulationKey</code> {CryptoKey}</li>
<li><code>sharedKeyAlgorithm</code> {string|Algorithm|HmacImportParams|AesDerivedKeyParams|KmacImportParams}</li>
<li><code>extractable</code> {boolean}</li>
<li><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</li>
<li>Returns: {Promise} Fulfills with {EncapsulatedKey} upon success.</li>
</ul>
<p>Uses a message recipient's asymmetric public key to encrypt a temporary symmetric key.
This encrypted key is the &quot;encapsulated key&quot; represented as {EncapsulatedKey}.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
</ul>
<h3><code>subtle.encrypt(algorithm, key, data)</code></h3>
<ul>
<li><code>algorithm</code> {RsaOaepParams|AesCtrParams|AesCbcParams|AeadParams}</li>
<li><code>key</code> {CryptoKey}</li>
<li><code>data</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>Using the method and parameters specified by <code>algorithm</code> and the keying
material provided by <code>key</code>, this method attempts to encipher <code>data</code>.
If successful, the returned promise is resolved with an {ArrayBuffer}
containing the encrypted result.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
</ul>
<h3><code>subtle.exportKey(format, key)</code></h3>
<ul>
<li><code>format</code> {string} Must be one of <code>'raw'</code>, <code>'pkcs8'</code>, <code>'spki'</code>, <code>'jwk'</code>, <code>'raw-secret'</code>[^modern-algos],
<code>'raw-public'</code>[^modern-algos], or <code>'raw-seed'</code>[^modern-algos].</li>
<li><code>key</code> {CryptoKey}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer|Object} upon success.</li>
</ul>
<p>Exports the given key into the specified format, if supported.</p>
<p>If the {CryptoKey} is not extractable, the returned promise will reject.</p>
<p>When <code>format</code> is either <code>'pkcs8'</code> or <code>'spki'</code> and the export is successful,
the returned promise will be resolved with an {ArrayBuffer} containing the
exported key data.</p>
<p>When <code>format</code> is <code>'jwk'</code> and the export is successful, the returned promise
will be resolved with a JavaScript object conforming to the <a href="https://tools.ietf.org/html/rfc7517">JSON Web Key</a>
specification.</p>
<p>See <a href="#key-formats">Key formats</a> for the formats supported by each algorithm.</p>
<h3><code>subtle.getPublicKey(key, keyUsages)</code></h3>
<blockquote>
<p>Stability: 1.1 - Active development</p>
</blockquote>
<ul>
<li><code>key</code> {CryptoKey} A private key from which to derive the corresponding public key.</li>
<li><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</li>
<li>Returns: {Promise} Fulfills with a {CryptoKey} upon success.</li>
</ul>
<p>Derives the public key from a given private key.</p>
<h3><code>subtle.generateKey(algorithm, extractable, keyUsages)</code></h3>
<ul>
<li>
<p><code>algorithm</code> {string|Algorithm|RsaHashedKeyGenParams|EcKeyGenParams|HmacKeyGenParams|AesKeyGenParams|KmacKeyGenParams}</p>
</li>
<li>
<p><code>extractable</code> {boolean}</p>
</li>
<li>
<p><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</p>
</li>
<li>
<p>Returns: {Promise} Fulfills with a {CryptoKey|CryptoKeyPair} upon success.</p>
</li>
</ul>
<p>Using the parameters provided in <code>algorithm</code>, this method
attempts to generate new keying material. Depending on the algorithm used
either a single {CryptoKey} or a {CryptoKeyPair} is generated.</p>
<p>The {CryptoKeyPair} (public and private key) generating algorithms supported
include:</p>
<ul>
<li><code>'ECDH'</code></li>
<li><code>'ECDSA'</code></li>
<li><code>'Ed25519'</code></li>
<li><code>'Ed448'</code>[^secure-curves]</li>
<li><code>'ML-DSA-44'</code>[^modern-algos]</li>
<li><code>'ML-DSA-65'</code>[^modern-algos]</li>
<li><code>'ML-DSA-87'</code>[^modern-algos]</li>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
<li><code>'RSA-PSS'</code></li>
<li><code>'RSASSA-PKCS1-v1_5'</code></li>
<li><code>'X25519'</code></li>
<li><code>'X448'</code>[^secure-curves]</li>
</ul>
<p>The {CryptoKey} (secret key) generating algorithms supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-KW'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'HMAC'</code></li>
<li><code>'KMAC128'</code>[^modern-algos]</li>
<li><code>'KMAC256'</code>[^modern-algos]</li>
</ul>
<h3><code>subtle.importKey(format, keyData, algorithm, extractable, keyUsages)</code></h3>
<ul>
<li>
<p><code>format</code> {string} Must be one of <code>'raw'</code>, <code>'pkcs8'</code>, <code>'spki'</code>, <code>'jwk'</code>, <code>'raw-secret'</code>[^modern-algos],
<code>'raw-public'</code>[^modern-algos], or <code>'raw-seed'</code>[^modern-algos].</p>
</li>
<li>
<p><code>keyData</code> {ArrayBuffer|TypedArray|DataView|Buffer|Object}</p>
</li>
<li>
<p><code>algorithm</code> {string|Algorithm|RsaHashedImportParams|EcKeyImportParams|HmacImportParams|KmacImportParams}</p>
</li>
<li>
<p><code>extractable</code> {boolean}</p>
</li>
<li>
<p><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</p>
</li>
<li>
<p>Returns: {Promise} Fulfills with a {CryptoKey} upon success.</p>
</li>
</ul>
<p>This method attempts to interpret the provided <code>keyData</code>
as the given <code>format</code> to create a {CryptoKey} instance using the provided
<code>algorithm</code>, <code>extractable</code>, and <code>keyUsages</code> arguments. If the import is
successful, the returned promise will be resolved with a {CryptoKey}
representation of the key material.</p>
<p>If importing KDF algorithm keys, <code>extractable</code> must be <code>false</code>.</p>
<p>See <a href="#key-formats">Key formats</a> for the algorithms and formats currently supported.</p>
<h3><code>subtle.sign(algorithm, key, data)</code></h3>
<ul>
<li><code>algorithm</code> {string|Algorithm|RsaPssParams|EcdsaParams|ContextParams|KmacParams}</li>
<li><code>key</code> {CryptoKey}</li>
<li><code>data</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>Using the method and parameters given by <code>algorithm</code> and the keying material
provided by <code>key</code>, this method attempts to generate a cryptographic
signature of <code>data</code>. If successful, the returned promise is resolved with
an {ArrayBuffer} containing the generated signature.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ECDSA'</code></li>
<li><code>'Ed25519'</code></li>
<li><code>'Ed448'</code>[^secure-curves]</li>
<li><code>'HMAC'</code></li>
<li><code>'KMAC128'</code>[^modern-algos]</li>
<li><code>'KMAC256'</code>[^modern-algos]</li>
<li><code>'ML-DSA-44'</code>[^modern-algos]</li>
<li><code>'ML-DSA-65'</code>[^modern-algos]</li>
<li><code>'ML-DSA-87'</code>[^modern-algos]</li>
<li><code>'RSA-PSS'</code></li>
<li><code>'RSASSA-PKCS1-v1_5'</code></li>
</ul>
<h3><code>subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages)</code></h3>
<ul>
<li>
<p><code>format</code> {string} Must be one of <code>'raw'</code>, <code>'pkcs8'</code>, <code>'spki'</code>, <code>'jwk'</code>, <code>'raw-secret'</code>[^modern-algos],
<code>'raw-public'</code>[^modern-algos], or <code>'raw-seed'</code>[^modern-algos].</p>
</li>
<li>
<p><code>wrappedKey</code> {ArrayBuffer|TypedArray|DataView|Buffer}</p>
</li>
<li>
<p><code>unwrappingKey</code> {CryptoKey}</p>
</li>
<li>
<p><code>unwrapAlgorithm</code> {string|Algorithm|RsaOaepParams|AesCtrParams|AesCbcParams|AeadParams}</p>
</li>
<li>
<p><code>unwrappedKeyAlgorithm</code> {string|Algorithm|RsaHashedImportParams|EcKeyImportParams|HmacImportParams|KmacImportParams}</p>
</li>
<li>
<p><code>extractable</code> {boolean}</p>
</li>
<li>
<p><code>keyUsages</code> {string[]} See <a href="#cryptokeyusages">Key usages</a>.</p>
</li>
<li>
<p>Returns: {Promise} Fulfills with a {CryptoKey} upon success.</p>
</li>
</ul>
<p>In cryptography, &quot;wrapping a key&quot; refers to exporting and then encrypting the
keying material. This method attempts to decrypt a wrapped
key and create a {CryptoKey} instance. It is equivalent to calling
<a href="#subtledecryptalgorithm-key-data"><code>subtle.decrypt()</code></a> first on the encrypted key data (using the <code>wrappedKey</code>,
<code>unwrapAlgorithm</code>, and <code>unwrappingKey</code> arguments as input) then passing the results
to the <a href="#subtleimportkeyformat-keydata-algorithm-extractable-keyusages"><code>subtle.importKey()</code></a> method using the <code>unwrappedKeyAlgorithm</code>,
<code>extractable</code>, and <code>keyUsages</code> arguments as inputs. If successful, the returned
promise is resolved with a {CryptoKey} object.</p>
<p>The wrapping algorithms currently supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-KW'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
</ul>
<p>The unwrapped key algorithms supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-KW'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'ECDH'</code></li>
<li><code>'ECDSA'</code></li>
<li><code>'Ed25519'</code></li>
<li><code>'Ed448'</code>[^secure-curves]</li>
<li><code>'HMAC'</code></li>
<li><code>'KMAC128'</code>[^modern-algos]</li>
<li><code>'KMAC256'</code>[^modern-algos]</li>
<li><code>'ML-DSA-44'</code>[^modern-algos]</li>
<li><code>'ML-DSA-65'</code>[^modern-algos]</li>
<li><code>'ML-DSA-87'</code>[^modern-algos]</li>
<li><code>'ML-KEM-512'</code>[^modern-algos]</li>
<li><code>'ML-KEM-768'</code>[^modern-algos]</li>
<li><code>'ML-KEM-1024'</code>[^modern-algos]</li>
<li><code>'MLKEM768-P256'</code>[^modern-algos]</li>
<li><code>'MLKEM768-X25519'</code>[^modern-algos]</li>
<li><code>'MLKEM1024-P384'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
<li><code>'RSA-PSS'</code></li>
<li><code>'RSASSA-PKCS1-v1_5'</code></li>
<li><code>'X25519'</code></li>
<li><code>'X448'</code>[^secure-curves]</li>
</ul>
<h3><code>subtle.verify(algorithm, key, signature, data)</code></h3>
<ul>
<li><code>algorithm</code> {string|Algorithm|RsaPssParams|EcdsaParams|ContextParams|KmacParams}</li>
<li><code>key</code> {CryptoKey}</li>
<li><code>signature</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li><code>data</code> {ArrayBuffer|TypedArray|DataView|Buffer}</li>
<li>Returns: {Promise} Fulfills with a {boolean} upon success.</li>
</ul>
<p>Using the method and parameters given in <code>algorithm</code> and the keying material
provided by <code>key</code>, this method attempts to verify that <code>signature</code> is
a valid cryptographic signature of <code>data</code>. The returned promise is resolved
with either <code>true</code> or <code>false</code>.</p>
<p>The algorithms currently supported include:</p>
<ul>
<li><code>'ECDSA'</code></li>
<li><code>'Ed25519'</code></li>
<li><code>'Ed448'</code>[^secure-curves]</li>
<li><code>'HMAC'</code></li>
<li><code>'KMAC128'</code>[^modern-algos]</li>
<li><code>'KMAC256'</code>[^modern-algos]</li>
<li><code>'ML-DSA-44'</code>[^modern-algos]</li>
<li><code>'ML-DSA-65'</code>[^modern-algos]</li>
<li><code>'ML-DSA-87'</code>[^modern-algos]</li>
<li><code>'RSA-PSS'</code></li>
<li><code>'RSASSA-PKCS1-v1_5'</code></li>
</ul>
<h3><code>subtle.wrapKey(format, key, wrappingKey, wrapAlgorithm)</code></h3>
<ul>
<li><code>format</code> {string} Must be one of <code>'raw'</code>, <code>'pkcs8'</code>, <code>'spki'</code>, <code>'jwk'</code>, <code>'raw-secret'</code>[^modern-algos],
<code>'raw-public'</code>[^modern-algos], or <code>'raw-seed'</code>[^modern-algos].</li>
<li><code>key</code> {CryptoKey}</li>
<li><code>wrappingKey</code> {CryptoKey}</li>
<li><code>wrapAlgorithm</code> {string|Algorithm|RsaOaepParams|AesCtrParams|AesCbcParams|AeadParams}</li>
<li>Returns: {Promise} Fulfills with an {ArrayBuffer} upon success.</li>
</ul>
<p>In cryptography, &quot;wrapping a key&quot; refers to exporting and then encrypting the
keying material. This method exports the keying material into
the format identified by <code>format</code>, then encrypts it using the method and
parameters specified by <code>wrapAlgorithm</code> and the keying material provided by
<code>wrappingKey</code>. It is the equivalent to calling <a href="#subtleexportkeyformat-key"><code>subtle.exportKey()</code></a> using
<code>format</code> and <code>key</code> as the arguments, then passing the result to the
<a href="#subtleencryptalgorithm-key-data"><code>subtle.encrypt()</code></a> method using <code>wrappingKey</code> and <code>wrapAlgorithm</code> as inputs. If
successful, the returned promise will be resolved with an {ArrayBuffer}
containing the encrypted key data.</p>
<p>The wrapping algorithms currently supported include:</p>
<ul>
<li><code>'AES-CBC'</code></li>
<li><code>'AES-CTR'</code></li>
<li><code>'AES-GCM'</code></li>
<li><code>'AES-KW'</code></li>
<li><code>'AES-OCB'</code>[^modern-algos]</li>
<li><code>'ChaCha20-Poly1305'</code>[^modern-algos]</li>
<li><code>'RSA-OAEP'</code></li>
</ul>
<h2>Algorithm parameters</h2>
<p>The algorithm parameter objects define the methods and parameters used by
the various {SubtleCrypto} methods. While described here as &quot;classes&quot;, they
are simple JavaScript dictionary objects.</p>
<h3>Class: <code>Algorithm</code></h3>
<h4><code>Algorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>AeadParams</code></h3>
<h4><code>aeadParams.additionalData</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>Extra input that is not encrypted but is included in the authentication
of the data. The use of <code>additionalData</code> is optional.</p>
<h4><code>aeadParams.iv</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>The initialization vector must be unique for every encryption operation using a
given key.</p>
<h4><code>aeadParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'AES-GCM'</code>, <code>'AES-OCB'</code>, or <code>'ChaCha20-Poly1305'</code>.</li>
</ul>
<h4><code>aeadParams.tagLength</code></h4>
<ul>
<li>Type: {number} The size in bits of the generated authentication tag.</li>
</ul>
<h3>Class: <code>AesDerivedKeyParams</code></h3>
<h4><code>aesDerivedKeyParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'AES-CBC'</code>, <code>'AES-CTR'</code>, <code>'AES-GCM'</code>, <code>'AES-OCB'</code>, or <code>'AES-KW'</code></li>
</ul>
<h4><code>aesDerivedKeyParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length of the AES key to be derived. This must be either <code>128</code>, <code>192</code>,
or <code>256</code>.</p>
<h3>Class: <code>AesCbcParams</code></h3>
<h4><code>aesCbcParams.iv</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Provides the initialization vector. It must be exactly 16-bytes in length
and should be unpredictable and cryptographically random.</p>
<h4><code>aesCbcParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'AES-CBC'</code>.</li>
</ul>
<h3>Class: <code>AesCtrParams</code></h3>
<h4><code>aesCtrParams.counter</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>The initial value of the counter block. This must be exactly 16 bytes long.</p>
<p>The <code>AES-CTR</code> method uses the rightmost <code>length</code> bits of the block as the
counter and the remaining bits as the nonce.</p>
<h4><code>aesCtrParams.length</code></h4>
<ul>
<li>Type: {number} The number of bits in the <code>aesCtrParams.counter</code> that are
to be used as the counter.</li>
</ul>
<h4><code>aesCtrParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'AES-CTR'</code>.</li>
</ul>
<h3>Class: <code>AesKeyAlgorithm</code></h3>
<h4><code>aesKeyAlgorithm.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length of the AES key in bits.</p>
<h4><code>aesKeyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>AesKeyGenParams</code></h3>
<h4><code>aesKeyGenParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length of the AES key to be generated. This must be either <code>128</code>, <code>192</code>,
or <code>256</code>.</p>
<h4><code>aesKeyGenParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'AES-CBC'</code>, <code>'AES-CTR'</code>, <code>'AES-GCM'</code>, or
<code>'AES-KW'</code></li>
</ul>
<h3>Class: <code>Argon2Params</code></h3>
<h4><code>argon2Params.associatedData</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Represents the optional associated data.</p>
<h4><code>argon2Params.memory</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Represents the memory size in kibibytes. It must be at least 8 times the degree of parallelism.</p>
<h4><code>argon2Params.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'Argon2d'</code>, <code>'Argon2i'</code>, or <code>'Argon2id'</code>.</li>
</ul>
<h4><code>argon2Params.nonce</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Represents the nonce, which is a salt for password hashing applications.</p>
<h4><code>argon2Params.parallelism</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Represents the degree of parallelism.</p>
<h4><code>argon2Params.passes</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Represents the number of passes.</p>
<h4><code>argon2Params.secretValue</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Represents the optional secret value.</p>
<h4><code>argon2Params.version</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Represents the Argon2 version number. The default and currently only defined version is <code>19</code> (<code>0x13</code>).</p>
<h3>Class: <code>ContextParams</code></h3>
<h4><code>contextParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'Ed448'</code>[^secure-curves], <code>'ML-DSA-44'</code>[^modern-algos],
<code>'ML-DSA-65'</code>[^modern-algos], or <code>'ML-DSA-87'</code>[^modern-algos].</li>
</ul>
<h4><code>contextParams.context</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>The <code>context</code> member represents the optional context data to associate with
the message.</p>
<h3>Class: <code>CShakeParams</code></h3>
<p>When both <code>functionName</code> and <code>customization</code> are empty or <code>undefined</code>, cSHAKE is
equivalent to plain SHAKE.</p>
<h4><code>cShakeParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'cSHAKE128'</code>[^modern-algos] or <code>'cSHAKE256'</code>[^modern-algos].</li>
</ul>
<h4><code>cShakeParams.outputLength</code></h4>
<ul>
<li>Type: {number} represents the requested output length in bits. Must be a
multiple of 8.</li>
</ul>
<h4><code>cShakeParams.functionName</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>The <code>functionName</code> member represents the NIST function-name byte string used to
domain-separate functions built on top of cSHAKE. Non-empty values require
OpenSSL 4.0 or later. Accepted values are:</p>
<ul>
<li>empty or <code>undefined</code></li>
<li>the ASCII byte sequence <code>'KMAC'</code></li>
<li>the ASCII byte sequence <code>'TupleHash'</code></li>
<li>the ASCII byte sequence <code>'ParallelHash'</code></li>
</ul>
<h4><code>cShakeParams.customization</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>The <code>customization</code> member represents the customization data. Non-empty values
require OpenSSL 4.0 or later. Accepted values are:</p>
<ul>
<li>empty or <code>undefined</code></li>
<li>up to 512 bytes of data without null bytes</li>
</ul>
<h3>Class: <code>EcdhKeyDeriveParams</code></h3>
<h4><code>ecdhKeyDeriveParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'ECDH'</code>, <code>'X25519'</code>, or <code>'X448'</code>[^secure-curves].</li>
</ul>
<h4><code>ecdhKeyDeriveParams.public</code></h4>
<ul>
<li>Type: {CryptoKey}</li>
</ul>
<p>ECDH key derivation operates by taking as input one party's private key and
another party's public key -- using both to generate a common shared secret.
The <code>ecdhKeyDeriveParams.public</code> property is set to the other party's public
key.</p>
<h3>Class: <code>EcdsaParams</code></h3>
<h4><code>ecdsaParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>ecdsaParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'ECDSA'</code>.</li>
</ul>
<h3>Class: <code>EcKeyAlgorithm</code></h3>
<h4><code>ecKeyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h4><code>ecKeyAlgorithm.namedCurve</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>EcKeyGenParams</code></h3>
<h4><code>ecKeyGenParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'ECDSA'</code> or <code>'ECDH'</code>.</li>
</ul>
<h4><code>ecKeyGenParams.namedCurve</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'P-256'</code>, <code>'P-384'</code>, <code>'P-521'</code>.</li>
</ul>
<h3>Class: <code>EcKeyImportParams</code></h3>
<h4><code>ecKeyImportParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'ECDSA'</code> or <code>'ECDH'</code>.</li>
</ul>
<h4><code>ecKeyImportParams.namedCurve</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'P-256'</code>, <code>'P-384'</code>, <code>'P-521'</code>.</li>
</ul>
<h3>Class: <code>EncapsulatedBits</code></h3>
<p>A temporary symmetric secret key (represented as {ArrayBuffer}) for message encryption
and the ciphertext (that can be transmitted to the message recipient along with the
message) encrypted by this shared key. The recipient uses their private key to determine
what the shared key is which then allows them to decrypt the message.</p>
<h4><code>encapsulatedBits.ciphertext</code></h4>
<ul>
<li>Type: {ArrayBuffer}</li>
</ul>
<h4><code>encapsulatedBits.sharedKey</code></h4>
<ul>
<li>Type: {ArrayBuffer}</li>
</ul>
<h3>Class: <code>EncapsulatedKey</code></h3>
<p>A temporary symmetric secret key (represented as {CryptoKey}) for message encryption
and the ciphertext (that can be transmitted to the message recipient along with the
message) encrypted by this shared key. The recipient uses their private key to determine
what the shared key is which then allows them to decrypt the message.</p>
<h4><code>encapsulatedKey.ciphertext</code></h4>
<ul>
<li>Type: {ArrayBuffer}</li>
</ul>
<h4><code>encapsulatedKey.sharedKey</code></h4>
<ul>
<li>Type: {CryptoKey}</li>
</ul>
<h3>Class: <code>HkdfParams</code></h3>
<h4><code>hkdfParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>hkdfParams.info</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Provides application-specific contextual input to the HKDF algorithm.
This can be zero-length but must be provided.</p>
<h4><code>hkdfParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'HKDF'</code>.</li>
</ul>
<h4><code>hkdfParams.salt</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>The salt value significantly improves the strength of the HKDF algorithm.
It should be random or pseudorandom and should be the same length as the
output of the digest function (for instance, if using <code>'SHA-256'</code> as the
digest, the salt should be 256-bits of random data).</p>
<h3>Class: <code>HmacImportParams</code></h3>
<h4><code>hmacImportParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>hmacImportParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The optional number of bits in the HMAC key. This is optional and should
be omitted for most cases.</p>
<h4><code>hmacImportParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'HMAC'</code>.</li>
</ul>
<h3>Class: <code>HmacKeyAlgorithm</code></h3>
<h4><code>hmacKeyAlgorithm.hash</code></h4>
<ul>
<li>Type: {Algorithm}</li>
</ul>
<h4><code>hmacKeyAlgorithm.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length of the HMAC key in bits.</p>
<h4><code>hmacKeyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>HmacKeyGenParams</code></h3>
<h4><code>hmacKeyGenParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>hmacKeyGenParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The number of bits to generate for the HMAC key. If omitted,
the length will be determined by the hash algorithm used.
This is optional and should be omitted for most cases.</p>
<h4><code>hmacKeyGenParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'HMAC'</code>.</li>
</ul>
<h3>Class: <code>KeyAlgorithm</code></h3>
<h4><code>keyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>KangarooTwelveParams</code></h3>
<h4><code>kangarooTwelveParams.customization</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>The optional customization string for KangarooTwelve. It must not exceed 512
bytes.</p>
<h4><code>kangarooTwelveParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'KT128'</code>[^modern-algos] or <code>'KT256'</code>[^modern-algos].</li>
</ul>
<h4><code>kangarooTwelveParams.outputLength</code></h4>
<ul>
<li>Type: {number} represents the requested output length in bits.</li>
</ul>
<h3>Class: <code>KmacImportParams</code></h3>
<h4><code>kmacImportParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The optional number of bits in the KMAC key. This is optional and should
be omitted for most cases. The key length must be at least 32 and a multiple of 8.</p>
<h4><code>kmacImportParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'KMAC128'</code> or <code>'KMAC256'</code>.</li>
</ul>
<h3>Class: <code>KmacKeyAlgorithm</code></h3>
<h4><code>kmacKeyAlgorithm.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length of the KMAC key in bits.</p>
<h4><code>kmacKeyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h3>Class: <code>KmacKeyGenParams</code></h3>
<h4><code>kmacKeyGenParams.length</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The number of bits to generate for the KMAC key. If omitted,
the length will be determined by the KMAC algorithm used.
This is optional and should be omitted for most cases. Must be at least 32 and a
multiple of 8.</p>
<h4><code>kmacKeyGenParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'KMAC128'</code> or <code>'KMAC256'</code>.</li>
</ul>
<h3>Class: <code>KmacParams</code></h3>
<h4><code>kmacParams.algorithm</code></h4>
<ul>
<li>Type: {string} Must be <code>'KMAC128'</code> or <code>'KMAC256'</code>.</li>
</ul>
<h4><code>kmacParams.outputLength</code></h4>
<ul>
<li>Type: {number} represents the requested output length in bits. Must be a
multiple of 8.</li>
</ul>
<h4><code>kmacParams.customization</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer|undefined}</li>
</ul>
<p>The <code>customization</code> member represents the optional customization string.</p>
<h3>Class: <code>Pbkdf2Params</code></h3>
<h4><code>pbkdf2Params.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>pbkdf2Params.iterations</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The number of iterations the PBKDF2 algorithm should make when deriving bits.</p>
<h4><code>pbkdf2Params.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'PBKDF2'</code>.</li>
</ul>
<h4><code>pbkdf2Params.salt</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>Should be at least 16 random or pseudorandom bytes.</p>
<h3>Class: <code>RsaHashedImportParams</code></h3>
<h4><code>rsaHashedImportParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>rsaHashedImportParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'RSASSA-PKCS1-v1_5'</code>, <code>'RSA-PSS'</code>, or
<code>'RSA-OAEP'</code>.</li>
</ul>
<h3>Class: <code>RsaHashedKeyAlgorithm</code></h3>
<h4><code>rsaHashedKeyAlgorithm.hash</code></h4>
<ul>
<li>Type: {Algorithm}</li>
</ul>
<h4><code>rsaHashedKeyAlgorithm.modulusLength</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length in bits of the RSA modulus.</p>
<h4><code>rsaHashedKeyAlgorithm.name</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<h4><code>rsaHashedKeyAlgorithm.publicExponent</code></h4>
<ul>
<li>Type: {Uint8Array}</li>
</ul>
<p>The RSA public exponent.</p>
<h3>Class: <code>RsaHashedKeyGenParams</code></h3>
<h4><code>rsaHashedKeyGenParams.hash</code></h4>
<ul>
<li>Type: {string|Algorithm}</li>
</ul>
<p>If represented as a {string}, the value must be one of:</p>
<ul>
<li><code>'SHA-1'</code></li>
<li><code>'SHA-256'</code></li>
<li><code>'SHA-384'</code></li>
<li><code>'SHA-512'</code></li>
<li><code>'SHA3-256'</code>[^modern-algos]</li>
<li><code>'SHA3-384'</code>[^modern-algos]</li>
<li><code>'SHA3-512'</code>[^modern-algos]</li>
</ul>
<p>If represented as an {Algorithm}, the object's <code>name</code> property
must be one of the above listed values.</p>
<h4><code>rsaHashedKeyGenParams.modulusLength</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length in bits of the RSA modulus. As a best practice, this should be
at least <code>2048</code>.</p>
<h4><code>rsaHashedKeyGenParams.name</code></h4>
<ul>
<li>Type: {string} Must be one of <code>'RSASSA-PKCS1-v1_5'</code>, <code>'RSA-PSS'</code>, or
<code>'RSA-OAEP'</code>.</li>
</ul>
<h4><code>rsaHashedKeyGenParams.publicExponent</code></h4>
<ul>
<li>Type: {Uint8Array}</li>
</ul>
<p>The RSA public exponent. This must be a {Uint8Array} containing a big-endian,
unsigned integer that must fit within 32-bits. The {Uint8Array} may contain an
arbitrary number of leading zero-bits. The value must be a prime number. Unless
there is reason to use a different value, use <code>new Uint8Array([1, 0, 1])</code>
(65537) as the public exponent.</p>
<h3>Class: <code>RsaOaepParams</code></h3>
<h4><code>rsaOaepParams.label</code></h4>
<ul>
<li>Type: {ArrayBuffer|TypedArray|DataView|Buffer}</li>
</ul>
<p>An additional collection of bytes that will not be encrypted, but will be bound
to the generated ciphertext.</p>
<p>The <code>rsaOaepParams.label</code> parameter is optional.</p>
<h4><code>rsaOaepParams.name</code></h4>
<ul>
<li>Type: {string} must be <code>'RSA-OAEP'</code>.</li>
</ul>
<h3>Class: <code>RsaPssParams</code></h3>
<h4><code>rsaPssParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'RSA-PSS'</code>.</li>
</ul>
<h4><code>rsaPssParams.saltLength</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The length (in bytes) of the random salt to use.</p>
<h3>Class: <code>TurboShakeParams</code></h3>
<h4><code>turboShakeParams.domainSeparation</code></h4>
<ul>
<li>Type: {number|undefined}</li>
</ul>
<p>The optional domain separation byte (0x01-0x7f). Defaults to <code>0x1f</code>.</p>
<h4><code>turboShakeParams.name</code></h4>
<ul>
<li>Type: {string} Must be <code>'TurboSHAKE128'</code>[^modern-algos] or <code>'TurboSHAKE256'</code>[^modern-algos].</li>
</ul>
<h4><code>turboShakeParams.outputLength</code></h4>
<ul>
<li>Type: {number} represents the requested output length in bits.</li>
</ul>
<p>[^secure-curves]: See <a href="#secure-curves-in-the-web-cryptography-api">Secure Curves in the Web Cryptography API</a></p>
<p>[^modern-algos]: See <a href="#modern-algorithms-in-the-web-cryptography-api">Modern Algorithms in the Web Cryptography API</a></p>
<p>[^openssl30]: Requires OpenSSL &gt;= 3.0</p>
<p>[^openssl32]: Requires OpenSSL &gt;= 3.2</p>
<p>[^openssl35]: Requires OpenSSL &gt;= 3.5</p>
