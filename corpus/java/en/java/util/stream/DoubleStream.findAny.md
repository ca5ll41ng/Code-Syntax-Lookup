---
id: "java-en-function-doublestream-findany"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.findAny"
signature: "OptionalDouble findAny()"
title: "DoubleStream.findAny"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.findAny

```java
OptionalDouble findAny()
```

Returns an `OptionalDouble` describing some element of the stream,
 or an empty `OptionalDouble` if the stream is empty.

 

This is a short-circuiting
 terminal operation.

 

The behavior of this operation is explicitly nondeterministic; it is
 free to select any element in the stream.  This is to allow for maximal
 performance in parallel operations; the cost is that multiple invocations
 on the same source may not return the same result.  (If a stable result
 is desired, use `findFirst` instead.)

**返回**

- an `OptionalDouble` describing some element of this stream, or an empty `OptionalDouble` if the stream is empty

**参见**

- #findFirst()
