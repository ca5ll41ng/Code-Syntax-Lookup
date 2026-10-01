---
id: "java-en-function-x509crlselector-setmincrlnumber"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.setMinCRLNumber"
signature: "public void setMinCRLNumber(BigInteger minCRL)"
title: "X509CRLSelector.setMinCRLNumber"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.setMinCRLNumber

```java
public void setMinCRLNumber(BigInteger minCRL)
```

Sets the minCRLNumber criterion. The `X509CRL` must have a
 CRL number extension whose value is greater than or equal to the
 specified value. If `null`, no minCRLNumber check will be
 done.

**参数**

- **minCRL** — the minimum CRL number accepted (or `null`)
