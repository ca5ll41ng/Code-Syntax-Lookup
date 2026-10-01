---
id: "java-en-function-java-lang-classfile-attribute-runtimeinvisibleparameterannotationsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.RuntimeInvisibleParameterAnnotationsAttribute"
title: "RuntimeInvisibleParameterAnnotationsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeInvisibleParameterAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeInvisibleParameterAnnotationsAttribute

Models the `runtimeInvisibleParameterAnnotations()
 RuntimeInvisibleParameterAnnotations` attribute (JVMS {@jvms 4.7.19}), which
 stores declaration annotations on the method parameters of this method
 that are visible to `class` file consumers but are not visible to
 `AnnotatedElement core reflection`.
 

 This attribute only appears on methods, and does not permit `allowMultiple multiple instances` in a method.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#runtimeInvisibleParameterAnnotations()
- ElementType#PARAMETER
- RetentionPolicy#CLASS

> *Since 24*
