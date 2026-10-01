---
id: "java-en-function-objectname-ispropertylistpattern"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.isPropertyListPattern"
signature: "public boolean isPropertyListPattern()"
title: "ObjectName.isPropertyListPattern"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.isPropertyListPattern

```java
public boolean isPropertyListPattern()
```

Checks whether the object name is a pattern on the key property list.
 

 For example, "d:k=v,*" and "d:k=*,*" are key property list patterns
 whereas "d:k=*" is not.

**返回**

- True if the name is a property list pattern, otherwise false.

> *Since 1.6*
