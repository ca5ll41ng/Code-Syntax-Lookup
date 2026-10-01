---
id: "java-en-function-math-tan"
language: "java"
lang: "en"
category: "function"
name: "Math.tan"
signature: "public static double tan(double a)"
title: "Math.tan"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.tan

```java
public static double tan(double a)
```

Returns the trigonometric tangent of an angle.  Special cases:
 
- If the argument is NaN or an infinity, then the result
 is NaN.
 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 

The computed result must be within 1.25 ulps of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — an angle, in radians.

**返回**

- the tangent of the argument.
