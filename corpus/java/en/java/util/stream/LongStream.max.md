---
id: "java-en-function-longstream-max"
language: "java"
lang: "en"
category: "function"
name: "LongStream.max"
signature: "OptionalLong max()"
title: "LongStream.max"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.max

```java
OptionalLong max()
```

Returns an `OptionalLong` describing the maximum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a reduction
 and is equivalent to:
 
```
`return reduce(Long::max);
 `
```

 

This is a terminal
 operation.

**返回**

- an `OptionalLong` containing the maximum element of this stream, or an empty `OptionalLong` if the stream is empty
