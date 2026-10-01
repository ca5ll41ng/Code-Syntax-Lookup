---
id: "java-en-function-strictmath-scalb"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.scalb"
signature: "public static double scalb(double d, int scaleFactor)"
title: "StrictMath.scalb"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.scalb

```java
public static double scalb(double d, int scaleFactor)
```

Returns `d` &times; 2`scaleFactor`
 rounded as if performed by a single correctly rounded
 floating-point multiply.  If the exponent of the result is
 between `MIN_EXPONENT` and `MAX_EXPONENT`, the answer is calculated exactly.  If the
 exponent of the result would be larger than `Double.MAX_EXPONENT`, an infinity is returned.  Note that if
 the result is subnormal, precision may be lost; that is, when
 `scalb(x, n)` is subnormal, `scalb(scalb(x, n),
 -n)` may not equal x.  When the result is non-NaN, the
 result has the same sign as `d`.

 

Special cases:
 
 
-  If the first argument is NaN, NaN is returned.
 
-  If the first argument is infinite, then an infinity of the
 same sign is returned.
 
-  If the first argument is zero, then a zero of the same
 sign is returned.

**参数**

- **d** — number to be scaled by a power of two.
- **scaleFactor** — power of 2 used to scale `d`

**返回**

- `d` &times; 2`scaleFactor`

> *Since 1.6*
