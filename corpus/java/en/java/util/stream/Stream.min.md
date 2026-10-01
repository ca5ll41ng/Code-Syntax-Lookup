---
id: "java-en-function-stream-min"
language: "java"
lang: "en"
category: "function"
name: "Stream.min"
signature: "Optional<T> min(Comparator<? super T> comparator)"
title: "Stream.min"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.min

```java
Optional<T> min(Comparator<? super T> comparator)
```

Returns the minimum element of this stream according to the provided
 `Comparator`.  This is a special case of a
 reduction.

 

This is a terminal operation.

**参数**

- **comparator** — a non-interfering, stateless `Comparator` to compare elements of this stream

**返回**

- an `Optional` describing the minimum element of this stream, or an empty `Optional` if the stream is empty

**异常**

- **NullPointerException** — if the minimum element is null
