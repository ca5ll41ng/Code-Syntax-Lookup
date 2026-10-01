---
id: "java-en-function-terminalop-evaluateparallel"
language: "java"
lang: "en"
category: "function"
name: "TerminalOp.evaluateParallel"
signature: "default <P_IN> R evaluateParallel(PipelineHelper<E_IN> helper, Spliterator<P_IN> spliterator)"
title: "TerminalOp.evaluateParallel"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/TerminalOp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TerminalOp.evaluateParallel

```java
default <P_IN> R evaluateParallel(PipelineHelper<E_IN> helper, Spliterator<P_IN> spliterator)
```

Performs a parallel evaluation of the operation using the specified
 `PipelineHelper`, which describes the upstream intermediate
 operations.

 using the specified `PipelineHelper`.

**参数**

- **helper** — the pipeline helper
- **spliterator** — the source spliterator

**返回**

- the result of the evaluation
