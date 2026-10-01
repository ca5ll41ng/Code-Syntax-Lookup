---
id: "java-en-function-threadpoolexecutor-getcompletedtaskcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.getCompletedTaskCount"
signature: "public long getCompletedTaskCount()"
title: "ThreadPoolExecutor.getCompletedTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.getCompletedTaskCount

```java
public long getCompletedTaskCount()
```

Returns the approximate total number of tasks that have
 completed execution. Because the states of tasks and threads
 may change dynamically during computation, the returned value
 is only an approximation, but one that does not ever decrease
 across successive calls.

**返回**

- the number of tasks
