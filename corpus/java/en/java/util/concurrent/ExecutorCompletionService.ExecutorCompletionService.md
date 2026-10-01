---
id: "java-en-function-executorcompletionservice-executorcompletionservice"
language: "java"
lang: "en"
category: "function"
name: "ExecutorCompletionService.ExecutorCompletionService"
signature: "public ExecutorCompletionService(Executor executor)"
title: "ExecutorCompletionService.ExecutorCompletionService"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorCompletionService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorCompletionService.ExecutorCompletionService

```java
public ExecutorCompletionService(Executor executor)
```

Creates an ExecutorCompletionService using the supplied
 executor for base task execution and a
 `LinkedBlockingQueue` as a completion queue.

**参数**

- **executor** — the executor to use

**异常**

- **NullPointerException** — if executor is `null`
