---
id: "java-en-function-attributes-getids"
language: "java"
lang: "en"
category: "function"
name: "Attributes.getIDs"
signature: "NamingEnumeration<String> getIDs()"
title: "Attributes.getIDs"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes.getIDs

```java
NamingEnumeration<String> getIDs()
```

Retrieves an enumeration of the ids of the attributes in the
 attribute set.
 The effects of updates to this attribute set on this enumeration
 are undefined.

**返回**

- A non-null enumeration of the attributes' ids in this attribute set. Each element of the enumeration is of class String. If attribute set has zero attributes, an empty enumeration is returned.
