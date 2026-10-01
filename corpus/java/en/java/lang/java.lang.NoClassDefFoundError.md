---
id: "java-en-function-java-lang-noclassdeffounderror"
language: "java"
lang: "en"
category: "function"
name: "java.lang.NoClassDefFoundError"
title: "NoClassDefFoundError"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/NoClassDefFoundError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NoClassDefFoundError

Thrown if the Java Virtual Machine or a `ClassLoader` instance
 tries to load in the definition of a class (as part of a normal method call
 or as part of creating a new instance using the `new` expression)
 and no definition of the class could be found.
 

 The searched-for class definition existed when the currently
 executing class was compiled, but the definition can no longer be
 found.

> *Since 1.0*
