---
id: "java-en-function-java-lang-appendable"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Appendable"
title: "Appendable"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Appendable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Appendable

An object to which `char` sequences and values can be appended.  The
 `Appendable` interface must be implemented by any class whose
 instances are intended to receive formatted output from a `java.util.Formatter`.

 

 The characters to be appended should be valid Unicode characters as
 described in Unicode Character
 Representation.  Note that supplementary characters may be composed of
 multiple 16-bit `char` values.

 

 Appendables are not necessarily safe for multithreaded access.  Thread
 safety is the responsibility of classes that extend and implement this
 interface.

 

 Since this interface may be implemented by existing classes
 with different styles of error handling there is no guarantee that
 errors will be propagated to the invoker.

> *Since 1.5*
