---
id: "java-en-function-notificationfilter-isnotificationenabled"
language: "java"
lang: "en"
category: "function"
name: "NotificationFilter.isNotificationEnabled"
signature: "public boolean isNotificationEnabled(Notification notification)"
title: "NotificationFilter.isNotificationEnabled"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationFilter.isNotificationEnabled

```java
public boolean isNotificationEnabled(Notification notification)
```

Invoked before sending the specified notification to the listener.

**参数**

- **notification** — The notification to be sent.

**返回**

- true if the notification has to be sent to the listener, false otherwise.
