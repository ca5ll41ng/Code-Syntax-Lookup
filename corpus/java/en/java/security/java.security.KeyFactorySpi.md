---
id: "java-en-function-java-security-keyfactoryspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyFactorySpi"
title: "KeyFactorySpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactorySpi

This class defines the Service Provider Interface (**SPI**)
 for the `KeyFactory` class.
 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a key factory for a particular algorithm.

 

 Key factories are used to convert keys (opaque
 cryptographic keys of type `Key`) into key specifications
 (transparent representations of the underlying key material), and vice
 versa.

 

 Key factories are bidirectional. That is, they allow you to build an
 opaque key object from a given key specification (key material), or to
 retrieve the underlying key material of a key object in a suitable format.

 

 Multiple compatible key specifications may exist for the same key.
 For example, a DSA public key may be specified using
 `DSAPublicKeySpec` or
 `X509EncodedKeySpec`. A key factory can be used to translate
 between compatible key specifications.

 

 A provider should document all the key specifications supported by its
 key factory.

**参见**

- KeyFactory
- Key
- PublicKey
- PrivateKey
- java.security.spec.KeySpec
- java.security.spec.DSAPublicKeySpec
- java.security.spec.X509EncodedKeySpec

> *Since 1.2*
