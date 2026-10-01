---
id: "java-en-function-math-negateexact"
language: "java"
lang: "en"
category: "function"
name: "Math.negateExact"
signature: "public static int negateExact(int a)"
title: "Math.negateExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.negateExact

```java
public static int negateExact(int a)
```

Returns the negation of the argument, throwing an exception if the
 result overflows an `int`.
 The overflow only occurs for `MIN_VALUE the minimum value`.

**参数**

- **a** — the value to negate

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

> *Since 1.8*
