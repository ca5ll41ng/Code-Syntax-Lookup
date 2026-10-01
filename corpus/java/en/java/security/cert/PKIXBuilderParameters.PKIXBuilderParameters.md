---
id: "java-en-function-pkixbuilderparameters-pkixbuilderparameters"
language: "java"
lang: "en"
category: "function"
name: "PKIXBuilderParameters.PKIXBuilderParameters"
signature: "public PKIXBuilderParameters(Set<TrustAnchor> trustAnchors, CertSelector targetConstraints) throws InvalidAlgorithmParameterException"
title: "PKIXBuilderParameters.PKIXBuilderParameters"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXBuilderParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXBuilderParameters.PKIXBuilderParameters

```java
public PKIXBuilderParameters(Set<TrustAnchor> trustAnchors, CertSelector targetConstraints) throws InvalidAlgorithmParameterException
```

Creates an instance of `PKIXBuilderParameters` with
 the specified `Set` of most-trusted CAs.
 Each element of the set is a `TrustAnchor TrustAnchor`.

 

Note that the `Set` is copied to protect against
 subsequent modifications.

**参数**

- **trustAnchors** — a `Set` of `TrustAnchor`s
- **targetConstraints** — a `CertSelector` specifying the constraints on the target certificate

**异常**

- **InvalidAlgorithmParameterException** — if `trustAnchors` is empty `(trustAnchors.isEmpty() == true)`
- **NullPointerException** — if `trustAnchors` is `null`
- **ClassCastException** — if any of the elements of `trustAnchors` are not of type `java.security.cert.TrustAnchor`
