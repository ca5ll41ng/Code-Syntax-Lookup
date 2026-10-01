---
id: "java-en-function-forkjoinpool-externalsubmit"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.externalSubmit"
signature: "public <T> ForkJoinTask<T> externalSubmit(ForkJoinTask<T> task)"
title: "ForkJoinPool.externalSubmit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.externalSubmit

```java
public <T> ForkJoinTask<T> externalSubmit(ForkJoinTask<T> task)
```

Submits the given task as if submitted from a non-`ForkJoinTask`
 client. The task is added to a scheduling queue for submissions to the
 pool even when called from a thread in the pool.

 This method is equivalent to `submit` when called
 from a thread that is not in this pool.

**参数**

- **task** — the task to submit
- **the** — type of the task's result

**返回**

- the task

**异常**

- **NullPointerException** — if the task is null
- **RejectedExecutionException** — if the task cannot be scheduled for execution

> *Since 20*
