---
id: "java-en-function-executors-newsinglethreadscheduledexecutor"
language: "java"
lang: "en"
category: "function"
name: "Executors.newSingleThreadScheduledExecutor"
signature: "public static ScheduledExecutorService newSingleThreadScheduledExecutor()"
title: "Executors.newSingleThreadScheduledExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newSingleThreadScheduledExecutor

```java
public static ScheduledExecutorService newSingleThreadScheduledExecutor()
```

Creates a single-threaded executor that can schedule commands
 to run after a given delay, or to execute periodically.
 (Note however that if this single
 thread terminates due to a failure during execution prior to
 shutdown, a new one will take its place if needed to execute
 subsequent tasks.)  Tasks are guaranteed to execute
 sequentially, and no more than one task will be active at any
 given time. Unlike the otherwise equivalent
 `newScheduledThreadPool(1)` the returned executor is
 guaranteed not to be reconfigurable to use additional threads.

**返回**

- the newly created scheduled executor
