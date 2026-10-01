---
id: "java-en-function-abstractshortcircuittask-shortcircuit"
language: "java"
lang: "en"
category: "function"
name: "AbstractShortCircuitTask.shortCircuit"
signature: "protected void shortCircuit(R result)"
title: "AbstractShortCircuitTask.shortCircuit"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractShortCircuitTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractShortCircuitTask.shortCircuit

```java
protected void shortCircuit(R result)
```

Declares that a globally valid result has been found.  If another task has
 not already found the answer, the result is installed in
 `sharedResult`.  The `compute()` method will check
 `sharedResult` before proceeding with computation, so this causes
 the computation to terminate early.

**参数**

- **result** — the result found
