---
id: "java-en-function-random-longs"
language: "java"
lang: "en"
category: "function"
name: "Random.longs"
signature: "public LongStream longs(long streamSize)"
title: "Random.longs"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.longs

```java
public LongStream longs(long streamSize)
```

Returns a stream producing the given `streamSize` number of
 pseudorandom `long` values.

 

A pseudorandom `long` value is generated as if it's the result
 of calling the method `nextLong`.

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of pseudorandom `long` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero

> *Since 1.8*
