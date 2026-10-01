---
id: "java-en-function-scheduledthreadpoolexecutor-scheduledthreadpoolexecutor"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.ScheduledThreadPoolExecutor"
signature: "public ScheduledThreadPoolExecutor(int corePoolSize)"
title: "ScheduledThreadPoolExecutor.ScheduledThreadPoolExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.ScheduledThreadPoolExecutor

```java
public ScheduledThreadPoolExecutor(int corePoolSize)
```

Creates a new `ScheduledThreadPoolExecutor` with the
 given core pool size.

**参数**

- **corePoolSize** — the number of threads to keep in the pool, even if they are idle, unless `allowCoreThreadTimeOut` is set

**异常**

- **IllegalArgumentException** — if `corePoolSize < 0`
