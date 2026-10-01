---
id: "java-en-function-forkjointask-pollnextlocaltask"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.pollNextLocalTask"
signature: "protected static ForkJoinTask<?> pollNextLocalTask()"
title: "ForkJoinTask.pollNextLocalTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.pollNextLocalTask

```java
protected static ForkJoinTask<?> pollNextLocalTask()
```

Unschedules and returns, without executing, the next task
 queued by the current thread but not yet executed, if the
 current thread is operating in a ForkJoinPool.  This method is
 designed primarily to support extensions, and is unlikely to be
 useful otherwise.

**返回**

- the next task, or `null` if none are available
