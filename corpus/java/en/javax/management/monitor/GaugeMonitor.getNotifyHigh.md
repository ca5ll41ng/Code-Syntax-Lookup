---
id: "java-en-function-gaugemonitor-getnotifyhigh"
language: "java"
lang: "en"
category: "function"
name: "GaugeMonitor.getNotifyHigh"
signature: "public synchronized boolean getNotifyHigh()"
title: "GaugeMonitor.getNotifyHigh"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitor.getNotifyHigh

```java
public synchronized boolean getNotifyHigh()
```

Gets the high notification's on/off switch value common to all
 observed MBeans.

**返回**

- true if the gauge monitor notifies when exceeding the high threshold, false otherwise.

**参见**

- #setNotifyHigh
