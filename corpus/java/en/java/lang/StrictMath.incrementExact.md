---
id: "java-en-function-strictmath-incrementexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.incrementExact"
signature: "public static int incrementExact(int a)"
title: "StrictMath.incrementExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.incrementExact

```java
public static int incrementExact(int a)
```

Returns the argument incremented by one,
 throwing an exception if the result overflows an `int`.
 The overflow only occurs for `MAX_VALUE the maximum value`.

**参数**

- **a** — the value to increment

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

**参见**

- Math#incrementExact(int)

> *Since 14*
