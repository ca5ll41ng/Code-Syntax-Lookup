---
id: "java-en-function-collectors-summingdouble"
language: "java"
lang: "en"
category: "function"
name: "Collectors.summingDouble"
signature: "public static <T> Collector<T, ?, Double> summingDouble(ToDoubleFunction<? super T> mapper)"
title: "Collectors.summingDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.summingDouble

```java
public static <T> Collector<T, ?, Double> summingDouble(ToDoubleFunction<? super T> mapper)
```

Returns a `Collector` that produces the sum of a double-valued
 function applied to the input elements.  If no elements are present,
 the result is 0.

 

The sum returned can vary depending upon the order in which
 values are recorded, due to accumulated rounding error in
 addition of values of differing magnitudes. Values sorted by increasing
 absolute magnitude tend to yield more accurate results.  If any recorded
 value is a `NaN` or the sum is at any point a `NaN` then the
 sum will be `NaN`.

**参数**

- **the** — type of the input elements
- **mapper** — a function extracting the property to be summed

**返回**

- a `Collector` that produces the sum of a derived property
