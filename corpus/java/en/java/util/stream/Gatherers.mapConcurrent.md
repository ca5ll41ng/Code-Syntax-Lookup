---
id: "java-en-function-gatherers-mapconcurrent"
language: "java"
lang: "en"
category: "function"
name: "Gatherers.mapConcurrent"
signature: "public static <T, R> Gatherer<T,?,R> mapConcurrent( final int maxConcurrency, final Function<? super T, ? extends R> mapper)"
title: "Gatherers.mapConcurrent"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherers.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherers.mapConcurrent

```java
public static <T, R> Gatherer<T,?,R> mapConcurrent( final int maxConcurrency, final Function<? super T, ? extends R> mapper)
```

An operation which executes a function concurrently
 with a configured level of max concurrency, using
 virtual threads.
 This operation preserves the ordering of the stream.

 on a best-effort basis, in situations where the downstream no longer
 wants to receive any more elements.

 instead the function completed exceptionally then the corresponding
 exception will instead be rethrown by this method as an instance of
 `RuntimeException`, after which any remaining tasks are canceled.

**参数**

- **maxConcurrency** — the maximum concurrency desired
- **mapper** — a function to be executed concurrently
- **the** — type of input
- **the** — type of output

**返回**

- a new Gatherer

**异常**

- **IllegalArgumentException** — if `maxConcurrency` is less than 1
- **NullPointerException** — if `mapper` is `null`
