---
id: "java-en-function-threadmxbean-dumpallthreads"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.dumpAllThreads"
signature: "public ThreadInfo[] dumpAllThreads(boolean lockedMonitors, boolean lockedSynchronizers)"
title: "ThreadMXBean.dumpAllThreads"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.dumpAllThreads

```java
public ThreadInfo[] dumpAllThreads(boolean lockedMonitors, boolean lockedSynchronizers)
```

Returns the thread info for all live platform threads with stack trace
 and synchronization information.
 The thread IDs of virtual threads are not included.
 This method is equivalent to calling:
 
 `dumpAllThreads(boolean, boolean, int)
 dumpAllThreads`

**参数**

- **lockedMonitors** — if `true`, dump all locked monitors.
- **lockedSynchronizers** — if `true`, dump all locked ownable synchronizers.

**返回**

- an array of `ThreadInfo` for all live platform threads.

**异常**

- **UnsupportedOperationException** — - if `lockedMonitors` is `true` but the Java virtual machine does not support monitoring of `isObjectMonitorUsageSupported object monitor usage`; or  - if `lockedSynchronizers` is `true` but the Java virtual machine does not support monitoring of `isSynchronizerUsageSupported ownable synchronizer usage`.

**参见**

- #isObjectMonitorUsageSupported
- #isSynchronizerUsageSupported

> *Since 1.6*
