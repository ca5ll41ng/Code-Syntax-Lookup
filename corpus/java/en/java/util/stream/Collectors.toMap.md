---
id: "java-en-function-collectors-tomap"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toMap"
signature: "public static <T, K, U> Collector<T, ?, Map<K,U>> toMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)"
title: "Collectors.toMap"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toMap

```java
public static <T, K, U> Collector<T, ?, Map<K,U>> toMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)
```

Returns a `Collector` that accumulates elements into a
 `Map` whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 

If the mapped keys contain duplicates (according to
 `equals`), an `IllegalStateException` is
 thrown when the collection operation is performed.  If the mapped keys
 might have duplicates, use `toMap`
 instead.

 

There are no guarantees on the type, mutability, serializability,
 or thread-safety of the `Map` returned.

 It is common for either the key or the value to be the input elements.
 In this case, the utility method
 `identity` may be helpful.
 For example, the following produces a `Map` mapping
 students to their grade point average:
 
```
`Map studentToGPA
   = students.stream().collect(
     toMap(Function.identity(),
           student -> computeGPA(student)));
 `
```

 And the following produces a `Map` mapping a unique identifier to
 students:
 
```
`Map studentIdToStudent
   = students.stream().collect(
     toMap(Student::getId,
           Function.identity()));
 `
```

 The returned `Collector` is not concurrent.  For parallel stream
 pipelines, the `combiner` function operates by merging the keys
 from one map into another, which can be an expensive operation.  If it is
 not required that results are inserted into the `Map` in encounter
 order, using `toConcurrentMap`
 may offer better parallel performance.

**参数**

- **the** — type of the input elements
- **the** — output type of the key mapping function
- **the** — output type of the value mapping function
- **keyMapper** — a mapping function to produce keys
- **valueMapper** — a mapping function to produce values

**返回**

- a `Collector` which collects elements into a `Map` whose keys and values are the result of applying mapping functions to the input elements

**参见**

- #toMap(Function, Function, BinaryOperator)
- #toMap(Function, Function, BinaryOperator, Supplier)
- #toConcurrentMap(Function, Function)
