---
id: "java-en-function-gatherer-combiner"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.combiner"
signature: "default BinaryOperator<A> combiner()"
title: "Gatherer.combiner"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.combiner

```java
default BinaryOperator<A> combiner()
```

A function which accepts two intermediate states and combines them into
 one.

           `defaultCombiner`.

**返回**

- a function which accepts two intermediate states and combines them into one
