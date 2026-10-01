---
id: "java-en-function-executors-newfixedthreadpool"
language: "java"
lang: "en"
category: "function"
name: "Executors.newFixedThreadPool"
signature: "public static ExecutorService newFixedThreadPool(int nThreads)"
title: "Executors.newFixedThreadPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newFixedThreadPool

```java
public static ExecutorService newFixedThreadPool(int nThreads)
```

Creates a thread pool that reuses a fixed number of threads
 operating off a shared unbounded queue.  At any point, at most
 `nThreads` threads will be active processing tasks.
 If additional tasks are submitted when all threads are active,
 they will wait in the queue until a thread is available.
 If any thread terminates due to a failure during execution
 prior to shutdown, a new one will take its place if needed to
 execute subsequent tasks.  The threads in the pool will exist
 until it is explicitly `shutdown shutdown`.

**参数**

- **nThreads** — the number of threads in the pool

**返回**

- the newly created thread pool

**异常**

- **IllegalArgumentException** — if `nThreads <= 0`
