---
id: "java-en-function-lock-lockinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "Lock.lockInterruptibly"
signature: "void lockInterruptibly() throws InterruptedException"
title: "Lock.lockInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Lock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lock.lockInterruptibly

```java
void lockInterruptibly() throws InterruptedException
```

Acquires the lock unless the current thread is
 `interrupt interrupted`.

 

Acquires the lock if it is available and returns immediately.

 

If the lock is not available then the current thread becomes
 disabled for thread scheduling purposes and lies dormant until
 one of two things happens:

 
 
- The lock is acquired by the current thread; or
 
- Some other thread `interrupt interrupts` the
 current thread, and interruption of lock acquisition is supported.
 

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while acquiring the
 lock, and interruption of lock acquisition is supported,
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared.

 

**Implementation Considerations**

 

The ability to interrupt a lock acquisition in some
 implementations may not be possible, and if possible may be an
 expensive operation.  The programmer should be aware that this
 may be the case. An implementation should document when this is
 the case.

 

An implementation can favor responding to an interrupt over
 normal method return.

 

A `Lock` implementation may be able to detect
 erroneous use of the lock, such as an invocation that would
 cause deadlock, and may throw an (unchecked) exception in such
 circumstances.  The circumstances and the exception type must
 be documented by that `Lock` implementation.

**异常**

- **InterruptedException** — if the current thread is interrupted while acquiring the lock (and interruption of lock acquisition is supported)
