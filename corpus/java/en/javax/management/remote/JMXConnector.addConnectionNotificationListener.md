---
id: "java-en-function-jmxconnector-addconnectionnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.addConnectionNotificationListener"
signature: "public void addConnectionNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback)"
title: "JMXConnector.addConnectionNotificationListener"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.addConnectionNotificationListener

```java
public void addConnectionNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback)
```

Adds a listener to be informed of changes in connection
 status.  The listener will receive notifications of type `JMXConnectionNotification`.  An implementation can send other
 types of notifications too.

 

Any number of listeners can be added with this method.  The
 same listener can be added more than once with the same or
 different values for the filter and handback.  There is no
 special treatment of a duplicate entry.  For example, if a
 listener is registered twice with no filter, then its
 handleNotification method will be called twice for
 each notification.

**参数**

- **listener** — a listener to receive connection status notifications.
- **filter** — a filter to select which notifications are to be delivered to the listener, or null if all notifications are to be delivered.
- **handback** — an object to be given to the listener along with each notification.  Can be null.

**异常**

- **NullPointerException** — if listener is null.

**参见**

- #removeConnectionNotificationListener
- javax.management.NotificationBroadcaster#addNotificationListener
