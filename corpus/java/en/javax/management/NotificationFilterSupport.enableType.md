---
id: "java-en-function-notificationfiltersupport-enabletype"
language: "java"
lang: "en"
category: "function"
name: "NotificationFilterSupport.enableType"
signature: "public synchronized void enableType(String prefix) throws IllegalArgumentException"
title: "NotificationFilterSupport.enableType"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationFilterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationFilterSupport.enableType

```java
public synchronized void enableType(String prefix) throws IllegalArgumentException
```

Enables all the notifications the type of which starts with the specified prefix
 to be sent to the listener.
 
If the specified prefix is already in the list of enabled notification types,
 this method has no effect.
 

 Example:
 
```

 // Enables all notifications the type of which starts with "my_example" to be sent.
 myFilter.enableType("my_example");
 // Enables all notifications the type of which is "my_example.my_type" to be sent.
 myFilter.enableType("my_example.my_type");
 
```

 

 Note that:
 
 myFilter.enableType("my_example.*");
 
 will no match any notification type.

**参数**

- **prefix** — The prefix.

**异常**

- **java.lang.IllegalArgumentException** — The prefix parameter is null.
