---
id: "java-en-function-timermbean-removenotification"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.removeNotification"
signature: "public void removeNotification(Integer id) throws InstanceNotFoundException"
title: "TimerMBean.removeNotification"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.removeNotification

```java
public void removeNotification(Integer id) throws InstanceNotFoundException
```

Removes the timer notification corresponding to the specified identifier from the list of notifications.

**参数**

- **id** — The timer notification identifier.

**异常**

- **InstanceNotFoundException** — The specified identifier does not correspond to any timer notification in the list of notifications of this timer MBean.
