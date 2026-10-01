---
id: "java-en-function-attributechangenotificationfilter-isnotificationenabled"
language: "java"
lang: "en"
category: "function"
name: "AttributeChangeNotificationFilter.isNotificationEnabled"
signature: "public synchronized boolean isNotificationEnabled(Notification notification)"
title: "AttributeChangeNotificationFilter.isNotificationEnabled"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeChangeNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeChangeNotificationFilter.isNotificationEnabled

```java
public synchronized boolean isNotificationEnabled(Notification notification)
```

Invoked before sending the specified notification to the listener.
 
This filter compares the attribute name of the specified attribute change notification
 with each enabled attribute name.
 If the attribute name equals one of the enabled attribute names,
 the notification must be sent to the listener and this method returns true.

**参数**

- **notification** — The attribute change notification to be sent.

**返回**

- true if the notification has to be sent to the listener, false otherwise.
