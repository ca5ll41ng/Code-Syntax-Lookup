---
id: "java-en-function-node-foreach"
language: "java"
lang: "en"
category: "function"
name: "Node.forEach"
signature: "void forEach(Consumer<? super T> consumer)"
title: "Node.forEach"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.forEach

```java
void forEach(Consumer<? super T> consumer)
```

Traverses the elements of this node, and invoke the provided
 `Consumer` with each element.  Elements are provided in encounter
 order if the source for the `Node` has a defined encounter order.

**参数**

- **consumer** — a `Consumer` that is to be invoked with each element in this `Node`
