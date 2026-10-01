---
id: "java-en-function-countermonitormbean-setoffset"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitorMBean.setOffset"
signature: "public void setOffset(Number value) throws java.lang.IllegalArgumentException"
title: "CounterMonitorMBean.setOffset"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitorMBean.setOffset

```java
public void setOffset(Number value) throws java.lang.IllegalArgumentException
```

Sets the offset value.

**参数**

- **value** — The offset value.

**异常**

- **java.lang.IllegalArgumentException** — The specified offset is null or the offset value is less than zero.

**参见**

- #getOffset()
