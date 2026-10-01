---
id: "java-en-function-relationservice-handlenotification"
language: "java"
lang: "en"
category: "function"
name: "RelationService.handleNotification"
signature: "public void handleNotification(Notification notif, Object handback)"
title: "RelationService.handleNotification"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RelationService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RelationService.handleNotification

```java
public void handleNotification(Notification notif, Object handback)
```

Invoked when a JMX notification occurs.
 Currently handles notifications for unregistration of MBeans, either
 referenced in a relation role or being a relation itself.

**参数**

- **notif** — The notification.
- **handback** — An opaque object which helps the listener to associate information regarding the MBean emitter (can be null).
