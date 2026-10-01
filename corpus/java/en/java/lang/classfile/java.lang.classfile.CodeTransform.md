---
id: "java-en-function-java-lang-classfile-codetransform"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CodeTransform"
title: "CodeTransform"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeTransform

A transformation on streams of `CodeElement`.  The stream can come
 from a `CodeModel`, or a handler to a `CodeBuilder` as in
 `transforming`.
 

 Refer to `ClassFileTransform` for general guidance and caution around
 the use of transforms for structures in the `class` file format.
 

 A code transform can be lifted to a method or a class transform via `transformingCode` and `transformingMethodBodies`, transforming only
 the `CodeModel` within those structures and passing all other elements
 to the builders.

**参见**

- CodeModel
- MethodBuilder#transformCode
- CodeBuilder#transforming

> *Since 24*
