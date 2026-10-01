---
id: "java-en-function-java-lang-invoke-wrongmethodtypeexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.WrongMethodTypeException"
title: "WrongMethodTypeException"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/WrongMethodTypeException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WrongMethodTypeException

Thrown to indicate that code has attempted to call a method handle
 via the wrong method type.  As with the bytecode representation of
 normal Java method calls, method handle calls are strongly typed
 to a specific type descriptor associated with a call site.
 

 This exception may also be thrown when two method handles are
 composed, and the system detects that their types cannot be
 matched up correctly.  This amounts to an early evaluation
 of the type mismatch, at method handle construction time,
 instead of when the mismatched method handle is called.

> *Since 1.7*
