---
id: "java-en-function-attribute-getall"
language: "java"
lang: "en"
category: "function"
name: "Attribute.getAll"
signature: "NamingEnumeration<?> getAll() throws NamingException"
title: "Attribute.getAll"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.getAll

```java
NamingEnumeration<?> getAll() throws NamingException
```

Retrieves an enumeration of the attribute's values.
 The behaviour of this enumeration is unspecified
 if the attribute's values are added, changed,
 or removed while the enumeration is in progress.
 If the attribute values are ordered, the enumeration's items
 will be ordered.

**返回**

- A non-null enumeration of the attribute's values. Each element of the enumeration is a possibly null Object. The object's class is the class of the attribute value. The element is null if the attribute's value is null. If the attribute has zero values, an empty enumeration is returned.

**异常**

- **NamingException** — If a naming exception was encountered while retrieving the values.

**参见**

- #isOrdered
