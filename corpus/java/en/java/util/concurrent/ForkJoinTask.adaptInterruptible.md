---
id: "java-en-function-forkjointask-adaptinterruptible"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.adaptInterruptible"
signature: "public static <T> ForkJoinTask<T> adaptInterruptible(Callable<? extends T> callable)"
title: "ForkJoinTask.adaptInterruptible"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.adaptInterruptible

```java
public static <T> ForkJoinTask<T> adaptInterruptible(Callable<? extends T> callable)
```

Returns a new `ForkJoinTask` that performs the `call`
 method of the given `Callable` as its action, and returns
 its result upon `join`, translating any checked exceptions
 encountered into `RuntimeException`.  Additionally,
 invocations of `cancel` with `mayInterruptIfRunning
 true` will attempt to interrupt the thread performing the task.

**参数**

- **callable** — the callable action
- **the** — type of the callable's result

**返回**

- the task

> *Since 19*
