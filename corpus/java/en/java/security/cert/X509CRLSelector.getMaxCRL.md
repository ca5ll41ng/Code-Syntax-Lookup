---
id: "java-en-function-x509crlselector-getmaxcrl"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.getMaxCRL"
signature: "public BigInteger getMaxCRL()"
title: "X509CRLSelector.getMaxCRL"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.getMaxCRL

```java
public BigInteger getMaxCRL()
```

Returns the maxCRLNumber criterion. The `X509CRL` must have a
 CRL number extension whose value is less than or equal to the
 specified value. If `null`, no maxCRLNumber check will be
 done.

**返回**

- the maximum CRL number accepted (or `null`)
