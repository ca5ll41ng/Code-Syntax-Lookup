---
id: "java-en-function-scheduledthreadpoolexecutor-scheduleatfixedrate"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.scheduleAtFixedRate"
signature: "public ScheduledFuture<?> scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)"
title: "ScheduledThreadPoolExecutor.scheduleAtFixedRate"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.scheduleAtFixedRate

```java
public ScheduledFuture<?> scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)
```

Submits a periodic action that becomes enabled for execution first after the
 given initial delay, and subsequently with the given period;
 that is, executions will commence after
 `initialDelay`, then `initialDelay + period`, then
 `initialDelay + 2 * period`, and so on.

 

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

 

If any execution of this task takes longer than its period, then
 subsequent executions may start late, but will not concurrently
 execute.

**异常**

- **RejectedExecutionException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
