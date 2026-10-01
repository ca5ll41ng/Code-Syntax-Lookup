---
id: "java-en-function-java-lang-classfile-attribute-constantvalueattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ConstantValueAttribute"
title: "ConstantValueAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ConstantValueAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantValueAttribute

Models the `constantValue() ConstantValue` attribute (JVMS
 {@jvms 4.7.2}), which indicates this field's value is a constant and that
 constant value.
 

 This attribute only appears on fields, and does not permit `allowMultiple multiple instances` in a field.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute was introduced in the Java Platform version 1.0.2, major
 version `ClassFile#JAVA_1_VERSION`.

**参见**

- Attributes#constantValue()

> *Since 24*
