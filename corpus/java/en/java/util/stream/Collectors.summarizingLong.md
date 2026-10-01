---
id: "java-en-function-collectors-summarizinglong"
language: "java"
lang: "en"
category: "function"
name: "Collectors.summarizingLong"
signature: "public static <T> Collector<T, ?, LongSummaryStatistics> summarizingLong(ToLongFunction<? super T> mapper)"
title: "Collectors.summarizingLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.summarizingLong

```java
public static <T> Collector<T, ?, LongSummaryStatistics> summarizingLong(ToLongFunction<? super T> mapper)
```

Returns a `Collector` which applies an `long`-producing
 mapping function to each input element, and returns summary statistics
 for the resulting values.

**参数**

- **the** — type of the input elements
- **mapper** — the mapping function to apply to each element

**返回**

- a `Collector` implementing the summary-statistics reduction

**参见**

- #summarizingDouble(ToDoubleFunction)
- #summarizingInt(ToIntFunction)
