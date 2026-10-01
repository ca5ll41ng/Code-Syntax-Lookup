---
id: "java-en-function-splittablerandom-ints"
language: "java"
lang: "en"
category: "function"
name: "SplittableRandom.ints"
signature: "public IntStream ints(long streamSize)"
title: "SplittableRandom.ints"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SplittableRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableRandom.ints

```java
public IntStream ints(long streamSize)
```

Returns a stream producing the given `streamSize` number
 of pseudorandom `int` values from this generator and/or
 one split from it.

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of pseudorandom `int` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero
