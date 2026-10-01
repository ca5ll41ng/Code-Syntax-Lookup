---
id: "java-en-function-java-lang-classfile-attribute-permittedsubclassesattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.PermittedSubclassesAttribute"
title: "PermittedSubclassesAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/PermittedSubclassesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermittedSubclassesAttribute

Models the `permittedSubclasses() PermittedSubclasses`
 attribute (JVMS {@jvms 4.7.31}), which indicates this class or interface
 is `SEALED sealed`,
 and which classes or interfaces may extend or implement this class or
 interface.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 17, major
 version `ClassFile#JAVA_17_VERSION`.

**参见**

- Attributes#permittedSubclasses()
- Class#isSealed()
- Class#getPermittedSubclasses()

> *Since 24*
