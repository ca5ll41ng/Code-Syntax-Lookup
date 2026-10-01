---
id: "java-en-function-countermonitormbean-setinitthreshold"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitorMBean.setInitThreshold"
signature: "public void setInitThreshold(Number value) throws java.lang.IllegalArgumentException"
title: "CounterMonitorMBean.setInitThreshold"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitorMBean.setInitThreshold

```java
public void setInitThreshold(Number value) throws java.lang.IllegalArgumentException
```

Sets the initial threshold value common to all observed MBeans.

**参数**

- **value** — The initial threshold value.

**异常**

- **java.lang.IllegalArgumentException** — The specified threshold is null or the threshold value is less than zero.

**参见**

- #getInitThreshold
