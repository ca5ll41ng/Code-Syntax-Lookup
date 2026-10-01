---
id: "java-en-function-java-lang-nullpointerexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.NullPointerException"
title: "NullPointerException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/NullPointerException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NullPointerException

Thrown when an application attempts to use `null` in a
 case where an object is required. These include:
 
 
- Calling the instance method of a `null` object.
 
- Accessing or modifying the field of a `null` object.
 
- Taking the length of `null` as if it were an array.
 
- Accessing or modifying the slots of `null` as if it
     were an array.
 
- Throwing `null` as if it were a `Throwable`
     value.
 

 

 Applications should throw instances of this class to indicate
 other illegal uses of the `null` object.

 `NullPointerException` objects may be constructed by the
 virtual machine as if `Throwable(String,
 Throwable, boolean, boolean) suppression were disabled and/or the
 stack trace was not writable`.

> *Since 1.0*
