---
id: "java-en-function-x509crlselector-getmincrl"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.getMinCRL"
signature: "public BigInteger getMinCRL()"
title: "X509CRLSelector.getMinCRL"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.getMinCRL

```java
public BigInteger getMinCRL()
```

Returns the minCRLNumber criterion. The `X509CRL` must have a
 CRL number extension whose value is greater than or equal to the
 specified value. If `null`, no minCRLNumber check will be done.

**返回**

- the minimum CRL number accepted (or `null`)
