---
id: "java-en-function-stream-flatmaptoint"
language: "java"
lang: "en"
category: "function"
name: "Stream.flatMapToInt"
signature: "IntStream flatMapToInt(Function<? super T, ? extends IntStream> mapper)"
title: "Stream.flatMapToInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.flatMapToInt

```java
IntStream flatMapToInt(Function<? super T, ? extends IntStream> mapper)
```

Returns an `IntStream` consisting of the results of replacing each
 element of this stream with the contents of a mapped stream produced by
 applying the provided mapping function to each element.  Each mapped
 stream is `close() closed` after its
 contents have been placed into this stream.  (If a mapped stream is
 `null` an empty stream is used, instead.)

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element which produces a stream of new values

**返回**

- the new stream

**参见**

- #flatMap flatMap
