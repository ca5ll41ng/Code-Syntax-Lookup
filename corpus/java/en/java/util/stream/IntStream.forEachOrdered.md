---
id: "java-en-function-intstream-foreachordered"
language: "java"
lang: "en"
category: "function"
name: "IntStream.forEachOrdered"
signature: "void forEachOrdered(IntConsumer action)"
title: "IntStream.forEachOrdered"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.forEachOrdered

```java
void forEachOrdered(IntConsumer action)
```

Performs an action for each element of this stream, guaranteeing that
 each element is processed in encounter order for streams that have a
 defined encounter order.

 

This is a terminal
 operation.

**参数**

- **action** — a  non-interfering action to perform on the elements

**参见**

- #forEach(IntConsumer)
