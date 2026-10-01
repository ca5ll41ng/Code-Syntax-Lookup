---
id: "java-en-function-forkjoinworkerthread-getpoolindex"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinWorkerThread.getPoolIndex"
signature: "public int getPoolIndex()"
title: "ForkJoinWorkerThread.getPoolIndex"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinWorkerThread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThread.getPoolIndex

```java
public int getPoolIndex()
```

Returns the unique index number of this thread in its pool.
 The returned value ranges from zero to the maximum number of
 threads (minus one) that may exist in the pool, and does not
 change during the lifetime of the thread.  This method may be
 useful for applications that track status or collect results
 per-worker-thread rather than per-task.

**返回**

- the index number
