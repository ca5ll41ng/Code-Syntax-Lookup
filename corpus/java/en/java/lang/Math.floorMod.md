---
id: "java-en-function-math-floormod"
language: "java"
lang: "en"
category: "function"
name: "Math.floorMod"
signature: "public static int floorMod(int x, int y)"
title: "Math.floorMod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.floorMod

```java
public static int floorMod(int x, int y)
```

Returns the floor modulus of the `int` arguments.
 

 The floor modulus is `r = x - (floorDiv(x, y) * y)`,
 has the same sign as the divisor `y` or is zero, and
 is in the range of `-abs(y) < r < +abs(y)`.

 

 The relationship between `floorDiv` and `floorMod` is such that:
 
   
- `floorDiv(x, y) * y + floorMod(x, y) == x`
 

 

 The difference in values between `floorMod` and the `%` operator
 is due to the difference between `floorDiv` and the `/`
 operator, as detailed in `floorDiv`.
 

 Examples:
 
   
- Regardless of the signs of the arguments, `floorMod`(x, y)
       is zero exactly when `x % y` is zero as well.
   
- If neither `floorMod`(x, y) nor `x % y` is zero,
       they differ exactly when the signs of the arguments differ.

       
       
- `floorMod(+4, +3) == +1`; &nbsp; and `(+4 % +3) == +1`
       
- `floorMod(-4, -3) == -1`; &nbsp; and `(-4 % -3) == -1`
       
- `floorMod(+4, -3) == -2`; &nbsp; and `(+4 % -3) == +1`
       
- `floorMod(-4, +3) == +2`; &nbsp; and `(-4 % +3) == -1`

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the floor modulus `x - (floorDiv(x, y) * y)`

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- #floorDiv(int, int)

> *Since 1.8*
