---
id: "java-en-function-java-lang-classfile-attribute-localvariabletableattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.LocalVariableTableAttribute"
title: "LocalVariableTableAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LocalVariableTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableTableAttribute

Models the `localVariableTable() LocalVariableTable`
 attribute (JVMS {@jvms 4.7.13}), which records debug information about local
 variables.  Its entries are delivered as `LocalVariable`s when
 traversing the elements of a `CodeModel`, which is toggled by `ClassFile.DebugElementsOption`.
 

 This attribute only appears on `Code` attributes, and permits `allowMultiple() multiple instances` in a `Code`
 attribute.  It has a data dependency on `LABELS
 labels`.
 

 This attribute cannot be sent to a `CodeBuilder`; its entries can be
 constructed with `LocalVariable`, resulting in at most one attribute
 instance in the built `Code` attribute.
 

 The attribute was introduced in the Java Platform version 1.0.2, major
 version `ClassFile#JAVA_1_VERSION`.

 Generic local variable types and potentially annotated use of those types are
 defined by `LocalVariableTypeTableAttribute` and `RuntimeVisibleTypeAnnotationsAttribute` respectively, which requires this
 attribute to be present.

**参见**

- Attributes#localVariableTable()

> *Since 24*
