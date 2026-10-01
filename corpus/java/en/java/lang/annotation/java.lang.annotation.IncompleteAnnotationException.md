---
id: "java-en-function-java-lang-annotation-incompleteannotationexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.annotation.IncompleteAnnotationException"
title: "IncompleteAnnotationException"
directive: "type"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/IncompleteAnnotationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IncompleteAnnotationException

Thrown to indicate that a program has attempted to access an element of
 an annotation interface that was added to the annotation interface definition
 after the annotation was compiled (or serialized). This exception will not be
 thrown if the new element has a default value.
 This exception can be thrown by the `java.lang.reflect.AnnotatedElement API used to read annotations
 reflectively`.

**参见**

- java.lang.reflect.AnnotatedElement

> *Since 1.5*
