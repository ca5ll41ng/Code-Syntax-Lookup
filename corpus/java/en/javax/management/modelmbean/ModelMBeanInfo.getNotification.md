---
id: "java-en-function-modelmbeaninfo-getnotification"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanInfo.getNotification"
signature: "public ModelMBeanNotificationInfo getNotification(String inName) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanInfo.getNotification"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanInfo.getNotification

```java
public ModelMBeanNotificationInfo getNotification(String inName) throws MBeanException, RuntimeOperationsException
```

Returns a ModelMBeanNotificationInfo requested by name.

**参数**

- **inName** — The name of the ModelMBeanNotificationInfo to get. If no ModelMBeanNotificationInfo exists for this name null is returned.

**返回**

- the info for the named notification, or null if there is none.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException for a null notification name.
