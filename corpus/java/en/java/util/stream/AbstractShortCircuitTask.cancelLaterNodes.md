---
id: "java-en-function-abstractshortcircuittask-cancellaternodes"
language: "java"
lang: "en"
category: "function"
name: "AbstractShortCircuitTask.cancelLaterNodes"
signature: "protected void cancelLaterNodes()"
title: "AbstractShortCircuitTask.cancelLaterNodes"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/AbstractShortCircuitTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractShortCircuitTask.cancelLaterNodes

```java
protected void cancelLaterNodes()
```

Cancels all tasks which succeed this one in the encounter order.  This
 includes canceling all the current task's right sibling, as well as the
 later right siblings of all its parents.
