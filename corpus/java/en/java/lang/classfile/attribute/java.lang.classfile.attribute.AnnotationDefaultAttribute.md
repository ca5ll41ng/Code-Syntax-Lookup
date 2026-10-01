---
id: "java-en-function-java-lang-classfile-attribute-annotationdefaultattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.AnnotationDefaultAttribute"
title: "AnnotationDefaultAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/AnnotationDefaultAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationDefaultAttribute

Models the `annotationDefault() AnnotationDefault` attribute
 (JVMS {@jvms 4.7.22}), which records the default value (JLS {@jls 9.6.2}) for
 the annotation interface element defined by this method.
 

 This attribute only appears on methods, and does not permit `allowMultiple multiple instances` in a method.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#annotationDefault()

> *Since 24*
