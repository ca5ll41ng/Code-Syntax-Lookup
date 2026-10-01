---
id: "java-en-function-stream-mapmultitolong"
language: "java"
lang: "en"
category: "function"
name: "Stream.mapMultiToLong"
signature: "default LongStream mapMultiToLong(BiConsumer<? super T, ? super LongConsumer> mapper)"
title: "Stream.mapMultiToLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.mapMultiToLong

```java
default LongStream mapMultiToLong(BiConsumer<? super T, ? super LongConsumer> mapper)
```

Returns a `LongStream` consisting of the results of replacing each
 element of this stream with multiple elements, specifically zero or more
 elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `LongConsumer consumer` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 

This is an intermediate
 operation.

 

If the `LongConsumer consumer` argument is used outside the scope of
 its application to the mapping function, the results are undefined.

 The default implementation invokes `flatMapToLong flatMapToLong` on this stream,
 passing a function that behaves as follows. First, it calls the mapper function
 with a `LongConsumer` that accumulates replacement elements into a newly created
 internal buffer. When the mapper function returns, it creates a `LongStream` from
 the internal buffer. Finally, it returns this stream to `flatMapToLong`.

**参数**

- **mapper** — a non-interfering, stateless function that generates replacement elements

**返回**

- the new stream

**参见**

- #mapMulti mapMulti

> *Since 16*
