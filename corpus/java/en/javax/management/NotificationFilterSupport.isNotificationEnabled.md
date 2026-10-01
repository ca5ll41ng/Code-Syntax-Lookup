---
id: "java-en-function-notificationfiltersupport-isnotificationenabled"
language: "java"
lang: "en"
category: "function"
name: "NotificationFilterSupport.isNotificationEnabled"
signature: "public synchronized boolean isNotificationEnabled(Notification notification)"
title: "NotificationFilterSupport.isNotificationEnabled"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationFilterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationFilterSupport.isNotificationEnabled

```java
public synchronized boolean isNotificationEnabled(Notification notification)
```

Invoked before sending the specified notification to the listener.
 
This filter compares the type of the specified notification with each enabled type.
 If the notification type matches one of the enabled types,
 the notification should be sent to the listener and this method returns true.

**参数**

- **notification** — The notification to be sent.

**返回**

- true if the notification should be sent to the listener, false otherwise.
