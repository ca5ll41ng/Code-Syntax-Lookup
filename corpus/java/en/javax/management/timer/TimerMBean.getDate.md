---
id: "java-en-function-timermbean-getdate"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getDate"
signature: "public Date getDate(Integer id)"
title: "TimerMBean.getDate"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getDate

```java
public Date getDate(Integer id)
```

Gets a copy of the date associated to a timer notification.

**参数**

- **id** — The timer notification identifier.

**返回**

- A copy of the date or null if the identifier is not mapped to any timer notification registered for this timer MBean.
