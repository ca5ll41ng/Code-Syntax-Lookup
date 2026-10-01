---
id: "java-en-function-intstream-findany"
language: "java"
lang: "en"
category: "function"
name: "IntStream.findAny"
signature: "OptionalInt findAny()"
title: "IntStream.findAny"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.findAny

```java
OptionalInt findAny()
```

Returns an `OptionalInt` describing some element of the stream, or
 an empty `OptionalInt` if the stream is empty.

 

This is a short-circuiting
 terminal operation.

 

The behavior of this operation is explicitly nondeterministic; it is
 free to select any element in the stream.  This is to allow for maximal
 performance in parallel operations; the cost is that multiple invocations
 on the same source may not return the same result.  (If a stable result
 is desired, use `findFirst` instead.)

**返回**

- an `OptionalInt` describing some element of this stream, or an empty `OptionalInt` if the stream is empty

**参见**

- #findFirst()
