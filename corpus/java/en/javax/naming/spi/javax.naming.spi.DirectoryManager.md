---
id: "java-en-function-javax-naming-spi-directorymanager"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.DirectoryManager"
title: "DirectoryManager"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirectoryManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectoryManager

This class contains methods for supporting `DirContext`
 implementations.

 This class is an extension of `NamingManager`.  It contains methods
 for use by service providers for accessing object factories and
 state factories, and for getting continuation contexts for
 supporting federation.

 `DirectoryManager` is safe for concurrent access by multiple threads.

 Except as otherwise noted,
 a `Name`, `Attributes`, or environment parameter
 passed to any method is owned by the caller.
 The implementation will not modify the object or keep a reference
 to it, although it may keep a reference to a clone or copy.

**参见**

- DirObjectFactory
- DirStateFactory

> *Since 1.3*
