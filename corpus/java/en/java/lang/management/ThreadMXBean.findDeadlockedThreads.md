---
id: "java-en-function-threadmxbean-finddeadlockedthreads"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.findDeadlockedThreads"
signature: "public long[] findDeadlockedThreads()"
title: "ThreadMXBean.findDeadlockedThreads"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.findDeadlockedThreads

```java
public long[] findDeadlockedThreads()
```

Finds cycles of platform threads that are in deadlock waiting to
 acquire object monitors or
 ownable synchronizers.
 Platform threads are deadlocked in a cycle waiting for a lock of
 these two types if each thread owns one lock while trying to acquire
 another lock already held by another platform thread in the cycle.
 Cycles that include virtual threads are not found by this method.
 

 This method is designed for troubleshooting use, but not for
 synchronization control.  It might be an expensive operation.

**返回**

- an array of IDs of the platform threads that are deadlocked waiting for object monitors or ownable synchronizers, if any; `null` otherwise.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support monitoring of ownable synchronizer usage.

**参见**

- #isSynchronizerUsageSupported
- #findMonitorDeadlockedThreads

> *Since 1.6*
