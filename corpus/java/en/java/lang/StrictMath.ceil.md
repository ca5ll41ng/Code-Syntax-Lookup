---
id: "java-en-function-strictmath-ceil"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.ceil"
signature: "public static double ceil(double a)"
title: "StrictMath.ceil"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.ceil

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
 that the value of `StrictMath.ceil(x)` is exactly the
 value of `-StrictMath.floor(-x)`.

**参数**

- **a** — a value.

**返回**

- the smallest (closest to negative infinity) floating-point value that is greater than or equal to the argument and is equal to a mathematical integer.
