---
id: "java-en-function-longaccumulator-longaccumulator"
language: "java"
lang: "en"
category: "function"
name: "LongAccumulator.LongAccumulator"
signature: "public LongAccumulator(LongBinaryOperator accumulatorFunction, long identity)"
title: "LongAccumulator.LongAccumulator"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/LongAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongAccumulator.LongAccumulator

```java
public LongAccumulator(LongBinaryOperator accumulatorFunction, long identity)
```

Creates a new instance using the given accumulator function
 and identity element.

**参数**

- **accumulatorFunction** — a side-effect-free function of two arguments
- **identity** — identity (initial value) for the accumulator function
