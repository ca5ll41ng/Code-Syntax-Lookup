---
id: "java-en-function-threadpoolexecutor-shutdownnow"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.shutdownNow"
signature: "public List<Runnable> shutdownNow()"
title: "ThreadPoolExecutor.shutdownNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.shutdownNow

```java
public List<Runnable> shutdownNow()
```

Attempts to stop all actively executing tasks, halts the
 processing of waiting tasks, and returns a list of the tasks
 that were awaiting execution. These tasks are drained (removed)
 from the task queue upon return from this method.

 

This method does not wait for actively executing tasks to
 terminate.  Use `awaitTermination awaitTermination` to
 do that.

 

There are no guarantees beyond best-effort attempts to stop
 processing actively executing tasks.  This implementation
 interrupts tasks via `interrupt`; any task that
 fails to respond to interrupts may never terminate.
