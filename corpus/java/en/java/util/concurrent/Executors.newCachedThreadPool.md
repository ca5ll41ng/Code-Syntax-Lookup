---
id: "java-en-function-executors-newcachedthreadpool"
language: "java"
lang: "en"
category: "function"
name: "Executors.newCachedThreadPool"
signature: "public static ExecutorService newCachedThreadPool()"
title: "Executors.newCachedThreadPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newCachedThreadPool

```java
public static ExecutorService newCachedThreadPool()
```

Creates a thread pool that creates new threads as needed, but
 will reuse previously constructed threads when they are
 available.  These pools will typically improve the performance
 of programs that execute many short-lived asynchronous tasks.
 Calls to `execute` will reuse previously constructed
 threads if available. If no existing thread is available, a new
 thread will be created and added to the pool. Threads that have
 not been used for sixty seconds are terminated and removed from
 the cache. Thus, a pool that remains idle for long enough will
 not consume any resources. Note that pools with similar
 properties but different details (for example, timeout parameters)
 may be created using `ThreadPoolExecutor` constructors.

**返回**

- the newly created thread pool
