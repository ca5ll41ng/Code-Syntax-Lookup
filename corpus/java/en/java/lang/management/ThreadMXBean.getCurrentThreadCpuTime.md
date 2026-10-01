---
id: "java-en-function-threadmxbean-getcurrentthreadcputime"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getCurrentThreadCpuTime"
signature: "public long getCurrentThreadCpuTime()"
title: "ThreadMXBean.getCurrentThreadCpuTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getCurrentThreadCpuTime

```java
public long getCurrentThreadCpuTime()
```

Returns the total CPU time for the current thread in nanoseconds.
 The returned value is of nanoseconds precision but
 not necessarily nanoseconds accuracy.
 If the implementation distinguishes between user mode time and system
 mode time, the returned CPU time is the amount of time that
 the current thread has executed in user mode or system mode.

 

 This is a convenience method for local management use and is
 equivalent to calling:
 
```

   `getThreadCpuTime getThreadCpuTime`(Thread.currentThread().threadId());
 
```

**返回**

- the total CPU time for the current thread if the current thread is a platform thread and if CPU time measurement is enabled; `-1` otherwise.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for the current thread.

**参见**

- #getCurrentThreadUserTime
- #isCurrentThreadCpuTimeSupported
- #isThreadCpuTimeEnabled
- #setThreadCpuTimeEnabled
