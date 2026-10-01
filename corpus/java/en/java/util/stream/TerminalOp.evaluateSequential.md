---
id: "java-en-function-terminalop-evaluatesequential"
language: "java"
lang: "en"
category: "function"
name: "TerminalOp.evaluateSequential"
signature: "<P_IN> R evaluateSequential(PipelineHelper<E_IN> helper, Spliterator<P_IN> spliterator)"
title: "TerminalOp.evaluateSequential"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/TerminalOp.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TerminalOp.evaluateSequential

```java
<P_IN> R evaluateSequential(PipelineHelper<E_IN> helper, Spliterator<P_IN> spliterator)
```

Performs a sequential evaluation of the operation using the specified
 `PipelineHelper`, which describes the upstream intermediate
 operations.

**参数**

- **helper** — the pipeline helper
- **spliterator** — the source spliterator

**返回**

- the result of the evaluation
