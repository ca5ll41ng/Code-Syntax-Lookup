---
id: "java-en-function-gatherer-defaultcombiner"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.defaultCombiner"
signature: "static <A> BinaryOperator<A> defaultCombiner()"
title: "Gatherer.defaultCombiner"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.defaultCombiner

```java
static <A> BinaryOperator<A> defaultCombiner()
```

Returns a combiner which is the default combiner of a Gatherer.
 The returned combiner identifies that the owning Gatherer must only
 be evaluated sequentially.

**参数**

- **the** — type of the state of the returned combiner

**返回**

- the instance of the default combiner

**参见**

- Gatherer#combiner()
