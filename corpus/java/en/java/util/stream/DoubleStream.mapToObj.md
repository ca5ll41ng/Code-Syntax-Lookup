---
id: "java-en-function-doublestream-maptoobj"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.mapToObj"
signature: "<U> Stream<U> mapToObj(DoubleFunction<? extends U> mapper)"
title: "DoubleStream.mapToObj"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.mapToObj

```java
<U> Stream<U> mapToObj(DoubleFunction<? extends U> mapper)
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
