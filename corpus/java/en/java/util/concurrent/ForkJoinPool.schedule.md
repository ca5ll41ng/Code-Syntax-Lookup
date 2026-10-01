---
id: "java-en-function-forkjoinpool-schedule"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.schedule"
signature: "public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)"
title: "ForkJoinPool.schedule"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.schedule

```java
public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)
```

Submits a one-shot task that becomes enabled for execution after the given
 delay.  At that point it will execute unless explicitly
 cancelled, or fail to execute (eventually reporting
 cancellation) when encountering resource exhaustion, or the
 pool is `shutdownNow`, or is `shutdown` when
 otherwise quiescent and `cancelDelayedTasksOnShutdown`
 is in effect.

**参数**

- **command** — the task to execute
- **delay** — the time from now to delay execution
- **unit** — the time unit of the delay parameter

**返回**

- a ForkJoinTask implementing the ScheduledFuture interface, whose `get()` method will return `null` upon normal completion.

**异常**

- **RejectedExecutionException** — if the pool is shutdown or submission encounters resource exhaustion.
- **NullPointerException** — if command or unit is null

> *Since 25*
