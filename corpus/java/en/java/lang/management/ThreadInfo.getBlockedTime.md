---
id: "java-en-function-threadinfo-getblockedtime"
language: "java"
lang: "en"
category: "function"
name: "ThreadInfo.getBlockedTime"
signature: "public long getBlockedTime()"
title: "ThreadInfo.getBlockedTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadInfo.getBlockedTime

```java
public long getBlockedTime()
```

Returns the approximate accumulated elapsed time (in milliseconds)
 that the thread associated with this `ThreadInfo`
 has blocked to enter or reenter a monitor
 since thread contention monitoring is enabled.
 I.e. the total accumulated time the thread has been in the
 `BLOCKED BLOCKED` state since thread
 contention monitoring was last enabled.
 This method returns `-1` if thread contention monitoring
 is disabled.

 

The Java virtual machine may measure the time with a high
 resolution timer.  This statistic is reset when
 the thread contention monitoring is re-enabled.

**返回**

- the approximate accumulated elapsed time in milliseconds that a thread entered the `BLOCKED` state; `-1` if thread contention monitoring is disabled.

**异常**

- **java.lang.UnsupportedOperationException** — if the Java virtual machine does not support this operation.

**参见**

- ThreadMXBean#isThreadContentionMonitoringSupported
- ThreadMXBean#setThreadContentionMonitoringEnabled
