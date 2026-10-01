---
id: "java-en-function-biginteger-sqrt"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.sqrt"
signature: "public BigInteger sqrt()"
title: "BigInteger.sqrt"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.sqrt

```java
public BigInteger sqrt()
```

Returns the integer square root of this BigInteger.  The integer square
 root of the corresponding mathematical integer `n` is the largest
 mathematical integer `s` such that `s*s <= n`.  It is equal
 to the value of `floor(sqrt(n))`, where `sqrt(n)` denotes the
 real square root of `n` treated as a real.  Note that the integer
 square root will be less than the real square root if the latter is not
 representable as an integral value.

**返回**

- the integer square root of `this`

**异常**

- **ArithmeticException** — if `this` is negative.  (The square root of a negative integer `val` is `(i * sqrt(-val))` where i is the imaginary unit and is equal to `sqrt(-1)`.)

> *Since 9*
