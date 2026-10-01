---
id: "java-en-function-mbeaninfo-getnotifications"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.getNotifications"
signature: "public MBeanNotificationInfo[] getNotifications()"
title: "MBeanInfo.getNotifications"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.getNotifications

```java
public MBeanNotificationInfo[] getNotifications()
```

Returns the list of the notifications emitted by the MBean.
 Each notification is described by an `MBeanNotificationInfo` object.

 The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanNotificationInfo` objects
 but that each referenced `MBeanNotificationInfo` object is not copied.

**返回**

- An array of `MBeanNotificationInfo` objects.
