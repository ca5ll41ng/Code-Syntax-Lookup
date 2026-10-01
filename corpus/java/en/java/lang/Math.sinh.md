---
id: "java-en-function-math-sinh"
language: "java"
lang: "en"
category: "function"
name: "Math.sinh"
signature: "public static double sinh(double x)"
title: "Math.sinh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.sinh

```java
public static double sinh(double x)
```

Returns the hyperbolic sine of a `double` value.
 The hyperbolic sine of x is defined to be
 (ex&nbsp;&minus;&nbsp;e&minus;x)/2
 where e is `E Euler's number`.

 

Special cases:
 

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is infinite, then the result is an infinity
 with the same sign as the argument.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 

 

The computed result must be within 2.5 ulps of the exact result.

**参数**

- **x** — The number whose hyperbolic sine is to be returned.

**返回**

- The hyperbolic sine of `x`.

> *Since 1.5*
