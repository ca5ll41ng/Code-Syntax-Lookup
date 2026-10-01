---
id: "java-en-function-java-lang-classfile-attribute-runtimeinvisibleannotationsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.RuntimeInvisibleAnnotationsAttribute"
title: "RuntimeInvisibleAnnotationsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeInvisibleAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeInvisibleAnnotationsAttribute

Models the `runtimeInvisibleAnnotations()
 RuntimeInvisibleAnnotations` attribute (JVMS {@jvms 4.7.17}), which stores
 declaration annotations on this structure that are visible to `class` file consumers but are not visible to `AnnotatedElement
 core reflection`.
 

 This attribute appears on classes, fields, methods, and record components,
 and does not permit `allowMultiple multiple
 instances` in one structure.  It has a data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#runtimeInvisibleAnnotations()
- java.compiler/javax.lang.model.element.Element
- ElementType
- RetentionPolicy#CLASS

> *Since 24*
