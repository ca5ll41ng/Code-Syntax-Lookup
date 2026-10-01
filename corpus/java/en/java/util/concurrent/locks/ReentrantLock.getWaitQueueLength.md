---
id: "java-en-function-reentrantlock-getwaitqueuelength"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.getWaitQueueLength"
signature: "public int getWaitQueueLength(Condition condition)"
title: "ReentrantLock.getWaitQueueLength"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.getWaitQueueLength

```java
public int getWaitQueueLength(Condition condition)
```

Returns an estimate of the number of threads waiting on the
 given condition associated with this lock. Note that because
 timeouts and interrupts may occur at any time, the estimate
 serves only as an upper bound on the actual number of waiters.
 This method is designed for use in monitoring of the system
 state, not for synchronization control.

**参数**

- **condition** — the condition

**返回**

- the estimated number of waiting threads

**异常**

- **IllegalMonitorStateException** — if this lock is not held
- **IllegalArgumentException** — if the given condition is not associated with this lock
- **NullPointerException** — if the condition is null
