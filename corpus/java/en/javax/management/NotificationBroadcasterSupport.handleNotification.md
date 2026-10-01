---
id: "java-en-function-notificationbroadcastersupport-handlenotification"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcasterSupport.handleNotification"
signature: "protected void handleNotification(NotificationListener listener, Notification notif, Object handback)"
title: "NotificationBroadcasterSupport.handleNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcasterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcasterSupport.handleNotification

```java
protected void handleNotification(NotificationListener listener, Notification notif, Object handback)
```

This method is called by `sendNotification
 sendNotification` for each listener in order to send the
 notification to that listener.  It can be overridden in
 subclasses to change the behavior of notification delivery,
 for instance to deliver the notification in a separate
 thread.

 

The default implementation of this method is equivalent to
 
```

 listener.handleNotification(notif, handback);
 
```

**参数**

- **listener** — the listener to which the notification is being delivered.
- **notif** — the notification being delivered to the listener.
- **handback** — the handback object that was supplied when the listener was added.
