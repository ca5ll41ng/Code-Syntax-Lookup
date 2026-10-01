---
id: "java-en-function-x509crlselector-setmaxcrlnumber"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.setMaxCRLNumber"
signature: "public void setMaxCRLNumber(BigInteger maxCRL)"
title: "X509CRLSelector.setMaxCRLNumber"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.setMaxCRLNumber

```java
public void setMaxCRLNumber(BigInteger maxCRL)
```

Sets the maxCRLNumber criterion. The `X509CRL` must have a
 CRL number extension whose value is less than or equal to the
 specified value. If `null`, no maxCRLNumber check will be
 done.

**参数**

- **maxCRL** — the maximum CRL number accepted (or `null`)
