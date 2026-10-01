---
id: "java-en-function-intstream-maptodouble"
language: "java"
lang: "en"
category: "function"
name: "IntStream.mapToDouble"
signature: "DoubleStream mapToDouble(IntToDoubleFunction mapper)"
title: "IntStream.mapToDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.mapToDouble

```java
DoubleStream mapToDouble(IntToDoubleFunction mapper)
```

Returns a `DoubleStream` consisting of the results of applying the
 given function to the elements of this stream.

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
