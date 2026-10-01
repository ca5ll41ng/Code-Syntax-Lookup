---
id: "java-en-function-certpathvalidator-certpathvalidator"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidator.CertPathValidator"
signature: "protected CertPathValidator(CertPathValidatorSpi validatorSpi, Provider provider, String algorithm)"
title: "CertPathValidator.CertPathValidator"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidator.CertPathValidator

```java
protected CertPathValidator(CertPathValidatorSpi validatorSpi, Provider provider, String algorithm)
```

Creates a `CertPathValidator` object of the given algorithm,
 and encapsulates the given provider implementation (SPI object) in it.

**参数**

- **validatorSpi** — the provider implementation
- **provider** — the provider
- **algorithm** — the algorithm name
