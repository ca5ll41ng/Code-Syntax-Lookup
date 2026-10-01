---
id: "java-en-function-standardemittermbean-sendnotification"
language: "java"
lang: "en"
category: "function"
name: "StandardEmitterMBean.sendNotification"
signature: "public void sendNotification(Notification n)"
title: "StandardEmitterMBean.sendNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/StandardEmitterMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StandardEmitterMBean.sendNotification

```java
public void sendNotification(Notification n)
```

Sends a notification.

 

If the `emitter` parameter to the constructor was an
 instance of `NotificationBroadcasterSupport` then this
 method will call `emitter.``sendNotification
 sendNotification`.

**参数**

- **n** — the notification to send.

**异常**

- **ClassCastException** — if the `emitter` parameter to the constructor was not a `NotificationBroadcasterSupport`.
