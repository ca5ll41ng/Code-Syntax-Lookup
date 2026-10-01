---
id: "java-en-function-threadpoolexecutor-execute"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.execute"
signature: "public void execute(Runnable command)"
title: "ThreadPoolExecutor.execute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.execute

```java
public void execute(Runnable command)
```

Executes the given task sometime in the future.  The task
 may execute in a new thread or in an existing pooled thread.

 If the task cannot be submitted for execution, either because this
 executor has been shutdown or because its capacity has been reached,
 the task is handled by the current `RejectedExecutionHandler`.

**参数**

- **command** — the task to execute

**异常**

- **RejectedExecutionException** — at discretion of `RejectedExecutionHandler`, if the task cannot be accepted for execution
- **NullPointerException** — if `command` is null
