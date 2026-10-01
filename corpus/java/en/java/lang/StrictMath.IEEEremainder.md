---
id: "java-en-function-strictmath-ieeeremainder"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.IEEEremainder"
signature: "public static double IEEEremainder(double f1, double f2)"
title: "StrictMath.IEEEremainder"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.IEEEremainder

```java
public static double IEEEremainder(double f1, double f2)
```

Computes the remainder operation on two arguments as prescribed
 by the IEEE 754 standard.
 The remainder value is mathematically equal to
 f1&nbsp;-&nbsp;f2&nbsp;&times;&nbsp;n,
 where n is the mathematical integer closest to the exact
 mathematical value of the quotient `f1/f2`, and if two
 mathematical integers are equally close to `f1/f2`,
 then n is the integer that is even. If the remainder is
 zero, its sign is the same as the sign of the first argument.
 Special cases:
 
- If either argument is NaN, or the first argument is infinite,
 or the second argument is positive zero or negative zero, then the
 result is NaN.
 
- If the first argument is finite and the second argument is
 infinite, then the result is the same as the first argument.

**参数**

- **f1** — the dividend.
- **f2** — the divisor.

**返回**

- the remainder when `f1` is divided by `f2`.
