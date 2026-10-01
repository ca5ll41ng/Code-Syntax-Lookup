---
id: "java-en-function-javax-naming-spi-resolver"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.Resolver"
title: "Resolver"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/Resolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Resolver

This interface represents an "intermediate context" for name resolution.

 The Resolver interface contains methods that are implemented by contexts
 that do not support subtypes of Context, but which can act as
 intermediate contexts for resolution purposes.

 A `Name` parameter passed to any method is owned
 by the caller.  The service provider will not modify the object
 or keep a reference to it.
 A `ResolveResult` object returned by any
 method is owned by the caller.  The caller may subsequently modify it;
 the service provider may not.

> *Since 1.3*
