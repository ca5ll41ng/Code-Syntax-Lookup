---
id: "java-en-function-timer-getnotificationmessage"
language: "java"
lang: "en"
category: "function"
name: "Timer.getNotificationMessage"
signature: "public synchronized String getNotificationMessage(Integer id)"
title: "Timer.getNotificationMessage"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getNotificationMessage

```java
public synchronized String getNotificationMessage(Integer id)
```

Gets the timer notification detailed message corresponding to the specified identifier.

**参数**

- **id** — The timer notification identifier.

**返回**

- The timer notification detailed message or null if the identifier is not mapped to any timer notification registered for this timer MBean.
