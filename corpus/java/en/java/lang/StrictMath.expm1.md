---
id: "java-en-function-strictmath-expm1"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.expm1"
signature: "public static double expm1(double x)"
title: "StrictMath.expm1"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.expm1

```java
public static double expm1(double x)
```

Returns ex&nbsp;&minus;1.  Note that for values of
 x near 0, the exact sum of
 `expm1(x)`&nbsp;+&nbsp;1 is much closer to the true
 result of ex than `exp(x)`.

 

Special cases:
 
 
- If the argument is NaN, the result is NaN.

 
- If the argument is positive infinity, then the result is
 positive infinity.

 
- If the argument is negative infinity, then the result is
 -1.0.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

**参数**

- **x** — the exponent to raise e to in the computation of e`x`&nbsp;&minus;1.

**返回**

- the value e`x`&nbsp;-&nbsp;1.

> *Since 1.5*
