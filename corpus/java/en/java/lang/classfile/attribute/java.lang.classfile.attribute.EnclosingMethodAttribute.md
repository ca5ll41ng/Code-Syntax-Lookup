---
id: "java-en-function-java-lang-classfile-attribute-enclosingmethodattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.EnclosingMethodAttribute"
title: "EnclosingMethodAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/EnclosingMethodAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnclosingMethodAttribute

Models the `enclosingMethod() EnclosingMethod` attribute
 (JVMS {@jvms 4.7.7}), which indicates that this class is a local or
 anonymous class, and indicates the enclosing method or constructor of this
 class if this class is enclosed in exactly one method or constructor.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#enclosingMethod()

> *Since 24*
