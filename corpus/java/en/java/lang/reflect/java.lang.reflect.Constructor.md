---
id: "java-en-function-java-lang-reflect-constructor"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.Constructor"
title: "Constructor"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Constructor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Constructor

`Constructor` provides information about, and access to, a single
 constructor for a class.

 

`Constructor` permits widening conversions to occur when matching the
 actual parameters to newInstance() with the underlying
 constructor's formal parameters, but throws an
 `IllegalArgumentException` if a narrowing conversion would occur.

**参数**

- **the** — class in which the constructor is declared

**参见**

- Member
- java.lang.Class
- java.lang.Class#getConstructors()
- java.lang.Class#getConstructor(Class[])
- java.lang.Class#getDeclaredConstructors()

> *Since 1.1*
