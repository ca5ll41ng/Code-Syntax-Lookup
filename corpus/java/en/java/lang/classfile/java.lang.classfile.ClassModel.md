---
id: "java-en-function-java-lang-classfile-classmodel"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassModel"
title: "ClassModel"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassModel

Models a `class` file.  A `class` file can be viewed as a
 `CompoundElement composition` of `ClassElement`s, or by
 random access via accessor methods if only specific parts of the `class` file is needed.
 

 Use `parse`, which parses the binary data of a `class` file into a model, to obtain a `ClassModel`.
 

 To construct a `class` file, use `build(ClassDesc,
 Consumer)`.  `transformClass`
 allows creating a new class by selectively processing the original class
 elements and directing the results to a class builder.
 

 A class holds attributes, most of which are accessible as member elements.
 `BootstrapMethodsAttribute` can only be accessed via `AttributedElement explicit attribute reading`, as it is modeled as part of
 the `constantPool() constant pool`.

**参见**

- ClassFile#parse(byte[])
- ClassTransform

> *Since 24*
