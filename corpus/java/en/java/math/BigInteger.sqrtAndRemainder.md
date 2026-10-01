---
id: "java-en-function-biginteger-sqrtandremainder"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.sqrtAndRemainder"
signature: "public BigInteger[] sqrtAndRemainder()"
title: "BigInteger.sqrtAndRemainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.sqrtAndRemainder

```java
public BigInteger[] sqrtAndRemainder()
```

Returns an array of two BigIntegers containing the integer square root
 `s` of `this` and its remainder `this - s*s`,
 respectively.

**返回**

- an array of two BigIntegers with the integer square root at offset 0 and the remainder at offset 1

**异常**

- **ArithmeticException** — if `this` is negative.  (The square root of a negative integer `val` is `(i * sqrt(-val))` where i is the imaginary unit and is equal to `sqrt(-1)`.)

**参见**

- #sqrt()

> *Since 9*
