---
id: "java-en-function-attribute-contains"
language: "java"
lang: "en"
category: "function"
name: "Attribute.contains"
signature: "boolean contains(Object attrVal)"
title: "Attribute.contains"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.contains

```java
boolean contains(Object attrVal)
```

Determines whether a value is in the attribute.
 Equality is determined by the implementation, which may use
 `Object.equals()` or schema information to determine equality.

**参数**

- **attrVal** — The possibly null value to check. If null, check whether the attribute has an attribute value whose value is null.

**返回**

- true if attrVal is one of this attribute's values; false otherwise.

**参见**

- java.lang.Object#equals
- BasicAttribute#equals
