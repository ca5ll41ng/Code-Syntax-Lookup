---
id: "java-en-function-java-util-stream-intstream"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.IntStream"
title: "IntStream"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream

A sequence of primitive int-valued elements supporting sequential and parallel
 aggregate operations.  This is the `int` primitive specialization of
 `Stream`.

 

The following example illustrates an aggregate operation using
 `Stream` and `IntStream`, computing the sum of the weights of the
 red widgets:

 
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
 parallelism.

**参见**

- Stream
- java.util.stream

> *Since 1.8*
