---
id: "java-en-function-random-ints"
language: "java"
lang: "en"
category: "function"
name: "Random.ints"
signature: "public IntStream ints(long streamSize)"
title: "Random.ints"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.ints

```java
public IntStream ints(long streamSize)
```

Returns a stream producing the given `streamSize` number of
 pseudorandom `int` values.

 

A pseudorandom `int` value is generated as if it's the result of
 calling the method `nextInt`.

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of pseudorandom `int` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero

> *Since 1.8*
