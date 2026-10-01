---
id: "java-en-function-findops-makeref"
language: "java"
lang: "en"
category: "function"
name: "FindOps.makeRef"
signature: "public static <T> TerminalOp<T, Optional<T>> makeRef(boolean mustFindFirst)"
title: "FindOps.makeRef"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/FindOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FindOps.makeRef

```java
public static <T> TerminalOp<T, Optional<T>> makeRef(boolean mustFindFirst)
```

Constructs a `TerminalOp` for streams of objects.

**参数**

- **the** — type of elements of the stream
- **mustFindFirst** — whether the `TerminalOp` must produce the first element in the encounter order

**返回**

- a `TerminalOp` implementing the find operation
