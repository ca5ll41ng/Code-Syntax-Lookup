---
id: "java-en-function-ecpublickeyspec-ecpublickeyspec"
language: "java"
lang: "en"
category: "function"
name: "ECPublicKeySpec.ECPublicKeySpec"
signature: "public ECPublicKeySpec(ECPoint w, ECParameterSpec params)"
title: "ECPublicKeySpec.ECPublicKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECPublicKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECPublicKeySpec.ECPublicKeySpec

```java
public ECPublicKeySpec(ECPoint w, ECParameterSpec params)
```

Creates a new ECPublicKeySpec with the specified
 parameter values.

**参数**

- **w** — the public point.
- **params** — the associated elliptic curve domain parameters.

**异常**

- **NullPointerException** — if `w` or `params` is null.
- **IllegalArgumentException** — if `w` is point at infinity, i.e. ECPoint.POINT_INFINITY
