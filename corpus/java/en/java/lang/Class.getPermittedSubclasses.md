---
id: "java-en-function-class-getpermittedsubclasses"
language: "java"
lang: "en"
category: "function"
name: "Class.getPermittedSubclasses"
signature: "public Class<?>[] getPermittedSubclasses()"
title: "Class.getPermittedSubclasses"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getPermittedSubclasses

```java
public Class<?>[] getPermittedSubclasses()
```

Returns an array containing `Class` objects representing the
 direct subinterfaces or subclasses permitted to extend or
 implement this class or interface if it is sealed.  The order of such elements
 is unspecified. The array is empty if this sealed class or interface has no
 permitted subclass. If this `Class` object represents a primitive type,
 `void`, an array type, or a class or interface that is not sealed,
 that is `isSealed` returns `false`, then this method returns `null`.
 Conversely, if `isSealed` returns `true`, then this method
 returns a non-null value.

 For each class or interface `C` which is recorded as a permitted
 direct subinterface or subclass of this class or interface,
 this method attempts to obtain the `Class`
 object for `C` (using `getClassLoader() the defining class
 loader` of the current `Class` object).
 The `Class` objects which can be obtained and which are direct
 subinterfaces or subclasses of this class or interface,
 are indicated by elements of the returned array. If a `Class` object
 cannot be obtained, it is silently ignored, and not included in the result
 array.

**返回**

- an array of `Class` objects of the permitted subclasses of this class or interface, or `null` if this class or interface is not sealed.

> *Since 17*
