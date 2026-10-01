---
id: "java-en-function-streamsupport-longstream"
language: "java"
lang: "en"
category: "function"
name: "StreamSupport.longStream"
signature: "public static LongStream longStream(Spliterator.OfLong spliterator, boolean parallel)"
title: "StreamSupport.longStream"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/StreamSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSupport.longStream

```java
public static LongStream longStream(Spliterator.OfLong spliterator, boolean parallel)
```

Creates a new sequential or parallel `LongStream` from a
 `Spliterator.OfLong`.

 

The spliterator is only traversed, split, or queried for estimated
 size after the terminal operation of the stream pipeline commences.

 

It is strongly recommended the spliterator report a characteristic of
 `IMMUTABLE` or `CONCURRENT`, or be
 late-binding.  Otherwise,
 `longStream` should be
 used to reduce the scope of potential interference with the source.  See
 Non-Interference for
 more details.

**参数**

- **spliterator** — a `Spliterator.OfLong` describing the stream elements
- **parallel** — if `true` then the returned stream is a parallel stream; if `false` the returned stream is a sequential stream.

**返回**

- a new sequential or parallel `LongStream`
