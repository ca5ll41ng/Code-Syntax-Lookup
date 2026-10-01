---
id: "java-en-function-scheduledthreadpoolexecutor-schedule"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.schedule"
signature: "public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)"
title: "ScheduledThreadPoolExecutor.schedule"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.schedule

```java
public ScheduledFuture<?> schedule(Runnable command, long delay, TimeUnit unit)
```

**异常**

- **RejectedExecutionException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
