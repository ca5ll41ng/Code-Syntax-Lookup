---
id: "java-en-function-pkixparameters-settrustanchors"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.setTrustAnchors"
signature: "public void setTrustAnchors(Set<TrustAnchor> trustAnchors) throws InvalidAlgorithmParameterException"
title: "PKIXParameters.setTrustAnchors"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.setTrustAnchors

```java
public void setTrustAnchors(Set<TrustAnchor> trustAnchors) throws InvalidAlgorithmParameterException
```

Sets the `Set` of most-trusted CAs.
 

 Note that the `Set` is copied to protect against
 subsequent modifications.

**参数**

- **trustAnchors** — a `Set` of `TrustAnchor`s

**异常**

- **InvalidAlgorithmParameterException** — if the specified `Set` is empty `(trustAnchors.isEmpty() == true)`
- **NullPointerException** — if the specified `Set` is `null`
- **ClassCastException** — if any of the elements in the set are not of type `java.security.cert.TrustAnchor`

**参见**

- #getTrustAnchors
