---
id: "java-en-function-targetednotification-targetednotification"
language: "java"
lang: "en"
category: "function"
name: "TargetedNotification.TargetedNotification"
signature: "public TargetedNotification(Notification notification, Integer listenerID)"
title: "TargetedNotification.TargetedNotification"
directive: "method"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/TargetedNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TargetedNotification.TargetedNotification

```java
public TargetedNotification(Notification notification, Integer listenerID)
```

Constructs a TargetedNotification object.  The
 object contains a pair (Notification, Listener ID).
 The Listener ID identifies the client listener to which that
 notification is targeted. The client listener ID is one
 previously returned by the connector server in response to an
 addNotificationListener request.

**参数**

- **notification** — Notification emitted from the MBean server.
- **listenerID** — The ID of the listener to which this notification is targeted.

**异常**

- **IllegalArgumentException** — if the listenerID or notification is null.
