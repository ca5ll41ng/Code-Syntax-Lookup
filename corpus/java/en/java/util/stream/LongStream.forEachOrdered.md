---
id: "java-en-function-longstream-foreachordered"
language: "java"
lang: "en"
category: "function"
name: "LongStream.forEachOrdered"
signature: "void forEachOrdered(LongConsumer action)"
title: "LongStream.forEachOrdered"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/LongStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongStream.forEachOrdered

```java
void forEachOrdered(LongConsumer action)
```

Performs an action for each element of this stream, guaranteeing that
 each element is processed in encounter order for streams that have a
 defined encounter order.

 

This is a terminal
 operation.

**参数**

- **action** — a  non-interfering action to perform on the elements

**参见**

- #forEach(LongConsumer)
