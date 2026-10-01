---
id: "java-en-function-pkixparameters-pkixparameters"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.PKIXParameters"
signature: "public PKIXParameters(Set<TrustAnchor> trustAnchors) throws InvalidAlgorithmParameterException"
title: "PKIXParameters.PKIXParameters"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.PKIXParameters

```java
public PKIXParameters(Set<TrustAnchor> trustAnchors) throws InvalidAlgorithmParameterException
```

Creates an instance of `PKIXParameters` with the specified
 `Set` of most-trusted CAs. Each element of the
 set is a `TrustAnchor TrustAnchor`.
 

 Note that the `Set` is copied to protect against
 subsequent modifications.

**参数**

- **trustAnchors** — a `Set` of `TrustAnchor`s

**异常**

- **InvalidAlgorithmParameterException** — if the specified `Set` is empty `(trustAnchors.isEmpty() == true)`
- **NullPointerException** — if the specified `Set` is `null`
- **ClassCastException** — if any of the elements in the `Set` are not of type `java.security.cert.TrustAnchor`
