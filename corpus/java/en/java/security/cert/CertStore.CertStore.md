---
id: "java-en-function-certstore-certstore"
language: "java"
lang: "en"
category: "function"
name: "CertStore.CertStore"
signature: "protected CertStore(CertStoreSpi storeSpi, Provider provider, String type, CertStoreParameters params)"
title: "CertStore.CertStore"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.CertStore

```java
protected CertStore(CertStoreSpi storeSpi, Provider provider, String type, CertStoreParameters params)
```

Creates a `CertStore` object of the given type, and
 encapsulates the given provider implementation (SPI object) in it.

**参数**

- **storeSpi** — the provider implementation
- **provider** — the provider
- **type** — the type
- **params** — the initialization parameters (may be `null`)
