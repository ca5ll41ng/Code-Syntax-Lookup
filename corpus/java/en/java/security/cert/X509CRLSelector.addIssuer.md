---
id: "java-en-function-x509crlselector-addissuer"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.addIssuer"
signature: "public void addIssuer(X500Principal issuer)"
title: "X509CRLSelector.addIssuer"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.addIssuer

```java
public void addIssuer(X500Principal issuer)
```

Adds a name to the issuerNames criterion. The issuer distinguished
 name in the `X509CRL` must match at least one of the specified
 distinguished names.
 

 This method allows the caller to add a name to the set of issuer names
 which `X509CRLs` may contain. The specified name is added to
 any previous value for the issuerNames criterion.
 If the specified name is a duplicate, it may be ignored.

**参数**

- **issuer** — the issuer as X500Principal

> *Since 1.5*
