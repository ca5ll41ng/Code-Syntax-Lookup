---
id: "java-en-function-abstractqueuedlongsynchronizer-acquire"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.acquire"
signature: "public final void acquire(long arg)"
title: "AbstractQueuedLongSynchronizer.acquire"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.acquire

```java
public final void acquire(long arg)
```

Acquires in exclusive mode, ignoring interrupts.  Implemented
 by invoking at least once `tryAcquire`,
 returning on success.  Otherwise the thread is queued, possibly
 repeatedly blocking and unblocking, invoking `tryAcquire` until success.  This method can be used
 to implement method `lock`.

**参数**

- **arg** — the acquire argument.  This value is conveyed to `tryAcquire` but is otherwise uninterpreted and can represent anything you like.
