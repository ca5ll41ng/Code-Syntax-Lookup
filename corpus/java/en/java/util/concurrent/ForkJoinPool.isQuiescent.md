---
id: "java-en-function-forkjoinpool-isquiescent"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.isQuiescent"
signature: "public boolean isQuiescent()"
title: "ForkJoinPool.isQuiescent"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.isQuiescent

```java
public boolean isQuiescent()
```

Returns `true` if all worker threads are currently idle.
 An idle worker is one that cannot obtain a task to execute
 because none are available to steal from other threads, and
 there are no pending submissions to the pool. This method is
 conservative; it might not return `true` immediately upon
 idleness of all threads, but will eventually become true if
 threads remain inactive.

**返回**

- `true` if all threads are currently idle
