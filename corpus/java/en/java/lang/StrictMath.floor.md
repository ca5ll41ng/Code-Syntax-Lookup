---
id: "java-en-function-strictmath-floor"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.floor"
signature: "public static double floor(double a)"
title: "StrictMath.floor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.floor

```java
public static double floor(double a)
```

Returns the largest (closest to positive infinity)
 `double` value that is less than or equal to the
 argument and is equal to a mathematical integer. Special cases:
 
- If the argument value is already equal to a
 mathematical integer, then the result is the same as the
 argument.  
- If the argument is NaN or an infinity or
 positive zero or negative zero, then the result is the same as
 the argument.

**参数**

- **a** — a value.

**返回**

- the largest (closest to positive infinity) floating-point value that less than or equal to the argument and is equal to a mathematical integer.
