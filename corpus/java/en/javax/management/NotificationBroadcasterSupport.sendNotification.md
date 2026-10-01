---
id: "java-en-function-notificationbroadcastersupport-sendnotification"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcasterSupport.sendNotification"
signature: "public void sendNotification(Notification notification)"
title: "NotificationBroadcasterSupport.sendNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcasterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcasterSupport.sendNotification

```java
public void sendNotification(Notification notification)
```

Sends a notification.

 If an `Executor` was specified in the constructor, it will be given one
 task per selected listener to deliver the notification to that listener.

**参数**

- **notification** — The notification to send.
