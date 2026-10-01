---
id: "java-en-function-collector-combiner"
language: "java"
lang: "en"
category: "function"
name: "Collector.combiner"
signature: "BinaryOperator<A> combiner()"
title: "Collector.combiner"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collector.combiner

```java
BinaryOperator<A> combiner()
```

A function that accepts two partial results and merges them.  The
 combiner function may fold state from one argument into the other and
 return that, or may return a new result container.

**返回**

- a function which combines two partial results into a combined result
