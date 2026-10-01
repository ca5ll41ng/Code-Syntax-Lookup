---
id: "java-en-function-conditionobject-await"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.await"
signature: "public final void await() throws InterruptedException"
title: "ConditionObject.await"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.await

```java
public final void await() throws InterruptedException
```

Implements interruptible condition wait.
 
 
- If current thread is interrupted, throw InterruptedException.
 
- Save lock state returned by `getState`.
 
- Invoke `release` with saved state as argument,
     throwing IllegalMonitorStateException if it fails.
 
- Block until signalled or interrupted.
 
- Reacquire by invoking underlying version of
     `acquire` with saved state as argument.
 
- If interrupted while blocked in step 4, throw InterruptedException.
