---
id: "java-en-function-timermbean-getnotificationids"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.getNotificationIDs"
signature: "public Vector<Integer> getNotificationIDs(String type)"
title: "TimerMBean.getNotificationIDs"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.getNotificationIDs

```java
public Vector<Integer> getNotificationIDs(String type)
```

Gets all the identifiers of timer notifications corresponding to the specified type.

**参数**

- **type** — The timer notification type.

**返回**

- A vector of Integer objects containing all the identifiers of timer notifications with the specified type.  The vector is empty if there is no timer notifications registered for this timer MBean with the specified type.
