---
id: "java-en-function-mbeanservernotification-mbeanservernotification"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotification.MBeanServerNotification"
signature: "public MBeanServerNotification(String type, Object source, long sequenceNumber, ObjectName objectName)"
title: "MBeanServerNotification.MBeanServerNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotification.MBeanServerNotification

```java
public MBeanServerNotification(String type, Object source, long sequenceNumber, ObjectName objectName)
```

Creates an MBeanServerNotification object specifying object names of
 the MBeans that caused the notification and the specified notification
 type.

**参数**

- **type** — A string denoting the type of the notification. Set it to one these values: `REGISTRATION_NOTIFICATION`, `UNREGISTRATION_NOTIFICATION`.
- **source** — The MBeanServerNotification object responsible for forwarding MBean server notification.
- **sequenceNumber** — A sequence number that can be used to order received notifications.
- **objectName** — The object name of the MBean that caused the notification.
