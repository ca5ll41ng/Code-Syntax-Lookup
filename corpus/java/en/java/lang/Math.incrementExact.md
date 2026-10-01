---
id: "java-en-function-math-incrementexact"
language: "java"
lang: "en"
category: "function"
name: "Math.incrementExact"
signature: "public static int incrementExact(int a)"
title: "Math.incrementExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.incrementExact

```java
public static int incrementExact(int a)
```

Returns the argument incremented by one, throwing an exception if the
 result overflows an `int`.
 The overflow only occurs for `MAX_VALUE the maximum value`.

**参数**

- **a** — the value to increment

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

> *Since 1.8*
