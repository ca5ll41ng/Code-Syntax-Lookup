---
id: "java-en-function-mbeanservernotificationfilter-disableobjectname"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotificationFilter.disableObjectName"
signature: "public synchronized void disableObjectName(ObjectName objectName) throws IllegalArgumentException"
title: "MBeanServerNotificationFilter.disableObjectName"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/MBeanServerNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotificationFilter.disableObjectName

```java
public synchronized void disableObjectName(ObjectName objectName) throws IllegalArgumentException
```

Disables MBeanServerNotifications concerning given ObjectName.

**参数**

- **objectName** — ObjectName no longer of interest

**异常**

- **IllegalArgumentException** — if the given ObjectName is null
