---
id: "java-en-function-strictmath-ceildivexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.ceilDivExact"
signature: "public static int ceilDivExact(int x, int y)"
title: "StrictMath.ceilDivExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.ceilDivExact

```java
public static int ceilDivExact(int x, int y)
```

Returns the smallest (closest to negative infinity)
 `int` value that is greater than or equal to the algebraic quotient.
 This method is identical to `ceilDiv` except that it
 throws an `ArithmeticException` when the dividend is
 `MIN_VALUE Integer.MIN_VALUE` and the divisor is
 `-1` instead of ignoring the integer overflow and returning
 `Integer.MIN_VALUE`.
 

 The ceil modulus method `ceilMod` is a suitable
 counterpart both for this method and for the `ceilDiv`
 method.
 

 See `ceilDiv(int, int) Math.ceilDiv` for examples and
 a comparison to the integer division `/` operator.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the smallest (closest to negative infinity) `int` value that is greater than or equal to the algebraic quotient.

**异常**

- **ArithmeticException** — if the divisor `y` is zero, or the dividend `x` is `Integer.MIN_VALUE` and the divisor `y` is `-1`.

**参见**

- Math#ceilDiv(int, int)

> *Since 18*
