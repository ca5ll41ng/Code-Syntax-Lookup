---
id: "java-en-function-notificationbroadcaster-addnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcaster.addNotificationListener"
signature: "public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws java.lang.IllegalArgumentException"
title: "NotificationBroadcaster.addNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcaster.addNotificationListener

```java
public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws java.lang.IllegalArgumentException
```

Adds a listener to this MBean.

**参数**

- **listener** — The listener object which will handle the notifications emitted by the broadcaster.
- **filter** — The filter object. If filter is null, no filtering will be performed before handling notifications.
- **handback** — An opaque object to be sent back to the listener when a notification is emitted. This object cannot be used by the Notification broadcaster object. It should be resent unchanged with the notification to the listener.

**异常**

- **IllegalArgumentException** — Listener parameter is null.

**参见**

- #removeNotificationListener
