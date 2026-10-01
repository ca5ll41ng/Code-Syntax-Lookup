---
id: "java-en-function-mbeannotificationinfo-getnotiftypes"
language: "java"
lang: "en"
category: "function"
name: "MBeanNotificationInfo.getNotifTypes"
signature: "public String[] getNotifTypes()"
title: "MBeanNotificationInfo.getNotifTypes"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanNotificationInfo.getNotifTypes

```java
public String[] getNotifTypes()
```

Returns the array of strings (in dot notation) containing the
 notification types that the MBean may emit.

**返回**

- the array of strings.  Changing the returned array has no effect on this MBeanNotificationInfo.
