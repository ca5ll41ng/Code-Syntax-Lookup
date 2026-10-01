---
id: "java-en-function-java-lang-reflect-method"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.Method"
title: "Method"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Method.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Method

A `Method` provides information about, and access to, a single method
 on a class or interface.  The reflected method may be a class method
 or an instance method (including an abstract method).

 

A `Method` permits widening conversions to occur when matching the
 actual parameters to invoke with the underlying method's formal
 parameters, but it throws an `IllegalArgumentException` if a
 narrowing conversion would occur.

**参见**

- Member
- java.lang.Class
- java.lang.Class#getMethods()
- java.lang.Class#getMethod(String, Class[])
- java.lang.Class#getDeclaredMethods()
- java.lang.Class#getDeclaredMethod(String, Class[])

> *Since 1.1*
