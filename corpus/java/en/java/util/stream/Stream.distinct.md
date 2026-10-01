---
id: "java-en-function-stream-distinct"
language: "java"
lang: "en"
category: "function"
name: "Stream.distinct"
signature: "Stream<T> distinct()"
title: "Stream.distinct"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.distinct

```java
Stream<T> distinct()
```

Returns a stream consisting of the distinct elements (according to
 `equals`) of this stream.

 

For ordered streams, the selection of distinct elements is stable
 (for duplicated elements, the element appearing first in the encounter
 order is preserved.)  For unordered streams, no stability guarantees
 are made.

 

This is a stateful
 intermediate operation.

 Preserving stability for `distinct()` in parallel pipelines is
 relatively expensive (requires that the operation act as a full barrier,
 with substantial buffering overhead), and stability is often not needed.
 Using an unordered stream source (such as `generate`)
 or removing the ordering constraint with `unordered` may result
 in significantly more efficient execution for `distinct()` in parallel
 pipelines, if the semantics of your situation permit.  If consistency
 with encounter order is required, and you are experiencing poor performance
 or memory utilization with `distinct()` in parallel pipelines,
 switching to sequential execution with `sequential` may improve
 performance.

**返回**

- the new stream
