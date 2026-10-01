---
id: "java-en-function-scheduledthreadpoolexecutor-setcontinueexistingperiodictasksaftershutdownpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.setContinueExistingPeriodicTasksAfterShutdownPolicy"
signature: "public void setContinueExistingPeriodicTasksAfterShutdownPolicy(boolean value)"
title: "ScheduledThreadPoolExecutor.setContinueExistingPeriodicTasksAfterShutdownPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.setContinueExistingPeriodicTasksAfterShutdownPolicy

```java
public void setContinueExistingPeriodicTasksAfterShutdownPolicy(boolean value)
```

Sets the policy on whether to continue executing existing
 periodic tasks even when this executor has been `shutdown`.
 In this case, executions will continue until `shutdownNow`
 or the policy is set to `false` when already shutdown.
 This value is by default `false`.

**参数**

- **value** — if `true`, continue after shutdown, else don't

**参见**

- #getContinueExistingPeriodicTasksAfterShutdownPolicy
