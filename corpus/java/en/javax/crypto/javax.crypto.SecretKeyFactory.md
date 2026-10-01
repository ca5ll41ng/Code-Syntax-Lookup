---
id: "java-en-function-javax-crypto-secretkeyfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.SecretKeyFactory"
title: "SecretKeyFactory"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeyFactory

This class represents a factory for secret keys.

 

 Key factories are used to convert keys (opaque
 cryptographic keys of type `Key`) into key specifications
 (transparent representations of the underlying key material), and vice
 versa.
 Secret key factories operate only on secret (symmetric) keys.

 

 Key factories are bidirectional, i.e., they allow to build an opaque
 key object from a given key specification (key material), or to retrieve
 the underlying key material of a key object in a suitable format.

 

 Application developers should refer to their provider's documentation
 to find out which key specifications are supported by the
 `generateSecret(java.security.spec.KeySpec) generateSecret` and
 `getKeySpec(javax.crypto.SecretKey, java.lang.Class) getKeySpec`
 methods.
 For example, the DESede (Triple DES) secret key factory supplied by the
 "SunJCE" provider supports `DESedeKeySpec` as a transparent
 representation of Triple DES keys.

 

 Every implementation of the Java platform is required to support the
 following standard `SecretKeyFactory` algorithms:
 
 
- `PBEWithHmacSHA256AndAES_128`
 
- `PBEWithHmacSHA256AndAES_256`
 
- `PBKDF2WithHmacSHA256`
 

 These algorithms are described in the 
 SecretKeyFactory section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- SecretKey
- javax.crypto.spec.DESedeKeySpec
- javax.crypto.spec.PBEKeySpec

> *Since 1.4*
