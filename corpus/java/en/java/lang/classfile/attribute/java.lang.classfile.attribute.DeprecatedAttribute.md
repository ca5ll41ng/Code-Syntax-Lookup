---
id: "java-en-function-java-lang-classfile-attribute-deprecatedattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.DeprecatedAttribute"
title: "DeprecatedAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/DeprecatedAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeprecatedAttribute

Models the `deprecated() Deprecated` attribute (JVMS {@jvms
 4.7.15}), which indicates this structure has been superseded.
 

 This attribute can appear on classes, methods, and fields, and permits
 `allowMultiple multiple instances` in a structure.
 It has `STATELESS no data dependency`.
 

 This attribute was introduced in the Java SE Platform version 1.1, major
 version `ClassFile#JAVA_1_VERSION`.

 When this attribute is present, the `Deprecated` annotation should
 also be present in the `RuntimeVisibleAnnotationsAttribute
 RuntimeVisibleAnnotations` attribute to provide more obvious alerts.
 The reference implementation of the system Java compiler emits this attribute
 without the annotation when a `@deprecated` tag is present in the
 documentation comments without the annotation.

**参见**

- Attributes#deprecated()
- Deprecated

> *Since 24*
