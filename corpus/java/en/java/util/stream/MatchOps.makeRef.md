---
id: "java-en-function-matchops-makeref"
language: "java"
lang: "en"
category: "function"
name: "MatchOps.makeRef"
signature: "public static <T> TerminalOp<T, Boolean> makeRef(Predicate<? super T> predicate, MatchKind matchKind)"
title: "MatchOps.makeRef"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/MatchOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MatchOps.makeRef

```java
public static <T> TerminalOp<T, Boolean> makeRef(Predicate<? super T> predicate, MatchKind matchKind)
```

Constructs a quantified predicate matcher for a Stream.

**参数**

- **the** — type of stream elements
- **predicate** — the `Predicate` to apply to stream elements
- **matchKind** — the kind of quantified match (all, any, none)

**返回**

- a `TerminalOp` implementing the desired quantified match criteria
