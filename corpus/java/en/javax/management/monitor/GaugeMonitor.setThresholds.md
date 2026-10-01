---
id: "java-en-function-gaugemonitor-setthresholds"
language: "java"
lang: "en"
category: "function"
name: "GaugeMonitor.setThresholds"
signature: "public synchronized void setThresholds(Number highValue, Number lowValue) throws IllegalArgumentException"
title: "GaugeMonitor.setThresholds"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitor.setThresholds

```java
public synchronized void setThresholds(Number highValue, Number lowValue) throws IllegalArgumentException
```

Sets the high and the low threshold values common to all
 observed MBeans.

**参数**

- **highValue** — The high threshold value.
- **lowValue** — The low threshold value.

**异常**

- **IllegalArgumentException** — The specified high/low threshold is null or the low threshold is greater than the high threshold or the high threshold and the low threshold are not of the same type.

**参见**

- #getHighThreshold
- #getLowThreshold
