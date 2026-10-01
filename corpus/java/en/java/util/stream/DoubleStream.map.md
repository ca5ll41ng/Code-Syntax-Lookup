---
id: "java-en-function-doublestream-map"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.map"
signature: "DoubleStream map(DoubleUnaryOperator mapper)"
title: "DoubleStream.map"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.map

```java
DoubleStream map(DoubleUnaryOperator mapper)
```

Returns a stream consisting of the results of applying the given
 function to the elements of this stream.

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
