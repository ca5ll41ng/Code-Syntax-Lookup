---
id: "java-en-function-gaugemonitor-getderivedgauge"
language: "java"
lang: "en"
category: "function"
name: "GaugeMonitor.getDerivedGauge"
signature: "public synchronized Number getDerivedGauge(ObjectName object)"
title: "GaugeMonitor.getDerivedGauge"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/GaugeMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GaugeMonitor.getDerivedGauge

```java
public synchronized Number getDerivedGauge(ObjectName object)
```

Gets the derived gauge of the specified object, if this object is
 contained in the set of observed MBeans, or null otherwise.

**参数**

- **object** — the name of the MBean.

**返回**

- The derived gauge of the specified object.
