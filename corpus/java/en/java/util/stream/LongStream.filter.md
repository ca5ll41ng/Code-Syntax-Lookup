---
id: "java-en-function-longstream-filter"
language: "java"
lang: "en"
category: "function"
name: "LongStream.filter"
signature: "LongStream filter(LongPredicate predicate)"
title: "LongStream.filter"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.filter

```java
LongStream filter(LongPredicate predicate)
```

Returns a stream consisting of the elements of this stream that match
 the given predicate.

 

This is an intermediate
 operation.

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to each element to determine if it should be included

**返回**

- the new stream
