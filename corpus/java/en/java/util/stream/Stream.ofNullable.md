---
id: "java-en-function-stream-ofnullable"
language: "java"
lang: "en"
category: "function"
name: "Stream.ofNullable"
signature: "public static<T> Stream<T> ofNullable(T t)"
title: "Stream.ofNullable"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.ofNullable

```java
public static<T> Stream<T> ofNullable(T t)
```

Returns a sequential `Stream` containing a single element, if
 non-null, otherwise returns an empty `Stream`.

**参数**

- **t** — the single element
- **the** — type of stream elements

**返回**

- a stream with a single element if the specified element is non-null, otherwise an empty stream

> *Since 9*
