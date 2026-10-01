---
id: "java-en-function-collector-of"
language: "java"
lang: "en"
category: "function"
name: "Collector.of"
signature: "public static<T, R> Collector<T, R, R> of(Supplier<R> supplier, BiConsumer<R, T> accumulator, BinaryOperator<R> combiner, Characteristics... characteristics)"
title: "Collector.of"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collector.of

```java
public static<T, R> Collector<T, R, R> of(Supplier<R> supplier, BiConsumer<R, T> accumulator, BinaryOperator<R> combiner, Characteristics... characteristics)
```

Returns a new `Collector` described by the given `supplier`,
 `accumulator`, and `combiner` functions.  The resulting
 `Collector` has the `Collector.Characteristics.IDENTITY_FINISH`
 characteristic.

**参数**

- **supplier** — The supplier function for the new collector
- **accumulator** — The accumulator function for the new collector
- **combiner** — The combiner function for the new collector
- **characteristics** — The collector characteristics for the new collector
- **The** — type of input elements for the new collector
- **The** — type of intermediate accumulation result, and final result, for the new collector

**返回**

- the new `Collector`

**异常**

- **NullPointerException** — if any argument is null
