---
id: "java-en-function-java-lang-module-modulereference"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleReference"
title: "ModuleReference"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReference

A reference to a module's content.

 

 A module reference is a concrete implementation of this class that
 implements the abstract methods defined by this class. It contains the
 module's descriptor and its location, if known.  It also has the ability to
 create a `ModuleReader` in order to access the module's content, which
 may be inside the Java run-time system itself or in an artifact such as a
 modular JAR file.

**参见**

- ModuleFinder
- ModuleReader

> *Since 9*
