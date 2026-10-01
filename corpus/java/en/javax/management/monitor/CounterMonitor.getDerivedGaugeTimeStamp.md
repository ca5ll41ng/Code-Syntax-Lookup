---
id: "java-en-function-countermonitor-getderivedgaugetimestamp"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.getDerivedGaugeTimeStamp"
signature: "public synchronized long getDerivedGaugeTimeStamp(ObjectName object)"
title: "CounterMonitor.getDerivedGaugeTimeStamp"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.getDerivedGaugeTimeStamp

```java
public synchronized long getDerivedGaugeTimeStamp(ObjectName object)
```

Gets the derived gauge timestamp of the specified object, if
 this object is contained in the set of observed MBeans, or
 0 otherwise.

**参数**

- **object** — the name of the object whose derived gauge timestamp is to be returned.

**返回**

- The derived gauge timestamp of the specified object.
