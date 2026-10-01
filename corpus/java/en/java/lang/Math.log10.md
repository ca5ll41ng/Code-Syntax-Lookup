---
id: "java-en-function-math-log10"
language: "java"
lang: "en"
category: "function"
name: "Math.log10"
signature: "public static double log10(double a)"
title: "Math.log10"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.log10

```java
public static double log10(double a)
```

Returns the base 10 logarithm of a `double` value.
 Special cases:

 
- If the argument is NaN or less than zero, then the result
 is NaN.
 
- If the argument is positive infinity, then the result is
 positive infinity.
 
- If the argument is positive zero or negative zero, then the
 result is negative infinity.
 
- If the argument is equal to 10n for
 integer n, then the result is n. In particular,
 if the argument is `1.0` (100), then the
 result is positive zero.
 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — a value

**返回**

- the base 10 logarithm of  `a`.

> *Since 1.5*
