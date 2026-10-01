---
id: "java-en-function-strictmath-exp"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.exp"
signature: "public static double exp(double a)"
title: "StrictMath.exp"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.exp

```java
public static double exp(double a)
```

Returns Euler's number e raised to the power of a
 `double` value. Special cases:
 
- If the argument is NaN, the result is NaN.
 
- If the argument is positive infinity, then the result is
 positive infinity.
 
- If the argument is negative infinity, then the result is
 positive zero.
 
- If the argument is zero, then the result is `1.0`.

**参数**

- **a** — the exponent to raise e to.

**返回**

- the value e`a`, where e is the base of the natural logarithms.
