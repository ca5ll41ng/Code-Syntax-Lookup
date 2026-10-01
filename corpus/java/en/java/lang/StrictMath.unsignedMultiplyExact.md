---
id: "java-en-function-strictmath-unsignedmultiplyexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.unsignedMultiplyExact"
signature: "public static int unsignedMultiplyExact(int x, int y)"
title: "StrictMath.unsignedMultiplyExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.unsignedMultiplyExact

```java
public static int unsignedMultiplyExact(int x, int y)
```

Returns the product of the unsigned arguments,
 throwing an exception if the result overflows an unsigned `int`.

**参数**

- **x** — the first unsigned value
- **y** — the second unsigned value

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an unsigned int

> *Since 25*
