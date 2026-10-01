---
id: "java-en-function-abstractqueuedlongsynchronizer-tryacquire"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.tryAcquire"
signature: "protected boolean tryAcquire(long arg)"
title: "AbstractQueuedLongSynchronizer.tryAcquire"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.tryAcquire

```java
protected boolean tryAcquire(long arg)
```

Attempts to acquire in exclusive mode. This method should query
 if the state of the object permits it to be acquired in the
 exclusive mode, and if so to acquire it.

 

This method is always invoked by the thread performing
 acquire.  If this method reports failure, the acquire method
 may queue the thread, if it is not already queued, until it is
 signalled by a release from some other thread. This can be used
 to implement method `tryLock`.

 

The default
 implementation throws `UnsupportedOperationException`.

**参数**

- **arg** — the acquire argument. This value is always the one passed to an acquire method, or is the value saved on entry to a condition wait.  The value is otherwise uninterpreted and can represent anything you like.

**返回**

- `true` if successful. Upon success, this object has been acquired.

**异常**

- **IllegalMonitorStateException** — if acquiring would place this synchronizer in an illegal state. This exception must be thrown in a consistent fashion for synchronization to work correctly.
- **UnsupportedOperationException** — if exclusive mode is not supported
