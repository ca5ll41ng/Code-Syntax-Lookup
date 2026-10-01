---
id: "java-en-function-java-lang-classfile-attribute-localvariabletypetableattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.LocalVariableTypeTableAttribute"
title: "LocalVariableTypeTableAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LocalVariableTypeTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocalVariableTypeTableAttribute

Models the `localVariableTypeTable() LocalVariableTypeTable`
 attribute (JVMS {@jvms 4.7.14}), which records debug information about local
 variables with generic types.  Its entries are delivered as `LocalVariableType`s when traversing the elements of a `CodeModel`,
 which can be toggled by `ClassFile.DebugElementsOption`.
 

 This attribute only appears on `Code` attributes, and permits `allowMultiple() multiple instances` in a `Code`
 attribute.  It has a data dependency on `LABELS
 labels`.
 

 This attribute cannot be sent to a `CodeBuilder`; its entries can be
 constructed with `LocalVariableType`, resulting in at most one attribute
 instance in the built `Code` attribute.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

 Only local variables that have generic field types need to be described by
 this attribute.  If a local variable is described in a `LocalVariableTypeTable` attribute, it must also be described in a `LocalVariableTableAttribute LocalVariableTable` attribute.

**参见**

- Attributes#localVariableTypeTable()

> *Since 24*
