---
id: "java-en-function-modelmbeannotificationbroadcaster-sendattributechangenotification"
language: "java"
lang: "en"
category: "function"
name: "ModelMBeanNotificationBroadcaster.sendAttributeChangeNotification"
signature: "public void sendAttributeChangeNotification(AttributeChangeNotification notification) throws MBeanException, RuntimeOperationsException"
title: "ModelMBeanNotificationBroadcaster.sendAttributeChangeNotification"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/ModelMBeanNotificationBroadcaster.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModelMBeanNotificationBroadcaster.sendAttributeChangeNotification

```java
public void sendAttributeChangeNotification(AttributeChangeNotification notification) throws MBeanException, RuntimeOperationsException
```

Sends an attributeChangeNotification which is passed in to
 the registered attributeChangeNotification listeners on the
 ModelMBean.

**参数**

- **notification** — The notification which is to be passed to the 'handleNotification' method of the listener object.

**异常**

- **MBeanException** — Wraps a distributed communication Exception.
- **RuntimeOperationsException** — Wraps an IllegalArgumentException: The AttributeChangeNotification object passed in parameter is null.
