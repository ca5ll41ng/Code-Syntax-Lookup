---
id: "java-en-function-mbeanserverconnection-removenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerConnection.removeNotificationListener"
signature: "public void removeNotificationListener(ObjectName name, ObjectName listener) throws InstanceNotFoundException, ListenerNotFoundException, IOException"
title: "MBeanServerConnection.removeNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerConnection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerConnection.removeNotificationListener

```java
public void removeNotificationListener(ObjectName name, ObjectName listener) throws InstanceNotFoundException, ListenerNotFoundException, IOException
```

Removes a listener from a registered MBean.

 

 If the listener is registered more than once, perhaps with
 different filters or callbacks, this method will remove all
 those registrations.

**参数**

- **name** — The name of the MBean on which the listener should be removed.
- **listener** — The object name of the listener to be removed.

**异常**

- **InstanceNotFoundException** — The MBean name provided does not match any of the registered MBeans.
- **ListenerNotFoundException** — The listener is not registered in the MBean.
- **IOException** — A communication problem occurred when talking to the MBean server.

**参见**

- #addNotificationListener(ObjectName, ObjectName, NotificationFilter, Object)
