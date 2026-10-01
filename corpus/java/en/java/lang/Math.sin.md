---
id: "java-en-function-math-sin"
language: "java"
lang: "en"
category: "function"
name: "Math.sin"
signature: "public static double sin(double a)"
title: "Math.sin"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.sin

```java
public static double sin(double a)
```

Returns the trigonometric sine of an angle.  Special cases:
 
- If the argument is NaN or an infinity, then the
 result is NaN.
 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — an angle, in radians.

**返回**

- the sine of the argument.
