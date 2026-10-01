---
id: "java-en-function-pkixcertpathvalidatorresult-gettrustanchor"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathValidatorResult.getTrustAnchor"
signature: "public TrustAnchor getTrustAnchor()"
title: "PKIXCertPathValidatorResult.getTrustAnchor"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathValidatorResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathValidatorResult.getTrustAnchor

```java
public TrustAnchor getTrustAnchor()
```

Returns the `TrustAnchor` describing the CA that served
 as a trust anchor for the certification path.

**返回**

- the `TrustAnchor` (never `null`)
