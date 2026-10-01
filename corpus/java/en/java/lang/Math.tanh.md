---
id: "java-en-function-math-tanh"
language: "java"
lang: "en"
category: "function"
name: "Math.tanh"
signature: "public static double tanh(double x)"
title: "Math.tanh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.tanh

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

 

 

The computed result must be within 2.5 ulps of the exact result.
 The result of `tanh` for any finite input must have
 an absolute value less than or equal to 1.  Note that once the
 exact result of tanh is within 1/2 of an ulp of the limit value
 of &plusmn;1, correctly signed &plusmn;`1.0` should
 be returned.

**参数**

- **x** — The number whose hyperbolic tangent is to be returned.

**返回**

- The hyperbolic tangent of `x`.

> *Since 1.5*
