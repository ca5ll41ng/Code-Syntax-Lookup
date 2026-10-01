---
id: "java-en-function-countermonitor-setmodulus"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitor.setModulus"
signature: "public synchronized void setModulus(Number value) throws IllegalArgumentException"
title: "CounterMonitor.setModulus"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitor.setModulus

```java
public synchronized void setModulus(Number value) throws IllegalArgumentException
```

Sets the modulus value common to all observed MBeans.

**参数**

- **value** — The modulus value.

**异常**

- **IllegalArgumentException** — The specified modulus is null or the modulus value is less than zero.

**参见**

- #getModulus
