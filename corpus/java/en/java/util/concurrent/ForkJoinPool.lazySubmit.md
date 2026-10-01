---
id: "java-en-function-forkjoinpool-lazysubmit"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.lazySubmit"
signature: "public <T> ForkJoinTask<T> lazySubmit(ForkJoinTask<T> task)"
title: "ForkJoinPool.lazySubmit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.lazySubmit

```java
public <T> ForkJoinTask<T> lazySubmit(ForkJoinTask<T> task)
```

Submits the given task without guaranteeing that it will
 eventually execute in the absence of available active threads.
 In some contexts, this method may reduce contention and
 overhead by relying on context-specific knowledge that existing
 threads (possibly including the calling thread if operating in
 this pool) will eventually be available to execute the task.

**参数**

- **task** — the task
- **the** — type of the task's result

**返回**

- the task

**异常**

- **NullPointerException** — if the task is null
- **RejectedExecutionException** — if the task cannot be scheduled for execution

> *Since 19*
