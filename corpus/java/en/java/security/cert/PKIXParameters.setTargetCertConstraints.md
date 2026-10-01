---
id: "java-en-function-pkixparameters-settargetcertconstraints"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setTargetCertConstraints"
signature: "public void setTargetCertConstraints(CertSelector selector)"
title: "PKIXParameters.setTargetCertConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setTargetCertConstraints

```java
public void setTargetCertConstraints(CertSelector selector)
```

Sets the required constraints on the target certificate.
 The constraints are specified as an instance of
 `CertSelector`. If `null`, no constraints are
 defined.

 

Note that the `CertSelector` specified is cloned
 to protect against subsequent modifications.

**参数**

- **selector** — a `CertSelector` specifying the constraints on the target certificate (or `null`)

**参见**

- #getTargetCertConstraints
