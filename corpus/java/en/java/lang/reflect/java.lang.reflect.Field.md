---
id: "java-en-function-java-lang-reflect-field"
language: "java"
lang: "en"
category: "function"
name: "java.lang.reflect.Field"
title: "Field"
directive: "type"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Field.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Field

A `Field` provides information about, and dynamic access to, a
 single field of a class or an interface.  The reflected field may
 be a class (static) field or an instance field.

 

A `Field` permits widening conversions to occur during a get or
 set access operation, but throws an `IllegalArgumentException` if a
 narrowing conversion would occur.

**参见**

- Member
- java.lang.Class
- java.lang.Class#getFields()
- java.lang.Class#getField(String)
- java.lang.Class#getDeclaredFields()
- java.lang.Class#getDeclaredField(String)

> *Since 1.1*
