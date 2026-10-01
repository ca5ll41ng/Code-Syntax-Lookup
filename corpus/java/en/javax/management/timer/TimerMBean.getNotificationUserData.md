---
id: "java-en-function-timermbean-getnotificationuserdata"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getNotificationUserData"
signature: "public Object getNotificationUserData(Integer id)"
title: "TimerMBean.getNotificationUserData"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getNotificationUserData

```java
public Object getNotificationUserData(Integer id)
```

Gets the timer notification user data object corresponding to the specified identifier.

**参数**

- **id** — The timer notification identifier.

**返回**

- The timer notification user data object or null if the identifier is not mapped to any timer notification registered for this timer MBean.
