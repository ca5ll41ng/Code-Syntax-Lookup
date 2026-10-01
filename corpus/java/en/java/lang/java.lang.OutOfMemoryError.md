---
id: "java-en-function-java-lang-outofmemoryerror"
language: "java"
lang: "en"
category: "function"
name: "java.lang.OutOfMemoryError"
title: "OutOfMemoryError"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/OutOfMemoryError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutOfMemoryError

Thrown when the Java Virtual Machine cannot allocate an object
 because it is out of memory, and no more memory could be made
 available by the garbage collector.

 `OutOfMemoryError` objects may be constructed by the virtual
 machine as if `Throwable(String, Throwable,
 boolean, boolean) suppression were disabled and/or the stack trace was not
 writable`.

> *Since 1.0*
