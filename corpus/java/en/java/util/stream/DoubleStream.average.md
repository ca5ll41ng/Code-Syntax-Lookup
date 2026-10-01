---
id: "java-en-function-doublestream-average"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.average"
signature: "OptionalDouble average()"
title: "DoubleStream.average"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.average

```java
OptionalDouble average()
```

Returns an `OptionalDouble` describing the arithmetic
 mean of elements of this stream, or an empty optional if this
 stream is empty.

 

The computed average can vary numerically and have the
 special case behavior as computing the sum; see `sum`
 for details.

  

The average is a special case of a reduction.

 

This is a terminal
 operation.

 to yield more accurate results.

**返回**

- an `OptionalDouble` containing the average element of this stream, or an empty optional if the stream is empty
