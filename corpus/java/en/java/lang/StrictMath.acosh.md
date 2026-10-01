---
id: "java-en-function-strictmath-acosh"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.acosh"
signature: "public static double acosh(double x)"
title: "StrictMath.acosh"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.acosh

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

 
- If the argument less than `1.0`, then the result is NaN.

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is `1.0`, then the result is positive zero.

**参数**

- **x** — The number whose inverse hyperbolic cosine is to be returned.

**返回**

- The inverse hyperbolic cosine of `x`.

> *Since 27*
