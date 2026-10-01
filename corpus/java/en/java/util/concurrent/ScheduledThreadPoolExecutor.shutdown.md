---
id: "java-en-function-scheduledthreadpoolexecutor-shutdown"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.shutdown"
signature: "public void shutdown()"
title: "ScheduledThreadPoolExecutor.shutdown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.shutdown

```java
public void shutdown()
```

Initiates an orderly shutdown in which previously submitted
 tasks are executed, but no new tasks will be accepted.
 Invocation has no additional effect if already shut down.

 

This method does not wait for previously submitted tasks to
 complete execution.  Use `awaitTermination awaitTermination`
 to do that.

 

If the `ExecuteExistingDelayedTasksAfterShutdownPolicy`
 has been set `false`, existing delayed tasks whose delays
 have not yet elapsed are cancelled.  And unless the `ContinueExistingPeriodicTasksAfterShutdownPolicy` has been set
 `true`, future executions of existing periodic tasks will
 be cancelled.
