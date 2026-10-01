---
id: "java-en-function-class-getdeclaredfields"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredFields"
signature: "public Field[] getDeclaredFields()"
title: "Class.getDeclaredFields"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredFields

```java
public Field[] getDeclaredFields()
```

Returns an array of `Field` objects reflecting all the fields
 declared by the class or interface represented by this
 `Class` object. This includes public, protected, default
 (package) access, and private fields, but excludes inherited fields.

 

 If this `Class` object represents a class or interface with no
 declared fields, then this method returns an array of length 0.

 

 If this `Class` object represents an array type, a primitive
 type, or void, then this method returns an array of length 0.

 

 The elements in the returned array are not sorted and are not in any
 particular order.

**返回**

- the array of `Field` objects representing all the declared fields of this class

> *Since 1.1*
