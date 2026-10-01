---
id: "java-en-function-java-lang-classfile-attribute-moduleattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModuleAttribute"
title: "ModuleAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttribute

Models the `module() Module` attribute (JVMS {@jvms 4.7.25}),
 which always appears on classes that `isModuleInfo()
 represent` module descriptors.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS
 constant pool`.
 

 The attribute was introduced in the Java SE Platform version 9, major version
 `ClassFile#JAVA_9_VERSION`.

**参见**

- Attributes#module()
- ModuleDescriptor

> *Since 24*
