---
id: "java-en-function-java-lang-clonenotsupportedexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.CloneNotSupportedException"
title: "CloneNotSupportedException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/CloneNotSupportedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CloneNotSupportedException

Thrown to indicate that the `clone` method in class
 `Object` has been called to clone an object, but that
 the object's class does not implement the `Cloneable`
 interface.
 

 Applications that override the `clone` method can also
 throw this exception to indicate that an object could not or
 should not be cloned.

**参见**

- java.lang.Cloneable
- java.lang.Object#clone()

> *Since 1.0*
