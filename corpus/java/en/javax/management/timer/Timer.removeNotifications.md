---
id: "java-en-function-timer-removenotifications"
language: "java"
lang: "en"
category: "function"
name: "Timer.removeNotifications"
signature: "public synchronized void removeNotifications(String type) throws InstanceNotFoundException"
title: "Timer.removeNotifications"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.removeNotifications

```java
public synchronized void removeNotifications(String type) throws InstanceNotFoundException
```

Removes all the timer notifications corresponding to the specified type from the list of notifications.

**参数**

- **type** — The timer notification type.

**异常**

- **InstanceNotFoundException** — The specified type does not correspond to any timer notification in the list of notifications of this timer MBean.
