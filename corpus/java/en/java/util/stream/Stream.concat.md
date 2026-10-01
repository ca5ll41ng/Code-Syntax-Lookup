---
id: "java-en-function-stream-concat"
language: "java"
lang: "en"
category: "function"
name: "Stream.concat"
signature: "public static <T> Stream<T> concat(Stream<? extends T> a, Stream<? extends T> b)"
title: "Stream.concat"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.concat

```java
public static <T> Stream<T> concat(Stream<? extends T> a, Stream<? extends T> b)
```

Creates a lazily concatenated stream whose elements are all the
 elements of the first stream followed by all the elements of the
 second stream.  The resulting stream is ordered if both
 of the input streams are ordered, and parallel if either of the input
 streams is parallel.  When the resulting stream is closed, the close
 handlers for both input streams are invoked.

 

This method operates on the two input streams and binds each stream
 to its source.  As a result subsequent modifications to an input stream
 source may not be reflected in the concatenated stream result.

 Use caution when constructing streams from repeated concatenation.
 Accessing an element of a deeply concatenated stream can result in deep
 call chains, or even `StackOverflowError`.

 

Subsequent changes to the sequential/parallel execution mode of the
 returned stream are not guaranteed to be propagated to the input streams.

 To preserve optimization opportunities this method binds each stream to
 its source and accepts only two streams as parameters.  For example, the
 exact size of the concatenated stream source can be computed if the exact
 size of each input stream source is known.
 To concatenate more streams without binding, or without nested calls to
 this method, try creating a stream of streams and flat-mapping with the
 identity function, for example:
 
```
`Stream concat = Stream.of(s1, s2, s3, s4).flatMap(s -> s);
 `
```

**参数**

- **The** — type of stream elements
- **a** — the first stream
- **b** — the second stream

**返回**

- the concatenation of the two input streams
