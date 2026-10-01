---
id: "java-en-function-numericaltype-setgranularityperiod"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.setGranularityPeriod"
signature: "public synchronized void setGranularityPeriod(long period) throws IllegalArgumentException"
title: "NumericalType.setGranularityPeriod"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.setGranularityPeriod

```java
public synchronized void setGranularityPeriod(long period) throws IllegalArgumentException
```

Sets the granularity period (in milliseconds).
 
The default value of the granularity period is 10 seconds.

**参数**

- **period** — The granularity period value.

**异常**

- **IllegalArgumentException** — The granularity period is less than or equal to zero.

**参见**

- #getGranularityPeriod
