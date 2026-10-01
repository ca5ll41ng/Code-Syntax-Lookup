---
id: "java-en-function-strictmath-powexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.powExact"
signature: "public static int powExact(int x, int n)"
title: "StrictMath.powExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.powExact

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
