---
id: "java-en-function-java-lang-reflect-annotatedtype"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.AnnotatedType"
title: "AnnotatedType"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/AnnotatedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotatedType

`AnnotatedType` represents the potentially annotated use of a type in
 the program currently running in this VM. The use may be of any type in the
 Java programming language, including an array type, a parameterized type, a
 type variable, or a wildcard type.

 Note that any annotations returned by methods on this interface are
 type annotations (JLS {@jls 9.7.4}) as the entity being
 potentially annotated is a type.

> *Since 1.8*
