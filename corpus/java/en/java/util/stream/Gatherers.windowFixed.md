---
id: "java-en-function-gatherers-windowfixed"
language: "java"
lang: "en"
category: "function"
name: "Gatherers.windowFixed"
signature: "public static <TR> Gatherer<TR, ?, List<TR>> windowFixed(int windowSize)"
title: "Gatherers.windowFixed"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherers.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherers.windowFixed

```java
public static <TR> Gatherer<TR, ?, List<TR>> windowFixed(int windowSize)
```

Returns a Gatherer that gathers elements into windows
 -- encounter-ordered groups of elements -- of a fixed size.
 If the stream is empty then no window will be produced.
 The last window may contain fewer elements than the supplied window size.

 

Example:
 {@snippet lang = java:
 // will contain: [[1, 2, 3], [4, 5, 6], [7, 8]]
 List
- > windows =
     Stream.of(1,2,3,4,5,6,7,8).gather(Gatherers.windowFixed(3)).toList();
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

- a new gatherer which groups elements into fixed-size windows

**异常**

- **IllegalArgumentException** — when `windowSize` is less than 1
