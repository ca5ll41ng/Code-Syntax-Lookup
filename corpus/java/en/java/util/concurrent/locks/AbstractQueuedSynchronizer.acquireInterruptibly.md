---
id: "java-en-function-abstractqueuedsynchronizer-acquireinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.acquireInterruptibly"
signature: "public final void acquireInterruptibly(int arg) throws InterruptedException"
title: "AbstractQueuedSynchronizer.acquireInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.acquireInterruptibly

```java
public final void acquireInterruptibly(int arg) throws InterruptedException
```

Acquires in exclusive mode, aborting if interrupted.
 Implemented by first checking interrupted status, then invoking
 at least once `tryAcquire`, returning on
 success.  Otherwise the thread is queued, possibly repeatedly
 blocking and unblocking, invoking `tryAcquire`
 until success or the thread is interrupted.  This method can be
 used to implement method `lockInterruptibly`.

**参数**

- **arg** — the acquire argument.  This value is conveyed to `tryAcquire` but is otherwise uninterpreted and can represent anything you like.

**异常**

- **InterruptedException** — if the current thread is interrupted
