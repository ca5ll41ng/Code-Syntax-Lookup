---
id: "java-en-function-doubleaccumulator-doubleaccumulator"
language: "java"
lang: "en"
category: "function"
name: "DoubleAccumulator.DoubleAccumulator"
signature: "public DoubleAccumulator(DoubleBinaryOperator accumulatorFunction, double identity)"
title: "DoubleAccumulator.DoubleAccumulator"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/DoubleAccumulator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleAccumulator.DoubleAccumulator

```java
public DoubleAccumulator(DoubleBinaryOperator accumulatorFunction, double identity)
```

Creates a new instance using the given accumulator function
 and identity element.

**参数**

- **accumulatorFunction** — a side-effect-free function of two arguments
- **identity** — identity (initial value) for the accumulator function
