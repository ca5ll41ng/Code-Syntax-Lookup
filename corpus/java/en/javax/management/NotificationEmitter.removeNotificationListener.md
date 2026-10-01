---
id: "java-en-function-notificationemitter-removenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "NotificationEmitter.removeNotificationListener"
signature: "public void removeNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws ListenerNotFoundException"
title: "NotificationEmitter.removeNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationEmitter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationEmitter.removeNotificationListener

```java
public void removeNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws ListenerNotFoundException
```

Removes a listener from this MBean.  The MBean must have a
 listener that exactly matches the given listener,
 filter, and handback parameters.  If
 there is more than one such listener, only one is removed.

 

The filter and handback parameters
 may be null if and only if they are null in a listener to be
 removed.

**参数**

- **listener** — A listener that was previously added to this MBean.
- **filter** — The filter that was specified when the listener was added.
- **handback** — The handback that was specified when the listener was added.

**异常**

- **ListenerNotFoundException** — The listener is not registered with the MBean, or it is not registered with the given filter and handback.
