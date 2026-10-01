---
id: "java-en-function-futuretask-done"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.done"
signature: "protected void done()"
title: "FutureTask.done"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.done

```java
protected void done()
```

Protected method invoked when this task transitions to state
 `isDone` (whether normally or via cancellation). The
 default implementation does nothing.  Subclasses may override
 this method to invoke completion callbacks or perform
 bookkeeping. Note that you can query status inside the
 implementation of this method to determine whether this task
 has been cancelled.
