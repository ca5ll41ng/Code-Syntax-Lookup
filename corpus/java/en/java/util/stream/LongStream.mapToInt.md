---
id: "java-en-function-longstream-maptoint"
language: "java"
lang: "en"
category: "function"
name: "LongStream.mapToInt"
signature: "IntStream mapToInt(LongToIntFunction mapper)"
title: "LongStream.mapToInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.mapToInt

```java
IntStream mapToInt(LongToIntFunction mapper)
```

Returns an `IntStream` consisting of the results of applying the
 given function to the elements of this stream.

 

This is an intermediate
 operation.

**参数**

- **mapper** — a non-interfering, stateless function to apply to each element

**返回**

- the new stream
