---
id: "java-en-function-strictmath-asinh"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.asinh"
signature: "public static double asinh(double x)"
title: "StrictMath.asinh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.asinh

```java
public static double asinh(double x)
```

Returns the inverse hyperbolic sine of a `double` value.
 The inverse hyperbolic sine of x is defined to be the function such that
 asinh(`sinh sinh`) = x for any x.
 Note that both domain and range of the exact asinh are unrestricted.
 

Special cases:
 

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 
- If the argument is infinity, then the result is
 infinity with the same sign as the argument.

 
- If the argument is NaN, then the result is NaN.

**参数**

- **x** — The number whose inverse hyperbolic sine is to be returned.

**返回**

- The inverse hyperbolic sine of `x`.

> *Since 27*
