---
id: "java-en-function-countermonitor-setinitthreshold"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.setInitThreshold"
signature: "public synchronized void setInitThreshold(Number value) throws IllegalArgumentException"
title: "CounterMonitor.setInitThreshold"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.setInitThreshold

```java
public synchronized void setInitThreshold(Number value) throws IllegalArgumentException
```

Sets the initial threshold value common to all observed objects.

 
The current threshold of every object in the set of
 observed MBeans is updated consequently.

**参数**

- **value** — The initial threshold value.

**异常**

- **IllegalArgumentException** — The specified threshold is null or the threshold value is less than zero.

**参见**

- #getInitThreshold
