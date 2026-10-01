---
id: "java-en-function-java-lang-error"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Error"
title: "Error"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Error.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Error

An `Error` is a subclass of `Throwable`
 that indicates serious problems that a reasonable application
 should not try to catch. Most such errors are abnormal conditions.
 

 A method is not required to declare in its `throws`
 clause any subclasses of `Error` that might be thrown
 during the execution of the method but not caught, since these
 errors are abnormal conditions that should never occur.

 That is, `Error` and its subclasses are regarded as unchecked
 exceptions for the purposes of compile-time checking of exceptions.

> *Since 1.0*
