---
id: "java-en-function-math-nextafter"
language: "java"
lang: "en"
category: "function"
name: "Math.nextAfter"
signature: "public static double nextAfter(double start, double direction)"
title: "Math.nextAfter"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.nextAfter

```java
public static double nextAfter(double start, double direction)
```

Returns the floating-point number adjacent to the first
 argument in the direction of the second argument.  If both
 arguments compare as equal the second argument is returned.

 

 Special cases:
 
 
-  If either argument is a NaN, then NaN is returned.

 
-  If both arguments are signed zeros, `direction`
 is returned unchanged (as implied by the requirement of
 returning the second argument if the arguments compare as
 equal).

 
-  If `start` is
 &plusmn;`MIN_VALUE` and `direction`
 has a value such that the result should have a smaller
 magnitude, then a zero with the same sign as `start`
 is returned.

 
-  If `start` is infinite and
 `direction` has a value such that the result should
 have a smaller magnitude, `MAX_VALUE` with the
 same sign as `start` is returned.

 
-  If `start` is equal to &plusmn;
 `MAX_VALUE` and `direction` has a
 value such that the result should have a larger magnitude, an
 infinity with same sign as `start` is returned.

**参数**

- **start** — starting floating-point value
- **direction** — value indicating which of `start`'s neighbors or `start` should be returned

**返回**

- The floating-point number adjacent to `start` in the direction of `direction`.

> *Since 1.6*
