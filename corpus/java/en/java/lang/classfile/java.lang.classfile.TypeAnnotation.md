---
id: "java-en-function-java-lang-classfile-typeannotation"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.TypeAnnotation"
title: "TypeAnnotation"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeAnnotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeAnnotation

Models a `type_annotation` structure (JVMS {@jvms 4.7.20}). This model
 indicates the annotated type within a declaration or expression and the part
 of the indicated type that is annotated, in addition to what is `annotation() available` in an `Annotation`.
 

 This model can reconstruct an annotation on a type or a part of a type, given
 the location of the `type_annotation` structure in the class file and
 the definition of the annotation interface.
 

 Two `TypeAnnotation` objects should be compared using the `equals(Object) equals` method.

**参见**

- Annotation
- RuntimeVisibleTypeAnnotationsAttribute
- RuntimeInvisibleTypeAnnotationsAttribute

> *Since 24*
