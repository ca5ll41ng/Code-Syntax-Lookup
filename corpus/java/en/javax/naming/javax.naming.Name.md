---
id: "java-en-function-javax-naming-name"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.Name"
title: "Name"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Name.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Name

The `Name` interface represents a generic name -- an ordered
 sequence of components.  It can be a composite name (names that
 span multiple namespaces), or a compound name (names that are
 used within individual hierarchical naming systems).

 

 There can be different implementations of `Name`; for example,
 composite names, URLs, or namespace-specific compound names.

 

 The components of a name are numbered.  The indexes of a name
 with N components range from 0 up to, but not including, N.  This
 range may be written as [0,N).
 The most significant component is at index 0.
 An empty name has no components.

 

 None of the methods in this interface accept null as a valid
 value for a parameter that is a name or a name component.
 Likewise, methods that return a name or name component never return null.

 

 An instance of a `Name` may not be synchronized against
 concurrent multithreaded access if that access is not read-only.

> *Since 1.3*
