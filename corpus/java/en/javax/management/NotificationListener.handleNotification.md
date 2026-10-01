---
id: "java-en-function-notificationlistener-handlenotification"
language: "java"
lang: "en"
category: "function"
name: "NotificationListener.handleNotification"
signature: "public void handleNotification(Notification notification, Object handback)"
title: "NotificationListener.handleNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationListener.handleNotification

```java
public void handleNotification(Notification notification, Object handback)
```

Invoked when a JMX notification occurs.
 The implementation of this method should return as soon as possible, to avoid
 blocking its notification broadcaster.

**参数**

- **notification** — The notification.
- **handback** — An opaque object which helps the listener to associate information regarding the MBean emitter. This object is passed to the addNotificationListener call and resent, without modification, to the listener.
