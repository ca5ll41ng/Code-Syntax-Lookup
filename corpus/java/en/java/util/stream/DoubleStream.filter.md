---
id: "java-en-function-doublestream-filter"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.filter"
signature: "DoubleStream filter(DoublePredicate predicate)"
title: "DoubleStream.filter"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.filter

```java
DoubleStream filter(DoublePredicate predicate)
```

Returns a stream consisting of the elements of this stream that match
 the given predicate.

 

This is an intermediate
 operation.

**参数**

- **predicate** — a non-interfering, stateless predicate to apply to each element to determine if it should be included

**返回**

- the new stream
