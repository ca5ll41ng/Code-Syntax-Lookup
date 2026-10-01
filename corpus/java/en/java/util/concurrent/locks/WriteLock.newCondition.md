---
id: "java-en-function-writelock-newcondition"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.newCondition"
signature: "public Condition newCondition()"
title: "WriteLock.newCondition"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.newCondition

```java
public Condition newCondition()
```

Returns a `Condition` instance for use with this
 `Lock` instance.
 

The returned `Condition` instance supports the same
 usages as do the `Object` monitor methods (`wait() wait`, `notify notify`, and `notifyAll notifyAll`) when used with the built-in
 monitor lock.

 

 
- If this write lock is not held when any `Condition` method is called then an `IllegalMonitorStateException` is thrown.  (Read locks are
 held independently of write locks, so are not checked or
 affected. However it is essentially always an error to
 invoke a condition waiting method when the current thread
 has also acquired read locks, since other threads that
 could unblock it will not be able to acquire the write
 lock.)

 
- When the condition `await() waiting`
 methods are called the write lock is released and, before
 they return, the write lock is reacquired and the lock hold
 count restored to what it was when the method was called.

 
- If a thread is `interrupt interrupted` while
 waiting then the wait will terminate, an `InterruptedException` will be thrown, and the thread's
 interrupted status will be cleared.

 
- Waiting threads are signalled in FIFO order.

 
- The ordering of lock reacquisition for threads returning
 from waiting methods is the same as for threads initially
 acquiring the lock, which is in the default case not specified,
 but for fair locks favors those threads that have been
 waiting the longest.

**返回**

- the Condition object
