---
id: "java-en-function-objectname-getkeypropertylist"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.getKeyPropertyList"
signature: "public Hashtable<String,String> getKeyPropertyList()"
title: "ObjectName.getKeyPropertyList"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.getKeyPropertyList

```java
public Hashtable<String,String> getKeyPropertyList()
```

Returns the key properties as a Hashtable.  The returned
 value is a Hashtable in which each key is a key in the
 ObjectName's key property list and each value is the associated
 value.

 

The returned value may be unmodifiable.  If it is
 modifiable, changing it has no effect on this ObjectName.

**返回**

- The table of key properties.
