---
id: "java-en-function-condition-await"
language: "java"
lang: "en"
category: "function"
name: "Condition.await"
signature: "void await() throws InterruptedException"
title: "Condition.await"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.await

```java
void await() throws InterruptedException
```

Causes the current thread to wait until it is signalled or
 `interrupt interrupted`.

 

The lock associated with this `Condition` is atomically
 released and the current thread becomes disabled for thread scheduling
 purposes and lies dormant until one of four things happens:
 
 
- Some other thread invokes the `signal` method for this
 `Condition` and the current thread happens to be chosen as the
 thread to be awakened; or
 
- Some other thread invokes the `signalAll` method for this
 `Condition`; or
 
- Some other thread `interrupt interrupts` the
 current thread, and interruption of thread suspension is supported; or
 
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

 

**Implementation Considerations**

 

The current thread is assumed to hold the lock associated with this
 `Condition` when this method is called.
 It is up to the implementation to determine if this is
 the case and if not, how to respond. Typically, an exception will be
 thrown (such as `IllegalMonitorStateException`) and the
 implementation must document that fact.

 

An implementation can favor responding to an interrupt over normal
 method return in response to a signal. In that case the implementation
 must ensure that the signal is redirected to another waiting thread, if
 there is one.

**异常**

- **InterruptedException** — if the current thread is interrupted (and interruption of thread suspension is supported)
