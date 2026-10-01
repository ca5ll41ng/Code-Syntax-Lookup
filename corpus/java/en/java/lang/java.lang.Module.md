---
id: "java-en-function-java-lang-module"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Module"
title: "Module"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Module.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Module

Represents a run-time module, either `isNamed() named` or unnamed.

 

 Named modules have a `getName() name` and are constructed by the
 Java Virtual Machine when a graph of modules is defined to the Java virtual
 machine to create a `ModuleLayer module layer`. 

 

 An unnamed module does not have a name. There is an unnamed module for
 each `ClassLoader ClassLoader`, obtained by invoking its `getUnnamedModule() getUnnamedModule` method. All types that are
 not in a named module are members of their defining class loader's unnamed
 module. 

 

 The package names that are parameters or returned by methods defined in
 this class are the fully-qualified names of the packages as defined in
 section {@jls 6.5.3} of The Java Language Specification, for
 example, `"java.lang"`. 

 

 Unless otherwise specified, passing a `null` argument to a method
 in this class causes a `NullPointerException NullPointerException` to
 be thrown.

**参见**

- Class#getModule()

> *Since 9*
