---
id: "java-en-function-attributedelement-findattributes"
language: "java"
lang: "en"
category: "function"
name: "AttributedElement.findAttributes"
signature: "default <T extends Attribute<T>> List<T> findAttributes(AttributeMapper<T> attr)"
title: "AttributedElement.findAttributes"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedElement.findAttributes

```java
default <T extends Attribute<T>> List<T> findAttributes(AttributeMapper<T> attr)
```

Finds attributes by name.  This is suitable to find attributes that
 `allowMultiple() allow multiple instances`
 in one structure.

**参数**

- **attr** — the attribute mapper
- **the** — type of the attribute

**返回**

- the attributes, or an empty `List` if the attribute is not present
