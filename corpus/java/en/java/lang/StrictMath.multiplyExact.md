---
id: "java-en-function-strictmath-multiplyexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.multiplyExact"
signature: "public static int multiplyExact(int x, int y)"
title: "StrictMath.multiplyExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.multiplyExact

```java
public static int multiplyExact(int x, int y)
```

Returns the product of the arguments,
 throwing an exception if the result overflows an `int`.

**参数**

- **x** — the first value
- **y** — the second value

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

**参见**

- Math#multiplyExact(int,int)

> *Since 1.8*
