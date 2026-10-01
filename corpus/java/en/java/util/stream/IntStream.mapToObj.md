---
id: "java-en-function-intstream-maptoobj"
language: "java"
lang: "en"
category: "function"
name: "IntStream.mapToObj"
signature: "<U> Stream<U> mapToObj(IntFunction<? extends U> mapper)"
title: "IntStream.mapToObj"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.mapToObj

```java
<U> Stream<U> mapToObj(IntFunction<? extends U> mapper)
```

Returns an object-valued `Stream` consisting of the results of
 applying the given function to the elements of this stream.

 

This is an 
     intermediate operation.

**参数**

- **the** — element type of the new stream
- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
