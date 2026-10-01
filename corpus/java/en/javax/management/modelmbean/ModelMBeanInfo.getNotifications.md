---
id: "java-en-function-modelmbeaninfo-getnotifications"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getNotifications"
signature: "public MBeanNotificationInfo[] getNotifications()"
title: "ModelMBeanInfo.getNotifications"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getNotifications

```java
public MBeanNotificationInfo[] getNotifications()
```

Returns the list of the notifications emitted by the MBean.
 Each notification is described by an MBeanNotificationInfo object.
 

 In addition to any notification specified by the application,
 a ModelMBean may always send also two additional notifications:
 
 
-  One with descriptor name "GENERIC" and displayName "jmx.modelmbean.generic"
 
-  Second is a standard attribute change notification
      with descriptor name "ATTRIBUTE_CHANGE" and displayName "jmx.attribute.change"
 

 Thus any implementation of ModelMBeanInfo should always add those two notifications
 in addition to those specified by the application.

**返回**

- An array of MBeanNotificationInfo objects.
