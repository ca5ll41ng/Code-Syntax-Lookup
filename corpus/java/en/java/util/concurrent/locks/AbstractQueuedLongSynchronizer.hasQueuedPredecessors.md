---
id: "java-en-function-abstractqueuedlongsynchronizer-hasqueuedpredecessors"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.hasQueuedPredecessors"
signature: "public final boolean hasQueuedPredecessors()"
title: "AbstractQueuedLongSynchronizer.hasQueuedPredecessors"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.hasQueuedPredecessors

```java
public final boolean hasQueuedPredecessors()
```

Queries whether any threads have been waiting to acquire longer
 than the current thread.

 

An invocation of this method is equivalent to (but may be
 more efficient than):
 
```
 `getFirstQueuedThread() != Thread.currentThread()
   && hasQueuedThreads()`
```

 

Note that because cancellations due to interrupts and
 timeouts may occur at any time, a `true` return does not
 guarantee that some other thread will acquire before the current
 thread.  Likewise, it is possible for another thread to win a
 race to enqueue after this method has returned `false`,
 due to the queue being empty.

 

This method is designed to be used by a fair synchronizer to
 avoid barging.
 Such a synchronizer's `tryAcquire` method should return
 `false`, and its `tryAcquireShared` method should
 return a negative value, if this method returns `true`
 (unless this is a reentrant acquire).  For example, the `tryAcquire` method for a fair, reentrant, exclusive mode
 synchronizer might look like this:

 
```
 `protected boolean tryAcquire(long arg) {
   if (isHeldExclusively()) {
     // A reentrant acquire; increment hold count
     return true;
   ` else if (hasQueuedPredecessors()) {
     return false;
   } else {
     // try to acquire normally
   }
 }}
```

**返回**

- `true` if there is a queued thread preceding the current thread, and `false` if the current thread is at the head of the queue or the queue is empty

> *Since 1.7*
