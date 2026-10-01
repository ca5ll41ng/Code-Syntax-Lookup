---
id: "java-en-function-foreachops-makeref"
language: "java"
lang: "en"
category: "function"
name: "ForEachOps.makeRef"
signature: "public static <T> TerminalOp<T, Void> makeRef(Consumer<? super T> action, boolean ordered)"
title: "ForEachOps.makeRef"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ForEachOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForEachOps.makeRef

```java
public static <T> TerminalOp<T, Void> makeRef(Consumer<? super T> action, boolean ordered)
```

Constructs a `TerminalOp` that perform an action for every element
 of a stream.

**参数**

- **action** — the `Consumer` that receives all elements of a stream
- **ordered** — whether an ordered traversal is requested
- **the** — type of the stream elements

**返回**

- the `TerminalOp` instance
