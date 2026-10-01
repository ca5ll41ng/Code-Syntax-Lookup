---
id: "java-en-function-pkixcertpathvalidatorresult-pkixcertpathvalidatorresult"
language: "java"
lang: "en"
category: "function"
name: "PKIXCertPathValidatorResult.PKIXCertPathValidatorResult"
signature: "public PKIXCertPathValidatorResult(TrustAnchor trustAnchor, PolicyNode policyTree, PublicKey subjectPublicKey)"
title: "PKIXCertPathValidatorResult.PKIXCertPathValidatorResult"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXCertPathValidatorResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXCertPathValidatorResult.PKIXCertPathValidatorResult

```java
public PKIXCertPathValidatorResult(TrustAnchor trustAnchor, PolicyNode policyTree, PublicKey subjectPublicKey)
```

Creates an instance of `PKIXCertPathValidatorResult`
 containing the specified parameters.

**参数**

- **trustAnchor** — a `TrustAnchor` describing the CA that served as a trust anchor for the certification path
- **policyTree** — the immutable valid policy tree, or `null` if there are no valid policies
- **subjectPublicKey** — the public key of the subject

**异常**

- **NullPointerException** — if the `subjectPublicKey` or `trustAnchor` parameters are `null`
