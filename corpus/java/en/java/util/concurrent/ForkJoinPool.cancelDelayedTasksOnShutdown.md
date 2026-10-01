---
id: "java-en-function-forkjoinpool-canceldelayedtasksonshutdown"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.cancelDelayedTasksOnShutdown"
signature: "public void cancelDelayedTasksOnShutdown()"
title: "ForkJoinPool.cancelDelayedTasksOnShutdown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.cancelDelayedTasksOnShutdown

```java
public void cancelDelayedTasksOnShutdown()
```

Arranges that scheduled tasks that are not executing and have
 not already been enabled for execution will not be executed and
 will be cancelled upon `shutdown` (unless this pool is
 the `commonPool` which never shuts down). This method
 may be invoked either before `shutdown` to take effect
 upon the next call, or afterwards to cancel such tasks, which
 may then allow termination. Note that subsequent executions of
 periodic tasks are always disabled upon shutdown, so this
 method applies meaningfully only to non-periodic tasks.

> *Since 25*
