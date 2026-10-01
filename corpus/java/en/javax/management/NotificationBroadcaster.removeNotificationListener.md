---
id: "java-en-function-notificationbroadcaster-removenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcaster.removeNotificationListener"
signature: "public void removeNotificationListener(NotificationListener listener) throws ListenerNotFoundException"
title: "NotificationBroadcaster.removeNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcaster.removeNotificationListener

```java
public void removeNotificationListener(NotificationListener listener) throws ListenerNotFoundException
```

Removes a listener from this MBean.  If the listener
 has been registered with different handback objects or
 notification filters, all entries corresponding to the listener
 will be removed.

**参数**

- **listener** — A listener that was previously added to this MBean.

**异常**

- **ListenerNotFoundException** — The listener is not registered with the MBean.

**参见**

- #addNotificationListener
- NotificationEmitter#removeNotificationListener
