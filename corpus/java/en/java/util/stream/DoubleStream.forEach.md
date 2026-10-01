---
id: "java-en-function-doublestream-foreach"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.forEach"
signature: "void forEach(DoubleConsumer action)"
title: "DoubleStream.forEach"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.forEach

```java
void forEach(DoubleConsumer action)
```

Performs an action for each element of this stream.

 

This is a terminal
 operation.

 

For parallel stream pipelines, this operation does not
 guarantee to respect the encounter order of the stream, as doing so
 would sacrifice the benefit of parallelism.  For any given element, the
 action may be performed at whatever time and in whatever thread the
 library chooses.  If the action accesses shared state, it is
 responsible for providing the required synchronization.

**参数**

- **action** — a  non-interfering action to perform on the elements
