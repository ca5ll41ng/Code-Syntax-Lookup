---
id: "java-en-function-modelmbeannotificationbroadcaster-addattributechangenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanNotificationBroadcaster.addAttributeChangeNotificationListener"
signature: "public void addAttributeChangeNotificationListener(NotificationListener listener, String attributeName, Object handback) throws MBeanException, RuntimeOperationsException, IllegalArgumentException"
title: "ModelMBeanNotificationBroadcaster.addAttributeChangeNotificationListener"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanNotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanNotificationBroadcaster.addAttributeChangeNotificationListener

```java
public void addAttributeChangeNotificationListener(NotificationListener listener, String attributeName, Object handback) throws MBeanException, RuntimeOperationsException, IllegalArgumentException
```

Registers an object which implements the NotificationListener interface as a listener.  This
 object's 'handleNotification()' method will be invoked when any attributeChangeNotification is issued through
 or by the ModelMBean.  This does not include other Notifications.  They must be registered
 for independently. An AttributeChangeNotification will be generated for this attributeName.

**参数**

- **listener** — The listener object which will handles notifications emitted by the registered MBean.
- **attributeName** — The name of the ModelMBean attribute for which to receive change notifications. If null, then all attribute changes will cause an attributeChangeNotification to be issued.
- **handback** — The context to be sent to the listener with the notification when a notification is emitted.

**异常**

- **IllegalArgumentException** — The listener cannot be null.
- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException The attribute name passed in parameter does not exist.

**参见**

- #removeAttributeChangeNotificationListener
