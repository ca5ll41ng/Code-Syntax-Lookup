---
id: "java-en-function-pkixparameters-getcertstores"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getCertStores"
signature: "public List<CertStore> getCertStores()"
title: "PKIXParameters.getCertStores"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getCertStores

```java
public List<CertStore> getCertStores()
```

Returns an immutable `List` of `CertStore`s that
 are used to find certificates and CRLs.

**返回**

- an immutable `List` of `CertStore`s (may be empty, but never `null`)

**参见**

- #setCertStores
