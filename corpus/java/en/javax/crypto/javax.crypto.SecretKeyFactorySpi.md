---
id: "java-en-function-javax-crypto-secretkeyfactoryspi"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.SecretKeyFactorySpi"
title: "SecretKeyFactorySpi"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/SecretKeyFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeyFactorySpi

This class defines the Service Provider Interface (**SPI**)
 for the `SecretKeyFactory` class.
 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a secret key factory for a particular algorithm.

 

 A provider should document all the key specifications supported by its
 secret key factory.
 For example, the DES secret key factory supplied by the "SunJCE" provider
 supports `DESKeySpec` as a transparent representation of DES
 keys, and that provider's secret key factory for Triple DES keys supports
 `DESedeKeySpec` as a transparent representation of Triple DES
 keys.

**参见**

- SecretKey
- javax.crypto.spec.DESKeySpec
- javax.crypto.spec.DESedeKeySpec

> *Since 1.4*
