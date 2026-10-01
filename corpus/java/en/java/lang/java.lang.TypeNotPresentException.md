---
id: "java-en-function-java-lang-typenotpresentexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.TypeNotPresentException"
title: "TypeNotPresentException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/TypeNotPresentException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeNotPresentException

Thrown when an application tries to access a type using a string
 representing the type's name, but no definition for the type with
 the specified name can be found. This exception differs from
 `ClassNotFoundException` in that `ClassNotFoundException`
 is a checked exception, whereas this exception is unchecked.

 

Note that this exception may be used when undefined type variables
 are accessed as well as when types (e.g., classes, interfaces or
 annotation types) are loaded.
 In particular, this exception can be thrown by the `java.lang.reflect.AnnotatedElement API used to read annotations
 reflectively`.

**参见**

- java.lang.reflect.AnnotatedElement

> *Since 1.5*
