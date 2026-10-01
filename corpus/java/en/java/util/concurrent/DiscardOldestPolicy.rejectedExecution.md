---
id: "java-en-function-discardoldestpolicy-rejectedexecution"
language: "java"
lang: "en"
category: "function"
name: "DiscardOldestPolicy.rejectedExecution"
signature: "public void rejectedExecution(Runnable r, ThreadPoolExecutor e)"
title: "DiscardOldestPolicy.rejectedExecution"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DiscardOldestPolicy.rejectedExecution

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e)
```

Obtains and ignores the next task that the executor
 would otherwise execute, if one is immediately available,
 and then retries execution of task r, unless the executor
 is shut down, in which case task r is instead discarded.

**参数**

- **r** — the runnable task requested to be executed
- **e** — the executor attempting to execute this task
