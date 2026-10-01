---
id: "java-en-function-javax-crypto-nullcipher"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.NullCipher"
title: "NullCipher"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/NullCipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NullCipher

The `NullCipher` class is a class that provides an
 "identity cipher" -- one that does not transform the plain text.  As
 a consequence, the ciphertext is identical to the plaintext.  All
 initialization methods do nothing, while the blocksize is set to 1
 byte.  Unlike other ciphers, the `NullCipher` has no state, and
 will never throw an `IllegalStateException` when `Cipher`
 methods are called.

> *Since 1.4*
