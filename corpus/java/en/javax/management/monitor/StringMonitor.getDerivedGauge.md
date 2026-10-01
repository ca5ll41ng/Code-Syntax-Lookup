---
id: "java-en-function-stringmonitor-getderivedgauge"
language: "java"
lang: "en"
category: "function"
name: "StringMonitor.getDerivedGauge"
signature: "public synchronized String getDerivedGauge(ObjectName object)"
title: "StringMonitor.getDerivedGauge"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/StringMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringMonitor.getDerivedGauge

```java
public synchronized String getDerivedGauge(ObjectName object)
```

Gets the derived gauge of the specified object, if this object is
 contained in the set of observed MBeans, or null otherwise.

**参数**

- **object** — the name of the MBean whose derived gauge is required.

**返回**

- The derived gauge of the specified object.
