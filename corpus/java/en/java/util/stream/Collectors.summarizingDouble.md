---
id: "java-en-function-collectors-summarizingdouble"
language: "java"
lang: "en"
category: "function"
name: "Collectors.summarizingDouble"
signature: "public static <T> Collector<T, ?, DoubleSummaryStatistics> summarizingDouble(ToDoubleFunction<? super T> mapper)"
title: "Collectors.summarizingDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.summarizingDouble

```java
public static <T> Collector<T, ?, DoubleSummaryStatistics> summarizingDouble(ToDoubleFunction<? super T> mapper)
```

Returns a `Collector` which applies an `double`-producing
 mapping function to each input element, and returns summary statistics
 for the resulting values.

**参数**

- **the** — type of the input elements
- **mapper** — a mapping function to apply to each element

**返回**

- a `Collector` implementing the summary-statistics reduction

**参见**

- #summarizingLong(ToLongFunction)
- #summarizingInt(ToIntFunction)
