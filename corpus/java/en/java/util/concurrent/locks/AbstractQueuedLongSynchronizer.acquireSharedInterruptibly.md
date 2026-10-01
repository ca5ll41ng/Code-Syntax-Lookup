---
id: "java-en-function-abstractqueuedlongsynchronizer-acquiresharedinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.acquireSharedInterruptibly"
signature: "public final void acquireSharedInterruptibly(long arg) throws InterruptedException"
title: "AbstractQueuedLongSynchronizer.acquireSharedInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.acquireSharedInterruptibly

```java
public final void acquireSharedInterruptibly(long arg) throws InterruptedException
```

Acquires in shared mode, aborting if interrupted.  Implemented
 by first checking interrupted status, then invoking at least once
 `tryAcquireShared`, returning on success.  Otherwise the
 thread is queued, possibly repeatedly blocking and unblocking,
 invoking `tryAcquireShared` until success or the thread
 is interrupted.

**参数**

- **arg** — the acquire argument. This value is conveyed to `tryAcquireShared` but is otherwise uninterpreted and can represent anything you like.

**异常**

- **InterruptedException** — if the current thread is interrupted
