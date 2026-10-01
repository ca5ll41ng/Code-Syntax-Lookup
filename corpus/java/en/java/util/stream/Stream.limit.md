---
id: "java-en-function-stream-limit"
language: "java"
lang: "en"
category: "function"
name: "Stream.limit"
signature: "Stream<T> limit(long maxSize)"
title: "Stream.limit"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.limit

```java
Stream<T> limit(long maxSize)
```

Returns a stream consisting of the elements of this stream, truncated
 to be no longer than `maxSize` in length.

 

This is a short-circuiting
 stateful intermediate operation.

 While `limit()` is generally a cheap operation on sequential
 stream pipelines, it can be quite expensive on ordered parallel pipelines,
 especially for large values of `maxSize`, since `limit(n)`
 is constrained to return not just any n elements, but the
 first n elements in the encounter order.  Using an unordered
 stream source (such as `generate`) or removing the
 ordering constraint with `unordered` may result in significant
 speedups of `limit()` in parallel pipelines, if the semantics of
 your situation permit.  If consistency with encounter order is required,
 and you are experiencing poor performance or memory utilization with
 `limit()` in parallel pipelines, switching to sequential execution
 with `sequential` may improve performance.

**参数**

- **maxSize** — the number of elements the stream should be limited to

**返回**

- the new stream

**异常**

- **IllegalArgumentException** — if `maxSize` is negative
