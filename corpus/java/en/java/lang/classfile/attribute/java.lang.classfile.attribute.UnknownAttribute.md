---
id: "java-en-function-java-lang-classfile-attribute-unknownattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.UnknownAttribute"
title: "UnknownAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/UnknownAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnknownAttribute

Models an unknown attribute read from a `class` file.  An attribute is
 unknown if it is not recognized by one of the mappers in `Attributes`
 and is not recognized by the `ClassFile.AttributesProcessingOption`.
 

 An unknown attribute may appear anywhere where an attribute may appear, and
 has an `UNKNOWN unknown` data dependency.

**参见**

- CustomAttribute

> *Since 24*
