---
id: "java-en-function-java-lang-classfile-methodelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.MethodElement"
title: "MethodElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/MethodElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodElement

Marker interface for a member element of a `MethodModel`.  Such an
 element can appear when traversing a `MethodModel` unless otherwise
 specified, be supplied to a `MethodBuilder`, and be processed by a
 `MethodTransform`.
 

 `AccessFlags` is the only member element of a method that appear
 exactly once during the traversal of a `MethodModel`.

**参见**

- ClassFileElement##membership Membership Elements
- ClassElement
- FieldElement
- CodeElement

> *Since 24*
