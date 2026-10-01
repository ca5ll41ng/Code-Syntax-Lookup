---
id: "java-en-function-scheduledthreadpoolexecutor-getremoveoncancelpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.getRemoveOnCancelPolicy"
signature: "public boolean getRemoveOnCancelPolicy()"
title: "ScheduledThreadPoolExecutor.getRemoveOnCancelPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.getRemoveOnCancelPolicy

```java
public boolean getRemoveOnCancelPolicy()
```

Gets the policy on whether cancelled tasks should be immediately
 removed from the work queue at time of cancellation.  This value is
 by default `false`.

**返回**

- `true` if cancelled tasks are immediately removed from the queue

**参见**

- #setRemoveOnCancelPolicy

> *Since 1.7*
