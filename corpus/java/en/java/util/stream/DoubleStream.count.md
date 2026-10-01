---
id: "java-en-function-doublestream-count"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.count"
signature: "long count()"
title: "DoubleStream.count"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.count

```java
long count()
```

Returns the count of elements in this stream.  This is a special case of
 a reduction and is
 equivalent to:
 
```
`return mapToLong(e -> 1L).sum();
 `
```

 

This is a terminal operation.

 An implementation may choose to not execute the stream pipeline (either
 sequentially or in parallel) if it is capable of computing the count
 directly from the stream source.  In such cases no source elements will
 be traversed and no intermediate operations will be evaluated.
 Behavioral parameters with side-effects, which are strongly discouraged
 except for harmless cases such as debugging, may be affected.  For
 example, consider the following stream:
 
```
`DoubleStream s = DoubleStream.of(1, 2, 3, 4);
     long count = s.peek(System.out::println).count();
 `
```

 The number of elements covered by the stream source is known and the
 intermediate operation, `peek`, does not inject into or remove
 elements from the stream (as may be the case for `flatMap` or
 `filter` operations).  Thus the count is 4 and there is no need to
 execute the pipeline and, as a side-effect, print out the elements.

**返回**

- the count of elements in this stream
