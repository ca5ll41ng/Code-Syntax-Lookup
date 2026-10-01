---
id: "java-en-function-java-util-concurrent-locks-reentrantlock"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.locks.ReentrantLock"
title: "ReentrantLock"
directive: "type"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock

A reentrant mutual exclusion `Lock` with the same basic
 behavior and semantics as the implicit monitor lock accessed using
 `synchronized` methods and statements, but with extended
 capabilities.

 

A `ReentrantLock` is owned by the thread last
 successfully locking, but not yet unlocking it. A thread invoking
 `lock` will return, successfully acquiring the lock, when
 the lock is not owned by another thread. The method will return
 immediately if the current thread already owns the lock. This can
 be checked using methods `isHeldByCurrentThread`, and `getHoldCount`.

 

The constructor for this class accepts an optional
 fairness parameter.  When set `true`, under
 contention, locks favor granting access to the longest-waiting
 thread.  Otherwise this lock does not guarantee any particular
 access order.  Programs using fair locks accessed by many threads
 may display lower overall throughput (i.e., are slower; often much
 slower) than those using the default setting, but have smaller
 variances in times to obtain locks and guarantee lack of
 starvation. Note however, that fairness of locks does not guarantee
 fairness of thread scheduling. Thus, one of many threads using a
 fair lock may obtain it multiple times in succession while other
 active threads are not progressing and not currently holding the
 lock.
 Also note that the untimed `tryLock` method does not
 honor the fairness setting. It will succeed if the lock
 is available even if other threads are waiting.

 

It is recommended practice to always immediately
 follow a call to `lock` with a `try` block, and
 to always immediately call `unlock` as the
 first statement in the finally block, as follows:

 
```
 `class X {
   private final ReentrantLock lock = new ReentrantLock();
   // ...

   public void m() {
     lock.lock();  // lock() as the last statement before the try block
     try {
       // ... method body
     ` finally {
       lock.unlock(); // unlock() as the first statement in the finally block
     }
   }
 }}
```

 

In addition to implementing the `Lock` interface, this
 class defines a number of `public` and `protected`
 methods for inspecting the state of the lock.  Some of these
 methods are only useful for instrumentation and monitoring.

 

Serialization of this class behaves in the same way as built-in
 locks: a deserialized lock is in the unlocked state, regardless of
 its state when serialized.

 

This lock supports a maximum of 2147483647 recursive locks by
 the same thread. Attempts to exceed this limit result in
 `Error` throws from locking methods.

> *Since 1.5*
