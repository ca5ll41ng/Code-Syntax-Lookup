---
id: "java-en-function-math-decrementexact"
language: "java"
lang: "en"
category: "function"
name: "Math.decrementExact"
signature: "public static int decrementExact(int a)"
title: "Math.decrementExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.decrementExact

```java
public static int decrementExact(int a)
```

Returns the argument decremented by one, throwing an exception if the
 result overflows an `int`.
 The overflow only occurs for `MIN_VALUE the minimum value`.

**参数**

- **a** — the value to decrement

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

> *Since 1.8*
