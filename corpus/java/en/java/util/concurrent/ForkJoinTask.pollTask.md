---
id: "java-en-function-forkjointask-polltask"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.pollTask"
signature: "protected static ForkJoinTask<?> pollTask()"
title: "ForkJoinTask.pollTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.pollTask

```java
protected static ForkJoinTask<?> pollTask()
```

If the current thread is operating in a ForkJoinPool,
 unschedules and returns, without executing, the next task
 queued by the current thread but not yet executed, if one is
 available, or if not available, a task that was forked by some
 other thread, if available. Availability may be transient, so a
 `null` result does not necessarily imply quiescence of
 the pool this task is operating in.  This method is designed
 primarily to support extensions, and is unlikely to be useful
 otherwise.

**返回**

- a task, or `null` if none are available
