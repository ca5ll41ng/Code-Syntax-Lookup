---
id: "java-en-function-scheduledexecutorservice-schedule"
language: "java"
lang: "en"
category: "function"
name: "ScheduledExecutorService.schedule"
signature: "public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)"
title: "ScheduledExecutorService.schedule"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledExecutorService.schedule

```java
public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)
```

Submits a one-shot task that becomes enabled for execution after the given delay.

**参数**

- **command** — the task to execute
- **delay** — the time from now to delay execution
- **unit** — the time unit of the delay parameter

**返回**

- a ScheduledFuture representing pending completion of the task and whose `get()` method will return `null` upon completion

**异常**

- **RejectedExecutionException** — if the task cannot be scheduled for execution
- **NullPointerException** — if command or unit is null
