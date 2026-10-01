---
id: "java-en-function-condition-awaituntil"
language: "java"
lang: "en"
category: "function"
name: "Condition.awaitUntil"
signature: "boolean awaitUntil(Date deadline) throws InterruptedException"
title: "Condition.awaitUntil"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.awaitUntil

```java
boolean awaitUntil(Date deadline) throws InterruptedException
```

Causes the current thread to wait until it is signalled or interrupted,
 or the specified deadline elapses.

 

The lock associated with this condition is atomically
 released and the current thread becomes disabled for thread scheduling
 purposes and lies dormant until one of five things happens:
 
 
- Some other thread invokes the `signal` method for this
 `Condition` and the current thread happens to be chosen as the
 thread to be awakened; or
 
- Some other thread invokes the `signalAll` method for this
 `Condition`; or
 
- Some other thread `interrupt interrupts` the
 current thread, and interruption of thread suspension is supported; or
 
- The specified deadline elapses; or
 
- A &quot;spurious wakeup&quot; occurs.
 

 

In all cases, before this method can return the current thread must
 re-acquire the lock associated with this condition. When the
 thread returns it is guaranteed to hold this lock.

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while waiting
 and interruption of thread suspension is supported,
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared. It is not specified, in the first
 case, whether or not the test for interruption occurs before the lock
 is released.

 

The return value indicates whether the deadline has elapsed,
 which can be used as follows:
 
```
 `boolean aMethod(Date deadline)
     throws InterruptedException {
   boolean stillWaiting = true;
   lock.lock();
   try {
     while (!conditionBeingWaitedFor()) {
       if (!stillWaiting)
         return false;
       stillWaiting = theCondition.awaitUntil(deadline);
     `
     // ...
     return true;
   } finally {
     lock.unlock();
   }
 }}
```

 

**Implementation Considerations**

 

The current thread is assumed to hold the lock associated with this
 `Condition` when this method is called.
 It is up to the implementation to determine if this is
 the case and if not, how to respond. Typically, an exception will be
 thrown (such as `IllegalMonitorStateException`) and the
 implementation must document that fact.

 

An implementation can favor responding to an interrupt over normal
 method return in response to a signal, or over indicating the passing
 of the specified deadline. In either case the implementation
 must ensure that the signal is redirected to another waiting thread, if
 there is one.

**参数**

- **deadline** — the absolute time to wait until

**返回**

- `false` if the deadline has elapsed upon return, else `true`

**异常**

- **InterruptedException** — if the current thread is interrupted (and interruption of thread suspension is supported)
