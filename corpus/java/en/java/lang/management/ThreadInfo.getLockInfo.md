---
id: "java-en-function-threadinfo-getlockinfo"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getLockInfo"
signature: "public LockInfo getLockInfo()"
title: "ThreadInfo.getLockInfo"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getLockInfo

```java
public LockInfo getLockInfo()
```

Returns the `LockInfo` of an object for which
 the thread associated with this `ThreadInfo`
 is blocked waiting.
 A thread can be blocked waiting for one of the following:
 
 
- an object monitor to be acquired for entering or reentering
     a synchronization block/method.
     
The thread is in the `BLOCKED BLOCKED`
     state waiting to enter the `synchronized` statement
     or method.
     
 
- an object monitor to be notified by another thread.
     
The thread is in the `WAITING WAITING`
     or `TIMED_WAITING TIMED_WAITING` state
     due to a call to the `wait Object.wait` method.
     
 
- a synchronization object responsible for the thread parking.
     
The thread is in the `WAITING WAITING`
     or `TIMED_WAITING TIMED_WAITING` state
     due to a call to the
     `park(Object)
     LockSupport.park` method.  The synchronization object
     is the object returned from
     `getBlocker
     LockSupport.getBlocker` method. Typically it is an
      ownable synchronizer
     or a `java.util.concurrent.locks.Condition Condition`.
 

 

This method returns `null` if the thread is not in any of
 the above conditions.

**返回**

- `LockInfo` of an object for which the thread is blocked waiting if any; `null` otherwise.

> *Since 1.6*
