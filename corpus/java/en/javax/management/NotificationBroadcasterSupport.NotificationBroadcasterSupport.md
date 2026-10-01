---
id: "java-en-function-notificationbroadcastersupport-notificationbroadcastersupport"
language: "java"
lang: "en"
category: "function"
name: "NotificationBroadcasterSupport.NotificationBroadcasterSupport"
signature: "public NotificationBroadcasterSupport()"
title: "NotificationBroadcasterSupport.NotificationBroadcasterSupport"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationBroadcasterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationBroadcasterSupport.NotificationBroadcasterSupport

```java
public NotificationBroadcasterSupport()
```

Constructs a NotificationBroadcasterSupport where each listener is invoked by the
 thread sending the notification. This constructor is equivalent to
 `NotificationBroadcasterSupport(Executor,
 MBeanNotificationInfo[] info) NotificationBroadcasterSupport`.
