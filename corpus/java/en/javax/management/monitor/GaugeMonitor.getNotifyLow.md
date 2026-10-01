---
id: "java-en-function-gaugemonitor-getnotifylow"
language: "java"
lang: "en"
category: "function"
name: "GaugeMonitor.getNotifyLow"
signature: "public synchronized boolean getNotifyLow()"
title: "GaugeMonitor.getNotifyLow"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitor.getNotifyLow

```java
public synchronized boolean getNotifyLow()
```

Gets the low notification's on/off switch value common to all
 observed MBeans.

**返回**

- true if the gauge monitor notifies when exceeding the low threshold, false otherwise.

**参见**

- #setNotifyLow
