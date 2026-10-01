---
id: "java-en-function-javax-naming-directory-attribute"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.directory.Attribute"
title: "Attribute"
directive: "type"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/Attribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attribute

This interface represents an attribute associated with a named object.

 In a directory, named objects can have associated with them
 attributes.  The `Attribute` interface represents an attribute associated
 with a named object.  An attribute contains 0 or more, possibly null, values.
 The attribute values can be ordered or unordered (see `isOrdered()`).
 If the values are unordered, no duplicates are allowed.
 If the values are ordered, duplicates are allowed.

 The content and representation of an attribute and its values is defined by
 the attribute's schema. The schema contains information
 about the attribute's syntax and other properties about the attribute.
 See `getAttributeDefinition()` and
 `getAttributeSyntaxDefinition()`
 for details regarding how to get schema information about an attribute
 if the underlying directory service supports schemas.

 Equality of two attributes is determined by the implementation class.
 A simple implementation can use `Object.equals()` to determine equality
 of attribute values, while a more sophisticated implementation might
 make use of schema information to determine equality.
 Similarly, one implementation might provide a static storage
 structure which simply returns the values passed to its
 constructor, while another implementation might define `get()` and
 `getAll()`.
 to get the values dynamically from the directory.

 Note that updates to `Attribute` (such as adding or removing a
 value) do not affect the corresponding representation of the attribute
 in the directory.  Updates to the directory can only be effected
 using operations in the `DirContext` interface.

**参见**

- BasicAttribute

> *Since 1.3*
