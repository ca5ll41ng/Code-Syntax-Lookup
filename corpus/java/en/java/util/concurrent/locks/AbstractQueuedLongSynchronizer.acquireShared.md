---
id: "java-en-function-abstractqueuedlongsynchronizer-acquireshared"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.acquireShared"
signature: "public final void acquireShared(long arg)"
title: "AbstractQueuedLongSynchronizer.acquireShared"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.acquireShared

```java
public final void acquireShared(long arg)
```

Acquires in shared mode, ignoring interrupts.  Implemented by
 first invoking at least once `tryAcquireShared`,
 returning on success.  Otherwise the thread is queued, possibly
 repeatedly blocking and unblocking, invoking `tryAcquireShared` until success.

**参数**

- **arg** — the acquire argument.  This value is conveyed to `tryAcquireShared` but is otherwise uninterpreted and can represent anything you like.
