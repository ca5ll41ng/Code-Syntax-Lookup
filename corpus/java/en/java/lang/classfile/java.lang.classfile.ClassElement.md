---
id: "java-en-function-java-lang-classfile-classelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassElement"
title: "ClassElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassElement

Marker interface for a member element of a `ClassModel`.  Such an
 element can appear when traversing a `ClassModel` unless otherwise
 specified, be supplied to a `ClassBuilder`, and be processed by a
 `ClassTransform`.
 

 `AccessFlags`, and `ClassFileVersion` are member elements of a
 class that appear exactly once during the traversal of a `ClassModel`.
 `Superclass` and `Interfaces` may be absent or appear at most
 once.  A `ClassBuilder` may provide an alternative superclass if it is
 not defined but required.

**参见**

- ClassFileElement##membership Membership Elements
- MethodElement
- FieldElement
- CodeElement

> *Since 24*
