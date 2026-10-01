---
id: "java-en-function-requiredmodelmbean-addnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "RequiredModelMBean.addNotificationListener"
signature: "public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws java.lang.IllegalArgumentException"
title: "RequiredModelMBean.addNotificationListener"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/RequiredModelMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RequiredModelMBean.addNotificationListener

```java
public void addNotificationListener(NotificationListener listener, NotificationFilter filter, Object handback) throws java.lang.IllegalArgumentException
```

Registers an object which implements the NotificationListener
 interface as a listener.  This
 object's 'handleNotification()' method will be invoked when any
 notification is issued through or by the ModelMBean.  This does
 not include attributeChangeNotifications.  They must be registered
 for independently.

**参数**

- **listener** — The listener object which will handles notifications emitted by the registered MBean.
- **filter** — The filter object. If null, no filtering will be performed before handling notifications.
- **handback** — The context to be sent to the listener with the notification when a notification is emitted.

**异常**

- **IllegalArgumentException** — The listener cannot be null.

**参见**

- #removeNotificationListener
