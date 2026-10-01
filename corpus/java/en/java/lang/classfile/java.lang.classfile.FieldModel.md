---
id: "java-en-function-java-lang-classfile-fieldmodel"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.FieldModel"
title: "FieldModel"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldModel

Models a field.  A field can be viewed as a `CompoundElement
 composition` of `FieldElement`s, or by random access via accessor
 methods if only specific parts of the field is needed.
 

 Fields can be obtained from `fields`, or in the traversal
 of member elements of a class.
 

 `withField` is the main way
 to construct fields.  `transformField` allows creating a
 new field by selectively processing the original field elements and directing
 the results to a field builder.
 

 All field attributes are accessible as member elements.

**参见**

- ClassModel#fields()
- FieldTransform

> *Since 24*
