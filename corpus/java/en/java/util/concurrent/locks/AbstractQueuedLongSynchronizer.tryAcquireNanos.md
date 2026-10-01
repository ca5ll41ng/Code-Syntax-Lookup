---
id: "java-en-function-abstractqueuedlongsynchronizer-tryacquirenanos"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.tryAcquireNanos"
signature: "public final boolean tryAcquireNanos(long arg, long nanosTimeout) throws InterruptedException"
title: "AbstractQueuedLongSynchronizer.tryAcquireNanos"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.tryAcquireNanos

```java
public final boolean tryAcquireNanos(long arg, long nanosTimeout) throws InterruptedException
```

Attempts to acquire in exclusive mode, aborting if interrupted,
 and failing if the given timeout elapses.  Implemented by first
 checking interrupted status, then invoking at least once `tryAcquire`, returning on success.  Otherwise, the thread is
 queued, possibly repeatedly blocking and unblocking, invoking
 `tryAcquire` until success or the thread is interrupted
 or the timeout elapses.  This method can be used to implement
 method `tryLock`.

**参数**

- **arg** — the acquire argument.  This value is conveyed to `tryAcquire` but is otherwise uninterpreted and can represent anything you like.
- **nanosTimeout** — the maximum number of nanoseconds to wait

**返回**

- `true` if acquired; `false` if timed out

**异常**

- **InterruptedException** — if the current thread is interrupted
