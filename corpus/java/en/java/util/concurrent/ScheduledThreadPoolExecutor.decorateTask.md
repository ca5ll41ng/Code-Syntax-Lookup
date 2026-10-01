---
id: "java-en-function-scheduledthreadpoolexecutor-decoratetask"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.decorateTask"
signature: "protected <V> RunnableScheduledFuture<V> decorateTask( Runnable runnable, RunnableScheduledFuture<V> task)"
title: "ScheduledThreadPoolExecutor.decorateTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.decorateTask

```java
protected <V> RunnableScheduledFuture<V> decorateTask( Runnable runnable, RunnableScheduledFuture<V> task)
```

Modifies or replaces the task used to execute a runnable.
 This method can be used to override the concrete
 class used for managing internal tasks.
 The default implementation simply returns the given task.

**参数**

- **runnable** — the submitted Runnable
- **task** — the task created to execute the runnable
- **the** — type of the task's result

**返回**

- a task that can execute the runnable

> *Since 1.6*
