---
id: "java-en-function-java-lang-classfile-attribute-methodparametersattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.MethodParametersAttribute"
title: "MethodParametersAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/MethodParametersAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodParametersAttribute

Models the `methodParameters() MethodParameters` attribute
 (JVMS {@jvms 4.7.24}), which records reflective information about this
 method's parameters such as access modifiers.
 

 This attribute only appears on methods, and does not permit `allowMultiple multiple instances` in a method.  It has a
 data dependency on the `CP_REFS
 constant pool`.
 

 The attribute was introduced in the Java SE Platform version 8, major version
 `ClassFile#JAVA_8_VERSION`.

**参见**

- Attributes#methodParameters()
- Executable#getParameters()

> *Since 24*
