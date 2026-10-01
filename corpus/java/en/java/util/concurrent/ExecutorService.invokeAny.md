---
id: "java-en-function-executorservice-invokeany"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.invokeAny"
signature: "<T> T invokeAny(Collection<? extends Callable<T>> tasks) throws InterruptedException, ExecutionException"
title: "ExecutorService.invokeAny"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.invokeAny

```java
<T> T invokeAny(Collection<? extends Callable<T>> tasks) throws InterruptedException, ExecutionException
```

Executes the given tasks, returning the result
 of one that has completed successfully (i.e., without throwing
 an exception), if any do. Upon normal or exceptional return,
 tasks that have not completed are cancelled.
 The results of this method are undefined if the given
 collection is modified while this operation is in progress.

**参数**

- **tasks** — the collection of tasks
- **the** — type of the values returned from the tasks

**返回**

- the result returned by one of the tasks

**异常**

- **InterruptedException** — if interrupted while waiting
- **NullPointerException** — if tasks or any element task subject to execution is `null`
- **IllegalArgumentException** — if tasks is empty
- **ExecutionException** — if no task successfully completes
- **RejectedExecutionException** — if tasks cannot be scheduled for execution
