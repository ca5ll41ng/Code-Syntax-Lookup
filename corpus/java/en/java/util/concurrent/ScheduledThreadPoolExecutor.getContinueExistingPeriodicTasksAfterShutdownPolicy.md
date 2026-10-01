---
id: "java-en-function-scheduledthreadpoolexecutor-getcontinueexistingperiodictasksaftershutdownpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.getContinueExistingPeriodicTasksAfterShutdownPolicy"
signature: "public boolean getContinueExistingPeriodicTasksAfterShutdownPolicy()"
title: "ScheduledThreadPoolExecutor.getContinueExistingPeriodicTasksAfterShutdownPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.getContinueExistingPeriodicTasksAfterShutdownPolicy

```java
public boolean getContinueExistingPeriodicTasksAfterShutdownPolicy()
```

Gets the policy on whether to continue executing existing
 periodic tasks even when this executor has been `shutdown`.
 In this case, executions will continue until `shutdownNow`
 or the policy is set to `false` when already shutdown.
 This value is by default `false`.

**返回**

- `true` if will continue after shutdown

**参见**

- #setContinueExistingPeriodicTasksAfterShutdownPolicy
