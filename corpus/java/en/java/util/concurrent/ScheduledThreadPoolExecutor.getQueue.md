---
id: "java-en-function-scheduledthreadpoolexecutor-getqueue"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.getQueue"
signature: "public BlockingQueue<Runnable> getQueue()"
title: "ScheduledThreadPoolExecutor.getQueue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.getQueue

```java
public BlockingQueue<Runnable> getQueue()
```

Returns the task queue used by this executor.  Access to the
 task queue is intended primarily for debugging and monitoring.
 This queue may be in active use.  Retrieving the task queue
 does not prevent queued tasks from executing.

 

Each element of this queue is a `ScheduledFuture`.
 For tasks submitted via one of the `schedule` methods, the
 element will be identical to the returned `ScheduledFuture`.
 For tasks submitted using `execute execute`, the element
 will be a zero-delay `ScheduledFuture`.

 

Iteration over this queue is not guaranteed to traverse
 tasks in the order in which they will execute.

**返回**

- the task queue
