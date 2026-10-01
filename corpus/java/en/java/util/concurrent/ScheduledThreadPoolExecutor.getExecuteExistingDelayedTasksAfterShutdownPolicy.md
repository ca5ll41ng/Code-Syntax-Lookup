---
id: "java-en-function-scheduledthreadpoolexecutor-getexecuteexistingdelayedtasksaftershutdownpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.getExecuteExistingDelayedTasksAfterShutdownPolicy"
signature: "public boolean getExecuteExistingDelayedTasksAfterShutdownPolicy()"
title: "ScheduledThreadPoolExecutor.getExecuteExistingDelayedTasksAfterShutdownPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.getExecuteExistingDelayedTasksAfterShutdownPolicy

```java
public boolean getExecuteExistingDelayedTasksAfterShutdownPolicy()
```

Gets the policy on whether to execute existing delayed
 tasks even when this executor has been `shutdown`.
 In this case, these tasks will only terminate upon
 `shutdownNow`, or after setting the policy to
 `false` when already shutdown.
 This value is by default `true`.

**返回**

- `true` if will execute after shutdown

**参见**

- #setExecuteExistingDelayedTasksAfterShutdownPolicy
