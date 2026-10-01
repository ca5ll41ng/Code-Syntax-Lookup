---
id: "java-en-function-basicattribute-remove"
language: "java"
lang: "en"
category: "function"
name: "BasicAttribute.remove"
signature: "public boolean remove(Object attrval)"
title: "BasicAttribute.remove"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute.remove

```java
public boolean remove(Object attrval)
```

Removes a specified value from this attribute.

 By default, `Object.equals()` is used when comparing `attrVal`
 with this attribute's values except when `attrVal` is an array.
 For an array, each element of the array is checked using
 `Object.equals()`.
 A subclass may use schema information to determine equality.
