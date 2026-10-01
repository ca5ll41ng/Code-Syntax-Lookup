---
id: "java-en-function-pkixcertpathbuilderresult-pkixcertpathbuilderresult"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathBuilderResult.PKIXCertPathBuilderResult"
signature: "public PKIXCertPathBuilderResult(CertPath certPath, TrustAnchor trustAnchor, PolicyNode policyTree, PublicKey subjectPublicKey)"
title: "PKIXCertPathBuilderResult.PKIXCertPathBuilderResult"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathBuilderResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathBuilderResult.PKIXCertPathBuilderResult

```java
public PKIXCertPathBuilderResult(CertPath certPath, TrustAnchor trustAnchor, PolicyNode policyTree, PublicKey subjectPublicKey)
```

Creates an instance of `PKIXCertPathBuilderResult`
 containing the specified parameters.

**参数**

- **certPath** — the validated `CertPath`
- **trustAnchor** — a `TrustAnchor` describing the CA that served as a trust anchor for the certification path
- **policyTree** — the immutable valid policy tree, or `null` if there are no valid policies
- **subjectPublicKey** — the public key of the subject

**异常**

- **NullPointerException** — if the `certPath`, `trustAnchor` or `subjectPublicKey` parameters are `null`
