---
id: "java-en-function-x509certselector-setissuer"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setIssuer"
signature: "public void setIssuer(X500Principal issuer)"
title: "X509CertSelector.setIssuer"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setIssuer

```java
public void setIssuer(X500Principal issuer)
```

Sets the issuer criterion. The specified distinguished name
 must match the issuer distinguished name in the
 `X509Certificate`. If `null`, any issuer
 distinguished name will do.

**参数**

- **issuer** — a distinguished name as X500Principal (or `null`)

> *Since 1.5*
