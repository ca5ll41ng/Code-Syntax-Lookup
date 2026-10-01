---
id: "java-en-function-forkjointask-peeknextlocaltask"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.peekNextLocalTask"
signature: "protected static ForkJoinTask<?> peekNextLocalTask()"
title: "ForkJoinTask.peekNextLocalTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.peekNextLocalTask

```java
protected static ForkJoinTask<?> peekNextLocalTask()
```

Returns, but does not unschedule or execute, a task queued by
 the current thread but not yet executed, if one is immediately
 available. There is no guarantee that this task will actually
 be polled or executed next. Conversely, this method may return
 null even if a task exists but cannot be accessed without
 contention with other threads.  This method is designed
 primarily to support extensions, and is unlikely to be useful
 otherwise.

**返回**

- the next task, or `null` if none are available
