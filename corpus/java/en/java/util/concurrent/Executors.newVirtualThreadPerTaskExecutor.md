---
id: "java-en-function-executors-newvirtualthreadpertaskexecutor"
language: "java"
lang: "en"
category: "function"
name: "Executors.newVirtualThreadPerTaskExecutor"
signature: "public static ExecutorService newVirtualThreadPerTaskExecutor()"
title: "Executors.newVirtualThreadPerTaskExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newVirtualThreadPerTaskExecutor

```java
public static ExecutorService newVirtualThreadPerTaskExecutor()
```

Creates an Executor that starts a new virtual Thread for each task.
 The number of threads created by the Executor is unbounded.

 

 This method is equivalent to invoking
 `newThreadPerTaskExecutor` with a thread factory
 that creates virtual threads.

**返回**

- a new executor that creates a new virtual Thread for each task

> *Since 21*
