---
id: "java-en-function-threadmxbean-setthreadcontentionmonitoringenabled"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.setThreadContentionMonitoringEnabled"
signature: "public void setThreadContentionMonitoringEnabled(boolean enable)"
title: "ThreadMXBean.setThreadContentionMonitoringEnabled"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.setThreadContentionMonitoringEnabled

```java
public void setThreadContentionMonitoringEnabled(boolean enable)
```

Enables or disables thread contention monitoring.
 Thread contention monitoring is disabled by default.

**参数**

- **enable** — `true` to enable; `false` to disable.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support thread contention monitoring.

**参见**

- #isThreadContentionMonitoringSupported
