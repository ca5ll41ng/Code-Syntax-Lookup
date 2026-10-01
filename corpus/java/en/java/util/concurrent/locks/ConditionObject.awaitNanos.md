---
id: "java-en-function-conditionobject-awaitnanos"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.awaitNanos"
signature: "public final long awaitNanos(long nanosTimeout) throws InterruptedException"
title: "ConditionObject.awaitNanos"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.awaitNanos

```java
public final long awaitNanos(long nanosTimeout) throws InterruptedException
```

Implements timed condition wait.
 
 
- If current thread is interrupted, throw InterruptedException.
 
- Save lock state returned by `getState`.
 
- Invoke `release` with saved state as argument,
     throwing IllegalMonitorStateException if it fails.
 
- Block until signalled, interrupted, or timed out.
 
- Reacquire by invoking underlying version of
     `acquire` with saved state as argument.
 
- If interrupted while blocked in step 4, throw InterruptedException.
