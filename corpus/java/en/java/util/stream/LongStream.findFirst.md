---
id: "java-en-function-longstream-findfirst"
language: "java"
lang: "en"
category: "function"
name: "LongStream.findFirst"
signature: "OptionalLong findFirst()"
title: "LongStream.findFirst"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.findFirst

```java
OptionalLong findFirst()
```

Returns an `OptionalLong` describing the first element of this
 stream, or an empty `OptionalLong` if the stream is empty.  If the
 stream has no encounter order, then any element may be returned.

 

This is a short-circuiting
 terminal operation.

**返回**

- an `OptionalLong` describing the first element of this stream, or an empty `OptionalLong` if the stream is empty
