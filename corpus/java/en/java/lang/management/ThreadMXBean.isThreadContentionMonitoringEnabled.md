---
id: "java-en-function-threadmxbean-isthreadcontentionmonitoringenabled"
language: "java"
lang: "en"
category: "function"
name: "ThreadMXBean.isThreadContentionMonitoringEnabled"
signature: "public boolean isThreadContentionMonitoringEnabled()"
title: "ThreadMXBean.isThreadContentionMonitoringEnabled"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ThreadMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadMXBean.isThreadContentionMonitoringEnabled

```java
public boolean isThreadContentionMonitoringEnabled()
```

Tests if thread contention monitoring is enabled.

**返回**

- `true` if thread contention monitoring is enabled; `false` otherwise.

**异常**

- **UnsupportedOperationException** — if the Java virtual machine does not support thread contention monitoring.

**参见**

- #isThreadContentionMonitoringSupported
