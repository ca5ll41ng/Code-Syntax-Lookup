---
id: "java-en-function-ellipticcurve-ellipticcurve"
language: "java"
lang: "en"
category: "function"
name: "EllipticCurve.EllipticCurve"
signature: "public EllipticCurve(ECField field, BigInteger a, BigInteger b)"
title: "EllipticCurve.EllipticCurve"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EllipticCurve.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EllipticCurve.EllipticCurve

```java
public EllipticCurve(ECField field, BigInteger a, BigInteger b)
```

Creates an elliptic curve with the specified elliptic field
 `field` and the coefficients `a` and
 `b`.

**参数**

- **field** — the finite field that this elliptic curve is over.
- **a** — the first coefficient of this elliptic curve.
- **b** — the second coefficient of this elliptic curve.

**异常**

- **NullPointerException** — if `field`, `a`, or `b` is null.
- **IllegalArgumentException** — if `a` or `b` is not null and not in `field`.
