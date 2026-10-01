---
id: "java-en-function-strictmath-floordiv"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.floorDiv"
signature: "public static int floorDiv(int x, int y)"
title: "StrictMath.floorDiv"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.floorDiv

```java
public static int floorDiv(int x, int y)
```

Returns the largest (closest to positive infinity)
 `int` value that is less than or equal to the algebraic quotient.
 There is one special case: if the dividend is
 `MIN_VALUE Integer.MIN_VALUE` and the divisor is `-1`,
 then integer overflow occurs and
 the result is equal to `Integer.MIN_VALUE`.
 

 See `floorDiv(int, int) Math.floorDiv` for examples and
 a comparison to the integer division `/` operator.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the largest (closest to positive infinity) `int` value that is less than or equal to the algebraic quotient.

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- Math#floorDiv(int, int)
- Math#floor(double)

> *Since 1.8*
