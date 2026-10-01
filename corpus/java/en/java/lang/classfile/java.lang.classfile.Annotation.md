---
id: "java-en-function-java-lang-classfile-annotation"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Annotation"
title: "Annotation"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation

Models an `annotation` structure (JVMS {@jvms 4.7.16}) or part of a `type_annotation` structure (JVMS {@jvms 4.7.20}). This model indicates the
 interface of the annotation and a set of element-value pairs.
 

 This model can reconstruct an annotation, given the location of the modeled
 structure in the `class` file and the definition of the annotation
 interface.
 

 Two `Annotation` objects should be compared using the `equals(Object) equals` method.

 For Java programs, the location of the modeled structure indicates the source code
 element or type (JLS {@jls 9.7.4}) on which the reconstructed annotation appears,
 and the annotation interface definition determines whether the reconstructed annotation has
 elements with default values (JLS {@jls 9.6.2}), and whether the reconstructed annotation
 is a container annotation for multiple annotations (JLS {@jls 9.7.5}).

**参见**

- java.lang.annotation.Annotation
- java.lang.reflect.AnnotatedElement Annotations in core reflection
- TypeAnnotation
- RuntimeVisibleAnnotationsAttribute
- RuntimeInvisibleAnnotationsAttribute
- RuntimeVisibleParameterAnnotationsAttribute
- RuntimeInvisibleParameterAnnotationsAttribute

> *Since 24*
