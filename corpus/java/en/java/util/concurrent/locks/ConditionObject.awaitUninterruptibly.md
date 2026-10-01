---
id: "java-en-function-conditionobject-awaituninterruptibly"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.awaitUninterruptibly"
signature: "public final void awaitUninterruptibly()"
title: "ConditionObject.awaitUninterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.awaitUninterruptibly

```java
public final void awaitUninterruptibly()
```

Implements uninterruptible condition wait.
 
 
- Save lock state returned by `getState`.
 
- Invoke `release` with saved state as argument,
     throwing IllegalMonitorStateException if it fails.
 
- Block until signalled.
 
- Reacquire by invoking underlying version of
     `acquire` with saved state as argument.
