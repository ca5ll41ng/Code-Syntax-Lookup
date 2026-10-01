---
id: "java-en-function-foreachops-makelong"
language: "java"
lang: "en"
category: "function"
name: "ForEachOps.makeLong"
signature: "public static TerminalOp<Long, Void> makeLong(LongConsumer action, boolean ordered)"
title: "ForEachOps.makeLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ForEachOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForEachOps.makeLong

```java
public static TerminalOp<Long, Void> makeLong(LongConsumer action, boolean ordered)
```

Constructs a `TerminalOp` that perform an action for every element
 of a `LongStream`.

**参数**

- **action** — the `LongConsumer` that receives all elements of a stream
- **ordered** — whether an ordered traversal is requested

**返回**

- the `TerminalOp` instance
