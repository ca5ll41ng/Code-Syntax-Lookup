---
id: "java-en-function-callerrunspolicy-rejectedexecution"
language: "java"
lang: "en"
category: "function"
name: "CallerRunsPolicy.rejectedExecution"
signature: "public void rejectedExecution(Runnable r, ThreadPoolExecutor e)"
title: "CallerRunsPolicy.rejectedExecution"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CallerRunsPolicy.rejectedExecution

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e)
```

Executes task r in the caller's thread, unless the executor
 has been shut down, in which case the task is discarded.

**参数**

- **r** — the runnable task requested to be executed
- **e** — the executor attempting to execute this task
