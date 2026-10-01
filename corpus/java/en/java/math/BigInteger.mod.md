---
id: "java-en-function-biginteger-mod"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.mod"
signature: "public BigInteger mod(BigInteger m)"
title: "BigInteger.mod"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.mod

```java
public BigInteger mod(BigInteger m)
```

Returns a BigInteger whose value is `(this mod m`).  This method
 differs from `remainder` in that it always returns a
 non-negative BigInteger.

**参数**

- **m** — the modulus.

**返回**

- `this mod m`

**异常**

- **ArithmeticException** — `m` &le; 0

**参见**

- #remainder
