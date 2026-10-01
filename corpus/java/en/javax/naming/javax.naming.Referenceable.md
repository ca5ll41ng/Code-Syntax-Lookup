---
id: "java-en-function-javax-naming-referenceable"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.Referenceable"
title: "Referenceable"
directive: "type"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Referenceable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Referenceable

This interface is implemented by an object that can provide a
 Reference to itself.

 A Reference represents a way of recording address information about
 objects which themselves are not directly bound to the naming system.
 Such objects can implement the Referenceable interface as a way
 for programs that use that object to determine what its Reference is.
 For example, when binding an object, if an object implements the
 Referenceable interface, getReference() can be invoked on the object to
 get its Reference to use for binding.

**参见**

- Context#bind
- javax.naming.spi.NamingManager#getObjectInstance
- Reference

> *Since 1.3*
