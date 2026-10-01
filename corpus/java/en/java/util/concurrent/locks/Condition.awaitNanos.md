---
id: "java-en-function-condition-awaitnanos"
language: "java"
lang: "en"
category: "function"
name: "Condition.awaitNanos"
signature: "long awaitNanos(long nanosTimeout) throws InterruptedException"
title: "Condition.awaitNanos"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.awaitNanos

```java
long awaitNanos(long nanosTimeout) throws InterruptedException
```

Causes the current thread to wait until it is signalled or interrupted,
 or the specified waiting time elapses.

 

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
 
- The specified waiting time elapses; or
 
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

 

The method returns an estimate of the number of nanoseconds
 remaining to wait given the supplied `nanosTimeout`
 value upon return, or a value less than or equal to zero if it
 timed out. This value can be used to determine whether and how
 long to re-wait in cases where the wait returns but an awaited
 condition still does not hold. Typical uses of this method take
 the following form:

 
```
 `boolean aMethod(long timeout, TimeUnit unit)
     throws InterruptedException {
   long nanosRemaining = unit.toNanos(timeout);
   lock.lock();
   try {
     while (!conditionBeingWaitedFor()) {
       if (nanosRemaining <= 0L)
         return false;
       nanosRemaining = theCondition.awaitNanos(nanosRemaining);
     `
     // ...
     return true;
   } finally {
     lock.unlock();
   }
 }}
```

 

Design note: This method requires a nanosecond argument so
 as to avoid truncation errors in reporting remaining times.
 Such precision loss would make it difficult for programmers to
 ensure that total waiting times are not systematically shorter
 than specified when re-waits occur.

 

**Implementation Considerations**

 

The current thread is assumed to hold the lock associated with this
 `Condition` when this method is called.
 It is up to the implementation to determine if this is
 the case and if not, how to respond. Typically, an exception will be
 thrown (such as `IllegalMonitorStateException`) and the
 implementation must document that fact.

 

An implementation can favor responding to an interrupt over normal
 method return in response to a signal, or over indicating the elapse
 of the specified waiting time. In either case the implementation
 must ensure that the signal is redirected to another waiting thread, if
 there is one.

**参数**

- **nanosTimeout** — the maximum time to wait, in nanoseconds

**返回**

- an estimate of the `nanosTimeout` value minus the time spent waiting upon return from this method. A positive value may be used as the argument to a subsequent call to this method to finish waiting out the desired time.  A value less than or equal to zero indicates that no time remains.

**异常**

- **InterruptedException** — if the current thread is interrupted (and interruption of thread suspension is supported)
