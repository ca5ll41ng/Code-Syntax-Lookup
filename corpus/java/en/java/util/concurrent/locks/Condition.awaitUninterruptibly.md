---
id: "java-en-function-condition-awaituninterruptibly"
language: "java"
lang: "en"
category: "function"
name: "Condition.awaitUninterruptibly"
signature: "void awaitUninterruptibly()"
title: "Condition.awaitUninterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Condition.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Condition.awaitUninterruptibly

```java
void awaitUninterruptibly()
```

Causes the current thread to wait until it is signalled.

 

The lock associated with this condition is atomically
 released and the current thread becomes disabled for thread scheduling
 purposes and lies dormant until one of three things happens:
 
 
- Some other thread invokes the `signal` method for this
 `Condition` and the current thread happens to be chosen as the
 thread to be awakened; or
 
- Some other thread invokes the `signalAll` method for this
 `Condition`; or
 
- A &quot;spurious wakeup&quot; occurs.
 

 

In all cases, before this method can return the current thread must
 re-acquire the lock associated with this condition. When the
 thread returns it is guaranteed to hold this lock.

 

If the current thread's interrupted status is set when it enters
 this method, or it is `interrupt interrupted`
 while waiting, it will continue to wait until signalled. When it finally
 returns from this method its interrupted status will still
 be set.

 

**Implementation Considerations**

 

The current thread is assumed to hold the lock associated with this
 `Condition` when this method is called.
 It is up to the implementation to determine if this is
 the case and if not, how to respond. Typically, an exception will be
 thrown (such as `IllegalMonitorStateException`) and the
 implementation must document that fact.
