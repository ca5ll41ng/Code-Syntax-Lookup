---
id: "java-en-function-strictmath-ulp"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.ulp"
signature: "public static double ulp(double d)"
title: "StrictMath.ulp"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.ulp

```java
public static double ulp(double d)
```

Returns the size of an ulp of the argument.  An ulp, unit in
 the last place, of a `double` value is the positive
 distance between this floating-point value and the `double` value next larger in magnitude.  Note that for non-NaN
 x, ulp(-x) == ulp(x).

 

Special Cases:
 
 
-  If the argument is NaN, then the result is NaN.
 
-  If the argument is positive or negative infinity, then the
 result is positive infinity.
 
-  If the argument is positive or negative zero, then the result is
 `Double.MIN_VALUE`.
 
-  If the argument is &plusmn;`Double.MAX_VALUE`, then
 the result is equal to 2971.

**参数**

- **d** — the floating-point value whose ulp is to be returned

**返回**

- the size of an ulp of the argument

> *Since 1.5*
