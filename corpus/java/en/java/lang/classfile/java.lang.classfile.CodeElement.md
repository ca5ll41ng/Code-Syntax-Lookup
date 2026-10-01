---
id: "java-en-function-java-lang-classfile-codeelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CodeElement"
title: "CodeElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeElement

Marker interface for a member element of a `CodeModel`.  Such an
 element can appear when traversing a `CodeModel` unless otherwise
 specified, be supplied to a `CodeBuilder`, and be processed by a
 `CodeTransform`.
 

 Code elements can be categorized into `Instruction`, `PseudoInstruction`, and `Attribute`.  Unlike in other `CompoundElement`, the order of elements for all `Instruction`s and some
 `PseudoInstruction`s is significant.

**参见**

- ClassFileElement##membership Membership Elements
- ClassElement
- MethodElement
- FieldElement

> *Since 24*
