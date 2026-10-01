---
id: "java-en-function-threadpoolexecutor-setrejectedexecutionhandler"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.setRejectedExecutionHandler"
signature: "public void setRejectedExecutionHandler(RejectedExecutionHandler handler)"
title: "ThreadPoolExecutor.setRejectedExecutionHandler"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.setRejectedExecutionHandler

```java
public void setRejectedExecutionHandler(RejectedExecutionHandler handler)
```

Sets a new handler for unexecutable tasks.

**参数**

- **handler** — the new handler

**异常**

- **NullPointerException** — if handler is null

**参见**

- #getRejectedExecutionHandler
