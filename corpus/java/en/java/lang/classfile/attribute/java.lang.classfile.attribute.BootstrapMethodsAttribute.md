---
id: "java-en-function-java-lang-classfile-attribute-bootstrapmethodsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.BootstrapMethodsAttribute"
title: "BootstrapMethodsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/BootstrapMethodsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BootstrapMethodsAttribute

Models the `bootstrapMethods() BootstrapMethods` attribute
 (JVMS {@jvms 4.7.23}), which stores symbolic information for the execution of
 bootstrap methods, used by dynamically-computed call sites and constants.
 It is logically a part of the constant pool of a `class` file and thus
 not delivered in `ClassModel` traversal; its elements are accessible
 through `ConstantPool`.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute cannot be constructed directly; its entries can be constructed
 through `bsmEntry`, resulting in at most one
 attribute instance in the built `class` file.
 

 The attribute was introduced in the Java SE Platform version 7, major version
 `ClassFile#JAVA_7_VERSION`.

**参见**

- Attributes#bootstrapMethods()
- java.lang.invoke##bsm Execution of bootstrap methods

> *Since 24*
