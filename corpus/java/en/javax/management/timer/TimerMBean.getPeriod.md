---
id: "java-en-function-timermbean-getperiod"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getPeriod"
signature: "public Long getPeriod(Integer id)"
title: "TimerMBean.getPeriod"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getPeriod

```java
public Long getPeriod(Integer id)
```

Gets a copy of the period (in milliseconds) associated to a timer notification.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the period or null if the identifier is not mapped to any timer notification registered for this timer MBean.
