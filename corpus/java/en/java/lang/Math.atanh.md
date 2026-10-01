---
id: "java-en-function-math-atanh"
language: "java"
lang: "en"
category: "function"
name: "Math.atanh"
signature: "public static double atanh(double x)"
title: "Math.atanh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.atanh

```java
public static double atanh(double x)
```

Returns the inverse hyperbolic tangent of a `double` value.
 The inverse hyperbolic tangent of x is defined to be the function such that
 atanh(`tanh tanh`) = x for any x.
 Note that the domain of the exact atanh is (-1; 1), the range is unrestricted.

 

Special cases:
 

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 
- If the argument is `+1.0`, then the result is
 positive infinity.

 
- If the argument is `-1.0`, then the result is
 negative infinity.

 
- If the argument is greater than `1.0` in magnitude, then the result is NaN.

 

 

 The computed result must be within 2.5 ulps of the exact result.

**参数**

- **x** — The number whose inverse hyperbolic tangent is to be returned.

**返回**

- The inverse hyperbolic tangent of `x`.

> *Since 27*
