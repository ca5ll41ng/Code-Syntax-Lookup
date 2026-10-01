---
id: "java-en-function-numericaltype-isactive"
language: "java"
lang: "en"
category: "function"
name: "NumericalType.isActive"
signature: "public synchronized boolean isActive()"
title: "NumericalType.isActive"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/Monitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumericalType.isActive

```java
public synchronized boolean isActive()
```

Tests whether the monitor MBean is active.  A monitor MBean is
 marked active when the `start start` method is called.
 It becomes inactive when the `stop stop` method is
 called.

**返回**

- true if the monitor MBean is active, false otherwise.
