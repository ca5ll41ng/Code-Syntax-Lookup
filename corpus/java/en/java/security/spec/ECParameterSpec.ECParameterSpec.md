---
id: "java-en-function-ecparameterspec-ecparameterspec"
language: "java"
lang: "en"
category: "function"
name: "ECParameterSpec.ECParameterSpec"
signature: "public ECParameterSpec(EllipticCurve curve, ECPoint g, BigInteger n, int h)"
title: "ECParameterSpec.ECParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECParameterSpec.ECParameterSpec

```java
public ECParameterSpec(EllipticCurve curve, ECPoint g, BigInteger n, int h)
```

Creates elliptic curve domain parameters based on the
 specified values.

**参数**

- **curve** — the elliptic curve which this parameter defines.
- **g** — the generator which is also known as the base point.
- **n** — the order of the generator `g`.
- **h** — the cofactor.

**异常**

- **NullPointerException** — if `curve`, `g`, or `n` is null.
- **IllegalArgumentException** — if `n` or `h` is not positive.
