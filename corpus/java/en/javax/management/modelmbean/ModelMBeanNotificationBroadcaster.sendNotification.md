---
id: "java-en-function-modelmbeannotificationbroadcaster-sendnotification"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanNotificationBroadcaster.sendNotification"
signature: "public void sendNotification(Notification ntfyObj) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanNotificationBroadcaster.sendNotification"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanNotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanNotificationBroadcaster.sendNotification

```java
public void sendNotification(Notification ntfyObj) throws MBeanException, RuntimeOperationsException
```

Sends a Notification which is passed in to the registered
 Notification listeners on the ModelMBean as a
 jmx.modelmbean.generic notification.

**参数**

- **ntfyObj** — The notification which is to be passed to the 'handleNotification' method of the listener object.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException: The Notification object passed in parameter is null.
