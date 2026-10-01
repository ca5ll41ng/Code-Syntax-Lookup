---
id: "java-en-function-mbeanserver-addnotificationlistener"
language: "java"
lang: "en"
category: "function"
name: "MBeanServer.addNotificationListener"
signature: "public void addNotificationListener(ObjectName name, NotificationListener listener, NotificationFilter filter, Object handback) throws InstanceNotFoundException"
title: "MBeanServer.addNotificationListener"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServer.addNotificationListener

```java
public void addNotificationListener(ObjectName name, NotificationListener listener, NotificationFilter filter, Object handback) throws InstanceNotFoundException
```

{@inheritDoc}
 If the source of the notification
 is a reference to an MBean object, the MBean server will replace it
 by that MBean's ObjectName.  Otherwise the source is unchanged.
