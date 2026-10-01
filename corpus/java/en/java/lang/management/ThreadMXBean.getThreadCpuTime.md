---
id: "java-en-function-threadmxbean-getthreadcputime"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getThreadCpuTime"
signature: "public long getThreadCpuTime(long id)"
title: "ThreadMXBean.getThreadCpuTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getThreadCpuTime

```java
public long getThreadCpuTime(long id)
```

Returns the total CPU time for a thread of the specified ID in nanoseconds.
 The returned value is of nanoseconds precision but
 not necessarily nanoseconds accuracy.
 If the implementation distinguishes between user mode time and system
 mode time, the returned CPU time is the amount of time that
 the thread has executed in user mode or system mode.

 

 If the thread of the specified ID is a virtual thread, is not alive or
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

- the total CPU time for a thread of the specified ID if the thread of the specified ID is a platform thread, the thread is alive, and CPU time measurement is enabled; `-1` otherwise.

**异常**

- **IllegalArgumentException** — if `id <= 0`.
- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for other threads.

**参见**

- #getThreadUserTime
- #isThreadCpuTimeSupported
- #isThreadCpuTimeEnabled
- #setThreadCpuTimeEnabled
