---
id: "java-en-function-strictmath-atanh"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.atanh"
signature: "public static double atanh(double x)"
title: "StrictMath.atanh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.atanh

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

**参数**

- **x** — The number whose inverse hyperbolic tangent is to be returned.

**返回**

- The inverse hyperbolic tangent of `x`.

> *Since 27*
