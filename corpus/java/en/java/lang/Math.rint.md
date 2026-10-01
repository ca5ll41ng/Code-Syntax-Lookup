---
id: "java-en-function-math-rint"
language: "java"
lang: "en"
category: "function"
name: "Math.rint"
signature: "public static double rint(double a)"
title: "Math.rint"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.rint

```java
public static double rint(double a)
```

Returns the `double` value that is closest in value
 to the argument and is equal to a mathematical integer. If two
 `double` values that are mathematical integers are
 equally close, the result is the integer value that is
 even. Special cases:
 
- If the argument value is already equal to a mathematical
 integer, then the result is the same as the argument.
 
- If the argument is NaN or an infinity or positive zero or negative
 zero, then the result is the same as the argument.

 This method corresponds to the roundToIntegralTiesToEven
 operation defined in IEEE 754.

**参数**

- **a** — a `double` value.

**返回**

- the closest floating-point value to `a` that is equal to a mathematical integer.
