---
id: "java-en-function-javax-naming-spi-initialcontextfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.naming.spi.InitialContextFactory"
title: "InitialContextFactory"
directive: "type"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/InitialContextFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContextFactory

This interface represents a factory that creates an initial context.

 The JNDI framework allows for different initial context implementations
 to be specified at runtime.  The initial context is created using
 an initial context factory.
 An initial context factory must implement the InitialContextFactory
 interface, which provides a method for creating instances of initial
 context that implement the Context interface.
 In addition, the factory class must be public and must have a public
 constructor that accepts no arguments.

**参见**

- InitialContextFactoryBuilder
- NamingManager#getInitialContext
- javax.naming.InitialContext
- javax.naming.directory.InitialDirContext

> *Since 1.3*
