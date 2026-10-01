---
id: "java-en-function-threadpoolexecutor-getqueue"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.getQueue"
signature: "public BlockingQueue<Runnable> getQueue()"
title: "ThreadPoolExecutor.getQueue"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.getQueue

```java
public BlockingQueue<Runnable> getQueue()
```

Returns the task queue used by this executor. Access to the
 task queue is intended primarily for debugging and monitoring.
 This queue may be in active use.  Retrieving the task queue
 does not prevent queued tasks from executing.

**返回**

- the task queue
