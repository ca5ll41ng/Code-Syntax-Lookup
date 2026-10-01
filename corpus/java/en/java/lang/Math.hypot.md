---
id: "java-en-function-math-hypot"
language: "java"
lang: "en"
category: "function"
name: "Math.hypot"
signature: "public static double hypot(double x, double y)"
title: "Math.hypot"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.hypot

```java
public static double hypot(double x, double y)
```

Returns sqrt(x2&nbsp;+y2)
 without intermediate overflow or underflow.

 

Special cases:
 

 
-  If either argument is infinite, then the result
 is positive infinity.

 
-  If either argument is NaN and neither argument is infinite,
 then the result is NaN.

 
-  If both arguments are zero, the result is positive zero.
 

 

The computed result must be within 1.5 ulps of the exact
 result.  If one parameter is held constant, the results must be
 semi-monotonic in the other parameter.

**参数**

- **x** — a value
- **y** — a value

**返回**

- sqrt(x2&nbsp;+y2) without intermediate overflow or underflow

> *Since 1.5*
