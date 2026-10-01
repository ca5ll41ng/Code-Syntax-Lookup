---
id: "java-en-function-mbeanserverdelegate-sendnotification"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerDelegate.sendNotification"
signature: "public void sendNotification(Notification notification)"
title: "MBeanServerDelegate.sendNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerDelegate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerDelegate.sendNotification

```java
public void sendNotification(Notification notification)
```

Enables the MBean server to send a notification.
 If the passed notification has a sequence number lesser
 or equal to 0, then replace it with the delegate's own sequence
 number.

**参数**

- **notification** — The notification to send.
