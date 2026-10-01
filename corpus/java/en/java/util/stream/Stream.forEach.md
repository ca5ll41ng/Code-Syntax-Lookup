---
id: "java-en-function-stream-foreach"
language: "java"
lang: "en"
category: "function"
name: "Stream.forEach"
signature: "void forEach(Consumer<? super T> action)"
title: "Stream.forEach"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.forEach

```java
void forEach(Consumer<? super T> action)
```

Performs an action for each element of this stream.

 

This is a terminal
 operation.

 

The behavior of this operation is explicitly nondeterministic.
 For parallel stream pipelines, this operation does not
 guarantee to respect the encounter order of the stream, as doing so
 would sacrifice the benefit of parallelism.  For any given element, the
 action may be performed at whatever time and in whatever thread the
 library chooses.  If the action accesses shared state, it is
 responsible for providing the required synchronization.

**参数**

- **action** — a  non-interfering action to perform on the elements
