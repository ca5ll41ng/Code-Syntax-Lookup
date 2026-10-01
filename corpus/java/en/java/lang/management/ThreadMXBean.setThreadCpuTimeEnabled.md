---
id: "java-en-function-threadmxbean-setthreadcputimeenabled"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.setThreadCpuTimeEnabled"
signature: "public void setThreadCpuTimeEnabled(boolean enable)"
title: "ThreadMXBean.setThreadCpuTimeEnabled"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.setThreadCpuTimeEnabled

```java
public void setThreadCpuTimeEnabled(boolean enable)
```

Enables or disables thread CPU time measurement.  The default
 is platform dependent.

**参数**

- **enable** — `true` to enable; `false` to disable.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support CPU time measurement for any threads nor for the current thread.

**参见**

- #isThreadCpuTimeSupported
- #isCurrentThreadCpuTimeSupported
