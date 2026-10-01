---
id: "java-en-function-intstream-filter"
language: "java"
lang: "en"
category: "function"
name: "IntStream.filter"
signature: "IntStream filter(IntPredicate predicate)"
title: "IntStream.filter"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.filter

```java
IntStream filter(IntPredicate predicate)
```

Returns a stream consisting of the elements of this stream that match
 the given predicate.

 

This is an intermediate
 operation.

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to each element to determine if it should be included

**返回**

- the new stream
