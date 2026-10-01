---
id: "java-en-function-strictmath-tanh"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.tanh"
signature: "public static double tanh(double x)"
title: "StrictMath.tanh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.tanh

```java
public static double tanh(double x)
```

Returns the hyperbolic tangent of a `double` value.
 The hyperbolic tangent of x is defined to be
 (ex&nbsp;&minus;&nbsp;e&minus;x)/(ex&nbsp;+&nbsp;e&minus;x),
 in other words, `sinh
 sinh`/`cosh cosh`.  Note
 that the absolute value of the exact tanh is always less than
 1.

 

Special cases:
 

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 
- If the argument is positive infinity, then the result is
 `+1.0`.

 
- If the argument is negative infinity, then the result is
 `-1.0`.

**参数**

- **x** — The number whose hyperbolic tangent is to be returned.

**返回**

- The hyperbolic tangent of `x`.

> *Since 1.5*
