---
id: "java-en-function-strictmath-sqrt"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.sqrt"
signature: "public static double sqrt(double a)"
title: "StrictMath.sqrt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.sqrt

```java
public static double sqrt(double a)
```

Returns the correctly rounded positive square root of a
 `double` value.
 Special cases:
 
- If the argument is NaN or less than zero, then the result
 is NaN.
 
- If the argument is positive infinity, then the result is positive
 infinity.
 
- If the argument is positive zero or negative zero, then the
 result is the same as the argument.

 Otherwise, the result is the `double` value closest to
 the true mathematical square root of the argument value.

**参数**

- **a** — a value.

**返回**

- the positive square root of `a`.
