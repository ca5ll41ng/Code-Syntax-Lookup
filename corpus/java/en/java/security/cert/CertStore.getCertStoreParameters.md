---
id: "java-en-function-certstore-getcertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "CertStore.getCertStoreParameters"
signature: "public final CertStoreParameters getCertStoreParameters()"
title: "CertStore.getCertStoreParameters"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.getCertStoreParameters

```java
public final CertStoreParameters getCertStoreParameters()
```

Returns the parameters used to initialize this `CertStore`.
 Note that the `CertStoreParameters` object is cloned before
 it is returned.

**返回**

- the parameters used to initialize this `CertStore` (may be `null`)
