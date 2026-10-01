---
id: "java-en-function-strictmath-floordivexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.floorDivExact"
signature: "public static int floorDivExact(int x, int y)"
title: "StrictMath.floorDivExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.floorDivExact

```java
public static int floorDivExact(int x, int y)
```

Returns the largest (closest to positive infinity)
 `int` value that is less than or equal to the algebraic quotient.
 This method is identical to `floorDiv` except that it
 throws an `ArithmeticException` when the dividend is
 `MIN_VALUE Integer.MIN_VALUE` and the divisor is
 `-1` instead of ignoring the integer overflow and returning
 `Integer.MIN_VALUE`.
 

 The floor modulus method `floorMod` is a suitable
 counterpart both for this method and for the `floorDiv`
 method.
 

 See `floorDiv(int, int) Math.floorDiv` for examples and
 a comparison to the integer division `/` operator.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the largest (closest to positive infinity) `int` value that is less than or equal to the algebraic quotient.

**异常**

- **ArithmeticException** — if the divisor `y` is zero, or the dividend `x` is `Integer.MIN_VALUE` and the divisor `y` is `-1`.

**参见**

- Math#floorDiv(int, int)

> *Since 18*
