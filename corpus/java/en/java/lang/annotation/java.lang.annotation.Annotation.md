---
id: "java-en-function-java-lang-annotation-annotation"
language: "java"
lang: "en"
category: "function"
name: "java.lang.annotation.Annotation"
title: "Annotation"
directive: "type"
module: "java.base/java.lang.annotation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/annotation/Annotation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Annotation

The common interface extended by all annotation interfaces.  Note that an
 interface that manually extends this one does not define
 an annotation interface.  Also note that this interface does not itself
 define an annotation interface.

 More information about annotation interfaces can be found in section
 {@jls 9.6} of The Java Language Specification.

 The `java.lang.reflect.AnnotatedElement` interface discusses
 compatibility concerns when evolving an annotation interface from being
 non-repeatable to being repeatable.

> *Since 1.5*
