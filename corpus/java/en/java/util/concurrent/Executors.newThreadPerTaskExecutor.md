---
id: "java-en-function-executors-newthreadpertaskexecutor"
language: "java"
lang: "en"
category: "function"
name: "Executors.newThreadPerTaskExecutor"
signature: "public static ExecutorService newThreadPerTaskExecutor(ThreadFactory threadFactory)"
title: "Executors.newThreadPerTaskExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newThreadPerTaskExecutor

```java
public static ExecutorService newThreadPerTaskExecutor(ThreadFactory threadFactory)
```

Creates an Executor that starts a new Thread for each task.
 The number of threads created by the Executor is unbounded.

 

 Invoking `cancel` on a `Future Future` representing the pending result of a task submitted to
 the Executor will `interrupt() interrupt` the thread
 executing the task.

**参数**

- **threadFactory** — the factory to use when creating new threads

**返回**

- a new executor that creates a new Thread for each task

**异常**

- **NullPointerException** — if threadFactory is null

> *Since 21*
