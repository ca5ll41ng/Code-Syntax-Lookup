---
id: "java-en-function-forkjointask-getsurplusqueuedtaskcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.getSurplusQueuedTaskCount"
signature: "public static int getSurplusQueuedTaskCount()"
title: "ForkJoinTask.getSurplusQueuedTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.getSurplusQueuedTaskCount

```java
public static int getSurplusQueuedTaskCount()
```

Returns an estimate of how many more locally queued tasks are
 held by the current worker thread than there are other worker
 threads that might steal them, or zero if this thread is not
 operating in a ForkJoinPool. This value may be useful for
 heuristic decisions about whether to fork other tasks. In many
 usages of ForkJoinTasks, at steady state, each worker should
 aim to maintain a small constant surplus (for example, 3) of
 tasks, and to process computations locally if this threshold is
 exceeded.

**返回**

- the surplus number of tasks, which may be negative
