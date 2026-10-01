---
id: "java-en-function-forkjointask-invokeall"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.invokeAll"
signature: "public static void invokeAll(ForkJoinTask<?> t1, ForkJoinTask<?> t2)"
title: "ForkJoinTask.invokeAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.invokeAll

```java
public static void invokeAll(ForkJoinTask<?> t1, ForkJoinTask<?> t2)
```

Forks the given tasks, returning when `isDone` holds for
 each task or an (unchecked) exception is encountered, in which
 case the exception is rethrown. If more than one task
 encounters an exception, then this method throws any one of
 these exceptions. If any task encounters an exception, the
 other may be cancelled. However, the execution status of
 individual tasks is not guaranteed upon exceptional return. The
 status of each task may be obtained using `getException` and related methods to check if they have been
 cancelled, completed normally or exceptionally, or left
 unprocessed.

**参数**

- **t1** — the first task
- **t2** — the second task

**异常**

- **NullPointerException** — if any task is null
