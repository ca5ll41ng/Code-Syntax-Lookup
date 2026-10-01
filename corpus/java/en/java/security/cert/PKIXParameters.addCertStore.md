---
id: "java-en-function-pkixparameters-addcertstore"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.addCertStore"
signature: "public void addCertStore(CertStore store)"
title: "PKIXParameters.addCertStore"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.addCertStore

```java
public void addCertStore(CertStore store)
```

Adds a `CertStore` to the end of the list of
 `CertStore`s used in finding certificates and CRLs.

**参数**

- **store** — the `CertStore` to add. If `null`, the store is ignored (not added to list).
