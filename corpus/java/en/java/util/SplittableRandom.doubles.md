---
id: "java-en-function-splittablerandom-doubles"
language: "java"
lang: "en"
category: "function"
name: "SplittableRandom.doubles"
signature: "public DoubleStream doubles(long streamSize)"
title: "SplittableRandom.doubles"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SplittableRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableRandom.doubles

```java
public DoubleStream doubles(long streamSize)
```

Returns a stream producing the given `streamSize` number of
 pseudorandom `double` values from this generator and/or one split
 from it; each value is between zero (inclusive) and one (exclusive).

**参数**

- **streamSize** — the number of values to generate

**返回**

- a stream of `double` values

**异常**

- **IllegalArgumentException** — if `streamSize` is less than zero
