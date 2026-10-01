---
id: "java-en-function-intstream-findfirst"
language: "java"
lang: "en"
category: "function"
name: "IntStream.findFirst"
signature: "OptionalInt findFirst()"
title: "IntStream.findFirst"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.findFirst

```java
OptionalInt findFirst()
```

Returns an `OptionalInt` describing the first element of this
 stream, or an empty `OptionalInt` if the stream is empty.  If the
 stream has no encounter order, then any element may be returned.

 

This is a short-circuiting
 terminal operation.

**返回**

- an `OptionalInt` describing the first element of this stream, or an empty `OptionalInt` if the stream is empty
