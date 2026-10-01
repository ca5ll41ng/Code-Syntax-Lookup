---
id: "java-en-function-attribute-add"
language: "java"
lang: "en"
category: "function"
name: "Attribute.add"
signature: "boolean add(Object attrVal)"
title: "Attribute.add"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.add

```java
boolean add(Object attrVal)
```

Adds a new value to the attribute.
 If the attribute values are unordered and
 `attrVal` is already in the attribute, this method does nothing.
 If the attribute values are ordered, `attrVal` is added to the end of
 the list of attribute values.

 Equality is determined by the implementation, which may use
 `Object.equals()` or schema information to determine equality.

**参数**

- **attrVal** — The new possibly null value to add. If null, null is added as an attribute value.

**返回**

- true if a value was added; false otherwise.
