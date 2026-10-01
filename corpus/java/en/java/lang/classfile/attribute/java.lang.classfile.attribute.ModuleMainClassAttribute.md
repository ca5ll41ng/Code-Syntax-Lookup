---
id: "java-en-function-java-lang-classfile-attribute-modulemainclassattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModuleMainClassAttribute"
title: "ModuleMainClassAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleMainClassAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleMainClassAttribute

Models the `moduleMainClass() ModuleMainClass` attribute
 (JVMS {@jvms 4.7.27}), which appears on classes that `isModuleInfo() represent` module descriptors to indicate the main
 class of the module.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 9, major version
 `ClassFile#JAVA_9_VERSION`.

**参见**

- Attributes#moduleMainClass()
- ModuleDescriptor#mainClass()

> *Since 24*
