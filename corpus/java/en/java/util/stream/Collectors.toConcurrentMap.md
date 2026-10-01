---
id: "java-en-function-collectors-toconcurrentmap"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toConcurrentMap"
signature: "public static <T, K, U> Collector<T, ?, ConcurrentMap<K,U>> toConcurrentMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)"
title: "Collectors.toConcurrentMap"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toConcurrentMap

```java
public static <T, K, U> Collector<T, ?, ConcurrentMap<K,U>> toConcurrentMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)
```

Returns a concurrent `Collector` that accumulates elements into a
 `ConcurrentMap` whose keys and values are the result of applying
 the provided mapping functions to the input elements.

 

If the mapped keys contain duplicates (according to
 `equals`), an `IllegalStateException` is
 thrown when the collection operation is performed.  If the mapped keys
 may have duplicates, use
 `toConcurrentMap` instead.

 

There are no guarantees on the type, mutability, or serializability
 of the `ConcurrentMap` returned.

 It is common for either the key or the value to be the input elements.
 In this case, the utility method
 `identity` may be helpful.
 For example, the following produces a `ConcurrentMap` mapping
 students to their grade point average:
 
```
`ConcurrentMap studentToGPA
   = students.stream().collect(
     toConcurrentMap(Function.identity(),
                     student -> computeGPA(student)));
 `
```

 And the following produces a `ConcurrentMap` mapping a
 unique identifier to students:
 
```
`ConcurrentMap studentIdToStudent
   = students.stream().collect(
     toConcurrentMap(Student::getId,
                     Function.identity()));
 `
```

 

This is a `CONCURRENT concurrent` and
 `UNORDERED unordered` Collector.

**参数**

- **the** — type of the input elements
- **the** — output type of the key mapping function
- **the** — output type of the value mapping function
- **keyMapper** — the mapping function to produce keys
- **valueMapper** — the mapping function to produce values

**返回**

- a concurrent, unordered `Collector` which collects elements into a `ConcurrentMap` whose keys are the result of applying a key mapping function to the input elements, and whose values are the result of applying a value mapping function to the input elements

**参见**

- #toMap(Function, Function)
- #toConcurrentMap(Function, Function, BinaryOperator)
- #toConcurrentMap(Function, Function, BinaryOperator, Supplier)
