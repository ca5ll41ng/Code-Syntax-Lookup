---
id: "java-en-function-java-lang-classfile-attribute-modulepackagesattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModulePackagesAttribute"
title: "ModulePackagesAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModulePackagesAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModulePackagesAttribute

Models the `modulePackages() ModulePackages` attribute (JVMS
 {@jvms 4.7.26}), which can appear on classes that `isModuleInfo() represent` module descriptors to indicate packages
 in the module used by the module descriptor.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 9, major version
 `ClassFile#JAVA_9_VERSION`.

**参见**

- Attributes#modulePackages()
- ModuleDescriptor#packages()

> *Since 24*
