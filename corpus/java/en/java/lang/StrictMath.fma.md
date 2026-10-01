---
id: "java-en-function-strictmath-fma"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.fma"
signature: "public static double fma(double a, double b, double c)"
title: "StrictMath.fma"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.fma

```java
public static double fma(double a, double b, double c)
```

Returns the fused multiply add of the three arguments; that is,
 returns the exact product of the first two arguments summed
 with the third argument and then rounded once to the nearest
 `double`.

 The rounding is done using the `HALF_EVEN round to nearest even
 rounding mode`.

 In contrast, if `a * b + c` is evaluated as a regular
 floating-point expression, two rounding errors are involved,
 the first for the multiply operation, the second for the
 addition operation.

 

Special cases:
 
 
-  If any argument is NaN, the result is NaN.

 
-  If one of the first two arguments is infinite and the
 other is zero, the result is NaN.

 
-  If the exact product of the first two arguments is infinite
 (in other words, at least one of the arguments is infinite and
 the other is neither zero nor NaN) and the third argument is an
 infinity of the opposite sign, the result is NaN.

 

 

Note that `fusedMac(a, 1.0, c)` returns the same
 result as (`a + c`).  However,
 `fusedMac(a, b, +0.0)` does not always return the
 same result as (`a * b`) since
 `fusedMac(-0.0, +0.0, +0.0)` is `+0.0` while
 (`-0.0 * +0.0`) is `-0.0`; `fusedMac(a, b, -0.0)` is
 equivalent to (`a * b`) however.

 operation defined in IEEE 754-2008.

**参数**

- **a** — a value
- **b** — a value
- **c** — a value

**返回**

- (a&nbsp;&times;&nbsp;b&nbsp;+&nbsp;c) computed, as if with unlimited range and precision, and rounded once to the nearest `double` value

> *Since 9*
