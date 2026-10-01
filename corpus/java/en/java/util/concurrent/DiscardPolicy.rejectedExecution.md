---
id: "java-en-function-discardpolicy-rejectedexecution"
language: "java"
lang: "en"
category: "function"
name: "DiscardPolicy.rejectedExecution"
signature: "public void rejectedExecution(Runnable r, ThreadPoolExecutor e)"
title: "DiscardPolicy.rejectedExecution"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DiscardPolicy.rejectedExecution

```java
public void rejectedExecution(Runnable r, ThreadPoolExecutor e)
```

Does nothing, which has the effect of discarding task r.

**参数**

- **r** — the runnable task requested to be executed
- **e** — the executor attempting to execute this task
