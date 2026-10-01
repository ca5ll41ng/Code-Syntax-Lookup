---
id: "java-en-function-javax-naming-directory-basicattribute"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.BasicAttribute"
title: "BasicAttribute"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/BasicAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicAttribute

This class provides a basic implementation of the `Attribute` interface.

 This implementation does not support the schema methods
 `getAttributeDefinition()` and `getAttributeSyntaxDefinition()`.
 They simply throw `OperationNotSupportedException`.
 Subclasses of `BasicAttribute` should override these methods if they
 support them.

 The `BasicAttribute` class by default uses `Object.equals()` to
 determine equality of attribute values when testing for equality or
 when searching for values, except when the value is an array.
 For an array, each element of the array is checked using `Object.equals()`.
 Subclasses of `BasicAttribute` can make use of schema information
 when doing similar equality checks by overriding methods
 in which such use of schema is meaningful.
 Similarly, the `BasicAttribute` class by default returns the values passed to its
 constructor and/or manipulated using the add/remove methods.
 Subclasses of `BasicAttribute` can override `get()` and `getAll()`
 to get the values dynamically from the directory (or implement
 the `Attribute` interface directly instead of subclassing `BasicAttribute`).

 Note that updates to `BasicAttribute` (such as adding or removing a value)
 does not affect the corresponding representation of the attribute
 in the directory.  Updates to the directory can only be effected
 using operations in the `DirContext` interface.

 A `BasicAttribute` instance is not synchronized against concurrent
 multithreaded access. Multiple threads trying to access and modify a
 `BasicAttribute` should lock the object.

> *Since 1.3*
