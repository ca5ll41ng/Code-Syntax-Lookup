---
id: "java-en-function-conditionobject-awaituntil"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.awaitUntil"
signature: "public final boolean awaitUntil(Date deadline) throws InterruptedException"
title: "ConditionObject.awaitUntil"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.awaitUntil

```java
public final boolean awaitUntil(Date deadline) throws InterruptedException
```

Implements absolute timed condition wait.
 
 
- If current thread is interrupted, throw InterruptedException.
 
- Save lock state returned by `getState`.
 
- Invoke `release` with saved state as argument,
     throwing IllegalMonitorStateException if it fails.
 
- Block until signalled, interrupted, or timed out.
 
- Reacquire by invoking underlying version of
     `acquire` with saved state as argument.
 
- If interrupted while blocked in step 4, throw InterruptedException.
 
- If timed out while blocked in step 4, return false, else true.
