---
id: "java-en-function-notificationfiltersupport-disabletype"
language: "java"
lang: "en"
category: "function"
name: "NotificationFilterSupport.disableType"
signature: "public synchronized void disableType(String prefix)"
title: "NotificationFilterSupport.disableType"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/NotificationFilterSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NotificationFilterSupport.disableType

```java
public synchronized void disableType(String prefix)
```

Removes the given prefix from the prefix list.
 
If the specified prefix is not in the list of enabled notification types,
 this method has no effect.

**参数**

- **prefix** — The prefix.
