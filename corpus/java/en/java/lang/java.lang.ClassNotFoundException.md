---
id: "java-en-function-java-lang-classnotfoundexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.ClassNotFoundException"
title: "ClassNotFoundException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassNotFoundException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassNotFoundException

Thrown when an application tries to load in a class through its
 string name using:
 
 
- The `forName` method in class `Class`.
 
- The `findSystemClass` method in class
     `ClassLoader` .
 
- The `loadClass` method in class `ClassLoader`.
 

 

 but no definition for the class with the specified name could be found.

**参见**

- java.lang.Class#forName(java.lang.String)
- java.lang.ClassLoader#findSystemClass(java.lang.String)
- java.lang.ClassLoader#loadClass(java.lang.String, boolean)

> *Since 1.0*
