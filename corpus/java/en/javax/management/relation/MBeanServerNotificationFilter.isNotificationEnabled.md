---
id: "java-en-function-mbeanservernotificationfilter-isnotificationenabled"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotificationFilter.isNotificationEnabled"
signature: "public synchronized boolean isNotificationEnabled(Notification notif) throws IllegalArgumentException"
title: "MBeanServerNotificationFilter.isNotificationEnabled"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/MBeanServerNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotificationFilter.isNotificationEnabled

```java
public synchronized boolean isNotificationEnabled(Notification notif) throws IllegalArgumentException
```

Invoked before sending the specified notification to the listener.
 

If:
 

- the ObjectName of the concerned MBean is selected (explicitly OR
 (implicitly and not explicitly deselected))
 

AND
 

- the type of the operation (registration or unregistration) is
 selected
 

then the notification is sent to the listener.

**参数**

- **notif** — The notification to be sent.

**返回**

- true if the notification has to be sent to the listener, false otherwise.

**异常**

- **IllegalArgumentException** — if null parameter
