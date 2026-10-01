---
id: "java-en-function-math-atan2"
language: "java"
lang: "en"
category: "function"
name: "Math.atan2"
signature: "public static double atan2(double y, double x)"
title: "Math.atan2"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.atan2

```java
public static double atan2(double y, double x)
```

Returns the angle theta from the conversion of rectangular
 coordinates (`x`,&nbsp;`y`) to polar
 coordinates (r,&nbsp;theta).
 This method computes the phase theta by computing an arc tangent
 of `y/x` in the range of &minus;pi to pi. Special
 cases:
 
- If either argument is NaN, then the result is NaN.
 
- If the first argument is positive zero and the second argument
 is positive, or the first argument is positive and finite and the
 second argument is positive infinity, then the result is positive
 zero.
 
- If the first argument is negative zero and the second argument
 is positive, or the first argument is negative and finite and the
 second argument is positive infinity, then the result is negative zero.
 
- If the first argument is positive zero and the second argument
 is negative, or the first argument is positive and finite and the
 second argument is negative infinity, then the result is the
 `double` value closest to pi.
 
- If the first argument is negative zero and the second argument
 is negative, or the first argument is negative and finite and the
 second argument is negative infinity, then the result is the
 `double` value closest to -pi.
 
- If the first argument is positive and the second argument is
 positive zero or negative zero, or the first argument is positive
 infinity and the second argument is finite, then the result is the
 `double` value closest to pi/2.
 
- If the first argument is negative and the second argument is
 positive zero or negative zero, or the first argument is negative
 infinity and the second argument is finite, then the result is the
 `double` value closest to -pi/2.
 
- If both arguments are positive infinity, then the result is the
 `double` value closest to pi/4.
 
- If the first argument is positive infinity and the second argument
 is negative infinity, then the result is the `double`
 value closest to 3*pi/4.
 
- If the first argument is negative infinity and the second argument
 is positive infinity, then the result is the `double` value
 closest to -pi/4.
 
- If both arguments are negative infinity, then the result is the
 `double` value closest to -3*pi/4.

 

The computed result must be within 2 ulps of the exact result.
 Results must be semi-monotonic.

 For y with a positive sign and finite nonzero
 x, the exact mathematical value of `atan2` is
 equal to:
 
 
- If x > 0, atan(abs(y/x))
 
- If x < 0, &pi; - atan(abs(y/x))

**参数**

- **y** — the ordinate coordinate
- **x** — the abscissa coordinate

**返回**

- the theta component of the point (r,&nbsp;theta) in polar coordinates that corresponds to the point (x,&nbsp;y) in Cartesian coordinates.
