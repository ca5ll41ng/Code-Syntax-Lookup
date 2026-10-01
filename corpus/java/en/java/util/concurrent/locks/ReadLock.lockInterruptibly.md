---
id: "java-en-function-readlock-lockinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.lockInterruptibly"
signature: "public void lockInterruptibly() throws InterruptedException"
title: "ReadLock.lockInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.lockInterruptibly

```java
public void lockInterruptibly() throws InterruptedException
```

Acquires the read lock unless the current thread is
 `interrupt interrupted`.

 

Acquires the read lock if the write lock is not held
 by any thread and returns immediately.

 

If the write lock is held by any thread or the fairness
 policy prohibits acquisition of the read lock at this time,
 then the current thread becomes disabled for thread
 scheduling purposes and lies dormant until one of two
 things happens:

 

 
- The read lock is acquired by the current thread; or

 
- Some other thread `interrupt interrupts`
 the current thread.

 

 

If the current thread:

 

 
- has its interrupted status set on entry to this method; or

 
- is `interrupt interrupted` while
 acquiring the read lock,

 

 then `InterruptedException` is thrown and the current
 thread's interrupted status is cleared.

 

In this implementation, as this method is an explicit
 interruption point, preference is given to responding to
 the interrupt over normal or reentrant acquisition of the
 lock.

**异常**

- **InterruptedException** — if the current thread is interrupted
