---
id: "java-en-function-threadmxbean-getthreadusertime"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getThreadUserTime"
signature: "public long getThreadUserTime(long id)"
title: "ThreadMXBean.getThreadUserTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getThreadUserTime

```java
public long getThreadUserTime(long id)
```

Returns the CPU time that a thread of the specified ID
 has executed in user mode in nanoseconds.
 The returned value is of nanoseconds precision but
 not necessarily nanoseconds accuracy.

 

 If the thread of the specified ID is a virtual thread, is not alive, or
 does not exist, this method returns `-1`. If CPU time measurement
 is disabled, this method returns `-1`.
 A thread is alive if it has been started and has not yet terminated.
 

 If CPU time measurement is enabled after the thread has started,
 the Java virtual machine implementation may choose any time up to
 and including the time that the capability is enabled as the point
 where CPU time measurement starts.

**参数**

- **id** — the thread ID of a thread

**返回**

- the user-level CPU time for a thread of the specified ID if the thread of the specified ID is a platform thread, the thread is alive, and CPU time measurement is enabled; `-1` otherwise.

**异常**

- **IllegalArgumentException** — if `id <= 0`.
- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for other threads.

**参见**

- #getThreadCpuTime
- #isThreadCpuTimeSupported
- #isThreadCpuTimeEnabled
- #setThreadCpuTimeEnabled
