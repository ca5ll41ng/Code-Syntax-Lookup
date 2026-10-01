---
id: "java-en-function-java-lang-classfile-attribute-linenumbertableattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.LineNumberTableAttribute"
title: "LineNumberTableAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LineNumberTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberTableAttribute

Models the `lineNumberTable() LineNumberTable` attribute
 (JVMS {@jvms 4.7.12}), which records the mapping between indexes into
 the `code` array and line numbers in the source file.  Its entries are
 delivered as `LineNumber` when traversing the elements of a `CodeModel`, which is toggled by `ClassFile.LineNumbersOption`.
 

 This attribute only appears on `Code` attributes, and permits `allowMultiple() multiple instances` in a `Code`
 attribute.  It has a data dependency on `LABELS
 labels`.
 

 This attribute cannot be sent to a `CodeBuilder`; its entries can be
 constructed with `LineNumber`, resulting in at most one attribute
 instance in the built `Code` attribute.
 

 The attribute was introduced in the Java Platform version 1.0.2, major
 version `ClassFile#JAVA_1_VERSION`.

**参见**

- Attributes#lineNumberTable()

> *Since 24*
