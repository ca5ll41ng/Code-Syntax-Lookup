---
id: "java-en-function-forkjoinpool-invoke"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.invoke"
signature: "public <T> T invoke(ForkJoinTask<T> task)"
title: "ForkJoinPool.invoke"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.invoke

```java
public <T> T invoke(ForkJoinTask<T> task)
```

Performs the given task, returning its result upon completion.
 If the computation encounters an unchecked Exception or Error,
 it is rethrown as the outcome of this invocation.  Rethrown
 exceptions behave in the same way as regular exceptions, but,
 when possible, contain stack traces (as displayed for example
 using `ex.printStackTrace()`) of both the current thread
 as well as the thread actually encountering the exception;
 minimally only the latter.

**参数**

- **task** — the task
- **the** — type of the task's result

**返回**

- the task's result

**异常**

- **NullPointerException** — if the task is null
- **RejectedExecutionException** — if the task cannot be scheduled for execution
