---
id: "java-en-function-stream-findany"
language: "java"
lang: "en"
category: "function"
name: "Stream.findAny"
signature: "Optional<T> findAny()"
title: "Stream.findAny"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.findAny

```java
Optional<T> findAny()
```

Returns an `Optional` describing some element of the stream, or an
 empty `Optional` if the stream is empty.

 

This is a short-circuiting
 terminal operation.

 

The behavior of this operation is explicitly nondeterministic; it is
 free to select any element in the stream.  This is to allow for maximal
 performance in parallel operations; the cost is that multiple invocations
 on the same source may not return the same result.  (If a stable result
 is desired, use `findFirst` instead.)

**返回**

- an `Optional` describing some element of this stream, or an empty `Optional` if the stream is empty

**异常**

- **NullPointerException** — if the element selected is null

**参见**

- #findFirst()
