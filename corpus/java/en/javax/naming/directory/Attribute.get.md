---
id: "java-en-function-attribute-get"
language: "java"
lang: "en"
category: "function"
name: "Attribute.get"
signature: "Object get() throws NamingException"
title: "Attribute.get"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.get

```java
Object get() throws NamingException
```

Retrieves one of this attribute's values.
 If the attribute has more than one value and is unordered, any one of
 the values is returned.
 If the attribute has more than one value and is ordered, the
 first value is returned.

**返回**

- A possibly null object representing one of the attribute's value. It is null if the attribute's value is null.

**异常**

- **NamingException** — If a naming exception was encountered while retrieving the value.
- **java.util.NoSuchElementException** — If this attribute has no values.
