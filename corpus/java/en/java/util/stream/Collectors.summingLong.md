---
id: "java-en-function-collectors-summinglong"
language: "java"
lang: "en"
category: "function"
name: "Collectors.summingLong"
signature: "public static <T> Collector<T, ?, Long> summingLong(ToLongFunction<? super T> mapper)"
title: "Collectors.summingLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.summingLong

```java
public static <T> Collector<T, ?, Long> summingLong(ToLongFunction<? super T> mapper)
```

Returns a `Collector` that produces the sum of a long-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.

**参数**

- **the** — type of the input elements
- **mapper** — a function extracting the property to be summed

**返回**

- a `Collector` that produces the sum of a derived property
