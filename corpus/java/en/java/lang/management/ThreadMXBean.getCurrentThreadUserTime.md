---
id: "java-en-function-threadmxbean-getcurrentthreadusertime"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.getCurrentThreadUserTime"
signature: "public long getCurrentThreadUserTime()"
title: "ThreadMXBean.getCurrentThreadUserTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.getCurrentThreadUserTime

```java
public long getCurrentThreadUserTime()
```

Returns the CPU time that the current thread has executed
 in user mode in nanoseconds.
 The returned value is of nanoseconds precision but
 not necessarily nanoseconds accuracy.

 

 This is a convenience method for local management use and is
 equivalent to calling:
 
```

   `getThreadUserTime getThreadUserTime`(Thread.currentThread().threadId());
 
```

**返回**

- the user-level CPU time for the current thread if the current thread is a platform thread and if CPU time measurement is enabled; `-1` otherwise.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for the current thread.

**参见**

- #getCurrentThreadCpuTime
- #isCurrentThreadCpuTimeSupported
- #isThreadCpuTimeEnabled
- #setThreadCpuTimeEnabled
