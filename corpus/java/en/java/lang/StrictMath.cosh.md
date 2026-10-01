---
id: "java-en-function-strictmath-cosh"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.cosh"
signature: "public static double cosh(double x)"
title: "StrictMath.cosh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.cosh

```java
public static double cosh(double x)
```

Returns the hyperbolic cosine of a `double` value.
 The hyperbolic cosine of x is defined to be
 (ex&nbsp;+&nbsp;e&minus;x)/2
 where e is `E Euler's number`.

 

Special cases:
 

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is infinite, then the result is positive
 infinity.

 
- If the argument is zero, then the result is `1.0`.

**参数**

- **x** — The number whose hyperbolic cosine is to be returned.

**返回**

- The hyperbolic cosine of `x`.

> *Since 1.5*
