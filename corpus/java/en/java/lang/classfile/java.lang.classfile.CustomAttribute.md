---
id: "java-en-function-java-lang-classfile-customattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CustomAttribute"
title: "CustomAttribute"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CustomAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CustomAttribute

Models a user-defined attribute in a `class` file.  API models for
 user-defined attributes should extend this class.  A user-defined attribute
 should also have an `AttributeMapper` defined, which will be returned
 by `attributeMapper`, and registered to the `ClassFile.AttributeMapperOption` so the user-defined attributes can be read.
 

 Accessor methods on user-defined attributes read from `class` files
 may throw `IllegalArgumentException` if the attribute model is lazily
 evaluated, and the evaluation encounters malformed `class` file format
 for the attribute.

**参数**

- **the** — custom attribute type

**参见**

- java.lang.classfile.attribute

> *Since 24*
