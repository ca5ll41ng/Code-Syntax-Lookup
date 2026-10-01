---
id: "java-en-function-math-expm1"
language: "java"
lang: "en"
category: "function"
name: "Math.expm1"
signature: "public static double expm1(double x)"
title: "Math.expm1"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.expm1

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

 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.  The result of
 `expm1` for any finite input must be greater than or
 equal to `-1.0`.  Note that once the exact result of
 e`x`&nbsp;-&nbsp;1 is within 1/2
 ulp of the limit value -1, `-1.0` should be
 returned.

**参数**

- **x** — the exponent to raise e to in the computation of e`x`&nbsp;&minus;1.

**返回**

- the value e`x`&nbsp;-&nbsp;1.

> *Since 1.5*
