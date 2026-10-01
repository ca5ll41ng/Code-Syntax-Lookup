---
id: "java-en-function-threadpoolexecutor-gettaskcount"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.getTaskCount"
signature: "public long getTaskCount()"
title: "ThreadPoolExecutor.getTaskCount"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.getTaskCount

```java
public long getTaskCount()
```

Returns the approximate total number of tasks that have ever been
 scheduled for execution. Because the states of tasks and
 threads may change dynamically during computation, the returned
 value is only an approximation.

**返回**

- the number of tasks
