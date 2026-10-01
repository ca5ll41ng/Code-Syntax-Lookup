---
id: "java-en-function-forkjoinpool-execute"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.execute"
signature: "public void execute(ForkJoinTask<?> task)"
title: "ForkJoinPool.execute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.execute

```java
public void execute(ForkJoinTask<?> task)
```

Arranges for (asynchronous) execution of the given task.

**参数**

- **task** — the task

**异常**

- **NullPointerException** — if the task is null
- **RejectedExecutionException** — if the task cannot be scheduled for execution
