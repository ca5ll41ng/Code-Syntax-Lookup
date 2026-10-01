---
id: "java-en-function-strictmath-divideexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.divideExact"
signature: "public static int divideExact(int x, int y)"
title: "StrictMath.divideExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.divideExact

```java
public static int divideExact(int x, int y)
```

Returns the quotient of the arguments, throwing an exception if the
 result overflows an `int`.  Such overflow occurs in this method if
 `x` is `MIN_VALUE` and `y` is `-1`.
 In contrast, if `Integer.MIN_VALUE / -1` were evaluated directly,
 the result would be `Integer.MIN_VALUE` and no exception would be
 thrown.
 

 If `y` is zero, an `ArithmeticException` is thrown
 (JLS {@jls 15.17.2}).
 

 The built-in remainder operator "`%`" is a suitable counterpart
 both for this method and for the built-in division operator "`/`".

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the quotient `x / y`

**异常**

- **ArithmeticException** — if `y` is zero or the quotient overflows an int

**参见**

- Math#divideExact(int,int)

> *Since 18*
