---
id: "java-en-function-collectors-groupingby"
language: "java"
lang: "en"
category: "function"
name: "Collectors.groupingBy"
signature: "public static <T, K> Collector<T, ?, Map<K, List<T>>> groupingBy(Function<? super T, ? extends K> classifier)"
title: "Collectors.groupingBy"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.groupingBy

```java
public static <T, K> Collector<T, ?, Map<K, List<T>>> groupingBy(Function<? super T, ? extends K> classifier)
```

Returns a `Collector` implementing a "group by" operation on
 input elements of type `T`, grouping elements according to a
 classification function, and returning the results in a `Map`.

 

The classification function maps elements to some key type `K`.
 The collector produces a `Map>` whose keys are the
 values resulting from applying the classification function to the input
 elements, and whose corresponding values are `List`s containing the
 input elements which map to the associated key under the classification
 function.

 

There are no guarantees on the type, mutability, serializability, or
 thread-safety of the `Map` or `List` objects returned.
 This produces a result similar to:
 
```
`groupingBy(classifier, toList());
 `
```

 The returned `Collector` is not concurrent.  For parallel stream
 pipelines, the `combiner` function operates by merging the keys
 from one map into another, which can be an expensive operation.  If
 preservation of the order in which elements appear in the resulting `Map`
 collector is not required, using `groupingByConcurrent`
 may offer better parallel performance.

**参数**

- **the** — type of the input elements
- **the** — type of the keys
- **classifier** — the classifier function mapping input elements to keys

**返回**

- a `Collector` implementing the group-by operation

**参见**

- #groupingBy(Function, Collector)
- #groupingBy(Function, Supplier, Collector)
- #groupingByConcurrent(Function)
