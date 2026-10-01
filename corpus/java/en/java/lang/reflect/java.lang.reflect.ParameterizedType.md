---
id: "java-en-function-java-lang-reflect-parameterizedtype"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.ParameterizedType"
title: "ParameterizedType"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/ParameterizedType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParameterizedType

ParameterizedType represents a parameterized type such as
 `Collection`.

 

A parameterized type is created the first time it is needed by a
 reflective method, as specified in this package. When a
 parameterized type p is created, the generic class or interface declaration
 that p instantiates is resolved, and all type arguments of p are created
 recursively. See `java.lang.reflect.TypeVariable
 TypeVariable` for details on the creation process for type
 variables. Repeated creation of a parameterized type has no effect.

 

Instances of classes that implement this interface must implement
 an equals() method that equates any two instances that share the
 same generic class or interface declaration and have equal type parameters.

> *Since 1.5*
