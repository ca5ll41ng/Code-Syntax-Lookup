---
id: "java-en-function-java-lang-classfile-attribute-loadabledescriptorsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.LoadableDescriptorsAttribute"
title: "LoadableDescriptorsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/LoadableDescriptorsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadableDescriptorsAttribute

Models the `loadableDescriptors() LoadableDescriptors`
 attribute (JVMS {@jvms value-objects-4.7.32}), which permits the JVM to
 load mentioned classes and interfaces before the `class` file carrying
 this attribute is loaded.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS
 constant pool`.
 

 The attribute is a preview VM feature in the current Java SE release.

**参见**

- Attributes#loadableDescriptors()

> *Since 28*
