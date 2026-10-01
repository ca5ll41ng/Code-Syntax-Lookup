---
id: "java-en-function-countermonitormbean-setthreshold"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitorMBean.setThreshold"
signature: "public void setThreshold(Number value) throws java.lang.IllegalArgumentException"
title: "CounterMonitorMBean.setThreshold"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitorMBean.setThreshold

```java
public void setThreshold(Number value) throws java.lang.IllegalArgumentException
```

Sets the threshold value.

**参数**

- **value** — The threshold value.

**异常**

- **java.lang.IllegalArgumentException** — The specified threshold is null or the threshold value is less than zero.

**参见**

- #getThreshold()

> **⚠ Deprecated** — As of JMX 1.2, replaced by `setInitThreshold`
