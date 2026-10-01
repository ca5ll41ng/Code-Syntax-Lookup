---
id: "java-en-function-reduceops-makeint"
language: "java"
lang: "en"
category: "function"
name: "ReduceOps.makeInt"
signature: "public static TerminalOp<Integer, Integer> makeInt(int identity, IntBinaryOperator operator)"
title: "ReduceOps.makeInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ReduceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReduceOps.makeInt

```java
public static TerminalOp<Integer, Integer> makeInt(int identity, IntBinaryOperator operator)
```

Constructs a `TerminalOp` that implements a functional reduce on
 `int` values.

**参数**

- **identity** — the identity for the combining function
- **operator** — the combining function

**返回**

- a `TerminalOp` implementing the reduction
