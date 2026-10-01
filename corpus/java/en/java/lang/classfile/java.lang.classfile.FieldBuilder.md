---
id: "java-en-function-java-lang-classfile-fieldbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.FieldBuilder"
title: "FieldBuilder"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/FieldBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldBuilder

A builder for fields.  The main way to obtain a field builder is via `withField`.  The `withField(String, ClassDesc, int) access flag overload` is
 useful if no attribute needs to be configured, skipping the handler.
 

 Refer to `ClassFileBuilder` for general guidance and caution around
 the use of builders for structures in the `class` file format.

**参见**

- ClassBuilder#withField(String, ClassDesc, Consumer)
- FieldModel
- FieldTransform

> *Since 24*
