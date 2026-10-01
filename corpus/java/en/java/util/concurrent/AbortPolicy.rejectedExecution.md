---
id: "java-en-function-abortpolicy-rejectedexecution"
language: "java"
lang: "en"
category: "function"
name: "AbortPolicy.rejectedExecution"
signature: "public void rejectedExecution(Runnable r, ThreadPoolExecutor e)"
title: "AbortPolicy.rejectedExecution"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbortPolicy.rejectedExecution

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e)
```

Always throws RejectedExecutionException.

**参数**

- **r** — the runnable task requested to be executed
- **e** — the executor attempting to execute this task

**异常**

- **RejectedExecutionException** — always
