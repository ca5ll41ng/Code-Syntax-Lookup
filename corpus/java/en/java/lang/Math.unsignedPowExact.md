---
id: "java-en-function-math-unsignedpowexact"
language: "java"
lang: "en"
category: "function"
name: "Math.unsignedPowExact"
signature: "public static int unsignedPowExact(int x, int n)"
title: "Math.unsignedPowExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.unsignedPowExact

```java
public static int unsignedPowExact(int x, int n)
```

Returns unsigned `x` raised to the power of `n`,
 throwing an exception if the result overflows an unsigned `int`.
 When `n` is 0, the returned value is 1.

**参数**

- **x** — the unsigned base.
- **n** — the exponent.

**返回**

- `x` raised to the power of `n`.

**异常**

- **ArithmeticException** — when `n` is negative, or when the result overflows an unsigned int.

> *Since 25*
