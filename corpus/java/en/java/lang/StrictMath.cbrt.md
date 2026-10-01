---
id: "java-en-function-strictmath-cbrt"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.cbrt"
signature: "public static double cbrt(double a)"
title: "StrictMath.cbrt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.cbrt

```java
public static double cbrt(double a)
```

Returns the cube root of a `double` value.  For
 positive finite `x`, `cbrt(-x) ==
 -cbrt(x)`; that is, the cube root of a negative value is
 the negative of the cube root of that value's magnitude.
 Special cases:

 

 
- If the argument is NaN, then the result is NaN.

 
- If the argument is infinite, then the result is an infinity
 with the same sign as the argument.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

**参数**

- **a** — a value.

**返回**

- the cube root of `a`.

> *Since 1.5*
