---
id: "java-en-function-dropwhileop-opwrapsink"
language: "java"
lang: "en"
category: "function"
name: "DropWhileOp.opWrapSink"
signature: "DropWhileSink<T> opWrapSink(Sink<T> sink, boolean retainAndCountDroppedElements)"
title: "DropWhileOp.opWrapSink"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/WhileOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DropWhileOp.opWrapSink

```java
DropWhileSink<T> opWrapSink(Sink<T> sink, boolean retainAndCountDroppedElements)
```

Accepts a `Sink` which will receive the results of this
 dropWhile operation, and return a `DropWhileSink` which
 accepts
 elements and which performs the dropWhile operation passing the
 results to the provided `Sink`.

**参数**

- **sink** — sink to which elements should be sent after processing
- **retainAndCountDroppedElements** — true if elements to be dropped are counted and passed to the sink, otherwise such elements are actually dropped and not passed to the sink.

**返回**

- a dropWhile sink
