---
id: "java-en-function-math-log"
language: "java"
lang: "en"
category: "function"
name: "Math.log"
signature: "public static double log(double a)"
title: "Math.log"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.log

```java
public static double log(double a)
```

Returns the natural logarithm (base e) of a `double`
 value.  Special cases:
 
- If the argument is NaN or less than zero, then the result
 is NaN.
 
- If the argument is positive infinity, then the result is
 positive infinity.
 
- If the argument is positive zero or negative zero, then the
 result is negative infinity.
 
- If the argument is `1.0`, then the result is positive
 zero.
 

 

The computed result must be within 1 ulp of the exact result.
 Results must be semi-monotonic.

**参数**

- **a** — a value

**返回**

- the value ln&nbsp;`a`, the natural logarithm of `a`.
