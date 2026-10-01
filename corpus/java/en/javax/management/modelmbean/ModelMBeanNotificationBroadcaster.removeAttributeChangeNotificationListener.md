---
id: "java-en-function-modelmbeannotificationbroadcaster-removeattributechangenotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanNotificationBroadcaster.removeAttributeChangeNotificationListener"
signature: "public void removeAttributeChangeNotificationListener(NotificationListener listener, String attributeName) throws MBeanException, RuntimeOperationsException, ListenerNotFoundException"
title: "ModelMBeanNotificationBroadcaster.removeAttributeChangeNotificationListener"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanNotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanNotificationBroadcaster.removeAttributeChangeNotificationListener

```java
public void removeAttributeChangeNotificationListener(NotificationListener listener, String attributeName) throws MBeanException, RuntimeOperationsException, ListenerNotFoundException
```

Removes a listener for attributeChangeNotifications from the RequiredModelMBean.

**参数**

- **listener** — The listener name which was handling notifications emitted by the registered MBean. This method will remove all information related to this listener.
- **attributeName** — The attribute for which the listener no longer wants to receive attributeChangeNotifications. If null the listener will be removed for all attributeChangeNotifications.

**异常**

- **ListenerNotFoundException** — The listener is not registered in the MBean or is null.
- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException If the inAttributeName parameter does not correspond to an attribute name.

**参见**

- #addAttributeChangeNotificationListener
