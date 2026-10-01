---
id: "java-en-function-forkjoinpool-getqueuedtaskcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getQueuedTaskCount"
signature: "public long getQueuedTaskCount()"
title: "ForkJoinPool.getQueuedTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getQueuedTaskCount

```java
public long getQueuedTaskCount()
```

Returns an estimate of the total number of tasks currently held
 in queues by worker threads (but not including tasks submitted
 to the pool that have not begun executing). This value is only
 an approximation, obtained by iterating across all threads in
 the pool. This method may be useful for tuning task
 granularities.The returned count does not include scheduled
 tasks that are not yet ready to execute, which are reported
 separately by method `getDelayedTaskCount`.

**返回**

- the number of queued tasks

**参见**

- ForkJoinWorkerThread#getQueuedTaskCount()
