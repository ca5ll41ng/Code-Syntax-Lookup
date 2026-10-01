---
id: "java-en-function-gatherers-windowsliding"
language: "java"
lang: "en"
category: "function"
name: "Gatherers.windowSliding"
signature: "public static <TR> Gatherer<TR, ?, List<TR>> windowSliding(int windowSize)"
title: "Gatherers.windowSliding"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherers.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherers.windowSliding

```java
public static <TR> Gatherer<TR, ?, List<TR>> windowSliding(int windowSize)
```

Returns a Gatherer that gathers elements into windows --
 encounter-ordered groups of elements -- of a given size, where each
 subsequent window includes all elements of the previous window except
 for the least recent, and adds the next element in the stream.
 If the stream is empty then no window will be produced. If the size of
 the stream is smaller than the window size then only one window will
 be produced, containing all elements in the stream.

 

Example:
 {@snippet lang = java:
 // will contain: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]]
 List
- > windows2 =
     Stream.of(1,2,3,4,5,6,7,8).gather(Gatherers.windowSliding(2)).toList();

 // will contain: [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8]]
 List
- > windows6 =
     Stream.of(1,2,3,4,5,6,7,8).gather(Gatherers.windowSliding(6)).toList();
 }

 mutator method will always cause `UnsupportedOperationException`
 to be thrown. There are no guarantees on the implementation type or
 serializability of the produced Lists.

          and eagerly. This means that choosing large window sizes for
          small streams may use excessive memory for the duration of
          evaluation of this operation.

**参数**

- **windowSize** — the size of the windows
- **the** — type of elements the returned gatherer consumes and the contents of the windows it produces

**返回**

- a new gatherer which groups elements into sliding windows

**异常**

- **IllegalArgumentException** — when windowSize is less than 1
