---
id: "java-en-function-strictmath-asin"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.asin"
signature: "public static double asin(double a)"
title: "StrictMath.asin"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.asin

```java
public static double asin(double a)
```

Returns the arc sine of a value; the returned angle is in the
 range &minus;pi/2 through pi/2.  Special cases:
 
- If the argument is NaN or its absolute value is greater
 than 1, then the result is NaN.
 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.

**参数**

- **a** — the value whose arc sine is to be returned.

**返回**

- the arc sine of the argument.
