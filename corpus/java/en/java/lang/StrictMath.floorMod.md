---
id: "java-en-function-strictmath-floormod"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.floorMod"
signature: "public static int floorMod(int x, int y)"
title: "StrictMath.floorMod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.floorMod

```java
public static int floorMod(int x, int y)
```

Returns the floor modulus of the `int` arguments.
 

 The floor modulus is `r = x - (floorDiv(x, y) * y)`,
 has the same sign as the divisor `y` or is zero, and
 is in the range of `-abs(y) < r < +abs(y)`.

 

 The relationship between `floorDiv` and `floorMod` is such that:
 
   
- `floorDiv(x, y) * y + floorMod(x, y) == x`
 

 

 See `floorMod(int, int) Math.floorMod` for examples and
 a comparison to the `%` operator.

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the floor modulus `x - (floorDiv(x, y) * y)`

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- Math#floorMod(int, int)
- StrictMath#floorDiv(int, int)

> *Since 1.8*
