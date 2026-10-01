---
id: "java-en-function-stream-mapmultitoint"
language: "java"
lang: "en"
category: "function"
name: "Stream.mapMultiToInt"
signature: "default IntStream mapMultiToInt(BiConsumer<? super T, ? super IntConsumer> mapper)"
title: "Stream.mapMultiToInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.mapMultiToInt

```java
default IntStream mapMultiToInt(BiConsumer<? super T, ? super IntConsumer> mapper)
```

Returns an `IntStream` consisting of the results of replacing each
 element of this stream with multiple elements, specifically zero or more
 elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `IntConsumer consumer` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 

This is an intermediate
 operation.

 

If the `IntConsumer consumer` argument is used outside the scope of
 its application to the mapping function, the results are undefined.

 The default implementation invokes `flatMapToInt flatMapToInt` on this stream,
 passing a function that behaves as follows. First, it calls the mapper function
 with an `IntConsumer` that accumulates replacement elements into a newly created
 internal buffer. When the mapper function returns, it creates an `IntStream` from
 the internal buffer. Finally, it returns this stream to `flatMapToInt`.

**参数**

- **mapper** — a non-interfering, stateless function that generates replacement elements

**返回**

- the new stream

**参见**

- #mapMulti mapMulti

> *Since 16*
