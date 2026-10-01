---
id: "java-en-function-strictmath-negateexact"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.negateExact"
signature: "public static int negateExact(int a)"
title: "StrictMath.negateExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.negateExact

```java
public static int negateExact(int a)
```

Returns the negation of the argument,
 throwing an exception if the result overflows an `int`.
 The overflow only occurs for `MIN_VALUE the minimum value`.

**参数**

- **a** — the value to negate

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

**参见**

- Math#negateExact(int)

> *Since 14*
