---
id: "java-en-function-jmxconnectorserver-getnotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "JMXConnectorServer.getNotificationInfo"
signature: "public MBeanNotificationInfo[] getNotificationInfo()"
title: "JMXConnectorServer.getNotificationInfo"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/JMXConnectorServer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JMXConnectorServer.getNotificationInfo

```java
public MBeanNotificationInfo[] getNotificationInfo()
```

Returns an array indicating the notifications that this MBean
 sends. The implementation in JMXConnectorServer
 returns an array with one element, indicating that it can emit
 notifications of class `JMXConnectionNotification` with
 the types defined in that class.  A subclass that can emit other
 notifications should return an array that contains this element
 plus descriptions of the other notifications.

**返回**

- the array of possible notifications.
