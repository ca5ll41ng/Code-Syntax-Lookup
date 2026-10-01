---
id: "java-en-function-javax-management-notificationfiltersupport"
language: "java"
lang: "en"
category: "function"
name: "javax.management.NotificationFilterSupport"
title: "NotificationFilterSupport"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationFilterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationFilterSupport

Provides an implementation of the `javax.management.NotificationFilter` interface.
 The filtering is performed on the notification type attribute.
 

 Manages a list of enabled notification types.
 A method allows users to enable/disable as many notification types as required.
 

 Then, before sending a notification to a listener registered with a filter,
 the notification broadcaster compares this notification type with all notification types
 enabled by the filter. The notification will be sent to the listener
 only if its filter enables this notification type.
 

 Example:
 
```

 NotificationFilterSupport myFilter = new NotificationFilterSupport();
 myFilter.enableType("my_example.my_type");
 myBroadcaster.addListener(myListener, myFilter, null);
 
```

 
 The listener myListener will only receive notifications the type of which equals/starts with "my_example.my_type".

**参见**

- javax.management.NotificationBroadcaster#addNotificationListener

> *Since 1.5*
