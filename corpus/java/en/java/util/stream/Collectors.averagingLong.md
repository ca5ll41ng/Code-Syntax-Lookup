---
id: "java-en-function-collectors-averaginglong"
language: "java"
lang: "en"
category: "function"
name: "Collectors.averagingLong"
signature: "public static <T> Collector<T, ?, Double> averagingLong(ToLongFunction<? super T> mapper)"
title: "Collectors.averagingLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.averagingLong

```java
public static <T> Collector<T, ?, Double> averagingLong(ToLongFunction<? super T> mapper)
```

Returns a `Collector` that produces the arithmetic mean of a long-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.

**参数**

- **the** — type of the input elements
- **mapper** — a function extracting the property to be averaged

**返回**

- a `Collector` that produces the arithmetic mean of a derived property
