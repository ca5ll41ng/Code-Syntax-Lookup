---
id: "java-en-function-java-lang-classfile-interfaces"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Interfaces"
title: "Interfaces"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Interfaces.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Interfaces

Models the interfaces (JVMS {@jvms 4.1}) of a class.  An `Interfaces`
 appears at most once in a `ClassModel`: if it does not appear, the
 class has no interfaces, which is equivalent to an `Interfaces` whose
 `interfaces` returns an empty list.  A `ClassBuilder` sets
 the interfaces to an empty list if the interfaces is not supplied.

**参见**

- ClassModel#interfaces()
- ClassBuilder#withInterfaces

> *Since 24*
