---
id: "java-en-function-math-tointexact"
language: "java"
lang: "en"
category: "function"
name: "Math.toIntExact"
signature: "public static int toIntExact(long value)"
title: "Math.toIntExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.toIntExact

```java
public static int toIntExact(long value)
```

Returns the value of the `long` argument,
 throwing an exception if the value overflows an `int`.

**参数**

- **value** — the long value

**返回**

- the argument as an int

**异常**

- **ArithmeticException** — if the `argument` overflows an int

> *Since 1.8*
