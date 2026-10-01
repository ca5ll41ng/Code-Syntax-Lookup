---
id: "java-en-function-javax-crypto-keygeneratorspi"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KeyGeneratorSpi"
title: "KeyGeneratorSpi"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyGeneratorSpi

This class defines the Service Provider Interface (**SPI**)
 for the `KeyGenerator` class.
 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a key generator for a particular algorithm.

 

In case the client does not explicitly initialize the KeyGenerator
 (via a call to an `init` method), each provider must
 supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the KeyGenerator defaults used by
 JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 KeyGenerator instead of relying on provider-specific defaults.

**参见**

- SecretKey

> *Since 1.4*
