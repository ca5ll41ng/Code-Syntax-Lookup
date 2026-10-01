---
id: "java-en-function-executorservice-shutdownnow"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.shutdownNow"
signature: "List<Runnable> shutdownNow()"
title: "ExecutorService.shutdownNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.shutdownNow

```java
List<Runnable> shutdownNow()
```

Attempts to stop all actively executing tasks, halts the
 processing of waiting tasks, and returns a list of the tasks
 that were awaiting execution.

 

This method does not wait for actively executing tasks to
 terminate.  Use `awaitTermination awaitTermination` to
 do that.

 

There are no guarantees beyond best-effort attempts to stop
 processing actively executing tasks.  For example, typical
 implementations will cancel via `interrupt`, so any
 task that fails to respond to interrupts may never terminate.

**返回**

- list of tasks that never commenced execution
