---
id: "java-en-function-math-subtractexact"
language: "java"
lang: "en"
category: "function"
name: "Math.subtractExact"
signature: "public static int subtractExact(int x, int y)"
title: "Math.subtractExact"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.subtractExact

```java
public static int subtractExact(int x, int y)
```

Returns the difference of the arguments,
 throwing an exception if the result overflows an `int`.

**参数**

- **x** — the first value
- **y** — the second value to subtract from the first

**返回**

- the result

**异常**

- **ArithmeticException** — if the result overflows an int

> *Since 1.8*
