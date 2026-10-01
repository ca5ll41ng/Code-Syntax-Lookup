---
id: "java-en-function-mbeanservernotificationfilter-enableobjectname"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerNotificationFilter.enableObjectName"
signature: "public synchronized void enableObjectName(ObjectName objectName) throws IllegalArgumentException"
title: "MBeanServerNotificationFilter.enableObjectName"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/MBeanServerNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerNotificationFilter.enableObjectName

```java
public synchronized void enableObjectName(ObjectName objectName) throws IllegalArgumentException
```

Enables MBeanServerNotifications concerning given ObjectName.

**参数**

- **objectName** — ObjectName of interest

**异常**

- **IllegalArgumentException** — if the given ObjectName is null
