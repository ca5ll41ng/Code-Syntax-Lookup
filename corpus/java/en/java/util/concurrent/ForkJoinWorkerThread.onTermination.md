---
id: "java-en-function-forkjoinworkerthread-ontermination"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinWorkerThread.onTermination"
signature: "protected void onTermination(Throwable exception)"
title: "ForkJoinWorkerThread.onTermination"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinWorkerThread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThread.onTermination

```java
protected void onTermination(Throwable exception)
```

Performs cleanup associated with termination of this worker
 thread.  If you override this method, you must invoke
 `super.onTermination` at the end of the overridden method.

**参数**

- **exception** — the exception causing this thread to abort due to an unrecoverable error, or `null` if completed normally
