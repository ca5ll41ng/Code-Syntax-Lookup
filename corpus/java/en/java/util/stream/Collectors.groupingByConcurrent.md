---
id: "java-en-function-collectors-groupingbyconcurrent"
language: "java"
lang: "en"
category: "function"
name: "Collectors.groupingByConcurrent"
signature: "public static <T, K> Collector<T, ?, ConcurrentMap<K, List<T>>> groupingByConcurrent(Function<? super T, ? extends K> classifier)"
title: "Collectors.groupingByConcurrent"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.groupingByConcurrent

```java
public static <T, K> Collector<T, ?, ConcurrentMap<K, List<T>>> groupingByConcurrent(Function<? super T, ? extends K> classifier)
```

Returns a concurrent `Collector` implementing a "group by"
 operation on input elements of type `T`, grouping elements
 according to a classification function.

 

This is a `CONCURRENT concurrent` and
 `UNORDERED unordered` Collector.

 

The classification function maps elements to some key type `K`.
 The collector produces a `ConcurrentMap>` whose keys are the
 values resulting from applying the classification function to the input
 elements, and whose corresponding values are `List`s containing the
 input elements which map to the associated key under the classification
 function.

 

There are no guarantees on the type, mutability, or serializability
 of the `ConcurrentMap` or `List` objects returned, or of the
 thread-safety of the `List` objects returned.
 This produces a result similar to:
 
```
`groupingByConcurrent(classifier, toList());
 `
```

**参数**

- **the** — type of the input elements
- **the** — type of the keys
- **classifier** — a classifier function mapping input elements to keys

**返回**

- a concurrent, unordered `Collector` implementing the group-by operation

**参见**

- #groupingBy(Function)
- #groupingByConcurrent(Function, Collector)
- #groupingByConcurrent(Function, Supplier, Collector)
