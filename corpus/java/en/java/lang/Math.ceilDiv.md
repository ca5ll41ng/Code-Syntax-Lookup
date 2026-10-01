---
id: "java-en-function-math-ceildiv"
language: "java"
lang: "en"
category: "function"
name: "Math.ceilDiv"
signature: "public static int ceilDiv(int x, int y)"
title: "Math.ceilDiv"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.ceilDiv

```java
public static int ceilDiv(int x, int y)
```

Returns the smallest (closest to negative infinity)
 `int` value that is greater than or equal to the algebraic quotient.
 There is one special case: if the dividend is
 `MIN_VALUE Integer.MIN_VALUE` and the divisor is `-1`,
 then integer overflow occurs and
 the result is equal to `Integer.MIN_VALUE`.
 

 Normal integer division operates under the round to zero rounding mode
 (truncation).  This operation instead acts under the round toward
 positive infinity (ceiling) rounding mode.
 The ceiling rounding mode gives different results from truncation
 when the exact quotient is not an integer and is positive.
 
   
- If the signs of the arguments are different, the results of
       `ceilDiv` and the `/` operator are the same.  

       For example, `ceilDiv(-4, 3) == -1` and `(-4 / 3) == -1`.
   
- If the signs of the arguments are the same, `ceilDiv`
       returns the smallest integer greater than or equal to the quotient
       while the `/` operator returns the largest integer less
       than or equal to the quotient.
       They differ if and only if the quotient is not an integer.

       For example, `ceilDiv(4, 3) == 2`,
       whereas `(4 / 3) == 1`.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the smallest (closest to negative infinity) `int` value that is greater than or equal to the algebraic quotient.

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- #ceilMod(int, int)
- #ceil(double)

> *Since 18*
