---
id: "java-en-function-forkjoinpool-getactivethreadcount"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getActiveThreadCount"
signature: "public int getActiveThreadCount()"
title: "ForkJoinPool.getActiveThreadCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getActiveThreadCount

```java
public int getActiveThreadCount()
```

Returns an estimate of the number of threads that are currently
 stealing or executing tasks. This method may overestimate the
 number of active threads.

**返回**

- the number of active threads
