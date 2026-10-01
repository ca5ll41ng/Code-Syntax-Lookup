---
id: "java-en-function-countermonitor-setoffset"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.setOffset"
signature: "public synchronized void setOffset(Number value) throws IllegalArgumentException"
title: "CounterMonitor.setOffset"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.setOffset

```java
public synchronized void setOffset(Number value) throws IllegalArgumentException
```

Sets the offset value common to all observed MBeans.

**参数**

- **value** — The offset value.

**异常**

- **IllegalArgumentException** — The specified offset is null or the offset value is less than zero.

**参见**

- #getOffset
