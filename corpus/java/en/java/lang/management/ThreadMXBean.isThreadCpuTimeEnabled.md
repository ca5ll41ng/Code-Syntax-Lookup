---
id: "java-en-function-threadmxbean-isthreadcputimeenabled"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.isThreadCpuTimeEnabled"
signature: "public boolean isThreadCpuTimeEnabled()"
title: "ThreadMXBean.isThreadCpuTimeEnabled"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.isThreadCpuTimeEnabled

```java
public boolean isThreadCpuTimeEnabled()
```

Tests if thread CPU time measurement is enabled.

**返回**

- `true` if thread CPU time measurement is enabled; `false` otherwise.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for other threads nor for the current thread.

**参见**

- #isThreadCpuTimeSupported
- #isCurrentThreadCpuTimeSupported
