---
id: "java-en-function-collectors-partitioningby"
language: "java"
lang: "en"
category: "function"
name: "Collectors.partitioningBy"
signature: "public static <T> Collector<T, ?, Map<Boolean, List<T>>> partitioningBy(Predicate<? super T> predicate)"
title: "Collectors.partitioningBy"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.partitioningBy

```java
public static <T> Collector<T, ?, Map<Boolean, List<T>>> partitioningBy(Predicate<? super T> predicate)
```

Returns a `Collector` which partitions the input elements according
 to a `Predicate`, and organizes them into a
 `Map>`.

 The returned `Map` always contains mappings for both
 `false` and `true` keys.
 There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `Map` or `List`
 returned.

 If a partition has no elements, its value in the result Map will be
 an empty List.

**参数**

- **the** — type of the input elements
- **predicate** — a predicate used for classifying input elements

**返回**

- a `Collector` implementing the partitioning operation

**参见**

- #partitioningBy(Predicate, Collector)
