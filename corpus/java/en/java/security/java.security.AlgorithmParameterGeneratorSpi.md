---
id: "java-en-function-java-security-algorithmparametergeneratorspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.AlgorithmParameterGeneratorSpi"
title: "AlgorithmParameterGeneratorSpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameterGeneratorSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameterGeneratorSpi

This class defines the Service Provider Interface (**SPI**)
 for the `AlgorithmParameterGenerator` class, which
 is used to generate a set of parameters to be used with a certain algorithm.

 

 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a parameter generator for a particular algorithm.

 

 In case the client does not explicitly initialize the
 AlgorithmParameterGenerator (via a call to an `engineInit`
 method), each provider must supply (and document) a default initialization.
 See the Keysize Restriction sections of the
 `security_guide_jdk_providers JDK Providers`
 document for information on the AlgorithmParameterGenerator defaults
 used by JDK providers.
 However, note that defaults may vary across different providers.
 Additionally, the default value for a provider may change in a future
 version. Therefore, it is recommended to explicitly initialize the
 `AlgorithmParameterGenerator` instead of relying on
 provider-specific defaults.

**参见**

- AlgorithmParameterGenerator
- AlgorithmParameters
- java.security.spec.AlgorithmParameterSpec

> *Since 1.2*
