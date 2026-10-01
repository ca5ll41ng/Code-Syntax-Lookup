---
id: "java-en-function-mbeanserverconnection-addnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.addNotificationListener"
signature: "public void addNotificationListener(ObjectName name, NotificationListener listener, NotificationFilter filter, Object handback) throws InstanceNotFoundException, IOException"
title: "MBeanServerConnection.addNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.addNotificationListener

```java
public void addNotificationListener(ObjectName name, NotificationListener listener, NotificationFilter filter, Object handback) throws InstanceNotFoundException, IOException
```

Adds a listener to a registered MBean.
 Notifications emitted by the MBean will be forwarded to the listener.

**参数**

- **name** — The name of the MBean on which the listener should be added.
- **listener** — The listener object which will handle the notifications emitted by the registered MBean.
- **filter** — The filter object. If filter is null, no filtering will be performed before handling notifications.
- **handback** — The context to be sent to the listener when a notification is emitted.

**异常**

- **InstanceNotFoundException** — The MBean name provided does not match any of the registered MBeans.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #removeNotificationListener(ObjectName, NotificationListener)
- #removeNotificationListener(ObjectName, NotificationListener, NotificationFilter, Object)
