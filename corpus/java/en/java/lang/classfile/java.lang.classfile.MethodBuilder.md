---
id: "java-en-function-java-lang-classfile-methodbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.MethodBuilder"
title: "MethodBuilder"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodBuilder

A builder for methods.  The main way to obtain a method builder is via `withMethod`.  `withMethodBody` is
 useful if no attribute on the method except `CodeModel Code` needs to
 be configured, skipping the method handler.
 

 Refer to `ClassFileBuilder` for general guidance and caution around
 the use of builders for structures in the `class` file format.

**参见**

- MethodModel
- MethodTransform

> *Since 24*
