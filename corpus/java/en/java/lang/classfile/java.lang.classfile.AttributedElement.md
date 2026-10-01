---
id: "java-en-function-java-lang-classfile-attributedelement"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.AttributedElement"
title: "AttributedElement"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AttributedElement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributedElement

A `ClassFileElement` describing a `class` file structure that has
 attributes, such as a `class` file, a field, a method, a `CodeAttribute Code` attribute, or a record component.
 

 Unless otherwise specified, most attributes that can be discovered in a
 `CompoundElement` implements the corresponding `#membership membership subinterface` of `ClassFileElement`, and can be sent to a `ClassFileBuilder` to be
 integrated into the built structure.

**参见**

- java.lang.classfile.attribute

> *Since 24*
