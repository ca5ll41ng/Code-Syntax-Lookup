---
id: "java-en-function-strictmath-round"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.round"
signature: "public static int round(float a)"
title: "StrictMath.round"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.round

```java
public static int round(float a)
```

Returns the closest `int` to the argument, with ties
 rounding to positive infinity.

 

Special cases:
 
- If the argument is NaN, the result is 0.
 
- If the argument is negative infinity or any value less than or
 equal to the value of `Integer.MIN_VALUE`, the result is
 equal to the value of `Integer.MIN_VALUE`.
 
- If the argument is positive infinity or any value greater than or
 equal to the value of `Integer.MAX_VALUE`, the result is
 equal to the value of `Integer.MAX_VALUE`.

**参数**

- **a** — a floating-point value to be rounded to an integer.

**返回**

- the value of the argument rounded to the nearest `int` value.

**参见**

- java.lang.Integer#MAX_VALUE
- java.lang.Integer#MIN_VALUE
