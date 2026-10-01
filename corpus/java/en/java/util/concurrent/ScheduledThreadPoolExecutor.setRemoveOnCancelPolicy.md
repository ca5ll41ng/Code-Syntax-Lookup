---
id: "java-en-function-scheduledthreadpoolexecutor-setremoveoncancelpolicy"
language: "java"
lang: "en"
category: "function"
name: "ScheduledThreadPoolExecutor.setRemoveOnCancelPolicy"
signature: "public void setRemoveOnCancelPolicy(boolean value)"
title: "ScheduledThreadPoolExecutor.setRemoveOnCancelPolicy"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ScheduledThreadPoolExecutor.setRemoveOnCancelPolicy

```java
public void setRemoveOnCancelPolicy(boolean value)
```

Sets the policy on whether cancelled tasks should be immediately
 removed from the work queue at time of cancellation.  This value is
 by default `false`.

**参数**

- **value** — if `true`, remove on cancellation, else don't

**参见**

- #getRemoveOnCancelPolicy

> *Since 1.7*
