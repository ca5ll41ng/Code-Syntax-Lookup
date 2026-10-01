---
id: "java-en-function-attributechangenotificationfilter-disableattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeChangeNotificationFilter.disableAttribute"
signature: "public synchronized void disableAttribute(String name)"
title: "AttributeChangeNotificationFilter.disableAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeChangeNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeChangeNotificationFilter.disableAttribute

```java
public synchronized void disableAttribute(String name)
```

Disables all the attribute change notifications the attribute name of which equals
 the specified attribute name to be sent to the listener.
 
If the specified name is not in the list of enabled attribute names,
 this method has no effect.

**参数**

- **name** — The attribute name.
