---
id: "java-en-function-threadmxbean-findmonitordeadlockedthreads"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.findMonitorDeadlockedThreads"
signature: "public long[] findMonitorDeadlockedThreads()"
title: "ThreadMXBean.findMonitorDeadlockedThreads"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.findMonitorDeadlockedThreads

```java
public long[] findMonitorDeadlockedThreads()
```

Finds cycles of platform threads that are in deadlock waiting to acquire
 object monitors. That is, platform threads that are blocked waiting to
 enter a synchronization block or waiting to reenter a synchronization block
 after an `wait Object.wait` call, where each platform thread
 owns one monitor while trying to obtain another monitor already held by
 another platform thread in a cycle. Cycles that include virtual threads
 are not found by this method.
 

 More formally, a thread is monitor deadlocked if it is
 part of a cycle in the relation "is waiting for an object monitor
 owned by".  In the simplest case, thread A is blocked waiting
 for a monitor owned by thread B, and thread B is blocked waiting
 for a monitor owned by thread A.
 

 This method is designed for troubleshooting use, but not for
 synchronization control.  It might be an expensive operation.
 

 This method finds deadlocks involving only object monitors.
 To find deadlocks involving both object monitors and
 ownable synchronizers,
 the `findDeadlockedThreads findDeadlockedThreads` method
 should be used.

**返回**

- an array of IDs of the platform threads that are monitor deadlocked, if any; `null` otherwise.

**参见**

- #findDeadlockedThreads
