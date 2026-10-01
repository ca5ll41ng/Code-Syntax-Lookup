---
id: "java-en-function-java-util-stream-doublestream"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.DoubleStream"
title: "DoubleStream"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream

A sequence of primitive double-valued elements supporting sequential and parallel
 aggregate operations.  This is the `double` primitive specialization of
 `Stream`.

 

The following example illustrates an aggregate operation using
 `Stream` and `DoubleStream`, computing the sum of the weights of the
 red widgets:

 
```
`double sum = widgets.stream()
                         .filter(w -> w.getColor() == RED)
                         .mapToDouble(w -> w.getWeight())
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
