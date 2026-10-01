---
id: "java-en-function-math-log1p"
language: "java"
lang: "en"
category: "function"
name: "Math.log1p"
signature: "public static double log1p(double x)"
title: "Math.log1p"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.log1p

```java
public static double log1p(double x)
```

Returns the natural logarithm of the sum of the argument and 1.
 Note that for small values `x`, the result of
 `log1p(x)` is much closer to the true result of ln(1
 + `x`) than the floating-point evaluation of
 `log(1.0+x)`.

 

Special cases:

 

 
- If the argument is NaN or less than -1, then the result is
 NaN.

 
- If the argument is positive infinity, then the result is
 positive infinity.

 
- If the argument is negative one, then the result is
 negative infinity.

 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **x** — a value

**返回**

- the value ln(`x`&nbsp;+&nbsp;1), the natural log of `x`&nbsp;+&nbsp;1

> *Since 1.5*
