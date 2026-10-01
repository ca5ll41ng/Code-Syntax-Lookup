---
id: "java-en-function-intstream-takewhile"
language: "java"
lang: "en"
category: "function"
name: "IntStream.takeWhile"
signature: "default IntStream takeWhile(IntPredicate predicate)"
title: "IntStream.takeWhile"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.takeWhile

```java
default IntStream takeWhile(IntPredicate predicate)
```

Returns, if this stream is ordered, a stream consisting of the longest
 prefix of elements taken from this stream that match the given predicate.
 Otherwise returns, if this stream is unordered, a stream consisting of a
 subset of elements taken from this stream that match the given predicate.

 

If this stream is ordered then the longest prefix is a contiguous
 sequence of elements of this stream that match the given predicate.  The
 first element of the sequence is the first element of this stream, and
 the element immediately following the last element of the sequence does
 not match the given predicate.

 

If this stream is unordered, and some (but not all) elements of this
 stream match the given predicate, then the behavior of this operation is
 nondeterministic; it is free to take any subset of matching elements
 (which includes the empty set).

 

Independent of whether this stream is ordered or unordered if all
 elements of this stream match the given predicate then this operation
 takes all elements (the result is the same as the input), or if no
 elements of the stream match the given predicate then no elements are
 taken (the result is an empty stream).

 

This is a short-circuiting
 stateful intermediate operation.

 The default implementation obtains the `spliterator() spliterator`
 of this stream, wraps that spliterator so as to support the semantics
 of this operation on traversal, and returns a new stream associated with
 the wrapped spliterator.  The returned stream preserves the execution
 characteristics of this stream (namely parallel or sequential execution
 as per `isParallel`) but the wrapped spliterator may choose to
 not support splitting.  When the returned stream is closed, the close
 handlers for both the returned and this stream are invoked.

 While `takeWhile()` is generally a cheap operation on sequential
 stream pipelines, it can be quite expensive on ordered parallel
 pipelines, since the operation is constrained to return not just any
 valid prefix, but the longest prefix of elements in the encounter order.
 Using an unordered stream source (such as `generate`)
 or removing the ordering constraint with `unordered` may result
 in significant speedups of `takeWhile()` in parallel pipelines, if
 the semantics of your situation permit.  If consistency with encounter
 order is required, and you are experiencing poor performance or memory
 utilization with `takeWhile()` in parallel pipelines, switching to
 sequential execution with `sequential` may improve performance.

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to elements to determine the longest prefix of elements.

**返回**

- the new stream

> *Since 9*
