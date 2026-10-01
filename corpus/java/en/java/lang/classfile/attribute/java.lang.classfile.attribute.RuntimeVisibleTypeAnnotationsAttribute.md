---
id: "java-en-function-java-lang-classfile-attribute-runtimevisibletypeannotationsattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.RuntimeVisibleTypeAnnotationsAttribute"
title: "RuntimeVisibleTypeAnnotationsAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/RuntimeVisibleTypeAnnotationsAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeVisibleTypeAnnotationsAttribute

Models the `runtimeVisibleTypeAnnotations()
 RuntimeVisibleTypeAnnotations` attribute (JVMS {@jvms 4.7.20}), which
 stores type-use annotations for the annotated uses of types in this
 structure that are visible to both `class` file consumers and
 `AnnotatedType core reflection`.  Its delivery in the traversal of
 a `CodeModel` may be toggled by `ClassFile.DebugElementsOption`.
 

 This attribute appears on classes, fields, methods, `Code` attributes,
 and record components, and does not permit `allowMultiple multiple instances` in one structure.  It has a
 data dependency on `UNSTABLE arbitrary indices`
 in the `class` file format, so users must take great care to ensure
 this attribute is still correct after a `class` file has been transformed.
 

 The attribute was introduced in the Java SE Platform version 8, major version
 `ClassFile#JAVA_8_VERSION`.

**参见**

- Attributes#runtimeVisibleTypeAnnotations()
- java.compiler/javax.lang.model.type.TypeMirror
- AnnotatedType
- ElementType#TYPE_PARAMETER
- ElementType#TYPE_USE
- RetentionPolicy#RUNTIME

> *Since 24*
