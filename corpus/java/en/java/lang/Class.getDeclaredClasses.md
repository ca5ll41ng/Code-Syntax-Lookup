---
id: "java-en-function-class-getdeclaredclasses"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredClasses"
signature: "public Class<?>[] getDeclaredClasses()"
title: "Class.getDeclaredClasses"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredClasses

```java
public Class<?>[] getDeclaredClasses()
```

Returns an array of `Class` objects reflecting all the
 classes and interfaces declared as members of the class represented by
 this `Class` object. This includes public, protected, default
 (package) access, and private classes and interfaces declared by the
 class, but excludes inherited classes and interfaces.  This method
 returns an array of length 0 if the class declares no classes or
 interfaces as members, or if this `Class` object represents a
 primitive type, an array class, or void.

**返回**

- the array of `Class` objects representing all the declared members of this class

> *Since 1.1*
