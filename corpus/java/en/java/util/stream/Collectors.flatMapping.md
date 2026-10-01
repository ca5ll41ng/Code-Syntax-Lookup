---
id: "java-en-function-collectors-flatmapping"
language: "java"
lang: "en"
category: "function"
name: "Collectors.flatMapping"
signature: "public static <T, U, A, R> Collector<T, ?, R> flatMapping(Function<? super T, ? extends Stream<? extends U>> mapper, Collector<? super U, A, R> downstream)"
title: "Collectors.flatMapping"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.flatMapping

```java
public static <T, U, A, R> Collector<T, ?, R> flatMapping(Function<? super T, ? extends Stream<? extends U>> mapper, Collector<? super U, A, R> downstream)
```

Adapts a `Collector` accepting elements of type `U` to one
 accepting elements of type `T` by applying a flat mapping function
 to each input element before accumulation.  The flat mapping function
 maps an input element to a `Stream stream` covering zero or more
 output elements that are then accumulated downstream.  Each mapped stream
 is `close() closed` after its contents
 have been placed downstream.  (If a mapped stream is `null`
 an empty stream is used, instead.)

 The `flatMapping()` collectors are most useful when used in a
 multi-level reduction, such as downstream of a `groupingBy` or
 `partitioningBy`.  For example, given a stream of
 `Order`, to accumulate the set of line items for each customer:
 
```
`Map itemsByCustomerName
   = orders.stream().collect(
     groupingBy(Order::getCustomerName,
                flatMapping(order -> order.getLineItems().stream(),
                            toSet())));
 `
```

**参数**

- **the** — type of the input elements
- **type** — of elements accepted by downstream collector
- **intermediate** — accumulation type of the downstream collector
- **result** — type of collector
- **mapper** — a function to be applied to the input elements, which returns a stream of results
- **downstream** — a collector which will receive the elements of the stream returned by mapper

**返回**

- a collector which applies the mapping function to the input elements and provides the flat mapped results to the downstream collector

> *Since 9*
