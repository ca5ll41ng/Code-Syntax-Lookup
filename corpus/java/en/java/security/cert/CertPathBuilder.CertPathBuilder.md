---
id: "java-en-function-certpathbuilder-certpathbuilder"
language: "java"
lang: "en"
category: "function"
name: "CertPathBuilder.CertPathBuilder"
signature: "protected CertPathBuilder(CertPathBuilderSpi builderSpi, Provider provider, String algorithm)"
title: "CertPathBuilder.CertPathBuilder"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilder.CertPathBuilder

```java
protected CertPathBuilder(CertPathBuilderSpi builderSpi, Provider provider, String algorithm)
```

Creates a `CertPathBuilder` object of the given algorithm,
 and encapsulates the given provider implementation (SPI object) in it.

**参数**

- **builderSpi** — the provider implementation
- **provider** — the provider
- **algorithm** — the algorithm name
