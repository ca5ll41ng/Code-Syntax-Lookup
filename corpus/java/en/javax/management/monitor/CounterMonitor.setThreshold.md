---
id: "java-en-function-countermonitor-setthreshold"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.setThreshold"
signature: "public synchronized void setThreshold(Number value) throws IllegalArgumentException"
title: "CounterMonitor.setThreshold"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.setThreshold

```java
public synchronized void setThreshold(Number value) throws IllegalArgumentException
```

Sets the initial threshold value.

**参数**

- **value** — The initial threshold value.

**异常**

- **IllegalArgumentException** — The specified threshold is null or the threshold value is less than zero.

**参见**

- #getThreshold()

> **⚠ Deprecated** — As of JMX 1.2, replaced by `setInitThreshold`
