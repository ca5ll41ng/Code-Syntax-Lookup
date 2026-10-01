---
id: "java-en-function-math-ceil"
language: "java"
lang: "en"
category: "function"
name: "Math.ceil"
signature: "public static double ceil(double a)"
title: "Math.ceil"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.ceil

```java
public static double ceil(double a)
```

Returns the smallest (closest to negative infinity)
 `double` value that is greater than or equal to the
 argument and is equal to a mathematical integer. Special cases:
 
- If the argument value is already equal to a
 mathematical integer, then the result is the same as the
 argument.  
- If the argument is NaN or an infinity or
 positive zero or negative zero, then the result is the same as
 the argument.  
- If the argument value is less than zero but
 greater than -1.0, then the result is negative zero.
 Note
 that the value of `Math.ceil(x)` is exactly the
 value of `-Math.floor(-x)`.

 This method corresponds to the roundToIntegralTowardPositive
 operation defined in IEEE 754.

**参数**

- **a** — a value.

**返回**

- the smallest (closest to negative infinity) floating-point value that is greater than or equal to the argument and is equal to a mathematical integer.
