---
id: "java-en-function-class-getfields"
language: "java"
lang: "en"
category: "function"
name: "Class.getFields"
signature: "public Field[] getFields()"
title: "Class.getFields"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getFields

```java
public Field[] getFields()
```

Returns an array containing `Field` objects reflecting all
 the accessible public fields of the class or interface represented by
 this `Class` object.

 

 If this `Class` object represents a class or interface with
 no accessible public fields, then this method returns an array of length
 0.

 

 If this `Class` object represents a class, then this method
 returns the public fields of the class and of all its superclasses and
 superinterfaces.

 

 If this `Class` object represents an interface, then this
 method returns the fields of the interface and of all its
 superinterfaces.

 

 If this `Class` object represents an array type, a primitive
 type, or void, then this method returns an array of length 0.

 

 The elements in the returned array are not sorted and are not in any
 particular order.

**返回**

- the array of `Field` objects representing the public fields

> *Since 1.1*
