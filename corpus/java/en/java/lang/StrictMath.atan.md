---
id: "java-en-function-strictmath-atan"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.atan"
signature: "public static double atan(double a)"
title: "StrictMath.atan"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.atan

```java
public static double atan(double a)
```

Returns the arc tangent of a value; the returned angle is in the
 range &minus;pi/2 through pi/2.  Special cases:
 
- If the argument is NaN, then the result is NaN.
 
- If the argument is zero, then the result is a zero with the
 same sign as the argument.
 
- If the argument is `isInfinite infinite`,
 then the result is the closest value to pi/2 with the
 same sign as the input.

**参数**

- **a** — the value whose arc tangent is to be returned.

**返回**

- the arc tangent of the argument.
