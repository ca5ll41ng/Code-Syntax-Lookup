---
id: "java-en-function-forkjoinpool-getpoolsize"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getPoolSize"
signature: "public int getPoolSize()"
title: "ForkJoinPool.getPoolSize"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getPoolSize

```java
public int getPoolSize()
```

Returns the number of worker threads that have started but not
 yet terminated.  The result returned by this method may differ
 from `getParallelism` when threads are created to
 maintain parallelism when others are cooperatively blocked.

**返回**

- the number of worker threads
