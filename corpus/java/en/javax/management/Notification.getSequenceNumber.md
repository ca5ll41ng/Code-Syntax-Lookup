---
id: "java-en-function-notification-getsequencenumber"
language: "java"
lang: "en"
category: "function"
name: "Notification.getSequenceNumber"
signature: "public long getSequenceNumber()"
title: "Notification.getSequenceNumber"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Notification.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Notification.getSequenceNumber

```java
public long getSequenceNumber()
```

Get the notification sequence number.

**返回**

- The notification sequence number within the source object. It's a serial number identifying a particular instance of notification in the context of the notification source. The notification model does not assume that notifications will be received in the same order that they are sent. The sequence number helps listeners to sort received notifications.

**参见**

- #setSequenceNumber
