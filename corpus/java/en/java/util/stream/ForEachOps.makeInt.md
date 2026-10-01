---
id: "java-en-function-foreachops-makeint"
language: "java"
lang: "en"
category: "function"
name: "ForEachOps.makeInt"
signature: "public static TerminalOp<Integer, Void> makeInt(IntConsumer action, boolean ordered)"
title: "ForEachOps.makeInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ForEachOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForEachOps.makeInt

```java
public static TerminalOp<Integer, Void> makeInt(IntConsumer action, boolean ordered)
```

Constructs a `TerminalOp` that perform an action for every element
 of an `IntStream`.

**参数**

- **action** — the `IntConsumer` that receives all elements of a stream
- **ordered** — whether an ordered traversal is requested

**返回**

- the `TerminalOp` instance
