---
id: "java-en-function-java-lang-classfile-methodmodel"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.MethodModel"
title: "MethodModel"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodModel

Models a method.  A method can be viewed as a `CompoundElement
 composition` of `MethodElement`s, or by random access via accessor
 methods if only specific parts of the method is needed.
 

 Methods can be obtained from `methods`, or in the
 traversal of member elements of a class.
 

 `withMethod` is the
 main way to construct methods.  `transformMethod` allows
 creating a new method by selectively processing the original method elements
 and directing the results to a method builder.
 

 All method attributes are accessible as member elements.

**参见**

- ClassModel#methods()
- MethodTransform

> *Since 24*
