---
id: "java-en-function-intstream-skip"
language: "java"
lang: "en"
category: "function"
name: "IntStream.skip"
signature: "IntStream skip(long n)"
title: "IntStream.skip"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.skip

```java
IntStream skip(long n)
```

Returns a stream consisting of the remaining elements of this stream
 after discarding the first `n` elements of the stream.
 If this stream contains fewer than `n` elements then an
 empty stream will be returned.

 

This is a stateful
 intermediate operation.

 While `skip()` is generally a cheap operation on sequential
 stream pipelines, it can be quite expensive on ordered parallel pipelines,
 especially for large values of `n`, since `skip(n)`
 is constrained to skip not just any n elements, but the
 first n elements in the encounter order.  Using an unordered
 stream source (such as `generate`) or removing the
 ordering constraint with `unordered` may result in significant
 speedups of `skip()` in parallel pipelines, if the semantics of
 your situation permit.  If consistency with encounter order is required,
 and you are experiencing poor performance or memory utilization with
 `skip()` in parallel pipelines, switching to sequential execution
 with `sequential` may improve performance.

**参数**

- **n** — the number of leading elements to skip

**返回**

- the new stream

**异常**

- **IllegalArgumentException** — if `n` is negative
