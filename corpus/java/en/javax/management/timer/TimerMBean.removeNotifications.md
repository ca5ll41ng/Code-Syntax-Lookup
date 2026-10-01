---
id: "java-en-function-timermbean-removenotifications"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.removeNotifications"
signature: "public void removeNotifications(String type) throws InstanceNotFoundException"
title: "TimerMBean.removeNotifications"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.removeNotifications

```java
public void removeNotifications(String type) throws InstanceNotFoundException
```

Removes all the timer notifications corresponding to the specified type from the list of notifications.

**参数**

- **type** — The timer notification type.

**异常**

- **InstanceNotFoundException** — The specified type does not correspond to any timer notification in the list of notifications of this timer MBean.
