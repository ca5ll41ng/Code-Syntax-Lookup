---
id: "java-en-function-threadmxbean-iscurrentthreadcputimesupported"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.isCurrentThreadCpuTimeSupported"
signature: "public boolean isCurrentThreadCpuTimeSupported()"
title: "ThreadMXBean.isCurrentThreadCpuTimeSupported"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.isCurrentThreadCpuTimeSupported

```java
public boolean isCurrentThreadCpuTimeSupported()
```

Tests if the Java virtual machine supports CPU time measurement from
 a platform thread with the `getCurrentThreadCpuTime` and
 `getCurrentThreadUserTime` methods.
 This method returns `true` if `isThreadCpuTimeSupported`
 returns `true`.

**返回**

- `true` if the Java virtual machine supports CPU time measurement of the current platform thread; `false` otherwise.
