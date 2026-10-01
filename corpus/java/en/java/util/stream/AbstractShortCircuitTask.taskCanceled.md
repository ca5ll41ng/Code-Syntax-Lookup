---
id: "java-en-function-abstractshortcircuittask-taskcanceled"
language: "java"
lang: "en"
category: "function"
name: "AbstractShortCircuitTask.taskCanceled"
signature: "protected boolean taskCanceled()"
title: "AbstractShortCircuitTask.taskCanceled"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractShortCircuitTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractShortCircuitTask.taskCanceled

```java
protected boolean taskCanceled()
```

Queries whether this task is canceled.  A task is considered canceled if
 it or any of its parents have been canceled.

**返回**

- `true` if this task or any parent is canceled.
