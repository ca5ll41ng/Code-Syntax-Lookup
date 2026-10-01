---
id: "java-en-function-completionservice-submit"
language: "java"
lang: "en"
category: "function"
name: "CompletionService.submit"
signature: "Future<V> submit(Callable<V> task)"
title: "CompletionService.submit"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionService.submit

```java
Future<V> submit(Callable<V> task)
```

Submits a value-returning task for execution and returns a Future
 representing the pending results of the task.  Upon completion,
 this task may be taken or polled.

**参数**

- **task** — the task to submit

**返回**

- a Future representing pending completion of the task

**异常**

- **RejectedExecutionException** — if the task cannot be scheduled for execution
- **NullPointerException** — if the task is null
