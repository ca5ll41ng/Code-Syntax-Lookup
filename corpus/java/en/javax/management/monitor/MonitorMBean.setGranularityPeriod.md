---
id: "java-en-function-monitormbean-setgranularityperiod"
language: "java"
lang: "en"
category: "function"
name: "MonitorMBean.setGranularityPeriod"
signature: "public void setGranularityPeriod(long period) throws java.lang.IllegalArgumentException"
title: "MonitorMBean.setGranularityPeriod"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/MonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MonitorMBean.setGranularityPeriod

```java
public void setGranularityPeriod(long period) throws java.lang.IllegalArgumentException
```

Sets the granularity period (in milliseconds).

**参数**

- **period** — The granularity period.

**异常**

- **java.lang.IllegalArgumentException** — The granularity period is less than or equal to zero.

**参见**

- #getGranularityPeriod
