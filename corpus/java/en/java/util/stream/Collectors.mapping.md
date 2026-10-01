---
id: "java-en-function-collectors-mapping"
language: "java"
lang: "en"
category: "function"
name: "Collectors.mapping"
signature: "public static <T, U, A, R> Collector<T, ?, R> mapping(Function<? super T, ? extends U> mapper, Collector<? super U, A, R> downstream)"
title: "Collectors.mapping"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.mapping

```java
public static <T, U, A, R> Collector<T, ?, R> mapping(Function<? super T, ? extends U> mapper, Collector<? super U, A, R> downstream)
```

Adapts a `Collector` accepting elements of type `U` to one
 accepting elements of type `T` by applying a mapping function to
 each input element before accumulation.

 The `mapping()` collectors are most useful when used in a
 multi-level reduction, such as downstream of a `groupingBy` or
 `partitioningBy`.  For example, given a stream of
 `Person`, to accumulate the set of last names in each city:
 
```
`Map> lastNamesByCity
   = people.stream().collect(
     groupingBy(Person::getCity,
                mapping(Person::getLastName,
                        toSet())));
 `
```

**参数**

- **the** — type of the input elements
- **type** — of elements accepted by downstream collector
- **intermediate** — accumulation type of the downstream collector
- **result** — type of collector
- **mapper** — a function to be applied to the input elements
- **downstream** — a collector which will accept mapped values

**返回**

- a collector which applies the mapping function to the input elements and provides the mapped results to the downstream collector
