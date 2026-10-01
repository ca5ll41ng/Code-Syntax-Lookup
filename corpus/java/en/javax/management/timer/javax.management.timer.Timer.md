---
id: "java-en-function-javax-management-timer-timer"
language: "java"
lang: "en"
category: "function"
name: "javax.management.timer.Timer"
title: "Timer"
directive: "type"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer

Provides the implementation of the timer MBean.
 The timer MBean sends out an alarm at a specified time
 that wakes up all the listeners registered to receive timer notifications.
 

 This class manages a list of dated timer notifications.
 A method allows users to add/remove as many notifications as required.
 When a timer notification is emitted by the timer and becomes obsolete,
 it is automatically removed from the list of timer notifications.
 
Additional timer notifications can be added into regularly repeating notifications.
 

 Note:
 
 
- When sending timer notifications, the timer updates the notification sequence number
 irrespective of the notification type.
 
- The timer service relies on the system date of the host where the Timer class is loaded.
 Listeners may receive untimely notifications
 if their host has a different system date.
 To avoid such problems, synchronize the system date of all host machines where timing is needed.
 
- The default behavior for periodic notifications is fixed-delay execution, as
     specified in `java.util.Timer`. In order to use fixed-rate execution, use the
     overloaded `addNotification` method.
 
- Notification listeners are potentially all executed in the same
 thread.  Therefore, they should execute rapidly to avoid holding up
 other listeners or perturbing the regularity of fixed-delay
 executions.  See `NotificationBroadcasterSupport`.

> *Since 1.5*
