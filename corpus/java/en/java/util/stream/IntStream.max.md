---
id: "java-en-function-intstream-max"
language: "java"
lang: "en"
category: "function"
name: "IntStream.max"
signature: "OptionalInt max()"
title: "IntStream.max"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.max

```java
OptionalInt max()
```

Returns an `OptionalInt` describing the maximum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a reduction
 and is equivalent to:
 
```
`return reduce(Integer::max);
 `
```

 

This is a terminal
 operation.

**返回**

- an `OptionalInt` containing the maximum element of this stream, or an empty `OptionalInt` if the stream is empty
