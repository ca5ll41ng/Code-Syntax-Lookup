---
id: "java-en-function-attribute-isordered"
language: "java"
lang: "en"
category: "function"
name: "Attribute.isOrdered"
signature: "boolean isOrdered()"
title: "Attribute.isOrdered"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute.isOrdered

```java
boolean isOrdered()
```

Determines whether this attribute's values are ordered.
 If an attribute's values are ordered, duplicate values are allowed.
 If an attribute's values are unordered, they are presented
 in any order and there are no duplicate values.

**返回**

- true if this attribute's values are ordered; false otherwise.

**参见**

- #get(int)
- #remove(int)
- #add(int, java.lang.Object)
- #set(int, java.lang.Object)
