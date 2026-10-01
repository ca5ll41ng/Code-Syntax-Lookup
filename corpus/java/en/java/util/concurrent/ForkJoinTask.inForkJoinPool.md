---
id: "java-en-function-forkjointask-inforkjoinpool"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.inForkJoinPool"
signature: "public static boolean inForkJoinPool()"
title: "ForkJoinTask.inForkJoinPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.inForkJoinPool

```java
public static boolean inForkJoinPool()
```

Returns `true` if the current thread is a `ForkJoinWorkerThread` executing as a ForkJoinPool computation.

**返回**

- `true` if the current thread is a `ForkJoinWorkerThread` executing as a ForkJoinPool computation, or `false` otherwise
