---
id: "java-en-function-doublestream-foreachordered"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.forEachOrdered"
signature: "void forEachOrdered(DoubleConsumer action)"
title: "DoubleStream.forEachOrdered"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.forEachOrdered

```java
void forEachOrdered(DoubleConsumer action)
```

Performs an action for each element of this stream, guaranteeing that
 each element is processed in encounter order for streams that have a
 defined encounter order.

 

This is a terminal
 operation.

**参数**

- **action** — a  non-interfering action to perform on the elements

**参见**

- #forEach(DoubleConsumer)
