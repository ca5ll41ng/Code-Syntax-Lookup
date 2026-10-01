---
id: "java-en-function-findops-makeint"
language: "java"
lang: "en"
category: "function"
name: "FindOps.makeInt"
signature: "public static TerminalOp<Integer, OptionalInt> makeInt(boolean mustFindFirst)"
title: "FindOps.makeInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/FindOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FindOps.makeInt

```java
public static TerminalOp<Integer, OptionalInt> makeInt(boolean mustFindFirst)
```

Constructs a `TerminalOp` for streams of ints.

**参数**

- **mustFindFirst** — whether the `TerminalOp` must produce the first element in the encounter order

**返回**

- a `TerminalOp` implementing the find operation
