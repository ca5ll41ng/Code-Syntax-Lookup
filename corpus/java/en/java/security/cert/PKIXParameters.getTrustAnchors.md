---
id: "java-en-function-pkixparameters-gettrustanchors"
language: "java"
lang: "en"
category: "function"
name: "PKIXParameters.getTrustAnchors"
signature: "public Set<TrustAnchor> getTrustAnchors()"
title: "PKIXParameters.getTrustAnchors"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/PKIXParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKIXParameters.getTrustAnchors

```java
public Set<TrustAnchor> getTrustAnchors()
```

Returns an immutable `Set` of the most-trusted
 CAs.

**返回**

- an immutable `Set` of `TrustAnchor`s (never `null`)

**参见**

- #setTrustAnchors
