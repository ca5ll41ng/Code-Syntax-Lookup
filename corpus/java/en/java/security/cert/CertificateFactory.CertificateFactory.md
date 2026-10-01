---
id: "java-en-function-certificatefactory-certificatefactory"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.CertificateFactory"
signature: "protected CertificateFactory(CertificateFactorySpi certFacSpi, Provider provider, String type)"
title: "CertificateFactory.CertificateFactory"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.CertificateFactory

```java
protected CertificateFactory(CertificateFactorySpi certFacSpi, Provider provider, String type)
```

Creates a CertificateFactory object of the given type, and encapsulates
 the given provider implementation (SPI object) in it.

**参数**

- **certFacSpi** — the provider implementation.
- **provider** — the provider.
- **type** — the certificate type.
