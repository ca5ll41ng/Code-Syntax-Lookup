---
id: "java-en-function-math-exp"
language: "java"
lang: "en"
category: "function"
name: "Math.exp"
signature: "public static double exp(double a)"
title: "Math.exp"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.exp

```java
public static double exp(double a)
```

Returns Euler's number e raised to the power of a
 `double` value.  Special cases:
 
- If the argument is NaN, the result is NaN.
 
- If the argument is positive infinity, then the result is
 positive infinity.
 
- If the argument is negative infinity, then the result is
 positive zero.
 
- If the argument is zero, then the result is `1.0`.
 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — the exponent to raise e to.

**返回**

- the value e`a`, where e is the base of the natural logarithms.
