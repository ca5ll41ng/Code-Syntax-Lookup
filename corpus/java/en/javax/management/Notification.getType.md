---
id: "java-en-function-notification-gettype"
language: "java"
lang: "en"
category: "function"
name: "Notification.getType"
signature: "public String getType()"
title: "Notification.getType"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Notification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Notification.getType

```java
public String getType()
```

Get the notification type.

**返回**

- The notification type. It's a string expressed in a dot notation similar to Java properties. It is recommended that the notification type should follow the reverse-domain-name convention used by Java package names.  An example of a notification type is com.sun.management.gc.notification
