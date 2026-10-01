---
id: "java-en-function-objectname-getkeypropertyliststring"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getKeyPropertyListString"
signature: "public String getKeyPropertyListString()"
title: "ObjectName.getKeyPropertyListString"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getKeyPropertyListString

```java
public String getKeyPropertyListString()
```

Returns a string representation of the list of key
 properties specified at creation time.  If this ObjectName was
 constructed with the constructor `ObjectName`,
 the key properties in the returned String will be in the same
 order as in the argument to the constructor.

**返回**

- The key property list string.  This string is independent of whether the ObjectName is a pattern.
