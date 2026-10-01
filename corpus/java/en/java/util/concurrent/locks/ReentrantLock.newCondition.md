---
id: "java-en-function-reentrantlock-newcondition"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.newCondition"
signature: "public Condition newCondition()"
title: "ReentrantLock.newCondition"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.newCondition

```java
public Condition newCondition()
```

Returns a `Condition` instance for use with this
 `Lock` instance.

 

The returned `Condition` instance supports the same
 usages as do the `Object` monitor methods (`wait() wait`, `notify notify`, and `notifyAll notifyAll`) when used with the built-in
 monitor lock.

 

 
- If this lock is not held when any of the `Condition`
 `await() waiting` or `signal signalling` methods are called, then an `IllegalMonitorStateException` is thrown.

 
- When the condition `await() waiting`
 methods are called the lock is released and, before they
 return, the lock is reacquired and the lock hold count restored
 to what it was when the method was called.

 
- If a thread is `interrupt interrupted`
 while waiting then the wait will terminate, an `InterruptedException` will be thrown, and the thread's
 interrupted status will be cleared.

 
- Waiting threads are signalled in FIFO order.

 
- The ordering of lock reacquisition for threads returning
 from waiting methods is the same as for threads initially
 acquiring the lock, which is in the default case not specified,
 but for fair locks favors those threads that have been
 waiting the longest.

**返回**

- the Condition object
