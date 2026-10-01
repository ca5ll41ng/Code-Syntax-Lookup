---
id: "java-en-function-mbeannotificationinfo-mbeannotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "MBeanNotificationInfo.MBeanNotificationInfo"
signature: "public MBeanNotificationInfo(String[] notifTypes, String name, String description)"
title: "MBeanNotificationInfo.MBeanNotificationInfo"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanNotificationInfo.MBeanNotificationInfo

```java
public MBeanNotificationInfo(String[] notifTypes, String name, String description)
```

Constructs an `MBeanNotificationInfo` object.

**参数**

- **notifTypes** — The array of strings (in dot notation) containing the notification types that the MBean may emit. This may be null with the same effect as a zero-length array.
- **name** — The fully qualified Java class name of the described notifications.
- **description** — A human readable description of the data.
