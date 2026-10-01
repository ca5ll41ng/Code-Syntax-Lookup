---
id: "java-en-function-forkjoinpool-invokealluninterruptibly"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.invokeAllUninterruptibly"
signature: "public <T> List<Future<T>> invokeAllUninterruptibly(Collection<? extends Callable<T>> tasks)"
title: "ForkJoinPool.invokeAllUninterruptibly"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.invokeAllUninterruptibly

```java
public <T> List<Future<T>> invokeAllUninterruptibly(Collection<? extends Callable<T>> tasks)
```

Uninterrupible version of `invokeAll`. Executes the given
 tasks, returning a list of Futures holding their status and
 results when all complete, ignoring interrupts.  `isDone` is `true` for each element of the returned
 list.  Note that a completed task could have
 terminated either normally or by throwing an exception.  The
 results of this method are undefined if the given collection is
 modified while this operation is in progress.

 incompatible override of
 `invokeAll`.

**参数**

- **tasks** — the collection of tasks
- **the** — type of the values returned from the tasks

**返回**

- a list of Futures representing the tasks, in the same sequential order as produced by the iterator for the given task list, each of which has completed

**异常**

- **NullPointerException** — if tasks or any of its elements are `null`
- **RejectedExecutionException** — if any task cannot be scheduled for execution

> *Since 22*
