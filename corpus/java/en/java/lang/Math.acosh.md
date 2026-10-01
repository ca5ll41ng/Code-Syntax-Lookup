---
id: "java-en-function-math-acosh"
language: "java"
lang: "en"
category: "function"
name: "Math.acosh"
signature: "public static double acosh(double x)"
title: "Math.acosh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.acosh

```java
public static double acosh(double x)
```

Returns the inverse hyperbolic cosine of a `double` value.
 The inverse hyperbolic cosine of x is defined to be the function such that
  acosh(`cosh cosh`) = x for any x >= 0.
  Note that range of the exact acosh(x) is >= 0.
 

Special cases:
 

 
- If the argument is positive infinity, then the result is
 positive infinity

 
- If the argument less than 1, then the result is NaN.

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is `1.0`, then the result is positive zero.

 

 

The computed result must be within 2.5 ulps of the exact result.

**参数**

- **x** — The number whose inverse hyperbolic cosine is to be returned.

**返回**

- The inverse hyperbolic cosine of `x`.

> *Since 27*
