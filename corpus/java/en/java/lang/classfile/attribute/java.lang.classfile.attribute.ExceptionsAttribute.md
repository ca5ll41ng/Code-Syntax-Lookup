---
id: "java-en-function-java-lang-classfile-attribute-exceptionsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ExceptionsAttribute"
title: "ExceptionsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ExceptionsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionsAttribute

Models the `exceptions() Exceptions` attribute (JVMS {@jvms
 4.7.5}), which records the exceptions declared to be thrown by this
 method.
 

 This attribute only appears on methods, and does not permit `allowMultiple multiple instances` in a method.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java Platform version 1.0.2, major
 version `ClassFile#JAVA_1_VERSION`.

 Generic exceptions types thrown by a method and potentially annotated use of
 those types are defined by `SignatureAttribute` and `RuntimeVisibleTypeAnnotationsAttribute` respectively, which requires this
 attribute to be present.

**参见**

- Attributes#exceptions()

> *Since 24*
