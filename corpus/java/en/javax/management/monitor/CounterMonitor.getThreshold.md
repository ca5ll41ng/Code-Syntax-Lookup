---
id: "java-en-function-countermonitor-getthreshold"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.getThreshold"
signature: "public synchronized Number getThreshold(ObjectName object)"
title: "CounterMonitor.getThreshold"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.getThreshold

```java
public synchronized Number getThreshold(ObjectName object)
```

Gets the current threshold value of the specified object, if
 this object is contained in the set of observed MBeans, or
 null otherwise.

**参数**

- **object** — the name of the object whose threshold is to be returned.

**返回**

- The threshold value of the specified object.
