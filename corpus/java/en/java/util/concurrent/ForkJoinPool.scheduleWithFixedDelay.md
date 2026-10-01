---
id: "java-en-function-forkjoinpool-schedulewithfixeddelay"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.scheduleWithFixedDelay"
signature: "public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)"
title: "ForkJoinPool.scheduleWithFixedDelay"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.scheduleWithFixedDelay

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
 
- Method `shutdownNow` is called
 
- Method `shutdown` is called and the pool is
 otherwise quiescent, in which case existing executions continue
 but subsequent executions do not.
 
- An execution or the task encounters resource exhaustion.
 
- An execution of the task throws an exception.  In this case
 calling `get() get` on the returned future will throw
 `ExecutionException`, holding the exception as its cause.
 

 Subsequent executions are suppressed.  Subsequent calls to
 `isDone isDone` on the returned future will
 return `true`.

**参数**

- **command** — the task to execute
- **initialDelay** — the time to delay first execution
- **delay** — the delay between the termination of one execution and the commencement of the next
- **unit** — the time unit of the initialDelay and delay parameters

**返回**

- a ForkJoinTask implementing the ScheduledFuture interface.  The future's `get` method will never return normally, and will throw an exception upon task cancellation or abnormal termination of a task execution.

**异常**

- **RejectedExecutionException** — if the pool is shutdown or submission encounters resource exhaustion.
- **NullPointerException** — if command or unit is null
- **IllegalArgumentException** — if delay less than or equal to zero

> *Since 25*
