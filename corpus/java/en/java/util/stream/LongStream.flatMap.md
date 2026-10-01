---
id: "java-en-function-longstream-flatmap"
language: "java"
lang: "en"
category: "function"
name: "LongStream.flatMap"
signature: "LongStream flatMap(LongFunction<? extends LongStream> mapper)"
title: "LongStream.flatMap"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.flatMap

```java
LongStream flatMap(LongFunction<? extends LongStream> mapper)
```

Returns a stream consisting of the results of replacing each element of
 this stream with the contents of a mapped stream produced by applying
 the provided mapping function to each element.  Each mapped stream is
 `close() closed` after its contents
 have been placed into this stream.  (If a mapped stream is `null`
 an empty stream is used, instead.)

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element which produces a `LongStream` of new values

**返回**

- the new stream

**参见**

- Stream#flatMap(Function)
