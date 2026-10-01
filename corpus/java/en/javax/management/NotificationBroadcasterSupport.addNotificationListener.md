---
id: "java-en-function-notificationbroadcastersupport-addnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcasterSupport.addNotificationListener"
signature: "public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback)"
title: "NotificationBroadcasterSupport.addNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcasterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcasterSupport.addNotificationListener

```java
public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback)
```

Adds a listener.

**参数**

- **listener** — The listener to receive notifications.
- **filter** — The filter object. If filter is null, no filtering will be performed before handling notifications.
- **handback** — An opaque object to be sent back to the listener when a notification is emitted. This object cannot be used by the Notification broadcaster object. It should be resent unchanged with the notification to the listener.

**异常**

- **IllegalArgumentException** — thrown if the listener is null.

**参见**

- #removeNotificationListener
