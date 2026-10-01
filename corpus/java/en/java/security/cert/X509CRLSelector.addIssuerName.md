---
id: "java-en-function-x509crlselector-addissuername"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.addIssuerName"
signature: "public void addIssuerName(String name) throws IOException"
title: "X509CRLSelector.addIssuerName"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.addIssuerName

```java
public void addIssuerName(String name) throws IOException
```

Adds a name to the issuerNames criterion. The issuer distinguished
 name in the `X509CRL` must match at least one of the specified
 distinguished names.
 

 This method allows the caller to add a name to the set of issuer names
 which `X509CRLs` may contain. The specified name is added to
 any previous value for the issuerNames criterion.
 If the specified name is a duplicate, it may be ignored.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names

**参数**

- **name** — the name in RFC 2253 form

**异常**

- **IOException** — if a parsing error occurs

> **⚠ Deprecated** — Use `addIssuer` or `addIssuerName` instead. This method should not be relied on as it can fail to match some CRLs because of a loss of encoding information in the RFC 2253 String form of some distinguished names.
