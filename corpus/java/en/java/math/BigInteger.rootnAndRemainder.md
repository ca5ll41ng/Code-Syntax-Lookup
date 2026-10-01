---
id: "java-en-function-biginteger-rootnandremainder"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.rootnAndRemainder"
signature: "public BigInteger[] rootnAndRemainder(int n)"
title: "BigInteger.rootnAndRemainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.rootnAndRemainder

```java
public BigInteger[] rootnAndRemainder(int n)
```

Returns an array of two BigIntegers containing the integer `n`th root
 `r` of `this` and its remainder `this - r``n`,
 respectively.

          `sqrtAndRemainder()`.

**参数**

- **n** — the root degree

**返回**

- an array of two BigIntegers with the integer `n`th root at offset 0 and the remainder at offset 1

**异常**

- **ArithmeticException** — if `n <= 0`.
- **ArithmeticException** — if `n` is even and `this` is negative.

**参见**

- #sqrt()
- #sqrtAndRemainder()
- #rootn(int)

> *Since 26*
