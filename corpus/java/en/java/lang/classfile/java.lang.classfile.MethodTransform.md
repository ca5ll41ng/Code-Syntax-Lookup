---
id: "java-en-function-java-lang-classfile-methodtransform"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.MethodTransform"
title: "MethodTransform"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodTransform.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTransform

A transformation on streams of `MethodElement`.
 

 Refer to `ClassFileTransform` for general guidance and caution around
 the use of transforms for structures in the `class` file format.
 

 A method transform can be lifted to a class transform via `transformingMethods`, transforming only
 the `MethodModel` among the class members and passing all other
 elements to the builders.

**参见**

- MethodModel
- ClassBuilder#transformMethod

> *Since 24*
