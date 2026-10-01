---
id: "java-en-function-threadpoolexecutor-setthreadfactory"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.setThreadFactory"
signature: "public void setThreadFactory(ThreadFactory threadFactory)"
title: "ThreadPoolExecutor.setThreadFactory"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.setThreadFactory

```java
public void setThreadFactory(ThreadFactory threadFactory)
```

Sets the thread factory used to create new threads.

**参数**

- **threadFactory** — the new thread factory

**异常**

- **NullPointerException** — if threadFactory is null

**参见**

- #getThreadFactory
