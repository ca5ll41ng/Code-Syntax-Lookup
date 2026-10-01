---
id: "java-en-function-attributechangenotificationfilter-enableattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributeChangeNotificationFilter.enableAttribute"
signature: "public synchronized void enableAttribute(String name) throws java.lang.IllegalArgumentException"
title: "AttributeChangeNotificationFilter.enableAttribute"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/AttributeChangeNotificationFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeChangeNotificationFilter.enableAttribute

```java
public synchronized void enableAttribute(String name) throws java.lang.IllegalArgumentException
```

Enables all the attribute change notifications the attribute name of which equals
 the specified name to be sent to the listener.
 
If the specified name is already in the list of enabled attribute names,
 this method has no effect.

**参数**

- **name** — The attribute name.

**异常**

- **java.lang.IllegalArgumentException** — The attribute name parameter is null.
