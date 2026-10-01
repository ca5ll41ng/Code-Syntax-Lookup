---
id: "java-en-function-stream-sorted"
language: "java"
lang: "en"
category: "function"
name: "Stream.sorted"
signature: "Stream<T> sorted()"
title: "Stream.sorted"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.sorted

```java
Stream<T> sorted()
```

Returns a stream consisting of the elements of this stream, sorted
 according to natural order.  If the elements of this stream are not
 `Comparable`, a `java.lang.ClassCastException` may be thrown
 when the terminal operation is executed.

 

For ordered streams, the sort is stable.  For unordered streams, no
 stability guarantees are made.

 

This is a stateful
 intermediate operation.

**返回**

- the new stream
