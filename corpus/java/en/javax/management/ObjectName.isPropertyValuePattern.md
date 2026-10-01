---
id: "java-en-function-objectname-ispropertyvaluepattern"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.isPropertyValuePattern"
signature: "public boolean isPropertyValuePattern()"
title: "ObjectName.isPropertyValuePattern"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.isPropertyValuePattern

```java
public boolean isPropertyValuePattern()
```

Checks whether the object name is a pattern on the value part
 of at least one of the key properties.
 

 For example, "d:k=*" and "d:k=*,*" are property value patterns
 whereas "d:k=v,*" is not.

**返回**

- True if the name is a property value pattern, otherwise false.

> *Since 1.6*
