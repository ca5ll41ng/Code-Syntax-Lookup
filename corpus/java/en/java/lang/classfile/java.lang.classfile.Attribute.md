---
id: "java-en-function-java-lang-classfile-attribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Attribute"
title: "Attribute"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute

Models an attribute (JVMS {@jvms 4.7}) in the `class` file format.
 Attributes exist on certain `class` file structures modeled by `AttributedElement`, which provides basic read access to the attributes.
 

 This sealed interface hierarchy includes attributes predefined in the JVMS
 and JDK-specific nonstandard attributes.  Their `attributeMapper()
 mappers` are available in `Attributes`.  Two special subtypes of `Attribute` are `CustomAttribute`, which all user-defined attributes
 should extend from, and `UnknownAttribute`, representing attributes
 read from `class` file but are not recognized by the `ClassFile.AttributeMapperOption`.
 

 Attributes are read through `AttributedElement` or element traversal of
 a `CompoundElement`; they are written through `ClassFileBuilder`.
 See `#reading Reading Attributes`
 and `#writing Writing Attributes`
 for more details.

**参数**

- **the** — attribute type

**参见**

- java.lang.classfile.attribute
- AttributeMapper
- AttributedElement
- CustomAttribute
- UnknownAttribute

> *Since 24*
