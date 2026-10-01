---
id: "java-en-function-trustanchor-getcaname"
language: "java"
lang: "en"
category: "function"
name: "TrustAnchor.getCAName"
signature: "public final String getCAName()"
title: "TrustAnchor.getCAName"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/TrustAnchor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustAnchor.getCAName

```java
public final String getCAName()
```

Returns the name of the most-trusted CA in RFC 2253 `String`
 format.

**返回**

- the X.500 distinguished name of the most-trusted CA, or `null` if the trust anchor was not specified as a trusted public key and name or X500Principal pair
