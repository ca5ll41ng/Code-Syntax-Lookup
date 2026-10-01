---
id: "java-en-function-math-ceilmod"
language: "java"
lang: "en"
category: "function"
name: "Math.ceilMod"
signature: "public static int ceilMod(int x, int y)"
title: "Math.ceilMod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.ceilMod

```java
public static int ceilMod(int x, int y)
```

Returns the ceiling modulus of the `int` arguments.
 

 The ceiling modulus is `r = x - (ceilDiv(x, y) * y)`,
 has the opposite sign as the divisor `y` or is zero, and
 is in the range of `-abs(y) < r < +abs(y)`.

 

 The relationship between `ceilDiv` and `ceilMod` is such that:
 
   
- `ceilDiv(x, y) * y + ceilMod(x, y) == x`
 

 

 The difference in values between `ceilMod` and the `%` operator
 is due to the difference between `ceilDiv` and the `/`
 operator, as detailed in `ceilDiv`.
 

 Examples:
 
   
- Regardless of the signs of the arguments, `ceilMod`(x, y)
       is zero exactly when `x % y` is zero as well.
   
- If neither `ceilMod`(x, y) nor `x % y` is zero,
       they differ exactly when the signs of the arguments are the same.

       
       
- `ceilMod(+4, +3) == -2`; &nbsp; and `(+4 % +3) == +1`
       
- `ceilMod(-4, -3) == +2`; &nbsp; and `(-4 % -3) == -1`
       
- `ceilMod(+4, -3) == +1`; &nbsp; and `(+4 % -3) == +1`
       
- `ceilMod(-4, +3) == -1`; &nbsp; and `(-4 % +3) == -1`

**参数**

- **x** — the dividend
- **y** — the divisor

**返回**

- the ceiling modulus `x - (ceilDiv(x, y) * y)`

**异常**

- **ArithmeticException** — if the divisor `y` is zero

**参见**

- #ceilDiv(int, int)

> *Since 18*
