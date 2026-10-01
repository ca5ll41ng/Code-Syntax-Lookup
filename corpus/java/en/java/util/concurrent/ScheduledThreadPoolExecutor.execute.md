---
id: "java-en-function-scheduledthreadpoolexecutor-execute"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.execute"
signature: "public void execute(Runnable command)"
title: "ScheduledThreadPoolExecutor.execute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.execute

```java
public void execute(Runnable command)
```

Executes `command` with zero required delay.
 This has effect equivalent to
 `schedule`.
 Note that inspections of the queue and of the list returned by
 `shutdownNow` will access the zero-delayed
 `ScheduledFuture`, not the `command` itself.

 

A consequence of the use of `ScheduledFuture` objects is
 that `afterExecute afterExecute` is always
 called with a null second `Throwable` argument, even if the
 `command` terminated abruptly.  Instead, the `Throwable`
 thrown by such a task can be obtained via `get`.

**异常**

- **RejectedExecutionException** — at discretion of `RejectedExecutionHandler`, if the task cannot be accepted for execution because the executor has been shut down
- **NullPointerException** — {@inheritDoc}
