---
id: "java-en-function-abstractshortcircuittask-setlocalresult"
language: "java"
lang: "en"
category: "function"
name: "AbstractShortCircuitTask.setLocalResult"
signature: "protected void setLocalResult(R localResult)"
title: "AbstractShortCircuitTask.setLocalResult"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractShortCircuitTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractShortCircuitTask.setLocalResult

```java
protected void setLocalResult(R localResult)
```

Sets a local result for this task.  If this task is the root, set the
 shared result instead (if not already set).

**参数**

- **localResult** — The result to set for this task
