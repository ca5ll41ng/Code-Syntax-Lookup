---
id: "java-en-function-future-cancel"
language: "java"
lang: "en"
category: "function"
name: "Future.cancel"
signature: "boolean cancel(boolean mayInterruptIfRunning)"
title: "Future.cancel"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.cancel

```java
boolean cancel(boolean mayInterruptIfRunning)
```

Attempts to cancel execution of this task.  This method has no
 effect if the task is already completed or cancelled, or could
 not be cancelled for some other reason.  Otherwise, if this
 task has not started when `cancel` is called, this task
 should never run.  If the task has already started, then the
 `mayInterruptIfRunning` parameter determines whether the
 thread executing this task (when known by the implementation)
 is interrupted in an attempt to stop the task.

 

The return value from this method does not necessarily
 indicate whether the task is now cancelled; use `isCancelled`.

**参数**

- **mayInterruptIfRunning** — `true` if the thread executing this task should be interrupted (if the thread is known to the implementation); otherwise, in-progress tasks are allowed to complete

**返回**

- `false` if the task could not be cancelled, typically because it has already completed; `true` otherwise. If two or more threads cause a task to be cancelled, then at least one of them returns `true`. Implementations may provide stronger guarantees.
