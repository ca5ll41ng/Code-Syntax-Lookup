---
id: "java-en-function-intstream-average"
language: "java"
lang: "en"
category: "function"
name: "IntStream.average"
signature: "OptionalDouble average()"
title: "IntStream.average"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.average

```java
OptionalDouble average()
```

Returns an `OptionalDouble` describing the arithmetic mean of elements of
 this stream, or an empty optional if this stream is empty.  This is a
 special case of a
 reduction.

 

This is a terminal
 operation.

**返回**

- an `OptionalDouble` containing the average element of this stream, or an empty optional if the stream is empty
