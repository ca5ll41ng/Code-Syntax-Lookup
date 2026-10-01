---
id: "java-en-function-java-lang-classfile-fieldtransform"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.FieldTransform"
title: "FieldTransform"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldTransform

A transformation on streams of `FieldElement`.
 

 Refer to `ClassFileTransform` for general guidance and caution around
 the use of transforms for structures in the `class` file format.
 

 A field transform can be lifted to a class transform via `transformingFields`, transforming only
 the `FieldModel` among the class members and passing all other elements
 to the builders.

**参见**

- FieldModel
- ClassBuilder#transformField

> *Since 24*
