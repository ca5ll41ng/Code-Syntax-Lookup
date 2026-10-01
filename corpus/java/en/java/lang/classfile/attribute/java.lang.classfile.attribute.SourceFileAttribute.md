---
id: "java-en-function-java-lang-classfile-attribute-sourcefileattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.SourceFileAttribute"
title: "SourceFileAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SourceFileAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceFileAttribute

Models the `sourceFile() SourceFile` attribute (JVMS {@jvms
 4.7.10}), which indicates the name of the source file from which this `class` file was compiled.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a data
 dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#sourceFile()

> *Since 24*
