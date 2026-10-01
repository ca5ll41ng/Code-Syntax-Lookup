---
id: "java-en-function-ecpoint-ecpoint"
language: "java"
lang: "en"
category: "function"
name: "ECPoint.ECPoint"
signature: "public ECPoint(BigInteger x, BigInteger y)"
title: "ECPoint.ECPoint"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECPoint.ECPoint

```java
public ECPoint(BigInteger x, BigInteger y)
```

Creates an ECPoint from the specified affine x-coordinate
 `x` and affine y-coordinate `y`.

**参数**

- **x** — the affine x-coordinate.
- **y** — the affine y-coordinate.

**异常**

- **NullPointerException** — if `x` or `y` is null.
