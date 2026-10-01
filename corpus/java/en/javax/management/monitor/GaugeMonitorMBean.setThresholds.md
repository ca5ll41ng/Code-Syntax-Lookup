---
id: "java-en-function-gaugemonitormbean-setthresholds"
language: "java"
lang: "en"
category: "function"
name: "GaugeMonitorMBean.setThresholds"
signature: "public void setThresholds(Number highValue, Number lowValue) throws java.lang.IllegalArgumentException"
title: "GaugeMonitorMBean.setThresholds"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitorMBean.setThresholds

```java
public void setThresholds(Number highValue, Number lowValue) throws java.lang.IllegalArgumentException
```

Sets the high and the low threshold values.

**参数**

- **highValue** — The high threshold value.
- **lowValue** — The low threshold value.

**异常**

- **java.lang.IllegalArgumentException** — The specified high/low threshold is null or the low threshold is greater than the high threshold or the high threshold and the low threshold are not of the same type.
