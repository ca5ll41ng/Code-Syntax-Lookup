---
id: "java-en-function-doublestream-findfirst"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.findFirst"
signature: "OptionalDouble findFirst()"
title: "DoubleStream.findFirst"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.findFirst

```java
OptionalDouble findFirst()
```

Returns an `OptionalDouble` describing the first element of this
 stream, or an empty `OptionalDouble` if the stream is empty.  If
 the stream has no encounter order, then any element may be returned.

 

This is a short-circuiting
 terminal operation.

**返回**

- an `OptionalDouble` describing the first element of this stream, or an empty `OptionalDouble` if the stream is empty
