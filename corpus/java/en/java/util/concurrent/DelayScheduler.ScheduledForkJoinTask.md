---
id: "java-en-function-delayscheduler-scheduledforkjointask"
language: "java"
lang: "en"
category: "function"
name: "DelayScheduler.ScheduledForkJoinTask"
signature: "public ScheduledForkJoinTask(long delay, long nextDelay, boolean isImmediate, Runnable runnable, Callable<T> callable, ForkJoinPool pool)"
title: "DelayScheduler.ScheduledForkJoinTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/DelayScheduler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelayScheduler.ScheduledForkJoinTask

```java
public ScheduledForkJoinTask(long delay, long nextDelay, boolean isImmediate, Runnable runnable, Callable<T> callable, ForkJoinPool pool)
```

Creates a new ScheduledForkJoinTask

**参数**

- **delay** — initial delay, in nanoseconds
- **nextDelay** — 0 for one-shot, negative for fixed delay, positive for fixed rate, in nanoseconds
- **isImmediate** — if action is to be performed by scheduler versus submitting to a WorkQueue
- **runnable** — action (null if implementing callable version)
- **callable** — function (null if implementing runnable versions)
- **pool** — the pool for resubmissions and cancellations (disabled if null)
