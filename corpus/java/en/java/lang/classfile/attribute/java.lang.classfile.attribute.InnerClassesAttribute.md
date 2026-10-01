---
id: "java-en-function-java-lang-classfile-attribute-innerclassesattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.InnerClassesAttribute"
title: "InnerClassesAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/InnerClassesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InnerClassesAttribute

Models the `innerClasses() InnerClasses` attribute (JVMS
 {@jvms 4.7.6}), which records which classes referenced by this `class`
 file are nested classes.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 1.1, major
 version `ClassFile#JAVA_1_VERSION`.

**参见**

- Attributes#innerClasses()

> *Since 24*
