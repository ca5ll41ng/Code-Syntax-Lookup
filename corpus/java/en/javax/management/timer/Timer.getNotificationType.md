---
id: "java-en-function-timer-getnotificationtype"
language: "java"
lang: "en"
category: "function"
name: "Timer.getNotificationType"
signature: "public synchronized String getNotificationType(Integer id)"
title: "Timer.getNotificationType"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getNotificationType

```java
public synchronized String getNotificationType(Integer id)
```

Gets the timer notification type corresponding to the specified identifier.

**参数**

- **id** — The timer notification identifier.

**返回**

- The timer notification type or null if the identifier is not mapped to any timer notification registered for this timer MBean.
