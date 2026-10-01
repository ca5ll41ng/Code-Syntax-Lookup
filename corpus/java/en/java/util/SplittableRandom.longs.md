---
id: "java-en-function-splittablerandom-longs"
language: "java"
lang: "en"
category: "function"
name: "SplittableRandom.longs"
signature: "public LongStream longs(long streamSize)"
title: "SplittableRandom.longs"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SplittableRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableRandom.longs

```java
public LongStream longs(long streamSize)
```

Returns a stream producing the given `streamSize` number
 of pseudorandom `long` values from this generator and/or
 one split from it.

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of pseudorandom `long` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero
