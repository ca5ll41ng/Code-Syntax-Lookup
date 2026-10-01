---
id: "java-en-function-forkjoinpool-submit"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.submit"
signature: "public <T> ForkJoinTask<T> submit(ForkJoinTask<T> task)"
title: "ForkJoinPool.submit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.submit

```java
public <T> ForkJoinTask<T> submit(ForkJoinTask<T> task)
```

Submits a ForkJoinTask for execution.

 This method is equivalent to `externalSubmit`
 when called from a thread that is not in this pool.

**参数**

- **task** — the task to submit
- **the** — type of the task's result

**返回**

- the task

**异常**

- **NullPointerException** — if the task is null
- **RejectedExecutionException** — if the task cannot be scheduled for execution
