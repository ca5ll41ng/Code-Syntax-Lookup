---
id: "java-en-function-threadpoolexecutor-remove"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.remove"
signature: "public boolean remove(Runnable task)"
title: "ThreadPoolExecutor.remove"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.remove

```java
public boolean remove(Runnable task)
```

Removes this task from the executor's internal queue if it is
 present, thus causing it not to be run if it has not already
 started.

 

This method may be useful as one part of a cancellation
 scheme.  It may fail to remove tasks that have been converted
 into other forms before being placed on the internal queue.
 For example, a task entered using `submit` might be
 converted into a form that maintains `Future` status.
 However, in such cases, method `purge` may be used to
 remove those Futures that have been cancelled.

**参数**

- **task** — the task to remove

**返回**

- `true` if the task was removed
