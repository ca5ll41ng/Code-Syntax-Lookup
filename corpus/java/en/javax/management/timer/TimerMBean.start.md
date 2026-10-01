---
id: "java-en-function-timermbean-start"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.start"
signature: "public void start()"
title: "TimerMBean.start"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.start

```java
public void start()
```

Starts the timer.
 

 If there is one or more timer notifications before the time in the list of notifications, the notification
 is sent according to the sendPastNotifications flag and then, updated
 according to its period and remaining number of occurrences.
 If the timer notification date remains earlier than the current date, this notification is just removed
 from the list of notifications.
