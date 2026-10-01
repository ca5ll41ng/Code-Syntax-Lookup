---
id: "java-en-function-countermonitor-getderivedgauge"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.getDerivedGauge"
signature: "public synchronized Number getDerivedGauge(ObjectName object)"
title: "CounterMonitor.getDerivedGauge"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.getDerivedGauge

```java
public synchronized Number getDerivedGauge(ObjectName object)
```

Gets the derived gauge of the specified object, if this object is
 contained in the set of observed MBeans, or null otherwise.

**参数**

- **object** — the name of the object whose derived gauge is to be returned.

**返回**

- The derived gauge of the specified object.
