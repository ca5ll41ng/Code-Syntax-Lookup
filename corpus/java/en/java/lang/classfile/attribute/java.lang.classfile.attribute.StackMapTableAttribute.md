---
id: "java-en-function-java-lang-classfile-attribute-stackmaptableattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.StackMapTableAttribute"
title: "StackMapTableAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackMapTableAttribute

Models the `stackMapTable() StackMapTable` attribute (JVMS
 {@jvms 4.7.4}), which is used for verification by type checking ({@jvms
 4.10.1}).
 

 This attribute is not delivered in the traversal of a `CodeAttribute`,
 but instead automatically generated upon `class` file writing.
 Advanced users can supply their own stack maps according to the `ClassFile.StackMapsOption`.
 

 This attribute only appears on `Code` attributes, and does not permit
 `allowMultiple multiple instances` in a `Code` attribute.  It has a data dependency on `LABELS labels` in the `code` array.
 

 This attribute was introduced in the Java SE Platform version 6, major
 version `ClassFile#JAVA_6_VERSION`.

**参见**

- Attributes#stackMapTable()
- DiscontinuedInstruction.JsrInstruction
- DiscontinuedInstruction.RetInstruction

> *Since 24*
