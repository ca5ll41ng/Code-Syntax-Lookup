---
id: "java-en-function-math-cos"
language: "java"
lang: "en"
category: "function"
name: "Math.cos"
signature: "public static double cos(double a)"
title: "Math.cos"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.cos

```java
public static double cos(double a)
```

Returns the trigonometric cosine of an angle. Special cases:
 
- If the argument is NaN or an infinity, then the
 result is NaN.
 
- If the argument is zero, then the result is `1.0`.

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — an angle, in radians.

**返回**

- the cosine of the argument.
