---
id: "java-en-function-stream-maptodouble"
language: "java"
lang: "en"
category: "function"
name: "Stream.mapToDouble"
signature: "DoubleStream mapToDouble(ToDoubleFunction<? super T> mapper)"
title: "Stream.mapToDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.mapToDouble

```java
DoubleStream mapToDouble(ToDoubleFunction<? super T> mapper)
```

Returns a `DoubleStream` consisting of the results of applying the
 given function to the elements of this stream.

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
