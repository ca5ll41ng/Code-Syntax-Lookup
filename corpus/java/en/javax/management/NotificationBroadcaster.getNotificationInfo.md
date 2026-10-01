---
id: "java-en-function-notificationbroadcaster-getnotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcaster.getNotificationInfo"
signature: "public MBeanNotificationInfo[] getNotificationInfo()"
title: "NotificationBroadcaster.getNotificationInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcaster.getNotificationInfo

```java
public MBeanNotificationInfo[] getNotificationInfo()
```

Returns an array indicating, for each notification this
 MBean may send, the name of the Java class of the notification
 and the notification type.

 

It is not illegal for the MBean to send notifications not
 described in this array.  However, some clients of the MBean
 server may depend on the array being complete for their correct
 functioning.

**返回**

- the array of possible notifications.
