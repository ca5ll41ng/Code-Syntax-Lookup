---
id: "java-en-function-attributemapper-allowmultiple"
language: "java"
lang: "en"
category: "function"
name: "AttributeMapper.allowMultiple"
signature: "default boolean allowMultiple()"
title: "AttributeMapper.allowMultiple"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributeMapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeMapper.allowMultiple

```java
default boolean allowMultiple()
```

{@return whether this attribute may appear more than once in one
 structure}
 

 If an attribute does not allow multiple instances in one structure,
 can be supplied to a `ClassFileBuilder`, and multiple instances of
 the attribute are supplied to the builder, the last supplied attribute
 appears on the built structure.
