---
id: "java-en-function-random-doubles"
language: "java"
lang: "en"
category: "function"
name: "Random.doubles"
signature: "public DoubleStream doubles(long streamSize)"
title: "Random.doubles"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random.doubles

```java
public DoubleStream doubles(long streamSize)
```

Returns a stream producing the given `streamSize` number of
 pseudorandom `double` values, each between zero
 (inclusive) and one (exclusive).

 

A pseudorandom `double` value is generated as if it's the result
 of calling the method `nextDouble`.

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of `double` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero

> *Since 1.8*
