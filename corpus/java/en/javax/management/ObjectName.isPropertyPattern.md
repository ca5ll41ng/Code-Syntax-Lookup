---
id: "java-en-function-objectname-ispropertypattern"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.isPropertyPattern"
signature: "public boolean isPropertyPattern()"
title: "ObjectName.isPropertyPattern"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.isPropertyPattern

```java
public boolean isPropertyPattern()
```

Checks whether the object name is a pattern on the key properties.
 

 An object name is a pattern on the key properties if it is a
 pattern on the key property list (e.g. "d:k=v,*") or on the
 property values (e.g. "d:k=*") or on both (e.g. "d:k=*,*").

**返回**

- True if the name is a property pattern, otherwise false.
