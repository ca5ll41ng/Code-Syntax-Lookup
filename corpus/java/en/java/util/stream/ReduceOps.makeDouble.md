---
id: "java-en-function-reduceops-makedouble"
language: "java"
lang: "en"
category: "function"
name: "ReduceOps.makeDouble"
signature: "public static TerminalOp<Double, Double> makeDouble(double identity, DoubleBinaryOperator operator)"
title: "ReduceOps.makeDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ReduceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReduceOps.makeDouble

```java
public static TerminalOp<Double, Double> makeDouble(double identity, DoubleBinaryOperator operator)
```

Constructs a `TerminalOp` that implements a functional reduce on
 `double` values.

**参数**

- **identity** — the identity for the combining function
- **operator** — the combining function

**返回**

- a `TerminalOp` implementing the reduction
