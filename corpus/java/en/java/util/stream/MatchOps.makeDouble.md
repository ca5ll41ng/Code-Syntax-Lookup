---
id: "java-en-function-matchops-makedouble"
language: "java"
lang: "en"
category: "function"
name: "MatchOps.makeDouble"
signature: "public static TerminalOp<Double, Boolean> makeDouble(DoublePredicate predicate, MatchKind matchKind)"
title: "MatchOps.makeDouble"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/MatchOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchOps.makeDouble

```java
public static TerminalOp<Double, Boolean> makeDouble(DoublePredicate predicate, MatchKind matchKind)
```

Constructs a quantified predicate matcher for a `DoubleStream`.

**参数**

- **predicate** — the `Predicate` to apply to stream elements
- **matchKind** — the kind of quantified match (all, any, none)

**返回**

- a `TerminalOp` implementing the desired quantified match criteria
