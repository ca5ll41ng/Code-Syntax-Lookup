---
id: "java-en-function-abstractqueuedsynchronizer-tryacquiresharednanos"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.tryAcquireSharedNanos"
signature: "public final boolean tryAcquireSharedNanos(int arg, long nanosTimeout) throws InterruptedException"
title: "AbstractQueuedSynchronizer.tryAcquireSharedNanos"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.tryAcquireSharedNanos

```java
public final boolean tryAcquireSharedNanos(int arg, long nanosTimeout) throws InterruptedException
```

Attempts to acquire in shared mode, aborting if interrupted, and
 failing if the given timeout elapses.  Implemented by first
 checking interrupted status, then invoking at least once `tryAcquireShared`, returning on success.  Otherwise, the
 thread is queued, possibly repeatedly blocking and unblocking,
 invoking `tryAcquireShared` until success or the thread
 is interrupted or the timeout elapses.

**参数**

- **arg** — the acquire argument.  This value is conveyed to `tryAcquireShared` but is otherwise uninterpreted and can represent anything you like.
- **nanosTimeout** — the maximum number of nanoseconds to wait

**返回**

- `true` if acquired; `false` if timed out

**异常**

- **InterruptedException** — if the current thread is interrupted
