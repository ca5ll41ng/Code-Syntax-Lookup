---
id: "java-en-function-pkixparameters-gettargetcertconstraints"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getTargetCertConstraints"
signature: "public CertSelector getTargetCertConstraints()"
title: "PKIXParameters.getTargetCertConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getTargetCertConstraints

```java
public CertSelector getTargetCertConstraints()
```

Returns the required constraints on the target certificate.
 The constraints are returned as an instance of `CertSelector`.
 If `null`, no constraints are defined.

 

Note that the `CertSelector` returned is cloned
 to protect against subsequent modifications.

**返回**

- a `CertSelector` specifying the constraints on the target certificate (or `null`)

**参见**

- #setTargetCertConstraints
