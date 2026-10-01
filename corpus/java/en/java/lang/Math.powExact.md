---
id: "java-en-function-math-powexact"
language: "java"
lang: "en"
category: "function"
name: "Math.powExact"
signature: "public static int powExact(int x, int n)"
title: "Math.powExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.powExact

```java
public static int powExact(int x, int n)
```

Returns `x` raised to the power of `n`,
 throwing an exception if the result overflows an `int`.
 When `n` is 0, the returned value is 1.

**参数**

- **x** — the base.
- **n** — the exponent.

**返回**

- `x` raised to the power of `n`.

**异常**

- **ArithmeticException** — when `n` is negative, or when the result overflows an int.

> *Since 25*
