---
id: "java-en-function-stream-findfirst"
language: "java"
lang: "en"
category: "function"
name: "Stream.findFirst"
signature: "Optional<T> findFirst()"
title: "Stream.findFirst"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.findFirst

```java
Optional<T> findFirst()
```

Returns an `Optional` describing the first element of this stream,
 or an empty `Optional` if the stream is empty.  If the stream has
 no encounter order, then any element may be returned.

 

This is a short-circuiting
 terminal operation.

**返回**

- an `Optional` describing the first element of this stream, or an empty `Optional` if the stream is empty

**异常**

- **NullPointerException** — if the element selected is null
