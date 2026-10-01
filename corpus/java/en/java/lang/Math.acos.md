---
id: "java-en-function-math-acos"
language: "java"
lang: "en"
category: "function"
name: "Math.acos"
signature: "public static double acos(double a)"
title: "Math.acos"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.acos

```java
public static double acos(double a)
```

Returns the arc cosine of a value; the returned angle is in the
 range 0.0 through pi.  Special case:
 
- If the argument is NaN or its absolute value is greater
 than 1, then the result is NaN.
 
- If the argument is `1.0`, the result is positive zero.
 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — the value whose arc cosine is to be returned.

**返回**

- the arc cosine of the argument.
