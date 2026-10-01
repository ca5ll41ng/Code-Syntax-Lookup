---
id: "java-en-function-findops-makelong"
language: "java"
lang: "en"
category: "function"
name: "FindOps.makeLong"
signature: "public static TerminalOp<Long, OptionalLong> makeLong(boolean mustFindFirst)"
title: "FindOps.makeLong"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/FindOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FindOps.makeLong

```java
public static TerminalOp<Long, OptionalLong> makeLong(boolean mustFindFirst)
```

Constructs a `TerminalOp` for streams of longs.

**参数**

- **mustFindFirst** — whether the `TerminalOp` must produce the first element in the encounter order

**返回**

- a `TerminalOp` implementing the find operation
