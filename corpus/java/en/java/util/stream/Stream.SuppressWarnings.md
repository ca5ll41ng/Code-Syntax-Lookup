---
id: "java-en-function-stream-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "Stream.SuppressWarnings"
signature: "@SuppressWarnings(\"varargs\") // Creating a stream from an array is safe public static<T> Stream<T> of(T... values)"
title: "Stream.SuppressWarnings"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.SuppressWarnings

```java
@SuppressWarnings("varargs") // Creating a stream from an array is safe public static<T> Stream<T> of(T... values)
```

Returns a sequential ordered stream whose elements are the specified values.

**参数**

- **the** — type of stream elements
- **values** — the elements of the new stream

**返回**

- the new stream
