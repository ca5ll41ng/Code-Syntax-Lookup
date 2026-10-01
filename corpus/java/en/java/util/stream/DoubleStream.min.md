---
id: "java-en-function-doublestream-min"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.min"
signature: "OptionalDouble min()"
title: "DoubleStream.min"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.min

```java
OptionalDouble min()
```

Returns an `OptionalDouble` describing the minimum element of this
 stream, or an empty OptionalDouble if this stream is empty.  The minimum
 element will be `Double.NaN` if any stream element was NaN. Unlike
 the numerical comparison operators, this method considers negative zero
 to be strictly smaller than positive zero. This is a special case of a
 reduction and is
 equivalent to:
 
```
`return reduce(Double::min);
 `
```

 

This is a terminal
 operation.

**返回**

- an `OptionalDouble` containing the minimum element of this stream, or an empty optional if the stream is empty
