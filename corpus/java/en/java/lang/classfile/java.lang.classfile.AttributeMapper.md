---
id: "java-en-function-java-lang-classfile-attributemapper"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.AttributeMapper"
title: "AttributeMapper"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributeMapper.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributeMapper

Bidirectional mapper between the `class` file representation of an
 attribute and its API model.  The attribute mapper identifies an attribute
 by its `attributeName name`, and is used to parse the
 `class` file representation into a model, and to write the model
 representation back to a `class` file.
 

 `Attributes` defines the mappers for predefined attributes in the JVMS
 and certain conventional attributes.  For other attributes (JVMS {@jvms
 4.7.1}), users can define their own `AttributeMapper`; classes that
 model those attributes should extend `CustomAttribute`.  To read those
 attributes, user-defined `AttributeMapper`s must be registered to the
 `ClassFile.AttributeMapperOption`.

**参数**

- **the** — attribute type

**参见**

- Attributes
- ClassFile.AttributeMapperOption
- java.lang.classfile.attribute

> *Since 24*
