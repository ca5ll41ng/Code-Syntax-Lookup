---
id: "java-en-function-javax-naming-spi-namingmanager"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.NamingManager"
title: "NamingManager"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/NamingManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingManager

This class contains methods for creating context objects
 and objects referred to by location information in the naming
 or directory service.

 This class cannot be instantiated.  It has only static methods.

 The mention of URL in the documentation for this class refers to
 a URL string as defined by RFC 1738 and its related RFCs. It is
 any string that conforms to the syntax described therein, and
 may not always have corresponding support in the java.net.URL
 class or Web browsers.

 NamingManager is safe for concurrent access by multiple threads.

 Except as otherwise noted,
 a `Name` or environment parameter
 passed to any method is owned by the caller.
 The implementation will not modify the object or keep a reference
 to it, although it may keep a reference to a clone or copy.

> *Since 1.3*
