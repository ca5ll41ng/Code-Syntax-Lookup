---
id: "java-en-function-java-lang-reflect-typevariable"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.TypeVariable"
title: "TypeVariable"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/TypeVariable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeVariable

TypeVariable is the common superinterface for type variables of kinds.
 A type variable is created the first time it is needed by a reflective
 method, as specified in this package.  If a type variable t is referenced
 by a type (i.e, class, interface or annotation type) T, and T is declared
 by the nth enclosing class of T (see JLS {@jls 8.1.2}), then the creation of t
 requires the resolution (see JVMS {@jvms 5}) of the ith enclosing class of T,
 for i = 0 to n, inclusive. Creating a type variable must not cause the
 creation of its bounds. Repeated creation of a type variable has no effect.

 

Multiple objects may be instantiated at run-time to
 represent a given type variable. Even though a type variable is
 created only once, this does not imply any requirement to cache
 instances representing the type variable. However, all instances
 representing a type variable must be equal() to each other.
 As a consequence, users of type variables must not rely on the identity
 of instances of classes implementing this interface.

**参数**

- **the** — type of generic declaration that declared the underlying type variable.

> *Since 1.5*
