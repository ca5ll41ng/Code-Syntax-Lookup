---
id: "java-en-function-reduceops-makerefcounting"
language: "java"
lang: "en"
category: "function"
name: "ReduceOps.makeRefCounting"
signature: "public static <T> TerminalOp<T, Long> makeRefCounting()"
title: "ReduceOps.makeRefCounting"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ReduceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReduceOps.makeRefCounting

```java
public static <T> TerminalOp<T, Long> makeRefCounting()
```

Constructs a `TerminalOp` that counts the number of stream
 elements.  If the size of the pipeline is known then count is the size
 and there is no need to evaluate the pipeline.  If the size of the
 pipeline is non known then count is produced, via reduction, using a
 `CountingSink`.

**参数**

- **the** — type of the input elements

**返回**

- a `TerminalOp` implementing the counting
