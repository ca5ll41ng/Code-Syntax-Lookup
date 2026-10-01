---
id: "java-en-function-doublestream-max"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.max"
signature: "OptionalDouble max()"
title: "DoubleStream.max"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.max

```java
OptionalDouble max()
```

Returns an `OptionalDouble` describing the maximum element of this
 stream, or an empty OptionalDouble if this stream is empty.  The maximum
 element will be `Double.NaN` if any stream element was NaN. Unlike
 the numerical comparison operators, this method considers negative zero
 to be strictly smaller than positive zero. This is a
 special case of a
 reduction and is
 equivalent to:
 
```
`return reduce(Double::max);
 `
```

 

This is a terminal
 operation.

**返回**

- an `OptionalDouble` containing the maximum element of this stream, or an empty optional if the stream is empty
