---
id: "java-en-function-pkixparameters-setcertstores"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setCertStores"
signature: "public void setCertStores(List<CertStore> stores)"
title: "PKIXParameters.setCertStores"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setCertStores

```java
public void setCertStores(List<CertStore> stores)
```

Sets the list of `CertStore`s to be used in finding
 certificates and CRLs. May be `null`, in which case
 no `CertStore`s will be used. The first
 `CertStore`s in the list may be preferred to those that
 appear later.
 

 Note that the `List` is copied to protect against
 subsequent modifications.

**参数**

- **stores** — a `List` of `CertStore`s (or `null`)

**异常**

- **ClassCastException** — if any of the elements in the list are not of type `java.security.cert.CertStore`

**参见**

- #getCertStores
