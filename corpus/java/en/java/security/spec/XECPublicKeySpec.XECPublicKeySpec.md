---
id: "java-en-function-xecpublickeyspec-xecpublickeyspec"
language: "java"
lang: "en"
category: "function"
name: "XECPublicKeySpec.XECPublicKeySpec"
signature: "public XECPublicKeySpec(AlgorithmParameterSpec params, BigInteger u)"
title: "XECPublicKeySpec.XECPublicKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/XECPublicKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPublicKeySpec.XECPublicKeySpec

```java
public XECPublicKeySpec(AlgorithmParameterSpec params, BigInteger u)
```

Construct a public key spec using the supplied parameters and
 u coordinate.

**参数**

- **params** — the algorithm parameters
- **u** — the u-coordinate of the point, represented using a BigInteger which may hold any value

**异常**

- **NullPointerException** — if `params` or `u` is null.
