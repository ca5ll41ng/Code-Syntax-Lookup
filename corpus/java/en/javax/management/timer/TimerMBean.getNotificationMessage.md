---
id: "java-en-function-timermbean-getnotificationmessage"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getNotificationMessage"
signature: "public String getNotificationMessage(Integer id)"
title: "TimerMBean.getNotificationMessage"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getNotificationMessage

```java
public String getNotificationMessage(Integer id)
```

Gets the timer notification detailed message corresponding to the specified identifier.

**参数**

- **id** — The timer notification identifier.

**返回**

- The timer notification detailed message or null if the identifier is not mapped to any timer notification registered for this timer MBean.
