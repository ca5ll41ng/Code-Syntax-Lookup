---
id: "java-en-function-executor-execute"
language: "java"
lang: "en"
category: "function"
name: "Executor.execute"
signature: "void execute(Runnable command)"
title: "Executor.execute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executor.execute

```java
void execute(Runnable command)
```

Executes the given command at some time in the future.  The command
 may execute in a new thread, in a pooled thread, or in the calling
 thread, at the discretion of the `Executor` implementation.

**参数**

- **command** — the runnable task

**异常**

- **RejectedExecutionException** — if this task cannot be accepted for execution
- **NullPointerException** — if command is null
