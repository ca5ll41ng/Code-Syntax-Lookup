---
id: "java-en-function-trustanchor-getcapublickey"
language: "java"
lang: "en"
category: "function"
name: "TrustAnchor.getCAPublicKey"
signature: "public final PublicKey getCAPublicKey()"
title: "TrustAnchor.getCAPublicKey"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/TrustAnchor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustAnchor.getCAPublicKey

```java
public final PublicKey getCAPublicKey()
```

Returns the public key of the most-trusted CA.

**返回**

- the public key of the most-trusted CA, or `null` if the trust anchor was not specified as a trusted public key and name or X500Principal pair
