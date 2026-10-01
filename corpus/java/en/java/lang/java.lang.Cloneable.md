---
id: "java-en-function-java-lang-cloneable"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Cloneable"
title: "Cloneable"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Cloneable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cloneable

A class implements the `Cloneable` interface to
 indicate to the `clone` method that it
 is legal for that method to make a
 field-for-field copy of instances of that class.
 

 Invoking Object's clone method on an instance that does not implement the
 `Cloneable` interface results in the exception
 `CloneNotSupportedException` being thrown.
 

 By convention, classes that implement this interface should override
 `Object.clone` (which is protected) with a public method.
 See `clone` for details on overriding this
 method.
 

 Note that this interface does not contain the `clone` method.
 Therefore, it is not possible to clone an object merely by virtue of the
 fact that it implements this interface.  Even if the clone method is invoked
 reflectively, there is no guarantee that it will succeed.

**参见**

- java.lang.CloneNotSupportedException
- java.lang.Object#clone()

> *Since 1.0*
