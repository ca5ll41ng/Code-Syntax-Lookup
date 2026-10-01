---
id: "java-en-function-forkjoinpool-shutdownnow"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.shutdownNow"
signature: "public List<Runnable> shutdownNow()"
title: "ForkJoinPool.shutdownNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.shutdownNow

```java
public List<Runnable> shutdownNow()
```

Possibly attempts to cancel and/or stop all tasks, and reject
 all subsequently submitted tasks.  Invocation has no effect on
 execution state if this is the `commonPool`, and no
 additional effect if already shut down. Otherwise, tasks that
 are in the process of being submitted or executed concurrently
 during the course of this method may or may not be
 rejected. This method cancels both existing and unexecuted
 tasks, in order to permit termination in the presence of task
 dependencies. So the method always returns an empty list
 (unlike the case for some other Executors).

**返回**

- an empty list
