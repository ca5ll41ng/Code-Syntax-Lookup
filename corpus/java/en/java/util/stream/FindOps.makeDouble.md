---
id: "java-en-function-findops-makedouble"
language: "java"
lang: "en"
category: "function"
name: "FindOps.makeDouble"
signature: "public static TerminalOp<Double, OptionalDouble> makeDouble(boolean mustFindFirst)"
title: "FindOps.makeDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/FindOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FindOps.makeDouble

```java
public static TerminalOp<Double, OptionalDouble> makeDouble(boolean mustFindFirst)
```

Constructs a `FindOp` for streams of doubles.

**参数**

- **mustFindFirst** — whether the `TerminalOp` must produce the first element in the encounter order

**返回**

- a `TerminalOp` implementing the find operation
