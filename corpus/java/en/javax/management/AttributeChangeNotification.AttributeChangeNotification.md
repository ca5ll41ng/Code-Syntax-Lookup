---
id: "java-en-function-attributechangenotification-attributechangenotification"
language: "java"
lang: "en"
category: "function"
name: "AttributeChangeNotification.AttributeChangeNotification"
signature: "public AttributeChangeNotification(Object source, long sequenceNumber, long timeStamp, String msg, String attributeName, String attributeType, Object oldValue, Object newValue)"
title: "AttributeChangeNotification.AttributeChangeNotification"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeChangeNotification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeChangeNotification.AttributeChangeNotification

```java
public AttributeChangeNotification(Object source, long sequenceNumber, long timeStamp, String msg, String attributeName, String attributeType, Object oldValue, Object newValue)
```

Constructs an attribute change notification object.
 In addition to the information common to all notification, the caller must supply the name and type
 of the attribute, as well as its old and new values.

**参数**

- **source** — The notification producer, that is, the MBean the attribute belongs to.
- **sequenceNumber** — The notification sequence number within the source object.
- **timeStamp** — The date at which the notification is being sent.
- **msg** — A String containing the message of the notification.
- **attributeName** — A String giving the name of the attribute.
- **attributeType** — A String containing the type of the attribute.
- **oldValue** — An object representing value of the attribute before the change.
- **newValue** — An object representing value of the attribute after the change.
