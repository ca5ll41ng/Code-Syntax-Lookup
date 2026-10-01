---
id: "java-en-function-executors-newsinglethreadexecutor"
language: "java"
lang: "en"
category: "function"
name: "Executors.newSingleThreadExecutor"
signature: "public static ExecutorService newSingleThreadExecutor()"
title: "Executors.newSingleThreadExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newSingleThreadExecutor

```java
public static ExecutorService newSingleThreadExecutor()
```

Creates an Executor that uses a single worker thread operating
 off an unbounded queue. (Note however that if this single
 thread terminates due to a failure during execution prior to
 shutdown, a new one will take its place if needed to execute
 subsequent tasks.)  Tasks are guaranteed to execute
 sequentially, and no more than one task will be active at any
 given time. Unlike the otherwise equivalent
 `newFixedThreadPool(1)` the returned executor is
 guaranteed not to be reconfigurable to use additional threads.

**返回**

- the newly created single-threaded Executor
