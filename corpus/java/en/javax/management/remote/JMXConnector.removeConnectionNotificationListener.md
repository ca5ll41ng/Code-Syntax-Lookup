---
id: "java-en-function-jmxconnector-removeconnectionnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "JMXConnector.removeConnectionNotificationListener"
signature: "public void removeConnectionNotificationListener(NotificationListener listener) throws ListenerNotFoundException"
title: "JMXConnector.removeConnectionNotificationListener"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnector.removeConnectionNotificationListener

```java
public void removeConnectionNotificationListener(NotificationListener listener) throws ListenerNotFoundException
```

Removes a listener from the list to be informed of changes
 in status.  The listener must previously have been added.  If
 there is more than one matching listener, all are removed.

**参数**

- **listener** — a listener to receive connection status notifications.

**异常**

- **NullPointerException** — if listener is null.
- **ListenerNotFoundException** — if the listener is not registered with this JMXConnector.

**参见**

- #removeConnectionNotificationListener(NotificationListener, NotificationFilter, Object)
- #addConnectionNotificationListener
- javax.management.NotificationEmitter#removeNotificationListener
