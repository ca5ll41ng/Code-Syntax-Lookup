---
id: "java-en-function-attributedelement-findattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributedElement.findAttribute"
signature: "default <T extends Attribute<T>> Optional<T> findAttribute(AttributeMapper<T> attr)"
title: "AttributedElement.findAttribute"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedElement.findAttribute

```java
default <T extends Attribute<T>> Optional<T> findAttribute(AttributeMapper<T> attr)
```

Finds an attribute by name.  This is suitable to find attributes that
 `allowMultiple() allow at most one instance`
 in one structure.  If this is used to find attributes that allow multiple
 instances in one structure, the first matching instance is returned.

 This can easily find an attribute and send it to another `ClassFileBuilder`, which is a `Consumer`:
 {@snippet lang=java :
 MethodModel method = null; // @replace substring=null; replacement=...
 MethodBuilder mb = null; // @replace substring=null; replacement=...
 method.findAttribute(Attributes.code()).ifPresent(mb);
 }

**参数**

- **attr** — the attribute mapper
- **the** — type of the attribute

**返回**

- the attribute, or `Optional.empty()` if the attribute is not present
