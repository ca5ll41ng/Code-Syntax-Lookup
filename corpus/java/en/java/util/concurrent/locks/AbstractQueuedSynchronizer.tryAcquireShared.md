---
id: "java-en-function-abstractqueuedsynchronizer-tryacquireshared"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedSynchronizer.tryAcquireShared"
signature: "protected int tryAcquireShared(int arg)"
title: "AbstractQueuedSynchronizer.tryAcquireShared"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedSynchronizer.tryAcquireShared

```java
protected int tryAcquireShared(int arg)
```

Attempts to acquire in shared mode. This method should query if
 the state of the object permits it to be acquired in the shared
 mode, and if so to acquire it.

 

This method is always invoked by the thread performing
 acquire.  If this method reports failure, the acquire method
 may queue the thread, if it is not already queued, until it is
 signalled by a release from some other thread.

 

The default implementation throws `UnsupportedOperationException`.

**参数**

- **arg** — the acquire argument. This value is always the one passed to an acquire method, or is the value saved on entry to a condition wait.  The value is otherwise uninterpreted and can represent anything you like.

**返回**

- a negative value on failure; zero if acquisition in shared mode succeeded but no subsequent shared-mode acquire can succeed; and a positive value if acquisition in shared mode succeeded and subsequent shared-mode acquires might also succeed, in which case a subsequent waiting thread must check availability. (Support for three different return values enables this method to be used in contexts where acquires only sometimes act exclusively.)  Upon success, this object has been acquired.

**异常**

- **IllegalMonitorStateException** — if acquiring would place this synchronizer in an illegal state. This exception must be thrown in a consistent fashion for synchronization to work correctly.
- **UnsupportedOperationException** — if shared mode is not supported
