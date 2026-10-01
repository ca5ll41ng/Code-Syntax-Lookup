---
id: "java-en-function-forkjointask-getqueuedtaskcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.getQueuedTaskCount"
signature: "public static int getQueuedTaskCount()"
title: "ForkJoinTask.getQueuedTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.getQueuedTaskCount

```java
public static int getQueuedTaskCount()
```

Returns an estimate of the number of tasks that have been
 forked by the current worker thread but not yet executed. This
 value may be useful for heuristic decisions about whether to
 fork other tasks.

**返回**

- the number of tasks
