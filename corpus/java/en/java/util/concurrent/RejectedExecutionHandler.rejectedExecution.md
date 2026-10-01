---
id: "java-en-function-rejectedexecutionhandler-rejectedexecution"
language: "java"
lang: "en"
category: "function"
name: "RejectedExecutionHandler.rejectedExecution"
signature: "void rejectedExecution(Runnable r, ThreadPoolExecutor executor)"
title: "RejectedExecutionHandler.rejectedExecution"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/RejectedExecutionHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RejectedExecutionHandler.rejectedExecution

```java
void rejectedExecution(Runnable r, ThreadPoolExecutor executor)
```

Method that may be invoked by a `ThreadPoolExecutor` when
 `execute execute` cannot accept a
 task.  This may occur when no more threads or queue slots are
 available because their bounds would be exceeded, or upon
 shutdown of the Executor.

 

In the absence of other alternatives, the method may throw
 an unchecked `RejectedExecutionException`, which will be
 propagated to the caller of `execute`.

**参数**

- **r** — the runnable task requested to be executed
- **executor** — the executor attempting to execute this task

**异常**

- **RejectedExecutionException** — if there is no remedy
