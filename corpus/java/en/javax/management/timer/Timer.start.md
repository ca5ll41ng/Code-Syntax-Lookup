---
id: "java-en-function-timer-start"
language: "java"
lang: "en"
category: "function"
name: "Timer.start"
signature: "public synchronized void start()"
title: "Timer.start"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.start

```java
public synchronized void start()
```

Starts the timer.
 

 If there is one or more timer notifications before the time in the list of notifications, the notification
 is sent according to the sendPastNotifications flag and then, updated
 according to its period and remaining number of occurrences.
 If the timer notification date remains earlier than the current date, this notification is just removed
 from the list of notifications.
