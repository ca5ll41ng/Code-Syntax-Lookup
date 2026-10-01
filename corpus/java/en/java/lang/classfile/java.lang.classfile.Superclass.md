---
id: "java-en-function-java-lang-classfile-superclass"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Superclass"
title: "Superclass"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Superclass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Superclass

Models the superclass (JVMS {@jvms 4.1}) of a class.  A `Superclass`
 appears at most once in a `ClassModel`: it must be absent for
 `isModuleInfo() module descriptors` or the `Object` class, and must be present otherwise.  A `ClassBuilder` sets
 the `Object` class as the superclass if the superclass is not supplied
 and the class to build is required to have a superclass.
 

 All `ACC_INTERFACE interfaces` have `Object` as
 their superclass.

**参见**

- ClassModel#superclass()
- ClassBuilder#withSuperclass

> *Since 24*
