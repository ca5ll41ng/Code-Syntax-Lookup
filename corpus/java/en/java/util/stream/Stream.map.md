---
id: "java-en-function-stream-map"
language: "java"
lang: "en"
category: "function"
name: "Stream.map"
signature: "<R> Stream<R> map(Function<? super T, ? extends R> mapper)"
title: "Stream.map"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.map

```java
<R> Stream<R> map(Function<? super T, ? extends R> mapper)
```

Returns a stream consisting of the results of applying the given
 function to the elements of this stream.

 

This is an intermediate
 operation.

**参数**

- **The** — element type of the new stream
- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
