---
id: "java-en-function-scheduledthreadpoolexecutor-setexecuteexistingdelayedtasksaftershutdownpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.setExecuteExistingDelayedTasksAfterShutdownPolicy"
signature: "public void setExecuteExistingDelayedTasksAfterShutdownPolicy(boolean value)"
title: "ScheduledThreadPoolExecutor.setExecuteExistingDelayedTasksAfterShutdownPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.setExecuteExistingDelayedTasksAfterShutdownPolicy

```java
public void setExecuteExistingDelayedTasksAfterShutdownPolicy(boolean value)
```

Sets the policy on whether to execute existing delayed
 tasks even when this executor has been `shutdown`.
 In this case, these tasks will only terminate upon
 `shutdownNow`, or after setting the policy to
 `false` when already shutdown.
 This value is by default `true`.

**参数**

- **value** — if `true`, execute after shutdown, else don't

**参见**

- #getExecuteExistingDelayedTasksAfterShutdownPolicy
