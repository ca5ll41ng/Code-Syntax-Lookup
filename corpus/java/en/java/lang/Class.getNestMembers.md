---
id: "java-en-function-class-getnestmembers"
language: "java"
lang: "en"
category: "function"
name: "Class.getNestMembers"
signature: "public Class<?>[] getNestMembers()"
title: "Class.getNestMembers"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getNestMembers

```java
public Class<?>[] getNestMembers()
```

Returns an array containing `Class` objects representing all the
 classes and interfaces that are members of the nest to which the class
 or interface represented by this `Class` object belongs.

 First, this method obtains the `getNestHost() nest host`,
 `H`, of the nest to which the class or interface represented by
 this `Class` object belongs. The zeroth element of the returned
 array is `H`.

 Then, for each class or interface `C` which is recorded by `H`
 as being a member of its nest, this method attempts to obtain the `Class`
 object for `C` (using `getClassLoader() the defining class
 loader` of the current `Class` object), and then obtains the
 `getNestHost() nest host` of the nest to which `C` belongs.
 The classes and interfaces which are recorded by `H` as being members
 of its nest, and for which `H` can be determined as their nest host,
 are indicated by subsequent elements of the returned array. The order of
 such elements is unspecified. Duplicates are permitted.

 

If this `Class` object represents a primitive type, an array type,
 or `void`, then this method returns a single-element array containing
 `this`.

 The returned array includes only the nest members recorded in the `NestMembers`
 attribute, and not any hidden classes that were added to the nest via
 `defineHiddenClass(byte[], boolean, MethodHandles.Lookup.ClassOption...)
 Lookup::defineHiddenClass`.

**返回**

- an array of all classes and interfaces in the same nest as this class or interface

**参见**

- #getNestHost()

> *Since 11*
