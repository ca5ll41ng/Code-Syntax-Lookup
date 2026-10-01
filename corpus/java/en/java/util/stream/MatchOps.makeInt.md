---
id: "java-en-function-matchops-makeint"
language: "java"
lang: "en"
category: "function"
name: "MatchOps.makeInt"
signature: "public static TerminalOp<Integer, Boolean> makeInt(IntPredicate predicate, MatchKind matchKind)"
title: "MatchOps.makeInt"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/MatchOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchOps.makeInt

```java
public static TerminalOp<Integer, Boolean> makeInt(IntPredicate predicate, MatchKind matchKind)
```

Constructs a quantified predicate matcher for an `IntStream`.

**参数**

- **predicate** — the `Predicate` to apply to stream elements
- **matchKind** — the kind of quantified match (all, any, none)

**返回**

- a `TerminalOp` implementing the desired quantified match criteria
