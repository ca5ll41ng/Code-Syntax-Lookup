---
id: "java-en-function-intstream-min"
language: "java"
lang: "en"
category: "function"
name: "IntStream.min"
signature: "OptionalInt min()"
title: "IntStream.min"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.min

```java
OptionalInt min()
```

Returns an `OptionalInt` describing the minimum element of this
 stream, or an empty optional if this stream is empty.  This is a special
 case of a reduction
 and is equivalent to:
 
```
`return reduce(Integer::min);
 `
```

 

This is a terminal operation.

**返回**

- an `OptionalInt` containing the minimum element of this stream, or an empty `OptionalInt` if the stream is empty
