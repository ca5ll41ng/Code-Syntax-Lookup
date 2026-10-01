---
id: "java-en-function-countermonitormbean-setmodulus"
language: "java"
lang: "en"
category: "function"
name: "CounterMonitorMBean.setModulus"
signature: "public void setModulus(Number value) throws java.lang.IllegalArgumentException"
title: "CounterMonitorMBean.setModulus"
directive: "method"
module: "java.management/javax.management.monitor"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/monitor/CounterMonitorMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CounterMonitorMBean.setModulus

```java
public void setModulus(Number value) throws java.lang.IllegalArgumentException
```

Sets the modulus value.

**参数**

- **value** — The modulus value.

**异常**

- **java.lang.IllegalArgumentException** — The specified modulus is null or the modulus value is less than zero.

**参见**

- #getModulus
