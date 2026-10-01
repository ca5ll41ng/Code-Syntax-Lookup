---
id: "java-en-function-scheduledthreadpoolexecutor-schedulewithfixeddelay"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.scheduleWithFixedDelay"
signature: "public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)"
title: "ScheduledThreadPoolExecutor.scheduleWithFixedDelay"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.scheduleWithFixedDelay

```java
public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)
```

Submits a periodic action that becomes enabled for execution first after the
 given initial delay, and subsequently with the given delay
 between the termination of one execution and the commencement of
 the next.

 

The sequence of task executions continues indefinitely until
 one of the following exceptional completions occur:
 
 
- The task is `cancel explicitly cancelled`
 via the returned future.
 
- Method `shutdown` is called and the `getContinueExistingPeriodicTasksAfterShutdownPolicy policy on
 whether to continue after shutdown` is not set true, or method
 `shutdownNow` is called; also resulting in task
 cancellation.
 
- An execution of the task throws an exception.  In this case
 calling `get() get` on the returned future will throw
 `ExecutionException`, holding the exception as its cause.
 

 Subsequent executions are suppressed.  Subsequent calls to
 `isDone isDone` on the returned future will
 return `true`.

**异常**

- **RejectedExecutionException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
