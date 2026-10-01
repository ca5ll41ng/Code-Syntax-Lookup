---
id: "java-en-function-java-util-stream-basestream"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.BaseStream"
title: "BaseStream"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream

Base interface for streams, which are sequences of elements supporting
 sequential and parallel aggregate operations.  The following example
 illustrates an aggregate operation using the stream types `Stream`
 and `IntStream`, computing the sum of the weights of the red widgets:

 
```
`int sum = widgets.stream()
                      .filter(w -> w.getColor() == RED)
                      .mapToInt(w -> w.getWeight())
                      .sum();
 `
```

 See the class documentation for `Stream` and the package documentation
 for java.util.stream for additional
 specification of streams, stream operations, stream pipelines, and
 parallelism, which governs the behavior of all stream types.

**参数**

- **the** — type of the stream elements
- **the** — type of the stream implementing `BaseStream`

**参见**

- Stream
- IntStream
- LongStream
- DoubleStream
- java.util.stream

> *Since 1.8*
