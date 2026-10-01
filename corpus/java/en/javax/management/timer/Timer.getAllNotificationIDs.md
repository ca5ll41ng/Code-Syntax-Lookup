---
id: "java-en-function-timer-getallnotificationids"
language: "java"
lang: "en"
category: "function"
name: "Timer.getAllNotificationIDs"
signature: "public synchronized Vector<Integer> getAllNotificationIDs()"
title: "Timer.getAllNotificationIDs"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.getAllNotificationIDs

```java
public synchronized Vector<Integer> getAllNotificationIDs()
```

Gets all timer notification identifiers registered into the list of notifications.

**返回**

- A vector of Integer objects containing all the timer notification identifiers.  The vector is empty if there is no timer notification registered for this timer MBean.
