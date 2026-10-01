---
id: "java-en-function-forkjoinpool-getrunningthreadcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getRunningThreadCount"
signature: "public int getRunningThreadCount()"
title: "ForkJoinPool.getRunningThreadCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getRunningThreadCount

```java
public int getRunningThreadCount()
```

Returns an estimate of the number of worker threads that are
 not blocked waiting to join tasks or for other managed
 synchronization. This method may overestimate the
 number of running threads.

**返回**

- the number of worker threads
