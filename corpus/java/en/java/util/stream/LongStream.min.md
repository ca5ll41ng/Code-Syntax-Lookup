---
id: "java-en-function-longstream-min"
language: "java"
lang: "en"
category: "function"
name: "LongStream.min"
signature: "OptionalLong min()"
title: "LongStream.min"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.min

```java
OptionalLong min()
```

Returns an `OptionalLong` describing the minimum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a reduction
 and is equivalent to:
 
```
`return reduce(Long::min);
 `
```

 

This is a terminal operation.

**返回**

- an `OptionalLong` containing the minimum element of this stream, or an empty `OptionalLong` if the stream is empty
