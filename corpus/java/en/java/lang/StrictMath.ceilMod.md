---
id: "java-en-function-strictmath-ceilmod"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.ceilMod"
signature: "public static int ceilMod(int x, int y)"
title: "StrictMath.ceilMod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.ceilMod

```java
public static int ceilMod(int x, int y)
```

Returns the ceiling modulus of the `int` arguments.
 

 The ceiling modulus is `r = x - (ceilDiv(x, y) * y)`,
 has the opposite sign as the divisor `y` or is zero, and
 is in the range of `-abs(y) < r < +abs(y)`.

 

 The relationship between `ceilDiv` and `ceilMod` is such that:
 
   
- `ceilDiv(x, y) * y + ceilMod(x, y) == x`
 

 

 See `ceilMod(int, int) Math.ceilMod` for examples and
 a comparison to the `%` operator.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the ceiling modulus `x - (ceilDiv(x, y) * y)`

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- Math#ceilMod(int, int)
- StrictMath#ceilDiv(int, int)

> *Since 18*
