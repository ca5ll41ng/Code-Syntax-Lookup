---
id: "java-en-function-scheduledexecutorservice-schedulewithfixeddelay"
language: "java"
lang: "en"
category: "function"
name: "ScheduledExecutorService.scheduleWithFixedDelay"
signature: "public ScheduledFuture<?> scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)"
title: "ScheduledExecutorService.scheduleWithFixedDelay"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledExecutorService.scheduleWithFixedDelay

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
 
- The executor terminates, also resulting in task cancellation.
 
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

- a ScheduledFuture representing pending completion of the series of repeated tasks.  The future's `get` method will never return normally, and will throw an exception upon task cancellation or abnormal termination of a task execution.

**异常**

- **RejectedExecutionException** — if the task cannot be scheduled for execution
- **NullPointerException** — if command or unit is null
- **IllegalArgumentException** — if delay less than or equal to zero
