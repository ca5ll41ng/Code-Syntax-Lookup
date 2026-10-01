---
id: "java-en-function-java-lang-exception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Exception"
title: "Exception"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Exception.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Exception

The class `Exception` and its subclasses are a form of
 `Throwable` that indicates conditions that a reasonable
 application might want to catch.

 

The class `Exception` and any subclasses that are not also
 subclasses of `RuntimeException` are checked
 exceptions.  Checked exceptions need to be declared in a
 method or constructor's `throws` clause if they can be thrown
 by the execution of the method or constructor and propagate outside
 the method or constructor boundary.

**参见**

- java.lang.Error

> *Since 1.0*
