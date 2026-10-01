---
id: "java-en-function-java-lang-classfile-attribute-recordattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.RecordAttribute"
title: "RecordAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RecordAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RecordAttribute

Models the `record() Record` attribute (JVMS {@jvms 4.7.30}),
 which indicates that this class is a record class and the record
 components.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 16, major
 version `ClassFile#JAVA_16_VERSION`.

**参见**

- Attributes#record()
- Class#isRecord()
- Class#getRecordComponents()

> *Since 24*
