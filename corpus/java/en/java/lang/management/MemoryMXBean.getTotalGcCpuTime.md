---
id: "java-en-function-memorymxbean-gettotalgccputime"
language: "java"
lang: "en"
category: "function"
name: "MemoryMXBean.getTotalGcCpuTime"
signature: "default public long getTotalGcCpuTime()"
title: "MemoryMXBean.getTotalGcCpuTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryMXBean.getTotalGcCpuTime

```java
default public long getTotalGcCpuTime()
```

Returns the approximate accumulated time, in nanoseconds,
 spent in garbage collection (GC).

 

 The time spent in spent in GC is the CPU time used by
 all GC activity, including any overhead, which means the
 result may be non-zero even if no GC has occurred.

 This method returns `-1` if the platform does
 not support this operation or the information is not
 available.

 May be used in conjunction with `jdk.management/com.sun.management.OperatingSystemMXBean#getProcessCpuTime()`
 for calculating the GC's usage of CPU time as a whole.

 in GC are highly implementation dependent. In the HotSpot
 Virtual Machine, this time includes relevant
 implementation-specific details such as driver threads,
 workers, VM Operations and string deduplication (if
 enabled). Driver threads may be created by a GC to
 orchestrate its work. The return value can be -1 if called
 when measurement is not possible, such as during shutdown.

**返回**

- the total accumulated CPU time for GC in nanoseconds, or `-1`.

> *Since 26*
