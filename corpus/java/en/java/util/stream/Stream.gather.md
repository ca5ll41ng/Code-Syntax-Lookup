---
id: "java-en-function-stream-gather"
language: "java"
lang: "en"
category: "function"
name: "Stream.gather"
signature: "default <R> Stream<R> gather(Gatherer<? super T, ?, R> gatherer)"
title: "Stream.gather"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.gather

```java
default <R> Stream<R> gather(Gatherer<? super T, ?, R> gatherer)
```

Returns a stream consisting of the results of applying the given
 `Gatherer` to the elements of this stream.

 

This is a stateful
 intermediate operation that is an
 extension point.

 

Gatherers are highly flexible and can describe a vast array of
 possibly stateful operations, with support for short-circuiting, and
 parallelization.

 

When executed in parallel, multiple intermediate results may be
 instantiated, populated, and merged so as to maintain isolation of
 mutable data structures.  Therefore, even when executed in parallel
 with non-thread-safe data structures (such as `ArrayList`), no
 additional synchronization is needed for a parallel reduction.

 

Implementations are allowed, but not required, to detect consecutive
 invocations and compose them into a single, fused, operation. This would
 make the first expression below behave like the second:

 
```
`var stream1 = Stream.of(...).gather(gatherer1).gather(gatherer2);
     var stream2 = Stream.of(...).gather(gatherer1.andThen(gatherer2));
 `
```

 The default implementation obtains the `spliterator() spliterator`
 of this stream, wraps that spliterator so as to support the semantics
 of this operation on traversal, and returns a new stream associated with
 the wrapped spliterator.  The returned stream preserves the execution
 characteristics of this stream (namely parallel or sequential execution
 as per `isParallel`) but the wrapped spliterator may choose to
 not support splitting.  When the returned stream is closed, the close
 handlers for both the returned and this stream are invoked.
 Implementations of this interface should provide their own
 implementation of this method.

**参数**

- **The** — element type of the new stream
- **gatherer** — a gatherer

**返回**

- the new stream

**参见**

- Gatherers

> *Since 24*
