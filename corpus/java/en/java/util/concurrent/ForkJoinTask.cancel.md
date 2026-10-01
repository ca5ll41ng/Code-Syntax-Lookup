---
id: "java-en-function-forkjointask-cancel"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.cancel"
signature: "public boolean cancel(boolean mayInterruptIfRunning)"
title: "ForkJoinTask.cancel"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.cancel

```java
public boolean cancel(boolean mayInterruptIfRunning)
```

Attempts to cancel execution of this task. This attempt will
 fail if the task has already completed or could not be
 cancelled for some other reason. If successful, and this task
 has not started when `cancel` is called, execution of
 this task is suppressed. After this method returns
 successfully, unless there is an intervening call to `reinitialize`, subsequent calls to `isCancelled`,
 `isDone`, and `cancel` will return `true`
 and calls to `join` and related methods will result in
 `CancellationException`.

 

This method may be overridden in subclasses, but if so, must
 still ensure that these properties hold. In particular, the
 `cancel` method itself must not throw exceptions.

 

This method is designed to be invoked by other
 tasks. To terminate the current task, you can just return or
 throw an unchecked exception from its computation method, or
 invoke `completeExceptionally`.

**参数**

- **mayInterruptIfRunning** — this value has no effect in the default implementation because interrupts are not used to control cancellation.

**返回**

- `true` if this task is now cancelled
