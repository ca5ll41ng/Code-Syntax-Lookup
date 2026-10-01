---
id: "java-en-function-abstractqueuedlongsynchronizer-getwaitqueuelength"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.getWaitQueueLength"
signature: "public final int getWaitQueueLength(ConditionObject condition)"
title: "AbstractQueuedLongSynchronizer.getWaitQueueLength"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.getWaitQueueLength

```java
public final int getWaitQueueLength(ConditionObject condition)
```

Returns an estimate of the number of threads waiting on the
 given condition associated with this synchronizer. Note that
 because timeouts and interrupts may occur at any time, the
 estimate serves only as an upper bound on the actual number of
 waiters.  This method is designed for use in monitoring system
 state, not for synchronization control.

**参数**

- **condition** — the condition

**返回**

- the estimated number of waiting threads

**异常**

- **IllegalMonitorStateException** — if exclusive synchronization is not held
- **IllegalArgumentException** — if the given condition is not associated with this synchronizer
- **NullPointerException** — if the condition is null
