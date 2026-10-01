---
id: "java-en-function-class-getclasses"
language: "java"
lang: "en"
category: "function"
name: "Class.getClasses"
signature: "public Class<?>[] getClasses()"
title: "Class.getClasses"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getClasses

```java
public Class<?>[] getClasses()
```

Returns an array containing `Class` objects representing all
 the public classes and interfaces that are members of the class
 represented by this `Class` object.  This includes public
 class and interface members inherited from superclasses and public class
 and interface members declared by the class.  This method returns an
 array of length 0 if this `Class` object has no public member
 classes or interfaces.  This method also returns an array of length 0 if
 this `Class` object represents a primitive type, an array
 class, or void.

**返回**

- the array of `Class` objects representing the public members of this class

> *Since 1.1*
