---
id: "java-en-function-collectors-reducing"
language: "java"
lang: "en"
category: "function"
name: "Collectors.reducing"
signature: "public static <T> Collector<T, ?, T> reducing(T identity, BinaryOperator<T> op)"
title: "Collectors.reducing"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.reducing

```java
public static <T> Collector<T, ?, T> reducing(T identity, BinaryOperator<T> op)
```

Returns a `Collector` which performs a reduction of its
 input elements under a specified `BinaryOperator` using the
 provided identity.

 The `reducing()` collectors are most useful when used in a
 multi-level reduction, downstream of `groupingBy` or
 `partitioningBy`.  To perform a simple reduction on a stream,
 use `reduce` instead.

**参数**

- **element** — type for the input and output of the reduction
- **identity** — the identity value for the reduction (also, the value that is returned when there are no input elements)
- **op** — a `BinaryOperator` used to reduce the input elements

**返回**

- a `Collector` which implements the reduction operation

**参见**

- #reducing(BinaryOperator)
- #reducing(Object, Function, BinaryOperator)
