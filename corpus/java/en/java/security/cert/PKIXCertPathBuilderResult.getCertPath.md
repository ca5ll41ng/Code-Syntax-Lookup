---
id: "java-en-function-pkixcertpathbuilderresult-getcertpath"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathBuilderResult.getCertPath"
signature: "public CertPath getCertPath()"
title: "PKIXCertPathBuilderResult.getCertPath"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathBuilderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathBuilderResult.getCertPath

```java
public CertPath getCertPath()
```

Returns the built and validated certification path. The
 `CertPath` object does not include the trust anchor.
 Instead, use the `getTrustAnchor` method to
 obtain the `TrustAnchor` that served as the trust anchor
 for the certification path.

**返回**

- the built and validated `CertPath` (never `null`)
