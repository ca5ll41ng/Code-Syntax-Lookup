---
id: "java-en-function-java-security-keypairgeneratorspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyPairGeneratorSpi"
title: "KeyPairGeneratorSpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGeneratorSpi

This class defines the Service Provider Interface (**SPI**)
 for the `KeyPairGenerator` class, which is used to generate
 pairs of public and private keys.

 

 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a key pair generator for a particular algorithm.

 

 In case the client does not explicitly initialize the
 `KeyPairGenerator` (via a call to an `initialize` method),
 each provider must supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the KeyPairGenerator defaults used by
 JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 `KeyPairGenerator` instead of relying on provider-specific defaults.

**参见**

- KeyPairGenerator
- java.security.spec.AlgorithmParameterSpec

> *Since 1.2*
