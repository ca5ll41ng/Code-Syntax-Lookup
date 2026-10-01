---
id: "java-en-function-threadmxbean-isthreadcputimesupported"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.isThreadCpuTimeSupported"
signature: "public boolean isThreadCpuTimeSupported()"
title: "ThreadMXBean.isThreadCpuTimeSupported"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.isThreadCpuTimeSupported

```java
public boolean isThreadCpuTimeSupported()
```

Tests if the Java virtual machine implementation supports CPU time
 measurement for any platform thread.
 A Java virtual machine implementation that supports CPU time
 measurement for any platform thread will also support CPU time
 measurement for the current thread, when the current thread is a
 platform thread.

**返回**

- `true` if the Java virtual machine supports CPU time measurement for any platform thread; `false` otherwise.
