---
id: "java-en-function-math-getexponent"
language: "java"
lang: "en"
category: "function"
name: "Math.getExponent"
signature: "public static int getExponent(float f)"
title: "Math.getExponent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.getExponent

```java
public static int getExponent(float f)
```

Returns the unbiased exponent used in the representation of a
 `float`.  Special cases:

 
 
- If the argument is NaN or infinite, then the result is
 `MAX_EXPONENT` + 1.
 
- If the argument is zero or subnormal, then the result is
 `MIN_EXPONENT` - 1.
 

 This method is analogous to the logB operation defined in IEEE
 754, but returns a different value on subnormal arguments.

**参数**

- **f** — a `float` value

**返回**

- the unbiased exponent of the argument

> *Since 1.6*
