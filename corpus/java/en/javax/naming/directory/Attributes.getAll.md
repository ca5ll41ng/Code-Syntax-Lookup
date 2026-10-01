---
id: "java-en-function-attributes-getall"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getAll"
signature: "NamingEnumeration<? extends Attribute> getAll()"
title: "Attributes.getAll"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getAll

```java
NamingEnumeration<? extends Attribute> getAll()
```

Retrieves an enumeration of the attributes in the attribute set.
 The effects of updates to this attribute set on this enumeration
 are undefined.

**返回**

- A non-null enumeration of the attributes in this attribute set. Each element of the enumeration is of class `Attribute`. If attribute set has zero attributes, an empty enumeration is returned.
