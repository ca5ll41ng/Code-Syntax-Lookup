---
id: "java-en-function-java-lang-instantiationexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.InstantiationException"
title: "InstantiationException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/InstantiationException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantiationException

Thrown when an application tries to create an instance of a class
 using the `newInstance` method in class
 `Class`, but the specified class object cannot be
 instantiated.  The instantiation can fail for a variety of
 reasons including but not limited to:

 
 
-  the class object represents an abstract class, an interface,
      an array class, a primitive type, or `void`
 
-  the class has no nullary constructor

**参见**

- java.lang.Class#newInstance()

> *Since 1.0*
