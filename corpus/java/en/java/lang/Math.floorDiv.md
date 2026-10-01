---
id: "java-en-function-math-floordiv"
language: "java"
lang: "en"
category: "function"
name: "Math.floorDiv"
signature: "public static int floorDiv(int x, int y)"
title: "Math.floorDiv"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.floorDiv

```java
public static int floorDiv(int x, int y)
```

Returns the largest (closest to positive infinity)
 `int` value that is less than or equal to the algebraic quotient.
 There is one special case: if the dividend is
 `MIN_VALUE Integer.MIN_VALUE` and the divisor is `-1`,
 then integer overflow occurs and
 the result is equal to `Integer.MIN_VALUE`.
 

 Normal integer division operates under the round to zero rounding mode
 (truncation).  This operation instead acts under the round toward
 negative infinity (floor) rounding mode.
 The floor rounding mode gives different results from truncation
 when the exact quotient is not an integer and is negative.
 
   
- If the signs of the arguments are the same, the results of
       `floorDiv` and the `/` operator are the same.  

       For example, `floorDiv(4, 3) == 1` and `(4 / 3) == 1`.
   
- If the signs of the arguments are different, `floorDiv`
       returns the largest integer less than or equal to the quotient
       while the `/` operator returns the smallest integer greater
       than or equal to the quotient.
       They differ if and only if the quotient is not an integer.

       For example, `floorDiv(-4, 3) == -2`,
       whereas `(-4 / 3) == -1`.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the largest (closest to positive infinity) `int` value that is less than or equal to the algebraic quotient.

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- #floorMod(int, int)
- #floor(double)

> *Since 1.8*
